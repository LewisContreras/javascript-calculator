(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{52:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_57310_ProyectosGeek_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),_useState2=Object(C_Users_57310_ProyectosGeek_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),ecuation=_useState2[0],setEcuation=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),_useState4=Object(C_Users_57310_ProyectosGeek_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),current=_useState4[0],setCurrent=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),_useState6=Object(C_Users_57310_ProyectosGeek_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),previous=_useState6[0],setPrevious=_useState6[1],handleClick=function handleClick(e){var targetContent=e.target.textContent;if("AC"===targetContent)setEcuation(""),setCurrent(0);else if("/"===targetContent||"+"===targetContent||"-"===targetContent||"*"===targetContent)if(ecuation.endsWith("/-")||ecuation.endsWith("+-")||ecuation.endsWith("*-")||ecuation.endsWith("--")){var temporal=ecuation.substring(0,ecuation.length-2);setEcuation(temporal+targetContent),setCurrent(targetContent)}else if("="===previous)setEcuation(current+targetContent),setCurrent(targetContent);else if("/"===previous||"+"===previous||"-"===previous||"*"===previous)if("-"!==previous&&"-"!==targetContent){var _temporal=ecuation.substring(0,ecuation.length-1);setEcuation(_temporal+targetContent),setCurrent(targetContent)}else setEcuation(ecuation+targetContent),setCurrent(targetContent);else setCurrent(targetContent),setEcuation(ecuation+targetContent);else if(0===current)"0"===targetContent?setCurrent(0):(setCurrent(targetContent),setEcuation(ecuation+targetContent));else if("="===targetContent)try{var calculus=eval(ecuation);setEcuation(ecuation+"="+calculus),setCurrent(calculus)}catch(error){console.log(error),setEcuation(""),setCurrent(0)}else current.includes(".")&&"."==targetContent||(setCurrent(current+targetContent),setEcuation(ecuation+targetContent));setPrevious(targetContent)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{bg:"teal.400",h:"100vh",w:"100vw",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{gap:.5,padding:1,templateColumns:"1fr 1fr 1fr 1fr",w:"300px",templateRows:"repeat(6, 60px)",bg:"blackAlpha.800",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{display:"flex",flexDirection:"column-reverse",alignItems:"flex-end",colSpan:4,color:"white",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{id:"display",children:current}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:ecuation})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"clear",cursor:"pointer",onClick:function(e){return handleClick(e)},display:"flex",justifyContent:"center",alignItems:"center",colSpan:2,color:"white",textAlign:"center",bg:"red.400",children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"divide",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.500",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"multiply",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.500",children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"seven",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"eight",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"nine",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"subtract",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.500",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"four",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"five",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"six",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"add",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.500",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"one",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"two",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"three",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",rowSpan:2,color:"white",textAlign:"center",bg:"teal.800",id:"equals",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:2,color:"white",textAlign:"center",bg:"gray.700",id:"zero",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.b,{id:"decimal",onClick:function(e){return handleClick(e)},cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",colSpan:1,color:"white",textAlign:"center",bg:"gray.700",children:"."})]})})})}__webpack_exports__.a=App},58:function(e,_,t){"use strict";t.r(_);var r=t(1),n=t.n(r),c=t(51),a=t.n(c),i=t(52),l=t(2);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ebba136d.chunk.js.map