import React, { useState } from 'react'
import Test from '../Test'

interface Answer {
    content: string
    isCorrect: boolean
}

const CreateAnimal: React.FC = () => {
    const [question, setQuestion] = useState('')
    const [answers, setAnswers] = useState<Answer[]>([
        { content: '', isCorrect: false },
        // { content: '', isCorrect: false },
    ])

    const handleSubmit = () => {
        const payload = {
            questionContent: question,
            answers: answers
        }
    }

    const newAnswer = () => {
        const newAns = [...answers, {
            content: '',
            isCorrect: false
        }];

        setAnswers(newAns);
    }

    const handleAnswerCorrectStatusChange = (index: number) => {
        const newAns = answers.map((a, i) => (
            i === index ? {...a, isCorrect: !a.isCorrect} : a
        ))

        setAnswers(newAns);
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
            <h2 className="text-xl font-semibold">New Animal</h2>

            <div>
                {/* <label className="block font-medium mb-1">Nội dung câu hỏi:</label>
                <textarea
                    className="w-full border p-2 rounded"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                /> */}

            </div>

            <div className="space-y-3">
                {answers.map((answer, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input
                            type="text"
                            className="flex-1 border p-2 rounded"
                            placeholder={`Đáp án ${index}`}
                            value={answer.content}
                        />
                        <label className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                onChange={() => handleAnswerCorrectStatusChange(index)}
                                checked={answer.isCorrect}
                            />
                            <span>Is Correct</span>
                        </label>
                    </div>
                ))}

                <button
                    className="bg-white border shadow-xs transition border-gray-300 rounded-md p-2 text-black text-sm font-semibold
                    hover:bg-[#f5f5f5] cursor-pointer"
                    onClick={newAnswer}
                >
                    New Answer
                </button>
            </div>

            <button
                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
            >
                Create
            </button>
        </div>
    )
}

export default CreateAnimal
