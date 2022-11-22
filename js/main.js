// New immages object
const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morales', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 

    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    },

    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];



// post array items
images.forEach((proprieta) => {
    // List array items
    console.log(proprieta);
    console.log(proprieta.image)

   // adding div carousel_item to image_carousel
   var parent = document.getElementById('image_carousel');
   var child = document.createElement("div");
   var title = document.createElement("div");
   var subtitle = document.createElement("div");
   child.className = "carousel_item";
   title.className = "title";
   subtitle.className = "subtitle"

   var parent2 = document.getElementById('thumbnails');
   var child2 = document.createElement("div");
   child2.className = "thumb";

    // adding img div
    var imgContainer = document.createElement("img");
    imgContainer.src = `${proprieta.image}`;

    var thumbContainer = document.createElement("img");
    thumbContainer.src = `${proprieta.image}`;

    // adding content to title and subtitle
    title.innerHTML += `${proprieta.title}`;
    subtitle.innerHTML += `${proprieta.text}`;

    // setting childs
    parent.appendChild(child);
    child.appendChild(imgContainer);
    child.appendChild(title);
    child.appendChild(subtitle)

    parent2.appendChild(child2);
    child2.appendChild(thumbContainer)

});
















// variable for counting the active image
var activeImg = 0;

// getting thumb class and adding the active state
const thumbnails = document.getElementsByClassName('thumb');
thumbnails[activeImg].classList.add('thumb_active');

console.log(thumbnails);

// getting carousel item class and adding the active state
const carouselItem = document.getElementsByClassName('carousel_item');
carouselItem[activeImg].classList.add('active');

// getting next button and adding function
const next = document.getElementById('next_button');
    next.addEventListener('click', function() {

        if (activeImg < images.length -1){

            thumbnails[activeImg].classList.remove('thumb_active');
            carouselItem[activeImg].classList.remove('active');

            activeImg++;

            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');

            // Contatore immagine
            console.log("n immagine", activeImg);
            console.log("n array", images.length);

        }
         // Infinite scroll 
        else if (activeImg == images.length -1){
            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active');

            for (activeImg == images.length; activeImg--; ){

                carouselItem[activeImg].classList.remove('active');
                thumbnails[activeImg].classList.remove('thumb_active');
                
            }
            
            activeImg = 0;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })

// getting back button and adding function
const back = document.getElementById('back_button');
    back.addEventListener('click', function() {

        if (activeImg > 0){

            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active');

            activeImg--;
            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');

            // Contatore immagine
            console.log("n immagine", activeImg);
            console.log("n array", images.length);

        }
        // Infinite scroll 
        else if (activeImg == 0){
            carouselItem[activeImg].classList.remove('active');
            thumbnails[activeImg].classList.remove('thumb_active')

            activeImg = images.length -1;

            carouselItem[activeImg].classList.add('active');
            thumbnails[activeImg].classList.add('thumb_active');
            console.log("n immagine", activeImg);
        }

    })