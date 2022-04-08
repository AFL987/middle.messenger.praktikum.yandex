
export default `
input.form-input-icon__input(type="text" value= value name= name placeholder= placeholder)
button.form-input-icon__button
    img(class='form-input-icon_opacity '+error && 'error' src= srcIcon)
`;
