webpackJsonp([3],{0:function(t,e,n){"use strict";function i(){return parseInt((new Date).getTime())}function a(t){return A()("fungoa8sport"+t)}function o(t){if(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.href))return decodeURIComponent(t[1])}function s(){return{versions:function(){var t=navigator.userAgent;return{trident:t.indexOf("Trident")>-1,presto:t.indexOf("Presto")>-1,webKit:t.indexOf("AppleWebKit")>-1,gecko:t.indexOf("Gecko")>-1&&-1==t.indexOf("KHTML"),mobile:!!t.match(/AppleWebKit.*Mobile.*/),ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Adr")>-1||t.indexOf("Linux")>-1,iPhone:t.indexOf("iPhone")>-1,iPad:t.indexOf("iPad")>-1,webApp:-1==t.indexOf("Safari"),qq:" qq"==t.match(/\sQQ/i)}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}}function r(t,e){var n=i(),o=a(n),s={time:n,sign:o},r="//api.007kq.com/"+e.url;for(var c in e.postData)s[c]=e.postData[c];t.$http.jsonp(r,{params:s}).then(function(t){t=t.body,e.callback(t)},function(t){console.log("err",t),e.error()})}function c(t,e){Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var t=new Date(t);return t.Format(e)}n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return r}),n.d(e,"d",function(){return c});var l=n(22),A=n.n(l)},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.default={name:"contact",props:{Banner:{type:Object,default:{iosShow:!1,androidShow:!1}}},data:function(){return{}},computed:{show:function(){return i.c().versions.android?this.Banner.androidShow:this.Banner.iosShow},url:function(){return i.c().versions.android?this.Banner.androidUrl:this.Banner.iosUrl}}}},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(16);n.n(a);e.default={name:"close",props:{showD:[Boolean,String],Banner:{type:Object,default:{iosShow:!1,androidShow:!1}}},data:function(){return{close:!1,isYT:!1,yt:{}}},computed:{img:function(){var t="",e=i.c();return t=this.isYT?this.yt.icon:e.versions.android?this.Banner.androidImg:this.Banner.iosImg,t},url:function(){var t=i.c(),e="http://m.007kq.com/download.html";return e=this.isYT?t.versions.android?this.yt.androidUrl:this.yt.iosUrl:t.versions.android?this.Banner.androidUrl:this.Banner.iosUrl,e},isShow:function(){var t=i.c(),e=!1;return e=this.isYT?1!=this.yt.status:t.versions.android?this.Banner.androidShow:this.Banner.iosShow,e}},created:function(){"false"==sessionStorage.getItem("downlink")?this.close=!0:this.close=!1,i.a("ADTAG")&&" "!=i.a("ADTAG")&&this.getYT(i.a("ADTAG"))},methods:{download:function(){i.c().versions.android?MtaH5.clickStat("clickEvent",{phone:"android"}):MtaH5.clickStat("clickEvent",{phone:"ios"})},getYT:function(t){var e=this;console.log(t);var n={url:"ggw/getGgw",callback:function(n){1===n.error_code&&n.data.map(function(n,i){t==n.channel&&(e.isYT=!0,e.yt=n)})},error:function(){console.log("网络错误")}};i.b(this,n)},closeBtn:function(){this.close=!0,sessionStorage.setItem("downlink","false"),i.c().versions.android?MtaH5.clickStat("clickEvent",{closeban:"android"}):MtaH5.clickStat("clickEvent",{closeban:"ios"})}}}},135:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e,n){t.exports=n.p+"static/img/android.e1c7385.png"},166:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"replayer",style:t.mainStyle},["worldCup"===t.pageType?i("a",{staticClass:"goback-nav",attrs:{id:"nav",href:"mainpage.html?ADTAG="+t.isqd+"&worldCup"}},[i("img",{attrs:{src:n(5),alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}}),t._v(" "),i("span",[t._v("低调看直播")])]):i("a",{staticClass:"goback-nav",attrs:{id:"nav",href:"mainpage.html?ADTAG="+t.isqd+"&review"}},[i("img",{attrs:{src:n(5),alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}}),t._v(" "),i("span",[t._v("低调看直播")])]),t._v(" "),i("contact",{attrs:{Banner:t.bannerArr.contact}}),t._v(" "),i("timeScore",{attrs:{IsBlack:!1}}),t._v(" "),i("div",{class:{"box-list":!0,top:t.istop},attrs:{id:"boxList"}},[i("div",{class:{title:!0,top:t.istop}},[i("div",[i("a",{class:t.navType?"active":"",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.changeNav(!0)}}},[t._v("集锦")]),t._v(" "),i("a",{class:t.navType?"":"active",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.changeNav(!1)}}},[t._v("回看")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"},[i("img",{attrs:{src:n(6),alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}}),t._v(" "),i("span",[t._v("正在加载中...")])]),t._v(" "),t.navType?i("div",{staticClass:"collection-box"},[i("ul",t._l(t.collectionList,function(e,n){return i("li",{key:n},[e.bannerType?i("list-ban",{attrs:{ListBan:t.bannerArr.listBan}}):t._e(),t._v(" "),i("div",{staticClass:"content"},[2==e.playType?i("a",{attrs:{href:e.url,target:"_blank"}}):t._e(),t._v(" "),1==e.playType||0==e.redirect?i("a",{attrs:{href:"player.html?ADTAG="+t.isqd+"&isChannel="+t.channelType+"&playType="+e.playType+"&matchId="+t.matchId+"&src="+t.isencode(e.url)+"&title="+e.leagueName,target:"_self"}}):t._e(),t._v(" "),i("div",{staticClass:"text"},[i("div",{staticClass:"li-title",staticStyle:{"word-break":"break-all",overflow:"hidden","-webkit-line-clamp":"2","-webkit-box-orient":"vertical",display:"-webkit-box","text-overflow":"ellipsis"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),i("div",{staticClass:"li-info"},[i("span",[t._v("播放："+t._s(e.read))])])]),t._v(" "),i("div",{staticClass:"poster"},[i("img",{attrs:{src:e.image,alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})])])],1)}))]):i("div",{staticClass:"replayer-box"},[i("ul",t._l(t.reviewList,function(e,n){return i("li",{key:n},[e.bannerType?i("list-ban",{attrs:{ListBan:t.bannerArr.listBan}}):t._e(),t._v(" "),i("div",{staticClass:"content"},[2==e.playType?i("a",{attrs:{href:e.url,target:"_blank"}}):t._e(),t._v(" "),1==e.playType?i("a",{attrs:{href:"player.html?ADTAG="+t.isqd+"&isChannel="+t.channelType+"&playType="+e.playType+"&matchId="+t.matchId+"&src="+t.isencode(e.url)+"&title="+e.leagueName,target:"_self"}}):t._e(),t._v(" "),i("div",{staticClass:"text"},[i("div",{staticClass:"li-title",staticStyle:{overflow:"hidden","-webkit-line-clamp":"2","-webkit-box-orient":"vertical",display:"-webkit-box","text-overflow":"ellipsis"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),i("div",{staticClass:"li-info"},[i("span",[t._v("播放："+t._s(e.playTimes))]),t._v(" "),i("span",[t._v("时长："+t._s(t.getTime(e.time)))])])]),t._v(" "),t._m(0,!0)])],1)}))]),t._v(" "),t.nodata?i("div",{staticClass:"nodata"},[i("img",{attrs:{src:n(7),alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})]):t._e()]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"20px"}}),t._v(" "),i("transition",{attrs:{name:"showline"}},[t.showtips?i("tips",{attrs:{Tips:t.tipsText}}):t._e()],1),t._v(" "),i("downlink",{attrs:{Banner:t.bannerArr.downlink}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"poster"},[i("img",{attrs:{src:n(34),alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}}),t._v(" "),i("span",[t._v("回看 / 集锦")])])}]}},17:function(t,e,n){n(15);var i=n(1)(n(11),n(20),"data-v-54c4ac53",null);t.exports=i.exports},18:function(t,e,n){n(14);var i=n(1)(n(12),n(19),"data-v-158d05f9",null);t.exports=i.exports},19:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isShow&&!t.close?n("div",{staticClass:"logo-007"},[n("a",{ref:"downbox",staticClass:"downbox",attrs:{href:t.url,target:"_blank"},on:{click:t.download}},[n("img",{attrs:{id:"bottomImg",src:t.img,alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.closeBtn}})]):t._e()])},staticRenderFns:[]}},20:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"contact"},[t.url?n("a",{staticClass:"contact-a",attrs:{href:t.url}}):t._e(),t._v(" "),n("div",{staticClass:"box"},[n("span",[t._v(t._s(t.Banner.content?t.Banner.content.split("\n")[0]:"球迷微信群：993760177 看球聊球"))]),t._v(" "),n("span",[t._v(t._s(t.Banner.content?t.Banner.content.split("\n")[1]:"微信公众号：a007kanqiu 高清 英超 西甲 NBA"))])])]):t._e()},staticRenderFns:[]}},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.default={name:"listBan",props:{ListBan:{type:Object,defalut:{iosShow:!1,androidShow:!1}}},computed:{img:function(){return i.c().versions.android?this.ListBan.androidImg:this.ListBan.iosImg},url:function(){return i.c().versions.android?this.ListBan.androidUrl:this.ListBan.iosUrl},isShow:function(){return i.c().versions.android?this.ListBan.androidShow:this.ListBan.iosShow}},methods:{countClick:function(){i.c().versions.android?MtaH5.clickStat("listBanner",{phone:"android"}):MtaH5.clickStat("listBanner",{phone:"ios"})}}}},27:function(t,e){},29:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"listBan",on:{click:t.countClick}},[t.url?n("a",{attrs:{href:t.url}}):t._e(),t._v(" "),n("img",{attrs:{src:t.img,alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})])},staticRenderFns:[]}},3:function(t,e){},34:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAWCAYAAAA8VJfMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyM0Y4MjRCM0JEOTExRThCN0U3QzEwRTI0OUU3Rjg0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyM0Y4MjRDM0JEOTExRThCN0U3QzEwRTI0OUU3Rjg0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTIzRjgyNDkzQkQ5MTFFOEI3RTdDMTBFMjQ5RTdGODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTIzRjgyNEEzQkQ5MTFFOEI3RTdDMTBFMjQ5RTdGODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xR4f6AAABVElEQVR42mK0CT7DAASqQNwBxC5AzMdAXfAFiA8AcRUQXwYJsACxOhCfAGIBBtoAHiD2AWJHILYD4nNMQKKNhhYiA24g7gYxmKBBSi/gAMSsTDSIQ3wAZB8XE8MAAJIs7a9TZ1BT5KavpSZ6PAxzujQYKrIUGcSE2ehjKQgwMjIweDsJMSybrM2QGiXDwMnBTHtLYYCdjYkhLkicYTnQ8kAPMQZmZkbaWwoDwoKsDEUpsgwLerUYLI0F6GMpimFMxPmWhVKL3n/8wzB/9XOGTbtfM/z9+5+2lv789Y9h5ZbXDEvWPWf4/uMvSXpJtvQ/0DPb9r9jmL/yGcPLtz/JcjBJlp659IVh+uInDLfuf6UoShiB9el/BvoCgQErez/R0b5/QPwNZOkeOloKarb8BllaDcQf6GAhKPWVwoL3BhBbAPE6IP5MI8u2ALEVqH0EEgAIMABWdEzGxNf48gAAAABJRU5ErkJggg=="},35:function(t,e){},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.default={name:"timeScore",props:{IsBlack:Boolean},data:function(){return{score:{},isShow:!1}},created:function(){var t=this;this.getGoals();this.IsBlack&&setInterval(function(){t.getGoals()},3e4)},methods:{getGoals:function(){var t=this,e={url:"game/getGoals",postData:{matchId:i.a("matchId")},callback:function(e){1==e.error_code?(t.score=e.data,e.data.awayLogo?(t.score=e.data,t.isShow=!0):t.isShow=!1):t.isShow=!1},error:function(){console.error("网络错误")}};i.b(this,e)}}}},38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tips",props:{Tips:{type:String,required:!0}},computed:{},data:function(){return{}}}},4:function(t,e){},46:function(t,e){},47:function(t,e){},5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAbCAYAAABMU775AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBRDY3RTlFMDZGRjExRTg4OEYwOTdBODE2NzIzQzZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBRDY3RTlGMDZGRjExRTg4OEYwOTdBODE2NzIzQzZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REFENjdFOUMwNkZGMTFFODg4RjA5N0E4MTY3MjNDNkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REFENjdFOUQwNkZGMTFFODg4RjA5N0E4MTY3MjNDNkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7lzTIzAAAA7UlEQVR42pyUSQrCQBBFE6+iIiKIiCCI7pxdCOIAuhDJXi/lxYxD1I0XMIm/JYFQZOifwCPQzeuhuqpM3/cN5nM9v4vf0VCiLl/X6wAHDBipDZ5g9D+lptQCbzAJx3SkZrDTLDqeJTXAA8zlXJpUB3ewiJtPkmpB9FZJC8dJ1eB4m7RrSKkCrmCXFbSoVAYXsNd5olAqAhscdBMiDITayWLST4kfcGYkRQGZ3lMg6y2qTII7lug7iqjaVFTFO97AlhJF5qwpUeTqkhJzV4eoR4eqR9EBXmBKiaLnjClRdLkhJYq+2jdzdvLTT4ABAHsKHX92wDsVAAAAAElFTkSuQmCC"},50:function(t,e,n){n(47);var i=n(1)(n(37),n(53),"data-v-485ee6b8",null);t.exports=i.exports},51:function(t,e,n){n(46);var i=n(1)(n(38),n(52),null,null);t.exports=i.exports},52:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tips"},[t._v("\n  "+t._s(t.Tips)+"\n")])},staticRenderFns:[]}},53:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{timeScore:!0,black:t.IsBlack,white:!t.IsBlack,none:!t.isShow}},[n("div",{staticClass:"team-info"},[n("span",[t._v(t._s(t.score.homeName?t.score.homeName.substring(0,7)+(t.score.homeName.length>7?"...":""):t.score.homeName))]),t._v(" "),n("div",[n("img",{attrs:{src:t.score.homeLogo?t.score.homeLogo:"../../../static/logo.png",alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})]),t._v(" "),n("div",{staticClass:"score",staticStyle:{"margin-left":".3rem"}},[t._v(t._s(t.score.homeGoals))])]),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"team-info"},[n("div",{staticClass:"score",staticStyle:{"margin-right":".3rem"}},[t._v(t._s(t.score.awayGoals))]),t._v(" "),n("div",[n("img",{attrs:{src:t.score.awayLogo?t.score.awayLogo:"../../../static/logo.png",alt:"低调看直播_世界杯直播_世界杯小组赛_世界杯淘汰赛_jrs直播_直播体育_西甲直播_NBA直播吧_英超直播_高清免费_007看球_足球直播_NBA直播_英超直播_007kq_007直播"}})]),t._v(" "),n("span",[t._v(t._s(t.score.awayName?t.score.awayName.substring(0,8)+(t.score.awayName.length>8?"...":""):t.score.awayName))])])])},staticRenderFns:[]}},6:function(t,e){t.exports="data:image/gif;base64,R0lGODlhJwAnAPf/ADmJ36fF7FaU3SpeuHK09Guq7MLS7hlZwhtmyjyK4DVlu5TJ+yhwzvL4/mW1/LXS8RVLuRdTv16h6uLu+8vZ8IPD/NTp/LTL7O71/ev0/Yao3XCg37rV8jB81Xu59tLn/Ozx+lal8mi3/Wy4/OTw/F+c4Xe7/Hy9+v7+/6nM8kV0yprN+0yN2mOi5vH2/bve/UmX6dXj9ez0/erx+j5ux8Xh+02d7TWD3CVy0lSEzVKd63aX0ojF/GOm6yRcwW2y9Vyr9mSz+juB06TT/e/y+lea4/b6/lqq9bfQ79Pe8iNrzGqR1Sh200yR3mub2zeG3il41WW0+0qE0x5pzMDU8ECO4YK79YK164vB93iy7ZLD9EKC0+fy/Gyv8vD3/kSU5qvV+2qi4fX5/srf9WiK0X/B/HOs6UR+0X228HKl4qe+5nWo41mN0lSX4Zm15Fmn9CJgxWGt9cjh+lys993m9lR9zdfn+T9zy8jd9UqY61aO1ECL3+/2/Yyv49jt/4q36ZGy4WOZ3Cx51s/l+s3m/ZK86sTe+N7u/h5SvEqH1uLq936q4fz9/4u77jxoxDRrwMHb9oy+8tzs+16h5lCE0oW47hhVwCpmxkZ6zpLG+fj7/oy15p3Q/Zu+6XWc28nk/Lfa++72/RpiyIKx5sTX8JrD7j5+0URuxsHX8ne49l+q9L/Z9kt6zFqG0TSA15fG9cXa8+nv+fL3/oK/+DFpyGKQ1Way983i9y1nvzFhwo/J/CJlyEt2yd/s+UuZ62in7G2Z2O/0+1ei7pq55i171vn8/vX5/V6W2UaK12ae3/P5//L3/Fuf5bDT9jB0yNfr/Vup8z94zE6a6+32/+vz+3KV11Cc6YbA95av4H+h2liX4FuP2DN/1zB30fr8//v9//3+//v8/xVHuGir7k2a7Euc7C592PT3/Mvk+z+G2UeR4pbJ+aDJ9GGz+trp+WCLz3CQ1HKx8TdtyJK+77bX+JS35fD1/EJwwUh1wTZ60VaP2Hev7O31/fr8/q3Y/////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAD/ACwAAAAAJwAnAAAI/wD/CRxIsKBARcdMITHIsKHDgouUTOmm6aHFi/82TJnCQAbGjww1cswAsuRAkQxImiRop4S2Ww1RqiwYzFM0NRbDECPGDU/IjSkNBjtzoOiMh6N2Euvgs6BMmkSLXuKCwqG9NubMLW16EujMf0OLHoCDREZVq1h3MiX4VGDYonAeZPB28apWQT0HLtrIRKU9TKLgIpn70S4xKNxg/ouRj8EmkueijpVLF6RhKNq+CfzWK4OYf24Cjx1cuaThZF4Ing0Al/JKgcuuXLGT2iCjPoGoEH4tEIWYBuAa+m6gmbfxhhPMtFjeYhLzSSk+kqqjorr1Uyp4XfhXIIH37+ATKP+2mAtCBAjo06NHNGNflSp73r9PIF9OuIvl1etHJIlLJQmTABgggOM0k0FxDyXRCg0MNshgHQGQBE4DGFRoYSih8FERRt94YeGHGMhy33EkEtQAO69g0BA4LwyRxHEujONLOVYEZ9AnIogwgh+8eVFAOTbYQEBt/xgx0As56sijST4CaYMwcvDxjyQ/xPGCQEaUkeSOJXkxTpBP1pDBfescAcQIxgikjJY5comRl04KI2ZlmRwxRxQeCdQAmzo+c5GXYMq52z8LAAGELV81UMGWSzqkRaByDEqonYgWtGeSJmzYEBpBQikpoUDMEcRXevJJwlkMHYIGAeh8CuqhpAo65MUKZYCSAaoMfZMhggQtYOeoK3rBj5HG+SpqrCX2+iuyyQq0gqEiMNtsBqnY8kKezTLECAYZaPpRQAAh+QQFAAD/ACwAAAAAJwAnAAAI/wD/CRxIsKDACcmQcTDIsKHDgqOgMBHysKJFgWuYMOlwsWPDNRI5ehw5EORGkgbdtWgR4yMUHCIZbtgSoKIZAE8SjGFoMmZBKQgQTKlYCWfOnQV7MgQalMEMcA69MAOAM8GtpCENMkWg5IFFPpOoHiWolOBWJR7BGtU5MCITbgODJQrK1WvasE9ythS4p8MffgLnBkWLUm3eSQ070e2KUqDhAnwaDkbSeGCDRpXcOdyUDFXlz6BDEySBpoDp06Z/NfNICZPr165ZCcwCo7bt218GXaR1oPcBS5Z8B/+H5rbx2re8WaQFvLnz4IoyRBpHvTr1eCPfRbtzZ3v3O5QuPL7EgEG0QC/FzKv/t8JLQ0bYqoX2QiBEiGsN1UCAgMjA5/ohvOFBQ9iIs19/jQH4RhzoCHSICSMQ5IiB/Pk3koJzyDHQCkE4YIIRAoHgyH4VeqRgHBpu2GGEA8Uy4oEWPtTAiZ8UxGEULLY4IYwVrRPggjXauKJBLpLoA4gOXRNgHEHaGAWOMhD5IgS9VGSFB7oxdGOOBcXyTi6AXBRZQ1s+JItoZa6nZRA4qskQJ1EEYYKbDJ0QIWB0GhQlSQEBACH5BAUAAP8ALAAAAAAnACcAAAj/AP8JHEiwoEASZopAMsiwocOC8xIAUFfsocWL/65IrIKxY0ONADh6HDlQYwKRJAlKirfPwscEJxu6GNUkhUU0vnxJG8TQJEqCLgRAgSKI2kMtNnLuNAhyj0EX2oZCccUFhUNZXcj5yrOUIMif/4ISG9qBw0UvWZXyLLkRqLaxUMp2dNGl3FZra/9FkqhuIFS4cj2i1QrDmst/7qxVKZXhn7G3ZM2SRJvUVxeCEwYGMBc5pUDKvtCEYvigs2eByl5pkdQQXKE0C0/Lnk17IJdrHjyk0r07VSp6HWHpS0S8OHEWAmcdebP8jfPnbw5bzDeluvUpCLAroYbliPfv4I8M3Ap3MR+C8+jTT+nFb53v9+9ngfJ4bIv9+/b11d7Pf6QyMEM04JAbnsQwWwNlBBGFLg4dcAAcpJymTIJROMADQfYQZIklD0ZI0oRRVDgCIQJRkAsi2Ahkzx0bduhfGSE6MOJAZEAAgQ+aCEQNiw7CgUpHIIqIDkE1QoBIQTw+SMVFIDogI4lE2ojINATNkCQcSz40RIVPGlTkkQYleYlFujg5o5c2+mBUmA4eYBEXPPDwQUNfOlSLPPXQ9iU//TFUZ59oGsknoATBkyahBSniiA9qyIAoQeHI0BhJAQEAIfkEBQAA/wAsAAAAACcAJwAACP8A/wkcSLCgQC5oehgyyLChw4KvfMEQpumhxYv/Ikm0hrFjQ40wdHgcSRCkSJIFD1nx8OyjxJMGvfxh9sAiljdvoH1gCJJjzBYJAACQ8XAFzhA6DZr8KRRAFYvKUh1NWnJjQS9Ahe5ZdbGB1DdIdw7sSRBr0CdbO3qdKvZfxJADZWUFkNaj1yNgobX8J6mHDXZEjcytO/IuWA8ESQxMEZQuV5T/DM/iw5BDArSPIf8ztmKFQxSlsizUTLq06YEZdFVYXaZCmVmuX3QcU0KA7du2tXH4pyuI7yhRfAtvt9diOijIkysnltoB8OfOnUdp+zAdk+vYs0P5N41Tme/gW/POkI0xRjIW6NOjL1HTIT9+KN8XhH+6/kB/O2I5HJaGTmlljogjTg4NBSAKAkrAohkIAUIAgQoN1XMgAgwoSBKD4jiICBID0eKDGwK5cMaECY6EoYYX0LdEBJZcYsRAppBo4UUMQpAhIhcQtKIlcBA0Q4wIIIgKjY44CMGGBe0IRwYFASmkRfAYiWSSLPZokJMMWFSHhhwapCSTBf04oUVJ8MILFQ0p2dAMgeRTiGlf2pdmlXKmaQmPYNZJUDV3XqInQ3fAEQA1fxbECAaQBQQAIfkEBQAA/wAsAAAAACcAJgAACP8A/wkcSLCgwAw8CHwyyLChw4JDoB2x9bCiRYHrjhyJc7Fjw3VANnocSRCkSJIFSfDgcehjSI4MG2jpAqriAgcORDxjaBJmwQbxbJSzwe/hEBE4dRrsaRCoDRu+hFmsgDTnzpIvfwYVqsOQRWVUcyoduG7OSYFOoXbtCLbqiKv/OIWkiHYrubUe2zqIMqLlv0Mj4gyh9k/TVl94R+p1wKNhs6eIvaL811aErlAMIT1NPNnIkCF+DYJLEUnOZJTKTquuSKfOqdewYWPrOKjArx64cbdo8WvVvzoQggsfDoHURWtVquzZkyAB8+Z7+AEnTpzKxTbNs2t3PkHREhrgw4PQZzWsox0zzNKrT1+AnkAUDDFgQCm/4PzV+A0SyZbtYYBR7qwGwh2WWMJGQxdAQcwNY6hGoCUHnEGQCwN1woSCDE724AFwcCBQEvkw0IlAy7AABRSCcNPgSBvCgUQGAjmBAALdDIQBCxemuOJFLSJBkIwIMEAQNSYqyA0ePELI4QMy/DijkEMWCcWRFVWjJBwPGAQklFGeCEU6mjzUygFLNlnQlgwRmWNFMVAiBSoNockQF2kgUwp+cjbkRX555hfnk34+tMGMNQbq0BZCFjVSQAAh+QQFAAD/ACwAAAAAJwAmAAAI/wD/CRxIsKDAabpOEDLIsKHDgmAcRDHxsKJFgZwcOBBxsWPDjFFGeBxJEKRIkgWT8OJF4aPGkwaVrUj1omIdCOIQGWBokqEyD0eOQJv2EB4EnDoNZnQAc6CyE0GPxKlIhMZRCElLviz4NOgbVXIsgrB6NCtGEUwJdj3ytUbHsVfNDpEI0xjUoKrceoRbtuU/EiZGgJEh8AQQtnlR8hWnoiGow21RCuSbAwPDGnj1Sv4XzBOwGA7BZEK3maSY0qgftlLBunVrNx0/oIlHu3ZtQwIt6dYdgXeECB172CBHzldxX8jJ2cDQardz56guSvAFIw9y69XzWBMILJr3796ldNDq6A7NuPPoz2dZJRBc6vfwPQbTsMghuBSNJKU+I0rUsYYPAJCAOreUxp8oCCQSykDLDMTOEwAAUEWBJFFzIAIMDHTLFh0EMFAREEpIoUcXKsHBQGngwEQ6p/3DB4gRTtiRhf0hoMQDBKXIhCsEyQCjhGNcVCIHGeSIAxQ89vhjFUE+tAGCGJ5YkI5JKhkhAOpUtA2CGTKUIpIM+RhhAhNUxEIikDREZUMy7NMGOxYx4oJDOnLzkCzvrRmfmkfauSdDizCx4p8MTcACNykQNlJAACH5BAUAAP8ALAAAAAAnACcAAAj/AP8JHEiwoEBFZPBdMMiwocOCGgYMuPewokWBOyQqwHCxI8OMAzZ6HDkQpEiSBGO8e5ekoUmOBo340/Wp4hJcuB6R+qgRJkEjC0wI9fIwG86cFAy+LAhUqIlZMh4Gy3H0UVKCSwc2FXrig8+GU6texdhTa1CuXsNZDIvT6sBsEh3B3GqiKwa1F9nmbPkvyT0F2Pj9K3a2btqRelsRVITByL8aTu3iRUwV15JlDAmhvYtSoAsNGujIYsjoxRALnDsTFPPQCGvVsB0qAsamtm3bajpKyoSlt2/fg/4Fcka8uHFnYy56+MG8ufMfXpwcn47nm0UPXbJr3/6DS6xFesKL9g8fKIAMRhYnvLLCvj17LXKi/hPjor79+rL6eWxw/37+2AAW5EI9mwTjED3skBBbMMcIIcQaDRkigQS/uKMagw4KkUwDAxkz0APMTPiLHShh6CAyeBBlRwltPCCQGPtMSCGJHpkoBDKwYGDdH000UYImAjUQ44Q90GiRPQ2emCNePDZRhE98DClBDx8cmeSNSw7UZBH2EOSClEVWNEqGOOpI0JZf/ROljAVUlIaSZp7Z45MGfSkjFw+5E0YYY8Qpp5NpejaPGc3I95AssqBnEJoNoUAfkLAxGqBDkk7KUCE9lhCopQJxEUYRHGzK6T/guIBBMSQFBAAh+QQFAAD/ACwAAAAAJwAnAAAI/wD/CRxIsODAVvIMKlzI0GC2CBEuNZxIUeASSxF8yKjIUeHFjBk6ihy4BKKPkCMLUqJEYeHHkwqJwHOkZuI2UaJ2ofKIEWZBIqcgiBM3o+EGnDlJGXyJciBQCEJ9xALXcAvSXUoJMiX4dCiiCxsbyrCKE6vWnk27ivuawRvFsVez/vNkyZJPtWzdVoRbdsxAWj40hDwXFGrekWRFSSHYK4OYf9igrr3QNuVYBKL0uVCoRujhlP/srUljx4tCFBrefagMmmCDhmJet57NsFcgFrhz407UiaMfXRWCCw/Og9C/YziSK1+OA09FEw6iSJ8uPYiDf4GYa4cUjqKJIODDi/yPQoLEGt0smqhv8y/DN4qHMp2YT38+jxooG2DYzz8YhlCadOQFfwRi4EUxtCVoUCF/UNPQCgq24coNBTAUwhtxWDBbGzfc8MQkywz0mEDNhGCiKhqmxKGHexjCh0DMWNOMQMrEY+IbQKTIEQbadPjEHqtk0F0lX8AgjBED/WBiCCh2tOKPQepFJAw6hPWPF0qeWBGPPu4BCWv/TKlDU1cSsCQ0H0x0RZdf6iWQmGRemWUIcVD0xI9tFgSnQVjeSMJELbTQnpsD7cknFra0N9E3fPDxnkGGGgSOLPwgOVukCiqEaaYFRVKkMHFySlAPOtBjpagFMYJBBgGKFBAAOw=="},7:function(t,e,n){t.exports=n.p+"static/img/nodata.7ec685f.png"},74:function(t,e,n){n(135);var i=n(1)(n(86),n(166),null,null);t.exports=i.exports},8:function(t,e,n){n(27);var i=n(1)(n(21),n(29),null,null);t.exports=i.exports},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(56),a=n.n(i),o=n(0),s=n(51),r=n.n(s),c=(n(2),n(18)),l=n.n(c),A=n(17),d=n.n(A),h=n(50),u=n.n(h),p=n(8),g=n.n(p);e.default={name:"replayer",components:{tips:r.a,downlink:l.a,contact:d.a,timeScore:u.a,listBan:g.a},data:function(){var t;return t={playType:parseInt(o.a("playType")),matchId:o.a("matchId"),pageType:o.a("type"),channelType:2,mainStyle:{paddingBottom:"1.13rem"},lineId:"",firstType:"",tipsText:"",showtips:!1,matchType:1e3,showdownlink:!1},a()(t,"mainStyle",{paddingBottom:"1.13rem"}),a()(t,"isqd",""),a()(t,"navType",!0),a()(t,"loading",!0),a()(t,"isreplayer",!1),a()(t,"collectionList",[]),a()(t,"reviewList",[]),a()(t,"nodata",!1),a()(t,"istop",!1),a()(t,"realH",0),a()(t,"isFisrt",!0),a()(t,"bannerArr",{downlink:{iosShow:!1,androidShow:!1},contact:{iosShow:!1,androidShow:!1},appPop:{iosShow:!1,androidShow:!1},listBan:{iosShow:!1,androidShow:!1}}),t},created:function(){this.isqd=o.a("ADTAG")?o.a("ADTAG"):"",document.getElementById("loading").style.display="none","worldCup"===this.pageType&&(this.channelType=3),sessionStorage.getItem("downlink")&&(this.showdownlink=!0),this.scrollload(),this.getCollectionList(),this.getBannerData()},mounted:function(){var t=document.documentElement.clientWidth||document.body.clientWidth,e=t/750*100,n=(4.09*e).toFixed(2);this.realH=n},methods:{getBannerData:function(){var t=this,e={url:"ggw/mobile/getAll",callback:function(e){if(1==e.error_code){e.data.map(function(e,n){switch(e.type){case 0:t.bannerArr.downlink=e;break;case 1:t.bannerArr.listBan=e;break;case 2:t.bannerArr.appPop=e;case 3:t.bannerArr.contact=e}})}}};o.b(this,e)},getCollectionList:function(){var t=this;this.loading=!0,this.nodata=!1;var e={url:"right/game_video_list",postData:{gameId:o.a("matchId")},callback:function(e){t.loading=!1,1==e.error_code?(t.collectionList=e.data,0==t.collectionList.length?t.nodata=!0:t.collectionList.map(function(t,e){t.bannerType=!1,e%7==0&&0!=e&&(t.bannerType=!0)})):t.nodata=!0}};o.b(this,e)},getReviewList:function(){var t=this;this.loading=!0,this.nodata=!1;var e={url:"right/game_progress_info",postData:{gameId:o.a("matchId")},callback:function(e){t.loading=!1,1==e.error_code&&e.data.backLooks?(t.reviewList=e.data.backLooks,0==t.reviewList.length?t.nodata=!0:t.reviewList.map(function(t,e){t.bannerType=!1,e%7==0&&0!=e&&(t.bannerType=!0)})):t.nodata=!0}};o.b(this,e)},changeNav:function(t){this.nodata=!1,this.navType=t,this.nodata=t?0==this.collectionList.length:0==this.reviewList.length,this.isFisrt&&(this.isFisrt=!1,this.getReviewList()),this.istop&&(document.documentElement.scrollTop=document.body.scrollTop=200)},scrollload:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;document.documentElement.clientHeight||document.body.clientHeight,document.documentElement.scrollHeight||document.body.scrollHeight;e>t.realH?t.istop=!0:t.istop=!1}},closedownlink:function(t){this.showdownlink=t,0==t&&(this.mainStyle.paddingBottom="0",sessionStorage.setItem("downlink",!1))},isencode:function(t){return t.indexOf("rtmp")>-1&&t.indexOf(".html")<0?t:encodeURIComponent(t)},getTime:function(t){var e=void 0,n=void 0,i=void 0;return t&&(e=t/60,n=t%60,i=parseInt(e)+":"+(n<10?n+"0":n)),i}}}},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(10),o=n(9),s=n.n(o),r=n(74),c=n.n(r),l=n(4),A=(n.n(l),n(3));n.n(A);i.a.use(a.a),i.a.use(s.a),new i.a({el:"#app",template:"<App/>",components:{App:c.a}})}},[91]);
//# sourceMappingURL=replayer.890c5a429db8267ad691.js.map