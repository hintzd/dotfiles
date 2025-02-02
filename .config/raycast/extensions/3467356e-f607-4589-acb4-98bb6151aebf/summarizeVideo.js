"use strict";var i=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var u=(o,e)=>{for(var t in e)i(o,t,{get:e[t],enumerable:!0})},p=(o,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of h(e))!c.call(o,n)&&n!==t&&i(o,n,{get:()=>e[n],enumerable:!(a=r(e,n))||a.enumerable});return o};var l=o=>p(i({},"__esModule",{value:!0}),o);var f={};u(f,{default:()=>m});module.exports=l(f);var s=require("@raycast/api"),d=require("react/jsx-runtime"),w=`
# The Extension has changed

We introduced new commands to summarize YouTube videos with AI. The one you used to use is now deprecated and split into three. You can choose one of the following commands:

- Summarize with Raycast: \`summarizeVideoWithRaycastAI\`
- Summarize with OpenAI: \`summarizeVideoWithOpenAI\`
- Summarize with Anthropic: \`summarizeVideoWithAnthropic\`

You have to migrate your settings to the new commands. Open the extensions preferences and update the command accordingly. You can find your old settings in the deprecated command.

If you only use one command you can also disbale the others in the preferences.
`;function m(){return(0,d.jsx)(s.Detail,{markdown:w,navigationTitle:"The Extension has changed"})}
