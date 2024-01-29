import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { BodyComponent } from "../components/body/body/body.component";
import { FooterComponent } from "../components/footer/footer.component";
import { StutiesComponent } from "../components/stuties/stuties.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, StutiesComponent]
})
export class AppComponent {
  title = 'omnamahshivay';
}
