const age=12
if(age>=18){
    console.log("adult")
}else{
    console.log("not adult")
}
const url='https://github.com/Montessori%20Visualization/JS-101-with-html-css/tree/main/basics0'
console.log(url)
//replace method
const newUrl=url.replace('%20','  ')
const splitUrl=url.split('/')
console.log(newUrl)
//slice method
const slicedUrl=url.slice(8,14)
console.log(slicedUrl)
//toUpperCase method
const upperUrl=url.toUpperCase()
console.log(upperUrl)
//toLowerCase method
const lowerUrl=url.toLowerCase()
console.log(lowerUrl)
//length property
const urlLength=url.length
console.log(urlLength)