const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DHYl6IWB.js","assets/index-BQ3qQFUl.js","assets/index-CpWnv3sx.css","assets/index-B90uWn9k.js","assets/index-ajh3Jvyq.js","assets/index-C0FvrysB.js","assets/index-BXOWN3Qe.js","assets/index-Bh4Am8WY.js"])))=>i.map(i=>d[i]);
import{u as d,r as v,_ as o,d as p,o as f,c as x,a as u,w as a,b as E,E as g,e as b,f as c,g as w}from"./index-BQ3qQFUl.js";const P=Object.assign({"/src/views/login/index.vue":()=>o(()=>Promise.resolve().then(()=>T),void 0),"/src/views/menu/menu1/index.vue":()=>o(()=>import("./index-DHYl6IWB.js"),__vite__mapDeps([0,1,2])),"/src/views/menu/menu2/index.vue":()=>o(()=>import("./index-B90uWn9k.js"),__vite__mapDeps([3,1,2])),"/src/views/menu2/menu1/index.vue":()=>o(()=>import("./index-ajh3Jvyq.js"),__vite__mapDeps([4,1,2])),"/src/views/menu2/menu2/index.vue":()=>o(()=>import("./index-C0FvrysB.js"),__vite__mapDeps([5,1,2])),"/src/views/onePage/index.vue":()=>o(()=>import("./index-BXOWN3Qe.js"),__vite__mapDeps([6,1,2])),"/src/views/register/index.vue":()=>o(()=>import("./index-Bh4Am8WY.js"),__vite__mapDeps([7,1,2]))});function l(n){n.forEach(t=>{t.children&&l(t.children),t.component&&typeof t.component=="string"&&(t.component=P["/src/views/"+t.component+"/index.vue"]),v.addRoute("layout",t)})}async function R(){const n=d();await n.getAuthMenuList(),l(n.menus)}const L={class:"box"},O=p({__name:"index",setup(n){const t=E(),s=d(),i=async r=>{s.$patch({token:"token"+r});const e=g.service({lock:!0,text:"登录中...",background:"rgba(0, 0, 0, 0.7)"});await R(),t.push(s.firstRoutePath),e.close()};return(r,e)=>{const _=b("el-button");return f(),x("div",L,[u(_,{type:"primary",class:"mr-10",onClick:e[0]||(e[0]=m=>i("1"))},{default:a(()=>e[2]||(e[2]=[c("用户一登录")])),_:1}),u(_,{type:"success",onClick:e[1]||(e[1]=m=>i("2"))},{default:a(()=>e[3]||(e[3]=[c("用户二登录")])),_:1})])}}}),y=w(O,[["__scopeId","data-v-2b7dc683"]]),T=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{y as default};
