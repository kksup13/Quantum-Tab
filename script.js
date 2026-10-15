const DEFAULT_LINKS = [
  { title: 'YouTube', url: 'https://www.youtube.com', icon: '' },
  { title: 'GitHub', url: 'https://github.com', icon: '' },
  { title: 'Telegram Web', url: 'https://web.telegram.org', icon: '' },
  { title: 'Steam', url: 'https://store.steampowered.com', icon: '' },
  { title: 'Google Translate', url: 'https://translate.google.com', icon: '' },
  { title: 'Reddit', url: 'https://www.reddit.com', icon: '' },
  { title: 'Twitch', url: 'https://www.twitch.tv', icon: '' },
  { title: 'Google Drive', url: 'https://drive.google.com', icon: '' },
  { title: 'Wikipedia', url: 'https://en.wikipedia.org', icon: '' },
  { title: 'Kinopoisk', url: 'https://www.kinopoisk.ru', icon: '' },
  { title: 'Habr', url: 'https://habr.com', icon: '' },
  { title: 'Gmail', url: 'https://mail.google.com', icon: '' }
];

// --- перевод ---
const I18N = {
  en: {
    locale: 'en-US',
    pageTitle: 'New Tab',
    shortcutsCount: 'Shortcuts',
    addShortcut: 'Add shortcut',
    editShortcut: 'Edit shortcut',
    addCardBtn: 'Add',
    studioTitle: 'Customization Studio',
    studioHeader: '🎨 Customization Studio',
    searchEngine: 'Search engine',
    searchPlaceholder: 'Search the web or enter URL...',
    lblTitle: 'Title',
    phTitle: 'e.g. YouTube',
    lblUrl: 'URL Address',
    lblIcon: 'Custom Icon (Image URL — optional)',
    phIcon: 'Leave empty for auto-icon',
    btnCancel: 'Cancel',
    btnSave: 'Save',
    secPresets: 'Presets (Compositions)',
    secBg: 'Background & Fit',
    lblBgType: 'Background Type',
    optLinear: 'Linear Gradient',
    optRadial: 'Radial Gradient',
    optSolid: 'Solid Color',
    optImage: 'Custom Image / GIF',
    lblColor1: 'Color 1',
    lblColor2: 'Color 2',
    lblColor3: 'Color 3',
    lblGradAngle: 'Gradient Angle:',
    lblImgUrl: 'Image URL',
    btnUploadPc: '📁 Upload Image from PC',
    lblCropSize: 'Crop & Size',
    btnCenter: 'Center',
    lblDisplayMode: 'Display Mode',
    optCover: 'Fill Screen (Cover)',
    optContain: 'Fit Whole (Contain)',
    optCustomZoom: 'Manual Zoom (%)',
    optStretch: 'Stretch (100% x 100%)',
    lblZoom: 'Scale (Zoom):',
    lblPosX: 'Horizontal Offset (X):',
    lblPosY: 'Vertical Offset (Y):',
    chkRepeat: 'Tile Repeat',
    lblBgDim: 'Background Dimming:',
    lblBgBlur: 'Background Blur:',
    secColors: 'Color Scheme',
    lblAccent: 'Accent',
    lblText: 'Text',
    lblTiles: 'Tiles',
    secClock: 'Clock, Neon & Search',
    lblClockFont: 'Clock Font Style',
    optClockModern: 'Modern Bold (Default)',
    optClockThin: 'Minimalist Thin',
    optClockCyber: 'Cyberpunk Mono (Tech)',
    optClockSerif: 'Elegant Serif (Classic)',
    optClockOutline: 'Hollow Outline',
    lblClockSize: 'Clock Size:',
    chkClockNeon: 'Enable Clock Neon',
    lblNeonColor: 'Clock Neon Color',
    lblNeonStrength: 'Neon Glow Intensity:',
    chkClock: 'Clock',
    chkSeconds: 'Seconds',
    chkDate: 'Date',
    chkSearch: 'Search',
    lblSearchRadius: 'Search Bar Rounding:',
    secGrid: 'Grid & Cards',
    lblCardLayout: 'Card Layout',
    optLayoutVert: 'Classic Tiles (Vertical)',
    optLayoutHoriz: 'Compact Pills (Horizontal)',
    optLayoutIcon: 'Minimalist (Icons Only)',
    lblCols: 'Columns per Row:',
    lblMaxWidth: 'Container Width:',
    lblGridGap: 'Tile Gap:',
    lblCardRadius: 'Corner Rounding:',
    lblCardOpacity: 'Tile Opacity:',
    lblCardBlur: 'Tile Glass Blur:',
    lblIconSize: 'Icon Size:',
    chkCardBorder: 'Tile Borders',
    chkShowAdd: '“+” Button in Grid',
    secBackup: 'Backup & Reset',
    btnExport: 'Export JSON',
    btnImport: 'Import JSON',
    btnReset: 'Reset Design to Default',
    secLang: 'Language',
    jsonError: 'Error reading JSON file.'
  },
  ru: {
    locale: 'ru-RU',
    pageTitle: 'Новая вкладка',
    shortcutsCount: 'Ярлыков',
    addShortcut: 'Добавить ярлык',
    editShortcut: 'Редактировать ярлык',
    addCardBtn: 'Добавить',
    studioTitle: 'Студия кастомизации',
    studioHeader: '🎨 Студия кастомизации',
    searchEngine: 'Поисковая система',
    searchPlaceholder: 'Поиск в сети или введите URL...',
    lblTitle: 'Название',
    phTitle: 'Например: YouTube',
    lblUrl: 'URL-адрес',
    lblIcon: 'Своя иконка (URL картинки — необязательно)',
    phIcon: 'Оставьте пустым для авто-иконки',
    btnCancel: 'Отмена',
    btnSave: 'Сохранить',
    secPresets: 'Готовые композиции (Пресеты)',
    secBg: 'Фон и Подгонка',
    lblBgType: 'Тип фона',
    optLinear: 'Линейный градиент',
    optRadial: 'Радиальный градиент',
    optSolid: 'Сплошной цвет',
    optImage: 'Своя картинка / GIF',
    lblColor1: 'Цвет 1',
    lblColor2: 'Цвет 2',
    lblColor3: 'Цвет 3',
    lblGradAngle: 'Угол градиента:',
    lblImgUrl: 'Ссылка на изображение (URL)',
    btnUploadPc: '📁 Загрузить картинку с ПК',
    lblCropSize: 'Кадрирование и размер',
    btnCenter: 'По центру',
    lblDisplayMode: 'Режим отображения',
    optCover: 'Заполнить экран (Cover)',
    optContain: 'Вписать целиком (Contain)',
    optCustomZoom: 'Ручной масштаб (Zoom %)',
    optStretch: 'Растянуть (100% x 100%)',
    lblZoom: 'Масштаб (Zoom):',
    lblPosX: 'Сдвиг по горизонтали (X):',
    lblPosY: 'Сдвиг по вертикали (Y):',
    chkRepeat: 'Замостить плиткой (Repeat)',
    lblBgDim: 'Затемнение фона:',
    lblBgBlur: 'Размытие фона (Blur):',
    secColors: 'Цветовая схема',
    lblAccent: 'Акцент',
    lblText: 'Текст',
    lblTiles: 'Плитки',
    secClock: 'Часы, Неон и Поиск',
    lblClockFont: 'Стиль шрифта часов',
    optClockModern: 'Modern Bold (Стандарт)',
    optClockThin: 'Minimalist Thin (Тонкий)',
    optClockCyber: 'Cyberpunk Mono (Техно)',
    optClockSerif: 'Elegant Serif (Классика)',
    optClockOutline: 'Hollow Outline (Контурный)',
    lblClockSize: 'Размер часов:',
    chkClockNeon: 'Включить неон часов',
    lblNeonColor: 'Цвет неона часов',
    lblNeonStrength: 'Сила свечения неона:',
    chkClock: 'Часы',
    chkSeconds: 'Секунды',
    chkDate: 'Дата',
    chkSearch: 'Поиск',
    lblSearchRadius: 'Скругление строки поиска:',
    secGrid: 'Сетка и Карточки',
    lblCardLayout: 'Вид карточек',
    optLayoutVert: 'Классические плитки (Вертикальные)',
    optLayoutHoriz: 'Компактные плашки (Горизонтальные)',
    optLayoutIcon: 'Минимализм (Только иконки)',
    lblCols: 'Колонок в ряду:',
    lblMaxWidth: 'Ширина контейнера:',
    lblGridGap: 'Отступ между плитками:',
    lblCardRadius: 'Скругление углов:',
    lblCardOpacity: 'Прозрачность плиток:',
    lblCardBlur: 'Размытие стекла плиток:',
    lblIconSize: 'Размер иконок:',
    chkCardBorder: 'Рамки плиток',
    chkShowAdd: 'Кнопка «+» в сетке',
    secBackup: 'Резервная копия и Сброс',
    btnExport: 'Экспорт JSON',
    btnImport: 'Импорт JSON',
    btnReset: 'Сбросить дизайн по умолчанию',
    secLang: 'Язык / Language',
    jsonError: 'Ошибка чтения JSON файла.'
  },
  es: {
    locale: 'es-ES',
    pageTitle: 'Nueva pestaña',
    shortcutsCount: 'Accesos',
    addShortcut: 'Añadir acceso',
    editShortcut: 'Editar acceso',
    addCardBtn: 'Añadir',
    studioTitle: 'Estudio de personalización',
    studioHeader: '🎨 Estudio de personalización',
    searchEngine: 'Motor de búsqueda',
    searchPlaceholder: 'Buscar en la web o introducir URL...',
    lblTitle: 'Título',
    phTitle: 'Ej: YouTube',
    lblUrl: 'Dirección URL',
    lblIcon: 'Icono personalizado (URL opcional)',
    phIcon: 'Dejar vacío para icono automático',
    btnCancel: 'Cancelar',
    btnSave: 'Guardar',
    secPresets: 'Preajustes (Composiciones)',
    secBg: 'Fondo y Ajuste',
    lblBgType: 'Tipo de fondo',
    optLinear: 'Degradado lineal',
    optRadial: 'Degradado radial',
    optSolid: 'Color sólido',
    optImage: 'Imagen propia / GIF',
    lblColor1: 'Color 1',
    lblColor2: 'Color 2',
    lblColor3: 'Color 3',
    lblGradAngle: 'Ángulo de degradado:',
    lblImgUrl: 'URL de la imagen',
    btnUploadPc: '📁 Subir imagen desde PC',
    lblCropSize: 'Recorte y tamaño',
    btnCenter: 'Centrar',
    lblDisplayMode: 'Modo de visualización',
    optCover: 'Llenar pantalla (Cover)',
    optContain: 'Ajustar todo (Contain)',
    optCustomZoom: 'Zoom manual (%)',
    optStretch: 'Estirar (100% x 100%)',
    lblZoom: 'Escala (Zoom):',
    lblPosX: 'Desplazamiento horizontal (X):',
    lblPosY: 'Desplazamiento vertical (Y):',
    chkRepeat: 'Repetir en mosaico',
    lblBgDim: 'Oscurecer fondo:',
    lblBgBlur: 'Desenfoque de fondo:',
    secColors: 'Esquema de colores',
    lblAccent: 'Acento',
    lblText: 'Texto',
    lblTiles: 'Tarjetas',
    secClock: 'Reloj, Neón y Búsqueda',
    lblClockFont: 'Estilo de fuente del reloj',
    optClockModern: 'Modern Bold (Predeterminado)',
    optClockThin: 'Minimalist Thin (Fino)',
    optClockCyber: 'Cyberpunk Mono (Tecno)',
    optClockSerif: 'Elegant Serif (Clásico)',
    optClockOutline: 'Hollow Outline (Contorno)',
    lblClockSize: 'Tamaño del reloj:',
    chkClockNeon: 'Activar neón del reloj',
    lblNeonColor: 'Color de neón',
    lblNeonStrength: 'Intensidad del neón:',
    chkClock: 'Reloj',
    chkSeconds: 'Segundos',
    chkDate: 'Fecha',
    chkSearch: 'Búsqueda',
    lblSearchRadius: 'Redondeo de búsqueda:',
    secGrid: 'Cuadrícula y Tarjetas',
    lblCardLayout: 'Diseño de tarjetas',
    optLayoutVert: 'Mosaicos clásicos (Vertical)',
    optLayoutHoriz: 'Pastillas compactas (Horizontal)',
    optLayoutIcon: 'Minimalista (Solo iconos)',
    lblCols: 'Columnas por fila:',
    lblMaxWidth: 'Ancho del contenedor:',
    lblGridGap: 'Espacio entre tarjetas:',
    lblCardRadius: 'Redondeo de esquinas:',
    lblCardOpacity: 'Opacidad de tarjetas:',
    lblCardBlur: 'Desenfoque de cristal:',
    lblIconSize: 'Tamaño de iconos:',
    chkCardBorder: 'Bordes de tarjetas',
    chkShowAdd: 'Botón “+” en cuadrícula',
    secBackup: 'Copia de seguridad y Restablecer',
    btnExport: 'Exportar JSON',
    btnImport: 'Importar JSON',
    btnReset: 'Restablecer diseño predeterminado',
    secLang: 'Idioma / Language',
    jsonError: 'Error al leer el archivo JSON.'
  },
  de: {
    locale: 'de-DE',
    pageTitle: 'Neuer Tab',
    shortcutsCount: 'Verknüpfungen',
    addShortcut: 'Verknüpfung hinzufügen',
    editShortcut: 'Verknüpfung bearbeiten',
    addCardBtn: 'Neu',
    studioTitle: 'Anpassungsstudio',
    studioHeader: '🎨 Anpassungsstudio',
    searchEngine: 'Suchmaschine',
    searchPlaceholder: 'Im Web suchen oder URL eingeben...',
    lblTitle: 'Titel',
    phTitle: 'z.B. YouTube',
    lblUrl: 'URL-Adresse',
    lblIcon: 'Eigenes Symbol (Bild-URL — optional)',
    phIcon: 'Leer lassen für Auto-Symbol',
    btnCancel: 'Abbrechen',
    btnSave: 'Speichern',
    secPresets: 'Vorlagen (Presets)',
    secBg: 'Hintergrund & Anpassung',
    lblBgType: 'Hintergrundtyp',
    optLinear: 'Linearer Verlauf',
    optRadial: 'Radialer Verlauf',
    optSolid: 'Einfarbig',
    optImage: 'Eigenes Bild / GIF',
    lblColor1: 'Farbe 1',
    lblColor2: 'Farbe 2',
    lblColor3: 'Farbe 3',
    lblGradAngle: 'Verlaufswinkel:',
    lblImgUrl: 'Bild-URL',
    btnUploadPc: '📁 Bild vom PC hochladen',
    lblCropSize: 'Zuschnitt & Größe',
    btnCenter: 'Zentrieren',
    lblDisplayMode: 'Anzeigemodus',
    optCover: 'Bildschirm füllen (Cover)',
    optContain: 'Ganz einpassen (Contain)',
    optCustomZoom: 'Manueller Zoom (%)',
    optStretch: 'Strecken (100% x 100%)',
    lblZoom: 'Skalierung (Zoom):',
    lblPosX: 'Horizontaler Versatz (X):',
    lblPosY: 'Vertikaler Versatz (Y):',
    chkRepeat: 'Kacheln wiederholen',
    lblBgDim: 'Hintergrund abdunkeln:',
    lblBgBlur: 'Hintergrundunschärfe:',
    secColors: 'Farbschema',
    lblAccent: 'Akzent',
    lblText: 'Text',
    lblTiles: 'Kacheln',
    secClock: 'Uhr, Neon & Suche',
    lblClockFont: 'Uhr-Schriftstil',
    optClockModern: 'Modern Bold (Standard)',
    optClockThin: 'Minimalist Thin (Dünn)',
    optClockCyber: 'Cyberpunk Mono (Tech)',
    optClockSerif: 'Elegant Serif (Klassisch)',
    optClockOutline: 'Hollow Outline (Kontur)',
    lblClockSize: 'Uhrgröße:',
    chkClockNeon: 'Uhr-Neon aktivieren',
    lblNeonColor: 'Neonfarbe',
    lblNeonStrength: 'Neon-Intensität:',
    chkClock: 'Uhr',
    chkSeconds: 'Sekunden',
    chkDate: 'Datum',
    chkSearch: 'Suche',
    lblSearchRadius: 'Suchleisten-Abrundung:',
    secGrid: 'Raster & Kacheln',
    lblCardLayout: 'Kachel-Layout',
    optLayoutVert: 'Klassische Kacheln (Vertikal)',
    optLayoutHoriz: 'Kompakte Leisten (Horizontal)',
    optLayoutIcon: 'Minimalistisch (Nur Symbole)',
    lblCols: 'Spalten pro Reihe:',
    lblMaxWidth: 'Containerbreite:',
    lblGridGap: 'Kachelabstand:',
    lblCardRadius: 'Eckenabrundung:',
    lblCardOpacity: 'Kacheldeckkraft:',
    lblCardBlur: 'Glas-Unschärfe:',
    lblIconSize: 'Symbolgröße:',
    chkCardBorder: 'Kachelrahmen',
    chkShowAdd: '„+“-Taste im Raster',
    secBackup: 'Sicherung & Zurücksetzen',
    btnExport: 'JSON exportieren',
    btnImport: 'JSON importieren',
    btnReset: 'Design zurücksetzen',
    secLang: 'Sprache / Language',
    jsonError: 'Fehler beim Lesen der JSON-Datei.'
  },
  fr: {
    locale: 'fr-FR',
    pageTitle: 'Nouvel onglet',
    shortcutsCount: 'Raccourcis',
    addShortcut: 'Ajouter un raccourci',
    editShortcut: 'Modifier le raccourci',
    addCardBtn: 'Ajouter',
    studioTitle: 'Studio de personnalisation',
    studioHeader: '🎨 Studio de personnalisation',
    searchEngine: 'Moteur de recherche',
    searchPlaceholder: 'Rechercher sur le web ou saisir une URL...',
    lblTitle: 'Titre',
    phTitle: 'ex: YouTube',
    lblUrl: 'Adresse URL',
    lblIcon: 'Icône personnalisée (URL — optionnel)',
    phIcon: 'Laisser vide pour icône auto',
    btnCancel: 'Annuler',
    btnSave: 'Enregistrer',
    secPresets: 'Préréglages (Thèmes)',
    secBg: 'Arrière-plan et Ajustement',
    lblBgType: 'Type de fond',
    optLinear: 'Dégradé linéaire',
    optRadial: 'Dégradé radial',
    optSolid: 'Couleur unie',
    optImage: 'Image perso / GIF',
    lblColor1: 'Couleur 1',
    lblColor2: 'Couleur 2',
    lblColor3: 'Couleur 3',
    lblGradAngle: 'Angle du dégradé:',
    lblImgUrl: 'URL de l’image',
    btnUploadPc: '📁 Charger une image du PC',
    lblCropSize: 'Recadrage et taille',
    btnCenter: 'Centrer',
    lblDisplayMode: 'Mode d’affichage',
    optCover: 'Remplir l’écran (Cover)',
    optContain: 'Ajuster entier (Contain)',
    optCustomZoom: 'Zoom manuel (%)',
    optStretch: 'Étirer (100% x 100%)',
    lblZoom: 'Échelle (Zoom):',
    lblPosX: 'Décalage horizontal (X):',
    lblPosY: 'Décalage vertical (Y):',
    chkRepeat: 'Mosaïque (Repeat)',
    lblBgDim: 'Assombrissement:',
    lblBgBlur: 'Flou de fond:',
    secColors: 'Palette de couleurs',
    lblAccent: 'Accent',
    lblText: 'Texte',
    lblTiles: 'Tuiles',
    secClock: 'Horloge, Néon et Recherche',
    lblClockFont: 'Style de police de l’horloge',
    optClockModern: 'Modern Bold (Défaut)',
    optClockThin: 'Minimalist Thin (Fin)',
    optClockCyber: 'Cyberpunk Mono (Tech)',
    optClockSerif: 'Elegant Serif (Classique)',
    optClockOutline: 'Hollow Outline (Contour)',
    lblClockSize: 'Taille de l’horloge:',
    chkClockNeon: 'Activer le néon',
    lblNeonColor: 'Couleur du néon',
    lblNeonStrength: 'Intensité du néon:',
    chkClock: 'Horloge',
    chkSeconds: 'Secondes',
    chkDate: 'Date',
    chkSearch: 'Recherche',
    lblSearchRadius: 'Arrondi de recherche:',
    secGrid: 'Grille et Cartes',
    lblCardLayout: 'Disposition des cartes',
    optLayoutVert: 'Tuiles classiques (Vertical)',
    optLayoutHoriz: 'Badges compacts (Horizontal)',
    optLayoutIcon: 'Minimaliste (Icônes seules)',
    lblCols: 'Colonnes par ligne:',
    lblMaxWidth: 'Largeur du conteneur:',
    lblGridGap: 'Espacement des tuiles:',
    lblCardRadius: 'Arrondi des coins:',
    lblCardOpacity: 'Opacité des tuiles:',
    lblCardBlur: 'Flou de verre:',
    lblIconSize: 'Taille des icônes:',
    chkCardBorder: 'Bordures des tuiles',
    chkShowAdd: 'Bouton « + » dans la grille',
    secBackup: 'Sauvegarde et Réinitialisation',
    btnExport: 'Exporter JSON',
    btnImport: 'Importer JSON',
    btnReset: 'Réinitialiser le design',
    secLang: 'Langue / Language',
    jsonError: 'Erreur de lecture du fichier JSON.'
  },
  zh: {
    locale: 'zh-CN',
    pageTitle: '新标签页',
    shortcutsCount: '快捷方式',
    addShortcut: '添加快捷方式',
    editShortcut: '编辑快捷方式',
    addCardBtn: '添加',
    studioTitle: '个性化工作室',
    studioHeader: '🎨 个性化工作室',
    searchEngine: '搜索引擎',
    searchPlaceholder: '搜索网络或输入网址...',
    lblTitle: '名称',
    phTitle: '例如：YouTube',
    lblUrl: '网址 (URL)',
    lblIcon: '自定义图标（图片链接 — 可选）',
    phIcon: '留空则自动获取图标',
    btnCancel: '取消',
    btnSave: '保存',
    secPresets: '预设主题',
    secBg: '背景与缩放',
    lblBgType: '背景类型',
    optLinear: '线性渐变',
    optRadial: '径向渐变',
    optSolid: '纯色背景',
    optImage: '自定义图片 / GIF',
    lblColor1: '颜色 1',
    lblColor2: '颜色 2',
    lblColor3: '颜色 3',
    lblGradAngle: '渐变角度:',
    lblImgUrl: '图片链接 (URL)',
    btnUploadPc: '📁 从电脑上传图片',
    lblCropSize: '裁剪与尺寸',
    btnCenter: '居中',
    lblDisplayMode: '显示模式',
    optCover: '填充屏幕 (Cover)',
    optContain: '完整适应 (Contain)',
    optCustomZoom: '手动缩放 (%)',
    optStretch: '拉伸 (100% x 100%)',
    lblZoom: '缩放比例 (Zoom):',
    lblPosX: '水平偏移 (X):',
    lblPosY: '垂直偏移 (Y):',
    chkRepeat: '平铺重复 (Repeat)',
    lblBgDim: '背景暗化:',
    lblBgBlur: '背景模糊 (Blur):',
    secColors: '配色方案',
    lblAccent: '强调色',
    lblText: '文字',
    lblTiles: '卡片',
    secClock: '时钟、霓虹与搜索',
    lblClockFont: '时钟字体样式',
    optClockModern: '现代粗体 (默认)',
    optClockThin: '极简细体',
    optClockCyber: '赛博等宽',
    optClockSerif: '优雅衬线',
    optClockOutline: '镂空描边',
    lblClockSize: '时钟大小:',
    chkClockNeon: '开启时钟霓虹灯',
    lblNeonColor: '霓虹颜色',
    lblNeonStrength: '霓虹发光强度:',
    chkClock: '时钟',
    chkSeconds: '秒针',
    chkDate: '日期',
    chkSearch: '搜索栏',
    lblSearchRadius: '搜索栏圆角:',
    secGrid: '网格与卡片',
    lblCardLayout: '卡片布局',
    optLayoutVert: '经典垂直卡片',
    optLayoutHoriz: '紧凑水平胶囊',
    optLayoutIcon: '极简纯图标',
    lblCols: '每行列数:',
    lblMaxWidth: '容器最大宽度:',
    lblGridGap: '卡片间距:',
    lblCardRadius: '卡片圆角:',
    lblCardOpacity: '卡片不透明度:',
    lblCardBlur: '毛玻璃模糊度:',
    lblIconSize: '图标大小:',
    chkCardBorder: '显示卡片边框',
    chkShowAdd: '网格显示“+”按钮',
    secBackup: '备份与重置',
    btnExport: '导出 JSON',
    btnImport: '导入 JSON',
    btnReset: '恢复默认外观',
    secLang: '语言 / Language',
    jsonError: '读取 JSON 文件失败。'
  },
  ja: {
    locale: 'ja-JP',
    pageTitle: '新しいタブ',
    shortcutsCount: 'ショートカット',
    addShortcut: 'ショートカットを追加',
    editShortcut: 'ショートカットを編集',
    addCardBtn: '追加',
    studioTitle: 'カスタマイズスタジオ',
    studioHeader: '🎨 カスタマイズスタジオ',
    searchEngine: '検索エンジン',
    searchPlaceholder: 'ウェブを検索またはURLを入力...',
    lblTitle: 'タイトル',
    phTitle: '例: YouTube',
    lblUrl: 'URLアドレス',
    lblIcon: 'カスタムアイコン (画像URL — 任意)',
    phIcon: '空欄で自動アイコン取得',
    btnCancel: 'キャンセル',
    btnSave: '保存',
    secPresets: 'プリセットテーマ',
    secBg: '背景と調整',
    lblBgType: '背景タイプ',
    optLinear: '線形グラデーション',
    optRadial: '放射状グラデーション',
    optSolid: '単色',
    optImage: 'カスタム画像 / GIF',
    lblColor1: 'カラー 1',
    lblColor2: 'カラー 2',
    lblColor3: 'カラー 3',
    lblGradAngle: 'グラデーション角度:',
    lblImgUrl: '画像URL',
    btnUploadPc: '📁 PCから画像をアップロード',
    lblCropSize: '切り抜きとサイズ',
    btnCenter: '中央揃え',
    lblDisplayMode: '表示モード',
    optCover: '画面いっぱいに表示 (Cover)',
    optContain: '全体を表示 (Contain)',
    optCustomZoom: '手動ズーム (%)',
    optStretch: '引き伸ばす (100% x 100%)',
    lblZoom: 'ズーム倍率:',
    lblPosX: '水平位置 (X):',
    lblPosY: '垂直位置 (Y):',
    chkRepeat: 'タイル状に並べる',
    lblBgDim: '背景の暗さ:',
    lblBgBlur: '背景のぼかし:',
    secColors: '配色テーマ',
    lblAccent: 'アクセント',
    lblText: 'テキスト',
    lblTiles: 'パネル',
    secClock: '時計・ネオン・検索',
    lblClockFont: '時計のフォントスタイル',
    optClockModern: 'モダンボールド (標準)',
    optClockThin: 'ミニマル細字',
    optClockCyber: 'サイバーパンク等幅',
    optClockSerif: 'エレガント明朝',
    optClockOutline: 'アウトライン',
    lblClockSize: '時計のサイズ:',
    chkClockNeon: '時計のネオンを有効化',
    lblNeonColor: 'ネオンの色',
    lblNeonStrength: 'ネオンの強さ:',
    chkClock: '時計',
    chkSeconds: '秒表示',
    chkDate: '日付',
    chkSearch: '検索バー',
    lblSearchRadius: '検索バーの角丸:',
    secGrid: 'グリッドとカード',
    lblCardLayout: 'カードレイアウト',
    optLayoutVert: 'クラシックタイル (縦型)',
    optLayoutHoriz: 'コンパクトピル (横型)',
    optLayoutIcon: 'ミニマル (アイコンのみ)',
    lblCols: '1行の列数:',
    lblMaxWidth: 'コンテナ幅:',
    lblGridGap: 'カード間隔:',
    lblCardRadius: 'カードの角丸:',
    lblCardOpacity: 'カードの不透明度:',
    lblCardBlur: 'ガラスぼかし:',
    lblIconSize: 'アイコンサイズ:',
    chkCardBorder: 'カードの枠線',
    chkShowAdd: '「+」ボタンを表示',
    secBackup: 'バックアップとリセット',
    btnExport: 'JSON出力',
    btnImport: 'JSON読込',
    btnReset: 'デザインを初期化',
    secLang: '言語 / Language',
    jsonError: 'JSONファイルの読み込みエラー。'
  },
  ko: {
    locale: 'ko-KR',
    pageTitle: '새 탭',
    shortcutsCount: '바로가기',
    addShortcut: '바로가기 추가',
    editShortcut: '바로가기 편집',
    addCardBtn: '추가',
    studioTitle: '커스터마이징 스튜디오',
    studioHeader: '🎨 커스터마이징 스튜디오',
    searchEngine: '검색 엔진',
    searchPlaceholder: '웹 검색 또는 URL 입력...',
    lblTitle: '이름',
    phTitle: '예: YouTube',
    lblUrl: 'URL 주소',
    lblIcon: '사용자 지정 아이콘 (이미지 URL — 선택)',
    phIcon: '비워두면 자동 아이콘 사용',
    btnCancel: '취소',
    btnSave: '저장',
    secPresets: '프리셋 테마',
    secBg: '배경 및 맞춤',
    lblBgType: '배경 유형',
    optLinear: '선형 그라데이션',
    optRadial: '방사형 그라데이션',
    optSolid: '단색',
    optImage: '사용자 이미지 / GIF',
    lblColor1: '색상 1',
    lblColor2: '색상 2',
    lblColor3: '색상 3',
    lblGradAngle: '그라데이션 각도:',
    lblImgUrl: '이미지 URL',
    btnUploadPc: '📁 PC에서 이미지 업로드',
    lblCropSize: '크기 및 위치 조정',
    btnCenter: '중앙 정렬',
    lblDisplayMode: '표시 모드',
    optCover: '화면 채우기 (Cover)',
    optContain: '전체 맞추기 (Contain)',
    optCustomZoom: '수동 줌 (%)',
    optStretch: '늘리기 (100% x 100%)',
    lblZoom: '확대/축소 (Zoom):',
    lblPosX: '가로 위치 (X):',
    lblPosY: '세로 위치 (Y):',
    chkRepeat: '바둑판식 배열',
    lblBgDim: '배경 어둡기:',
    lblBgBlur: '배경 흐림 (Blur):',
    secColors: '색상 테마',
    lblAccent: '강조색',
    lblText: '텍스트',
    lblTiles: '타일',
    secClock: '시계, 네온 및 검색',
    lblClockFont: '시계 글꼴 스타일',
    optClockModern: '모던 볼드 (기본)',
    optClockThin: '미니멀 씬 (얇게)',
    optClockCyber: '사이버펑크 모노',
    optClockSerif: '엘레강스 세리프',
    optClockOutline: '아웃라인 (윤곽선)',
    lblClockSize: '시계 크기:',
    chkClockNeon: '시계 네온 효과 켜기',
    lblNeonColor: '네온 색상',
    lblNeonStrength: '네온 강도:',
    chkClock: '시계',
    chkSeconds: '초 표시',
    chkDate: '날짜',
    chkSearch: '검색창',
    lblSearchRadius: '검색창 모서리 둥글기:',
    secGrid: '그리드 및 카드',
    lblCardLayout: '카드 레이아웃',
    optLayoutVert: '클래식 타일 (수직)',
    optLayoutHoriz: '컴팩트 바 (수평)',
    optLayoutIcon: '미니멀 (아이콘만)',
    lblCols: '가로 열 개수:',
    lblMaxWidth: '컨테이너 너비:',
    lblGridGap: '타일 간격:',
    lblCardRadius: '모서리 둥글기:',
    lblCardOpacity: '타일 투명도:',
    lblCardBlur: '유리 블러 효과:',
    lblIconSize: '아이콘 크기:',
    chkCardBorder: '타일 테두리',
    chkShowAdd: '그리드에 “+” 버튼 표시',
    secBackup: '백업 및 초기화',
    btnExport: 'JSON 내보내기',
    btnImport: 'JSON 가져오기',
    btnReset: '디자인 기본값 초기화',
    secLang: '언어 / Language',
    jsonError: 'JSON 파일을 읽는 중 오류가 발생했습니다.'
  },
  pt: {
    locale: 'pt-BR',
    pageTitle: 'Nova guia',
    shortcutsCount: 'Atalhos',
    addShortcut: 'Adicionar atalho',
    editShortcut: 'Editar atalho',
    addCardBtn: 'Adicionar',
    studioTitle: 'Estúdio de Personalização',
    studioHeader: '🎨 Estúdio de Personalização',
    searchEngine: 'Mecanismo de busca',
    searchPlaceholder: 'Pesquisar na web ou digitar URL...',
    lblTitle: 'Título',
    phTitle: 'Ex: YouTube',
    lblUrl: 'Endereço URL',
    lblIcon: 'Ícone personalizado (URL — opcional)',
    phIcon: 'Deixe vazio para ícone automático',
    btnCancel: 'Cancelar',
    btnSave: 'Salvar',
    secPresets: 'Predefinições (Temas)',
    secBg: 'Fundo e Ajuste',
    lblBgType: 'Tipo de fundo',
    optLinear: 'Gradiente Linear',
    optRadial: 'Gradiente Radial',
    optSolid: 'Cor Sólida',
    optImage: 'Imagem própria / GIF',
    lblColor1: 'Cor 1',
    lblColor2: 'Cor 2',
    lblColor3: 'Cor 3',
    lblGradAngle: 'Ângulo do gradiente:',
    lblImgUrl: 'URL da imagem',
    btnUploadPc: '📁 Carregar imagem do PC',
    lblCropSize: 'Recorte e tamanho',
    btnCenter: 'Centralizar',
    lblDisplayMode: 'Modo de exibição',
    optCover: 'Preencher tela (Cover)',
    optContain: 'Ajustar tudo (Contain)',
    optCustomZoom: 'Zoom manual (%)',
    optStretch: 'Esticar (100% x 100%)',
    lblZoom: 'Escala (Zoom):',
    lblPosX: 'Deslocamento horizontal (X):',
    lblPosY: 'Deslocamento vertical (Y):',
    chkRepeat: 'Repetir lado a lado',
    lblBgDim: 'Escurecimento do fundo:',
    lblBgBlur: 'Desfoque do fundo:',
    secColors: 'Esquema de Cores',
    lblAccent: 'Destaque',
    lblText: 'Texto',
    lblTiles: 'Blocos',
    secClock: 'Relógio, Neon e Busca',
    lblClockFont: 'Estilo da fonte do relógio',
    optClockModern: 'Modern Bold (Padrão)',
    optClockThin: 'Minimalist Thin (Fino)',
    optClockCyber: 'Cyberpunk Mono (Tecno)',
    optClockSerif: 'Elegant Serif (Clássico)',
    optClockOutline: 'Hollow Outline (Contorno)',
    lblClockSize: 'Tamanho do relógio:',
    chkClockNeon: 'Ativar neon do relógio',
    lblNeonColor: 'Cor do neon',
    lblNeonStrength: 'Intensidade do neon:',
    chkClock: 'Relógio',
    chkSeconds: 'Segundos',
    chkDate: 'Data',
    chkSearch: 'Busca',
    lblSearchRadius: 'Arredondamento da busca:',
    secGrid: 'Grade e Cartões',
    lblCardLayout: 'Layout dos cartões',
    optLayoutVert: 'Blocos clássicos (Vertical)',
    optLayoutHoriz: 'Pílulas compactas (Horizontal)',
    optLayoutIcon: 'Minimalista (Apenas ícones)',
    lblCols: 'Colunas por linha:',
    lblMaxWidth: 'Largura do contêiner:',
    lblGridGap: 'Espaço entre blocos:',
    lblCardRadius: 'Arredondamento dos cantos:',
    lblCardOpacity: 'Opacidade dos blocos:',
    lblCardBlur: 'Desfoque de vidro:',
    lblIconSize: 'Tamanho dos ícones:',
    chkCardBorder: 'Bordas nos blocos',
    chkShowAdd: 'Botão “+” na grade',
    secBackup: 'Backup e Redefinição',
    btnExport: 'Exportar JSON',
    btnImport: 'Importar JSON',
    btnReset: 'Redefinir design padrão',
    secLang: 'Idioma / Language',
    jsonError: 'Erro ao ler arquivo JSON.'
  },
  ar: {
    locale: 'ar-SA',
    pageTitle: 'علامة تبويب جديدة',
    shortcutsCount: 'الاختصارات',
    addShortcut: 'إضافة اختصار',
    editShortcut: 'تعديل الاختصار',
    addCardBtn: 'إضافة',
    studioTitle: 'استوديو التخصيص',
    studioHeader: '🎨 استوديو التخصيص',
    searchEngine: 'محرك البحث',
    searchPlaceholder: 'ابحث في الويب أو أدخل رابط URL...',
    lblTitle: 'العنوان',
    phTitle: 'مثال: YouTube',
    lblUrl: 'رابط URL',
    lblIcon: 'أيقونة مخصصة (رابط صورة — اختياري)',
    phIcon: 'اتركه فارغاً للأيقونة التلقائية',
    btnCancel: 'إلغاء',
    btnSave: 'حفظ',
    secPresets: 'القوالب الجاهزة',
    secBg: 'الخلفية والملاءمة',
    lblBgType: 'نوع الخلفية',
    optLinear: 'تدرج خطي',
    optRadial: 'تدرج دائري',
    optSolid: 'لون ثابت',
    optImage: 'صورة مخصصة / GIF',
    lblColor1: 'اللون 1',
    lblColor2: 'اللون 2',
    lblColor3: 'اللون 3',
    lblGradAngle: 'زاوية التدرج:',
    lblImgUrl: 'رابط الصورة (URL)',
    btnUploadPc: '📁 رفع صورة من الجهاز',
    lblCropSize: 'الاقتصاص والحجم',
    btnCenter: 'توسيط',
    lblDisplayMode: 'وضع العرض',
    optCover: 'ملء الشاشة (Cover)',
    optContain: 'احتواء كامل (Contain)',
    optCustomZoom: 'تكبير يدوي (%)',
    optStretch: 'تمديد (100% × 100%)',
    lblZoom: 'مقياس التكبير (Zoom):',
    lblPosX: 'الإزاحة الأفقية (X):',
    lblPosY: 'الإزاحة العمودية (Y):',
    chkRepeat: 'تكرار الخلفية',
    lblBgDim: 'تعتيم الخلفية:',
    lblBgBlur: 'ضبابية الخلفية:',
    secColors: 'نظام الألوان',
    lblAccent: 'اللون البارز',
    lblText: 'النص',
    lblTiles: 'البطاقات',
    secClock: 'الساعة والنيون والبحث',
    lblClockFont: 'نمط خط الساعة',
    optClockModern: 'عريض حديث (افتراضي)',
    optClockThin: 'رفيع بسيط',
    optClockCyber: 'سايبربانك رقمي',
    optClockSerif: 'كلاسيكي أنيق',
    optClockOutline: 'مفرغ الحواف',
    lblClockSize: 'حجم الساعة:',
    chkClockNeon: 'تفعيل نيون الساعة',
    lblNeonColor: 'لون النيون',
    lblNeonStrength: 'قوة إضاءة النيون:',
    chkClock: 'الساعة',
    chkSeconds: 'الثواني',
    chkDate: 'التاريخ',
    chkSearch: 'شريط البحث',
    lblSearchRadius: 'استدارة شريط البحث:',
    secGrid: 'الشبكة والبطاقات',
    lblCardLayout: 'تخطيط البطاقات',
    optLayoutVert: 'بطاقات كلاسيكية (عمودي)',
    optLayoutHoriz: 'أزرار مدمجة (أفقي)',
    optLayoutIcon: 'بسيط (أيقونات فقط)',
    lblCols: 'الأعمدة في الصف:',
    lblMaxWidth: 'عرض الحاوية:',
    lblGridGap: 'المسافة بين البطاقات:',
    lblCardRadius: 'استدارة الزوايا:',
    lblCardOpacity: 'شفافية البطاقات:',
    lblCardBlur: 'ضبابية الزجاج:',
    lblIconSize: 'حجم الأيقونات:',
    chkCardBorder: 'إطار البطاقات',
    chkShowAdd: 'زر "+" في الشبكة',
    secBackup: 'النسخ الاحتياطي وإعادة الضبط',
    btnExport: 'تصدير JSON',
    btnImport: 'استيراد JSON',
    btnReset: 'إعادة ضبط التصميم افتراضياً',
    secLang: 'اللغة / Language',
    jsonError: 'خطأ في قراءة ملف JSON.'
  }
};

// --- пресет ---
const PRESETS = {
  obsidian: {
    name: 'Obsidian Glass',
    bgType: 'radial', grad1: '#1e1b4b', grad2: '#0f172a', grad3: '#090d16', gradAngle: 135,
    accent: '#6366f1', textColor: '#f8fafc', cardColor: '#1e202c',
    cardOpacity: 55, cardBlur: 14, cardRadius: 16, cardBorder: true,
    clockStyle: 'modern', clockSize: 76, clockGlow: false, clockGlowColor: '#6366f1', clockGlowStrength: 28,
    cardLayout: 'vertical'
  },
  cyberpunk: {
    name: 'Cyberpunk 2077',
    bgType: 'linear', grad1: '#2e0249', grad2: '#090014', grad3: '#001f3f', gradAngle: 125,
    accent: '#00f0ff', textColor: '#fcee09', cardColor: '#120428',
    cardOpacity: 70, cardBlur: 10, cardRadius: 4, cardBorder: true,
    clockStyle: 'cyber', clockSize: 82, clockGlow: true, clockGlowColor: '#00f0ff', clockGlowStrength: 36,
    cardLayout: 'horizontal'
  },
  synthwave: {
    name: 'Sunset Synthwave',
    bgType: 'linear', grad1: '#ff0844', grad2: '#491d88', grad3: '#0f051d', gradAngle: 165,
    accent: '#ff2a85', textColor: '#fff0f5', cardColor: '#1f0c33',
    cardOpacity: 50, cardBlur: 16, cardRadius: 20, cardBorder: true,
    clockStyle: 'outline', clockSize: 88, clockGlow: true, clockGlowColor: '#ff007f', clockGlowStrength: 42,
    cardLayout: 'vertical'
  },
  ocean: {
    name: 'Deep Ocean',
    bgType: 'radial', grad1: '#0d47a1', grad2: '#002147', grad3: '#010b13', gradAngle: 135,
    accent: '#38bdf8', textColor: '#f0f9ff', cardColor: '#082032',
    cardOpacity: 45, cardBlur: 20, cardRadius: 24, cardBorder: true,
    clockStyle: 'thin', clockSize: 80, clockGlow: true, clockGlowColor: '#00d2ff', clockGlowStrength: 22,
    cardLayout: 'vertical'
  },
  forest: {
    name: 'Forest Zen',
    bgType: 'linear', grad1: '#132a13', grad2: '#0b1d13', grad3: '#050a07', gradAngle: 145,
    accent: '#10b981', textColor: '#ecfdf5', cardColor: '#12241b',
    cardOpacity: 60, cardBlur: 12, cardRadius: 14, cardBorder: true,
    clockStyle: 'serif', clockSize: 72, clockGlow: false, clockGlowColor: '#10b981', clockGlowStrength: 24,
    cardLayout: 'horizontal'
  },
  gold: {
    name: 'Royal Gold',
    bgType: 'radial', grad1: '#2b2111', grad2: '#12100e', grad3: '#080706', gradAngle: 135,
    accent: '#f59e0b', textColor: '#fef3c7', cardColor: '#1c1917',
    cardOpacity: 65, cardBlur: 16, cardRadius: 12, cardBorder: true,
    clockStyle: 'serif', clockSize: 78, clockGlow: true, clockGlowColor: '#ffb703', clockGlowStrength: 26,
    cardLayout: 'vertical'
  },
  crimson: {
    name: 'Crimson Stealth',
    bgType: 'linear', grad1: '#3b0404', grad2: '#140202', grad3: '#050505', gradAngle: 150,
    accent: '#ef4444', textColor: '#f8fafc', cardColor: '#170909',
    cardOpacity: 75, cardBlur: 8, cardRadius: 8, cardBorder: true,
    clockStyle: 'modern', clockSize: 76, clockGlow: true, clockGlowColor: '#ff1e1e', clockGlowStrength: 34,
    cardLayout: 'vertical'
  },
  frost: {
    name: 'Minimalist Frost',
    bgType: 'linear', grad1: '#334155', grad2: '#1e293b', grad3: '#0f172a', gradAngle: 120,
    accent: '#e2e8f0', textColor: '#ffffff', cardColor: '#ffffff',
    cardOpacity: 10, cardBlur: 24, cardRadius: 30, cardBorder: true,
    clockStyle: 'thin', clockSize: 84, clockGlow: false, clockGlowColor: '#ffffff', clockGlowStrength: 20,
    cardLayout: 'icon-only'
  }
};

const DEFAULT_SETTINGS = {
  ...PRESETS.obsidian,
  lang: 'en', // Изначально запускается на английском языке
  bgUrl: '',
  bgCustomData: '',
  bgFit: 'cover',
  bgScale: 100,
  bgPosX: 50,
  bgPosY: 50,
  bgRepeat: false,
  bgDim: 35,
  bgBlur: 8,
  cols: 6,
  gridGap: 16,
  maxWidth: 1160,
  iconSize: 28,
  searchRadius: 16,
  showClock: true,
  showSeconds: false,
  showDate: true,
  showSearch: true,
  showAddCard: true,
  searchEngine: 'https://www.google.com/search?q='
};

let state = {
  links: [],
  settings: { ...DEFAULT_SETTINGS }
};

let draggedIndex = null;

function t(key) {
  const lang = state.settings.lang || 'en';
  const dict = I18N[lang] || I18N.en;
  return dict[key] || I18N.en[key] || key;
}

// --- Применение перевода интерфейса ---
function applyLanguage() {
  const lang = state.settings.lang || 'en';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  const langSelect = document.getElementById('set-lang');
  if (langSelect) langSelect.value = lang;

  updateClockNow();
}

// --- Хранилище ---
const storage = {
  getSyncCache: () => {
    try {
      const links = localStorage.getItem('qt_cache_links');
      const settings = localStorage.getItem('qt_cache_settings');
      const bgData = localStorage.getItem('qt_cache_bg');
      const parsedSettings = settings ? JSON.parse(settings) : null;
      if (parsedSettings && bgData) {
        parsedSettings.bgCustomData = bgData;
      }
      return {
        links: links ? JSON.parse(links) : null,
        settings: parsedSettings
      };
    } catch {
      return { links: null, settings: null };
    }
  },
  saveSyncCache: (obj) => {
    try {
      if (obj.links) {
        localStorage.setItem('qt_cache_links', JSON.stringify(obj.links));
      }
      if (obj.settings) {
        // 1. Всегда надежно сохраняем легкие настройки
        const { bgCustomData, ...lightSettings } = obj.settings;
        localStorage.setItem('qt_cache_settings', JSON.stringify(lightSettings));

        // 2. Отдельно пытаемся закэшировать само фото фона для загрузки за 0 мс
        if (bgCustomData) {
          try {
            localStorage.setItem('qt_cache_bg', bgCustomData);
          } catch (e) {
            // Если фото тяжелее лимита localStorage (~5 МБ), оно просто подгрузится из chrome.storage
          }
        } else {
          localStorage.removeItem('qt_cache_bg');
        }
      }
    } catch (e) {}
  },
  get: (keys) => new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(keys, (res) => {
        resolve(res || {});
      });
    } else {
      const res = {};
      keys.forEach(k => {
        const val = localStorage.getItem(k);
        if (val) res[k] = JSON.parse(val);
      });
      resolve(res);
    }
  }),
  set: (obj) => new Promise((resolve) => {
    storage.saveSyncCache(obj);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set(obj, resolve);
    } else {
      Object.keys(obj).forEach(k => localStorage.setItem(k, JSON.stringify(obj[k])));
      resolve();
    }
  })
};

function hexToRgba(hex, alpha) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

// --- 1 ---
async function initApp() {
  // 1. Мгновенно берем данные и фото из синхронного кэша (0 мс до первого кадра)
  const cached = storage.getSyncCache();
  const hasCachedLinks = Array.isArray(cached.links);
  const hasCachedSettings = Boolean(cached.settings);

  state.links = hasCachedLinks ? cached.links : DEFAULT_LINKS;
  state.settings = hasCachedSettings ? { ...DEFAULT_SETTINGS, ...cached.settings } : { ...DEFAULT_SETTINGS };

  renderPresets();
  initClock();
  applyLanguage();
  applySettings();
  renderGrid();
  bindEvents();

  // 2. Фоновая сверка с chrome.storage.local
  const data = await storage.get(['links', 'settings']);
  let linksChanged = false;
  let settingsChanged = false;

  if (Array.isArray(data.links)) {
    if (!hasCachedLinks || JSON.stringify(data.links) !== JSON.stringify(state.links)) {
      state.links = data.links;
      linksChanged = true;
    }
  }

  if (data.settings) {
    const fullSettings = { ...DEFAULT_SETTINGS, ...data.settings };
    if (!hasCachedSettings || JSON.stringify(fullSettings) !== JSON.stringify(state.settings)) {
      state.settings = fullSettings;
      settingsChanged = true;
    }
  }

  // Перерисовываем ТОЛЬКО если в кэше еще не было данных (самый первый запуск)
  if (linksChanged || settingsChanged) {
    storage.saveSyncCache({ links: state.links, settings: state.settings });
    requestAnimationFrame(() => {
      if (settingsChanged) {
        applyLanguage();
        applySettings();
      }
      if (linksChanged || settingsChanged) {
        renderGrid();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// --- Часы ---
function updateClockNow() {
  const clockEl = document.getElementById('clock');
  const dateEl = document.getElementById('date');
  if (!clockEl || !dateEl) return;

  const now = new Date();
  const locale = t('locale');
  const opts = { hour: '2-digit', minute: '2-digit' };
  if (state.settings.showSeconds) opts.second = '2-digit';
  clockEl.textContent = now.toLocaleTimeString(locale, opts);
  dateEl.textContent = now.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
}

function initClock() {
  updateClockNow();
  setInterval(updateClockNow, 1000);
}

// --- Рендер пресетов ---
function renderPresets() {
  const container = document.getElementById('presets-grid');
  container.innerHTML = '';

  Object.keys(PRESETS).forEach(key => {
    const p = PRESETS[key];
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.innerHTML = `
      <span class="preset-swatch" style="background: linear-gradient(135deg, ${p.grad1}, ${p.accent})"></span>
      <span>${p.name}</span>
    `;
    btn.addEventListener('click', async () => {
      state.settings = { ...state.settings, ...p };
      applySettings();
      renderGrid();
      await storage.set({ settings: state.settings });
    });
    container.appendChild(btn);
  });
}

// --- Применение настроек ---
function applySettings() {
  const s = state.settings;
  const root = document.documentElement.style;

  // CSS переменные
  root.setProperty('--grid-cols', s.cols);
  root.setProperty('--grid-gap', `${s.gridGap}px`);
  root.setProperty('--max-width', `${s.maxWidth}px`);
  root.setProperty('--bg-dim', s.bgDim / 100);
  root.setProperty('--bg-blur', `${s.bgBlur}px`);
  root.setProperty('--accent', s.accent);
  root.setProperty('--text-main', s.textColor);
  root.setProperty('--card-bg', hexToRgba(s.cardColor, s.cardOpacity / 100));
  root.setProperty('--card-border', s.cardBorder ? 'rgba(255, 255, 255, 0.12)' : 'transparent');
  root.setProperty('--card-radius', `${s.cardRadius}px`);
  root.setProperty('--card-blur', `${s.cardBlur}px`);
  root.setProperty('--icon-size', `${s.iconSize}px`);
  root.setProperty('--clock-size', `${s.clockSize}px`);
  root.setProperty('--clock-glow-color', s.clockGlowColor || s.accent);
  root.setProperty('--clock-glow-spread', `${s.clockGlowStrength || 28}px`);
  root.setProperty('--search-radius', `${s.searchRadius}px`);

  // Настройка фона и трансформация картинки
  const bgLayer = document.getElementById('bg-layer');
  const activeImageSrc = (s.bgUrl && s.bgUrl.trim() !== '') ? s.bgUrl.trim() : s.bgCustomData;

  if (s.bgType === 'image' && activeImageSrc) {
    bgLayer.style.backgroundImage = `url("${activeImageSrc}")`;
    bgLayer.style.backgroundPosition = `${s.bgPosX}% ${s.bgPosY}%`;
    bgLayer.style.backgroundRepeat = s.bgRepeat ? 'repeat' : 'no-repeat';

    if (s.bgFit === 'cover') {
      bgLayer.style.backgroundSize = 'cover';
    } else if (s.bgFit === 'contain') {
      bgLayer.style.backgroundSize = 'contain';
    } else if (s.bgFit === 'stretch') {
      bgLayer.style.backgroundSize = '100% 100%';
    } else {
      bgLayer.style.backgroundSize = `${s.bgScale}%`;
    }
  } else if (s.bgType === 'solid') {
    bgLayer.style.backgroundImage = 'none';
    bgLayer.style.backgroundColor = s.grad1;
  } else if (s.bgType === 'radial') {
    bgLayer.style.backgroundImage = `radial-gradient(circle at 20% 20%, ${s.grad1} 0%, ${s.grad2} 50%, ${s.grad3} 100%)`;
    bgLayer.style.backgroundSize = 'cover';
  } else {
    bgLayer.style.backgroundImage = `linear-gradient(${s.gradAngle}deg, ${s.grad1} 0%, ${s.grad2} 50%, ${s.grad3} 100%)`;
    bgLayer.style.backgroundSize = 'cover';
  }

  // Показ/скрытие секций настроек фона
  document.getElementById('gradient-controls').style.display = s.bgType === 'image' ? 'none' : 'block';
  document.getElementById('image-controls').style.display = s.bgType === 'image' ? 'block' : 'none';
  document.getElementById('wrap-grad2').style.display = s.bgType === 'solid' ? 'none' : 'flex';
  document.getElementById('wrap-grad3').style.display = s.bgType === 'solid' ? 'none' : 'flex';
  document.getElementById('wrap-angle').style.display = s.bgType === 'linear' ? 'block' : 'none';

  // Стиль часов
  const clockEl = document.getElementById('clock');
  clockEl.className = `clock style-${s.clockStyle}` + (s.clockGlow ? ' glow' : '');
  clockEl.style.display = s.showClock ? 'block' : 'none';

  document.getElementById('date').style.display = s.showDate ? 'block' : 'none';
  document.getElementById('search-form').style.display = s.showSearch ? 'flex' : 'none';

  // Макет карточек
  const grid = document.getElementById('bookmarks-grid');
  grid.className = `bookmarks-grid layout-${s.cardLayout}`;

  // Синхронизация значений в панели настроек
  const syncInput = (id, val, labelId, suffix = '') => {
    const el = document.getElementById(id);
    if (el) el.value = val;
    if (labelId) document.getElementById(labelId).textContent = `${val}${suffix}`;
  };

  syncInput('set-bgType', s.bgType);
  syncInput('set-grad1', s.grad1);
  syncInput('set-grad2', s.grad2);
  syncInput('set-grad3', s.grad3);
  syncInput('set-gradAngle', s.gradAngle, 'val-gradAngle', '°');
  syncInput('set-bgUrl', s.bgUrl);
  syncInput('set-bgFit', s.bgFit);
  syncInput('set-bgScale', s.bgScale, 'val-bgScale', '%');
  syncInput('set-bgPosX', s.bgPosX, 'val-bgPosX', '%');
  syncInput('set-bgPosY', s.bgPosY, 'val-bgPosY', '%');
  syncInput('set-bgDim', s.bgDim, 'val-bgDim', '%');
  syncInput('set-bgBlur', s.bgBlur, 'val-bgBlur', 'px');
  syncInput('set-accent', s.accent);
  syncInput('set-textColor', s.textColor);
  syncInput('set-cardColor', s.cardColor);
  syncInput('set-clockStyle', s.clockStyle);
  syncInput('set-clockSize', s.clockSize, 'val-clockSize', 'px');
  syncInput('set-clockGlowColor', s.clockGlowColor || s.accent);
  syncInput('set-clockGlowStrength', s.clockGlowStrength || 28, 'val-clockGlowStrength', 'px');
  syncInput('set-searchRadius', s.searchRadius, 'val-searchRadius', 'px');
  syncInput('set-cardLayout', s.cardLayout);
  syncInput('set-cols', s.cols, 'val-cols');
  syncInput('set-maxWidth', s.maxWidth, 'val-maxWidth', 'px');
  syncInput('set-gridGap', s.gridGap, 'val-gridGap', 'px');
  syncInput('set-cardRadius', s.cardRadius, 'val-cardRadius', 'px');
  syncInput('set-cardOpacity', s.cardOpacity, 'val-cardOpacity', '%');
  syncInput('set-cardBlur', s.cardBlur, 'val-cardBlur', 'px');
  syncInput('set-iconSize', s.iconSize, 'val-iconSize', 'px');
  syncInput('engine-select', s.searchEngine);
  syncInput('set-lang', s.lang || 'en');

  document.getElementById('set-bgRepeat').checked = Boolean(s.bgRepeat);
  document.getElementById('set-showClock').checked = s.showClock;
  document.getElementById('set-showSeconds').checked = s.showSeconds;
  document.getElementById('set-clockGlow').checked = s.clockGlow;
  document.getElementById('set-showDate').checked = s.showDate;
  document.getElementById('set-showSearch').checked = s.showSearch;
  document.getElementById('set-cardBorder').checked = s.cardBorder;
  document.getElementById('set-showAddCard').checked = s.showAddCard;
}

// --- Утилиты ссылок ---
function normalizeUrl(raw) {
  let url = raw.trim();
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  return url;
}

function getFaviconUrl(url, customIcon) {
  if (customIcon && customIcon.trim() !== '') return customIcon.trim();
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return '';
  }
}

// --- Рендер сетки закладок ---
function renderGrid() {
  const grid = document.getElementById('bookmarks-grid');
  const counter = document.getElementById('links-counter');
  grid.innerHTML = '';
  counter.textContent = `${t('shortcutsCount')}: ${state.links.length}`;

  state.links.forEach((item, index) => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = item.url;
    card.title = item.title;
    card.draggable = true;

    const iconWrap = document.createElement('div');
    iconWrap.className = 'card-icon-wrap';

    const img = document.createElement('img');
    img.className = 'card-icon';
    img.src = getFaviconUrl(item.url, item.icon);
    img.alt = item.title;

    img.onerror = () => {
      img.remove();
      const fallback = document.createElement('span');
      fallback.className = 'card-fallback';
      fallback.textContent = (item.title || '?')[0];
      iconWrap.appendChild(fallback);
    };

    iconWrap.appendChild(img);

    const title = document.createElement('span');
    title.className = 'card-title';
    title.textContent = item.title;

    const controls = document.createElement('div');
    controls.className = 'card-controls';

    const editBtn = document.createElement('button');
    editBtn.className = 'ctrl-btn edit';
    editBtn.textContent = '✎';
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openLinkModal(index);
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'ctrl-btn';
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      state.links.splice(index, 1);
      await storage.set({ links: state.links });
      renderGrid();
    });

    controls.appendChild(editBtn);
    controls.appendChild(delBtn);

    card.appendChild(controls);
    card.appendChild(iconWrap);
    card.appendChild(title);

    // Drag & Drop
    card.addEventListener('dragstart', () => {
      draggedIndex = index;
      setTimeout(() => card.classList.add('dragging'), 0);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      draggedIndex = null;
    });
    card.addEventListener('dragover', (e) => e.preventDefault());
    card.addEventListener('drop', async (e) => {
      e.preventDefault();
      if (draggedIndex === null || draggedIndex === index) return;
      const moved = state.links.splice(draggedIndex, 1)[0];
      state.links.splice(index, 0, moved);
      await storage.set({ links: state.links });
      renderGrid();
    });

    grid.appendChild(card);
  });

  if (state.settings.showAddCard) {
    const addCard = document.createElement('div');
    addCard.className = 'card card-add';
    addCard.innerHTML = `<span style="font-size: 24px;">+</span><span class="card-title">${t('addCardBtn')}</span>`;
    addCard.addEventListener('click', () => openLinkModal());
    grid.appendChild(addCard);
  }
}

// --- Модалка ярлыка ---
function openLinkModal(editIndex = null) {
  const modal = document.getElementById('modal-link');
  const idxInput = document.getElementById('link-index');
  const nameInput = document.getElementById('link-title');
  const urlInput = document.getElementById('link-url');
  const iconInput = document.getElementById('link-icon');

  if (editIndex !== null) {
    const item = state.links[editIndex];
    document.getElementById('modal-title').textContent = t('editShortcut');
    idxInput.value = editIndex;
    nameInput.value = item.title;
    urlInput.value = item.url;
    iconInput.value = item.icon || '';
  } else {
    document.getElementById('modal-title').textContent = t('addShortcut');
    idxInput.value = '';
    nameInput.value = '';
    urlInput.value = '';
    iconInput.value = '';
  }

  modal.classList.add('active');
  nameInput.focus();
}

// --- События ---
function bindEvents() {
  // Поиск
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    const isDomain = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(query) && !query.includes(' ');
    if (/^https?:\/\//i.test(query) || isDomain) {
      window.location.href = normalizeUrl(query);
    } else {
      window.location.href = state.settings.searchEngine + encodeURIComponent(query);
    }
  });

  document.getElementById('engine-select').addEventListener('change', async (e) => {
    state.settings.searchEngine = e.target.value;
    await storage.set({ settings: state.settings });
  });

  // Смена языка
  document.getElementById('set-lang').addEventListener('change', async (e) => {
    state.settings.lang = e.target.value;
    applyLanguage();
    renderGrid();
    await storage.set({ settings: state.settings });
  });

  // Открытие/закрытие боковой студии
  const drawer = document.getElementById('settings-drawer');
  document.getElementById('btn-settings').addEventListener('click', () => drawer.classList.toggle('open'));
  document.getElementById('btn-close-settings').addEventListener('click', () => drawer.classList.remove('open'));

  // Модалка добавления ссылки
  document.getElementById('btn-add').addEventListener('click', () => openLinkModal());
  document.getElementById('btn-cancel-link').addEventListener('click', () => {
    document.getElementById('modal-link').classList.remove('active');
  });

  document.getElementById('link-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const idx = document.getElementById('link-index').value;
    const newItem = {
      title: document.getElementById('link-title').value.trim(),
      url: normalizeUrl(document.getElementById('link-url').value),
      icon: document.getElementById('link-icon').value.trim()
    };
    if (idx !== '') state.links[Number(idx)] = newItem;
    else state.links.push(newItem);

    await storage.set({ links: state.links });
    renderGrid();
    document.getElementById('modal-link').classList.remove('active');
  });

  // Загрузка картинки с ПК
  document.getElementById('input-bg-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      state.settings.bgType = 'image';
      state.settings.bgUrl = '';
      state.settings.bgCustomData = ev.target.result;
      applySettings();
      await storage.set({ settings: state.settings });
    };
    reader.readAsDataURL(file);
  });

  // Быстрое центрирование и сброс зума фона
  document.getElementById('btn-center-bg').addEventListener('click', async () => {
    state.settings.bgPosX = 50;
    state.settings.bgPosY = 50;
    state.settings.bgScale = 100;
    applySettings();
    await storage.set({ settings: state.settings });
  });

  // Автоматическая привязка всех ползунков, селектов и пикеров цветов
  const settingMap = {
    'set-bgType': 'bgType',
    'set-grad1': 'grad1',
    'set-grad2': 'grad2',
    'set-grad3': 'grad3',
    'set-gradAngle': 'gradAngle',
    'set-bgUrl': 'bgUrl',
    'set-bgFit': 'bgFit',
    'set-bgScale': 'bgScale',
    'set-bgPosX': 'bgPosX',
    'set-bgPosY': 'bgPosY',
    'set-bgDim': 'bgDim',
    'set-bgBlur': 'bgBlur',
    'set-accent': 'accent',
    'set-textColor': 'textColor',
    'set-cardColor': 'cardColor',
    'set-clockStyle': 'clockStyle',
    'set-clockSize': 'clockSize',
    'set-clockGlowColor': 'clockGlowColor',
    'set-clockGlowStrength': 'clockGlowStrength',
    'set-searchRadius': 'searchRadius',
    'set-cardLayout': 'cardLayout',
    'set-cols': 'cols',
    'set-maxWidth': 'maxWidth',
    'set-gridGap': 'gridGap',
    'set-cardRadius': 'cardRadius',
    'set-cardOpacity': 'cardOpacity',
    'set-cardBlur': 'cardBlur',
    'set-iconSize': 'iconSize'
  };

  Object.keys(settingMap).forEach(inputId => {
    const el = document.getElementById(inputId);
    const prop = settingMap[inputId];
    el.addEventListener('input', async (e) => {
      const val = e.target.type === 'range' ? Number(e.target.value) : e.target.value;
      state.settings[prop] = val;

      if (prop === 'bgScale' && state.settings.bgFit !== 'custom') {
        state.settings.bgFit = 'custom';
      }
      if ((prop === 'clockGlowColor' || prop === 'clockGlowStrength') && !state.settings.clockGlow) {
        state.settings.clockGlow = true;
      }

      applySettings();
      await storage.set({ settings: state.settings });
    });
  });

  // Привязка чекбоксов
  const toggleMap = {
    'set-bgRepeat': 'bgRepeat',
    'set-showClock': 'showClock',
    'set-showSeconds': 'showSeconds',
    'set-clockGlow': 'clockGlow',
    'set-showDate': 'showDate',
    'set-showSearch': 'showSearch',
    'set-cardBorder': 'cardBorder',
    'set-showAddCard': 'showAddCard'
  };

  Object.keys(toggleMap).forEach(checkId => {
    const el = document.getElementById(checkId);
    const prop = toggleMap[checkId];
    el.addEventListener('change', async (e) => {
      state.settings[prop] = e.target.checked;
      applySettings();
      if (prop === 'showAddCard') renderGrid();
      if (prop === 'showSeconds') updateClockNow();
      await storage.set({ settings: state.settings });
    });
  });

  // Сброс дизайна
  document.getElementById('btn-reset-settings').addEventListener('click', async () => {
    const currentLang = state.settings.lang || 'en';
    state.settings = { ...DEFAULT_SETTINGS, lang: currentLang };
    applyLanguage();
    applySettings();
    renderGrid();
    await storage.set({ settings: state.settings });
  });

  // Экспорт и Импорт
  document.getElementById('btn-export').addEventListener('click', () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = 'quantum-tab-theme-backup.json';
    a.click();
  });

  document.getElementById('input-import').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported.links)) state.links = imported.links;
        if (imported.settings) state.settings = { ...DEFAULT_SETTINGS, ...imported.settings };
        await storage.set(state);
        applyLanguage();
        applySettings();
        renderGrid();
      } catch {
        alert(t('jsonError'));
      }
    };
    reader.readAsText(file);
  });
}