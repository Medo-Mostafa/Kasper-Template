let links = document.querySelectorAll(".menu li a"); // Select All links in Header
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 100 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.className === "landing") {
          removeClass(links);
          addClass(links[0]);
        } else if (
          section.className === link.textContent.toLocaleLowerCase() &&
          section.className !== "row"
        ) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
icon.onclick = () => {
  icon.classList.toggle("active");
};
// ------------------------------------Global Animate Content Function------------------------------------
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= parent.offsetTop - 300) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
        } else {
          arr.forEach((element) => {
            element.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
          });
        }
      });
    }
  });
}
// ----------------------Header Section------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    document.querySelector("header").style.backgroundColor = "#333";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});
// ---------------------- Serivces Section------------------------------
let servicesSection = document.querySelector(".services"); // Select Parent
let servicesBoxes = document.querySelectorAll(".serv-container .srv"); // Select Childs
animateContent(servicesSection, servicesBoxes);

// ---------------------- Design Section------------------------------
let designSection = document.querySelector(".design"); // Select Parent
let designImage = document.querySelectorAll(".design .image");
let designContainer = document.querySelectorAll(".design .design-container");
animateContent(designSection, designImage, designContainer);
// ---------------------- Protfolio Section------------------------------
let protfolioLi = document.querySelectorAll(".shuffle li");
let protfolioBoxes = document.querySelectorAll(".gallery .box");
protfolioLi.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    protfolioLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
protfolioLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    filterFunction(e.target);
  });
});
let filterFunction = function (li) {
  if (li.textContent !== "All") {
    protfolioBoxes.forEach((content) => {
      if (content.dataset.category === li.dataset.filter) {
        content.style.cssText = `display:block;`;
      } else {
        content.style.cssText = `display:none;`;
      }
    });
  } else {
    protfolioBoxes.forEach((content) => {
      content.style.cssText = `display:block;`;
    });
  }
};
// ---------------------- Status Section------------------------------
let statusSection = document.querySelector(".status"); // Select Parent
let statusNums = document.querySelectorAll(".box .number"); // Select Childs
let started = false; // Function Start ? No
window.addEventListener("scroll", () => {
  if (window.scrollY > statusSection.offsetTop - 300) {
    if (!started) {
      statusNums.forEach((ele) => {
        counter(ele);
      });
    }
    started = true;
  }
});
function counter(ele) {
  let goal = +ele.dataset.goal; // Select data-goal Attribute As A number
  let repeatCount = setInterval(() => {
    ele.textContent++;
    if (+ele.textContent == goal) {
      clearInterval(repeatCount);
    }
  }, 2000 / goal);
}

// ---------------------- Skills Section------------------------------
let ourSkillsSection = document.querySelector(".our-skills"); // Select Parent
let testimonialsSection = document.querySelector(".testimonials"); // Select Childs
let SkillsSpans = document.querySelectorAll(".prog span");
window.addEventListener("scroll", () => {
  if (window.scrollY > ourSkillsSection.offsetTop - 200) {
    SkillsSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});
animateContent(ourSkillsSection, testimonialsSection);
// ---------------------- Quote Section------------------------------
let quoteSection = document.querySelector(".quote"); // Select Parent
let quoteCotainer = document.querySelector(".quote .container"); // Select Childs
animateContent(quoteSection, quoteCotainer);
// ---------------------- Pricing Section------------------------------
let pricingSection = document.querySelector(".pricing");
let pricinplans = document.querySelectorAll(".plans .plan");
animateContent(pricingSection, pricinplans);
// ---------------------- Email Section------------------------------
let emailSection = document.querySelector(".email");
let emailButton = document.querySelector(".content .button");
let emailParagraph = document.querySelector(".content .text-subscribe");
animateContent(emailSection, emailButton, emailParagraph);
// ---------------------- Contact Section------------------------------
let contactSection = document.querySelector(".contact");
let contactContent = document.querySelector(".contact .container .content");
animateContent(contactSection, contactContent);
