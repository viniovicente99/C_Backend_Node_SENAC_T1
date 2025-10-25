let pessoa = {
    nome: 'Cleiton',
    dataNasc: new Date(1997, 11, 2, 7, 30).toLocaleString('pt-br'),
    altura: 1.73,
    peso: 87,
    senha: "123a",
    idade: 28,
    
    maiorDeIdade(){
        return this.idade >= 18
    },
    apresentar(){
        return 'Olá eu me chamo ' + this.nome + ' tenho ' + this.idade + ' anos'
    }
}

console.log(pessoa);
console.log(pessoa.maiorDeIdade());
console.log(pessoa.apresentar());
