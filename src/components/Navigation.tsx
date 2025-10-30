import { Button } from "@/components/ui/button";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
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
  );
};

export default Navigation;
