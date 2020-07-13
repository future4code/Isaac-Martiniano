# Aula 55 Introdução a Autenticação

### EXERCÍCIO 01

**a**. Usar strings para representar os ids é melhor que usar números,
 pois tem um aumenta signficativo do nível de segurança e diminue muito o número de colisão.

**b**. Pasca Criada, Classe criada com o método público.

### EXERCÍCIO 02

**a**. Criada uma const para receber a tabela **User**
    Feito uma conexão com o banco atravez do **knex** passando as informações de acesso.
    Criada uma const que vai criar novos usuários

**b**. Query criada

    CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

**c**. Query de usuario criada

    const createUser = async (id: string, email: string, password: string) => {
        try{
            await connection
            .insert({
                id,
                email,
                password
            })
            .into(userTableName)
            console.log("sucesso!")
        } catch (error) {
            console.log(error)
        }
    };


**d**    
RowDataPacket { id: '001', email: 'isaac@gmail.com', password: 'bananinha' }



