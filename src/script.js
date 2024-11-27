function myName() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    document.getElementById("nameContainer").innerText = firstName + " " + lastName;
}
// function clear() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     document.getElementById("nameContainer").innerText = " ";
// }

function sum(){
    let valueOne = Number (document.getElementById("num1").value);
    let valueTwo = Number (document.getElementById("num2").value);

    document.getElementById("sumContainer").innerText = valueOne + valueTwo;
 
}

function minus(){
    let valueOne = Number (document.getElementById("num1").value);
    let valueTwo = Number (document.getElementById("num2").value);

    document.getElementById("sumContainer").innerText = valueOne - valueTwo;

}
function multiply(){
    let valueOne = Number (document.getElementById("num1").value);
    let valueTwo = Number (document.getElementById("num2").value);

    document.getElementById("sumContainer").innerText = valueOne * valueTwo;
}
function divide(){
    let valueOne = Number (document.getElementById("num1").value);
    let valueTwo = Number (document.getElementById("num2").value);

    document.getElementById("sumContainer").innerText = valueOne / valueTwo;
}
function del(){
    let valueOne = Number (document.getElementById("num1").value);
    let valueTwo = Number (document.getElementById("num2").value);

    document.getElementById("sumContainer").innerText = " ";
}