import * as fs from 'fs'

// Aula 45 - Node e package.json
// Exercício 03
// Crie uma aplicação Node que receba uma string representando
//  o **nome do arquivo da lista de tarefas** e uma string representando **uma nova tarefa**, 
//  em seguida o programa deve adicionar a **nova tarefa** em um arquivo que tenha
//   **o nome da lista de tarefas.** Para isso, crie um arquivo chamado `tarefas.txt`

const nameOfArquivo: string = (process.argv[2])
const task: string= (process.argv[3])
fs.appendFileSync(nameOfArquivo, task);
