import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms'; '@angular/forms'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() updateDataEvent= new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void{
    
}
loginForm = new FormGroup({
  sample: new FormControl('',[Validators.required]),
})
login()
{
  console.warn(this.loginForm.value)
}
get sample()
{
  return this.loginForm.get('sample')
}
}