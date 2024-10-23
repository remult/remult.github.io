import{_ as t,c as e,o as a,a5 as i}from"./chunks/framework.C7bC4sbb.js";const _=JSON.parse('{"title":"migrate","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ref_migrate.md","filePath":"docs/ref_migrate.md","lastUpdated":1724738315000}'),r={name:"docs/ref_migrate.md"},o=i('<h1 id="migrate" tabindex="-1">migrate <a class="header-anchor" href="#migrate" aria-label="Permalink to &quot;migrate&quot;">​</a></h1><p>Applies migration scripts to update the database schema.</p><h4 id="see" tabindex="-1">see: <a class="header-anchor" href="#see" aria-label="Permalink to &quot;see:&quot;">​</a></h4><p><a href="https://remult.dev/docs/migrations.html" target="_blank" rel="noreferrer">Migrations</a></p><p>Arguments:</p><ul><li><strong>options</strong> - Configuration options for applying migrations. <ul><li><strong>migrations</strong> - An object containing the migration scripts, each keyed by a unique identifier.</li><li><strong>dataProvider</strong> - The data provider instance or a function returning a promise of the data provider.</li><li><strong>migrationsTable</strong> - (Optional) The name of the table that tracks applied migrations. Default is &#39;__remult_migrations_version&#39;.</li><li><strong>endConnection</strong> - (Optional) Determines whether to close the database connection after applying migrations. Default is false.</li><li><strong>beforeMigration</strong> - (Optional) A callback function that is called before each migration is applied. Receives an object with the migration index.</li><li><strong>afterMigration</strong> - (Optional) A callback function that is called after each migration is applied. Receives an object with the migration index and the duration of the migration.</li></ul></li></ul>',6),n=[o];function s(l,c,g,d,p,m){return a(),e("div",null,n)}const f=t(r,[["render",s]]);export{_ as __pageData,f as default};