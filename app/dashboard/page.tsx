import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CirclePlus } from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";


const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center h-full text-center gap max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">
                    Invoices
                </h1>
                <p>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">
                                <CirclePlus className="h-4 w-4"/>
                                Create Invoice
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    <div className="flex flex-col justify-center h-full gap max-w-5xl mx-auto my-4">
                                        <div className="flex justify-between">
                                            <h1 className="text-3xl font-bold mb-8">
                                                Create a new invoice
                                            </h1>
                                        </div>

                                        <form className="grid gap-4 max-w-xs">
                                            <div>
                                                <Label htmlFor="name" className="block font-semibold text-sm mb-2">Client Name</Label>
                                                <Input id="name" name="name" type="text"/>
                                            </div>
                                            <div>
                                                <Label htmlFor="email" className="block font-semibold text-sm mb-2">Client Email</Label>
                                                <Input id="email" name="email" type="email"/>
                                            </div>
                                            <div>
                                                <Label htmlFor="amount" className="block font-semibold text-sm mb-2">Amount</Label>
                                                <Input id="amount" name="amount" type="text"/>
                                            </div>
                                            <div>
                                                <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
                                                <Textarea id="description" name="description"></Textarea>
                                            </div>
                                        </form>

                                    </div>
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Create</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </p>
            </div>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-4">
                            Date
                        </TableHead>
                        <TableHead className="p-4">
                            Client
                        </TableHead>
                        <TableHead className="p-4">
                            Email
                        </TableHead>
                        <TableHead className="text-center p-4">
                            Status
                        </TableHead>
                        <TableHead className="text-right p-4">
                            Amount
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-left p-4">
                            <span className="font-semibold">
                                11/31/2024
                            </span>
                        </TableCell>
                        <TableCell className="text-left p-4">
                            <span className="font-semibold">
                                Samuel J. Washington
                            </span>
                        </TableCell>
                        <TableCell className="text-left p-4">
                            <span>
                                Samuel98@gmail.com
                            </span>
                        </TableCell>
                        <TableCell className="text-center p-4">
                            <Badge>
                                Paid
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right p-4">
                            <span className="font-semibold">
                                R250.00
                            </span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default Dashboard