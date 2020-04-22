export class Contato {
  private telefone_fixo: numero_contato;
  private celular: numero_contato;
  private email: string;

  constructor(
    celular?,
    email?,
    telefone_fixo?
  ){}

}


class numero_contato {
  private ddd: string;
  private numero: string;

  constructor(
    ddd,
    numero
  ){}
} 