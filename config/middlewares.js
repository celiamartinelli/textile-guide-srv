module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      // Ajoutez l'URL de votre site Netlify ici
      origin: [
        "http://localhost:5173", // Développement local
        "https://textile-guide.netlify.app", // Votre site Netlify
      ],
      headers: ["*"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
