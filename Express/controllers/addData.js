import { startups } from "../data/data.js"
import { isEmpty } from "../utils/isEmpty.js"
import { omitEmptyObject } from "../utils/omitEmptyObject.js"
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

export const addData = async (req, res) => {
    const {
        name,
        industry,
        founded,
        country,
        continent,
        business_address,
        founders,
        employees,
        website,
        mission_statement,
        description,
        is_seeking_funding = false,
        has_mvp = false
    } = req.body

    const continents = [ 'Australia', 'Asia', 'South America', 'North America', 'Europe', 'Africa']
    let id = startups.length

    if (isEmpty(industry) || isEmpty(founded) || isEmpty(country) || isEmpty(continent) || isEmpty(name)) 
    {
        return res.status(400).json({message: "name, industry, founded, country & continent cant be empty"})
    }

    if(!continents.includes(continent)) {
        return res.status(400).json({message: "Continent value is invalid"})
    }

    if(isEmpty(founders)) {
        return res.status(400).json({message: "Founders value cant empty"})
    }

    const data = {
        id: id,
        name: name,
        founded: founded,
        country: country,
        continent: continent,
        business_address: business_address,
        founders: founders,
        employees: employees,
        website: website,
        mission_statement: mission_statement,
        description: description,
        is_seeking_funding: is_seeking_funding,
        has_mvp: has_mvp
    }

    const sanitizeData = omitEmptyObject(data)

    startups.push(sanitizeData)

    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathData = path.join(__dirname, "..", "data", "data.js")

    try {
        const content = `export const startups = ${JSON.stringify(startups, null, 2)}\n`
        await fs.writeFile(pathData, content, "utf-8")
        return res.status(201).json(sanitizeData)
    } catch (err) {
        startups.pop() // batalkan perubahan di memori kalau gagal menulis
        console.error(err)
        return res.status(500).json({ message: "Gagal menyimpan data" })
    }




}