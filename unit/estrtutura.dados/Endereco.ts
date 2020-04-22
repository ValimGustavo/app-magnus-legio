import { Cidade } from "./Cidade"

export class Endereco {
  private rua: string;
  private bairro: string;
  private numero: string;
  private complemento: string;  
  private cidade: Cidade
  constructor(
    rua,
    bairro,
    numero,
    complemento?
  ){}
}