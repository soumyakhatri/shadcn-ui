import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'

async function SingleUserPage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{username}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* CONTAINER */}
            <div className='mt-4 flex flex-col xl:flex-row gap-8'>
                {/* LEFT */}
                <div className='w-full xl:w-1/3 space-y-6'>
                    {/* USER BADGES CONTAINER */}
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <div className='bg-primary-foreground'>
                            <h1 className='text-xl font-semibold'>User Badges</h1>
                            <div className='flex gap-4 mt-4'>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <BadgeCheck
                                            size={36}
                                            className='rounded-full bg-blue-500/30 border-blue-500/50 p-2'
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <h1 className='font-bold mb-2'>Verified User</h1>
                                        <p className='text-sm text-muted-foreground'>This user has been verified by the admin</p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Shield
                                            size={36}
                                            className='rounded-full bg-orange-500/30 border-orange-500/50 p-2'
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <h1 className='font-bold mb-2'>Admin</h1>
                                        <p className='text-sm text-muted-foreground'>Admin users have access to all features and can manage users.</p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Candy
                                            size={36}
                                            className='rounded-full bg-red-500/30 border-red-500/50 p-2'
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <h1 className='font-bold mb-2'>Awarded</h1>
                                        <p className='text-sm text-muted-foreground'>This user has been awarded for their contributions.</p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <Citrus
                                            size={36}
                                            className='rounded-full bg-green-500/30 border-green-500/50 p-2'
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        <h1 className='font-bold mb-2'>Popular</h1>
                                        <p className='text-sm text-muted-foreground'>This user has been popular in the community.</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER */}
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-semibold'>User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                                <EditUser/>
                            </Sheet>
                        </div>
                        <div className='space-y-4 mt-4'>
                            <div className='flex flex-col gap-2 mb-8'>
                                <p className='text-sm text-muted-foreground'>Profile Completion</p>
                                <Progress value={66} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Username:</span>
                                <span>john.doe</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Email:</span>
                                <span>john.doe</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Phone:</span>
                                <span>+91 7555659852</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Location:</span>
                                <span>Bhopal, MP</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold'>Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className='text-sm text-muted-foreground mt-4'>Joined on 2025.01.01</p>
                    </div>
                    {/* CARD LIST CONTAINER */}
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        <CardList title='Recent Transaction' />
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-full xl:w-2/3 space-y-6'>
                    {/* USER CARD CONTAINER */}
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        User card
                    </div>
                    {/* CHART CONTAINER */}
                    <div className='bg-primary-foreground p-4 rounded-lg'>
                        Chart
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleUserPage