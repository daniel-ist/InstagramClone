import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  /* NOTA:                    ***************/
  /*** Pai emite para o filho (input);
  /*** Filho emite para o pai (output).  ****/

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    console.log('Chegamos aqui!');
    this.exibirPainel.emit('cadastro');
  }

}
