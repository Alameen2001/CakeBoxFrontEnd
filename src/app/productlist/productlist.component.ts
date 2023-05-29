import { Component, OnInit } from '@angular/core';
import { CakeService } from '../service/cake.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  cakes:any
  constructor(private service:CakeService){
    


  }
  ngOnInit(): void {
    this.service.getAllCakes().subscribe(res=>this.cakes=res)
  }

}
