import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-online-users',
  templateUrl: 'online-users.html',
})
export class OnlineUsers {

  usersList = []

  constructor( public params: NavParams, public view: ViewController) {
    this.usersList = params.get('list')
  }

  dismiss(){
    this.view.dismiss();
  }

  selectUser(selectedUser){
    this.view.dismiss(selectedUser);
  }


}
