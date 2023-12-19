var J=Object.defineProperty;var D=(t,e,s)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var B=(t,e,s)=>(D(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/main-110d946b.js";import{i as P,g as z,a as Q,b as G,c as K,d as Y,e as N,s as W,G as w,f as X,h as Z,j as g}from"./assets/vendor-ac1aa0cc.js";function V(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",e.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const n="/sportIsLife/assets/sprite-9db62079.svg",h=(t,e)=>t.length<=e?t:`${t.slice(0,e)}...`;function tt(t){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),t.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const s=t.map(({_id:a,target:r,name:l,bodyPart:c,burnedCalories:i,time:L})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${h(r,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${a}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${a}>
            <use class="favourites_btn_trash_icon" href="${n}#icon-trash" data-id=${a}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text" data-id=${a}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${a}>
            <use href="${n}#icon-arrow" data-id=${a}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${n}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${h(l,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${i}/${L}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${h(c,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${h(r,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=s}const et={apiKey:"AIzaSyBNBMjRxNAY7Ev3P0n12UWF7CdjphLNQ5M",authDomain:"hosting-test-2fa75.firebaseapp.com",projectId:"hosting-test-2fa75",storageBucket:"hosting-test-2fa75.appspot.com",messagingSenderId:"882269537085",appId:"1:882269537085:web:b0e1d25d79d88d76b4bb54"},A=P(et),S=z(A),E=Q(A),st=async t=>{const e=S.currentUser;if(e){const s=t;try{W(N(E,e.email,t._id),s)}catch(a){console.log(a.message)}}},at=async t=>{const e=localStorage.getItem("user");if(e)try{Y(N(E,e,t))}catch(s){console.log(s.message)}},U=async()=>{const t=localStorage.getItem("user"),e=[];if(!t)return;(await G(K(E,t))).forEach(a=>{e.push(a.data())}),localStorage.setItem("favorites",JSON.stringify(e))};function m(){U();const t=JSON.parse(localStorage.getItem("favorites"));if(!(t!=null&&t.length)){V();return}tt(t)}const I=document.getElementById("home"),k=document.getElementById("favorites"),q=document.getElementById("home-text"),j=document.getElementById("favorites-text");document.getElementById("navigation");const ot=document.getElementById("sign-in-js"),it=document.getElementById("sign-out"),nt=window.location.href.toString();let rt=nt.slice(-14);const ct=()=>{rt==="favorites.html"?(I.classList.remove("active"),q.classList.remove("black"),k.classList.add("active"),j.classList.add("black"),ot.classList.add("visually-hidden"),it.classList.add("visually-hidden"),m()):(I.classList.add("active"),q.classList.add("black"),k.classList.remove("active"),j.classList.remove("black"))};ct();const lt=document.getElementById("burger-button"),x=document.getElementById("burger"),dt=document.getElementById("burger-button-close"),ut=async()=>{document.getElementById("header").classList.remove("container"),x.classList.remove("visually-hidden"),document.body.classList.add("disable-scroll")},mt=async t=>{document.getElementById("header").classList.add("container"),x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")},ht=t=>{t.key==="Escape"&&x.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};lt.addEventListener("click",ut);dt.addEventListener("click",mt);document.addEventListener("keydown",ht);const vt=new w,d=document.getElementById("sign-in"),b=document.getElementById("sign-out"),$=document.getElementById("user");$.innerHTML=localStorage.getItem("user");const gt=window.location.href.toString();localStorage.getItem("user")&&(b.classList.remove("display-none"),d.classList.add("display-none"),d.style.display="none");const ft=async()=>{await X(S,vt).then(t=>{w.credentialFromResult(t).accessToken;const s=t.user;localStorage.user=s.email,$.innerHTML=localStorage.getItem("user"),b.classList.remove("display-none"),d.classList.add("display-none"),d.style.display="none",U()}).catch(t=>{const e=t.message;console.log(e),w.credentialFromError(t)})},pt=async()=>{await Z(S).then(()=>{$.innerHTML="",localStorage.removeItem("user"),gt.slice(-14)===favorites.html&&m()}).catch(t=>{console.log(t.message)}),b.classList.add("display-none"),d.classList.remove("display-none"),d.style.display="flex",localStorage.removeItem("favorites")};d.addEventListener("click",ft);b.addEventListener("click",pt);class yt{constructor(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info"),this.closeButton,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}open(e){this.overlay.innerHTML=e,this.overlay.style.zIndex=3,this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),this.closeButton.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting"),this.overlay.style.display="none",this.overlay.style.zIndex=-1,this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),this.closeButton.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler)}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const p=new yt,o=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/quote`))()}async getByFilterName(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await o.handleErrors(async()=>{const a=new URLSearchParams({...e});return await o.fetchJson(`${o.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await o.handleErrors(async()=>await o.fetchJson(`${o.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await o.handleErrors(async()=>{const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await o.fetchJson(`${o.BASE_URL}/exercises/${e}/rating`,r)})()}async addSubscription(e){return await o.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await o.fetchJson(`${o.BASE_URL}/subscription`,a)})()}};let f=o;B(f,"BASE_URL","https://your-energy.b.goit.study/api");const _=new f,y={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",bt);async function bt(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:r}=JSON.parse(t);e!==s?C():(y.quoteText.innerHTML=a,y.quoteAuthor.innerHTML=r)}else C()}async function C(){const t=await _.getQuotes(),{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),y.quoteText.innerHTML=s,y.quoteAuthor.innerHTML=e}function _t(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${n}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}_t();function Lt(t){if(t)return t[0].toUpperCase()+t.slice(1)}function wt(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container-not-cursore" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>`:e>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-e}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${e}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function St(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${n}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${n}#icon-heart"></use>
                </svg>
              </button>`}function Et(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${n}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${Lt(t.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${wt(t.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${t.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${t.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${t.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${t.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${t.burnedCalories}/${t.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${t.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${t.favorite}">
          ${St(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function xt(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${n}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${n}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${n}#icon-star"></use>
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
  </div>`}function $t(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".exercises_btn_start_icon_rating");let s=t.querySelector(".user-rating-js");e.forEach((c,i)=>{c.addEventListener("mouseover",()=>a(i)),c.addEventListener("mouseout",r),c.addEventListener("click",()=>l(i+1))});function a(c){r();for(let i=0;i<=c;i++)e[i].classList.add("hovered"),s.textContent=`${i+1}`}function r(){e.forEach(c=>{const i=t.dataset.rating;c.classList.remove("hovered"),s.textContent=`${i||0}`})}function l(c){t.setAttribute("data-rating",c),e.forEach((i,L)=>{L+1<=c?i.classList.add("selected"):i.classList.remove("selected")})}}let u=[];const v=JSON.parse(localStorage.getItem("favorites"));v!=null&&v.length&&u.push(...v);function Bt(t){st(t),u.push(t),localStorage.setItem("favorites",JSON.stringify(u))}const F=t=>{at(t),u=u.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify([...u]))};g.settings({timeout:6e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class It{error(e){g.error({title:"Error",message:e})}success(e){g.success({title:"OK",message:e})}info(e){g.info({title:"Info",message:e})}}const M=new It,kt=document.querySelector(".filter-list-js");let T="";const qt=["BUTTON","svg","use","P"];let H,O,R;async function jt(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,r=document.querySelector(".raiting-form-field-input").value,l=document.querySelector(".raiting-form-field-comment").value,c={rate:Number(a),email:r,review:l},i=await _.addExercisesRate(e,c);i.message?M.error(`${i.message}`):(M.success(`Thank you for your mark - ${c.rate} for ${i.name}`),p.close())}async function Ct(){const t=document.querySelector(".modal-info").dataset.id;p.close(),p.open(xt(t)),$t(),R=document.querySelector(".raiting-form"),R.addEventListener("submit",jt)}async function Mt(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let r=window.location.href.toString().slice(-14);if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${n}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true";let l=await _.getOneExercises(s);Bt(l),r==="favorites.html"&&m()}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${n}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",F(s),r==="favorites.html"&&m()}function Tt({target:t}){if(qt.includes(t.nodeName)&&t.classList[0]!=="favourites_btn_trash_icon"&&t.classList[0]!=="favourites_btn_workout")return T=t.dataset.id,Ht(T);if(t.classList[0]==="favourites_btn_trash_icon"){const e=t.dataset.id;F(e),m()}}kt.addEventListener("click",Tt);const Ht=async t=>{let e=await _.getOneExercises(t);const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:l})=>l===t)?e.favorite=!0:e.favorite=!1,p.open(Et(e)),O=document.querySelector(".refresh-button-js"),H=document.querySelector(".add-rating"),H.addEventListener("click",Ct),O.addEventListener("click",Mt)};
//# sourceMappingURL=commonHelpers.js.map
