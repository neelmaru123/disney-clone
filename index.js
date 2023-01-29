let movies = [
    {
        name: "falcone ane the winter soidier",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id vel quis? Doloribus, vero. Delectus saepe sequi laudantium, quibusdam tenetur quos optio adipisci vel molestias debitis. Ducimus dolor amet corrupti?"
        image: "images/slider 2.png"    
    },
    {
        name: "loki",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id vel quis? Doloribus, vero. Delectus saepe sequi laudantium, quibusdam tenetur quos optio adipisci vel molestias debitis. Ducimus dolor amet corrupti?"
        image: "images/slider 1.png"    
    },
    {
        name: "wanda vision",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id vel quis? Doloribus, vero. Delectus saepe sequi laudantium, quibusdam tenetur quos optio adipisci vel molestias debitis. Ducimus dolor amet corrupti?"
        image: "images/slider 3.png"    
    },
    {
        name:"raya and last dragon" ,
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id vel quis? Doloribus, vero. Delectus saepe sequi laudantium, quibusdam tenetur quos optio adipisci vel molestias debitis. Ducimus dolor amet corrupti?"
        image: "images/slider 4.png"    
    },
    {
        name: "luca",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id vel quis? Doloribus, vero. Delectus saepe sequi laudantium, quibusdam tenetur quos optio adipisci vel molestias debitis. Ducimus dolor amet corrupti?"
        image: "images/slider 5.png"    
    },
];  

const carousel=document.querySelector('.carousel');
let sliders=[];

let sliderIndex=0;

const cresteSlide= () =>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }


let slide= document.createElement('div');
let imgElement= document.createElement('img');
let content= document.createElement('div');
let h1= document.createElement('h1');
let p= document.createElement('p');

//attaching all elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  slide.appendChild(imgElement);
  carousel.appendChild(slides);

  imgElement.src=movies[slideIndex].image;
  slideIndex++;

  slide.className= 'slider';
  content.className= 'slide-content';
  h1.className= 'movie-titel';
  p.className= 'movie-des';

  sliderIndex.push(slide);

  if(slide.length){
    sliders[0].style.marginLeft = calc(-${100  (sliders.length - 2)}% - ${
        30  (sliders.length - 2
    )}px);
  }
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
createSlide();
}, 3000);

const videoCards= [...document.querySelectorAll('.video-card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play();
    });
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.pause();
    });
});

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns= [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxtBtns')];

cardContainers.forEach((items,i)=>{
    let containerDimensions= item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        items.scrollLeft += containerWidth -200;
    })

    preBtns[i].addEventListener('click',()=>{
        items.scrollLeft -= containerWidth +200;
    })
})