import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Route, Router } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-ms-header-menu',
  templateUrl: './ms-header-menu.component.html',
  styleUrls: ['./ms-header-menu.component.css']
})
export class MsHeaderMenuComponent implements OnInit {
  @ViewChildren('myVideo') video!: QueryList<ElementRef<HTMLVideoElement>>;  // Tham chiếu tới video
  constructor(
    private router : Router
  ) { }

  isPlaying: boolean = false;  // Trạng thái của nút Play/Pause
  isShuffle: boolean = false;  // Trạng thái của nút Shuffle
  isRepeat: boolean = false;   // Trạng thái của nút Repeat

  slides: any[] = [

    {
      id:2,
      url :"../../assets/public/vid/video.mp4",
      title: 'California',
      description: "This is video one"
    },
    // {
    //   id: 1,
    //   url :"../../assets/public/vid/Background.mp4",
    //   title: 'Australia',
    //   description: "This is video two"
    // },
  ]

  currentSlide = 0;
  isAuto = true;

  navigateToChannel() {
    const path = '/pg-channel'; // Đường dẫn bạn muốn điều hướng đến
    console.log('Navigating to:', path); // In ra đường dẫn trong console
    this.router.navigate([path]); // Chuyển hướng đến trang pg-channel
  }


  // Hàm dừng/phát video khi nhấn nút
  togglePlayPause() {
    // Lấy video hiện tại dựa trên chỉ số currentSlide
    const currentVideo = this.video.toArray()[this.currentSlide].nativeElement;

    // Nếu video đang phát, dừng video
    if (this.isPlaying) {
        currentVideo.play(); // Dừng video
    } else {
        currentVideo.pause(); // Phát video
    }

    this.isPlaying = !this.isPlaying; // Cập nhật trạng thái của video
}


  nextSlide() {
    // Chuyển đến slide tiếp theo, và quay lại slide đầu tiên nếu đến cuối danh sách
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.playCurrentSlide(); // Phát video hiện tại
  }

  previousSlide() {
    // Quay lại slide trước đó, và chuyển đến slide cuối cùng nếu đang ở slide đầu tiên
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.playCurrentSlide(); // Phát video hiện tại
  }

  playCurrentSlide() {
    // Dừng tất cả video
    this.video.forEach((video) => {
      video.nativeElement.pause();
      // video.nativeElement.currentTime = 0; // Đặt lại thời gian về 0 nếu cần
    });

    // Phát video hiện tại
    const currentVideo = this.video.toArray()[this.currentSlide].nativeElement;
    currentVideo.play();

    // Đặt trạng thái isPlaying về false vì nút sẽ là nút Play
    this.isPlaying = false;
    console.log("Current slide ID:", this.slides[this.currentSlide].id); // In ID ra console
  }
  ngOnInit(): void {
  }

}
