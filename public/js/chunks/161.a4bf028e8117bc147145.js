(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{14:function(a,e,r){"use strict";var t=r(1609),n=r(263),o=r(265),d=r(264),i=r(1623),s=(r(147),r(148),r(82)),c=r.n(s),l={components:{BCard:t.a,BCardTitle:n.a,BCardSubTitle:o.a,BCardBody:d.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var a=JSON.parse(JSON.stringify(this.$attrs));return delete a.title,delete a["sub-title"],a}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(r(878),r(0)),b=Object(u.a)(l,(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("b-card",a._g(a._b({attrs:{"no-body":""}},"b-card",a.cardAttrs,!1),a.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[a._v(a._s(a.$attrs.title))]),a._v(" "),a.$attrs["sub-title"]?r("b-card-sub-title",[a._v("\n        "+a._s(a.$attrs["sub-title"])+"\n      ")]):a._e()],1),a._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":a.code_visible?"false":"true","aria-controls":a.parentID},on:{click:function(e){a.code_visible=!a.code_visible}}})]),a._v(" "),void 0!==a.$attrs["no-body"]?[a._t("default"),a._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(e){a.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],1)]:r("b-card-body",[a._t("default"),a._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(e){a.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),a._v(" "),r("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],2)],2)}),[],!1,null,"0d352060",null);e.a=b.exports},1607:function(a,e,r){"use strict";r.d(e,"a",(function(){return l}));var t=r(15),n=r.n(t),o=r(46),d=r(5),i=r(2),s=r(1),c=Object(s.d)({textTag:Object(s.c)(i.u,"p")},d.u),l=n.a.extend({name:d.u,functional:!0,props:c,render:function(a,e){var r=e.props,t=e.data,n=e.children;return a(r.textTag,Object(o.a)(t,{staticClass:"card-text"}),n)}})},1716:function(a,e,r){"use strict";r.r(e);var t=r(4),n=r(1645),o=r(428),d=r(1607),i=r(1627),s={components:{BCardCode:t.a,BFormGroup:n.a,BFormRadio:o.a,BCardText:d.a,BFormRadioGroup:i.a},data:function(){return{locale:this.$i18n.locale,codeChange:'\n<template>\n  <div>\n    \x3c!-- radio buttons --\x3e\n    <b-form-group class="mb-0">\n      <b-form-radio-group\n        id="radio-group-2"\n        v-model="locale"\n        name="radio-sub-component"\n        class="demo-inline-spacing"\n      >\n        <b-form-radio\n          value="en"\n        >\n          English\n        </b-form-radio>\n        <b-form-radio\n          value="fr"\n        >\n          French\n        </b-form-radio>\n        <b-form-radio\n          value="de"\n        >\n          German\n        </b-form-radio>\n        <b-form-radio value="pt">\n          Portuguese\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    \x3c!-- card --\x3e\n    <div class="border rounded mt-3 p-2">\n      <h5 class="mb-1">\n        {{ $t(\'message.title\') }}\n      </h5>\n      {{ $t(\'message.text\') }}\n    </div>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadio,\n    BCardText,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      locale: this.$i18n.locale,\n    }\n  },\n  watch: {\n    locale(val) {\n      this.$i18n.locale = val\n    },\n  },\n}\n<\/script>\n'}},watch:{locale:function(a){this.$i18n.locale=a}}},c=r(0),l={components:{i18nChange:Object(c.a)(s,(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("b-card-code",{attrs:{title:"Change Locale"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeChange)+"\n  ")]},proxy:!0}])},[r("b-card-text",{staticClass:"mb-0"},[a._v("\n    Your Current Locale: "),r("strong",[a._v(a._s(a.locale))])]),a._v(" "),r("b-form-group",{staticClass:"mb-0"},[r("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:a.locale,callback:function(e){a.locale=e},expression:"locale"}},[r("b-form-radio",{attrs:{value:"en"}},[a._v("\n        English\n      ")]),a._v(" "),r("b-form-radio",{attrs:{value:"fr"}},[a._v("\n        French\n      ")]),a._v(" "),r("b-form-radio",{attrs:{value:"de"}},[a._v("\n        German\n      ")]),a._v(" "),r("b-form-radio",{attrs:{value:"pt"}},[a._v("\n        Portuguese\n      ")])],1)],1),a._v(" "),r("div",{staticClass:"border rounded mt-3 p-2"},[r("h5",{staticClass:"mb-1"},[a._v("\n      "+a._s(a.$t("message.title"))+"\n    ")]),a._v("\n    "+a._s(a.$t("message.text"))+"\n  ")])],1)}),[],!1,null,null,null).exports}},u=Object(c.a)(l,(function(){var a=this.$createElement;return(this._self._c||a)("i18n-change")}),[],!1,null,null,null);e.default=u.exports},4:function(a,e,r){"use strict";var t=r(14);e.a=t.a},418:function(a,e,r){var t=r(879);"string"==typeof t&&(t=[[a.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(23)(t,n);t.locals&&(a.exports=t.locals)},878:function(a,e,r){"use strict";r(418)},879:function(a,e,r){(a.exports=r(21)(!1)).push([a.i,".card-code pre[class*=language-][data-v-0d352060]{max-height:350px}[dir] .card-code pre[class*=language-][data-v-0d352060]{margin:0;border-radius:.5rem}.card-code[data-v-0d352060] ::-webkit-scrollbar{width:8px;height:8px}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar{background:#2d2d2d;border-radius:100%}[dir] .dark-layout .card-code[data-v-0d352060] ::-webkit-scrollbar{background-color:#161d31!important}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar-track{background:transparent}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar-thumb{border-radius:.5rem;background:hsla(0,0%,94.5%,.4)}.card-code[data-v-0d352060] ::-webkit-scrollbar-corner{display:none}[dir] .code-toggler[data-v-0d352060]{border-bottom:1px solid transparent}[dir] .code-toggler[aria-expanded=false][data-v-0d352060]{border-bottom-color:#7367f0}.card .card-header .heading-elements[data-v-0d352060]{position:static}[dir] .card .card-header .heading-elements[data-v-0d352060]{background:red}",""])}}]);