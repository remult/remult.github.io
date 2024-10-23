import{_ as s,c as e,o as a,a5 as t}from"./chunks/framework.C7bC4sbb.js";const C=JSON.parse('{"title":"Rest Api","description":"","frontmatter":{"type":"lesson","title":"Rest Api","focus":"/backend/index.ts","template":"before-frontend"},"headers":[],"relativePath":"interactive/src/content/tutorial/1-basics/1-introduction/2-rest-api/content.md","filePath":"interactive/src/content/tutorial/1-basics/1-introduction/2-rest-api/content.md","lastUpdated":1723988490000}'),o={name:"interactive/src/content/tutorial/1-basics/1-introduction/2-rest-api/content.md"},n=t(`<h2 id="the-rest-api" tabindex="-1">The Rest Api <a class="header-anchor" href="#the-rest-api" aria-label="Permalink to &quot;The Rest Api&quot;">​</a></h2><p>For this tutorial, we&#39;ll use Express (Remult works with many JavaScript web frameworks including Express, Fastify, Next.js, Sveltekit, nuxt.js, Hapi, Hono, Nest, and Koa).</p><p>Open <code>backend/index.ts</code> and add the following lines to include the <code>Task</code> in the REST API:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;express&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-express&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;../shared/Task.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line highlighted"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  entities:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">],</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">})</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">api</span><span style="color:#D4D4D4;">)</span></span></code></pre></div><h3 id="code-explanation" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We import the necessary <code>remultExpress</code> module for integrating Remult with Express.</li><li>We import the <code>Task</code> entity from the <code>shared</code> folder.</li><li>We use the <code>remultExpress</code> function to set up the Remult REST API and register the <code>Task</code> entity in its <code>entities</code> array.</li><li>Finally, we tell Express to use the API with <code>app.use(api)</code>.</li></ul><h3 id="see-that-it-works" tabindex="-1">See that it works <a class="header-anchor" href="#see-that-it-works" aria-label="Permalink to &quot;See that it works&quot;">​</a></h3><p>Click on the <code>Test the Api</code> button in the preview window, you should see an empty JSON array in the result.</p><blockquote><p>You can also open the <code>network</code> tab in the developer tools and see the requests that are being sent to the nodejs server</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you right click on the <code>preview</code> window, and select <code>inspect</code>, you&#39;ll be able to run the api call directly from the developer tools console (at least on chrome)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">await</span><span style="color:#DCDCAA;"> fetch</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/api/tasks&#39;</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">result</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> result</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">json</span><span style="color:#D4D4D4;">())</span></span></code></pre></div></div>`,10),l=[n];function p(c,r,i,d,D,h){return a(),e("div",null,l)}const u=s(o,[["render",p]]);export{C as __pageData,u as default};