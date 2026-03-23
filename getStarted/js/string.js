//Strings methords to decler string
const str1 = "Hello";
const str2 = new String("Hello");
console.log(str1,str2);
console.log(str1+' '+str2);


const name = "saugat";
//            012345
//            654321-   

const age = 20;
console.log("hello my name is " + name + " and I am " + age + " years old.");
console.log(`HEllo my name is ${name} and I am ${age} years old`);
// '' 
//`` we use backtick for this

console.log(name.length)// where as in length we start form 1
console.log(name[5])// while taking a prticular char we start with 0
console.log(2+3+"4"+5+6+3)
console.log(name.indexOf('a'))
console.log(name.slice(3))
console.log(name.slice(-1))
const trimdata= "                   SAUGAT            "
console.log(trimdata.trim())
console.log(name.substring(1,5))
console.log(name.slice(-3,-1))
console.log(name)




const url = "https://saugat.com/saugat%20choudhary";
console.log(url.charAt(5))
console.log(url.endsWith('r'))
console.log(url.indexOf("s"))
console.log(url.toUpperCase())
console.log(url.toLowerCase())
console.log(url.replace('choudhary',"bagale"))
console.log(url.replace('saugat'))
console.log(url.split('saugat'))

let url2='https://github.com/Montessori%20Visualization/JS-101-with-html-css/tree/main/basics0'
// https://github.com/SaugatBagale/JS-101-with-html-css/tree/main/basics0
url2=url2.replace('%20',' ')
url2=url2.split(' ')
url2[0]=url2[0].replace('Montessori','Saugat')
url2[1]= url2[1].replace('Visualization','Bagale')
console.log(url2.join(''))
const user = "MontessoriVisualization";
const repos = "JS-101-with-html-css";

const gitApi=`https://api.github.com/${user}/${repos}`

console.log(gitApi);







