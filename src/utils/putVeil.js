function putVeil (boolen) {
    let veilContainer = document.querySelector('#veil_container');
    if(boolen) veilContainer.style.top = '0';
    else setTimeout(()=>{
        veilContainer.style.top = '100%';
    }, 500)
}

export default putVeil;