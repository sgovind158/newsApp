let fetchData = async(q)=>{
    
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`)
        let data = await res.json()
        // console.log(data)
        return data
        
    }catch(err){
        console.log(err)
    }
}

let fetchDataCountry = async (q)=>{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${q}`)
    let data = await res.json()
    return data

}

 let data1 = JSON.parse(localStorage.getItem("news"))||[]
let append = (data,results)=>{

    data.forEach(({description,title,urlToImage})=>{
        let div = document.createElement("div")
        div.setAttribute("class","div")
        let img = document.createElement("img")
        img.src = urlToImage;
        let title1 = document.createElement("h3")
        title1.innerText = title;
        let des = document.createElement("p")
        des.innerText = description;
        let add = document.createElement("button")
        add.innerText= "detail new button"
        add.addEventListener("click",()=>{
            saveLocal(e)
        })
        div.append(title1,img,des)
        results.append(div)
       


    })

   


}

function saveLocal(e){
    console.log("inside obj div")
   
     data1.push(e)
     console.log(data1)
    localStorage.setItem("news",JSON.stringify(data1))
}


let appendHeadline = (data,results)=>{
    data.forEach(({title})=>{
        let div = document.createElement("div")
        let t1 = document.createElement("h3")
        t1.innerText =title;
        div.addEventListener("click",()=>{
            saveLocal(data)
        })
        div.append(t1)
        results.append(div)


    })
}

export{fetchData,append,fetchDataCountry,appendHeadline}