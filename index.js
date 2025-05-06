const signUpButton= document.getElementById('signUpButto');
const signInButton= document.getElementById('signInButton');
const signInForm= document.getElementById('signIn');
const signUpForm= document.getElementById('signUp');


signInButton.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

signUpButton.addEventListener('click', () => {  
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});