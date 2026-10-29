
/* RECUPERE LE FORMULAIRE */
const formulaire = document.getElementById("formulaire-contact");

/* VERIFIE SA PRESENCE */
if (formulaire) {

    /* DETECTE ENVOI DU FORMULAIRE */
    formulaire.addEventListener("submit", function (event) {

        /* EMPECHE LE RECHARGEMENT */
        event.preventDefault();

        /* RECUPERE LES INFORMATIONS */
        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        /* VERIFIE LES CHAMPS */
        if (!formulaire.reportValidity()) {
            return;
        }

        /* DETECTE LA LANGUE */
        const lang = document.documentElement.lang === "en"
            ? "en"
            : "fr";

        /* DEFINIT LE SUJET */
        const sujet = lang === "en"
            ? "Portfolio contact from " + nom
            : "Message portfolio de " + nom;

        /* PREPARE LE MESSAGE */
        const contenu = lang === "en"
            ? `Name: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
            : `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`;

        /* CONSTRUIT LE LIEN EMAIL */
        const lienEmail =
            "mailto:mehdi.lrhoula@epitech.eu" +
            "?subject=" + encodeURIComponent(sujet) +
            "&body=" + encodeURIComponent(contenu);

        /* OUVRE LA MESSAGERIE */
        window.location.href = lienEmail;
    });
}
