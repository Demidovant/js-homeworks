const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');


fontSizes.forEach((fontSize) => {
    fontSize.addEventListener('click', (event) => {
        fontSizes.forEach((fontSize) => {
            if (fontSize.classList.contains('font-size_active')) {
            fontSize.classList.remove('font-size_active');
            }
        })        
        event.preventDefault(); 
        fontSize.classList.add('font-size_active');
            if(fontSize.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if(fontSize.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-small');
                book.classList.remove('book_fs-big');
    }
})
})
