import { AnswerAttempt } from "./AnswerAttempt";

export interface QuizAttempt {
    id: number;
    createAt: string;
    endAt: string;
    finishAt: number | null;
    isFinished: boolean;
    isPassed: boolean;
    score: number;
    quizId: number;
    answerAttempts: AnswerAttempt[];
}

export interface CreateQuizAttemptRequest {
    quizId: number;
}

export interface SubmitQuizAttemptRequest {
    id: number | undefined;
}