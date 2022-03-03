const request = require("supertest")
const db = require("../config/database")
const createServer = require("../../server") 
const Table = require("../../models/table")
const app = createServer()

beforeAll(async () => await db.connect())
afterEach(async () => await db.clear())
afterAll(async () => await db.close())

describe("tables", () => {
  test("GET /api/tables", async () => {
    const table = await Table.create({
      label: "T1",      
    })       
    const res = await request(app).get("/api/tables")

    expect(res.body.length).toEqual(1)       
  }) 

  test("POST /api/tables/by_quantity", async () => {
    await request(app).post("/api/tables/by_quantity").send({ quantity: 3 })
    const entitiesArray = await Table.find()
    
    expect(entitiesArray.length).toEqual(3)  
    expect(entitiesArray[0].label).toEqual("T1")
    expect(entitiesArray[1].label).toEqual("T2")
    expect(entitiesArray[2].label).toEqual("T3")
  }) 
})


