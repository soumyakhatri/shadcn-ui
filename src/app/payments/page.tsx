import { DataTablePagination } from "@/components/DataTablePagination"
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        { id: "1a2b3c01", amount: 100, status: "pending", email: "user1@example.com" },
        { id: "1a2b3c02", amount: 250, status: "processing", email: "user2@example.com" },
        { id: "1a2b3c03", amount: 320, status: "success", email: "user3@example.com" },
        { id: "1a2b3c04", amount: 150, status: "failed", email: "user4@example.com" },
        { id: "1a2b3c05", amount: 400, status: "pending", email: "user5@example.com" },
        { id: "1a2b3c06", amount: 90, status: "processing", email: "user6@example.com" },
        { id: "1a2b3c07", amount: 600, status: "success", email: "user7@example.com" },
        { id: "1a2b3c08", amount: 70, status: "failed", email: "user8@example.com" },
        { id: "1a2b3c09", amount: 210, status: "success", email: "user9@example.com" },
        { id: "1a2b3c10", amount: 310, status: "pending", email: "user10@example.com" },
        { id: "1a2b3c11", amount: 540, status: "processing", email: "user11@example.com" },
        { id: "1a2b3c12", amount: 75, status: "success", email: "user12@example.com" },
        { id: "1a2b3c13", amount: 420, status: "failed", email: "user13@example.com" },
        { id: "1a2b3c14", amount: 150, status: "pending", email: "user14@example.com" },
        { id: "1a2b3c15", amount: 230, status: "processing", email: "user15@example.com" },
        { id: "1a2b3c16", amount: 125, status: "success", email: "user16@example.com" },
        { id: "1a2b3c17", amount: 340, status: "failed", email: "user17@example.com" },
        { id: "1a2b3c18", amount: 500, status: "pending", email: "user18@example.com" },
        { id: "1a2b3c19", amount: 280, status: "processing", email: "user19@example.com" },
        { id: "1a2b3c20", amount: 310, status: "success", email: "user20@example.com" },
        { id: "1a2b3c21", amount: 450, status: "failed", email: "user21@example.com" },
        { id: "1a2b3c22", amount: 135, status: "pending", email: "user22@example.com" },
        { id: "1a2b3c23", amount: 170, status: "processing", email: "user23@example.com" },
        { id: "1a2b3c24", amount: 275, status: "success", email: "user24@example.com" },
        { id: "1a2b3c25", amount: 195, status: "failed", email: "user25@example.com" },
        { id: "1a2b3c26", amount: 600, status: "pending", email: "user26@example.com" },
        { id: "1a2b3c27", amount: 210, status: "processing", email: "user27@example.com" },
        { id: "1a2b3c28", amount: 365, status: "success", email: "user28@example.com" },
        { id: "1a2b3c29", amount: 430, status: "failed", email: "user29@example.com" },
        { id: "1a2b3c30", amount: 255, status: "pending", email: "user30@example.com" },
        { id: "1a2b3c31", amount: 310, status: "processing", email: "user31@example.com" },
        { id: "1a2b3c32", amount: 180, status: "success", email: "user32@example.com" },
        { id: "1a2b3c33", amount: 500, status: "failed", email: "user33@example.com" },
        { id: "1a2b3c34", amount: 450, status: "pending", email: "user34@example.com" },
        { id: "1a2b3c35", amount: 275, status: "processing", email: "user35@example.com" },
        { id: "1a2b3c36", amount: 310, status: "success", email: "user36@example.com" },
        { id: "1a2b3c37", amount: 90, status: "failed", email: "user37@example.com" },
        { id: "1a2b3c38", amount: 150, status: "pending", email: "user38@example.com" },
        { id: "1a2b3c39", amount: 410, status: "processing", email: "user39@example.com" },
        { id: "1a2b3c40", amount: 280, status: "success", email: "user40@example.com" },
        { id: "1a2b3c41", amount: 130, status: "failed", email: "user41@example.com" },
        { id: "1a2b3c42", amount: 340, status: "pending", email: "user42@example.com" },
        { id: "1a2b3c43", amount: 230, status: "processing", email: "user43@example.com" },
        { id: "1a2b3c44", amount: 510, status: "success", email: "user44@example.com" },
        { id: "1a2b3c45", amount: 250, status: "failed", email: "user45@example.com" },
        { id: "1a2b3c46", amount: 190, status: "pending", email: "user46@example.com" },
        { id: "1a2b3c47", amount: 375, status: "processing", email: "user47@example.com" },
        { id: "1a2b3c48", amount: 480, status: "success", email: "user48@example.com" },
        { id: "1a2b3c49", amount: 210, status: "failed", email: "user49@example.com" },
        { id: "1a2b3c50", amount: 330, status: "success", email: "user50@example.com" },
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="p-4">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold mb-8">All Payments</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}