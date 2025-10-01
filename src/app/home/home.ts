import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = "Angular";
  url1 ="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png";
  url2 ="https://miro.medium.com/1*FKD2Uy_Q6r6AviZA2VD4RQ.png";
  url = this.url1;
  changeLogo = () => {
    this.url = (this.url === this.url1) ? this.url2 : this.url1;
  }
}
