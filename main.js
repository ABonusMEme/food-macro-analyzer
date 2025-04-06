const response = await fetch('https://<your-n8n-instance>/webhook/food-image', {
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
