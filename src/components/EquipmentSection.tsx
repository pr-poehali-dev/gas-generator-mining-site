import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface EquipmentSectionProps {
  scrollToSection: (id: string) => void;
}

const EquipmentSection = ({ scrollToSection }: EquipmentSectionProps) => {
  return (
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
  );
};

export default EquipmentSection;
