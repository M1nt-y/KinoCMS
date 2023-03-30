"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[936],{89:function(i,t){t.Z=(i,t)=>{const a=i.__vccOpts||i;for(const[e,s]of t)a[e]=s;return a}},2542:function(i,t,a){a.d(t,{h:function(){return l}});var e=a(1020),s=a(36),n=a(7329);const l=(0,e.Q_)({id:"Main",state:()=>({isActive:!1,currentLanguage:{selected:"en",index:0}}),actions:{toggleMenu(){this.isActive=!this.isActive},async getBooking(i){const t=(0,s.JU)(n.db,"booking","event-"+i),a=await(0,s.QT)(t);return a.exists()?a.data():void 0},async updateBooking(i,t){const a=Object.assign({},t);await(0,s.pl)((0,s.JU)(n.db,"booking","event-"+i),a)}}})},685:function(i,t,a){a.d(t,{s:function(){return o}});a(7658);var e=a(1020),s=a(1294),n=a(7329),l=a(36);const o=(0,e.Q_)({id:"Movies",state:()=>({movieList:[],upcomingList:[],loading:!1,showModal:!1,showUpcomingModal:!1,uploaded:!1}),actions:{async getMovies(){this.movieList=[],this.loading=!0;const i=await(0,l.PL)((0,l.hJ)(n.db,"movies"));i.forEach((i=>{this.movieList.push({id:this.movieList.length,name:i.id,uploaded:!0,language:i.data().language,data:i.data().data,images:[{main:{name:i.data().data[0].main.name,image:null,url:i.data().data[0].main.url},gallery:[],deleted:[]},{main:{name:i.data().data[1].main.name,image:null,url:i.data().data[1].main.url},gallery:[],deleted:[]}]})})),this.movieList.forEach((i=>{for(let t=0;t<i.data.length;t++)for(let a=0;a<i.data[t].gallery.length;a++)i.images[t].gallery.push({id:i.images[t].gallery.length,name:i.data[t].gallery[a].name,uploaded:!0,image:null,url:i.data[t].gallery[a].url})})),this.loading=!1},addMovie(i){this.movieList.push(i)},async deleteMovie(i){if(this.showModal=!1,this.loading=!0,this.movieList[i].uploaded){await(0,l.oe)((0,l.JU)(n.db,"movies",this.movieList[i].name));for(let t=0;t<this.movieList[i].images.length;t++){if(null!==this.movieList[i].images[t].main.name){const a=(0,s.iH)(n.tO,"movies/main/"+this.movieList[i].images[t].main.name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}if(0!==this.movieList[i].images[t].gallery.length)for(let a=0;a<this.movieList[i].images[t].gallery.length;a++){const e=(0,s.iH)(n.tO,"movies/gallery/"+this.movieList[i].images[t].gallery[a].name);await(0,s.oq)(e).catch((i=>{console.error(i)}))}if(0!==this.movieList[i].images[t].deleted.length)for(let a=0;a<this.movieList[i].images[t].deleted.length;a++){const e=(0,s.iH)(n.tO,"movies/gallery/"+this.movieList[i].images[t].deleted[a].name);await(0,s.oq)(e).catch((i=>{console.error(i)}))}}}this.movieList.splice(i,1);for(let t=0;t<this.movieList.length;t++)this.movieList[t].id!==t&&(this.movieList[t].id=t);this.loading=!1},async uploadMovie(i){this.loading=!0,this.uploaded=!1;for(let a=0;a<this.movieList[i].images.length;a++){if(null!==this.movieList[i].images[a].main.image)try{const t=(0,s.iH)(n.tO,"movies/main/"+this.movieList[i].images[a].main.name);await(0,s.KV)(t,this.movieList[i].images[a].main.image).then((async()=>{await(0,s.Jt)(t).then((t=>{this.movieList[i].data[a].main.url=t}))}))}catch(t){console.error("Error uploading image: ",t)}if(0!==this.movieList[i].images[a].deleted.length)for(let t=0;t<this.movieList[i].images[a].deleted.length;t++){const e=(0,s.iH)(n.tO,"movies/gallery/"+this.movieList[i].images[a].deleted[t]);await(0,s.oq)(e).then((()=>{this.movieList[i].images[a].deleted.splice(t,1)})).catch((i=>{console.error(i)}))}if(this.movieList[i].images[a].gallery.length)for(let e=0;e<this.movieList[i].images[a].gallery.length;e++)if(null!==this.movieList[i].images[a].gallery[e].image)try{const t=(0,s.iH)(n.tO,"movies/gallery/"+this.movieList[i].images[a].gallery[e].name);await(0,s.KV)(t,this.movieList[i].images[a].gallery[e].image).then((async()=>{await(0,s.Jt)(t).then((t=>{this.movieList[i].data[a].gallery[e].url=t}))}))}catch(t){console.error("Error uploading image: ",t)}}for(let a=0;a<this.movieList[i].data.length;a++)for(let t=0;t<this.movieList[i].data[a].gallery.length;t++)null!==this.movieList[i].data[a].gallery[t].url&&t===this.movieList[i].data[a].gallery.length-1&&a===this.movieList[i].data.length-1&&this.uploadMovieData(i)},async uploadMovieData(i){const t={language:this.movieList[i].language,data:this.movieList[i].data};await(0,l.pl)((0,l.JU)(n.db,"movies",this.movieList[i].name),t).then((()=>{this.loading=!1,this.uploaded=!0}))},async resetMovie(i){if(this.loading=!0,this.movieList[i].uploaded){for(let e=0;e<this.movieList[i].images.length;e++)this.movieList[i].images[e].main.name=null,this.movieList[i].images[e].main.image=null,this.movieList[i].images[e].main.url=null,this.movieList[i].images[e].gallery=[],this.movieList[i].images[e].deleted=[];const t=(0,l.JU)(n.db,"movies",this.movieList[i].name),a=await(0,l.QT)(t);if(a.exists()){this.movieList[i].data=a.data().data;for(let t=0;t<this.movieList[i].data.length;t++){this.movieList[i].images[t].main.name=this.movieList[i].data[t].main.name,this.movieList[i].images[t].main.url=this.movieList[i].data[t].main.url;for(let a=0;a<this.movieList[i].data[t].gallery.length;a++)this.movieList[i].images[t].gallery.push({id:this.movieList[i].data[t].gallery.length,name:this.movieList[i].data[t].gallery[a].name,uploaded:!0,image:null,url:this.movieList[i].data[t].gallery[a].url})}}}this.loading=!1},async getUpcoming(){this.upcomingList=[],this.loading=!0;const i=await(0,l.PL)((0,l.hJ)(n.db,"upcoming"));i.forEach((i=>{this.upcomingList.push({id:this.upcomingList.length,name:i.id,uploaded:!0,language:i.data().language,data:i.data().data,images:[{main:{name:i.data().data[0].main.name,image:null,url:i.data().data[0].main.url},gallery:[],deleted:[]},{main:{name:i.data().data[1].main.name,image:null,url:i.data().data[1].main.url},gallery:[],deleted:[]}]})})),this.upcomingList.forEach((i=>{for(let t=0;t<i.data.length;t++){for(let a=0;a<i.data[t].gallery.length;a++)i.images[t].gallery.push({id:i.images[t].gallery.length,name:i.data[t].gallery[a].name,uploaded:!0,image:null,url:i.data[t].gallery[a].url});"object"===typeof i.data[t].screeningDate&&(i.data[t].screeningDate=new Date(1e3*i.data[t].screeningDate.seconds))}})),this.loading=!1},addUpcoming(i){this.upcomingList.push(i)},async deleteUpcoming(i){if(this.showUpcomingModal=!1,this.loading=!0,this.upcomingList[i].uploaded){await(0,l.oe)((0,l.JU)(n.db,"upcoming",this.upcomingList[i].name));for(let t=0;t<this.upcomingList[i].images.length;t++){if(null!==this.upcomingList[i].images[t].main.name){const a=(0,s.iH)(n.tO,"upcoming/main/"+this.upcomingList[i].images[t].main.name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}if(0!==this.upcomingList[i].images[t].gallery.length)for(let a=0;a<this.upcomingList[i].images[t].gallery.length;a++){const e=(0,s.iH)(n.tO,"upcoming/gallery/"+this.upcomingList[i].images[t].gallery[a].name);await(0,s.oq)(e).catch((i=>{console.error(i)}))}if(0!==this.upcomingList[i].images[t].deleted.length)for(let a=0;a<this.upcomingList[i].images[t].deleted.length;a++){const e=(0,s.iH)(n.tO,"upcoming/gallery/"+this.upcomingList[i].images[t].deleted[a].name);await(0,s.oq)(e).catch((i=>{console.error(i)}))}}}this.upcomingList.splice(i,1);for(let t=0;t<this.upcomingList.length;t++)this.upcomingList[t].id!==t&&(this.upcomingList[t].id=t);this.loading=!1},async uploadUpcoming(i){this.loading=!0,this.uploaded=!1;for(let a=0;a<this.upcomingList[i].images.length;a++){if(null!==this.upcomingList[i].images[a].main.image)try{const t=(0,s.iH)(n.tO,"upcoming/main/"+this.upcomingList[i].images[a].main.name);await(0,s.KV)(t,this.upcomingList[i].images[a].main.image).then((async()=>{await(0,s.Jt)(t).then((t=>{this.upcomingList[i].data[a].main.url=t}))}))}catch(t){console.error("Error uploading image: ",t)}if(0!==this.upcomingList[i].images[a].deleted.length)for(let t=0;t<this.upcomingList[i].images[a].deleted.length;t++){const e=(0,s.iH)(n.tO,"upcoming/gallery/"+this.upcomingList[i].images[a].deleted[t]);await(0,s.oq)(e).then((()=>{this.upcomingList[i].images[a].deleted.splice(t,1)})).catch((i=>{console.error(i)}))}for(let e=0;e<this.upcomingList[i].images[a].gallery.length;e++)if(null!==this.upcomingList[i].images[a].gallery[e].image)try{const t=(0,s.iH)(n.tO,"upcoming/gallery/"+this.upcomingList[i].images[a].gallery[e].name);await(0,s.KV)(t,this.upcomingList[i].images[a].gallery[e].image).then((async()=>{await(0,s.Jt)(t).then((t=>{this.upcomingList[i].data[a].gallery[e].url=t}))}))}catch(t){console.error("Error uploading image: ",t)}}for(let a=0;a<this.upcomingList[i].data.length;a++)for(let t=0;t<this.upcomingList[i].data[a].gallery.length;t++)null!==this.upcomingList[i].data[a].gallery[t].url&&t===this.upcomingList[i].data[a].gallery.length-1&&a===this.upcomingList[i].data.length-1&&this.uploadUpcomingData(i)},async uploadUpcomingData(i){const t={language:this.upcomingList[i].language,data:this.upcomingList[i].data};await(0,l.pl)((0,l.JU)(n.db,"upcoming",this.upcomingList[i].name),t).then((()=>{this.loading=!1,this.uploaded=!0}))},async resetUpcoming(i){if(this.loading=!0,this.upcomingList[i].uploaded){for(let e=0;e<this.upcomingList[i].images.length;e++)this.upcomingList[i].images[e].main.name=null,this.upcomingList[i].images[e].main.image=null,this.upcomingList[i].images[e].main.url=null,this.upcomingList[i].images[e].gallery=[],this.upcomingList[i].images[e].deleted=[];const t=(0,l.JU)(n.db,"upcoming",this.upcomingList[i].name),a=await(0,l.QT)(t);if(a.exists()){this.upcomingList[i].data=a.data().data;for(let t=0;t<this.upcomingList[i].data.length;t++){"object"===typeof this.upcomingList[i].data[t].date&&(this.upcomingList[i].data[t].date=new Date(1e3*this.upcomingList[i].data[t].date.seconds)),this.upcomingList[i].images[t].main.name=this.upcomingList[i].data[t].main.name,this.upcomingList[i].images[t].main.url=this.upcomingList[i].data[t].main.url;for(let a=0;a<this.upcomingList[i].data[t].gallery.length;a++)this.upcomingList[i].images[t].gallery.push({id:this.upcomingList[i].data[t].gallery.length,name:this.upcomingList[i].data[t].gallery[a].name,uploaded:!0,image:null,url:this.upcomingList[i].data[t].gallery[a].url})}}}this.loading=!1}}})},7397:function(i,t,a){a.r(t),a.d(t,{default:function(){return y}});var e=a(3396),s=a(4870),n=a(7139),l=a(685),o=a(2542);const g={class:"page"},m={class:"container"},h={class:"page__content"},d={key:0,class:"movie__types"},c=["src"],r={class:"movie__title"},u={name:"MoviesPage"};var p=Object.assign(u,{setup(i){const t=(0,o.h)(),a=(0,l.s)();function u(i){return"movies/"+i.replace(/[^a-zA-Z0-9 ]/g,"").toLowerCase().replace(/\s/g,"-")}return a.getMovies(),(i,l)=>{const o=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",g,[(0,e._)("div",m,[(0,e._)("div",h,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,s.SU)(a).movieList,(i=>((0,e.wg)(),(0,e.j4)(o,{class:"movie",key:i.id,to:u(i.data[0].title)},{default:(0,e.w5)((()=>[i.data[(0,s.SU)(t).currentLanguage.index].type.length?((0,e.wg)(),(0,e.iD)("div",d,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.data[(0,s.SU)(t).currentLanguage.index].type,((i,t)=>((0,e.wg)(),(0,e.iD)("div",{class:"movie__type",key:t},[(0,e._)("p",null,(0,n.zw)(i),1)])))),128))])):(0,e.kq)("",!0),(0,e._)("img",{class:"movie__img",src:i.data[(0,s.SU)(t).currentLanguage.index].main.url,alt:""},null,8,c),(0,e._)("p",r,(0,n.zw)(i.data[(0,s.SU)(t).currentLanguage.index].title),1)])),_:2},1032,["to"])))),128))])])])}}}),L=a(89);const v=(0,L.Z)(p,[["__scopeId","data-v-2ded42a6"]]);var y=v}}]);
//# sourceMappingURL=movies.6df90f9d.js.map