"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92212],{69315:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-4e543e58",path:"/devices/TS0601_thermostat.html",title:"TuYa TS0601_thermostat control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_thermostat control via MQTT",description:"Integrate your TuYa TS0601_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Local temperature",slug:"local-temperature",children:[]},{level:3,title:"Controlling device specific features",slug:"controlling-device-specific-features",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Switch",slug:"switch-1",children:[]},{level:3,title:"Position (numeric)",slug:"position-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Switch",slug:"switch-2",children:[]},{level:3,title:"Switch",slug:"switch-3",children:[]},{level:3,title:"Away_preset_days (numeric)",slug:"away-preset-days-numeric",children:[]},{level:3,title:"Boost_time (numeric)",slug:"boost-time-numeric",children:[]},{level:3,title:"Comfort_temperature (numeric)",slug:"comfort-temperature-numeric",children:[]},{level:3,title:"Eco_temperature (numeric)",slug:"eco-temperature-numeric",children:[]},{level:3,title:"Force (enum)",slug:"force-enum",children:[]},{level:3,title:"Max_temperature (numeric)",slug:"max-temperature-numeric",children:[]},{level:3,title:"Min_temperature (numeric)",slug:"min-temperature-numeric",children:[]},{level:3,title:"Away_preset_temperature (numeric)",slug:"away-preset-temperature-numeric",children:[]},{level:3,title:"Programming_mode (composite)",slug:"programming-mode-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_thermostat.md",git:{updatedTime:1645966219e3}}},81019:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var o=a(66252);const s=(0,o.uE)('<h1 id="tuya-ts0601-thermostat" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-thermostat" aria-hidden="true">#</a> TuYa TS0601_thermostat</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_thermostat</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Radiator valve with thermostat</td></tr><tr><td>Exposes</td><td>lock (state), switch (state), battery_low, position, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, away_mode, preset), away_preset_days, boost_time, comfort_temperature, eco_temperature, force, max_temperature, min_temperature, away_preset_temperature, programming_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat.jpg" alt="TuYa TS0601_thermostat"></td></tr><tr><td>White-label</td><td>Moes HY368, Moes HY369RT, SHOJZJ 378RT, Silvercrest TVR01</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>While pairing, keep the valve close to the coordinator.</p><ol><li><em>Turn the display on</em>: Short press home (🏠).</li><li><em>Enter settings</em>: Long press home (🏠) for 3sec.</li><li><em>Select WiFi settings</em>: Press the plus button (➕) button 4 times to see the digital <strong><code>5</code></strong> on the right hand side and the blinking WiFi logo.</li><li><em>Enter WiFi settings</em>: Press home (🏠) once again. Now only WiFi logo is showing without blinking.</li><li><em>Enable pairing mode</em>: Long press home (🏠). WiFi logo is now blinking.</li><li><em>Keep display on</em>: Touch home (🏠) every few seconds.</li></ol><h3 id="local-temperature" tabindex="-1"><a class="header-anchor" href="#local-temperature" aria-hidden="true">#</a> Local temperature</h3><p>If you&#39;d like to force device to send local_temperature you can use this MQTT command:</p><ul><li><code>topic</code>: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration</li><li><code>payload</code>: YOUR_CURRENT_CALIBRATION_VALUE</li></ul><p>YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value. After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.</p><h3 id="controlling-device-specific-features" tabindex="-1"><a class="header-anchor" href="#controlling-device-specific-features" aria-hidden="true">#</a> Controlling device specific features</h3><ul><li><p>If all you need is to control on and off, you can set &quot;force&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. The payload values are: open -&gt; fully opens valve and stays there close -&gt; fully closes valve and stays there normal -&gt; normal valve operation</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>Use topic <code>zigbee2mqtt/FRIENDLY_NAME/set/schedule</code> to set the schedule of the device with 6 timeslots on workdays or holidays (e.g. weekend). Example payload values are:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;workdays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;holidays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>You can set &quot;week&quot; schedule pattern with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. The payload values are: 5+2 -&gt; to be used when workdays for example are monday-friday and saturday &amp; sunday are holidays 6+1 -&gt; to be used when workdays for example are monday-saturday and sunday is a holiday 7 -&gt; to be used when workdays schedule will be used for the whole week</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;week&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5+2&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>You can set &quot;boost time&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. But be aware that it rounds the values down to multiple of 100.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;boost_time&quot;</span><span class="token operator">:</span> <span class="token number">200</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>You can set &quot;comfort temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;comfort_temperature&quot;</span><span class="token operator">:</span> <span class="token number">21</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>You can set &quot;eco temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eco_temperature&quot;</span><span class="token operator">:</span> <span class="token number">17</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',13),n=(0,o.Uk)("This device supports OTA updates, for more information see "),c=(0,o.Uk)("OTA updates"),p=(0,o.Uk)("."),r=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="switch-1" tabindex="-1"><a class="header-anchor" href="#switch-1" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>, <code>away_mode</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device, in the <code>heat</code> mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode <code>auto</code> instead setting the desired temperature.. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>auto</code>, <code>off</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>schedule</code>, <code>manual</code>, <code>boost</code>, <code>complex</code>, <code>comfort</code>, <code>eco</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li><li><code>away_mode</code>: Away mode. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;away_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="switch-2" tabindex="-1"><a class="header-anchor" href="#switch-2" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>auto_lock</code> property (value is <code>AUTO</code> or <code>MANUAL</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_lock&quot;: &quot;AUTO&quot;}</code>, <code>{&quot;auto_lock&quot;: &quot;MANUAL&quot;}</code> or <code>{&quot;auto_lock&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-3" tabindex="-1"><a class="header-anchor" href="#switch-3" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-preset-days-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-days-numeric" aria-hidden="true">#</a> Away_preset_days (numeric)</h3><p>Away preset days. Value can be found in the published state on the <code>away_preset_days</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_days&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="boost-time-numeric" tabindex="-1"><a class="header-anchor" href="#boost-time-numeric" aria-hidden="true">#</a> Boost_time (numeric)</h3><p>Boost time. Value can be found in the published state on the <code>boost_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric" aria-hidden="true">#</a> Comfort_temperature (numeric)</h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric" aria-hidden="true">#</a> Eco_temperature (numeric)</h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum" aria-hidden="true">#</a> Force (enum)</h3><p>Force the valve position. Value can be found in the published state on the <code>force</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>open</code>, <code>close</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max_temperature (numeric)</h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min_temperature (numeric)</h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="away-preset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-temperature-numeric" aria-hidden="true">#</a> Away_preset_temperature (numeric)</h3><p>Away preset temperature. Value can be found in the published state on the <code>away_preset_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="programming-mode-composite" tabindex="-1"><a class="header-anchor" href="#programming-mode-composite" aria-hidden="true">#</a> Programming_mode (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;undefined&quot;: {&quot;week&quot;: VALUE, &quot;workdays_schedule&quot;: VALUE, &quot;holidays_schedule&quot;: VALUE}}</code></p><ul><li><code>week</code> (enum): Week format user for schedule. Allowed values: <code>5+2</code>, <code>6+1</code>, <code>7</code></li><li><code>workdays_schedule</code> (text): undefined.</li><li><code>holidays_schedule</code> (text): undefined.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',39),i={},u=(0,a(83744).Z)(i,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("p",null,[n,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[c])),_:1}),p]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);