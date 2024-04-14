// ==UserScript==
// @name         My second script
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       Makarov Maxim
// @match        https://www.bing.com/*
// @grant        none
// ==/UserScript==



let input = document.getElementsByName("q")[0];
let search = document.getElementById("search_icon");
let links = document.links;

let keywords = ["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"]
let keyword = keywords[getRandom(0, keywords.length)];




if (search != null){
    let i = 0;
    let timerId = setInterval(function () {
        input.value += keyword[i];
        i++;
        if (i == keyword.length){
            clearInterval(timerId);
            search.click();
        }
    }, 300)
   
} else {
    for (let i = 0; i < links.length; i++){
        if (links[i].href.indexOf("napli.ru") != -1){
            let link = links[i];
            console.log("нашёл!!" + link);
            link.click();
            break;
        }
    }
}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
