import AnimalService from '@/services/AnimalService';
import { Animal } from '@/types/Animal';
import { useEffect, useState } from 'react'

const PAGE_SIZE = 10;

const CreateQuiz = () => {

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [pageIndex, setPageIndex] = useState(1);

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

    useEffect(() => {
        getAllAnimals();
    }, [])

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded space-y-6">
            <h2 className="text-2xl font-bold">New Quiz</h2>

            {/* Quiz Info */}
            <div>
                <label className="block font-medium mb-1">Quiz Name:</label>
                <input
                    className="w-full border rounded p-2"
                    placeholder="Enter quiz name..."
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Duration (minutes):</label>
                <input
                    type="number"
                    className="w-full border rounded p-2"
                    placeholder="Enter quiz duration..."
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Number of questions:</label>
                <input
                    type="number"
                    className="w-full border rounded p-2"
                    placeholder="Number of questions..."
                />
            </div>

            {/* Question Bank Selection */}
            <div>
                <h3 className="text-lg font-semibold mb-2">Add questions from the question bank:</h3>

                <div className="space-y-3 max-h-96 overflow-y-auto border rounded p-3 bg-gray-50">
                    {/* Giả lập danh sách câu hỏi */}
                    {animals.map((q, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-2 border rounded bg-white shadow-sm"
                        >
                            <input type="checkbox" />
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
                </div>
            </div>

            {/* Submit */}
            <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700">
                Create
            </button>
        </div>
    )
}

export default CreateQuiz
