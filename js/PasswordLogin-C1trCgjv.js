import{_ as u,C as p}from"./common-BguZZr5P.js";import{L as V}from"./LoginInput-C7019Wcj.js";import{T as c}from"./Tooltip-C4SXtcU8.js";import{B as m}from"./Base-BkRnk7Bb.js";import"./vendor-DFGjRkc2.js";const v={name:"PasswordLogin",extends:m,components:{Check:p,Tooltip:c,LoginInput:V},data(){return{phone:"",password:"",code:"",notice:""}},computed:{disabled(){return!(this.phone&&this.password)}},created(){},methods:{async login(){await this.check()&&(this.loading=!0)}}},N=e=>(Vue.pushScopeId("data-v-522a5eb9"),e=e(),Vue.popScopeId(),e),g={class:"PasswordLogin"},h={class:"content"},k=N(()=>Vue.createElementVNode("div",{class:"desc"},[Vue.createElementVNode("div",{class:"title"},"手机号密码登录")],-1)),C={class:"left"},f={class:"right"},w={key:0,class:"notice"},E={class:"options"};function y(e,o,b,_,s,n){const d=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("LoginInput"),r=Vue.resolveComponent("Tooltip"),a=Vue.resolveComponent("Check"),i=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",g,[Vue.createVNode(d,{mode:"light",backMode:"dark",backImg:"back"},{right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:o[0]||(o[0]=t=>e.$router.push("/login/help"))},"帮助与设置")]),_:1}),Vue.createElementVNode("div",h,[k,Vue.createVNode(l,{autofocus:"",type:"phone",modelValue:s.phone,"onUpdate:modelValue":o[1]||(o[1]=t=>s.phone=t),placeholder:"请输入手机号"},null,8,["modelValue"]),Vue.createVNode(l,{autofocus:"",class:"mt1r",type:"password",modelValue:s.password,"onUpdate:modelValue":o[2]||(o[2]=t=>s.password=t),placeholder:"请输入密码"},null,8,["modelValue"]),Vue.createElementVNode("div",{class:Vue.normalizeClass(["protocol",e.showAnim?"anim-bounce":""])},[Vue.createVNode(r,{style:{top:"-150%",left:"-10rem"},modelValue:e.showTooltip,"onUpdate:modelValue":o[3]||(o[3]=t=>e.showTooltip=t)},null,8,["modelValue"]),Vue.createElementVNode("div",C,[Vue.createVNode(a,{modelValue:e.isAgree,"onUpdate:modelValue":o[4]||(o[4]=t=>e.isAgree=t)},null,8,["modelValue"])]),Vue.createElementVNode("div",f,[Vue.createTextVNode(" 已阅读并同意 "),Vue.createElementVNode("span",{class:"link",onClick:o[5]||(o[5]=t=>e.$router.push("/service-protocol",{type:"“抖音”用户服务协议"}))},"用户协议"),Vue.createTextVNode(" 和 "),Vue.createElementVNode("span",{class:"link",onClick:o[6]||(o[6]=t=>e.$router.push("/service-protocol",{type:"“抖音”隐私政策"}))},"隐私政策"),Vue.createTextVNode(" ，同时登录并使用抖音火山版（原“火山小视频”）和抖音 ")])],2),s.notice?(Vue.openBlock(),Vue.createElementBlock("div",w,Vue.toDisplayString(s.notice),1)):Vue.createCommentVNode("",!0),Vue.createVNode(i,{type:"primary",loading:e.loading,active:!1,disabled:n.disabled,onClick:n.login},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.loading?"登录中":"登录"),1)]),_:1},8,["loading","disabled","onClick"]),Vue.createElementVNode("div",E,[Vue.createElementVNode("span",null,[Vue.createTextVNode(" 忘记了？"),Vue.createElementVNode("span",{class:"link",onClick:o[7]||(o[7]=t=>e.$router.push("/login/retrieve-password"))},"找回密码")])])])])}const U=u(v,[["render",y],["__scopeId","data-v-522a5eb9"]]);export{U as default};
