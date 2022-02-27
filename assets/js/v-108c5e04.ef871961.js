"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51892],{67458:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-108c5e04",path:"/devices/ZK03840.html",title:"Viessmann ZK03840 control via MQTT",lang:"en-US",frontmatter:{title:"Viessmann ZK03840 control via MQTT",description:"Integrate your Viessmann ZK03840 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-04-29T17:11:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Installing the TRV",slug:"installing-the-trv",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Window_open (binary)",slug:"window-open-binary",children:[]},{level:3,title:"Window_open_force (binary)",slug:"window-open-force-binary",children:[]},{level:3,title:"Keypad_lockout (enum)",slug:"keypad-lockout-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZK03840.md",git:{updatedTime:1645966219e3}}},92247:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var d=o(66252);const i=(0,d.uE)('<h1 id="viessmann-zk03840" tabindex="-1"><a class="header-anchor" href="#viessmann-zk03840" aria-hidden="true">#</a> Viessmann ZK03840</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZK03840</td></tr><tr><td>Vendor</td><td>Viessmann</td></tr><tr><td>Description</td><td>ViCare radiator thermostat valve</td></tr><tr><td>Exposes</td><td>climate (occupied_heating_setpoint, local_temperature, system_mode), window_open, window_open_force, keypad_lockout, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZK03840.jpg" alt="Viessmann ZK03840"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="installing-the-trv" tabindex="-1"><a class="header-anchor" href="#installing-the-trv" aria-hidden="true">#</a> Installing the TRV</h3><ul><li>install the correct adaptor on the valve</li><li>open cover (push clip on bottom and push front side to slide open)</li><li>insert batteries (<code>--</code> should be on the display)</li><li>press the button on the top (<code>--</code> + <code>((•))</code> should be on the display)</li><li>wait for the device to pair, it took about 2 minutes for me to get the success message in Zigbee2MQTT</li><li>install the TRV on the adaptor (push hard until you feel a click, rotate the TRV until display faces up)</li><li>press the button on the top for 3 seconds (motor will turn, <code>21°</code> + <code>((•))</code> should be on the display)</li><li>close the cover</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),a=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the themrostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>sleep</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary" aria-hidden="true">#</a> Window_open (binary)</h3><p>Detected by sudden temperature drop or set manually.. Value can be found in the published state on the <code>window_open</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> window_open is ON, if <code>false</code> OFF.</p><h3 id="window-open-force-binary" tabindex="-1"><a class="header-anchor" href="#window-open-force-binary" aria-hidden="true">#</a> Window_open_force (binary)</h3><p>Manually set window_open, ~1 minute to take affect.. Value can be found in the published state on the <code>window_open_force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_force&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window_open_force is ON, if <code>false</code> OFF.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad_lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),l={},n=(0,o(83744).Z)(l,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);