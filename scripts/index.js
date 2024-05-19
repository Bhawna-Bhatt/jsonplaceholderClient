
window.onload = function () {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = submitBtnClicked;

}

function submitBtnClicked() {

    console.log("going in function")
    let id = document.getElementById("userid").value;
    
    let url = "https://jsonplaceholder.typicode.com/todos/" + id ;
    console.log(url);
    
    fetch(url)
    .then(response => response.text())
    .then(data => {
        let display = document.getElementById("displaytext");
        display.innerText = data;
    })
  
}