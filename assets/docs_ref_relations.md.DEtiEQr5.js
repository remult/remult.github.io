import{_ as n,c as e,o as s,a5 as a}from"./chunks/framework.QXCuR9m2.js";const g=JSON.parse('{"title":"Relations","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ref_relations.md","filePath":"docs/ref_relations.md","lastUpdated":1711389142000}'),t={name:"docs/ref_relations.md"},o=a(`<h1 id="relations" tabindex="-1">Relations <a class="header-anchor" href="#relations" aria-label="Permalink to &quot;Relations&quot;">​</a></h1><ul><li><strong>Relations</strong></li></ul><h2 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h2><ul><li><strong>new Relations</strong></li></ul><h2 id="tomany" tabindex="-1">toMany <a class="header-anchor" href="#tomany" aria-label="Permalink to &quot;toMany&quot;">​</a></h2><p>Define a toMany relation between entities, indicating a one-to-many relationship. This method allows you to establish a relationship where one entity can have multiple related entities.</p><h4 id="returns" tabindex="-1">returns: <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;returns:&quot;">​</a></h4><p>A decorator function to apply the toMany relation to an entity field.</p><p>Example usage:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span>@Relations.toMany(() =&gt; Order)</span></span>
<span class="line"><span>orders?: Order[];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// or with a custom field name:</span></span>
<span class="line"><span>@Relations.toMany(() =&gt; Order, &quot;customerId&quot;)</span></span>
<span class="line"><span>orders?: Order[];</span></span></code></pre></div><p>Arguments:</p><ul><li><strong>toEntityType</strong></li><li><strong>fieldInToEntity</strong> - (Optional) The field in the target entity that represents the relation. Use this if you want to specify a custom field name for the relation.</li></ul><h2 id="toone" tabindex="-1">toOne <a class="header-anchor" href="#toone" aria-label="Permalink to &quot;toOne&quot;">​</a></h2><p>Define a to-one relation between entities, indicating a one-to-one relationship. If no field or fields are provided, it will automatically create a field in the database to represent the relation.</p><h4 id="returns-1" tabindex="-1">returns: <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;returns:&quot;">​</a></h4><p>A decorator function to apply the to-one relation to an entity field.</p><p>Example usage:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span>@Relations.toOne(() =&gt; Customer)</span></span>
<span class="line"><span>customer?: Customer;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span>Fields.string()</span></span>
<span class="line"><span>customerId?: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Relations.toOne(() =&gt; Customer, &quot;customerId&quot;)</span></span>
<span class="line"><span>customer?: Customer;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span>Fields.string()</span></span>
<span class="line"><span>customerId?: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Relations.toOne(() =&gt; Customer, {</span></span>
<span class="line"><span>  field: &quot;customerId&quot;,</span></span>
<span class="line"><span>  defaultIncluded: true</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>customer?: Customer;</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span>Fields.string()</span></span>
<span class="line"><span>customerId?: string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Relations.toOne(() =&gt; Customer, {</span></span>
<span class="line"><span>  fields: {</span></span>
<span class="line"><span>    customerId: &quot;id&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>customer?: Customer;</span></span></code></pre></div><p>Arguments:</p><ul><li><strong>toEntityType</strong></li><li><strong>options</strong> - (Optional): An object containing options for configuring the to-one relation. <ul><li><strong>fields</strong> - An object specifying custom field names for the relation. Each key represents a field in the related entity, and its value is the corresponding field in the source entity. For example, <code>{ customerId: &#39;id&#39; }</code> maps the &#39;customerId&#39; field in the related entity to the &#39;id&#39; field in the source entity. This is useful when you want to define custom field mappings for the relation.</li><li><strong>field</strong> - The name of the field for this relation.</li><li><strong>findOptions</strong> - Find options to apply to the relation when fetching related entities. You can specify a predefined set of find options or provide a function that takes the source entity and returns find options dynamically. These options allow you to customize how related entities are retrieved.</li><li><strong>defaultIncluded</strong> - Determines whether the relation should be included by default when querying the source entity. When set to true, related entities will be automatically included when querying the source entity. If false or not specified, related entities will need to be explicitly included using the <code>include</code> option.</li></ul></li></ul>`,23),i=[o];function l(p,r,c,d,u,h){return s(),e("div",null,i)}const m=n(t,[["render",l]]);export{g as __pageData,m as default};