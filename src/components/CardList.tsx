import Image from "next/image";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
    {
        id: 1,
        title: "Mastering React 19",
        badge: "Top Pick",
        image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1200,
    },
    {
        id: 2,
        title: "Next.js 15 Guide",
        badge: "Trending",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 980,
    },
    {
        id: 3,
        title: "MERN Stack Crash Course",
        badge: "New",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 870,
    },
    {
        id: 4,
        title: "AI SDK with Vercel",
        badge: "Hot",
        image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 740,
    },
];

const latestTransaction = [
    {
        id: 1,
        title: "Pro Plan Subscription",
        badge: "Success",
        image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1,
    },
    {
        id: 2,
        title: "React Course Purchase",
        badge: "Completed",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1,
    },
    {
        id: 3,
        title: "Next.js Workshop",
        badge: "Pending",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1,
    },
    {
        id: 4,
        title: "Custom API Integration",
        badge: "Processing",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
        count: 1,
    },
];


function CardList({ title }: { title?: string }) {
    const list = title === "Popular Content" ? popularContent : latestTransaction
    return (
        <div>
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">

                {list.map(item => {
                    return <Card key={item.title} className="flex-row justify-between items-center gap-4 p-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.image}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="flex-1 p-0">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant={"secondary"}>{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">
                            {item.count}
                        </CardFooter>
                    </Card>
                })}
            </div>

        </div>
    )
}

export default CardList