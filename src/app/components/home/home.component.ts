import { CommonModule } from '@angular/common';
import { HeadlinesService } from './../../service/headlines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  topNews:any[]=[];
  constructor(private HeadlinesService:HeadlinesService){}
  getNewsHeadlines(){
    this.HeadlinesService.getHeadlines().subscribe((data)=>{
      this.topNews=data.articles;
    })
  }

  ngOnInit(): void {
    this.getNewsHeadlines();
    console.log("hi",this.topNews)

  }

}
