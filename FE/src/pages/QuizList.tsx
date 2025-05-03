import DefaultLayout from "./DefaultLayout"

const QuizList = () => {

    const fakeData = [
        {
            name: "Quiz 1",
            numberOfQuestions: 1,
            durationInMinutes: 1,
        },
        {
            name: "Quiz 2",
            numberOfQuestions: 2,
            durationInMinutes: 2,
        }
    ]

    return (
        <div>
            <DefaultLayout>
                <h1 className="text-center text-3xl font-bold">Quiz List</h1>
                <hr className="my-3"></hr>
                <div>
                    <p className="italic text-gray-500">Select one of the following quiz below to continue:</p>
                </div>

                {/* Quiz List Section */}
                {fakeData.map((q) => (
                    <section className="my-10 flex gap-x-10 items-start">
                        <div>
                            <img
                                className="max-w-30"
                                src="https://preview.redd.it/alphas-what-do-we-think-of-tung-tung-tung-sahur-v0-t20nfsv8guwe1.jpeg?auto=webp&s=bb3dcc2a2b2b41eb2948e95191a31f07b5593785">
                            </img>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <p className="text-lg font-medium">{q.name}</p>
                            <p className="text-sm">Number of questions: {q.numberOfQuestions}</p>
                            <p className="text-sm">Duration: {q.durationInMinutes} minutes</p>

                            <div className="my-3">
                                <button
                                    className="bg-[#0969da] text-md rounded-sm py-1 px-2 hover:bg-blue-800 transition cursor-pointer text-white font-semibold">
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </section>
                ))}

            </DefaultLayout>
        </div>
    )
}

export default QuizList
