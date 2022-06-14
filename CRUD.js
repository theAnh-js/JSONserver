const courseList = document.querySelector('.courses-list')
const addCourses = document.querySelector('.add-courses')

const btn = document.querySelector('.creatBtn')

const nameCourse = document.querySelector('input[name="name"]')
const description = document.querySelector('input[name="description"]')


const coursesApi = ' http://localhost:3000/courses'
let output = ''

const renderCourses = (courses) => {
    console.log(courses)
    courses.forEach(course =>{
        output += `
            <li data-id = ${course.id}>
                <h3 class = "courseName">${course.name}</h3>
                <p class = "courseDescription">${course.description}</p>
                <button id = "delete-post">Delete</button>
                <button id = "edit-post">Edit</button>
            </li>
        `
    })
    courseList.innerHTML = output
}



// GET - Read the courses
fetch(coursesApi)
.then(response => response.json())
.then(data => {
    renderCourses(data)
})

// Create new courses
addCourses.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch(coursesApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: nameCourse.value,
            description: description.value
        })
    })
    .then(response => response.json())
    .then(data => {
        const dataArr = []
        dataArr.push(data)
        renderCourses(dataArr)
    })    
})

courseList.addEventListener('click', (event) => {
    event.preventDefault()

    let id = event.target.parentElement.dataset.id

    // DELETE
    if(event.target.id == "delete-post"){
        fetch(`${coursesApi}/${id}` , {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then( () => location.reload())
    }

    // Edit
    if(event.target.id == "edit-post"){

        const parent = event.target.parentElement
        let courseName = parent.querySelector('.courseName').textContent
        let courseDescription = parent.querySelector('.courseDescription').textContent

        nameCourse.value = courseName
        description.value = courseDescription
    }

    //Update
    //Method: 
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        fetch(`${coursesApi}/${id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameCourse.value,
                description: description.value
            })
        })
        .then(response => response.json())
        .then(() => location.reload())    
    })
})


