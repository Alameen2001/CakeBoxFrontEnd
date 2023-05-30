import { Component } from '@angular/core';
import { CakeService } from '../service/cake.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cartCount:any=0
  constructor(private service:CakeService,private router:Router){
    if (this.service.isAuthenticated()){
      this.service.listCart().subscribe(res=>this.cartCount=res)

    }

  }
  signout(){
    if(this.service.isAuthenticated()){
      localStorage.removeItem("token")
      this.router.navigateByUrl("")
    }
  }

}
