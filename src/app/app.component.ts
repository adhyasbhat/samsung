
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'samsung';
  data = ""
  fav = [
    {sports:'swimming',chocolate:'5star',fruits:'mango'},
    {sports:'longjump',chocolate:'kitkat',fruits:'apple'},
    {sports:'tennis',chocolate:'dairymilk',fruits:'grapes'}
  ];
  pipe = 'data pipe example'
  custompipe = 'aeroplane'
 updateData(item:string){
   console.warn(item)
   this.data=item;
 }color: string = '#2889e9'
 arrayColors: any = {
   color1: '#2883e9',
   color2: '#e920e9',
   color3: 'rgb(255,245,0)',
   color4: 'rgb(236,64,64)',
   color5: 'rgba(45,208,45,1)'
 };
 selectedColor: string = 'color1';

}
