export class Produto{
    id: number;
    nome: string;
    categoria: string;
    quantidade: number;
    preco_unitario: number;

    constructor(
        id:number, 
        nome: string, 
        categoria: string, 
        quantidade:number,
        preco_unitario: number){
        
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.preco_unitario = preco_unitario;
    }
}