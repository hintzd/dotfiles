"use strict";var t=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var a=(r,o)=>{for(var l in o)t(r,l,{get:o[l],enumerable:!0})},i=(r,o,l,u)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of n(o))!p.call(r,e)&&e!==l&&t(r,e,{get:()=>o[e],enumerable:!(u=d(o,e))||u.enumerable});return r};var s=r=>i(t({},"__esModule",{value:!0}),r);var m={};a(m,{default:()=>f});module.exports=s(m);var c=require("@raycast/api"),f=async()=>{(0,c.open)("devutils://urlencode?clipboard")};
