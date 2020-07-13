# Quarta feira KNEX e EXPRESS

### EXERCÍCIO 01

a) Quando usamos o raw estamos acessando o banco de dados e trazendo informações.

b) 
    async function getActorTable ():Promise<any>{
        try{
            const result = await connection.raw(`
                SELECT * FROM Actor WHERE name = "Isaac Martiniano";`
            )
            console.log(result[0])
            return result[0]
        } catch (error) {
            console.log(error)
        }
    }
    getActorTable()

c)
    async function getActorMale ():Promise<any>{
        try{
            const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "male";`
            )
            console.log(result[0])
            return result[0]
        } catch (error) {
            console.log(error)
        }
    }
    getActorMale()



    async function getActorFemale ():Promise<any>{
        try{
            const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "female";`
            )
            console.log(result[0])
            return result[0]
        } catch (error) {
            console.log(error)
        }
    }
    getActorFemale()


    


