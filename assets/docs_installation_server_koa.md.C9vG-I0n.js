import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.C7bC4sbb.js";const u=JSON.parse('{"title":"Koa","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/server/koa.md","filePath":"docs/installation/server/koa.md","lastUpdated":1729890666000}'),o={name:"docs/installation/server/koa.md"},l=e(`<h1 id="koa" tabindex="-1">Koa <a class="header-anchor" href="#koa" aria-label="Permalink to &quot;Koa&quot;">​</a></h1><h3 id="install-required-packages" tabindex="-1">Install Required Packages <a class="header-anchor" href="#install-required-packages" aria-label="Permalink to &quot;Install Required Packages&quot;">​</a></h3><p>To set up your Koa server with Remult, run the following commands to install the necessary packages:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> install</span><span style="color:#CE9178;"> koa</span><span style="color:#CE9178;"> koa-bodyparser</span><span style="color:#CE9178;"> remult</span></span>
<span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> install</span><span style="color:#569CD6;"> --save-dev</span><span style="color:#CE9178;"> @types/koa</span><span style="color:#CE9178;"> @types/koa-bodyparser</span><span style="color:#CE9178;"> tsx</span></span></code></pre></div><h3 id="bootstrap-remult-in-the-backend" tabindex="-1">Bootstrap Remult in the Backend <a class="header-anchor" href="#bootstrap-remult-in-the-backend" aria-label="Permalink to &quot;Bootstrap Remult in the Backend&quot;">​</a></h3><p>Remult is integrated into your backend as middleware for Koa.</p><ol><li><p><strong>Create the API File</strong></p><p>Create a new <code>api.ts</code> file in the <code>src/server/</code> folder with the following code to set up the Remult middleware:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/server/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createRemultServer</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/server&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">createRemultServer</span><span style="color:#D4D4D4;">()</span></span></code></pre></div></li><li><p><strong>Register the Middleware</strong></p><p>Update the <code>index.ts</code> file in your <code>src/server/</code> folder to include the Remult middleware. Add the following lines:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/server/index.ts</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#569CD6;"> *</span><span style="color:#C586C0;"> as</span><span style="color:#9CDCFE;"> koa</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;koa&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#569CD6;"> *</span><span style="color:#C586C0;"> as</span><span style="color:#9CDCFE;"> bodyParser</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;koa-bodyparser&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">api</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;./api.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> koa</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#DCDCAA;">bodyParser</span><span style="color:#D4D4D4;">()) </span><span style="color:#6A9955;">// Enables JSON body parsing for API requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">next</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> r</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#9CDCFE;"> api</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">handle</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">request</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// Handle API requests with Remult</span></span>
<span class="line"><span style="color:#C586C0;">  if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">    ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">body</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span></span>
<span class="line"><span style="color:#9CDCFE;">    ctx</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">response</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">status</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">r</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">statusCode</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    await</span><span style="color:#DCDCAA;"> next</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// If not handled by Remult, pass on to the next middleware</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">listen</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">3002</span><span style="color:#D4D4D4;">, () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Server started on port 3002&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">ESM Configuration</p><p>In this tutorial, we are using ECMAScript modules (<code>esm</code>) for the Node.js server. When importing files, you must include the <code>.js</code> suffix (as shown in the <code>import { api } from &quot;./api.js&quot;</code> statement).</p><p>Additionally, make sure to set <code>&quot;type&quot;: &quot;module&quot;</code> in your <code>package.json</code> file.</p></div></li></ol><h4 id="create-the-server-s-typescript-configuration" tabindex="-1">Create the Server&#39;s TypeScript Configuration <a class="header-anchor" href="#create-the-server-s-typescript-configuration" aria-label="Permalink to &quot;Create the Server&#39;s TypeScript Configuration&quot;">​</a></h4><p>In the root folder, create a TypeScript configuration file named <code>tsconfig.server.json</code> to manage the server&#39;s settings:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;experimentalDecorators&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;skipLibCheck&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;esModuleInterop&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;outDir&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;dist&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;rootDir&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;src&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;module&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;nodenext&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;include&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;src/server/**/*&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;src/shared/**/*&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>This configuration enables TypeScript decorators, ensures compatibility with ECMAScript modules, and specifies the file paths for the server and shared code.</p><h4 id="create-an-npm-script-to-start-the-api-server" tabindex="-1">Create an <code>npm</code> Script to Start the API Server <a class="header-anchor" href="#create-an-npm-script-to-start-the-api-server" aria-label="Permalink to &quot;Create an \`npm\` Script to Start the API Server&quot;">​</a></h4><p>To simplify the development process, add a new script in your <code>package.json</code> file to start the Koa server in development mode:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// package.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">&quot;dev-node&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;tsx watch --env-file=.env --tsconfig tsconfig.server.json src/server&quot;</span></span></code></pre></div><ul><li><code>tsx</code>: A TypeScript Node.js execution environment that watches for file changes and automatically restarts the server on each save.</li><li><code>--env-file=.env</code>: Ensures environment variables are loaded from the <code>.env</code> file.</li><li><code>--tsconfig tsconfig.server.json</code>: Specifies the TypeScript configuration file for the server.</li></ul><h4 id="start-the-koa-server" tabindex="-1">Start the Koa Server <a class="header-anchor" href="#start-the-koa-server" aria-label="Permalink to &quot;Start the Koa Server&quot;">​</a></h4><p>Finally, open a new terminal and run the following command to start the development server:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> run</span><span style="color:#CE9178;"> dev-node</span></span></code></pre></div><p>The server will now run on port 3002. <code>tsx</code> will watch for any file changes, automatically restarting the server whenever updates are made.</p>`,19),p=[l];function t(r,c,i,D,y,d){return n(),a("div",null,p)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};
