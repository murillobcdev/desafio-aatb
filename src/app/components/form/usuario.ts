export class Usuario {
    constructor(
        nome: string,
        email: string,
        cep: string,
        endereco: string,
        cidade: string,
        estado: string,
        enderecoNumero: string,
        complemento: string,
        mensagem: string
    ) {
        this.nome = nome;
        this.email = email;
        this.cep = cep;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.enderecoNumero = enderecoNumero;
        this.complemento = complemento;
        this.mensagem = mensagem;
    }
    nome: string;
    email: string;
    cep: string;
    endereco: string;
    cidade: string;
    estado: string;
    enderecoNumero: string;
    complemento: string;
    mensagem: string;
}