
// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

// Create event handler
app.post('/events', async (req, res) => {
  const { type, data } = req.body

  // If event type is comment created
  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved'

    // Emit event
    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    })
  }

  res.send({})
})

// Listen on port 4003
app.listen(4003, () => {
  console.log('Listening on port 4003')
})
const express = require('express');



