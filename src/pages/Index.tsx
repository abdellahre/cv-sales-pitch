import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import headshot from "@/assets/headshot.jpg";

const content = {
  en: {
    intro: (
      <>
        I am a <strong>chemical analyst</strong> and <strong>industrial chemistry technician</strong> with
        hands-on experience in chlor-alkali processes, medical laboratory diagnostics, and quality control.
        I hold a degree in Fundamental Chemistry from the{" "}
        <a href="https://www.univ-bouira.dz/" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
          University of Bouira
        </a>
        , and I've worked in both <strong>industrial production</strong> and <strong>clinical laboratory settings</strong>.
      </>
    ),
    contact: "You can reach me at",
    orCall: "or call",
    basedIn: "Based in",
    location: "Bouira, Ain Bessem, Algeria",
    industrialTitle: "Industrial Chemistry — Where I Thrive",
    industrialP1: (
      <>
        At <strong>North Africa Chemical</strong>, I operated and monitored chlor-alkali production lines —
        manufacturing sodium hypochlorite (NaClO), caustic soda (NaOH), and hydrochloric acid (HCl).
        These aren't gentle lab experiments. This is large-scale industrial chemistry where precision
        prevents disasters and delivers profits.
      </>
    ),
    industrialP2: (
      <>
        I controlled brine (NaCl) solution quality, secured chemical reactions, monitored process
        parameters in real-time, and worked hand-in-hand with the production team. All while maintaining
        strict <strong>HSE compliance</strong> — because when you're handling corrosive and oxidizing
        agents at scale, safety isn't optional. It's the job.
      </>
    ),
    clinicalTitle: "Clinical Diagnostics — Precision Under Pressure",
    clinicalP1: (
      <>
        At <strong>Ain Bessem Hospital</strong>, I performed biochemical and hematological analyses as
        part of a clinical diagnostics team. Every result I delivered informed a doctor's decision.
        Every data point I entered had to be flawless.
      </>
    ),
    clinicalP2: "I managed sample preparation, quality control, and data reporting with the kind of rigor that clinical environments demand. If you need someone who understands that accuracy isn't just a nice-to-have — it's life or death — that's me.",
    educationTitle: "Formal Training",
    educationP: (
      <>
        <strong>Licence in Fundamental Chemistry</strong> — University of Bouira Akli Mohand Oulhadj
        (2020–2024). Deep grounding in analytical chemistry, physical chemistry, laboratory techniques,
        and data interpretation. I didn't just learn theory — I developed the problem-solving mindset
        that makes me effective across industries, from energy to petrochemistry.
      </>
    ),
    skillsTitle: "What I Bring to the Table",
    skillsLab: (
      <>
        <strong>Laboratory & Industrial:</strong> Spectrophotometry, centrifugation, sample preparation,
        electrolysis, chlor-alkali processes, quality control of chemical solutions and demineralized water.
      </>
    ),
    skillsDigital: (
      <>
        <strong>Digital:</strong> Microsoft Office suite, data entry and analysis tools, and programming
        fundamentals for automation and data-driven decision-making. I'm not stuck in analog — I use
        technology to amplify precision.
      </>
    ),
    skillsLang: (
      <>
        <strong>Languages:</strong> Arabic (native), French (intermediate), English (intermediate).
        I communicate across cultures and technical contexts.
      </>
    ),
    ctaTitle: "Let's Talk",
    ctaP: "Whether you need a reliable chemical analyst, a meticulous lab technician, or someone who can operate industrial-scale chemistry with both competence and care — I'm ready. The best way to see what I can do is to put me to work.",
  },
  fr: {
    intro: (
      <>
        Je suis un <strong>analyste chimiste</strong> et <strong>technicien en chimie industrielle</strong> avec
        une expérience pratique dans les procédés chlore-soude, le diagnostic en laboratoire médical et le contrôle qualité.
        Je suis titulaire d'une licence en Chimie Fondamentale de l'{" "}
        <a href="https://www.univ-bouira.dz/" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
          Université de Bouira
        </a>
        , et j'ai travaillé dans la <strong>production industrielle</strong> et les <strong>laboratoires cliniques</strong>.
      </>
    ),
    contact: "Vous pouvez me contacter à",
    orCall: "ou appeler le",
    basedIn: "Basé à",
    location: "Bouira, Ain Bessem, Algérie",
    industrialTitle: "Chimie Industrielle — Mon Terrain de Jeu",
    industrialP1: (
      <>
        Chez <strong>North Africa Chemical</strong>, j'ai opéré et surveillé des lignes de production chlore-soude —
        fabrication d'hypochlorite de sodium (NaClO), de soude caustique (NaOH) et d'acide chlorhydrique (HCl).
        Ce ne sont pas de simples expériences de laboratoire. C'est de la chimie industrielle à grande échelle où la précision
        prévient les catastrophes et génère des profits.
      </>
    ),
    industrialP2: (
      <>
        J'ai contrôlé la qualité de la solution de saumure (NaCl), sécurisé les réactions chimiques, surveillé les paramètres
        du processus en temps réel, et travaillé main dans la main avec l'équipe de production. Le tout en maintenant
        une stricte <strong>conformité HSE</strong> — car lorsqu'on manipule des agents corrosifs et oxydants
        à grande échelle, la sécurité n'est pas optionnelle. C'est le travail.
      </>
    ),
    clinicalTitle: "Diagnostics Cliniques — La Précision Sous Pression",
    clinicalP1: (
      <>
        À l'<strong>Hôpital d'Ain Bessem</strong>, j'ai effectué des analyses biochimiques et hématologiques au sein
        d'une équipe de diagnostics cliniques. Chaque résultat que j'ai livré a guidé la décision d'un médecin.
        Chaque donnée que j'ai saisie devait être irréprochable.
      </>
    ),
    clinicalP2: "J'ai géré la préparation des échantillons, le contrôle qualité et le reporting des données avec la rigueur que les environnements cliniques exigent. Si vous avez besoin de quelqu'un qui comprend que la précision n'est pas un luxe — c'est une question de vie ou de mort — c'est moi.",
    educationTitle: "Formation",
    educationP: (
      <>
        <strong>Licence en Chimie Fondamentale</strong> — Université de Bouira Akli Mohand Oulhadj
        (2020–2024). Solide formation en chimie analytique, chimie physique, techniques de laboratoire
        et interprétation des données. Je n'ai pas seulement appris la théorie — j'ai développé l'esprit
        de résolution de problèmes qui me rend efficace dans tous les secteurs, de l'énergie à la pétrochimie.
      </>
    ),
    skillsTitle: "Ce Que J'Apporte",
    skillsLab: (
      <>
        <strong>Laboratoire & Industriel :</strong> Spectrophotométrie, centrifugation, préparation d'échantillons,
        électrolyse, procédés chlore-soude, contrôle qualité des solutions chimiques et de l'eau déminéralisée.
      </>
    ),
    skillsDigital: (
      <>
        <strong>Numérique :</strong> Suite Microsoft Office, outils de saisie et d'analyse de données, et bases
        de programmation pour l'automatisation et la prise de décision basée sur les données. Je ne suis pas bloqué
        dans l'analogique — j'utilise la technologie pour amplifier la précision.
      </>
    ),
    skillsLang: (
      <>
        <strong>Langues :</strong> Arabe (natif), Français (intermédiaire), Anglais (intermédiaire).
        Je communique à travers les cultures et les contextes techniques.
      </>
    ),
    ctaTitle: "Parlons-en",
    ctaP: "Que vous ayez besoin d'un analyste chimiste fiable, d'un technicien de laboratoire méticuleux, ou de quelqu'un capable de gérer la chimie industrielle à grande échelle avec compétence et soin — je suis prêt. La meilleure façon de voir ce que je peux faire, c'est de me mettre au travail.",
  },
};

const Index = () => {
  const [lang, setLang] = useState<"en" | "fr">("fr");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Language toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-accent transition-colors text-foreground"
          >
            {lang === "fr" ? "English" : "Français"}
          </button>
        </div>

        {/* Header with photo */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={headshot}
            alt="Abdellah Recham"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shrink-0"
          />
          <h1 className="font-heading text-3xl md:text-4xl font-black tracking-wide uppercase text-foreground">
            ABDELLAH RECHAM
          </h1>
        </div>

        <p className="text-lg leading-relaxed mb-6 text-foreground">{t.intro}</p>

        <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
          {t.contact}{" "}
          <a href="mailto:abdellah.recham@chemist.com" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
            abdellah.recham@chemist.com
          </a>{" "}
          {t.orCall}{" "}
          <a href="tel:+213799409548" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
            0799 409 548
          </a>
          . {t.basedIn}{" "}
          <strong className="text-foreground">{t.location}</strong>.
        </p>

        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">{t.industrialTitle}</h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.industrialP1}</p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.industrialP2}</p>

        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">{t.clinicalTitle}</h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.clinicalP1}</p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.clinicalP2}</p>

        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">{t.educationTitle}</h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.educationP}</p>

        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">{t.skillsTitle}</h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.skillsLab}</p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.skillsDigital}</p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">{t.skillsLang}</p>

        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">{t.ctaTitle}</h2>
        <p className="text-lg leading-relaxed mb-8 text-foreground">{t.ctaP}</p>

        <div className="flex flex-wrap gap-6 text-muted-foreground text-base mb-16">
          <a href="mailto:abdellah.recham@chemist.com" className="flex items-center gap-2 text-primary hover:underline">
            <Mail size={18} />
            abdellah.recham@chemist.com
          </a>
          <a href="tel:+213799409548" className="flex items-center gap-2 text-primary hover:underline">
            <Phone size={18} />
            0799 409 548
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Bouira, Algeria
          </span>
        </div>
      </main>
    </div>
  );
};

export default Index;
