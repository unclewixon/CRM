(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1387:function(t,s,a){"use strict";a.r(s);var e=a(1606),c=a(268),i=a(335),n=a(44),r={components:{BRow:e.a,BCol:c.a,StatisticCardWithLineChart:i.a},data:function(){return{contacts:{},sms:{},delivered:{}}},created:function(){var t=this;this.$http.get("/contacts-analytics").then((function(s){t.contacts=s.data.result})),this.$http.get("/sms-analytics").then((function(s){t.sms=s.data.result})),this.$http.get("/delivered-analytics").then((function(s){t.delivered=s.data.result}))},methods:{kFormatter:n.e}},o=a(0),l=Object(o.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("b-row",[a("b-col",{attrs:{md:"4",sm:"6"}},[a("statistic-card-with-line-chart",{attrs:{icon:"UserCheckIcon",statistic:t.contacts.total||0,"statistic-title":"Contacts","chart-data":t.contacts.series}})],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"6"}},[a("statistic-card-with-line-chart",{attrs:{icon:"MessageCircleIcon",color:"success",statistic:t.sms.total||0,"statistic-title":"SMS Sent","chart-data":t.sms.series}})],1),t._v(" "),a("b-col",{attrs:{md:"4",sm:"6"}},[a("statistic-card-with-line-chart",{attrs:{icon:"CheckCircleIcon",color:"success",statistic:t.delivered.total||0,"statistic-title":"SMS Delivered","chart-data":t.delivered.series}})],1)],1)],1)}),[],!1,null,null,null);s.default=l.exports}}]);