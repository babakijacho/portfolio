const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("active");
};

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});