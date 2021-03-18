function validateForm(){
    var pw = document.querySelector("#txtSPassword");
    var pw2 = document.querySelector("#txtSPasswordMatch");
    var divPWError = document.querySelector("#divPasswordError");
    if(pw !== pw2){
        /* Show Error and Change Style of confirmpassword field */
        divPWError.classList.remove("invisible");
        divPWError.innerHTML = "Passwords do not match.";
        pw2.classList.add("hasError");
        /* Reject */
        return false;
    }
    else{
        divPWError.classList.add("invisible");
        divPWError.innerHTML = "";
        pw2.classList.remove("hasError");
        return true;    
    }

    
}