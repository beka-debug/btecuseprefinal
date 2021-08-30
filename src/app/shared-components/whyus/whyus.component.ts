import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent implements OnInit {

  whyuslist = [
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"24/7/365 Support",
     description:"Here will be desciption about support"
    },
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"Affordable Rates",
     description:"Here will be desciption about Affordable rates"
    },
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"24/7/365 Trustworthy",
     description:"Here will be desciption about Trustworthy"
    },
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"Different Range",
     description:"Here will be desciption about Different Range"
    },
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"Reliable and Proven",
     description:"Here will be desciption about support"
    },
    {icon:"https://www.transparentpng.com/thumb/time/desktop-blue--alarm-clock-time-pictures-10.png",
     title:"Experts and Staff",
     description:"Here will be desciption about Experts and Staff"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
