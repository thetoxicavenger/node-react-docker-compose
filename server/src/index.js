'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors')

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

app.use(cors())

// API
app.get('/api/posts', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    data: [
      {
        id: 1,
        author: "Francesco Pascuzzi",
        title: "Sample Blog Post",
        blurb: "Here's the Blurb, Blurbie.",
        created_at: Date.now(),
        updated_at: Date.now(),
        img_url: "https://s3-us-west-2.amazonaws.com/cosmicjs/904baa10-e512-11e8-8e5b-8dee8d2d843b-a-star-is-born_ZKS5C0.jpg",
        body: "Officia aute exercitation irure elit sunt exercitation incididunt laborum nulla aliqua dolore incididunt. Proident commodo irure irure elit sunt laboris eu sunt aute in nulla proident tempor. Consequat aliquip irure cupidatat sunt et est consequat ipsum ea exercitation ullamco quis reprehenderit. Aliqua ullamco mollit esse ex pariatur aliqua aute esse non. Velit ipsum laborum ipsum adipisicing non ad laboris officia est reprehenderit amet elit officia veniam.",
      }
    ]
  };
  res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
