// Inicjalizacja przy załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    // Generowanie przykładowych ofert pracy
    generateJobCards();
    
    // Inicjalizacja filtrów
    initializeFilters();
    
    // Obsługa scrollowania
    initializeScrollEffects();
});

// Funkcja generująca przykładowe karty ofert pracy
function generateJobCards() {
    const jobsContainer = document.querySelector('.job-cards');
    const exampleJobs = [
        {
            title: 'Senior Frontend Developer',
            company: 'TechCorp',
            location: 'Warszawa',
            salary: '15000-20000 PLN',
            tags: ['React', 'TypeScript', 'Remote'],
            industry: 'IT'
        },
        {
            title: 'UX/UI Designer',
            company: 'DesignPro',
            location: 'Kraków',
            salary: '10000-15000 PLN',
            tags: ['Figma', 'Adobe XD', 'Hybrid'],
            industry: 'IT'
        },
        {
            title: 'Backend Developer',
            company: 'CodeMasters',
            location: 'Wrocław',
            salary: '12000-18000 PLN',
            tags: ['Node.js', 'MongoDB', 'AWS'],
            industry: 'IT'
        },
        {
            title: 'Data Scientist',
            company: 'DataSolutions',
            location: 'Poznań',
            salary: '14000-22000 PLN',
            tags: ['Python', 'Machine Learning', 'SQL'],
            industry: 'IT'
        },
        {
            title: 'Project Manager',
            company: 'AgileWorks',
            location: 'Warszawa',
            salary: '13000-17000 PLN',
            tags: ['Agile', 'Scrum', 'Leadership'],
            industry: 'Management'
        },
        {
            title: 'Mobile Developer',
            company: 'Appify',
            location: 'Gdańsk',
            salary: '11000-16000 PLN',
            tags: ['Flutter', 'Kotlin', 'iOS'],
            industry: 'IT'
        },
        {
            title: 'DevOps Engineer',
            company: 'CloudOps',
            location: 'Kraków',
            salary: '15000-23000 PLN',
            tags: ['Docker', 'Kubernetes', 'CI/CD'],
            industry: 'IT'
        },
        {
            title: 'Full Stack Developer',
            company: 'WebWorks',
            location: 'Łódź',
            salary: '14000-20000 PLN',
            tags: ['JavaScript', 'React', 'Node.js'],
            industry: 'IT'
        },
        {
            title: 'QA Engineer',
            company: 'Testify',
            location: 'Warszawa',
            salary: '10000-14000 PLN',
            tags: ['Selenium', 'Cypress', 'Automation'],
            industry: 'IT'
        },
        {
            title: 'Cybersecurity Specialist',
            company: 'SecureTech',
            location: 'Katowice',
            salary: '16000-25000 PLN',
            tags: ['Penetration Testing', 'SIEM', 'Networking'],
            industry: 'IT'
        },
        {
            title: 'Marketing Specialist',
            company: 'Brandify',
            location: 'Warszawa',
            salary: '8000-12000 PLN',
            tags: ['SEO', 'Content Marketing', 'Social Media'],
            industry: 'Marketing'
        },
        {
            title: 'Product Owner',
            company: 'Innovate',
            location: 'Wrocław',
            salary: '14000-19000 PLN',
            tags: ['Agile', 'Product Management', 'Scrum'],
            industry: 'Management'
        },
        {
            title: 'IT Support Specialist',
            company: 'HelpDeskPro',
            location: 'Poznań',
            salary: '7000-10000 PLN',
            tags: ['Windows', 'Linux', 'Networking'],
            industry: 'IT'
        },
        {
            title: 'Graphic Designer',
            company: 'CreativeStudio',
            location: 'Gdańsk',
            salary: '9000-13000 PLN',
            tags: ['Photoshop', 'Illustrator', 'Creativity'],
            industry: 'Design'
        },
        {
            title: 'AI Engineer',
            company: 'FutureAI',
            location: 'Warszawa',
            salary: '20000-30000 PLN',
            tags: ['Deep Learning', 'TensorFlow', 'Python'],
            industry: 'IT'
        }
    ];

    exampleJobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsContainer.appendChild(jobCard);
    });
}

// Funkcja tworząca pojedynczą kartę oferty pracy
function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.dataset.industry = job.industry;
    card.dataset.location = job.location;
    card.dataset.salary = job.salary.split('-')[0];

    card.innerHTML = `
    <h3>${job.title}</h3>
    <div class="company">
        <i class="fas fa-building"></i> ${job.company}
    </div>
    <div class="job-details">
        <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
        <span><i class="fas fa-clock"></i> Pełny etat</span>
    </div>
    <div class="job-tags-container">
        ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
    </div>
    <div class="salary">
        ${job.salary}
    </div>
    <button class="apply-btn">Aplikuj teraz</button>
    `;

    return card;
}

// Inicjalizacja efektów scrollowania
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Efekt przezroczystości nagłówka
        if (currentScroll > 100) {
            header.style.background = 'rgba(20, 20, 30, 0.95)';
        } else {
            header.style.background = 'rgba(20, 20, 30, 0.8)';
        }

        lastScroll = currentScroll;
    });
}

// Inicjalizacja filtrów
function initializeFilters() {
    // Obiekt przechowujący aktywne filtry
    window.activeFilters = {
        industry: null,
        location: null,
        salary: null
    };

    // Dodanie event listenerów do przycisków aplikowania
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Tutaj można dodać logikę aplikowania
            alert('Funkcja aplikowania zostanie dodana wkrótce!');
        });
    });
}

// Obsługa responsywności
function handleResponsiveness() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content-area');
    
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.display = 'block';
        content.style.marginLeft = '300px';
    }
}

// Nasłuchiwanie zmiany rozmiaru okna
window.addEventListener('resize', handleResponsiveness);