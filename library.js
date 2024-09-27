const myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

function addBookTolibrary(author, title, numPages, read) {
    let book = new Book(author, title, numPages, read);
    myLibrary.push(book);
}

function clearContent(){
    let contentArea=document.getElementById("main_content");
    while(contentArea.firstChild){
        contentArea.removeChild(contentArea.firstChild);
    }
}
function displayBooks(){
    let mainContent = document.getElementById("main_content");
    

    for (let i = 0; i < myLibrary.length; ++i) {
        
    
        let bookContainer = document.createElement("div");
        bookContainer.setAttribute("class","book");

        let bookLeft=document.createElement("div");
        bookLeft.setAttribute("class", "bookLeft");
        let bookLeftTitle=document.createElement("div");
        let bookLeftAuthor=document.createElement("div");
        let bookLeftPages=document.createElement("div");
        bookLeftTitle.innerHTML="Title:";
        bookLeftAuthor.innerHTML="Author:";
        bookLeftPages.innerHTML="Pages:";
        bookLeft.appendChild(bookLeftTitle);
        bookLeft.appendChild(bookLeftAuthor);
        bookLeft.appendChild(bookLeftPages);

        bookContainer.appendChild(bookLeft);



        let bookRight=document.createElement("div");
        bookRight.setAttribute("class", "bookRight");
        let bookRightTitle=document.createElement("div");
        let bookRightAuthor=document.createElement("div");
        let bookRightPages=document.createElement("div");
        bookRightTitle.innerHTML=myLibrary[i].title;
        bookRightAuthor.innerHTML=myLibrary[i].author;
        bookRightPages.innerHTML=myLibrary[i].numPages;
        bookRight.appendChild(bookRightTitle);
        bookRight.appendChild(bookRightAuthor);
        bookRight.appendChild(bookRightPages);

        bookContainer.appendChild(bookRight);

        mainContent.appendChild(bookContainer);
}
}
function init() {

    addBookTolibrary("Yeomi Park", "In Order To live", 267, "unread");
    addBookTolibrary("Kentaru Miura", "Berserk", 2000, "read");
    addBookTolibrary("Genna Rose Nethercroft", "Thistlefoot", 200, "unread");
    addBookTolibrary("Greg Bear", "Queen Of Angels", 274, "unread");
    addBookTolibrary("David Grann", "The Lost City Of Z", 320, "unread");
    addBookTolibrary("Ben Macyntire", "The Spy And The Traitor", 430, "unread");

  
 
displayBooks();
        const dialogElem = document.getElementById("dialog");
        const showBtn = document.querySelector(".show");
        const closeBtn = document.querySelector(".close");
        
        showBtn.addEventListener("click", () => {
          dialogElem.showModal();
        });
        
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
           let input=dialogElem.querySelectorAll("input");
           addBookTolibrary(input[0].value,input[1].value,input[2].value);
           clearContent();
       
          dialogElem.close(input.value);
          displayBooks();
        });
        

    
}