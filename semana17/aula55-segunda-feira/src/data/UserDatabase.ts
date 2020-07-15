// import knex from "knex";
// import dotenv from "dotenv";

// dotenv.config();

// export class UserDatabase {
//   private connection = knex({
//     client: "mysql",
//     connection: {
//       host: process.env.DB_HOST,
//       port: 3306,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE_NAME,
//     },
//   });

// 	private static TABLE_NAME = "User";

//   public async createUser(
//     id: string,
//     email: string,
//     password: string
//   ): Promise<void> {
//     await this.connection
//       .insert({
//         id,
//         email,
//         password,
//       })
// 		.into(UserDatabase.TABLE_NAME);
//   }
// }

// export const createUser = async (id: string, email: string, password: string) => {
//     try{
//         await connection
//         .insert({
//             id,
//             email,
//             password
//         })
//         .into("User")
//         console.log("sucesso!")
//     } catch (error) {
//         console.log(error)
//     }
    
// };

// createUser("001", "isaac@gmail.com", "bananinha")

// export const getUsers = async (email: string): Promise<any> => {    
//     try{ 
//         const result =
//             await connection.raw(`
//                 SELECT * FROM User
//             `)
//             console.log(result[0][0])
//       return result[0][0]
      
//     } catch (error) {
//         console.log(error)
//     }
//   };

