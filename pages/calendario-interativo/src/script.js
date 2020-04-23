const calendario = '[{"data":{"dia":"18","mes":"jan"},"descricao":"Treino Livre Reencontro"},{"data":{"dia":"25","mes":"jan"},"descricao":"Treino Reciclagem/Ordem"},{"data":{"dia":"01","mes":"fev"},"descricao":"Treino Tático"},{"data":{"dia":"08","mes":"fev"},"descricao":"Treino de Ordem"},{"data":{"dia":"15","mes":"fev"},"descricao":"Treino Tático"},{"data":{"dia":"22","mes":"fev"},"descricao":"Treino de Ordem"},{"data":{"dia":"29","mes":"fev"},"descricao":"Treino Coerl para Fyrdman/Livre"},{"data":{"dia":"07","mes":"mar"},"descricao":"Treino Tático"},{"data":{"dia":"14","mes":"mar"},"descricao":"Treino de Ordem"},{"data":{"dia":"21","mes":"mar"},"descricao":"Treino Tático"},{"data":{"dia":"28","mes":"mar"},"descricao":"Treino Fyrdman para Reeve/Livre"},{"data":{"dia":"04","mes":"abr"},"descricao":"Treino Tático"},{"data":{"dia":"11","mes":"abr"},"descricao":"Treino Livre"},{"data":{"dia":"18","mes":"abr"},"descricao":"Treino de Ordem"},{"data":{"dia":"25","mes":"abr"},"descricao":"Treino Coerl para Fyrdman/Livre"},{"data":{"dia":"02","mes":"mai"},"descricao":"Treino Tático"},{"data":{"dia":"09","mes":"mai"},"descricao":"Treino de Ordem"},{"data":{"dia":"16","mes":"mai"},"descricao":"Treino Tático"},{"data":{"dia":"23","mes":"mai"},"descricao":"Treino de Ordem"},{"data":{"dia":"30","mes":"mai"},"descricao":"reino Livre"},{"data":{"dia":"06","mes":"jun"},"descricao":"Treino de Ordem"},{"data":{"dia":"13","mes":"jun"},"descricao":"Treino de Ordem"},{"data":{"dia":"20","mes":"jun"},"descricao":"Treino Fyrdman para Reeve/Livre"},{"data":{"dia":"27","mes":"jun"},"descricao":"Treino de Ordem (Regras EPS)"},{"data":{"dia":"04","mes":"jul"},"descricao":"Treino Tático"},{"data":{"dia":"11","mes":"jul"},"descricao":"Treino Tático"},{"data":{"dia":"18","mes":"jul"},"descricao":"Treino Tático"},{"data":{"dia":"25","mes":"jul"},"descricao":"Esquenta EPS"},{"data":{"dia":"01","mes":"ago"},"descricao":"Treino Feedback EPS"}]';

const arrCalendario = JSON.parse(calendario);
const MES = {
  LISTAMES : ["---","Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
  JANEIRO : {
    EXT:"Janeiro",
    NUM:"01",
    ABV:"jan"
  },
  
  FEVEREIRO : {
    EXT:"Fevereiro",
    NUM:"02",
    ABV:"fev"
  },
  
  MARCO : {
    EXT:"Março",
    NUM:"03",
    ABV:"mar"
  },
  
  ABRIL : {
    EXT:"Abril",
    NUM:"04",
    ABV:"abr"
  },
  
  MAIO : {
    EXT:"Maio",
    NUM:"05",
    ABV:"mai"
  },
  
  JUNHO : {
    EXT:"Junho",
    NUM:"06",
    ABV:"jun"
  },
  
  JULHO : {
    EXT:"Julho",
    NUM:"07",
    ABV:"jul"
  },
  
  AGOSTO : {
    EXT:"Agosto",
    NUM:"08",
    ABV:"ago"
  },
  
  SETEMBRO : {
    EXT:"Setembro",
    NUM:"09",
    ABV:"set"
  },
  
  OUTUBRO : {
    EXT:"Outubro",
    NUM:"10",
    ABV:"out"
  },
  
  NOVEMBRO : {
    EXT:"Novembro",
    NUM:"11",
    ABV:"nov"
  },
  
  DEZEMBRO : {
    EXT:"Dezembro",
    NUM:"12",
    ABV:"dez"
  }
}
const TREINO = {
  LISTATREINO : ["---", "Ordem","Tático", "Livre", "para Fyrdman", "para Reeve"],
  TATICO : "Tático",
  ORDEM : "Ordem",
  LIVRE : "Livre",
  PROMOCAO : {
    COERL : "Coerl",
    FYRDMAN : "Fyrdman",
    REEVE : "Reeve"
  }
}

class Data {
  constructor(dia, mes){
    this.dia = dia;
    this.mes = mes;
  }
  
  toString(){
    return `${this.dia}/${this.mes}`;
  }
  
  static parseDate(text){
    return text.split("/");
  }
}
class Evento {
  constructor(data, descricao){
    this.data = data;
    this.descricao = descricao;
  }
  
  toString(){
    return `Data:${this.data.toString()}\nDescrição:${this.descricao}`;
  }
  
  formatJSON(){
    return `{\n\t\"Data\":${this.data.toString()},\n\t\"Descricao\":${this.descricao}\n}`;
  }
}

function extrarDadosTabela(){
  const arrTr = document.getElementsByTagName("tr");
  let arrTd;
  const listEvents = [];
  for(let tr of arrTr){
    arrTd = tr.getElementsByTagName("td");
    arrDate = Data.parseDate(arrTd[0].innerText);
    let data = new Data(arrDate[0], arrDate[1]);
    let descricao = arrTd[1].innerText;
    let evento = new Evento(data, descricao);

    listEvents.push(evento);
  }

  console.log(listEvents);

  let txt_calendario = JSON.stringify(listEvents);
  console.log(txt_calendario);

  // const tam = listEvents.length;
  // for(let i = 0; i < tam; i++){
  //   if(i < tam - 1)
  //     txt_calendario += listEvents[i].formatJSON() + ",\n";
  //   else
  //     txt_calendario += listEvents[i].formatJSON();
    

 // for(let ev of listEvents){
 //   txt_calendario += ev.formatJSON() + ",";
 // }

}

function createTabela(arrCalendario){  
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  let i = 0;
  for(let evento of arrCalendario){
    let tr = document.createElement("tr");
    tr.setAttribute("id", ++i);
    evento["id"] = i;
    let data = document.createElement("td");
    let descricao = document.createElement("td");
    data.appendChild(document.createTextNode(evento.data.dia+"/"+evento.data.mes));
    descricao.appendChild(document.createTextNode(evento.descricao));
    tr.appendChild(data);
    tr.appendChild(descricao);
    table.appendChild(tr);
  }

  document.getElementById("table").appendChild(table); 
}

function createHeader(){
  const header = document.getElementById("header");
  const inputDia = document.createElement("input");
  inputDia.setAttribute("type", "number");
 inputDia.setAttribute("placeholder", "Dia");
  inputDia.setAttribute("min", "01");
  inputDia.setAttribute("max", "31")
  inputDia.setAttribute("id","inputDia");
  header.appendChild(inputDia);
  
  const selectMes = document.createElement("select");
  selectMes.setAttribute("id","selectMes");
  for(let i = 0; i < MES.LISTAMES.length; i++){
    let option = document.createElement("option");
    option.setAttribute("value", MES.LISTAMES[i]);
    let node = document.createTextNode(MES.LISTAMES[i]);
    option.appendChild(node);
    selectMes.appendChild(option);
  }
  header.appendChild(selectMes);
  

  
const select = document.createElement("select");
  select.setAttribute("id","selectTreino");
  for(let i = 0; i < TREINO.LISTATREINO.length; i++){
    let option = document.createElement("option");
    option.setAttribute("value", TREINO.LISTATREINO[i]);
    let node = document.createTextNode(TREINO.LISTATREINO[i]);
    option.appendChild(node);
    select.appendChild(option);
  }
  
  const button = document.createElement("button");
 button.appendChild(document.createTextNode("Pesquisar"));
button.addEventListener("click", templatePesquisa);
header.appendChild(select);
   header.appendChild(button);
}

function buscarPorDia(diaProcurado){
  if((diaProcurado < 1) || (diaProcurado > 31))
    return -1;
  
  resultId = [];
  for(let evento of arrCalendario){  
    console.log();
      if(evento.data.dia == diaProcurado){
        resultId.push(evento.id);
      }
  }
  return resultId;
}

function buscarPorMes(mesProcurado){
  
  if((mesProcurado == undefined) || (mesProcurado == ""))
    return "Erro de entrada";
  
  mesProcurado = mesProcurado.slice(0,3).toLowerCase();
  resultId = [];
  for(let evento of arrCalendario){    
      if(evento.data.mes == mesProcurado){
        resultId.push(evento.id);
      }
  }
  return resultId;
}

function buscarPorTreino(treinoProcurado){
  
  let idTreinosEncontrados = [];
  
  for(let evento of arrCalendario){
    if(evento.descricao.indexOf(treinoProcurado) != -1){
      idTreinosEncontrados.push(evento.id);
    }
  }
  return idTreinosEncontrados;
}

function addClass(idsElements, classe){
  console.log("tam "+idsElements.length);
  for(let i = 0; i < idsElements.length; i++){
    console.log("idAtual: "+ idsElements[i]);
    // document.getElementById(idsElements[i]).className += classe;
    document.getElementById(idsElements[i]).style.color = classe;
  }
}

function removeClass(idsElements, classe){
  for(let i = 0; i < idsElements.length; i++){
    // document.getElementById(idsElements[i]).classList.remove(classe);
    document.getElementById(idsElements[i]).style.color = "";
  }
}

function join(arr1, arr2){
  let arrResult = [], arrMaior, arrMenor;
  if(arr1.length < arr2.length){
    arrMenor = arr1;
    arrMaior = arr2;
  }else{
    arrMenor = arr2;
    arrMaior = arr1;
  }
  
  for(let i = 0; i < arrMenor.length; i++){
    if(arrMaior.indexOf(arrMenor[i]) > -1){
      arrResult.push(arrMenor[i]);
    }
  }
  
  return arrResult;
}

function buscar(){
 let dia, mes, treino;
 dia = document.getElementById("inputDia").value;
 mes = document.getElementById("selectMes").value;
 treino = document.getElementById("selectTreino").value;
 let idEncontrados = [];
 if(dia != ""){
   idEncontrados.push(buscarPorDia(dia));
 }
 
 if(mes != "---"){
   idEncontrados.push(buscarPorMes(mes));
 }
  
 if(treino != "---"){
   idEncontrados.push(buscarPorTreino(treino));
 }
 
 console.log("antes: " + idEncontrados);
 for(let i = 0; i < idEncontrados.length - 1; i++){
   idEncontrados[i+1] = join(idEncontrados[i], idEncontrados[i+1]);  
 }
 return idEncontrados[idEncontrados.length-1];
}

function nextTrain(){
  let nextTrainFound = false;
  let date = new Date(Date.now());
  let diaAtual = date.getDate();
  let mesAtual = date.getMonth()+1;
  let arrTreinosDoMes;
  let mesPorExtenso;
  do{
    do{
      mesPorExtenso = MES.LISTAMES[mesAtual];
      arrTreinosDoMes = buscarPorMes(mesPorExtenso);
      mesAtual++;
    }while(arrTreinosDoMes.length == 0);
    
    for(let i = 0; i < arrTreinosDoMes.length; i++){      
      let diaTreino = document.getElementById(arrTreinosDoMes[i]);
      diaTreino = diaTreino.getElementsByTagName("td")[0].innerText;
      diaTreino = diaTreino.split("/");
      diaTreino = diaTreino[0];
      diaTreino = parseInt(diaTreino);
      if(diaAtual <= diaTreino){
        console.log(`Encontrado ${diaTreino}/id: ${arrTreinosDoMes[i]}`);
        addClass([arrTreinosDoMes[i]], "green");
        nextTrainFound = true;    
        break;
      }
    }    
  }while(nextTrainFound == false);
}

function irParaItemProcurado(id){
  let itemProcurado = document.getElementById(id);
  console.log("table: " + table.scrollTop);
  console.log("itemPRocurado: " + itemProcurado.offsetTop);
  window.scrollTo(0, itemProcurado.offsetTop);  
}

createTabela(arrCalendario);
createHeader();

let arrBuscaAnterior = [];
function templatePesquisa(){
  if(arrBuscaAnterior.length > 0){
    removeClass(arrBuscaAnterior, "padrao");
  }
  
  let idEncontrados = buscar();
  addClass(idEncontrados, "red");
  arrBuscaAnterior = idEncontrados;
  irParaItemProcurado(idEncontrados[0]);
}
nextTrain();