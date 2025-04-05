const fs = require('fs');
const { createCanvas } = require('canvas');

// Create images directory if it doesn't exist
if (!fs.existsSync('images')) {
  fs.mkdirSync('images');
}

// Function to create a placeholder image
function createPlaceholder(filename, width, height, bgColor, text, textColor) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = textColor;
  ctx.font = `bold ${Math.floor(height / 4)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Created ${filename}`);
}

// Generate partner logos
for (let i = 1; i <= 10; i++) {
  createPlaceholder(
    `images/partner-${i}.png`,
    200,
    100,
    '#f0f0f0',
    `Partner ${i}`,
    '#333333'
  );
}

// Generate UPI logo
createPlaceholder(
  'images/upi-logo.png',
  60,
  30,
  '#5f259f',
  'UPI',
  '#ffffff'
);

console.log('All placeholder images generated successfully!');
