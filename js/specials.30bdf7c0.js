"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[830],{89:function(e,t){t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[i,s]of t)a[i]=s;return a}},2542:function(e,t,a){a.d(t,{h:function(){return l}});var i=a(1020),s=a(36),n=a(7329);const l=(0,i.Q_)({id:"Main",state:()=>({isActive:!1,currentLanguage:{selected:"en",index:0}}),actions:{toggleMenu(){this.isActive=!this.isActive},async getBooking(e){const t=(0,s.JU)(n.db,"booking","event-"+e),a=await(0,s.QT)(t);return a.exists()?a.data():void 0},async updateBooking(e,t){const a=Object.assign({},t);await(0,s.pl)((0,s.JU)(n.db,"booking","event-"+e),a)}}})},4974:function(e,t,a){a.d(t,{V:function(){return o}});a(7658);var i=a(1020),s=a(7329),n=a(36),l=a(1294);const o=(0,i.Q_)({id:"Specials",state:()=>({loading:!1,offerList:[],showModal:!1,uploaded:!1}),actions:{async getOffers(){this.loading=!0,this.offerList=[];const e=await(0,n.PL)((0,n.hJ)(s.db,"specials"));e.forEach((e=>{this.offerList.push({id:this.offerList.length,name:e.id,uploaded:!0,creationDate:e.data().creationDate,status:e.data().status,language:e.data().language,data:e.data().data,images:[{main:{name:e.data().data[0].main.name,image:null,url:e.data().data[0].main.url,uploaded:!0},gallery:[],deleted:[]},{main:{name:e.data().data[1].main.name,image:null,url:e.data().data[1].main.url,uploaded:!0},gallery:[],deleted:[]}]})})),this.offerList.forEach((e=>{for(let t=0;t<e.data.length;t++){for(let a=0;a<e.data[t].gallery.length;a++)e.images[t].gallery.push({id:e.images[t].gallery.length,name:e.data[t].gallery[a].name,uploaded:!0,image:null,url:e.data[t].gallery[a].url});"object"===typeof e.data[t].publicationDate&&(e.data[t].publicationDate=new Date(1e3*e.data[t].publicationDate.seconds))}})),this.loading=!1},async deleteOffer(e){if(this.showModal=!1,this.loading=!0,this.offerList[e].uploaded){await(0,n.oe)((0,n.JU)(s.db,"specials",this.offerList[e].name));for(let t=0;t<this.offerList[e].images.length;t++){if(null!==this.offerList[e].images[t].main.name){const a=(0,l.iH)(s.tO,"specials/main/"+this.offerList[e].images[t].main.name);await(0,l.oq)(a).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[t].gallery.length)for(let a=0;a<this.offerList[e].images[t].gallery.length;a++){const i=(0,l.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[t].gallery[a].name);await(0,l.oq)(i).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[t].deleted.length)for(let a=0;a<this.offerList[e].images[t].deleted.length;a++){const i=(0,l.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[t].deleted[a].name);await(0,l.oq)(i).catch((e=>{console.error(e)}))}}}this.offerList.splice(e,1);for(let t=0;t<this.offerList.length;t++)this.offerList[t].id!==t&&(this.offerList[t].id=t);this.loading=!1},async uploadOffer(e){this.loading=!0,this.uploaded=!1;for(let a=0;a<this.offerList[e].images.length;a++){if(null!==this.offerList[e].images[a].main.image)try{const t=(0,l.iH)(s.tO,"specials/main/"+this.offerList[e].images[a].main.name);await(0,l.KV)(t,this.offerList[e].images[a].main.image).then((async()=>{await(0,l.Jt)(t).then((t=>{this.offerList[e].data[a].main.url=t}))}))}catch(t){console.error("Error uploading image: ",t)}if(0!==this.offerList[e].images[a].deleted.length)for(let t=0;t<this.offerList[e].images[a].deleted.length;t++){const i=(0,l.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[a].deleted[t]);await(0,l.oq)(i).then((()=>{this.offerList[e].images[a].deleted.splice(t,1)})).catch((e=>{console.error(e)}))}for(let i=0;i<this.offerList[e].images[a].gallery.length;i++)if(null!==this.offerList[e].images[a].gallery[i].image)try{const t=(0,l.iH)(s.tO,"specials/gallery/"+this.offerList[e].images[a].gallery[i].name);await(0,l.KV)(t,this.offerList[e].images[a].gallery[i].image).then((async()=>{await(0,l.Jt)(t).then((t=>{this.offerList[e].data[a].gallery[i].url=t}))}))}catch(t){console.error("Error uploading image: ",t)}}},async uploadOfferData(e){const t={creationDate:this.offerList[e].creationDate,status:this.offerList[e].status,language:this.offerList[e].language,data:this.offerList[e].data};await(0,n.pl)((0,n.JU)(s.db,"specials",this.offerList[e].name),t).then((()=>{this.loading=!1,this.uploaded=!0}))}}})},4621:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});a(7658);var i=a(3396),s=a(4870),n=a(7139),l=a(2542),o=a(4974);const r={class:"page"},f={class:"container"},c={class:"specials"},g=["src"],d={class:"special-offer__content"},h={name:"SpecialsPage"};var u=Object.assign(h,{setup(e){const t=(0,l.h)(),a=(0,o.V)();a.getOffers();const h=(0,i.Fl)((()=>{let e=new Date,i=[];return a.offerList.forEach((a=>{a.data[t.currentLanguage.index].publicationDate<e&&a.status&&i.push(a)})),i}));function u(e){return"specials/"+e.replace("offer-","")}function m(e){let t=e.getDate(),a=e.getMonth()+1,i=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),t+"."+a+"."+i}return(e,a)=>{const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",f,[(0,i._)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,s.SU)(h),(e=>((0,i.wg)(),(0,i.j4)(l,{class:"special-offer",key:e.id,to:u(e.name)},{default:(0,i.w5)((()=>[(0,i._)("img",{class:"special-offer__img",src:e.data[(0,s.SU)(t).currentLanguage.index].main.url,alt:""},null,8,g),(0,i._)("div",d,[(0,i._)("p",null,(0,n.zw)(e.data[(0,s.SU)(t).currentLanguage.index].title),1),(0,i._)("p",null,(0,n.zw)(m(e.data[(0,s.SU)(t).currentLanguage.index].publicationDate)),1)])])),_:2},1032,["to"])))),128))])])])}}}),m=a(89);const p=(0,m.Z)(u,[["__scopeId","data-v-8225ebf0"]]);var L=p}}]);
//# sourceMappingURL=specials.30bdf7c0.js.map