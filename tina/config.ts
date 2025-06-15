import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "siteInfo",
        label: "Informacje o stronie",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-info",
        },
        fields: [
          {
            type: "string",
            name: "photographerName",
            label: "Imię i nazwisko fotografa",
            required: true,
          },
          {
            type: "string",
            name: "siteTitle",
            label: "Tytuł strony",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Opis strony",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "phone",
            label: "Telefon",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "address",
            label: "Adres",
          },
          {
            type: "string",
            name: "whatsapp",
            label: "WhatsApp",
          },
        ],
      },
      {
        name: "hero",
        label: "Sekcja główna",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Główny tytuł",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Podtytuł",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "backgroundImage",
            label: "Zdjęcie tła",
          },
          {
            type: "string",
            name: "primaryButtonText",
            label: "Tekst pierwszego przycisku",
          },
          {
            type: "string",
            name: "secondaryButtonText",
            label: "Tekst drugiego przycisku",
          },
        ],
      },
      {
        name: "about",
        label: "O mnie",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł sekcji",
            required: true,
          },
          {
            type: "string",
            name: "paragraph1",
            label: "Pierwszy akapit",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "paragraph2",
            label: "Drugi akapit",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie",
          },
          {
            type: "string",
            name: "buttonText",
            label: "Tekst przycisku",
          },
        ],
      },
      {
        name: "services",
        label: "Usługi",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "services",
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Tytuł sekcji",
          },
          {
            type: "string",
            name: "sectionDescription",
            label: "Opis sekcji",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "services",
            label: "Lista usług",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Nazwa usługi",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Opis usługi",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "duration",
                label: "Czas trwania",
              },
              {
                type: "string",
                name: "price",
                label: "Cena",
              },
              {
                type: "string",
                name: "type",
                label: "Typ usługi",
                options: [
                  { value: "family", label: "Sesja rodzinna" },
                  { value: "newborn", label: "Sesja noworodkowa" },
                  { value: "maternity", label: "Sesja ciążowa" },
                ],
              },
              {
                type: "string",
                name: "features",
                label: "Cechy usługi",
                list: true,
              },
            ],
          },
        ],
      },
      {
        name: "testimonials",
        label: "Opinie klientów",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonials",
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Tytuł sekcji",
          },
          {
            type: "string",
            name: "sectionDescription",
            label: "Opis sekcji",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "testimonials",
            label: "Lista opinii",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Imię i nazwisko",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Zdjęcie klienta",
              },
              {
                type: "string",
                name: "text",
                label: "Treść opinii",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "number",
                name: "rating",
                label: "Ocena (1-5)",
              },
              {
                type: "string",
                name: "session",
                label: "Rodzaj sesji",
              },
            ],
          },
        ],
      },
      {
        name: "faq",
        label: "FAQ",
        path: "src/data",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "faq",
        },
        fields: [
          {
            type: "string",
            name: "sectionTitle",
            label: "Tytuł sekcji",
          },
          {
            type: "string",
            name: "sectionDescription",
            label: "Opis sekcji",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "faqs",
            label: "Pytania i odpowiedzi",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.question };
              },
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Pytanie",
                required: true,
              },
              {
                type: "string",
                name: "answer",
                label: "Odpowiedź",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "portfolio",
        label: "Portfolio",
        path: "src/data/portfolio",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł zdjęcia",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              { value: "family", label: "Sesja rodzinna" },
              { value: "newborn", label: "Sesja noworodkowa" },
              { value: "maternity", label: "Sesja ciążowa" },
            ],
          },
          {
            type: "string",
            name: "alt",
            label: "Opis zdjęcia",
          },
        ],
      },
      {
        name: "pages",
        label: "Strony",
        path: "src/content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł strony",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Opis strony",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie główne",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść strony",
            isBody: true,
            templates: [
              {
                name: "ImageGallery",
                label: "Galeria zdjęć",
                fields: [
                  {
                    type: "object",
                    name: "images",
                    label: "Zdjęcia",
                    list: true,
                    fields: [
                      {
                        type: "image",
                        name: "src",
                        label: "Zdjęcie",
                      },
                      {
                        type: "string",
                        name: "alt",
                        label: "Opis",
                      },
                    ],
                  },
                ],
              },
              {
                name: "ContactForm",
                label: "Formularz kontaktowy",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Tytuł formularza",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});