export interface AnswerAttempt {
    id: number,
    answerId: number,
    isMarked: boolean,
    quizAttemptId: number;
    animalId: number;
}

export interface UpdateAnswerAttemptRequest {
    id: number | string | undefined,
    answerId: number,
    isMarked: boolean,
    quizAttemptId: number | string | undefined
    animalId: number | undefined;
}