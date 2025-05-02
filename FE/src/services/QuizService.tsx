import api from '../types/api'

import { CreateQuizRequest } from "@/types/Quiz";

const createQuiz = async (quizData: CreateQuizRequest) => {
    const response = await api.post('Quiz/Create',
        quizData
    )

    return response.data;
}

const QuizService = {
    createQuiz,
}

export default QuizService;