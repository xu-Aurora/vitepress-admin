const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CeZWuLgL.js","assets/index-7wQMNvLS.js","assets/index-CpWnv3sx.css","assets/index-CC56eoh3.js","assets/index-OtvPgCl8.js","assets/index-BbnSMqZv.js","assets/index-DAIyQxiQ.js","assets/index-DWwBnadr.js","assets/index-DNO5kSnh.js"])))=>i.map(i=>d[i]);
import{u as c,r as l,_ as o,d as p,o as E,c as x,a as u,w as a,b as f,E as g,e as b,f as d,g as w}from"./index-7wQMNvLS.js";const P=Object.assign({"/src/views/login/index.vue":()=>o(()=>Promise.resolve().then(()=>V),void 0),"/src/views/menu/menu1/index.vue":()=>o(()=>import("./index-CeZWuLgL.js"),__vite__mapDeps([0,1,2])),"/src/views/menu/menu2/index.vue":()=>o(()=>import("./index-CC56eoh3.js"),__vite__mapDeps([3,1,2])),"/src/views/menu2/menu1/index.vue":()=>o(()=>import("./index-OtvPgCl8.js"),__vite__mapDeps([4,1,2])),"/src/views/menu2/menu2/index.vue":()=>o(()=>import("./index-BbnSMqZv.js"),__vite__mapDeps([5,1,2])),"/src/views/menu2/menu3/index.vue":()=>o(()=>import("./index-DAIyQxiQ.js"),__vite__mapDeps([6,1,2])),"/src/views/onePage/index.vue":()=>o(()=>import("./index-DWwBnadr.js"),__vite__mapDeps([7,1,2])),"/src/views/register/index.vue":()=>o(()=>import("./index-DNO5kSnh.js"),__vite__mapDeps([8,1,2]))});function m(n){n.forEach(t=>{t.children&&m(t.children),t.component&&typeof t.component=="string"&&(t.component=P["/src/views/"+t.component+"/index.vue"]),l.addRoute("layout",t)})}async function R(){const n=c();await n.getAuthMenuList(),m(n.menus)}const L={class:"box"},O=p({__name:"index",setup(n){const t=f(),s=c(),i=async r=>{s.$patch({token:"token"+r});const e=g.service({lock:!0,text:"登录中...",background:"rgba(0, 0, 0, 0.7)"});await R(),t.push(s.firstRoutePath),e.close()};return(r,e)=>{const _=b("el-button");return E(),x("div",L,[u(_,{type:"primary",class:"mr-10",onClick:e[0]||(e[0]=v=>i("1"))},{default:a(()=>e[2]||(e[2]=[d("用户一登录")])),_:1}),u(_,{type:"success",onClick:e[1]||(e[1]=v=>i("2"))},{default:a(()=>e[3]||(e[3]=[d("用户二登录")])),_:1})])}}}),T=w(O,[["__scopeId","data-v-2b7dc683"]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));export{T as default};
