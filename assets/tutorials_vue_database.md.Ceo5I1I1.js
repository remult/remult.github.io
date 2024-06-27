import{_ as s,c as a,o as e,a5 as t}from"./chunks/framework.QXCuR9m2.js";const g=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/vue/database.md","filePath":"tutorials/vue/database.md","lastUpdated":1712482104000}'),n={name:"tutorials/vue/database.md"},o=t(`<h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-label="Permalink to &quot;Database&quot;">​</a></h1><p>Up until now the todo app has been using a plain JSON file to store the list of tasks. <strong>In production, we&#39;d like to use a <code>Postgres</code> database table instead.</strong></p><div class="tip custom-block"><p class="custom-block-title">Learn more</p><p>See the <a href="https://remult.dev/docs/quickstart.html#connecting-a-database" target="_blank" rel="noreferrer">Quickstart</a> article for the (long) list of relational and non-relational databases Remult supports.</p></div><div class="warning custom-block"><p class="custom-block-title">Don&#39;t have Postgres installed? Don&#39;t have to.</p><p>Don&#39;t worry if you don&#39;t have Postgres installed locally. In the next step of the tutorial, we&#39;ll configure the app to use Postgres in production, and keep using JSON files in our dev environment.</p><p><strong>Simply install <code>postgres-node</code> per step 1 below and move on to the <a href="./deployment">Deployment section of the tutorial</a>.</strong></p></div><ol><li><p>Install <code>postgres-node</code> (&quot;pg&quot;).</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#CE9178;"> pg</span></span></code></pre></div></li><li><p>Add the highlighted code to the <code>api</code> server module.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/server/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createPostgresDataProvider</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/postgres&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  dataProvider:</span><span style="color:#DCDCAA;"> createPostgresDataProvider</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    connectionString:</span><span style="color:#CE9178;"> &quot;your connection string&quot;</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div></li></ol>`,5),l=[o];function p(r,c,i,d,u,h){return e(),a("div",null,l)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};
