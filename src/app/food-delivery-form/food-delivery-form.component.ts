import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-food-delivery-form',
  templateUrl: './food-delivery-form.component.html',
  styleUrls: ['./food-delivery-form.component.css']
})
export class FoodDeliveryFormComponent implements OnInit {

  myForm: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
      ]],
      phone: ['', [
        Validators.required,
      ]],
      address: ['', [
        Validators.required
      ]],
      comment: '',
      date: ['', [
        Validators.required
      ]],
      time: ['', [
        Validators.required
      ]],
      payment_selector: ['', [
        Validators.required
      ]],
      confirmation_call_checker: '',
      promo: '',
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get phone() {
    return this.myForm.get('phone');
  }
}
