
import api from '../types/api'

const createQuizAttempt = async (quizId: number) => {
    const response = await api.post(`QuizAttempt/NewQuizAttempt`, {
        quizId: quizId,
    });
    return response.data;
}

const getQuizAttemptById = async (attemptId: string) => {
    const response = await api.get(`QuizAttempt/AttemptById?attemptId=${attemptId}`)
    return response.data;
}

const QuizAttemptService = {
    createQuizAttempt,
    getQuizAttemptById
}

export default QuizAttemptService;