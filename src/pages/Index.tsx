import { Mail, Phone, MapPin, Globe } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
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

        {/* Intro pitch */}
        <p className="text-lg leading-relaxed mb-6 text-foreground">
          I am a <strong>chemical analyst</strong> and <strong>industrial chemistry technician</strong> with 
          hands-on experience in chlor-alkali processes, medical laboratory diagnostics, and quality control. 
          I hold a degree in Fundamental Chemistry from the{" "}
          <a href="https://www.univ-bouira.dz/" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
            University of Bouira
          </a>
          , and I've worked in both{" "}
          <strong>industrial production</strong> and <strong>clinical laboratory settings</strong>.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
          You can reach me at{" "}
          <a href="mailto:abdellah.recham@chemist.com" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
            abdellah.recham@chemist.com
          </a>{" "}
          or call{" "}
          <a href="tel:+213799409548" className="text-primary underline decoration-primary/40 hover:decoration-primary transition-colors">
            0799 409 548
          </a>
          . Based in{" "}
          <strong className="text-foreground">Bouira, Ain Bessem, Algeria</strong>.
        </p>

        {/* Industrial Chemistry */}
        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">
          Industrial Chemistry — Where I Thrive
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          At <strong>North Africa Chemical</strong>, I operated and monitored chlor-alkali production lines — 
          manufacturing sodium hypochlorite (NaClO), caustic soda (NaOH), and hydrochloric acid (HCl). 
          These aren't gentle lab experiments. This is large-scale industrial chemistry where precision 
          prevents disasters and delivers profits.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          I controlled brine (NaCl) solution quality, secured chemical reactions, monitored process 
          parameters in real-time, and worked hand-in-hand with the production team. All while maintaining 
          strict <strong>HSE compliance</strong> — because when you're handling corrosive and oxidizing 
          agents at scale, safety isn't optional. It's the job.
        </p>

        {/* Medical Lab */}
        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">
          Clinical Diagnostics — Precision Under Pressure
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          At <strong>Ain Bessem Hospital</strong>, I performed biochemical and hematological analyses as 
          part of a clinical diagnostics team. Every result I delivered informed a doctor's decision. 
          Every data point I entered had to be flawless.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          I managed sample preparation, quality control, and data reporting with the kind of rigor 
          that clinical environments demand. If you need someone who understands that accuracy isn't 
          just a nice-to-have — it's life or death — that's me.
        </p>

        {/* Education */}
        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">
          Formal Training
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          <strong>Licence in Fundamental Chemistry</strong> — University of Bouira Akli Mohand Oulhadj 
          (2020–2024). Deep grounding in analytical chemistry, physical chemistry, laboratory techniques, 
          and data interpretation. I didn't just learn theory — I developed the problem-solving mindset 
          that makes me effective across industries, from energy to petrochemistry.
        </p>

        {/* Technical Skills */}
        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">
          What I Bring to the Table
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          <strong>Laboratory & Industrial:</strong> Spectrophotometry, centrifugation, sample preparation, 
          electrolysis, chlor-alkali processes, quality control of chemical solutions and demineralized water.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          <strong>Digital:</strong> Microsoft Office suite, data entry and analysis tools, and programming 
          fundamentals for automation and data-driven decision-making. I'm not stuck in analog — I use 
          technology to amplify precision.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-foreground">
          <strong>Languages:</strong> Arabic (native), French (intermediate), English (intermediate). 
          I communicate across cultures and technical contexts.
        </p>

        {/* CTA */}
        <h2 className="font-heading text-xl md:text-2xl font-bold mt-14 mb-4 text-foreground">
          Let's Talk
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-foreground">
          Whether you need a reliable chemical analyst, a meticulous lab technician, or someone who can 
          operate industrial-scale chemistry with both competence and care — I'm ready. The best way 
          to see what I can do is to put me to work.
        </p>

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
