import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://m.media-amazon.com/images/I/71Bj7KemwsS._AC_SL1500_.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://www.batna24.com/img/500/329790_1.jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'data:image/jpeg;base64,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'

    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://media.istockphoto.com/photos/security-cctv-camera-in-office-building-picture-id1182191821?k=6&m=1182191821&s=612x612&w=0&h=aRwK3rjK3M82O2xV8JT7HSy4rCuG9JWWlL8fxiljKUw='
    },
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://www.usnews.com/dims4/USNEWS/44ce15f/2147483647/resize/640x/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F44%2Ffc%2Fcfeb4daf4839aeb5c5af1d0d2b63%2F200625-securitycameras-mainimage-stock.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i5.walmartimages.com/asr/0e960aee-78bb-4c2b-abc9-fac1ff652c02_1.81a80490277d114b7b3434a47ed2a8c0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://i.shgcdn.com/290a7f94-5571-4681-97d0-328227596796/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://www.nozominetworks.com/wp-content/uploads/2021/01/Reolink-P2P-Vulnerabilities-BLOG.jpg'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
