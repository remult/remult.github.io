import{_ as s,o as a,c as l,R as e}from"./chunks/framework.UFCy2Zbw.js";const u=JSON.parse('{"title":"Allowed","description":"","frontmatter":{},"headers":[],"relativePath":"docs/allowed.md","filePath":"docs/allowed.md","lastUpdated":1701358198000}'),o={name:"docs/allowed.md"},n=e(`<h1 id="allowed" tabindex="-1">Allowed <a class="header-anchor" href="#allowed" aria-label="Permalink to &quot;Allowed&quot;">​</a></h1><p>Throughout the api you&#39;ll see methods that use the <code>Allowed</code> data type, for example <code>allowApiRead</code> etc...</p><p>The <code>Allowed</code> data type can be set to one of the following value:</p><ul><li>true/false</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#C8C8C8;">  allowApiRead</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ul><li>a Role - Checks if the current user has this role.</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#C8C8C8;">  allowApiRead</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;admin&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>or with a constant</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#C8C8C8;">  allowApiRead</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">Roles</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">admin</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ul><li>An Array of Roles - checks if the current user has at least one of the roles in the array</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#C8C8C8;">  allowApiRead</span><span style="color:#D4D4D4;">: [</span><span style="color:#9CDCFE;">Roles</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">admin</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Roles</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">productManager</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ul><li>A function that get&#39;s a <code>remult</code> object as a parameter and returns true or false</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{ </span><span style="color:#C8C8C8;">allowApiRead</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">Allow</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authenticated</span><span style="color:#D4D4D4;"> } }</span></span></code></pre></div><p>or:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{ </span><span style="color:#C8C8C8;">allowApiRead</span><span style="color:#D4D4D4;">: () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;superman&#39;</span><span style="color:#D4D4D4;"> } }</span></span></code></pre></div><h1 id="allowedforinstance" tabindex="-1">AllowedForInstance <a class="header-anchor" href="#allowedforinstance" aria-label="Permalink to &quot;AllowedForInstance&quot;">​</a></h1><p>In some cases, the allowed can be evaluated with regards to a specific instance, for example <code>allowApiUpdate</code> can consider specific row values. The Allowed for Instance method accepts two parameters:</p><ol><li>The relevant <code>remult</code> object</li><li>The relevant entity instance</li></ol><p>For Example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Entity</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;(</span><span style="color:#CE9178;">&quot;tasks&quot;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#DCDCAA;">    allowApiUpdate</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isAllowed</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;admin&quot;</span><span style="color:#D4D4D4;">) &amp;&amp; !</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">!.</span><span style="color:#9CDCFE;">completed</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div>`,20),p=[n];function t(c,r,D,d,i,y){return a(),l("div",null,p)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};