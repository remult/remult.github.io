import{_ as e,c as a,o as n,a5 as s}from"./chunks/framework.QXCuR9m2.js";const m=JSON.parse('{"title":"Introduction to Mutable Controllers and Backend Methods","description":"","frontmatter":{},"headers":[],"relativePath":"docs/mutable-controllers.md","filePath":"docs/mutable-controllers.md","lastUpdated":1714395765000}'),o={name:"docs/mutable-controllers.md"},t=s(`<h1 id="introduction-to-mutable-controllers-and-backend-methods" tabindex="-1">Introduction to Mutable Controllers and Backend Methods <a class="header-anchor" href="#introduction-to-mutable-controllers-and-backend-methods" aria-label="Permalink to &quot;Introduction to Mutable Controllers and Backend Methods&quot;">​</a></h1><p>In web development architectures, mutable controllers offer a convenient way to manage state and facilitate interactions between the client (frontend) and the server (backend). These controllers are useful in scenarios where state needs to be maintained and manipulated across server calls, providing a streamlined approach to handling data.</p><h2 id="overview-of-controller-backend-methods" tabindex="-1">Overview of Controller Backend Methods <a class="header-anchor" href="#overview-of-controller-backend-methods" aria-label="Permalink to &quot;Overview of Controller Backend Methods&quot;">​</a></h2><p>A Controller is a class designed to encapsulate business logic and data processing. When a backend method in a controller is called, it ensures that all field values are preserved and appropriately transferred between the frontend and backend, maintaining state throughout the process.</p><h3 id="defining-a-mutable-controller" tabindex="-1">Defining a Mutable Controller <a class="header-anchor" href="#defining-a-mutable-controller" aria-label="Permalink to &quot;Defining a Mutable Controller&quot;">​</a></h3><p>The mutable controller is typically defined in a shared module, allowing both the frontend and backend to interact with it efficiently. Below is an example of how to define such a controller and a backend method within it.</p><h3 id="explanation-with-data-flow-and-example-usage" tabindex="-1">Explanation with Data Flow and Example Usage <a class="header-anchor" href="#explanation-with-data-flow-and-example-usage" aria-label="Permalink to &quot;Explanation with Data Flow and Example Usage&quot;">​</a></h3><p>This example demonstrates the use of a mutable controller, <code>UserSignInController</code>, to handle the sign-in process for users in a web application. Let&#39;s break down the key components of this example:</p><ol><li><p><strong>Controller Definition</strong>: The <code>UserSignInController</code> is a class annotated with <code>@Controller(&#39;UserSignInController&#39;)</code>, indicating that it serves as a controller for handling user sign-in operations.</p></li><li><p><strong>Data Flow</strong>: When the <code>signInUser</code> backend method is called from the frontend, all the values of the controller fields (<code>email</code>, <code>password</code>, <code>rememberMe</code>) will be sent to the backend for processing. Once the method completes its execution, the updated values (if any) will be sent back to the frontend.</p></li></ol><h3 id="example-usage" tabindex="-1">Example Usage <a class="header-anchor" href="#example-usage" aria-label="Permalink to &quot;Example Usage&quot;">​</a></h3><p>Here&#39;s how you can use the <code>UserSignInController</code> on the frontend to initiate the sign-in process:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki dark-plus vp-code" tabindex="0"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> signInController</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#DCDCAA;"> UserSignInController</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">signInController</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;user@example.com&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">signInController</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">password</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;password123&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">signInController</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">rememberMe</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">true</span><span style="color:#6A9955;"> // Optional: Set to true if the user wants to remain logged in</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#569CD6;">  const</span><span style="color:#4FC1FF;"> user</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#9CDCFE;"> signInController</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">signInUser</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">\`User signed in: </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">user</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">email</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">  console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">error</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Sign-in failed:&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">error</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre></div><p>In this example, we create an instance of <code>UserSignInController</code> and set its <code>email</code>, <code>password</code>, and <code>rememberMe</code> fields with the appropriate values. We then call the <code>signInUser</code> method to initiate the sign-in process. If successful, we log a message indicating that the user has signed in. If an error occurs during the sign-in process, we catch the error and log a corresponding error message.</p><p>This usage demonstrates how to interact with the mutable controller to handle user sign-in operations seamlessly within a web application.</p><h3 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p>Mutable controllers and backend methods provide a powerful mechanism for managing state and handling user interactions in web applications. By encapsulating business logic and data processing within controllers, developers can ensure consistent behavior and efficient data flow between the frontend and backend. With the ability to preserve and transfer field values during server calls, mutable controllers facilitate a smooth and responsive user experience, enhancing the overall functionality and performance of web applications.</p>`,16),l=[t];function r(c,i,p,d,h,D){return n(),a("div",null,l)}const y=e(o,[["render",r]]);export{m as __pageData,y as default};
