
var spanToken = document.querySelector("#tokenId")

function ReceberdadosApi() {

    fetch("http://179.98.77.27:8082/ZenErpWs/system/security/tokenOpRequest", {
        method: 'POST',
        headers: { "content-type": "application/json"},
        body: JSON.stringify({
            "email": "admin",
            "password": "admin"
        })
    })
    .then(r => r.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
        
}


ReceberdadosApi()

function CreatedCategory() {

    var codeInput = document.querySelector("#codeId")
    var descriptionInput = document.querySelector("#descriptionId")

    fetch("http://179.98.77.27:8082/ZenErpWs/catalog/category", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0OWU2OTdmYy01NzQ1LTQwMjEtYjVkZC03MjQ5Zjg1MzNhZmEiLCJzdWIiOiJhZG1pbiIsIm5iZiI6MTY3ODM2NTA0NiwiaWF0IjoxNjc4MzY1MDQ2LCJleHAiOjE2Nzg0NTE0NDYsIl9sbmciOiJwdC1CUiIsIl90bXoiOiJBbWVyaWNhL1Nhb19QYXVsbyJ9.yG1pWMwaY_YvLDznsvwPzWOBnscT44fYbX2hS22KLGY`
        },
        body: JSON.stringify({
            "code": `${codeInput.value}`,
            "description": `${descriptionInput.value}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

let form = document.querySelector("#formId")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

let buttonId = document.querySelector("#button")

buttonId.addEventListener("click", () => {
    CreatedCategory()
})