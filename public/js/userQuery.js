const searchButtonEl=document.getElementById("search-button"),dropdownEl=document.querySelector(".search-dropdown"),searchInputEl=document.querySelector("#search-input");let movies=!0,tvshows=!1;function submitSearch(a){a.preventDefault();const b=document.querySelector(".form-control").value;return movies?document.location.replace(`/movie-results/${b}`):tvshows&&document.location.replace(`/tvshows-results/${b}`),b?void 0:void console.error("You need to input text!")}searchInputEl.addEventListener("change",submitSearch),searchButtonEl.addEventListener("click",submitSearch),dropdownEl.addEventListener("change",function(){1==this.value?(movies=!0,tvshows=!1):(movies=!1,tvshows=!0)});