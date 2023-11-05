import { Component } from '@angular/core';
import {faMapMarker, faMapLocation} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faMapMarker=faMapMarker;
  faEnvelope=faEnvelope;
  faPhone=faPhone;
  faInstagram=faInstagram

  protected readonly faMapLocation1 = faMapLocation;
  protected readonly faInstagram = faInstagram;
  protected readonly faInstagram = faInstagram;
}
