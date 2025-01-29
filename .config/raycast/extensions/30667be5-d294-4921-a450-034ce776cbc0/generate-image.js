"use strict";var N=Object.create;var x=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var K=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty;var h=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),J=(e,t)=>{for(var r in t)x(e,r,{get:t[r],enumerable:!0})},S=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of K(t))!Y.call(e,o)&&o!==r&&x(e,o,{get:()=>t[o],enumerable:!(n=X(t,o))||n.enumerable});return e};var Q=(e,t,r)=>(r=e!=null?N(H(e)):{},S(t||!e||!e.__esModule?x(r,"default",{value:e,enumerable:!0}):r,e)),ee=e=>S(x({},"__esModule",{value:!0}),e);var b=h((Ee,D)=>{"use strict";var v=require("fs"),A;function ue(){try{return v.statSync("/.dockerenv"),!0}catch{return!1}}function le(){try{return v.readFileSync("/proc/self/cgroup","utf8").includes("docker")}catch{return!1}}D.exports=()=>(A===void 0&&(A=ue()||le()),A)});var R=h((Se,_)=>{"use strict";var de=require("os"),pe=require("fs"),O=b(),$=()=>{if(process.platform!=="linux")return!1;if(de.release().toLowerCase().includes("microsoft"))return!O();try{return pe.readFileSync("/proc/version","utf8").toLowerCase().includes("microsoft")?!O():!1}catch{return!1}};process.env.__IS_WSL_TEST__?_.exports=$:_.exports=$()});var z=h((Fe,I)=>{"use strict";I.exports=(e,t,r)=>{let n=o=>Object.defineProperty(e,t,{value:o,enumerable:!0,writable:!0});return Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get(){let o=r();return n(o),o},set(o){n(o)}}),e}});var j=h((Ue,Z)=>{var xe=require("path"),he=require("child_process"),{promises:C,constants:V}=require("fs"),g=R(),ge=b(),P=z(),q=xe.join(__dirname,"xdg-open"),{platform:l,arch:L}=process,me=(()=>{let e="/mnt/",t;return async function(){if(t)return t;let r="/etc/wsl.conf",n=!1;try{await C.access(r,V.F_OK),n=!0}catch{}if(!n)return e;let o=await C.readFile(r,{encoding:"utf8"}),a=/(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(o);return a?(t=a.groups.mountPoint.trim(),t=t.endsWith("/")?t:`${t}/`,t):e}})(),M=async(e,t)=>{let r;for(let n of e)try{return await t(n)}catch(o){r=o}throw r},m=async e=>{if(e={wait:!1,background:!1,newInstance:!1,allowNonzeroExitCode:!1,...e},Array.isArray(e.app))return M(e.app,s=>m({...e,app:s}));let{name:t,arguments:r=[]}=e.app||{};if(r=[...r],Array.isArray(t))return M(t,s=>m({...e,app:{name:s,arguments:r}}));let n,o=[],a={};if(l==="darwin")n="open",e.wait&&o.push("--wait-apps"),e.background&&o.push("--background"),e.newInstance&&o.push("--new"),t&&o.push("-a",t);else if(l==="win32"||g&&!ge()){let s=await me();n=g?`${s}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`:`${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`,o.push("-NoProfile","-NonInteractive","\u2013ExecutionPolicy","Bypass","-EncodedCommand"),g||(a.windowsVerbatimArguments=!0);let i=["Start"];e.wait&&i.push("-Wait"),t?(i.push(`"\`"${t}\`""`,"-ArgumentList"),e.target&&r.unshift(e.target)):e.target&&i.push(`"${e.target}"`),r.length>0&&(r=r.map(d=>`"\`"${d}\`""`),i.push(r.join(","))),e.target=Buffer.from(i.join(" "),"utf16le").toString("base64")}else{if(t)n=t;else{let s=!__dirname||__dirname==="/",i=!1;try{await C.access(q,V.X_OK),i=!0}catch{}n=process.versions.electron||l==="android"||s||!i?"xdg-open":q}r.length>0&&o.push(...r),e.wait||(a.stdio="ignore",a.detached=!0)}e.target&&o.push(e.target),l==="darwin"&&r.length>0&&o.push("--args",...r);let u=he.spawn(n,o,a);return e.wait?new Promise((s,i)=>{u.once("error",i),u.once("close",d=>{if(e.allowNonzeroExitCode&&d>0){i(new Error(`Exited with code ${d}`));return}s(u)})}):(u.unref(),u)},B=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a `target`");return m({...t,target:e})},ye=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a `name`");let{arguments:r=[]}=t||{};if(r!=null&&!Array.isArray(r))throw new TypeError("Expected `appArguments` as Array type");return m({...t,app:{name:e,arguments:r}})};function W(e){if(typeof e=="string"||Array.isArray(e))return e;let{[L]:t}=e;if(!t)throw new Error(`${L} is not supported`);return t}function E({[l]:e},{wsl:t}){if(t&&g)return W(t);if(!e)throw new Error(`${l} is not supported`);return W(e)}var y={};P(y,"chrome",()=>E({darwin:"google chrome",win32:"chrome",linux:["google-chrome","google-chrome-stable","chromium"]},{wsl:{ia32:"/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",x64:["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe","/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]}}));P(y,"firefox",()=>E({darwin:"firefox",win32:"C:\\Program Files\\Mozilla Firefox\\firefox.exe",linux:"firefox"},{wsl:"/mnt/c/Program Files/Mozilla Firefox/firefox.exe"}));P(y,"edge",()=>E({darwin:"microsoft edge",win32:"msedge",linux:["microsoft-edge","microsoft-edge-dev"]},{wsl:"/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"}));B.apps=y;B.openApp=ye;Z.exports=B});var Ae={};J(Ae,{default:()=>we});module.exports=ee(Ae);var f=require("@raycast/api");var te=typeof btoa=="function",w=typeof Buffer=="function",_e=typeof TextDecoder=="function"?new TextDecoder:void 0,F=typeof TextEncoder=="function"?new TextEncoder:void 0,re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p=Array.prototype.slice.call(re),Ce=(e=>{let t={};return e.forEach((r,n)=>t[r]=n),t})(p);var c=String.fromCharCode.bind(String),Pe=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,t=r=>r)=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),oe=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_");var ne=e=>{let t,r,n,o,a="",u=e.length%3;for(let s=0;s<e.length;){if((r=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255||(o=e.charCodeAt(s++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|o,a+=p[t>>18&63]+p[t>>12&63]+p[t>>6&63]+p[t&63]}return u?a.slice(0,u-3)+"===".substring(u):a},T=te?e=>btoa(e):w?e=>Buffer.from(e,"binary").toString("base64"):ne,se=w?e=>Buffer.from(e).toString("base64"):e=>{let r=[];for(let n=0,o=e.length;n<o;n+=4096)r.push(c.apply(null,e.subarray(n,n+4096)));return T(r.join(""))};var ae=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?c(192|t>>>6)+c(128|t&63):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|t&63)}},ie=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ce=e=>e.replace(ie,ae),U=w?e=>Buffer.from(e,"utf8").toString("base64"):F?e=>se(F.encode(e)):e=>T(ce(e)),fe=(e,t=!1)=>t?oe(U(e)):U(e),k=e=>fe(e,!0);var G=Q(j()),we=async()=>{let e=(0,f.getPreferenceValues)(),t;try{t=await(0,f.getSelectedText)()}catch{await(0,f.showHUD)("\u274C Screenshot generation failed. Please make sure you've selected the text you want to take a screenshot of.");return}let r=k(t);await(0,f.showToast)({style:f.Toast.Style.Animated,title:"Generating screenshot"});let n=`https://ray.so/#theme=${e.theme}&background=${e.background}&darkMode=${e.darkMode}&padding=${e.padding}&code=${r}`;(0,G.default)(n)};
