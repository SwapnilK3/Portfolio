function sendMail(){
    let parms={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('subject').value,
    }

    emailjs.send("service_68h985w","template_1m1b44q",parms).then(alert("Email Sent Successfully!"))
}