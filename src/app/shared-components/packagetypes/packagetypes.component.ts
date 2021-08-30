import { Component, OnInit } from '@angular/core';
import { MailSenderService } from 'src/app/services/mail-sender.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-packagetypes',
  templateUrl: './packagetypes.component.html',
  styleUrls: ['./packagetypes.component.scss']
})
export class PackagetypesComponent implements OnInit {
  packages = [
    {
      packagetype: "Basic",
      camera: "1 x CCTV camera",
      footage: "Local CCTV footage storage",
      centralmonitor: "NOT centrally monitored",
      price: "49$"
    },
    {
      packagetype: "Standart",
      camera: "2 x CCTV camera",
      footage: "Online and local CCTV footage storage",
      centralmonitor: "NOT centrally monitored",
      price: "59$"
    },
    {
      packagetype: "Deluxe",
      camera: "4 x CCTV camera",
      footage: "Local CCTV footage storage",
      centralmonitor: "Centrally monitored",
      price: "69$"
    }

  ]
  constructor(private mailSender: MailSenderService) { }

  ngOnInit(): void {
  }


  buyNowClick(packagetype: any) {
    Swal.fire({
      title: 'Enter your email',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Sent',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        this.mailSender.sendBuyNowEmail(login, packagetype).then(response => {
          return response;
        });
      }
    }).then((result) => {
      Swal.fire(
        'Hello',
        'Your message was sent successfully, support will contact soon :)',
        'success'
      )
    })
  }
}
