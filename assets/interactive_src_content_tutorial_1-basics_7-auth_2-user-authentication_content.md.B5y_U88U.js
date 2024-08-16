import{_ as s,c as n,o as a,a5 as l}from"./chunks/framework.QXCuR9m2.js";const h=JSON.parse('{"title":"Authentication","description":"","frontmatter":{"type":"lesson","title":"Authentication","template":"auth","focus":"/shared/AuthController.ts"},"headers":[],"relativePath":"interactive/src/content/tutorial/1-basics/7-auth/2-user-authentication/content.md","filePath":"interactive/src/content/tutorial/1-basics/7-auth/2-user-authentication/content.md","lastUpdated":1723795207000}'),e={name:"interactive/src/content/tutorial/1-basics/7-auth/2-user-authentication/content.md"},o=l(`<h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><p>In this lesson, we&#39;ll implement a basic sign-in mechanism using cookie session.</p><p>Let&#39;s add a <code>shared/AuthController.ts</code> file and include the following code:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">BackendMethod</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;express&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#9CDCFE;"> from</span><span style="color:#CE9178;"> &#39;cookie-session&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#9CDCFE;">declare</span><span style="color:#9CDCFE;"> module</span><span style="color:#CE9178;"> &#39;remult&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  export</span><span style="color:#9CDCFE;"> interface</span><span style="color:#9CDCFE;"> RemultContext</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    request</span><span style="color:#D4D4D4;">?: </span><span style="color:#9CDCFE;">express</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Request</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">export</span><span style="color:#9CDCFE;"> class</span><span style="color:#9CDCFE;"> AuthController</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  //</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We import the necessary modules from <code>remult</code> and types for <code>express</code> and <code>cookie-session</code>.</li><li>We extend the <code>RemultContext</code> interface to include an optional <code>request</code> property of type <code>express.Request</code>.</li><li>Remult will automatically set the <code>request</code> with the current request. Since Remult works with any server framework, we need to type it to the correct server, which in this case is Express. This typing gives us access to the request object and its session, managed by <code>cookie-session</code>.</li><li>This <code>request</code> can be accessed using <code>remult.context.request</code>.</li></ul><p>Next, we&#39;ll add a static list of users and a sign-in method. (In a real application, you would use a database, but for this tutorial, a static list will suffice.)</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line highlighted"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> validUsers</span><span style="color:#D4D4D4;"> = [{ </span><span style="color:#9CDCFE;">name:</span><span style="color:#CE9178;"> &#39;Jane&#39;</span><span style="color:#D4D4D4;"> }, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#CE9178;"> &#39;Alex&#39;</span><span style="color:#D4D4D4;"> }]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> AuthController</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#569CD6;">  static</span><span style="color:#569CD6;"> async</span><span style="color:#DCDCAA;"> signIn</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line highlighted"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> user</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">validUsers</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">find</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">)</span></span>
<span class="line highlighted"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        id:</span><span style="color:#9CDCFE;"> user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        name:</span><span style="color:#9CDCFE;"> user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">      }</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">request</span><span style="color:#D4D4D4;">!.</span><span style="color:#9CDCFE;">session</span><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">&#39;user&#39;</span><span style="color:#D4D4D4;">] = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span></span>
<span class="line highlighted"><span style="color:#C586C0;">      return</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#C586C0;">      throw</span><span style="color:#DCDCAA;"> Error</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;Invalid user, try &#39;Alex&#39; or &#39;Jane&#39;&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    }</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation-1" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-1" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We define a static list of valid users.</li><li>The <code>signIn</code> method is decorated with <code>@BackendMethod({ allowed: true })</code>, making it accessible from the frontend.</li><li>The method checks if the provided <code>name</code> exists in the <code>validUsers</code> list. If it does, it sets <code>remult.user</code> to an object that conforms to the <code>UserInfo</code> type from Remult and stores this user in the request session.</li><li>If the user is not found, it throws an error.</li></ul><p>Next, we&#39;ll add sign-out and current user methods:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> AuthController</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#569CD6;">  static</span><span style="color:#569CD6;"> async</span><span style="color:#DCDCAA;"> signIn</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    //...</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">authenticated</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#569CD6;">  static</span><span style="color:#569CD6;"> async</span><span style="color:#DCDCAA;"> signOut</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">request</span><span style="color:#D4D4D4;">!.</span><span style="color:#9CDCFE;">session</span><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">&#39;user&#39;</span><span style="color:#D4D4D4;">] = </span><span style="color:#569CD6;">undefined</span></span>
<span class="line highlighted"><span style="color:#C586C0;">    return</span><span style="color:#569CD6;"> undefined</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#569CD6;">  static</span><span style="color:#569CD6;"> async</span><span style="color:#DCDCAA;"> currentUser</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#C586C0;">    return</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation-2" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-2" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>The <code>signOut</code> method clears the user session, making the user unauthenticated.</li><li>The <code>currentUser</code> method returns the current authenticated user.</li></ul><p>Next, we&#39;ll adjust the <code>backend/index.ts</code> file:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;express&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> session</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;cookie-session&#39;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">AuthController</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;../shared/AuthController&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">enable</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;trust proxy&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// required for stackblitz and other reverse proxy scenarios</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">  session</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    secret:</span><span style="color:#9CDCFE;"> process</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">env</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">&#39;SESSION_SECRET&#39;</span><span style="color:#D4D4D4;">] || </span><span style="color:#CE9178;">&#39;my secret&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  entities:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">],</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  controllers:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">TasksController</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">AuthController</span><span style="color:#D4D4D4;">],</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">  getUser</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">request</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> request</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">session</span><span style="color:#D4D4D4;">?.[</span><span style="color:#CE9178;">&#39;user&#39;</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><h3 id="code-explanation-3" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-3" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We import <code>session</code> from <code>cookie-session</code> and <code>AuthController</code>.</li><li>We enable <code>trust proxy</code> for reverse proxy scenarios like StackBlitz.</li><li>We configure the <code>cookie-session</code> middleware with a secret.</li><li>We register <code>AuthController</code> in the <code>controllers</code> array.</li><li>We add <code>getUser: (request) =&gt; request.session?.[&#39;user&#39;]</code> to extract the user from the session.</li></ul><h3 id="frontend-authentication" tabindex="-1">Frontend Authentication <a class="header-anchor" href="#frontend-authentication" aria-label="Permalink to &quot;Frontend Authentication&quot;">​</a></h3><p>In <code>frontend/Auth.tsx</code>, we&#39;ll call the <code>AuthController</code> to sign in, sign out, etc.</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> signIn</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">f</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">FormEvent</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">HTMLFormElement</span><span style="color:#D4D4D4;">&gt;) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  f</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">preventDefault</span><span style="color:#D4D4D4;">()</span></span>
<span class="line highlighted"><span style="color:#C586C0;">  try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">    setCurrentUser</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">await</span><span style="color:#9CDCFE;"> AuthController</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">signIn</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">))</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">    alert</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">error</span><span style="color:#C586C0;"> as</span><span style="color:#4EC9B0;"> ErrorInfo</span><span style="color:#D4D4D4;">).</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">)</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">async</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> signOut</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#DCDCAA;">  setCurrentUser</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">await</span><span style="color:#9CDCFE;"> AuthController</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">signOut</span><span style="color:#D4D4D4;">())</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">useEffect</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  AuthController</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">currentUser</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">setCurrentUser</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}, [])</span></span></code></pre></div><h3 id="code-explanation-4" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-4" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>The <code>signIn</code> function calls <code>AuthController.signIn</code> and sets the current user if successful.</li><li>The <code>signOut</code> function calls <code>AuthController.signOut</code> to clear the current user.</li><li>The <code>useEffect</code> hook fetches the current user when the component mounts.</li></ul><h3 id="try-it-out" tabindex="-1">Try It Out <a class="header-anchor" href="#try-it-out" aria-label="Permalink to &quot;Try It Out&quot;">​</a></h3><p>Try signing in as <code>Alex</code> or <code>Jane</code> and verify that you can perform CRUD operations on tasks. Sign out and ensure that you can no longer access the tasks.</p>`,25),p=[o];function t(c,r,D,i,y,C){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
