/**
 * NEXUS TECH - E-Commerce SPA (Vanilla ES6+)
 * Imagens locais na pasta /images + fallback SVG automático.
 */

'use strict';

/* ==========================================================================
   1. ILUSTRAÇÕES VETORIAIS SVG (FALLBACK OFFLINE)
   ========================================================================== */
function getProductArtwork(type) {
  const artworks = {
    gpu: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="34" width="184" height="92" rx="12" fill="#0f172a" stroke="#00e5ff" stroke-width="2.5"/>
        <circle cx="72" cy="80" r="30" fill="#1e293b" stroke="#00e5ff" stroke-width="2"/>
        <circle cx="72" cy="80" r="10" fill="#00e5ff"/>
        <path d="M72 52V66M72 94V108M44 80H58M86 80H100" stroke="#00e5ff" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="148" cy="80" r="30" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="148" cy="80" r="10" fill="#7c3aed"/>
        <path d="M148 52V66M148 94V108M120 80H134M162 80H176" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="34" y="126" width="90" height="8" rx="2" fill="#f59e0b"/>
      </svg>`,
    cpu: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="25" width="110" height="110" rx="14" fill="#1e293b" stroke="#00e5ff" stroke-width="2.5"/>
        <rect x="75" y="45" width="70" height="70" rx="8" fill="#0f172a" stroke="#7c3aed" stroke-width="2"/>
        <text x="110" y="84" fill="#00e5ff" font-size="14" font-weight="bold" text-anchor="middle" font-family="monospace">RYZEN 9</text>
        <path d="M40 48H55M40 70H55M40 90H55M40 112H55M165 48H180M165 70H180M165 90H180M165 112H180" stroke="#00e5ff" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    ram: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="45" width="172" height="44" rx="6" fill="#1e293b" stroke="#00e5ff" stroke-width="2"/>
        <rect x="24" y="45" width="172" height="8" rx="3" fill="url(#rgbGrad)"/>
        <rect x="38" y="60" width="24" height="20" rx="2" fill="#0f172a"/>
        <rect x="72" y="60" width="24" height="20" rx="2" fill="#0f172a"/>
        <rect x="106" y="60" width="24" height="20" rx="2" fill="#0f172a"/>
        <rect x="140" y="60" width="24" height="20" rx="2" fill="#0f172a"/>
        <rect x="32" y="96" width="156" height="26" rx="5" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
        <defs>
          <linearGradient id="rgbGrad" x1="24" y1="45" x2="196" y2="45" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00e5ff"/><stop offset="0.5" stop-color="#7c3aed"/><stop offset="1" stop-color="#10b981"/>
          </linearGradient>
        </defs>
      </svg>`,
    ssd: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="54" width="160" height="52" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2.5"/>
        <rect x="46" y="66" width="38" height="28" rx="4" fill="#1e293b" stroke="#00e5ff" stroke-width="1.5"/>
        <rect x="94" y="66" width="52" height="28" rx="4" fill="#1e293b" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="120" y="84" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">NVMe 2TB</text>
        <path d="M174 64V96" stroke="#f59e0b" stroke-width="4" stroke-dasharray="4 3"/>
      </svg>`,
    keyboard: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="44" width="180" height="74" rx="10" fill="#1e293b" stroke="#00e5ff" stroke-width="2.5"/>
        <g fill="#0f172a" stroke="#7c3aed" stroke-width="1.4">
          <rect x="32" y="56" width="18" height="14" rx="3"/><rect x="55" y="56" width="18" height="14" rx="3"/>
          <rect x="78" y="56" width="18" height="14" rx="3"/><rect x="101" y="56" width="18" height="14" rx="3"/>
          <rect x="124" y="56" width="18" height="14" rx="3"/><rect x="147" y="56" width="18" height="14" rx="3"/>
          <rect x="170" y="56" width="18" height="14" rx="3"/>
          <rect x="32" y="75" width="24" height="14" rx="3"/><rect x="61" y="75" width="18" height="14" rx="3"/>
          <rect x="84" y="75" width="18" height="14" rx="3"/><rect x="107" y="75" width="18" height="14" rx="3"/>
          <rect x="130" y="75" width="18" height="14" rx="3"/><rect x="153" y="75" width="35" height="14" rx="3"/>
          <rect x="64" y="94" width="84" height="14" rx="3" stroke="#00e5ff"/>
        </g>
      </svg>`,
    mouse: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="78" y="24" width="64" height="112" rx="32" fill="#1e293b" stroke="#00e5ff" stroke-width="2.5"/>
        <line x1="110" y1="24" x2="110" y2="68" stroke="#00e5ff" stroke-width="2"/>
        <line x1="78" y1="68" x2="142" y2="68" stroke="#7c3aed" stroke-width="2"/>
        <rect x="105" y="38" width="10" height="20" rx="5" fill="#00e5ff"/>
      </svg>`,
    headset: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58 92V76C58 47.28 81.28 24 110 24C138.72 24 162 47.28 162 76V92" stroke="#00e5ff" stroke-width="6" stroke-linecap="round"/>
        <rect x="44" y="78" width="24" height="44" rx="10" fill="#1e293b" stroke="#7c3aed" stroke-width="2.5"/>
        <rect x="152" y="78" width="24" height="44" rx="10" fill="#1e293b" stroke="#7c3aed" stroke-width="2.5"/>
        <path d="M56 122C56 134 76 138 96 136" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    webcam: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="52" y="42" width="116" height="62" rx="31" fill="#1e293b" stroke="#00e5ff" stroke-width="2.5"/>
        <circle cx="110" cy="73" r="22" fill="#0f172a" stroke="#7c3aed" stroke-width="3"/>
        <circle cx="110" cy="73" r="10" fill="#00e5ff"/>
        <path d="M84 104L72 130H148L136 104" stroke="#94a3b8" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,
    laptop: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="28" width="136" height="86" rx="8" fill="#0f172a" stroke="#00e5ff" stroke-width="2.5"/>
        <polygon points="54,102 95,52 128,82 152,60 168,102" fill="rgba(124,58,237,0.35)" stroke="#7c3aed" stroke-width="2"/>
        <path d="M24 114H196L186 128H34L24 114Z" fill="#1e293b" stroke="#00e5ff" stroke-width="2"/>
      </svg>`,
    monitor: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="26" width="176" height="92" rx="10" fill="#0f172a" stroke="#00e5ff" stroke-width="2.5"/>
        <path d="M36 96Q110 44 184 96" stroke="#7c3aed" stroke-width="3" fill="none"/>
        <path d="M36 82Q110 34 184 82" stroke="#10b981" stroke-width="2" fill="none"/>
        <path d="M96 118L90 138H130L124 118" stroke="#94a3b8" stroke-width="3"/>
        <line x1="74" y1="138" x2="146" y2="138" stroke="#00e5ff" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    arm: `
      <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M110 134V94M110 94L58 58V34M110 94L162 58V34" stroke="#00e5ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="36" y="22" width="44" height="26" rx="4" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
        <rect x="140" y="22" width="44" height="26" rx="4" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
        <rect x="92" y="130" width="36" height="10" rx="3" fill="#10b981"/>
      </svg>`
  };
  return artworks[type] || artworks.gpu;
}

/* ==========================================================================
   1.1 IMAGENS LOCAIS (PASTA /images) + FALLBACK SVG
   ========================================================================== */
const PRODUCT_IMAGES = {
  gpu: 'images/gpu.jpg',
  cpu: 'images/cpu.jpg',
  ram: 'images/ram.jpg',
  ssd: 'images/ssd.jpg',
  keyboard: 'images/keyboard.jpg',
  mouse: 'images/mouse.jpg',
  headset: 'images/headset.jpg',
  webcam: 'images/webcam.jpg',
  laptop: 'images/laptop.jpg',
  monitor: 'images/monitor.jpg',
  monitor2: 'images/monitor2.jpg',
  arm: 'images/arm.jpg'
};

const CAROUSEL_IMAGES = {
  0: 'images/slide1.jpg',
  1: 'images/slide2.jpg',
  2: 'images/slide3.jpg'
};

function getProductImage(product) {
  const src = product.imageUrl || PRODUCT_IMAGES[product.artwork];
  return `
    <div class="product-image-wrap">
      <img
        src="${src}"
        alt="${product.name}"
        loading="lazy"
        class="product-image"
        onerror="this.parentElement.classList.add('img-error'); this.remove();"
      />
      <div class="product-svg-fallback">${getProductArtwork(product.artwork)}</div>
    </div>
  `;
}

function getCarouselImage(slideIndex, artworkFallback) {
  const src = CAROUSEL_IMAGES[slideIndex];
  return `
    <div class="slide-image-wrap">
      <img
        src="${src}"
        alt=""
        loading="eager"
        class="slide-image"
        onerror="this.parentElement.classList.add('img-error'); this.remove();"
      />
      <div class="slide-svg-fallback">${getProductArtwork(artworkFallback)}</div>
    </div>
  `;
}

/* ==========================================================================
   2. BANCO DE DADOS EM MEMÓRIA
   ========================================================================== */
const CAROUSEL_SLIDES = [
  {
    id: 'slide-1',
    theme: 'slide-theme-cyan',
    badge: 'Nova Geração Ada & Blackwell',
    title: 'Domine o Ray Tracing em 4K Nativo',
    description: 'Placas de vídeo RTX série 5000 e processadores Ryzen 9 com até 20% de desconto à vista no PIX e envio imediato.',
    ctaPrimary: { label: 'Explorar Hardware', route: 'hardware' },
    ctaSecondary: { label: 'Ver Ofertas', route: 'ofertas' },
    artwork: 'gpu'
  },
  {
    id: 'slide-2',
    theme: 'slide-theme-violet',
    badge: 'Setup Competitivo Pro',
    description: 'Teclados mecânicos custom gasket-mount, mouses ultraleves de 49g e headsets sem fio de baixa latência.',
    title: 'Precisão Absoluta em Cada Milissegundo',
    ctaPrimary: { label: 'Ver Periféricos', route: 'perifericos' },
    ctaSecondary: { label: 'Montar Carrinho', route: 'carrinho' },
    artwork: 'keyboard'
  },
  {
    id: 'slide-3',
    theme: 'slide-theme-emerald',
    badge: 'Workstation & Alta Taxa de Atualização',
    description: 'Notebooks com telas QHD 240Hz e monitores Ultrawide OLED calibrados de fábrica para jogos e criação.',
    title: 'Performance Extrema Onde Você Estiver',
    ctaPrimary: { label: 'Notebooks & Monitores', route: 'notebooks-monitores' },
    ctaSecondary: { label: 'Saiba Mais', route: 'sobre' },
    artwork: 'laptop'
  }
];

const PRODUCTS = [
  {
    id: 'hw-01',
    sku: 'NX-RTX5070TI',
    name: 'Placa de Vídeo RTX 5070 Ti OC 16GB GDDR7',
    category: 'hardware',
    categoryLabel: 'Hardware',
    subCategory: 'Placas de Vídeo',
    specsSummary: '16GB GDDR7 • DLSS 4 • Triple Fan ARGB • PCIe 5.0',
    oldPrice: 6899.90,
    price: 5699.90,
    discount: 17,
    offer: true,
    artwork: 'gpu',
    description: 'Projetada para entusiastas que exigem taxas de quadros altíssimas em 1440p e 4K com Ray Tracing ativado e refrigeração silenciosa de câmara de vapor.',
    fullSpecs: {
      'Arquitetura': 'NVIDIA Blackwell',
      'Memória de Vídeo': '16GB GDDR7 (256-bit)',
      'Boost Clock': '2.640 MHz (Modo OC)',
      'Saídas de Vídeo': '3x DisplayPort 2.1a, 1x HDMI 2.1b',
      'Fonte Recomendada': '750W 80 Plus Gold'
    }
  },
  {
    id: 'hw-02',
    sku: 'NX-R9-9900X',
    name: 'Processador AMD Ryzen 9 9900X 12-Core 5.6GHz',
    category: 'hardware',
    categoryLabel: 'Hardware',
    subCategory: 'Processadores',
    specsSummary: '12 Núcleos / 24 Threads • Cache 76MB • Soquete AM5',
    oldPrice: 3499.00,
    price: 2949.00,
    discount: 16,
    offer: true,
    artwork: 'cpu',
    description: 'Arquitetura Zen 5 de 4nm com eficiência energética superior para renderização pesada, compilação de código e jogos competitivos.',
    fullSpecs: {
      'Núcleos / Threads': '12 Cores / 24 Threads',
      'Clock Base / Boost': '4.4 GHz / até 5.6 GHz',
      'Cache Total': '76 MB (L2 + L3)',
      'Soquete': 'AM5 (Suporte DDR5 e PCIe 5.0)',
      'TDP Padrão': '120W'
    }
  },
  {
    id: 'hw-03',
    sku: 'NX-DDR5-32G',
    name: 'Memória RAM DDR5 32GB (2x16GB) 6400MHz CL32 RGB',
    category: 'hardware',
    categoryLabel: 'Hardware',
    subCategory: 'Memória RAM',
    specsSummary: 'Dual Channel • Perfil XMP 3.0 & EXPO • Dissipador Alumínio',
    oldPrice: 1199.00,
    price: 989.90,
    discount: 0,
    offer: false,
    artwork: 'ram',
    description: 'Módulos selecionados manualmente com dissipador térmico de alumínio anodizado e barra de iluminação RGB endereçável.',
    fullSpecs: {
      'Capacidade': '32GB (Kit 2x 16GB)',
      'Frequência': '6400 MT/s',
      'Latência CAS': 'CL32-39-39-102',
      'Tensão': '1.35V',
      'Compatibilidade': 'Intel XMP 3.0 e AMD EXPO'
    }
  },
  {
    id: 'hw-04',
    sku: 'NX-NVME-2TB',
    name: 'SSD NVMe M.2 Gen5 2TB Leitura 12.400MB/s',
    category: 'hardware',
    categoryLabel: 'Hardware',
    subCategory: 'Armazenamento',
    specsSummary: 'PCIe 5.0 x4 • Dissipador Grafeno • Controlador Octa-Channel',
    oldPrice: 1799.00,
    price: 1399.90,
    discount: 22,
    offer: true,
    artwork: 'ssd',
    description: 'Carregamento instantâneo de jogos via DirectStorage e transferência de arquivos 4K em segundos com alta durabilidade TBW.',
    fullSpecs: {
      'Interface': 'PCIe Gen 5.0 x4, NVMe 2.0',
      'Leitura Sequencial': 'Até 12.400 MB/s',
      'Gravação Sequencial': 'Até 11.800 MB/s',
      'Formato': 'M.2 2280',
      'Garantia': '5 anos oficial'
    }
  },
  {
    id: 'pr-01',
    sku: 'NX-KB75-PRO',
    name: 'Teclado Mecânico Custom 75% Gasket Wireless RGB',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    subCategory: 'Teclados',
    specsSummary: 'Switches Lineares Lubrificados • Tri-Mode • Keycaps PBT',
    oldPrice: 749.90,
    price: 599.90,
    discount: 20,
    offer: true,
    artwork: 'keyboard',
    description: 'Construção interna com 5 camadas de isolamento acústico, montagem Gasket Mount e knob rotativo metálico para controle de mídia.',
    fullSpecs: {
      'Layout': '75% Compacto (82 teclas + Knob)',
      'Switches': 'Nexus Linear Pro (Hot-Swappable 5 pinos)',
      'Conectividade': '2.4GHz Low-Latency, Bluetooth 5.3 e USB-C',
      'Keycaps': 'PBT Double-Shot Anti-brilho',
      'Bateria': '4.000 mAh (até 180h sem RGB)'
    }
  },
  {
    id: 'pr-02',
    sku: 'NX-MS-49G',
    name: 'Mouse Gamer Ultraleve 49g Sensor Óptico 30K DPI',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    subCategory: 'Mouses',
    specsSummary: 'Polling Rate 4000Hz • Switches Ópticos • Pés 100% PTFE',
    oldPrice: 549.90,
    price: 469.90,
    discount: 0,
    offer: false,
    artwork: 'mouse',
    description: 'Desenvolvido em parceria com atletas de e-Sports para movimentos ultrarrápidos sem fadiga, com revestimento fosco aderente.',
    fullSpecs: {
      'Peso': '49 gramas (sem furos)',
      'Sensor': 'PixArt PAW3950 (30.000 DPI)',
      'Taxa de Sondagem': '4.000 Hz Wireless / 8.000 Hz Cabo',
      'Switches': 'Ópticos 90 milhões de cliques',
      'Autonomia': 'Até 85 horas contínuas'
    }
  },
  {
    id: 'pr-03',
    sku: 'NX-HS-71WL',
    name: 'Headset Gamer Wireless 7.1 Surround Drivers 50mm',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    subCategory: 'Headsets',
    specsSummary: 'Áudio Espacial • Microfone Removível ENC • Espuma Memory Foam',
    oldPrice: 699.90,
    price: 529.90,
    discount: 24,
    offer: true,
    artwork: 'headset',
    description: 'Drivers de biocelulose de 50mm que entregam graves profundos e clareza cristalina para identificar passos e direção sonora.',
    fullSpecs: {
      'Drivers': '50mm Biocelulose de Alta Definição',
      'Resposta de Frequência': '20 Hz – 40 kHz',
      'Microfone': 'Cardioide removível com cancelamento de ruído',
      'Conexão': 'Dongle USB-C 2.4GHz + Bluetooth',
      'Peso': '268g com arco em alumínio'
    }
  },
  {
    id: 'pr-04',
    sku: 'NX-WC-4KHDR',
    name: 'Webcam 4K UHD 60fps HDR Autofoco PDAF',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    subCategory: 'Webcams',
    specsSummary: 'Sensor Sony STARVIS • Tampa de Privacidade • Microfone Duplo',
    oldPrice: 649.00,
    price: 579.00,
    discount: 0,
    offer: false,
    artwork: 'webcam',
    description: 'Qualidade de estúdio para transmissões ao vivo, gravações de conteúdo e videoconferências mesmo em ambientes com baixa iluminação.',
    fullSpecs: {
      'Resolução Máxima': '4K UHD (3840x2160) a 30fps / 1080p a 60fps',
      'Foco': 'Automático por detecção de fase (PDAF)',
      'Campo de Visão': 'Ajustável (65°, 78° ou 90°)',
      'Recursos Extras': 'HDR dinâmico e tampa magnética',
      'Conexão': 'USB 3.0 Tipo-C'
    }
  },
  {
    id: 'nm-01',
    sku: 'NX-NB-G16',
    name: 'Notebook Gamer Pro 16" QHD+ 240Hz Core i9 RTX 5070',
    category: 'notebooks-monitores',
    categoryLabel: 'Notebooks & Monitores',
    subCategory: 'Notebooks',
    specsSummary: '32GB DDR5 • SSD 1TB Gen4 • Tela 100% DCI-P3 • Chassi Metal',
    oldPrice: 12999.00,
    price: 11299.00,
    discount: 13,
    offer: true,
    artwork: 'laptop',
    description: 'Potência de desktop em um chassi refinado de alumínio com refrigeração por metal líquido e tela calibrada de 240Hz.',
    fullSpecs: {
      'Processador': 'Intel Core i9-14900HX (24 Núcleos)',
      'Placa de Vídeo': 'NVIDIA GeForce RTX 5070 Laptop 8GB',
      'Tela': '16" IPS QHD+ (2560x1600) 240Hz 500 nits',
      'Memória & SSD': '32GB DDR5 5600MHz + 1TB NVMe',
      'Sistema Operacional': 'Windows 11 Pro'
    }
  },
  {
    id: 'nm-02',
    sku: 'NX-MON-34UW',
    name: 'Monitor Gamer Ultrawide 34" Curvo WQHD 180Hz 1ms',
    category: 'notebooks-monitores',
    categoryLabel: 'Notebooks & Monitores',
    subCategory: 'Monitores',
    specsSummary: 'Proporção 21:9 • Curvatura 1500R • FreeSync Premium & G-Sync',
    oldPrice: 2899.00,
    price: 2399.00,
    discount: 17,
    offer: true,
    artwork: 'monitor',
    description: 'Imersão panorâmica total para simuladores, RPGs e produtividade multitarefa com ajuste ergonômico de altura e inclinação.',
    fullSpecs: {
      'Tamanho / Proporção': '34 polegadas Ultrawide (21:9)',
      'Resolução': '3440 x 1440 (WQHD)',
      'Taxa de Atualização': '180 Hz com tempo de resposta 1ms MPRT',
      'Cobertura de Cores': '99% sRGB / 93% DCI-P3',
      'Conexões': '2x DisplayPort 1.4, 2x HDMI 2.1'
    }
  },
  {
    id: 'nm-03',
    sku: 'NX-MON-27OLED',
    name: 'Monitor QD-OLED 27" 4K 240Hz 0.03ms HDR TrueBlack',
    category: 'notebooks-monitores',
    categoryLabel: 'Notebooks & Monitores',
    subCategory: 'Monitores',
    specsSummary: 'Contraste Infinito • KVM Integrado • USB-C 90W Power Delivery',
    oldPrice: 6499.00,
    price: 5899.00,
    discount: 0,
    offer: false,
    artwork: 'monitor2',
    description: 'Painel QD-OLED de última geração com pretos absolutos, tempo de resposta instantâneo de 0.03ms e hub USB-C de 90W.',
    fullSpecs: {
      'Painel': '27" QD-OLED Anti-reflexo',
      'Resolução / Hz': '3840 x 2160 (4K) @ 240Hz',
      'Tempo de Resposta': '0.03 ms (GtG)',
      'Certificação HDR': 'VESA DisplayHDR True Black 400',
      'Extras': 'Switch KVM + USB-C 90W'
    }
  },
  {
    id: 'nm-04',
    sku: 'NX-ARM-DUAL',
    name: 'Suporte Articulado Duplo Pistão a Gás para Monitores',
    category: 'notebooks-monitores',
    categoryLabel: 'Notebooks & Monitores',
    subCategory: 'Suportes',
    specsSummary: 'Monitores 17" a 35" • VESA 75/100 • Organizador de Cabos',
    oldPrice: 449.90,
    price: 329.90,
    discount: 27,
    offer: true,
    artwork: 'arm',
    description: 'Libere espaço na mesa e conquiste postura ergonômica perfeita com braços articulados reforçados em alumínio aeronáutico.',
    fullSpecs: {
      'Compatibilidade': '2 monitores de 17" até 35"',
      'Carga Suportada': '2 kg a 12 kg por braço',
      'Padrão VESA': '75x75 mm e 100x100 mm',
      'Movimentação': 'Rotação 360°, inclinação +90°/-45°',
      'Fixação': 'Morsa de borda ou furação na mesa'
    }
  }
];

/* ==========================================================================
   3. ESTADO & PERSISTÊNCIA
   ========================================================================== */
const STORAGE_KEY = 'nexustech_cart_v1';

const state = {
  route: 'inicio',
  searchQuery: '',
  categoryFilter: 'Todos',
  sortBy: 'featured',
  cart: loadCartFromStorage(),
  cep: '',
  shippingOptions: [],
  selectedShippingIndex: 0,
  couponCode: '',
  couponDiscountRate: 0,
  paymentMethod: 'pix',
  carouselIndex: 0,
  carouselTimer: null
};

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  } catch {}
}

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/* ==========================================================================
   4. CARRINHO
   ========================================================================== */
function getCartCount() {
  return state.cart.reduce((total, item) => total + item.qty, 0);
}

function updateCartBadge(animate = false) {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  badge.textContent = getCartCount();
  if (animate) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }
}

function addToCart(productId, triggerBtn = null) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }

  saveCartToStorage();
  updateCartBadge(true);
  showToast(`✓ "${product.name}" adicionado ao carrinho!`);

  if (triggerBtn) {
    const originalHTML = triggerBtn.innerHTML;
    triggerBtn.classList.add('added');
    triggerBtn.innerHTML = '✓ Adicionado';
    setTimeout(() => {
      triggerBtn.classList.remove('added');
      triggerBtn.innerHTML = originalHTML;
    }, 1100);
  }
}

function updateCartQty(productId, delta) {
  const index = state.cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartBadge(false);
  if (state.route === 'carrinho') renderApp();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveCartToStorage();
  updateCartBadge(false);
  showToast('Item removido do carrinho.');
  if (state.route === 'carrinho') renderApp();
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(25px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

/* ==========================================================================
   5. TEMPLATES
   ========================================================================== */
function renderProductCard(product) {
  const installmentPrice = (product.price * 1.11) / 12;
  return `
    <article class="product-card">
      <div class="card-badges">
        <span class="badge-category">${product.subCategory}</span>
        ${product.discount > 0 ? `<span class="badge-discount">-${product.discount}% OFF</span>` : ''}
      </div>

      <div class="card-media">
        ${getProductImage(product)}
      </div>

      <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-specs">${product.specsSummary}</p>

        <div class="card-pricing">
          ${product.oldPrice > product.price ? `<span class="price-old">De ${formatBRL(product.oldPrice)}</span>` : ''}
          <div class="price-pix">
            ${formatBRL(product.price)} <span>à vista no PIX</span>
          </div>
          <p class="price-installments">ou 12x de ${formatBRL(installmentPrice)} sem juros</p>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-add-cart" data-action="add-cart" data-id="${product.id}">
            + Comprar
          </button>
          <button type="button" class="btn-details" data-action="open-modal" data-id="${product.id}">
            Detalhes
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   6. PÁGINAS
   ========================================================================== */
function renderHomePage() {
  const hardwareList = PRODUCTS.filter((p) => p.category === 'hardware');
  const perifericosList = PRODUCTS.filter((p) => p.category === 'perifericos');
  const notebooksList = PRODUCTS.filter((p) => p.category === 'notebooks-monitores');

  return `
    <div class="page-view">
      <section class="hero-section container" aria-label="Destaques promocionais">
        <div class="carousel" id="hero-carousel">
          <div class="carousel-track">
            ${CAROUSEL_SLIDES.map((slide, idx) => `
              <div class="carousel-slide ${slide.theme} ${idx === state.carouselIndex ? 'active' : ''}" data-slide-index="${idx}">
                <div class="slide-content">
                  <span class="slide-badge">${slide.badge}</span>
                  <h1 class="slide-title">${slide.title}</h1>
                  <p class="slide-desc">${slide.description}</p>
                  <div class="slide-actions">
                    <a href="#${slide.ctaPrimary.route}" class="btn btn-primary" data-route="${slide.ctaPrimary.route}">
                      ${slide.ctaPrimary.label}
                    </a>
                    <a href="#${slide.ctaSecondary.route}" class="btn btn-outline" data-route="${slide.ctaSecondary.route}">
                      ${slide.ctaSecondary.label}
                    </a>
                  </div>
                </div>
                <div class="slide-visual" aria-hidden="true">
                  ${getCarouselImage(idx, slide.artwork)}
                </div>
              </div>
            `).join('')}
          </div>

          <button type="button" class="carousel-btn carousel-prev" data-action="carousel-prev" aria-label="Slide anterior">&#10094;</button>
          <button type="button" class="carousel-btn carousel-next" data-action="carousel-next" aria-label="Próximo slide">&#10095;</button>

          <div class="carousel-dots" role="tablist" aria-label="Selecionar slide">
            ${CAROUSEL_SLIDES.map((_, idx) => `
              <button
                type="button"
                class="carousel-dot ${idx === state.carouselIndex ? 'active' : ''}"
                data-action="carousel-dot"
                data-index="${idx}"
                aria-label="Ir para slide ${idx + 1}"
              ></button>
            `).join('')}
          </div>
        </div>

        <div class="benefits-strip">
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
            <div>
              <h4>Envio Expresso 24h</h4>
              <p>Despacho no mesmo dia útil</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🛡️</div>
            <div>
              <h4>Garantia Oficial</h4>
              <p>Nota fiscal e RMA direto no Brasil</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">💎</div>
            <div>
              <h4>10% OFF no PIX</h4>
              <p>Aprovação imediata do pedido</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">💳</div>
            <div>
              <h4>Até 12x Sem Juros</h4>
              <p>Nos principais cartões de crédito</p>
            </div>
          </div>
        </div>
      </section>

      <section class="category-section container" aria-labelledby="cat-hardware">
        <div class="section-header">
          <div>
            <span class="section-tag">Alta Performance</span>
            <h2 class="section-title" id="cat-hardware">Hardware &amp; Componentes</h2>
          </div>
          <a href="#hardware" class="section-link" data-route="hardware">Ver todos em Hardware &rarr;</a>
        </div>
        <div class="products-grid">
          ${hardwareList.map(renderProductCard).join('')}
        </div>
      </section>

      <section class="category-section container" aria-labelledby="cat-perifericos">
        <div class="section-header">
          <div>
            <span class="section-tag">Precisão &amp; Ergonomia</span>
            <h2 class="section-title" id="cat-perifericos">Periféricos Gamer</h2>
          </div>
          <a href="#perifericos" class="section-link" data-route="perifericos">Ver todos em Periféricos &rarr;</a>
        </div>
        <div class="products-grid">
          ${perifericosList.map(renderProductCard).join('')}
        </div>
      </section>

      <section class="category-section container" aria-labelledby="cat-notebooks">
        <div class="section-header">
          <div>
            <span class="section-tag">Mobilidade &amp; Imersão Visual</span>
            <h2 class="section-title" id="cat-notebooks">Notebooks &amp; Monitores</h2>
          </div>
          <a href="#notebooks-monitores" class="section-link" data-route="notebooks-monitores">Ver todos em Notebooks &amp; Monitores &rarr;</a>
        </div>
        <div class="products-grid">
          ${notebooksList.map(renderProductCard).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderCatalogPage({ title, description, baseProducts }) {
  const subCategories = ['Todos', ...new Set(baseProducts.map((p) => p.subCategory))];
  if (!subCategories.includes(state.categoryFilter)) {
    state.categoryFilter = 'Todos';
  }

  let filtered = state.categoryFilter === 'Todos'
    ? [...baseProducts]
    : baseProducts.filter((p) => p.subCategory === state.categoryFilter);

  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'discount') {
    filtered.sort((a, b) => b.discount - a.discount);
  }

  return `
    <div class="page-view container">
      <div class="page-banner">
        <div>
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <span class="badge-category">${filtered.length} produto(s) encontrado(s)</span>
      </div>

      <div class="filter-toolbar">
        <div class="filter-pills" role="group" aria-label="Filtrar por subcategoria">
          ${subCategories.map((sub) => `
            <button
              type="button"
              class="filter-pill ${state.categoryFilter === sub ? 'active' : ''}"
              data-action="filter-sub"
              data-sub="${sub}"
            >
              ${sub}
            </button>
          `).join('')}
        </div>

        <div>
          <label for="sort-select" class="sr-only">Ordenar produtos</label>
          <select id="sort-select" class="sort-select" data-action="sort-products">
            <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Ordenar: Destaques</option>
            <option value="price-asc" ${state.sortBy === 'price-asc' ? 'selected' : ''}>Menor Preço</option>
            <option value="price-desc" ${state.sortBy === 'price-desc' ? 'selected' : ''}>Maior Preço</option>
            <option value="discount" ${state.sortBy === 'discount' ? 'selected' : ''}>Maior Desconto</option>
          </select>
        </div>
      </div>

      ${filtered.length > 0
        ? `<div class="products-grid">${filtered.map(renderProductCard).join('')}</div>`
        : `<div class="panel-box" style="text-align:center; padding:3rem;">
             <h3>Nenhum produto encontrado com esses critérios.</h3>
             <p style="color:var(--text-secondary); margin:0.75rem 0 1.25rem;">Tente limpar o filtro de busca ou explorar outras categorias.</p>
             <a href="#inicio" class="btn btn-primary" data-route="inicio">Voltar para o Início</a>
           </div>`
      }
    </div>
  `;
}

function renderCartPage() {
  if (state.cart.length === 0) {
    return `
      <div class="page-view container">
        <div class="panel-box" style="margin-top:2rem; text-align:center; padding:3.5rem 1.5rem;">
          <h1 style="font-size:1.75rem; margin-bottom:0.5rem;">Seu carrinho está vazio</h1>
          <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
            Explore nosso catálogo de hardware, periféricos e notebooks para montar seu setup.
          </p>
          <a href="#inicio" class="btn btn-primary" data-route="inicio">Explorar Produtos</a>
        </div>
      </div>
    `;
  }

  const cartDetails = state.cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return product ? { ...product, qty: item.qty } : null;
    })
    .filter(Boolean);

  const subtotalPix = cartDetails.reduce((sum, item) => sum + item.price * item.qty, 0);
  const selectedShipping = state.shippingOptions[state.selectedShippingIndex]?.price || 0;
  const couponDiscount = subtotalPix * state.couponDiscountRate;
  const installmentMultiplier = state.paymentMethod === 'card' ? 1.11 : 1;
  const finalTotal = (subtotalPix - couponDiscount) * installmentMultiplier + selectedShipping;

  return `
    <div class="page-view container">
      <div class="page-banner">
        <div>
          <h1>Carrinho &amp; Checkout</h1>
          <p>Revise seus itens, simule o frete pelo CEP e finalize sua compra com segurança.</p>
        </div>
      </div>

      <div class="cart-layout">
        <div class="panel-box">
          <h2 style="margin-bottom:0.75rem; font-size:1.2rem;">Itens Selecionados (${getCartCount()})</h2>
          ${cartDetails.map((item) => `
            <div class="cart-item">
              <div class="cart-item-thumb">${getProductImage(item)}</div>
              <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-meta">SKU: ${item.sku} • Unitário PIX: ${formatBRL(item.price)}</p>
                <div class="qty-controls">
                  <button type="button" class="qty-btn" data-action="qty-dec" data-id="${item.id}" aria-label="Diminuir quantidade">-</button>
                  <span><strong>${item.qty}</strong></span>
                  <button type="button" class="qty-btn" data-action="qty-inc" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
                </div>
                <br />
                <button type="button" class="remove-item-btn" data-action="remove-item" data-id="${item.id}">Remover item</button>
              </div>
              <div style="text-align:right;">
                <strong style="font-size:1.1rem; color:var(--accent-success);">${formatBRL(item.price * item.qty)}</strong>
              </div>
            </div>
          `).join('')}
        </div>

        <aside class="panel-box">
          <h2 style="margin-bottom:1rem; font-size:1.2rem;">Resumo do Pedido</h2>

          <label for="cep-input" style="font-size:0.85rem; font-weight:600;">Calcular Frete (CEP)</label>
          <div class="input-group">
            <input
              type="text"
              id="cep-input"
              class="form-control"
              placeholder="00000-000"
              maxlength="9"
              value="${state.cep}"
            />
            <button type="button" class="btn btn-outline" data-action="calc-shipping">Calcular</button>
          </div>

          ${state.shippingOptions.length > 0 ? `
            <div class="shipping-options">
              ${state.shippingOptions.map((opt, idx) => `
                <label class="shipping-option ${state.selectedShippingIndex === idx ? 'selected' : ''}">
                  <span>
                    <input
                      type="radio"
                      name="shipping"
                      value="${idx}"
                      data-action="select-shipping"
                      ${state.selectedShippingIndex === idx ? 'checked' : ''}
                    />
                    <strong>${opt.name}</strong> (${opt.days})
                  </span>
                  <span>${opt.price === 0 ? 'GRÁTIS' : formatBRL(opt.price)}</span>
                </label>
              `).join('')}
            </div>
          ` : ''}

          <label for="coupon-input" style="font-size:0.85rem; font-weight:600;">Cupom de Desconto (Ex: NEXUS10)</label>
          <div class="input-group">
            <input
              type="text"
              id="coupon-input"
              class="form-control"
              placeholder="Digite seu cupom"
              value="${state.couponCode}"
            />
            <button type="button" class="btn btn-outline" data-action="apply-coupon">Aplicar</button>
          </div>

          <label for="payment-select" style="font-size:0.85rem; font-weight:600;">Forma de Pagamento</label>
          <select id="payment-select" class="form-control" style="margin:0.5rem 0 1rem;" data-action="change-payment">
            <option value="pix" ${state.paymentMethod === 'pix' ? 'selected' : ''}>PIX (Desconto à vista já aplicado)</option>
            <option value="card" ${state.paymentMethod === 'card' ? 'selected' : ''}>Cartão de Crédito (até 12x sem juros)</option>
          </select>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>${formatBRL(subtotalPix)}</span>
          </div>
          ${couponDiscount > 0 ? `
            <div class="summary-row" style="color:var(--accent-success);">
              <span>Desconto Cupom (${state.couponCode})</span>
              <span>- ${formatBRL(couponDiscount)}</span>
            </div>
          ` : ''}
          <div class="summary-row">
            <span>Frete</span>
            <span>${selectedShipping === 0 && state.shippingOptions.length > 0 ? 'Grátis' : formatBRL(selectedShipping)}</span>
          </div>
          <div class="summary-row summary-total">
            <span>Total</span>
            <span style="color:var(--accent-primary);">${formatBRL(finalTotal)}</span>
          </div>

          <button type="button" class="btn btn-primary" style="width:100%; margin-top:1.25rem;" data-action="finish-checkout">
            Finalizar Compra
          </button>
        </aside>
      </div>
    </div>
  `;
}

function renderInstitutionalPage(route) {
  const pages = {
    sobre: `
      <div class="page-view container">
        <article class="institutional-card">
          <h1>Sobre a NEXUS TECH</h1>
          <p class="subtitle">Paixão por engenharia de hardware, transparência técnica e performance real.</p>
          <p>
            Fundada por entusiastas de tecnologia e arquitetura de computadores, a <strong>NEXUS TECH</strong> nasceu com o objetivo de conectar gamers, criadores de conteúdo, engenheiros e empresas aos componentes mais avançados do mercado mundial.
          </p>
          <p>
            Trabalhamos exclusivamente com distribuidores oficiais e importação regularizada, garantindo procedência, nota fiscal eletrônica e suporte técnico especializado antes e depois da compra.
          </p>
          <div class="stats-grid">
            <div class="stat-box"><strong>+85 mil</strong><span>Pedidos entregues em todo o Brasil</span></div>
            <div class="stat-box"><strong>99,4%</strong><span>Índice de satisfação e entrega no prazo</span></div>
            <div class="stat-box"><strong>24h</strong><span>Despacho expresso em centro logístico</span></div>
          </div>
          <h2>Nossos Diferenciais</h2>
          <ul>
            <li>Embalagem reforçada anti-impacto e antiestática para componentes sensíveis.</li>
            <li>Curadoria técnica rigorosa para evitar gargalos de compatibilidade no seu setup.</li>
            <li>Atendimento consultivo realizado por especialistas reais em hardware.</li>
          </ul>
        </article>
      </div>
    `,
    privacidade: `
      <div class="page-view container">
        <article class="institutional-card">
          <h1>Política de Privacidade (LGPD)</h1>
          <p class="subtitle">Última atualização: Novembro de 2026 • Conformidade com a Lei nº 13.709/2018.</p>
          <h2>1. Coleta e Finalidade dos Dados</h2>
          <p>
            A NEXUS TECH coleta apenas os dados estritamente necessários para processar pedidos, emitir notas fiscais, realizar entregas e aprimorar sua experiência de navegação (nome, CPF/CNPJ, endereço de entrega, e-mail e telefone).
          </p>
          <h2>2. Armazenamento e Segurança</h2>
          <p>
            Utilizamos criptografia TLS 1.3 de ponta a ponta em todas as páginas. Dados sensíveis de cartão de crédito são tokenizados diretamente pelos gateways homologados PCI-DSS e nunca ficam armazenados em nossos servidores.
          </p>
          <h2>3. Direitos do Titular</h2>
          <p>
            Você pode solicitar a qualquer momento a confirmação, correção, portabilidade ou exclusão de seus dados pessoais enviando uma solicitação para <strong>dpo@nexustech.com.br</strong>.
          </p>
        </article>
      </div>
    `,
    termos: `
      <div class="page-view container">
        <article class="institutional-card">
          <h1>Termos e Condições de Uso</h1>
          <p class="subtitle">Regras gerais de navegação, disponibilidade de estoque e compras na plataforma.</p>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao navegar e realizar pedidos na NEXUS TECH, o usuário declara estar de acordo com as condições descritas neste documento e na legislação brasileira vigente.
          </p>
          <h2>2. Preços, Ofertas e Pagamentos</h2>
          <p>
            Os preços exibidos com desconto à vista aplicam-se exclusivamente a pagamentos via PIX. Promoções possuem estoque limitado e podem ser encerradas sem aviso prévio.
          </p>
          <h2>3. Prazos de Entrega</h2>
          <p>
            O prazo de entrega passa a contar a partir da confirmação do pagamento pela instituição financeira e emissão da Nota Fiscal Eletrônica.
          </p>
        </article>
      </div>
    `,
    trocas: `
      <div class="page-view container">
        <article class="institutional-card">
          <h1>Política de Trocas, Devoluções e RMA</h1>
          <p class="subtitle">Processo descomplicado em conformidade com o Código de Defesa do Consumidor.</p>
          <h2>1. Direito de Arrependimento (7 Dias)</h2>
          <p>
            Conforme o Art. 49 do CDC, você dispõe de até <strong>7 (sete) dias corridos</strong> após o recebimento do produto para solicitar a devolução por arrependimento, desde que o item esteja sem sinais de mau uso e acompanhado de todos os acessórios e embalagem original.
          </p>
          <h2>2. Garantia por Defeito Técnico (RMA)</h2>
          <p>
            Todos os produtos contam com garantia legal de 90 dias somada à garantia contratual do fabricante (que varia de 12 a 60 meses conforme a ficha técnica do item).
          </p>
          <h2>3. Como Acionar</h2>
          <ul>
            <li>Acesse a página <a href="#contato" data-route="contato" style="color:var(--accent-primary); text-decoration:underline;">Fale Conosco</a> informando o número do pedido e o SKU do produto.</li>
            <li>Nossa equipe enviará uma etiqueta de logística reversa gratuita em até 24 horas úteis.</li>
          </ul>
        </article>
      </div>
    `,
    contato: `
      <div class="page-view container">
        <article class="institutional-card">
          <h1>Fale Conosco</h1>
          <p class="subtitle">Dúvidas sobre compatibilidade de peças, pedidos ou suporte técnico? Envie sua mensagem.</p>
          <div class="contact-grid">
            <form id="contact-form" novalidate>
              <div class="form-field">
                <label for="contact-name">Nome Completo *</label>
                <input type="text" id="contact-name" class="form-control" placeholder="Ex: Lucas Almeida" required />
                <span class="field-error" id="err-name">Informe seu nome completo (mínimo 3 caracteres).</span>
              </div>
              <div class="form-field">
                <label for="contact-email">E-mail *</label>
                <input type="email" id="contact-email" class="form-control" placeholder="seuemail@dominio.com" required />
                <span class="field-error" id="err-email">Informe um endereço de e-mail válido.</span>
              </div>
              <div class="form-field">
                <label for="contact-subject">Assunto *</label>
                <select id="contact-subject" class="form-control">
                  <option value="compatibilidade">Dúvida sobre Compatibilidade de Hardware</option>
                  <option value="pedido">Acompanhamento de Pedido</option>
                  <option value="rma">Garantia / Trocas e Devoluções</option>
                  <option value="corporativo">Vendas Corporativas (B2B)</option>
                </select>
              </div>
              <div class="form-field">
                <label for="contact-message">Mensagem *</label>
                <textarea id="contact-message" rows="4" class="form-control" placeholder="Descreva detalhadamente como podemos ajudar..." required></textarea>
                <span class="field-error" id="err-message">Escreva uma mensagem com pelo menos 15 caracteres.</span>
              </div>
              <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
              <div id="contact-feedback" style="margin-top:1rem;"></div>
            </form>

            <div class="panel-box" style="background:var(--bg-secondary);">
              <h2 style="margin-top:0;">Canais Diretos</h2>
              <p><strong>Central de Atendimento:</strong><br />(11) 4002-8922</p>
              <p><strong>E-mail de Suporte:</strong><br />suporte@nexustech.com.br</p>
              <p><strong>Horário de Operação:</strong><br />Segunda a Sexta, das 08h às 19h</p>
              <p><strong>Centro de Distribuição:</strong><br />Av. Tecnologia, 1500 - Distrito Industrial, SP</p>
            </div>
          </div>
        </article>
      </div>
    `
  };
  return pages[route] || renderHomePage();
}

/* ==========================================================================
   7. ROTEADOR & CARROSSEL & MODAL
   ========================================================================== */
function stopCarouselAutoplay() {
  if (state.carouselTimer) {
    clearInterval(state.carouselTimer);
    state.carouselTimer = null;
  }
}

function startCarouselAutoplay() {
  stopCarouselAutoplay();
  if (state.route !== 'inicio') return;

  state.carouselTimer = setInterval(() => {
    goToSlide((state.carouselIndex + 1) % CAROUSEL_SLIDES.length);
  }, 5500);
}

function goToSlide(index) {
  state.carouselIndex = index;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');
  if (!product || !modal || !modalBody) return;

  const specsRows = Object.entries(product.fullSpecs)
    .map(([key, val]) => `<tr><td>${key}</td><td>${val}</td></tr>`)
    .join('');

  modalBody.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-artwork">
        ${getProductImage(product)}
      </div>
      <div>
        <span class="badge-category">${product.categoryLabel} • ${product.subCategory}</span>
        <h2 id="modal-title" style="font-size:1.4rem; margin:0.65rem 0 0.35rem;">${product.name}</h2>
        <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.85rem;">SKU: ${product.sku} • Em estoque (Envio imediato)</p>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">${product.description}</p>

        <table class="specs-table" aria-label="Ficha técnica do produto">
          <tbody>${specsRows}</tbody>
        </table>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-top:1.25rem;">
          <div>
            ${product.oldPrice > product.price ? `<span class="price-old">De ${formatBRL(product.oldPrice)}</span>` : ''}
            <div class="price-pix">${formatBRL(product.price)} <span>no PIX</span></div>
          </div>
          <button type="button" class="btn btn-primary" data-action="add-cart" data-id="${product.id}">
            + Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function navigateTo(route, updateHash = true) {
  const validRoutes = [
    'inicio', 'hardware', 'perifericos', 'notebooks-monitores',
    'ofertas', 'carrinho', 'busca', 'sobre', 'privacidade', 'termos', 'trocas', 'contato'
  ];
  const target = validRoutes.includes(route) ? route : 'inicio';

  if (target !== state.route) {
    state.categoryFilter = 'Todos';
    state.sortBy = 'featured';
  }

  state.route = target;

  if (updateHash && window.location.hash !== `#${target}`) {
    window.location.hash = target;
  }

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.route === target);
  });

  const mainNav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger-btn');
  if (mainNav && hamburger) {
    mainNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderApp() {
  const app = document.getElementById('app-content');
  if (!app) return;

  stopCarouselAutoplay();

  switch (state.route) {
    case 'inicio':
      app.innerHTML = renderHomePage();
      setupCarouselHoverPause();
      startCarouselAutoplay();
      break;

    case 'hardware':
      app.innerHTML = renderCatalogPage({
        title: 'Hardware & Componentes',
        description: 'Placas de vídeo, processadores de última geração, memórias DDR5 e SSDs NVMe ultrarrápidos.',
        baseProducts: PRODUCTS.filter((p) => p.category === 'hardware')
      });
      break;

    case 'perifericos':
      app.innerHTML = renderCatalogPage({
        title: 'Periféricos Gamer & Studio',
        description: 'Teclados mecânicos custom, mouses ultraleves, headsets 7.1 e webcams 4K.',
        baseProducts: PRODUCTS.filter((p) => p.category === 'perifericos')
      });
      break;

    case 'notebooks-monitores':
      app.innerHTML = renderCatalogPage({
        title: 'Notebooks & Monitores',
        description: 'Estações portáteis de alta performance, monitores OLED/Ultrawide e suportes ergonômicos.',
        baseProducts: PRODUCTS.filter((p) => p.category === 'notebooks-monitores')
      });
      break;

    case 'ofertas':
      app.innerHTML = renderCatalogPage({
        title: '🔥 Ofertas Especiais NEXUS',
        description: 'Seleção exclusiva com descontos agressivos à vista no PIX e envio imediato.',
        baseProducts: PRODUCTS.filter((p) => p.offer)
      });
      break;

    case 'busca': {
      const q = state.searchQuery.trim().toLowerCase();
      const results = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.specsSummary.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      );
      app.innerHTML = renderCatalogPage({
        title: `Resultados para "${state.searchQuery}"`,
        description: 'Produtos encontrados no catálogo de acordo com o termo pesquisado.',
        baseProducts: results
      });
      break;
    }

    case 'carrinho':
      app.innerHTML = renderCartPage();
      break;

    default:
      app.innerHTML = renderInstitutionalPage(state.route);
      break;
  }
}

function setupCarouselHoverPause() {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;
  carousel.addEventListener('mouseenter', stopCarouselAutoplay);
  carousel.addEventListener('mouseleave', startCarouselAutoplay);
}

/* ==========================================================================
   8. EVENTOS GLOBAIS
   ========================================================================== */
document.addEventListener('click', (event) => {
  const routeEl = event.target.closest('[data-route]');
  if (routeEl) {
    event.preventDefault();
    navigateTo(routeEl.dataset.route);
    return;
  }

  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) return;

  const { action, id, index, sub } = actionEl.dataset;

  switch (action) {
    case 'add-cart':
      addToCart(id, actionEl);
      break;

    case 'open-modal':
      openProductModal(id);
      break;

    case 'carousel-prev':
      goToSlide((state.carouselIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
      break;

    case 'carousel-next':
      goToSlide((state.carouselIndex + 1) % CAROUSEL_SLIDES.length);
      break;

    case 'carousel-dot':
      goToSlide(Number(index));
      break;

    case 'filter-sub':
      state.categoryFilter = sub;
      renderApp();
      break;

    case 'qty-inc':
      updateCartQty(id, 1);
      break;

    case 'qty-dec':
      updateCartQty(id, -1);
      break;

    case 'remove-item':
      removeCartItem(id);
      break;

    case 'calc-shipping': {
      const cepInput = document.getElementById('cep-input');
      const digits = (cepInput?.value || '').replace(/\D/g, '');
      if (digits.length !== 8) {
        showToast('⚠️ Informe um CEP válido com 8 dígitos.');
        return;
      }
      state.cep = `${digits.slice(0, 5)}-${digits.slice(5)}`;
      const subtotal = state.cart.reduce((acc, item) => {
        const prod = PRODUCTS.find((p) => p.id === item.id);
        return acc + (prod ? prod.price * item.qty : 0);
      }, 0);

      state.shippingOptions = [
        { name: 'Transportadora Econômica', days: '4 a 6 dias úteis', price: subtotal >= 499 ? 0 : 24.90 },
        { name: 'Expresso Aéreo', days: '2 a 3 dias úteis', price: 42.90 },
        { name: 'Entrega Prioritária 24h', days: '1 dia útil', price: 69.90 }
      ];
      state.selectedShippingIndex = 0;
      renderApp();
      break;
    }

    case 'apply-coupon': {
      const couponInput = document.getElementById('coupon-input');
      const code = (couponInput?.value || '').trim().toUpperCase();
      if (code === 'NEXUS10') {
        state.couponCode = 'NEXUS10';
        state.couponDiscountRate = 0.10;
        showToast('🎉 Cupom NEXUS10 aplicado: +10% de desconto!');
      } else {
        state.couponCode = '';
        state.couponDiscountRate = 0;
        showToast('⚠️ Cupom inválido. Experimente NEXUS10.');
      }
      renderApp();
      break;
    }

    case 'finish-checkout': {
      const protocol = `NX-${Math.floor(100000 + Math.random() * 900000)}`;
      state.cart = [];
      state.couponCode = '';
      state.couponDiscountRate = 0;
      saveCartToStorage();
      updateCartBadge(false);

      const app = document.getElementById('app-content');
      app.innerHTML = `
        <div class="page-view container">
          <div class="panel-box" style="margin-top:2rem; text-align:center; padding:3.5rem 1.5rem; border-color:var(--accent-success);">
            <div style="font-size:3rem; margin-bottom:0.75rem;">✅</div>
            <h1 style="color:var(--accent-success); margin-bottom:0.5rem;">Pedido Confirmado com Sucesso!</h1>
            <p style="font-size:1.05rem; margin-bottom:0.5rem;">Protocolo do Pedido: <strong>#${protocol}</strong></p>
            <p style="color:var(--text-secondary); max-width:540px; margin:0 auto 1.75rem;">
              Enviamos o resumo da sua compra e o código de rastreamento para o seu e-mail. Obrigado por escolher a NEXUS TECH!
            </p>
            <a href="#inicio" class="btn btn-primary" data-route="inicio">Continuar Comprando</a>
          </div>
        </div>
      `;
      break;
    }
  }
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.dataset.action === 'sort-products') {
    state.sortBy = target.value;
    renderApp();
  } else if (target.dataset.action === 'select-shipping') {
    state.selectedShippingIndex = Number(target.value);
    renderApp();
  } else if (target.dataset.action === 'change-payment') {
    state.paymentMethod = target.value;
    renderApp();
  }
});

const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

if (searchInput && searchForm) {
  searchInput.addEventListener('input', (event) => {
    state.searchQuery = event.target.value;
    if (state.searchQuery.trim().length > 0) {
      navigateTo('busca');
    } else if (state.route === 'busca') {
      navigateTo('inicio');
    }
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.value.trim()) {
      state.searchQuery = searchInput.value;
      navigateTo('busca');
    }
  });
}

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'contact-form') return;
  event.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  const validName = name.length >= 3;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validMessage = message.length >= 15;

  document.getElementById('err-name').classList.toggle('visible', !validName);
  document.getElementById('err-email').classList.toggle('visible', !validEmail);
  document.getElementById('err-message').classList.toggle('visible', !validMessage);

  if (validName && validEmail && validMessage) {
    const feedback = document.getElementById('contact-feedback');
    feedback.innerHTML = `
      <div style="padding:1rem; border-radius:8px; background:rgba(16,185,129,0.14); border:1px solid var(--accent-success); color:var(--accent-success);">
        ✓ Mensagem enviada com sucesso, <strong>${name}</strong>! Nossa equipe responderá em breve no e-mail ${email}.
      </div>
    `;
    event.target.reset();
    showToast('Mensagem enviada ao suporte!');
  }
});

document.getElementById('hamburger-btn')?.addEventListener('click', function () {
  const nav = document.getElementById('main-nav');
  const isOpen = nav.classList.toggle('open');
  this.classList.toggle('open', isOpen);
  this.setAttribute('aria-expanded', String(isOpen));
});

document.getElementById('modal-close-btn')?.addEventListener('click', closeProductModal);
document.getElementById('product-modal')?.addEventListener('click', (event) => {
  if (event.target.id === 'product-modal') closeProductModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProductModal();
});

window.addEventListener('hashchange', () => {
  const hashRoute = window.location.hash.replace('#', '') || 'inicio';
  if (hashRoute !== state.route) {
    navigateTo(hashRoute, false);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge(false);
  const initialRoute = window.location.hash.replace('#', '') || 'inicio';
  navigateTo(initialRoute, false);
});