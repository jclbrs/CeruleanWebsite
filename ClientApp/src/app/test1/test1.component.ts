import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),

    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),

    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])

  ],
})
export class Test1Component implements OnInit{
  isOpen = true;
  currentState = 'initial';

  constructor(private animationBuilder: AnimationBuilder) { }


  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  changeState() {
    this.currentState = this.currentState == 'initial' ? 'final' : 'initial';
  }

  rotationState: string = 'default';

  rotate() {
    this.rotationState = (this.rotationState === 'default' ? 'rotated' : 'default');
  }

  left = 0;

  onMove(element: any) {
    const animation = this.animationBuilder.build([
      style({
        transform: `translateX(-${this.left}px)`
      }),
      animate(500, style({
        transform: `translateX(-${this.left + 100}px)`
      }))
    ]);

    const player = animation.create(element);
    player.play();
    this.left += 100;
  }

}

