import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-70px, 0px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ]),

    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(70px, 0px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

   /* NOTA:                    ***************/
  /*** Pai emite para o filho (input);
  /*** Filho emite para o pai (output).  ****/

  public estadoBanner = 'criado';
  public estadoPainel = 'criado';

  public cadastro = false;


  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }
}
