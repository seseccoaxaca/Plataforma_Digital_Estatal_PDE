document.getElementById("login-button").addEventListener("click", function () {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Aquí deberías validar las credenciales ingresadas con las credenciales predeterminadas o con tu sistema de autenticación real en el servidor.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Supongamos que tienes credenciales predeterminadas
    const defaultUsername = "sesecc";
    const defaultPassword = "sesecc";

    // Verifica si las credenciales son correctas
    if (username === defaultUsername && password === defaultPassword) {
        // Las credenciales son correctas, redirige a otra vista (por ejemplo, "dashboard.html")
        window.location.href = "index.php";
    } else {
        // Las credenciales son incorrectas, muestra un mensaje de error o realiza alguna acción adecuada.
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});