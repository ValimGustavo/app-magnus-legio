import { Ordem, Nivel_pericia } from "../estrtutura.dados/enums/Ordem.enum";

export class Patente {
  constructor(
      private ordem: Ordem,
      private nivel_pericia: Nivel_pericia
    ){}
}