(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const q=`<header>GymApp</header>
<div class="container">
  <aside class="sidebar" id="sidebar">
    <!-- Filters will be injected here -->
    <!-- <div class="filter-zone" id="category-zone">
      <h3>Category</h3>
      <ul class="filter-list" id="category-list">
        <li>All</li>
      </ul>
    </div>
    <div class="filter-zone" id="equipment-zone">
      <h3>Equipment</h3>
      <ul class="filter-list" id="equipment-list">
      </ul>
    </div>
    <div class="filter-zone" id="muscle-zone">
      <h3>Muscle</h3>
      <ul class="filter-list" id="muscle-list">
      </ul>
    </div> -->
  </aside>

  <main id="exercise-cards" class="exercise-cards">

    <div class="cards-section">
      <!-- Exercise cards will be injected here -->
      <div class="card">
        <h2>Exercise Name</h2>
        <img src="https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?cs=srgb&dl=pexels-823sl-2294363.jpg&fm=jpg" alt="Exercise Image">
        <p>Description</p>
        <p>Category</p>
        <p>Equipment</p>
        <p>Muscles</p>
      </div>
      <div class="card">
        <h2>Exercise Name</h2>
        <img src="https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?cs=srgb&dl=pexels-823sl-2294363.jpg&fm=jpg" alt="Exercise Image">
        <p>Description</p>
        <p>Category</p>
        <p>Equipment</p>
        <p>Muscles</p>
      </div>
      <div class="card">
        <h2>Exercise Name</h2>
        <img src="https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?cs=srgb&dl=pexels-823sl-2294363.jpg&fm=jpg" alt="Exercise Image">
        <p>Description</p>
        <p>Category</p>
        <p>Equipment</p>
        <p>Muscles</p>
      </div>
    </div>

    <div class="pagination-footer" id="pagination-section">
      <div class="pagination-left">
        <span class="items-per-page">Items per page 
          <select id="items-per-page-select" class="items-per-page-dropdown">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </span>
        <span class="items-range"><span id="items-shown">1 - 25</span> of <span id="total-items">0</span> items</span>
      </div>
      <div class="pagination-right">
        <button class="pagination-btn" id="prev-btn">Previous</button>
        <span class="page-info">Page <span id="current-page">1</span> of <span id="total-pages">1</span></span>
        <button class="pagination-btn" id="next-btn">Next</button>
      </div>
    </div>
  </main>
</div>`;class b{constructor(t,s){this.id=t,this.name=s}}class ${constructor(t,s){this.id=t,this.name=s}}class M{constructor(t,s){this.id=t,this.name=s}}class L{constructor(t,s,i,r,n,a,o,p){this.uuid=t,this.id=s,this.name=i,this.description=r,this.category=n,this.equipment=a,this.muscles=o,this.image=p}}class x{constructor(t,s){this.id=t,this.name=s}}class S{constructor(t,s=[]){this.name=t,this.options=s}}const j=(e,t)=>{if(!e)throw new Error("Filter name is required");if(!t)throw new Error("Filter options are required");const s=t.map(n=>`<li data-id="${e}_${n.id}">${n.name}</li>`).join(""),i=document.createElement("div");i.className="filter-zone",i.setAttribute("data-id",`${e}-zone`);const r=`
      <h3>${e}</h3>
      <ul class="filter-list" data-id="${e}-list">
        <li data-id="${e}_-1">All</li>
        ${s}
      </ul>`;return i.innerHTML=r,i};let f;const I=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element ${e} not found`);f.innerHTML="",t.forEach(s=>{const i=j(s.name,s.options);f.append(i)})},O=e=>{if(!e)throw new Error("Exercise is required");const t=document.createElement("div");t.className="card",t.setAttribute("data-id",e.id);const s=e.muscles.map(o=>`<span class="chip">${o.name}</span>`).join(" "),{name:i}=e.category,r=`<span class="chip chip-category">${i}</span>`,n=e.equipment.map(o=>`<span class="chip chip-equipment">${o.name}</span>`).join(" "),a=`
      <h2>${e.name}</h2>
      <img src=${e.image||"https://thumbs.dreamstime.com/b/error-sorry-page-not-found-message-holding-sad-cute-black-cat-vector-76870840.jpg"} alt=${e.name}>
      <h3>Description</h3>
      <p>${e.description}</p>
      <h3>Category</h3>
      <div class="category-chip">${r}</div>
      <h3>Equipment</h3>
      <div class="equipment-chips">${n}</div>
      <h3>Muscles</h3>
      <div class="muscle-chips">${s}</div>
    `;return t.innerHTML=a,t};let E;const H=(e,t)=>{if(E||(E=document.querySelector(e)),!E)throw new Error(`Element ${e} not found`);E.innerHTML="",t.forEach(s=>{const i=O(s);E.append(i)})};class N{constructor(t,s){this.name=t,this.id=s}}const P={CATEGORY:"Category",MUSCLES:"Muscles",EQUIPMENT:"Equipment"},u={excercises:[],filter:null,offset:0,itemsPerPage:10,currentPage:1},U=()=>{C()},C=()=>{if(!localStorage.getItem("state"))return;const{excercises:e=[],filter:t=null,offset:s=0}=JSON.parse(localStorage.getItem("state"));u.excercises=e,u.filter=t,u.offset=s},w=()=>{localStorage.setItem("state",JSON.stringify(u))},F=e=>{if(!Object.values(P).includes(e.name))throw new Error(`Invalid filter name: ${e.name}`);if(!e.id)throw new Error(`Invalid filter id: ${e.id}`);e.id>0?u.filter=e:u.filter=null,w()},T=()=>u.filter,z=e=>{u.itemsPerPage=e,w()},A=e=>{if(e<0)throw new Error(`Invalid current page: ${e}`);u.currentPage=e,w()},B=()=>u.itemsPerPage,R=()=>u.currentPage,d={initStore:U,loadStore:C,saveToLocalStorage:w,setFilter:F,setCurrentPage:A,getCurrentFilter:T,setItemsPerPage:z,getItemsPerPage:B,getCurrentPage:R};class Z{constructor(t,s,i,r){this.next=t,this.previous=s,this.results=i,this.count=r}}const D=({next:e,previous:t,results:s,count:i})=>{const r=s.map(({uuid:n,id:a,translations:o,category:p,equipment:c,muscles:h,images:m})=>new L(n,a,o[0]?o[0].name:"",o[0]?o[0].description:"",new b(p.id,p.name),c.map(g=>new M(g.id,g.name)),h.map(g=>new $(g.id,g.name)),m?.length>0?m[0].image:null));return new Z(e,t,r,i)},G=async()=>{const s=await(await fetch("https://wger.de/api/v2/exercisecategory/")).json(),{results:i}=s;return i},_=async()=>{const s=await(await fetch("https://wger.de/api/v2/muscle/")).json(),{results:i}=s;return i},J=async()=>{const s=await(await fetch("https://wger.de/api/v2/equipment/")).json(),{results:i}=s;return i},Q=async(e,t=100,s=0)=>{let i="https://wger.de/api/v2/exerciseinfo/";const r=new URLSearchParams;r.append("limit",t),r.append("offset",s),e&&r.append(e.name.toLowerCase(),e.id),i+=`?${r.toString()}`,console.log("apiUrl",i);const a=await(await fetch(i)).json(),{next:o,previous:p,results:c,count:h}=a;return console.log(c),{next:o,previous:p,results:c,count:h}},v={mapExercisesResponse:D,fetchExerciseCategories:G,fetchExercises:Q,fetchExerciseMuscles:_,fetchExerciseEquipment:J},Y=(e,t,s,i,r)=>{const n=Math.ceil(s/i),a=(r-1)*i+1,o=Math.min(a+i-1,s);return`
    <div class="pagination-left">
        <span class="items-per-page">Items per page 
            <select data-id="items-per-page-select" class="items-per-page-dropdown">
                ${[10,25,50,100].map(m=>`<option value="${m}" ${m===i?"selected":""}>${m}</option>`).join("")}
            </select>
        </span>
        <span class="items-range"><span data-id="items-shown">${a} - ${o}</span> of <span data-id="total-items">${s}</span> items</span>
    </div>
    <div class="pagination-right">
        ${t?'<button class="pagination-btn" data-id="prev-btn">Previous</button>':""}
        <span class="page-info">Page <span data-id="current-page">${r}</span> of <span data-id="total-pages">${n}</span></span>
        ${e?'<button class="pagination-btn" data-id="next-btn">Next</button>':""}
    </div>
    `};let y;const K=async(e,t,s,i,r,n)=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e} not found`);y.innerHTML="";const a=Y(t,s,i,r,n);y.innerHTML=a},l={SideBar:".sidebar",ExerciseCards:".exercise-cards",PaginationSection:".pagination-footer",PrevBtn:"prev-btn",NextBtn:"next-btn",ItemsPerPageSelect:"items-per-page-select",CardsSection:".cards-section",CategoryZone:".category-zone",CategoryList:"#category-list",MuscleZone:"#muscle-zone",MuscleList:"#muscle-list",EquipmentZone:"#equipment-zone"},V=async e=>{const t=async()=>{const n=d.getCurrentPage(),a=d.getItemsPerPage(),o=(n-1)*a,p=d.getCurrentFilter(),{results:c,next:h,previous:m,count:g}=await v.fetchExercises(p,a,o).then(v.mapExercisesResponse);H(l.CardsSection,c),K(l.PaginationSection,h,m,g,a,n)},s=async()=>{const n=await v.fetchExerciseCategories(),a=await v.fetchExerciseMuscles(),o=await v.fetchExerciseEquipment(),p=[new S(P.CATEGORY,n.map(c=>new x(c.id,c.name))),new S(P.MUSCLES,a.map(c=>new x(c.id,c.name))),new S(P.EQUIPMENT,o.map(c=>new x(c.id,c.name)))];I(l.SideBar,p)};(()=>{const n=document.createElement("div");n.innerHTML=q,document.querySelector(e).appendChild(n),s(),t()})();const i=document.querySelector(l.SideBar);document.querySelector(l.PrevBtn),document.querySelector(l.NextBtn),document.querySelector(l.ItemsPerPageSelect);const r=document.querySelector(l.PaginationSection);document.querySelector(l.ExerciseCards),document.querySelector(l.CategoryZone),document.querySelector(l.CategoryList),document.querySelector(l.MuscleZone),document.querySelector(l.MuscleList),document.querySelector(l.EquipmentZone),i.addEventListener("click",n=>{const a=n.target.closest("[data-id]"),[o,p]=a.getAttribute("data-id").split("_"),c=new N(o,p);d.setFilter(c),d.setCurrentPage(1),console.log(d.getCurrentFilter()),t()}),r.addEventListener("click",n=>{const a=n.target.closest("[data-id]");if(a){const o=a.getAttribute("data-id");o===l.NextBtn?(console.log("nextBtn clicked"),d.setCurrentPage(d.getCurrentPage()+1),t()):o===l.PrevBtn&&(d.setCurrentPage(d.getCurrentPage()-1),t())}}),r.addEventListener("change",n=>{if(n.target.matches('[data-id="items-per-page-select"]')){const a=parseInt(n.target.value);console.log("Items per page changed to:",a),d.setItemsPerPage(a),d.setCurrentPage(1),t()}})};d.initStore();V("#app");
