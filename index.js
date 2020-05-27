function scheduler(tasks,coolingTime){
    let tasksMap = new Map();
    tasks.forEach((e)=>tasksMap.set(e,tasksMap.get(e)===undefined?1:tasksMap.get(e)+1))
    let entries=Array.from(tasksMap.entries());
    entries.sort(function(a,b){return b[1]-a[1]});
    let count=0;
    while(entries.length!==0){
        if(!entries.some((e)=>e[1]!==1)){
            count+=entries.length;
            break;
        }
        else{
            count+=(coolingTime+1>=entries.length?coolingTime+1:entries.length);
        }
        entries.forEach((e)=>{e[1]=e[1]-1});
        entries=(entries).filter((e)=>e[1]>0);
    }
    return count;
}


console.log(scheduler(["A","A","B","B","C","D"],2)===6);
console.log(scheduler(["A","A","A","B","B"],4)===11);
console.log(scheduler(["A","A","A","B","B","B"],3)===10);
console.log(scheduler(["A","B","A","B","A","B"],3)===10);
console.log(scheduler(["A","A","A","B","B","B"],2)===8);
console.log(scheduler(["A","A","A","B","B","B"],3)===10);
console.log(scheduler(["A"],7)===1);
console.log(scheduler(["A","B"],7)===2);
console.log(scheduler(["A","B","A"],3)===5);
console.log(scheduler(["B","A","A"],3)===5);
console.log(scheduler(["B","A","A","B"],1)===4);
console.log(scheduler(["B","A","A"],3)===5);
console.log(scheduler(["B","A","A"],1)===3);
console.log(scheduler(["A","A"],0)===2);
console.log(scheduler(["B","A","A","A"],1)===5);
console.log(scheduler(["A","B","C","D"],1)===4);
console.log(scheduler(["A","A","A"],0)===3);
console.log(scheduler(["A","A","A"],5)===13);
console.log(scheduler(["A","A","B","B","A","A"],4)===16);






// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Examples
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

// Input: tasks = ["A","A","A","B","B","B"], n = 3
// Output: 10
// Explanation: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

// Input: ["A","A","A","B","B","B","C","D","E","F","G","H","I","J","K"], n = 7
// Output: 18
// Constraints:
// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].


