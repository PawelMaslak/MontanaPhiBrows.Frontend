import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  ngOnInit() {
    //gallery
    const images = document.querySelector('.images');
    const sliderControls = document.querySelectorAll(".slider-control");
    const sliderScroll = document.querySelector('.slider-scroll');
    const sliderThumb = sliderScroll?.querySelector('.thumb') as HTMLElement;
    // const maxScrollLeft = images?.scrollWidth! - images?.clientWidth!;

    // console.log(images?.scrollWidth!);

    images?.addEventListener('scroll', () => {
      updateScroll();
    })

    sliderThumb.addEventListener('mousedown', (e) => {
      const x = e.clientX
      const position = sliderThumb.offsetLeft;
      const maxScrollLeft = images?.scrollWidth! - images?.clientWidth!;

      const handleMouseMove = (e: any) => {
        const dx = e.clientX - x;
        const newPosition = position + dx;
        const maxPosition = sliderScroll?.getBoundingClientRect().width! - sliderThumb.offsetWidth;
        const boundedPosition = Math.max(0, Math.min(maxPosition, newPosition));
        const scrollPosition = (boundedPosition / maxPosition) * maxScrollLeft;
        sliderThumb.style.left = `${boundedPosition}px`;
        images!.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    })


    //SLIDE ON CLICK
    sliderControls.forEach(el => {
      el.addEventListener('click', () => {
        const move = el.id === 'prev-slide' ? -1 : 1;
        const moveSize = images!.clientWidth * move;
        images?.scrollBy({ left: moveSize, behavior: "smooth" })
      })
    })

    const updateScroll = () => {
      const maxScrollLeft = images?.scrollWidth! - images?.clientWidth!;
      const scrollPosition = images?.scrollLeft;
      const thumbPossition = (scrollPosition! / maxScrollLeft) * (sliderScroll?.clientWidth! - sliderThumb?.offsetWidth);
      sliderThumb.style.left = `${thumbPossition}px`
    }
  }
}
