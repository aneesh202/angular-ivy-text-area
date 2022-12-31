import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area-box',
  templateUrl: './text-area-box.component.html',
  styleUrls: ['./text-area-box.component.css']
})
export class TextAreaBoxComponent implements OnInit {
  public textAreaForm: FormGroup;

  //Output Emitters
	@Output() updateText = new EventEmitter<any>();
  //Input Bindings
	@Input() rows: number =10;
	@Input() cols: number =20
	@Input() inputLabel: string = "";
	@Input() statusText: string  = "";
  @Input() text: string = "";
  @Input() maxCount: number = 50;
  constructor(private fb : FormBuilder){
  }

  ngOnInit() {
    this.textAreaForm = this.fb.group({
      textArea: this.text
    });
  }
  update =(data)=>{
    this.updateText.emit(data);
  }
}