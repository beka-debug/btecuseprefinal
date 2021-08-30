import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  constructor() { }

  generateEmailMessage(data:any):string {
    var propertyNames = Object.getOwnPropertyNames(data);
    var message = "";
    propertyNames.forEach(item => {
      if(data[item])
        message += `${item} , `;
    });

    console.log(message);
    return message;
  }

  sendSecurityNeedsEmail(data: any):Promise<EmailJSResponseStatus>{
    var sms = {
      from_name: `name : ${data.customerName}, email : ${data.emailAddress}, phone number : ${data.phoneNumber}, company name : ${data.companyName}`,
      to_name:this.generateEmailMessage(data.customerNeeds),
      message:data.message
    };
    
    return emailjs.send(
      'service_7vzet0f',
      'template_vckwueh',
      sms,
      'user_Bb3EPgsgsIHRTbvbGB0Do'
    );
  }

  sendriskyAssessmentEmail(data: any):Promise<EmailJSResponseStatus>{
    var sms = {
      from_name: `${data.name}`,
      to_name:`country : ${data.country}, mobile : ${data.mobile}, address : ${data.address}`,
      message:data.message
    };
    
    return emailjs.send(
      'service_7vzet0f',
      'template_5u4jm8m',
      sms,
      'user_Bb3EPgsgsIHRTbvbGB0Do'
    );
  }

  sendBuyNowEmail(mail: any,packagetype:any):Promise<EmailJSResponseStatus>{
    var sms = {
      from_name: mail,
      to_name:packagetype,
      message:"Buy Now"
    };
    
    return emailjs.send(
      'service_7vzet0f',
      'template_vckwueh',
      sms,
      'user_Bb3EPgsgsIHRTbvbGB0Do'
    );
  }
}
