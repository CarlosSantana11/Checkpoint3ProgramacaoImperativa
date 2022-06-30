function turma(nome,quantidadeFaltas,notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;

    this.calculaMedia = function(){
        let array = this.notas;
        let media = array.reduce((a, b) => (a + b)) / array.length;
        return media;
    }

    this.faltas = function(){
        return this.quantidadeFaltas += 1;
    }
}

let daniela = new turma("Daniela Arruda", 2, [3,4,6]);

console.log(daniela);

let danielaMedia = daniela.calculaMedia();

console.log(danielaMedia);


const camila = new turma(
    "Carlos Santana",
    1,
   [9,8,9]
);

const liliane = new turma(
    "Surian Nakata",
    0,
   [10,10,9]
);

const listaAlunos = [daniela,camila,liliane];

let curso = {
    nomeDoCurso: "CTD",
    notaDeAprovacao: 6,
    faltasMaximas: 5,
    listaAlunos: listaAlunos,

    adicionarAluno(nome,quantidadeFaltas,notas){
        let aluno = new turma(nome,quantidadeFaltas,notas);
        this.listaAlunos.push(aluno);
    },

    verificaAprovacaoIndividual(estudante){
        let media = estudante.calculaMedia();
        let mediaComAjuste = this.notaAprovacao + this.notaAprovacao *0.10;

        if(media >= this.notaDeAprovacao && estudante.quantidadeFaltas < this.faltasMaximas){
            return true
        } else if ((media >= mediaComAjuste) && estudante.quantidadeFaltas == this.faltasMaximas){
            return true
        } else {
            return false
        }
    },

    verificaAprovacaoColetiva(){
        let resultado = [];
        for (let i = 0; i < this.listaAlunos.length; i++){
            resultado.push(this.verificaAprovacaoIndividual(this.listaAlunos[i]));
        }
        return resultado
    }
};

let aprovacaoGeral = curso.verificaAprovacaoColetiva();
console.log(aprovacaoGeral);

const adicionarEstudante = curso.adicionarAluno("Surian Nakata", 4, [8,9,9]);
console.log(listaAlunos);

let verificaAprovacao = curso.verificaAprovacaoIndividual(daniela);
console.log(aprovacaoGeral);