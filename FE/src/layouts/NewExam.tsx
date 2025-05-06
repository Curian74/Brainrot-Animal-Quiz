import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router"

const validationSchema = yup.object().shape({
    numberOfQuestion: yup.number().required().min(1)
})

const NewExam = () => {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const submitForm = async () => {
        try {

        }

        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div>
                <button
                    onClick={() => navigate("quiz-list")}
                    className="bg-[#0969da] text-2xl rounded-lg py-3 px-13 hover:bg-blue-800 transition cursor-pointer text-white font-semibold">
                    Play now
                </button>
            </div>

            <div className="flex justify-center items-center my-6">
                <p className="text-xl">OR</p>
            </div>

            <Dialog>
                <DialogTrigger>
                    <button
                        className="bg-[#0969da] text-2xl rounded-lg py-3 px-8 hover:bg-blue-800 transition cursor-pointer text-white font-semibold">
                        Practice first
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
                        <form onSubmit={handleSubmit(submitForm)}>
                            <Button
                                {...register("numberOfQuestion")}
                                className="cursor-pointer bg-[#0969da] hover:bg-blue-800 transition text-white "
                                type="button"
                                variant="secondary">
                                Let's go 🚀
                            </Button>
                            {errors.numberOfQuestion?.message && <p className="text-red-600">{errors.numberOfQuestion.message}</p>}
                        </form>
                        <DialogClose>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default NewExam
