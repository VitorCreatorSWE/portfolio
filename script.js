const translations = {
    pt: {
        nav_brand: "<Programador/>",
        nav_home: "Home",
        nav_about: "Sobre",
        nav_contacts: "Contatos",
        hero_greeting: "Olá, eu sou",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Criando soluções completas, código criativo e experiências excepcionais.",
        about_title: "Sobre mim",
        about_p1: "Olá! Me chamo Vitor.",
        about_p2: "Sou programador Full Stack focado em HTML, CSS, JavaScript e Python, e atualmente curso Análise e Desenvolvimento de Sistemas no IFSP Guarulhos.",
        about_p3: "Gosto de resolver problemas com código e IA estou em busca da minha próxima oportunidade para crescer como desenvolvedor e contribuir com projetos desafiadores.",
        tech_stack: "Stack Tecnológica",
        contact_title: "Contatos",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Feito com HTML, CSS, JS & Bootstrap 5."
    },
    en: {
        nav_brand: "<Programmer/>",
        nav_home: "Home",
        nav_about: "About",
        nav_contacts: "Contacts",
        hero_greeting: "Hello, I am",
        hero_title: "Full Stack Developer",
        hero_subtitle: "Building complete solutions, creative code, and exceptional experiences.",
        about_title: "About me",
        about_p1: "Hello! My name is Vitor.",
        about_p2: "I am a Full Stack programmer focused on HTML, CSS, JavaScript, and Python, and I am currently studying Systems Analysis and Development at IFSP Guarulhos.",
        about_p3: "I enjoy solving problems with code and AI, and I am looking for my next opportunity to grow as a developer and contribute to challenging projects.",
        tech_stack: "Tech Stack",
        contact_title: "Contacts",
        contact_name: "Vitor Igor dos Santos",
        contact_phone: "+55 11 94675-0795",
        footer_text: "Built with HTML, CSS, JS & Bootstrap 5."
    }
};

let currentLang = 'pt';

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('langToggle');
    const langSpan = document.getElementById('currentLang');

    langToggleBtn.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        
        // Update button text to show the language that WILL be selected if clicked again
        langSpan.innerText = currentLang === 'pt' ? 'EN' : 'PT';
        
        // Apply translations
        updateLanguage();
        
        // Add a small animation to the button
        langToggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            langToggleBtn.style.transform = 'scale(1)';
        }, 150);
    });
});

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // Add a brief fade-out effect for smooth transition
            el.style.opacity = 0;
            
            setTimeout(() => {
                el.innerText = translations[currentLang][key];
                el.style.transition = 'opacity 0.3s ease';
                el.style.opacity = 1;
            }, 150);
        }
    });
}

// Matrix Effect (Home)
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(9, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#146CFF'; // primary color
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Contacts Background Effects
const contactsMatrixCanvas = document.getElementById('contactsMatrixCanvas');
const githubRainContainer = document.getElementById('github-rain-container');
const whatsappLink = document.getElementById('whatsapp-link');
const githubLink = document.getElementById('github-link');
const contactsCard = document.getElementById('contacts-card');

// Contacts Matrix (Green)
if (contactsMatrixCanvas) {
    const ctxContacts = contactsMatrixCanvas.getContext('2d');
    
    const setContactsCanvasSize = () => {
        contactsMatrixCanvas.width = window.innerWidth;
        contactsMatrixCanvas.height = document.getElementById('contacts').offsetHeight;
    };
    
    setContactsCanvasSize();
    
    const chars = '01';
    const fontSize = 16;
    let columnsContacts = contactsMatrixCanvas.width / fontSize;
    
    let dropsContacts = [];
    for (let x = 0; x < columnsContacts; x++) {
        dropsContacts[x] = 1;
    }
    
    function drawContactsMatrix() {
        if (contactsMatrixCanvas.style.opacity === '0') return;
        
        ctxContacts.fillStyle = 'rgba(9, 10, 15, 0.05)';
        ctxContacts.fillRect(0, 0, contactsMatrixCanvas.width, contactsMatrixCanvas.height);
        
        ctxContacts.fillStyle = '#0f0'; // green color
        ctxContacts.font = fontSize + 'px monospace';
        
        for (let i = 0; i < dropsContacts.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctxContacts.fillText(text, i * fontSize, dropsContacts[i] * fontSize);
            
            if (dropsContacts[i] * fontSize > contactsMatrixCanvas.height && Math.random() > 0.975) {
                dropsContacts[i] = 0;
            }
            dropsContacts[i]++;
        }
    }
    
    setInterval(drawContactsMatrix, 50);
    
    window.addEventListener('resize', () => {
        setContactsCanvasSize();
        columnsContacts = contactsMatrixCanvas.width / fontSize;
        dropsContacts = [];
        for (let x = 0; x < columnsContacts; x++) {
            dropsContacts[x] = 1;
        }
    });
}

// Github Rain Effect
let githubRainInterval;
function createGithubIcon() {
    if (githubRainContainer.style.opacity === '0') return;
    
    const icon = document.createElement('i');
    icon.className = 'bi bi-github';
    icon.style.position = 'absolute';
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.top = '-50px';
    icon.style.fontSize = (Math.random() * 20 + 20) + 'px'; // 20px to 40px
    icon.style.color = 'rgba(255, 255, 255, 0.15)'; // subtle white
    icon.style.opacity = '0';
    icon.style.transition = 'top 3s linear, opacity 0.5s ease';
    
    githubRainContainer.appendChild(icon);
    
    // Fade in and fall
    setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.top = '110vh';
    }, 50);
    
    // Remove after falling
    setTimeout(() => {
        icon.remove();
    }, 3000);
}

// Hover event listeners
if (whatsappLink && githubLink) {
    whatsappLink.addEventListener('mouseenter', () => {
        contactsMatrixCanvas.style.opacity = '0.4';
        githubRainContainer.style.opacity = '0';
        contactsCard.style.backgroundColor = 'rgba(9, 10, 15, 0.6)'; // slightly more transparent to see effect
    });
    
    whatsappLink.addEventListener('mouseleave', () => {
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.backgroundColor = '';
    });
    
    githubLink.addEventListener('mouseenter', () => {
        githubRainContainer.style.opacity = '1';
        contactsMatrixCanvas.style.opacity = '0';
        contactsCard.style.backgroundColor = 'rgba(9, 10, 15, 0.6)';
        
        // Initial burst
        for(let i=0; i<10; i++) {
            setTimeout(createGithubIcon, i * 200);
        }
        
        clearInterval(githubRainInterval);
        githubRainInterval = setInterval(createGithubIcon, 150);
    });
    
    githubLink.addEventListener('mouseleave', () => {
        githubRainContainer.style.opacity = '0';
        contactsCard.style.backgroundColor = '';
        clearInterval(githubRainInterval);
        // Clear existing icons for a clean state next time
        setTimeout(() => {
            if(githubRainContainer.style.opacity === '0') {
                githubRainContainer.innerHTML = '';
            }
        }, 500);
    });
}

