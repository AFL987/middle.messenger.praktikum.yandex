function putVeil (boolen) {
    let veilIsCasuallyThrownOnAChair = document.querySelector('#veil_is_casually_thrown_on_a_chair');
    if(boolen) veilIsCasuallyThrownOnAChair.style.display = 'block';
    else veilIsCasuallyThrownOnAChair.style.display = 'none';
}

export default putVeil;