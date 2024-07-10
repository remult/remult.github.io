import{_ as s,c as a,o as e,a5 as n,a6 as o}from"./chunks/framework.QXCuR9m2.js";const h=JSON.parse('{"title":"Entities","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/vue/entities.md","filePath":"tutorials/vue/entities.md","lastUpdated":1714298996000}'),l={name:"tutorials/vue/entities.md"},t=n(`<h1 id="entities" tabindex="-1">Entities <a class="header-anchor" href="#entities" aria-label="Permalink to &quot;Entities&quot;">​</a></h1><p>Let&#39;s start coding the app by defining the <code>Task</code> entity class.</p><p>The <code>Task</code> entity class will be used:</p><ul><li>As a model class for client-side code</li><li>As a model class for server-side code</li><li>By <code>remult</code> to generate API endpoints, API queries, and database commands</li></ul><p>The <code>Task</code> entity class we&#39;re creating will have an auto-generated <code>id</code> field, a <code>title</code> field, a <code>completed</code> field and an auto-generated <code>createdAt</code> field. The entity&#39;s API route (&quot;tasks&quot;) will include endpoints for all <code>CRUD</code> operations.</p><h2 id="define-the-model" tabindex="-1">Define the Model <a class="header-anchor" href="#define-the-model" aria-label="Permalink to &quot;Define the Model&quot;">​</a></h2><ol><li><p>Create a <code>shared</code> folder under the <code>src</code> folder. This folder will contain code shared between frontend and backend.</p></li><li><p>Create a file <code>Task.ts</code> in the <code>src/shared/</code> folder, with the following code:</p></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/shared/Task.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Entity</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Entity</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;tasks&quot;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#9CDCFE;">  allowApiCrud:</span><span style="color:#569CD6;"> true</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> Task</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">cuid</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  id</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">boolean</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  completed</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">createdAt</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  createdAt</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">Date</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><ol start="3"><li>In the server&#39;s <code>api</code> module, register the <code>Task</code> entity with Remult by adding <code>entities: [Task]</code> to an <code>options</code> object you pass to the <code>remultExpress()</code> middleware:</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/server/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/remult-express&quot;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;../shared/Task.js&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  entities:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">ESM</p><p>In this tutorial we will be using <code>esm</code> for the node.js server - that means that where ever we import a file we have to include the <code>.js</code> suffix for it as we did above in the <code>import { Task } from &quot;../shared/Task.js&quot;</code> statement</p></div><p>The <a href="./../../docs/ref_entity">@Entity</a> decorator tells Remult this class is an entity class. The decorator accepts a <code>key</code> argument (used to name the API route and as a default database collection/table name), and an <code>options</code> argument used to define entity-related properties and operations, discussed in the next sections of this tutorial.</p><p>To initially allow all CRUD operations for tasks, we set the option <a href="./../../docs/ref_entity#allowapicrud">allowApiCrud</a> to <code>true</code>.</p><p>The <a href="./../../docs/field-types#fields-cuid">@Fields.cuid</a> decorator tells Remult to automatically generate a short random id using the <a href="https://github.com/paralleldrive/cuid" target="_blank" rel="noreferrer">cuid</a> library. This value can&#39;t be changed after the entity is created.</p><p>The <a href="./../../docs/field-types#fields-string">@Fields.string</a> decorator tells Remult the <code>title</code> property is an entity data field of type <code>String</code>. This decorator is also used to define field-related properties and operations, discussed in the next sections of this tutorial and the same goes for <code>@Fields.boolean</code> and the <code>completed</code> property.</p><p>The <a href="./../../docs/field-types#fields-createdat">@Fields.createdAt</a> decorator tells Remult to automatically generate a <code>createdAt</code> field with the current date and time.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For a complete list of supported field types, see the <a href="./../../docs/field-types">Field Types</a> section in the Remult documentation.</p></div><h2 id="test-the-api" tabindex="-1">Test the API <a class="header-anchor" href="#test-the-api" aria-label="Permalink to &quot;Test the API&quot;">​</a></h2><p>Now that the <code>Task</code> entity is defined, we can start using the REST API to query and add a tasks.</p><ol><li><p>Open a browser with the url: <a href="http://localhost:3002/api/tasks" target="_blank" rel="noreferrer">http://localhost:3002/api/tasks</a>, and you&#39;ll see that you get an empty array.</p></li><li><p>Use <code>curl</code> to <code>POST</code> a new task - <em>Clean car</em>.</p></li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#CE9178;"> http://localhost:3002/api/tasks</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> &quot;{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">Clean car</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">}&quot;</span><span style="color:#569CD6;"> -H</span><span style="color:#CE9178;"> &quot;Content-Type: application/json&quot;</span></span></code></pre></div><ol start="3"><li><p>Refresh the browser for the url: <a href="http://localhost:3002/api/tasks" target="_blank" rel="noreferrer">http://localhost:3002/api/tasks</a> and see that the array now contains one item.</p></li><li><p>Use <code>curl</code> to <code>POST</code> a few more tasks:</p></li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#CE9178;"> http://localhost:3002/api/tasks</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> &quot;[{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">Read a book</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">},{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">Take a nap</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">, </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">completed</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">:true },{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">Pay bills</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">},{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">Do laundry</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">}]&quot;</span><span style="color:#569CD6;"> -H</span><span style="color:#CE9178;"> &quot;Content-Type: application/json&quot;</span></span></code></pre></div><ul><li>Note that the <code>POST</code> endpoint can accept a single <code>Task</code> or an array of <code>Task</code>s.</li></ul><ol start="5"><li>Refresh the browser again, to see that the tasks were stored in the db.</li></ol><div class="warning custom-block"><p class="custom-block-title">Wait, where is the backend database?</p><p>While remult supports <a href="https://remult.dev/docs/databases.html" target="_blank" rel="noreferrer">many relational and non-relational databases</a>, in this tutorial we start by storing entity data in a backend <strong>JSON file</strong>. Notice that a <code>db</code> folder has been created under the root folder, with a <code>tasks.json</code> file containing the created tasks.</p></div><h2 id="admin-ui" tabindex="-1">Admin UI <a class="header-anchor" href="#admin-ui" aria-label="Permalink to &quot;Admin UI&quot;">​</a></h2><h3 id="enabling-the-admin-ui" tabindex="-1">Enabling the Admin UI <a class="header-anchor" href="#enabling-the-admin-ui" aria-label="Permalink to &quot;Enabling the Admin UI&quot;">​</a></h3><p>Add the Admin UI to your React application by setting the <code>admin</code> option to <code>true</code> in the <code>remultExpress()</code> configuration in your <code>src/server/api.ts</code> file:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/server/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-express&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;../shared/Task.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  entities:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#9CDCFE;">  admin:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Enable the Admin UI</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><h3 id="accessing-and-using-the-admin-ui" tabindex="-1">Accessing and Using the Admin UI <a class="header-anchor" href="#accessing-and-using-the-admin-ui" aria-label="Permalink to &quot;Accessing and Using the Admin UI&quot;">​</a></h3><p>Navigate to <code>http://localhost:5173/api/admin</code> to access the Admin UI. Here, you can perform CRUD operations on your entities, view their relationships via the Diagram entry, and ensure secure management with the same validations and authorizations as your application.</p><p><img src="`+o+`" alt="Remult Admin"></p><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>CRUD Operations</strong>: Directly create, update, and delete tasks through the Admin UI.</li><li><strong>Entity Diagram</strong>: Visualize relationships between entities for better data structure understanding.</li><li><strong>Security</strong>: Operations are secure, adhering to application-defined rules.</li></ul><h2 id="display-the-task-list" tabindex="-1">Display the Task List <a class="header-anchor" href="#display-the-task-list" aria-label="Permalink to &quot;Display the Task List&quot;">​</a></h2><p>Let&#39;s start developing the web app by displaying the list of existing tasks in a Vue component.</p><p>Replace the contents of <code>src/App.vue</code> with the following code:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">// src/App.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;vue&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;./shared/Task&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> taskRepo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">repo</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> tasks</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">[]&gt;([]);</span></span>
<span class="line"><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> taskRepo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tasks</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">items</span><span style="color:#D4D4D4;">)));</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">todos</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">main</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">div</span><span style="color:#C586C0;"> v-for</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">task</span><span style="color:#569CD6;"> in</span><span style="color:#9CDCFE;"> tasks</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">        &lt;</span><span style="color:#569CD6;">input</span><span style="color:#9CDCFE;"> type</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;checkbox&quot;</span><span style="color:#9CDCFE;"> v-model</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">completed</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        {{ </span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;"> }}</span></span>
<span class="line"><span style="color:#808080;">      &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">main</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre></div><p>Here&#39;s a quick overview of the different parts of the code snippet:</p><ul><li><code>taskRepo</code> is a Remult <a href="./../../docs/ref_repository">Repository</a> object used to fetch and create Task entity objects.</li><li><code>tasks</code> is a Task array Vue <code>ref</code> that holds the list of tasks.</li><li>Vue&#39;s <code>onMounted</code> hook is used to call the Remult <a href="./../../docs/ref_repository">repository</a>&#39;s <a href="./../../docs/ref_repository#find">find</a> method to fetch tasks from the server, once when the Vue component is loaded.</li></ul><p>After the browser refreshes, the list of tasks appears.</p>`,42),p=[t];function r(c,i,d,D,y,u){return e(),a("div",null,p)}const m=s(l,[["render",r]]);export{h as __pageData,m as default};