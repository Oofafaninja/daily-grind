/*
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page. 
The content must include:

Image (of specific coffee)
Alt Tag (indentifies type of coffee)
description (of this tpye of cofee)
Week day
Color (Supporting Image)

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.
*/

function coffeeTemplate(coffee){

return `<p>
    <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
</p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){
    myDay = urlParams.get("day");
}
else{
    myDay = today;
}

// change the string to a number
myDay = parseInt(myDay);

switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of bubble tea",
            day: "Monday",
            desc: 'I like me some bubble tea',
        }
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"Brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: 'Its cold, so a caramel latte sounds good',
        }
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: 'Cold brew for when we are serious!',
        }
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"red",
            name: "frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Thursday",
            desc: 'Frappe for more sweets',
        }
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"White",
            name: "Mocha",
            pic: "Mocha.jpg",
            alt: "A picture of a mocha drink ",
            day: "Friday",
            desc: 'Chocolate flavor',
        }
    break;    

    case 6:
        today = "Saturday";
        coffee = {
            color:"Orange",
            name: "Pumpkin spice latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin spice latte",
            day: "Saturday",
            desc: 'To know when it is Fall season',
        }
    break;

    case 7:
        today = "Sunday";
        coffee = {
            color:"Purple",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip drink",
            day: "Sunday",
            desc: 'When you are feeling fancy',
        }
    break;

    default:
        alert("something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

//change the background color of the HTML element
document.querySelector("html").style.backgroundColor = coffee.color