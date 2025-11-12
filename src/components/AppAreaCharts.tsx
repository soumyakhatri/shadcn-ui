"use client"

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
    indians: {
        label: "Indians",
        color: "var(--chart-2)",
    },
    foreigners: {
        label: "Foreigners",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", indians: 186, foreigners: 80 },
    { month: "February", indians: 305, foreigners: 200 },
    { month: "March", indians: 237, foreigners: 120 },
    { month: "April", indians: 73, foreigners: 190 },
    { month: "May", indians: 209, foreigners: 130 },
    { month: "June", indians: 214, foreigners: 140 },
]
function AppAreaCharts() {
    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Revenue</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <defs>
                        <linearGradient id="fillIndians" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-indians)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-indians)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillForeigners" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-foreigners)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-foreigners)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="foreigners"
                        type="natural"
                        fill="url(#fillForeigners)"
                        fillOpacity={0.4}
                        stroke="var(--color-foreigners)"
                        stackId="a"
                    />
                    <Area
                        dataKey="indians"
                        type="natural"
                        fill="url(#fillIndians)"
                        fillOpacity={0.4}
                        stroke="var(--color-indians)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}

export default AppAreaCharts