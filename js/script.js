function validateForm(){
    var pw = document.querySelector("#txtSPassword");
    var pw2 = document.querySelector("#txtSPasswordMatch");
    if(pw != pw2){
        alert("Passwords do not match")
        /** Show Error and Change Style of confirmpassword field */
        return false;
    }

    return false;
}