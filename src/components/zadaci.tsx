import { useEffect, useState } from "react";

type ResultType = { minNumber: number; maxNumber: number };

const Zadaci = () => {
  const [z1, setZ1] = useState<ResultType>();

  const minMax = (numArr: number[]) => {
    if (numArr.length === 0) {
      return null;
    }
    let minNumber = numArr[0];
    let maxNumber = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] < minNumber) {
        minNumber = numArr[i];
      }
      if (numArr[i] > maxNumber) {
        maxNumber = numArr[i];
      }
    }
    return { minNumber: minNumber, maxNumber: maxNumber };
  };
  const numArr = [7, 55, 1, 11, 408];

  useEffect(() => {
    setZ1(minMax(numArr));
  }, []);

  return (
    <>
      <div>Zadaci</div>
    </>
  );
};
export default Zadaci;

//1.Zadatak
//Napisati funkciju koja prima niz brojeva, a vraca objekt u
//kojemu se nalaze 2 podatka minNumber i maxNumber.

// / Zadatak1 - Jelena
// const Zadatak = () => {
//   const niz = [3, 9, 76, 51, 14, 92, 1, 123];
//   const minMax = (niz) => {
//     let min = niz[0];
//     let max = niz[0];
//     niz.map((number) => {
//       if (min > number) {
//         min = number;
//       }
//       if (max < number) {
//         max = number;
//       }
//     });
//     return {
//       minNumber: min,
//       maxNumber: max,
//     };
//   };
//   console.log(minMax(niz));
//   return (
//     <>
//       <div>Zadatak</div>
//     </>
//   );
// };
// 21:01
// const a = 7;
// broj.map((num) => {
//   if (broj <0) return "Broj ne može biti negativan.";
//   for (let i = 0; i <= a; i++) {
//     console.log("Ispisujem broj: ", i);
//   }
// });

//2.Zadatak
//kreirati funkciju koja prima broj (count), a vraca ispis
//brojeva od 0 do broja (count) koji smo dobili kroz parametar.
//Ako broj koji dode kroz parametar bude negativan, neka
//funkcija vrati string "Broj ne može biti negativan."
