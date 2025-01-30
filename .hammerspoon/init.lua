------------------ Hyper Key ------------------
local hyper = { "cmd", "alt", "ctrl", "shift" }

-- Load HyperKey
local HyperKey = hs.loadSpoon("HyperKey")
hyperKey = HyperKey:new(hyper)

-- Bind Applications
-- I am linking hotkeys with raycast and using hyperkey as a look up

hyperKey
	:bind("W")
	:toApplication("/Applications/Warp.app")
	:bind("Z")
	:toApplication("/Applications/Zotero.app")
	:bind("R")
	:toApplication("/Applications/Raycast.app")
	:bind("O")
	:toApplication("/Applications/Obsidian.app")
	:bind("A")
	:toApplication("/Applications/Arc.app")
	:bind("S")
	:toFunction("Spark", function()
		hs.application.launchOrFocus("/Applications/Spark Desktop.app")
	end)

--	:bind("7")
--	:toFunction("Show Message", function()
--		hs.alert.show("foo")
--	end)

-- Bind Functions
local function reloadHammerspoon()
	hs.application.launchOrFocus("Hammerspoon")
	hs.reload()
end

--hyperKey
--  :bind('h'):toFunction("Reload Hammerspoon", reloadHammerspoon)
--  :bind('l'):toFunction("Lock screen", hs.caffeinate.startScreensaver)

-- Adjust popup delay (default is 250ms)
hyperKey = HyperKey:new(hyper, { overlayTimeoutMs = 1000 })

------------------ Super Key ------------------
-- Define Super Key (Spacebar hold mapped to cmd + alt + ctrl)
local super = { "cmd", "alt", "ctrl" }

-- Load HyperKey Spoon
local HyperKey = hs.loadSpoon("HyperKey")

-- Create Super Key object
superKey = HyperKey:new(super)

-- Bind Super Key to Applications
superKey
	:bind("h")
	:toFunction("Reload Hammerspoon", reloadHammerspoon)
	:bind("l")
	:toFunction("Lock screen", hs.caffeinate.startScreensaver)
	:bind("P")
	:toFunction("Escape Path", function()
		hs.execute("node ~/Developer/scripts/escape-path-shell.js", true)
	end)
-- Adjust the popup delay for the Super Key menu (default is 250ms)
superKey = HyperKey:new(super, { overlayTimeoutMs = 250 }) -- Popup appears after 500ms
