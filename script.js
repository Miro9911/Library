let contForm = document.getElementById("cont_form");
let new_book_btn = document.getElementById("NBbtn");

new_book_btn.addEventListener('click', spanCard)


function spanCard(){
    contForm.style.display = "block";
}

let cancelBtn = document.querySelector(".CancelBtn");

cancelBtn.addEventListener('click', cancel)

function cancel(){
    contForm.style.display = "none";
}

let myLibrary = []


function Book(author, title, genre, numberOfPages){
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
}



function addBooksToLibrary(){
    let newAuthor = document.getElementById('author').value;
    let newTitle = document.getElementById('title').value;
    let selectGenre = document.getElementById('genre').value;
    let NoP = document.getElementById('NoP').value;
    let NewBook = new Book(newAuthor, newTitle, selectGenre, NoP);
    myLibrary.push(NewBook);
    let Library = myLibrary[myLibrary.length - 1]
    console.log(myLibrary);
    
    

    

    


    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('NoP').value = '';

   
    

    let list = document.querySelector('.info')
    let li = document.createElement("li");
    

    let nameAuthor = JSON.stringify(Library.author).replace(/[{}]|[""]|[[]|[\]/]/g,'');
    let nameTitle = JSON.stringify(Library.title).replace(/[{}]|[""]|[[]|[\]/]/g,'');
    let nameGenre = JSON.stringify(Library.genre).replace(/[{}]|[""]|[[]|[\]/]/g,'');
    let numPages = JSON.stringify(Library.numberOfPages).replace(/[{}]|[""]|[[]|[\]/]/g,'');
    
    li.innerHTML += "<span>" + "Author: " + "<br>" + nameAuthor + "<br>" + "<br>" + 
    "Title: " + "<br>" + nameTitle + "<br>" + "<br>"  + "Genre: " + "<br>" + nameGenre + "<br>" + "<br>"  + 
    "Number of pages: " + "<br>" + numPages + "<br>" + "<br>" + "Did you read it: "   + "<br>" + "<select><option>No</option><option>Yes</option></select>"  + "<br>" + 
     "<br>" + "<button  id=removeBtn onclick=removeBtn(this)>Remove</button>" + "</span>"
    
    

    list.appendChild(li)

    
    
    
    
}

function removeBtn(rbtn, num){
    myLibrary.splice(num, 1)
    rbtn.closest('li').remove()
}








let AddBtn = document.querySelector(".AddBtn");
AddBtn.addEventListener('click', addBooksToLibrary)
AddBtn.addEventListener('click', cancel)



