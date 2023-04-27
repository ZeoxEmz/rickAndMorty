const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const users = require("../src/utils/users")

describe("Test de RUTAS",()=>{

    describe('Route: GET /rickandmorty/onsearch/:id',()=>{
        it('Responde con status: 200', async ()=>{
            const response = await session(app).get("/onsearch/1")
            expect(response.statusCode).toBe(200)
           /*  await agent.get('/rickandmorty/character/1').expect(200); */
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = await session(app).get("/onsearch/1")
            expect(Object.keys(response.body)).toEqual(["id","name","species","gender","image"])
        })
        it('Si hay un error responde con status: 500',async()=>{
            const response = await session(app).get("/onsearch/hola")
            expect(response.statusCode).toBe(500)
        })
        /* it('Si hay un error responde con status: 500',()=>{
            return agent.get("/onsearch/10000").send().then(response=> expect(response.statusCode).toBe(500))
        }) */
    })
    describe("Route: GET /rickandmorty/login",()=>{
        it("Responde un objeto con las propiedades: {access: true}",async ()=>{
            const response = await session(app).get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`)
            expect(response.body).toEqual({access:true})
        })

        it("Responde un objeto con las propiedades: {access: false}",async ()=>{
            const response = await session(app).get(`/rickandmorty/login?email=${users[0].email}&password=${"passwordRamdom"}`)
            expect(response.body).toEqual({access:false})
        })
    })
    describe("POST /rickandmorty/fav",()=>{
        //Lo que envíes por body debe ser devuelto en un arreglo
        //Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo
        // que incluye un elemento enviado previamente.
        it("Deve responder con un objeto igual a: {id:1,name:rick}",async ()=>{
            const character = {"id":1,"name":"rick"}
            const response = await session(app).post("/rickandmorty/fav").send(character)
            expect(response.body).toEqual([{"id":1,"name":"rick"}])
        })
        it("Deve responder con un arreglo con el objeto enviado y un elemento enviado previamente",async ()=>{
            const character = {"id":1,"name":"rick"}
            const character2 = {"id":2,"name":"morty"}
            const response = await session(app).post("/rickandmorty/fav").send(character)
            const response2 = await session(app).post("/rickandmorty/fav").send(character2)
            expect(response2.body).toContainEqual(character)
            expect(response2.body).toContainEqual(character2)
        })
    })
    /* describe("DELETE /rickandmorty/fav/:id",()=>{
        //Primero deberás testear que lo que devuelva esta ruta,
        //en el caso de que no haya ningún personaje con el ID que envías,
        //sea un arreglo con los elementos previos sin modificar.
        it(Deve responder)
    }) */
})
    