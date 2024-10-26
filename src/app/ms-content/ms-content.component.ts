import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-content',
  templateUrl: './ms-content.component.html',
  styleUrls: ['./ms-content.component.css']
})
export class MsContentComponent implements OnInit {

  constructor() { }

  album: any[] = [
    {
      id:1,
      url: "../../assets/public/img/mono.PNG",
      singer:"MONO",
      name:"Chăm hoa",
      author:"",
      description:"Explore timeless symphonies and discover the masterpieces of classical music.",
    },
    {
      id:2,
      url: "../../assets/public/img/st.PNG",
      singer:"SƠN TÙNG M-TP",
      name:"ĐỪNG LÀM TRÁI TIM ANH ĐAU",
      author:"",
      description:"Explore timeless symphonies and discover the masterpieces of classical music.",
    },
    {
      id:3,
      url: "../../assets/public/img/bru.PNG",
      singer:"Lady Gaga, Bruno Mars",
      name:"Die With A Smile",
      author:"",
      description:"Explore timeless symphonies and discover the masterpieces of classical music.",
    },
    {
      id:4,
      url: "../../assets/public/img/apt.PNG",
      singer:"ROSÉ & Bruno Mars",
      name:"APT",
      author:"",
      description:"Explore timeless symphonies and discover the masterpieces of classical music.",
    },
  ]
  ngOnInit() {
  }

}
