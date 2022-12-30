function submitForm() {
    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let reason = document.getElementById('reason').value;
    if ( fname!=null && lname!=null  && email!=null && reason!=false ) {
         alert("Form submitted successfully.")
    }
     else {
        alert("All required fields must be filled")
    }
}