
import api from '../types/api';

const GetPagedAnimals = async (pageSize: number, pageIndex: number) => {
    const response = await api.get(`Animal/GetPaged?PageSize=${pageSize}&PageIndex=${pageIndex}`);
    return response.data; 
}

// Animal/GetById?animalId=1

const getAnimalById = async (animalId: string | number | undefined) => {
    const response = await api.get(`Animal/GetById?animalId=${animalId}`);
    return response.data; 
}

const AnimalService = {
    GetPagedAnimals,
    getAnimalById,
}

export default AnimalService;