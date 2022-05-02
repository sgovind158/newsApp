// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
/// import navbar
import { navbar } from "../components/navbar.js";

let nav1 = document.querySelector("#navbar")
nav1.innerHTML = navbar()

// import side bar
import { sidebar } from "../components/sidebar.js";
let side1 = document.querySelector("#sidebar")
side1.innerHTML = sidebar()

// import fetch js file
import {fetchData,append,fetchDataCountry,appendHeadline} from "./fetch.js"

let  search = (e)=>{
 
    if(e.key=="Enter"){
       
        let q = document.querySelector("#search_input").value ;
        fetchData(q).then((data)=>{
            console.log("this is my data",data.articles)
            let results = document.querySelector("#results")
            results.innerHTML = null;
            append(data.articles,results)
           
        })
    }
  
}

let search_input = document.querySelector("#search_input")

search_input.addEventListener("keydown",search)


// category 

function cSerch(){

    console.log(this.id)
    fetchDataCountry(this.id).then((data)=>{
        console.log("this is my data",data)
        let results = document.querySelector("#headline")
        results.innerHTML = null;
        appendHeadline(data.articles,results)
        // append(,results)
       
    })
}
   


let category = document.querySelector("#sidebar").children;
// console.log(category)

for(let i = 0; i<category.length;i++){
    category[i].addEventListener("click",cSerch)
}
