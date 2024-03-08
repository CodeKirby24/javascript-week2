let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function(){
    event.preventDefault()
    let randomDecimalBetween0and200 = Math.random() * 200
    let randomWholeBetween0and200 = Math.floor(randomDecimalBetween0and200)
    console.log(randomWholeBetween0and200)

    let nameValue = document.getElementById("name").value
    nameValue += " #" + randomWholeBetween0and200

    let emailvalue = document.getElementById("email").value

    let messageValue = document.getElementById("message").value

    window.location.href = `mailto:raygreen@code-crew.org?subject=${nameValue}&cc=${emailvalue}&body=${bodyValue}`

    setTimeout(function(){
        window.location.href = "./landing.html"
    } , 5000)

})