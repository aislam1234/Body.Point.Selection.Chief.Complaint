import { IBodyPoint } from "./left-panel";

export type QuestionAnswer = {
    painLocationLabel: string;
    questionId: string;
    question: string;
    answer: string;
};


export class BodyPointAnswerMapper {
    static generateInitialAnswers(points: IBodyPoint[]): QuestionAnswer[] {
        const result: QuestionAnswer[] = [];

        points.forEach((point) => {
            point.questions.forEach((q) => {
                result.push({
                    questionId: q.id,
                    painLocationLabel: point.label,
                    question: q.question,
                    answer: "",
                });
            });
        });

        return result;
    }
}
