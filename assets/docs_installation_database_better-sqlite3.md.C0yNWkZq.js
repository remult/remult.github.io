import{_ as s,c as e,o as a,a5 as t}from"./chunks/framework.C7bC4sbb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/database/better-sqlite3.md","filePath":"docs/installation/database/better-sqlite3.md","lastUpdated":1729890666000}'),n={name:"docs/installation/database/better-sqlite3.md"},l=t(`<p>Here’s the polished version of the <strong>Better-sqlite3</strong> setup:</p><h3 id="better-sqlite3" tabindex="-1">Better-sqlite3 <a class="header-anchor" href="#better-sqlite3" aria-label="Permalink to &quot;Better-sqlite3&quot;">​</a></h3><p>To use <strong>Better-sqlite3</strong> as the database provider for your Remult application, follow these steps:</p><h3 id="step-1-install-better-sqlite3" tabindex="-1">Step 1: Install Better-sqlite3 <a class="header-anchor" href="#step-1-install-better-sqlite3" aria-label="Permalink to &quot;Step 1: Install Better-sqlite3&quot;">​</a></h3><p>Run the following command to install the <code>better-sqlite3</code> package:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#CE9178;"> better-sqlite3</span></span></code></pre></div><h3 id="step-2-configure-the-dataprovider" tabindex="-1">Step 2: Configure the <code>dataProvider</code> <a class="header-anchor" href="#step-2-configure-the-dataprovider" aria-label="Permalink to &quot;Step 2: Configure the \`dataProvider\`&quot;">​</a></h3><p>In your <code>api.ts</code> or server file, configure the <code>dataProvider</code> to connect to the SQLite database using <strong>Better-sqlite3</strong>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;express&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-express&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">SqlDatabase</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> Database</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;better-sqlite3&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">BetterSqlite3DataProvider</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-better-sqlite3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#DCDCAA;">  remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    dataProvider:</span><span style="color:#569CD6;"> new</span><span style="color:#DCDCAA;"> SqlDatabase</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#569CD6;">      new</span><span style="color:#DCDCAA;"> BetterSqlite3DataProvider</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Database</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./mydb.sqlite&#39;</span><span style="color:#D4D4D4;">)),</span></span>
<span class="line"><span style="color:#D4D4D4;">    ),</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><p>This setup connects to an SQLite database stored in the <code>mydb.sqlite</code> file. The <code>BetterSqlite3DataProvider</code> is wrapped inside the <code>SqlDatabase</code> class to allow Remult to interact with SQLite efficiently.</p>`,10),o=[l];function p(r,c,i,D,d,C){return a(),e("div",null,o)}const u=s(n,[["render",p]]);export{h as __pageData,u as default};