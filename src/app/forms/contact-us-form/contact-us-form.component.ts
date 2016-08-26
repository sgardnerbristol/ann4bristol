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

  options = ['OptionA', 'OptionB', 'OptionC'];
  optionsMap = {
    OptionA: false,
    OptionB: false,
    OptionC: false,
  };
  optionsChecked = [];

  private currentOption: string;

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
        ]]
    });

    this.initOptionsMap();
  }

  ngOnInit() {
  }

  initOptionsMap() {
    for (var x = 0; x<this.options.length; x++) {
      this.optionsMap[this.options[x]] = true;
    }
  }

  updateOptions() {
    for(var x in this.optionsMap) {
      if(this.optionsMap[x]) {
        this.optionsChecked.push(x);
      }
    }
    this.options = this.optionsChecked;
    this.optionsChecked = [];
  }

  updateCheckedOptions(option, event) {
    for (var i=0; i<this.options.length;i++) {
      if (this.options[i] == option) {
        console.log("INSIDE"+i);
        console.log("INSIDE"+this.options[i] + " "+option)
        console.log("INSIDE"+this.optionsMap[i])
        this.optionsMap[i] = event.target.checked = true;
      }
      else {
        console.log(i);
        this.optionsMap[i] = event.target.checked = false
      }
    }
    // this.optionsMap[option] = event.target.checked;
    if(event.target.checked) {
      this.currentOption = option;
      console.log(option);
    }

  }


}
