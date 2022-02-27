"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59162],{85080:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2fd74182",path:"/guide/configuration/logging.html",title:"Logging",lang:"en-US",frontmatter:{sidebarDepth:1,pageClass:"content-page"},excerpt:"",headers:[],filePathRelative:"guide/configuration/logging.md",git:{updatedTime:1645966219e3}}},6511:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(66252);const t=(0,e._)("h1",{id:"logging",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#logging","aria-hidden":"true"},"#"),(0,e.Uk)(" Logging")],-1),o=(0,e._)("p",null,"Zigbee2MQTT can output logs to the console, a logfile or a (remote) Syslog server.",-1),l=(0,e.Uk)("The log-level can be adjusted at runtime, see "),p=(0,e.Uk)("MQTT Topics and Messages"),c=(0,e.Uk)(" for details."),r=(0,e.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: Logging level, options: debug, info, warn, error (default: info)</span>\n  <span class="token key atrule">log_level</span><span class="token punctuation">:</span> info\n  <span class="token comment"># Optional: log timestamp format (default: shown below)</span>\n  <span class="token key atrule">timestamp_format</span><span class="token punctuation">:</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span>\n  <span class="token comment"># Optional: Location of log directory (default: shown below)</span>\n  <span class="token key atrule">log_directory</span><span class="token punctuation">:</span> data/log/%TIMESTAMP%\n  <span class="token comment"># Optional: Log file name, can also contain timestamp, e.g.: zigbee2mqtt_%TIMESTAMP%.log (default: shown below)</span>\n  <span class="token key atrule">log_file</span><span class="token punctuation">:</span> log.txt\n  <span class="token comment"># Optional: Rotate log every 10MB around 3 files (default: true)</span>\n  <span class="token key atrule">log_rotation</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token comment"># Optional: Output location of the log (default: shown below), leave empty to supress logging (log_output: [])</span>\n  <span class="token comment"># possible options: &#39;console&#39;, &#39;file&#39;, &#39;syslog&#39;</span>\n  <span class="token key atrule">log_output</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> console\n    <span class="token punctuation">-</span> file\n  <span class="token comment"># Create a symlink called &quot;current&quot; in the log directory which points to the latests log directory. (default: false)</span>\n  <span class="token key atrule">log_symlink_current</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token comment"># Optional: syslog configuration, skip values or entirely to use defaults. Only use when &#39;syslog&#39; in &#39;log_output&#39; (see above)</span>\n  <span class="token key atrule">log_syslog</span><span class="token punctuation">:</span>\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost <span class="token comment"># The host running syslogd, defaults to localhost.</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">123</span> <span class="token comment"># The port on the host that syslog is running on, defaults to syslogd&#39;s default port.</span>\n    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> tcp4 <span class="token comment"># The network protocol to log over (e.g. tcp4, udp4, tls4, unix, unix-connect, etc).</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> /dev/log <span class="token comment"># The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).</span>\n    <span class="token key atrule">pid</span><span class="token punctuation">:</span> process.pid <span class="token comment"># PID of the process that log messages are coming from (Default process.pid).</span>\n    <span class="token key atrule">facility</span><span class="token punctuation">:</span> local0 <span class="token comment"># Syslog facility to use (Default: local0).</span>\n    <span class="token key atrule">localhost</span><span class="token punctuation">:</span> localhost <span class="token comment"># Host to indicate that log messages are coming from (Default: localhost).</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token number">5424</span> <span class="token comment"># The type of the syslog protocol to use (Default: BSD, also valid: 5424).</span>\n    <span class="token key atrule">app_name</span><span class="token punctuation">:</span> Zigbee2MQTT <span class="token comment"># The name of the application (Default: Zigbee2MQTT).</span>\n    <span class="token key atrule">eol</span><span class="token punctuation">:</span> <span class="token string">&#39;\\n&#39;</span> <span class="token comment"># The end of line character to be added to the end of the message (Default: Message without modifications).</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>',1),u={},i=(0,a(83744).Z)(u,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,o,(0,e._)("p",null,[l,(0,e.Wm)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request"},{default:(0,e.w5)((()=>[p])),_:1}),c]),r],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);