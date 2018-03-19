import { Component } from '@angular/core';
import * as io from 'socket.io-client'
import { NavParams, ModalController } from 'ionic-angular';
import { OnlineUsers } from '../online-users/online-users';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-chatting',
  templateUrl: 'chatting.html',
})


export class Chatting {


  public socket: io.Socket;
  public data = {
    name:'',
    message:''
  }

  public sentMessage = ''

  public chatHis = []

  public msgArea;

  userInfo = {
    name:'',
    email:'',
    userId:''
  }

  chatItem = {
    msg:'',
    user:''

  }

  selectedUser = ''

  userList = []


  constructor(public param: NavParams, public modal: ModalController, public sanitizer: DomSanitizer) {

    this.userInfo.name = this.param.get('name')
    this.userInfo.email = this.param.get('email')

    this.socket = io.connect('http://localhost:3000')

    this.socket.on('joining',(userId)=>{

      this.userInfo.userId = userId

        console.log('User Connected with bame :'+this.userInfo.name)
        console.log('User Connected with socket id :'+this.userInfo.userId)

        this.socket.emit('addNewUser',this.userInfo)

        this.socket.on('userList',(userList)=>{
          this.userList = userList
        })

        this.socket.on('incoming',({msg,user})=>{
            this.chatItem.user=user
            this.chatItem.msg=msg
            this.chatHis.push(this.chatItem)
            console.log(this.chatHis)
           })

        ``
    })

    
  
  
  }


  send(message: string){
    this.socket.emit('message',{msg:message, user:this.selectedUser});
    this.data.message='';
  }


  getUsers(){

      let onlineUserModal = this.modal.create(OnlineUsers,{list:this.userList } )
      
      onlineUserModal.onDidDismiss(selectedUser=>{
        this.selectedUser = selectedUser
        this.socket.emit('userSelected',{selector: this.userInfo.userId, selected: this.selectedUser})
        })

    onlineUserModal.present();

  }


}
