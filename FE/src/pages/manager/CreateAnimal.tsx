import React, { useState } from 'react'

interface Answer {
    content: string
    isCorrect: boolean
}

const CreateAnimal: React.FC = () => {
    const [question, setQuestion] = useState('')
    const [answers, setAnswers] = useState<Answer[]>([
        { content: '', isCorrect: false },
        { content: '', isCorrect: false },
        { content: '', isCorrect: false },
        { content: '', isCorrect: false }
    ])

    const handleAnswerChange = (index: number, field: 'content' | 'isCorrect', value: string | boolean) => {
        const newAnswers = [...answers]
        if (field === 'content') {
            newAnswers[index].content = value as string
        } else {
            newAnswers[index].isCorrect = value as boolean
        }
        setAnswers(newAnswers)
    }

    const handleSubmit = () => {
        const payload = {
            questionContent: question,
            answers: answers
        }

        console.log('Submitting:', payload)

        // TODO: Gửi payload lên API backend (POST)
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
            <h2 className="text-xl font-semibold">Thêm câu hỏi mới</h2>

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
                            placeholder={`Đáp án ${String.fromCharCode(65 + index)}`}
                            value={answer.content}
                            onChange={(e) =>
                                handleAnswerChange(index, 'content', e.target.value)
                            }
                        />
                        <label className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                checked={answer.isCorrect}
                                onChange={(e) =>
                                    handleAnswerChange(index, 'isCorrect', e.target.checked)
                                }
                            />
                            <span>Đúng</span>
                        </label>
                    </div>
                ))}
            </div>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
            >
                Lưu câu hỏi
            </button>
        </div>
    )
}

export default CreateAnimal
