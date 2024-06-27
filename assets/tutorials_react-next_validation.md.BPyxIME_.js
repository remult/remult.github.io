import{_ as a,c as s,o as e,a5 as t}from"./chunks/framework.QXCuR9m2.js";const y=JSON.parse('{"title":"Validation","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/react-next/validation.md","filePath":"tutorials/react-next/validation.md","lastUpdated":1678283339000}'),o={name:"tutorials/react-next/validation.md"},n=t(`<h1 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-label="Permalink to &quot;Validation&quot;">​</a></h1><p>Validating user entered data is usually required both on the client-side and on the server-side, often causing a violation of the <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank" rel="noreferrer">DRY</a> design principle. <strong>With Remult, validation code can be placed within the entity class, and Remult will run the validation logic on both the frontend and the relevant API requests.</strong></p><div class="warning custom-block"><p class="custom-block-title">Handling validation errors</p><p>When a validation error occurs, Remult will throw an exception.</p><p>In this tutorial, <a href="./crud">CRUD operations</a> catch these exceptions, and alert the user. We leave it to you to decide how to handle validation errors in your application.</p></div><h2 id="validate-the-title-field" tabindex="-1">Validate the Title Field <a class="header-anchor" href="#validate-the-title-field" aria-label="Permalink to &quot;Validate the Title Field&quot;">​</a></h2><p>Task titles are required. Let&#39;s add a validity check for this rule.</p><ol><li>In the <code>Task</code> entity class, modify the <code>Fields.string</code> decorator for the <code>title</code> field to include an object literal argument and set the object&#39;s <code>validate</code> property to <code>Validators.required</code>.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/shared/Task.ts</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D4D4D4;">@</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  validate:</span><span style="color:#9CDCFE;"> Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">required</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Import Validators</p><p>This code requires adding an import of <code>Validators</code> from <code>remult</code>.</p></div><div class="warning custom-block"><p class="custom-block-title">Manual browser refresh required</p><p>For this change to take effect, you <strong>must manually refresh the browser</strong>.</p></div><p>After the browser is refreshed, try creating a new <code>task</code> or saving an existing one with an empty title - the <em>&quot;Should not be empty&quot;</em> error message is displayed.</p><h3 id="implicit-server-side-validation" tabindex="-1">Implicit server-side validation <a class="header-anchor" href="#implicit-server-side-validation" aria-label="Permalink to &quot;Implicit server-side validation&quot;">​</a></h3><p>The validation code we&#39;ve added is called by Remult on the server-side to validate any API calls attempting to modify the <code>title</code> field.</p><p>Try making the following <code>POST</code> http request to the <code>http://localhost:3000/api/tasks</code> API route, providing an invalid title.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#569CD6;"> -i</span><span style="color:#CE9178;"> http://localhost:3000/api/tasks</span><span style="color:#569CD6;"> -d</span><span style="color:#CE9178;"> &quot;{</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">title</span><span style="color:#D7BA7D;">\\&quot;</span><span style="color:#CE9178;">: </span><span style="color:#D7BA7D;">\\&quot;\\&quot;</span><span style="color:#CE9178;">}&quot;</span><span style="color:#569CD6;"> -H</span><span style="color:#CE9178;"> &quot;Content-Type: application/json&quot;</span></span></code></pre></div><p>An http error is returned and the validation error text is included in the response body,</p><h2 id="custom-validation" tabindex="-1">Custom Validation <a class="header-anchor" href="#custom-validation" aria-label="Permalink to &quot;Custom Validation&quot;">​</a></h2><p>The <code>validate</code> property of the first argument of <code>Remult</code> field decorators can be set to an arrow function which will be called to validate input on both front-end and back-end.</p><p>Try something like this and see what happens:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// src/shared/Task.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;({</span></span>
<span class="line"><span style="color:#DCDCAA;">  validate</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">throw</span><span style="color:#CE9178;"> &quot;Too Short&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span></span></code></pre></div>`,19),l=[n];function i(p,r,c,d,h,D){return e(),s("div",null,l)}const C=a(o,[["render",i]]);export{y as __pageData,C as default};
