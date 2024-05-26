import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  style: any;
  widthStyle: any;
  toggle: boolean = false;
  icon: string = 'fa fa-times fa-2x'
  constructor() { }
  ngOnInit(): void {
    this.fadeToggle();
    window.onresize = () => {
      this.toggle = false;
      this.fadeToggle();
    }
  }

  fadeToggle() {
    // this.widthStyle = window.innerWidth < 700 ? "40%" : "40%"
    
    let sidebarWidth = document.querySelector('.sidebar .data')?.clientWidth;
    if (this.toggle == false) {
      this.style = { left: `-${sidebarWidth}px` }
      this.toggle = true;
      this.icon = 'fa fa-align-justify fa-2x'
    } else {
      this.style = { left: `0` };
      this.toggle = false;
      this.icon = 'fa fa-times fa-2x'
    }
  }

}
