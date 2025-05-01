import { Answer } from "./Answer";

export interface Animal{
    id: number;
    title: string;
    imageUrl: string;
    audioSource: string;
    answers: Answer[];
}