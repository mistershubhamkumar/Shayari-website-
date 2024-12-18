function showShayari(category) {
  const shayariList = document.getElementById('shayariList');
  shayariList.innerHTML = ''; // Clear previous content

  const shayariData = JSON.parse(localStorage.getItem(category)) || [];
  
  if (shayariData.length === 0) {
    shayariList.innerHTML = `<p>No shayari available for this category.</p>`;
    return;
  }

  shayariData.forEach(shayari => {
    const shayariItem = document.createElement('div');
    shayariItem.classList.add('shayari-item');
    shayariItem.innerHTML = `
      <p>${shayari}</p>
      <button class="copy-btn" onclick="copyToClipboard('${shayari}')">Copy</button>
      <button class="whatsapp-btn" onclick="shareOnWhatsapp('${shayari}')">Share on WhatsApp</button>
    `;
    shayariList.appendChild(shayariItem);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Shayari copied to clipboard!');
  });
}

function shareOnWhatsapp(text) {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}
