(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),i=c(8),s=c(3),l=c(1),r=(c(13),c(5)),o=c.n(r),j=c(0),u=function(e){var t=e.renderSteps,c=e.setStep,n=e.setList,a=e.selecetCount,i=e.step,s=e.items,l=e.returnNumber;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:i<=1}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":i<=1,onClick:function(){i>1&&(c(i-1),n(s.slice(a*(i-2),a*(i-2)+a)))},children:"\xab"})}),t.map((function(e,t){return Object(j.jsx)("li",{className:o()("page-item",{active:i===t+1}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(l(e)),onClick:function(){return function(e){c(e+1),n(s.slice(a*e,a*e+a))}(t)},children:l(e)})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:i>=s.length/+a}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i>=s.length/+a,onClick:function(){i<s.length/+a&&(c(i+1),n(s.slice(a*i,a*i+a)))},children:"\xbb"})})]})};var d=function(e,t){for(var c=[],n=e;n<=t;n+=1)c.push(n);return c}(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(l.useState)(5),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(d.length/+c+1),r=Object(s.a)(a,2),o=r[0],b=r[1],h=Object(l.useState)(d.slice(0,c)),p=Object(s.a)(h,2),m=p[0],O=p[1],g=Object(l.useState)(1),f=Object(s.a)(g,2),x=f[0],v=f[1],N=Object(l.useMemo)((function(){return Object(i.a)(d).slice(0,o)}),[o]),k=function(e){return e.replace(/\D/g,"")};return Object(l.useEffect)((function(){O(d.slice(0,c))}),[c]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(x," (items ").concat(k(m[0])," - ").concat(k(m[m.length-1])," of ").concat(d.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){n(+e.target.value),v(1),b(Math.ceil(d.length/+e.target.value))},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{renderSteps:N,setStep:v,setList:O,selecetCount:c,step:x,items:d,returnNumber:k}),Object(j.jsx)("ul",{children:m.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};a.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.837c3df7.chunk.js.map