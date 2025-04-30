import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { useState } from "react"

const NewExam = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <button
                        className="bg-[#0969da] text-2xl rounded-lg py-3 px-8 hover:bg-blue-800 transition cursor-pointer text-white font-semibold">
                        Play Now
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-start">New Attempt</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="numQues">
                                Number of questions:
                            </Label>
                            <Input
                                id="numQues"
                                type="number"
                                defaultValue="https://ui.shadcn.com/docs/installation"
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-center">
                        <DialogClose asChild>
                            <Button className="cursor-pointer bg-[#0969da] hover:bg-blue-800 transition text-white " type="button" variant="secondary">
                                Let's go 🚀
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default NewExam
