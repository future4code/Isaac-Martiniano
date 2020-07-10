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

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server in running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon strarting server.`)
    }
});

const newUser = async (
    id: string,
    name: string,    
    email: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            email: email
        })
        .into("TodoListUser");
        console.log("sucesso")
};

app.put("/user", async (req: Request, res: Response) => {
    try {
        await newUser(
            req.body.id,
            req.body.name,
            req.body.email
        );
        res.status(200).send();
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

