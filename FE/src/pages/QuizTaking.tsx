import { useEffect, useState } from 'react';
import DefaultLayout from './DefaultLayout'
import QuizAttemptService from '@/services/QuizAttemptService';
import { QuizAttempt } from '@/types/QuizAttempt';
import { useParams } from 'react-router';
import { AnswerAttempt, UpdateAnswerAttemptRequest } from '@/types/AnswerAttempt';
import { Answer } from '@/types/Answer';
import AnswerService from '@/services/AnswerService';
import AnimalService from '@/services/AnimalService';
import { Animal } from '@/types/Animal';
import AnswerAttemptService from '@/services/AnswerAttemptService';
import QuizTakingModal from '@/layouts/QuizTakingModal';
import messageConstant from '../constants/messageConstant.json'

const QuizTaking = () => {

    const { attemptId, quizId } = useParams();

    // States
    const [quizAttempt, setQuizAttempt] = useState<QuizAttempt>();
    const [currentQuestion, setCurrentQuestion] = useState<Animal>();
    const [answerAttempts, setAnswerAttempts] = useState<AnswerAttempt[]>([]);
    const [questionAnswers, setQuestionAnswers] = useState<Answer[]>([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [modalDescription, setModalDescription] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [answeredQuestionMsg, setAnsweredQuestionMsg] = useState('');

    useEffect(() => {
        if (!quizAttempt?.endAt) return;

        const endTime = new Date(quizAttempt.endAt).getTime();

        const interval = setInterval(() => {
            const now = Date.now();
            const diff = Math.max(0, endTime - now); // prevent negative values

            setTimeLeft(diff);

            if (diff <= 0) {
                clearInterval(interval);
                // Optionally auto-submit the quiz here
            }
        }, 1000); // update every second

        return () => clearInterval(interval); // cleanup
    }, [quizAttempt?.endAt]);

    const formatTime = (milliseconds: number) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const getQuizAttemptById = async (attemptId: string) => {
            try {
                const data = await QuizAttemptService.getQuizAttemptById(attemptId);
                setQuizAttempt(data);
                setAnswerAttempts(data.answerAttempts);
            }

            catch (err) {
                console.log(err);
            }
        }
        getQuizAttemptById(attemptId!);
    }, [attemptId])

    useEffect(() => {
        const fetchAllQuestions = async () => {
            try {
                const data = await AnimalService.getAllByQuizId(quizId);
                console.log(data);
                setAnimals(data);
            }

            catch (err) {
                console.log(err);
            }
        }

        fetchAllQuestions();
    }, [quizId]);

    useEffect(() => {
        if (!animals.length) return;

        const current = animals[pageIndex - 1];
        setCurrentQuestion(current);

        const fetchAnswers = async () => {
            try {
                const answers = await AnswerService.getAnswersByQuestionId(current.id);
                setQuestionAnswers(answers);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAnswers();
    }, [pageIndex, animals]);

    const updateAnswerAttempt = async (answerId: number) => {
        try {
            const attempt = answerAttempts.find(x => x.answerId === answerId);

            const dataObject: UpdateAnswerAttemptRequest = {
                id: attempt?.id,
                isMarked: false,
                quizAttemptId: attemptId,
                answerId: answerId,
                animalId: currentQuestion?.id,
            }

            await AnswerAttemptService.updateAnswerAttempt(dataObject);
            const updated = await QuizAttemptService.getQuizAttemptById(attemptId!);
            setAnswerAttempts(updated.answerAttempts);
        }

        catch (err) {
            console.log(err);
        }
    }

    const updateModalMessage = () => {
        const animalIds = new Set(answerAttempts.map((a) => a.animalId));
        const answeredCount = animalIds.size;

        if (answeredCount === 0) {
            setAnsweredQuestionMsg('');
            setModalTitle('Exit Exam?');
            setModalDescription(messageConstant.MSG_01)
        }

        else if (answeredCount < animals.length) {
            setModalTitle('Score Exam?');
            setAnsweredQuestionMsg(`${answeredCount} of ${animals.length} Questions Answered`);
            setModalDescription(messageConstant.MSG_02)
        }

        else {
            setModalTitle('Score Exam?');
            setAnsweredQuestionMsg('');
            setModalDescription(messageConstant.MSG_02)
        }
    }

    const toggleModal = () => {
        updateModalMessage();
        setIsModalOpen(prev => !prev);
    }

    return (
        <div>
            <DefaultLayout>
                {/* Question # and time counter */}
                <div className='flex justify-between items-center'>
                    <p className='text-lg text-[#586380]'>Question {pageIndex}</p>

                    <div className='text-lg font-semibold text-blue-600'>
                        Time left: {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Image holder */}
                <div className='flex justify-center py-5'>
                    <img
                        className='max-h-[130px] object-contain'
                        src={currentQuestion?.imageUrl}
                        alt='quiz'
                    />
                </div>

                <div className='my-7'>
                    <p className='text-lg text-[#586380]'>Choose the correct answer(s):</p>
                </div>

                {/* Answers */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4'>
                    {questionAnswers.map((x, i) => {
                        const isSelected = answerAttempts.some(a => a.answerId === x.id);
                        return (
                            <div
                                key={x.id}
                                onClick={() => updateAnswerAttempt(x.id)}
                                className={`rounded-lg border w-96 py-4 transition-all duration-150 cursor-pointer
                                    ${++i % 2 === 0 ? 'ml-10' : 'ml-0'}
                                    ${isSelected
                                        ? 'bg-blue-100 border-blue-500 shadow-sm'
                                        : 'bg-white border-gray-300 hover:border-[#939bb4]'}
                                    `}
                            >
                                <div className='flex items-center mx-5 space-x-2'>
                                    <span
                                        className='rounded-full text-sm font-medium bg-[#edeff4] px-3 py-1'>
                                        {i}
                                    </span>
                                    <span className={`ml-5 ${isSelected ? 'text-blue-800 font-semibold' : 'text-gray-500'}`}>
                                        {x.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Navigation Buttons */}
                <div className='flex justify-between mt-8 gap-4'>
                    {/* Previous */}
                    <button
                        disabled={pageIndex === 1}
                        onClick={() => setPageIndex(pageIndex - 1)}
                        className={`flex items-center justify-center w-1/2 border py-3 rounded-lg transition duration-200
                        ${pageIndex === 1
                                ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                : 'bg-white text-gray-700 border-gray-300 hover:shadow-md hover:ring-2 hover:ring-gray-300 cursor-pointer'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        <span className='ml-2 font-medium'>Previous</span>
                    </button>

                    {/* Next */}
                    {pageIndex < animals.length ? (
                        <button
                            disabled={pageIndex >= animals.length}
                            onClick={() => setPageIndex(pageIndex + 1)}
                            className={`flex items-center justify-center w-1/2 border py-3 rounded-lg transition duration-200
                                    ${pageIndex >= animals.length
                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                    : 'bg-white text-gray-700 border-gray-300 hover:shadow-md hover:ring-2 hover:ring-gray-300 cursor-pointer'}`}
                        >
                            <span className='mr-2 font-medium'>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5} stroke="currentColor"
                                className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                            </svg>
                        </button>
                    ) :
                        <div className="w-1/2">
                            <button
                                className="w-full flex items-center cursor-pointer justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-lg shadow-md transition duration-200"
                                onClick={toggleModal}
                            >
                                <span className="mr-2">Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </div>

                    }
                </div>

                <p className="text-center mt-4 text-sm text-gray-500">
                    Question {pageIndex} of {animals.length}
                </p>

                {/* Modal */}
                {isModalOpen && (
                    <div className="flex justify-center mt-12">
                        <QuizTakingModal
                            isOpen={isModalOpen}
                            answeredQuestionMsg={answeredQuestionMsg}
                            description={modalDescription}
                            title={modalTitle}
                            toggleModalState={toggleModal}
                        />
                    </div>
                )}

            </DefaultLayout>
        </div>
    )
}

export default QuizTaking
