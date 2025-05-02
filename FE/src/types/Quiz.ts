export interface Quiz {

}

export interface CreateQuizRequest {
    name: string,
    durationInMinutes: number,
    numberOfQuestions: number,
    animalsIds: number[];
}