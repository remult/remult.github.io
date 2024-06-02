import{_ as s,o as n,c as a,R as e}from"./chunks/framework.UFCy2Zbw.js";const y=JSON.parse('{"title":"SubscriptionChannel","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ref_subscriptionchannel.md","filePath":"docs/ref_subscriptionchannel.md","lastUpdated":1711389142000}'),o={name:"docs/ref_subscriptionchannel.md"},t=e(`<h1 id="subscriptionchannel" tabindex="-1">SubscriptionChannel <a class="header-anchor" href="#subscriptionchannel" aria-label="Permalink to &quot;SubscriptionChannel&quot;">​</a></h1><p>The <code>SubscriptionChannel</code> class is used to send messages from the backend to the frontend, using the same mechanism used by live queries.</p><h4 id="example" tabindex="-1">example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example:&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">// Defined in code that is shared between the frontend and the backend</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> statusChange</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> SubscriptionChannel</span><span style="color:#D4D4D4;">&lt;{ </span><span style="color:#9CDCFE;">oldStatus</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">newStatus</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;"> }&gt;(</span><span style="color:#CE9178;">&quot;statusChange&quot;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// Backend: Publishing a message</span></span>
<span class="line"><span style="color:#9CDCFE;">statusChange</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">publish</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">oldStatus:</span><span style="color:#B5CEA8;"> 1</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">newStatus:</span><span style="color:#B5CEA8;"> 2</span><span style="color:#D4D4D4;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// Frontend: Subscribing to messages</span></span>
<span class="line"><span style="color:#9CDCFE;">statusChange</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">subscribe</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`Status changed from </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">oldStatus</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;"> to </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">newStatus</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// Note: If you want to publish from the frontend, use a BackendMethod for that.</span></span></code></pre></div><h2 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h2><p>Constructs a new <code>SubscriptionChannel</code> instance.</p><p>Arguments:</p><ul><li><strong>channelKey</strong> - The key that identifies the channel.</li></ul><h2 id="channelkey" tabindex="-1">channelKey <a class="header-anchor" href="#channelkey" aria-label="Permalink to &quot;channelKey&quot;">​</a></h2><p>The key that identifies the channel.</p><h2 id="publish" tabindex="-1">publish <a class="header-anchor" href="#publish" aria-label="Permalink to &quot;publish&quot;">​</a></h2><p>Publishes a message to the channel. This method should only be used on the backend.</p><p>Arguments:</p><ul><li><strong>message</strong> - The message to be published.</li><li><strong>remult</strong> - An optional instance of Remult to use for publishing the message.</li></ul><h2 id="subscribe" tabindex="-1">subscribe <a class="header-anchor" href="#subscribe" aria-label="Permalink to &quot;subscribe&quot;">​</a></h2><p>Subscribes to messages from the channel. This method should only be used on the frontend.</p><h4 id="returns" tabindex="-1">returns: <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;returns:&quot;">​</a></h4><p>A promise that resolves to a function that can be used to unsubscribe from the channel.</p><p>Arguments:</p><ul><li><strong>next</strong> - A function that will be called with each message received.</li><li><strong>remult</strong> - An optional instance of Remult to use for the subscription.</li></ul>`,20),l=[t];function p(r,c,i,h,u,D){return n(),a("div",null,l)}const b=s(o,[["render",p]]);export{y as __pageData,b as default};
