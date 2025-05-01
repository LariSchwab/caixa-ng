export class Produto{
    id: number;
    nome: string;
    categoria: string;
    quantidade: number;

    constructor(id:number, nome: string, categoria: string, quantidade:number){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
    }
}