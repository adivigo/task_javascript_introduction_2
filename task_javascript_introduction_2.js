const mtk = 40
const bahasaIndonesia = 40
const bahasaInggris = 40
const ipa = 40

let nilairata2 = (mtk + bahasaIndonesia + 
    bahasaInggris + ipa)/4

if (nilairata2 <= 100 && nilairata2 >= 90){
    console.log(`Rata-rata = ${nilairata2}`);
    console.log('Grade = A');
} else if (nilairata2 <= 89 && nilairata2 >= 80){
    console.log(`Rata-rata = ${nilairata2}`);
    console.log('Grade = B');
} else if (nilairata2 <= 79 && nilairata2 >= 70){
    console.log(`Rata-rata = ${nilairata2}`);
    console.log('Grade = C');
} else if (nilairata2 <= 69 && nilairata2 >= 60){
    console.log(`Rata-rata = ${nilairata2}`);
    console.log('Grade = D');
} else if (nilairata2 <= 59 && nilairata2 >= 0){
    console.log(`Rata-rata = ${nilairata2}`);
    console.log('Grade = E');
} else {
    console.log('nilai tidak valid');
}