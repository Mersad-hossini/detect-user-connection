let wrapper = document.querySelector(".wrapper")
let closeBtn = document.querySelector(".close-icon")
let wifiIcon = document.querySelector(".icon")
let spanElem = document.querySelector("span")
let pElem = document.querySelector("p")

window.addEventListener("load", () => {

    function fetchApi() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => {
                if(res.status < 300 || res.status === 200) {
                    spanElem.innerHTML = "You're online now"
                    pElem.innerHTML = "Hurray! Internet is connected"
                    wrapper.firstElementChild.classList.remove("offline")
                    wifiIcon.innerHTML = "<i class='uil uil-wifi'></i>"
                    closeBtn.addEventListener("click", () => {
                        wrapper.classList.add("hide")
                    })
                    
                    setTimeout(() => {
                        wrapper.classList.add("hide")
                    }, 3000)
                } else {
                    offline()
                }
            })
            .catch(err => {
                console.log("Error:", err);
                offline()
            })
    }

    function offline() {
        wrapper.classList.remove("hide")
        spanElem.innerHTML = "You're offline now"
        pElem.innerHTML = "Opps! Internet is disconnected"
        wrapper.firstElementChild.classList.add("offline")
        wifiIcon.innerHTML = "<i class='uil uil-wifi-slash'></i>"
    }

    setInterval(() => {
        fetchApi()
    }, 1000)
})