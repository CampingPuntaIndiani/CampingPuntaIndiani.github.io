var ToogleSupport=function(){Array.prototype.forEach.call(document.querySelectorAll(".nav-toggle"),function(b){b.addEventListener("click",function(){toggleClick(this)})})},toggleClick=function(b){b.classList.toggle("is-active");Array.prototype.forEach.call(b.parentNode.querySelectorAll(".nav-menu"),function(b){b.classList.toggle("is-active")})},StickyBar=function(){var b=0,c=!1,a=document.getElementById("menu-top"),d=document.getElementById("menu-bar");return function(){var e=window.pageYOffset||
document.scrollTop||document.documentElement.scrollTop||document.body.scrollTop;e>=window.innerHeight!==c&&(document.body.classList.toggle("fix"),c=!c,b=0);c?d.classList.contains("is-active")&&(0===b?b=e:50<=Math.abs(e-b)&&(toggleClick(d),b=0)):a.classList.contains("is-active")?0===b?b=e:50<=Math.abs(e-b)&&(toggleClick(a),b=0):b=0}}(),GMapHack=function(){Array.prototype.forEach.call(document.getElementsByClassName("gmap"),function(b){var c=b.parentNode;b.classList.add("scrollOff");c.addEventListener("click",
function(){b.classList.remove("scrollOff")});c.addEventListener("mouseleave",function(){b.classList.add("scrollOff")})})},EnancheForm=function(){var b=function(){var b=new ComboDate("arrival"),a=new ComboDate("departure"),d=document.getElementById("arrival_error"),e=document.getElementById("departure_error");return function(){var c=b.isValid(),g=a.isValid();c&&g&&b.getValue()>=a.getValue()&&(b.setError("Must be before then departure"),a.setError("Must be after then arriaval"));void 0!==b.getError()&&
10==b.getValueString().length&&(d.innerHTML="&nbsp;"+b.getError());void 0!==a.getError()&&10==a.getValueString().length&&(e.innerHTML="&nbsp;"+a.getError())}}();document.getElementById("arrival").addEventListener("change",b);document.getElementById("departure").addEventListener("change",b)},BindAccomodation=function(){var b=document.getElementById("kind"),c=document.getElementById("resource"),a=document.querySelectorAll("#resource optgroup");b.addEventListener("change",function(){Array.prototype.forEach.call(a,
function(a){a.style.display=a.dataset.kind==b.value?"":"none";a.disabled=a.dataset.kind!=b.value;a.dataset.kind==b.value&&(c.value=a.children[0].value)})})},fireEvent=function(b,c){if(void 0!==b)if("createEvent"in document){var a=document.createEvent("HTMLEvents");a.initEvent(c,!1,!0);b.dispatchEvent(a)}else b.fireEvent(c)},parseGet=function(b){for(var c,a,d=location.search.substr(1).split("&"),e=0;e<d.length;e++)a=d[e].split("="),a[0]===b&&(c=decodeURIComponent(a[1]));return c},cardChange=function(){var b=
document.getElementById("card"),c=document.getElementById("kind");return function(){var a=b.querySelectorAll("option[value="+b.value+"]"),a=0===a.length?void 0:a[0];if(void 0!==a&&a.dataset.only){for(var d=c.querySelectorAll("option[value="+c.value+"]"),a=a.dataset.only.split(","),e=0;e<c.children.length;e++){for(var f=!1,g=0;g<a.length;g++)f=f||c.children[e].value===a[g];c.children[e].style.display=f?"":"none";c.children[e].disabled=!f}if(d.length){d=d[0];d=d.parentNode.dataset.kind;e=!1;for(f=0;f<
a.length;f++)e=e||d===a[f];e||(c.value=c.querySelectorAll("option[value="+a[0]+"]")[0].value,fireEvent(c,"change"))}}else for(a=0;a<c.children.length;a++)c.children[a].style.display="",c.children[a].disabled=!1}}(),SetFromQuery=function(){var b=parseGet("pitch");if(void 0!==b){var c=document.getElementById("kind");c.value=b;fireEvent(c,"change")}var c=parseGet("promotion"),b=document.getElementById("card"),a;b.addEventListener("change",cardChange);void 0!==c&&(a=b.querySelectorAll("option[data-id="+
c+"]"),0===a.length?a=void 0:(a=a[0],b.value=a.value,fireEvent(b,"change")));for(c=0;c<b.children.length;c++){var d=b.children[c];if("always"!==d.dataset.show){for(var e=0;e<d.children.length;e++){var f=d.children[e];"always"!==f.dataset.show&&f!==a&&(d.removeChild(f),e--)}0===d.children.length&&(b.removeChild(d),c--)}}},ModalSupport=function(){var b=function(a,b){var c=new XMLHttpRequest;c.open("GET",a,!0);c.onload=function(){200<=c.status&&400>c.status&&b(c.responseText);console.error(c.status)};
c.onerror=function(){console.error(c.status)};c.send()},c=document.getElementsByClassName("modal")[0],a=document.getElementsByClassName("modal-card-title")[0],d=document.getElementsByClassName("modal-card-body")[0];Array.prototype.forEach.call(document.querySelectorAll("a[data-modal]"),function(e){e.addEventListener("click",function(e){e.preventDefault();a.innerHTML=this.dataset.modal;b(this.href,function(a){d.innerHTML=a;c.classList.add("is-active")});ga("send","event","modal","open",this.href)})});
Array.prototype.forEach.call(document.querySelectorAll("[data-close-modal],.modal-background"),function(a){a.addEventListener("click",function(a){a.preventDefault();c.classList.remove("is-active")})})},SectionChange=function(){var b=document.getElementById("menu-desktop"),c=document.getElementById("menu-mobile");return function(a){if(a){var d=b.getElementsByClassName("is-active");0<d.length&&d[0].classList.remove("is-active");d=b.querySelectorAll('a[href="#'+a+'"]');0<d.length&&d[0].parentNode.classList.add("is-active");
d=c.getElementsByClassName("is-active");0<d.length&&d[0].classList.remove("is-active");d=c.querySelectorAll('a[href="#'+a+'"]');0<d.length&&d[0].classList.add("is-active");ga("send","event","section","read","sec_id")}}}(),SectionHandler=function(){var b=[];Array.prototype.forEach.call(document.querySelectorAll("section"),function(a){b.push({id:a.id,top:a.offsetTop})});Array.prototype.sort(b,function(a,b){return a.top-b.top});var c;window.addEventListener("scroll",function(){for(var a=window.pageYOffset||
document.scrollTop||document.documentElement.scrollTop||document.body.scrollTop,a=a+window.innerHeight/3,d=0,e=1;!(b[d].top<=a&&a<b[e].top)&&e!==b.length-1;)d=e,e+=1;a=b[d];a.id!==c&&(c=a.id,SectionChange(a.id))})},LifeAnimation=function(){window.pause=!1;window.carousellCallback=void 0;document.querySelectorAll('a[data-carousell="play"]')[0].addEventListener("click",function(){this.classList.toggle("non-active");this.nextElementSibling.classList.toggle("non-active");b()});document.querySelectorAll('a[data-carousell="pause"]')[0].addEventListener("click",
function(){this.classList.toggle("non-active");this.previousElementSibling.classList.toggle("non-active");window.clearTimeout(window.carousellCallback)});document.querySelectorAll('a[data-carousell="next"]')[0].addEventListener("click",function(){window.clearTimeout(window.carousellCallback);b()});document.querySelectorAll('a[data-carousell="back"]')[0].addEventListener("click",function(){window.clearTimeout(window.carousellCallback);b(!0)});var b=function(c){var a=document.querySelectorAll(".carousell .is-active")[0];
a.classList.remove("is-active");c?(c=a.previousElementSibling)||(c=a.parentNode.children[a.parentNode.children.length-1]):(c=a.nextElementSibling)||(c=a.parentNode.children[0]);c.classList.add("is-active");window.carousellCallback=setTimeout(b,5E3)};b()};(function(){document.body.classList.remove("nojs");window.addEventListener("scroll",StickyBar);StickyBar();ToogleSupport();GMapHack();EnancheForm();BindAccomodation();SetFromQuery();ModalSupport();SectionHandler();LifeAnimation()})();
