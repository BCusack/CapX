import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../core/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(public authService: AuthService) {


  }

  ngOnInit() {
    console.log(this.authService.userData.email);
  }
  async signIn(): Promise<void> {
    await this.authService.signIn();
  }
  signOut(): void {
    this.authService.signOut();
  }

}
