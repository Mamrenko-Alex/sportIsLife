var M=Object.defineProperty;var R=(t,e,s)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var T=(t,e,s)=>(R(t,typeof e!="symbol"?e+"":e,s),s);import{f as _,m as y,c as O,s as h,d as $}from"./assets/exercises-right-part-filter-aa608ad2.js";import"./assets/vendor-2296de4d.js";const A="modulepreload",D=function(t){return"/sportIsLife/"+t},k={},l=function(e,s,r){if(!s||s.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=D(i),i in k)return;k[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let d=n.length-1;d>=0;d--){const m=n[d];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":A,a||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),a)return new Promise((d,m)=>{o.addEventListener("load",d),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},c=class{open(){(!c.loaderEl||c.loaderEl.classList.contains("js-loader"))&&(c.loaderEl.style.display="block")}close(){c.loaderEl&&(c.loaderEl.style.display="none")}};let v=c;T(v,"loaderEl",document.querySelector(".js-loader"));const j=document.querySelector(".wrap-button"),B=document.querySelector(".muscles-list"),V=document.querySelector(".pagination-numbers"),H=document.querySelector(".title-exercises");j.addEventListener("click",C);document.addEventListener("DOMContentLoaded",()=>{E({filter:"Muscles",page:1,limit:12})});async function C(t){t.preventDefault(),H.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const r=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(a=>{a.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:r,page:1,limit:12};B.innerHTML="",E(n)}async function E(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await _.getByFilterName(t),s=e.results;if(!e||s.length===0){y.error("Sorry, we didn't find anything according to your request.");return}b(s);const{totalPages:r}=e,n=JSON.stringify({totalPages:r,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),V.innerHTML="",x(r,t),p(1)}catch(e){console.log(e.message)}}function b(t){return t.map(({filter:s,name:r,imgURL:n})=>{let i=s.toLocaleLowerCase().replaceAll(" ","");return i==="bodyparts"&&(i="bodypart"),`
      <li class="muscles-item" data-name=${r} data-filter=${i}>
      <a href="" class="muscles-link" data-alt="${r}">
        <img loading="lazy" class="muscles-image" src="${n}" alt="${r}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${O(r)}</h3>
          <p class="muscles-text">${s}</p>
        </button>
      </a>
    </li>
    `}).join("")}const w=Object.freeze(Object.defineProperty({__proto__:null,handleCategoryClick:C,loadSectionOnClick:E,makeMarkupMuscles:b},Symbol.toStringTag,{value:"Module"})),L=document.querySelector(".pagination-numbers"),F=document.querySelector(".muscles-list");let g=1;try{L.addEventListener("click",U),L.addEventListener("click",N)}catch(t){console.log(t)}let q;async function U(t){const e={...q,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==g){if(e.filter){const r=(await _.getByFilterName(e)).results;F.innerHTML=b(r)}else{const s=await _.getByFilterCategory(e);I(s)}g=e.page,N()}}const z=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),L.appendChild(e)};function x(t,e){if(q=e,t!==1)for(let s=1;s<=t;s++)z(s)}function N(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{p(e)})})}function p(t){g=t,N(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==g&&e.classList.add("active")})}const G=Object.freeze(Object.defineProperty({__proto__:null,getPaginationNumbers:x,setCurrentPage:p},Symbol.toStringTag,{value:"Module"})),W=document.querySelector(".pagination-numbers"),f=document.querySelector(".filter-list-js"),J=document.querySelector(".title-exercises");f.addEventListener("click",K);async function K(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,r;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,r=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,r=e.parentNode.parentNode.dataset.alt);const n={[s]:r,page:1,limit:10};J.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${O(r)}</spam>`;const i=await _.getByFilterCategory(n);if(i!=null&&i.results.length){f.classList.add("exercises_list"),f.classList.remove("muscles-list"),I(i),W.innerHTML="";const{totalPages:a}=i;x(a,n),p(1)}else y.info("Oops. please, try other category this list empty :(")}catch(n){y.error(n.message)}}function I(t){if(t.results.length){const e=t.results.map(({_id:s,target:r,rating:n,name:i,burnedCalories:a,time:u,bodyPart:S})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${r.toString().length>8?r.slice(0,8)+"...":r}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${h}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${h}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${h}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${i.toString().length>20?i.slice(0,20)+"...":i} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${a||""} / ${u||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${$(S,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${$(r,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");f.innerHTML=e}}window.innerWidth<=768&&(l(()=>import("./assets/header-e1426f22.js"),["assets/header-e1426f22.js","assets/exercises-right-part-filter-aa608ad2.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(t=>{}),l(()=>import("./assets/burger-48704793.js"),[]).then(t=>{}));document.addEventListener("DOMContentLoaded",()=>{});document.addEventListener("click",t=>{t.target.classList.contains("muscles-item")&&l(()=>import("./assets/search-63eac1ad.js"),["assets/search-63eac1ad.js","assets/exercises-right-part-filter-aa608ad2.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(s=>{})});document.addEventListener("DOMContentLoaded",()=>{l(()=>import("./assets/exercises-right-part-filter-aa608ad2.js").then(t=>t.e),["assets/exercises-right-part-filter-aa608ad2.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(t=>{}),l(()=>import("./assets/sendEmail-20de4638.js"),["assets/sendEmail-20de4638.js","assets/exercises-right-part-filter-aa608ad2.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(t=>{})});document.addEventListener("DOMContentLoaded",()=>{l(()=>import("./assets/authentication-cc9034e4.js"),["assets/authentication-cc9034e4.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-aa608ad2.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(t=>{}),l(()=>Promise.resolve().then(()=>w),void 0).then(t=>{})});l(()=>Promise.resolve().then(()=>w),void 0).then(()=>{l(()=>Promise.resolve().then(()=>G),void 0).then(t=>{})});let P=!1;window.addEventListener("scroll",()=>{P||(P=!0,l(()=>import("./assets/scrollToTopButton-6967fd44.js"),["assets/scrollToTopButton-6967fd44.js","assets/exercises-right-part-filter-aa608ad2.js","assets/vendor-2296de4d.js","assets/exercises-right-part-filter-85be6b9f.css"]).then(t=>{}))});export{x as g,I as m,p as s};
//# sourceMappingURL=commonHelpers2.js.map
