const getApi = 'http://localhost:3000/courses'

function start(){
    getCourses(handleRender)
    handleCreate()

}
start()

function getCourses(callback){
    fetch(getApi)
    .then(response => response.json())
    .then(callback)
}

var courserList = ''
function handleRender(courses){
    var getUL = document.querySelector('.courses-list')
    for(var i=0; i < courses.length; i++){
        courserList += `
        <li class = "li-${courses[i].id}">
            <h3 class="h3-${courses[i].id}">${courses[i].name}</h3>
            <p class="p-${courses[i].id}" >${courses[i].description}</p>
            <button onclick = "handleDelete(${courses[i].id})">Delete</button>
            <button onclick = "handleEdit(${courses[i].id})">Edit</button>
        </li>
        `
    }
    getUL.innerHTML = courserList
}


async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

function handleCreate(){
    
    let createBtn = document.querySelector('.creatBtn')
    createBtn.onclick = function(e){
        e.preventDefault();
        let name = document.querySelector('input[name="name"]').value
        let description = document.querySelector('input[name="description"]').value

        let data = {
            name : name,
            description: description
        }
        
        postData(getApi, data).then(data =>{
            // getCourses(handleRender)
        })
    }
}

async function handleDelete(id){
    const response = await fetch(getApi + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return response.json()
}



async function editContent(id, data){
    const response = await fetch(getApi + '/' +id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    return response.json()
}

function handleEdit(id){

    document.querySelector('input[name="name"]').value = document.querySelector(`.h3-${id}`).innerText
    document.querySelector('input[name="description"]').value = document.querySelector(`.p-${id}`).innerText
}