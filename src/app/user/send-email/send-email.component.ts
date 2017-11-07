import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  validateForm: FormGroup;
  _displayData: Array<any> = [];
  _dataSet = [];
  _current = 1;

  _displayDataChange($event) {
    this._displayData = $event;
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
  }

  constructor(private fb: FormBuilder) {
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        expand: false,
        sendStyle: Math.ceil(Math.random() * 2),
        sendClass: Math.ceil(Math.random() * 2),
        sender: 'service@eu-ex.com',
        recipient: 'service@eu-ex.com',
        subject: '[E.U Express] Find Password',
        content: 'Please click this link and reset your password.The link is valid for ten minutes.\n' +
        ' &lt;a href=http://www.eu-ex.com/User/ResetPwd?query=ZGVuZ2FpcWluNzFAZ21haWwuY29t&operate=MTQ5OTAxNTE4OQ==>\n' +
        'http://www.eu-ex.com/User/ResetPwd?query=ZGVuZ2FpcWluNzFAZ21haWwuY29t&operate=MTQ5OTAxNTE4OQ==',
        attachment: !(Math.random() > 0.5),
        time: new Date(),
        status: !(Math.random() > 0.5)
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: ''
    });
  }
}
