
import api from '../types/api';

const GetPagedAnimals = async (pageSize: number, pageIndex: number, quizId: number | string | undefined) => {
    const response = await api.get(`Animal/GetPaged?PageSize=${pageSize}&PageIndex=${pageIndex}&QuizId=${quizId}`);
    return response.data; 
}

const getAllByQuizId = async (quizId: string | number | undefined) => {
    const response = await api.get(`Animal/GetAllByQuizId?quizId=${quizId}`);
    return response.data; 
}

const getAnimalById = async (animalId: string | number | undefined) => {
    const response = await api.get(`Animal/GetById?animalId=${animalId}`);
    return response.data; 
}

const AnimalService = {
    GetPagedAnimals,
    getAnimalById,
    getAllByQuizId,
}

export default AnimalService;