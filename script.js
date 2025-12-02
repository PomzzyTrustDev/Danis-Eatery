
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const phoneNo = document.getElementById('phoneNo');
const message = document.getElementById('message');
const innerNavLinkContainer = document.querySelector('.innerNavLinkContainer');

const navBarButton = document.querySelector('#navBarButton');
const closeNavBarButton = document.querySelector('.fa-times');


navBarButton.onclick = function(){
   
    innerNavLinkContainer.classList.add('showinnerNavLinkContainer');
    navBarButton.style.display = 'none';

    closeNavBarButton.style.display = 'block';
}

closeNavBarButton.onclick = function(){
    innerNavLinkContainer.classList.remove('showinnerNavLinkContainer');
    navBarButton.style.display = 'block';

    closeNavBarButton.style.display = 'none';
}

document.onclick = function(e){

    if (!navBarButton.contains(e.target) && screen.width < 992){
        innerNavLinkContainer.classList.remove('showinnerNavLinkContainer');

        navBarButton.style.display = 'block';

    closeNavBarButton.style.display = 'none';

    } 
    
}

form.onsubmit = checkForm;

function checkForm(){
    
    if (firstName.value == ''){
        alert('Enter first name');
        firstName.focus();
        return false;
    } else if (lastName.value == ''){
        alert('Enter last name');
        lastName.focus();
        return false;
    } else if (emailAddress.value == ''){
        alert('Enter email');
        emailAddress.focus();
        return false;
 
    } else if (phoneNo.value == ''){
        alert('Enter phone number');
        phoneNo.focus();
        return false;
    } else if (isNaN(phoneNo.value)){
        alert("Phone number can't contain letters or special characters");
        phoneNo.focus();
        return false;
    } else if (message.value == ''){
        alert('Type a message');
        message.focus();
        return false;
    } else {
        alert('Information submitted successfully');
    }
}