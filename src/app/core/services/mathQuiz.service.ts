import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class MathQuizService {
    private number1 = 0;
    private number2 = 0;
    private operation = '';

    constructor() {
        this.generateNewQuestion();
    }

    public generateNewQuestion(): void {
        this.number1 = Math.floor(Math.random() * 10) + 1;
        this.number2 = Math.floor(Math.random() * 10) + 1;
        const operations = ['+', '-', '*'];
        const randomIndex = Math.floor(Math.random() * operations.length);
        this.operation = operations[randomIndex];
    }

    public getQuestion(): string {
        return `${this.number1} ${this.operation} ${this.number2} = `;
    }

    public getResult(): number {
        return this.calculateResult(this.number1, this.number2, this.operation);
    }

    private calculateResult(number1: number, number2: number, operation: string): number {
        switch (operation) {
            case '+':
                return number1 + number2;
            case '-':
                return number1 - number2;
            case '*':
                return number1 * number2;
            case '/':
                return parseFloat((number1 / number2).toFixed(2));
            default:
                throw new Error('Invalid operation');
        }
    }
}

// TODO: Replace error message