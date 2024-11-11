import{_ as s,c as n,o as a,a5 as e}from"./chunks/framework.C7bC4sbb.js";const u=JSON.parse('{"title":"Microsoft SQL Server","description":"","frontmatter":{},"headers":[],"relativePath":"docs/installation/database/mssql.md","filePath":"docs/installation/database/mssql.md","lastUpdated":1729890666000}'),o={name:"docs/installation/database/mssql.md"},l=e(`<h1 id="microsoft-sql-server" tabindex="-1">Microsoft SQL Server <a class="header-anchor" href="#microsoft-sql-server" aria-label="Permalink to &quot;Microsoft SQL Server&quot;">​</a></h1><h3 id="step-1-install-required-packages" tabindex="-1">Step 1: Install Required Packages <a class="header-anchor" href="#step-1-install-required-packages" aria-label="Permalink to &quot;Step 1: Install Required Packages&quot;">​</a></h3><p>Install <code>knex</code> and <code>tedious</code> to enable Microsoft SQL Server integration.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#CE9178;"> knex</span><span style="color:#CE9178;"> tedious</span></span></code></pre></div><h3 id="step-2-configure-the-dataprovider" tabindex="-1">Step 2: Configure the <code>dataProvider</code> <a class="header-anchor" href="#step-2-configure-the-dataprovider" aria-label="Permalink to &quot;Step 2: Configure the \`dataProvider\`&quot;">​</a></h3><p>In your <code>index.ts</code> (or server file), configure the <code>dataProvider</code> to use Microsoft SQL Server with the following <code>knex</code> client configuration:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#6A9955;">// index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &quot;express&quot;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/remult-express&quot;</span></span>
<span class="line highlighted"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createKnexDataProvider</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &quot;remult/remult-knex&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#DCDCAA;">  remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">    dataProvider:</span><span style="color:#DCDCAA;"> createKnexDataProvider</span><span style="color:#D4D4D4;">({</span></span>
<span class="line highlighted"><span style="color:#6A9955;">      // Knex client configuration for MSSQL</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      client:</span><span style="color:#CE9178;"> &quot;mssql&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">      connection:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        server:</span><span style="color:#CE9178;"> &quot;127.0.0.1&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// SQL Server address</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        database:</span><span style="color:#CE9178;"> &quot;test&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Your database name</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        user:</span><span style="color:#CE9178;"> &quot;your_database_user&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// SQL Server user</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        password:</span><span style="color:#CE9178;"> &quot;your_database_password&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Password for the SQL Server user</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">        options:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">          enableArithAbort:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Required option for newer versions of MSSQL</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">          encrypt:</span><span style="color:#569CD6;"> false</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Set to true if using Azure</span></span>
<span class="line highlighted"><span style="color:#9CDCFE;">          instanceName:</span><span style="color:#CE9178;"> &quot;sqlexpress&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Optional: Define the SQL Server instance name</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">        },</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">      },</span></span>
<span class="line highlighted"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><h3 id="step-3-use-an-existing-knex-provider-optional" tabindex="-1">Step 3: Use an Existing <code>knex</code> Provider (Optional) <a class="header-anchor" href="#step-3-use-an-existing-knex-provider-optional" aria-label="Permalink to &quot;Step 3: Use an Existing \`knex\` Provider (Optional)&quot;">​</a></h3><p>If you have an existing <code>knex</code> instance, you can easily integrate it with Remult like this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> express</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;express&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">KnexDataProvider</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-knex&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">remultExpress</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;remult/remult-express&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> knex</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;knex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> knexDb</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">knex</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  client:</span><span style="color:#CE9178;"> &#39;mssql&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#6A9955;">// Specify MSSQL as the client</span></span>
<span class="line"><span style="color:#9CDCFE;">  connection:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // Add your MSSQL connection details here</span></span>
<span class="line"><span style="color:#9CDCFE;">    server:</span><span style="color:#CE9178;"> &#39;127.0.0.1&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    user:</span><span style="color:#CE9178;"> &#39;your_database_user&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    password:</span><span style="color:#CE9178;"> &#39;your_database_password&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    database:</span><span style="color:#CE9178;"> &#39;test&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> app</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">express</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#DCDCAA;">  remultExpress</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    dataProvider:</span><span style="color:#569CD6;"> new</span><span style="color:#DCDCAA;"> KnexDataProvider</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">knexDb</span><span style="color:#D4D4D4;">), </span><span style="color:#6A9955;">// Use your existing knex instance</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span></code></pre></div><h3 id="explanation" tabindex="-1">Explanation: <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation:&quot;">​</a></h3><ul><li><strong><code>tedious</code></strong>: The underlying driver used by <code>knex</code> to connect to SQL Server.</li><li><strong><code>client: &quot;mssql&quot;</code></strong>: Specifies that we are using Microsoft SQL Server.</li><li><strong><code>createKnexDataProvider</code></strong>: Allows you to use <code>knex</code> to connect to SQL Server as the data provider for Remult.</li><li><strong><code>options</code></strong>: The additional configuration for SQL Server, including <code>enableArithAbort</code> and <code>encrypt</code>.</li></ul><p>This setup lets you easily connect Remult to Microsoft SQL Server using <code>knex</code> for query building and <code>tedious</code> as the driver.</p>`,13),p=[l];function t(r,c,i,D,d,y){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};