const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.querySelector('.dots-container');
const cards = document.querySelectorAll('.recommendation-card');

let currentSlide = 1; 
let slideWidth = cards[0].offsetWidth + 20; 


const firstClone = sliderContainer.firstElementChild.cloneNode(true);
const lastClone = sliderContainer.lastElementChild.cloneNode(true);

sliderContainer.appendChild(firstClone);
sliderContainer.insertBefore(lastClone, sliderContainer.firstElementChild);


sliderContainer.style.transform = `translateX(-${slideWidth}px)`;


cards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('data-index', index);
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');


function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));

    
    if (currentSlide === 0) {
        dots[dots.length - 1].classList.add('active');
    } else if (currentSlide === cards.length + 1) {
        dots[0].classList.add('active');
    } else {
        dots[(currentSlide - 1) % dots.length].classList.add('active');
    }
}


nextBtn.addEventListener('click', () => {
    currentSlide++;
    sliderContainer.style.transition = 'transform 0.5s ease';
    updateSliderPosition();

    if (currentSlide === cards.length + 1) {
        setTimeout(() => {
            sliderContainer.style.transition = 'none';
            currentSlide = 1;
            updateSliderPosition();
        }, 500); 
    }
});


prevBtn.addEventListener('click', () => {
    currentSlide--;
    sliderContainer.style.transition = 'transform 0.5s ease';
    updateSliderPosition();

    if (currentSlide === 0) {
        setTimeout(() => {
            sliderContainer.style.transition = 'none';
            currentSlide = cards.length;
            updateSliderPosition();
        }, 500); 
    }
});


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index')) + 1;
        currentSlide = index;
        sliderContainer.style.transition = 'transform 0.5s ease';
        updateSliderPosition();
    });
});


window.addEventListener('resize', () => {
    slideWidth = cards[0].offsetWidth + 20;
    updateSliderPosition();
});


updateSliderPosition();
 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        
        alert('Thank you for your message! We will get back to you shortly.');
        
        
        document.getElementById('contactForm').reset();
    });


    
