function solution(arr, intervals) {
    const section1 = [...arr].slice(intervals[0][0], intervals[0][1] + 1)
    const section2 = [...arr].slice(intervals[1][0], intervals[1][1] + 1)
return section1.concat( section2);
}