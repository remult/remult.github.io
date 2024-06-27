import{_ as e,c as a,o as t,a5 as s}from"./chunks/framework.QXCuR9m2.js";const D=JSON.parse('{"title":"RemultServerOptions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ref_remultserveroptions.md","filePath":"docs/ref_remultserveroptions.md","lastUpdated":1714289309000}'),r={name:"docs/ref_remultserveroptions.md"},o=s(`<h1 id="remultserveroptions" tabindex="-1">RemultServerOptions <a class="header-anchor" href="#remultserveroptions" aria-label="Permalink to &quot;RemultServerOptions&quot;">​</a></h1><ul><li><strong>RemultServerOptions</strong></li></ul><h2 id="entities" tabindex="-1">entities <a class="header-anchor" href="#entities" aria-label="Permalink to &quot;entities&quot;">​</a></h2><p>Entities to use for the api</p><h2 id="controllers" tabindex="-1">controllers <a class="header-anchor" href="#controllers" aria-label="Permalink to &quot;controllers&quot;">​</a></h2><p>Controller to use for the api</p><h2 id="getuser" tabindex="-1">getUser <a class="header-anchor" href="#getuser" aria-label="Permalink to &quot;getUser&quot;">​</a></h2><p>Will be called to get the current user based on the current request</p><p>Arguments:</p><ul><li><strong>request</strong></li></ul><h2 id="initrequest" tabindex="-1">initRequest <a class="header-anchor" href="#initrequest" aria-label="Permalink to &quot;initRequest&quot;">​</a></h2><p>Will be called for each request and can be used for configuration</p><p>Arguments:</p><ul><li><strong>request</strong></li><li><strong>options</strong><ul><li><strong>liveQueryStorage</strong></li><li><strong>remult</strong></li></ul></li></ul><h2 id="initapi" tabindex="-1">initApi <a class="header-anchor" href="#initapi" aria-label="Permalink to &quot;initApi&quot;">​</a></h2><p>Will be called once the server is loaded and the data provider is ready</p><p>Arguments:</p><ul><li><strong>remult</strong></li></ul><h2 id="dataprovider" tabindex="-1">dataProvider <a class="header-anchor" href="#dataprovider" aria-label="Permalink to &quot;dataProvider&quot;">​</a></h2><p>Data Provider to use for the api.</p><h4 id="see" tabindex="-1">see: <a class="header-anchor" href="#see" aria-label="Permalink to &quot;see:&quot;">​</a></h4><p><a href="https://remult.dev/docs/databases.html" target="_blank" rel="noreferrer">Connecting to a Database</a>.</p><h2 id="ensureschema" tabindex="-1">ensureSchema <a class="header-anchor" href="#ensureschema" aria-label="Permalink to &quot;ensureSchema&quot;">​</a></h2><p>Will create tables and columns in supporting databases. default: true</p><h4 id="description" tabindex="-1">description: <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description:&quot;">​</a></h4><p>when set to true, it&#39;ll create entities that do not exist, and add columns that are missing.</p><h2 id="rootpath" tabindex="-1">rootPath <a class="header-anchor" href="#rootpath" aria-label="Permalink to &quot;rootPath&quot;">​</a></h2><p>The path to use for the api, default:/api</p><h4 id="description-1" tabindex="-1">description: <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;description:&quot;">​</a></h4><p>If you want to use a different api path adjust this field</p><h2 id="defaultgetlimit" tabindex="-1">defaultGetLimit <a class="header-anchor" href="#defaultgetlimit" aria-label="Permalink to &quot;defaultGetLimit&quot;">​</a></h2><p>The default limit to use for find requests that did not specify a limit</p><h2 id="logapiendpoints" tabindex="-1">logApiEndPoints <a class="header-anchor" href="#logapiendpoints" aria-label="Permalink to &quot;logApiEndPoints&quot;">​</a></h2><p>When set to true (default) it&#39;ll console log each api endpoint that is created</p><h2 id="subscriptionserver" tabindex="-1">subscriptionServer <a class="header-anchor" href="#subscriptionserver" aria-label="Permalink to &quot;subscriptionServer&quot;">​</a></h2><p>A subscription server to use for live query and message channels</p><h2 id="livequerystorage" tabindex="-1">liveQueryStorage <a class="header-anchor" href="#livequerystorage" aria-label="Permalink to &quot;liveQueryStorage&quot;">​</a></h2><p>A storage to use to store live queries, relevant mostly for serverless scenarios or larger scales</p><h2 id="contextserializer" tabindex="-1">contextSerializer <a class="header-anchor" href="#contextserializer" aria-label="Permalink to &quot;contextSerializer&quot;">​</a></h2><p>Used to store the context relevant info for re running a live query</p><h2 id="admin" tabindex="-1">admin <a class="header-anchor" href="#admin" aria-label="Permalink to &quot;admin&quot;">​</a></h2><p>When set to true, will display an admin ui in the <code>/api/admin</code> url. Can also be set to an arrow function for fine grained control</p><h4 id="example" tabindex="-1">example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example:&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C8C8C8;">admin</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span></code></pre></div><h4 id="example-1" tabindex="-1">example: <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;example:&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C8C8C8;">admin</span><span style="color:#D4D4D4;">: ()</span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> remult</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isAllowed</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;admin&#39;</span><span style="color:#D4D4D4;">)</span></span></code></pre></div><h4 id="see-1" tabindex="-1">see: <a class="header-anchor" href="#see-1" aria-label="Permalink to &quot;see:&quot;">​</a></h4><p><a href="http://remult.dev/docs/allowed.html" target="_blank" rel="noreferrer">allowed</a></p><h2 id="queuestorage" tabindex="-1">queueStorage <a class="header-anchor" href="#queuestorage" aria-label="Permalink to &quot;queueStorage&quot;">​</a></h2><p>Storage to use for backend methods that use queue</p><h2 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h2><p>This method is called whenever there is an error in the API lifecycle.</p><h4 id="returns" tabindex="-1">returns: <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;returns:&quot;">​</a></h4><p>A promise that resolves when the error handling is complete.</p><h4 id="example-2" tabindex="-1">example: <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;example:&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  error</span><span style="color:#9CDCFE;">:</span><span style="color:#569CD6;"> async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">httpStatusCode</span><span style="color:#D4D4D4;"> == </span><span style="color:#B5CEA8;">500</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      e</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">sendError</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">500</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">message:</span><span style="color:#CE9178;"> &quot;An error occurred&quot;</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><p>Arguments:</p><ul><li><strong>info</strong> - Information about the error. <ul><li><strong>req</strong> - The request object.</li><li><strong>entity</strong> - (Optional) The entity metadata associated with the error, if applicable.</li><li><strong>exception</strong> - (Optional) The exception object or error that occurred.</li><li><strong>httpStatusCode</strong> - The HTTP status code.</li><li><strong>responseBody</strong> - The body of the response.</li><li><strong>__type</strong> - A method to send a custom error response. Call this method with the desired HTTP status code and response body.</li></ul></li></ul>`,58),n=[o];function l(i,p,c,d,h,u){return t(),a("div",null,n)}const b=e(r,[["render",l]]);export{D as __pageData,b as default};
