document.addEventListener('DOMContentLoaded', function () {
    /* Tworzenie struktury modalu rejestracji */
    function createRegistrationModal() {
        const modal = document.createElement('div');
        modal.className = 'registration-modal';
        modal.id = 'registrationModal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Rejestracja</h2>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="registration-methods" style="display: flex;">
                    <button class="registration-method-btn facebook">
                        <i class="fab fa-facebook-f"></i>
                        Zarejestruj przez Facebook
                    </button>
                    <button class="registration-method-btn google">
                        <i class="fab fa-google"></i>
                        Zarejestruj przez Google
                    </button>
                    <button class="registration-method-btn email">
                        <i class="fas fa-envelope"></i>
                        Zarejestruj przez Email
                    </button>
                </div>

                <!-- Etapy rejestracji przez email -->
                <div class="registration-steps" style="display: none;">
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: 33%"></div>
                    </div>
                    
                    <!-- Krok 1: Formularz -->
                    <div class="step step-1">
                        <h3>Krok 1: Dane podstawowe</h3>
                        <form class="registration-form">
                        <div class="form-group">
            <label for="username">Nazwa użytkownika</label>
            <input type="text" id="username" name="username" placeholder="Wpisz swoją nazwę użytkownika" required>
        </div>

                            <div class="form-row">
            <div class="form-group">
                <label>Imię</label>
                <input type="text" name="firstName" placeholder="Wpisz swoje imię" required>
            </div>
            <div class="form-group">
                <label>Nazwisko</label>
                <input type="text" name="lastName" placeholder="Wpisz swoje nazwisko" required>
            </div>
        </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Wpisz swój email" required>
                            </div>
                            <div class="form-group">
                                <label>Hasło</label>
                                <input type="password" name="password" placeholder="Wpisz swoje hasło" required>
                            </div>
                            <div class="form-group">
                                <label>Powtórz hasło</label>
                                <input type="password" name="confirmPassword" placeholder="Powtórz swoje hasło" required>
                            </div>
                            <div class="form-checkbox">
                                <label>
                                    <input type="checkbox" required>
                                    Akceptuję  <a href="#" target="_blank">regulamin</a> i politykę prywatności
                                </label>
                            </div>
                            <div class="form-submit">
                                <button type="submit" class="register-submit">Dalej</button>
                            </div>
                        </form>
                    </div>

                    <!-- Krok 2: Weryfikacja email -->
                    <div class="step step-2" style="display: none;">
                        <div class="verification-message">
                            <i class="fas fa-envelope-open-text"></i>
                            <h3>Sprawdź swoją skrzynkę email</h3>
                            <p>Wysłaliśmy link aktywacyjny na podany adres email.</p>
                            <div class="resend-timer">
                                Możesz wysłać email ponownie za: <span>2:00</span>
                            </div>
                            <button class="resend-button" disabled>
                                Wyślij ponownie email aktywacyjny
                            </button>
                        </div>
                    </div>

                    <!-- Krok 3: Sukces -->
                    <div class="step step-3" style="display: none;">
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h3>Rejestracja zakończona!</h3>
                            <p>Twoje konto zostało pomyślnie utworzone.</p>
                            <button class="btn close-success">Zamknij</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return modal;
    }

    /* Konfiguracja funkcjonalności modalu rejestracji */
    function setupRegistrationModal(button, modal) {
        // Pobieranie elementów modalu
        const closeBtn = modal.querySelector('.close-modal');
        const registrationMethods = modal.querySelector('.registration-methods');
        const registrationSteps = modal.querySelector('.registration-steps');
        const emailRegBtn = modal.querySelector('.registration-method-btn.email');
        const facebookRegBtn = modal.querySelector('.registration-method-btn.facebook');
        const googleRegBtn = modal.querySelector('.registration-method-btn.google');
        const form = modal.querySelector('.registration-form');
        const steps = modal.querySelectorAll('.step');
        const progressBar = modal.querySelector('.progress-bar-fill');
        const resendButton = modal.querySelector('.resend-button');
        const closeSuccessBtn = modal.querySelector('.close-success');
        let currentStep = 1;
        let resendTimer = null;

        // Obsługa otwierania modalu
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            registrationMethods.style.display = 'flex';
            registrationSteps.style.display = 'none';
        });

        // Obsługa zamykania modalu
        closeBtn.addEventListener('click', () => {
            closeModal();
        });

        // Rejestracja przez email
        emailRegBtn.addEventListener('click', () => {
            registrationMethods.style.display = 'none';
            registrationSteps.style.display = 'block';
            currentStep = 1;
            updateStep();
        });

        // Rejestracja przez Facebook
        facebookRegBtn.addEventListener('click', () => {
            console.log('Rejestracja przez Facebook...');
        });

        // Rejestracja przez Google
        googleRegBtn.addEventListener('click', () => {
            console.log('Rejestracja przez Google...');
        });

        // Obsługa formularza
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            goToNextStep();
        });

        /* Funkcje pomocnicze */
        function goToNextStep() {
            steps[currentStep - 1].style.display = 'none';
            currentStep++;
            
            if (currentStep <= steps.length) {
                updateStep();
                
                if (currentStep === 2) {
                    startResendTimer();
                }
                
                if (currentStep === 2) {
                    setTimeout(() => {
                        goToNextStep();
                    }, 3000);
                }
            }
        }

        function updateStep() {
            steps.forEach((step, index) => {
                step.style.display = index === currentStep - 1 ? 'block' : 'none';
            });
            progressBar.style.width = `${(currentStep / steps.length) * 100}%`;
        }

        function startResendTimer() {
            let timeLeft = 120;
            const timerSpan = modal.querySelector('.resend-timer span');
            resendButton.disabled = true;
            
            if (resendTimer) clearInterval(resendTimer);
            
            resendTimer = setInterval(() => {
                timeLeft--;
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeLeft <= 0) {
                    clearInterval(resendTimer);
                    resendButton.disabled = false;
                    timerSpan.parentElement.style.display = 'none';
                }
            }, 1000);
        }

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            resetRegistration();
        }

        function resetRegistration() {
            currentStep = 1;
            if (resendTimer) clearInterval(resendTimer);
            registrationMethods.style.display = 'flex';
            registrationSteps.style.display = 'none';
            updateStep();
            form.reset();
            if (resendButton) resendButton.disabled = false;
        }

        // Zamykanie po kliknięciu poza modalem
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    /* Inicjalizacja modalu rejestracji */
    const registerBtn = document.querySelector('.btn.register');
    const registrationModal = createRegistrationModal();
    document.body.appendChild(registrationModal);
    setupRegistrationModal(registerBtn, registrationModal);
});