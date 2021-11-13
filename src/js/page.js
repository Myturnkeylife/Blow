document.addEventListener("DOMContentLoaded", function() {
  // ---------------- TOC Scrollspy --------------------
  const navbar_height = document.getElementById('navbar').clientHeight
  const table_of_content = document.getElementById('toc')
  const table_of_content_items = document.querySelectorAll('#toc li a')
  const page_content = document.getElementById('page-content')
  // const navSections = new Array($('.toc').length);
  // window.addEventListener('scroll', activeTocItem)

  // let has_one_active_toc = false
  let current_selected_toc = null
  let current_intersectiong_entry = null
  const observer = new window.IntersectionObserver(entries => {
    entries.some(entry => {
      console.log('before')
      console.log('entry', entry)
      console.log('current', current_intersectiong_entry.target.getboundingClientRect().y < 0)

      if (entry.isIntersecting && (current_intersectiong_entry === null || current_intersectiong_entry.target.getboundingClientRect().y < 0)) {
        console.log('entered')
        let res = findCorrespondingTocTitle(entry.target)
        res.parentElement.classList.add('bg-blue-800');
        current_intersectiong_entry = entry
        return true;
      }
      console.log('after')
      console.log('entry', entry)
      console.log('current', current_intersectiong_entry.target.getboundingClientRect().y < 0)
      if (!entry.isIntersecting) {
        let res = findCorrespondingTocTitle(entry.target) //First intersection entry
        res.parentElement.classList.remove('bg-blue-800');
        res.parentElement.nextElementSibling.classList.add('bg-blue-800');
        return true;
      }
      // console.log('observe')
      // Add 'active' class if observation target is inside viewport
      // console.log(entry)
      // console.log(entry.intersectionRatio)
      // if (entry.isIntersecting) {
      //   if (current_intersectiong_entry === null) { // first page load
      //     let res = findCorrespondingTocTitle(entry.target)
      //     res.parentElement.classList.add('bg-blue-800');
      //     current_intersectiong_entry = entry
      //     return true;
      //   }
      //   if (current_intersectiong_entry.boundingClientRect.y < 0) { //previous selected is out of viewport
      //     current_intersectiong_entry.target.classList.remove('bg-blue-800');
      //     let res = findCorrespondingTocTitle(entry.target) //First intersection entry
      //     res.parentElement.classList.add('bg-blue-800');
      //     current_intersectiong_entry = entry
      //     return true;
      //   }
      // }
      // console.log('after')
      // console.log('entry', entry)
      // console.log('current', current_intersectiong_entry)
      // if (entry.isIntersecting === false) { //some section got out of viewport remove its active class and add to next sibling
      //   let res = findCorrespondingTocTitle(entry.target) //First intersection entry
      //   res.parentElement.classList.remove('bg-blue-800');
      //   res.parentElement.nextElementSibling.classList.add('bg-blue-800');
      //   current_intersectiong_entry = entry
      //   return true;
      //   // current_intersectiong_entry = null
      // }
      // current_intersectiong_entry = entry

      // if (current_intersectiong_entry !== null && current_intersectiong_entry.target === entry.target && entry.isIntersecting === false) {
      //   console.log('remove')
      //   //Previous entry not intersecting anymore remove class and find the new one
      //   let res = findCorrespondingTocTitle(current_intersectiong_entry.target)
      //   current_selected_toc.parentElement.classList.remove('bg-blue-800');
      //   current_intersectiong_entry = null
      // }
      // if (entry.isIntersecting && current_intersectiong_entry === null) {
      //   console.log('processing')
      //   if (current_intersectiong_entry !== null && current_intersectiong_entry.target.getBoundingClientRect().y > 0) {
      //     console.log('stop')
      //     // return true
      //   }
      //   if (current_intersectiong_entry !== null) {
      //     console.log('current', current_intersectiong_entry.target.getBoundingClientRect().y)
      //   //   console.log('should stop')
      //   }
      //   current_intersectiong_entry = entry
      //   // console.log(entry, 'active')
      //   let res = findCorrespondingTocTitle(entry.target)
      //   if (typeof res !== 'undefined' && (current_selected_toc === null || current_selected_toc !== res)) {
      //     // console.log('here')
      //       if (current_selected_toc !== null) {
      //         // console.log(res)
      //         current_selected_toc.parentElement.classList.remove('bg-blue-800');
      //       }
      //       current_selected_toc = res
      //   }
      //   // console.log(res)
      //   res.parentElement.classList.add('bg-blue-800');
      // } else {
      //   // has_one_active_toc = false
      //   // console.log(entry, 'inactive')
      //   // let res = findCorrespondingTocTitle(entry.target)
      //   // res.classList.remove('bg-blue-800');
      // }
    })
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })

  // const boxElList = document.querySelectorAll('.box');
  var nav_section_ids = [];
  [...table_of_content_items].forEach((item)=> {
    nav_section_ids.push(item.href.substring(item.href.indexOf("#")))
  })
  const nav_sections_list = document.querySelectorAll(nav_section_ids.join(','));
  nav_sections_list.forEach((el) => {
    observer.observe(el);
  })
});

function findCorrespondingTocTitle(section) {
  return [...document.querySelectorAll('#toc li a')].find((item) => {
    return item.href.substring(item.href.indexOf("#")) === `#${section.id}`
  })
}
