(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cae6ffa"],{"01ec":function(t,e,i){t.exports=i.p+"img/pc2.609ae5b7.png"},"0472":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-drawer",{ref:"drawer",attrs:{title:"我是标题",visible:t.drawer,"with-header":!1,direction:"ltr","before-close":t.handleClose,modal:!0},on:{"update:visible":function(e){t.drawer=e}}},[i("div",{staticStyle:{padding:"20px 10px",display:"flex","align-items":"center","justify-content":"space-around"}},[i("div",{staticClass:"el-icon-sunny",staticStyle:{color:"#fff","font-size":"24px"}}),i("div",{staticClass:"el-icon-bell",staticStyle:{color:"#fff","font-size":"22px"}})]),i("div",{staticStyle:{background:"#f5f5f5",width:"70px",height:"70px","border-radius":"50%",margin:"10px auto"}},[i("el-avatar",{attrs:{size:70,src:t.avatarImgUrl?t.avatarImgUrl:t.getImgUrl("avatar.jpg")}})],1),i("h2",{staticClass:"title",staticStyle:{color:"#fff","font-size":"16px!important"}},[t._v(t._s(t.username))]),i("div",{staticClass:"menu_list"},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeIndex,router:""},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"/"}},[i("i",{staticClass:"el-icon-s-home"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),i("el-menu-item",{attrs:{index:"/notes"}},[i("i",{staticClass:"el-icon-notebook-2"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("文章")])]),i("el-menu-item",{attrs:{index:"/resume"}},[i("i",{staticClass:"el-icon-document"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("简历")])]),i("el-menu-item",{attrs:{index:"/essays"}},[i("i",{staticClass:"el-icon-chat-line-square"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("短句")])]),i("el-menu-item",{attrs:{index:"/guestbook"}},[i("i",{staticClass:"el-icon-message"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("留言板")])]),"admin"==t.role?i("el-menu-item",{attrs:{index:"/editor"}},[i("i",{staticClass:"el-icon-edit"}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v("编辑文章")])]):t._e()],1)],1),i("div",{staticStyle:{margin:"0 20px"}},[null==t.role?i("el-button",{staticStyle:{width:"100%"},attrs:{size:"mini",type:"danger"},on:{click:t.showLoginDialog}},[t._v("登录")]):i("el-button",{staticStyle:{width:"100%"},attrs:{size:"mini",type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1)]),i("dialog-login",{attrs:{dialogVisible:t.dialogVisible},on:{close:t.closeDialog}})],1)},s=[],r=(i("ac1f"),i("5319"),i("1364")),l={components:{"dialog-login":r["a"]},props:{drawerFlag:Boolean},data:function(){return{activeIndex:"/",drawer:!1,dialogVisible:!1,role:null==JSON.parse(this.$store.state.blog.user)?null:JSON.parse(this.$store.state.blog.user).role,username:null==JSON.parse(this.$store.state.blog.user)?"李景旭":JSON.parse(this.$store.state.blog.user).username,avatarImgUrl:null==JSON.parse(this.$store.state.blog.user)?null:JSON.parse(this.$store.state.blog.user).avatarImgUrl}},watch:{drawerFlag:function(t){this.drawer=t},$route:function(){this.fetchNavData()},"$store.state.blog.user":function(t){null!=t?(this.role=JSON.parse(t).role,this.username=JSON.parse(t).username,this.avatarImgUrl=JSON.parse(t).avatarImgUrl):(this.role=null,this.username="JingXu",this.avatarImgUrl=null)}},created:function(){this.fetchNavData()},methods:{handleSelect:function(t){this.activeIndex=t,this.$refs.drawer.closeDrawer()},fetchNavData:function(){for(var t=this.$route.path,e=this.$router.options.routes,i="",a=0;a<e.length;a++)if(e[a].type===t){i=e[a].type;break}"/"==i?(this.flag=!0,this.activeIndex="/"):"/resume"==i?(this.flag=!1,this.activeIndex=i):(this.flag=!0,this.activeIndex=i)},getImgUrl:function(t){return i("7584")("./"+t)},handleClose:function(t){this.$emit("changeDrawer",!1),t()},showLoginDialog:function(){this.$refs.drawer.closeDrawer(),this.dialogVisible=!0},closeDialog:function(t){this.dialogVisible=t},logout:function(){this.$store.dispatch("setAccount",null),window.localStorage.clear(),this.$refs.drawer.closeDrawer(),"/editor"==this.$route.path&&this.$router.replace("/"),this.$message.success({message:"您已退出登录",duration:"1000"})}}},n=l,o=i("2877"),c=Object(o["a"])(n,a,s,!1,null,"e6bd975e",null);e["a"]=c.exports},"114b":function(t,e,i){t.exports=i.p+"img/banner3.b6688fd3.jpg"},1364:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contents"},[i("el-dialog",{attrs:{visible:t.loginVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(e){t.loginVisible=e}}},[i("div",{staticStyle:{position:"absolute",left:"0px",top:"0"}},[i("div",{staticClass:"icon_menu height"},[i("span",{staticClass:"el-icon-back",staticStyle:{"font-size":"24px"},on:{click:t.closeLoginDialog}})])]),i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",margin:"20px 10px 0"}},[i("h2",[t._v("欢迎回来...")]),i("div",{staticStyle:{color:"#ec558c"},on:{click:t.toRegist}},[t._v("去注册")])]),i("div",{staticStyle:{"text-align":"left","font-size":"16px",margin:"10px 0 20px 10px","font-weight":"600"}},[t._v("请先填写以下信息进行登录")]),i("el-form",{ref:"loginForm",staticClass:"forms",staticStyle:{margin:"0px 20px 0 10px","padding-top":"20px","user-select":"none"},attrs:{model:t.loginForm,"label-width":"0px",rules:t.rules}},[i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{attrs:{size:"mini",placeholder:"请输入邮箱"},model:{value:t.loginForm.email,callback:function(e){t.$set(t.loginForm,"email",e)},expression:"loginForm.email"}})],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{attrs:{type:"password",autocomplete:"off",size:"mini",placeholder:"请输入密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.login}},[t._v("登 录")])],1)],1)],1),i("el-dialog",{attrs:{visible:t.registVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(e){t.registVisible=e}}},[i("div",{staticStyle:{position:"absolute",left:"0px",top:"0"}},[i("div",{staticClass:"icon_menu height"},[i("span",{staticClass:"el-icon-back",staticStyle:{"font-size":"24px"},on:{click:t.closeRegistDialog}})])]),i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",margin:"20px 10px 0"}},[i("h2",[t._v("欢迎你...")]),i("div",{staticStyle:{color:"#ec558c"},on:{click:t.toLogin}},[t._v("去登录")])]),i("div",{staticStyle:{"text-align":"left","font-size":"16px",margin:"10px 0 20px 10px","font-weight":"600"}},[t._v("请先填写以下信息进行注册")]),i("el-form",{ref:"registForm",staticClass:"forms",staticStyle:{margin:"0px 20px 0 10px","padding-top":"20px","user-select":"none"},attrs:{model:t.registForm,"label-width":"0px",rules:t.rules}},[i("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[i("el-input",{attrs:{size:"mini",placeholder:"请输入邮箱"},model:{value:t.registForm.email,callback:function(e){t.$set(t.registForm,"email",e)},expression:"registForm.email"}})],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{attrs:{type:"password",autocomplete:"off",size:"mini",placeholder:"请输入密码"},model:{value:t.registForm.password,callback:function(e){t.$set(t.registForm,"password",e)},expression:"registForm.password"}})],1),i("el-form-item",{attrs:{label:"昵称",prop:"username"}},[i("el-input",{attrs:{autocomplete:"off",size:"mini",placeholder:"请输入昵称"},model:{value:t.registForm.username,callback:function(e){t.$set(t.registForm,"username",e)},expression:"registForm.username"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.regist}},[t._v("注册")])],1)],1)],1)],1)},s=[],r=(i("96cf"),i("1da1")),l=i("b775"),n=function(t){var e=t;return l["a"].post("api/login",e)},o=function(t){var e=t;return l["a"].post("api/register",e)},c=i("f121"),p={data:function(){return{loginVisible:!1,registVisible:!1,rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}],username:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:2,max:7,message:"长度在 2 到 7 个字符",trigger:"blur"}]},loginForm:{email:"",password:""},registForm:{email:"",password:"",username:""}}},props:{dialogVisible:Boolean},watch:{dialogVisible:function(t){this.loginVisible=t}},created:function(){},methods:{login:function(){var t=this;this.$refs.loginForm.validate(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=16;break}return a={email:t.loginForm.email,password:t.loginForm.password},e.next=4,n(a);case 4:if(s=e.sent,r=s.data,200==r.status){e.next=8;break}return e.abrupt("return",t.$message.error(r.message));case 8:t.$message.success({message:r.message,duration:"1000"}),window.localStorage.setItem("user",JSON.stringify(r.data)),t.$store.dispatch("setAccount",JSON.stringify(r.data)),t.loginVisible=!1,t.$emit("close",!1),t.loginForm={email:"",password:""},e.next=17;break;case 16:return e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},regist:function(){var t=this;this.$refs.registForm.validate(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=15;break}return a={email:t.registForm.email,password:t.registForm.password,username:t.registForm.username,avatarImgUrl:"".concat(c["a"].baseUrl,"public/page/headImg/1604365182578.png")},e.next=4,o(a);case 4:if(s=e.sent,r=s.data,200==r.status){e.next=8;break}return e.abrupt("return",t.$message.error(r.message));case 8:t.$message.success({message:r.message,duration:"2000"}),t.loginForm.email=t.registForm.email,t.loginVisible=!0,t.registVisible=!1,t.registForm={email:"",password:"",username:""},e.next=16;break;case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeLoginDialog:function(){this.loginVisible=!1,this.$emit("close",!1)},closeRegistDialog:function(){this.registVisible=!1,this.$emit("close",!1)},toRegist:function(){this.$refs.loginForm.clearValidate(),this.loginVisible=!1,this.registVisible=!0},toLogin:function(){this.$refs.registForm.clearValidate(),this.registVisible=!1,this.loginVisible=!0}}},g=p,d=i("2877"),u=Object(d["a"])(g,a,s,!1,null,"d9c20294",null);e["a"]=u.exports},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,s=i("a640"),r=i("ae40"),l=s("forEach"),n=r("forEach");t.exports=l&&n?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1b30":function(t,e,i){t.exports=i.p+"img/pc3.fff60e13.png"},"253b":function(t,e,i){t.exports=i.p+"img/app1.cd3d8739.jpg"},"2d35":function(t,e,i){t.exports=i.p+"img/pc8.ec89d2d6.png"},3379:function(t,e,i){t.exports=i.p+"img/pc6.7499c83b.png"},"3f1d":function(t,e,i){t.exports=i.p+"img/app2.e034fb67.jpg"},4125:function(t,e,i){t.exports=i.p+"img/pc9.d5ce7284.png"},4160:function(t,e,i){"use strict";var a=i("23e7"),s=i("17c2");a({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"45ef":function(t,e,i){t.exports=i.p+"img/article1.0cd88892.webp"},"4b75":function(t,e,i){t.exports=i.p+"img/not_found.f7c78dbd.gif"},"4c7f":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",width:"100%",overflow:"hidden"}},[i("div",{staticClass:"row_bg",staticStyle:{height:"100%"}},[i("div",{staticClass:"header hidden-lg-and-up",style:t.opacityStyle},[i("el-row",{staticClass:"row"},[i("el-col",{staticClass:"height",attrs:{xs:24,sm:21,md:21,lg:4,xl:4}},[i("span",{staticClass:"title",staticStyle:{color:"#fff"}},[t._v("JingXu")])]),i("div",{staticClass:"hidden-lg-and-up",staticStyle:{position:"absolute",right:"10px"}},[i("div",{staticClass:"icon_menu height"},[i("span",{staticClass:"el-icon-menu",staticStyle:{"font-size":"24px",color:"#fff"},on:{click:function(e){t.drawer=!0}}})])])],1)],1),i("drawer-biew",{attrs:{drawerFlag:t.drawer},on:{changeDrawer:t.drawerChange}}),i("div",{staticClass:"personal_left"},[i("div",{staticClass:"personal_box"},[i("el-avatar",{attrs:{size:70,src:t.getImgUrl("avatar.jpg")}}),i("h2",{staticClass:"text_right"},[t._v("李景旭")]),i("p",{staticClass:"text_right"},[t._v("Web前端工程师")]),t._m(0),i("p",{staticClass:"text_right"},[t._v("人民有信仰，民族有希望，国家有力量")]),t._m(1),t._m(2),i("el-button",{staticStyle:{margin:"5px 0"},attrs:{type:"primary",size:"mini"},on:{click:t.downLoad,touchend:t.downLoad}},[t._v("下载简历到本地")]),i("br"),i("el-button",{staticClass:"hidden-md-and-down",staticStyle:{margin:"5px 0"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return e.stopPropagation(),t.returnIndex(e)},touhend:function(e){return e.stopPropagation(),t.returnIndex(e)}}},[t._v("返回首页")])],1)]),i("div",{staticClass:"personal_right"},[i("div",{staticClass:"right_model"},[i("h2",[t._v("相关技能")]),t._m(3),i("el-divider")],1),i("div",{staticClass:"right_model"},[i("h2",[t._v("工作经历")]),i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 30px","align-items":"center"}},[i("div",{staticStyle:{display:"inline-block"}},[i("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.getImgUrl("logo.png"),fit:"cover"}})],1),t._m(4)]),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("前端开发 | 计算机软件")]),t._m(5),i("el-divider")],1),i("div",{staticClass:"right_model"},[i("h2",[t._v("项目经历")]),i("div",{staticClass:"project"},[t._m(6),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("Web前端开发工程师")]),t._m(7),i("el-divider")],1),i("div",{staticClass:"project"},[t._m(8),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("Web前端开发工程师")]),t._m(9),i("el-divider")],1),i("div",{staticClass:"project"},[t._m(10),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("Web前端开发工程师")]),t._m(11),i("el-divider")],1),i("div",{staticClass:"project"},[t._m(12),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("Web前端开发工程师")]),t._m(13),i("el-divider")],1),i("div",{staticClass:"project"},[t._m(14),i("div",{staticStyle:{"text-align":"left",padding:"15px 30px"}},[t._v("Web前端开发工程师")]),t._m(15),i("el-divider")],1)]),i("div",{staticClass:"right_model"},[i("h2",[t._v("项目经历")]),i("el-tabs",{attrs:{stretch:""},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{staticStyle:{"flex-wrap":"wrap","justify-content":"center",background:"#f5f5f5"},attrs:{label:"PC端",name:"pc"}},[i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc1.jpg"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("辐射安全与放射卫生管理系统")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc2.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("辐射安全与放射卫生管理系统")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc3.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("辐射安全与放射卫生管理系统")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc4.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("辐射安全与放射卫生管理系统")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc5.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("辐射安全与放射卫生管理系统")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc6.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全系统（PC端）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc7.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全系统（PC端）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc8.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全系统（PC端）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc9.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全系统（PC端）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("pc10.png"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全系统（PC端）")])])],1)]),i("el-tab-pane",{staticStyle:{"flex-wrap":"wrap","justify-content":"center",background:"#f5f5f5"},attrs:{label:"App",name:"app"}},[i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("app1.jpg"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全APP（Uni-app）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("app2.jpg"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全APP（Uni-app）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("app3.jpg"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全APP（Uni-app）")])])],1),i("div",{staticClass:"hover ehover3",staticStyle:{width:"150px",height:"150px",cursor:"pointer",margin:"5px"}},[i("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getImgUrl("app4.jpg"),fit:"cover"}}),i("div",{staticClass:"overlay"},[i("h3",[t._v("智慧辐射安全APP（Uni-app）")])])],1)])],1),i("el-divider")],1),i("div",{staticClass:"right_model"},[i("h2",[t._v("期望工作")]),i("div",[t._m(16),i("el-divider")],1)])])],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"text_right personal"},[i("span",{staticClass:"el-icon-s-custom"},[t._v(" 男 / 23岁 /")]),i("span",{staticClass:"el-icon-s-cooperation"},[t._v(" 3年工作经验")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"text_right"},[i("span",{staticClass:"el-icon-phone"},[t._v(" 18310282832")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"text_right"},[i("span",{staticClass:"el-icon-message"},[t._v(" 18310282832@163.com")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 熟练掌握HTML5、CSS3、JavaScript、了解ES6、ES7常用语法；")]),i("li",[t._v(" • 熟悉Vue，能够进行项目开发并有独立的项目开发经验；")]),i("li",[t._v(" • 熟悉Element-ui、Mint-Ui等前端UI组件库；")]),i("li",[t._v(" • 熟练使用Git版本控制工具进行代码管理；")]),i("li",[t._v(" • 熟悉uni-app跨平台框架开发应用，有项目开发经验；")]),i("li",[t._v(" • 熟悉Websocket网络通信协议构建实时数据传输web应用；")]),i("li",[t._v(" • 熟悉原生小程序开发流程,有项目独立开发经验；")]),i("li",[t._v(" • 熟悉nodeJs服务端语言；")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("div",{staticStyle:{"text-align":"left",padding:"8px"}},[t._v("2018.10 - 2020.11")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("华克医疗科技(北京)股份公司")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 担任公司前端开发岗位，负责产品升级迭代，缺陷修复等工作；")]),i("li",[t._v(" • 与项目团队紧密合作，确保系统正常运行，优化项目性能及视图，提高用户使用体验；")]),i("li",[t._v(" • 参与项目组需求调研，产品业务探讨，编写技术实现方案等；")]),i("li",[t._v(" • 工作期间使用的技术栈有Vue.js、VueRouter、Vuex、Jquery，webRTC、WebSocket、Flutter、Uni-app、小程序 ")]),i("li",[t._v(" • 主导部分前端项目开发，项目架构，技术栈选择，项目性能优化，组件封装，并且完成前端开发任务；")]),i("li",[t._v(" • 在职期间参与或独立完成多个公司项目，并且善于发现新技术去学习应用；")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 0px 0 30px","align-items":"center"}},[i("div",{staticStyle:{"text-align":"left"}},[t._v("2018.10 - 2020.11")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("智慧辐射安全APP（Uni-app）")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 负责智慧辐射安全管理APP前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务")]),i("li",[t._v(" • 项目核心功能包括数据可视化，机器人指令操控，以及对接后台实现控制放射机房中智能设备控制等")]),i("li",[t._v(" • 项目采用Uni-app跨平台框架开发，采用uCharts完成数据可视化展示 ")]),i("li",[t._v(" • 封装内网环境下API请求方法和部分共有控件的封装 ")]),i("li",[t._v(" • 项目中使用的技术栈：Vue、ES6、JavaScript、小程序Api等，由于项目特殊性，只兼容Android端 ")]),i("li",[t._v(" • 目前项目已经在北京市广安门医院，中日友好医院和PC端同步实施测试")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 0px 0 30px","align-items":"center"}},[i("div",{staticStyle:{"text-align":"left"}},[t._v("2020.06 - 2020.10")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("智慧辐射安全系统（PC端）")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 负责项目前端开发工作，根据也无需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 ")]),i("li",[t._v(" • 项目核心功能包括多种数据可视化图表、监控视频，视频通话，语音通话、缩略图、上传、下载、导入、导出以及控制到tab页签级别的权限管理系统 ")]),i("li",[t._v(" • 封装公用组件包括表格，tab页签，分页，导出，导入，上传头像等组件，提高了代码的可复用性 ")]),i("li",[t._v(" • 使用WebSocket通信协议，建立长连接，实现图表数据的实时刷新，以及指令的实时渲染，医学废物排放实时提醒 ")]),i("li",[t._v(" • 使用webRTC即时通信和WebSocket完成局域网环境下PC端和Android端的音视频通话")]),i("li",[t._v(" • 项目中使用的技术栈：Vue、Vue-Router、Vuex、Element-Ui、axios、Echarts、WebSocket、webRTC等 ")]),i("li",[t._v(" • 目前项目已经在北京市广安门医院，中日友好医院和App端同步实施测试")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 0px 0 30px","align-items":"center"}},[i("div",{staticStyle:{"text-align":"left"}},[t._v("2020.05 - 2020.07")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("射线环境检测系统（PC端）")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 ")]),i("li",[t._v(" • 项目核心功能包括多种数据可视化图表、以及角色+用户+菜单+按钮的权限管理系统 ")]),i("li",[t._v(" • 封装公用组件包括表格，tab页签，分页，导出，导入，上传头像等组件，提高了代码的可复用性 ")]),i("li",[t._v(" • 使用WebSocket通信协议，建立长连接，实现图表数据的实时刷新 ")]),i("li",[t._v(" • 项目中使用的技术栈：Vue、Vue-Router、Vuex、Element-Ui、axios、Echarts、WebSocket等")]),i("li",[t._v(" • 目前项目已经在北京市广安门医院，中日友好医院实施测试")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 0px 0 30px","align-items":"center"}},[i("div",{staticStyle:{"text-align":"left"}},[t._v("2019.12 - 2020.04")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("设备管理App（Flutter App）")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 ")]),i("li",[t._v(" • 项目核心功能包括内网环境中语音识别，面部识别，媒体数据上传，SqlLite本地数据库存储，联网上传下载基础数据 等功能 ")]),i("li",[t._v(" • 封装项目基础控件，列表，图表，下拉加载，上拉刷新等控件； ")]),i("li",[t._v(" • 项目使用ImagePicker控件获取用户拍照权限，以FormData形式上传到后台服务器并返回识别结果； ")]),i("li",[t._v(" • 项目使用的技术栈包括FLutter、dio、sqllite、Connectivity、image_picker等")]),i("li",[t._v(" • 目前项目已经在北京市广安门医院，中日友好医院实施测试")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0px 0px 0 30px","align-items":"center"}},[i("div",{staticStyle:{"text-align":"left"}},[t._v("2019.04 - 2020.02")]),i("div",{staticClass:"title",staticStyle:{"text-align":"left","font-size":"16px !important"}},[t._v("辐射安全与放射卫生管理系统")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" • 负责项目前端开发工作，根据业务需求与开发团队共同完成产品的迭代升级，缺陷优化等任务 ")]),i("li",[t._v(" • 与后端团队共同优化数据传输流程，大幅度提高前端性能，优化数据量过大时，表格数据卡顿现象 ")]),i("li",[t._v(" • 封装视频在线播放功能、上传、下载、导入/导出、tabs页签，Vue ReLoad刷新等功能，并且使用Mixins混入来分发 组件中可复用的功能； ")]),i("li",[t._v(" • 项目是用户+角色+菜单+按钮的权限管理系统，控制单点登录，通过注册动态路由，并且将权限控制到按钮级别 ")]),i("li",[t._v(" • 项目使用的技术栈包括Vue， Vue-Router，Vuex，Element-ui，axios，pl-table")]),i("li",[t._v(" • 该项目目前已在北京广安门医院，中日友好医院部署运行，部分医院试运行；")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"job_box",staticStyle:{"text-align":"left",padding:"15px 10px"}},[i("span",{staticClass:"el-icon-s-cooperation"},[t._v("Web前端")]),i("span",{staticClass:"el-icon-timer"},[t._v("全职")]),i("span",{staticClass:"el-icon-location-outline"},[t._v("西安")]),i("span",{staticClass:"el-icon-coin"},[t._v("12K")])])}],r=(i("4160"),i("f121")),l=i("0472"),n={components:{"drawer-biew":l["a"]},data:function(){return{activeName:"pc",showAbs:!0,opacityStyle:{opacity:.2,height:"50px",background:"#000000"},drawer:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},created:function(){},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t>60){var e=t/400;e=e>1?1:e,this.opacityStyle={opacity:e,height:"50px",background:"#000000"},this.showAbs=!1}else this.opacityStyle={opacity:.2,height:"50px",background:"#000000"},this.showAbs=!0},getImgUrl:function(t){return i("7584")("./"+t)},returnIndex:function(){this.$router.push("/")},handleClick:function(){},setPreview:function(t){var e=[];return e.push(t),e.forEach((function(e){e.src=t.imagebase,e.msrc=t.imagebase,e.alt=t.imagename,e.title=t.imagename,e.w=800,e.h=600})),e},drawerChange:function(t){this.drawer=t},downLoad:function(){window.open(r["a"].baseUrl+"./public/page/headImg/李景旭-web前端工程师.pdf")}}},o=n,c=(i("e736"),i("2877")),p=Object(c["a"])(o,a,s,!1,null,"0f93042b",null);e["default"]=p.exports},"53a8":function(t,e,i){t.exports=i.p+"img/pc4.1cec03fc.png"},5666:function(t,e,i){t.exports=i.p+"img/banner5.510a71f9.jpg"},"5ae9":function(t,e,i){},"65f0":function(t,e,i){var a=i("861d"),s=i("e8b5"),r=i("b622"),l=r("species");t.exports=function(t,e){var i;return s(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!s(i.prototype)?a(i)&&(i=i[l],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"6b25":function(t,e,i){t.exports=i.p+"img/page1.69cf4869.jpg"},7584:function(t,e,i){var a={"./app1.jpg":"253b","./app2.jpg":"3f1d","./app3.jpg":"f12f","./app4.jpg":"bf27","./article1.webp":"45ef","./avatar.jpg":"92ef","./banner1.jpg":"d15f","./banner2.jpg":"db49","./banner3.jpg":"114b","./banner4.jpg":"8973","./banner5.jpg":"5666","./logo.png":"9d64","./not_found.gif":"4b75","./page1.jpg":"6b25","./pc1.jpg":"809e","./pc10.png":"eac9","./pc2.png":"01ec","./pc3.png":"1b30","./pc4.png":"53a8","./pc5.png":"bb15","./pc6.png":"3379","./pc7.png":"db4b","./pc8.png":"2d35","./pc9.png":"4125"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="7584"},"809e":function(t,e,i){t.exports=i.p+"img/pc1.82a9dc93.jpg"},8973:function(t,e,i){t.exports=i.p+"img/banner4.8f055546.jpg"},"92ef":function(t,e,i){t.exports=i.p+"img/avatar.c5bbfb32.jpg"},"9d64":function(t,e,i){t.exports=i.p+"img/logo.ca76fbb4.png"},b727:function(t,e,i){var a=i("0366"),s=i("44ad"),r=i("7b0b"),l=i("50c4"),n=i("65f0"),o=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,p=4==t,g=6==t,d=5==t||g;return function(u,v,m,f){for(var h,x,b=r(u),_=s(b),y=a(v,m,3),w=l(_.length),S=0,C=f||n,k=e?C(u,w):i?C(u,0):void 0;w>S;S++)if((d||S in _)&&(h=_[S],x=y(h,S,b),t))if(e)k[S]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:o.call(k,h)}else if(p)return!1;return g?-1:c||p?p:k}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},bb15:function(t,e,i){t.exports=i.p+"img/pc5.bb94f5d3.png"},bf27:function(t,e,i){t.exports=i.p+"img/app4.8a2a1418.jpg"},d15f:function(t,e,i){t.exports=i.p+"img/banner1.08d86c58.jpg"},db49:function(t,e,i){t.exports=i.p+"img/banner2.01ab6a6a.jpg"},db4b:function(t,e,i){t.exports=i.p+"img/pc7.e8c40067.png"},e736:function(t,e,i){"use strict";var a=i("5ae9"),s=i.n(a);s.a},e8b5:function(t,e,i){var a=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},eac9:function(t,e,i){t.exports=i.p+"img/pc10.b2585966.png"},f12f:function(t,e,i){t.exports=i.p+"img/app3.a9d8058e.jpg"}}]);