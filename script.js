const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

 // Sound Control (Placeholder Logic)
 const soundIcons = document.querySelectorAll('.icon input[type="range"]');
 soundIcons.forEach(slider => {
     slider.addEventListener('input', (e) => {
         console.log(`Volume set to: ${e.target.value}`);
     });
 });

 // Playlist Options (Placeholder Logic)
 const playlistOptions = document.querySelectorAll('.option');
 playlistOptions.forEach(option => {
     option.addEventListener('click', () => {
         alert(`Playing ${option.textContent} playlist...`);
     });
 });