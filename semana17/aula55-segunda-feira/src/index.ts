import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./service/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";



/******************************************************************************************/
/******************************************************************************************/



const app = express();

app.use(express.json());

const idGenerator = new IdGenerator()

const generateId = idGenerator.generate();

//console.log(generateId)

const userTableName = UserDatabase;

/******************************************************************************************/
// CONEXÃO COM O BANCO
/******************************************************************************************/

const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });
  
/******************************************************************************************/
// FUNÇÃO PARA CRIAR USUÁRIOS
/******************************************************************************************/

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

createUser("001", "isaac@gmail.com", "bananinha")

const getUsers = async (email: string): Promise<any> => {    
    try{ 
        const result =
            await connection.raw(`
                SELECT * FROM User
            `)
            console.log(result[0][0])
      return result[0][0]
      
    } catch (error) {
        console.log(error)
    }
  };
getUsers("");

/******************************************************************************************/
/******************************************************************************************/
  
  
//   const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//       const address = server.address() as AddressInfo;
//       console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//       console.error(`Failure upon starting server.`);
//     }
//   });

  