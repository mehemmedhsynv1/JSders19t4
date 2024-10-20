let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let thisForm = new FormData(e.target);
    console.log(thisForm.get("name"));
    console.log(thisForm.get("surname"));
    console.log(thisForm.get("age"));
})