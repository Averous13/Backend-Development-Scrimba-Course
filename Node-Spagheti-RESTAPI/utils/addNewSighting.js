import { getData } from './getData.js'
import fs from 'node:fs/promises'

export async function addNewSighting(newSighting) {

  try {
    const data = await getData()
    data.push(newSighting)

    await fs.writeFile('data/data.json', JSON.stringify(data, null, 2), 'utf8')
  } catch (err) {
    throw new Error(`Error Adding Data: ${err}`)
  }

}

/*
    1. Get the existing data (remember, this will already be a JS array)
    2. Push the new sighting to it
    3. Write data to the file.
    4. Add the new sighting and check out the 'read' page.
    5. Throw an error (in the catch block) if any of 1-3 above fail.
    
    To write data:
    Import fs/promises
    Use the writeFile method with the following:
      - the relative path to the file 
      - The data (what should we do to this data first?)
      - The encoding 'utf8'
    
    Bonus: figure out how to prettify the JSON!
    Remember to uncomment the import statement in routeHandler.js!!
*/