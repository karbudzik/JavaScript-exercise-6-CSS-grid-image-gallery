const gallery = document.querySelector(".gallery"),
      overlay = document.querySelector(".overlay"),
      overlayClose = overlay.querySelector(".close"),
      overlayImage = overlay.querySelector('img');


function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

// GENERATE-HTML FUNCTION
// Function that generates HTML code with proper class names and images chosen randomly from the set of 12:

function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img class="item__image" src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
                <button class="item__button">View &rarr;</button>
            </div>
        </div>
    `;
}

// Creating an array of 50 sets of random numbers, that will later become sizes of the pictures in the gallery. To the array I've added multiple 1x1 elements to fill the small gaps in the grid:

const digits = Array.from({length:50}, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

// Calling generateHTML function to each element of the digits array and adding the whole fragment to the actual HTML code:

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;


// GENERATE-CSS FUNCTION
// Styling the pictures sizes in CSS to match their class names:

const items = Array.from(document.querySelectorAll(".item"));
function generateCSS() {
    for (var i = 0; i < items.length; i++) {
        items[i].style.gridRow = "span " + digits[i][0];
        items[i].style.gridColumn = "span " + digits[i][1];  
    }
}
generateCSS();

// SHOWING FULL SIZE PICTURE
// Functions that give class "open" while clicking on the picture and removing it while clicking on the "close" button:

function handleClick(e) {
    const src = e.currentTarget.querySelector("img").src;
    overlayImage.src = src;
    overlay.classList.add("open");
}
items.forEach(item => item.addEventListener("click", handleClick));

function close() {
    overlay.classList.remove("open")
}
overlayClose.addEventListener("click", close);







