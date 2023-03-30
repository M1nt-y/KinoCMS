"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[739],{89:function(e,a){a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[i,l]of a)t[i]=l;return t}},4974:function(e,a,t){t.d(a,{V:function(){return r}});t(7658);var i=t(1020),l=t(7329),s=t(36),n=t(1294);const r=(0,i.Q_)({id:"Specials",state:()=>({loading:!1,offerList:[],showModal:!1,uploaded:!1}),actions:{async getOffers(){this.loading=!0,this.offerList=[];const e=await(0,s.PL)((0,s.hJ)(l.db,"specials"));e.forEach((e=>{this.offerList.push({id:this.offerList.length,name:e.id,uploaded:!0,creationDate:e.data().creationDate,status:e.data().status,language:e.data().language,data:e.data().data,images:[{main:{name:e.data().data[0].main.name,image:null,url:e.data().data[0].main.url,uploaded:!0},gallery:[],deleted:[]},{main:{name:e.data().data[1].main.name,image:null,url:e.data().data[1].main.url,uploaded:!0},gallery:[],deleted:[]}]})})),this.offerList.forEach((e=>{for(let a=0;a<e.data.length;a++){for(let t=0;t<e.data[a].gallery.length;t++)e.images[a].gallery.push({id:e.images[a].gallery.length,name:e.data[a].gallery[t].name,uploaded:!0,image:null,url:e.data[a].gallery[t].url});"object"===typeof e.data[a].publicationDate&&(e.data[a].publicationDate=new Date(1e3*e.data[a].publicationDate.seconds))}})),this.loading=!1},async deleteOffer(e){if(this.showModal=!1,this.loading=!0,this.offerList[e].uploaded){await(0,s.oe)((0,s.JU)(l.db,"specials",this.offerList[e].name));for(let a=0;a<this.offerList[e].images.length;a++){if(null!==this.offerList[e].images[a].main.name){const t=(0,n.iH)(l.tO,"specials/main/"+this.offerList[e].images[a].main.name);await(0,n.oq)(t).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[a].gallery.length)for(let t=0;t<this.offerList[e].images[a].gallery.length;t++){const i=(0,n.iH)(l.tO,"specials/gallery/"+this.offerList[e].images[a].gallery[t].name);await(0,n.oq)(i).catch((e=>{console.error(e)}))}if(0!==this.offerList[e].images[a].deleted.length)for(let t=0;t<this.offerList[e].images[a].deleted.length;t++){const i=(0,n.iH)(l.tO,"specials/gallery/"+this.offerList[e].images[a].deleted[t].name);await(0,n.oq)(i).catch((e=>{console.error(e)}))}}}this.offerList.splice(e,1);for(let a=0;a<this.offerList.length;a++)this.offerList[a].id!==a&&(this.offerList[a].id=a);this.loading=!1},async uploadOffer(e){this.loading=!0,this.uploaded=!1;for(let t=0;t<this.offerList[e].images.length;t++){if(null!==this.offerList[e].images[t].main.image)try{const a=(0,n.iH)(l.tO,"specials/main/"+this.offerList[e].images[t].main.name);await(0,n.KV)(a,this.offerList[e].images[t].main.image).then((async()=>{await(0,n.Jt)(a).then((a=>{this.offerList[e].data[t].main.url=a}))}))}catch(a){console.error("Error uploading image: ",a)}if(0!==this.offerList[e].images[t].deleted.length)for(let a=0;a<this.offerList[e].images[t].deleted.length;a++){const i=(0,n.iH)(l.tO,"specials/gallery/"+this.offerList[e].images[t].deleted[a]);await(0,n.oq)(i).then((()=>{this.offerList[e].images[t].deleted.splice(a,1)})).catch((e=>{console.error(e)}))}for(let i=0;i<this.offerList[e].images[t].gallery.length;i++)if(null!==this.offerList[e].images[t].gallery[i].image)try{const a=(0,n.iH)(l.tO,"specials/gallery/"+this.offerList[e].images[t].gallery[i].name);await(0,n.KV)(a,this.offerList[e].images[t].gallery[i].image).then((async()=>{await(0,n.Jt)(a).then((a=>{this.offerList[e].data[t].gallery[i].url=a}))}))}catch(a){console.error("Error uploading image: ",a)}}},async uploadOfferData(e){const a={creationDate:this.offerList[e].creationDate,status:this.offerList[e].status,language:this.offerList[e].language,data:this.offerList[e].data};await(0,s.pl)((0,s.JU)(l.db,"specials",this.offerList[e].name),a).then((()=>{this.loading=!1,this.uploaded=!0}))}}})},144:function(e,a,t){t.d(a,{Z:function(){return m}});var i=t(3396),l=t(7139),s=t(4870),n=t(8040),r=t(9391);const o={class:"gallery"},f={class:"text-center"},d=["src"],g={name:"GallerySwiper"};var c=Object.assign(g,{props:["gallery"],setup(e){const a=(0,s.iH)([r.tl,r.pt,r.W_]);return(t,r)=>((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("h2",f,(0,l.zw)(t.$t("gallery")),1),(0,i.Wm)((0,s.SU)(n.tq),{"grab-cursor":"","slides-per-view":1,modules:a.value,pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1},navigation:!0},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.gallery,((e,a)=>((0,i.wg)(),(0,i.j4)((0,s.SU)(n.o5),{key:a},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.url,alt:""},null,8,d)])),_:2},1024)))),128))])),_:1},8,["modules"])]))}}),u=t(89);const h=(0,u.Z)(c,[["__scopeId","data-v-3c84ac43"]]);var m=h},3104:function(e,a,t){t.r(a),t.d(a,{default:function(){return O}});var i=t(3396),l=t(4870),s=t(7139),n=t(2542),r=t(4974),o=t(144);const f=e=>((0,i.dD)("data-v-6f71314e"),e=e(),(0,i.Cn)(),e),d={class:"page"},g={key:0,class:"container"},c={class:"offer"},u=["src"],h=f((()=>(0,i._)("div",{class:"page__ad-horizontal"},null,-1))),m={key:1,class:"page__notfound"},p={class:"container"},L=f((()=>(0,i._)("h2",null,"Special offer not found",-1))),y={name:"SpecialOfferPage"};var w=Object.assign(y,{props:["id"],setup(e){const a=e,t=(0,n.h)(),f=(0,r.V)();f.getOffers();const y=(0,i.Fl)((()=>{let e=null;return f.offerList.forEach(((t,i)=>{t.name.includes(a.id)&&(e=i)})),e})),w=(0,i.Fl)((()=>{let e=null;return null!==y.value&&(e=f.offerList[y.value].data[t.currentLanguage.index].title),e})),v=(0,i.Fl)((()=>{let e=null;return null!==y.value&&(e=f.offerList[y.value].data[t.currentLanguage.index].main.url),e})),_=(0,i.Fl)((()=>{let e=null;return null!==y.value&&(e=f.offerList[y.value].data[t.currentLanguage.index].description),e})),O=(0,i.Fl)((()=>{let e=[];return null!==y.value&&(e=f.offerList[y.value].data[t.currentLanguage.index].gallery),e}));return(e,a)=>{const t=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",d,[null!==(0,l.SU)(y)?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("h1",null,(0,s.zw)((0,l.SU)(w)),1),(0,i._)("div",c,[(0,i._)("img",{class:"offer__img",src:(0,l.SU)(v),alt:""},null,8,u),(0,i._)("p",null,(0,s.zw)((0,l.SU)(_)),1)]),(0,l.SU)(O).length>0?((0,i.wg)(),(0,i.j4)((0,l.SU)(o.Z),{key:0,gallery:(0,l.SU)(O)},null,8,["gallery"])):(0,i.kq)("",!0),h])):((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",p,[L,(0,i.Wm)(t,{to:"/specials"},{default:(0,i.w5)((()=>[(0,i.Uk)("Go back")])),_:1})])]))])}}}),v=t(89);const _=(0,v.Z)(w,[["__scopeId","data-v-6f71314e"]]);var O=_}}]);
//# sourceMappingURL=special-offer.e441701a.js.map