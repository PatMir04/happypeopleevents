// Language toggling (simple bilingual approach)
const translations = {
  fr: {
    heroTitle: "Célébrez les grands moments avec nous",
    heroText: "Planification d'événements personnalisée et bilingue pour Winnipeg : anniversaires, showers, événements d'entreprise ou communautaires et fêtes surprises. Expérience, confiance, et esprit local !",
    heroBtn: "Commencer la planification",
    aboutTitle: "À propos de Happy People Events",
    aboutText: "Nous sommes une équipe passionnée de planificateurs à Winnipeg, offrant des souvenirs heureux, en anglais et en français. Notre mission : rendre la planification professionnelle simple, joyeuse, et abordable. Devenez notre premier client et faites partie de notre histoire !",
    servicesTitle: "Nos Services d’Événements",
    serviceBirthday: "Anniversaires et Grandes Étapes",
    serviceBirthdayDesc: "Rendez chaque anniversaire inoubliable — de la planification à la musique, en passant par la décoration et le gâteau !",
    serviceBaby: "Baby Showers & Anniversaires de Mariage",
    serviceBabyDesc: "Accueillir une nouvelle vie ou célébrer l'amour ? Nous personnalisons chaque détail pour vous.",
    serviceCorporate: "Événements Corporatifs & Communautaires",
    serviceCorporateDesc: "De la réunion d’équipe au festival local, nous créons des liens et des souvenirs.",
    serviceSurprise: "Fêtes Surprises",
    serviceSurpriseDesc: "Chut ! Nous gérons tous les détails secrets — à vous la vedette.",
    serviceAddons: "Services Additionnels",
    serviceAddonsDesc: "Décoration, traiteur, photographie, virtuel, animation — notre réseau est votre allié.",
    serviceBilingual: "Organisation Bilingue",
    serviceBilingualDesc: "Service en anglais et français pour unir notre communauté !",
    bookingTitle: "Réserver une Consultation Gratuite",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    eventLabel: "Type d’événement",
    dateLabel: "Date",
    addonsLabel: "Options Supplémentaires",
    msgLabel: "Décrivez vos idées ou besoins",
    submitBtn: "Envoyer la demande",
    successMessage: "Merci ! Votre demande a bien été reçue. Nous vous contacterons rapidement.",
    contactTitle: "Contact & Connecter",
    contactInfo: "Une question ou un devis personnalisé ?<br>E-mail : <a href='mailto:hello@happypeopleevents.ca'>hello@happypeopleevents.ca</a><br>Téléphone : <a href='tel:+12045555555'>+1 (204) 555-5555</a>"
  },
  en: {
    heroTitle: "Celebrate Life's Moments With Us",
    heroText: "Personalized, bilingual event planning for Winnipeg’s community — birthdays, showers, corporate, community, and surprise events. Experience, trust, and local spirit!",
    heroBtn: "Start Planning",
    aboutTitle: "About Happy People Events",
    aboutText: "We’re a passionate Winnipeg event planning team, helping you create happy memories — in English and French. Our mission: to make professional event planning seamless, fun, and affordable for the community. Be part of our story; your event could be the first in a new tradition!",
    servicesTitle: "Our Event Services",
    serviceBirthday: "Birthday Parties & Milestones",
    serviceBirthdayDesc: "Make every birthday unforgettable — from planning, decoration to music and cake!",
    serviceBaby: "Baby Showers & Anniversaries",
    serviceBabyDesc: "Welcoming a new life or celebrating love? We customize every detail for you.",
    serviceCorporate: "Corporate & Community Events",
    serviceCorporateDesc: "From team mixers to community festivals, we build connections and memories.",
    serviceSurprise: "Surprise Parties",
    serviceSurpriseDesc: "Shhh! We handle all logistics for secret, joyful events — you take the spotlight.",
    serviceAddons: "Add-On Services",
    serviceAddonsDesc: "Decoration, catering, photographers, virtual events, entertainment — our network is your resource.",
    serviceBilingual: "Bilingual Planning",
    serviceBilingualDesc: "Service in English and French to unite our community and welcome everyone!",
    bookingTitle: "Book a Free Event Consultation",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    eventLabel: "Type of Event",
    dateLabel: "Date",
    addonsLabel: "Select Add-Ons",
    msgLabel: "Describe your ideas or requests",
    submitBtn: "Submit Booking Request",
    successMessage: "Thank you! Your request was received. We’ll contact you soon.",
    contactTitle: "Contact & Connect",
    contactInfo: "Have a question or want a custom quote?<br>Email: <a href='mailto:hello@happypeopleevents.ca'>hello@happypeopleevents.ca</a><br>Phone: <a href='tel:+12045555555'>+1 (204) 555-5555</a>"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  // Hero
  document.getElementById("hero-title").textContent = t.heroTitle;
  document.getElementById("hero-text").textContent = t.heroText;
  document.getElementById("hero-btn").textContent = t.heroBtn;
  // About
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  // Services
  document.getElementById("services-title").textContent = t.servicesTitle;
  document.getElementById("service-birthday").textContent = t.serviceBirthday;
  document.getElementById("service-birthday-desc").textContent = t.serviceBirthdayDesc;
  document.getElementById("service-baby").textContent = t.serviceBaby;
  document.getElementById("service-baby-desc").textContent = t.serviceBabyDesc;
  document.getElementById("service-corporate").textContent = t.serviceCorporate;
  document.getElementById("service-corporate-desc").textContent = t.serviceCorporateDesc;
  document.getElementById("service-surprise").textContent = t.serviceSurprise;
  document.getElementById("service-surprise-desc").textContent = t.serviceSurpriseDesc;
  document.getElementById("service-addons").textContent = t.serviceAddons;
  document.getElementById("service-addons-desc").textContent = t.serviceAddonsDesc;
  document.getElementById("service-bilingual").textContent = t.serviceBilingual;
  document.getElementById("service-bilingual-desc").textContent = t.serviceBilingualDesc;
  // Booking
  document.getElementById("booking-title").textContent = t.bookingTitle;
  document.getElementById("name-label").textContent = t.nameLabel;
  document.getElementById("email-label").textContent = t.emailLabel;
  document.getElementById("phone-label").textContent = t.phoneLabel;
  document.getElementById("event-label").textContent = t.eventLabel;
  document.getElementById("date-label").textContent = t.dateLabel;
  document.getElementById("addons-label").textContent = t.addonsLabel;
  document.getElementById("msg-label").textContent = t.msgLabel;
  document.getElementById("submit-btn").textContent = t.submitBtn;
  // Contact
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-info").innerHTML = t.contactInfo;
}

document.getElementById("frBtn").addEventListener("click", function() {
  setLanguage("fr");
  this.classList.add("font-weight-bold");
  document.getElementById("enBtn").classList.remove("font-weight-bold");
});
document.getElementById("enBtn").addEventListener("click", function() {
  setLanguage("en");
  this.classList.add("font-weight-bold");
  document.getElementById("frBtn").classList.remove("font-weight-bold");
});

// Event booking form handler (simple submission simulation)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successMessage").classList.remove("d-none");
  setTimeout(function() {
    document.getElementById("successMessage").classList.add("d-none");
    document.getElementById("bookingForm").reset();
  }, 5000);
});

// Set default language
setLanguage("en");
