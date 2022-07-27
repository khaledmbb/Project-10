let load = document.querySelector(".loader");
setTimeout(() => {
  load.remove();
}, 1500);
/* Start Header */

let fixed = document.querySelector(".fixed");

fixed.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let arrow = document.querySelector(".arrow");
arrow.onclick = () => {
  let work111S = document.querySelector(".road-map");
  work111S.scrollIntoView({
    behavior: "smooth",
  });
};

let add = document.querySelector(".add");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 500) {
    fixed.classList.add("start-anim");
  } else {
    fixed.classList.remove("start-anim");
  }
  if (this.scrollY >= 1900) {
    fixed.style.backgroundColor = "#333";
  } else {
    fixed.style.backgroundColor = "var(--mean-color)";
  }
});

/* Start NavBar */

let myLiF1 = document.querySelectorAll("header .nav-bar .links .li-f1");
let myLiF2 = document.querySelectorAll("header .nav-bar .links .li-f2");
let myLiF3 = document.querySelectorAll("header .nav-bar .links .li-f3");
let myLiF4 = document.querySelectorAll("header .nav-bar .links .li-f4");
let myLiF = document.querySelectorAll("header .nav-bar .links .li-f");
let ulIn = document.querySelectorAll(".ul-in");
let ulInN = document.querySelectorAll(".ul-in li");
let logo = document.querySelector(".logo");

let work1 = document.querySelectorAll(".work1");
work1.forEach((element) => {
  element.addEventListener("click", () => {
    let work1S = document.querySelector(".document");
    work1S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let work2 = document.querySelectorAll(".work2");
work2.forEach((element) => {
  element.addEventListener("click", () => {
    let work2S = document.querySelector(".features");
    work2S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let work3 = document.querySelectorAll(".work3");
work3.forEach((element) => {
  element.addEventListener("click", () => {
    let work3S = document.querySelector(".apps");
    work3S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let work4 = document.querySelectorAll(".work4");
work4.forEach((element) => {
  element.addEventListener("click", () => {
    let work4S = document.querySelector(".random-doc");
    work4S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let work8 = document.querySelectorAll(".work8");
work8.forEach((element) => {
  element.addEventListener("click", () => {
    let work8S = document.querySelector(".lang");
    work8S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let work7 = document.querySelectorAll(".work7");
work7.forEach((element) => {
  element.addEventListener("click", () => {
    let work7S = document.querySelector(".add");
    work7S.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let work9 = document.querySelectorAll(".work9");
work9.forEach((element) => {
  element.addEventListener("click", () => {
    let work9S = document.querySelector(".question");
    work9S.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let work12 = document.querySelectorAll(".work12");
work12.forEach((element) => {
  element.addEventListener("click", () => {
    let work12S = document.querySelector(".event");
    work12S.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let work10 = document.querySelectorAll(".work10");
work10.forEach((element) => {
  element.addEventListener("click", () => {
    let work10S = document.querySelector(".end");
    work10S.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let work11 = document.querySelectorAll(".work11");
work11.forEach((element) => {
  element.addEventListener("click", () => {
    let work11S = document.querySelector(".about");
    work11S.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let inputSearch = document.querySelectorAll(".box");
inputSearch.forEach((element) => {
  element.addEventListener("click", () => {
    let myNewElement = document.createElement("div");
    myNewElement.className = "pop-up";
    let myIcon = document.createElement("i");
    myIcon.className = "fas fa-times-circle";
    myIcon.onclick = () => {
      myNewElement.remove();
    };
    let myH = document.createElement("h1");
    myH.className = "h-pop";
    let myHText = document.createTextNode("Sorry Man!");
    myH.appendChild(myHText);
    let myP = document.createElement("p");
    myP.className = "p-pop";
    let myText = document.createTextNode(
      "Don't be Such a fool, don't click again please my boy"
    );
    myP.appendChild(myText);
    myNewElement.appendChild(myP);
    myNewElement.appendChild(myH);
    myNewElement.appendChild(myIcon);
    document.body.appendChild(myNewElement);
  });
});

let linksPPP = document.querySelectorAll(".linksP .linksPul > li");

logo.onclick = () => {
  location.reload();
};

document.querySelector(".li-f2").onclick = () => {
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".li-f2").style.backgroundColor =
    "var(--background-color)";
  document.querySelector(".ul2").style.display = "block";
  document.querySelector(".ul1").style.display = "none";
  document.querySelector(".ul3").style.display = "none";
  document.querySelector(".ul4").style.display = "none";
};

document.querySelector(".li-f1").onclick = () => {
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".li-f1").style.backgroundColor =
    "var(--background-color)";
  document.querySelector(".ul2").style.display = "none";
  document.querySelector(".ul1").style.display = "block";
  document.querySelector(".ul3").style.display = "none";
  document.querySelector(".ul4").style.display = "none";
};

document.querySelector(".li-f3").onclick = () => {
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".li-f3").style.backgroundColor =
    "var(--background-color)";
  document.querySelector(".ul2").style.display = "none";
  document.querySelector(".ul1").style.display = "none";
  document.querySelector(".ul3").style.display = "block";
  document.querySelector(".ul4").style.display = "none";
};

document.querySelector(".li-f4").onclick = () => {
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".li-f4").style.backgroundColor =
    "var(--background-color)";
  document.querySelector(".ul2").style.display = "none";
  document.querySelector(".ul1").style.display = "none";
  document.querySelector(".ul3").style.display = "none";
  document.querySelector(".ul4").style.display = "block";
};

window.addEventListener("scroll", () => {
  document.querySelectorAll(".ul-in").forEach((el) => {
    el.style.display = "none";
  });
});
window.addEventListener("scroll", () => {
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
});
document.querySelector("html").addEventListener("mouseup", () => {
  ulIn.forEach((ele) => {
    ele.style.display = "none";
  });
  myLiF.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
});

/* ----------------------------- */

let myLiF11 = document.querySelectorAll(".f");

document.querySelector(".li-f22").onclick = () => {
  myLiF11.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".ul22").style.display = "block";
  document.querySelector(".ul11").style.display = "none";
  document.querySelector(".ul33").style.display = "none";
  document.querySelector(".ul44").style.display = "none";
};

document.querySelector(".li-f11").onclick = () => {
  myLiF11.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".ul22").style.display = "none";
  document.querySelector(".ul11").style.display = "block";
  document.querySelector(".ul33").style.display = "none";
  document.querySelector(".ul44").style.display = "none";
};

document.querySelector(".li-f33").onclick = () => {
  myLiF11.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".ul22").style.display = "none";
  document.querySelector(".ul11").style.display = "none";
  document.querySelector(".ul33").style.display = "block";
  document.querySelector(".ul44").style.display = "none";
};

document.querySelector(".li-f44").onclick = () => {
  myLiF11.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  document.querySelector(".ul22").style.display = "none";
  document.querySelector(".ul11").style.display = "none";
  document.querySelector(".ul33").style.display = "none";
  document.querySelector(".ul44").style.display = "block";
};

window.addEventListener("scroll", () => {
  linksP.classList.remove("open");
  ulP.classList.remove("do");
});

document.querySelector("header .b").onmouseup = () => {
  linksP.classList.remove("open");
  ulP.classList.remove("do");
};
document.querySelector("section").onmouseup = () => {
  linksP.classList.remove("open");
  ulP.classList.remove("do");
};
document.querySelector("footer").onmouseup = () => {
  linksP.classList.remove("open");
  ulP.classList.remove("do");
};

let ulP = document.querySelector(".ulP");
let linksP = document.querySelector(".linksP");

ulP.onclick = () => {
  linksP.classList.toggle("open");
  ulP.classList.toggle("do");
};

let navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) {
    navBar.style.cssText = "background-color: #000000cf;";
    linksP.style.backgroundColor = "#000000cf";
  } else {
    linksP.style.backgroundColor = "#242424";
    navBar.style.cssText = "background-color: #242424;";
  }
});

/* End NavBar */

/* End Header */

/* Start Section */

/* Start Apps */

let apps = document.querySelector(".apps");
let b11 = document.querySelector(".apps .b11");
let b22 = document.querySelector(".apps .b22");
let b33 = document.querySelector(".apps .b33");

window.addEventListener("scroll", () => {
  let sectionOffset = apps.offsetTop;
  let windowOffset1 = apps.offsetHeight;
  let windowOffset2 = this.pageYOffset;
  let windowOffset3 = this.innerHeight;
  if (windowOffset2 > sectionOffset + windowOffset1 - windowOffset3) {
    b11.classList.add("b11-go");
    b22.classList.add("b22-go");
    b33.classList.add("b33-go");
    b33.style.display = "block";
    b22.style.display = "block";
    b11.style.display = "block";
  }
});

/* End Apps */

let doc = document.querySelector(".document");

/* Start Add */

let addSe = document.querySelector(".add");
let myNum = document.querySelectorAll(".add h2");
let on = false;

window.addEventListener("scroll", () => {
  let sectionOffset1 = addSe.offsetTop;
  let sectionOffset2 = addSe.offsetHeight;
  let windowHeight1 = this.innerHeight;
  let windowHeight2 = this.pageYOffset;
  if (windowHeight2 > sectionOffset1 + sectionOffset2 - windowHeight1) {
    if (!on) {
      myNum.forEach((element) => {
        let endIn = element.dataset.num;
        let startIn = setInterval(() => {
          element.textContent++;
          if (element.textContent == endIn) {
            clearInterval(startIn);
          }
        }, 10);
      });
      on = true;
    }
  }
});

/* End Add */

/* Start Projects */

let myLiL = document.querySelectorAll(".shuffle ul li");
let galleryImg = document.querySelectorAll(".gallery .box-g");

myLiL.forEach((element) => {
  element.addEventListener("click", () => {
    myLiL.forEach((elem) => {
      elem.classList.remove("active");
    });
    element.classList.add("active");
    galleryImg.forEach((el) => {
      el.style.display = "none";
    });
    document.querySelectorAll(element.dataset.mean).forEach(function (e) {
      e.style.display = "block";
    });
  });
});

/* End Lang */

/* Start Apps */

let randomDoc = document.querySelector(".random-doc");
let boxRandomDoc = document.querySelectorAll(".random-doc .box");

window.addEventListener("scroll", () => {
  let sectionOffset11 = randomDoc.offsetTop;
  let windowOffset11 = randomDoc.offsetHeight;
  let windowOffset22 = this.pageYOffset;
  let windowOffset33 = this.innerHeight;
  if (windowOffset22 > sectionOffset11 + windowOffset11 - windowOffset33) {
    boxRandomDoc.forEach((el) => {
      el.classList.add("play-anim");
      el.style.display = "block";
    });
  }
});

/* End Apps */

/* Start Event */

let time = new Date("jul 2022,05, 00:00:00").getTime();

let startEvent = setInterval(() => {
  let timeNow = new Date().getTime();
  let ofCourseTime = time - timeNow;

  let days = Math.floor(ofCourseTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (ofCourseTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((ofCourseTime % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((ofCourseTime % (1000 * 60)) / 1000);
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#secondes").innerHTML = secondes;
}, 1000);

let inputT = document.querySelector('.event input[type="text"]');
let inputTt = document.querySelector(".event input::placeholder");

inputT.onclick = () => {
  inputT.removeAttribute("placeholder");
};
inputT.onmouseleave = () => {
  inputT.setAttribute("placeholder", "أدخل الإمايل");
};

/* End Event */

/* End Section */
