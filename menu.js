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
        this.dataNasc = new Date(dataNasc).toLocaleString('pt-BR')
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

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = parseInt(prompt("Digite sua idade: "))
let dataNascPessoa = prompt("Digite sua data de nascimento: (AAAA/MM/DD) ");
let senhaPessoa = prompt("Digite sua senha: ");


//criando o objeto
const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa
);

//aciona a função do objeto ja criado
novaPessoa.exibeSenha();





