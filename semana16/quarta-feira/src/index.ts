import knex from 'knex'
import dotenv from "dotenv";
import express, { Request, Response } from 'express'
import { AddressInfo } from "net"



/*************************************************************************************/

dotenv.config();//pega os dados confidenciais SENHA

/*************************************************************************************/

const connection = knex({ //Estabelece conexão com o banco
    client: "mysql",
    connection:{
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});



/*************************************************************************************/

const app = express()

app.use(express.json())

/*************************************************************************************/

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
//getActorTable()

/*************************************************************************************/


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
/*************************************************************************************/


const countActors = async (gender: string): Promise<any> => {    
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);   
        const count = result[0][0].count;
        return count;  }
//countActors("female")

/*************************************************************************************/

async function insertNewActor(id: string, name: string, salary: number, birth_date: string, gender: string):Promise<void>{
    try{
        await connection.raw(`
        
            INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(
                "${id}",
                "${name}",
                ${salary},
                "${birth_date}",
                "${gender}"
            );
        `)
        console.log("sucesso!")
    } catch (error) {
        console.log(error)
    }
}
//insertNewActor("008", "Paulo Jalaska", 100000, "1978-11-24", "male")
/*************************************************************************************/
async function insertActorNew(newId: string, newName: string, newSalary: number, newBirth_date: string, newGender: string):Promise<void>{
    try{
        await connection
            .insert({
                id: newId,
                name: newName,
                salary: newSalary,
                birth_date: newBirth_date,
                gender: newGender
            })
            .into("Actor")        
            console.log("sucesso!")
    } catch (error) {
        console.log(error)
    }
}
//insertActorNew("009", "Saraiva", 200000, "1968-12-25", "male")
/*************************************************************************************/
async function searchActorOption2(name: string): Promise<any>{
    try {
        const result = await connection
            .select("*")
            .from("Actor")
            .where("name", "LIKE", `%${name}%`)
            console.log(result)

            return result
    } catch (error) {
        console.log(error)
    }
}
//searchActorOption2("aa")
/*************************************************************************************/

const getActorById = async (id: string): Promise<any> => {    
    try{ 
        const result =
            await connection.raw(`
                SELECT * FROM Actor WHERE id = '${id}'
            `)  
      return result[0][0]
    } catch (error) {
        console.log(error)
    }
  };
//getActorById()
/*************************************************************************************/

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor 
    `)
    return result[0]
  }
/*************************************************************************************/
/*************************************************************************************/

// app.get('/actor', async function(req: Request ,res: Response){
    // try {
        // const actors = await searchActor(
            // req.query.name as string
        // )
// 
        // res.status(200).send({
            // message: "Sucesso!",
            // actors
        // })
    // } catch (error) {
        // console.log(error)
// 
        // res.status(400).send({message: error.message})
    // }
// })
// 
// const server = app.listen(process.env.PORT || 3000, () => {
    // if (server) {
        // const address = server.address() as AddressInfo;
        // console.log(`Server in running in http://localhost: ${address.port}`)
    // } else {
        // console.error(`Failure upon strarting server.`)
    // }
// })