import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUrl } from 'src/app/models/i-url';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _service: LinkService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group({
      nombre: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
    })
  }

  reset() : void {
    this.submitted = false;
    this.initForm();
  }

  sendData(): void {
    this.submitted = true;

    if ( this.form.valid )  {

      const newUrl: IUrl = {
        nombre: this.form.controls['nombre'].value,
        url: this.form.controls['url'].value
      }

      this._service.addUrl(newUrl);

  };

  }



}
