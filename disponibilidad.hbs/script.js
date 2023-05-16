document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que el formulario se envíe
  
    var departingDate = new Date(document.getElementById('departing').value);
    var returningDate = new Date(document.getElementById('returning').value);
    var currentDate = new Date();
  
    if (departingDate < currentDate || returningDate < currentDate) {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('error-message').innerText = 'Error: Las fechas de salida y regreso no pueden ser anteriores a la fecha actual.';
    } else if (departingDate > returningDate) {
      document.getElementById('error-message').style.display = 'block';
      document.getElementById('error-message').innerText = 'Error: La fecha de salida no puede ser posterior a la fecha de regreso.';
    } else {
      // Aquí puedes realizar la acción de mostrar los vuelos
      console.log('Mostrando vuelos');
      document.getElementById('error-message').style.display = 'none';
    }
  });
  