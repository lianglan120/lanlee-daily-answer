async function loadQuoteAndBackground() {
  const response = await fetch("quotes.json");
  const quotes = await response.json();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  const totalImages = 130;
  const randomImage = Math.floor(Math.random() * totalImages) + 1;
  const imagePath = `images/quote_image_${randomImage}.jpg`;

  document.getElementById("background-img").src = imagePath;
  document.getElementById("quote-text").innerText = quote;
}

window.onload = loadQuoteAndBackground;

