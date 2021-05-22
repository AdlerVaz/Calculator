function switchTheme(){
    const root = document.documentElement
    if(root.classList.contains('light')){
        root.classList.remove('light')
        root.classList.add('dark')
        localStorage.setItem("ISDARKMODE", "YES")
    }else{
        root.classList.remove('dark')
        root.classList.add('light')
        localStorage.setItem("ISDARKMODE", "NEIN")
    }
}
function noFlashbang(){
    const sysPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const configuredDarkTheme = localStorage.getItem("ISDARKMODE")
    if(configuredDarkTheme){
        if(configuredDarkTheme==="YES"){switchTheme()}
        else{}
    }else{
        if(sysPreferDark){
            switchTheme()
        }
        else{console.log("why u use SYSTEM WIDE light mode?")}
    }
}
noFlashbang()