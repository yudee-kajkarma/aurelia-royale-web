const fs = require("fs");
const path = require("path");

const localesDir = path.join(__dirname, "../src/locales");
const frDataDir = path.join(__dirname, "../src/data/blogs/fr");
const nlDataDir = path.join(__dirname, "../src/data/blogs/nl");
const blogAppDir = path.join(__dirname, "../src/app/blog");
const blogsNlJsonPath = path.join(__dirname, "../src/data/blogs.data.nl.json");

if (!fs.existsSync(nlDataDir)) {
  fs.mkdirSync(nlDataDir, { recursive: true });
}

// 1. Create src/locales/nl.json
const nlLocalesContent = {
  "navigation": {
    "home": "Home",
    "about": "Over Ons",
    "shop": "Winkel",
    "contact": "Contact",
    "blog": "Blog"
  },
  "hero": {
    "titleLine1": "GEDRAGEN MET",
    "titleLine2": "INTENTIE.",
    "description": "Elk stuk is een fluistering van erfgoed, gevormd door ambachtslieden die tientallen jaren hebben besteed aan het perfectioneren van de kunst van edelmetaal en edelstenen.",
    "cta": "Nu Winkelen"
  },
  "marquee": {
    "shipping": "Wereldwijde Verzending",
    "diamond": "Laboratoriumdiamant",
    "jewelry": "Fijne Juwelen",
    "crafted": "Handgemaakt",
    "certified": "Gecertificeerd"
  },
  "home": {
    "findNewIn": "Ontdek Nieuwe Collecties",
    "topTrending": "Populairste Trends",
    "viewAllPieces": "Bekijk Alle Stukken",
    "curatedForYou": "Speciaal voor Jou Geselecteerd",
    "shopByEdition": "Winkel op Editie",
    "ourCategories": "Onze Categorieën",
    "shopByCategory": "Winkel op Categorie"
  },
  "editions": {
    "classic": {
      "tag": "Tijdloos",
      "title": "Klassieke Editie",
      "description": "Tijdloze diamantjuwelen ontworpen voor een moeiteloze elegantie."
    },
    "limited": {
      "tag": "Exclusief",
      "title": "Gelimiteerde Editie",
      "description": "Individueel genummerde creaties. Eenmaal verkocht, nooit meer nagemaakt."
    },
    "rare": {
      "tag": "Handtekening",
      "title": "Zeldzame Editie",
      "description": "Unieke meesterwerken met onze fijnste laboratoriumdiamanten."
    }
  },
  "editionsList": {
    "classic": "Klassiek",
    "limited": "Gelimiteerde Editie",
    "rare": "Zeldzaam",
    "timeless": "Tijdloos"
  },
  "categories": {
    "all": "Alles",
    "bracelet": "Armbanden",
    "bracelets": "Armbanden",
    "earring": "Oorbellen",
    "earrings": "Oorbellen",
    "necklace": "Kettingen",
    "necklaces": "Kettingen",
    "pendant": "Hangers",
    "pendants": "Hangers",
    "ring": "Ringen",
    "rings": "Ringen",
    "set": "Sets",
    "sets": "Sets"
  },
  "testimonial": {
    "label": "Klantbeoordeling",
    "title": "Wat Onze Klanten Zeggen"
  },
  "testimonials": {
    "isabelle": {
      "location": "Amsterdam, Nederland",
      "quote": "De oorbellen die ik ontving overtroffen alles wat ik me had voorgesteld — tot in de perfectie gemaakt en prachtig verpakt. Aurelia Royale belichaamt echt pure klasse."
    },
    "alexander": {
      "location": "Utrecht, Nederland",
      "quote": "Uitstekende service en elegante afwerking maakten elke bestelling gedenkwaardig. Hun ontwerptaal voelt tijdloos aan en blijft modern en draagbaar."
    }
  },
  "newsletter": {
    "label": "Blijf op de Hoogte",
    "title": "Ontvang Onze Nieuwste Updates",
    "description": "Wees de eerste die onze nieuwe collecties, exclusieve evenementen en privileges voor onze besloten kring ontdekt.",
    "placeholder": "Uw E-mailadres",
    "subscribe": "Aanmelden",
    "successMessage": "Bedankt voor uw inschrijving op onze nieuwsbrief!",
    "requiredEmail": "Vul dit veld in.",
    "invalidEmail": "Voer een geldig e-mailadres in."
  },
  "footer": {
    "slogan": "Fijne juwelen ontworpen voor degenen die bovenal schoonheid, erfgoed en duurzaamheid waarderen.",
    "copyright": "Copyright 2026 Aurelia Royale. Alle rechten voorbehouden door Aurelia Royale."
  },
  "about": {
    "heroTitle": "Over Ons",
    "tag": "Over Ons",
    "heading": "Een Erfgoed van Fijn Ambacht.",
    "p1": "Bij Aurelia Royale is elegantie meer dan een stijl — het is een statement van tijdloze verfijning. Onze collectie is ontworpen om moderne luxe te vieren met fijn afgewerkte sieraden die hedendaagse kunst combineren met klassieke charme. Elk detail weerspiegelt genade, zelfvertrouwen en geraffineerde schoonheid voor wie exclusiviteit waardeeert.",
    "p2": "Wij geloven dat sieraden persoonlijk, gedenkwaardig en moeiteloos luxueus moeten voelen. Van opvallende ringen tot verfijnde kettingen en schitterende oorbellen brengt Aurelia Royale vakmanschap en hoogwaardige esthetiek samen om stukken te creëren die elke gelegenheid verheffen. Ontworpen voor de moderne muse, belichamen onze ontwerpen luxe met een minimalistische toets.",
    "stat1Label": "Jaar Ervaring",
    "stat2Label": "Exclusieve Ontwerpen",
    "stat3Label": "Sieraden Liefhebbers",
    "philosophyTag": "Onze Filosofie",
    "philosophyHeading1": "Wij Geloven Dat Sieraden Geen Decoratie Zijn",
    "philosophyHeading2": "Het Is Een Blijvende Herinnering.",
    "philo1Title": "Oncompromisloze Kwaliteit",
    "philo1Body": "Elke edelsteen wordt handmatig geselecteerd door onze meester-gemmoloog. Elk metaal wordt getest en gekeurd. Wij accepteren alleen het werkelijk buitengewone.",
    "philo2Title": "Ethische Herkomst",
    "philo2Body": "Onze toeleveringsketen wordt onafhankelijk gecontroleerd om te garanderen dat geen conflictmineralen of uitbuitingspraktijken deel uitmaken van uw sieraden.",
    "philo3Title": "Tijdloos Ontwerp",
    "philo3Body": "Wij weerstaan vluchtige trends. Onze stukken zijn ontworpen om gedragen te worden door uw dochter en die van haar — vormen die er over vijftig jaar net zo relevant uitzien als vandaag."
  },
  "contact": {
    "heroTitle": "Neem Contact Op",
    "home": "Home",
    "infoTag": "Contactgegevens",
    "getInTouch": "Neem Contact Met Ons Op",
    "firstNamePlaceholder": "Uw Voornaam *",
    "lastNamePlaceholder": "Achternaam *",
    "emailPlaceholder": "E-mailadres",
    "phonePlaceholder": "Telefoonnummer *",
    "messagePlaceholder": "Schrijf Uw Bericht",
    "submit": "Nu Verzenden",
    "findUsTag": "Vind Ons",
    "locationMap": "Locatiekaart"
  },
  "profile": {
    "welcome": "Welkom",
    "welcomeText": "Meld u aan om toegang te krijgen tot uw profiel, bestellingen, verlanglijst en aankoopgeschiedenis.",
    "login": "Inloggen",
    "register": "Registreren",
    "signedIn": "Ingelogd",
    "myProfile": "Mijn Profiel",
    "role": "Rol",
    "adminDashboard": "Admin Dashboard",
    "userProfile": "Profiel",
    "logout": "Uitloggen"
  },
  "auth": {
    "backToHome": "Terug naar Home",
    "signInTab": "Inloggen",
    "registerTab": "Registreren",
    "welcomeBack": "Welkom Terug",
    "loginHeading": "Log In Op Uw Account.",
    "loginDescription": "Bekijk uw collectie, volg uw bestellingen en beheer uw maatwerkverzoeken op één plek.",
    "emailLabel": "E-mailadres",
    "passwordLabel": "Wachtwoord",
    "rememberMe": "Onthoud mij",
    "forgotPassword": "Wachtwoord vergeten?",
    "signInBtn": "Inloggen",
    "createAccountHeading": "Maak Een Account Aan.",
    "createAccountDescription": "Sluit u aan bij de kring van Aurelia Royale om uw verlanglijst op te slaan en gepersonaliseerde aanbevelingen te ontvangen.",
    "fullNameLabel": "Volledige Naam",
    "confirmPasswordLabel": "Bevestig Wachtwoord",
    "createAccountBtn": "Account Aanmaken",
    "invalidCredentials": "Ongeldige inloggegevens. Controleer uw e-mailadres en wachtwoord.",
    "registrationSuccess": "Registratie succesvol! Welkom bij Aurelia Royale.",
    "loginSuccess": "Succesvol ingelogd!",
    "logoutSuccess": "Succesvol uitgelogd.",
    "requiredFields": "Vul alle verplichte velden in.",
    "passwordMismatch": "Wachtwoorden komen niet overeen."
  },
  "shop": {
    "title": "Onze Collectie",
    "subtitle": "Ontdek de verfijnde wereld van laboratoriumdiamanten en exclusieve juwelen.",
    "allProducts": "Alle Producten",
    "sortBy": "Sorteer Op",
    "featured": "Aanbevolen",
    "priceLowHigh": "Prijs: Laag naar Hoog",
    "priceHighLow": "Prijs: Hoog naar Laag",
    "newest": "Nieuwste",
    "addToCart": "In Winkelmandje",
    "addedToCart": "Toegevoegd aan Winkelmandje",
    "addToWishlist": "Toevoegen aan Verlanglijst",
    "addedToWishlist": "Toegevoegd aan Verlanglijst",
    "removedFromWishlist": "Verwijderd uit Verlanglijst",
    "filterBy": "Filteren op",
    "category": "Categorie",
    "edition": "Editie",
    "priceRange": "Prijsklasse",
    "noProductsFound": "Geen producten gevonden die aan uw criteria voldoen."
  },
  "blog": {
    "journal": "Journaal",
    "title": "Gidsen & Inzichten",
    "readMore": "Lees Meer",
    "searchPlaceholder": "Zoek artikelen...",
    "categoryAll": "Alles"
  }
};

fs.writeFileSync(path.join(localesDir, "nl.json"), JSON.stringify(nlLocalesContent, null, 2), "utf-8");
console.log("Successfully created src/locales/nl.json!");
