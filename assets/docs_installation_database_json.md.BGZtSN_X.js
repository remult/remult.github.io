import{_ as s,c as a,o as e,a5 as n}from"./chunks/framework.C7bC4sbb.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/database/json.md","filePath":"docs/installation/database/json.md","lastUpdated":1729890666000}'),o={name:"docs/installation/database/json.md"},l=n(`<h2 id="json-files" tabindex="-1">JSON Files <a class="header-anchor" href="#json-files" aria-label="Permalink to &quot;JSON Files&quot;">​</a></h2><p>You can store data in JSON files using Remult. Here&#39;s how to configure your server:</p><h3 id="step-1-configure-the-dataprovider" tabindex="-1">Step 1: Configure the <code>dataProvider</code> <a class="header-anchor" href="#step-1-configure-the-dataprovider" aria-label="Permalink to &quot;Step 1: Configure the \`dataProvider\`&quot;">​</a></h3><p>In your <code>index.ts</code> (or server file), configure the <code>dataProvider</code> to use JSON files as the storage mechanism:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &quot;express&quot;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/remult-express&quot;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">JsonDataProvider</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult&quot;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">JsonEntityFileStorage</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/server&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#DCDCAA;">  remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">    dataProvider</span><span style="color:#9CDCFE;">:</span><span style="color:#569CD6;"> async</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line highlighted"><span style="color:#569CD6;">      new</span><span style="color:#DCDCAA;"> JsonDataProvider</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> JsonEntityFileStorage</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;./db&quot;</span><span style="color:#D4D4D4;">)) </span><span style="color:#6A9955;">// Data will be stored in the &#39;db&#39; folder</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><h3 id="explanation" tabindex="-1">Explanation: <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation:&quot;">​</a></h3><ul><li><strong><code>JsonDataProvider</code></strong>: This is the data provider that will store your data in JSON format.</li><li><strong><code>JsonEntityFileStorage</code></strong>: Specifies the directory where the JSON files will be stored (in this case, <code>./db</code>).</li><li><strong><code>&quot;./db&quot;</code></strong>: The path where JSON files for entities will be created. Ensure the folder exists or it will be created automatically.</li></ul><p>This configuration allows you to store and manage your application data in JSON files, ideal for small projects or quick setups.</p>`,8),t=[l];function p(r,i,c,d,D,y){return e(),a("div",null,t)}const u=s(o,[["render",p]]);export{C as __pageData,u as default};