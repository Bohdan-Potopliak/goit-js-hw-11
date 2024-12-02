import{S as p,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="47392325-3e255e53541a2cdc9281782e2",d="https://pixabay.com/api/";function h(s){const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function g(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:m})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img
            class="gallery-image"
            src="${o}"
            alt="${n}"
            />
        </a>
        <ul class="bottom-bar">
            <li>
                <p class="bottom-txt">Likes</p>
                <p class="bottom-value">${e}</p>
            </li>
            <li>
                <p class="bottom-txt">Views</p>
                <p class="bottom-value">${t}</p>
            </li>
            <li>
                <p class="bottom-txt">Comments</p>
                <p class="bottom-value">${a}</p>
            </li>
            <li>
                <p class="bottom-txt">Downloads</p>
                <p class="bottom-value">${m}</p>
            </li>
        </ul>
    </li>`).join("")}const i=document.querySelector(".gallery"),y=document.querySelector(".js-search-form"),c=document.getElementById("loader");let u;y.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.target.elements.search.value.trim();w(o)&&(c.style.display="flex",h(o).then(r=>{if(r.hits.length===0){L(),i.innerHTML="";return}i.innerHTML=g(r.hits),u=new p(".gallery a",{captionsData:"alt",captionDelay:250}),u.refresh()}).catch(r=>{l.error({message:`Something went wrong: ${r.message}`})}).finally(()=>{c.style.display="none",s.target.reset()}))}function L(){l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function w(s){return s?!0:(l.warning({message:"Please enter a search query."}),!1)}
//# sourceMappingURL=index.js.map
