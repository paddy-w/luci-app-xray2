/**
 * @license
 * Copyright 2020 Xingwang Liao <kuoruan@gmail.com>
 *
 * Licensed to the public under the MIT License.
 */
"use strict";"require fs";"require uci";"require ui";return L.view.extend({load:function(){return uci.load("xray").then((function(){var r=uci.get("xray","main","config_file");return r||(r="/var/etc/xray/xray.main.json"),Promise.all([Promise.resolve(r),L.resolveDefault(fs.read(r),"")])}))},render:function(r){var e=void 0===r?[]:r,a=e[0],t=void 0===a?"":a,o=e[1],i=void 0===o?"":o;return E([E("h2","%s - %s".format(_("XRay"),_("About"))),E("div",{style:"border-radius: 10px; background-color: #fff; box-sizing: border-box;padding: 20px;"},[E("p",_("LuCI support for xray-core and v2ray-core.")),E("p",_("Version: %s").format("1.0.2"+"-"+"0")),E("p",_("Author: %s").format("BI7PRK")),E("p",_("Source: %s").format('<a href="https://github.com/BI7PRK/luci-app-xray" target="_blank">https://github.com/BI7PRK/luci-app-xray</a>')),E("p",_("Latest: %s").format('<a href="https://github.com/BI7PRK/luci-app-xray/releases/latest" target="_blank">https://github.com/BI7PRK/luci-app-xray/releases/latest</a>')),E("p",'Source from: <a href="https://github.com/kuoruan/luci-app-v2ray" target="_blank">https://github.com/kuoruan/luci-app-v2ray</a>'),E("p",_("Current Config File: %s").format(t)),E("textarea",{style:"background-color: #363636;color: #fff;width: 100%;height:580px;",readonly:"readonly"},i||_("Failed to open file."))])])},handleReset:null,handleSave:null,handleSaveApply:null});