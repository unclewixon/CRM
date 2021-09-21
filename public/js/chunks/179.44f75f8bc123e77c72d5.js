(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1324:function(e,t,a){"use strict";a.r(t);var r=a(1606),n=a(268),o=a(4),l=a(1607),s=a(1616),c={components:{BCardCode:o.a,BCardText:l.a,BFormTextarea:s.a},data:function(){return{codeDefault:'\n<template>\n  <div>\n    <label for="textarea-default">Textarea</label>\n    <b-form-textarea\n      id="textarea-default"\n      placeholder="Textarea"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardText,\n    BFormTextarea,\n  },\n}\n<\/script>\n\n'}}},i=a(0),d=Object(i.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDefault)+"\n  ")]},proxy:!0}])},[a("b-card-text",[e._v("\n    Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and\n    contextual states.\n  ")]),e._v(" "),a("label",{attrs:{for:"textarea-default"}},[e._v("Textarea")]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Textarea",rows:"3"}})],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a},data:function(){return{codeRows:'\n<template>\n  <b-form-textarea\n    id="textarea-rows"\n    placeholder="Tall textarea"\n    rows="8"\n  />\n</template>\n\n<script>\nimport { BFormTextarea} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n'}}},m=Object(i.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Displayed rows"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeRows)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the height of ")]),e._v(" "),a("code",[e._v("<b-form-textarea>")]),e._v(" "),a("span",[e._v(", set the ")]),e._v(" "),a("code",[e._v("rows")]),e._v(" "),a("span",[e._v(" prop to the desired number of rows. If no value is provided to rows, then it will default to 2.")])]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"}})],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:o.a,BCardText:l.a,BFormTextarea:s.a},data:function(){return{codeFloatingLabel:'\n<template>\n  <div class="form-label-group">\n    <b-form-textarea\n      id="textarea"\n      rows="3"\n      placeholder="Label in Textarea"\n    />\n    <label for="label-textarea">Label in Textarea</label>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n'}}},p=Object(i.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Floating Label"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFloatingLabel)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use ")]),e._v(" "),a("code",[e._v(".form-label-group")]),e._v(" "),a("span",[e._v(" to add a Floating Label with Textarea.")])]),e._v(" "),a("div",{staticClass:"form-label-group mt-2 mb-0"},[a("b-form-textarea",{attrs:{id:"textarea",rows:"3",placeholder:"Label in Textarea"}}),e._v(" "),a("label",{attrs:{for:"label-textarea"}},[e._v("Label in Textarea")])],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a},data:function(){return{text:"",codeStates:'\n<template>\n  <b-form-textarea\n    id="textarea-state"\n    v-model="text"\n    :state="text.length <= 10"\n    placeholder="Enter only 10 characters"\n    rows="3"\n  />\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data() {\n    return {\n      text: \'\',\n    }\n  },\n}\n<\/script>\n'}}},b=Object(i.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStates)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Bootstrap includes validation styles for ")]),e._v(" "),a("code",[e._v("valid")]),e._v(" "),a("span",[e._v(" and ")]),e._v(" "),a("code",[e._v("invalid")]),e._v(" "),a("span",[e._v(" states on most form controls.")])]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-state",state:e.text.length<=10,placeholder:"Enter only 10 characters",rows:"3"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:o.a,BFormTextarea:s.a,BRow:r.a,BCardText:l.a,BCol:n.a},data:function(){return{codeSize:'\n<template>\n  <b-row>\n    <b-col sm="2">\n      <label\n        for="textarea-small"\n        class="text-nowrap"\n      >Small:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-small"\n        size="sm"\n        placeholder="Small textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-default"\n        class="text-nowrap"\n      >Default:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-default"\n        placeholder="Default textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-large"\n        class="text-nowrap"\n      >Large:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-large"\n        size="lg"\n        placeholder="Large textarea"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},f=Object(i.a)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSize)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Set text height using the ")]),e._v(" "),a("code",[e._v("size")]),e._v(" "),a("span",[e._v(" prop to ")]),e._v(" "),a("code",[e._v("sm")]),e._v(" "),a("span",[e._v(" or ")]),e._v(" "),a("code",[e._v("lg")]),e._v(" "),a("span",[e._v(" for small or large respectively.")])]),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-small"}},[e._v("Small:")])]),e._v(" "),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",placeholder:"Small textarea"}})],1),e._v(" "),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-default"}},[e._v("Default:")])]),e._v(" "),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Default textarea"}})],1),e._v(" "),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-large"}},[e._v("Large:")])]),e._v(" "),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Large textarea"}})],1)],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a},data:function(){return{codeDisableResize:'\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-no-resize"\n      placeholder="Fixed height textarea"\n      rows="3"\n      no-resize\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n'}}},g=Object(i.a)(h,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Disable resize handle"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDisableResize)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("\n      Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the\n    ")]),e._v(" "),a("code",[e._v("no-resize")]),e._v(" "),a("span",[e._v(" prop to ")]),e._v(" "),a("code",[e._v("true")]),e._v(" "),a("span",[e._v(".")])]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-no-resize",placeholder:"Fixed height textarea",rows:"3","no-resize":""}})],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:o.a,BCardText:l.a,BFormTextarea:s.a,BRow:r.a,BCol:n.a},data:function(){return{codeAutoHeight:'\n<template>\n  <b-row>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-auto-height">Auto height:</label>\n      <b-form-textarea\n        id="textarea-auto-height"\n        placeholder="Auto height textarea"\n        rows="3"\n        max-rows="8"\n      />\n    </b-col>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-no-auto-shrink">No auto-shrink:</label>\n      <b-form-textarea\n        id="textarea-no-auto-shrink"\n        placeholder="Auto height (no-shrink) textarea"\n        rows="3"\n        max-rows="8"\n        no-auto-shrink\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},T=Object(i.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Auto height"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAutoHeight)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the initial minimum height (in rows), set the")]),e._v(" "),a("code",[e._v("rows")]),e._v(" "),a("span",[e._v(" prop to the desired number of lines (or leave it at the default of ")]),e._v(" "),a("code",[e._v("2")]),e._v(" "),a("span",[e._v("), And then set maximum rows that the text area will grow to (before showing a scrollbar) by setting the\n    ")]),e._v(" "),a("code",[e._v("max-rows")]),e._v(" "),a("span",[e._v("prop to the maximum number of lines of text.")])]),e._v(" "),a("b-card-text",[a("span",[e._v("To make the height ")]),e._v(" "),a("code",[e._v("sticky")]),e._v(" "),a("span",[e._v(" (i.e. never shrink), set the ")]),e._v(" "),a("code",[e._v("no-auto-shrink")]),e._v(" "),a("span",[e._v(" prop to ")]),e._v(" "),a("code",[e._v("true")]),e._v(" "),a("span",[e._v(". The ")]),e._v(" "),a("code",[e._v("no-auto-shrink")]),e._v(" "),a("span",[e._v(" props has no effect if ")]),e._v(" "),a("code",[e._v("max-rows")]),e._v(" "),a("span",[e._v(" is not set or is equal to or less than rows.")])]),e._v(" "),a("b-row",[a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-auto-height"}},[e._v("Auto height:")]),e._v(" "),a("b-form-textarea",{staticClass:"mb-1 mb-xl-0",attrs:{id:"textarea-auto-height",placeholder:"Auto height textarea",rows:"3","max-rows":"8"}})],1),e._v(" "),a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-no-auto-shrink"}},[e._v("No auto-shrink:")]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Auto height (no-shrink) textarea",rows:"3","max-rows":"8","no-auto-shrink":""}})],1)],1)],1)}),[],!1,null,null,null).exports,B=a(1645),C={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a,BFormGroup:B.a},data:function(){return{text1:"",text2:"",codeFormatter:'\n<template>\n  <div>\n    <b-form-group\n      class="mb-0"\n      label="Textarea with formatter (on input)"\n      label-for="textarea-formatter"\n      description="We will convert your text to lowercase instantly"\n    >\n      <b-form-textarea\n        id="textarea-formatter"\n        v-model="text1"\n        placeholder="Enter your text"\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text1 }}</p>\n\n    <b-form-group\n      class="mb-0"\n      label="Textarea with lazy formatter (on blur)"\n      label-for="textarea-lazy"\n      description="This one is a little lazy!"\n    >\n      <b-form-textarea\n        id="textarea-lazy"\n        v-model="text2"\n        placeholder="Enter your text"\n        lazy-formatter\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text2 }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BFormGroup,\n  },\n  data: () => ({\n    text1: \'\',\n    text2: \'\',\n  }),\n  methods: {\n    formatter(value) {\n      return value.toLowerCase()\n    },\n  },\n}\n<\/script>\n'}},methods:{formatter:function(e){return e.toLowerCase()}}},y=Object(i.a)(C,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Formatter support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFormatter)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("code",[e._v("<b-form-textarea>")]),e._v(" "),a("span",[e._v("optionally supports formatting by passing a function reference to the ")]),e._v(" "),a("code",[e._v("formatter")]),e._v(" "),a("span",[e._v(" prop.")])]),e._v(" "),a("div",[a("b-form-group",{attrs:{label:"Textarea with formatter (on input)","label-for":"textarea-formatter",description:"We will convert your text to lowercase instantly"}},[a("b-form-textarea",{attrs:{id:"textarea-formatter",placeholder:"Enter your text",formatter:e.formatter},model:{value:e.text1,callback:function(t){e.text1=t},expression:"text1"}})],1),e._v(" "),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text1))]),e._v(" "),a("b-form-group",{attrs:{label:"Textarea with lazy formatter (on blur)","label-for":"textarea-lazy",description:"This one is a little lazy!"}},[a("b-form-textarea",{attrs:{id:"textarea-lazy",placeholder:"Enter your text","lazy-formatter":"",formatter:e.formatter},model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text2))])],1)],1)}),[],!1,null,null,null).exports,F={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a},data:function(){return{text:"This is some text.\nIt is read only and doesn't look like an input.",codeReadonly:'\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-plaintext"\n      plaintext\n      :value="text"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    text: "This is some text.\nIt is read only and doesn\'t look like an input.",\n  }),\n}\n<\/script>\n'}}},k=Object(i.a)(F,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Readonly plain text"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeReadonly)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("If you want to have ")]),e._v(" "),a("code",[e._v("<b-form-textarea readonly>")]),e._v(" "),a("span",[e._v(" elements in your form styled as plain text, set the ")]),e._v(" "),a("code",[e._v("plaintext")]),e._v(" "),a("span",[e._v(" prop (no need to set ")]),e._v(" "),a("code",[e._v("readonly")]),e._v(" "),a("span",[e._v("\n      as it will be set automatically) to remove the default form field styling and preserve the correct text size,\n      margin, padding and height.\n    ")])]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea-plaintext",readonly:"",value:e.text}})],1)}),[],!1,null,null,null).exports,z={components:{BCardCode:o.a,BFormTextarea:s.a,BCardText:l.a},data:function(){return{value:"",codeDebounce:'\n<template>\n  <div>\n    <b-form-textarea\n      v-model="value"\n      debounce="500"\n      rows="3"\n      max-rows="5"\n    />\n    <pre class="mt-1">{{ value }}</pre>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n}\n<\/script>\n'}}},S=Object(i.a)(z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Debounce support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDebounce)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To enable debouncing, set the prop ")]),e._v(" "),a("code",[e._v("debounce")]),e._v(" "),a("span",[e._v(" to any integer greater than zero. The value is specified in milliseconds. Setting ")]),e._v(" "),a("code",[e._v("debounce")]),e._v(" "),a("span",[e._v(" to ")]),e._v(" "),a("code",[e._v("0")]),e._v(" "),a("span",[e._v(" will disable debouncing.")])]),e._v(" "),a("b-form-textarea",{attrs:{debounce:"500",rows:"3","max-rows":"5"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n    "+e._s(e.value)+"\n  ")])],1)}),[],!1,null,null,null).exports,A={components:{BCardCode:o.a,BCardText:l.a,BFormTextarea:s.a},data:function(){return{value:"",maxChar:20,codeCounter:'\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-state"\n      v-model="text"\n      :state="text.length <= 10"\n      placeholder="Enter only 10 characters"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n    maxChar: 20,\n  }),\n}\n<\/script>\n'}}},D=Object(i.a)(A,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Counter"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCounter)+"\n  ")]},proxy:!0}])},[a("b-card-text",[e._v("\n    There are times when we need the user to only enter a certain number of characters for it, we have the property\n    counter, the value is a number and determines the maximum.\n  ")]),e._v(" "),a("b-form-textarea",{staticClass:"char-textarea",class:e.value.length>=e.maxChar?"text-danger":"",attrs:{placeholder:"Counter",rows:"3",state:e.value.length<=e.maxChar},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("small",{staticClass:"textarea-counter-value float-right",class:e.value.length>=e.maxChar?"bg-danger":""},[a("span",{staticClass:"char-count"},[e._v(e._s(e.value.length))]),e._v(" / "+e._s(e.maxChar)+"\n  ")])],1)}),[],!1,null,null,null).exports,E={components:{BRow:r.a,BCol:n.a,FormTextAreaDefault:d,FormTextAreaRows:m,FormTextAreaFloatingLabel:p,FormTextAreaStates:b,FormTextAreaSize:f,FormTextAreaDisableResize:g,FormTextAreaAutoHeight:T,FormatterTextArea:y,FormTextAreaReadonly:k,FormTextAreaDebounce:S,FormTextAreaCounter:D}},$=Object(i.a)(E,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("form-text-area-default"),e._v(" "),a("form-text-area-rows"),e._v(" "),a("form-text-area-floating-label"),e._v(" "),a("form-text-area-states"),e._v(" "),a("form-text-area-size"),e._v(" "),a("form-text-area-disable-resize"),e._v(" "),a("form-text-area-auto-height"),e._v(" "),a("formatter-text-area"),e._v(" "),a("form-text-area-readonly"),e._v(" "),a("form-text-area-debounce"),e._v(" "),a("form-text-area-counter")],1)],1)}),[],!1,null,null,null);t.default=$.exports},14:function(e,t,a){"use strict";var r=a(1609),n=a(263),o=a(265),l=a(264),s=a(1623),c=(a(147),a(148),a(82)),i=a.n(c),d={components:{BCard:r.a,BCardTitle:n.a,BCardSubTitle:o.a,BCardBody:l.a,BCollapse:s.a,Prism:i.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(a(878),a(0)),m=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),e._v(" "),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"0d352060",null);t.a=m.exports},4:function(e,t,a){"use strict";var r=a(14);t.a=r.a},418:function(e,t,a){var r=a(879);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(23)(r,n);r.locals&&(e.exports=r.locals)},878:function(e,t,a){"use strict";a(418)},879:function(e,t,a){(e.exports=a(21)(!1)).push([e.i,".card-code pre[class*=language-][data-v-0d352060]{max-height:350px}[dir] .card-code pre[class*=language-][data-v-0d352060]{margin:0;border-radius:.5rem}.card-code[data-v-0d352060] ::-webkit-scrollbar{width:8px;height:8px}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar{background:#2d2d2d;border-radius:100%}[dir] .dark-layout .card-code[data-v-0d352060] ::-webkit-scrollbar{background-color:#161d31!important}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar-track{background:transparent}[dir] .card-code[data-v-0d352060] ::-webkit-scrollbar-thumb{border-radius:.5rem;background:hsla(0,0%,94.5%,.4)}.card-code[data-v-0d352060] ::-webkit-scrollbar-corner{display:none}[dir] .code-toggler[data-v-0d352060]{border-bottom:1px solid transparent}[dir] .code-toggler[aria-expanded=false][data-v-0d352060]{border-bottom-color:#7367f0}.card .card-header .heading-elements[data-v-0d352060]{position:static}[dir] .card .card-header .heading-elements[data-v-0d352060]{background:red}",""])}}]);