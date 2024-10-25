import{_ as s,c as e,o as a,a5 as n}from"./chunks/framework.C7bC4sbb.js";const y=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/framework/vue.md","filePath":"docs/installation/framework/vue.md","lastUpdated":1729890666000}'),o={name:"docs/installation/framework/vue.md"},l=n(`<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="create-a-vue-project-with-vite" tabindex="-1">Create a Vue Project with Vite <a class="header-anchor" href="#create-a-vue-project-with-vite" aria-label="Permalink to &quot;Create a Vue Project with Vite&quot;">​</a></h2><p>To set up a new Vue project using Vite, run the following commands:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> init</span><span style="color:#569CD6;"> -y</span><span style="color:#CE9178;"> vue@latest</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#CE9178;"> remult-vue-project</span></span></code></pre></div><h2 id="install-remult" tabindex="-1">Install Remult <a class="header-anchor" href="#install-remult" aria-label="Permalink to &quot;Install Remult&quot;">​</a></h2><p>Install the latest version of Remult:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> install</span><span style="color:#CE9178;"> remult@latest</span></span></code></pre></div><h2 id="enable-typescript-decorators-in-vite" tabindex="-1">Enable TypeScript Decorators in Vite <a class="header-anchor" href="#enable-typescript-decorators-in-vite" aria-label="Permalink to &quot;Enable TypeScript Decorators in Vite&quot;">​</a></h2><p>To enable the use of decorators in your React app, modify the <code>vite.config.ts</code> file by adding the following to the <code>defineConfig</code> section:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// vite.config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">vue</span><span style="color:#D4D4D4;">()],</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  esbuild:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    tsconfigRaw:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      compilerOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        experimentalDecorators:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">      },</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    },</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span></code></pre></div><p>This configuration ensures that TypeScript decorators are enabled for the project.</p><h2 id="proxy-api-requests-from-vite-devserver-to-the-api-server" tabindex="-1">Proxy API Requests from Vite DevServer to the API Server <a class="header-anchor" href="#proxy-api-requests-from-vite-devserver-to-the-api-server" aria-label="Permalink to &quot;Proxy API Requests from Vite DevServer to the API Server&quot;">​</a></h2><p>In development, your React app will be served from <code>http://localhost:5173</code>, while the API server will run on <code>http://localhost:3002</code>. To allow the React app to communicate with the API server during development, use Vite&#39;s <a href="https://vitejs.dev/config/#server-proxy" target="_blank" rel="noreferrer">proxy</a> feature.</p><p>Add the following proxy configuration to the <code>vite.config.ts</code> file:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// vite.config.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">vue</span><span style="color:#D4D4D4;">()],</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  server:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">proxy:</span><span style="color:#D4D4D4;"> { </span><span style="color:#CE9178;">&quot;/api&quot;</span><span style="color:#9CDCFE;">:</span><span style="color:#CE9178;"> &quot;http://localhost:3002&quot;</span><span style="color:#D4D4D4;"> } },</span></span>
<span class="line"><span style="color:#9CDCFE;">  esbuild:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    tsconfigRaw:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      compilerOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        experimentalDecorators:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span></code></pre></div><p>This setup proxies all requests starting with <code>/api</code> from <code>http://localhost:5173</code> to your API server running at <code>http://localhost:3002</code>.</p><h2 id="configure-a-server" tabindex="-1">Configure a Server <a class="header-anchor" href="#configure-a-server" aria-label="Permalink to &quot;Configure a Server&quot;">​</a></h2><p>Now that the app is set up, <a href="./../server/">Select an API Server</a></p>`,18),t=[l];function p(r,c,i,d,D,h){return a(),e("div",null,t)}const C=s(o,[["render",p]]);export{y as __pageData,C as default};
