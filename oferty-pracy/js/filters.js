// Funkcja do obsługi rozwijania/zwijania sekcji filtrów
function toggleFilter(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Funkcja do filtrowania ofert pracy
function filterJobs(filters) {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        let shouldShow = true;
        
        // Sprawdzanie każdego filtru
        if (filters.industry && !card.dataset.industry.includes(filters.industry)) {
            shouldShow = false;
        }
        if (filters.location && !card.dataset.location.includes(filters.location)) {
            shouldShow = false;
        }
        if (filters.salary) {
            const salary = parseInt(card.dataset.salary);
            const [min, max] = filters.salary.split('-').map(Number);
            if (salary < min || (max && salary > max)) {
                shouldShow = false;
            }
        }
        
        // Pokazanie lub ukrycie karty
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Obsługa wyszukiwania w filtrach
document.querySelectorAll('.filter-content input[type="text"]').forEach(input => {
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filterList = e.target.nextElementSibling;
        const items = filterList.getElementsByTagName('li');
        
        Array.from(items).forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
});

// Obsługa kliknięć w elementy listy filtrów
document.querySelectorAll('.filter-content li').forEach(item => {
    item.addEventListener('click', function() {
        const filterType = this.closest('.filter-section').querySelector('.filter-header span').textContent.toLowerCase();
        const value = this.textContent;
        
        // Aktualizacja aktywnych filtrów
        activeFilters[filterType] = value;
        filterJobs(activeFilters);
        
        // Wizualne zaznaczenie wybranego elementu
        this.parentElement.querySelectorAll('li').forEach(li => {
            li.classList.remove('active');
        });
        this.classList.add('active');
    });
});