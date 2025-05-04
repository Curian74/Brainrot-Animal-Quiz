import AnimalService from '@/services/AnimalService';
import QuizService from '@/services/QuizService';
import { Animal } from '@/types/Animal';
import { CreateQuizRequest } from '@/types/Quiz';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const PAGE_SIZE = 10;

const validationSchema = yup.object().shape({
    name: yup.string().required('Quiz name is required.'),
    durationInMinutes: yup.number()
        .typeError('Please enter a valid number for duration.')
        .min(0.1, 'Duration must be greater than 0.')
        .required('Quiz duration is required.'),
    numberOfQuestions: yup.number()
        .typeError('Please enter a valid number of questions.')
        .min(1, 'You must have at least 1 question.')
        .required('Please provide the number of questions.'),
    animalsIds: yup.array()
        .min(1, "You must choose at least 1 question from the question bank.")
        .required("You must choose at least 1 question from the question bank."),
})

const CreateQuiz = () => {

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [pageIndex, setPageIndex] = useState(1);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            animalsIds: [],
        }
    });

    const getAllAnimals = async () => {
        try {
            const data = await AnimalService.GetPagedAnimals(PAGE_SIZE, pageIndex);
            console.log(data);
            setAnimals(data.items);
        }

        catch (err) {
            console.log(err);
        }
    }

    const createQuiz = async (formData: CreateQuizRequest) => {
        const isConfirmed = confirm('Are you sure you want to create the quiz?');

        if (!isConfirmed) return;

        try {
            console.log(formData);
            await QuizService.createQuiz(formData);
            alert('Quiz created successfully.');
            reset();
        }

        catch (err: any) {
            const errorMessage = err.response.data as string;
            alert(errorMessage);
        }
    }

    useEffect(() => {
        getAllAnimals();
    }, [])

    return (
        <form
            onSubmit={handleSubmit(createQuiz)}
            className="p-6 max-w-4xl mx-auto bg-white shadow rounded space-y-6">
            <h2 className="text-3xl font-bold">New Quiz</h2>

            {/* Quiz Info */}
            <div>
                <label className="block font-medium mb-1">Quiz Name:</label>
                <input
                    {...register("name")}
                    className="w-full border rounded p-2"
                    placeholder="Enter quiz name..."
                />
                {errors.name?.message && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
                <label className="block font-medium mb-1">Duration (minutes):</label>
                <input
                    type="number"
                    {...register("durationInMinutes")}
                    className="w-full border rounded p-2"
                    placeholder="Enter quiz duration..."
                />
                {errors.durationInMinutes?.message && <p className='text-red-500'>{errors.durationInMinutes.message}</p>}
            </div>

            <div>
                <label className="block font-medium mb-1">Number of questions:</label>
                <input
                    type="number"
                    {...register("numberOfQuestions")}
                    className="w-full border rounded p-2"
                    placeholder="Number of questions..."
                />
                {errors.numberOfQuestions?.message && <p className='text-red-500'>{errors.numberOfQuestions.message}</p>}
            </div>

            {errors.animalsIds?.message && <p className='text-red-500 mb-0'>{errors.animalsIds.message}</p>}

            {/* Question Bank Selection */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Add questions from the question bank:</h3>

                <div className="space-y-3 max-h-96 overflow-y-auto border rounded p-3 bg-gray-50">
                    {/* Search input */}
                    <div className="flex items-center">
                        <div className="w-1/2 relative">
                            {/* Search icon */}
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Search questions..."
                                className="border rounded px-10 py-1.5 w-full bg-white"
                            />
                        </div>
                    </div>

                    {animals.map((q, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-2 border rounded bg-white shadow-sm"
                        >
                            <input
                                type="checkbox"
                                value={q.id}
                                {...register("animalsIds")}
                            />
                            <div className='w-full'>
                                <p className="font-medium">Question Id: {q.id}</p>
                                <div>
                                    <img
                                        className='w-56 h-36'
                                        src={`${q.imageUrl}`}></img>
                                </div>

                                <div className='mt-3'>
                                    {q.answers.map((a) => (
                                        <p>{++index}. {a.title} {a.isCorrect && '✅'}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Pagination (UI only) */}
                    <div className="flex justify-end mt-3">
                        <div className="flex gap-2 items-center text-sm">
                            <button className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Prev</button>
                            <span className="px-2">Page 1 of 5</span>
                            <button className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit */}
            <button
                className="bg-blue-600 cursor-pointer text-white font-medium px-6 py-2 rounded hover:bg-blue-700">
                Create
            </button>
        </form>
    )
}

export default CreateQuiz
