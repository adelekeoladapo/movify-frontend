import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {SignUpRequest} from '../../dto/SignUpRequest';

declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpRequest: SignUpRequest = new SignUpRequest();

  // constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signUp(): void {
    if ($('#form-sign-up').smkValidate()) {
      toastr.success('I love Jesus');
    }

  }

}
