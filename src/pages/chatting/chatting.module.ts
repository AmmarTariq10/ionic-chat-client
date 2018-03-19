import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chatting } from './chatting';

@NgModule({
  declarations: [
    Chatting,
  ],
  imports: [
    IonicPageModule.forChild(Chatting),
  ],
})
export class ChattingModule {}
