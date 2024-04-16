class guerreiro {
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade 
    this.tipo = tipo
    }
    atacar(){
        if ( guerreiro1.tipo === "ninja")
        console.log(`o ${this.tipo} atacou usando shuriken`)
        else if ( guerreiro1.tipo === "mago")
        console.log(`o ${this.tipo} atacou usando magia`)
        else if ( guerreiro1.tipo === "guerreiro")
        console.log(`o ${this.tipo} atacou usando espada`)
        else if ( guerreiro1.tipo === "monge")
        console.log(`o ${this.tipo} atacou usando artes marciais`)
        
    } 
    
}
let guerreiro1 =  new guerreiro ("fees", 20, "mago")
guerreiro1.atacar()