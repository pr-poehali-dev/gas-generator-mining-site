import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ROICalculatorProps {
  scrollToSection: (id: string) => void;
}

const ROICalculator = ({ scrollToSection }: ROICalculatorProps) => {
  const [power, setPower] = useState(1000);
  const [btcPrice, setBtcPrice] = useState(60000);
  const [energyCost, setEnergyCost] = useState(1.5);

  const calculateROI = () => {
    const minersCount = Math.floor(power / 3.5);
    const hashrate = minersCount * 110;
    const dailyBTC = (hashrate / 1000000) * 0.00000625 * 144;
    const monthlyRevenue = dailyBTC * btcPrice * 30;
    const monthlyEnergyCost = power * 24 * 30 * energyCost;
    const monthlyProfit = monthlyRevenue - monthlyEnergyCost;
    const investmentCost = power * 35000;
    const roiMonths = investmentCost / monthlyProfit;
    
    return {
      minersCount: Math.floor(minersCount),
      monthlyRevenue: Math.floor(monthlyRevenue),
      monthlyProfit: Math.floor(monthlyProfit),
      roiMonths: roiMonths.toFixed(1),
      investmentCost: Math.floor(investmentCost / 1000000)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">Калькулятор окупаемости</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Рассчитайте доходность вашего проекта
        </p>
        <Card className="p-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Icon name="Zap" size={18} className="text-primary" />
                Мощность (кВт)
              </label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg font-semibold"
                min="100"
                max="5000"
                step="100"
              />
              <input
                type="range"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full"
                min="100"
                max="5000"
                step="100"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Icon name="DollarSign" size={18} className="text-secondary" />
                Курс BTC ($)
              </label>
              <input
                type="number"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number(e.target.value))}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all text-lg font-semibold"
                min="10000"
                max="150000"
                step="1000"
              />
              <input
                type="range"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number(e.target.value))}
                className="w-full"
                min="10000"
                max="150000"
                step="1000"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Icon name="Flame" size={18} className="text-primary" />
                Стоимость кВт·ч (₽)
              </label>
              <input
                type="number"
                value={energyCost}
                onChange={(e) => setEnergyCost(Number(e.target.value))}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg font-semibold"
                min="0.5"
                max="6"
                step="0.1"
              />
              <input
                type="range"
                value={energyCost}
                onChange={(e) => setEnergyCost(Number(e.target.value))}
                className="w-full"
                min="0.5"
                max="6"
                step="0.1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4 pt-6 border-t border-border">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">{results.minersCount}</div>
              <div className="text-sm text-muted-foreground">ASIC-майнеров</div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl border border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-1">{results.investmentCost} млн</div>
              <div className="text-sm text-muted-foreground">Инвестиции</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-1">{(results.monthlyRevenue / 1000000).toFixed(1)} млн</div>
              <div className="text-sm text-muted-foreground">Выручка/мес</div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl border border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-1">{(results.monthlyProfit / 1000000).toFixed(1)} млн</div>
              <div className="text-sm text-muted-foreground">Прибыль/мес</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20 animate-pulse-glow">
              <div className="text-3xl font-bold text-primary mb-1">{results.roiMonths}</div>
              <div className="text-sm text-muted-foreground">ROI (мес)</div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" />
              <div>
                Расчет основан на текущей сложности сети Bitcoin и средних показателях майнеров Antminer S19 Pro. 
                Реальная доходность может отличаться в зависимости от волатильности курса и изменения сложности майнинга.
              </div>
            </div>
          </div>

          <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90" size="lg">
            Получить детальный расчет
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default ROICalculator;
