import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';
  mensagem: string = '';

  cadastrarAluno() {
    if (this.ra && this.nome && this.email && this.celular) {
      this.mensagem = `Aluno cadastrado com sucesso: \n RA: ${this.ra}, Nome: ${this.nome}, Email: ${this.email}, Celular: ${this.celular}`;
    } else {
      this.mensagem = 'Erro: todos os campos são obrigatórios';
    }
  }
}
