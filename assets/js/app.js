(()=>{
    let primaryDisplay = ["0","0"]
    let secondaryDisplay = [""]
    function updateDisplay(){
        const ePD = document.getElementById('input')
        const pD0 = Number(primaryDisplay[0])
        const pD1 = primaryDisplay[1]
        ePD.innerText = Number(pD1) ? `${pD0}.${pD1}`:`${pD0}`
        ePD.value = Number(pD1) ? `${pD0}.${pD1}`:`${pD0}`
    }
    updateDisplay()

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
    function numKeyClickAdd(i){
        const jsnk = document.getElementsByClassName('jsnumkey')
        const pd = primaryDisplay
        for(i=0;i<jsnk.length;i++){
            const t = jsnk[i]
            t.addEventListener('click',()=>{
                const x = t.innerText
                if(true){
                    pd[0] = `${pd[0]}${x}`
                }else{
                    pd[1] = `${pd[1]}${x}`
                }
                updateDisplay()
            })
        }
    }
    numKeyClickAdd()
})()