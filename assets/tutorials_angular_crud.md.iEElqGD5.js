import{_ as s,o as a,c as n,R as l}from"./chunks/framework.UFCy2Zbw.js";const h=JSON.parse('{"title":"CRUD Operations","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/angular/crud.md","filePath":"tutorials/angular/crud.md","lastUpdated":1677081217000}'),o={name:"tutorials/angular/crud.md"},p=l(`<h1 id="crud-operations" tabindex="-1">CRUD Operations <a class="header-anchor" href="#crud-operations" aria-label="Permalink to &quot;CRUD Operations&quot;">​</a></h1><h2 id="adding-new-tasks" tabindex="-1">Adding new tasks <a class="header-anchor" href="#adding-new-tasks" aria-label="Permalink to &quot;Adding new tasks&quot;">​</a></h2><p>Now that we can see the list of tasks, it&#39;s time to add a few more.</p><ol><li>Add a <code>newTaskTitle</code> field and an <code>addTask</code> method to the <code>ToDoComponent</code></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> TodoComponent</span><span style="color:#569CD6;"> implements</span><span style="color:#4EC9B0;"> OnInit</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  newTaskTitle</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line highlighted"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> addTask</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#C586C0;">    try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> newTask</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">insert</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">title:</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">newTaskTitle</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#569CD6;">      this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">newTask</span><span style="color:#D4D4D4;">)</span></span>
<span class="line highlighted"><span style="color:#569CD6;">      this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">newTaskTitle</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">      alert</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">)</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    }</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ul><li>the call to <code>taskRepo.insert</code> will make a post request to the server, insert the new task to the <code>db</code>, and return the new <code>Task</code> object with all it&#39;s info (including the id generated by the database)</li></ul><ol start="2"><li>Add an <em>Add Task</em> form in the html template:</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">&lt;!-- src/app/todo/todo.component.html --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">todos</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">main</span><span style="color:#808080;">&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">form</span><span style="color:#9CDCFE;"> (submit)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;addTask()&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">input</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      placeholder</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;What needs to be done?&quot;</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;newTaskTitle&quot;</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;newTaskTitle&quot;</span></span>
<span class="line highlighted"><span style="color:#808080;">    /&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Add</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">form</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> *ngFor</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;let task of tasks&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">input</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;checkbox&quot;</span><span style="color:#9CDCFE;"> [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;task.completed&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    {{ task.title }}</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">main</span><span style="color:#808080;">&gt;</span></span></code></pre></div><p>Try adding a few tasks to see how it works</p><h2 id="rename-tasks-and-mark-as-completed" tabindex="-1">Rename Tasks and Mark as Completed <a class="header-anchor" href="#rename-tasks-and-mark-as-completed" aria-label="Permalink to &quot;Rename Tasks and Mark as Completed&quot;">​</a></h2><p>To make the tasks in the list updatable, we&#39;ll bind the <code>input</code> elements to the <code>Task</code> properties and add a <em>Save</em> button to save the changes to the backend database.</p><ol><li><p>Add a <code>saveTask</code> method to save the state of a task to the backend database</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">async</span><span style="color:#DCDCAA;"> saveTask</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">  try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    await</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">save</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#DCDCAA;">    alert</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div></li></ol><ol start="2"><li><p>Modify the contents of the <code>tasks</code> div to include the following <code>input</code> elements and a <em>Save</em> button to call the <code>saveTask</code> method.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">&lt;!-- src/app/todo/todo.component.html --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> *ngFor</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;let task of tasks&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">input</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;checkbox&quot;</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;task.completed&quot;</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    (change)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;saveTask(task)&quot;</span></span>
<span class="line highlighted"><span style="color:#808080;">  /&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">input</span><span style="color:#9CDCFE;"> [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;task.title&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#9CDCFE;"> (click)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;saveTask(task)&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Save</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span></code></pre></div></li></ol><p>Make some changes and refresh the browser to verify the backend database is updated.</p><h2 id="delete-tasks" tabindex="-1">Delete Tasks <a class="header-anchor" href="#delete-tasks" aria-label="Permalink to &quot;Delete Tasks&quot;">​</a></h2><p>Let&#39;s add a <em>Delete</em> button next to the <em>Save</em> button of each task in the list.</p><ol><li>Add the following <code>deleteTask</code> method to the <code>TodoComponent</code> class:</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/app/todo/todo.component.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">async</span><span style="color:#DCDCAA;"> deleteTask</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#C586C0;">   await</span><span style="color:#569CD6;"> this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">delete</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">   this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">filter</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">t</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#9CDCFE;"> t</span><span style="color:#D4D4D4;"> !== </span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ol start="2"><li>Add a <em>Delete</em> button in the html:</li></ol><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">&lt;!-- src/app/todo/todo.component.html --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> *ngFor</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;let task of tasks&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">input</span></span>
<span class="line"><span style="color:#9CDCFE;">    type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;checkbox&quot;</span></span>
<span class="line"><span style="color:#9CDCFE;">    [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;task.completed&quot;</span></span>
<span class="line"><span style="color:#9CDCFE;">    (change)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;saveTask(task)&quot;</span></span>
<span class="line"><span style="color:#808080;">  /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">input</span><span style="color:#9CDCFE;"> [(ngModel)]</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;task.title&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#9CDCFE;"> (click)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;saveTask(task)&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Save</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line highlighted"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">button</span><span style="color:#9CDCFE;"> (click)</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;deleteTask(task)&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Delete</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span></code></pre></div>`,20),t=[p];function e(c,r,D,y,i,d){return a(),n("div",null,t)}const g=s(o,[["render",e]]);export{h as __pageData,g as default};
