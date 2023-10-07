//change card__footer svg if size width screen will be less than 460px
// const mySvg = document.getElementById('mySvg')
//
// function myFunction(screen) {
//     if (screen.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }
//
// let screen = window.matchMedia("(max-width: 460px)")
// myFunction(screen) // Call listener function at run time
// screen.addListener(myFunction) // Attach listener function on state changes
//
// const hr = document.getElementsByClassName("card__hr")



// const child = document.createElement("svg");
// child.setAttribute("xmlns", "");
// child.innerHTML = "Hello World!";
//
// parent.appendChild(child);

//hr.appendChild(box);

// const fs = require('fs');
//
// const folderPath = 'C:\\html-vsCode\\advice-generator-app-main\\advice-generator-app\\images\\pattern-divider-mobile.svg';
//
// fs.readdirSync(folderPath);

const sendData = () => {
    let random = Math.floor((Math.random() * 224) + 1);
    let url = 'https://api.adviceslip.com/advice' + "/" + random

    fetch(url)
        .then(res => {
            return res.json();
        })// or you can use this better syntax
        // .then (res => res.join() )
        .then(data => {
            console.log(data.valueOf())
            const id = data["slip"].id
            console.log(id)
            const advice = data['slip']['advice']
            console.log(data['slip']['advice'])
            const add_to_html = () => {
                const adviceNumber = document.getElementById('adviceNumber')
                const adviceMessage = document.getElementById('adviceMessage')
                adviceNumber.innerHTML = id;
                adviceMessage.innerHTML = advice;
            }
            add_to_html()

        })
        .catch(error => console.log(error))

}
sendData()

/*
================= async syntax for getting data from a website======================
async function  getArticle (url){
    let res =  await  fetch(url)
    let data = await res.json()
}
getArticle()
*/
