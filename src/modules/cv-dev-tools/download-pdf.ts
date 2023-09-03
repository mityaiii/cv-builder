import html2pdf from 'html2pdf.js';

function DownloadPdf() {
  const element = document.getElementById("resume")
  const opt = {
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas: {
      dpi: 192,
      scale: 4,
      letterRendering: true,
      useCORS: true
    },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }
  html2pdf().set(opt).from(element).save();
}

export default DownloadPdf;