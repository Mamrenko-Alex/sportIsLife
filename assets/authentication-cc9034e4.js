import{G as n,h as r,j as c}from"./vendor-2296de4d.js";import{l as d,a as g,b as l}from"./exercises-right-part-filter-aa608ad2.js";const m=new n,t=document.getElementById("sign-in"),s=document.getElementById("sign-out"),o=document.getElementById("user");o.innerHTML=localStorage.getItem("user");const u=window.location.href.toString();localStorage.getItem("user")&&(s.classList.remove("display-none"),t.classList.add("display-none"),t.style.display="none");const p=async()=>{await r(l,m).then(e=>{n.credentialFromResult(e).accessToken;const i=e.user;localStorage.user=i.email,o.innerHTML=localStorage.getItem("user"),s.classList.remove("display-none"),t.classList.add("display-none"),t.style.display="none",d()}).catch(e=>{const a=e.message;console.log(a),n.credentialFromError(e)})},y=async()=>{await c(l).then(()=>{o.innerHTML="",localStorage.removeItem("user"),u.slice(-14)===favorites.html&&g()}).catch(e=>{console.log(e.message)}),s.classList.add("display-none"),t.classList.remove("display-none"),t.style.display="flex",localStorage.removeItem("favorites")};t.addEventListener("click",p);s.addEventListener("click",y);export{p as googleSignin,y as logOut};
//# sourceMappingURL=authentication-cc9034e4.js.map
