import{_ as s,c as a,o as n,a5 as l}from"./chunks/framework.QXCuR9m2.js";const C=JSON.parse('{"title":"Built-In Validations","description":"","frontmatter":{"type":"lesson","title":"Built-In Validations","focus":"/shared/Task.ts"},"headers":[],"relativePath":"interactive/src/content/tutorial/1-basics/4-validation/2-built-in-validations/content.md","filePath":"interactive/src/content/tutorial/1-basics/4-validation/2-built-in-validations/content.md","lastUpdated":1723795207000}'),e={name:"interactive/src/content/tutorial/1-basics/4-validation/2-built-in-validations/content.md"},o=l(`<h1 id="built-in-validations" tabindex="-1">Built-In Validations <a class="header-anchor" href="#built-in-validations" aria-label="Permalink to &quot;Built-In Validations&quot;">​</a></h1><p>Remult comes with a set of built-in validations that you can easily choose from. These validations are defined in the <code>Validators</code> class.</p><h2 id="minimum-length-validation" tabindex="-1">Minimum Length Validation <a class="header-anchor" href="#minimum-length-validation" aria-label="Permalink to &quot;Minimum Length Validation&quot;">​</a></h2><p>For example, let&#39;s use the <code>minLength</code> validation:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> Task</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">uuid</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  id</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    validate:</span><span style="color:#9CDCFE;"> Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">minLength</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">),</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  //....</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We added the <code>validate</code> option to the <code>title</code> field using the <code>Validators.minLength(2)</code> validation.</li><li>This ensures that the <code>title</code> field must have at least 2 characters.</li></ul><h2 id="chaining-multiple-validators" tabindex="-1">Chaining Multiple Validators <a class="header-anchor" href="#chaining-multiple-validators" aria-label="Permalink to &quot;Chaining Multiple Validators&quot;">​</a></h2><p>You can also chain multiple validators:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> Task</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">uuid</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  id</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    validate:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">minLength</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">), </span><span style="color:#9CDCFE;">Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">maxLength</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">)],</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  //....</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation-1" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-1" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We chained the <code>Validators.minLength(2)</code> and <code>Validators.maxLength(5)</code> validations.</li><li>This ensures that the <code>title</code> field must have at least 2 characters and at most 5 characters.</li></ul><h2 id="customizing-validation-messages" tabindex="-1">Customizing Validation Messages <a class="header-anchor" href="#customizing-validation-messages" aria-label="Permalink to &quot;Customizing Validation Messages&quot;">​</a></h2><p>You can also customize the validation message:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> Task</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">uuid</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  id</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    validate:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">minLength</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">),</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      Validators</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">maxLength</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#CE9178;"> \`maximum </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">length</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;"> characters\`</span><span style="color:#D4D4D4;">),</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  //....</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><h3 id="code-explanation-2" tabindex="-1">Code Explanation <a class="header-anchor" href="#code-explanation-2" aria-label="Permalink to &quot;Code Explanation&quot;">​</a></h3><ul><li>We customized the validation message for the <code>Validators.maxLength(5)</code> validation.</li><li>The custom message function <code>(length) =&gt; &#39;maximum \${length} characters&#39;</code> will be used if the validation fails.</li></ul><h3 id="try-it-out" tabindex="-1">Try It Out <a class="header-anchor" href="#try-it-out" aria-label="Permalink to &quot;Try It Out&quot;">​</a></h3><p>Try adding tasks with titles that do not meet these validation requirements to see the validation in action. The errors returned will include the validation messages specified.</p>`,19),t=[o];function p(i,c,r,D,d,h){return n(),a("div",null,t)}const u=s(e,[["render",p]]);export{C as __pageData,u as default};
