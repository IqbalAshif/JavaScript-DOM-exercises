// Put code of task C here
const a =document.querySelector('main');
const newArticle= document.createElement("article");
newArticle.innerHTML+= 
            `  <header>
                    <h2>Article header</h2>
                </header>
                <figure>
                        <img src="http://placekitten.com/320/160" alt="title" />
                        <figcaption>Caption</figcaption>
                    </figure>
                    <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
                    `;
a.appendChild(newArticle);
   