var qrcode = new QRCode("qrcode"); // Initialize Library
const form = document.getElementById("details");



/**
 * Generate QR Code
 *
 * This function is called when the user submits the form,
 * it retrieves the first and last name from the form inputs
 * and generates a QR Code with the full name concatenated
 */
function generateQRCode() {
  // Get first and last name from the form
  const fullName = `${form.fname.value} ${form.lname.value}`;

  // If the name fields are empty, show an alert and exit
  if (!fullName.trim()) return alert("Enter first and last name");

  // Use the qrcode library to generate a QR Code with the full name
  qrcode.makeCode(fullName);
}