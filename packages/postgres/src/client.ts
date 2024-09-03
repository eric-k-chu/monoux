import { Pool, QueryResult, QueryResultRow } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function query(sql: string, params?: string[]): Promise<QueryResult<QueryResultRow>> {
  return pool.query(sql, params)
}

export const getClient = () => {
  return pool.connect()
}
