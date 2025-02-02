"use strict";var d=Object.create;var r=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var g=(t,e)=>{for(var o in e)r(t,o,{get:e[o],enumerable:!0})},a=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of y(e))!h.call(t,n)&&n!==o&&r(t,n,{get:()=>e[n],enumerable:!(i=f(e,n))||i.enumerable});return t};var S=(t,e,o)=>(o=t!=null?d(w(t)):{},a(e||!t||!t.__esModule?r(o,"default",{value:t,enumerable:!0}):o,t)),v=t=>a(r({},"__esModule",{value:!0}),t);var A={};g(A,{default:()=>u});module.exports=v(A);var p=S(require("node:process"),1),c=require("node:util"),s=require("node:child_process"),x=(0,c.promisify)(s.execFile);async function l(t,{humanReadableOutput:e=!0}={}){if(p.default.platform!=="darwin")throw new Error("macOS only");let o=e?[]:["-ss"],{stdout:i}=await x("osascript",["-e",t,o]);return i.trim()}var m=require("@raycast/api");async function u(){await l(`
  tell application "System Events"
    set isGhosttyRunning to exists (processes where name is "Ghostty")
  end tell

  tell application "Ghostty"
    if not isGhosttyRunning then
      activate
    else
      -- If Ghostty is already running, activate Finder first then activate Ghostty and send Cmd+N to create new window
      tell application "Finder" to activate
      activate
      tell application "System Events"
        tell process "Ghostty"
          keystroke "t" using {command down}
        end tell
      end tell
    end if
  end tell`),await(0,m.popToRoot)()}
