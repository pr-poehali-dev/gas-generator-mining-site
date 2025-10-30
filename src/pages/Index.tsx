import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">CryptoGas</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("hero")} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection("technology")} className="hover:text-primary transition-colors">Технология</button>
            <button onClick={() => scrollToSection("benefits")} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection("equipment")} className="hover:text-primary transition-colors">Оборудование</button>
            <button onClick={() => scrollToSection("cases")} className="hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

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

      <section id="equipment" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Оборудование</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексные решения под ключ
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6 hover:border-primary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Box" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Контейнерная станция</h3>
                  <p className="text-muted-foreground mb-4">Готовое решение для быстрого развертывания</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Газопоршневая установка 500-1000 кВт
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      150-300 ASIC-майнеров
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Система охлаждения и вентиляции
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Автоматизированная система управления
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      Удаленный мониторинг и контроль
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-3xl font-bold text-primary mb-2">от 25 млн ₽</div>
                <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90">
                  Получить расчет
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 space-y-6 hover:border-secondary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Factory" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Стационарный комплекс</h3>
                  <p className="text-muted-foreground mb-4">Мощное решение для крупных месторождений</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Газопоршневые установки 2-5 МВт
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      600-1500 ASIC-майнеров
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Промышленная система охлаждения
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      SCADA-система управления
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-secondary" />
                      Собственная подстанция
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-3xl font-bold text-secondary mb-2">от 80 млн ₽</div>
                <Button onClick={() => scrollToSection("contact")} className="w-full bg-secondary hover:bg-secondary/90">
                  Получить расчет
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Кейсы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Реализованные проекты по всей России
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:border-primary transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Landmark" size={64} className="text-primary" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Западная Сибирь</h3>
                <p className="text-sm text-muted-foreground">
                  Контейнерная станция 800 кВт на нефтяном месторождении. 200 ASIC-майнеров. Окупаемость — 14 месяцев.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="text-primary font-bold">800 кВт</div>
                    <div className="text-muted-foreground">Мощность</div>
                  </div>
                  <div>
                    <div className="text-primary font-bold">200</div>
                    <div className="text-muted-foreground">ASIC</div>
                  </div>
                  <div>
                    <div className="text-primary font-bold">14 мес</div>
                    <div className="text-muted-foreground">ROI</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:border-secondary transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <Icon name="Building2" size={64} className="text-secondary" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Татарстан</h3>
                <p className="text-sm text-muted-foreground">
                  Стационарный комплекс 3 МВт на газовом месторождении. 900 майнеров. Запущен в 2023 году.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="text-secondary font-bold">3 МВт</div>
                    <div className="text-muted-foreground">Мощность</div>
                  </div>
                  <div>
                    <div className="text-secondary font-bold">900</div>
                    <div className="text-muted-foreground">ASIC</div>
                  </div>
                  <div>
                    <div className="text-secondary font-bold">16 мес</div>
                    <div className="text-muted-foreground">ROI</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:border-primary transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Icon name="Mountain" size={64} className="text-primary" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Краснодарский край</h3>
                <p className="text-sm text-muted-foreground">
                  Два контейнера по 500 кВт на удаленном месторождении. Полная автономность работы.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <div className="text-primary font-bold">1 МВт</div>
                    <div className="text-muted-foreground">Мощность</div>
                  </div>
                  <div>
                    <div className="text-primary font-bold">300</div>
                    <div className="text-muted-foreground">ASIC</div>
                  </div>
                  <div>
                    <div className="text-primary font-bold">12 мес</div>
                    <div className="text-muted-foreground">ROI</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами для расчета проекта
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@cryptogas.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@cryptogas.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+78001234567" className="text-muted-foreground hover:text-secondary transition-colors">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Офис</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Энергетическая, 15
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: Выходной
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-gradient">CryptoGas</div>
            <div className="text-muted-foreground text-sm">
              © 2024 CryptoGas Mining Solutions. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;