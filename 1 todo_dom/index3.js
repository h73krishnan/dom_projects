// level 3
// arr to be set stored by object using class and constructor
// form is taken by id and 

document.querySelector("form").addEventListener("submit", todoFunction);

// let arr = JSON.parse(localStorage.getItem("userData")) || [];
let arr = [];
let i = 1;
class storeData{
    constructor(per, pr1, wor, pr2) {
        this.per = per;
        this.pr1 = pr1;
        this.wor = wor;
        this.pr2 = pr2;
    }
}

function todoFunction(){
    // event.preventDefault();
    let form = document.querySelector("form");
    let perProject = form.personal.value;
    let perPriority = form.priority1.value;
    let workProject = form.work.value;
    let workPriority = form.priority2.value;

    let person1 = new storeData(perProject, perPriority, workProject, workPriority);

    arr.push(person1);

    localStorage.setItem("userData", JSON.stringify(arr));

    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.setAttribute("class","col")
    col1.innerHTML = perProject;
    let col2 = document.createElement("td");
    col2.setAttribute("class","col")
    col2.innerHTML = perPriority;
    let col3 = document.createElement("td");
    col3.setAttribute("class","col")
    col3.innerHTML = workProject;
    col3.setAttribute("class","col")
    let col4 = document.createElement("td");
    col4.innerHTML = workPriority;
    col4.setAttribute("class","col")

    row.append(col1, col2, col3, col4);
    document.getElementById("table").append(row);
    console.log(i, "times");
    i++;
    // if (i =  5){
    //     localStorage.setItem("userData", JSON.stringify(arr)) = null;
    //     console.log("done");
    // }

}