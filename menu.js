//prompt-sync npm i prompt-sync
import PromptSync, { } from "prompt-sync";
let prompt = PromptSync();


class Pessoa {

    //atributo privado
    #senha;

    //constructor constrói mais de um objeto
    //para inserir os valores de cada objeto colocamos via parametro
    constructor(nome, idade, dataNasc, senha){
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString('pt-BR') //ISSO SÃO PROPRIEDADES DO OBJETO COM OS VALORES
        this.#senha = senha     

    }

    exibeSenha(){
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
        let verificarSenha = prompt("Digite novamente sua data de nascimento para ver a senha: (AAAA/MM/DD) ");
        verificarSenha == dataNascPessoa?console.log(`Sua seeha é: ${senhaPessoa}`):console.log("Data de nascimento errada.");
    }

    get senha(){

    }

}


class Aluno extends Pessoa{ //Herança: extends da classe pai e o super com as chaves
    constructor(nome, dataNasc, senha, RA,){ //o RA aqui é o valor que vai ser colocado
        super(nome, dataNasc, senha); 
        this.RA = RA //o RA aqui é a chave um é = a outro  (this = chaves depois do = : valores)
        
        
}

apresentar(){
    console.log(`Olá sou o Professor(a) ${this.nome} e meu registro é ${this.registro}`);
    
}

};

class Professor extends Pessoa { //Herança: extends da classe pai e o super com as chaves
    constructor(nome, dataNasc, senha, registro, salario){
        super(nome, dataNasc, senha)
        this.registro = registro
        this.salario = salario
        
}
//polimorfismo
//sobrescrita - override
//sobrecarga - overload
apresentar(){
    console.log(`Olá sou o Professor(a) ${this.nome} e meu R.A é ${this.registro}`);
    
}

};






let professorOuAluno = parseInt(prompt("Digite 1 para professor ou 2 para aluno: "))

let novaPessoa;


let nomePessoa = prompt("Digite o seu nome: ");
let dataNascPessoa = prompt("Digite sua data de nascimento: (AAAA/MM/DD) ");
let senhaPessoa = prompt("Digite sua senha: ");

if(professorOuAluno === 2){
    let raAluno = prompt("Digite seu R.A.: ");
    //herança
    novaPessoa = new Aluno(
        nomePessoa,
        dataNascPessoa,
        senhaPessoa,
        raAluno
    )

} else if(professorOuAluno === 1){
    let salarioProfessor = prompt("Digite seu salario: ");
    let registroProfessor = prompt("Digite seu registro: ");
    //herança
    novaPessoa = new Professor(
        nomePessoa,
        dataNascPessoa,
        senhaPessoa,
        salarioProfessor,
        registroProfessor
    )

} else{
    console.log("Opção inválida.")
}



console.log(novaPessoa)

//criando o objeto nome técnico: instância
/*const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa
);*/

//aciona a função do objeto ja criado
//novaPessoa.exibeSenha();






