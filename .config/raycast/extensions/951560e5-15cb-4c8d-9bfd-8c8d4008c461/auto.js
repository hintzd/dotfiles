"use strict";var u=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var i=(r,o)=>{for(var l in o)u(r,l,{get:o[l],enumerable:!0})},n=(r,o,l,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of c(o))!d.call(r,t)&&t!==l&&u(r,t,{get:()=>o[t],enumerable:!(a=p(o,t))||a.enumerable});return r};var s=r=>n(u({},"__esModule",{value:!0}),r);var m={};i(m,{default:()=>f});module.exports=s(m);var e=require("@raycast/api"),f=async()=>{(0,e.open)("devutils://auto?clipboard")};
