import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";

// EXERCÍCIO DA TARDE

// EXERCÍCIO 01

// LETRA A
// Endpoint de pegar os assinantes

 axios.get(`${baseUrl}subscribers/all`)
     .then(res => {
        console.log(res.data)
    })

// LETRA B
// Para criar uma função assíncrona que retorna um array poderia usar esse modelo

// const getAllSubscribers = async (): Promise<Subscriber[]> => {
//     const subscribersResult = await axios.get(`${baseUrl}subscribers/all`)
//     return subscribersResult.data.map((res: any) => {
//         return {
//             id: res.id,
//             name: res.name,
//             email: res.email
//         }
//     })
// }

// LETRA C
// Implemente uma função nomeada que faça o que foi pedido.

// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };


// EXERCÍCIO 2 
// LETRA A 
// Uma arrow function recebe o async junto do parâmetro, e uma function async é declarada antes de tudo

// LETRA B
// const getAllSubscribers = async (): Promise<Subscriber[]> => {
//     const subscribersResult = await axios.get(`${baseUrl}subscribers/all`)
//     return subscribersResult.data.map((res: any) => {
//         return {
//             id: res.id,
//             name: res.name,
//             email: res.email
//         }
//     })
// }











//PARTE QUE FALTA ORGANIZAR






// Criar cadastro

// axios.put(`${baseUrl}subscribers`, {
//     name: "Isaac Martiniano",
//     email: "isaac@labenu.com.br"
// })
// .then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err)
// })    






// ENVIANDO UMA MENSAGEM COM TITULO E CONTEUDO PARA TODOS ASSINANTES, MAS FICOU MUITO VERBOROSO
// MAIS ABAIXO TERÁ ALTERNATIVAS MAIS CLEAR

// axios.put(`${baseUrl}news`, {
//     "title": "Olá Julian bem vindo ao Backend",
// 	"content": "Para a alegria de muitos, e a tristeza de alguns, a turma Julian coda até debaixo d'agua!",
// 	"date": 1592833834000
// })
// .then(res => {
//     console.log("Notícia criada com sucesso")
//     //um GET em todos usuarios, para confimar que vou enviada 
//     axios.get(`${baseUrl}subscribers/all`)
//         .then(res => {
//             const subscribers = res.data
//             for( const subscriber of subscribers) {
//                 axios.post(`${baseUrl}notifications/send`, {
//                     subscriberId: subscriber.id,
//                     message: "O júlian chegou no Backend"
//                 }).then(res => {
//                     console.log("A noticifação foi enviada com sucesso")
//                 }).catch(err => {
//                     console.log(err)
//                 })
//             }
//         }).catch(err => {
//             console.log(err)
//         })
// }).catch(err => {
//     console.log(err)
// })    






//async, await, Promise
// VERSÃO MAIS CLEAR DO CÓDIGO ACIMA, AGORA MENOS VERBOSO USANDO ASYNC AWAIT

// const main = async () => {
//     await axios.put(`${baseUrl}news`, {
//         title: "Olá Julian bem vindo ao Backend",
//         content: "Para a alegria de muitos, e a tristeza de alguns, a turma Julian coda até debaixo d'agua!",
//         date: 1592833834000
//     })

//     console.log("Notícia Criada com sucesso")

//     const subscribers = await axios.get(`${baseUrl}subscribers/all`)
//     console.log(subscribers.data)
// }
// main();







async function createNews(title: string, content: string, date: number): Promise<void>{
    await axios.put(`${baseUrl}news`, {
        title,
        content,
        date
    });
}

const getSubscribersQuantity = async (): Promise<number> => {
    const subscribers = await axios.get(`${baseUrl}subscribers/all`)
    return subscribers.data.length
}


type Subscriber = {
    id: string,
    name: string,
    email: string
}

const getAllSubscribers = async (): Promise<Subscriber[]> => {
    const subscribersResult = await axios.get(`${baseUrl}subscribers/all`)
    return subscribersResult.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const sendNotification = async (subscriber: Subscriber, message:string): Promise<void> => {
    console.log("Começando a enviar uma notificação para: ", subscriber.name)
    await axios.post(`${baseUrl}notifications/send`, {
        subscriberId: subscriber.id,
        message,
    })
    console.log("Terminei de enviar a notificação para: ", subscriber.name)
}


const getAllNotifications = async (): Promise<any> => {
    const subscribers = await getAllSubscribers()
    const notifications = [];
    for(const subscriber of subscribers) {
    notifications.push(await axios.get(`${baseUrl}subscribers/${subscriber.id}/notifications/all`))
    }
    const result = await Promise.all(notifications)
    const resultFromData = result.map((res: any) => res.data)
    console.log(resultFromData)
}
 






const main = async () => {
    try{
        await createNews("Tipagem de promise", "Como tipar promises", 1592833834000)
        
        const subscribersQuantity = await getSubscribersQuantity()
       // console.log(subscribersQuantity)
        const subscribers = await getAllSubscribers()
        const arrayDePromises = [];
            for(const subscriber of subscribers) {
                arrayDePromises.push(sendNotification(subscriber, "Veja essa noticia de typagem de promise"))
            }
            await Promise.all(arrayDePromises)
            console.log("Terminei tudo")
            console.log("TERMINEI DE ENVIAR TUDO!")

        await getAllNotifications();
            
        
    //     const response = await axios.get(`${baseUrl}maxixezinho`)
        
    //     const subscribers = response.data
        
    //     for(const subscriber of subscribers) {
    //         console.log("Começando a enviar uma notificação para: ", subscriber.name)
    //         await axios.post(`${baseUrl}notifications/send`, {
    //             subscriberId: subscriber.id,
    //             message: "Veja a notícia 'Julian dominou o backend'"
    //         })
    //         console.log("Terminei de enviar a notificação para: ", subscriber.name)    
    //     }   
    //     console.log("TERMINEI DE ENVIAR TUDO!")
    } catch(err) {
        console.log(err)
    }
}
main();

// const main = async () => {
//     try{
//             await axios.put(`${baseUrl}news`, {
//             title: "Olá Julian bem vindo ao Backend",
//             content: "Para a alegria de muitos, e a tristeza de alguns, a turma Julian coda até debaixo d'agua!",
//             date: 1592833834000
//         })    
//         console.log("Notícia Criada com sucesso")
    
//         const response = await axios.get(`${baseUrl}subscribers/all`)
//         //console.log(subscribers.data)
//         const subscribers = response.data
        
//         for(const subscriber of subscribers) {
//             console.log("Começando a enviar uma notificação para: ", subscriber.name)
//             await axios.post(`${baseUrl}notifications/send`, {
//                 subscriberId: subscriber.id,
//                 message: "Veja a notícia 'Julian dominou o backend'"
//             })
//             console.log("Terminei de enviar a notificação para: ", subscriber.name)    
//         }   
//         console.log("TERMINEI DE ENVIAR TUDO!")
//     } catch(err) {
//         console.log(err)
//     }
// }
// main();

