import api from "@/types/api"

const getAnswersByQuestionId = async (animalId: number | string | undefined) => {
    const response = await api.get(`Answer/GetByAnimalId?animalId=${animalId}`);
    return response.data;
}

const AnswerService = {
    getAnswersByQuestionId,
}

export default AnswerService;