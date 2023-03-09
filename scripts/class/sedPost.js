class SendPost {

    

    sendPostApi() {

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
}