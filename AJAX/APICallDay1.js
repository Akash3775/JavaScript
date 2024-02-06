// function getUserPageWise(pageNumber){
//     return fetch('https://reqres.in/api/users?page=${pageNumber}')
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         console.log(response.data)
//         return response.data
//     })
// }
// // getUserPageWise(2)

// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             console.log(response)
//             return response.data
//         })
// }
// getSingleUser(2)

// function renderHtml(user) {
//     document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
//     document.write(`<p>${user.email}${user.id}</p>`)
//     document.write(`<img src=${user.avatar}>`)
// }


// //using then

// getUserPageWise(1)
//     .then(function (users) {
//         let id = users[0].id
//         return getSingleUser(id)
//     })
//     .then(function (user) {
//         //console.log(user)
//         renderHtml(user)
//     })

// async function getinfo(pageNumber){
//        let users = await getUserPageWise(pageNumber)
//        let id = users[0].id
//        let user = await getSingleUser(id)
//        renderHtml(user)
// }
// getinfo(2)
//------------------practice makes man perfect-----------------------

function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        return response.data
        })
    
}
getUserPageWise(2)
function getSingleUser(id){
    return fetch(`https://reqres.in/api/users?page=${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response
    })
}
getSingleUser(2)

function renderHtml(user){
    document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
    document.write(`<p>${user.email}${user.id}</p>`)
    document.write(`<img src=${user.avatar}>`)

}
getUserPageWise(1)
    .then(function(users){
    let id=users[0].id
    return getSingleUser(id)
})
.then(function(user){
    renderHtml(user)
})

// async function getinfo(pageNumber){
//        let users = await getUserPageWise(pageNumber)
//        let id = users[0].id
//        let user = await getSingleUser(id)
//        renderHtml(user)
// }
// getinfo(2)
