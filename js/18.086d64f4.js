(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"/5g7":function(t,e,i){"use strict";var a=i("LTEL"),s=i.n(a);s.a},Exdw:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tip-layout"},[i("Icon",{attrs:{type:"md-checkmark-circle",size:"36",color:"#19be6b"}}),t._v(" "),i("p",{staticClass:"tip"},[t._v("恭喜您激活成功")])],1),t._v(" "),i("div",{staticClass:"subtip-layout"},[i("p",{staticClass:"sub-tip"},[t._v("现在可以使用"+t._s(t.username)+"登录")]),t._v(" "),i("p",{staticClass:"sub-tip"},[t._v("登录后，即可免费发布校招信息啦")])]),t._v(" "),i("Card",{staticStyle:{width:"280px",margin:"auto"}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"240px"},attrs:{src:t.image}}),t._v(" "),i("h3",[t._v("更好用的校招平台")])])])],1)},s=[],n=i("nWR2"),r=i.n(n),u=i("wk8/"),c={name:"validate_register",data:function(){return{image:r.a,username:"x"}},methods:{validateUser:function(t){var e=this,i=this;Object(u["d"])(t).then(function(t){i.username=t.username,e.$Loading.start(),setTimeout(function(){i.$Loading.finish(),i.$router.push({name:"login"})},5e3)})}},mounted:function(){this.validateUser(this.$route.query.openid)}},o=c,l=(i("/5g7"),i("KHd+")),d=Object(l["a"])(o,a,s,!1,null,null,null);e["default"]=d.exports},LTEL:function(t,e,i){}}]);