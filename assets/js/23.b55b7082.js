(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{337:function(t,n,e){"use strict";e.r(n);var o=e(7),u=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_16-自定义hook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_16-自定义hook"}},[t._v("#")]),t._v(" 16 自定义hook")]),t._v(" "),n("h2",{attrs:{id:"自定义hook概念解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook概念解释"}},[t._v("#")]),t._v(" 自定义hook概念解释")]),t._v(" "),n("p",[t._v("像useState、useEffect、useContext、useReducer、useCallback、useMemo、useRef、useImperativeHandle、useLayoutEffect、useDebugValue这10个hook是react默认自带的hook，而所谓自定义hook就是由我们自己编写的hook。")]),t._v(" "),n("p",[t._v("所谓自定义hook就是把原来写在函数组件内的hook相关代码抽离出来，单独定义成一个函数，而这个抽离出来的hook函数就称之为“自定义hook钩子函数”，简称“自定义hook”。")]),t._v(" "),n("h2",{attrs:{id:"自定义hook是来解决什么问题的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook是来解决什么问题的"}},[t._v("#")]),t._v(" 自定义hook是来解决什么问题的？")]),t._v(" "),n("p",[t._v("答：自定义hook是将原来在组件中编写的相关hook代码抽离出组件，让hook相关代码独立存在，达到优化代码结构、相关hook代码可以重复使用的目的。")]),t._v(" "),n("p",[t._v("补充说明："),n("br"),t._v("\n1、如果你在别人的项目代码中，发现除了react默认自带的那10个hook以外，出现了 useXxx() 这样的看着像hook的函数，可以肯定那些就是自定义的hook。"),n("br"),t._v("\n2、随着react新版本发布，可能会出现更多新的、默认自带的hook。")]),t._v(" "),n("h2",{attrs:{id:"自定义hook基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook基本用法"}},[t._v("#")]),t._v(" 自定义hook基本用法")]),t._v(" "),n("p",[t._v("首先我们知道hook只能用在函数组件中，而函数组件本身是一个稍微特殊的函数，尽管稍微特殊但毕竟他也遵循一般函数的使用规律。 所谓“把原来写在函数组件内的hook相关代码抽离出来，单独定义成一个函数” 本质上就是把函数内部定义的变量或方法拿出来，放到函数外面单独定义成一个函数。")]),t._v(" "),n("p",[t._v("这个抽离出来新定义的函数，遵循JS默认的函数用法，即函数参数可以任意设定，返回值也可以是任意内容。")]),t._v(" "),n("p",[t._v("请注意：react规定所有的自定义hook函数命名时必须使用 useXxx 这种形式。")]),t._v(" "),n("p",[t._v("举一个最简单的例子：假设我们有一个组件，组件内部有一个count的变量，我们的代码之前是这样的：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import React,{useState} from 'react'\nfunction CurrentComponent() {\n  const [count,setCount] = useState(0);//请注意这行代码，就是我们要即将抽离出去的hook\n  return (\n    <div>\n        {count}\n        <button onClick={() => setCount(count+1)}>add +1</button>\n    </div>\n  )\n}\nexport default CurrentComponent\n")])])]),n("p",[t._v("在上面这个组件中，通过 const [count,setCount] = useState(0) 定义了组件内的变量count和修改count的方法。那我们现在将这行相关的hook抽离出函数组件。我们计划把抽离出来的、和count相关的函数，命名为useCount，修改后的代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("//useCount.js\nimport {useState} from 'react'；\nfunction useCount(initialValue){\n\n  //依然使用 useState 创建countcount和setCount\n  //并且将参数initialValue的值赋予给count作为默认值\n  //将创建好的count和setCount作为函数返回值 return 出去\n\n  const [count,setCount] = useState(initialValue);\n  return [count,setCount];\n}\nexport default useCount;\n\n//CurrentComponent.js\nimport React from 'react'\nimport useCount from './useCount';//引入useCount\nfunction CurrentComponent() {\n  const [count,setCount] = useCount(0);//请注意这里使用的是useCount，而不是useState\n  return (\n    <div>\n        {count}\n        <button onClick={() => setCount(count+1)}>add +1</button>\n    </div>\n  )\n}\nexport default CurrentComponent\n")])])]),n("h5",{attrs:{id:"代码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码分析"}},[t._v("#")]),t._v(" 代码分析：")]),t._v(" "),n("p",[t._v("1、我们将原本组件内定义的count相关代码抽离出组件，单独定义一个 useCount 函数。"),n("br"),t._v("\n2、组件需要使用 useCount，只需先引入useCount，然后把 useCount 当成普通函数使用就好了。"),n("br"),t._v("\n3、useCount就是我们自定义的hook。")]),t._v(" "),n("p",[t._v("注意：一般自定义hook顶部是不需要引入React的，只需要引入使用到的 hook 函数即可。"),n("br"),t._v("\n例如上面 useCount 顶部，我们写的是 import {useState} from 'react' 而不是 import React,{useState} from 'react'；")]),t._v(" "),n("p",[t._v("上面举例中的useCount非常简单，内部并没有过多逻辑，在实际开发中自定义hook内部肯定要有比较复杂的逻辑。")]),t._v(" "),n("p",[t._v("由于是单独定义的，所以自定义hook可以同时被多个组件引入和使用，达到代码复用的目的。")]),t._v(" "),n("p",[t._v("划重点，在实际项目中，通常自定义hook返回值有3种表现形式："),n("br"),t._v("\n1、不带返回值的函数"),n("br"),t._v("\n2、带普通返回值的函数"),n("br"),t._v("\n3、带特殊结构返回值的函数")]),t._v(" "),n("p",[t._v("以上3种不同返回值各有各的适用场景，下面就以实际示例来逐一说明。")]),t._v(" "),n("h2",{attrs:{id:"不带返回值的自定义hook使用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不带返回值的自定义hook使用示例"}},[t._v("#")]),t._v(" 不带返回值的自定义hook使用示例：")]),t._v(" "),n("p",[t._v("举例：若父组件内有多个子组件，每个子组件内部都有不同的业务代码，但是所有子组件有一个相同的功能，就是当自身内部变量value发生变化时，将网页标题改为变量value的值。")]),t._v(" "),n("p",[t._v("首先我们知道修改网页标题是在组件内部的useEffect()函数中修改，那结合上面的使用场景，我们可以将useEffect()单独抽离出来，作为一个自定义hook，命名为 useDocumentTitle，让所有子组件都复用这个useDocumentTitle。")]),t._v(" "),n("p",[t._v("useDocumentTitle 代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import {useEffect} from 'react'\nfunction useDocumentTitle(value) {\n  useEffect(() => {\n    document.title = value;\n  },[value]);\n}\nexport default useDocumentTitle;\n")])])]),n("p",[t._v("假设我们其中一个子组件的功能为："),n("br"),t._v("\n1、有1个number类型的变量count"),n("br"),t._v("\n2、有1个按钮，点击按钮后将count修改为一个随机数字"),n("br"),t._v("\n3、当组件重新渲染完成后，将网页标题修改为count的值")]),t._v(" "),n("p",[t._v("子组件代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import React,{useState} from 'react'\nimport useDocumentTitle from './useDocumentTitle';\nfunction ChildComponent() {\n  const [count,setCount] = useState(0);\n  useDocumentTitle(count);//把内部变量count传给useDocumentTitle，既作为网页标题内容，同时也作为useEffect的变量依赖\n  return (\n    <div>\n        <button onClick={() => setCount(Math.floor(Math.random()*1000))}>click me</button>\n    </div>\n  )\n}\nexport default ChildComponent\n")])])]),n("p",[t._v("其他子组件也使用useDocumentTitle，这样我们便将原本每个子组件都需要编写的useEffect改为统一的useDocumentTitle，实现了代码复用。")]),t._v(" "),n("p",[t._v("应用场景小总结："),n("br"),t._v("\n在这个示例中，useDocumentTitle函数并没有任何返回值，子组件使用useDocumentTitle时就好像原本那段useEffect代码本身就定义在那里似的。")]),t._v(" "),n("h2",{attrs:{id:"带普通返回值的自定义hook使用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带普通返回值的自定义hook使用示例"}},[t._v("#")]),t._v(" 带普通返回值的自定义hook使用示例：")]),t._v(" "),n("p",[t._v("在本章最开始讲解“自定义hook基本用法”时，所举的useCount例子非常简单，这次我们将对useCount进行功能上的扩展。")]),t._v(" "),n("p",[t._v("原本useCount只是定义了count和setCount，这次所谓的功能扩展，就是将setCount改为其他几种修改count的函数。"),n("br"),t._v("\n例如："),n("br"),t._v("\n1、添加 add()"),n("br"),t._v("\n2、减去 sub()"),n("br"),t._v("\n3、相乘 mul()"),n("br"),t._v("\n4、恢复初始值 reset()")]),t._v(" "),n("p",[t._v("修改后的useCount代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import {useState} from 'react'\nfunction useCount(initialValue){\n  const [count,setCount] = useState(initialValue);\n  const add = param => {setCount(prev => prev + param);}\n  const sub = param => {setCount(prev => prev - param);}\n  const mul = param => {setCount(prev => prev * param);}\n  const reset = () => {setCount(() => initialValue);}\n  return [count,add,sub,mul,reset]; //将count和定义的4个方法作为返回值 return 出去\n}\nexport default useCount;\n")])])]),n("p",[t._v("请注意：为了避免4个修改函数中得到的是旧的count，所以我们采用的是 setCount(prev => xxxxx) 这种修改方式，而不是直接使用 setCount(count xxx)。")]),t._v(" "),n("p",[t._v("CurrentComponent组件想使用useCount，代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import React from 'react'\nimport useCount from './useCount'\n\nfunction CurrentComponent() {\n  const [count,add,sub,mul,reset] = useCount(0); //使用useCount，并解构useCount的返回值\n  return (\n    <div>\n        {count}\n        <button onClick={() => {add(1)}}>+ 1</button>\n        <button onClick={() => {sub(1)}}>- 1</button>\n        <button onClick={() => {mul(2)}}>* 2</button>\n        <button onClick={() => {reset()}}>reset</button>\n    </div>\n  )\n}\nexport default CurrentComponent\n")])])]),n("p",[t._v("对于上面这个效果，你是否觉得眼熟？  没错，在讲解useReducer时，就使用useReducer实现了类似的一个效果。  只不过这次是为了讲解自定义hook，而那次是讲解如何使用useReducer替代useState实现复杂的业务。")]),t._v(" "),n("p",[t._v("应用场景小总结："),n("br"),t._v("\n1、我们可以在自定义hook中编写相关业务逻辑函数(方法)，并通过返回值的形式 return 出去，供其他组件调用。")]),t._v(" "),n("h2",{attrs:{id:"带特殊结构返回值的自定义hook使用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带特殊结构返回值的自定义hook使用示例"}},[t._v("#")]),t._v(" 带特殊结构返回值的自定义hook使用示例：")]),t._v(" "),n("p",[t._v("上一个代码示例讲解了“带普通返回值”的自定义hook，那这次要讲的“带特殊结构返回值”的自定义hook究竟差别在哪里？")]),t._v(" "),n("p",[t._v("“带特殊结构返回值”中的特殊是指？"),n("br"),t._v("\n答：我们把组件需要用到的多项属性设置，合并为一个对象 并 return 出去，供组件使用。")]),t._v(" "),n("p",[t._v("还是以示例来讲解会更容易理解，假设我们有一个登录组件，功能为："),n("br"),t._v("\n1、有一个用户名输入框"),n("br"),t._v("\n2、有一个密码输入框"),n("br"),t._v("\n3、有一个提交按钮")]),t._v(" "),n("p",[t._v("补充说明，为了简化代码，我们并不做真正的登录验证，点击提交按钮后："),n("br"),t._v("\n1、仅仅是alert一下用户名和密码，即表示登录"),n("br"),t._v("\n2、同时清除用户名和密码输入框里的内容")]),t._v(" "),n("p",[t._v("需求分析："),n("br"),t._v("\n1、每个输入框都是一个<input>，都需要绑定一个变量，都需要设置onChange事件"),n("br"),t._v("\n2、每一个输入框都需要清空内容")]),t._v(" "),n("p",[t._v("我们将定义一个自定义hook，命名为useInput，useInput来实现这2个输入框共有的业务逻辑。")]),t._v(" "),n("p",[t._v("useInput的代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import {useState} from 'react'\nfunction useInput(initialValue) {\n  const [value,setValue] = useState(initialValue); //定义输入框对应的值value\n  //定义reset函数，用来重置输入框\n  const reset = () => {\n    setValue(initialValue);\n  }\n  //定义一个 bind 对象，该对象有 value 和 onChange 2个属性\n  const bind = {\n    value,\n    onChange: eve => {\n        setValue(eve.target.value)\n    }\n  }\n  return [value,reset,bind];//将输入框的值、重置输入框函数、定义的bind对象作为返回值 return 出去\n}\nexport default useInput\n")])])]),n("p",[t._v("请注意：在useInput中，返回值 value、reset 我们很容易理解，但是 bind 是来做什么的？"),n("br"),t._v("\n答：这个 bind 就是我们前面提到的“带特殊结构返回值”，bind对象本身结构由2个属性value和onChange组成。"),n("br"),t._v("\n至于 bind 怎么用，很快揭晓。")]),t._v(" "),n("p",[t._v("登录组件LoginForm的代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("import React from 'react'\nimport useInput from './useInput';\nfunction LoginForm() {\n  const [usename,resetUsename,bindUsename] = useInput(''); //定义用户名输入框相关的变量\n  const [password,resetPassword,bindPassword] = useInput(''); //定义密码输入框相关的变量\n\n  const submitHandle = (eve) => {\n    eve.preventDefault(); //阻止form真正提交\n    alert(`usename:${usename}\\rpassword:${password}`); //通过alert，弹出用户名和密码的值\n    resetUsename(); //重置用户名输入框\n    resetPassword(); //重置密码输入框\n  }\n\n  //请特别留意用户名和密码输入框中的 {...bindUsename}和{...bindPassword}\n  return (\n    <form onSubmit={submitHandle}>\n        <label>usename:</label>\n        <input type='text' {...bindUsename} />\n        <label>password:</label>\n        <input type='password' {...bindPassword} />\n        <input type='submit' value='login' />\n    </form>\n  )\n}\nexport default LoginForm;\n")])])]),n("p",[t._v("对于获取输入框的值、以及调用输入框对应的reset()函数，相信你很容易理解。")]),t._v(" "),n("p",[t._v("下面对 {...bindUsename} 和 {...bindPassword} 做进一步说明："),n("br"),t._v("\n1、首先我们知道 {...obj} 这种在原生JS中，相当于把obj对象进行解构，然后得到一个浅拷贝的新对象。"),n("br"),t._v("\n2、但是在上面的代码中并不是这个意思，千万不要被迷惑。 在JSX中的某组件，如果要添加某属性，格式为 xxx={xxx}。")]),t._v(" "),n("p",[t._v("例如常见的给一个输入框绑定某变量，同时添加onChange事件，一般写法为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<input type='text' value={xx} onChange={xxxx} />\n")])])]),n("p",[t._v("而我们本次代码中，采用的是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<input type='text' {...bindUsename} />\n<input type='password' {...bindPassword} />\n")])])]),n("p",[t._v("这里面的 {...bindUsename}  {...bindPassword} 其实相当于把 bindUsename 和 bindPassword 进行了解构，就好像直接写在这里似的。")]),t._v(" "),n("p",[t._v("如果<input>中有非常多相同的属性，那么把这些相同属性提炼到 useInput 的 bind 中，这样可以简化组件里的代码。")]),t._v(" "),n("p",[t._v("应用场景小总结："),n("br"),t._v("\n1、在自定义hook中，将组件需要的多项属性合并成一个对象，供组件属性解构使用，会简化组件代码，提高代码复用率。")]),t._v(" "),n("p",[t._v("相信通过上面3个示例，对自定义hook的返回值不同形式的演示，举一反三，会帮助你灵活的编写自定义hook。")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("至此，关于自定义hook已经讲完。")]),t._v(" "),n("p",[t._v("我们对之前所有学过的hook进行一次小总结。")])])}),[],!1,null,null,null);n.default=u.exports}}]);