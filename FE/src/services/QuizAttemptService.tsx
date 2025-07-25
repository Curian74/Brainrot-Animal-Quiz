
import { SubmitQuizAttemptRequest } from '@/types/QuizAttempt';
import api from '../types/api'

const createQuizAttempt = async (quizId: number) => {
    const response = await api.post(`QuizAttempt/NewQuizAttempt`, {
        quizId: quizId,
    });
    return response.data;
}

const getQuizAttemptById = async (attemptId: string, quizId: string, isFinished: boolean) => {
    const response = await api.get(`QuizAttempt/AttemptById?attemptId=${attemptId}&quizId=${quizId}&isFinished=${isFinished}`)
    return response.data;
}

const submitQuizAttempt = async (requestData: SubmitQuizAttemptRequest) => {
    const response = await api.put(`QuizAttempt/SubmitQuizAttempt`, requestData)
    return response.data;
}

const QuizAttemptService = {
    createQuizAttempt,
    getQuizAttemptById,
    submitQuizAttempt
}

export default QuizAttemptService;