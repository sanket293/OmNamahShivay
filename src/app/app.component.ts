import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/navigation/header/header.component";
import { FooterComponent } from "../components/navigation/footer/footer.component";
import { StutiesComponent } from "../components/-categories/stuties/stuties.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, StutiesComponent]
})
export class AppComponent {
  title = 'omnamahshivay';
}
