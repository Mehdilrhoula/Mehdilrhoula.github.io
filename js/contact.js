
const formulaire = document.getElementById("formulaire-contact");

if (formulaire) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        // Récupérer les informations du visiteur
        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Vérifier la langue du portfolio
        const lang = document.documentElement.lang === "en"
            ? "en"
            : "fr";

        // Vérifier les champs du formulaire
        if (!formulaire.checkValidity() || !nom || !email || !message) {
            formulaire.reportValidity();
            return;
        }

        // Préparer le sujet de l'e-mail
        const sujet = lang === "en"
            ? "Portfolio contact from " + nom
            : "Message portfolio de " + nom;

        // Préparer le contenu de l'e-mail
        const contenu = lang === "en"
            ? `Name: ${nom}
Email: ${email}

Message:
${message}`
            : `Nom : ${nom}
Email : ${email}

Message :
${message}`;

        // Adresse du destinataire
        const destinataire = "mehdi.lrhoula@epitech.eu";

        // Construire le lien e-mail
        const lienEmail = `mailto:${destinataire}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(contenu)}`;

        // Ouvrir la messagerie du visiteur
        window.location.href = lienEmail;
    });
}
