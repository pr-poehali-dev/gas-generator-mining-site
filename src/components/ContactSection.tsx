import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
