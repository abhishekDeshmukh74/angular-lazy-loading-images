import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  images = [
    {
      bio: "Sheldon Lee Cooper is a fictional character in the CBS television series The Big Bang Theory and its spinoff series Young Sheldon, portrayed by actors Jim Parsons in The Big Bang Theory and Iain Armitage in Young Sheldon (with Parsons as the latter series' narrator). For his portrayal, Parsons has won four Primetime Emmy Awards, a Golden Globe Award, a TCA Award, and two Critics' Choice Television Awards.",
      url: 'assets/sheldon.png',
      shown: false
    },
    {
      bio: 'Penny is a fictional character on the American CBS sitcom The Big Bang Theory, portrayed by actress Kaley Cuoco. She is the primary female character in the series, befriending her across-the-hall neighbors Leonard Hofstadter (Johnny Galecki) and Sheldon Cooper (Jim Parsons)',
      url: 'assets/penny.jpg',
      shown: false


    },
    {
      bio: 'Melissa Ivy Rauch (born June 23, 1980) is an American actress. She is known for playing Bernadette Rostenkowski-Wolowitz on the CBS sitcom The Big Bang Theory for which she garnered a nomination for the Critics Choice Television Award for Best Supporting Actress in a Comedy Series in 2013.',
      url: 'assets/bernadette.jpeg',
      shown: false

    },
    {
      bio: 'Rajesh Ramayan Koothrappali,[1] Ph.D. is a fictional character on the CBS television series The Big Bang Theory, portrayed by British Indian actor Kunal Nayyar. Raj is based on a computer programmer that the shows co-creator, Bill Prady, knew back when he himself was a programmer.',
      url: 'assets/raj.jpg',
      shown: false

    },
  ];

  get totalImagesShown(): number {
    return (this.images.filter(image => image.shown) || []).length;
  }

}
