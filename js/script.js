/*-- Player control --*/

const player = document.getElementById('player')
const playerButton = document.querySelector('.play-pause')

function playPause() {
    if(player.paused) {
        player.play();
      } else {
        player.pause();
      }
}

$('#player').on('play', function() {
    playerButton.innerHTML = 
    `<svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_937)">
    <path d="M6 18V30H14L24 40V7.99996L14 18H6ZM33 24C33 20.47 30.96 17.42 28 15.95V32.06C30.96 30.58 33 27.53 33 24ZM28 6.45996V10.59C33.78 12.31 38 17.66 38 24C38 30.34 33.78 35.69 28 37.41V41.54C36.01 39.72 42 32.57 42 24C42 15.43 36.01 8.27996 28 6.45996Z" fill="#FFFFFF"/>
    </g>
    <defs>
    <clipPath id="clip0_0_937">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
    console.log('On')
  });
  
$('#player').on('pause', function() {
    playerButton.innerHTML = 
    `<svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_934)">
    <path d="M33 24C33 20.47 30.96 17.42 28 15.95V20.37L32.91 25.28C32.97 24.86 33 24.43 33 24ZM38 24C38 25.88 37.59 27.65 36.92 29.28L39.95 32.31C41.25 29.82 42 27 42 24C42 15.44 36.01 8.28 28 6.46V10.59C33.78 12.31 38 17.66 38 24ZM8.55 6L6 8.55L15.45 18H6V30H14L24 40V26.55L32.51 35.06C31.17 36.09 29.66 36.92 28 37.42V41.55C30.75 40.92 33.26 39.66 35.37 37.93L39.45 42L42 39.45L24 21.45L8.55 6ZM24 8L19.82 12.18L24 16.36V8Z" fill="#FFFFFF"/>
    </g>
    <defs>
    <clipPath id="clip0_0_934">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
    console.log('Off')
});

/*-- Menu hover handling --*/

const fogging = document.querySelector('#fogging');

$(document).on("mouseover", ".header-menu-item", function() {
    fogging.classList.remove("un-fogging");
    fogging.classList.add("fogging");
    fogging.style.transition = "all 1s ease 0s";
});
$(document).on("mouseout", ".header-menu-item", function() {    
    fogging.classList.add("un-fogging");
    fogging.style.transition = "all 1s ease 0s";

});

$(document).on("mouseover", ".main-logo", function() {
    fogging.classList.remove("un-fogging");
    fogging.classList.add("fogging");
    fogging.style.transition = "all 1s ease 0s";
});
$(document).on("mouseout", ".main-logo", function() {    
    fogging.classList.add("un-fogging");
    fogging.style.transition = "all 1s ease 0s";

});


