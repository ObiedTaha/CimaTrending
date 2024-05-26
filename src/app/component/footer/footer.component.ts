import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm: FormGroup = new FormGroup(
    {
      'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Z]/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern(/[1-9]/)]),
      'age': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/[1-9]/)]),
      'password': new FormControl(null, [Validators.required]),
      'rePassword': new FormControl(null, [Validators.required])
    }
  )

  invalidPassword:boolean = true;
  constructor( private toastr: ToastrService) { }

  checkPassword() {
    this.invalidPassword = true
    if (this.contactForm.value.password == this.contactForm.value.rePassword) {
      this.invalidPassword = false
      
    }
  }
  sendMassage() {
    console.log(this.contactForm);
    if (this.contactForm.invalid ||this.invalidPassword) {
      this.toastr.error('FuckYou','hhhhhhhh')
      return
    }
      this.toastr.success('Massage', 'massage Send succusfully!');
    
    // console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

}
