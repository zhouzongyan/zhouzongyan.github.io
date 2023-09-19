(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{335:function(e,t,f){"use strict";f.r(t);var u=f(7),s=Object(u.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_14-uselayouteffect基础用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-uselayouteffect基础用法"}},[e._v("#")]),e._v(" 14 useLayoutEffect基础用法")]),e._v(" "),t("h2",{attrs:{id:"uselayouteffect概念解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect概念解释"}},[e._v("#")]),e._v(" useLayoutEffect概念解释")]),e._v(" "),t("p",[e._v("我们第九个要学习的Hook(钩子函数)是useLayoutEffect，他的作用是“勾住”挂载或重新渲染完成这2个组件生命周期函数。useLayoutEffect使用方法、所传参数和useEffect完全相同。")]),e._v(" "),t("p",[e._v("他们的不同点在于，你可以把useLayoutEffect等同于componentDidMount、componentDidUpdate，因为他们调用阶段是相同的。而useEffect是在componentDidMount、componentDidUpdate调用之后才会触发的。")]),e._v(" "),t("p",[e._v("也就是说，当组件所有DOM都渲染完成后，同步调用useLayoutEffect，然后再调用useEffect。")]),e._v(" "),t("p",[e._v("useLayoutEffect永远要比useEffect先触发完成。")]),e._v(" "),t("p",[e._v("那通常在useLayoutEffect阶段我们可以做什么呢？"),t("br"),e._v("\n答：在触发useLayoutEffect阶段时，页面全部DOM已经渲染完成，此时可以获取当前页面所有信息，包括页面显示布局等，你可以根据需求修改调整页面。")]),e._v(" "),t("p",[e._v("请注意，useLayoutEffect对页面的某些修改调整可能会触发组件重新渲染。如果是对DOM进行一些样式调整是不会触发重新渲染的，这点和useEffect是相同的。")]),e._v(" "),t("p",[e._v("在react官方文档中，明确表示只有在useEffect不能满足你组件需求的情况下，才应该考虑使用useLayoutEffect。  官方推荐优先使用useEffect。")]),e._v(" "),t("p",[e._v("请注意：如果是服务器渲染，无论useEffect还是useLayoutEffect 都无法在JS代码加载完成之前执行，因此都会收到错误警告。  服务器渲染时若想使用useEffect，解决方案不在本章中讨论。")]),e._v(" "),t("p",[e._v("让我们回到useLayoutEffect基础学习中。")]),e._v(" "),t("h2",{attrs:{id:"uselayouteffect是来解决什么问题的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect是来解决什么问题的"}},[e._v("#")]),e._v(" useLayoutEffect是来解决什么问题的？")]),e._v(" "),t("p",[e._v("答：useLayoutEffect的作用是“当页面挂载或渲染完成时，再给你一次机会对页面进行修改”。")]),e._v(" "),t("p",[e._v("如果你选择使用useLayoutEffect，对页面进行了修改，更改样式不会引发重新渲染，但是修改变量则会触发再次渲染。"),t("br"),e._v("\n如果你不使用useLayoutEffect，那么之后就应该调用useEffect。")]),e._v(" "),t("p",[e._v("补充说明："),t("br"),e._v("\n1、优先使用useEffect，useEffect无法满足需求时再考虑使用useLayoutEffect。"),t("br"),e._v("\n2、useLayoutEffect先触发，useEffect后触发。"),t("br"),e._v("\n3、useEffect和useLayoutEffect在服务器端渲染时，都不行，需要寻求别的解决方案。")]),e._v(" "),t("h2",{attrs:{id:"uselayouteffect函数源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect函数源码"}},[e._v("#")]),e._v(" useLayoutEffect函数源码：")]),e._v(" "),t("p",[e._v("回到useLayoutEffect的学习中，首先看一下React源码中的"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactHooks.js"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("//备注：源码采用TypeScript编写，如果不懂TS代码，阅读起来稍显困难\nexport function useLayoutEffect(\n  create: () => (() => void) | void,\n  deps: Array<mixed> | void | null,\n): void {\n  const dispatcher = resolveDispatcher();\n  return dispatcher.useLayoutEffect(create, deps);\n}\n")])])]),t("p",[e._v("上述代码看不懂没关系，本系列教程只是讲述“如何使用Hook”，并不是“Hook源码分析”。^_^  你只需知道useLayoutEffect的用法和useEffect一模一样即可。")]),e._v(" "),t("h2",{attrs:{id:"uselayouteffect基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect基本用法"}},[e._v("#")]),e._v(" useLayoutEffect基本用法")]),e._v(" "),t("p",[e._v("useLayoutEffect的用法和useEffect的用法相同，所以不再阐述。")]),e._v(" "),t("h2",{attrs:{id:"uselayouteffect使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uselayouteffect使用示例"}},[e._v("#")]),e._v(" useLayoutEffect使用示例：")]),e._v(" "),t("p",[e._v("请原谅，目前竟然找不到一个useLayoutEffect合适的例子，因为能够想到的应用场景其实都可以用useEffect来代替。")]),e._v(" "),t("p",[e._v("那只能贴出一段简单的代码，让你看确认一下，useLayoutEffect先于useEffect触发调用。")]),e._v(" "),t("p",[e._v("代码示例如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("import React,{useState,useEffect,useLayoutEffect} from 'react'\n\nfunction LayoutEffect() {\n  const [count,setCount] = useState(0);\n\n  useEffect(() => {\n    console.log('useEffect...');\n  },[count]);\n\n  useLayoutEffect(() => {\n    console.log('useLayoutEffect...');\n  },[count]);\n\n  return (\n    <div>\n        {count}\n        <button onClick={() => {setCount(count+1)}}>Click</button>\n    </div>\n  )\n}\nexport default LayoutEffect\n")])])]),t("p",[e._v("实际运行就会发现："),t("br"),e._v("\n无论是首次挂载，还是重新渲染，console面板中，输出顺序都是"),t("br"),e._v("\nuseLayoutEffect..."),t("br"),e._v("\nuseEffect...")]),e._v(" "),t("p",[e._v("也就确认，先执行useLayoutEffect，后执行useEffect。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("至此，关于useLayoutEffect基础用法已经讲完，没有高级用法，直接进入下一个Hook。")])])}),[],!1,null,null,null);t.default=s.exports}}]);