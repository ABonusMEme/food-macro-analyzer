const response = await fetch('https://jayrib.app.n8n.cloud/webhook-test/434e0b3f-4bb4-48c6-90dd-7cd3ce8b563b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    binary: {
      data: base64Data
    }
  })
});
