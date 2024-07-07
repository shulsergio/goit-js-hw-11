import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true"};function y(i){const r=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${i}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function c(){f.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const u=document.querySelector(".main-list");let g=new d(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(i){u.innerHTML="",u.insertAdjacentHTML("beforeend",x(i.hits)),g.refresh()}function x(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${r}>
                <img
                  class="gallery-image"
                  src=${o}
                  alt=${s}

                />
              </a>
              <ul class="adds-list">
                <li class="info-item">
                  <p class="text-item text-item-name">Likes</p>
                  <p class="text-item">${e}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Views</p>
                  <p class="text-item">${t}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${a}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${p}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const m=document.querySelector(".loader"),l=document.querySelector(".input-query"),b=document.querySelector("#btn-submit");b.addEventListener("click",L);function L(i){m.style.display="inline-block",i.preventDefault();let o=l.value.replace(/\s+/g,"+").toLowerCase();console.log("InputQuery.value- ",l.value),console.log("queryData- ",o),y(o).then(r=>{m.style.display="none",r.totalHits===0?c():h(r)}).catch(c).finally(()=>{l.value=""})}
//# sourceMappingURL=commonHelpers.js.map
