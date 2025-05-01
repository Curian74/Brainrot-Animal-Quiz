
import api from '../types/api';

const GetPagedAnimals = async (pageSize: number, pageIndex: number) => {
    const response = await api.get(`Animal?PageSize=${pageSize}&PageIndex=${pageIndex}`);
    return response.data; 
}

const AnimalService = {
    GetPagedAnimals,
}

export default AnimalService;