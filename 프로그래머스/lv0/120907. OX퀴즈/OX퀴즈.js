function solution(quiz) {
    let correct = [];
    for (let i = 0; i < quiz.length; i++) {
        let quizArr = quiz[i].split(" ");
        let answer = quizArr[1] === '+' ? Number(quizArr[0]) + Number(quizArr[2]) : Number(quizArr[0]) - Number(quizArr[2]);
        answer == quizArr[4] ? correct.push("O") : correct.push("X")
    }
    return correct;
}