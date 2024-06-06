(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const te=e=>{const{tag:t,attributes:r,dataAttributes:s,properties:o,eventListeners:n}=e,l=t instanceof HTMLElement;if(!l&&typeof t!="string")throw new Error("Please provide a string tag or a DOM element");const i=l?t:document.createElement(t);if(r instanceof Object)for(const c in r)i.setAttribute(c,r[c]);else r&&console.warn("Skipping 'attributes' since it is not an object.");if(s instanceof Object)for(const c in s)i.dataset[c]=s[c];else s&&console.warn("Skipping 'dataAttributes' since it is not an object.");if(o instanceof Object)for(const c in o)i[c]=o[c];else o&&console.warn("Skipping 'properties' since it is not an object.");if(n instanceof Object)for(const c in n){const u=n[c];if(typeof u!="function"){console.warn(`Skipping '${c}' handler, since it is not a function.`);continue}i.addEventListener(c,u)}else n&&console.warn("Skipping 'eventListeners' since it is not an object.");return i},V=({children:e,...t})=>{const r=te(t);if(e instanceof Object){Array.isArray(e)||(e=[e]);for(const s of e){const o=V(s);r.append(o)}}return r};let F=document.getElementById("studentResult"),ne=document.getElementById("student");function G(e,t,r,s,o){if(t=="none"||r=="none"||s=="none")return;let n=(t+r+s)/3;n>=18&&n<=20?n="great 👏":n>=15&&n<=18?n="vary good 👌":n>=10&&n<=15?n="nice":n>=5&&n<=10?n="bad":n=":/",F.classList.add("studentResult");let l=V({tag:"div",attributes:{class:"item"},children:[{tag:"span",properties:{textContent:"Student Name : "}},{tag:"span",attributes:{class:"studentName"},properties:{textContent:`${e} (${o})`}},{tag:"div",attributes:{class:"courses"},children:[{tag:"div",attributes:{class:"html"},children:[{tag:"span",properties:{textContent:"HTML: "}},{tag:"span",properties:{textContent:`${t}`}}]},{tag:"div",attributes:{class:"css"},children:[{tag:"span",properties:{textContent:"CSS: "}},{tag:"span",properties:{textContent:`${r}`}}]},{tag:"div",attributes:{class:"js"},children:[{tag:"span",properties:{textContent:"JS: "}},{tag:"span",properties:{textContent:`${s}`}}]}]},{tag:"p",properties:{textContent:n},attributes:{class:"detail"}}]});F.append(l)}function oe(e=[]){e.forEach(t=>{ne.innerHTML+=`<option value="${t.firstName} ${t.lastName}">${t.firstName} ${t.lastName} (${t.nationalCode})</option>`,G(`${t.firstName} ${t.lastName}`,t.rate.html,t.rate.css,t.rate.js,t.nationalCode)})}function re(e,t,r,s,o){let n=document.getElementsByClassName("item");for(let l=0;l<n.length;l++)n[l].children[1].innerText==e&&(n[l].children[2].children[0].children[1].innerText=t,n[l].children[2].children[1].children[1].innerText=r,n[l].children[2].children[2].children[1].innerText=s)}function D(e){document.querySelectorAll(e).length<=0?document.body.classList.remove("stop-scrolling"):document.body.classList.add("stop-scrolling")}function O({silverBoxElement:e,timer:t,onClose:r,element:s}){t?se(e):s&&s.closest(".silverBox-container").remove(),typeof r=="function"&&r()}function se(e){e&&e.remove(),D(".silverBox-overlay")}function le(){const e=document.createElement("span");return e.classList.add("silverBox-button-loading-animation"),e}function ie(e,t,r,s){const o=document.createElement("button");e.onClick&&o.addEventListener("click",e.onClick),Object.entries(e.dataAttribute||{}).map(([l,i])=>{o.setAttribute(`data-${l}`,i)}),e.bgColor&&(o.style.backgroundColor=e.bgColor),e.borderColor&&(o.style.borderColor=e.borderColor),e.textColor&&(o.style.color=e.textColor),e.disabled&&(o.disabled=e.disabled),o.classList.add("silverBox-button",t),e.id&&(o.id=e.id),e.className&&(o.classList+=` ${e.className}`),e.closeOnClick!==!1&&o.addEventListener("click",()=>{O({onClose:s,element:o})}),e.loadingAnimation!==!1&&o.addEventListener("click",()=>{o.classList.add("silverBox-loading-button")});const n=document.createElement("span");return n.classList="silverBox-button-text",n.textContent=e.text?e.text:r,o.append(P(e.iconStart||""),n,le(),P(e.iconEnd||"")),o}function P(e){if(!e)return"";const t=document.createElement("img");return t.src=e,t.classList="silverBox-button-icon",t}function ae({type:e,select:t,numberOnly:r,placeHolder:s,readOnly:o,label:n,hint:l,width:i,height:c,maxLength:u,textAlign:b,fontSize:I,placeHolderFontSize:T,name:f,className:h,id:p,value:x}){const a=document.createElement("div");a.classList="silverBox-input-wrapper";const C=document.createElement("label");if(C.textContent=n,t){const E=document.createElement("select");E.classList="silverBox-select",t.map(d=>{const B=document.createElement("option");B.value=d.value??"",B.textContent=d.text??d.value??"",d.disabled&&B.setAttribute("disabled",""),d.selected&&B.setAttribute("selected",""),E.append(B)}),a.append(E)}else{const E=e.toLowerCase()==="textarea",d=document.createElement(E?"textarea":"input");!E&&e&&d.setAttribute("type",e),d.value=x??"",s&&(d.placeholder=s),u&&(d.maxLength=u),b&&(d.style.textAlign=b),i&&(d.style.width=i),c&&(d.style.height=c),I&&(d.style.fontSize=I),r&&d.addEventListener("input",()=>{d.value=d.value.replace(/[۰-۹]/g,ee=>"۰۱۲۳۴۵۶۷۸۹.".indexOf(ee)).replace(/[^0-9.]/g,"")});const B=T??I??!1;B!==!1&&d.style.setProperty("--silverBox-placeHolder-fontSize",B),f&&(d.name=f),h&&(d.classList+=` ${h}`),p&&(d.id=p),i&&(a.style.width="fit-content"),o&&d.setAttribute("readonly",""),n&&a.append(C),a.append(d)}const k=document.createElement("span");return k.classList="silverBox-input-hint",k.textContent=l??"",l&&a.append(k),a}function U(e,t){Object.keys(t).map(r=>{t[r]&&e.append(t[r])})}function ce({direction:e,components:t,positionClassName:r,theme:s="light",centerContent:o}){const n=document.createElement("div");n.classList.add("silverBox-container",r),n.dataset.theme=s;const l=document.createElement("div");if(l.classList.add("silverBox"),e&&l.setAttribute("dir",e),o&&(l.style.textAlign="center"),U(l,t),l.childElementCount!==0&&n.append(l),n.childElementCount!==0)return n}const w=({alertIcon:e,customIcon:t,customSvgIcon:r,isCentred:s=!1,customIconClassName:o,customIconId:n,customSvgIconClassName:l,customSvgIconId:i})=>{if(t)return J(t,s,o,n,!1).cloneNode(!0);if(r)return J(r,s,l,i,!0).cloneNode(!0);if(H[e]){if(e==="closeButton")return H[e];const c=H[e].cloneNode(!0);return s&&c.classList.add("silverBox-centered-icon"),c}return null},H={warning:$("silverBox-warning","!"),success:$("silverBox-tick-mark","","inside"),info:$("silverBox-info","i"),error:$("silverBox-error","","x"),question:$("silverBox-question","?"),closeButton:'<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><line x1="368" y1="368" x2="144" y2="144" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/><line x1="368" y1="144" x2="144" y2="368" style="fill:none;stroke:#667085;stroke-linecap:round;stroke-linejoin:round;stroke-width:33px"/></svg>'};function $(e,t,r){const s=document.createElement("div");if(s.classList=e,s.classList.add("silverBox-icon","silverBox-default-icon"),r){const o=document.createElement("div");o.classList=r,s.appendChild(o)}else if(t){const o=document.createElement("span");o.textContent=t,s.appendChild(o)}return s}function J(e,t,r,s,o){const n=document.createElement("div");if(n.classList.add("silverBox-image-wrapper"),t&&n.classList.add("silverBox-centered-icon"),s&&(n.id=s),r&&(n.classList+=` ${r}`),o)n.innerHTML+=e;else{const l=document.createElement("img");l.src=e,l.classList="silverBox-icon silverBox-custom-icon",n.append(l)}return n}function de({titleConfig:e,icon:t,showCloseButton:r,centerContent:s,onCloseConfig:o}){const n=document.createElement("div");n.classList.add("silverBox-header-wrapper");const l=document.createElement("div");l.classList.add("silverBox-icon-wrapper");const i=document.createElement("h2");if(i.classList.add("silverBox-header-title"),typeof e=="string"&&(e={text:e}),e!=null&&e.customIcon){const u=w({customIcon:e.customIcon});e!=null&&e.customIconId&&(u.children[0].id=e.customIconId),e!=null&&e.customIconClassName&&(u.children[0].classList+=` ${e.customIconClassName}`),i.append(u)}else if(e!=null&&e.customSvgIcon){const u=w({customSvgIcon:e.customSvgIcon});e!=null&&e.customSvgIconId&&(u.children[0].id=e.customSvgIconId),e!=null&&e.customSvgIconClassName&&(u.children[0].classList+=` ${e.customSvgIconClassName}`),i.append(u)}else if(e!=null&&e.alertIcon){const u=w({alertIcon:e.alertIcon});i.append(u)}if(i.childElementCount>=1&&i.classList.add("silverBox-title-has-icon"),s&&i.classList.add("silverBox-title-centred"),e!=null&&e.text){const u=document.createElement("span");i.classList.add("silverBox-title-text"),u.textContent=e.text,i.append(u)}const c=document.createElement("span");return c.innerHTML=w({alertIcon:"closeButton"}),c.classList.add("silverBox-close-button"),c.addEventListener("click",()=>{O({onClose:o,element:c})}),t&&l.appendChild(t),r&&l.appendChild(c),l.childElementCount>=1&&n.append(l),e&&n.appendChild(i),n}function ue({htmlContent:e,bodyText:t,components:r,isInput:s}){const o=document.createElement("div");if(o.classList="silverBox-body-wrapper",e){const l=document.createElement("div");l.classList.add("silverBox-body-description"),e.outerHTML?l.append(e):l.innerHTML=e,o.appendChild(l)}else if(t){const l=document.createElement("p");l.textContent=t,l.classList.add("silverBox-body-description"),o.appendChild(l)}let n;return s&&(n=document.createElement("form"),n.classList.add("silverBox-form"),n.addEventListener("submit",l=>{l.preventDefault()}),o.append(n)),U(n||o,r),o}function me({footerContent:e}){const t=document.createElement("div");t.classList.add("silverBox-footer-wrapper");const r=document.createElement("hr");return t.append(r),t.innerHTML+=e,t}function pe(e){e=e.toLowerCase();const t=document.querySelectorAll(".silverBox-container");if(e==="first"&&(e=1),e==="last"&&(e=t.length),e==="all")for(let r=0;r<t.length;r++)t[r].remove();else Number(e)>0&&t[Number(e)-1].remove()}function ve(e){let t=document.querySelectorAll(".silverBox-button-wrapper");if(e.toLowerCase(),e==="first"&&(e=1),e==="last"&&(e=t.length),e==="all")for(let r=0;r<t.length;r++)t[r].childNodes.forEach(s=>{s.classList.remove("silverBox-loading-button")});else Number(e)>0&&t[Number(e)-1].childNodes.forEach(r=>{r.classList.remove("silverBox-loading-button")})}const j=e=>Number(e)?`${e}ms`:(parseInt(e)||parseFloat(e))&&(e.endsWith("ms")||e.endsWith("s"))?e:"300ms",fe=({silverBoxElement:e,timerConfig:t,onClose:r})=>{"showBar"in t||(t.showBar=!0),"pauseOnHover"in t||(t.pauseOnHover=!0);let s=document.querySelectorAll(".silverBox");s=s[s.length-1];const o=document.createElement("div");o.classList="timer-bar";const n=document.createElement("div");n.classList="timer-bar-wrapper",t.duration&&n.append(o),o.style.animation=`timer ${j(t.duration)} linear`,(t==null?void 0:t.pauseOnHover)!==!1&&s&&(s.addEventListener("mouseover",()=>{o.style.animationPlayState="paused"}),s.addEventListener("mouseout",()=>{o.style.animationPlayState="running"})),s&&(t!=null&&t.showBar)?(s.append(n),o.addEventListener("animationend",()=>{O({silverBoxElement:e,timer:t.duration,onClose:r})})):setTimeout(()=>{O({silverBoxElement:e,timer:t.duration,onClose:r})},t.duration)},K=e=>{const t={name:"popUp",duration:"300ms",timingFunction:"linear",delay:"0ms",iterationCount:"1",direction:"normal",fillMode:"none"},r={...t,...e,duration:j(e.duration)||t.duration,delay:j(e.delay)||t.delay},{name:s,duration:o,timingFunction:n,delay:l,iterationCount:i,direction:c,fillMode:u}=r;return`${s} ${o} ${n} ${l} ${i} ${c} ${u}`};function v(e={}){var t,r;try{if(Object.keys(e).length===0)throw new Error("You can't create silverBox with an empty config.");(t=e.preOpen)==null||t.call(e),"removeSilverBox"in e&&pe(e.removeSilverBox),"removeLoading"in e&&ve(e.removeLoading);const s={},o={},n=document.createElement("div");n.classList="silverBox-input-container";const l=document.createElement("div");l.classList="silverBox-button-wrapper";const i=()=>({alertIcon:e.alertIcon,customIcon:e.customIcon,isCentred:e.centerContent,customIconClassName:e.customIconClassName,customIconId:e.customIconId,customSvgIcon:e.customSvgIcon,customSvgIconClassName:e.customSvgIconClassName,customSvgIconId:e.customSvgIconId}),c=de({titleConfig:e.title,icon:w(i()),showCloseButton:e.showCloseButton,centerContent:e.centerContent,onCloseConfig:e.onClose});if(c.childElementCount!==0&&(s.header=c),"input"in e){const p=a=>({type:"type"in a?a.type:"",select:a.select,numberOnly:a.numberOnly,hint:a.hint,label:a.label,placeHolder:a.placeHolder,readOnly:a.readOnly,width:a.width,height:a.height,maxLength:a.maxLength,textAlign:a.textAlign,fontSize:a.fontSize,placeHolderFontSize:a.placeHolderFontSize,name:a.name,className:a.className,id:a.id,value:a.value}),x=a=>{"multiplyBy"in a||(a.multiplyBy=1);for(let C=1;C<=a.multiplyBy;C++)n.append(ae(p(a)))};Array.isArray(e.input)?e.input.forEach(a=>x(a)):x(e.input),n.childElementCount&&(o.input=n)}const u=[{type:"confirmButton",text:"Confirm"},{type:"denyButton",text:"Deny"},{type:"cancelButton",text:"Cancel"},{type:"customButton",text:"Custom"}];for(const p of u)p.type in e&&e[p.type].showButton!==!1&&l.append(ie(e[p.type],`silverBox-${p.text.toLowerCase()}-button`,p.text,e.onClose));"buttonsDirection"in e&&(l.style.direction=e.buttonsDirection),l.childElementCount&&(o.button=l);const b=ue({htmlContent:e.html,bodyText:e.text,components:o,isInput:e.input});b.childElementCount&&(s.body=b),e.footer&&(s.footer=me({footerContent:e.footer}));const I=p=>{if(Object.keys(s).length===0)return null;const x=ce({components:s,positionClassName:p,theme:e.theme,direction:e.direction,centerContent:e.centerContent});return document.body.append(x),x},T="position"in e?`silverBox-${e.position}`:"silverBox-overlay",f=I(T);"timer"in e&&((typeof e.timer=="number"||typeof e.timer=="string")&&(e.timer={duration:e.timer}),fe({silverBoxElement:f,timerConfig:e.timer,pauseTimerOnHover:e.pauseTimerOnHover,showTimerBar:e.showTimerBar,onClose:e.onClose}));let h=document.querySelectorAll(".silverBox-overlay");if(h=h[h.length-1],h&&e.closeOnOverlayClick!==!1&&h.addEventListener("click",p=>{p.target===h&&O({onClose:e.onClose,element:h}),D(".silverBox-overlay")}),D(".silverBox-overlay"),"silverBoxId"in e&&(f.id=e.silverBoxId),"silverBoxClassName"in e&&(f.classList+=` ${e.silverBoxClassName}`),"animation"in e){const p=f.querySelector(".silverBox");p&&(p.style.animation=Array.isArray(e.animation)?e.animation.map(x=>K(x)).join(", "):K(e.animation))}return(r=e.didOpen)==null||r.call(e),f===null?null:{remove:()=>{document.body.removeChild(f)},removeLoading:(p="")=>{f.querySelectorAll(`button${p}`).forEach(a=>{a.classList.remove("silverBox-loading-button")})}}}catch(s){throw s}}class M{constructor(t,r,s,o,n){if(Array.isArray(o))for(let l=0;l<o.length;l++){const i=o[l];if(`${i.firstName} ${i.lastName} (${i.nationalCode})`==t){switch(r){case"JS":i.rate.js=parseFloat(s),v({position:"top-right",alertIcon:"info",text:"Score Is Added!",centerContent:!0,timer:{duration:"3000ms",pauseOnHover:!1},showCloseButton:!0});break;case"HTML":i.rate.html=parseFloat(s),v({position:"top-right",alertIcon:"info",text:"Score Is Added!",centerContent:!0,showCloseButton:!0,timer:{duration:"3000ms",pauseOnHover:!1}});break;case"CSS":i.rate.css=parseFloat(s),v({position:"top-right",alertIcon:"info",text:"Score Is Added!",centerContent:!0,showCloseButton:!0,timer:{duration:"3000ms",pauseOnHover:!1}});break}if(i.rate.html!=="none"&&i.rate.css!=="none"&&i.rate.js!=="none"){G(`${i.firstName} ${i.lastName}`,i.rate.html,i.rate.css,i.rate.js,i.nationalCode);break}}}}}M.prototype.editScore=(e,t,r,s,o)=>{Array.isArray(s)&&s.forEach(n=>{if(`${n.firstName} ${n.lastName} (${n.nationalCode})`==e){switch(t){case"JS":n.rate.js=parseFloat(r);break;case"HTML":n.rate.html=parseFloat(r);break;case"CSS":n.rate.css=parseFloat(r);break}v({position:"top-right",alertIcon:"info",text:"Score Is Edited!",centerContent:!0,showCloseButton:!0,timer:{duration:"3000ms",pauseOnHover:!1}}),re(`${n.firstName} ${n.lastName} (${n.nationalCode})`,n.rate.html,n.rate.css,n.rate.js)}})};class he{constructor(t,r,s,o){return s.innerHTML+=`<option value="${t} ${r} ${o}">${t} ${r} (${o})</option>`,{firstName:t,lastName:r,nationalCode:o,rate:{js:"none",html:"none",css:"none"}}}}function W(e="",t){localStorage.setItem(e,t)}function xe(e=""){let t=localStorage.getItem(e);return t?JSON.parse(t):"none"}function Q(e,t){let r="";if(Array.isArray(t))for(let s=0;s<t.length;s++){const o=t[s];if(`${o.firstName} ${o.lastName} (${o.nationalCode})`==e)return o.rate.html=="none"&&(r+="'HTML' "),o.rate.css=="none"&&(r+="'CSS' "),o.rate.js=="none"&&(r+="'JS' "),r==""?"all courses is ok":`The ${r} course is empty`}}function Be(e,t,r,s){if(Array.isArray(t))for(let o=0;o<t.length;o++){const n=t[o];if(`${n.firstName} ${n.lastName} (${n.nationalCode})`==e){for(let l=0;l<r.length;l++){const i=r[l];let c=i.children[1].innerText;`${n.firstName} ${n.lastName} (${n.nationalCode})`==c&&i.remove()}for(let l=0;l<s.children.length;l++){const i=s.children[l];`${n.firstName} ${n.lastName} (${n.nationalCode})`==i.innerText&&i.remove()}return t.splice(o,1),!0}else v({alertIcon:"error",text:"There are no student.",centerContent:!0,cancelButton:{text:"OK"}})}}let m=[];ge();document.querySelector(".login-card");let g=document.getElementById("error"),ye=document.getElementById("deleteStudent"),Le=document.getElementById("clearStudents"),Ee=document.getElementById("set"),Se=document.getElementById("add"),R=document.getElementById("firstName"),z=document.getElementById("lastName"),A=document.getElementById("score"),S=document.getElementById("student"),be=document.getElementById("course"),X=document.getElementById("studentResult"),y=document.getElementById("national-code"),Y=document.querySelectorAll(".login-card input"),L="",N="",Z="";window.onload=()=>{document.querySelector(".column:nth-child(2)"),document.body.offsetWidth<400};function Ie(){Se.addEventListener("click",Ce),Ee.addEventListener("click",$e),S.addEventListener("change",Oe),be.addEventListener("change",Ae),Le.addEventListener("click",_),ye.addEventListener("click",ke)}Ie();function Ce(e){if(e.preventDefault(),R.value.length>0&&z.value.length>0)if(y.value.length==10)if(we(y.value)==!1)v({alertIcon:"error",text:"Your Natioanl Code is Duplicate.",centerContent:!0,cancelButton:{text:"OK"}});else{let r=new he(R.value,z.value,S,y.value);m.push(r),W("studentsList",JSON.stringify(m)),q(),v({title:{text:"Success",alertIcon:"success"},text:"Student Is Add"})}else y.value.length>10?v({alertIcon:"error",text:"The Digits of Your Code are Greater Than 10, Try Again.",centerContent:!0,cancelButton:{text:"OK"}}):y.value.length<10&&v({alertIcon:"error",text:"The Digits of Your Code are Less Than 10, Try Again.",centerContent:!0,cancelButton:{text:"OK"}})}function $e(){L!==""&&A.value.length>0&&N!==""&&(A.value>20?v({alertIcon:"error",text:"Score Value Is Less Than 100.",centerContent:!0,cancelButton:{text:"OK"}}):Array.isArray(m)&&m.forEach(e=>{`${e.firstName} ${e.lastName} (${e.nationalCode})`==L&&(e.rate.js!="none"&&e.rate.html!="none"&&e.rate.css!="none"?new M().editScore(L,N,A.value,m,y):new M(L,N,A.value,m,y.value),g.style.visibility="visible",g.innerText=Q(L,m))}),W("studentsList",JSON.stringify(m)),q())}function we(e){for(let t=0;t<m.length;t++)if(m[t].nationalCode==e)return!1}function Oe(e){let t=e.target.selectedIndex;L=e.target.options[t].text,g.innerText=Q(L,m),g.style.visibility="visible"}function Ae(e){let t=e.target.selectedIndex;N=e.target.options[t].text}function Ne(e){let t=e.target.selectedIndex;Z=e.target.options[t].text}function _(e){if(e==!0){q(),localStorage.removeItem("studentsList");let t=document.getElementsByClassName("item");for(let r=0;r<t.length;r++)t[r].remove();X.classList.remove("studentResult");for(let r=0;r<S.children.length;r++){const s=S.children[r];s==S.children[0]||s.remove()}m=[],v({position:"top-right",alertIcon:"info",text:"All Student is Deleted!",centerContent:!0,showCloseButton:!0,timer:{duration:"3000ms",pauseOnHover:!1}})}else Te("Delete","Are You Sure To Delete All Students","Confrim","There Are No Students",m,_)}function q(){for(let e=0;e<Y.length;e++){const t=Y[e];t.value=""}}function ge(){let e=xe("studentsList");e!="none"&&(m=e,oe(m))}function Te(e="",t="",r="",s="",o=[],n){o.length==0?v({alertIcon:"error",text:s,centerContent:!0,cancelButton:{text:"OK"}}):(v({title:{text:r},centerContent:!0,text:t,showCloseButton:!0,confirmButton:{closeOnClick:!0,text:e,id:"deleteBtn"},cancelButton:{}}),document.getElementById("deleteBtn").addEventListener("click",i=>(n&&n(!0),!0)))}function ke(e){if(m.length==0){v({alertIcon:"error",text:"There are no students.",centerContent:!0,cancelButton:{text:"OK"}});return}let t=document.createElement("select");t.id="deleteNational";let r=document.createElement("option");r.innerText="Choese Student",t.append(r),He(t),v({title:{text:"Delete Student"},centerContent:!0,text:"Enter Student Information",showCloseButton:!0,confirmButton:{text:"Delete",closeOnClick:!0,id:"deleteBtn"},cancelButton:{},html:t});let s=document.getElementById("deleteNational"),o=document.getElementById("deleteBtn"),n=document.getElementsByClassName("item");s.addEventListener("change",Ne),o.addEventListener("click",()=>{Be(Z,m,n,S)==!0&&v({position:"top-right",alertIcon:"info",text:"Student is Deleted!",centerContent:!0,showCloseButton:!0,timer:{duration:"3000ms",pauseOnHover:!1}}),W("studentsList",JSON.stringify(m)),n.length==0&&X.classList.remove("studentResult")})}function He(e){for(let t=0;t<m.length;t++){const r=m[t];let s=document.createElement("option");s.innerText=`${r.firstName} ${r.lastName} (${r.nationalCode})`,e.append(s)}}