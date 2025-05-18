import React, { useState } from 'react'
import AnimalService from '@/services/AnimalService'
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateAnimalRequest } from '@/types/Animal';

// https://i.pinimg.com/736x/c5/1b/cb/c51bcb66f1240d4a0bbe46fcd3301d8a.jpg

const schema = yup.object({
    answers: yup.array()
        .of(
            yup.object().shape({
                title: yup.string().required("Answer title is required"),
                isCorrect: yup.boolean().required(),
            })
        )
        .min(1, "At least one answer is required")
        .test(
            "at-least-one-correct",
            "At least one answer must be marked as correct",
            (answers) => answers?.some((a) => a.isCorrect)
        )
        .required("Answers are required")
});

const CreateAnimal: React.FC = () => {
    const [question, setQuestion] = useState('')

    const { register, control, handleSubmit, formState: { errors } } = useForm<CreateAnimalRequest>({
        defaultValues: {
            answers: [{ title: "", isCorrect: false }]
        },
        resolver: yupResolver(schema),
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "answers"
    });

    const submitRequest = async (data: CreateAnimalRequest) => {
        try {
            await AnimalService.createAnimal(data);
            alert('Success');
        }

        catch (err) {
            console.log(err);
            alert('Failed');
        }
    }

    return (
        <div className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
            <h2 className="text-xl font-semibold">New Animal</h2>

            {/* <div>
                <label className="block font-medium mb-1">Nội dung câu hỏi:</label>
                <textarea
                    className="w-full border p-2 rounded"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                />
            </div> */}

            <form onSubmit={handleSubmit(submitRequest)} className="space-y-3">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center space-x-2">
                        <input
                            {...register(`answers.${index}.title`)}
                            type="text"
                            className="flex-1 border p-2 rounded"
                            placeholder={`Answer ${index + 1}`}
                        />
                        {errors.answers?.[index]?.title && (
                            <p className="text-red-500 text-sm">
                                {errors.answers[index].title?.message}
                            </p>
                        )}
                        <label className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                {...register(`answers.${index}.isCorrect`)}
                            />
                            <span>Is Correct</span>
                        </label>
                        <button type="button" onClick={() => remove(index)} className="text-red-500 text-sm">X</button>
                    </div>
                ))}

                <button
                    type="button"
                    className="bg-white border shadow-xs transition border-gray-300 rounded-md p-2 text-black text-sm font-semibold hover:bg-[#f5f5f5] cursor-pointer"
                    onClick={() => append({ title: "", isCorrect: false })}
                >
                    New Answer
                </button>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Create
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateAnimal
