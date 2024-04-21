$(function () {
  /* Slick Slider - Welcome */
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });

  /* Slick - Review */
  $(".review-slider, .mockup-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  /* TypeIt - Welcome */
  $("#typing").typeIt({
    strings: ["DRAW & DROP", "GUARANTEED", "EXCLUSIVE ITEM"],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: "wow",
    offset: 150,
    mobile: true,
  });
  wow.init();
});

document.addEventListener("DOMContentLoaded", function () {
  /* Header Scroll Change */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector("header").classList.add("active");
      document.querySelector(".btn-top").classList.add("active");
    } else {
      document.querySelector("header").classList.remove("active");
      document.querySelector(".btn-top").classList.remove("active");
    }
  });

  /* Faq Accordion */
  var faqDescriptions = document.querySelectorAll(".faq-desc");
  faqDescriptions[0].style.display = "block";
  var faqTitles = document.querySelectorAll(".faq-title");
  faqTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      faqDescriptions.forEach(function (desc) {
        desc.style.display = "none";
      });
      this.nextElementSibling.style.display = "block";
      faqTitles.forEach(function (title) {
        title.parentNode.classList.remove("active");
      });
      this.parentNode.classList.add("active");
    });
  });

  /* Video Modal */
  var openModalBtn = document.querySelector(".open-modal");
  var closeModalBtn = document.querySelector(".close-modal");
  var videoModal = document.querySelector(".video-modal");

  openModalBtn.addEventListener("click", function () {
    videoModal.style.display = "block";
    document.body.classList.add("active");
  });
  closeModalBtn.addEventListener("click", function () {
    videoModal.style.display = "none";
    document.body.classList.remove("active");
  });

  /* Header Trigger */
  var triggerBtn = document.querySelector(".trigger");
  var gnb = document.querySelector(".gnb");

  triggerBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    gnb.classList.toggle("active");
  });
  var gnbLinks = document.querySelectorAll(".gnb a");
  var sections = document.querySelectorAll("section");
  gnbLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      gnb.classList.remove("active");
      triggerBtn.classList.remove("active");
    });
  });
  sections.forEach(function (section) {
    section.addEventListener("click", function () {
      gnb.classList.remove("active");
      triggerBtn.classList.remove("active");
    });
  });
});
