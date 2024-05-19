// Definir la fecha objetivo (puede ser en el futuro)
const targetDate = new Date('2024-12-31T23:59:59').getTime();

// Función para actualizar el temporizador
function updateTimer() {
    // Obtener la fecha y hora actual
    const currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha objetivo y la fecha actual
    const difference = targetDate - currentDate;

    // Calcular el tiempo restante en horas, minutos y segundos
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar el contenido HTML con el tiempo restante
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

// Función para formatear el tiempo con ceros a la izquierda si es necesario
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Llamar a la función updateTimer cada segundo
setInterval(updateTimer, 1000);
