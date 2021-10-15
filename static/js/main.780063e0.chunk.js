(this["webpackJsonpg-soft-todo"]=this["webpackJsonpg-soft-todo"]||[]).push([[0],{33:function(A,e,n){},34:function(A,e,n){},48:function(A,e,n){"use strict";n.r(e);var t,c,d,o,r,i,g,a,s,l,b,u,j,x=n(0),p=n.n(x),f=n(14),B=n.n(f),w=(n(33),n(13)),C=n(2),S=(n(34),n(15)),k=n(18),O=n.n(k),D=n(23),J=n(12),v=n(50),m=Object(J.b)("todos/getTodosAsync",Object(D.a)(O.a.mark((function A(){var e,n;return O.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:if(!(e=A.sent).ok){A.next=9;break}return A.next=6,e.json();case 6:return(n=A.sent).length=10,A.abrupt("return",{todos:n});case 9:case"end":return A.stop()}}),A)})))),M=Object(J.c)({name:"todos",initialState:[],reducers:{addTodo:function(A,e){var n={id:Object(v.a)(),title:e.payload.title,completed:!1};A.push(n)},toggleComplete:function(A,e){var n=A.findIndex((function(A){return A.id===e.payload.id}));A[n].completed=e.payload.completed},deleteTodo:function(A,e){return A.filter((function(A){return A.id!==e.payload.id}))},editTodo:function(A,e){var n=A.findIndex((function(A){return A.id===e.payload.id}));A[n].title=e.payload.title},addNewTodo:function(A,e){var n={id:Object(v.a)(),title:e.payload.title,completed:!1};A.push(n)}},extraReducers:Object(S.a)({},m.fulfilled,(function(A,e){return e.payload.todos}))}),z=M.actions,Q=z.addTodo,N=z.toggleComplete,h=z.deleteTodo,P=z.editTodo,I=z.addNewTodo,Y=M.reducer,T=n(8),y=n(1),H=function(A){var e=Object(T.b)();return Object(x.useEffect)((function(){e(m())}),[e]),Object(y.jsxs)("h1",{children:["Welcome to the ",Object(y.jsx)("p",{className:"orange",children:"todo"})," app!"]})},L=n(5),E=n(6),U=E.a.div(t||(t=Object(L.a)(["\n    width: 100%;\n    height: 60px;\n    display: flex;\n    padding: 0 40px;\n    align-items: center;\n    background: rgba( 168, 172, 184, 0.65 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 4px );\n    -webkit-backdrop-filter: blur( 4px );\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n"]))),Z=E.a.li(c||(c=Object(L.a)(["\n    height: 100%;\n    display: inline-block;\n    margin-left: 30px;\n    align-items: center;\n    list-style: none;\n    &:hover {\n      transform: scale(1.2);\n    }\n    \n"]))),W=E.a.main(d||(d=Object(L.a)(["\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(221,221,221);\n    \n"]))),G=E.a.div(o||(o=Object(L.a)(["\n    width:  600px;\n    max-height: calc(100vh - 80px);\n    margin: 20px auto;\n    padding-bottom: 10px;\n    background: rgba( 244, 135, 52, 0.45 );\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n    backdrop-filter: blur( 9.5px );\n    -webkit-backdrop-filter: blur( 9.5px );\n    border-radius: 10px;\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\n    display: flex;\n    flex-direction: column;\n"]))),F=E.a.div(r||(r=Object(L.a)(["\n    margin-bottom: 25px;\n    overflow-y: auto;\n"]))),X=E.a.li(i||(i=Object(L.a)(["\n    width:  100%;\n    list-style: none;\n    padding: 10px 60px 10px 10px;\n    font-weight: 400;\n    font-size: 18px;\n    border-bottom: 1px solid rgb(153,159,173);\n    position: relative;\n"]))),R=E.a.ul(g||(g=Object(L.a)(["\n    width:  100%;\n    max-height: calc(100vh - 140px);\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    overflow-y: auto;\n"]))),K=E.a.input(a||(a=Object(L.a)(["\n    width: 100%;\n    height: 80%;\n    background-color: rgb(221,221,221);\n    border: none;\n    border-radius: 4px;\n    padding: 8px;\n    font-size: 16px;\n"]))),q=E.a.div(s||(s=Object(L.a)(["\n    width: 100%;\n    height: 60px;\n    background-color: rgb(63,83,127);\n    padding: 15px;\n    display: flex;\n    border-radius: 10px 10px 0 0;\n    align-items: center;\n"]))),V=E.a.button(l||(l=Object(L.a)(["\n    border: none;\n    border-radius: 8px;\n    width: 20%;\n    padding: 6px;\n    margin-left: 25px;\n    text-transform: uppercase;\n    background-color: rgb(244,135,52);\n    color: rgb(221,221,221);\n    text-align: center;\n    vertical-align: middle;\n    font-weight: 700;\n    font-size: 20px;\n    &:hover {\n        background-color: rgb(153,159,173);\n        \n        transform: scale(1.1);\n    }\n"]))),_=E.a.div(b||(b=Object(L.a)(["\n    \n    position: absolute;\n    right: 10px;\n    top: 8px;\n    cursor: pointer;\n    &:hover {\n        transform: scale(1.1); \n    }\n"]))),$=E.a.div(u||(u=Object(L.a)(["\n    \n    position: absolute;\n    right: 40px;\n    top: 8px;\n    cursor: pointer;\n    &:hover {\n        transform: scale(1.1); \n    }\n"]))),AA=E.a.input(j||(j=Object(L.a)(["\n    width: 80%;\n    font-size: 18px;\n    resize: none;\n"]))),eA=n(10),nA=function(){var A=Object(x.useState)(""),e=Object(eA.a)(A,2),n=e[0],t=e[1],c=Object(T.b)(),d=function(A){A.preventDefault(),n&&c(Q({title:n})),t("")};return Object(y.jsxs)(q,{onSubmit:d,children:[Object(y.jsx)(K,{type:"text",placeholder:"Add new task here",value:n,onChange:function(A){return t(A.target.value)},onKeyDown:function(A){"Enter"===A.key&&d(A)}}),Object(y.jsx)(V,{onClick:d,children:"Add"})]})},tA=n.p+"static/media/pencil.48a509a8.png",cA=function(A){var e=A.title,n=A.id,t=A.completed,c=Object(T.b)(),d=Object(x.useState)(!1),o=Object(eA.a)(d,2),r=o[0],i=o[1],g=Object(x.useState)(e),a=Object(eA.a)(g,2),s=a[0],l=a[1],b=function(){c(P({id:n,title:s})),r&&l(s),i(!r)};return Object(y.jsxs)(X,{children:[Object(y.jsx)("input",{style:{marginRight:"10px"},type:"checkbox",checked:t,onChange:function(){c(N({id:n,completed:!t}))}}),r?Object(y.jsx)(AA,{type:"text",value:s,onKeyDown:function(A){"Enter"===A.key&&b()},onChange:function(A){l(A.target.value)}}):Object(y.jsx)("span",{children:e}),Object(y.jsx)($,{onClick:b,children:Object(y.jsx)("img",{style:{width:20},src:tA,alt:"edit-button"})}),Object(y.jsx)(_,{onClick:function(){c(h({id:n}))},children:Object(y.jsx)("img",{style:{width:20},src:"data:image/png;base64,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",alt:"delete-button"})})]})},dA=function(){var A=Object(T.c)((function(A){return A.todos}));return Object(y.jsx)("div",{children:Object(y.jsxs)(G,{children:[Object(y.jsx)(nA,{}),Object(y.jsx)(F,{children:Object(y.jsx)(R,{children:A?A.map((function(A){return Object(y.jsx)(cA,{id:A.id,title:A.title,completed:A.completed},A.id)})):Object(y.jsx)("div",{children:"Loading..."})})})]})})},oA=function(){var A=Object(x.useState)(""),e=Object(eA.a)(A,2),n=e[0],t=e[1],c=Object(T.b)(),d=function(A){A.preventDefault(),n&&c(I({title:n})),t("")};return Object(y.jsxs)(G,{children:[Object(y.jsxs)(q,{onSubmit:d,children:[Object(y.jsx)(K,{type:"text",placeholder:"Add new task here",value:n,onChange:function(A){return t(A.target.value)},onKeyDown:function(A){"Enter"===A.key&&d(A)}}),Object(y.jsx)(V,{onClick:d,children:"Add"})]}),Object(y.jsx)("h1",{style:{margin:"20px auto"},children:"Add new task"})]})};var rA=function(){return Object(y.jsxs)(w.a,{children:[Object(y.jsx)(U,{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)(Z,{children:Object(y.jsx)(w.b,{to:"/gsoft-todo/",exact:!0,activeClassName:"active__link",children:"Home"})}),Object(y.jsx)(Z,{children:Object(y.jsx)(w.b,{to:"/todo-list",exact:!0,activeClassName:"active__link",children:"Todos"})}),Object(y.jsx)(Z,{children:Object(y.jsx)(w.b,{to:"/create-new-todo",exact:!0,activeClassName:"active__link",children:"Create todo form"})})]})}),Object(y.jsx)(W,{children:Object(y.jsxs)(C.c,{children:[Object(y.jsx)(C.a,{exact:!0,path:"/gsoft-todo/",component:H}),Object(y.jsx)(C.a,{exact:!0,path:"/todo-list",component:dA}),Object(y.jsx)(C.a,{exact:!0,path:"/create-new-todo",component:oA})]})})]})},iA=function(A){A&&A instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,t=e.getFID,c=e.getFCP,d=e.getLCP,o=e.getTTFB;n(A),t(A),c(A),d(A),o(A)}))},gA=Object(J.a)({reducer:{todos:Y}});B.a.render(Object(y.jsx)(p.a.StrictMode,{children:Object(y.jsx)(T.a,{store:gA,children:Object(y.jsx)(rA,{})})}),document.getElementById("root")),iA()}},[[48,1,2]]]);
//# sourceMappingURL=main.780063e0.chunk.js.map