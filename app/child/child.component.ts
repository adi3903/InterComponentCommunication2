import { Component, Input,EventEmitter, Output} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{
  @Input() public message:any;

  @Output() public message2 = new EventEmitter();

  public SendMessage()
  {
    this.message2.emit("Hello from child");
  }
}
