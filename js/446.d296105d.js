"use strict";(self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[]).push([[446],{5446:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var u=a(3396),t=a(4870),n=(a(7658),a(6311)),o=a(7178),d=a(2483);const i=e=>((0,u.dD)("data-v-202cd47c"),e=e(),(0,u.Cn)(),e),m=i((()=>(0,u._)("div",null,null,-1))),r={action:""},s=["src"],c=i((()=>(0,u._)("br",null,null,-1))),p=i((()=>(0,u._)("br",null,null,-1))),v=i((()=>(0,u._)("br",null,null,-1))),g=i((()=>(0,u._)("br",null,null,-1)));var _={__name:"FormOne",setup(e){const l=(0,d.tv)(),a=(0,d.yj)();console.log(a.query.img,"---------------");const i=(0,t.iH)("default"),_=(0,t.iH)(null),f=(0,t.iH)("https://www.zzgoodqc.cn/"+a.query.img),w=()=>{_.value.click()},b=async e=>{const l=e.target.files[0];if(l){const e=new FileReader;e.onload=e=>{f.value=e.target.result},e.readAsDataURL(l)}};console.log();const k=(0,t.iH)({name:"",sex:"",iphone:"",userid:11110,img:f.value,nick:"",birthdata:"",strcity:"1",emails:"",indate:"",mydes:""});async function V(){let e=null;await(0,n.UZ)(f.value).then((l=>{console.log(l),e="https://www.zzgoodqc.cn/"+l.data.url}));let a={name:k.value.name,sex:k.value.sex,userid:(new Date).getTime().toString().substring(8,12),birthdata:h(k.value.birthdata),indate:h(k.value.indate),nick:k.value.nick,emails:k.value.nick,iphone:k.value.iphone,mydes:k.value.mydes,img:e};(0,n.R3)(a).then((a=>{console.log(a),console.log(a.code),0===a.code&&((0,o.z8)(a.msg+"即将跳转..."),l.push({name:"formTo",query:{img:e}}))}))}function h(){let e=new Date,l=e.getFullYear(),a=e.getMonth()+1,u=e.getDate(),t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),o=e.getSeconds().toString().padStart(2,"0"),d=`${l}-${a}-${u}-${t}:${n}:${o}`;return d}return(e,l)=>{const a=(0,u.up)("el-input"),t=(0,u.up)("el-form-item"),n=(0,u.up)("el-radio"),o=(0,u.up)("el-radio-group"),d=(0,u.up)("el-date-picker"),h=(0,u.up)("el-button"),y=(0,u.up)("router-view");return(0,u.wg)(),(0,u.iD)(u.HY,null,[m,(0,u._)("div",null,[(0,u._)("form",r,[(0,u.Wm)(t,{label:"姓名"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{modelValue:k.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value.name=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(t,{label:"Resources",prop:"sex"},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{modelValue:k.value.sex,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value.sex=e)},{default:(0,u.w5)((()=>[(0,u.Wm)(n,{label:"0"},{default:(0,u.w5)((()=>[(0,u.Uk)("男")])),_:1}),(0,u.Uk)(),(0,u.Wm)(n,{label:"1"},{default:(0,u.w5)((()=>[(0,u.Uk)("女")])),_:1}),(0,u.Uk)("> ")])),_:1},8,["modelValue"])])),_:1}),(0,u.Uk)(" 图 像 ："),(0,u._)("input",{type:"file",ref_key:"fileInput",ref:_,onChange:b,hidden:""},null,544),f.value?((0,u.wg)(),(0,u.iD)("img",{key:0,src:f.value,onClick:w},null,8,s)):(0,u.kq)("",!0),c,p,v,g,(0,u.Wm)(t,{label:"昵称"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{modelValue:k.value.nick,"onUpdate:modelValue":l[2]||(l[2]=e=>k.value.nick=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(t,{label:"生日"},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{modelValue:k.value.birthdata,"onUpdate:modelValue":l[3]||(l[3]=e=>k.value.birthdata=e),type:"date",placeholder:"Pick a day",size:i.value},null,8,["modelValue","size"])])),_:1}),(0,u.Wm)(t,{label:"邮箱"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{modelValue:k.value.emails,"onUpdate:modelValue":l[4]||(l[4]=e=>k.value.emails=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(t,{label:"手机号码"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{modelValue:k.value.iphone,"onUpdate:modelValue":l[5]||(l[5]=e=>k.value.iphone=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(t,{label:"入职日期"},{default:(0,u.w5)((()=>[(0,u.Wm)(d,{modelValue:k.value.indate,"onUpdate:modelValue":l[6]||(l[6]=e=>k.value.indate=e),type:"date",placeholder:"Pick a day",size:i.value},null,8,["modelValue","size"])])),_:1}),(0,u.Wm)(t,{label:"个人介绍",prop:"desc"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,{type:"textarea",modelValue:k.value.mydes,"onUpdate:modelValue":l[7]||(l[7]=e=>k.value.mydes=e)},null,8,["modelValue"])])),_:1}),(0,u.Wm)(h,{type:"primary",onClick:l[8]||(l[8]=l=>V(e.ruleFormRef)),style:{"margin-left":"15vw"}},{default:(0,u.w5)((()=>[(0,u.Uk)(" 提交 ")])),_:1})])]),(0,u.Wm)(y)],64)}}},f=a(89);const w=(0,f.Z)(_,[["__scopeId","data-v-202cd47c"]]);var b=w;const k=e=>((0,u.dD)("data-v-c7bb0ee4"),e=e(),(0,u.Cn)(),e),V=k((()=>(0,u._)("div",null,null,-1)));var h={__name:"FormDemo",setup(e){return(e,l)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",null,[(0,u.Wm)((0,t.SU)(b))]),V],64))}};const y=(0,f.Z)(h,[["__scopeId","data-v-c7bb0ee4"]]);var W=y}}]);
//# sourceMappingURL=446.d296105d.js.map