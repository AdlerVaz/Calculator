(()=>{
        const target = document.getElementById("themeToggle")
        target.addEventListener('mouseover',()=>{

            target.classList.remove('animate-pulse')
            target.classList.add('animate-spin')
            target.classList.remove('bg-black')
            target.classList.add('bg-white')
        })
        target.addEventListener('mouseleave',()=>{

            target.classList.remove('animate-spin')
            target.classList.add('animate-pulse')
            target.classList.remove('bg-white')
            target.classList.add('bg-black')
        })
        target.addEventListener('click',switchTheme)
    
})()