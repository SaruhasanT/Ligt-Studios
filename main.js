const wrapper = document.querySelector(".hero .wrapper")

window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY
    if(scrolled <= 300){
        wrapper.style.transform = `rotateX(${-scrolled/3}deg)`
    }
})
const options = {
    root: document.querySelector("body"),
    rootMargin: "0px",
    threshold: 0.2,
  };
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    })
})

const elements = document.querySelectorAll(".service .description, .service img");
elements.forEach(el=>{
    observer.observe(el)
})
