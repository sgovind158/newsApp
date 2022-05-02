// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let nav1 = document.querySelector("#navbar")
nav1.innerHTML = navbar()

import {fetchData,append} from "./fetch.js"
let search = (e)=>{

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
