(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{50:function(e,t,n){e.exports=n(62)},55:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(55),n(27)),i=Object(a.createContext)([]),u=n(11),d=n(108),m=n(101),s=n(100),p=n(94),E=Object(p.a)((function(e){return{container:{padding:"2%"},inputField:{width:"100%"},inputButton:{padding:"1%"}}})),f=function(){var e=Object(a.useState)("outlined"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(i),p=c.todo,f=c.setTodo,v=Object(a.useState)(""),b=Object(l.a)(v,2),h=b[0],j=b[1],O=function(){var e=Object(u.a)(p);e.push({todo:h,isComplete:!1}),f(e)},C=E();return o.a.createElement("div",{className:C.container},o.a.createElement(d.a,{id:"todo",label:"Todo",className:C.inputField,value:h,onChange:function(e){return j(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&O()}(e)},InputProps:{endAdornment:o.a.createElement(s.a,null,o.a.createElement(m.a,{variant:n,color:"primary",size:"small",className:C.inputButton,onClick:O,onMouseEnter:function(){return r("contained")},onMouseLeave:function(){return r("outlined")}},"Add"))}}))},v=n(99),b=n(103),h=n(104),j=n(106),O=n(107),C=n(109),w=n(105),g=n(41),k=n.n(g),y=n(102),x=function(){var e=Object(a.useContext)(i),t=e.todo,n=e.setTodo;return o.a.createElement(v.a,null,t.map((function(e,a){return o.a.createElement("div",{key:"todo-".concat(a)},o.a.createElement(y.a,null),o.a.createElement(b.a,null,o.a.createElement(h.a,null,o.a.createElement(C.a,{id:"checkbox-".concat(a),color:"primary",onChange:function(){return function(e){var a=Object(u.a)(t);a[e].isComplete=!a[e].isComplete,n(a)}(a)}})),e.isComplete?o.a.createElement("del",null,o.a.createElement(j.a,{primary:e.todo})):o.a.createElement(j.a,{primary:e.todo}),o.a.createElement(O.a,null,o.a.createElement(w.a,{onClick:function(){return function(e){var a=Object(u.a)(t);a.splice(e,1),n(a)}(a)}},o.a.createElement(k.a,null)))))})))},B=n(98),T=(n(61),function(){var e=Object(a.useState)([{todo:"create todo list",isComplete:!1}]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useMemo)((function(){return{todo:n,setTodo:r}}),[n,r]);return o.a.createElement(B.a,{elevation:2},o.a.createElement(i.Provider,{value:c},o.a.createElement(f,null),o.a.createElement(x,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.3d4c1b6f.chunk.js.map