import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ngOnInit() {
    const slider = document.querySelector('.slider');
    const sliderControls = document.querySelectorAll(".slider-control");
    const image = document.querySelectorAll(".slider img")[0];

    sliderControls.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        let imageWidth = image.clientWidth + 32;// 32px = 2rem margin
        const move = el.id === 'prev-slide' ? -imageWidth : imageWidth;
        slider?.scrollBy({ left: move, behavior: "smooth" })
      })
    })

    window.addEventListener("resize", () => {
      slider?.scrollTo({ left: 0, behavior: "smooth" })
    });

    //Drag, touches

    let isDragStart = false, isDragging = false, prevPageX: any, prevScrollLeft: any, positionDiff;

    const dragStart = (e: any) => {
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = slider?.scrollLeft;
    }

    const dragStop = (e: any) => {
      isDragStart = false;
      if (!isDragging) return;
      isDragging = false;
      positionDiff = Math.abs(positionDiff!);
      let imageWidth = image.clientWidth + 32; // 32px = 2rem margin
      let valDifference = imageWidth - positionDiff;
      if(slider?.scrollLeft! > prevScrollLeft){
        slider?.scrollBy({ left: valDifference, behavior: "smooth" })
      }
      if(slider?.scrollLeft! < prevScrollLeft){
        slider?.scrollBy({ left: -valDifference, behavior: "smooth" })
      }
    }

    const dragging = (e: any) => {
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      slider!.scrollLeft = prevScrollLeft - positionDiff;
    }

    slider?.addEventListener("mousedown", dragStart);
    slider?.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    slider?.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    slider?.addEventListener("touchend", dragStop);
  }
}
