// Скрипт для генерации всех размеров иконок
const fs = require('fs');
const path = require('path');

// Основная иконка (512x512)
const mainIcon = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Основной градиент фона -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f093fb;stop-opacity:1" />
    </linearGradient>
    
    <!-- Градиент для книги -->
    <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f8fafc;stop-opacity:1" />
    </linearGradient>
    
    <!-- Градиент для страниц -->
    <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
    
    <!-- Градиент для звезды -->
    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
    </linearGradient>
    
    <!-- Градиент для трофея -->
    <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>
    
    <!-- Тень для книги -->
    <filter id="bookShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="12"/>
      <feOffset dx="0" dy="6" result="offset"/>
      <feFlood flood-color="#000000" flood-opacity="0.2"/>
      <feComposite in2="offset" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Тень для элементов -->
    <filter id="elementShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6"/>
      <feOffset dx="0" dy="3" result="offset"/>
      <feFlood flood-color="#000000" flood-opacity:0.25"/>
      <feComposite in2="offset" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Блики -->
    <radialGradient id="highlight" cx="30%" cy="30%" r="40%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <!-- Фон с градиентом -->
  <rect width="512" height="512" rx="96" fill="url(#bgGradient)"/>
  
  <!-- Дополнительный слой для глубины -->
  <rect width="512" height="512" rx="96" fill="url(#highlight)"/>
  
  <!-- Книга с тенью -->
  <g filter="url(#bookShadow)">
    <rect x="120" y="80" width="272" height="352" rx="20" fill="url(#bookGradient)"/>
  </g>
  
  <!-- Страницы книги -->
  <rect x="136" y="96" width="240" height="320" rx="12" fill="url(#pageGradient)"/>
  
  <!-- Текст на страницах -->
  <g fill="#1e293b" opacity="0.8">
    <!-- Заголовок -->
    <rect x="160" y="130" width="192" height="12" rx="6" fill="#1e40af"/>
    <rect x="160" y="150" width="160" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="170" width="176" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="190" width="144" height="8" rx="4" fill="#64748b"/>
    
    <!-- Параграф -->
    <rect x="160" y="220" width="192" height="12" rx="6" fill="#1e40af"/>
    <rect x="160" y="240" width="168" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="260" width="184" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="280" width="152" height="8" rx="4" fill="#64748b"/>
    
    <!-- Список -->
    <rect x="160" y="310" width="176" height="12" rx="6" fill="#1e40af"/>
    <rect x="160" y="330" width="144" height="8" rx="4" fill="#64748b"/>
    <rect x="160" y="350" width="160" height="8" rx="4" fill="#64748b"/>
  </g>
  
  <!-- Звезда с градиентом и тенью -->
  <g transform="translate(320, 180)" filter="url(#elementShadow)">
    <path d="M32 0L40 24L64 24L44 40L52 64L32 48L12 64L20 40L0 24L24 24Z" fill="url(#starGradient)"/>
    <!-- Блик на звезде -->
    <path d="M28 8L32 20L36 8L32 12Z" fill="#ffffff" opacity="0.6"/>
  </g>
  
  <!-- Трофей с градиентом и тенью -->
  <g transform="translate(160, 380)" filter="url(#elementShadow)">
    <path d="M16 0L20 4L20 8L24 8L24 12L20 12L20 16L16 16L16 12L12 12L12 8L16 8L16 4Z" fill="url(#trophyGradient)"/>
    <!-- Блик на трофее -->
    <path d="M14 2L16 6L18 2L16 4Z" fill="#ffffff" opacity="0.6"/>
  </g>
  
  <!-- Дополнительные декоративные элементы -->
  <g opacity="0.3">
    <!-- Маленькие звездочки -->
    <circle cx="80" cy="120" r="4" fill="#ffffff"/>
    <circle cx="420" cy="200" r="3" fill="#ffffff"/>
    <circle cx="90" cy="350" r="3" fill="#ffffff"/>
    <circle cx="400" cy="400" r="4" fill="#ffffff"/>
  </g>
  
  <!-- Современные акценты -->
  <g opacity="0.4">
    <rect x="60" y="60" width="6" height="6" rx="3" fill="#ffffff"/>
    <rect x="440" y="100" width="4" height="4" rx="2" fill="#ffffff"/>
    <rect x="70" y="420" width="4" height="4" rx="2" fill="#ffffff"/>
    <rect x="430" y="380" width="6" height="6" rx="3" fill="#ffffff"/>
  </g>
</svg>`;

// Размеры иконок для генерации
const iconSizes = [
  { size: 57, name: 'icon-57x57.svg' },
  { size: 60, name: 'icon-60x60.svg' },
  { size: 72, name: 'icon-72x72.svg' },
  { size: 76, name: 'icon-76x76.svg' },
  { size: 96, name: 'icon-96x96.svg' },
  { size: 114, name: 'icon-114x114.svg' },
  { size: 120, name: 'icon-120x120.svg' },
  { size: 128, name: 'icon-128x128.svg' },
  { size: 144, name: 'icon-144x144.svg' },
  { size: 152, name: 'icon-152x152.svg' },
  { size: 180, name: 'icon-180x180.svg' },
  { size: 384, name: 'icon-384x384.svg' }
];

// Функция для создания иконки определенного размера
function createIcon(size, filename) {
  const svg = mainIcon.replace('width="512" height="512"', `width="${size}" height="${size}"`);
  const filePath = path.join('icons', filename);
  fs.writeFileSync(filePath, svg);
  console.log(`✅ Создана иконка ${filename} (${size}x${size})`);
}

// Создаем все иконки
console.log('🚀 Начинаем генерацию иконок...');

iconSizes.forEach(({ size, name }) => {
  createIcon(size, name);
});

console.log('🎉 Все иконки успешно созданы!');
