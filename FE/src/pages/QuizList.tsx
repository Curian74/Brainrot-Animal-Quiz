import QuizService from "@/services/QuizService";
import DefaultLayout from "./DefaultLayout";
import { ChangeEvent, useEffect, useState } from "react";
import { Quiz } from "@/types/Quiz";
import CustomCircularLoading from "@/layouts/CustomCircularLoading";
import { Pagination } from "@mui/material";
import QuizAttemptService from "@/services/QuizAttemptService";
import { useNavigate } from "react-router";

const PAGE_SIZE = 5;

const QuizList = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);

    const navigate = useNavigate();

    const getPagedQuizzes = async () => {
        try {
            setIsLoading(true);
            const data = await QuizService.getAllPagedQuiz(PAGE_SIZE, pageIndex);
            setQuizzes(data.items);
            setTotalCount(data.totalCount)
            setTotalPages(data.totalPages);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const createQuizAttempt = async (data: number) => {
        try {
            const dataResponse = await QuizAttemptService.createQuizAttempt(data);
            const attemptId = dataResponse.id;
            navigate(`/quiz-handle/${attemptId}`)
        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPagedQuizzes();
    }, [pageIndex]);

    if (isLoading) {
        return (
            <CustomCircularLoading />
        );
    }

    function handlePageChange(_: ChangeEvent<unknown>, page: number): void {
        setPageIndex(page);
    }

    return (
        <DefaultLayout>
            <h1 className="text-center text-3xl font-bold">Quiz List</h1>
            <hr className="my-3"></hr>
            <div>
                <p className="italic text-gray-600">
                    Select one of the following quiz below to continue:
                </p>
            </div>

            <section className="border-2 border-gray-300 rounded-lg mt-3">
                {/* Quiz List Section */}
                {quizzes.map((q) => (
                    <div key={q.id} className="my-10 flex gap-x-10 items-start ml-8">
                        <div>
                            <img
                                className="max-w-30"
                                src="https://preview.redd.it/alphas-what-do-we-think-of-tung-tung-tung-sahur-v0-t20nfsv8guwe1.jpeg?auto=webp&s=bb3dcc2a2b2b41eb2948e95191a31f07b5593785"
                                alt="Quiz Thumbnail"
                            />
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <p className="text-lg font-medium">{q.name}</p>
                            <p className="text-sm">Number of questions: {q.numberOfQuestions}</p>
                            <p className="text-sm">Duration: {q.durationInMinutes} minutes</p>

                            <div className="my-3">
                                <button
                                    onClick={() => createQuizAttempt(q.id)}
                                    className="bg-[#0969da] text-md rounded-sm py-1 px-2 hover:bg-blue-800 transition cursor-pointer text-white font-semibold"
                                >
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-between">
                    <div className="ml-4 mt-2">
                        <p className="text-sm">Showing {PAGE_SIZE} items of {totalCount} entries</p>
                    </div>

                    <div className="pb-10">
                        <Pagination
                            count={totalPages}
                            page={pageIndex}
                            onChange={handlePageChange}
                            color="primary" />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default QuizList;
