import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Преимущества</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Почему майнинг на газопоршневых установках — это будущее
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in">
            <Icon name="TrendingDown" size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Низкая стоимость</h3>
            <p className="text-muted-foreground">Электроэнергия из попутного газа в 3-4 раза дешевле рыночной</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-secondary transition-all duration-300 animate-fade-in">
            <Icon name="Leaf" size={40} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Экология</h3>
            <p className="text-muted-foreground">Утилизация попутного газа вместо его сжигания на факелах</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in">
            <Icon name="Gauge" size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Высокая ROI</h3>
            <p className="text-muted-foreground">Окупаемость проекта от 12 до 18 месяцев при текущих курсах</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-secondary transition-all duration-300 animate-fade-in">
            <Icon name="Shield" size={40} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Надежность</h3>
            <p className="text-muted-foreground">Промышленное оборудование с гарантией и техподдержкой 24/7</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in">
            <Icon name="Zap" size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Автономность</h3>
            <p className="text-muted-foreground">Независимость от центральных энергосетей и их тарифов</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-secondary transition-all duration-300 animate-fade-in">
            <Icon name="BarChart3" size={40} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Масштабируемость</h3>
            <p className="text-muted-foreground">Легко увеличивать мощности по мере роста добычи газа</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in">
            <Icon name="MapPin" size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Мобильность</h3>
            <p className="text-muted-foreground">Контейнерные решения для быстрого развертывания на месторождениях</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border hover:border-secondary transition-all duration-300 animate-fade-in">
            <Icon name="FileCheck" size={40} className="text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Легальность</h3>
            <p className="text-muted-foreground">Полное соответствие законодательству РФ и международным нормам</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
