const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];
// unsplash Api
const count = 30;
const apiKey = "OXrzmfMRBzdp3mEwTdKF1I598D8IrQGI4DBZAd9IVRw";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count} `;

// create elemnts for links and photos
function displayPhotos() {
  // run function for each object in photos array
  photosArray.forEach((photo) => {
    //create a to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //createimg for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // put img inside a tag ,then inside the image container
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

// Get photos from unspalsh

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}
// Load more photos after the scrolldown end
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});

// on Load
getPhotos();
