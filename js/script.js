function validateForm(){
    var pw = document.querySelector("#txtSPassword");
    var pw2 = document.querySelector("#txtSPasswordMatch");
    var divPWError = document.querySelector("#divPasswordError");
    var formIsValid = true;
    if(pw !== pw2){
        /* Show Error and Change Style of confirmpassword field */
        divPWError.classList.remove("invisible");
        divPWError.innerHTML = "Passwords do not match.";
        pw2.classList.add("hasError");
        /* Reject */
        formIsValid = false;
    }
    else{
        divPWError.classList.add("invisible");
        divPWError.innerHTML = "";
        pw2.classList.remove("hasError");  
    }

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['<','>','#','-','{','}','(',')','\'','"','`'];
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }



    return formIsValid;

    
}