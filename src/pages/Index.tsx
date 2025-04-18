import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import Home from "@/components/Home";
import Graphs from "@/components/Graphs";
import PricePredictions from "@/components/PricePredictions";
const Index = () => {
  return <div className="bokeh-background">
      <div className="container mx-auto p-4 sm:p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Forex Analysis</h1>
          <ThemeToggle />
        </div>
        
        <Card className="glass-card animate-fade-in shadow-lg dark:shadow-primary/10">
          <CardHeader className="text-center space-y-4 border-b border-border/10">
            <div className="space-y-2">
              <CardTitle className="text-5xl sm:text-6xl font-bold tracking-tight">
                Designed for
                <span className="text-primary"> Smart </span>
                Trading
              </CardTitle>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Forex Analysis Platform for Modern Traders</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <span className="feature-badge">Real-Time</span>
              <span className="feature-badge">Multi-Currency</span>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-secondary/50 backdrop-blur dark:bg-secondary/10">
                {["home", "graphs", "predictions"].map(tab => <TabsTrigger key={tab} value={tab} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground capitalize">
                    {tab}
                  </TabsTrigger>)}
              </TabsList>
              
              <div className="mt-4">
                {["home", "graphs", "predictions"].map(tab => <TabsContent key={tab} value={tab} className="focus:outline-none">
                    {tab === "home" && <Home />}
                    {tab === "graphs" && <Graphs />}
                    {tab === "predictions" && <PricePredictions />}
                  </TabsContent>)}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Index;