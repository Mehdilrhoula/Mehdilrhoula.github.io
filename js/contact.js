const formulaire = document.getElementById("formulaire-contact");
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const sujet = encodeURIComponent("Message portfolio de " + nom);

});