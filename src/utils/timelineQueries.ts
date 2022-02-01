import notion from './dbConnetion'

const database_id = "a8432df5dbcf4043b60087d1f0fafa94"

export const getEntries = async () => {
    return await notion.databases.query({
        database_id: database_id,
    })
}

export const getEntry = async (pageId) => {
    return await notion.pages.retrieve({ page_id: pageId })
}