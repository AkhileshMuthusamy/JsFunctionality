import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

/**
 * Convert html to canvas image and add it to pdf
 */
html2canvas(document.querySelector('#mainBody_pdf'), { scale: 1.5 }).then(canvas => {
  const imgData = canvas.toDataURL('image/jpeg', 1.0);

  console.log(imgData);
  const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
  pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
  console.log(pdf.output('dataurlstring'));

  pdf.save('converteddoc.pdf');
});
