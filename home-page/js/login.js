document.addEventListener('DOMContentLoaded', function() {
    /* Tworzenie struktury modalu logowania */
    function createLoginModal() {
        const modal = document.createElement('div');
        modal.className = 'login-modal';
        modal.id = 'loginModal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Wybierz metodę logowania</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="login-methods">
                    <button class="login-method-btn facebook">
                        <i class="fab fa-facebook-f"></i>
                        Kontynuuj przez Facebook
                    </button>
                    <button class="login-method-btn google">
                        <i class="fab fa-google"></i>
                        Kontynuuj przez Google
                    </button>
                    <button class="login-method-btn email">
                        <i class="fas fa-envelope"></i>
                        Kontynuuj przez Email
                    </button>
                    <div class="divider">
                        <span>lub</span>
                    </div>
                    <button class="login-method-btn register-option">
                        <i class="fas fa-user-plus"></i>
                        Zarejestruj nowe konto
                    </button>
                </div>
                <form class="login-form" style="display: none;">
                    <div class="form-header">
                        <button type="button" class="back-to-methods">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <h3>Logowanie przez Email</h3>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="twoj@email.com" required>
                    </div>
                    <div class="form-group">
                        <label>Hasło</label>
                        <input type="password" placeholder="••••" required>
                    </div>
                    <div class="form-options">
                        <label>
                            <input type="checkbox"> Zapamiętaj mnie
                        </label>
                        <a href="#" class="forgot-password">Zapomniałeś hasła?</a>
                    </div>
                    <button type="submit" class="btn login-submit">Zaloguj się</button>
                </form>
            </div>
        `;
        return modal;
    }

    /* Konfiguracja funkcjonalności modalu logowania */
    function setupLoginModal(button, modal) {
        // Pobieranie elementów modalu
        const closeBtn = modal.querySelector('.close-modal');
        const form = modal.querySelector('.login-form');
        const loginMethods = modal.querySelector('.login-methods');
        const emailLoginBtn = modal.querySelector('.login-method-btn.email');
        const backToMethodsBtn = modal.querySelector('.back-to-methods');
        const registerOptionBtn = modal.querySelector('.login-method-btn.register-option');
        const facebookBtn = modal.querySelector('.login-method-btn.facebook');
        const googleBtn = modal.querySelector('.login-method-btn.google');
        
        // Obsługa otwierania modalu
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            loginMethods.style.display = 'flex';
            form.style.display = 'none';
        });

        // Obsługa zamykania modalu
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            loginMethods.style.display = 'flex';
            form.style.display = 'none';
        });

        // Przełączanie na logowanie przez email
        emailLoginBtn.addEventListener('click', () => {
            loginMethods.style.display = 'none';
            form.style.display = 'block';
        });

        // Powrót do wyboru metod
        backToMethodsBtn.addEventListener('click', () => {
            loginMethods.style.display = 'flex';
            form.style.display = 'none';
        });

        // Przekierowanie do rejestracji
        registerOptionBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            const registerBtn = document.querySelector('.btn.register');
            if (registerBtn) {
                registerBtn.click();
            }
        });

        // Obsługa logowania przez Facebook
        facebookBtn.addEventListener('click', () => {
            console.log('Logowanie przez Facebook...');
        });

        // Obsługa logowania przez Google
        googleBtn.addEventListener('click', () => {
            console.log('Logowanie przez Google...');
        });

        // Obsługa formularza logowania
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Próba logowania przez email...');
        });

        // Zamykanie po kliknięciu poza modalem
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                loginMethods.style.display = 'flex';
                form.style.display = 'none';
            }
        });
    }

    /* Inicjalizacja modalu logowania */
    const loginBtn = document.querySelector('.btn.login');
    const loginModal = createLoginModal();
    document.body.appendChild(loginModal);
    setupLoginModal(loginBtn, loginModal);
});