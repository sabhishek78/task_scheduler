function scheduler(tasks,coolingTime){
    let tasksMap = new Map();
    for(let i=0;i<tasks.length;i++){
        let task=tasks[i];
        if(tasksMap.get(task)===undefined){
            tasksMap.set(task,1);
        }
        else{
            let value=tasksMap.get(task);
            value=value+1;
            tasksMap.set(task,value);
        }
    }
    // console.log(tasksMap);
    let keys=Array.from(tasksMap.keys());

    keys.sort(function(a,b){return tasksMap.get(b)-tasksMap.get(a)});
    // console.log(keys);
    let tasksList=[];
    let keyPushed=false;
    let tasksListIndex=0;
    while(tasksMap.size!==0){
        keyPushed=false;
        for(let i=0;i<keys.length;i++){
            if(!keyPresentInLastnPositions(tasksListIndex,tasksList,keys[i],coolingTime)){
                // console.log("key="+keys[i]+"not present in last"+coolingTime+"positions");
                tasksList.push(keys[i]);
                tasksListIndex++;
                keyPushed=true;
                // console.log("tasksList="+tasksList);
                let value=tasksMap.get(keys[i]);
                value=value-1;
                tasksMap.set(keys[i],value);
                if(tasksMap.get(keys[i])===0){
                    tasksMap.delete(keys[i]);
                    i=i-1;
                }
                // console.log("updated tasksMap");
                // console.log(tasksMap);
                keys=Array.from(tasksMap.keys());
                // console.log("updated keys");
                // console.log(keys);
            }


        }
        if(!keyPushed){
            // console.log("idle");
            tasksList.push('idle');
            tasksListIndex++;

        }

        // console.log("finished one set of keys");
    }
    // console.log("tasksList");
     console.log(tasksList);
    return tasksList.length;

}
function keyPresentInLastnPositions(tasksListIndex,tasksList,key,coolingTime){
    for(let i=1;i<=coolingTime;i++){
        if(tasksList[tasksListIndex-i]!==undefined){
            if(tasksList[tasksListIndex-i]===key){
                return true;
            }
        }

    }
    return false;
}
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