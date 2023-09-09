import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  username(){
 let   userName=document.getElementById('userName')

 userName?.classList.remove('d-none')
  }
  userage(){
    let   userAge=document.getElementById('userAge')
   
    userAge?.classList.remove('d-none')
     }

     usermail(){
      let   userEmail=document.getElementById('userEmail')
     
      userEmail?.classList.remove('d-none')
       }
       userpass(){
        let   userPass=document.getElementById('userPass')
       
        userPass?.classList.remove('d-none')
         }
}
