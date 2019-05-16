(function(e){function t(t){for(var r,l,o=t[0],s=t[1],u=t[2],d=0,m=[];d<o.length;d++)l=o[d],a[l]&&m.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"127a":function(e,t,n){"use strict";var r=n("5adf"),a=n.n(r);a.a},"1e6a":function(e,t,n){"use strict";var r=n("4c4e"),a=n.n(r);a.a},3669:function(e,t,n){"use strict";var r=n("d1b5"),a=n.n(r);a.a},"4c4e":function(e,t,n){},5614:function(e,t,n){"use strict";var r=n("af68"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("9f7b"),i=n.n(a),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("RouterView"),n("NewRenterForm",{on:{"renter-added":e.newRenterAdded}}),n("div",{staticClass:"card bill-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Renters")]),n("div",{attrs:{id:"bill-table"}},[n("table",{staticClass:"table"},[e._m(0),e._l(e.renters,function(t){return n("ShowRenters",{key:t.id,attrs:{renter:t},on:{"delete-renter":e.renterDeleted}})})],2)])]),n("Footer")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Renter Name")]),n("th",[e._v("Renter Email")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",{attrs:{orderBy:"",name:""}},[r("td",[e._v(e._s(e.renter.renterName))]),r("td",[e._v(e._s(e.renter.renterEmail))]),r("td",[r("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(t){return e.deleteRenter(e.renter)}}})])])},u=[],c={name:"ShowRenters",props:{renter:Object},methods:{deleteRenter:function(e){confirm("Delete ".concat(e.renterName,"?"))&&this.$emit("delete-renter",e)}}},d=c,m=(n("127a"),n("2877")),f=Object(m["a"])(d,s,u,!1,null,"e5741348",null),p=f.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-4",attrs:{id:"title"}},[e._v("Welcome to Your Rental Costs Management App")])])])}],b={name:"Header"},_=b,w=(n("f31f"),Object(m["a"])(_,h,v,!1,null,"4d3a5741",null)),g=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"m-2"},[n("span",{staticClass:"p-3"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1)])])},A=[],R={name:"Footer"},C=R,N=Object(m["a"])(C,y,A,!1,null,"4575dbd7",null),$=N.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors&&e.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0),n("div",{staticClass:"card add-renter m-2 p-2"},[n("form",[n("h4",{staticClass:"card-title"},[e._v("Add new renter")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newRenterName,expression:"newRenterName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.newRenterName},on:{input:function(t){t.target.composing||(e.newRenterName=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newEmail,expression:"newEmail",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"email"},domProps:{value:e.newEmail},on:{input:function(t){t.target.composing||(e.newEmail=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:e.addRenter}},[e._v("Add")]),n("br"),n("br"),n("br")])])])},B=[],E={name:"NewRenterForm",data:function(){return{newRenterName:"",newEmail:"",errors:[]}},methods:{addRenter:function(){if(console.log("added"),this.errors=[],this.newRenterName&&this.newEmail){var e={renterName:this.newRenterName,renterEmail:this.newEmail};this.$emit("renter-added",e),this.newRenterName="",this.newEmail=""}else this.errors.push("Name and email are required")}}},P=E,O=Object(m["a"])(P,x,B,!1,null,null,null),j=O.exports,S=(n("3e8f"),{name:"app",data:function(){return{renters:[],renterName:"",renterEmail:""}},components:{Header:g,ShowRenters:p,Footer:$,NewRenterForm:j},mounted:function(){this.getAllRenters()},methods:{newRenterAdded:function(e){var t=this;console.log("adding user"),console.log("user is "+e.renterName),this.$billAPIService.addRenter(e).then(function(e){t.getAllRenters()})},renterDeleted:function(e){var t=this;this.$billAPIService.deleteRenter(e.renterName).then(function(){t.getAllRenters()})},getAllRenters:function(){var e=this;this.$billAPIService.getAllRenters().then(function(t){e.renters=t,console.log(t)})}}}),k=S,M=(n("034f"),Object(m["a"])(k,l,o,!1,null,null,null)),F=M.exports,I=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("div",{staticClass:"d-flex flex-wrap justify-content-around"},e._l(e.months,function(e){return n("div",{key:e.name,staticClass:"p-2"},[n("Month",{attrs:{month:e}})],1)}),0)])},J=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"state-summary p2 rounded"},[n("p",[n("router-link",{attrs:{to:{name:"detail",params:{month:e.monthName}}}},[n("b-button",{attrs:{id:"button",variant:"outline-primary"}},[e._v(e._s(e.month.name))])],1)],1)])},T=[],U=(n("7f7f"),{name:"Month",props:{month:Object},data:function(){return{monthName:this.month.name}}}),q=U,V=(n("1e6a"),Object(m["a"])(q,H,T,!1,null,null,null)),W=V.exports,Y={name:"rentalMonths",components:{Month:W},data:function(){return{months:[{name:"January"},{name:"February"},{name:"March"},{name:"April"},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"September"},{name:"October"},{name:"November"},{name:"December"}]}},props:{msg:String}},z=Y,G=(n("3669"),Object(m["a"])(z,D,J,!1,null,"b9a6b28a",null)),K=G.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"month-detail p-2"},[n("div",{staticClass:"card bill-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Bills for "+e._s(e.month.name))]),n("div",{attrs:{id:"bill-table"}},[n("table",{staticClass:"table"},[e._m(0),e._l(e.bills,function(t){return n("ShowBills",{key:t.id,attrs:{bill:t},on:{"bill-paid":e.billPaid}})})],2)])]),n("div",{staticClass:"card add-bill m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Add new bill")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"type"}},[e._v("Type")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newBill,expression:"newBill",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"type"},domProps:{value:e.newBill},on:{input:function(t){t.target.composing||(e.newBill=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"amount"}},[e._v("Amount")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newAmount,expression:"newAmount",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"amount"},domProps:{value:e.newAmount},on:{input:function(t){t.target.composing||(e.newAmount=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:e.addBill}},[e._v("Add")])])])},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Renter Name")]),n("th",[e._v("Bill Name")]),n("th",[e._v("Amount Owed")]),n("th",[e._v("Mark as paid")])])}],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{attrs:{orderBy:"",name:""}},[n("td",[e._v(e._s(e.bill.renterName))]),n("td",[e._v(" "+e._s(e.bill.billName)+" ")]),n("td",[e._v(" "+e._s(e.bill.amount)+" ")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bill.paid,expression:"bill.paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.bill.paid)?e._i(e.bill.paid,null)>-1:e.bill.paid},on:{change:[function(t){var n=e.bill.paid,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);r.checked?l<0&&e.$set(e.bill,"paid",n.concat([i])):l>-1&&e.$set(e.bill,"paid",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.bill,"paid",a)},function(t){return e.checked(e.bill)}]}})])])},Z=[],ee={name:"ShowBills",props:{bill:Object},methods:{checked:function(e){this.$emit("bill-paid",e)}}},te=ee,ne=(n("5614"),Object(m["a"])(te,X,Z,!1,null,"3c9df116",null)),re=ne.exports,ae={name:"MonthDetail",components:{ShowBills:re},data:function(){return{currentMonth:"",newBill:"",newAmount:"",bill:"",month:{name:""},bills:[]}},mounted:function(){this.month.name=this.$route.params.month,this.currentMonth=this.month.name,this.getBills()},methods:{addBill:function(){var e=this;if(this.newBill&&this.newAmount){var t={name:this.newBill,amount:this.newAmount,month:this.month.name};this.newBill="",this.newAmount="",this.$billAPIService.addBill(t).then(function(t){e.getBills()})}else this.errors.push("Name and email are required")},getBills:function(){var e=this;console.log("happening"),this.$billAPIService.getAllBills(this.month.name).then(function(t){e.bills=t,console.log("happened")})},billPaid:function(e){var t=this;this.$billAPIService.billPaid(e).then(function(){t.getBills()}),console.log("deleting")}}},ie=ae,le=(n("9209"),Object(m["a"])(ie,L,Q,!1,null,"60f4104a",null)),oe=le.exports,se=new I["a"]({routes:[{path:"/",component:K},{path:"/detail/:month",name:"detail",component:oe}]}),ue=(n("f9e3"),n("2dd8"),n("bc3a")),ce=n.n(ue),de="/api/users",me="/api/bills",fe={getAllRenters:function(){return ce.a.get("/api/users").then(function(e){return e.data})},addRenter:function(e){return ce.a.post(de,e).then(function(e){return e.data})},deleteRenter:function(e){return ce.a.delete("/api/users/"+e).then(function(e){return e.data})},addBill:function(e){return ce.a.post(me,e).then(function(e){return e.data})},billPaid:function(e){return ce.a.patch("/api/renterPortions/"+e.id,e).then(function(e){return e.data})},getAllBills:function(e){return ce.a.get("/api/renterPortions/"+e).then(function(e){return e.data})}};r["default"].use(i.a),r["default"].prototype.$billAPIService=fe,r["default"].config.productionTip=!1,r["default"].use(I["a"]),new r["default"]({render:function(e){return e(F)},router:se}).$mount("#app")},"5adf":function(e,t,n){},"64a9":function(e,t,n){},"794f":function(e,t,n){},8343:function(e,t,n){},9209:function(e,t,n){"use strict";var r=n("794f"),a=n.n(r);a.a},af68:function(e,t,n){},d1b5:function(e,t,n){},ed3a:function(e,t,n){e.exports=n.p+"img/delete.e364fc49.png"},f31f:function(e,t,n){"use strict";var r=n("8343"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c127a68b.js.map