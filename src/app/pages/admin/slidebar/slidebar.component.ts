import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
