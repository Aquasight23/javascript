function responsive_menu(){
    var mynav = document.getElementById('myTopnav');

    if(mynav.className == 'topnav'){
        mynav.className += ' responsive';
    }
    else{
        mynav.className = 'topnav';
    }
}

function validate(){
    //alert('form validation garna aako')

    var name,email,message;

    name = document.getElementById('name').value;
    email= document.getElementById('email').value;
    message = document.getElementById('message').value;

    if(name == '' || email == '' || message == ''){

        if(name == ''){
            document.getElementById('nameErr').innerHTML = 'Name is required';
        }

        if(email == ''){
            document.getElementById('emailErr').innerHTML = 'Email is required';
        }

        if(message == ''){
            document.getElementById('msgErr').innerHTML = 'Message is required';
        }

        return false;   
    }
    else{
        return true;
    }
}