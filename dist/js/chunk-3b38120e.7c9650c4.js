(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b38120e"],{"0845":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-container",{staticClass:"grey lighten-5"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",{attrs:{cols:"4"}}),a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{src:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",width:"100%"}})],1),a("v-col",{attrs:{cols:"4"}})],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{on:{click:t.navigateToManageProducts}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8"}},[a("v-img",{staticClass:"rounded-img",attrs:{src:"https://peru21.pe/resizer/R3O07pGUXuqpOIYYV0_Z3hufi1k=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/4FMVWEJARFCT5B47PPKCAI5ROU.jpg",width:"100%"}})],1),a("v-col",{attrs:{cols:"2"}})],1),a("v-card-title",{staticClass:"justify-center"},[t._v(" Gestionar productos ")])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{on:{click:function(e){return t.navigateToRestaurant(301)}}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8"}},[a("v-img",{staticClass:"rounded-img",attrs:{src:"https://www.hosteleria.site/wp-content/uploads/2019/07/restaurantes-1.jpg",width:"100%"}})],1),a("v-col",{attrs:{cols:"2"}})],1),a("v-card-title",{staticClass:"justify-center"},[t._v(" Mi restaurante ")])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{on:{click:t.navigateToManageCategories}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8"}},[a("v-img",{staticClass:"rounded-img",attrs:{src:"https://x6i2p6h3.rocketcdn.me/wp-content/uploads/2018/01/Cocina-de-restaurante.jpg",width:"100%"}})],1),a("v-col",{attrs:{cols:"2"}})],1),a("v-card-title",{staticClass:"justify-center"},[t._v(" Gestionar categorías ")])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{on:{click:t.navigateToSales}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8"}},[a("v-img",{staticClass:"rounded-img",attrs:{src:"https://previews.123rf.com/images/blankstock/blankstock1707/blankstock170701715/82828881-icono-de-l%C3%ADnea-de-tablero-de-presentaci%C3%B3n-informe-gr%C3%A1fico-o-signo-de-crecimiento-de-ventas-s%C3%ADmbolo-de-datos-d.jpg",width:"100%"}})],1),a("v-col",{attrs:{cols:"2"}})],1),a("v-card-title",{staticClass:"justify-center"},[t._v(" Mis ventas ")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"3"}}),a("v-col",{attrs:{cols:"6"}},[a("v-card",{on:{click:t.navigateToAppointments}},[a("v-row",[a("v-col",{attrs:{cols:"2"}}),a("v-col",{attrs:{cols:"8"}},[a("v-img",{staticClass:"rounded-img",attrs:{src:"https://www.benchillmedicalpractice.co.uk/website/P84029/files/appt.jpeg",width:"100%"}})],1),a("v-col",{attrs:{cols:"2"}})],1),a("v-card-title",{staticClass:"justify-center"},[t._v(" Citas ")])],1)],1),a("v-col",{attrs:{cols:"3"}})],1)],1)],1)],1)},r=[],c={name:"home-owner",methods:{select:function(){},navigateToAppointments:function(){this.$router.push({name:"appointments"})},navigateToRestaurant:function(t){this.$router.push({name:"restaurants",params:{id:t}})},navigateToSales:function(){this.$router.push({name:"sales"})},navigateToManageProducts:function(){this.$router.push({name:"products"})},navigateToManageCategories:function(){this.$router.push({name:"categories"})}}},o=c,s=(a("db80"),a("2877")),i=a("6544"),l=a.n(i),u=a("b0af"),d=a("99d9"),f=a("62ad"),v=a("a523"),g=a("adda"),p=a("0fd9"),b=Object(s["a"])(o,n,r,!1,null,"6f4f3e22",null);e["default"]=b.exports;l()(b,{VCard:u["a"],VCardTitle:d["d"],VCol:f["a"],VContainer:v["a"],VImg:g["a"],VRow:p["a"]})},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),c=(a("4b85"),a("2b0e")),o=a("d9f7"),s=a("80d2"),i=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return i.reduce((function(a,n){return a[t+Object(s["D"])(n)]=e(),a}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=u("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(f),justify:Object.keys(g),alignContent:Object.keys(b)},h={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,a){var n=h[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var w=new Map;e["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},g),{},{alignContent:{type:String,default:null,validator:p}},b),render:function(t,e){var a=e.props,r=e.data,c=e.children,s="";for(var i in a)s+=String(a[i]);var l=w.get(s);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var n=a[t],r=j(e,t,n);r&&l.push(r)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),w.set(s,l)}(),t(a.tag,Object(o["a"])(r,{staticClass:"row",class:l}),c)}})},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),c=(a("4b85"),a("2b0e")),o=a("d9f7"),s=a("80d2"),i=["sm","md","lg","xl"],l=function(){return i.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return i.reduce((function(t,e){return t["offset"+Object(s["D"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return i.reduce((function(t,e){return t["order"+Object(s["D"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var g=new Map;e["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,c=e.children,s=(e.parent,"");for(var i in a)s+=String(a[i]);var l=g.get(s);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=a[t],r=v(e,t,n);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),g.set(s,l)}(),t(a.tag,Object(o["a"])(r,{class:l}),c)}})},"987a":function(t,e,a){},db80:function(t,e,a){"use strict";a("987a")}}]);
//# sourceMappingURL=chunk-3b38120e.7c9650c4.js.map