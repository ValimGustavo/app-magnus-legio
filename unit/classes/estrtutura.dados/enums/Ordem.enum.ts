enum Ordem {
  UNICA = "UNICA",
  DUAL = "DUAL",
  LANCA = "LANCA",
  ESCUDO = "ESCUDO",
  ARCO = "ARCO"
}

class Nivel_pericia {
  BASICO = 'BASICO';
   TATICO: {
    INFILTRACAO:'INFILTRACAO',
    FORMACAO: 'FORMAÇÃO'
  };
  AVANCADO = 'AVANÇADO';
}

export { Ordem, Nivel_pericia}