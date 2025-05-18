
import { CreateAnimalRequest } from '@/types/Animal';
import api from '../types/api';

const getPagedAnimals = async (pageSize: number, pageIndex: number) => {
    const response = await api.get(`Animal/GetPaged?PageSize=${pageSize}&PageIndex=${pageIndex}`);
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

const createAnimal = async (payload: CreateAnimalRequest) => {
    const response = await api.post('Animal/CreateAnimal', payload);
    return response.data;
}

const AnimalService = {
    getPagedAnimals,
    getAnimalById,
    getAllByQuizId,
    createAnimal
}

export default AnimalService;