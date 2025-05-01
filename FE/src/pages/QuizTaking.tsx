import DefaultLayout from './DefaultLayout'

const QuizTaking = () => {

    const items = [
        { id: 1, name: 'Object and Links' },
        { id: 2, name: 'Object and Links' },
        { id: 3, name: 'Object and Links' },
        { id: 4, name: 'Object and Links' },
    ];

    return (
        <div>
            <DefaultLayout>
                <p className='text-lg text-[#586380]'>Question 1</p>

                {/* Image holder */}
                <div className='flex justify-center py-5'>
                    <img
                        className='max-h-[130px] object-contain'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRk3mQDXC7DYDRwEoYnqpgSd2MuClBJnpZwltrmcMIr2BNnyB776W9wSzyjXLhw9Kl9k&usqp=CAU'
                        alt='quiz'
                    />
                </div>

                <div className='my-7'>
                    <p className='text-lg text-[#586380]'>Choose the correct answer(s):</p>
                </div>

                {/* Answers */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4'>
                    {items.map((x, i) => (
                        <div
                            key={x.id}
                            className={`rounded-lg bg-white border cursor-pointer border-gray-300 w-96 py-4
                             ${++i % 2 === 0 ? 'ml-10' : 'ml-0'} hover:border-[#939bb4]`}>
                            <div className='flex items-center mx-5 space-x-2'>
                                <span
                                    className='rounded-full text-sm font-medium bg-[#edeff4] px-3 py-1'>
                                    {i}
                                </span>
                                <span className='ml-5 text-gray-500'>{x.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className='flex justify-between mt-8 gap-4'>
                    {/* Previous */}
                    <button
                        className='flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:shadow-md hover:ring-2 hover:ring-gray-300 transition duration-200'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        <span className='ml-2 font-medium'>Previous</span>
                    </button>

                    {/* Next */}
                    <button
                        className='flex items-center justify-center w-1/2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:ring-2 hover:ring-gray-300 transition duration-200'>
                        <span className='mr-2 font-medium'>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                        </svg>
                    </button>
                </div>

            </DefaultLayout>
        </div>
    )
}

export default QuizTaking
