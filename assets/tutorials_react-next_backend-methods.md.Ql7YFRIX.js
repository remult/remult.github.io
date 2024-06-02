import{_ as s,o,c as e,R as a}from"./chunks/framework.UFCy2Zbw.js";const h=JSON.parse('{"title":"Backend methods","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/react-next/backend-methods.md","filePath":"tutorials/react-next/backend-methods.md","lastUpdated":1715855157000}'),n={name:"tutorials/react-next/backend-methods.md"},l=a(`<h1 id="backend-methods" tabindex="-1">Backend methods <a class="header-anchor" href="#backend-methods" aria-label="Permalink to &quot;Backend methods&quot;">​</a></h1><p>When performing operations on multiple entity objects, performance considerations may necessitate running them on the server. <strong>With Remult, moving client-side logic to run on the server is a simple refactoring</strong>.</p><h2 id="set-all-tasks-as-un-completed" tabindex="-1">Set All Tasks as Un/completed <a class="header-anchor" href="#set-all-tasks-as-un-completed" aria-label="Permalink to &quot;Set All Tasks as Un/completed&quot;">​</a></h2><p>Let&#39;s add two buttons to the todo app: &quot;Set all as completed&quot; and &quot;Set all as uncompleted&quot;.</p><ol><li><p>Add a <code>setAllCompleted</code> async function to the <code>Todo</code> function component, which accepts a <code>completed</code> boolean argument and sets the value of the <code>completed</code> field of all the tasks accordingly.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> setAllCompleted</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> task</span><span style="color:#569CD6;"> of</span><span style="color:#C586C0;"> await</span><span style="color:#9CDCFE;"> taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">()) {</span></span>
<span class="line"><span style="color:#C586C0;">    await</span><span style="color:#9CDCFE;"> taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">save</span><span style="color:#D4D4D4;">({ ...</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>The <code>for</code> loop iterates the array of <code>Task</code> objects returned from the backend, and saves each task back to the backend with a modified value in the <code>completed</code> field.</p></li><li><p>Add the two buttons to the return section of the <code>Todo</code> component, just before the closing <code>&lt;/main&gt;</code> tag. Both of the buttons&#39; <code>onClick</code> events will call the <code>setAllCompleted</code> method with the appropriate value of the <code>completed</code> argument.</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#9CDCFE;"> onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#DCDCAA;"> setAllCompleted</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Set All Completed</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#9CDCFE;"> onClick</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#DCDCAA;"> setAllCompleted</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">)</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Set All Uncompleted</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span></code></pre></div></li></ol><p>Make sure the buttons are working as expected before moving on to the next step.</p><h2 id="refactor-from-front-end-to-back-end" tabindex="-1">Refactor from Front-end to Back-end <a class="header-anchor" href="#refactor-from-front-end-to-back-end" aria-label="Permalink to &quot;Refactor from Front-end to Back-end&quot;">​</a></h2><p>With the current state of the <code>setAllCompleted</code> function, each modified task being saved causes an API <code>PUT</code> request handled separately by the server. As the number of tasks in the todo list grows, this may become a performance issue.</p><p>A simple way to prevent this is to expose an API endpoint for <code>setAllCompleted</code> requests, and run the same logic on the server instead of the client.</p><ol><li>Create a new <code>TasksController</code> class, in the <code>shared</code> folder, and refactor the <code>for</code> loop from the <code>setAllCompleted</code> function of the <code>Todo</code> function component into a new, <code>static</code>, <code>setAllCompleted</code> method in the <code>TasksController</code> class, which will run on the server.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/shared/TasksController.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">BackendMethod</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;./Task&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> TasksController</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#569CD6;">  static</span><span style="color:#569CD6;"> async</span><span style="color:#DCDCAA;"> setAllCompleted</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> taskRepo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">repo</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">    for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> task</span><span style="color:#569CD6;"> of</span><span style="color:#C586C0;"> await</span><span style="color:#9CDCFE;"> taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">()) {</span></span>
<span class="line"><span style="color:#C586C0;">      await</span><span style="color:#9CDCFE;"> taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">save</span><span style="color:#D4D4D4;">({ ...</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>The <code>@BackendMethod</code> decorator tells Remult to expose the method as an API endpoint (the <code>allowed</code> property will be discussed later on in this tutorial).</p><p><strong>Unlike the front-end <code>Remult</code> object, the server implementation interacts directly with the database.</strong></p><ol start="2"><li>Register <code>TasksController</code> by adding it to the <code>controllers</code> array of the <code>options</code> object passed to <code>createRemultServer()</code>, in the server&#39;s <code>api</code> module:</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">TasksController</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;./shared/TaskController&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultNextApp</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  controllers:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">TasksController</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><ol start="3"><li>Replace the <code>for</code> iteration in the <code>setAllCompleted</code> function of the <code>Todo</code> component with a call to the <code>setAllCompleted</code> method in the <code>TasksController</code>.</li></ol><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#DCDCAA;"> setAllCompleted</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">boolean</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#C586C0;">  await</span><span style="color:#9CDCFE;"> TasksController</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">setAllCompleted</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Import TasksController</p><p>Remember to add an import of <code>TasksController</code> in <code>src/components/todo.tsx</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>With Remult backend methods, argument types are compile-time checked. 👍</p></div><p>After the browser refreshed, the <em>&quot;Set all...&quot;</em> buttons function exactly the same, but much faster.</p>`,20),t=[l];function p(c,r,D,d,i,y){return o(),e("div",null,t)}const m=s(n,[["render",p]]);export{h as __pageData,m as default};
