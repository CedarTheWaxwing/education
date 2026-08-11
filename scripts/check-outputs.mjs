function run(code) {
  const lines = []
  const sandboxConsole = {
    log: (...args) => {
      lines.push(args.map((v) => {
        if (v === null) return 'null'
        if (v === undefined) return 'undefined'
        return String(v)
      }).join(' '))
    },
  }
  return Promise.resolve()
    .then(() => {
      const result = new Function('console', code)(sandboxConsole)
      return result && typeof result.then === 'function' ? result : undefined
    })
    .then(() => new Promise(r => setTimeout(r, 0)))
    .then(() => new Promise(r => setTimeout(r, 20)))
    .then(() => lines.join('\n'))
}

const nl = '\n'
const cases = [
  ['const colors=["red","green","blue"];const first=colors[0];const last=colors[colors.length-1];console.log(first,last,colors.length)', 'red blue 3'],
  ['const queue=["a","b"];queue.push("c");queue.unshift("z");queue.pop();console.log(queue.join(","))', 'z,a,b'],
  ['const nums=[1,2,3,4,5];const doubled=nums.map(n=>n*2);const evens=nums.filter(n=>n%2===0);const firstOverThree=nums.find(n=>n>3);console.log(doubled.join(","),evens.join(","),firstOverThree)', '2,4,6,8,10 2,4 4'],
  ['const player={name:"Sam",score:10};const json=JSON.stringify(player);const again=JSON.parse(json);console.log(json,again.name,again.score)', '{"name":"Sam","score":10} Sam 10'],
  ['const stamp=new Date("2026-08-11T00:00:00.000Z");const y=stamp.getUTCFullYear();const m=stamp.getUTCMonth()+1;const d=stamp.getUTCDate();console.log(y,m,d)', '2026 8 11'],
  ['function later(value,cb){setTimeout(()=>cb(value),0)};later("done",(msg)=>console.log(msg));console.log("first")', 'first\ndone'],
  ['console.log("start");Promise.resolve("ok").then(v=>console.log(v))', 'start\nok'],
  ['async function loadName(){return await Promise.resolve("Nova")};loadName().then(name=>console.log("hi",name))', 'hi Nova'],
  ['async function readSafe(){try{await Promise.reject(new Error("boom"))}catch(err){return "recovered:"+err.message}};readSafe().then(msg=>console.log(msg))', 'recovered:boom'],
  ['async function fakeFetch(url){return{ok:true,async json(){return{url,status:"ok"}}}};async function load(){const res=await fakeFetch("/api/ping");const data=await res.json();return data.status+":"+data.url};load().then(text=>console.log(text))', 'ok:/api/ping'],
  ['console.log("A");Promise.resolve().then(()=>console.log("B"));setTimeout(()=>console.log("C"),0)', 'A\nB\nC'],
  ['function validate(form){const errors=[];if(!form.email.trim())errors.push("email required");else if(!form.email.includes("@"))errors.push("email invalid");if(!form.name.trim())errors.push("name required");return errors};console.log(validate({name:"",email:"x"}).join(",")||"ok");console.log(validate({name:"Ada",email:"ada@ex.com"}).join(",")||"ok")', 'email invalid,name required\nok'],
  [
    `const stack=["Error: boom","    at broken (app.js:10:5)","    at main (app.js:20:1)","    at node:internal/x:1:1"].join(${JSON.stringify(nl)});const message=stack.split(${JSON.stringify(nl)})[0].slice("Error: ".length);const topFrame=stack.split(${JSON.stringify(nl)}).find(l=>l.includes("app.js"));console.log(message, topFrame.trim())`,
    'boom at broken (app.js:10:5)',
  ],
  [
    'function summarize(lines){const seen={};let total=0;let entries=0;for(const raw of lines){const line=raw.trim();if(!line)continue;const [nameText,countText]=line.split(",");const name=nameText.trim().toLowerCase();const count=Number(String(countText).trim());if(Number.isNaN(count))continue;entries+=1;total+=count;seen[name]=true}return{entries,total,names:Object.keys(seen).sort().join(",")}};const raw=["  Alice, 3 ","","bob,2","Alice, 1","bad,x"];const result=summarize(raw);console.log(result.entries,result.total,result.names)',
    '3 6 alice,bob',
  ],
]

let failed = 0
for (const [code, expected] of cases) {
  const got = await run(code)
  if (got !== expected) {
    failed++
    console.log('FAIL', JSON.stringify(got), 'vs', JSON.stringify(expected))
  } else {
    console.log('OK')
  }
}
process.exit(failed ? 1 : 0)
