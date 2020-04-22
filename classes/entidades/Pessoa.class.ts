import { Data } from "../estrtutura.dados/Data";
import { Endereco } from "../estrtutura.dados/Endereco";
import { Contato } from "../estrtutura.dados/Contato";

export class Pessoa {
    private nome: string;
    private data_nascimento: Data;
    private endereco: Endereco;
    private contato: Contato; //telefone, celular, email

    constructor(
      nome,
      data_nascimento,
      endereco,
      contato
    ){
      this.nome = nome;
      this.data_nascimento = data_nascimento;
      this.endereco = endereco;
      this.contato = contato;
    }
}

