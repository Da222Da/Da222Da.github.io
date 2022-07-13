<template><h1 id="browser-event-浏览器事件机制" tabindex="-1"><a class="header-anchor" href="#browser-event-浏览器事件机制" aria-hidden="true">#</a> Browser Event 浏览器事件机制</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#简介-整体角度了解浏览器事件机制">简介：整体角度了解浏览器事件机制</RouterLink><ul><li><RouterLink to="#_1-事件-javascript-与-html-的交互方式。">1.事件：JavaScript 与 HTML 的交互方式。</RouterLink></li><li><RouterLink to="#_2-事件流-描述了页面接收事件的顺序。">2.事件流：描述了页面接收事件的顺序。</RouterLink></li><li><RouterLink to="#_3-事件处理程序">3.事件处理程序</RouterLink></li><li><RouterLink to="#_4-事件对象-event">4.事件对象 Event</RouterLink></li><li><RouterLink to="#_5-事件类型">5.事件类型</RouterLink></li></ul></li><li><RouterLink to="#use">Use</RouterLink><ul><li><RouterLink to="#_01-阻止-a-链接默认点击事件自动跳转-href-属性值的行为">01. 阻止 a 链接默认点击事件自动跳转 href 属性值的行为</RouterLink></li><li><RouterLink to="#_02-在-dom-事件流中-如何控制事件处理程序的执行顺序">02.在 DOM 事件流中，如何控制事件处理程序的执行顺序？</RouterLink></li></ul></li></ul></nav>
</div>
<h2 id="简介-整体角度了解浏览器事件机制" tabindex="-1"><a class="header-anchor" href="#简介-整体角度了解浏览器事件机制" aria-hidden="true">#</a> 简介：整体角度了解浏览器事件机制</h2>
<h3 id="_1-事件-javascript-与-html-的交互方式。" tabindex="-1"><a class="header-anchor" href="#_1-事件-javascript-与-html-的交互方式。" aria-hidden="true">#</a> 1.事件：JavaScript 与 HTML 的交互方式。</h3>
<h3 id="_2-事件流-描述了页面接收事件的顺序。" tabindex="-1"><a class="header-anchor" href="#_2-事件流-描述了页面接收事件的顺序。" aria-hidden="true">#</a> 2.事件流：描述了页面接收事件的顺序。</h3>
<div class="custom-container danger"><p class="custom-container-title">为什么会有事件流的概念?</p>
<p>当你点击一个按钮时，实际上不光点击了这个按钮，还点击了它的容器以及整个页面。</p>
<p>描述按钮(事件源)、按钮容器、以及整个页面三者之间如何传递点击事件？</p>
<p>这便是事件流定义的。</p>
</div>
<ul>
<li>事件流的主要形式：
<ul>
<li>冒泡事件流<code>div(click) -&gt; body -&gt; html -&gt; #document</code></li>
<li>捕获事件流<code>#document -&gt; html -&gt; body -&gt; div(click)</code></li>
<li>(主流)DOM 事件流<code>捕获阶段 -&gt; 达到事件源 -&gt; 冒泡阶段</code>
<ul>
<li>1.捕获阶段<code>#document -&gt; html -&gt; body</code></li>
<li>2.达到事件源</li>
<li>3.冒泡阶段<code>div(目标元素) -&gt; body -&gt; html -&gt; #document</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_3-事件处理程序" tabindex="-1"><a class="header-anchor" href="#_3-事件处理程序" aria-hidden="true">#</a> 3.事件处理程序</h3>
<div class="custom-container danger"><p class="custom-container-title">什么是事件处理程序？</p>
<p>假设你点击了一个按钮。</p>
<p>我们希望这个点击事件在事件流传递过程中，当传递到按钮的时候，打印一句&quot;Hello World&quot;。</p>
<p>我们可以利用事件监听器<code>例如，addEventListener</code>来定义事件处理程序。</p>
</div>
<ul>
<li>(不推荐)以 HTML 属性的形式<code>例如，&lt;button onclick=&quot;console.log('Clike Me')&quot;&gt;Click&lt;/button&gt;</code></li>
<li>(不推荐)JavaScript 程序 &amp;&amp; DOM0
<ul>
<li>添加事件处理程序<code>例如，document.getElementById(&quot;Click&quot;).onclick = () =&gt; {};</code></li>
<li>移除事件处理程序<code>例如，document.getElementById(&quot;Click&quot;).onclick = null;</code></li>
</ul>
</li>
<li>JavaScript 程序 &amp;&amp; DOM2
<ul>
<li>添加事件处理程序<code>addEventListener('click', () =&gt; {}, false)</code>
<ul>
<li>参数 1：事件名</li>
<li>参数 2：事件处理函数</li>
<li>参数 3：布尔值<code>true 在捕获阶段调用事件处理程序，false（默认值）在冒泡阶段调用事件处理程序。</code></li>
</ul>
</li>
<li>移除事件处理程序<code>removeEventListener('click', () =&gt; {}, false)</code></li>
</ul>
</li>
</ul>
<h3 id="_4-事件对象-event" tabindex="-1"><a class="header-anchor" href="#_4-事件对象-event" aria-hidden="true">#</a> 4.事件对象 Event</h3>
<div class="custom-container danger"><p class="custom-container-title">什么是事件对象?</p>
<p>当 DOM 事件触发时，所有相关信息都会被收集并存储在一个名为 event 的对象中，根据实际需求，使用者决定是否需要将其传入事件处理的回调函数中。</p>
</div>
<ul>
<li>DOM 事件对象的公共属性和方法
<table>
<thead>
<tr>
<th style="text-align:left">属性/方法</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">读写</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">event.type</td>
<td style="text-align:center">String</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">事件类型</td>
</tr>
<tr>
<td style="text-align:left">event.target</td>
<td style="text-align:center">Node</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">事件源</td>
</tr>
<tr>
<td style="text-align:left">event.currentTarget</td>
<td style="text-align:center">Node</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">当前事件处理程序所绑定的元素</td>
</tr>
<tr>
<td style="text-align:left">event.perventDefault()</td>
<td style="text-align:center">Function</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">用于取消事件的默认行为</td>
</tr>
<tr>
<td style="text-align:left">event.cancelable</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">是否可以调用 e.preventDefault()</td>
</tr>
<tr>
<td style="text-align:left">event.defaultPrevented</td>
<td style="text-align:center">Boolean</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">e.preventDefault() 是否已经被调用过了</td>
</tr>
<tr>
<td style="text-align:left">event.eventPhase</td>
<td style="text-align:center">Number</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表到达目标，3 代表冒泡阶段</td>
</tr>
<tr>
<td style="text-align:left">event.stopPropagation()</td>
<td style="text-align:center">Function</td>
<td style="text-align:center">readonly</td>
<td style="text-align:left">用于取消所有后续事件捕获或事件冒泡</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h3 id="_5-事件类型" tabindex="-1"><a class="header-anchor" href="#_5-事件类型" aria-hidden="true">#</a> 5.事件类型</h3>
<div class="custom-container danger"><p class="custom-container-title">Web 浏览器中为什么要引入事件类型这个概念？</p>
<ol>
<li>Web 浏览器中可以发生很多种事件，事件类型可以帮助我们区分。</li>
<li>我们可以根据所发生事件的类型来决定了事件对象 Event 中会保存什么信息。</li>
</ol>
</div>
<ul>
<li>用户界面事件（UIEvent）<code>涉及与 BOM 交互的通用浏览器事件。</code>
<ul>
<li>load 事件
<ul>
<li>在 window 上当页面加载完成后触发</li>
<li>在<img>元素上当图片加载完成后触发</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<h3 id="_01-阻止-a-链接默认点击事件自动跳转-href-属性值的行为" tabindex="-1"><a class="header-anchor" href="#_01-阻止-a-链接默认点击事件自动跳转-href-属性值的行为" aria-hidden="true">#</a> 01. 阻止 a 链接默认点击事件自动跳转 href 属性值的行为</h3>
<details class="custom-container details"><summary>（例子）执行 e.preventDefault()，阻止 a 标签的默认事件行为</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myLink<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>百度一下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myLink"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h3 id="_02-在-dom-事件流中-如何控制事件处理程序的执行顺序" tabindex="-1"><a class="header-anchor" href="#_02-在-dom-事件流中-如何控制事件处理程序的执行顺序" aria-hidden="true">#</a> 02.在 DOM 事件流中，如何控制事件处理程序的执行顺序？</h3>
<details class="custom-container details"><summary>（例子）给 button 和 body 绑定事件，来理解触发事件执行函数的顺序</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myBtn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Clicked<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myBtn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">"click"</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"btn addEventListener:false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 抵到事件源对象时，触发绑定函数 addEventListener:false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 最早执行</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">"click"</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"body addEventListener:true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 捕获阶段触发了绑定函数 body addEventListener:true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 最晚执行</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">"click"</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"body addEventListener:false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3 冒泡阶段触发了绑定函数 body addEventListener:false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token boolean">false</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">phase</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>phase<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">"捕获阶段触发了绑定函数"</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">"抵到事件源对象时，触发绑定函数"</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token string">"冒泡阶段触发了绑定函数"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></details>
</template>
