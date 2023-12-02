alert("Welcome to my Resturant")
alert("The page that you're looking for used information that you entered. Returning to that page might cause any action you took to be repeated. Do you want to continue?")

const APILINK = "https://api.themoviedp.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5fo5f6693fda00eb7c4fd&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5fo5f6693fda00eb7c4fd&querry=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("querry");

returnResturant(APILINK)
function returnResturant (url){
    fetch(url).then(res => res.json())
     .then(function(data)) }
        console.log(data.result)
        data.results .forEach(element => {
            const div_card =document .createElement('div');
            div_card.setAttribute('class'.'card');

            const div_row =document .createElement('div');
            div_row.setAttribute('class'.'row');
            
            const div_column =document .createElement('div');
            div_column.setAttribute('class'.'column');
            const image =document .createElement('img');
            div_c.setAttribute('class'.'thumbnail');
            div_card.setAttribute('id'.'image');
            const title =document .createElement('h3');
            div_title.setAttribute('id'.'title');
            const center =document .createElement('center');
            div_card.setAttribute('class'.'card');

            title. innerHTML = ${element,title}
            image.src = IMG_PATH +element.poster_path;

            center .appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            

            main.appendChild(div_row);
        });

     }
}

form.addEventListener("submit" ,)(e) => {
    e.preventDafault();
    main. innerHTML = ''
    const searchItem =search.value;
    if (searchItem) {
        returnResturant(SEARCHAPI +searchItem);
        search.value ="";

    }

}