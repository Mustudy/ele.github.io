(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f2db3ca"],{"1cd7":function(t,s,e){"use strict";var a=e("8d71"),i=e.n(a);i.a},"8d71":function(t,s,e){},d12e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"usecart"},[e("header",{staticClass:"usecart_top"},[e("i",{staticClass:"el-icon-arrow-left",on:{click:function(s){return t.$router.back(-1)}}}),e("span",{staticClass:"my"},[t._v("兑换会员")])]),e("p",{staticClass:"buy_for"},[t._v(" 成功兑换后将关联到当前帐号："),e("span",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.name))])]),e("div",{staticClass:"form_style"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",placeholder:"请输入10位卡号",maxlength:"10"},domProps:{value:t.id},on:{keyup:t.getvalue,input:function(s){s.target.composing||(t.id=s.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"请输入6位卡密",maxlength:"6"},domProps:{value:t.password},on:{keyup:t.getvalue,input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t.isTrue?e("p",{staticClass:"determine"},[t._v("兑换")]):t._e(),t.isShow?e("p",{staticClass:"determine",staticStyle:{"background-color":"#4cd964"},on:{click:t.warn}},[t._v("兑换")]):t._e(),t._m(0),e("transition",{attrs:{name:"kf"}},[t.showcom?e("div",{staticClass:"alet_container"},[e("section",{staticClass:"tip_text_container"},[e("div",{staticClass:"tip_icon"},[e("span"),e("span")]),e("p",{staticClass:"tip_text"},[t._v("无效的卡号")]),e("div",{staticClass:"confrim",on:{click:t.get}},[t._v("确认")])])]):t._e()])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"Binding"},[e("h3",[t._v("——温馨提示——")]),e("p",[t._v("新兑换的会员服务，权益以「会员说明」为准。")]),e("p",[t._v("月卡：30次减免配送费。")]),e("p",[t._v("季卡：90次减免配送费。")]),e("p",[t._v("年卡：360次减免配送费。")]),e("p",[t._v("＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）")])])}],n=(e("b0c0"),{name:"Usecart",data:function(){return{userinfo:[],name:"",id:"",password:"",isTrue:!0,isShow:!1,showcom:!1}},created:function(){localStorage.getItem("userinfo")&&(this.userinfo=JSON.parse(localStorage.getItem("userinfo")),this.name=this.userinfo[0].username)},methods:{getvalue:function(){10==this.id.length&&6==this.password.length?(this.isShow=!0,this.isTrue=!1):(this.isShow=!1,this.isTrue=!0)},warn:function(){this.showcom=!0},get:function(){this.showcom=!1,this.id="",this.password=""}}}),o=n,r=(e("1cd7"),e("2877")),c=Object(r["a"])(o,a,i,!1,null,"20170ecf",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-5f2db3ca.0d1b7944.js.map