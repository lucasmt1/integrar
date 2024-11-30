import jsPDF from 'jspdf';

export const generateRelatorioPDF = (dadosEmocionais, dadosTurma = null) => {
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text('Relatório INTEGRAR', 20, 20);
  
  doc.setFontSize(12);
  doc.text('Progresso Emocional', 20, 40);
  
  const dados = dadosEmocionais.map(d => ({
    data: new Date(d.createdAt).toLocaleDateString(),
    estresse: d.nivelEstresse,
    ansiedade: d.nivelAnsiedade
  }));

  let yPosition = 60;
  dados.forEach(d => {
    doc.text(`${d.data}: Estresse: ${d.estresse}, Ansiedade: ${d.ansiedade}`, 20, yPosition);
    yPosition += 10;
  });

  return doc.save('relatorio-integrar.pdf');
};