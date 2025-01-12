

// document.addEventListener('DOMContentLoaded', function() {
//     const mainDropdowns = document.querySelectorAll('.dropdown > .dropdown-toggle');
//     const subDropdowns = document.querySelectorAll('.dropdown-menu .dropdown-toggle');
//     const dropdowns = document.querySelectorAll('.dropdown');
//     const toggleMenu = document.getElementById('mobile-menu');
//     const navItems = document.querySelector('.nav-items');
//     const bars = document.querySelectorAll('.bar');

//     // Main dropdown click behavior
//     mainDropdowns.forEach(dropdown => {
//         dropdown.addEventListener('click', function(e) {
//             e.preventDefault();
//             const parentLi = this.closest('li');
//             parentLi.classList.toggle('active');
//         });
//     });

//     // Sub-dropdown click behavior (Lessons and Tasks)
//     subDropdowns.forEach(subDropdown => {
//         subDropdown.addEventListener('click', function(e) {
//             e.preventDefault();

//             // Find the dropdown menu related to the clicked sub-dropdown
//             const dropdownMenu = this.nextElementSibling;

//             // Toggle visibility of the sub-dropdown menu on click
//             if (dropdownMenu) {
//                 dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';

//                 // Toggle the 'active' class to rotate the arrow on click
//                 this.classList.toggle('active');
//             }

//             // Close any other open sub-dropdowns
//             subDropdowns.forEach(otherDropdown => {
//                 if (otherDropdown !== this && otherDropdown.classList.contains('active')) {
//                     otherDropdown.classList.remove('active');
//                     otherDropdown.nextElementSibling.style.display = 'none';
//                 }
//             });
//         });
//     });

//     // Hover and click behavior for larger screens and mobile devices
//     dropdowns.forEach(dropdown => {
//         const toggle = dropdown.querySelector('.dropdown-toggle');
//         const subMenu = dropdown.querySelector('.dropdown-menu');

//         // Hover behavior
//         dropdown.addEventListener('mouseenter', () => {
//             if (subMenu) {
//                 subMenu.style.display = 'block';
//             }
//         });

//         dropdown.addEventListener('mouseleave', () => {
//             if (subMenu) {
//                 subMenu.style.display = 'none';
//             }
//         });

//         // Click behavior
//         toggle.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent the default anchor behavior

//             // Close other dropdowns
//             dropdowns.forEach(otherDropdown => {
//                 if (otherDropdown !== dropdown && !otherDropdown.contains(toggle)) {
//                     otherDropdown.classList.remove('active');
//                     const otherSubMenu = otherDropdown.querySelector('.dropdown-menu');
//                     if (otherSubMenu) {
//                         otherSubMenu.style.display = 'none';
//                     }
//                 }
//             });

//             // Toggle the clicked dropdown
//             dropdown.classList.toggle('active');
//             if (subMenu) {
//                 subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
//             }
//         });

//         // Prevent click events from bubbling up to the main dropdown
//         if (subMenu) {
//             subMenu.addEventListener('click', function(event) {
//                 event.stopPropagation(); // Prevent click from affecting the main dropdown
//             });
//         }
//     });

//     // Mobile menu toggle
//     toggleMenu.addEventListener('click', function() {
//         toggleMenu.classList.toggle('active');
//         navItems.classList.toggle('active');

//         // Transform bars into 'X' when active
//         if (navItems.classList.contains('active')) {
//             bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//             bars[1].style.opacity = '0';
//             bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
//         } else {
//             bars[0].style.transform = '';
//             bars[1].style.opacity = '1';
//             bars[2].style.transform = '';
//         }
//     });
// });



// // date
// document.addEventListener('DOMContentLoaded', (event) => {
//     const dateElements = document.querySelectorAll('.current-date');
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const today = new Date().toLocaleDateString(undefined, options);
//     dateElements.forEach(element => {
//         element.textContent = today;
//     });
// });