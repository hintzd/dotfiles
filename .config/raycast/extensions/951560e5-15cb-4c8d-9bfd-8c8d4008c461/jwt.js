"use strict";var e=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var i=(r,o)=>{for(var l in o)e(r,l,{get:o[l],enumerable:!0})},n=(r,o,l,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of c(o))!d.call(r,t)&&t!==l&&e(r,t,{get:()=>o[t],enumerable:!(p=a(o,t))||p.enumerable});return r};var s=r=>n(e({},"__esModule",{value:!0}),r);var m={};i(m,{default:()=>f});module.exports=s(m);var u=require("@raycast/api"),f=async()=>{(0,u.open)("devutils://jwt?clipboard")};
