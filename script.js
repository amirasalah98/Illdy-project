// $(".animated-progress span").each(function () {
//     $(this).animate(
//       {
//         width: $(this).attr("data-progress") + "%",
//       },
//       1000
//     );
//     $(this).text($(this).attr("data-progress") + "%");
//   }); preloader

//slider
var testimonialsItems=Array.from(document.querySelectorAll(".testimonialsItems"))
var slidesCount = testimonialsItems.length;
var currentSlide = 1;

var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {

    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
//     paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
  
  }
  document.getElementById('indicators').appendChild(paginationElement);
var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {
  
      currentSlide = parseInt(this.getAttribute('data-index'));
  
      theChecker();
  
    }

  }
  theChecker();

  function theChecker() {
    removeAllActive();

    testimonialsItems[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  }
  function removeAllActive() {
    testimonialsItems.forEach(function (img) {
  
      img.classList.remove('active');
  
    });
    paginationsBullets.forEach(function (bullet) {
  
      bullet.classList.remove('active');
  
    });
  
  }