(this["webpackJsonpelements-drawer"]=this["webpackJsonpelements-drawer"]||[]).push([[0],{72:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),l=n(25),c=n.n(l),a=(n(72),n(53)),s=n(12),o=n(127),u=n(123),j=n(122),d=n(128),h=n(126),b=n(124),f=n(2),x=function(e){return e?"TEXT_INPUT"===e.type?function(e){return Object(f.jsx)(u.a,{fullWidth:!0,helperText:e.title,value:e.value,size:"small"})}(e):function(e){var t=e.value.split(",");return Object(f.jsx)(u.a,{select:!0,fullWidth:!0,helperText:e.title,value:t[0],size:"small",children:t.map((function(e){return Object(f.jsx)(b.a,{value:e,children:e},e)}))})}(e):Object(f.jsx)(u.a,{fullWidth:!0,value:"",disabled:!0,size:"small"})},O=function(e,t){return Object(f.jsx)(h.a,{container:!0,item:!0,spacing:3,children:e.map((function(e,t){return function(e,t){return Object(f.jsx)(h.a,{item:!0,xs:1,children:x(e)},t)}(e,t)}))},t)},m=function(e){var t=e.columns,n=e.rows,r=e.gridData;Object(i.useEffect)((function(){return console.log("ElementsGrid created"),function(){return console.log("ElementsGrid destroyed")}}),[]);for(var l=[],c=0;c<n;c++){var a=r[c+1];l[c]=[];for(var s=0;s<t;s++)l[c][s]=a?a[s+1]:null}return console.log("ElementsGrid updated"),Object(f.jsx)(h.a,{container:!0,spacing:2,columns:t,children:l.map((function(e,t){return O(e,t)}))})};var p=function(){var e=Object(i.useState)({rows:0,columns:0,gridData:{}}),t=Object(s.a)(e,2),n=t[0],l=t[1];return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(j.a,{}),Object(f.jsx)(d.a,{maxWidth:"lg",children:Object(f.jsxs)(o.a,{children:[Object(f.jsxs)(h.a,{container:!0,spacing:2,children:[Object(f.jsx)(h.a,{item:!0,xs:5,children:Object(f.jsx)(u.a,{margin:"normal",multiline:!0,fullWidth:!0,rows:10,onChange:function(e){e.target.value&&function(e){var t={rows:0,columns:0,gridData:{}};e.split("\n").forEach((function(e){if(e){var n=e.split(";"),i=+n[0],r=+n[1];t.rows<i&&(t.rows=i),t.columns<r&&(t.columns=r);var l={title:n[2],type:n[3],value:n[4]};t.gridData[i]||(t.gridData[i]=[]),t.gridData[i][r]=l}})),l(t)}(e.target.value)}})}),Object(f.jsxs)(h.a,{item:!0,xs:7,children:[Object(f.jsx)("h4",{children:"Supported format:"}),Object(f.jsx)("p",{children:"LINE;COLUMN;LABEL;TYPE;VALUE"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"LINE/COLUMN - the position of the element in the grid"}),Object(f.jsx)("li",{children:"TYPE - an enum of TEXT_INPUT, SELECT"}),Object(f.jsx)("li",{children:"LABEL - a text label for the element"}),Object(f.jsxs)("li",{children:["VALUE - an initial value if needed",Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"SELECT - value will be a list of options, separated by \u2018,\u2019"}),Object(f.jsx)("li",{children:"TEXT_INPUT - value will be a placeholder for the input, can be empty"})]})]})]})]})]}),Object(f.jsx)(m,Object(a.a)({},n))]})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),l(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),g()}},[[79,1,2]]]);
//# sourceMappingURL=main.cccf38c0.chunk.js.map