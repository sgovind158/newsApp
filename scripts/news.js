// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

let nav1 = document.querySelector("#navbar")
nav1.innerHTML = navbar()

let newsData = JSON.parse(localStorage.getItem("news"))
console.log(newsData)
