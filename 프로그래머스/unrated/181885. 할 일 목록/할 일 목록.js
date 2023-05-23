function solution(todo_list, finished) {
    let notdone = [];
    finished.map((v, i) => {
        v === false && notdone.push(todo_list[i])
    })
return notdone;
}