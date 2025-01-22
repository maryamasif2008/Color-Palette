document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const palette = document.getElementById('palette');
    const generateRandomColor = () => {
      const hexCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
      return hexCode;
    };
  
    const createColorSwatches = () => {
      palette.innerHTML = '';  
      for (let i = 0; i < 10; i++) {
        const color = generateRandomColor();
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch');
        swatch.style.backgroundColor = color;
  
        const colorCode = document.createElement('div');
        colorCode.classList.add('color-code');
        colorCode.textContent = color;

        swatch.appendChild(colorCode);
  
        swatch.addEventListener('click', () => {
          navigator.clipboard.writeText(color).then(() => {
            alert(`Color code ${color} copied to clipboard!`);
          });
        });
  
        palette.appendChild(swatch);
      }
    };
  
    generateBtn.addEventListener('click', createColorSwatches);
  });
  