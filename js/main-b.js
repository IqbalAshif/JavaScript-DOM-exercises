// Put code of task B here
const main = document.querySelector('main');
main.innerHTML +=
    `<article>
                <header>
                    <h2>Article header</h2>
                </header>
                <figure>
                        <img src="http://placekitten.com/320/160" alt="title" />
                        <figcaption>Caption</figcaption>
                    </figure>
                    <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
             </article>`;

//
 main.addEventListener("click", () => {
     console.log('hello');
   });

   main.addEventListener('click', (evt) => {
       console.log(evt);
   });
/*const image = main.getElementsByTagName('img');
image[1].addEventListener('click', () => {
    console.log(document.images[1].src);
});
document.querySelector('article:nth-child(2) img').addEventListener('click', (evt) => {
    console.log(evt.currentTarget.src)
});*/

// when the img elements added with innerHTML are clicked,
// log src attribute to console

const images = document.querySelectorAll('img');

images.forEach((image) => {
image.addEventListener('click', (evt) => {
console.log(evt.currentTarget.src);
});
}); 