# Criptografia e User Roles


### EXERCÍCIO 01 

**A)** rounds define a quantidades de vezes que vai rodar o processo que será usado no salt que quando gerado cria o hash

**B)** import * as bcrypt from "bcryptjs"

export default class HashManager {
    public async hash(text: string): Promise<string>{
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds)
        const cipherText = await bcrypt.hash(text, salt)

        return cipherText
    }
**C)**
    public async compare(text: string, cipherText: string):Promise<boolean> {
        const result = await bcrypt.compare(text, cipherText)

        return result
    }
}

### EXERCÍCIO 02 

**A)** O primeiro a ser modificado deve ser o cadastro pois na primeira passagem de dados ja deverá ser criptografados.

## AS DEMAIS IMPLEMENTAÇÕES DA ATIVIDADE DA TARDE DO **EX 02** AO **EX 07** FORAM ADICIONADAS NOS ARQUIVOS
