import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

 
}
let imgs = document.querySelectorAll('.container img') as NodeList;
let fixedBox = document.getElementById('fixed-box') as HTMLImageElement;
let innerImg = document.getElementById('inner-img') as HTMLImageElement;
let currentIndex = 0;
console.log(imgs,fixedBox,innerImg)
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function(e) {
    const clickedImg = e.target as HTMLImageElement;
    currentIndex = Array.from(imgs).indexOf(clickedImg);
    const imgSrc = clickedImg.getAttribute('src');

    if (imgSrc !== null) {
      innerImg.setAttribute('src', imgSrc);
    } else {
      innerImg.removeAttribute('src');
    }

    fixedBox?.classList.replace('d-none', 'd-flex');
  });
}
