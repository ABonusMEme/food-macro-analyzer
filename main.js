document.getElementById('analyzeBtn').addEventListener('click', async () => {
  const input = document.getElementById('imageInput');
  if (!input.files || input.files.length === 0) {
    alert('Please select an image file.');
    return;
  }
  
  const file = input.files[0];
  const reader = new FileReader();
  
  reader.onload = async function(event) {
    const imageData = event.target.result;
    // Remove the "data:image/...;base64," prefix
    const base64Data = imageData.split(',')[1];
    
    try {
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
      
      const data = await response.json();
      displayResult(data);
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
  };
  
  reader.readAsDataURL(file);
});

function displayResult(data) {
  const resultDiv = document.getElementById('result');
  let html = '<h2>Nutritional Information</h2>';
  
  if (data.nutrition) {
    html += '<ul>';
    for (const [key, value] of Object.entries(data.nutrition)) {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    }
    html += '</ul>';
  } else {
    html += '<p>No nutritional information available.</p>';
  }
  
  resultDiv.innerHTML = html;
}
