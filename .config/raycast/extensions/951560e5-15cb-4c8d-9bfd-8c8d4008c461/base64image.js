"use strict";var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var c=(o,e)=>{for(var a in e)l(o,a,{get:e[a],enumerable:!0})},d=(o,e,a,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of s(e))!u.call(o,r)&&r!==a&&l(o,r,{get:()=>e[r],enumerable:!(t=p(e,r))||t.enumerable});return o};var m=o=>d(l({},"__esModule",{value:!0}),o);var b={};c(b,{default:()=>n});module.exports=m(b);var i=require("@raycast/api"),n=async()=>{(0,i.open)("devutils://base64image?clipboard")};
