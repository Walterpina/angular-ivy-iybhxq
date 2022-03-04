import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  formdata;
  btnAlterarAvatar = false;
  avatarServive =
    'https://pm1.narvii.com/6695/9afdcfeca82122e9b4e26eb00bae6a30c3bd9336_hq.jpg';
  ngOnInit() {
    this.btnAlterarAvatar = this.avatarServive ? false : true;
    this.formdata = new FormGroup({
      email: new FormControl('will'),
      passwd: new FormControl('ww'),
      file: new FormControl(this.avatarServive),
    });
  }
  onClickSubmit(data) {
    console.log('Entered Email id : ' + data.emailid);
  }
  alterarAvatar() {
    this.btnAlterarAvatar = !this.btnAlterarAvatar;
  }
}
