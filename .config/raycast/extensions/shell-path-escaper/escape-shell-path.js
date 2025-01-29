"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/escape-shell-path.ts
var escape_shell_path_exports = {};
__export(escape_shell_path_exports, {
  default: () => Command
});
module.exports = __toCommonJS(escape_shell_path_exports);
var import_api = require("@raycast/api");
async function Command() {
  try {
    const clipboardContent = (await import_api.Clipboard.readText())?.trim();
    if (!clipboardContent) {
      await (0, import_api.showToast)(import_api.Toast.Style.Failure, "No content in clipboard");
      return;
    }
    const escapedPath = clipboardContent.replace(/([ !"#$&'()*,:;<=>?@[\\\]^`{|}~])/g, "\\$1");
    await import_api.Clipboard.copy(escapedPath);
    await (0, import_api.showToast)(import_api.Toast.Style.Success, "Escaped path copied to clipboard");
  } catch (error) {
    console.error("Error:", error);
    await (0, import_api.showToast)(import_api.Toast.Style.Failure, "Failed to escape path");
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9EZXZlbG9wZXIvZ2l0aHViL2V4dGVuc2lvbnMvZXh0ZW5zaW9ucy9zaGVsbC1wYXRoLWVzY2FwZXIvc3JjL2VzY2FwZS1zaGVsbC1wYXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDbGlwYm9hcmQsIHNob3dUb2FzdCwgVG9hc3QgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIHRyeSB7XG4gICAgLy8gUmVhZCB0aGUgY2xpcGJvYXJkIGNvbnRlbnRcbiAgICBjb25zdCBjbGlwYm9hcmRDb250ZW50ID0gKGF3YWl0IENsaXBib2FyZC5yZWFkVGV4dCgpKT8udHJpbSgpO1xuICAgIGlmICghY2xpcGJvYXJkQ29udGVudCkge1xuICAgICAgYXdhaXQgc2hvd1RvYXN0KFRvYXN0LlN0eWxlLkZhaWx1cmUsIFwiTm8gY29udGVudCBpbiBjbGlwYm9hcmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRXNjYXBlIHRoZSBzdHJpbmcgZm9yIHNoZWxsXG4gICAgY29uc3QgZXNjYXBlZFBhdGggPSBjbGlwYm9hcmRDb250ZW50LnJlcGxhY2UoLyhbICFcIiMkJicoKSosOjs8PT4/QFtcXFxcXFxdXmB7fH1+XSkvZywgXCJcXFxcJDFcIik7XG5cbiAgICAvLyBDb3B5IHRoZSBlc2NhcGVkIHN0cmluZyBiYWNrIHRvIHRoZSBjbGlwYm9hcmRcbiAgICBhd2FpdCBDbGlwYm9hcmQuY29weShlc2NhcGVkUGF0aCk7XG5cbiAgICBhd2FpdCBzaG93VG9hc3QoVG9hc3QuU3R5bGUuU3VjY2VzcywgXCJFc2NhcGVkIHBhdGggY29waWVkIHRvIGNsaXBib2FyZFwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICBhd2FpdCBzaG93VG9hc3QoVG9hc3QuU3R5bGUuRmFpbHVyZSwgXCJGYWlsZWQgdG8gZXNjYXBlIHBhdGhcIik7XG4gIH1cbn1cblxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTRDO0FBRTVDLGVBQU8sVUFBaUM7QUFDdEMsTUFBSTtBQUVGLFVBQU0sb0JBQW9CLE1BQU0scUJBQVUsU0FBUyxJQUFJLEtBQUs7QUFDNUQsUUFBSSxDQUFDLGtCQUFrQjtBQUNyQixnQkFBTSxzQkFBVSxpQkFBTSxNQUFNLFNBQVMseUJBQXlCO0FBQzlEO0FBQUEsSUFDRjtBQUdBLFVBQU0sY0FBYyxpQkFBaUIsUUFBUSxzQ0FBc0MsTUFBTTtBQUd6RixVQUFNLHFCQUFVLEtBQUssV0FBVztBQUVoQyxjQUFNLHNCQUFVLGlCQUFNLE1BQU0sU0FBUyxrQ0FBa0M7QUFBQSxFQUN6RSxTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sVUFBVSxLQUFLO0FBQzdCLGNBQU0sc0JBQVUsaUJBQU0sTUFBTSxTQUFTLHVCQUF1QjtBQUFBLEVBQzlEO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
