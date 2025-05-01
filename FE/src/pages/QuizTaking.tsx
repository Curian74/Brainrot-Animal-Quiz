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
                                    {i + 1}
                                </span>
                                <span className='ml-5 text-gray-500'>{x.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </DefaultLayout>
        </div>
    )
}

export default QuizTaking
