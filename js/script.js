const form = document.querySelector(".form-field");
const inputs = document.querySelectorAll(".form-field__input");
const input_errors = document.querySelectorAll(".form-field__input-error");

form.addEventListener('submit', e => {
    
    inputs.forEach(input => {
        const is_not_valid = !input.validity.valid;
        const type = input.attributes.type.value;
        
        if(is_not_valid) {
            e.preventDefault();
            input.classList.add('form-field__input--is-invalid-_js');
            showError(input.nextElementSibling, type);
        }
    });
});

function showError(elem, elemType) {
    elem.classList.remove('is-invisible-_js');
    if(elemType === "email") {
        elem.textContent = "Please enter a valid e-mail";
    }
}