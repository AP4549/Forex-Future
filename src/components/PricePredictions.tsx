
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Static prediction data based on the CSV content
const predictions = [
  { Date: "EUR_USD", "2025-04-10": "1.0403703", "2025-04-11": "1.06565", "2025-04-12": "1.0764751", "2025-04-13": "1.0811571", "2025-04-14": "1.0827938", "2025-04-15": "1.0827471", "2025-04-16": "1.0817508", "2025-04-17": "1.0802656", "2025-04-18": "1.0786006", "2025-04-19": "1.076961" },
  { Date: "GBP_USD", "2025-04-10": "1.0512581", "2025-04-11": "1.106868", "2025-04-12": "1.1273776", "2025-04-13": "1.1324636", "2025-04-14": "1.1300704", "2025-04-15": "1.1237105", "2025-04-16": "1.1151656", "2025-04-17": "1.1054828", "2025-04-18": "1.0953453", "2025-04-19": "1.0852163" },
  { Date: "USD_CHF", "2025-04-10": "0.8485526", "2025-04-11": "0.8456476", "2025-04-12": "0.84413785", "2025-04-13": "0.84328115", "2025-04-14": "0.84276664", "2025-04-15": "0.84244525", "2025-04-16": "0.84223264", "2025-04-17": "0.842075", "2025-04-18": "0.8419358", "2025-04-19": "0.8417904" },
  { Date: "USD_JPY", "2025-04-10": "147.11444", "2025-04-11": "146.81831", "2025-04-12": "146.67438", "2025-04-13": "146.61653", "2025-04-14": "146.60788", "2025-04-15": "146.62772", "2025-04-16": "146.66435", "2025-04-17": "146.71114", "2025-04-18": "146.76427", "2025-04-19": "146.82144" }
];

const PricePredictions = () => {
  const [selectedDate, setSelectedDate] = useState<string>(Object.keys(predictions[0]).find(key => key !== "Date") || "")
  const dates = Object.keys(predictions[0]).filter(key => key !== "Date")

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Forex Price Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select 
            value={selectedDate} 
            onValueChange={setSelectedDate}
          >
            <SelectTrigger className="bg-background border-primary/20">
              <SelectValue placeholder="Select a date" />
            </SelectTrigger>
            <SelectContent className="bg-background border-primary/20 shadow-lg dark:bg-black">
              {dates.map((date) => (
                <SelectItem 
                  key={date} 
                  value={date}
                  className="hover:bg-primary/10 focus:bg-primary/10 dark:hover:bg-primary/20 dark:focus:bg-primary/20"
                >
                  {date}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedDate && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Forex Pair</TableHead>
                  <TableHead>Predicted Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {predictions.map((row: any) => (
                  <TableRow key={row.Date}>
                    <TableCell>{row.Date}</TableCell>
                    <TableCell>{row[selectedDate]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default PricePredictions

