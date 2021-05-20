(()=>{
    function themeToggle(){
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
    }
    themeToggle()
    function clickBlink(){
        const jsclickblinks = document.getElementsByClassName('jsclickblink')
        for(i=0;i<jsclickblinks.length;i++){
            const target = jsclickblinks[i]
            target.addEventListener('click',()=>{
                target.classList.add("text-black")
                target.classList.add("bg-white")
                setTimeout(()=>{
                    target.classList.remove("text-black")
                    target.classList.remove("bg-white")
                },100)
            })
        }
    }
    clickBlink()
    
})()