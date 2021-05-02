import { Component, OnInit } from '@angular/core';
import { AppinessService } from '../appiness.service';
import { Router } from '@angular/router'
import { state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  order_details;


  constructor(private appiness_service:AppinessService, private route:Router){}

   ngOnInit(){
    this.getOrders()
  }

  getOrders(){
    let postObject = {cmd:'getOrders'}
    this.appiness_service.postSerice(postObject)
    .subscribe(( result ) =>{
      if( result.status === 'success'){
        this.order_details = result.response;
      } else{
        console.log("error")
      }
    })
    
  }

  getOrderDetails(event,order){
    console.log(event);
    var updateStatus = {
      cmd:"updateOrderStatus",
      params:{
        id:order._id,
        status:event.target.innerText
      }
    }
    console.log(updateStatus)
    this.appiness_service.postSerice(updateStatus)
    .subscribe((result) =>{
      console.log("data",result)
      if( result.status === 'success'){
        this.getOrders();
      } else {
        console.log("error")
      }
    })
  }

  orderClick(o){
    this.route.navigateByUrl('order', {state : o})
  }

}
