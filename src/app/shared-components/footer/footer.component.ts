import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailSenderService } from 'src/app/services/mail-sender.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private mailSender:MailSenderService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.mailSender.sendriskyAssessmentEmail(form.value).then(response => {
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
