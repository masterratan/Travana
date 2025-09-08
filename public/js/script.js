(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-password');

  toggles.forEach(icon => {
    const targetId = icon.getAttribute('data-target');
    const input = document.getElementById(targetId);
    if (!input) return;

    // The clickable wrapper (pw-toggle) may be the parent or the icon itself
    const control = icon.closest('.pw-toggle') || icon;

    if (!control.hasAttribute('role')) control.setAttribute('role', 'button');
    if (!control.hasAttribute('tabindex')) control.setAttribute('tabindex', '0');
    if (!control.hasAttribute('aria-pressed')) control.setAttribute('aria-pressed', 'false');
    if (!control.hasAttribute('aria-label')) control.setAttribute('aria-label', 'Show password');

    const toggleState = () => {
      if (input.type === 'password') {
        input.type = 'text';
        control.setAttribute('aria-pressed', 'true');
        control.setAttribute('aria-label', 'Hide password');
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        control.setAttribute('aria-pressed', 'false');
        control.setAttribute('aria-label', 'Show password');
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    };

    control.addEventListener('click', (e) => {
      e.preventDefault();
      toggleState();
    });

    control.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleState();
      }
    });
  });
});
