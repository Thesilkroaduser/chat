(this["webpackJsonplife-chat"]=this["webpackJsonplife-chat"]||[]).push([[0],{38:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s.n(c),r=s(31),o=s.n(r),i=(s(38),s(16)),u=s(32),l=(s(70),function(e){var t=e.sendMessage,s=e.history,a=Object(c.useRef)(),r=Object(c.useRef)();return Object(n.jsxs)("section",{className:"chat-wrapper",children:[Object(n.jsxs)("form",{className:"form",children:[Object(n.jsx)("label",{className:"label",htmlFor:"user-name",children:"Set User Name"}),Object(n.jsx)("input",{className:"user",name:"user-name",defaultValue:"Anonymous",type:"text",ref:r})]}),Object(n.jsx)("div",{className:"history",children:s.map((function(e,t){return Object(n.jsx)("p",{className:"message ".concat(t%2?"colored":""),children:"".concat(e.userName,": ").concat(e.message)},t.toString())}))}),Object(n.jsxs)("form",{className:"form",onSubmit:function(e){var s=a.current.value,n=r.current.value;t(e,s,n),a.current.value=""},children:[Object(n.jsx)("input",{className:"inputArea",type:"text",ref:a}),Object(n.jsx)("button",{className:"buttton",type:"submit",children:"SEND"})]})]})});var j=function(){var e=Object(c.useState)("OFFLINE"),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)([]),o=Object(i.a)(r,2),j=o[0],m=o[1],b=u("https://git.heroku.com/protected-hollows-39206.git");return Object(c.useEffect)((function(){b.on("connect",(function(){a("ONLINE"),b.emit("get_history")})),b.on("send_message",(function(e){m(e)}))}),[]),console.log("render"),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("h1",{children:["CHAT",Object(n.jsxs)("span",{children:[" ","(",s,")"]})]}),Object(n.jsx)(l,{sendMessage:function(e,t,s){e.preventDefault(),b.emit("new_message",{message:t,userName:s})},history:j})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),m()}},[[71,1,2]]]);
//# sourceMappingURL=main.ff412419.chunk.js.map