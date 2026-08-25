// Tailwind Config
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
                'handwriting': ['Dancing Script', 'cursive'],
                'serif': ['Playfair Display', 'serif'],
            },
            colors: {
                pink: {
                    50: 'rgb(253, 242, 248)',
                    100: 'rgb(252, 231, 243)',
                    200: 'rgb(251, 207, 232)',
                    300: 'rgb(249, 168, 212)',
                    400: 'rgb(244, 114, 182)',
                    500: 'rgb(236, 72, 153)',
                    600: 'rgb(219, 39, 119)',
                    700: 'rgb(190, 24, 93)',
                    800: 'rgb(157, 23, 77)',
                    900: 'rgb(131, 24, 67)',
                },
                envelope: {
                    back: 'rgb(219, 39, 119)',  
                    front: 'rgb(244, 114, 182)',
                    flap: 'rgb(249, 168, 212)',
                }
            }
        }
    }
};

const galleryItems = [
    { url: "https://i.postimg.cc/GmLs6j2Y/photo-(13).jpg", text: "21 years of pure magic 🎂" },
    { url: "https://i.postimg.cc/rwftTt0x/photo-(1).jpg", text: "Your smile lights up the room ✨" },
    { url: "https://i.postimg.cc/13mNbKt5/photo-(10).jpg", text: "You Got All The Spotlight 🔦📸✨" },
    { url: "https://i.postimg.cc/jSxJBh52/photo-(11).jpg", text: "The Most Pure Smile I Saw 🤗" },
    { url: "https://i.postimg.cc/c4MnDzsJ/photo-(8).jpg", text: "A new chapter full of joy 🎈" },
    { url: "https://i.postimg.cc/Cxhf9417/photo-(16).jpg", text: "The Eyes I Saw My Future And My Dreams In 🥹🦋💗" },
    { url: "https://i.postimg.cc/T3tWxWLq/photo-(2).jpg", text: "Unmatched elegance & grace 🌟" },
    { url: "https://i.postimg.cc/rFL4NT24/photo-(3).jpg ", text: "Our absolute favorite person 🍬" },
    { url: "https://i.postimg.cc/Wb6k9y2j/photo-(4).jpg", text: "All grown up into a Queen 👑" },
    { url: "https://i.postimg.cc/jdQ781RF/photo-(5).jpg", text: "Memories we will cherish forever 📸" },
    { url: "https://i.postimg.cc/dtmyWfqK/photo-(6).jpg", text: "21 candles illuminating your path 🕯️" },
    { url: "https://i.postimg.cc/SN7MZPyh/photo-(7).jpg", text: "The cutest smile on earth 😊   " },
    { url: "https://i.postimg.cc/BQcKhzqj/photo-(9).jpg", text: "Always making us so proud 🎓" },
    { url: "https://i.postimg.cc/mDy4x7hk/photo-(101).jpg", text: "My Shyla 😭💗" },
];

const galleryGrid = document.getElementById('gallery-grid');
galleryItems.forEach((item, index) => {
    let revealDirection = 'reveal-up';
    if (index % 3 === 0) revealDirection = 'reveal-right';
    else if (index % 3 === 1) revealDirection = 'reveal-left';

    galleryGrid.innerHTML += `
        <div class="${revealDirection} flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-pink-100 group">
            <div class="overflow-hidden h-48 md:h-56 flex items-center justify-center p-2">
                <img src="${item.url}" alt="Memory ${index + 1}" class="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110">
            </div>
            <div class="p-4 flex-grow flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
                <p class="text-pink-600 font-medium font-sans text-sm md:text-base text-center leading-tight">
                    ${item.text}
                </p>
            </div>
        </div>
    `;
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        } else {
            entry.target.classList.remove('reveal-active');
        }
    });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
revealElements.forEach(el => observer.observe(el));

const emojiList = ['💕', '💝', '💖', '💓', '💐', '💞'];
const emojiContainer = document.getElementById('floating-emojis-container');
const numEmojis = 35; 

for (let i = 0; i < numEmojis; i++) {
    const emojiEl = document.createElement('div');
    emojiEl.className = 'floating-emoji';
    emojiEl.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    
    const leftPos = Math.random() * 100; 
    const duration = Math.random() * 15 + 10; 
    const delay = Math.random() * 15; 
    const fontSize = Math.random() * 1.5 + 1; 
    
    emojiEl.style.left = `${leftPos}vw`;
    emojiEl.style.animationDuration = `${duration}s`;
    emojiEl.style.animationDelay = `${delay}s`;
    emojiEl.style.fontSize = `${fontSize}rem`;
    
    emojiContainer.appendChild(emojiEl);
}

const envelope = document.getElementById('envelope');
const letterAnim = document.getElementById('letter-anim');
const realLetter = document.getElementById('real-letter');
const closeBtn = document.getElementById('close-btn');
const clickHint = document.getElementById('click-hint');

let isAnimating = false;

envelope.addEventListener('click', () => {
    if (envelope.classList.contains('is-open') || isAnimating) return;
    isAnimating = true;
    
    envelope.classList.add('is-open');
    clickHint.style.opacity = '0';
    
    setTimeout(() => {
        letterAnim.classList.add('out-of-env');
    }, 500);

    setTimeout(() => {
        letterAnim.classList.remove('fold-lr');
    }, 1300);

    setTimeout(() => {
        letterAnim.classList.remove('fold-tb');
    }, 1900);

    setTimeout(() => {
        realLetter.classList.remove('opacity-0', 'pointer-events-none');
        isAnimating = false;
    }, 2500);
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (isAnimating) return;
    isAnimating = true;

    realLetter.classList.add('opacity-0', 'pointer-events-none');

    setTimeout(() => {
        letterAnim.classList.add('fold-tb');
    }, 400);

    setTimeout(() => {
        letterAnim.classList.add('fold-lr');
    }, 1000);

    setTimeout(() => {
        letterAnim.classList.remove('out-of-env');
    }, 1600);

    setTimeout(() => {
        envelope.classList.remove('is-open');
        clickHint.style.opacity = '1';
        isAnimating = false;
    }, 2200);
});

const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        bgMusic.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }
    isPlaying = !isPlaying;
});