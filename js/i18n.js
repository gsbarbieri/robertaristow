const TRANSLATIONS = {
  en: {
    "nav.exhibitions": "Exhibitions",
    "nav.publications": "Publications",
    "nav.about": "About",
    "nav.contact": "Contact",

    "home.h2": "Art Consultant, Curator & Art Writer",

    "exhibitions.title": "Exhibitions",
    "exhibitions.subtitle": "Curatorial Projects",
    "exhibitions.body": "Selected exhibitions and curatorial projects will be featured here soon.",

    "publications.title": "Publications",
    "publications.subtitle": "Selected Writing & Press",
    "publications.readMore": "Read article →",

    "about.title": "About",
    "about.p1": "Roberta Ristow is an art consultant and journalist based in Lisbon, working across Brazil and Europe. She specialized in Art Management at Sotheby’s Institute of Art in London, where she lived for two years.",
    "about.p2": "Her professional practice spans cultural management, strategic communication, and art advisory. She collaborates with institutions, collectors, and artists on exhibitions, cultural initiatives, and content-driven projects connecting art, education, and public engagement.",
    "about.p3": "Since 2020, Roberta has been Institutional Director of Casa da Escada Colorida, an independent, non-profit art space in Rio de Janeiro dedicated to artistic research and experimentation. As a journalist, she has contributed to Vogue Brasil since 2017, writing on contemporary art and culture.",
    "about.p4": "Previously, she led the Branded Content department at Editora Globo / Grupo Globo for nine years, developing multiplatform projects for more than 35 international brands and working closely with TV Globo and Globo Condé Nast.",
    "about.quote": "She believes, as Louise Bourgeois once said, that “art is a guarantee of sanity” — and remains central to her professional practice.",

    "contact.title": "Contact",
    "contact.subtitle": "Get in touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.instagram": "Instagram",

    "footer.copyright": "© 2026 Roberta Ristow"
  },
  es: {
    "nav.exhibitions": "Exposiciones",
    "nav.publications": "Publicaciones",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",

    "home.h2": "Consultora de Arte, Curadora y Escritora de Arte",

    "exhibitions.title": "Exposiciones",
    "exhibitions.subtitle": "Proyectos Curatoriales",
    "exhibitions.body": "Próximamente se presentarán aquí exposiciones seleccionadas y proyectos curatoriales.",

    "publications.title": "Publicaciones",
    "publications.subtitle": "Escritos y Prensa Seleccionados",
    "publications.readMore": "Leer artículo →",

    "about.title": "Acerca de",
    "about.p1": "Roberta Ristow es consultora de arte y periodista afincada en Lisboa, con actividad en Brasil y Europa. Se especializó en Gestión de Arte en el Sotheby’s Institute of Art de Londres, ciudad donde vivió durante dos años.",
    "about.p2": "Su práctica profesional abarca la gestión cultural, la comunicación estratégica y la asesoría artística. Colabora con instituciones, coleccionistas y artistas en exposiciones, iniciativas culturales y proyectos de contenido que conectan el arte, la educación y la participación pública.",
    "about.p3": "Desde 2020, Roberta es Directora Institucional de la Casa da Escada Colorida, un espacio de arte independiente y sin fines de lucro en Río de Janeiro dedicado a la investigación y experimentación artística. Como periodista, colabora con Vogue Brasil desde 2017, escribiendo sobre arte contemporáneo y cultura.",
    "about.p4": "Anteriormente, dirigió el departamento de Branded Content de Editora Globo / Grupo Globo durante nueve años, desarrollando proyectos multiplataforma para más de 35 marcas internacionales y trabajando estrechamente con TV Globo y Globo Condé Nast.",
    "about.quote": "Cree, como dijo alguna vez Louise Bourgeois, que “el arte es una garantía de cordura” — y esto sigue siendo central en su práctica profesional.",

    "contact.title": "Contacto",
    "contact.subtitle": "Ponte en contacto",
    "contact.email": "Correo",
    "contact.phone": "Teléfono",
    "contact.instagram": "Instagram",

    "footer.copyright": "© 2026 Roberta Ristow"
  },
  fr: {
    "nav.exhibitions": "Expositions",
    "nav.publications": "Publications",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    "home.h2": "Consultante en Art, Commissaire d’Exposition et Critique d’Art",

    "exhibitions.title": "Expositions",
    "exhibitions.subtitle": "Projets de Commissariat",
    "exhibitions.body": "Des expositions sélectionnées et des projets de commissariat seront présentés ici prochainement.",

    "publications.title": "Publications",
    "publications.subtitle": "Écrits et Presse Sélectionnés",
    "publications.readMore": "Lire l’article →",

    "about.title": "À propos",
    "about.p1": "Roberta Ristow est consultante en art et journaliste basée à Lisbonne, travaillant entre le Brésil et l’Europe. Elle s’est spécialisée en gestion de l’art au Sotheby’s Institute of Art de Londres, où elle a vécu pendant deux ans.",
    "about.p2": "Sa pratique professionnelle couvre la gestion culturelle, la communication stratégique et le conseil en art. Elle collabore avec des institutions, des collectionneurs et des artistes sur des expositions, des initiatives culturelles et des projets éditoriaux reliant l’art, l’éducation et l’engagement public.",
    "about.p3": "Depuis 2020, Roberta est directrice institutionnelle de la Casa da Escada Colorida, un espace d’art indépendant et à but non lucratif à Rio de Janeiro dédié à la recherche et à l’expérimentation artistique. En tant que journaliste, elle collabore avec Vogue Brasil depuis 2017, écrivant sur l’art contemporain et la culture.",
    "about.p4": "Auparavant, elle a dirigé le département Branded Content d’Editora Globo / Grupo Globo pendant neuf ans, développant des projets multiplateformes pour plus de 35 marques internationales et travaillant en étroite collaboration avec TV Globo et Globo Condé Nast.",
    "about.quote": "Elle croit, comme le disait Louise Bourgeois, que « l’art est une garantie de santé mentale » — une conviction qui reste centrale dans sa pratique professionnelle.",

    "contact.title": "Contact",
    "contact.subtitle": "Nous contacter",
    "contact.email": "E-mail",
    "contact.phone": "Téléphone",
    "contact.instagram": "Instagram",

    "footer.copyright": "© 2026 Roberta Ristow"
  }
};

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = "en";
  const dict = TRANSLATIONS[lang];
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("rr-lang", lang);
}

function initLanguage() {
  const saved = localStorage.getItem("rr-lang") || "en";
  applyLanguage(saved);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", initLanguage);
