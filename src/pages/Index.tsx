import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [gasVolume, setGasVolume] = useState(1000);
  const [powerCost, setPowerCost] = useState(5);
  
  const calculateROI = () => {
    const monthlyProfit = gasVolume * 0.8 * powerCost;
    const yearlyProfit = monthlyProfit * 12;
    const investment = 15000000;
    const paybackMonths = Math.round(investment / monthlyProfit);
    return { monthlyProfit, yearlyProfit, paybackMonths };
  };

  const roi = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Zap" className="text-primary" size={20} />
              <span className="text-sm font-medium">Инновационные решения 2024</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Майнинг на <span className="text-gradient">газопоршневых установках</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Превратите попутный газ в цифровые активы. Экологично, выгодно, автономно.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                <Icon name="Calculator" size={20} />
                Рассчитать окупаемость
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                Получить консультацию
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              {[
                { value: '99.5%', label: 'Утилизация газа', icon: 'Flame' },
                { value: '12-18', label: 'Месяцев окупаемость', icon: 'TrendingUp' },
                { value: '24/7', label: 'Автономная работа', icon: 'Clock' }
              ].map((stat, i) => (
                <Card key={i} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={32} />
                    <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg">
              Технология утилизации попутного нефтяного газа через майнинг криптовалют
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                step: '01', 
                title: 'Сбор газа', 
                desc: 'Попутный газ с месторождения направляется в систему',
                icon: 'Droplet'
              },
              { 
                step: '02', 
                title: 'Генерация', 
                desc: 'ГПУ преобразует газ в электроэнергию с КПД до 42%',
                icon: 'Zap'
              },
              { 
                step: '03', 
                title: 'Майнинг', 
                desc: 'ASIC-майнеры добывают криптовалюту на полученной энергии',
                icon: 'Cpu'
              },
              { 
                step: '04', 
                title: 'Прибыль', 
                desc: 'Монетизация цифровых активов и окупаемость проекта',
                icon: 'DollarSign'
              }
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden group hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/10 absolute -top-4 -right-4">
                    {item.step}
                  </div>
                  <Icon name={item.icon as any} className="text-primary mb-4" size={40} />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества решения</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Leaf',
                title: 'Экологичность',
                desc: 'Утилизация газа вместо сжигания на факелах. Снижение выбросов CO₂ на 95%.'
              },
              {
                icon: 'TrendingUp',
                title: 'Экономика',
                desc: 'Окупаемость 12-18 месяцев. ROI до 300% за 3 года эксплуатации.'
              },
              {
                icon: 'MapPin',
                title: 'Автономность',
                desc: 'Работа в удалённых локациях без подключения к электросетям.'
              },
              {
                icon: 'Shield',
                title: 'Надёжность',
                desc: 'Промышленное оборудование с ресурсом 100 000+ моточасов.'
              },
              {
                icon: 'Settings',
                title: 'Модульность',
                desc: 'Гибкое масштабирование от 100 кВт до 10+ МВт мощности.'
              },
              {
                icon: 'BarChart3',
                title: 'Мониторинг',
                desc: 'Система удалённого управления и контроля 24/7 онлайн.'
              }
            ].map((benefit, i) => (
              <Card key={i} className="hover:shadow-lg hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Решения под ключ</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Container" className="text-primary-foreground" size={24} />
                </div>
                <CardTitle className="text-2xl">Контейнерное решение</CardTitle>
                <CardDescription className="text-base">
                  Готовый к работе комплекс в морском контейнере 40 футов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {[
                    'ГПУ мощностью 100-300 кВт',
                    'ASIC-майнеры последнего поколения',
                    'Система охлаждения и вентиляции',
                    'Автоматика и удалённый мониторинг',
                    'Монтаж за 5-7 дней'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={18} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">От</div>
                  <div className="text-3xl font-bold text-primary">12 млн ₽</div>
                </div>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="text-secondary-foreground" size={24} />
                </div>
                <CardTitle className="text-2xl">Стационарный комплекс</CardTitle>
                <CardDescription className="text-base">
                  Промышленная установка для крупных объёмов газа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {[
                    'ГПУ мощностью от 500 кВт',
                    'Ферма на 500+ ASIC-майнеров',
                    'Промышленная система охлаждения',
                    'Система газоподготовки',
                    'Индивидуальное проектирование'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-secondary mt-1" size={18} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground">От</div>
                  <div className="text-3xl font-bold text-secondary">35 млн ₽</div>
                </div>
                <Button variant="secondary" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Калькулятор окупаемости</CardTitle>
                <CardDescription className="text-base">
                  Рассчитайте экономическую эффективность вашего проекта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Объём попутного газа (м³/час)
                    </label>
                    <Input 
                      type="number" 
                      value={gasVolume}
                      onChange={(e) => setGasVolume(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground">
                      Среднесуточный объём доступного газа
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Стоимость электроэнергии (₽/кВт·ч)
                    </label>
                    <Input 
                      type="number" 
                      value={powerCost}
                      onChange={(e) => setPowerCost(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground">
                      Рыночная цена в вашем регионе
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 space-y-6">
                  <h3 className="text-xl font-bold text-center mb-6">Результаты расчёта</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <Icon name="TrendingUp" className="text-primary mx-auto" size={32} />
                      <div className="text-sm text-muted-foreground">Прибыль в месяц</div>
                      <div className="text-2xl font-bold text-primary">
                        {roi.monthlyProfit.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>

                    <div className="text-center space-y-2">
                      <Icon name="Calendar" className="text-secondary mx-auto" size={32} />
                      <div className="text-sm text-muted-foreground">Прибыль в год</div>
                      <div className="text-2xl font-bold text-secondary">
                        {roi.yearlyProfit.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>

                    <div className="text-center space-y-2">
                      <Icon name="Clock" className="text-accent mx-auto" size={32} />
                      <div className="text-sm text-muted-foreground">Окупаемость</div>
                      <div className="text-2xl font-bold text-accent">
                        {roi.paybackMonths} мес
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      *Расчёт приблизительный. Точные показатели зависят от характеристик газа и оборудования.
                    </p>
                    <Button size="lg" className="gap-2">
                      <Icon name="FileText" size={20} />
                      Получить детальный расчёт
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Реализованные проекты</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                region: 'Татарстан',
                power: '500 кВт',
                gas: '1200 м³/ч',
                payback: '14 месяцев',
                year: '2023'
              },
              {
                region: 'Западная Сибирь',
                power: '1.2 МВт',
                gas: '2800 м³/ч',
                payback: '16 месяцев',
                year: '2023'
              },
              {
                region: 'Башкортостан',
                power: '300 кВт',
                gas: '750 м³/ч',
                payback: '13 месяцев',
                year: '2024'
              }
            ].map((project, i) => (
              <Card key={i} className="hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.region}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Мощность</span>
                    <span className="font-medium">{project.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Объём газа</span>
                    <span className="font-medium">{project.gas}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="text-muted-foreground">Окупаемость</span>
                    <span className="font-bold text-primary">{project.payback}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Готовы начать проект?</CardTitle>
                <CardDescription className="text-base">
                  Оставьте заявку и получите бесплатный расчёт для вашего месторождения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Компания" />
                  <Input placeholder="Объём попутного газа (м³/ч)" className="md:col-span-2" />
                </div>
                
                <Button size="lg" className="w-full mb-8 gap-2">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>

                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center space-y-2">
                    <Icon name="Phone" className="mx-auto text-primary" size={24} />
                    <div className="text-sm font-medium">+7 (495) 123-45-67</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="Mail" className="mx-auto text-primary" size={24} />
                    <div className="text-sm font-medium">info@gasminers.ru</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="MapPin" className="mx-auto text-primary" size={24} />
                    <div className="text-sm font-medium">Москва, РФ</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 GasMiners. Инновационные решения для утилизации попутного газа</p>
        </div>
      </footer>
    </div>
  );
}
