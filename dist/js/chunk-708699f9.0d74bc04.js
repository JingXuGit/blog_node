(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-708699f9","chunk-2d217171"],{"0402":function(t,e,i){},a02e:function(t,e,i){"use strict";var a=i("0402"),n=i.n(a);n.a},bb51:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("HeaderNav"),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1),"/resume"!=t.$route.path?i("el-footer",{staticStyle:{padding:"0",position:"relative"}},[i("p",{staticStyle:{"font-size":"12px",margin:"5px 0"}},[t._v("❤️By-JingXu-Blog")]),i("p",{staticStyle:{"font-size":"12px"}},[t._v("© "+t._s(t.date)+" 雪后燕瑶池,人间第一枝")])]):t._e()],1)},n=[],s=i("c4f0"),o={data:function(){return{date:(new Date).getFullYear()}},name:"Home",components:{HeaderNav:s["default"]}},l=o,c=(i("a02e"),i("2877")),r=Object(c["a"])(l,a,n,!1,null,"8636155e",null);e["default"]=r.exports},c4f0:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[t.flag?i("div",{staticClass:"header",style:t.opacityStyle},[i("div",{staticStyle:{"max-width":"1420px",margin:"0 auto"}},[i("el-row",{staticClass:"row"},[i("div",{staticClass:"hidden-lg-and-up",staticStyle:{position:"absolute",left:"0px"}},[i("div",{staticClass:"icon_menu height"},["/detail"==t.$route.path?i("span",{staticClass:"el-icon-back",staticStyle:{"font-size":"24px"},on:{click:t.navigateToNotes}}):t._e()])]),i("el-col",{staticClass:"height",attrs:{xs:24,sm:21,md:21,lg:4,xl:4}},[i("span",{staticClass:"title"},[t._v("JingXu")])]),i("el-col",{staticClass:"hidden-md-and-down height",attrs:{lg:16,xl:16}},[i("el-menu",{staticClass:"el-menu-top",attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"/"}},[t._v("博客首页")]),i("el-menu-item",{attrs:{index:"/notes"}},[t._v("文章")]),i("el-menu-item",{attrs:{index:"/resume"}},[t._v("简历")]),i("el-menu-item",{attrs:{index:"/essays"}},[t._v("随笔")]),i("el-menu-item",{attrs:{index:"/guestbook"}},[t._v("留言")])],1)],1),i("el-col",{staticClass:"height hidden-md-and-down",attrs:{lg:4,xl:4}},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.showLoginDialog}},[t._v("登录")])],1),i("div",{staticClass:"hidden-lg-and-up",staticStyle:{position:"absolute",right:"0px"}},[i("div",{staticClass:"icon_menu height"},[i("span",{staticClass:"el-icon-menu",staticStyle:{"font-size":"24px"},on:{click:function(e){t.drawer=!0}}})])])],1)],1)]):t._e(),i("drawer-biew",{attrs:{drawerFlag:t.drawer},on:{changeDrawer:t.drawerChange}}),i("dialog-login",{attrs:{dialogVisible:t.dialogVisible},on:{close:t.closeDialog}})],1)},n=[],s=i("0472"),o=i("1364"),l={components:{"drawer-biew":s["a"],"dialog-login":o["a"]},data:function(){return{activeIndex:"/",flag:!0,showAbs:!0,opacityStyle:{opacity:1,background:"#fff"},drawer:!1,dialogVisible:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},watch:{$route:function(){this.fetchNavData()}},created:function(){this.fetchNavData()},methods:{navigateToNotes:function(){this.$router.push("/notes")},handleScroll:function(){if("/"==this.$route.path){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t>60){var e=t/300;e=e>1?1:e,this.opacityStyle={opacity:e,background:"#fff"},this.showAbs=!1}else this.opacityStyle={opacity:1,background:"#fff"},this.showAbs=!0}},fetchNavData:function(){for(var t=this.$route.path,e=this.$router.options.routes,i="",a=0;a<e.length;a++)if(e[a].type===t){i=e[a].type;break}"/"==i?(this.flag=!0,this.activeIndex="/"):"/resume"==i?(this.flag=!1,this.activeIndex=i):(this.flag=!0,this.activeIndex=i)},getImgUrl:function(t){return i("7584")("./"+t)},handleSelect:function(t){this.activeIndex=t},drawerChange:function(t){this.drawer=t},showLoginDialog:function(){this.dialogVisible=!0},closeDialog:function(t){this.dialogVisible=t}}},c=l,r=i("2877"),d=Object(r["a"])(c,a,n,!1,null,"0e5069e0",null);e["default"]=d.exports}}]);