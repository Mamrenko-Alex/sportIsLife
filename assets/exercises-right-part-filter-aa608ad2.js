var B=Object.defineProperty;var M=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>(M(e,typeof t!="symbol"?t+"":t,s),s);import{i as I,g as H,a as T,b as R,c as N,d as A,e as j,s as U,f as h}from"./vendor-2296de4d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function F(){document.querySelector(".filter-list-js").classList.add("hidden-form");const t=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",t.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/sportIsLife/assets/sprite-9db62079.svg",f=(e,t)=>e.length<=t?e:`${e.slice(0,t)}...`;function J(e){const t=document.querySelector(".filter-list-js");t.classList.remove("hidden-form"),e.length>6?t.classList.add("scroll"):t.classList.remove("scroll");const s=e.map(({_id:a,target:o,name:i,bodyPart:n,burnedCalories:l,time:y})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${f(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${a}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${a}>
            <use class="favourites_btn_trash_icon" href="${c}#icon-trash" data-id=${a}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text" data-id=${a}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${a}>
            <use href="${c}#icon-arrow" data-id=${a}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${c}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${f(i,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${l}/${y}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${f(n,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${f(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");t.innerHTML=s}const D={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},C=I(D),P=H(C),b=T(C),z=async e=>{const t=P.currentUser;if(t){const s=e;try{U(j(b,t.email,e._id),s)}catch(a){console.log(a.message)}}},Q=async e=>{const t=localStorage.getItem("user");if(t)try{A(j(b,t,e))}catch(s){console.log(s.message)}},K=async()=>{const e=localStorage.getItem("user"),t=[];if(!e)return;(await R(N(b,e))).forEach(a=>{t.push(a.data())}),localStorage.setItem("favorites",JSON.stringify(t))};function _(){K();const e=JSON.parse(localStorage.getItem("favorites"));if(!(e!=null&&e.length)){F();return}J(e)}class O{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=t=>this.closeEsc(t),this.overlayClickHandler=t=>this.closeBack(t)}open(t){this.overlay.innerHTML=t,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(t){t.key==="Escape"&&this.close()}closeBack(t){t.target===this.overlay&&this.close()}}const u=new O,ft=Object.freeze(Object.defineProperty({__proto__:null,Modal:O,myModal:u},Symbol.toStringTag,{value:"Module"})),r=class{static handleErrors(t){return async()=>{try{return await t()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(t,s){return(await fetch(t,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(t){return await r.handleErrors(async()=>{const a=new URLSearchParams({...t});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(t){return await r.handleErrors(async()=>{const a=new URLSearchParams({...t});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(t){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${t}`))()}async addExercisesRate(t,s){return await r.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${t}/rating`,o)})()}async addSubscription(t){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let p=r;S(p,"BASE_URL","https://your-energy.b.goit.study/api");const g=new p,v={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",G);async function G(){const e=localStorage.getItem("quote");if(e){const t=new Date().toDateString(),{date:s,quote:a,author:o}=JSON.parse(e);t!==s?w():(v.quoteText.innerHTML=a,v.quoteAuthor.innerHTML=o)}else w()}async function w(){const e=await g.getQuotes(),{author:t,quote:s}=e,a={author:t,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),v.quoteText.innerHTML=s,v.quoteAuthor.innerHTML=t}function X(e){if(e)return e[0].toUpperCase()+e.slice(1)}function Y(e){const t=(e%1).toFixed(1)*100;let s='<div class="rating-container-not-cursore" data-rating="0">';for(let a=1;a<=e+1;a+=1)a<=e?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`:t>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-t}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${t}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=e+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function W(e){return e?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function Z(e){return`<div class="modal-info" data-id="${e._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${e.gifUrl}" alt="${e.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${X(e.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${e.rating.toFixed(1)}</p>${Y(e.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${e.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${e.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${e.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${e.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${e.burnedCalories}/${e.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${e.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${e.favorite}">
          ${W(e.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function V(e){return`<div class="modal-get-raiting" data-id="${e}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
        </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`}function tt(){const e=document.querySelector(".rating-container-js"),t=e.querySelectorAll(".exercises_btn_start_icon_rating");let s=e.querySelector(".user-rating-js");t.forEach((n,l)=>{n.addEventListener("mouseover",()=>a(l)),n.addEventListener("mouseout",o),n.addEventListener("click",()=>i(l+1))});function a(n){o();for(let l=0;l<=n;l++)t[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){t.forEach(n=>{const l=e.dataset.rating;n.classList.remove("hovered"),s.textContent=`${l||0}`})}function i(n){e.setAttribute("data-rating",n),t.forEach((l,y)=>{y+1<=n?l.classList.add("selected"):l.classList.remove("selected")})}}let d=[];const m=JSON.parse(localStorage.getItem("favorites"));m!=null&&m.length&&d.push(...m);function et(e){z(e),d.push(e),localStorage.setItem("favorites",JSON.stringify(d))}const k=e=>{Q(e),d=d.filter(t=>t._id!==e),localStorage.setItem("favorites",JSON.stringify([...d]))};h.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class st{error(t){h.error({title:"Error",message:t})}success(t){h.success({title:"OK",message:t})}info(t){h.info({title:"Info",message:t})}}const L=new st,at=document.querySelector(".filter-list-js");let x="";const ot=["BUTTON","svg","use","P"];let $,E,q;async function it(e){e.preventDefault();const t=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,i=document.querySelector(".raiting-form-field-comment").value,n={rate:Number(a),email:o,review:i},l=await g.addExercisesRate(t,n);l.message?L.error(`${l.message}`):(L.success(`Thank you for your mark - ${n.rate} for ${l.name}`),u.close())}async function rt(){const e=document.querySelector(".modal-info").dataset.id;u.close(),u.open(V(e)),tt(),q=document.querySelector(".raiting-form"),q.addEventListener("submit",it)}async function nt(e){const t=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let o=window.location.href.toString().slice(-14);if(t.dataset.favorite==="false"){t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="true";let i=await g.getOneExercises(s);et(i),o==="favorites.html"&&_()}else t.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,t.dataset.favorite="false",k(s),o==="favorites.html"&&_()}function lt({target:e}){if(ot.includes(e.nodeName)&&e.classList[0]!=="favourites_btn_trash_icon"&&e.classList[0]!=="favourites_btn_workout")return x=e.dataset.id,ct(x);if(e.classList[0]==="favourites_btn_trash_icon"){const t=e.dataset.id;k(t),_()}}at.addEventListener("click",lt);const ct=async e=>{let t=await g.getOneExercises(e);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:i})=>i===e)?t.favorite=!0:t.favorite=!1,u.open(Z(t)),E=document.querySelector(".refresh-button-js"),$=document.querySelector(".add-rating"),$.addEventListener("click",rt),E.addEventListener("click",nt)};export{_ as a,P as b,X as c,f as d,ft as e,g as f,K as l,L as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-aa608ad2.js.map
