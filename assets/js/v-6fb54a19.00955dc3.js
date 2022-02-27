"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21096],{9383:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-6fb54a19",path:"/devices/MFKZQ01LM.html",title:"Xiaomi MFKZQ01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi MFKZQ01LM control via MQTT",description:"Integrate your Xiaomi MFKZQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: device stops sending messages/disconnects from network",slug:"troubleshooting-device-stops-sending-messages-disconnects-from-network",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Action_angle (numeric)",slug:"action-angle-numeric",children:[]},{level:3,title:"Action_from_side (numeric)",slug:"action-from-side-numeric",children:[]},{level:3,title:"Action_side (numeric)",slug:"action-side-numeric",children:[]},{level:3,title:"Action_to_side (numeric)",slug:"action-to-side-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MFKZQ01LM.md",git:{updatedTime:1645966219e3}}},75049:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(66252);const a=(0,o.uE)('<h1 id="xiaomi-mfkzq01lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-mfkzq01lm" aria-hidden="true">#</a> Xiaomi MFKZQ01LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MFKZQ01LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Mi/Aqara smart home cube</td></tr><tr><td>Exposes</td><td>battery, voltage, action_angle, action_from_side, action_side, action_to_side, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MFKZQ01LM.jpg" alt="Xiaomi MFKZQ01LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the back plate by using the included tool or a wedge to click it off. Press and hold the reset button inside the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the reset button to keep the light flashing, until the interview process finishes successfully.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network" aria-hidden="true">#</a> Troubleshooting: device stops sending messages/disconnects from network</h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.</li></ul>',8),n=(0,o.Uk)("More detailed information about this can be found "),d={href:"https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623",target:"_blank",rel:"noopener noreferrer"},c=(0,o.Uk)("here"),s=(0,o.Uk)("."),r=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),l=(0,o.Uk)("How to use device type specific configuration"),h=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-angle-numeric" aria-hidden="true">#</a> Action_angle (numeric)</h3><p>Value can be found in the published state on the <code>action_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-360</code> and the maximum value is <code>360</code>.</p><h3 id="action-from-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-from-side-numeric" aria-hidden="true">#</a> Action_from_side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_from_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-side-numeric" aria-hidden="true">#</a> Action_side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-to-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-to-side-numeric" aria-hidden="true">#</a> Action_to_side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_to_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>wakeup</code>, <code>fall</code>, <code>tap</code>, <code>slide</code>, <code>flip180</code>, <code>flip90</code>, <code>rotate_left</code>, <code>rotate_right</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),u={},m=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),u=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[n,(0,o._)("a",d,[c,(0,o.Wm)(i)]),s]),r,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(u,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[l])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);