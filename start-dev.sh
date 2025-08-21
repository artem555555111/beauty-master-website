#!/bin/bash

echo "🚀 Запуск сайта Beauty Master в режиме разработки..."

# Проверяем, установлен ли Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Установите Node.js для продолжения."
    echo "📥 Скачать: https://nodejs.org/"
    exit 1
fi

# Проверяем, установлен ли npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm не установлен. Установите npm для продолжения."
    exit 1
fi

echo "✅ Node.js и npm найдены"

# Устанавливаем зависимости, если node_modules не существует
if [ ! -d "node_modules" ]; then
    echo "📦 Установка зависимостей..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Ошибка при установке зависимостей"
        exit 1
    fi
    echo "✅ Зависимости установлены"
else
    echo "✅ Зависимости уже установлены"
fi

# Создаем placeholder изображения, если их нет
echo "🖼️  Создание placeholder изображений..."

# Создаем простые SVG placeholder изображения
mkdir -p src/images/hero
mkdir -p src/images/portfolio
mkdir -p src/images/testimonials

# Hero image placeholder
cat > src/images/hero/hero-master.svg << 'EOF'
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFB5C2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">Hero Image</text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Фото мастера</text>
  <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">500x500px</text>
</svg>
EOF

# Portfolio placeholders
for i in {1..4}; do
  cat > "src/images/portfolio/brows-$i.svg" << EOF
<svg width="250" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8B4CB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFD3B6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad$i)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Портфолио $i</text>
  <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">250x200px</text>
</svg>
EOF

  cat > "src/images/portfolio/eyelashes-$i.svg" << EOF
<svg width="250" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradE$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#A8E6CF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFB5C2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#gradE$i)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">Ресницы $i</text>
  <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">250x200px</text>
</svg>
EOF
done

# Testimonials placeholders
for i in {1..3}; do
  cat > "src/images/testimonials/client-$i.svg" << EOF
<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradT$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8B4CB;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="40" cy="40" r="40" fill="url(#gradT$i)"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">Клиент</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle">$i</text>
</svg>
EOF
done

echo "✅ Placeholder изображения созданы"

# Обновляем HTML файл для использования SVG изображений
echo "🔧 Обновление HTML файла для использования SVG изображений..."

# Заменяем ссылки на изображения в index.html
sed -i '' 's|src="/images/hero/hero-master.jpg"|src="images/hero/hero-master.svg"|g' src/index.html
sed -i '' 's|src="/images/portfolio/brows-1.jpg"|src="images/portfolio/brows-1.svg"|g' src/index.html
sed -i '' 's|src="/images/portfolio/eyelashes-1.jpg"|src="images/portfolio/eyelashes-1.svg"|g' src/index.html
sed -i '' 's|src="/images/portfolio/brows-2.jpg"|src="images/portfolio/brows-2.svg"|g' src/index.html
sed -i '' 's|src="/images/portfolio/eyelashes-2.jpg"|src="images/portfolio/eyelashes-2.svg"|g' src/index.html
sed -i '' 's|src="/images/testimonials/client-1.jpg"|src="images/testimonials/client-1.svg"|g' src/index.html
sed -i '' 's|src="/images/testimonials/client-2.jpg"|src="images/testimonials/client-2.svg"|g' src/index.html
sed -i '' 's|src="/images/testimonials/client-3.jpg"|src="images/testimonials/client-3.svg"|g' src/index.html

echo "✅ HTML файл обновлен"

# Запускаем сервер разработки
echo "🌐 Запуск сервера разработки..."
echo "📱 Сайт будет доступен по адресу: http://localhost:3000"
echo "🔄 Автоматическое обновление при изменении файлов"
echo "⏹️  Для остановки нажмите Ctrl+C"
echo ""

npm run dev
