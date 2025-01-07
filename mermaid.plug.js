var x=Object.defineProperty;var h=(e,t)=>{for(var o in t)x(e,o,{get:t[o],enumerable:!0})};var c=e=>{throw new Error("Not initialized yet")},l=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var d=new Map,u=0;l&&(globalThis.syscall=async(e,...t)=>await new Promise((o,n)=>{u++,d.set(u,{resolve:o,reject:n}),c({type:"sys",id:u,name:e,args:t})}));function p(e,t,o){l&&(c=o,self.addEventListener("message",n=>{(async()=>{let i=n.data;switch(i.type){case"inv":{let a=e[i.name];if(!a)throw new Error(`Function not loaded: ${i.name}`);try{let s=await Promise.resolve(a(...i.args||[]));c({type:"invr",id:i.id,result:s})}catch(s){console.error("An exception was thrown as a result of invoking function",i.name,"error:",s.message),c({type:"invr",id:i.id,error:s.message})}}break;case"sysr":{let a=i.id,s=d.get(a);if(!s)throw Error("Invalid request id");d.delete(a),i.error?s.reject(new Error(i.error)):s.resolve(i.result)}break}})().catch(console.error)}),c({type:"manifest",manifest:t}))}function v(e){let t=atob(e),o=t.length,n=new Uint8Array(o);for(let i=0;i<o;i++)n[i]=t.charCodeAt(i);return n}function f(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",o=e.byteLength;for(let n=0;n<o;n++)t+=String.fromCharCode(e[n]);return btoa(t)}async function b(e,t){if(typeof e!="string"){let o=new Uint8Array(await e.arrayBuffer()),n=o.length>0?f(o):void 0;t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:n},e=e.url}return syscall("sandboxFetch.fetch",e,t)}globalThis.nativeFetch=globalThis.fetch;function w(){globalThis.fetch=async function(e,t){let o=t&&t.body?f(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0,n=await b(e,t&&{method:t.method,headers:t.headers,base64Body:o});return new Response(n.base64Body?v(n.base64Body):null,{status:n.status,headers:n.headers})}}l&&w();typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});function r(e,...t){return globalThis.syscall(e,...t)}var m={};h(m,{applyAttributeExtractors:()=>E,getEnv:()=>L,getMode:()=>D,getSpaceConfig:()=>R,getVersion:()=>B,invokeCommand:()=>M,invokeFunction:()=>F,invokeSpaceFunction:()=>k,listCommands:()=>T,listSyscalls:()=>U,reloadConfig:()=>W,reloadPlugs:()=>K});function F(e,...t){return r("system.invokeFunction",e,...t)}function M(e,t){return r("system.invokeCommand",e,t)}function T(){return r("system.listCommands")}function U(){return r("system.listSyscalls")}function k(e,...t){return r("system.invokeSpaceFunction",e,...t)}function E(e,t,o){return r("system.applyAttributeExtractors",e,t,o)}async function R(e,t){return await r("system.getSpaceConfig",e)??t}function K(){return r("system.reloadPlugs")}function W(){return r("system.reloadConfig")}function L(){return r("system.getEnv")}function D(){return r("system.getMode")}function B(){return r("system.getVersion")}async function g(e){let t=await m.getSpaceConfig("mermaid"),o=t.version||"11.4.1",n=t.integrity||"sha256-Wo7JGCC9Va/vBJBoSJNpkQ5dbOcMgQOVLyfinT526Lw=";return{html:`<pre class="mermaid">${e.replaceAll("<","&lt;")}</pre>`,script:`
    loadJsByUrl("https://cdn.jsdelivr.net/npm/mermaid@${o}/dist/mermaid.min.js", "${n}").then(() => {
      mermaid.init().then(updateHeight);
    });
    document.addEventListener("click", () => {
      api({type: "blur"});
    });
    `}}var y={mermaidWidget:g},P={name:"mermaid",version:.1,imports:["https://get.silverbullet.md/global.plug.json"],functions:{mermaidWidget:{path:"./mermaid.ts:widget",codeWidget:"mermaid"}},assets:{}},Te={manifest:P,functionMapping:y};p(y,P,self.postMessage);export{Te as plug};
