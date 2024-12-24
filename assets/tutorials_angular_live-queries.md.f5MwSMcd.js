import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.C7bC4sbb.js";const C=JSON.parse('{"title":"Live Queries","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/angular/live-queries.md","filePath":"tutorials/angular/live-queries.md","lastUpdated":1734589711000}'),l={name:"tutorials/angular/live-queries.md"},o=e(`<h1 id="live-queries" tabindex="-1">Live Queries <a class="header-anchor" href="#live-queries" aria-label="Permalink to &quot;Live Queries&quot;">​</a></h1><p>Our todo list app can have multiple users using it at the same time. However, changes made by one user are not seen by others unless they manually refresh the browser.</p><p>Let&#39;s add realtime multiplayer capabilities to this app.</p><h2 id="one-time-setup" tabindex="-1">One Time Setup <a class="header-anchor" href="#one-time-setup" aria-label="Permalink to &quot;One Time Setup&quot;">​</a></h2><p>We&#39;ll need angular to run it&#39;s change detection when we receive messages from the backend - to do that we&#39;ll add the following code to <code>AppComponent</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/app/app.component.ts</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Component</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">NgZone</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@angular/core&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult&quot;</span></span>
<span class="line highlighted"><span style="color:#6A9955;">//...</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> AppComponent</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#569CD6;">  constructor</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">zone</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">NgZone</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">apiClient</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">wrapMessageHandling</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">handler</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#9CDCFE;"> zone</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">run</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#DCDCAA;"> handler</span><span style="color:#D4D4D4;">())</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h2 id="realtime-updated-todo-list" tabindex="-1">Realtime updated todo list <a class="header-anchor" href="#realtime-updated-todo-list" aria-label="Permalink to &quot;Realtime updated todo list&quot;">​</a></h2><p>Let&#39;s switch from fetching Tasks once when the Angular component is loaded, and manually maintaining state for CRUD operations, to using a realtime updated live query subscription <strong>for both initial data fetching and subsequent state changes</strong>.</p><ol><li>Modify the contents of the <code>ngOnInit</code> method in the <code>Todo</code> component:</li></ol><p>Modify the <code>TodoComponent</code> with the following changes</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Component</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">OnDestroy</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">OnInit</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@angular/core&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">...</span></span>
<span class="line highlighted"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> TodoComponent</span><span style="color:#569CD6;"> implements</span><span style="color:#4EC9B0;"> OnInit</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">OnDestroy</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"><span style="color:#9CDCFE;">  taskRepo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">repo</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">  tasks</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">[] = []</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">  unsubscribe</span><span style="color:#D4D4D4;"> = () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"><span style="color:#DCDCAA;">  ngOnInit</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#569CD6;">    this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">unsubscribe</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">liveQuery</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">        limit:</span><span style="color:#B5CEA8;"> 20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        orderBy:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createdAt:</span><span style="color:#CE9178;"> &quot;asc&quot;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#6A9955;">        //where: { completed: true },</span></span>
<span class="line"><span style="color:#D4D4D4;">      })</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">subscribe</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">info</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">applyChanges</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">)))</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">  ngOnDestroy</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#569CD6;">    this</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">unsubscribe</span><span style="color:#D4D4D4;">()</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>Let&#39;s review the change:</p><ul><li>Instead of calling the <code>repository</code>&#39;s <code>find</code> method we now call the <code>liveQuery</code> method to define the query, and then call its <code>subscribe</code> method to establish a subscription which will update the Tasks state in realtime.</li><li>The <code>subscribe</code> method accepts a callback with an <code>info</code> object that has 3 members: <ul><li><code>items</code> - an up to date list of items representing the current result - it&#39;s useful for readonly use cases.</li><li><code>applyChanges</code> - a method that receives an array and applies the changes to it - we send that method to the <code>setTasks</code> state function, to apply the changes to the existing <code>tasks</code> state.</li><li><code>changes</code> - a detailed list of changes that were received</li></ul></li><li>The <code>subscribe</code> method returns an <code>unsubscribe</code> method, which we store in the <code>unsubscribe</code> member and call in the <code>ngOnDestroy</code> hook, so that it&#39;ll be called when the component unmounts.</li></ul><ol start="2"><li>As all relevant CRUD operations (made by all users) will <strong>immediately update the component&#39;s state</strong>, we should remove the manual adding of new Tasks to the component&#39;s state:</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">async</span><span style="color:#DCDCAA;"> addTask</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#C586C0;">  try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> newTask</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">insert</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">title:</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">newTaskTitle</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#6A9955;">    //this.tasks.push(newTask) &lt;-- this line is no longer needed</span></span>
<span class="line"><span style="color:#569CD6;">    this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">newTaskTitle</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#DCDCAA;">    alert</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ol start="3"><li>Optionally remove other redundant state changing code:</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">async</span><span style="color:#DCDCAA;"> deleteTask</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">   await</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">delete</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">);</span></span>
<span class="line highlighted"><span style="color:#6A9955;">   // this.tasks = this.tasks.filter(t =&gt; t !== task); &lt;-- this line is no longer needed</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>Open the todo app in two (or more) browser windows/tabs, make some changes in one window and notice how the others are updated in realtime.</p><div class="tip custom-block"><p class="custom-block-title">Under the hood</p><p>The default implementation of live-queries uses HTTP Server-Sent Events (SSE) to push realtime updates to clients, and stores live-query information in-memory.</p><p>For serverless environments <em>(or multi servers)</em>, live-query updates can be pushed using integration with third-party realtime providers, such as <a href="https://ably.com/" target="_blank" rel="noreferrer">Ably</a> (or others), and live-query information can be stored to any database supported by Remult.</p></div>`,19),p=[o];function t(c,r,D,i,y,d){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{C as __pageData,u as default};