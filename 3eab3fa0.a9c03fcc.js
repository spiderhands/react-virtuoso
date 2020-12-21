(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(131)),c={id:"_interfaces_.components",title:"Interface: Components",sidebar_label:"Components"},i={unversionedId:"api/interfaces/_interfaces_.components",id:"api/interfaces/_interfaces_.components",isDocsHomePage:!1,title:"Interface: Components",description:'"interfaces".Components',source:"@site/docs/api/interfaces/_interfaces_.components.md",slug:"/api/interfaces/_interfaces_.components",permalink:"/api/interfaces/_interfaces_.components",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.components.md",version:"current",sidebar_label:"Components"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Group",id:"group",children:[]},{value:"Header",id:"header",children:[]},{value:"Item",id:"item",children:[]},{value:"List",id:"list",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".Components"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Components"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": ComponentType"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L68"}),"src/interfaces.ts:68"))),Object(o.b)("p",null,"Set to render a custom UI when the list is empty."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"footer"},"Footer"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Footer"),": ComponentType"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L44"}),"src/interfaces.ts:44"))),Object(o.b)("p",null,"Set to render a component at the bottom of the list."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"group"},"Group"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Group"),": ComponentType","<",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.groupprops"}),"GroupProps"),">"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L52"}),"src/interfaces.ts:52"))),Object(o.b)("p",null,"Set to customize the group item wrapping element. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"header"},"Header"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Header"),": ComponentType"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L40"}),"src/interfaces.ts:40"))),Object(o.b)("p",null,"Set to render a component at the top of the list."),Object(o.b)("p",null,"The header remains above the top items and does not remain sticky."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"item"},"Item"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Item"),": ComponentType","<",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.itemprops"}),"ItemProps"),">"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L48"}),"src/interfaces.ts:48"))),Object(o.b)("p",null,"Set to customize the item wrapping element. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"list"},"List"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"List"),": ComponentType","<","{ ref: Ref","<","HTMLDivElement> ; style: CSSProperties  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L63"}),"src/interfaces.ts:63"))),Object(o.b)("p",null,"Set to customize the items wrapper. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": ComponentType","<","{ height: number ; index: number  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L71"}),"src/interfaces.ts:71"))),Object(o.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(o.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scroller"},"Scroller"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Scroller"),": ComponentType","<",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/api/modules/_interfaces_#htmlprops"}),"HTMLProps")," & { ref: Ref","<","HTMLDivElement>  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/6fa7675/src/interfaces.ts#L58"}),"src/interfaces.ts:58"))),Object(o.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."))}b.isMDXComponent=!0}}]);