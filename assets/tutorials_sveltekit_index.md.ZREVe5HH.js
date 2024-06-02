import{_ as e,o as a,c as t,R as s}from"./chunks/framework.UFCy2Zbw.js";const y=JSON.parse('{"title":"Build a Full-Stack SvelteKit Application","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/sveltekit/index.md","filePath":"tutorials/sveltekit/index.md","lastUpdated":1707371985000}'),l={name:"tutorials/sveltekit/index.md"},o=s(`<h1 id="build-a-full-stack-sveltekit-application" tabindex="-1">Build a Full-Stack SvelteKit Application <a class="header-anchor" href="#build-a-full-stack-sveltekit-application" aria-label="Permalink to &quot;Build a Full-Stack SvelteKit Application&quot;">​</a></h1><h3 id="create-a-simple-todo-app-with-remult-using-a-sveltekit" tabindex="-1">Create a simple todo app with Remult using a SvelteKit <a class="header-anchor" href="#create-a-simple-todo-app-with-remult-using-a-sveltekit" aria-label="Permalink to &quot;Create a simple todo app with Remult using a SvelteKit&quot;">​</a></h3><p>In this tutorial, we are going to create a simple app to manage a task list. We&#39;ll use <code>SvelteKit</code> for the UI &amp; the backend and Remult as our full-stack CRUD framework.</p><p>By the end of the tutorial, you should have a basic understanding of Remult and how to use it to accelerate and simplify full stack app development.</p><div class="tip custom-block"><p class="custom-block-title">You want to have a look at the end result ?</p><p>You can <code>degit</code> the final result and read the <code>README.md</code> file in the project to check it out.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npx</span><span style="color:#CE9178;"> degit</span><span style="color:#CE9178;"> remult/remult/examples/sveltekit-todo</span><span style="color:#CE9178;"> remult-sveltekit-todo</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#CE9178;"> remult-sveltekit-todo</span></span></code></pre></div></div><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>This tutorial assumes you are familiar with <code>SvelteKit</code>.</p><p>Before you begin, make sure you have <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a> and <a href="https://git-scm.com/" target="_blank" rel="noreferrer">git</a> installed.</p><h1 id="setup-for-the-tutorial" tabindex="-1">Setup for the Tutorial <a class="header-anchor" href="#setup-for-the-tutorial" aria-label="Permalink to &quot;Setup for the Tutorial&quot;">​</a></h1><p>This tutorial requires setting up a Sveltekit project, and a few lines of code to add Remult.</p><h2 id="step-by-step-setup" tabindex="-1">Step-by-step Setup <a class="header-anchor" href="#step-by-step-setup" aria-label="Permalink to &quot;Step-by-step Setup&quot;">​</a></h2><h3 id="create-a-sveltekit-project" tabindex="-1">Create a Sveltekit project <a class="header-anchor" href="#create-a-sveltekit-project" aria-label="Permalink to &quot;Create a Sveltekit project&quot;">​</a></h3><p>Create the new Sveltekit project.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> create</span><span style="color:#CE9178;"> svelte@latest</span><span style="color:#CE9178;"> remult-sveltekit-todo</span></span></code></pre></div><p>The command prompts you for information about features to include in the initial app project. Here are the answers used in this tutorial:</p><ol><li><strong>Which Svelte app template?</strong>: ... <code>Skeleton</code> Project</li><li><strong>Add type checking with TypeScript?</strong> ... Yes, using <code>TypeScript</code> syntax</li><li><strong>Select additional options</strong>: ... You may want to include <em>Prettier</em> and <em>ESLint</em> but the options in this step are purely optional.</li></ol><p>Once completed, change to the app directory:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#CE9178;"> remult-sveltekit-todo</span></span></code></pre></div><h3 id="install-required-packages-and-remult" tabindex="-1">Install required packages and Remult <a class="header-anchor" href="#install-required-packages-and-remult" aria-label="Permalink to &quot;Install required packages and Remult&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#CE9178;"> remult</span><span style="color:#569CD6;"> --save-dev</span></span></code></pre></div><h3 id="bootstrap-remult" tabindex="-1">Bootstrap Remult <a class="header-anchor" href="#bootstrap-remult" aria-label="Permalink to &quot;Bootstrap Remult&quot;">​</a></h3><ol><li><p>Open your IDE.</p></li><li><p>Create a remult api route like this:</p></li></ol><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-i1s46" id="tab-bdSy1wm" checked="checked"><label for="tab-bdSy1wm">src/routes/api/[...remult]/+server.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultSveltekit</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-sveltekit&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> _api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultSveltekit</span><span style="color:#D4D4D4;">({})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#D4D4D4;"> { </span><span style="color:#4FC1FF;">GET</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">POST</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">PUT</span><span style="color:#D4D4D4;">, </span><span style="color:#4FC1FF;">DELETE</span><span style="color:#D4D4D4;"> } = </span><span style="color:#9CDCFE;">_api</span></span></code></pre></div></div></div><p><em>Side node 1: we export <code>_api</code> as we will need it later.</em></p><p><em>Side node 2: We need an underscore as it&#39;s a special SvelteKit file. You can also create <code>remultSveltekit()</code> in another file and name it as you want.</em></p><h3 id="final-tweaks" tabindex="-1">Final tweaks <a class="header-anchor" href="#final-tweaks" aria-label="Permalink to &quot;Final tweaks&quot;">​</a></h3><p>Our full stack starter project is almost ready.</p><p>Remult makes use of decorators to enhance regular Typescript classes into entities. Add the following entry to the <code>compilerOptions</code> section of the <code>tsconfig.json</code> file to enable the use of decorators.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Pat7w" id="tab-gzUo-1s" checked="checked"><label for="tab-gzUo-1s">tsconfig.json</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dark-plus has-diff vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line diff add"><span style="color:#9CDCFE;">    &quot;experimentalDecorators&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div></div></div><h3 id="run-the-app" tabindex="-1">Run the app <a class="header-anchor" href="#run-the-app" aria-label="Permalink to &quot;Run the app&quot;">​</a></h3><p>Open a terminal and start the vite dev server.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> run</span><span style="color:#CE9178;"> dev</span></span></code></pre></div><p>The default &quot;Sveltekit&quot; app main screen should be available at the default Vite dev server address <a href="http://localhost:5173" target="_blank" rel="noreferrer">http://localhost:5173</a>.</p><h3 id="setup-completed" tabindex="-1">Setup completed <a class="header-anchor" href="#setup-completed" aria-label="Permalink to &quot;Setup completed&quot;">​</a></h3><p>At this point, our starter project is up and running. We are now ready to move to the <a href="./entities">next step of the tutorial</a> and start creating the task list app.</p>`,35),n=[o];function p(r,i,c,d,u,h){return a(),t("div",null,n)}const v=e(l,[["render",p]]);export{y as __pageData,v as default};
