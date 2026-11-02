// Create placeholder panoramas for development
// These are simple gradients until real Poly Haven panoramas are downloaded

const fs = require('fs');
const { createCanvas } = require('canvas');

const panoramas = [
  { name: 'living-room', color1: '#4a5568', color2: '#718096', label: 'Living Room' },
  { name: 'bedroom', color1: '#5c6bc0', color2: '#7986cb', label: 'Bedroom' },
  { name: 'bathroom', color1: '#26a69a', color2: '#4db6ac', label: 'Bathroom' },
  { name: 'kitchen', color1: '#78909c', color2: '#90a4ae', label: 'Kitchen' },
  { name: 'balcony', color1: '#66bb6a', color2: '#81c784', label: 'Balcony' },
];

const width = 2048;
const height = 1024;

console.log('Creating placeholder panoramas...');

try {
  for (const pano of panoramas) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, pano.color1);
    gradient.addColorStop(1, pano.color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add text label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 80px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${pano.label} (Placeholder)`, width / 2, height / 2);

    ctx.font = '40px Arial';
    ctx.fillText('Download real panoramas from Poly Haven (CC0)', width / 2, height / 2 + 80);
    ctx.fillText('See public/panoramas/PANORAMAS.md', width / 2, height / 2 + 140);

    // Save as JPG
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 });
    fs.writeFileSync(`public/panoramas/${pano.name}.jpg`, buffer);
    console.log(`✓ Created ${pano.name}.jpg`);
  }

  console.log('\nPlaceholder panoramas created successfully!');
  console.log('To use real panoramas, run: ./scripts/download-panoramas.sh');
} catch (error) {
  console.error('Error creating placeholders:', error.message);
  console.log('\nCannot create images without canvas module.');
  console.log('Creating text placeholders instead...');

  // Fallback: Create a README if canvas is not available
  const readme = `# Placeholder Panoramas

These are placeholder files. To use real 360° panoramas:

1. Run: ./scripts/download-panoramas.sh
2. Convert HDR files to JPG
3. Or download 2K JPG directly from https://polyhaven.com/

Required files:
- living-room.jpg (e.g., Lythwood Lounge from Poly Haven)
- bedroom.jpg (e.g., Lythwood Room from Poly Haven)
- bathroom.jpg (e.g., Modern Bathroom from Poly Haven)
- kitchen.jpg (e.g., Anniversary Lounge from Poly Haven)
- balcony.jpg (e.g., Cayley Interior from Poly Haven)

All Poly Haven assets are CC0 (Public Domain) - free for any use.
`;

  fs.writeFileSync('public/panoramas/README.txt', readme);
  console.log('✓ Created README.txt in public/panoramas/');
}
