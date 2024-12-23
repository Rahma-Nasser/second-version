

let pro = document.querySelector('.pro');

function right(){
    pro.scrollBy({
        left: 300,
        behavior:'smooth'
    })

}

function left(){
    pro.scrollBy({
        left: -300,
        behavior:'smooth'
    })
}

let input1 = document.getElementById("names");
let input2 = document.getElementById("email");
let input3 = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener('click', 
    () => {
        if(input1.value == ""){
            console.log("error in name")
        }
        if(input2.value == ""){
            console.log("invalid email")
        }
        if(input2.value.indexOf(".")== -1 || input2.value.indexOf("@")== -1){
            console.log(". or @ not found")
        }
        if(input3.value == ""){
            console.log("error in password")
         }
    }
)

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function changeTestimonial(direction) {
      // Hide the current testimonial
        testimonials[currentTestimonial].classList.remove("active");
      // Calculate the new index
    currentTestimonial =
        (currentTestimonial + direction + testimonials.length) %
        testimonials.length;
      // Show the new testimonial
        testimonials[currentTestimonial].classList.add("active");
}