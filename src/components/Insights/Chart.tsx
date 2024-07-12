import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import CustomTick from "./CustomTick";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Prop {
  cardChartData: string;
  view: number;
  contact: number;
  social: number;
}

function Chart({ cardChartData, contact, social, view }: Prop) {
  const chartData = [{ view, contact, social }];

  const chartConfig = {
    view: {
      label: "Card View",
      color: "hsl(var(--chart-1))",
    },
    contact: {
      label: "Contact Tap",
      color: "hsl(var(--chart-2))",
    },

    social: {
      label: "Social Media",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Track your Record</CardTitle>
        <div className="flex space-x-10 pt-3">
          <CardDescription className="flex">
            <div className="bg-[#dc2626] h-5 w-5"></div>
            <p className="ms-3">Card View</p>
          </CardDescription>
          <CardDescription className="flex">
            <div className="bg-[#f59e0b] h-5 w-5"></div>
            <p className="ms-3">Contact Download</p>
          </CardDescription>
          <CardDescription className="flex">
            <div className="bg-[#059669] h-5 w-5"></div>
            <p className="ms-3">Social Media Tap</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={`${cardChartData}`}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
              tick={<CustomTick />}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="view" fill="#dc2626" radius={4} />
            <Bar dataKey="contact" fill="#f59e0b" radius={4} />
            <Bar dataKey="social" fill="#059669" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Chart;
