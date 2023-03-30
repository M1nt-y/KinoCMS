"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[825],{89:function(e,a){a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[i,s]of a)t[i]=s;return t}},4974:function(e,a,t){t.d(a,{V:function(){return n}});t(7658);var i=t(1020),s=t(7329),l=t(36),o=t(1294);const n=(0,i.Q_)({id:"Specials",state:()=>({loading:!1,offerList:[],showModal:!1,uploaded:!1}),actions:{async getOffers(){this.loading=!0,this.offerList=[];const e=await(0,l.PL)((0,l.hJ)(s.db,"specials"));e.forEach((e=>{this.offerList.push({id:this.offerList.length,name:e.id,uploaded:!0,creationDate:e.data().creationDate,status:e.data().status,language:e.data().language,data:e.data().data,images:[{main:{name:e.data().data[0].main.name,image:null,url:e.data().data[0].main.url,uploaded:!0},gallery:[],deleted:[]},{main:{name:e.data().data[1].main.name,image:null,url:e.data().data[1].main.url,uploaded:!0},gallery:[],deleted:[]}]})})),this.offerList.forEach((e=>{for(let a=0;a<e.data.length;a++){for(let t=0;t<e.data[a].gallery.length;t++)e.images[a].gallery.push({id:e.images[a].gallery.length,name:e.data[a].gallery[t].name,uploaded:!0,image:null,url:e.data[a].gallery[t].url});"object"===typeof e.data[a].publicationDate&&(e.data[a].publicationDate=new Date(1e3*e.data[a].publicationDate.seconds))}})),this.loading=!1},async deleteOffer(e){if(this.showModal=!1,this.loading=!0,this.offerList[e].uploaded){await(0,l.oe)((0,l.JU)(s.db,"specials",this.offerList[e].name));for(let a=0;a<this.offerList[e].images.length;a++){if(null!==this.offerList[e].images[a].main.name){const t=(0,o.iH)(s.tO,"specials/main/"+this.offerList[e].images[a].main.name);await(0,o.oq)(t).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[a].gallery.length)for(let t=0;t<this.offerList[e].images[a].gallery.length;t++){const i=(0,o.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[a].gallery[t].name);await(0,o.oq)(i).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[a].deleted.length)for(let t=0;t<this.offerList[e].images[a].deleted.length;t++){const i=(0,o.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[a].deleted[t].name);await(0,o.oq)(i).catch((e=>{console.error(e)}))}}}this.offerList.splice(e,1);for(let a=0;a<this.offerList.length;a++)this.offerList[a].id!==a&&(this.offerList[a].id=a);this.loading=!1},async uploadOffer(e){this.loading=!0,this.uploaded=!1;for(let t=0;t<this.offerList[e].images.length;t++){if(null!==this.offerList[e].images[t].main.image)try{const a=(0,o.iH)(s.tO,"specials/main/"+this.offerList[e].images[t].main.name);await(0,o.KV)(a,this.offerList[e].images[t].main.image).then((async()=>{await(0,o.Jt)(a).then((a=>{this.offerList[e].data[t].main.url=a}))}))}catch(a){console.error("Error uploading image: ",a)}if(0!==this.offerList[e].images[t].deleted.length)for(let a=0;a<this.offerList[e].images[t].deleted.length;a++){const i=(0,o.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[t].deleted[a]);await(0,o.oq)(i).then((()=>{this.offerList[e].images[t].deleted.splice(a,1)})).catch((e=>{console.error(e)}))}for(let i=0;i<this.offerList[e].images[t].gallery.length;i++)if(null!==this.offerList[e].images[t].gallery[i].image)try{const a=(0,o.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[t].gallery[i].name);await(0,o.KV)(a,this.offerList[e].images[t].gallery[i].image).then((async()=>{await(0,o.Jt)(a).then((a=>{this.offerList[e].data[t].gallery[i].url=a}))}))}catch(a){console.error("Error uploading image: ",a)}}},async uploadOfferData(e){const a={creationDate:this.offerList[e].creationDate,status:this.offerList[e].status,language:this.offerList[e].language,data:this.offerList[e].data};await(0,l.pl)((0,l.JU)(s.db,"specials",this.offerList[e].name),a).then((()=>{this.loading=!1,this.uploaded=!0}))}}})},7848:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});t(7658);var i=t(3396),s=t(4870),l=t(9242),o=t(4974),n=t(4283),r=t(8819),f=t(2483);const d=e=>((0,i.dD)("data-v-0dd04fbf"),e=e(),(0,i.Cn)(),e),g={class:"specials"},h=d((()=>(0,i._)("h2",null,"List of specials",-1))),m={name:"AdminSpecials"};var c=Object.assign(m,{setup(e){const a=(0,f.tv)(),t=(0,o.V)();function d(){t.offerList.push({id:t.offerList.length,name:"offer-"+Date.now(),creationDate:Date.now(),uploaded:!1,status:!1,language:{selected:"en",index:0},data:[{title:"",publicationDate:"",description:"",videoLink:"",main:{name:null,url:null},gallery:[],seo:{url:"",title:"",keywords:"",description:""}},{title:"",publicationDate:"",description:"",videoLink:"",main:{name:null,url:null},gallery:[],seo:{url:"",title:"",keywords:"",description:""}}],images:[{main:{name:null,image:null,url:null,uploaded:!1},gallery:[],deleted:[]},{main:{name:null,image:null,url:null,uploaded:!1},gallery:[],deleted:[]}]}),a.push({name:"AdminSpecialOffer",params:{id:t.offerList.length-1,parent:0}})}return t.getOffers(),(e,a)=>((0,i.wg)(),(0,i.iD)("div",g,[(0,i.wy)((0,i.Wm)((0,s.SU)(n.Z),null,null,512),[[l.vShow,(0,s.SU)(t).loading]]),h,(0,i.Wm)((0,s.SU)(r.Z),{status:"","route-name":"AdminSpecialOffer",items:(0,s.SU)(t).offerList,"show-modal":(0,s.SU)(t).showModal,onAddItem:d,onToggleModal:a[0]||(a[0]=e=>(0,s.SU)(t).showModal=!0),onCloseModal:a[1]||(a[1]=e=>(0,s.SU)(t).showModal=!1),onDeleteItem:(0,s.SU)(t).deleteOffer},null,8,["items","show-modal","onDeleteItem"])]))}}),u=t(89);const p=(0,u.Z)(c,[["__scopeId","data-v-0dd04fbf"]]);var L=p}}]);
//# sourceMappingURL=admin-specials.eadf12da.js.map