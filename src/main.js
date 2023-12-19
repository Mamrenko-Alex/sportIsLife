// // import './js/header.js';
// // import './js/burger';
// // import './js/authentication.js';
// // import './js/search';
// // import'./js/loader/loader.js';
// // import './js/modal-window/modal.js';
// // import './js/sendEmail.js';
// // import './js/filter.js';
// import './js/exercises.js';
// import './js/quote.js';
// // import './js/pagination/pagination.js';
// // import './js/scrollToTopButton';
// import './js/exercises-right-part-filter.js';
// import './js/raiting.js';

// // Importing header and burger for mobile devices
// if (window.innerWidth <= 768) {
//   import('./js/header.js').then(module => {
//     // Use the module
//   });
//   import('./js/burger.js').then(module => {
//     // Use the module
//   });
// }

// // Importing search.js after clicking an element with the class 'muscles-item'
// document.addEventListener('click', event => {
//   const targetElement = event.target;
//   if (targetElement.classList.contains('muscles-item')) {
//     import('./js/search.js').then(module => {
//       // Use the module
//     });
//   }
// });

// // Importing modal and sendEmail.js after the full HTML render
// document.addEventListener('DOMContentLoaded', () => {
//   import('./js/modal-window/modal.js').then(module => {
//     // Use the module
//   });

//   import('./js/sendEmail.js').then(module => {
//     // Use the module
//   });
// });

// // Importing filter.js after the full HTML render
// document.addEventListener('DOMContentLoaded', () => {
//     import('./js/authentication.js').then(module => {
//     // Use the module
//   });
//   import('./js/filter.js').then(module => {
//     // Use the module
//   });
// });

// // Importing pagination.js after importing filter.js
// import('./js/filter.js').then(() => {
//   import('./js/pagination/pagination.js').then(module => {
//     // Use the module
//   });
// });

// // Importing scrollToTopButton.js after the first user scroll
// let userScrolled = false;
// window.addEventListener('scroll', () => {
//   if (!userScrolled) {
//     userScrolled = true;
//     import('./js/scrollToTopButton.js').then(module => {
//       // Use the module
//     });
//   }
// });

