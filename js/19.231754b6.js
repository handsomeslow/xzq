(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"LRO+":function(t,e,a){},"O/++":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",{staticClass:"info-card",attrs:{shadow:""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"企业名称",prop:"name"}},[a("Input",{attrs:{placeholder:"企业名称"},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"联系邮箱",prop:"email"}},[a("Input",{attrs:{placeholder:"联系邮箱"},model:{value:t.formValidate.email,callback:function(e){t.$set(t.formValidate,"email",e)},expression:"formValidate.email"}})],1),t._v(" "),a("FormItem",{attrs:{label:"企业性质"}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{prop:"category"}},[a("Select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择企业性质"},model:{value:t.formValidate.category,callback:function(e){t.$set(t.formValidate,"category",e)},expression:"formValidate.category"}},[a("Option",{attrs:{value:"1"}},[t._v("民营/私营企业")]),t._v(" "),a("Option",{attrs:{value:"2"}},[t._v("国有企业")]),t._v(" "),a("Option",{attrs:{value:"3"}},[t._v("事业单位")]),t._v(" "),a("Option",{attrs:{value:"4"}},[t._v("政府/非营利组织")]),t._v(" "),a("Option",{attrs:{value:"5"}},[t._v("股份制企业")]),t._v(" "),a("Option",{attrs:{value:"6"}},[t._v("中外合资")]),t._v(" "),a("Option",{attrs:{value:"7"}},[t._v("外企独资")])],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"11"}},[a("FormItem",{attrs:{label:"企业规模",prop:"scale"}},[a("Select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择企业规模"},model:{value:t.formValidate.scale,callback:function(e){t.$set(t.formValidate,"scale",e)},expression:"formValidate.scale"}},[a("Option",{attrs:{value:"1"}},[t._v("5人以下")]),t._v(" "),a("Option",{attrs:{value:"2"}},[t._v("5-10人")]),t._v(" "),a("Option",{attrs:{value:"3"}},[t._v("11-20人")]),t._v(" "),a("Option",{attrs:{value:"4"}},[t._v("51-100人")]),t._v(" "),a("Option",{attrs:{value:"5"}},[t._v("101-500人")]),t._v(" "),a("Option",{attrs:{value:"6"}},[t._v("501-1000人")]),t._v(" "),a("Option",{attrs:{value:"7"}},[t._v("1000人以上")])],1)],1)],1)],1)],1),t._v(" "),a("FormItem",{attrs:{label:"所属行业",prop:"trade"}},[a("Select",{attrs:{filterable:""},model:{value:t.formValidate.trade,callback:function(e){t.$set(t.formValidate,"trade",e)},expression:"formValidate.trade"}},t._l(t.tradeList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),t._v(" "),a("FormItem",{attrs:{label:"企业简介",prop:"desc"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入企业简介"},model:{value:t.formValidate.desc,callback:function(e){t.$set(t.formValidate,"desc",e)},expression:"formValidate.desc"}})],1),t._v(" "),a("FormItem",[t.formValidate.certificateUrl?a("div",[a("img",{staticStyle:{width:"500px"},attrs:{src:t.formValidate.certificateUrl}})]):a("Upload",{ref:"upload",attrs:{"on-success":t.handleUploadSuccess,format:["jpg","jpeg","png"],"max-size":4048,headers:t.uploadHeader,action:t.uploadApi,type:"drag"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),a("p",[t._v("点击或者直接将营业执照拖到此处上传")])],1)])],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary",disabled:t.state},on:{click:function(e){t.handleSubmit("formValidate")}}},[t._v(t._s(t.submitText))])],1)],1)],1)},l=[],i=(a("f3/d"),a("sT5k")),o=a("wnYN"),s={data:function(){return{state:!1,submitText:"提交认证",formValidate:{name:"",email:"",city:"",category:"",scale:"",trade:"",desc:"",certificateUrl:""},ruleValidate:{name:[{required:!0,message:"企业名称不可为空",trigger:"blur"}],email:[{required:!0,message:"联系邮箱不可为空",trigger:"blur"},{type:"email",message:"联系邮箱格式有误",trigger:"blur"}],scale:[{required:!0,message:"请选择企业规模",trigger:"change"}],category:[{required:!0,message:"请选择企业类型",trigger:"change"}],trade:[{required:!0,message:"请选择企业所属行业",trigger:"change"}],desc:[{required:!0,message:"请输入企业介绍",trigger:"blur"},{type:"string",min:20,message:"企业介绍不得低于20个中文",trigger:"blur"}]},tradeList:[{label:"计算机软件",value:"1"},{label:"计算机硬件",value:"2"},{label:"互联网/电子商务",value:"3"},{label:"电子/微电子",value:"4"},{label:"通信(设备/运营/增值)",value:"5"},{label:"广告/会展/公关",value:"6"},{label:"房地产开发/建筑与工程",value:"7"},{label:"物业管理/商业中心",value:"8"},{label:"家居/室内设计/装潢",value:"9"},{label:"金融业(投资/保险/证券/银行/基金)",value:"10"},{label:"石油/化工/采掘/冶炼/原材料",value:"11"},{label:"教育/培训/科研/院校",value:"12"},{label:"仪器/仪表/工业自动化/电气",value:"13"},{label:"媒体/出版/文化传播",value:"14"},{label:"机械制造/机电/重工",value:"15"},{label:"制药/生物工程",value:"16"},{label:"交通/运输/物流",value:"17"},{label:"服务业",value:"18"},{label:"旅游/酒店/餐饮服务",value:"19"}],uploadHeader:{authorization:Object(o["m"])()},uploadApi:"".concat(o["a"],"/article/upload")}},mounted:function(){this.getInfo(),this.updateState(),console.log(this.uploadApi)},methods:{handleSubmit:function(t){var e=this,a=this;this.$refs[t].validate(function(t){t?(e.$Loading.start(),Object(i["f"])(e.formValidate).then(function(t){e.$Notice.success({title:"提交成功"}),e.state=!0,e.submitText="认证中..."}).catch(function(t){a.$Modal.error({title:"抱歉",content:t.content})}).then(function(t){e.$Loading.finish()})):e.$Message.error("请将信息补充完整后提交!")})},handleUploadSuccess:function(t){t&&200===t.code&&t.data.length>0&&this.$set(this.formValidate,"certificateUrl",t.data[0])},getInfo:function(){var t=this,e=this.compangId();Object(i["d"])(e).then(function(e){e&&(t.formValidate=e)}).catch(function(t){self.$Modal.error({title:"抱歉",content:t.content})}).then(function(e){t.$Loading.finish()})},compangId:function(){return this.$store.state.user.company},updateState:function(){var t=this.$store.state.user.userState;2001===t?(this.state=!0,this.submitText="已认证"):1001===t||1002===t?(this.state=!0,this.submitText="认证中..."):(this.state=!1,this.submitText="提交认证")}}},n=s,u=(a("afC1"),a("KHd+")),c=Object(u["a"])(n,r,l,!1,null,null,null);e["default"]=c.exports},afC1:function(t,e,a){"use strict";var r=a("LRO+"),l=a.n(r);l.a},sT5k:function(t,e,a){"use strict";a.d(e,"e",function(){return l}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return o}),a.d(e,"b",function(){return s}),a.d(e,"f",function(){return n}),a.d(e,"d",function(){return u});a("VRzm");var r=a("Zt8a");function l(){return r["a"].request({url:"/getRecommendList",method:"get"})}function i(t,e){return r["a"].request({url:"/article/list",method:"get",params:{page:t,count:e}})}function o(t){return r["a"].request({url:"/article/create",method:"post",data:t})}function s(t){return r["a"].request({url:"/article/delete",method:"post",data:{id:t}})}function n(t){return r["a"].request({url:"/company/create",method:"post",data:t})}function u(t){return r["a"].request({url:"/company/getinfo",method:"get",params:{id:t}})}}}]);