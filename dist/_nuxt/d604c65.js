(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{511:function(t,e,n){var content=n(615);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("2905a830",content,!0,{sourceMap:!1})},614:function(t,e,n){"use strict";n(511)},615:function(t,e,n){(e=n(8)(!1)).push([t.i,".image-upload>input[data-v-06e65291]{display:none}",""]),t.exports=e},653:function(t,e,n){"use strict";n.r(e);n(37),n(46);var r=n(17),c=n(2),o=n(63),l=n(105),v=n.n(l);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{stripeHandler:{},appointments:[],appointment:{}}},mounted:function(){this.initialize()},computed:m({},Object(o.c)(["user"])),methods:m(m({},Object(o.b)(["changeUser"])),{},{initialize:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/appointment");case 2:n=e.sent,t.appointments=n,t.stripeHandler=StripeCheckout.configure({key:"pk_test_51I7JK2JGJbW9PNmvQWMzVhyhW7ocVnU1NpmDpMo8JXqjKsPCScxCuVYbLEJh55koKUwpyzvjPmeXzxQnxjVstut300o1TN4Ssj",locale:"en",token:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({token:n}),e.next=3,t.$axios.$put("/api/appointment/".concat(t.appointment._id),{stripeTokenId:n.id});case 3:return e.next=5,t.$axios.$get("/api/appointment");case 5:r=e.sent,t.appointments=r;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 5:case"end":return e.stop()}}),e)})))()},doPurchase:function(t){this.appointment=t,this.stripeHandler.open({amount:100*t.price})},onFileSelected:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.selectedFile=t.target.files[0],(r=new FormData).append("image",e.selectedFile,e.selectedFile.name),n.next=5,v.a.put("/api/users/image",r,{onUploadProgress:function(t){console.log("upload Progress"+Math.round(t.loaded/t.total*100)+"%")}});case 5:return n.next=7,e.$axios.$get("/api/user");case 7:(c=n.sent).username?e.changeUser(c):e.changeUser({username:!1});case 9:case"end":return n.stop()}}),n)})))()}})},h=(n(614),n(73)),_=n(112),y=n.n(_),w=n(179),x=n(200),j=n(175),O=n(145),C=n(467),k=n(464),P=n(416),V=n(174),S=n(138),R=n(468),$=n(430),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"ma-4"},[n("div",{staticClass:"h1 text-center font-weight-bold font-italic"},[t._v("PROFILE")]),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{attrs:{"align-content":"stretch",justify:"center"}},[n("v-col",{attrs:{lg:"4",sm:"6",xs:"12"}},[n("v-card",{staticClass:"pa-8",staticStyle:{height:"100%"},attrs:{id:"profile","max-width":"500px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-avatar",{staticClass:"my-2 ml-8",attrs:{size:"100"}},[n("v-img",{attrs:{src:"/api/images/"+t.user.image}})],1),t._v(" "),n("span",{staticClass:"image-upload"},[n("label",{attrs:{for:"file-input"}},[n("v-icon",[t._v("mdi-camera")])],1),t._v(" "),n("input",{attrs:{id:"file-input",type:"file"},on:{change:t.onFileSelected}})])],1),t._v(" "),n("v-card-title",{staticClass:"my-0",staticStyle:{"justify-content":"center"}},[t._v(t._s(t.user.username))]),t._v(" "),n("v-card-subtitle",{staticClass:"my-0",staticStyle:{"text-align":"center"}},[t._v(t._s(t.user.email))])],1)],1)],1),t._v(" "),n("div",{staticClass:"h1 text-center font-weight-bold font-italic mt-2"},[t._v("RESERVATIONS")]),t._v(" "),n("v-divider"),t._v(" "),t.appointments.length>0?n("v-row",{attrs:{"align-content":"stretch",justify:"center"}},t._l(t.appointments,(function(e,r){return n("v-col",{key:r,attrs:{lg:"4",sm:"6",xs:"12"}},[n("v-card",{staticStyle:{height:"100%"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"/api/images/"+e.activity.image}}),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("v-card-title",[t._v(t._s(e.activity.description))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.place.title))]),t._v(" "),n("v-card-text",[n("div",[n("span",{staticClass:"font-weight-black"},[t._v("Date: ")]),t._v(t._s(e.appointmentDate)+"\n            ")]),t._v(" "),n("div",[n("span",{staticClass:"font-weight-black"},[t._v("Number of people: ")]),t._v(t._s(e.numberOfPeople)+"\n            ")]),t._v(" "),n("div",[n("span",{staticClass:"font-weight-black"},[t._v("Price: ")]),t._v(t._s(e.price)+"$\n            ")])])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-actions",{staticStyle:{"justify-content":"center"}},[e.payed?n("v-btn",{staticClass:"font-weight-black pa-3 ma-1",attrs:{color:"success",elevation:"2",rounded:""}},[t._v("Payed\n            "),n("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-checkbox-marked-circle ")])],1):n("v-btn",{staticClass:"font-weight-black pa-3 ma-1",attrs:{color:"primary",elevation:"2",rounded:""},on:{click:function(n){return t.doPurchase(e)}}},[t._v("Pay Now")])],1)],1)],1)})),1):n("v-row",[n("v-col",[n("div",{staticClass:"Subtitle 1 text-center font-weight-bold font-italic mt-2"},[t._v("\n        No Reservation Available\n      ")])])],1)],1)}),[],!1,null,"06e65291",null);e.default=component.exports;y()(component,{VAvatar:w.a,VBtn:x.a,VCard:j.a,VCardActions:O.a,VCardSubtitle:O.b,VCardText:O.c,VCardTitle:O.d,VCol:C.a,VContainer:k.a,VDivider:P.a,VIcon:V.a,VImg:S.a,VRow:R.a,VSpacer:$.a})}}]);