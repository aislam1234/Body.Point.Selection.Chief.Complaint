import { IBodyPoint } from "./left-panel";

type QuestionAnswer = {
    painLocationLabel: string;
    question: string;
    answer: string;
};


export class BodyPointAnswerMapper {
    static generateInitialAnswers(points: IBodyPoint[]): QuestionAnswer[] {
        const result: QuestionAnswer[] = [];

        points.forEach((point) => {
            point.questions.forEach((q) => {
                result.push({
                    painLocationLabel: point.label,
                    question: q.question,
                    answer: "",
                });
            });
        });

        return result;
    }
}
