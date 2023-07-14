function solution(n, lost, reserve) {
    const students = Array.from({ length: n }, (v, i) => lost.includes(i + 1) ? 0 : 1).map((v, i) => reserve.includes(i + 1) ? v += 1 : v)
    const upperNumber = (students) => {
        for (let i = 0; i < students.length; i++) {
            if (students[i] === 0) {
                if (students[i + 1] > 1) {
                    students[i] += 1;
                    students[i + 1] -= 1;
                }
            }
        }
        for (let i = 1; i < students.length; i++) {
            if (students[i] === 0) {
                if (students[i - 1] > 1) {
                    students[i] += 1;
                    students[i - 1] -= 1;
                }
            }
        }
        return students.filter(v => v !== 0).length
    }
    const lowerNumber = (students) => {
        for (let i = 1; i < students.length; i++) {
            if (students[i] === 0) {
                if (students[i - 1] > 1) {
                    students[i] += 1;
                    students[i - 1] -= 1;
                }
            }
        }
        for (let i = 0; i < students.length; i++) {
            if (students[i] === 0) {
                if (students[i + 1] > 1) {
                    students[i] += 1;
                    students[i + 1] -= 1;
                }
            }
        }
        return students.filter(v => v !== 0).length
    }
   return Math.max(upperNumber([...students]), lowerNumber([...students]))}