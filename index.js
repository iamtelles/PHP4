function alertMessage() {
  let informationForm = document.getElementById('userInformation');
  console.log(informationForm)
  alert("Datos ingresados:\n\n" +
    "Nombres: " + informationForm.elements["names"].value + "\n" +
    "Apellidos: " + informationForm.elements["surnames"].value + "\n" +
    "Número telefónico: " + informationForm.elements["phonenumber"].value + "\n" +
    "Correo electrónico: " + informationForm.elements["email"].value + "\n" +
    "Fecha de nacimiento: " + informationForm.elements["selectedDate"].value + "\n" +
    "Mensaje: " + informationForm.elements["message"].value
  );
}