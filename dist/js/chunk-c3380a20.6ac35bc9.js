(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3380a20"],{"01ec":function(t,e,i){t.exports=i.p+"img/pc2.609ae5b7.png"},"114b":function(t,e,i){t.exports=i.p+"img/banner3.b6688fd3.jpg"},"1b30":function(t,e,i){t.exports=i.p+"img/pc3.fff60e13.png"},"253b":function(t,e,i){t.exports=i.p+"img/app1.cd3d8739.jpg"},"2d35":function(t,e,i){t.exports=i.p+"img/pc8.ec89d2d6.png"},3379:function(t,e,i){t.exports=i.p+"img/pc6.7499c83b.png"},"37f9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticStyle:{margin:"0 auto","max-width":"1080px !important",padding:"0 10px"}},[i("div",{staticClass:"flex_between",staticStyle:{height:"60px",padding:"0 8px"}},[i("div",{staticClass:"title"},[t._v("我喜欢的")]),i("div",{staticClass:"flex_between"},[i("el-switch",{attrs:{"active-text":"自动播放","active-color":"#000000"},on:{change:t.switchChange},model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}})],1)]),i("el-carousel",{staticClass:"heights",staticStyle:{position:"relative",padding:"0 8px"},attrs:{height:t.height+"px",interval:4e3,autoplay:t.isAutoplay}},t._l(t.carouselArr,(function(e,a){return i("el-carousel-item",{key:a,staticStyle:{height:"100%"}},[i("div",{staticClass:"read"},[i("div",{staticClass:"title",staticStyle:{color:"#fff","font-size":"30px !important"}},[t._v(" "+t._s(e.title)+" ")]),i("el-button",{staticStyle:{margin:"10px"},attrs:{round:"",size:"mini",type:"primary"}},[t._v("开始阅读")])],1),i("div",{staticClass:"bgImage",style:"height: 100%;background-image:url("+t.getImgUrl(e.images)+")"})])})),1),i("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:10}},[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:17,xl:17}},[i("div",[i("div",{staticClass:"flex_between",staticStyle:{height:"50px",padding:"0 8px"}},[i("div",{staticClass:"title"},[t._v("最近文章")]),i("div",{staticClass:"flex_between"},[i("el-switch",{attrs:{"active-text":"列表模式",disabled:"","active-color":"#000000"},on:{change:t.switchChange},model:{value:t.showWay,callback:function(e){t.showWay=e},expression:"showWay"}})],1)])]),i("ul",{staticClass:"article_list"},[t._l(5,(function(e){return i("li",{key:e,staticClass:"article_li_list"},[i("div",{staticStyle:{position:"relative"}},[i("div",{staticStyle:{"padding-bottom":"50%"}}),i("div",{staticClass:"bgImage1 ab",style:"height:100%;background-image:url("+t.getImgUrl("article1.webp")+")"})]),i("div",{staticClass:"text_box"},[i("h2",{staticClass:"text_left margin10",staticStyle:{cursor:"pointer"}},[t._v("忙碌是自由活着的一种底气")]),i("p",{staticClass:"text_left margin10",staticStyle:{opacity:"0.6","font-size":"13px"}},[t._v("五月 24, 2020")]),i("p",{staticClass:"text_clamp"},[t._v("程序员的工作和别的工作相比，看似是非常轻松的，而且薪资还偏高。但是作为程序员，加班是十分常见的情况：特别是在互联网公司，相信大家深有体会，除了典型的996外，项目赶进度得加班，项目上线得加班，项目突发情况得加班，疫情期间加班的程序员也不少。")]),i("div",{staticClass:"flex_between margin10"},[i("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("开始阅读")]),i("div",{staticStyle:{cursor:"pointer"}},[t._v("#随笔")])],1)])])})),i("el-button",{attrs:{size:"mini",type:"primary",round:""}},[t._v("加载更多")])],2)]),i("rightNav")],1)],1)])},s=[],n=i("749b"),p={components:{rightNav:n["a"]},data:function(){return{showWay:!1,height:null,switchValue:!0,inputValue:null,isAutoplay:!0,carouselArr:[{id:1,images:"banner1.jpg",title:"忙碌是自由活着的一种底气"},{id:2,title:"我只是来活跃气氛的~",images:"banner2.jpg"},{id:3,title:"兴趣支撑梦想~",images:"banner3.jpg"},{id:4,title:"兴趣支撑梦想~",images:"banner4.jpg"}]}},watch:{height:function(t){if(!this.timer){this.height=t,this.timer=!0;var e=this;setTimeout((function(){e.timer=!1}),400)}}},mounted:function(){var t=this;t.height=window.innerHeight-document.getElementsByClassName("heights")[0].getBoundingClientRect().top-32,window.onresize=function(){return function(){t.height=window.innerHeight-document.getElementsByClassName("heights")[0].getBoundingClientRect().top-32}()}},created:function(){},methods:{getImgUrl:function(t){return i("7584")("./"+t)},switchChange:function(t){if(!t)return this.isAutoplay=!1;this.isAutoplay=!0}}},c=p,l=i("2877"),r=Object(l["a"])(c,a,s,!1,null,"ea319a92",null);e["default"]=r.exports},"3f1d":function(t,e,i){t.exports=i.p+"img/app2.e034fb67.jpg"},4125:function(t,e,i){t.exports=i.p+"img/pc9.d5ce7284.png"},"45ef":function(t,e,i){t.exports=i.p+"img/article1.0cd88892.webp"},"4b75":function(t,e,i){t.exports=i.p+"img/not_found.f7c78dbd.gif"},"53a8":function(t,e,i){t.exports=i.p+"img/pc4.1cec03fc.png"},"6b25":function(t,e,i){t.exports=i.p+"img/page1.69cf4869.jpg"},"749b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-col",{staticClass:"hidden-md-and-down",attrs:{offset:1,md:6,lg:6}},[i("div",{staticClass:"right_model"},[i("div",{staticClass:"title",staticStyle:{"text-align":"left",height:"50px","line-height":"50px",padding:"0 8px"}},[t._v("博主信息")]),i("el-card",[i("div",{staticClass:"shadow",staticStyle:{background:"#f5f5f5",width:"70px",height:"70px","border-radius":"50%",margin:"10px auto"}},[i("el-avatar",{attrs:{size:70,src:t.getImgUrl("avatar.jpg")}})],1),i("div",{staticClass:"title"},[t._v("JingXu")]),i("ul",{staticClass:"personal_message_list",staticStyle:{display:"flex"}},[i("li",{staticClass:"personal_message_list_li"},[i("p",[t._v("文章")]),i("p",[t._v("17")])]),i("li",{staticClass:"personal_message_list_li"},[i("p",[t._v("标签")]),i("p",[t._v("13")])]),i("li",{staticClass:"personal_message_list_li"},[i("p",[t._v("分类")]),i("p",[t._v("2")])])])])],1),i("div",{staticClass:"right_model"},[i("div",{staticClass:"title",staticStyle:{"text-align":"left",height:"50px","line-height":"50px",padding:"0 8px"}},[t._v("全部标签")]),i("el-card",[i("span",{staticClass:"tags_box"},t._l(11,(function(e){return i("span",{key:e,staticClass:"tags"},[t._v(t._s("标签 "+e))])})),0)])],1),i("div",{staticClass:"right_model"},[i("div",{staticClass:"title",staticStyle:{"text-align":"left"}},[t._v("随笔")]),i("el-card",[i("div",{staticClass:"essays"},[t._v(" 随着年龄的增长，人总会变得越来越宽容；所以很多事情到最后并不是真的解决了，而是，算了吧。 ")]),i("div",{staticClass:"essays"},[t._v(" 有时候就是觉得挺累的，什么都不想说，其实也没人愿意听你吐苦水，一堆负能量爆棚的话，真的没人愿意听，所以更想一个人，安静的听着歌喝着酒，想通看透自己安慰自己。 ")])])],1)])},s=[],n={data:function(){return{}},created:function(){},methods:{getImgUrl:function(t){return i("7584")("./"+t)}}},p=n,c=i("2877"),l=Object(c["a"])(p,a,s,!1,null,"1c1e9888",null);e["a"]=l.exports},7584:function(t,e,i){var a={"./app1.jpg":"253b","./app2.jpg":"3f1d","./app3.jpg":"f12f","./app4.jpg":"bf27","./article1.webp":"45ef","./avatar.jpg":"92ef","./banner1.jpg":"d15f","./banner2.jpg":"db49","./banner3.jpg":"114b","./banner4.jpg":"8973","./logo.png":"9d64","./not_found.gif":"4b75","./page1.jpg":"6b25","./pc1.jpg":"809e","./pc10.png":"eac9","./pc2.png":"01ec","./pc3.png":"1b30","./pc4.png":"53a8","./pc5.png":"bb15","./pc6.png":"3379","./pc7.png":"db4b","./pc8.png":"2d35","./pc9.png":"4125"};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="7584"},"809e":function(t,e,i){t.exports=i.p+"img/pc1.82a9dc93.jpg"},8973:function(t,e,i){t.exports=i.p+"img/banner4.13ebef26.jpg"},"92ef":function(t,e,i){t.exports=i.p+"img/avatar.c5bbfb32.jpg"},"9d64":function(t,e,i){t.exports=i.p+"img/logo.ca76fbb4.png"},bb15:function(t,e,i){t.exports=i.p+"img/pc5.bb94f5d3.png"},bf27:function(t,e,i){t.exports=i.p+"img/app4.8a2a1418.jpg"},d15f:function(t,e,i){t.exports=i.p+"img/banner1.08d86c58.jpg"},db49:function(t,e,i){t.exports=i.p+"img/banner2.01ab6a6a.jpg"},db4b:function(t,e,i){t.exports=i.p+"img/pc7.e8c40067.png"},eac9:function(t,e,i){t.exports=i.p+"img/pc10.b2585966.png"},f12f:function(t,e,i){t.exports=i.p+"img/app3.a9d8058e.jpg"}}]);