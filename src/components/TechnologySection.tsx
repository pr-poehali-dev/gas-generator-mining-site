import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Технология</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Уникальное решение для эффективного использования попутного газа
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4 hover:border-primary transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Icon name="Flame" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Газопоршневые установки</h3>
            <p className="text-muted-foreground">
              Преобразуем попутный нефтяной газ в электроэнергию с помощью современных газопоршневых агрегатов мощностью от 100 кВт до 2 МВт.
            </p>
          </Card>
          <Card className="p-6 space-y-4 hover:border-secondary transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
              <Icon name="Cpu" size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold">ASIC-майнеры</h3>
            <p className="text-muted-foreground">
              Используем энергоэффективные майнеры последнего поколения для добычи Bitcoin, Ethereum и других криптовалют с максимальной производительностью.
            </p>
          </Card>
          <Card className="p-6 space-y-4 hover:border-primary transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Icon name="CloudCog" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Система мониторинга</h3>
            <p className="text-muted-foreground">
              Полный контроль и аналитика в режиме реального времени. Автоматизированная система управления обеспечивает стабильную работу 24/7.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
