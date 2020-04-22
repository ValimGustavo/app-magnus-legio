import { Ordem, Nivel_pericia } from "../estrtutura.dados/enums/Ordem.enum";


export class Equipamento {
 
 private

  constructor(
    private nome:string,
    private tipo:Ordem,
    private descricao:string,
    private nivel_pericia: Nivel_pericia,
    private padrao?:[]
  ){}
}