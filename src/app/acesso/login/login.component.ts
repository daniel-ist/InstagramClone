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

  @Output() public exibirPainel2: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel2.emit('cadastro');
  }

}
