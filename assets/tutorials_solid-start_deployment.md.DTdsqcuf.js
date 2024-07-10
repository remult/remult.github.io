import{_ as e,c as a,o,a5 as t}from"./chunks/framework.QXCuR9m2.js";const D=JSON.parse('{"title":"Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/solid-start/deployment.md","filePath":"tutorials/solid-start/deployment.md","lastUpdated":1713690814000}'),l={name:"tutorials/solid-start/deployment.md"},s=t(`<h1 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h1><p>Let&#39;s deploy the todo app to <a href="https://railway.app/" target="_blank" rel="noreferrer">railway.app</a>.</p><h2 id="prepare-for-production" tabindex="-1">Prepare for Production <a class="header-anchor" href="#prepare-for-production" aria-label="Permalink to &quot;Prepare for Production&quot;">​</a></h2><p>Modify the highlighted code in the <code>src/api.ts</code> to prefer a <code>connectionString</code> provided by the production host&#39;s <code>DATABASE_URL</code> environment variable.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//...</span></span>
<span class="line highlighted"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> DATABASE_URL</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">process</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">env</span><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">&quot;DATABASE_URL&quot;</span><span style="color:#D4D4D4;">];</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;"> dataProvider:</span><span style="color:#4FC1FF;"> DATABASE_URL</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">   ? </span><span style="color:#DCDCAA;">createPostgresDataProvider</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">connectionString:</span><span style="color:#4FC1FF;"> DATABASE_URL</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">   : </span><span style="color:#569CD6;">undefined</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">   //...</span></span>
<span class="line"><span style="color:#D4D4D4;"> })</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Note</p><p>In order to connect to a local PostgresDB, add <code>DATABASE_URL</code> to an .env file, or simply replace <code>process.env[&quot;DATABASE_URL&quot;]</code> with your <code>connectionString</code>.</p><p>If no <code>DATABASE_URL</code> has found, it&#39;ll fallback to our local JSON files.</p></div><h2 id="test-locally" tabindex="-1">Test Locally <a class="header-anchor" href="#test-locally" aria-label="Permalink to &quot;Test Locally&quot;">​</a></h2><p>To test the application locally run</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> run</span><span style="color:#CE9178;"> build</span></span>
<span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> run</span><span style="color:#CE9178;"> start</span></span></code></pre></div><p>Now navigate to <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a> and test the application locally</p><h2 id="deploy-to-railway" tabindex="-1">Deploy to Railway <a class="header-anchor" href="#deploy-to-railway" aria-label="Permalink to &quot;Deploy to Railway&quot;">​</a></h2><p>In order to deploy the todo app to <a href="https://railway.app/" target="_blank" rel="noreferrer">railway</a> you&#39;ll need a <code>railway</code> account. You&#39;ll also need <a href="https://docs.railway.app/develop/cli#npm" target="_blank" rel="noreferrer">Railway CLI</a> installed, and you&#39;ll need to login to railway from the cli, using <code>railway login</code>.</p><p>Click enter multiple times to answer all its questions with the default answer</p><ol><li><p>Create a Railway <code>project</code>.</p><p>From the terminal in your project folder run:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">railway</span><span style="color:#CE9178;"> init</span></span></code></pre></div></li><li><p>Select <code>Empty Project</code></p></li><li><p>Set a project name.</p></li><li><p>Open the project on <code>railway</code> using:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">railway</span><span style="color:#CE9178;"> open</span></span></code></pre></div></li><li><p>Click the <code>Add Service</code> and add:</p><ul><li>a Postgres Database</li><li>an Empty service</li></ul></li><li><p>Once that&#39;s done run the following command to upload the project to railway:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">railway</span><span style="color:#CE9178;"> up</span></span></code></pre></div><p>And select the empty service name that was just created to upload the source code to it.</p></li><li><p>Once completed, go back to the railway UI in the browser and select the created service (not the database)</p></li><li><p>Switch to the <code>variables</code> tab</p></li><li><p>Click on <code>+ New Variable</code>, and in the <code>VARIABLE_NAME</code> click <code>Add Reference</code> and select <code>DATABASE_URL</code></p></li><li><p>Add another variable called <code>SESSION_SECRET</code> and set it to a random string, you can use an <a href="https://www.uuidgenerator.net/" target="_blank" rel="noreferrer">online UUID generator</a></p></li><li><p>Switch to the <code>settings</code> tab</p></li><li><p>Under <code>Environment</code> click on <code>Generate Domain</code></p></li><li><p>Click the <code>deploy</code> button to deploy the changes, and wait for the deployment to complete</p></li><li><p>Click on the newly generated url to open the app in the browser and you&#39;ll see the app live in production. (it may take a few minutes to go live)</p></li></ol><div class="warning custom-block"><p class="custom-block-title">Note</p><p>If you run into trouble deploying the app to Railway, try using Railway&#39;s <a href="https://docs.railway.app/deploy/deployments" target="_blank" rel="noreferrer">documentation</a>.</p></div><p>That&#39;s it - our application is deployed to production, play with it and enjoy.</p><p>To see a larger more complex code base, visit our <a href="https://www.github.com/remult/crm-demo" target="_blank" rel="noreferrer">CRM example project</a></p><p>Love Remult? <a href="https://github.com/remult/remult" target="_blank" rel="noopener"> Give our repo a star.⭐</a></p>`,18),n=[s];function p(r,c,i,d,y,h){return o(),a("div",null,n)}const m=e(l,[["render",p]]);export{D as __pageData,m as default};