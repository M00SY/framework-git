import { Component } from '@angular/core';
interface recommended{
  pName : string;
  pPrice : number;
  pImage : string;
}
@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {


  recommendeditem: recommended[] =[
    { pName: "powerpank" ,pPrice : 5000 ,pImage:'../assets/images/recommended/1.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/2.jpg'},
    { pName: "huawei" ,pPrice : 5000 ,pImage:'../assets/images/recommended/3.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/4.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/5.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/6.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/7.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/8.jpg'},
    { pName: "phone" ,pPrice : 5000 ,pImage:'../assets/images/recommended/9.jpg'},
  ]
}
