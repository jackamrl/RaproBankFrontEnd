import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
    <ul *ngIf="shouldShowErrors()">
      <li style="color: red" *ngFor="let error of listOfErrors()">
        {{ error }}
      </li>
    </ul>
  `,
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: () => 'This field is required',
    minlength: (params: { requiredLength: string }) =>
      'The min number of characters is ' + params.requiredLength,
    maxlength: (params: { requiredLength: string }) =>
      'The max allowed number of characters is ' + params.requiredLength,
    pattern: (params: { requiredPattern: string }) =>
      'The required pattern is: ' + params.requiredPattern,
    years: (params: { message: any }) => params.message,
    countryCity: (params: { message: any }) => params.message,
    uniqueName: (params: { message: any }) => params.message,
    telephoneNumbers: (params: { message: any }) => params.message,
    telephoneNumber: (params: { message: any }) => params.message,
  };

  @Input()
  private control!: AbstractControlDirective | AbstractControl;

  //  shouldShowErrors(): boolean {
  //    return this.control &&
  //      this.control.errors &&
  //      (this.control.dirty || this.control.touched);
  //  }

  //  listOfErrors(): string[] {
  //    return Object.keys(this.control.errors)
  //      .map(field => this.getMessage(field, this.control.errors[field]));
  //  }

  //  private getMessage(type: string, params: any) {
  //    return ShowErrorsComponent.errorMessages[type](params);
  //  }
}
