"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[681],{89:function(e,s){s.Z=(e,s)=>{const t=e.__vccOpts||e;for(const[a,i]of s)t[a]=i;return t}},988:function(e,s,t){t.d(s,{U:function(){return o}});t(7658);var a=t(1020),i=t(36),r=t(7329),l=t(9125);const o=(0,a.Q_)({id:"Users",state:()=>({loading:!1,showModal:!1,usersList:[],uploaded:!1}),actions:{async getUsers(){this.loading=!0,this.usersList=[];const e=await(0,i.PL)((0,i.hJ)(r.db,"users"));e.forEach((e=>{this.usersList.push({id:this.usersList.length,name:e.id,email:e.data().email,password:e.data().password,username:e.data().username,registrationDate:e.data().registrationDate,fullName:e.data().fullName,phone:e.data().phone,creditCard:e.data().creditCard,birthday:e.data().birthday,city:e.data().city,address:e.data().address,gender:e.data().gender,language:e.data().language,emailChange:e.data().email,passwordChange:"",passwordCheck:""})}));for(let s=0;s<this.usersList.length;s++)"object"===typeof this.usersList[s].birthday&&(this.usersList[s].birthday=new Date(1e3*this.usersList[s].birthday.seconds));this.loading=!1},async deleteUser(e){this.showModal=!1,this.loading=!0;const s=(0,l.v0)(r.nG);(0,l.e5)(s,this.usersList[e].email,this.usersList[e].password).then((s=>{const t=s.user;(0,l.h8)(t).then((async()=>{await(0,i.oe)((0,i.JU)(r.db,"users",this.usersList[e].name)),this.usersList.splice(e,1);for(let e=0;e<this.usersList.length;e++)this.usersList[e].id!==e&&(this.usersList[e].id=e)})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)})),this.loading=!1},async saveUser(e){this.loading=!0,this.uploaded=!1;const s=(0,l.v0)(r.nG);(0,l.e5)(s,this.usersList[e].email,this.usersList[e].password).then((async s=>{const t=s.user;t.email!==this.usersList[e].emailChange&&(this.usersList[e].email=this.usersList[e].emailChange,(0,l.s)(t,this.usersList[e].emailChange).catch((e=>{console.log(e)}))),""!==this.usersList[e].passwordChange&&this.usersList[e].passwordChange===this.usersList[e].passwordCheck&&this.usersList[e].password!==this.usersList[e].passwordChange&&(this.usersList[e].password=this.usersList[e].passwordChange,(0,l.gQ)(t,this.usersList[e].password).catch((e=>{console.log(e)})));const a={email:this.usersList[e].email,password:this.usersList[e].password,username:this.usersList[e].username,registrationDate:this.usersList[e].registrationDate,fullName:this.usersList[e].fullName,phone:this.usersList[e].phone,creditCard:this.usersList[e].creditCard,birthday:this.usersList[e].birthday,city:this.usersList[e].city,address:this.usersList[e].address,gender:this.usersList[e].gender,language:this.usersList[e].language};await(0,i.pl)((0,i.JU)(r.db,"users",this.usersList[e].name),a).then((()=>{this.uploaded=!0}))})).catch((e=>{console.log(e)})),this.loading=!1}}})},8198:function(e,s,t){t.r(s),t.d(s,{default:function(){return D}});t(7658);var a=t(3396),i=t(4870),r=t(9242),l=t(988),o=t(4283),n=t(8819),u=t(7139);const d={key:0,class:"pagination"},h=["disabled"],c=["onClick"],g={class:"page-link"},m=["disabled"],p={name:"ThePagination"};var v=Object.assign(p,{props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,default:1}},setup(e){return(s,t)=>e.totalPages>1?((0,a.wg)(),(0,a.iD)("ul",d,[(0,a._)("li",{class:(0,u.C_)(["paginate_button page-item previous",{disabled:1===e.currentPage}]),id:"example1_previous"},[(0,a._)("button",{class:"page-link",disabled:1===e.currentPage,onClick:t[0]||(t[0]=e=>s.$emit("changePage","previous"))},"Previous",8,h)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.totalPages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,u.C_)(["paginate_button page-item",{active:e.currentPage===t}]),key:t,onClick:e=>s.$emit("changePage",t)},[(0,a._)("p",g,(0,u.zw)(t),1)],10,c)))),128)),(0,a._)("li",{class:(0,u.C_)(["paginate_button page-item next",{disabled:e.currentPage===e.totalPages}]),id:"example1_next"},[(0,a._)("button",{class:"page-link",disabled:e.currentPage===e.totalPages,onClick:t[1]||(t[1]=e=>s.$emit("changePage","next"))},"Next",8,m)],2)])):(0,a.kq)("",!0)}}),L=t(89);const w=(0,L.Z)(v,[["__scopeId","data-v-7dea5bb3"]]);var y=w;const b={class:"users"},C={key:0},f={class:"users__search"},_={name:"AdminUsers"};var U=Object.assign(_,{setup(e){let s=(0,i.qj)([]);const t=(0,l.U)();t.getUsers(),(0,a.wF)((()=>{s=t.usersList}));const u=(0,i.iH)(5),d=(0,i.iH)(1),h=(0,i.iH)(""),c=(0,i.iH)(!1);function g(e,a){s=t.usersList,h.value=e,c.value=a,d.value=1}const m=(0,a.Fl)((()=>{let e=s;return h.value.includes("registrationDate")?c.value?e.sort(((e,s)=>new Date(s.registrationDate)-new Date(e.registrationDate))):e.sort(((e,s)=>new Date(e.registrationDate)-new Date(s.registrationDate))):h.value.includes("birthday")?c.value?e.sort(((e,s)=>s.birthday-e.birthday)):e.sort(((e,s)=>e.birthday-s.birthday)):h.value.includes("email")?c.value?e.sort(((e,s)=>s.email>e.email?1:-1)):e.sort(((e,s)=>e.email>s.email?1:-1)):h.value.includes("phone")?c.value?e.sort(((e,s)=>s.phone-e.phone)):e.sort(((e,s)=>e.phone-s.phone)):h.value.includes("fullName")?c.value?e.sort(((e,s)=>s.fullName.toLowerCase()>e.fullName.toLowerCase()?1:-1)):e.sort(((e,s)=>e.fullName.toLowerCase()>s.fullName.toLowerCase()?1:-1)):h.value.includes("username")?c.value?e.sort(((e,s)=>s.username>e.username?1:-1)):e.sort(((e,s)=>e.username>s.username?1:-1)):h.value.includes("city")?c.value?e.sort(((e,s)=>s.city>e.city?1:-1)):e.sort(((e,s)=>e.city>s.city?1:-1)):c.value?e.sort(((e,s)=>s.id>e.id?1:-1)):e.sort(((e,s)=>e.id>s.id?1:-1))})),p=(0,i.iH)(""),v=["id","registrationDate","birthday","email","phone","fullName","username","city"];(0,a.YP)((()=>p.value),(e=>{d.value=1,""===e&&(s=t.usersList)}));const L=(0,a.Fl)((()=>{let e=[];return m.value.filter((s=>{let t="";for(let e in s)v.forEach((a=>{a===e&&(t+=s[e]+" ")}));t.toLowerCase().includes(p.value.toLowerCase())&&e.push(s)})),e})),w=(0,a.Fl)((()=>Math.ceil(L.value.length/u.value)));function _(e){"previous"===e?d.value--:"next"===e?d.value++:d.value=e}const U=(0,a.Fl)((()=>{let e=(d.value-1)*u.value,s=e+u.value;return L.value.slice(e,s)}));return(e,s)=>((0,a.wg)(),(0,a.iD)("div",b,[(0,a.wy)((0,a.Wm)((0,i.SU)(o.Z),null,null,512),[[r.vShow,(0,i.SU)(t).loading]]),"ChooseUsers"!==e.$route.name?((0,a.wg)(),(0,a.iD)("h2",C,"List of users")):(0,a.kq)("",!0),(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",placeholder:"Search","onUpdate:modelValue":s[0]||(s[0]=e=>p.value=e)},null,512),[[r.vModelText,p.value]])]),(0,a.Wm)((0,i.SU)(n.Z),{"route-name":"User",items:(0,i.SU)(U),"show-modal":(0,i.SU)(t).showModal,search:p.value,onToggleModal:s[1]||(s[1]=e=>(0,i.SU)(t).showModal=!0),onCloseModal:s[2]||(s[2]=e=>(0,i.SU)(t).showModal=!1),onDeleteItem:(0,i.SU)(t).deleteUser,onSortArray:g},null,8,["items","show-modal","search","onDeleteItem"]),(0,a.Wm)((0,i.SU)(y),{totalPages:(0,i.SU)(w),currentPage:d.value,onChangePage:_},null,8,["totalPages","currentPage"]),"ChooseUsers"===e.$route.name?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:s[3]||(s[3]=s=>e.$router.go(-1))},"Confirm selection")):(0,a.kq)("",!0)]))}});const k=(0,L.Z)(U,[["__scopeId","data-v-5a8a9c93"]]);var D=k}}]);
//# sourceMappingURL=users.aa440393.js.map