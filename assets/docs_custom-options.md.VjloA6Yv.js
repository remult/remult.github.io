import{_ as s,o as n,c as e,R as o}from"./chunks/framework.UFCy2Zbw.js";const C=JSON.parse('{"title":"Extensibility","description":"","frontmatter":{"tags":["options","bespoke options","customizing options","type augmentation","module augmentation","UserInfo","RemultContext","context"]},"headers":[],"relativePath":"docs/custom-options.md","filePath":"docs/custom-options.md","lastUpdated":1712235867000}'),a={name:"docs/custom-options.md"},l=o(`<h1 id="extensibility" tabindex="-1">Extensibility <a class="header-anchor" href="#extensibility" aria-label="Permalink to &quot;Extensibility&quot;">​</a></h1><p><a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation" target="_blank" rel="noreferrer">Module Augmentation</a> in TypeScript allows you to extend existing types with custom properties or methods. This enhances the functionality of third-party libraries like <code>remult</code> without altering their source code, enabling seamless integration of custom features while maintaining type safety.</p><p>In Remult, you can use TypeScript&#39;s module augmentation to enhance your application with custom features. Here are some examples:</p><ol><li><strong>Add more fields to the User object:</strong> Extend the <code>UserInfo</code> interface to include additional fields like <code>email</code> and <code>phone</code>.</li><li><strong>Add custom options/metadata to fields and entities:</strong> Extend the <code>FieldOptions</code> or <code>EntityOptions</code> interfaces to include custom properties such as <code>placeholderText</code> or <code>helpText</code>.</li><li><strong>Add fields/methods to the <code>remult.context</code> object:</strong> Extend the <code>RemultContext</code> interface to include additional properties or methods that can be accessed throughout your code.</li></ol><h2 id="setting-up-the-types-d-ts-file-for-custom-type-extensions" tabindex="-1">Setting Up the types.d.ts File for Custom Type Extensions <a class="header-anchor" href="#setting-up-the-types-d-ts-file-for-custom-type-extensions" aria-label="Permalink to &quot;Setting Up the types.d.ts File for Custom Type Extensions&quot;">​</a></h2><p>To set up the <code>types.d.ts</code> file for custom type extensions in Remult:</p><ol><li><p><strong>Create a TypeScript Declaration File:</strong> Add a file named <code>types.d.ts</code> in the <code>src</code> folder of your project. This file will be used to declare custom type extensions, such as additional user info fields.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#6A9955;">// src/types.d.ts</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> module</span><span style="color:#CE9178;"> &#39;remult&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">  interface</span><span style="color:#4EC9B0;"> UserInfo</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    phone</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    email</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>The <code>export {}</code> is required to indicate that this file is a module, as per the <a href="https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties" target="_blank" rel="noreferrer">Vue.js documentation on augmenting global properties</a>.</p></li><li><p><strong>Include the Declaration File in tsconfig:</strong> Make sure that the <code>types.d.ts</code> file is included in the <code>include</code> section of your <code>tsconfig.json</code> file. If you have a separate <code>tsconfig</code> for the server, ensure that it&#39;s also added there.</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#6A9955;">// tsconfig.server.json</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;compilerOptions&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#6A9955;">    //...</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  &quot;include&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;src/server/**/*&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;src/shared/**/*&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&quot;src/types.d.ts&quot;</span><span style="color:#D4D4D4;">] </span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div></li><li><p><strong>Utilize the Custom Fields in Your Code:</strong> Once you&#39;ve defined custom fields in the <code>types.d.ts</code> file and ensured they&#39;re included in your <code>tsconfig.json</code>, you can start using them throughout your application. For instance, if you&#39;ve added <code>phone</code> and <code>email</code> to the <code>UserInfo</code> interface, you can access these properties in your code as follows:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// Accessing custom user info fields</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">phone</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;">)</span></span></code></pre></div><p>This enables you to seamlessly integrate the new fields into your application&#39;s logic and user interface.</p></li></ol><h2 id="enhancing-field-and-entity-definitions-with-custom-options" tabindex="-1">Enhancing Field and Entity Definitions with Custom Options <a class="header-anchor" href="#enhancing-field-and-entity-definitions-with-custom-options" aria-label="Permalink to &quot;Enhancing Field and Entity Definitions with Custom Options&quot;">​</a></h2><p>One of the key motivations for adding custom options to <code>FieldOptions</code> or <code>EntityOptions</code> is to maintain consistency and centralize the definition of entities and fields in your application. By keeping these definitions close to the entity or field, you ensure a single source of truth for your application&#39;s data model. This approach enhances maintainability and readability, as all relevant information and metadata about an entity or field are located in one place. Additionally, it allows for easier integration with UI components, as custom options like <code>placeholderText</code> can be directly accessed and used in your frontend code.</p><p>For adding custom options to <code>FieldOptions</code> or <code>EntityOptions</code>, such as <code>placeholderText</code>:</p><ol><li><p><strong>Extend FieldOptions:</strong> In your <code>types.d.ts</code> file, extend the <code>FieldOptions</code> interface to include your custom options. For example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> module</span><span style="color:#CE9178;"> &#39;remult&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">  interface</span><span style="color:#4EC9B0;"> FieldOptions</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">entityType</span><span style="color:#D4D4D4;">, </span><span style="color:#4EC9B0;">valueType</span><span style="color:#D4D4D4;">&gt; {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    placeholderText</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> {}</span></span></code></pre></div></li><li><p><strong>Set Custom Option:</strong> Specify the <code>placeholderText</code> in your entity field options:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Entity</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Entity</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;tasks&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">allowApiCrud:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> class</span><span style="color:#4EC9B0;"> Task</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">uuid</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  id</span><span style="color:#D4D4D4;">!: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">string</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    placeholderText:</span><span style="color:#CE9178;"> &#39;Please enter a task title&#39;</span><span style="color:#D4D4D4;">, </span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  @</span><span style="color:#9CDCFE;">Fields</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">boolean</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  completed</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div></li><li><p><strong>Use in UI:</strong> Access the custom option in your UI components:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">input</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  placeholder</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;{taskRepo.fields.title.options.placeholderText}&quot;</span></span>
<span class="line"><span style="color:#808080;">/&gt;</span></span></code></pre></div></li></ol><p>By following these steps, you can extend <code>FieldOptions</code> with custom options that can be utilized throughout your project.</p><h3 id="extending-remult-s-context-property-for-request-specific-information" tabindex="-1">Extending Remult&#39;s <code>context</code> Property for Request-Specific Information <a class="header-anchor" href="#extending-remult-s-context-property-for-request-specific-information" aria-label="Permalink to &quot;Extending Remult&#39;s \`context\` Property for Request-Specific Information&quot;">​</a></h3><p>Augmenting Remult&#39;s <code>context</code> property is particularly useful because it allows you to store and access request-specific information throughout your code. This can be especially handy for including data from the request and utilizing it in entities or backend methods.</p><p>For example, you can add a custom property <code>origin</code> to the <code>RemultContext</code> interface:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#569CD6;">declare</span><span style="color:#569CD6;"> module</span><span style="color:#CE9178;"> &#39;remult&#39;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">  export</span><span style="color:#569CD6;"> interface</span><span style="color:#4EC9B0;"> RemultContext</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    origin</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>Then, set the <code>origin</code> property in the <code>initRequest</code> option in the <code>api.ts</code> file:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#4FC1FF;"> api</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#DCDCAA;">  initRequest</span><span style="color:#9CDCFE;">:</span><span style="color:#569CD6;"> async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">_</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">origin</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#9CDCFE;">  entities:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Task</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre></div><p>You can now use the <code>origin</code> property anywhere in your code, for example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">BackendMethod</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">allowed:</span><span style="color:#9CDCFE;"> Roles</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">admin</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#9CDCFE;">static</span><span style="color:#9CDCFE;"> async</span><span style="color:#DCDCAA;"> doSomethingImportant</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;">); </span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>or in an entity&#39;s saving event:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus has-highlighted vp-code"><code><span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Entity</span><span style="color:#D4D4D4;">&lt;</span><span style="color:#4EC9B0;">Task</span><span style="color:#D4D4D4;">&gt;(</span><span style="color:#CE9178;">&quot;tasks&quot;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#DCDCAA;">  saving</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> task</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">lastUpdateDate</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> Date</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#9CDCFE;">    task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">lastUpdateUser</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">?.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">;</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    task</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">lastUpdateOrigin</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">remult</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">context</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">origin</span><span style="color:#D4D4D4;">; </span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#6A9955;">  //...</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span></code></pre></div><p>By leveraging module augmentation, you can tailor Remult to your specific needs, adding custom options and extending interfaces to suit your application&#39;s requirements.</p>`,23),t=[l];function p(c,i,r,D,d,y){return n(),e("div",null,t)}const h=s(a,[["render",p]]);export{C as __pageData,h as default};