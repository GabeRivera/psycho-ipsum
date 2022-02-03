import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lorem-gen';

  ngOnInit(): void {
    console.log(`No, I'm not going to offer you a job because you opened the console, but I do have something to tell you:`)
    console.log(`%c    American psycho is a critique of a new kind of man that arose with the neoliberalization
    of the world capitalist economy around the writing of the book the film is based on.
    This is the type of person that makes up the top echelons of business and government.
    It is time for workers to unite, for it is only united that we can take that which
    we have created and is rightfully ours.`, 'background: #222; color: #bada55');
    console.log(`%c EDUCATE, AGITATE, ORGANIZE!`, 'background: red; color: white');
    console.log(`%c UNIONIZE!`, 'background: red; color: white');
  }
}
