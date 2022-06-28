var pessoa = { id: "001", nome: "Maria", Ativo: true, idade: 35, exibeNome : function()
  {
          return this.nome + " " + this.idade;
   }
 };
  console.log(pessoa.exibeNome());