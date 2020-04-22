import { Data } from "../estrtutura.dados/Data";
import { Pessoa } from './estrtutura.dados/Pessoa.class'
import { Patente } from '../enums/Patente.enum'



export class Swordplay {
  private pessoa: Pessoa;
  private data_entrada: Data;
  private data_saida: Data;

  private patente: Patente;
  private pericias:[];

  
  constructor(pessoa){
    this.pessoa = pessoa;
  }

}