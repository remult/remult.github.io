import{_ as s,o as n,c as a,R as e}from"./chunks/framework.UFCy2Zbw.js";const u=JSON.parse('{"title":"Paging, Sorting and Filtering","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/solid-start/sorting-filtering.md","filePath":"tutorials/solid-start/sorting-filtering.md","lastUpdated":1713690814000}'),o={name:"tutorials/solid-start/sorting-filtering.md"},t=e(`<h1 id="paging-sorting-and-filtering" tabindex="-1">Paging, Sorting and Filtering <a class="header-anchor" href="#paging-sorting-and-filtering" aria-label="Permalink to &quot;Paging, Sorting and Filtering&quot;">​</a></h1><p>The RESTful API created by Remult supports <strong>server-side paging, sorting, and filtering</strong>. Let&#39;s use that to limit, sort and filter the list of tasks.</p><h2 id="limit-number-of-fetched-tasks" tabindex="-1">Limit Number of Fetched Tasks <a class="header-anchor" href="#limit-number-of-fetched-tasks" aria-label="Permalink to &quot;Limit Number of Fetched Tasks&quot;">​</a></h2><p>Since our database may eventually contain a lot of tasks, it make sense to use a <strong>paging strategy</strong> to limit the number of tasks retrieved in a single fetch from the back-end database.</p><p>Let&#39;s limit the number of fetched tasks to <code>20</code>.</p><p>In the <code>onMount</code> hook defined in the <code>Todo</code> component, pass an <code>options</code> argument to the <code>find</code> method call and set its <code>limit</code> property to 20.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/Todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> Todo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">  onMount</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#9CDCFE;">    taskRepo</span></span>
<span class="line"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        limit:</span><span style="color:#B5CEA8;"> 20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      })</span></span>
<span class="line"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">setTasks</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>There aren&#39;t enough tasks in the database for this change to have an immediate effect, but it will have one later on when we&#39;ll add more tasks.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To query subsequent pages, use the <a href="./../../docs/ref_repository#find">Repository.find()</a> method&#39;s <code>page</code> option.</p></div><h2 id="sorting-by-creation-date" tabindex="-1">Sorting By Creation Date <a class="header-anchor" href="#sorting-by-creation-date" aria-label="Permalink to &quot;Sorting By Creation Date&quot;">​</a></h2><p>We would like old tasks to appear first in the list, and new tasks to appear last. Let&#39;s sort the tasks by their <code>createdAt</code> field.</p><p>In the <code>onMount</code> hook, set the <code>orderBy</code> property of the <code>find</code> method call&#39;s <code>option</code> argument to an object that contains the fields you want to sort by. Use &quot;asc&quot; and &quot;desc&quot; to determine the sort order.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/Todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onMount</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#9CDCFE;">  taskRepo</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      limit:</span><span style="color:#B5CEA8;"> 20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      orderBy:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createdAt:</span><span style="color:#CE9178;"> &quot;asc&quot;</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">setTasks</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><h2 id="server-side-filtering" tabindex="-1">Server Side Filtering <a class="header-anchor" href="#server-side-filtering" aria-label="Permalink to &quot;Server Side Filtering&quot;">​</a></h2><p>Remult supports sending filter rules to the server to query only the tasks that we need.</p><p>Adjust the <code>onMount</code> hook to fetch only <code>completed</code> tasks.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// src/components/Todo.tsx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">onMount</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#9CDCFE;">  taskRepo</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      limit:</span><span style="color:#B5CEA8;"> 20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      orderBy:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createdAt:</span><span style="color:#CE9178;"> &quot;asc&quot;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      where:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">completed:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> }</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">setTasks</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Note</p><p>Because the <code>completed</code> field is of type <code>boolean</code>, the argument is <strong>compile-time checked to be of the <code>boolean</code> type</strong>. Setting the <code>completed</code> filter to <code>undefined</code> causes it to be ignored by Remult.</p></div><p>Play with different filtering values, and eventually comment it out, since we do need all the tasks</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">  onMount</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#9CDCFE;">    taskRepo</span></span>
<span class="line"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">        limit:</span><span style="color:#B5CEA8;"> 20</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">        orderBy:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createdAt:</span><span style="color:#CE9178;"> &quot;asc&quot;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line highlighted"><span style="color:#6A9955;">        //where: { completed: true },</span></span>
<span class="line"><span style="color:#D4D4D4;">      })</span></span>
<span class="line"><span style="color:#D4D4D4;">      .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">setTasks</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  );</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Learn more</p><p>Explore the reference for a <a href="./../../docs/entityFilter">comprehensive list of filtering options</a>.</p></div>`,21),l=[t];function p(c,r,i,D,d,y){return n(),a("div",null,l)}const C=s(o,[["render",p]]);export{u as __pageData,C as default};
