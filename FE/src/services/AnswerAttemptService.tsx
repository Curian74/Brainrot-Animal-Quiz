
import { UpdateAnswerAttemptRequest } from '@/types/AnswerAttempt';
import api from '../types/api'

const getAllByQuizAttemptId = async (quizAttemptId: number | string | undefined) => {
    const response = await api.get(`AnswerAttempt/GetByAttemptId?id=${quizAttemptId}`);
    return response.data;
}

const updateAnswerAttempt = async (request: UpdateAnswerAttemptRequest) => {
    const response = await api.put(`AnswerAttempt/UpdateAnswerAttempt`, request);
    return response.data;
}

const AnswerAttemptService = {
    getAllByQuizAttemptId,
    updateAnswerAttempt,
}

export default AnswerAttemptService;