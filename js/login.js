function switchTab(tabName) {
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

            document.getElementById(tabName + '-form').classList.add('active');
        }

function togglePassword() {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let eye1 = document.getElementById("eye1");
    let eye2 = document.getElementById("eye2");

    if (pass1.type === "password") {
        pass1.type = "text"; 
        eye1.className = "bi bi-eye-fill"; 
    } 
    else {
        pass1.type = "password"; 
        eye1.className = "bi bi-eye-slash-fill";
    }

    if (pass2.type === "password") {
        pass2.type = "text"; 
        eye2.className = "bi bi-eye-fill"; 
    } 
    else {
        pass2.type = "password"; 
        eye2.className = "bi bi-eye-slash-fill";
    }
}