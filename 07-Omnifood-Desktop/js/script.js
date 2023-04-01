
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const closeEl = document.querySelector(".icon-mobile-nav[name='close-outline']");
const menuEl =  document.querySelector(".icon-mobile-nav[name='menu-outline']");

btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle("nav-open");
  closeEl.classList.toggle("show");
  menuEl.classList.toggle("hide");

});


//Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }

    // scroll to other links
    if (href !== "#"  && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // close mobile navigation
    if(link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
      closeEl.classList.toggle("show");
      menuEl.classList.toggle("hide");
    }
  })
});

const sectionHeroEl = document.querySelector(".section-hero");

// Sticky navigation
const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.querySelector("body").classList.add("sticky");
  }
  else if (ent.isIntersecting === true) {
    document.querySelector("body").classList.remove("sticky");
  }
}, 

{
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px"
});
observer.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

