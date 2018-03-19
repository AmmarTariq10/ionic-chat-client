import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Chatting } from '../chatting/chatting'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
  formData = {
      name:'',
      email:''
    }

    


  
  constructor(public navCtrl: NavController) {}

    signUp(userName: string, userEmail: string){
      this.navCtrl.push(Chatting, {
         name: userName,
         email: userEmail})
        }

  }