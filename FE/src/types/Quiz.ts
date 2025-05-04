export interface Quiz {
    id: number;
    name: string,
    durationInMinutes: number,
    numberOfQuestions: number,
}

export interface CreateQuizRequest {
    name: string,
    durationInMinutes: number,
    numberOfQuestions: number,
    animalsIds: number[];
}