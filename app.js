//nav toggle

let links = document.querySelectorAll(".links");
links.forEach((links) => {
  links.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    links.classList.add("active");
  });
});

function functiondisable() {
  // To get the scroll position of current webpage
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
    // if scroll happens, set it to the previous value
    (window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    });
}

function functionenable() {
  window.onscroll = function () {};
}

// upper code is for disable scroll

// toggle navbar in mobile view
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  ul.classList.toggle("active");
});

//project cards open and close functions
let projects = document.querySelectorAll(".project-card");

projects.forEach((card, index) => {
  let closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    projects.forEach((item, i) => {
      document.documentElement.style.scrollBehavior = "smooth";
      item.classList.remove("blur");
    });
    card.classList.remove("active");
    functionenable();
  });

  card.addEventListener("click", (e) => {
    if (e.target != closeBtn) {
      projects.forEach((item, i) => {
        if (i != index) {
          document.documentElement.style.scrollBehavior = "auto";
          item.classList.add("blur");
        }
      });
      card.classList.add("active");
      functiondisable();
    }
  });
});

// project Filter function

const tags = document.querySelectorAll(".filter-btn");

tags.forEach((btn) => {
  btn.addEventListener("click", () => {
    projects.forEach((card) => {
      if (btn.innerHTML.toLowerCase() == "all") {
        card.style.display = "block";
      } else {
        if (
          card.getAttribute("data-tags").includes(btn.innerHTML.toLowerCase())
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

    tags.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});
