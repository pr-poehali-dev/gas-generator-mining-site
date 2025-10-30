import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient glow">
            Майнинг на энергии газа
          </h1>
          <p className="text-xl text-muted-foreground">
            Превращаем попутный нефтяной газ в цифровые активы. Инновационная технология майнинга криптовалют с использованием газопоршневых установок.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-card p-4 rounded-lg border border-primary/20 animate-pulse-glow">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-secondary/20 animate-pulse-glow">
              <div className="text-3xl font-bold text-secondary">-40%</div>
              <div className="text-sm text-muted-foreground">Затраты на энергию</div>
            </div>
            <div className="bg-card p-4 rounded-lg border border-primary/20 animate-pulse-glow">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Мониторинг</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary hover:bg-primary/90">
              Начать майнинг
            </Button>
            <Button onClick={() => scrollToSection("technology")} size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/cee1f4ec-c61c-4642-bde4-afc9d4ffbdc4/files/df98cb47-571a-446a-b0de-93616cc615dd.jpg" 
              alt="Энергия газа в криптовалюту"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
