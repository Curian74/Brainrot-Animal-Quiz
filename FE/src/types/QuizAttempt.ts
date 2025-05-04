export interface QuizAttempt {
    id: number;
    createAt: string;
    endAt: string;
    timeTakenInSeconds: number | null;
    isFinished: boolean;
    isPassed: boolean;
    score: number;
    quizId: number;
}

export interface CreateQuizAttemptRequest {
    quizId: number;
}