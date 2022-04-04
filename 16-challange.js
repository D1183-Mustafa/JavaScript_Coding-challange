// JS-CC-025 : Roman Numerals
// Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Example:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

// Problem Statement
// Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

function RomaAlfa(arr) {
  let romabirileon = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
  };
  let result = [];
  for (const iterator of arr) {
    let romatext = "";
    if (iterator >= 1000) {
      let romaM = parseInt(iterator / 1000);
      for (let i = 0; i < romaM; i++) {
        romatext += "M";
      }
      // result.push(romatext);
      let romaMResult = iterator - 1000 * romaM;
      // console.log(romaMResult);
      if (romaMResult >= 500 && romaMResult < 1000) {
        let romaD = parseInt(romaMResult / 500);
        for (let i = 0; i < romaD; i++) {
          romatext += "D";
        }
        let romaDResult = romaMResult - 500 * romaD;
        console.log(romatext);
        console.log(romaDResult);
        if (romaDResult >= 100 && romaDResult < 500) {
          let romaC = parseInt(romaDResult / 100);
          for (let i = 0; i < romaC; i++) {
            romatext += "C";
          }
          let romaCResult = romaDResult - 100 * romaC;
          console.log(romatext);
          if (romaCResult >= 50 && romaCResult < 100) {
            let romaL = parseInt(romaCResult / 50);
            for (let i = 0; i < romaL; i++) {
              romatext += "L";
            }
            let romaLResult = romaCResult - 50 * romaL;
            console.log(romaLResult);
            if (romaLResult >= 10 && romaLResult < 50) {
              let romaX = parseInt(romaLResult / 10);
              for (let i = 0; i < romaX; i++) {
                romatext += "X";
              }
              let romaXResult = romaLResult - 10 * romaX;
              console.log(romaXResult);
              if (romaXResult > 0 && romaXResult <= 10) {
                romatext += romabirileon[romaXResult];
                console.log(romabirileon[romaXResult]);
              }
            } else if (romaLResult > 0 && romaLResult <= 10) {
              romatext += romabirileon[romaLResult];
            }
          }
        }
      } else if (romaMResult >= 100 && romaMResult < 500) {
        let romaC2 = parseInt(romaMResult / 100);
        for (let i = 0; i < romaC2; i++) {
          romatext += "C";
        }
        let romaCResult2 = romaMResult - 100 * romaC2;
        if(romaCResult2 >=50 && romaCResult2 < 100) {
            let romaL2 = parseInt(romaCResult2 / 50);
            for (let i = 0; i < romaL2; i++) {
              romatext += "L";
            }
            let romaLResult2 = romaCResult2 - (50 * romaL2);
            if (romaLResult2 >= 10 && romaLResult2<50) {
                let romaX2 = parseInt(romaLResult2 / 10);
                for (let i = 0; i < romaX2; i++) {
                  romatext += "X";
                }
                let romaXResult2 = romaLResult2 - (10 * romaX2);
                if (romaXResult2 >0 && romaXResult2 <=10) {
                    romatext += romabirileon[romaXResult2];
                }
            }
        }
      }else if(romaMResult >= 50 && romaMResult < 100){
        let romaL3 = parseInt(romaMResult / 50);
        for (let i = 0; i < romaL3; i++) {
          romatext += "L";
        }
        let romaLResult3 = romaMResult - (50 * romaL3);
        if (romaLResult3 >=10 && romaLResult3 <50) {
            let romaX3 = parseInt(romaLResult3 / 10);
            for (let i = 0; i < romaX3; i++) {
              romatext += "X";
            }
            let romaXResult3 = romaLResult3 - (10 * romaX3);
            if(romaXResult3 >0 && romaXResult3<=10){
                romatext += romabirileon[romaXResult3];
            }
        }
      }else if(romaMResult >= 10 && romaMResult < 50){
        let romaX4 = parseInt(romaMResult / 10);
        for (let i = 0; i < romaX4; i++) {
          romatext += "X";
        }
        let romaXResult4 = romaMResult - (10 * romaX4);
        if (romaXResult4 >0 && romaXResult4<=10) {
            romatext += romabirileon[romaXResult4];
        }
      }else if(romaMResult>0 && romaMResult<=10){
        romatext += romabirileon[romaMResult];
      }
    }else if(iterator >= 500 && iterator < 1000){
        let romaD2 = parseInt(iterator / 500);
        for (let i = 0; i < romaD2; i++) {
          romatext += "D";
        }
        let romaDResult2 = iterator - 500 * romaD2;
        if (romaDResult2 >= 100 && romaDResult2<500) {
            let romaC3 = parseInt(romaDResult2 / 100);
            for (let i = 0; i < romaC3; i++) {
              romatext += "C";
            }
            let romaCResult3 = romaDResult2 - 100 * romaC3;
            if(romaCResult3 >=50 && romaCResult3<100){
                let romaL4 = parseInt(romaCResult3 / 50);
                for (let i = 0; i < romaL4; i++) {
                  romatext += "L";
                }
                let romaLResult4 = romaCResult3 - (50 * romaL4);
                if (romaLResult4 >10 && romaLResult4 <50) {
                    let romaX5 = parseInt(romaLResult4 / 10);
                    for (let i = 0; i < romaX5; i++) {
                      romatext += "X";
                    }
                    let romaXResult5 = romaLResult4 - (10 * romaX5);
                    if (romaXResult5 >0 && romaXResult5<10) {
                        romatext += romabirileon[romaXResult5];
                    }
                }
            }
        }
    }
    result.push(romatext);
  }
  return result;
}

console.log(RomaAlfa([966]));
