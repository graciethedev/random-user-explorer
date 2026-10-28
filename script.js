// trying out async and await

const usersContainer = document.getElementById("users")
const message = document.getElementById("message")

async function getUsers() {
    try{
        const response = await fetch("https://randomuser.me/api/?results=20")

        const data = await response.json()

        console,log(data.results)
    } catch(error) {
        console.log("something is wrong")
    }

}

getUsers()