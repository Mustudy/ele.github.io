(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e717b82"],{"6b13":function(t,i,s){},bb51:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"homeWarp"},[s("header",[s("span",{staticClass:"logo"},[t._v("ele.me")]),s("router-link",{attrs:{to:"/login"}},[s("span",[t._v("登录|注册")])])],1),s("nav",[t._m(0),s("router-link",{attrs:{to:{name:"c",params:{cityId:t.guessCity?t.guessCity.id:1}}}},[s("span",[t._v(t._s(t.guessCity?t.guessCity.name:""))]),s("i",{staticClass:"el-icon-arrow-right"})])],1),s("section",{staticClass:"hot_city"},[s("h4",{staticClass:"city_title"},[t._v("热门城市")]),s("ul",t._l(t.hotCity,(function(i){return s("li",{key:i.id,staticClass:"city_style",on:{click:function(s){return t.chooseCity(i.id)}}},[t._v(t._s(i.name))])})),0)]),s("section",{staticClass:"group_city"},[s("ul",t._l(t.groupCity,(function(i,n,e){return s("li",{key:n,staticClass:"g_li"},[s("h4",{staticClass:"city_title"},[t._v(" "+t._s(n)+" "),t._v(" "+t._s(e?"":"(按字母排序)")+" ")]),s("ul",t._l(i,(function(i){return s("li",{key:i.id,staticClass:"city_style ellipsis",on:{click:function(s){return t.chooseCity(i.id)}}},[t._v(t._s(i.name))])})),0)])})),0)])])},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("span",[t._v("当前定位城市：")]),s("span",{staticClass:"r_span"},[t._v("定位不准时，请在城市列表中选择")])])}],c=(s("4160"),s("b64b"),s("159b"),{name:"Home",data:function(){return{guessCity:null,hotCity:[],groupCity:null}},created:function(){var t=this;this.axios.get("/v1/cities",{params:{type:"guess"}}).then((function(i){t.guessCity=i})).catch((function(t){})),this.axios.get("/v1/cities",{params:{type:"hot"}}).then((function(i){t.hotCity=i})).catch((function(t){})),this.axios.get("/v1/cities",{params:{type:"group"}}).then((function(i){t.handleGroupCity(i)})).catch((function(t){}))},methods:{handleGroupCity:function(t){var i={};Object.keys(t).sort().forEach((function(s){i[s]=t[s]})),this.groupCity=i},chooseCity:function(t){console.log(t),this.$router.push({name:"c",params:{cityId:t}})}}}),a=c,o=(s("c1e0"),s("2877")),u=Object(o["a"])(a,n,e,!1,null,"abb32820",null);i["default"]=u.exports},c1e0:function(t,i,s){"use strict";var n=s("6b13"),e=s.n(n);e.a}}]);
//# sourceMappingURL=chunk-0e717b82.c1ec13dc.js.map