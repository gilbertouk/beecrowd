'use strict';

export function problem(lines) {
  const [n1, n2, n3, n4] = lines[0].split(' ').map(Number);
  const n5 = +lines[1];

  function calcularMedia(n1, n2, n3, n4, n5) {
    const media = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;

    checarMediaAluno(media, n5);
  }

  function checarMediaAluno(media, n5) {
    if (media >= 7) {
      console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);
    } else if (media >= 5 && media < 7) {
      const novaMedia = (media + n5) / 2;
      let message = '';

      if (novaMedia >= 5) {
        message = 'Aluno aprovado.';
      } else {
        message = 'Aluno reprovado.';
      }

      console.log(
        `Media: ${media.toFixed(
          1
        )}\nAluno em exame.\nNota do exame: ${n5.toFixed(
          1
        )}\n${message}\nMedia final: ${novaMedia.toFixed(1)}`
      );
    } else {
      console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`);
    }
  }

  calcularMedia(n1, n2, n3, n4, n5);
}
