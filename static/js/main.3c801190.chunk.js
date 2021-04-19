(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(7),a=c.n(s),r=(c(15),c(16),c(2)),i=c(9),l=c(3),j=c(19),d=c(0),b=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenses:[].concat(Object(i.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"SET_BUDGET":return Object(l.a)(Object(l.a)({},e),{},{budget:t.payload});default:return e}},o={budget:2e3,expenses:[{id:Object(j.a)(),name:"Shopping",cost:50},{id:Object(j.a)(),name:"Holiday",cost:300},{id:Object(j.a)(),name:"Transportation",cost:70},{id:Object(j.a)(),name:"Fuel",cost:40},{id:Object(j.a)(),name:"Child Care",cost:500}]},u=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(b,o),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(d.jsx)(u.Provider,{value:{expenses:s.expenses,budget:s.budget,dispatch:a},children:e.children})},x=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{children:["Budget: \xa3",e.budget]}),Object(d.jsx)("button",{type:"button",class:"btn btn-primary",onClick:e.handleEditClick,children:"Edit"})]})},m=function(e){var t=Object(n.useState)(e.budget),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{required:"required",type:"number",class:"form-control mr-3",id:"name",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.handleSaveClick(s)},children:"Save"})]})},p=function(){var e=Object(n.useContext)(u),t=e.budget,c=e.dispatch,s=Object(n.useState)(!1),a=Object(r.a)(s,2),i=a[0],l=a[1];return Object(d.jsx)("div",{class:"alert alert-secondary p-3 d-flex align-items-center justify-content-between",children:i?Object(d.jsx)(m,{handleSaveClick:function(e){c({type:"SET_BUDGET",payload:e}),l(!1)},budget:t}):Object(d.jsx)(x,{handleEditClick:function(){l(!0)},budget:t})})},h=function(){var e=Object(n.useContext)(u),t=e.expenses,c=e.budget,s=t.reduce((function(e,t){return e+t.cost}),0),a=s>c?"alert-danger":"alert-success";return Object(d.jsx)("div",{class:"alert p-4 ".concat(a),children:Object(d.jsxs)("span",{children:["Remaining: \xa3",c-s]})})},f=c(8),v=function(e){var t=Object(n.useContext)(u).dispatch;return Object(d.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{class:"badge badge-primary badge-pill mr-3",children:["\xa3",e.cost]}),Object(d.jsx)(f.a,{size:"1.5em",onClick:function(){t({type:"DELETE_EXPENSE",payload:e.id})}})]})]})},g=function(){var e=Object(n.useContext)(u).expenses,t=Object(n.useState)(e||[]),c=Object(r.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){a(e)}),[e]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",class:"form-control mb-2 mr-sm-2",placeholder:"Type to search...",onChange:function(t){var c=e.filter((function(e){return e.name.toLowerCase().includes(t.target.value)}));a(c)}}),Object(d.jsx)("ul",{class:"list-group mt-3 mb-3",children:s.map((function(e){return Object(d.jsx)(v,{id:e.id,name:e.name,cost:e.cost})}))})]})},E=function(e){var t=Object(n.useContext)(u).dispatch,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],i=s[1],l=Object(n.useState)(""),b=Object(r.a)(l,2),o=b[0],O=b[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={id:Object(j.a)(),name:a,cost:parseInt};t({type:"ADD_EXPENSE",payload:c}),i(""),O("")},children:[Object(d.jsxs)("div",{class:"row",children:[Object(d.jsxs)("div",{class:"col-sm col-lg-4",children:[Object(d.jsx)("label",{for:"name",children:"Name"}),Object(d.jsx)("input",{required:"required",type:"text",class:"form-control",id:"name",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsxs)("div",{class:"col-sm col-lg-4",children:[Object(d.jsx)("label",{for:"cost",children:"Cost"}),Object(d.jsx)("input",{required:"required",type:"number",class:"form-control",id:"cost",value:o,onChange:function(e){return O(e.target.value)}})]})]}),Object(d.jsx)("div",{class:"row mt-3",children:Object(d.jsx)("div",{class:"col-sm",children:Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Save"})})})]})},y=function(){var e=Object(n.useContext)(u),t=e.expenses,c=e.budget,s=t.reduce((function(e,t){return e+t.cost}),0),a=s>c?"alert-danger":"alert-success";return Object(d.jsx)("div",{class:"alert p-4 ".concat(a),children:Object(d.jsxs)("span",{children:["Remaining: \xa3",c-s]})})},C=function(){return Object(d.jsx)(O,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"mt-3",children:"My Budget Planner"}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(p,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(y,{})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(h,{})})]}),Object(d.jsx)("h3",{className:"mt-3",children:"Expenses"}),Object(d.jsx)("div",{className:"row ",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(g,{})})}),Object(d.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(E,{})})})]})})},S=document.getElementById("root");a.a.render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(C,{})}),S)}},[[18,1,2]]]);
//# sourceMappingURL=main.3c801190.chunk.js.map