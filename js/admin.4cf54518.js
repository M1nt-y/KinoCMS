"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[328],{89:function(s,t){t.Z=(s,t)=>{const e=s.__vccOpts||s;for(const[a,i]of t)e[a]=i;return e}},988:function(s,t,e){e.d(t,{U:function(){return d}});e(7658);var a=e(1020),i=e(36),r=e(7329),n=e(9125);const d=(0,a.Q_)({id:"Users",state:()=>({loading:!1,showModal:!1,usersList:[],uploaded:!1}),actions:{async getUsers(){this.loading=!0,this.usersList=[];const s=await(0,i.PL)((0,i.hJ)(r.db,"users"));s.forEach((s=>{this.usersList.push({id:this.usersList.length,name:s.id,email:s.data().email,password:s.data().password,username:s.data().username,registrationDate:s.data().registrationDate,fullName:s.data().fullName,phone:s.data().phone,creditCard:s.data().creditCard,birthday:s.data().birthday,city:s.data().city,address:s.data().address,gender:s.data().gender,language:s.data().language,emailChange:s.data().email,passwordChange:"",passwordCheck:""})}));for(let t=0;t<this.usersList.length;t++)"object"===typeof this.usersList[t].birthday&&(this.usersList[t].birthday=new Date(1e3*this.usersList[t].birthday.seconds));this.loading=!1},async deleteUser(s){this.showModal=!1,this.loading=!0;const t=(0,n.v0)(r.nG);(0,n.e5)(t,this.usersList[s].email,this.usersList[s].password).then((t=>{const e=t.user;(0,n.h8)(e).then((async()=>{await(0,i.oe)((0,i.JU)(r.db,"users",this.usersList[s].name)),this.usersList.splice(s,1);for(let s=0;s<this.usersList.length;s++)this.usersList[s].id!==s&&(this.usersList[s].id=s)})).catch((s=>{console.log(s)}))})).catch((s=>{console.log(s)})),this.loading=!1},async saveUser(s){this.loading=!0,this.uploaded=!1;const t=(0,n.v0)(r.nG);(0,n.e5)(t,this.usersList[s].email,this.usersList[s].password).then((async t=>{const e=t.user;e.email!==this.usersList[s].emailChange&&(this.usersList[s].email=this.usersList[s].emailChange,(0,n.s)(e,this.usersList[s].emailChange).catch((s=>{console.log(s)}))),""!==this.usersList[s].passwordChange&&this.usersList[s].passwordChange===this.usersList[s].passwordCheck&&this.usersList[s].password!==this.usersList[s].passwordChange&&(this.usersList[s].password=this.usersList[s].passwordChange,(0,n.gQ)(e,this.usersList[s].password).catch((s=>{console.log(s)})));const a={email:this.usersList[s].email,password:this.usersList[s].password,username:this.usersList[s].username,registrationDate:this.usersList[s].registrationDate,fullName:this.usersList[s].fullName,phone:this.usersList[s].phone,creditCard:this.usersList[s].creditCard,birthday:this.usersList[s].birthday,city:this.usersList[s].city,address:this.usersList[s].address,gender:this.usersList[s].gender,language:this.usersList[s].language};await(0,i.pl)((0,i.JU)(r.db,"users",this.usersList[s].name),a).then((()=>{this.uploaded=!0}))})).catch((s=>{console.log(s)})),this.loading=!1}}})},4283:function(s,t,e){e.d(t,{Z:function(){return c}});var a=e(3396);const i=s=>((0,a.dD)("data-v-60e77b62"),s=s(),(0,a.Cn)(),s),r={class:"loading"},n=i((()=>(0,a._)("span",null,null,-1))),d=[n];function o(s,t,e,i,n,o){return(0,a.wg)(),(0,a.iD)("div",r,d)}var h={name:"TheLoading"},u=e(89);const l=(0,u.Z)(h,[["render",o],["__scopeId","data-v-60e77b62"]]);var c=l},4804:function(s,t,e){e.r(t),e.d(t,{default:function(){return y}});var a=e(3396),i=e(4870),r=e(9242),n=e(7139),d=e(4283),o=e(1020);const h=(0,o.Q_)({id:"Statistics",state:()=>({loading:!1}),actions:{}});var u=e(988);const l=s=>((0,a.dD)("data-v-797f9a22"),s=s(),(0,a.Cn)(),s),c={class:"admin"},g={class:"col-lg-3 col-6"},L={class:"small-box bg-warning"},p={class:"inner"},m=l((()=>(0,a._)("p",null,"User Registrations",-1))),w=l((()=>(0,a._)("div",{class:"icon"},[(0,a._)("i",{class:"fas fa-user-plus"})],-1))),f={name:"AdminPanel"};var v=Object.assign(f,{setup(s){const t=h(),e=(0,u.U)();return e.getUsers(),(s,o)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a.Wm)((0,i.SU)(d.Z),null,null,512),[[r.vShow,(0,i.SU)(t).loading]]),(0,a._)("div",g,[(0,a._)("div",L,[(0,a._)("div",p,[(0,a._)("h3",null,(0,n.zw)((0,i.SU)(e).usersList.length),1),m]),w])])]))}}),C=e(89);const b=(0,C.Z)(v,[["__scopeId","data-v-797f9a22"]]);var y=b}}]);
//# sourceMappingURL=admin.4cf54518.js.map