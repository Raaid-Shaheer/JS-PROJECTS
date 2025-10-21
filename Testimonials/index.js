const testimonials = [
    {
        author: {
          name: "Rick Jones",
          image: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloremque quisquam ea veniam, eius accusantium assumenda quasi earum odit vitae perferendis deserunt laudantium, praesentium quaerat. Eveniet molestias perferendis corporis. Possimus.",
        date: '23rd October 2024',
    },{
     author: {
          name: " Jessica Jones",
          image: "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc="
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloremque quisquam ea veniam, eius accusantium assumenda quasi earum odit vitae perferendis deserunt laudantium, praesentium quaerat. Eveniet molestias perferendis corporis. Possimus.",
        date: '21st November 2024',
    },{
     author: {
          name: " Neil April",
          image: "https://cdn.create.vista.com/api/media/small/20030237/stock-photo-cheerful-young-man-over-white"
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloremque quisquam ea veniam, eius accusantium assumenda quasi earum odit vitae perferendis deserunt laudantium, praesentium quaerat. Eveniet molestias perferendis corporis. Possimus.",
        date: '15th January 2025',
    },
];

const containerElement = document.getElementById('testimonials-container');

const makeTestimonialCard = testimonials => {
  return `<div class="testimonial-card">
    <img src="${testimonials.author.image}">
    <h2>${testimonials.author.name}</h2>
    <p>${testimonials.text}</p>
    <date>Written on ${testimonials.date}</date>
  </div>`
}

let currentTestimonial =0;

const nextTestimonial = () => {
 
  if (currentTestimonial < testimonials.length -1){
    currentTestimonial +=1;
    updatePage()
  }
};

const prevTestimonial = () => {
 
  if (currentTestimonial > 0){
    currentTestimonial -=1;
    updatePage()
  }
};

const updatePage = () => {
  let markup = makeTestimonialCard(testimonials[currentTestimonial])
  if (testimonials.length > 1){
    markup += `<nav>
            <button onClick ="prevTestimonial()">Previous</button>
            <button onClick ="nextTestimonial()">Next</button>
              </nav>`
  }
  
  containerElement.innerHTML = markup;


}

updatePage();