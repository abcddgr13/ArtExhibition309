// Gallery data structure containing all artworks
const galleryData = {
    cubism: [
        {
            id: 'cubism-1',
            title: 'Fragmented Reality',
            artist: 'นายสมชาย ศิลป์พิน',
            concept: 'การสะท้อนความเป็นจริงผ่านมุมมองที่แตกต่างกัน ด้วยเทคนิค Cubism ที่นำเสนอภาพในหลายมิติ โดยการแบ่งแยกรูปร่างออกเป็นส่วนๆ แล้วนำมาประกอบใหม่ให้เกิดมิติใหม่ของการมองเห็น',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
        {
            id: 'cubism-2', 
            title: 'Abstract Geometry',
            artist: 'นางสาวปิยะดา คิดสร้าง',
            concept: 'การจัดวางรูปทรงเรขาคณิตที่สื่อถึงความซับซ้อนของชีวิตในยุคดิจิทัล ผ่านการใช้สีสันและเส้นสายที่สร้างความรู้สึกถึงการเคลื่อนไหวและพลังงาน',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
        {
            id: 'cubism-3',
            title: 'Broken Dreams',
            artist: 'นายวิชัย สร้างสรรค์',
            concept: 'การแสดงออกถึงความฝันที่แตกสลายผ่านเทคนิคการแยกส่วนและประกอบใหม่ ด้วยการใช้สีที่คมชัดและรูปทรงที่ไม่สมดุล',
            image: 'https://images.unsplash.com/photo-1569701280402-dd2e7b9eeba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
    ],
    popup: [
        {
            id: 'popup-1',
            title: 'Interactive Dreams',
            artist: 'นายกิตติ นวัตกรรม',
            concept: 'งานศิลปะแบบ Pop-up ที่เชิญชวนให้ผู้ชมได้มีปฏิสัมพันธ์และสัมผัส ผ่านการออกแบบที่ผสมผสานระหว่างกายภาพและดิจิทัล สร้างประสบการณ์ใหม่ในการรับชมศิลปะ',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-2',
            title: 'Surprise Elements',
            artist: 'นางสาวสุภาพร แปลกใหม่',
            concept: 'การสร้างความประหลาดใจด้วยองค์ประกอบที่โผล่ออกมาจากผืนผ้าใบ เชิญชวนให้ผู้ชมได้สำรวจและค้นพบรายละเอียดที่ซ่อนเร้น',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        }
    ],
    popart: [
        {
            id: 'popart-1',
            title: 'Urban Bangkok',
            artist: 'นางสาววิมลรัตน์ สีสันสด',
            concept: 'การตีความใหม่ของวัฒนธรรมป๊อปผ่านมุมมองของเมืองกรุงเทพฯ ด้วยการใช้สีสันจัดจ้านและการทำซ้ำของภาพที่เป็นสัญลักษณ์ของความเป็นเมือง',
            image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-2',
            title: 'Digital Generation',
            artist: 'นายธนา สมัยใหม่',
            concept: 'สะท้อนพฤติกรรมและวิถีชีวิตของคนรุ่นใหม่ในยุคโซเชียลมีเดีย ผ่านการนำเสนอภาพที่คุ้นเคยในชีวิตประจำวันแต่ด้วยมุมมองที่แหลมคม',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-3',
            title: 'Consumer Culture',
            artist: 'นายประชา วิพากษ์',
            concept: 'วิจารณ์วัฒนธรรมการบริโภคผ่านการนำเสนอสินค้าและแบรนด์ในรูปแบบศิลปะป๊อป โดยเน้นการใช้สีและการทำซ้ำเพื่อสร้างผลกระทบทางสายตา',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        }
    ],
    brochure: [
        {
            id: 'brochure-1',
            title: 'Thai Heritage Design',
            artist: 'นางสาวสุดา ดีไซน์เนอร์',
            concept: 'การออกแบบโบรชัวร์ที่ผสานเอกลักษณ์ไทยกับความทันสมัย โดยการใช้ลวดลายไทยประยุกต์กับเทคนิคการออกแบบสมัยใหม่ เพื่อสื่อสารคุณค่าทางวัฒนธรรม',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'brochure'
        },
        {
            id: 'brochure-2',
            title: 'Sustainable Tourism',
            artist: 'นายอนุชา เขียวใส',
            concept: 'งานออกแบบโบรชัวร์ท่องเที่ยวที่เน้นการท่องเที่ยวอย่างยั่งยืน ด้วยการใช้สีเขียวและองค์ประกอบธรรมชาติ เพื่อสื่อสารความสำคัญของการอนุรักษ์สิ่งแวดล้อม',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'brochure'
        }
    ],
    sculpture: [
        {
            id: 'sculpture-1',
            title: 'Spirit of Siam',
            groupName: 'กลุ่มศิลปินรุ่นใหม่',
            members: ['นายประยุทธ์ ปั้นดิน', 'นางสาวชุติมา แกะสลัก', 'นายวิชัย โลหะกรรม'],
            concept: 'ประติมากรรมที่สื่อถึงจิตวิญญาณและอัตลักษณ์ของความเป็นไทยในมิติใหม่ ผ่านการผสมผสานวัสดุดั้งเดิมกับเทคนิคร่วมสมัย เพื่อสะท้อนความเป็นไทยที่ก้าวทันยุคสมัย',
            image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        },
        {
            id: 'sculpture-2',
            title: 'Modern Buddha',
            groupName: 'ชุมชนศิลปกรรม',
            members: ['นายสมศักดิ์ จิตใส', 'นางสาวภัทรา บุญเลิศ'],
            concept: 'การตีความพระพุทธรูปในแบบร่วมสมัย โดยยังคงความศักดิ์สิทธิ์และความเป็นไทย แต่นำเสนอผ่านรูปแบบและวัสดุที่เข้ากับยุคสมัยปัจจุบัน',
            image: 'https://images.unsplash.com/photo-1569701280402-dd2e7b9eeba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        },
        {
            id: 'sculpture-3',
            title: 'Unity in Diversity',
            groupName: 'กลุ่มศิลปกรรมร่วมสมัย',
            members: ['นายสมพงษ์ ร่วมใจ', 'นางสาวอรุณี สามัคคี', 'นายมานิตย์ หลากหลาย'],
            concept: 'ประติมากรรมที่แสดงถึงความหลากหลายทางวัฒนธรรมในสังคมไทย และการอยู่ร่วมกันอย่างสามัคคี ผ่านการใช้วัสดุที่หลากหลายมาประกอบเป็นชิ้นงานเดียว',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        }
    ]
};

// Featured artworks for carousel (5 highlighted artworks)
const featuredArtworks = [
    galleryData.cubism[0],
    galleryData.popart[0],
    galleryData.sculpture[0],
    galleryData.brochure[0],
    galleryData.popup[0]
];

// Global variables for carousel functionality
let currentSlide = 0;
let carouselInterval;
let currentFilter = 'all';

// Mobile menu toggle function
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Carousel functions
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const dots = document.getElementById('carouselDots');
    
    if (!carousel || !dots) return;
    
    // Clear existing content
    carousel.innerHTML = '';
    dots.innerHTML = '';
    
    // Create slides
    featuredArtworks.forEach((artwork, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="carousel-overlay"></div>
            <img src="${artwork.image}" alt="${artwork.title}" loading="${index === 0 ? 'eager' : 'lazy'}">
            <div class="carousel-content">
                <div class="container">
                    <div class="carousel-text">
                        <h2 class="carousel-title" data-testid="text-carousel-title-${index}">${artwork.title}</h2>
                        <p class="carousel-artist" data-testid="text-carousel-artist-${index}">
                            ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                        </p>
                        <p class="carousel-concept" data-testid="text-carousel-concept-${index}">${artwork.concept}</p>
                        <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                           class="carousel-button" data-testid="button-carousel-detail-${index}">
                            <span>ดูรายละเอียด</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        carousel.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-testid', `button-carousel-dot-${index}`);
        dot.onclick = () => goToSlide(index);
        dots.appendChild(dot);
    });
    
    startAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides.length || !dots.length) return;
    
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set new current slide
    currentSlide = index;
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % featuredArtworks.length);
}

function prevSlide() {
    goToSlide(currentSlide === 0 ? featuredArtworks.length - 1 : currentSlide - 1);
}

function startAutoSlide() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
}

// Gallery functions
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let artworksToShow = [];
    
    if (currentFilter === 'all') {
        // Show all artworks from all categories
        Object.values(galleryData).forEach(category => {
            artworksToShow.push(...category);
        });
    } else {
        // Show only artworks from selected category
        artworksToShow = galleryData[currentFilter] || [];
    }
    
    artworksToShow.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-in';
        card.setAttribute('data-testid', `card-${artwork.category}-${artwork.id}`);
        card.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            <div class="gallery-card-content">
                <h3 data-testid="text-card-title-${artwork.id}">${artwork.title}</h3>
                <p data-testid="text-card-artist-${artwork.id}">
                    ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                </p>
                <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                   class="gallery-card-button" data-testid="button-card-detail-${artwork.id}">
                    ดูรายละเอียด
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Show message if no artworks found
    if (artworksToShow.length === 0) {
        grid.innerHTML = `
            <div class="no-results" data-testid="text-no-results">
                <p>ไม่พบผลงานในหมวดหมู่นี้</p>
            </div>
        `;
    }
}

function filterArtworks(category) {
    currentFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    event.target.classList.add('active');
    
    renderGallery();
}

// Render featured artworks for home page
function renderFeaturedArtworks() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Show first 3 featured artworks
    featuredArtworks.slice(0, 3).forEach((artwork, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-in';
        card.setAttribute('data-testid', `featured-card-${index}`);
        card.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            <div class="gallery-card-content">
                <h3 data-testid="text-featured-title-${index}">${artwork.title}</h3>
                <p data-testid="text-featured-artist-${index}">
                    ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                </p>
                <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                   class="gallery-card-button" data-testid="button-featured-detail-${index}">
                    ดูรายละเอียด
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Artwork detail functions
function renderArtworkDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const artworkId = urlParams.get('id');
    
    if (!category || !artworkId) {
        // Redirect to gallery if no valid parameters
        window.location.href = 'gallery.html';
        return;
    }
    
    const artwork = galleryData[category]?.find(item => item.id === artworkId);
    
    if (!artwork) {
        // Redirect to gallery if artwork not found
        window.location.href = 'gallery.html';
        return;
    }
    
    const detailContainer = document.getElementById('artworkDetail');
    if (!detailContainer) return;
    
    const isSculpture = category === 'sculpture';
    
    // Update page title and meta description
    document.getElementById('artworkTitle').textContent = `${artwork.title} - นิทรรศการศิลปะออนไลน์`;
    document.getElementById('artworkDescription').setAttribute('content', 
        `ชมผลงาน ${artwork.title} โดย ${artwork.artist || artwork.groupName} พร้อมรายละเอียดแนวคิดและการสร้างสรรค์`);
    
    detailContainer.innerHTML = `
        <div>
            <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image" data-testid="img-artwork-main">
        </div>
        <div class="artwork-info">
            <div>
                <h1 class="artwork-title" data-testid="text-artwork-title">${artwork.title}</h1>
                ${isSculpture ? `
                    <p class="artwork-artist" data-testid="text-artwork-group">กลุ่ม: ${artwork.groupName}</p>
                    <div class="artwork-members" data-testid="list-artwork-members">
                        <h3>สมาชิกในกลุ่ม:</h3>
                        <ul>
                            ${artwork.members.map((member, index) => `<li data-testid="text-member-${index}">${member}</li>`).join('')}
                        </ul>
                    </div>
                ` : `
                    <p class="artwork-artist" data-testid="text-artwork-artist">ศิลปิน: ${artwork.artist}</p>
                `}
            </div>
            
            <div class="artwork-concept-card">
                <h3>แนวคิด</h3>
                <p data-testid="text-artwork-concept">${artwork.concept}</p>
            </div>
            
            <div>
                <span class="artwork-category" data-testid="text-artwork-category">
                    ${getCategoryDisplayName(category)}
                </span>
            </div>
        </div>
    `;
}

function getCategoryDisplayName(category) {
    const names = {
        cubism: 'Cubism Art',
        popup: 'Pop Up',
        popart: 'Pop Art',
        brochure: 'Brochure',
        sculpture: 'Sculpture'
    };
    return names[category] || category;
}

// Initialize the application based on current page
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            // Home page initialization
            initializeCarousel();
            renderFeaturedArtworks();
            break;
        case 'gallery.html':
            // Gallery page initialization
            renderGallery();
            break;
        case 'artwork.html':
            // Artwork detail page initialization
            renderArtworkDetail();
            break;
        case 'about.html':
            // About page - no special initialization needed
            break;
        default:
            // Fallback for unknown pages - try homepage initialization
            initializeCarousel();
            renderFeaturedArtworks();
            break;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('show');
        }
    }
});

// Pause carousel when user hovers over it (accessibility)
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
});

// Global functions for HTML onclick handlers
window.toggleMobileMenu = toggleMobileMenu;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.filterArtworks = filterArtworks;

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    // Add error handlers for all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.backgroundColor = 'var(--muted)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<i class="fas fa-image" style="color: var(--muted-foreground); font-size: 2rem;"></i>';
        });
    });
});
