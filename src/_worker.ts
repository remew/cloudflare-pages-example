import { Hono } from 'hono'
import { renderToReadableStream } from 'react-dom/server'
import json from './dummy.json'
import { App } from './App.tsx'
import { createElement } from 'react'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/json', (c) => {
  return c.text(JSON.stringify(json, null, 2))
})
app.get('/react', async (c) => {
  const stream = await renderToReadableStream(createElement(App))

  return new Response(stream, {
    headers: { 'content-type': 'text/html' },
  })
})

export default app
