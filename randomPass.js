
let show_pass = document.getElementById('passwordShow');

function randomPassword(){
    
    //using math.random function for printing 0 to 9
    //tostring function for 0 to 9 an a to z
    const password  = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
   show_pass.value = password;
}
//function for copy text
function copyText(){
    //using inbuilt select function 
    show_pass.select();
    
    //.execCommand to use copy text
    document.execCommand('copy');
    alert('Password is copied');
}