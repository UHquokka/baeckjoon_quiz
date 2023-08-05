function solution(today, termsSt, privacies) {
    const terms = Object.fromEntries(termsSt.map(t =>
        [t.split(" ")[0], Number(t.split(" ")[1])]
    ));
    const todayDate = new Date(today);

    return privacies.reduce((acc, p, i) => {
        const [pDate, type] = p.split(" ");
        const limitDate = new Date(pDate);
        limitDate.setMonth(limitDate.getMonth() + terms[type]);
        return todayDate >= limitDate ? [...acc, i + 1] : acc;
    }, [])
}
