const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target })=>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target })=>{
    if(target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
  
}

const handleChange = () => {
    const [username, passoword] = inputs;

    if (username.value && passoword.value.length >= 8 ){

        button.removeAttribute('disabled');
    }else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input)=>{
    input.addEventListener('focus', handleFocus);
    input.addEventListener('focusout', handleFocusOut);
    input.addEventListener('input', handleChange);
})

