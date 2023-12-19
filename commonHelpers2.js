var w=Object.defineProperty;var C=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>(C(t,typeof e!="symbol"?e+"":e,s),s);import{f as c,m as o,c as L,s as g,a as N}from"./assets/exercises-right-part-filter-8cdb33ff.js";import"./assets/vendor-ac1aa0cc.js";const n=class{open(){(!n.loaderEl||n.loaderEl.classList.contains("js-loader"))&&(n.loaderEl.style.display="block")}close(){n.loaderEl&&(n.loaderEl.style.display="none")}};let p=n;x(p,"loaderEl",document.querySelector(".js-loader"));const M=document.querySelector(".wrap-button"),A=document.querySelector(".muscles-list"),P=document.querySelector(".pagination-numbers"),j=document.querySelector(".title-exercises");M.addEventListener("click",B);document.addEventListener("DOMContentLoaded",()=>{S({filter:"Muscles",page:1,limit:12})});async function B(t){t.preventDefault(),j.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(l=>{l.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const r={filter:i,page:1,limit:12};A.innerHTML="",S(r)}async function S(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{const e=await c.getByFilterName(t),s=e.results;if(!e||s.length===0){o.error("Sorry, we didn't find anything according to your request.");return}$(s);const{totalPages:i}=e,r=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",r),document.querySelector(".filter-list-js").classList.add("muscles-list"),P.innerHTML="",y(i,t),m(1)}catch(e){console.log(e.message)}}function $(t){return t.map(({filter:s,name:i,imgURL:r})=>{let a=s.toLocaleLowerCase().replaceAll(" ","");return a==="bodyparts"&&(a="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${a}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${r}" alt="${i}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${L(i)}</h3>
          <p class="muscles-text">${s}</p>
        </button>
      </a>
    </li>
    `}).join("")}const _=document.querySelector(".pagination-numbers"),H=document.querySelector(".muscles-list");let d=1;try{_.addEventListener("click",F),_.addEventListener("click",h)}catch(t){console.log(t)}let E;async function F(t){const e={...E,page:t.target.textContent};if(t.target.nodeName==="BUTTON"&&e.page!==d){if(e.filter){const i=(await c.getByFilterName(e)).results;H.innerHTML=$(i)}else{const s=await c.getByFilterCategory(e);v(s)}d=e.page,h()}}const I=t=>{const e=document.createElement("button");e.className="pagination-number",e.innerHTML=t,e.setAttribute("page-index",t),e.setAttribute("aria-label","Page "+t),_.appendChild(e)};function y(t,e){if(E=e,t!==1)for(let s=1;s<=t;s++)I(s)}function h(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));e&&t.addEventListener("click",()=>{m(e)})})}function m(t){d=t,h(),document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==d&&e.classList.add("active")})}const O=document.querySelector(".pagination-numbers"),u=document.querySelector(".filter-list-js"),R=document.querySelector(".title-exercises");u.addEventListener("click",D);async function D(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const r={[s]:i,page:1,limit:10};R.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${L(i)}</spam>`;const a=await c.getByFilterCategory(r);if(a!=null&&a.results.length){u.classList.add("exercises_list"),u.classList.remove("muscles-list"),v(a),O.innerHTML="";const{totalPages:l}=a;y(l,r),m(1)}else o.info("Oops. please, try other category this list empty :(")}catch(r){o.error(r.message)}}function v(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:r,name:a,burnedCalories:l,time:b,bodyPart:T})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${r.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${g}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${g}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${a.toString().length>20?a.slice(0,20)+"...":a} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${l||""} / ${b||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${N(T,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${N(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");u.innerHTML=e}}const q=document.querySelector(".form-js"),z=document.querySelector(".pagination-numbers");q.addEventListener("submit",U);async function U(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;let{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i=s.toLocaleLowerCase().replaceAll(" ","");i==="bodyparts"&&(i="bodypart");const r={[i]:e,page:1,limit:10};try{const a=await c.getByFilterCategory(r);a.results.length||o.info("Nothing was found for this query"),z.innerHTML="";const{totalPages:l}=a;y(l,r),m(1),q.reset(),v(a)}catch(a){console.log(a)}}const k=document.querySelector("#subscribe-form"),f=k.querySelector("#email");k.addEventListener("submit",G);async function G(t){t.preventDefault();const{value:e}=f;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){o.info("Enter the following sample email - 'test@gmail.com'"),f.value="";return}try{const i=await c.addSubscription({email:e});o.success(i.message)}catch(i){console.log(i)}finally{f.value=""}}
//# sourceMappingURL=commonHelpers2.js.map
