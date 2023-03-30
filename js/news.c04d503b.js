"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[697],{89:function(e,t){t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a}},2542:function(e,t,a){a.d(t,{h:function(){return l}});var s=a(1020),i=a(36),n=a(7329);const l=(0,s.Q_)({id:"Main",state:()=>({isActive:!1,currentLanguage:{selected:"en",index:0}}),actions:{toggleMenu(){this.isActive=!this.isActive},async getBooking(e){const t=(0,i.JU)(n.db,"booking","event-"+e),a=await(0,i.QT)(t);return a.exists()?a.data():void 0},async updateBooking(e,t){const a=Object.assign({},t);await(0,i.pl)((0,i.JU)(n.db,"booking","event-"+e),a)}}})},1014:function(e,t,a){a.d(t,{m:function(){return o}});a(7658);var s=a(1020),i=a(1294),n=a(7329),l=a(36);const o=(0,s.Q_)({id:"News",state:()=>({loading:!1,newsList:[],showModal:!1,uploaded:!1}),actions:{async getNews(){this.loading=!0,this.newsList=[];const e=await(0,l.PL)((0,l.hJ)(n.db,"news"));e.forEach((e=>{this.newsList.push({id:this.newsList.length,name:e.id,uploaded:!0,creationDate:e.data().creationDate,status:e.data().status,language:e.data().language,data:e.data().data,images:[{main:{name:e.data().data[0].main.name,image:null,url:e.data().data[0].main.url,uploaded:!0},gallery:[],deleted:[]},{main:{name:e.data().data[1].main.name,image:null,url:e.data().data[1].main.url,uploaded:!0},gallery:[],deleted:[]}]})})),this.newsList.forEach((e=>{for(let t=0;t<e.data.length;t++){for(let a=0;a<e.data[t].gallery.length;a++)e.images[t].gallery.push({id:e.images[t].gallery.length,name:e.data[t].gallery[a].name,uploaded:!0,image:null,url:e.data[t].gallery[a].url});"object"===typeof e.data[t].publicationDate&&(e.data[t].publicationDate=new Date(1e3*e.data[t].publicationDate.seconds))}})),this.loading=!1},async deleteNews(e){if(this.showModal=!1,this.loading=!0,this.newsList[e].uploaded){await(0,l.oe)((0,l.JU)(n.db,"news",this.newsList[e].name));for(let t=0;t<this.newsList[e].images.length;t++){if(null!==this.newsList[e].images[t].main.name){const a=(0,i.iH)(n.tO,"news/main/"+this.newsList[e].images[t].main.name);await(0,i.oq)(a).catch((e=>{console.error(e)}))}if(0!==this.newsList[e].images[t].gallery.length)for(let a=0;a<this.newsList[e].images[t].gallery.length;a++){const s=(0,i.iH)(n.tO,"news/gallery/"+this.newsList[e].images[t].gallery[a].name);await(0,i.oq)(s).catch((e=>{console.error(e)}))}if(0!==this.newsList[e].images[t].deleted.length)for(let a=0;a<this.newsList[e].images[t].deleted.length;a++){const s=(0,i.iH)(n.tO,"news/gallery/"+this.newsList[e].images[t].deleted[a].name);await(0,i.oq)(s).catch((e=>{console.error(e)}))}}}this.newsList.splice(e,1);for(let t=0;t<this.newsList.length;t++)this.newsList[t].id!==t&&(this.newsList[t].id=t);this.loading=!1},async uploadNews(e){this.loading=!0,this.uploaded=!1;for(let a=0;a<this.newsList[e].images.length;a++){if(null!==this.newsList[e].images[a].main.image)try{const t=(0,i.iH)(n.tO,"news/main/"+this.newsList[e].images[a].main.name);await(0,i.KV)(t,this.newsList[e].images[a].main.image).then((async()=>{await(0,i.Jt)(t).then((t=>{this.newsList[e].data[a].main.url=t}))}))}catch(t){console.error("Error uploading image: ",t)}if(0!==this.newsList[e].images[a].deleted.length)for(let t=0;t<this.newsList[e].images[a].deleted.length;t++){const s=(0,i.iH)(n.tO,"news/gallery/"+this.newsList[e].images[a].deleted[t]);await(0,i.oq)(s).then((()=>{this.newsList[e].images[a].deleted.splice(t,1)})).catch((e=>{console.error(e)}))}for(let s=0;s<this.newsList[e].images[a].gallery.length;s++)if(null!==this.newsList[e].images[a].gallery[s].image)try{const t=(0,i.iH)(n.tO,"news/gallery/"+this.newsList[e].images[a].gallery[s].name);await(0,i.KV)(t,this.newsList[e].images[a].gallery[s].image).then((async()=>{await(0,i.Jt)(t).then((t=>{this.movieList[e].data[a].gallery[s].url=t}))}))}catch(t){console.error("Error uploading image: ",t)}}for(let a=0;a<this.newsList[e].data.length;a++)for(let t=0;t<this.newsList[e].data[a].gallery.length;t++)null!==this.newsList[e].data[a].gallery[t].url&&t===this.newsList[e].data[a].gallery.length-1&&a===this.newsList[e].data.length-1&&this.uploadNewsData(e)},async uploadNewsData(e){const t={creationDate:this.newsList[e].creationDate,status:this.newsList[e].status,language:this.newsList[e].language,data:this.newsList[e].data};await(0,l.pl)((0,l.JU)(n.db,"news",this.newsList[e].name),t).then((()=>{this.loading=!1,this.uploaded=!0}))}}})},8981:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});a(7658);var s=a(3396),i=a(4870),n=a(7139),l=a(2542),o=a(1014);const g={class:"page"},r={class:"container"},d={class:"news"},c=["src"],h={class:"special-news__content"},u={name:"NewsPage"};var w=Object.assign(u,{setup(e){const t=(0,l.h)(),a=(0,o.m)();a.getNews();const u=(0,s.Fl)((()=>{let e=new Date,s=[];return a.newsList.forEach((a=>{a.data[t.currentLanguage.index].publicationDate<e&&a.status&&s.push(a)})),s}));function w(e){return"news/"+e.replace("news-","")}function m(e){let t=e.getDate(),a=e.getMonth()+1,s=e.getFullYear();return t<10&&(t="0"+t),a<10&&(a="0"+a),t+"."+a+"."+s}return(e,a)=>{const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",r,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(u),(e=>((0,s.wg)(),(0,s.j4)(l,{class:"special-news",key:e.id,to:w(e.name)},{default:(0,s.w5)((()=>[(0,s._)("img",{class:"special-news__img",src:e.data[(0,i.SU)(t).currentLanguage.index].main.url,alt:""},null,8,c),(0,s._)("div",h,[(0,s._)("p",null,(0,n.zw)(e.data[(0,i.SU)(t).currentLanguage.index].title),1),(0,s._)("p",null,(0,n.zw)(m(e.data[(0,i.SU)(t).currentLanguage.index].publicationDate)),1)])])),_:2},1032,["to"])))),128))])])])}}}),m=a(89);const L=(0,m.Z)(w,[["__scopeId","data-v-103905fe"]]);var p=L}}]);
//# sourceMappingURL=news.c04d503b.js.map