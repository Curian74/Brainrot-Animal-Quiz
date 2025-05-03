import api from '../types/api'

import { CreateQuizRequest } from "@/types/Quiz";

const createQuiz = async (quizData: CreateQuizRequest) => {
    const response = await api.post('Quiz/Create',
        quizData
    )

    return response.data;
}

const getAllPagedQuiz = async (pageSize: number, pageIndex: number) => {
    const response = await api.get(`Quiz/GetPaged?PageSize=${pageSize}&PageIndex=${pageIndex}`)

    return response.data;
}

const QuizService = {
    createQuiz,
    getAllPagedQuiz
}

export default QuizService;