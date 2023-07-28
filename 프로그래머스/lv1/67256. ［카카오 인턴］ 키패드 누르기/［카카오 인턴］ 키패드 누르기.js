function solution(numbers, hand) {
    const click = [];
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#']
    ]
    const findKey = (n) => {
        let result = [];
        keypad.forEach((line, i) => {
            if (line.findIndex(v => v === n) !== -1) {
                result = [i, line.findIndex(v => v === n)];
                return;
            }
        })
        return result;
    }

    let [leftNow, rightNow] = [[3, 0], [3, 2]];
    numbers.forEach(n => {
        const left = [1, 4, 7];
        const right = [3, 6, 9];
        const leftFn = () => {
            click.push("L");
            leftNow = nPosition;
        }
        const rightFn = () => {
            click.push("R");
            rightNow = nPosition;
        }
        let nPosition = findKey(n);

        if (left.includes(n)) {
            leftFn();
        }
        else if (right.includes(n)) {
            rightFn();
        }
        else {
            const leftD = Math.abs(nPosition[0] - leftNow[0]) + Math.abs(nPosition[1] - leftNow[1]);
            const rightD = Math.abs(nPosition[0] - rightNow[0]) + Math.abs(nPosition[1] - rightNow[1]);
            if (leftD === rightD) {
                hand === "left" ? leftFn() : rightFn();
            } else {
                leftD < rightD ? leftFn() : rightFn();
            }
        }
    });
    return click.join("")
}
