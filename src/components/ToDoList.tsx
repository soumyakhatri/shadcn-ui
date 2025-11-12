"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"

function ToDoList() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false)

    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon/>
                        {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0">
                    <Calendar 
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        className="rounded-lg border"
                    />
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="h-[400px] mt-4 ">
                <div className="flex flex-col gap-4">
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item2" />
                            <label htmlFor="item2" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item3" checked />
                            <label htmlFor="item3" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item4" checked />
                            <label htmlFor="item4" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item5" />
                            <label htmlFor="item5" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item6" checked />
                            <label htmlFor="item6" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item7" />
                            <label htmlFor="item7" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item8" checked />
                            <label htmlFor="item8" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item9" />
                            <label htmlFor="item9" className="text-sm text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default ToDoList