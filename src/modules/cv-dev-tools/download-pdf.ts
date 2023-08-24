import html2pdf from 'html2pdf.js';

function DownloadPdf() {
  const element = document.getElementById("resume")
  const opt = {
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 1 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  }
  html2pdf().set(opt).from(element).save();
}

export default DownloadPdf;