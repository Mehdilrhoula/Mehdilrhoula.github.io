
const formulaire = document.getElementById("formulaire-contact");

if (formulaire) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!formulaire.reportValidity()) {
            return;
        }

        const lang = document.documentElement.lang === "en"
            ? "en"
            : "fr";

        const sujet = lang === "en"
            ? "Portfolio contact from " + nom
            : "Message portfolio de " + nom;

        const contenu = lang === "en"
            ? `Name: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
            : `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`;

        const lienEmail =
            "mailto:mehdi.lrhoula@epitech.eu" +
            "?subject=" + encodeURIComponent(sujet) +
            "&body=" + encodeURIComponent(contenu);

        alert(
            lang === "en"
                ? "The form works. Your email application will now be opened."
                : "Le formulaire fonctionne. Nous allons maintenant tenter d'ouvrir votre messagerie."
        );

        window.location.href = lienEmail;
    });
}
