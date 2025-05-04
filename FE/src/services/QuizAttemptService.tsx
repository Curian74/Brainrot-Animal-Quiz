
import api from '../types/api'

const createQuizAttempt = async (quizId: number) => {
    const response = await api.post(`QuizAttempt/NewQuizAttempt`, {
        quizId: quizId,
    });
    return response.data;
}

const QuizAttemptService = {
    createQuizAttempt,
}

export default QuizAttemptService;