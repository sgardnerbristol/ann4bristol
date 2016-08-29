import {Component, OnInit} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";


@Component({
  moduleId: module.id,
  selector: 'app-contact-us-form',
  templateUrl: 'contact-us-form.component.html',
  styleUrls: ['contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  contactUsForm:FormGroup;

  options = ['Host a small Event', 'Ask a question', 'Attend a event', 'Help with fundraising'];
  optionsMap = {
    host: false,
    ask: false,
    attend: false,
    help: false
  };
  optionsChecked = [];

  optionstring: string;

  constructor(private formBuilder:FormBuilder) {
    this.contactUsForm = formBuilder.group({
        'name': ['', [
          Validators.required,
        ]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'comment': ['', [
          Validators.required,
          Validators.minLength(25)
        ]],
        'check1': ['', [
        ]],
        'check2': ['', [
        ]],
        'check3': ['', [
        ]],
        'check4': ['', [
        ]]
    });
  }

  ngOnInit() {
  }

  initOptionsMap() {
    for (var x = 0; x<this.options.length; x++) {
      this.optionsMap[this.options[x]] = true;
    }
  }

  updateCheckedOptions(option,event) {
    if(event.target.checked){
      if(this.optionsChecked.indexOf(event.target.value) == -1) {
        this.optionsChecked.push(event.target.value);
      }
    }
    else if(!event.target.checked) {
      var index = this.optionsChecked.indexOf(event.target.value);
      if (index > -1) {
        this.optionsChecked.splice(index,1);
      }
    }

  }

  onSubmit() {
    this.optionstring = '';
    if(this.contactUsForm.value.check1) {
      this.optionstring += 'Host a small Event, '
    }
    if(this.contactUsForm.value.check2) {
      this.optionstring += 'Ask a question, '
    }
    if(this.contactUsForm.value.check3) {
      this.optionstring += 'Attend a event, '
    }
    if(this.contactUsForm.value.check4) {
      this.optionstring += 'Help with fundraising, '
    }
    this.optionstring = this.optionstring.replace(/,\s*$/, "");

    console.log(this.optionstring);
  }
}
