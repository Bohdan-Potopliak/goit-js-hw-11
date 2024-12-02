`use strict`
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import searchAPI from "./js/pixabay-api";
import createMarkup from "./js/render-functions";

const gallery = document.querySelector(".gallery");
const form = document.querySelector(".js-search-form");
const loader = document.getElementById("loader");

let lightbox;

form.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();
    const search = event.target.elements.search.value.trim();
    if (!validateQuery(search)) return;
    loader.style.display = "flex";
    searchAPI(search)
        .then(data => {
            if (data.hits.length === 0) {
                noResultsMessage();
                gallery.innerHTML = "";
                return;
            }
            gallery.innerHTML = createMarkup(data.hits);
            lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
            });
            lightbox.refresh();
        })
        .catch(error => {
            iziToast.error({
                message: `Something went wrong: ${error.message}`,
            });
        })
        .finally (() => {
            loader.style.display = "none";
            event.target.reset()
        });
}

function noResultsMessage() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}

function validateQuery(query) {
    if (!query) {
    iziToast.warning({
        message: "Please enter a search query.",
    });
    return false;
    }
return true;
}

