

// ====== AVATAR 3D TILT ======
(function(){
  const wrap = $("#hero3d"), tilt = $("#avaTilt");
  if(!wrap || !tilt) return;
  let raf = null, tx=0, ty=0, cx=0, cy=0;
  function loop(){
    cx += (tx-cx)*.12; cy += (ty-cy)*.12;
    tilt.style.transform = `rotateY(${cx}deg) rotateX(${cy}deg) translateZ(0)`;
    if(Math.abs(tx-cx)>.01 || Math.abs(ty-cy)>.01) raf = requestAnimationFrame(loop);
    else raf = null;
  }
  function onMove(e){
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - (r.left+r.width/2)) / (r.width/2);
    const py = (e.clientY - (r.top+r.height/2)) / (r.height/2);
    tx = Math.max(-1, Math.min(1, px)) * 22;
    ty = Math.max(-1, Math.min(1, py)) * -14;
    if(!raf) raf = requestAnimationFrame(loop);
  }
  // gerak di seluruh hero biar responsif
  const hero = wrap.closest(".hero") || wrap;
  hero.addEventListener("mousemove", onMove);
  hero.addEventListener("mouseleave", ()=>{ tx=0; ty=0; if(!raf) raf=requestAnimationFrame(loop); });
  // touch (mobile): pakai posisi sentuh
  hero.addEventListener("touchmove", (e)=>{ if(e.touches[0]) onMove(e.touches[0]); }, {passive:true});
  hero.addEventListener("touchend", ()=>{ tx=0; ty=0; if(!raf) raf=requestAnimationFrame(loop); });
})();

// ====== PUBLIC SITE ======
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = t => (t||"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const icons = { email:"✉", wa:"💬", ig:"📷", github:"🐙", linkedin:"💼" };

let PROFILE = {};
async function loadProfile(){
  PROFILE = await fetch("/api/profile").then(r=>r.json()).catch(()=>({}));
  $("#p-n1").textContent = PROFILE.name1 || "Muhammad";
  $("#p-n2").textContent = PROFILE.name2 || "Nizar Asagaf";
  $("#p-tag").textContent = PROFILE.tagline || "";
  $("#p-about").textContent = PROFILE.about || "";
  const soc = $("#socials"), cr = $("#contact-row");
  soc.innerHTML = ""; cr.innerHTML = "";
  const mk = (href, ic, label) => `<a class="soc" href="${esc(href)}" target="_blank" title="${label}">${ic}</a>`;
  if(PROFILE.email){ soc.insertAdjacentHTML("beforeend", mk("mailto:"+PROFILE.email,"✉","Email")); cr.insertAdjacentHTML("beforeend", `<a class="pill" href="mailto:${esc(PROFILE.email)}">✉ ${esc(PROFILE.email)}</a>`); }
  if(PROFILE.wa){ soc.insertAdjacentHTML("beforeend", mk("https://wa.me/"+PROFILE.wa,"💬","WhatsApp")); cr.insertAdjacentHTML("beforeend", `<a class="pill" href="https://wa.me/${esc(PROFILE.wa)}">💬 WhatsApp</a>`); }
  if(PROFILE.ig) soc.insertAdjacentHTML("beforeend", mk(PROFILE.ig,"📷","Instagram"));
  if(PROFILE.github) soc.insertAdjacentHTML("beforeend", mk(PROFILE.github,"🐙","GitHub"));
  if(PROFILE.linkedin) soc.insertAdjacentHTML("beforeend", mk(PROFILE.linkedin,"💼","LinkedIn"));
}

function cardHTML(kind, it){
  const thumb = it.file && /\.(png|jpe?g|gif|webp)$/i.test(it.file)
    ? `<img class="thumb" src="${esc(it.file)}" alt="${esc(it.title)}" loading="lazy">`
    : (it.file && /\.pdf$/i.test(it.file)
        ? `<div class="ph" style="font-size:1rem;font-family:Arial">📄 PDF</div>`
        : `<div class="ph">🖼️</div>`);
  const link = it.link ? `<a class="lnk" href="${esc(it.link)}" target="_blank">Lihat →</a>` : "";
  return `<div class="card" data-id="${it.id}">
    ${thumb}
    <div class="body">
      <div class="kind">${esc(kind)}${it.meta? " · "+esc(it.meta):""}</div>
      <h3>${esc(it.title)}</h3>
      ${it.desc? `<p>${esc(it.desc)}</p>`:""}
      ${link}
    </div></div>`;
}

const secs = ["graphic","photo","cert","research"];
let latest = [];
async function loadWorks(){
  latest = [];
  for(const s of secs){
    const items = await fetch("/api/works/"+s).then(r=>r.json()).catch(()=>[]);
    const g = $("#g-"+s);
    if(g) g.innerHTML = items.map(i=>cardHTML(s.toUpperCase(), i)).join("");
    items.slice(0,2).forEach(i=>latest.push({...i, sec:s}));
  }
  $("#latest-grid").innerHTML = latest.map(i=>cardHTML(i.sec.toUpperCase(), i)).join("");
  // lightbox utk photo
  $$("#g-photo .thumb").forEach(t => t.addEventListener("click", ()=>{ $("#lb-img").src = t.src; $("#lb").style.display="flex"; }));
}
$("#lb").addEventListener("click", ()=> $("#lb").style.display="none");

function ytId(u){
  const m = (u||"").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : "";
}
let VIDEOS = [];
function playVideo(v){
  const id = ytId(v.url); if(!id) return;
  $("#v-embed").innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>`;
  $("#v-title").textContent = v.title;
  $("#v-desc").textContent = v.desc || "";
  $("#v-meta").textContent = [v.client&&"Client: "+v.client, v.role&&"Role: "+v.role, v.year].filter(Boolean).join(" · ");
  $$(".vitem").forEach(e=>e.classList.toggle("on", e.dataset.id===v.id));
}
async function loadVideos(){
  VIDEOS = await fetch("/api/videos").then(r=>r.json()).catch(()=>[]);
  $("#v-list").innerHTML = VIDEOS.map(v=>`<div class="vitem" data-id="${v.id}">${esc(v.title)}</div>`).join("");
  $$(".vitem").forEach(e=>e.addEventListener("click", ()=>playVideo(VIDEOS.find(v=>v.id===e.dataset.id))));
  if(VIDEOS.length) playVideo(VIDEOS[0]);
}
async function loadNews(){
  const items = await fetch("/api/news").then(r=>r.json()).catch(()=>[]);
  $("#g-news").innerHTML = items.map(n=>`
    <div class="card"><div class="body">
      <div class="kind">${esc(n.kind)} · ${esc(n.date)}</div>
      <h3>${esc(n.title)}</h3>
      <p>${esc(n.body)}</p>
    </div></div>`).join("");
}

// ====== ADMIN ======
let TOKEN = sessionStorage.getItem("pf-token") || "";
$("#open-admin").addEventListener("click", ()=> $("#admin").classList.add("open"));
$("#close-admin").addEventListener("click", ()=> $("#admin").classList.remove("open"));

function showPanel(){
  $("#login-box").style.display="none";
  $("#apanel").style.display="block";
  refreshList();
}
if(TOKEN) showPanel();

$("#l-btn").addEventListener("click", async ()=>{
  const r = await fetch("/api/login", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({username:$("#l-user").value, password:$("#l-pass").value})});
  if(r.ok){ TOKEN = (await r.json()).username; sessionStorage.setItem("pf-token", TOKEN); showPanel(); }
  else $("#l-err").style.display="block";
});

let TAB = "graphic";
$$(".atab").forEach(t=>t.addEventListener("click", ()=>{
  $$(".atab").forEach(x=>x.classList.remove("on")); t.classList.add("on");
  TAB = t.dataset.t;
  ["f-work","f-video","f-news","f-profile"].forEach(f=>$("#"+f).style.display="none");
  if(["graphic","photo","cert","research"].includes(TAB)) $("#f-work").style.display="block";
  else if(TAB==="video") $("#f-video").style.display="block";
  else if(TAB==="news") $("#f-news").style.display="block";
  else if(TAB==="profile") $("#f-profile").style.display="block";
  $("#fw-title").textContent = "Tambah " + TAB.charAt(0).toUpperCase()+TAB.slice(1);
  $("#list-title").textContent = "Daftar " + TAB;
  refreshList();
}));

const H = {"x-auth": TOKEN};
function flash(id){ const el=$(id); el.style.display="block"; setTimeout(()=>el.style.display="none", 2000); }

$("#w-save").addEventListener("click", async ()=>{
  const fd = new FormData();
  fd.append("title", $("#w-title").value); fd.append("meta", $("#w-meta").value);
  fd.append("desc", $("#w-desc").value); fd.append("link", $("#w-link").value);
  const f = $("#w-file").files[0]; if(f) fd.append("file", f);
  await fetch("/api/works/"+TAB, {method:"POST", headers:H, body:fd});
  $("#w-title").value=$("#w-meta").value=$("#w-desc").value=$("#w-link").value=""; $("#w-file").value="";
  flash("#w-msg"); refreshList(); loadWorks(); loadVideos(); loadNews(); loadLatest();
});
async function loadLatest(){ await loadWorks(); }

$("#v2-save").addEventListener("click", async ()=>{
  await fetch("/api/videos", {method:"POST", headers:{...H,"Content-Type":"application/json"}, body: JSON.stringify({
    title:$("#v2-title").value, url:$("#v2-url").value, desc:$("#v2-desc").value,
    client:$("#v2-client").value, role:$("#v2-role").value, year:$("#v2-year").value })});
  $("#v2-title").value=$("#v2-url").value=$("#v2-desc").value=$("#v2-client").value=$("#v2-role").value=$("#v2-year").value="";
  flash("#v2-msg"); refreshList(); loadVideos();
});
$("#n-save").addEventListener("click", async ()=>{
  await fetch("/api/news", {method:"POST", headers:{...H,"Content-Type":"application/json"}, body: JSON.stringify({
    kind:$("#n-kind").value, title:$("#n-title").value, body:$("#n-body").value })});
  $("#n-kind").value=$("#n-title").value=$("#n-body").value="";
  flash("#n-msg"); refreshList(); loadNews();
});
$("#pf-save").addEventListener("click", async ()=>{
  await fetch("/api/profile", {method:"PUT", headers:{...H,"Content-Type":"application/json"}, body: JSON.stringify({
    name1:$("#pf-n1").value, name2:$("#pf-n2").value, tagline:$("#pf-tag").value,
    about:$("#pf-about").value, email:$("#pf-email").value, wa:$("#pf-wa").value,
    ig:$("#pf-ig").value, github:$("#pf-github").value, linkedin:$("#pf-linkedin").value })});
  flash("#pf-msg"); loadProfile();
});

async function refreshList(){
  const box = $("#mlist");
  if(["profile"].includes(TAB)){ box.innerHTML=""; return; }
  let items = [];
  if(["graphic","photo","cert","research"].includes(TAB)) items = await fetch("/api/works/"+TAB).then(r=>r.json());
  else if(TAB==="video") items = await fetch("/api/videos").then(r=>r.json());
  else if(TAB==="news") items = await fetch("/api/news").then(r=>r.json());
  box.innerHTML = items.map(i=>`<div class="mrow">
    ${i.file&&/\.(png|jpe?g|gif|webp)$/i.test(i.file)?`<img src="${esc(i.file)}">`:""}
    <div class="t">${esc(i.title||i.kind)}<div class="d">${esc(i.meta||i.url||i.date||"")}</div></div>
    <button class="btn r" data-del="${i.id}">Hapus</button></div>`).join("") || `<p style="font-family:Arial;font-weight:bold">Belum ada item. Tambah lewat form di atas!</p>`;
  $$("#mlist [data-del]").forEach(b=>b.addEventListener("click", async ()=>{
    const base = ["graphic","photo","cert","research"].includes(TAB) ? "/api/works/"+TAB : TAB==="video" ? "/api/videos" : "/api/news";
    await fetch(base+"/"+b.dataset.del, {method:"DELETE", headers:H});
    refreshList(); loadWorks(); loadVideos(); loadNews();
  }));
}

// init profile form
async function initProfileForm(){
  await loadProfile();
  $("#pf-n1").value=PROFILE.name1||""; $("#pf-n2").value=PROFILE.name2||"";
  $("#pf-tag").value=PROFILE.tagline||""; $("#pf-about").value=PROFILE.about||"";
  $("#pf-email").value=PROFILE.email||""; $("#pf-wa").value=PROFILE.wa||"";
  $("#pf-ig").value=PROFILE.ig||""; $("#pf-github").value=PROFILE.github||"";
  $("#pf-linkedin").value=PROFILE.linkedin||"";
}

loadWorks(); loadVideos(); loadNews(); initProfileForm();
