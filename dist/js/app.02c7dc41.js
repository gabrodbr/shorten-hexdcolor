(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"060c":function(t,e,n){},"0b24":function(t,e,n){},1009:function(t,e,n){"use strict";var r=n("060c"),o=n.n(r);o.a},1606:function(t,e,n){"use strict";var r=n("48d3"),o=n.n(r);o.a},"2a1a":function(t,e,n){},"2e6e":function(t,e,n){t.exports=n.p+"img/arrow-down.a7a432b3.svg"},3853:function(t,e,n){"use strict";var r=n("97f6"),o=n.n(r);o.a},"400a":function(t,e,n){"use strict";var r=n("82e2"),o=n.n(r);o.a},"405b":function(t,e,n){},"457c":function(t,e,n){},"48d3":function(t,e,n){},"4f72":function(t,e,n){"use strict";var r=n("405b"),o=n.n(r);o.a},5417:function(t,e,n){"use strict";var r=n("563a"),o=n.n(r);o.a},5516:function(t,e,n){t.exports=n.p+"img/star.af877faa.svg"},"55c4":function(t,e,n){"use strict";var r=n("457c"),o=n.n(r);o.a},"563a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home"),n("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Intro"),n("Demo"),n("Readme")],1)},u=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"intro"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("shorten-hexdcolor")]),r("div",{staticClass:"text"},[r("p",[t._v("\n        An easy way to memorize your colors.\n      ")])]),r("div",{staticClass:"arrow"},[r("img",{attrs:{src:n("2e6e"),alt:"🡓"}})])])])}],l=(n("8756"),n("1606"),n("9ebc"),n("9ef0"),n("2877")),f={},d=Object(l["a"])(f,s,c,!1,null,"0063b15e",null),h=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"demo"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Demo")]),n("main",{staticClass:"cards"},[n("Card",{attrs:{title:"Initial Color"},model:{value:t.initialColor,callback:function(e){t.initialColor=e},expression:"initialColor"}}),n("Card",{attrs:{title:"Simplified Color",value:t.simplifiedColor,readonly:""}}),n("Card",{attrs:{title:"Fork-me",useSlot:""}},[n("div",{staticClass:"fork-me"},[n("GithubButton",{attrs:{type:"Star"}}),n("GithubButton",{attrs:{type:"Fork"}})],1)])],1)])])},v=[],C=n("e431"),b=n.n(C),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:t.theme,style:{backgroundColor:"#"+t.displayColor}},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t.useSlot?n("div",[t._t("default")],2):n("div",[n("input",{ref:"currentColor",attrs:{type:"text",maxlength:"7",readonly:t.readonly},domProps:{value:"pls-clear"==t.currentColor?"":t.currentColor},on:{input:function(e){return t.updateColor()}}})])])},g=[],A=(n("6b54"),n("a481"),function(t){return t.toString().toUpperCase().replace(/[^A-F0-9]/g,"").slice(0,6)}),w=n("e814"),y=n.n(w),j=function(t){var e=t.toUpperCase().replace(/[^A-F0-9]/g,""),n=[0,2,4].map(function(t){return y()(e.slice(t,t+2),16)}),r=function(){var t=.299*n[0],e=.587*n[1],r=.114*n[2];return t+e+r>186};return r()||e.length<2?"dark":"light"},E={props:{title:String,useSlot:Boolean,value:String,readonly:Boolean},data:function(){return{currentColor:""}},methods:{updateColor:function(){this.currentColor=this.$refs.currentColor.value}},computed:{displayColor:function(){return this.currentColor.length%2===0&&"pls-clear"!==this.currentColor?this.currentColor:"09305C"},theme:function(){return j(this.displayColor)}},watch:{value:function(){this.value&&(this.currentColor=this.value)},currentColor:function(){"pls-clear"!==this.currentColor&&(this.currentColor=A(this.currentColor)),this.$emit("input",this.currentColor)}},beforeMount:function(){this.value?this.currentColor=this.value:this.currentColor="09305C"}},S=E,I=(n("1009"),n("5417"),Object(l["a"])(S,m,g,!1,null,"48672548",null)),B=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"github-button"},[n("a",{attrs:{href:t.url,target:"_blank"}},[n("div",[n("img",{staticClass:"icon",attrs:{src:t.icon,alt:"Icon"}})]),n("span",[t._v("\n      "+t._s(t.type)+"\n    ")])])])},x=[],O=n("9d9b"),F=n.n(O),N=n("5516"),T=n.n(N),R={fork:F.a,star:T.a},M={props:{type:String},computed:{icon:function(){return R[this.type.toLowerCase()]},url:function(){var t="https://github.com/gabrodbr/shorten-hexdcolor";return"fork"===this.type.toLowerCase()?"".concat(t,"/fork"):t}}},_=M,D=(n("3853"),Object(l["a"])(_,k,x,!1,null,"ba8028ae",null)),K=D.exports,Z=function(){var t=["ADF039","16597B","A0165D","1786E2"],e=Math.round(Math.random()*t.length)-1;return t[e]},Y={components:{Card:B,GithubButton:K},data:function(){return{initialColor:Z(),simplifiedColor:"VAI CAGAR SEU ADOTADO"}},beforeMount:function(){this.simplify()},methods:{simplify:function(){this.initialColor.length%2===0?this.simplifiedColor=b()(this.initialColor):this.simplifiedColor="pls-clear"}},watch:{initialColor:function(){this.simplify()}}},L=Y,H=(n("efc1"),n("903f"),n("e7b5"),n("4f72"),Object(l["a"])(L,p,v,!1,null,"36191c8e",null)),W=H.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"readme"},[n("div",{staticClass:"container readme-render",domProps:{innerHTML:t._s(t.readme)}})])},U=[],V=(n("96cf"),n("3b8d")),J=n("bc3a"),q=n.n(J),X=n("a70e"),G=n.n(X),Q=n("4dd1"),z=n.n(Q),$=n("b65b"),tt=n.n($),et=n("d4cd"),nt=n.n(et);n("28a9");G.a.registerLanguage("javascript",z.a),G.a.registerLanguage("sh",tt.a);var rt=nt()({highlight:function(t,e){var n=function(t){return'<pre class="hljs"><code class="using-hljs">'.concat(t,"</code></pre>")};if(e&&G.a.getLanguage(e))try{return n(G.a.highlight(e,t,!0).value)}catch(r){}return n(rt.utils.escapeHtml(t))}}),ot=function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",q.a.get(e).then(function(t){return t.data}).then(function(t){var e="## Install",n="## Build",r=t.indexOf(e),o=t.indexOf(n);return t.slice(r,o)}).then(function(t){return rt.render(t)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),at={data:function(){return{readme:""}},beforeCreate:function(){var t=this,e="https://raw.githubusercontent.com/gabrodbr/shorten-hexdcolor/master/README.md";ot(e).then(function(e){t.readme=e})}},it=at,ut=(n("5dd4"),n("93ed"),Object(l["a"])(it,P,U,!1,null,null,null)),st=ut.exports,ct={components:{Intro:h,Demo:W,Readme:st}},lt=ct,ft=Object(l["a"])(lt,i,u,!1,null,null,null),dt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container footer-content"},[t._m(0),n("div",{staticClass:"lindeza"},[n("img",{attrs:{src:t.lindeza,alt:""}})])])])},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      Made with "),n("span",{staticClass:"destak"},[t._v("♥")]),t._v(" by\n      "),n("a",{attrs:{href:"https://gabrielrodrigues.dev",target:"_blank"}},[t._v("\n      Gabriel Rodrigues\n      ")]),t._v("\n      under\n      "),n("a",{attrs:{href:"https://github.com/gabrodbr/shorten-hexdcolor/blob/master/LICENSE",target:"_blank"}},[t._v("\n        MIT license.\n      ")])])}],vt=n("c2e3"),Ct=n.n(vt),bt={data:function(){return{lindeza:Ct.a}}},mt=bt,gt=(n("55c4"),n("400a"),Object(l["a"])(mt,ht,pt,!1,null,"006bbf5e",null)),At=gt.exports,wt={components:{Home:dt,Footer:At}},yt=wt,jt=(n("5c0b"),Object(l["a"])(yt,o,a,!1,null,null,null)),Et=jt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Et)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5dd4":function(t,e,n){"use strict";var r=n("8ff6"),o=n.n(r);o.a},"5e27":function(t,e,n){},"82e2":function(t,e,n){},8756:function(t,e,n){"use strict";var r=n("cbf9"),o=n.n(r);o.a},"8ff6":function(t,e,n){},"903f":function(t,e,n){"use strict";var r=n("2a1a"),o=n.n(r);o.a},9291:function(t,e,n){},"93ed":function(t,e,n){"use strict";var r=n("f696"),o=n.n(r);o.a},"97f6":function(t,e,n){},"9d9b":function(t,e,n){t.exports=n.p+"img/fork.b82bf9d0.svg"},"9ebc":function(t,e,n){"use strict";var r=n("de6c"),o=n.n(r);o.a},"9ef0":function(t,e,n){"use strict";var r=n("9291"),o=n.n(r);o.a},c2e3:function(t,e){t.exports="data:image/png;base64,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"},cbf9:function(t,e,n){},d27e:function(t,e,n){},de6c:function(t,e,n){},e7b5:function(t,e,n){"use strict";var r=n("0b24"),o=n.n(r);o.a},efc1:function(t,e,n){"use strict";var r=n("d27e"),o=n.n(r);o.a},f696:function(t,e,n){}});
//# sourceMappingURL=app.02c7dc41.js.map