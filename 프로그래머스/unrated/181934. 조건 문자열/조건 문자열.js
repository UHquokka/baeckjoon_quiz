function solution(ineq, eq, n, m) {
 return   ineq === ">" ? Number(eq==="="? n>=m : n>m ) : Number(eq==="="? n<=m : n<m ) 
}
