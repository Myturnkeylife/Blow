function findCorrespondingTocTitle(t){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+t.id)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");let n=null;const t=new window.IntersectionObserver(e=>{e.some(t=>{if(console.log("before"),console.log("entry",t),console.log("current",n.target.getboundingClientRect().y<0),t.isIntersecting&&(null===n||n.target.getboundingClientRect().y<0)){console.log("entered");let e=findCorrespondingTocTitle(t.target);return e.parentElement.classList.add("bg-blue-800"),n=t,!0}if(console.log("after"),console.log("entry",t),console.log("current",n.target.getboundingClientRect().y<0),!t.isIntersecting){let e=findCorrespondingTocTitle(t.target);return e.parentElement.classList.remove("bg-blue-800"),e.parentElement.nextElementSibling.classList.add("bg-blue-800"),!0}})},{root:null,threshold:.1});var o=[];[...e].forEach(e=>{o.push(e.href.substring(e.href.indexOf("#")))});const l=document.querySelectorAll(o.join(","));l.forEach(e=>{t.observe(e)})});