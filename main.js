let student = document.getElementById("name");
let btn = document.getElementById("btn");
let result = document.getElementById("result");


btn.onclick = function(){
    let students = ["Ahmed", "Ali", "Mona", "Sara"];
    let found = false;
    for(let i = 0 ; i < students.length ; i++){
        if(student.value.trim() === students[i]){
            result.innerHTML = "Found : " + students[i];
            found = true;
            break;
        }
    }

    if(found == false){
        result.innerHTML = "Not Found";
    }
}


