import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CasesSection = () => {
  return (
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
  );
};

export default CasesSection;
