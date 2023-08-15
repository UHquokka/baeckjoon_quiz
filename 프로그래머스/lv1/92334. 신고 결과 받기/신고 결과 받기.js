function solution(id_list, report, k) {
    const reported = new Map(id_list.map(name => [name, 0]));
    let whomReported = {};
    const reportedCount = {};
    [...new Set(report)].forEach(couple => {
        const [신고자, 피신고자] = couple.split(" ");
        whomReported[피신고자] ? whomReported[피신고자].push(신고자) : whomReported[피신고자] = [신고자];
        reportedCount[피신고자] ? reportedCount[피신고자]++ : reportedCount[피신고자] = 1;
    });
    const 정지유저 = Object.keys(reportedCount).filter(key => reportedCount[key] >= k)
    const 최종신고목록 = 정지유저.flatMap(name => whomReported[name]);
    최종신고목록.map(name => reported.set(name, reported.get(name) + 1))
    return [...reported.values()]
}