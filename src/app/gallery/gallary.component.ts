import { Component } from '@angular/core';
import { RecommendedComponent } from '../recommended/recommended.component';

interface product{
  pName : string;
  pPrice : number;
  pImage : string;
}

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [ RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

  gallery: product[] =[
    { pName: "Realme-c53" ,pPrice : 6000 ,pImage:'../assets/images/gallery/1.jpg'},
    { pName: "Galaxy a05s" ,pPrice : 7000 ,pImage:'../assets/images/gallery/2.jpg'},
    { pName: "Redmi A3" ,pPrice : 5000 ,pImage:'../assets/images/gallery/3.jpg'},
    { pName: "Samsung" ,pPrice : 8000 ,pImage:'../assets/images/gallery/4.jpg'},
    { pName: "Redmi" ,pPrice : 4000 ,pImage:'../assets/images/gallery/5.jpg'},
    { pName: "Oppo A38" ,pPrice : 5000 ,pImage:'../assets/images/gallery/6.jpg'},
    { pName: "Realme" ,pPrice : 6000 ,pImage:'../assets/images/gallery/7.jpg'},
    { pName: "Realme" ,pPrice : 6500 ,pImage:'../assets/images/gallery/8.jpg'},
    { pName: "Iphone" ,pPrice : 20000 ,pImage:'../assets/images/gallery/9.jpg'},
  ]

}

  // gallery: product[] =[
  //   { pName: "powerpank" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/1.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/2.jpg'},
  //   { pName: "huawei" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/3.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/4.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/5.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/6.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/7.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/8.jpg'},
  //   { pName: "phone" ,pPrice : 5000 ,pImage:'../../assets/images/recommended/9.jpg'},
  // ]