var coursesAPI = '  http://localhost:3000/courses '

// fetch(coursesAPI)
// .then((res) => {
//     return res.json()
// })
// .then(courses => {
//     console.log(courses)
// })

// Cách 1:
// function getCourse1 (){
//     return new Promise((resolve, reject) => {
//         fetch(coursesAPI)
//         .then((res) => {
//             resolve(res.json());
//         })
//         .catch((err) => reject( 'Vui lòng kiểm tra lại'))
//     })
// }
// getCourse1()
// .then((res => console.log(res)))
// .catch((err) => console.log(err))

// // Cách 2:
// async function getCourses(){
//     var getAPI = await fetch(coursesAPI)
//     var getCourses = await getAPI.json()
//     return getCourses
// }
// getCourses().then((res) => {console.log(res)})




var myString = 'A@@nh $yeu em @@@@nhiều lắm @ 1g6 é !"#$%&++++*?>'
var newString = ''
for(var i = 0; i < myString.length; i++) {
    // console.log(myString.charCodeAt(i))
    if(!newString.includes(myString[i]) && !Number(myString[i]) && myString.charCodeAt(i) > 64 ){
        newString += myString[i] + `,` 
    }
}
console.log(newString)



var myMoney = '12345678'
console.log(myMoney.length-1)
var VnMoney = ''
// for(var i = myMoney.length - 1; i >= 0; i-= 1){
//    VnMoney = myMoney.slice(myMoney[i] - 4)
    
// }
// console.log(VnMoney)





// var myArr = newString.split('')
// for(var i = 0; i < myArr.length; i++) {
//     if(!Number(myArr[i]) && myArr[i] !== ' '){
//         console.log(myArr[i])
//     }
// }


