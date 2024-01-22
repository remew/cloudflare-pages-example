import { Hono } from 'hono'
import json from './dummy.json'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/json', (c) => {
  return c.text(JSON.stringify(json, null, 2))
})

export default app
