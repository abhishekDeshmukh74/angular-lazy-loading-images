import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public images = [
    {
      bio: "Sheldon Lee Cooper is a fictional character in the CBS television series The Big Bang Theory and its spinoff series Young Sheldon, portrayed by actors Jim Parsons in The Big Bang Theory and Iain Armitage in Young Sheldon (with Parsons as the latter series' narrator). For his portrayal, Parsons has won four Primetime Emmy Awards, a Golden Globe Award, a TCA Award, and two Critics' Choice Television Awards.",
      url: 'assets/sheldon.png',
      name: 'Sheldon Cooper',
      shown: false
    },
    {
      bio: 'Penny is a fictional character on the American CBS sitcom The Big Bang Theory, portrayed by actress Kaley Cuoco. She is the primary female character in the series, befriending her across-the-hall neighbors Leonard Hofstadter (Johnny Galecki) and Sheldon Cooper (Jim Parsons)',
      url: 'assets/penny.jpg',
      name: 'Penny nosurname',
      shown: false
    },
    {
      bio: 'Melissa Ivy Rauch (born June 23, 1980) is an American actress. She is known for playing Bernadette Rostenkowski-Wolowitz on the CBS sitcom The Big Bang Theory for which she garnered a nomination for the Critics Choice Television Award for Best Supporting Actress in a Comedy Series in 2013.',
      url: 'assets/bernadette.jpeg',
      name: 'Bernadette Rostenkowski-Wolowitz',
      shown: false
    },
    {
      bio: 'Rajesh Ramayan Koothrappali,[1] Ph.D. is a fictional character on the CBS television series The Big Bang Theory, portrayed by British Indian actor Kunal Nayyar. Raj is based on a computer programmer that the shows co-creator, Bill Prady, knew back when he himself was a programmer.',
      url: 'assets/raj.jpg',
      name: 'Rajesh Koothrappali',
      shown: false
    },
    {
      bio: 'Howard Joel Wolowitz,[1] M.Eng. is a fictional character on the CBS television series The Big Bang Theory, portrayed by actor Simon Helberg. Among the main male characters in the show, Howard is distinctive for being an engineer rather than a physicist and lacking a doctoral degree. Howard is named after and based on a computer programmer known by the shows co-creator Bill Prady.[2] Howard is the only starring character who has been to the International Space Station.',
      url: 'assets/Howard.webp',
      name: 'Howard Wolowitz',
      shown: false
    },
    {
      bio: 'Amy Farrah Fowler is a fictional character in The Big Bang Theory, portrayed by Mayim Bialik. Amy is a neuroscientist and Sheldons love interest in the series. She has a PhD in neurobiology (Bialik herself has a PhD in neuroscience), with a research focus on addiction in primates and invertebrates, occasionally mentioning such experiments as getting a capuchin monkey addicted to cigarettes or starfish addicted to cocaine.',
      url: 'assets/amy.jpg',
      name: 'Amy Fowler',
      shown: false
    },
  ];

  get totalImagesShown(): number {
    return (this.images.filter(image => image.shown) || []).length;
  }

}
