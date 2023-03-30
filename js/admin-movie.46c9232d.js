"use strict";(self["webpackChunkkino_cms"]=self["webpackChunkkino_cms"]||[]).push([[591],{89:function(i,e){e.Z=(i,e)=>{const t=i.__vccOpts||i;for(const[a,s]of e)t[a]=s;return t}},685:function(i,e,t){t.d(e,{s:function(){return o}});t(7658);var a=t(1020),s=t(1294),l=t(7329),n=t(36);const o=(0,a.Q_)({id:"Movies",state:()=>({movieList:[],upcomingList:[],loading:!1,showModal:!1,showUpcomingModal:!1,uploaded:!1}),actions:{async getMovies(){this.movieList=[],this.loading=!0;const i=await(0,n.PL)((0,n.hJ)(l.db,"movies"));i.forEach((i=>{this.movieList.push({id:this.movieList.length,name:i.id,uploaded:!0,language:i.data().language,data:i.data().data,images:[{main:{name:i.data().data[0].main.name,image:null,url:i.data().data[0].main.url},gallery:[],deleted:[]},{main:{name:i.data().data[1].main.name,image:null,url:i.data().data[1].main.url},gallery:[],deleted:[]}]})})),this.movieList.forEach((i=>{for(let e=0;e<i.data.length;e++)for(let t=0;t<i.data[e].gallery.length;t++)i.images[e].gallery.push({id:i.images[e].gallery.length,name:i.data[e].gallery[t].name,uploaded:!0,image:null,url:i.data[e].gallery[t].url})})),this.loading=!1},addMovie(i){this.movieList.push(i)},async deleteMovie(i){if(this.showModal=!1,this.loading=!0,this.movieList[i].uploaded){await(0,n.oe)((0,n.JU)(l.db,"movies",this.movieList[i].name));for(let e=0;e<this.movieList[i].images.length;e++){if(null!==this.movieList[i].images[e].main.name){const t=(0,s.iH)(l.tO,"movies/main/"+this.movieList[i].images[e].main.name);await(0,s.oq)(t).catch((i=>{console.error(i)}))}if(0!==this.movieList[i].images[e].gallery.length)for(let t=0;t<this.movieList[i].images[e].gallery.length;t++){const a=(0,s.iH)(l.tO,"movies/gallery/"+this.movieList[i].images[e].gallery[t].name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}if(0!==this.movieList[i].images[e].deleted.length)for(let t=0;t<this.movieList[i].images[e].deleted.length;t++){const a=(0,s.iH)(l.tO,"movies/gallery/"+this.movieList[i].images[e].deleted[t].name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}}}this.movieList.splice(i,1);for(let e=0;e<this.movieList.length;e++)this.movieList[e].id!==e&&(this.movieList[e].id=e);this.loading=!1},async uploadMovie(i){this.loading=!0,this.uploaded=!1;for(let t=0;t<this.movieList[i].images.length;t++){if(null!==this.movieList[i].images[t].main.image)try{const e=(0,s.iH)(l.tO,"movies/main/"+this.movieList[i].images[t].main.name);await(0,s.KV)(e,this.movieList[i].images[t].main.image).then((async()=>{await(0,s.Jt)(e).then((e=>{this.movieList[i].data[t].main.url=e}))}))}catch(e){console.error("Error uploading image: ",e)}if(0!==this.movieList[i].images[t].deleted.length)for(let e=0;e<this.movieList[i].images[t].deleted.length;e++){const a=(0,s.iH)(l.tO,"movies/gallery/"+this.movieList[i].images[t].deleted[e]);await(0,s.oq)(a).then((()=>{this.movieList[i].images[t].deleted.splice(e,1)})).catch((i=>{console.error(i)}))}if(this.movieList[i].images[t].gallery.length)for(let a=0;a<this.movieList[i].images[t].gallery.length;a++)if(null!==this.movieList[i].images[t].gallery[a].image)try{const e=(0,s.iH)(l.tO,"movies/gallery/"+this.movieList[i].images[t].gallery[a].name);await(0,s.KV)(e,this.movieList[i].images[t].gallery[a].image).then((async()=>{await(0,s.Jt)(e).then((e=>{this.movieList[i].data[t].gallery[a].url=e}))}))}catch(e){console.error("Error uploading image: ",e)}}for(let t=0;t<this.movieList[i].data.length;t++)for(let e=0;e<this.movieList[i].data[t].gallery.length;e++)null!==this.movieList[i].data[t].gallery[e].url&&e===this.movieList[i].data[t].gallery.length-1&&t===this.movieList[i].data.length-1&&this.uploadMovieData(i)},async uploadMovieData(i){const e={language:this.movieList[i].language,data:this.movieList[i].data};await(0,n.pl)((0,n.JU)(l.db,"movies",this.movieList[i].name),e).then((()=>{this.loading=!1,this.uploaded=!0}))},async resetMovie(i){if(this.loading=!0,this.movieList[i].uploaded){for(let a=0;a<this.movieList[i].images.length;a++)this.movieList[i].images[a].main.name=null,this.movieList[i].images[a].main.image=null,this.movieList[i].images[a].main.url=null,this.movieList[i].images[a].gallery=[],this.movieList[i].images[a].deleted=[];const e=(0,n.JU)(l.db,"movies",this.movieList[i].name),t=await(0,n.QT)(e);if(t.exists()){this.movieList[i].data=t.data().data;for(let e=0;e<this.movieList[i].data.length;e++){this.movieList[i].images[e].main.name=this.movieList[i].data[e].main.name,this.movieList[i].images[e].main.url=this.movieList[i].data[e].main.url;for(let t=0;t<this.movieList[i].data[e].gallery.length;t++)this.movieList[i].images[e].gallery.push({id:this.movieList[i].data[e].gallery.length,name:this.movieList[i].data[e].gallery[t].name,uploaded:!0,image:null,url:this.movieList[i].data[e].gallery[t].url})}}}this.loading=!1},async getUpcoming(){this.upcomingList=[],this.loading=!0;const i=await(0,n.PL)((0,n.hJ)(l.db,"upcoming"));i.forEach((i=>{this.upcomingList.push({id:this.upcomingList.length,name:i.id,uploaded:!0,language:i.data().language,data:i.data().data,images:[{main:{name:i.data().data[0].main.name,image:null,url:i.data().data[0].main.url},gallery:[],deleted:[]},{main:{name:i.data().data[1].main.name,image:null,url:i.data().data[1].main.url},gallery:[],deleted:[]}]})})),this.upcomingList.forEach((i=>{for(let e=0;e<i.data.length;e++){for(let t=0;t<i.data[e].gallery.length;t++)i.images[e].gallery.push({id:i.images[e].gallery.length,name:i.data[e].gallery[t].name,uploaded:!0,image:null,url:i.data[e].gallery[t].url});"object"===typeof i.data[e].screeningDate&&(i.data[e].screeningDate=new Date(1e3*i.data[e].screeningDate.seconds))}})),this.loading=!1},addUpcoming(i){this.upcomingList.push(i)},async deleteUpcoming(i){if(this.showUpcomingModal=!1,this.loading=!0,this.upcomingList[i].uploaded){await(0,n.oe)((0,n.JU)(l.db,"upcoming",this.upcomingList[i].name));for(let e=0;e<this.upcomingList[i].images.length;e++){if(null!==this.upcomingList[i].images[e].main.name){const t=(0,s.iH)(l.tO,"upcoming/main/"+this.upcomingList[i].images[e].main.name);await(0,s.oq)(t).catch((i=>{console.error(i)}))}if(0!==this.upcomingList[i].images[e].gallery.length)for(let t=0;t<this.upcomingList[i].images[e].gallery.length;t++){const a=(0,s.iH)(l.tO,"upcoming/gallery/"+this.upcomingList[i].images[e].gallery[t].name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}if(0!==this.upcomingList[i].images[e].deleted.length)for(let t=0;t<this.upcomingList[i].images[e].deleted.length;t++){const a=(0,s.iH)(l.tO,"upcoming/gallery/"+this.upcomingList[i].images[e].deleted[t].name);await(0,s.oq)(a).catch((i=>{console.error(i)}))}}}this.upcomingList.splice(i,1);for(let e=0;e<this.upcomingList.length;e++)this.upcomingList[e].id!==e&&(this.upcomingList[e].id=e);this.loading=!1},async uploadUpcoming(i){this.loading=!0,this.uploaded=!1;for(let t=0;t<this.upcomingList[i].images.length;t++){if(null!==this.upcomingList[i].images[t].main.image)try{const e=(0,s.iH)(l.tO,"upcoming/main/"+this.upcomingList[i].images[t].main.name);await(0,s.KV)(e,this.upcomingList[i].images[t].main.image).then((async()=>{await(0,s.Jt)(e).then((e=>{this.upcomingList[i].data[t].main.url=e}))}))}catch(e){console.error("Error uploading image: ",e)}if(0!==this.upcomingList[i].images[t].deleted.length)for(let e=0;e<this.upcomingList[i].images[t].deleted.length;e++){const a=(0,s.iH)(l.tO,"upcoming/gallery/"+this.upcomingList[i].images[t].deleted[e]);await(0,s.oq)(a).then((()=>{this.upcomingList[i].images[t].deleted.splice(e,1)})).catch((i=>{console.error(i)}))}for(let a=0;a<this.upcomingList[i].images[t].gallery.length;a++)if(null!==this.upcomingList[i].images[t].gallery[a].image)try{const e=(0,s.iH)(l.tO,"upcoming/gallery/"+this.upcomingList[i].images[t].gallery[a].name);await(0,s.KV)(e,this.upcomingList[i].images[t].gallery[a].image).then((async()=>{await(0,s.Jt)(e).then((e=>{this.upcomingList[i].data[t].gallery[a].url=e}))}))}catch(e){console.error("Error uploading image: ",e)}}for(let t=0;t<this.upcomingList[i].data.length;t++)for(let e=0;e<this.upcomingList[i].data[t].gallery.length;e++)null!==this.upcomingList[i].data[t].gallery[e].url&&e===this.upcomingList[i].data[t].gallery.length-1&&t===this.upcomingList[i].data.length-1&&this.uploadUpcomingData(i)},async uploadUpcomingData(i){const e={language:this.upcomingList[i].language,data:this.upcomingList[i].data};await(0,n.pl)((0,n.JU)(l.db,"upcoming",this.upcomingList[i].name),e).then((()=>{this.loading=!1,this.uploaded=!0}))},async resetUpcoming(i){if(this.loading=!0,this.upcomingList[i].uploaded){for(let a=0;a<this.upcomingList[i].images.length;a++)this.upcomingList[i].images[a].main.name=null,this.upcomingList[i].images[a].main.image=null,this.upcomingList[i].images[a].main.url=null,this.upcomingList[i].images[a].gallery=[],this.upcomingList[i].images[a].deleted=[];const e=(0,n.JU)(l.db,"upcoming",this.upcomingList[i].name),t=await(0,n.QT)(e);if(t.exists()){this.upcomingList[i].data=t.data().data;for(let e=0;e<this.upcomingList[i].data.length;e++){"object"===typeof this.upcomingList[i].data[e].date&&(this.upcomingList[i].data[e].date=new Date(1e3*this.upcomingList[i].data[e].date.seconds)),this.upcomingList[i].images[e].main.name=this.upcomingList[i].data[e].main.name,this.upcomingList[i].images[e].main.url=this.upcomingList[i].data[e].main.url;for(let t=0;t<this.upcomingList[i].data[e].gallery.length;t++)this.upcomingList[i].images[e].gallery.push({id:this.upcomingList[i].data[e].gallery.length,name:this.upcomingList[i].data[e].gallery[t].name,uploaded:!0,image:null,url:this.upcomingList[i].data[e].gallery[t].url})}}}this.loading=!1}}})},6611:function(i,e,t){t.d(e,{Z:function(){return p}});var a=t(3396);const s=i=>((0,a.dD)("data-v-72d8384d"),i=i(),(0,a.Cn)(),i),l={class:"gallery"},n=["src"],o=["onClick"],d=(0,a.uE)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-72d8384d><g transform="scale(1.5)" data-v-72d8384d><circle style="fill:#f44336;" cx="8" cy="8" r="7" data-v-72d8384d></circle><rect style="fill:#ffffff;" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)" data-v-72d8384d></rect><rect style="fill:#ffffff;" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)" data-v-72d8384d></rect></g></svg>',1),m=[d],g={class:"gallery__add"},r=s((()=>(0,a._)("span",null,[(0,a._)("svg",{width:"40px",height:"40px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"M8 12H16",stroke:"#292D32","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a._)("path",{d:"M12 16V8",stroke:"#292D32","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a._)("path",{d:"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",stroke:"#292D32","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1))),u={name:"ImageGallery"};var c=Object.assign(u,{props:["gallery"],emits:["getImage","deleteImage"],setup(i,{emit:e}){function t(i){let t=i.target.files;for(let a=0;a<t.length;a++)e("getImage",t[a])}return(s,d)=>((0,a.wg)(),(0,a.iD)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.gallery,(i=>((0,a.wg)(),(0,a.iD)("div",{class:"gallery__item",key:i.id},[(0,a._)("img",{class:"gallery__item-preview",src:i.url,alt:""},null,8,n),(0,a._)("div",{class:"gallery__item-delete",onClick:t=>e("deleteImage",i.id)},m,8,o)])))),128)),(0,a._)("label",g,[r,(0,a._)("input",{class:"gallery__input",type:"file",multiple:"multiple",accept:"image/*",onChange:d[0]||(d[0]=i=>t(i))},null,32)])]))}}),h=t(89);const v=(0,h.Z)(c,[["__scopeId","data-v-72d8384d"]]);var p=v},1266:function(i,e,t){t.d(e,{Z:function(){return u}});var a=t(3396),s=t(7025);const l={class:"image"},n={key:0,class:"image__preview",src:s,alt:""},o=["src"],d={name:"ImageInput"};var m=Object.assign(d,{props:["input"],emits:["getImage"],setup(i,{emit:e}){function t(i){if(i){let t=i.target.files[0];e("getImage",t)}}return(e,s)=>((0,a.wg)(),(0,a.iD)("label",l,[null===i.input.url?((0,a.wg)(),(0,a.iD)("img",n)):((0,a.wg)(),(0,a.iD)("img",{key:1,class:"image__preview",src:i.input.url,alt:""},null,8,o)),(0,a._)("input",{type:"file",class:"image__input",accept:"image/*",onChange:s[0]||(s[0]=i=>t(i))},null,32)]))}}),g=t(89);const r=(0,g.Z)(m,[["__scopeId","data-v-0596ccba"]]);var u=r},346:function(i,e,t){t.d(e,{Z:function(){return S}});var a=t(3396);const s=i=>((0,a.dD)("data-v-ca697e0a"),i=i(),(0,a.Cn)(),i),l={class:"seo"},n=s((()=>(0,a._)("p",null,"SEO",-1))),o={class:"seo__content"},d={class:"seo__content-item"},m=s((()=>(0,a._)("p",null,"URL",-1))),g=["value"],r={class:"seo__content-item"},u=s((()=>(0,a._)("p",null,"Title",-1))),c=["value"],h={class:"seo__content-item"},v=s((()=>(0,a._)("p",null,"Keywords",-1))),p=["value"],L={class:"seo__content-item"},y=s((()=>(0,a._)("p",null,"Description",-1))),_=["value"],f={name:"SeoInputs"};var U=Object.assign(f,{props:["url","title","keywords","description"],setup(i){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",l,[n,(0,a._)("div",o,[(0,a._)("div",d,[m,(0,a._)("input",{class:"form-control",type:"text",placeholder:"URL",value:i.url,onInput:t[0]||(t[0]=i=>e.$emit("update:url",i.target.value))},null,40,g)]),(0,a._)("div",r,[u,(0,a._)("input",{class:"form-control",type:"text",placeholder:"Title",value:i.title,onInput:t[1]||(t[1]=i=>e.$emit("update:title",i.target.value))},null,40,c)]),(0,a._)("div",h,[v,(0,a._)("input",{class:"form-control",type:"text",placeholder:"Keywords",value:i.keywords,onInput:t[2]||(t[2]=i=>e.$emit("update:keywords",i.target.value))},null,40,p)]),(0,a._)("div",L,[y,(0,a._)("textarea",{class:"form-control",placeholder:"Description",value:i.description,onInput:t[3]||(t[3]=i=>e.$emit("update:description",i.target.value))},null,40,_)])])]))}}),w=t(89);const x=(0,w.Z)(U,[["__scopeId","data-v-ca697e0a"]]);var S=x},4283:function(i,e,t){t.d(e,{Z:function(){return u}});var a=t(3396);const s=i=>((0,a.dD)("data-v-60e77b62"),i=i(),(0,a.Cn)(),i),l={class:"loading"},n=s((()=>(0,a._)("span",null,null,-1))),o=[n];function d(i,e,t,s,n,d){return(0,a.wg)(),(0,a.iD)("div",l,o)}var m={name:"TheLoading"},g=t(89);const r=(0,g.Z)(m,[["render",d],["__scopeId","data-v-60e77b62"]]);var u=r},3889:function(i,e,t){t.r(e),t.d(e,{default:function(){return $}});t(7658);var a=t(3396),s=t(4870),l=t(9242),n=t(4283),o=t(685),d=t(6611),m=t(1266),g=t(346),r=t(2483);const u=i=>((0,a.dD)("data-v-1f1a2926"),i=i(),(0,a.Cn)(),i),c={class:"movie"},h={class:"movie__languages"},v={class:"movie__languages-radio"},p=u((()=>(0,a._)("label",{for:"en"},"en",-1))),L={class:"movie__languages-radio"},y=u((()=>(0,a._)("label",{for:"ua"},"ua",-1))),_={class:"movie__wrapper"},f={class:"movie__content"},U={class:"movie__content-item"},w=u((()=>(0,a._)("p",null,"Title",-1))),x={class:"movie__content-item"},S=u((()=>(0,a._)("p",null,"Description",-1))),k={class:"movie__content-item"},b=u((()=>(0,a._)("p",null,"Main image",-1))),D={class:"movie__content-item"},M=u((()=>(0,a._)("p",null,"Gallery",-1))),I={class:"movie__content-item"},O=u((()=>(0,a._)("p",null,"Trailer link",-1))),C={class:"movie__content-item"},H=u((()=>(0,a._)("p",null,"Type",-1))),V={class:"movie__content-checkbox"},Z=u((()=>(0,a._)("label",{for:"2d"},"2D",-1))),J={class:"movie__content-checkbox"},T=u((()=>(0,a._)("label",{for:"3d"},"3D",-1))),j={class:"movie__content-checkbox"},E=u((()=>(0,a._)("label",{for:"imax"},"IMAX",-1))),q={class:"movie__content-item"},R={class:"movie__buttons"},K={name:"AdminMovie"};var G=Object.assign(K,{props:["id"],setup(i){const e=i,t=(0,r.tv)(),u=(0,o.s)();function K(i){let t=u.movieList[e.id].language.index;u.movieList[e.id].data[t].main.name=u.movieList[e.id].images[t].main.name=0===t?u.movieList[e.id].name+"-en":u.movieList[e.id].name+"-ua",u.movieList[e.id].images[t].main.image=i,u.movieList[e.id].images[t].main.url=URL.createObjectURL(i),u.movieList[e.id].images[t].main.uploaded=!1}function G(i){let t=u.movieList[e.id].language.index,a=u.movieList[e.id].data[t].gallery.length;0===t?u.movieList[e.id].data[t].gallery.push({id:a,name:u.movieList[e.id].name+"-"+Date.now()+"-en",url:null}):u.movieList[e.id].data[t].gallery.push({id:a,name:u.movieList[e.id].name+"-"+Date.now()+"-ua",url:null}),u.movieList[e.id].images[t].gallery.push({id:a,name:u.movieList[e.id].data[t].gallery[a].name,uploaded:!1,image:i,url:URL.createObjectURL(i)})}function P(i){let t=u.movieList[e.id].language.index;u.movieList[e.id].images[t].gallery[i].uploaded&&u.movieList[e.id].images[t].deleted.push(u.movieList[e.id].images[t].gallery[i].name),u.movieList[e.id].data[t].gallery.splice(i,1),u.movieList[e.id].images[t].gallery.splice(i,1);for(let a=0;a<u.movieList[e.id].images[t].gallery.length;a++)u.movieList[e.id].images[t].gallery[a].id!==a&&(u.movieList[e.id].data[t].gallery[a].id=u.movieList[e.id].images[t].gallery[a].id=a)}return(0,a.YP)((()=>u.movieList[e.id].language.selected),(()=>{"en"===u.movieList[e.id].language.selected?u.movieList[e.id].language.index=0:u.movieList[e.id].language.index=1})),(0,a.YP)((()=>u.uploaded),(i=>{i&&t.go(-1)})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a.Wm)((0,s.SU)(n.Z),null,null,512),[[l.vShow,(0,s.SU)(u).loading]]),(0,a._)("div",h,[(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{type:"radio",id:"en",value:"en","onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.SU)(u).movieList[i.id].language.selected=e)},null,512),[[l.vModelRadio,(0,s.SU)(u).movieList[i.id].language.selected]]),p]),(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{type:"radio",id:"ua",value:"ua","onUpdate:modelValue":t[1]||(t[1]=e=>(0,s.SU)(u).movieList[i.id].language.selected=e)},null,512),[[l.vModelRadio,(0,s.SU)(u).movieList[i.id].language.selected]]),y])]),(0,a._)("div",_,[(0,a._)("div",f,[(0,a._)("div",U,[w,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",placeholder:"Title","onUpdate:modelValue":t[2]||(t[2]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].title=e)},null,512),[[l.vModelText,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].title]])]),(0,a._)("div",x,[S,(0,a.wy)((0,a._)("textarea",{class:"form-control",placeholder:"Description","onUpdate:modelValue":t[3]||(t[3]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].description=e)},null,512),[[l.vModelText,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].description]])]),(0,a._)("div",k,[b,(0,a.Wm)((0,s.SU)(m.Z),{input:(0,s.SU)(u).movieList[i.id].images[(0,s.SU)(u).movieList[i.id].language.index].main,onGetImage:K},null,8,["input"])]),(0,a._)("div",D,[M,(0,a.Wm)((0,s.SU)(d.Z),{gallery:(0,s.SU)(u).movieList[i.id].images[(0,s.SU)(u).movieList[i.id].language.index].gallery,onGetImage:G,onDeleteImage:P},null,8,["gallery"])]),(0,a._)("div",I,[O,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",placeholder:"Link","onUpdate:modelValue":t[4]||(t[4]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].trailer=e)},null,512),[[l.vModelText,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].trailer]])]),(0,a._)("div",C,[H,(0,a._)("div",V,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"2d",value:"2d","onUpdate:modelValue":t[5]||(t[5]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type=e)},null,512),[[l.vModelCheckbox,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type]]),Z]),(0,a._)("div",J,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"3d",value:"3d","onUpdate:modelValue":t[6]||(t[6]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type=e)},null,512),[[l.vModelCheckbox,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type]]),T]),(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"imax",value:"imax","onUpdate:modelValue":t[7]||(t[7]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type=e)},null,512),[[l.vModelCheckbox,(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].type]]),E])]),(0,a._)("div",q,[(0,a.Wm)((0,s.SU)(g.Z),{url:(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.url,"onUpdate:url":t[8]||(t[8]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.url=e),title:(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.title,"onUpdate:title":t[9]||(t[9]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.title=e),keywords:(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.keywords,"onUpdate:keywords":t[10]||(t[10]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.keywords=e),description:(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.description,"onUpdate:description":t[11]||(t[11]=e=>(0,s.SU)(u).movieList[i.id].data[(0,s.SU)(u).movieList[i.id].language.index].seo.description=e)},null,8,["url","title","keywords","description"])])])]),(0,a._)("div",R,[(0,a._)("button",{class:"btn btn-primary",onClick:t[12]||(t[12]=e=>(0,s.SU)(u).uploadMovie(i.id))},"Save"),(0,s.SU)(u).movieList[i.id].uploaded?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn btn-default",onClick:t[13]||(t[13]=e=>(0,s.SU)(u).resetMovie(i.id))},"Reset")):(0,a.kq)("",!0)])]))}}),P=t(89);const W=(0,P.Z)(G,[["__scopeId","data-v-1f1a2926"]]);var $=W},7025:function(i,e,t){i.exports=t.p+"img/image-icon.f1ff6c83.png"}}]);
//# sourceMappingURL=admin-movie.46c9232d.js.map