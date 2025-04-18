
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Home = () => {
  const [today, setToday] = useState<string>("");
  
  useEffect(() => {
    const date = new Date();
    setToday(date.toISOString().split('T')[0]);
  }, []);
  
  const features = [
    {
      title: "AI-Driven Predictions",
      description: "LSTM models trained on 10+ years of Forex data."
    }, 
    {
      title: "Multi-Currency Support",
      description: "Analyze EUR/USD, GBP/USD, USD/CHF, USD/JPY."
    }, 
    {
      title: "Market Trends & Arbitrage",
      description: "Identify trading opportunities with visual analysis."
    }, 
    {
      title: "Simple & Interactive",
      description: "Navigate seamlessly with an intuitive UI."
    }
  ];
  
  return (
    <div className="grid gap-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={feature.title} 
            className="glass-card hover-scale group shadow-md dark:shadow-primary/20 dark:bg-black/30"
          >
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90">
                {feature.title}
              </h3>
              <p className="text-muted-foreground dark:text-primary/80">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="text-center space-y-2">
          {today && (
            <p className="text-sm text-muted-foreground dark:text-primary/70">
              Data updated: {today}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
