import { Component } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',

})
export class HelloworldComponent {
fontColor='blue';
sayHelloid=1;
сanClick=false;
message='Hello World';
sayMessage(){
  alert(this.message)
}
}
