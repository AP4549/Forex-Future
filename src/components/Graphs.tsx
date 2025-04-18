
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

const Graphs = () => {
  const graphDefinitions = {
    arbitrage: "Arbitrage involves simultaneously buying and selling assets in different markets to profit from price differences.",
    trends: "Technical analysis of currency pair movements over time to identify market patterns and potential trading opportunities.",
    insights: "Advanced market analysis combining multiple indicators to provide comprehensive trading insights."
  }

  return (
    <ScrollArea className="h-[800px] mt-6">
      <div className="grid gap-6">
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Arbitrage Opportunity Analysis</CardTitle>
              <Badge variant="outline" className="animate-fade-in">Analysis</Badge>
            </div>
            <CardDescription className="mt-2">{graphDefinitions.arbitrage}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {[
              {
                image: "/Graphs/image.png",
                title: "Arbitrage Analysis",
                description: "This graph analyzes the differences in arbitrage opportunities between different forex pairs."
              },
              {
                image: "/Graphs/image2.png",
                description: "Market movements showing discrepancies in price points for arbitrage trading."
              },
              {
                image: "/Graphs/image3.png",
                description: "Time series of price gaps that can be exploited for risk-free profit."
              },
              {
                image: "/Graphs/image4.png",
                description: "Comparison of forex spreads to identify potential arbitrage trades."
              }
            ].map((graph, index) => (
              <div key={index} className="space-y-2 animate-fade-in hover:scale-[1.02] transition-transform duration-200">
                <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={graph.image} 
                    alt={graph.title || `Arbitrage Graph ${index + 1}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardDescription>{graph.description}</CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animate-fade-in delay-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Forex Pair Trends</CardTitle>
              <Badge variant="outline" className="animate-fade-in">Trends</Badge>
            </div>
            <CardDescription className="mt-2">{graphDefinitions.trends}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {[
              { image: "/Graphs/eur vs usd.png", title: "EUR/USD Trend" },
              { image: "/Graphs/gbp vs usd.png", title: "GBP/USD Trend" },
              { image: "/Graphs/usd vs chf.png", title: "USD/CHF Trend" },
              { image: "/Graphs/jpy vs usd.png", title: "USD/JPY Trend" }
            ].map((graph, index) => (
              <div key={index} className="space-y-2 animate-fade-in hover:scale-[1.02] transition-transform duration-200">
                <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={graph.image} 
                    alt={graph.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardDescription>{graph.title}</CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="animate-fade-in delay-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Market Insights & Portfolio Analysis</CardTitle>
              <Badge variant="outline" className="animate-fade-in">Insights</Badge>
            </div>
            <CardDescription className="mt-2">{graphDefinitions.insights}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {[
              {
                image: "/Graphs/market regime.png",
                title: "Market Regime",
                description: "Market Regime - Identifying bullish and bearish trends."
              },
              {
                image: "/Graphs/portfolio.png",
                title: "Portfolio Performance",
                description: "Portfolio Performance - Evaluating returns and risks."
              },
              {
                image: "/Graphs/risk-return.png",
                title: "Risk vs Return Analysis",
                description: "Risk vs Return Analysis - Balancing risk and reward in trading."
              }
            ].map((graph, index) => (
              <div key={index} className="space-y-2 animate-fade-in hover:scale-[1.02] transition-transform duration-200">
                <div className="relative h-48 sm:h-64 w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={graph.image} 
                    alt={graph.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardDescription>{graph.description}</CardDescription>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}

export default Graphs
