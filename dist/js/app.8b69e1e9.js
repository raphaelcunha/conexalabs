(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],p=0,m=[];p<c.length;p++)s=c[p],r[s]&&m.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06a8":function(t,e,n){t.exports=n.p+"img/icon-arrow-left.06357bcc.png"},"0cfb":function(t,e,n){},"1b61":function(t,e,n){t.exports=n.p+"img/search.e55c4e1f.png"},5664:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("8c4f"),o=n("a65d"),s=n.n(o),c=n("68f6"),i=n("755e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],p=(n("cf25"),n("2877")),m={},f=Object(p["a"])(m,l,u,!1,null,null,null),d=f.exports,v=n("ecee"),h=n("ad3d"),g=n("c074");v["c"].add(g["b"],g["a"]);var b=h["a"],y=(n("f9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",[n("Search",{attrs:{search:t.search,loading:t.loading}})],1),n("List",{attrs:{companies:t.list}})],1)}),_=[],C=(n("96cf"),n("3b8d")),j=n("bc3a"),w=n.n(j),x="https://www.receitaws.com.br/v1/cnpj/",k=w.a.create({baseURL:x,timeout:5e3}),S=k,O=(n("a481"),n("7514"),{set:function(t){var e=JSON.parse(localStorage.getItem("companies"));return null===e&&(e=[]),e.push(t),localStorage.setItem("companies",JSON.stringify(e)),e},get:function(t){var e=JSON.parse(localStorage.getItem("companies")),n=e.find(function(e){return e.cnpj.replace(/\D/g,"")===t});return n},all:function(){return JSON.parse(localStorage.getItem("companies"))}}),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container text-center"},[n("h1",[n("font-awesome-icon",{attrs:{icon:"building",size:"1x"}}),t._v("Localizador de Empresas\n    ")],1),t._t("default")],2)])},$=[],N={name:"Header"},z=N,E=(n("8745"),Object(p["a"])(z,P,$,!1,null,"e32ceaec",null)),J=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cnpj,expression:"cnpj"},{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{type:"text",autofocus:"",name:"cnpj",placeholder:"CNPJ..."},domProps:{value:t.cnpj},on:{input:function(e){e.target.composing||(t.cnpj=e.target.value)}}}),(t.errors,a("div",{staticClass:"errors"},[a("span",[t._v(t._s(t.errors.message))])]))]),a("div",{staticClass:"col-lg-3 col-md-4 col-sm-12"},[t.loading?t._e():a("button",{attrs:{id:"submit",type:"submit"}},[t._v("Localizar")]),t.loading?a("button",{attrs:{type:"text",disa:""}},[a("img",{attrs:{width:"25",src:n("afd7")}})]):t._e()])])])])},I=[],D=(n("386d"),n("79f8")),K=n("3a60"),L={name:"Search",data:function(){return{errors:{},teste:"123",cnpj:""}},props:["search","loading"],directives:{mask:K["mask"]},methods:{submit:function(){this.errors={},Object(D["validate"])(this.cnpj)?this.search({cnpj:this.cnpj.replace(/\D/g,"")}):this.errors={message:"CNPJ inválido"}}}},H=L,B=(n("59e2"),Object(p["a"])(H,M,I,!1,null,"708a103a",null)),R=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[t.companies?t._e():n("blank-state"),t.companies&&t.companies.length?n("carousel",{staticClass:"list col-sm-10 col-md-10 col-lg-12",attrs:{navigationEnabled:!0,"navigation-next-label":t.navigationNext,"navigation-prev-label":t.navigationPrev,perPageCustom:[[320,1],[425,1],[768,2],[1024,3],[1440,4]]}},t._l(t.companies,function(e,a){return n("slide",{key:a,on:{slideclick:function(n){return t.handleSlideClick(e)}}},[n("div",{staticClass:"box"},[n("company-card",{attrs:{company:e}})],1)])}),1):t._e()],1)])},A=[],V=n("0a63"),G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blank-state"},[a("img",{attrs:{src:n("1b61")}}),a("p",[t._v("Localize acima a primeira empresa")])])}],W={name:"BlankState"},Y=W,Z=(n("e137"),Object(p["a"])(Y,G,U,!1,null,"5ab986ab",null)),q=Z.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t.buttonBack?a("div",{staticClass:"button-back",on:{click:t.back}},[a("img",{attrs:{width:"45",src:n("06a8")}})]):t._e(),a("ul",[a("li",{staticClass:"name"},[a("div",{staticClass:"title"},[t._v(t._s(t.company.nome||""))]),a("div",{staticClass:"subtitle"},[t._v("Razão Social")])]),a("li",{staticClass:"cnpj"},[a("div",{staticClass:"title"},[t._v(t._s(t.company.cnpj||""))]),a("div",{staticClass:"subtitle"},[t._v("CNPJ")])]),a("li",{staticClass:"endereco"},[a("div",{staticClass:"title"},[t._v(t._s(t.company.bairro||""))]),a("div",{staticClass:"subtitle"},[t._v("Endereço")])])])])},Q=[],X={name:"CompanyCard",props:["company","button-back"],methods:{back:function(){this.$router.go(-1)}}},tt=X,et=(n("5991"),Object(p["a"])(tt,F,Q,!1,null,"5a667133",null)),nt=et.exports,at={name:"List",props:["companies","loading"],computed:{navigationNext:function(){return'<span style="font-size: 48px; color: white; margin-left: -20px">></span>'},navigationPrev:function(){return'<span style="font-size: 48px; color: white;  margin-right: -20px"><</span>'}},components:{Carousel:V["Carousel"],Slide:V["Slide"],BlankState:q,CompanyCard:nt},methods:{handleSlideClick:function(t){this.$router.push({path:"/maps/".concat(t.cnpj.replace(/\D/g,""))})}}},rt=at,ot=(n("78c9"),Object(p["a"])(rt,T,A,!1,null,null,null)),st=ot.exports,ct={name:"Home",data:function(){return{list:[],loading:!1}},components:{Header:J,Search:R,List:st},mounted:function(){this.list=O.all()},methods:{search:function(){var t=Object(C["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.cnpj,a=function(t,e){o.$toasted.show(t,{type:e})},t.prev=2,this.loading=!0,!O.get(n)){t.next=8;break}a("CNPJ já cadastrado","warning"),t.next=14;break;case 8:return t.next=10,S.get(n);case 10:r=t.sent,O.set(r.data),this.list=O.all(),a("Cadastrado com sucesso o CNPJ","success");case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](2),a("Ocorreu algum error ao buscar o CNPJ","error");case 19:return t.prev=19,this.loading=!1,t.finish(19);case 22:case"end":return t.stop()}},t,this,[[2,16,19,22]])}));function e(e){return t.apply(this,arguments)}return e}()}},it=ct,lt=Object(p["a"])(it,y,_,!1,null,null,null),ut=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map"},[n("company-card",{attrs:{company:t.company,"button-back":"true"}}),n("GmapMap",{staticClass:"googleMaps",attrs:{options:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1},center:t.center,zoom:15}},[n("GmapMarker",{attrs:{position:t.marker}})],1)],1)},mt=[],ft={name:"Map",data:function(){return{company:null,center:{},marker:{}}},components:{CompanyCard:nt},mounted:function(){var t=this;this.company=O.get(this.$route.params.cnpj);var e={address_line_1:"".concat(this.company.nome," ").concat(this.company.bairro," ").concat(this.company.complemento),city:this.company.municipio,state:this.company.uf,zip_code:this.company.cep};this.$geocoder.send(e,function(e){if(e.results){var n=e.results[0].geometry.location,a=n.lat,r=n.lng;t.center={lat:a,lng:r},t.marker={lat:a,lng:r}}})}},dt=ft,vt=(n("7469"),Object(p["a"])(dt,pt,mt,!1,null,"401ae1b0",null)),ht=vt.exports,gt=[{path:"/",component:ut},{path:"/maps/:cnpj",component:ht}],bt=gt;a["a"].component("font-awesome-icon",b),a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(s.a,{theme:"outline",duration:5e3}),a["a"].use(i,{load:{key:"AIzaSyBKshoYfZ-pj534HVfwDw5mKIKorpuW0pg",libraries:"places"}}),a["a"].use(c["a"],{defaultMode:"address",googleMapsApiKey:"AIzaSyBKshoYfZ-pj534HVfwDw5mKIKorpuW0pg"}),new a["a"]({router:new r["a"]({mode:"history",routes:bt}),render:function(t){return t(d)}}).$mount("#app")},5991:function(t,e,n){"use strict";var a=n("8282"),r=n.n(a);r.a},"59e2":function(t,e,n){"use strict";var a=n("59f8"),r=n.n(a);r.a},"59f8":function(t,e,n){},7469:function(t,e,n){"use strict";var a=n("feca"),r=n.n(a);r.a},"78c9":function(t,e,n){"use strict";var a=n("8bc4"),r=n.n(a);r.a},8282:function(t,e,n){},8745:function(t,e,n){"use strict";var a=n("5664"),r=n.n(a);r.a},"8bc4":function(t,e,n){},a911:function(t,e,n){},afd7:function(t,e,n){t.exports=n.p+"img/loading.96f02485.svg"},cf25:function(t,e,n){"use strict";var a=n("0cfb"),r=n.n(a);r.a},e137:function(t,e,n){"use strict";var a=n("a911"),r=n.n(a);r.a},feca:function(t,e,n){}});
//# sourceMappingURL=app.8b69e1e9.js.map