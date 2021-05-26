
const lazyLoading = (sectionClass, animationClass) => {
    const section = document.querySelector(sectionClass)
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.toggle(animationClass)
                observer.unobserve(entry.target)
            }
        })
    }, {rootMargin: "-150px"})
    observer.observe(section)
}

export default lazyLoading