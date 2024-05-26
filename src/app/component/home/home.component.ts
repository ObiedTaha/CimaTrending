import { GetTrendingService } from './../../servicr/get-trending.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  listSearch: any = '';

  constructor(private trendingService: GetTrendingService, private _activeRoute: ActivatedRoute, private spinner: NgxSpinnerService) {
    this._activeRoute.params.subscribe(param => {
      this.kerenl(param['type'])
    })
  }


  trending() {
    this.trendingService.getTrending().subscribe(responce => {
      this.movies = responce.results;
    })

  }

  topRate() {
    this.trendingService.topRating().subscribe((resbonce: any) => {
      this.movies = resbonce.results
    })
  }

  apiSearch(e: any) {
    let val = e.target.value;
    this.trendingService.getOneMovie(val).subscribe((resbonce: any) => {
      this.movies = resbonce.results;
    })
    if (val == '') {
      this.trending();
    }
  }

  upComing() {
    this.trendingService.upComing().subscribe((resbonce: any) => {
      this.movies = resbonce.results
    })
  }

  kerenl(param: string) {
    this.spinner.show();

    this.spinner.hide(undefined, 5000);

    if (param == null) {
      this.trending()
    }
    else if (param == 'topRate') {
      this.topRate();
    }
    else if (param == 'upComing') {
      this.upComing();
    }
    else if (param == 'trending') {
      this.trending();
    }
    else {
      this.trending();
    }
  }

  ngOnInit(): void {

  }

}
