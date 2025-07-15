let todo = [];

let req = prompt("Hey! please enter your request below");

while(true) {
    if (req == "quit") {
        console.log("Closing app");
        break;
    }

    if(req == "list") {
        console.log("-----------------");
        // for(tasks of todo){
            // console.log(tasks);
        // }
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------");
    }else if (req == "add") {
        let tasks = prompt("please enter the task you want to add below :-");
        todo.push(tasks);
        console.log("Task added");
    }else if (req == "delete"){
        let idx = prompt("please enter the task index belo :- ");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else{
        console.log("wrong request!!");
    }

    req = prompt("please enter your request below :-");
}

// console.log(req);