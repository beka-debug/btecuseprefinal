import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailSenderService } from 'src/app/services/mail-sender.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  providers:[MailSenderService]
})
export class CustomComponent implements OnInit {

  constructor(private mailSender:MailSenderService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    this.mailSender.sendSecurityNeedsEmail(form.value).then(response => {
      form.reset();
      Swal.fire(
        'Hello',
        'Your message was sent successfully, support will contact soon :)',
        'success'
      )
    })
    console.log(form.value);
  }
}
