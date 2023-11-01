import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas = [
    { descricao: 'Dashboard BI', concluida: true },
    { descricao: 'Apresentação MPN', concluida: false },
    { descricao: 'Tarefa calculadora', concluida: false },
    { descricao: 'Tarefa tela de login', concluida: true },
    { descricao: 'Tarefa conta bancária', concluida: false }
  ];

  checkTarefa(tarefa: { concluida: boolean; }) {
    tarefa.concluida = !tarefa.concluida;
  }
}
