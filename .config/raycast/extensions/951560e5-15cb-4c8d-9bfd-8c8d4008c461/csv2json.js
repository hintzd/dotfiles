"use strict";var t=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var a=(r,o)=>{for(var s in o)t(r,s,{get:o[s],enumerable:!0})},d=(r,o,s,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of p(o))!u.call(r,l)&&l!==s&&t(r,l,{get:()=>o[l],enumerable:!(c=n(o,l))||c.enumerable});return r};var i=r=>d(t({},"__esModule",{value:!0}),r);var m={};a(m,{default:()=>f});module.exports=i(m);var e=require("@raycast/api"),f=async()=>{(0,e.open)("devutils://csv2json?clipboard")};
