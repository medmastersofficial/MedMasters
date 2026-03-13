// NTS VAQ — Quantitative Reasoning
// 200 MCQs
const NTS_QUANT = [
  {
    id: 1,
    question: `The square root of 20.25 is:`,
    options: [`4.25`, `4.5`, `4.65`, `4.85`],
    correct: 1,
    explanation: `(20.25 = 2025/(100)). (√(2025) = 45). (√(20.25) = 45/(10) = 4.5).`,
    passage: ``
  },
  {
    id: 2,
    question: `Zakat on gold amounting Rs. 11,10,000 is:`,
    options: [`Rs. 27000`, `Rs. 29000`, `Rs. 27750`, `Rs. 25000`],
    correct: 2,
    explanation: `Zakat rate = 2.5%. (2.5% × 1,110,000 = 1,110,000 × 0.025 = 27,750).`,
    passage: ``
  },
  {
    id: 3,
    question: `Factorization of algebraic expression (x² - 3x - 4) yields:`,
    options: [`(x+4)(x+1)`, `(x-4)(x-1)`, `(x+4)(x-1)`, `(x-4)(x+1)`],
    correct: 3,
    explanation: `We need numbers whose product = −4 and sum = −3. Those numbers are −4 and +1. So, (x² - 3x - 4 = (x-4)(x+1)).`,
    passage: ``
  },
  {
    id: 4,
    question: `If (x + 1/x = 2) then (x² + 1/x² = ?)`,
    options: [`8`, `2`, `4`, `6`],
    correct: 1,
    explanation: `(x + 1/x)² = x² + 1/x² + 2`,
    passage: ``
  },
  {
    id: 5,
    question: `If A = {letters between v and z}, which of the following best describes set A?`,
    options: [`The set of vowels`, `The set of consonants`, `The set of vowels between v & z`, `The set of integers`],
    correct: 2,
    explanation: `Explanation: Letters between v and z are w, x, y. None of them are vowels, so the set is empty.`,
    passage: ``
  },
  {
    id: 6,
    question: `The score of Misbah-ul-Haq in one day match was 78 runs. If the total score of the team is 325 runs, what is the percentage?`,
    options: [`22%`, `27%`, `26%`, `24%`],
    correct: 3,
    explanation: `78/(325) × 100`,
    passage: ``
  },
  {
    id: 7,
    question: `The sum of the first five whole numbers is equal to:`,
    options: [`8`, `10`, `9`, `11`],
    correct: 1,
    explanation: `First five whole numbers: 0,1,2,3,4`,
    passage: ``
  },
  {
    id: 8,
    question: `All the factors of 24 are:`,
    options: [`2, 3, 4, 6, 12, 24`, `1, 3, 4, 6, 12, 24`, `1, 2, 3, 4, 6, 12, 24`, `1, 2, 3, 4, 6, 12`],
    correct: 2,
    explanation: `Numbers that divide 24 exactly are 1, 2, 3, 4, 6, 12, 24.`,
    passage: ``
  },
  {
    id: 9,
    question: `Yasir got 80% of 75 marks in a written examination of mathematics. How many marks did he get?`,
    options: [`45`, `50`, `65`, `60`],
    correct: 3,
    explanation: ``,
    passage: ``
  },
  {
    id: 10,
    question: `A polynomial of degree two is called:`,
    options: [`Linear polynomial`, `Quadratic polynomial`, `Identity polynomial`, `Nonlinear polynomial`],
    correct: 1,
    explanation: `A polynomial with the highest power of 2 is called a quadratic polynomial.`,
    passage: ``
  },
  {
    id: 11,
    question: `The square root of 144 is:`,
    options: [`10`, `11`, `12`, `14`],
    correct: 2,
    explanation: `12 × 12 = 144.`,
    passage: ``
  },
  {
    id: 12,
    question: `If 25% of a number is 40, the number is:`,
    options: [`120`, `140`, `150`, `160`],
    correct: 3,
    explanation: `25% = 1/4. Number = 40 × 4 = 160.`,
    passage: ``
  },
  {
    id: 13,
    question: `What is 15% of 200?`,
    options: [`25`, `30`, `35`, `40`],
    correct: 1,
    explanation: `15/100 × 200 = 30.`,
    passage: ``
  },
  {
    id: 14,
    question: `If 5x = 45, then x =`,
    options: [`5`, `6`, `9`, `8`],
    correct: 2,
    explanation: `x = 45 ÷ 5 = 9.`,
    passage: ``
  },
  {
    id: 15,
    question: `The average of 10, 20, 30, 40, 50 is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `Sum = 150. Average = 150 ÷ 5 = 30.`,
    passage: ``
  },
  {
    id: 16,
    question: `If a car travels 60 km in one hour, how far will it travel in 3 hours?`,
    options: [`120 km`, `180 km`, `150 km`, `200 km`],
    correct: 1,
    explanation: `Distance = speed × time = 60 × 3 = 180.`,
    passage: ``
  },
  {
    id: 17,
    question: `What is 3 squared plus 4 squared?`,
    options: [`12`, `20`, `25`, `49`],
    correct: 2,
    explanation: `3² + 4² = 9 + 16 = 25.`,
    passage: ``
  },
  {
    id: 18,
    question: `The sum of the first 10 natural numbers is:`,
    options: [`45`, `50`, `60`, `55`],
    correct: 3,
    explanation: `Formula = n(n+1)/2 = 10×11/2 = 55.`,
    passage: ``
  },
  {
    id: 19,
    question: `If 2x + 6 = 16, then x =`,
    options: [`3`, `5`, `4`, `6`],
    correct: 1,
    explanation: `2x = 10 x = 5.`,
    passage: ``
  },
  {
    id: 20,
    question: `What is 20% of 150?`,
    options: [`20`, `25`, `30`, `35`],
    correct: 2,
    explanation: `0.20 × 150 = 30.`,
    passage: ``
  },
  {
    id: 21,
    question: `If a number is doubled and becomes 60, the original number is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `2x = 60 → x = 30.`,
    passage: ``
  },
  {
    id: 22,
    question: `The cube of 4 is:`,
    options: [`12`, `64`, `48`, `16`],
    correct: 1,
    explanation: `4 × 4 × 4 = 64.`,
    passage: ``
  },
  {
    id: 23,
    question: `The perimeter of a square with side 5 cm is:`,
    options: [`10`, `15`, `20`, `25`],
    correct: 2,
    explanation: `Perimeter = 4 × side = 20.`,
    passage: ``
  },
  {
    id: 24,
    question: `If a train covers 120 km in 2 hours, its speed is:`,
    options: [`50 km/h`, `80 km/h`, `70 km/h`, `60 km/h`],
    correct: 3,
    explanation: `Speed = distance/time = 120 ÷ 2.`,
    passage: ``
  },
  {
    id: 25,
    question: `The value of 9² is:`,
    options: [`72`, `81`, `90`, `99`],
    correct: 1,
    explanation: `9 × 9 = 81.`,
    passage: ``
  },
  {
    id: 26,
    question: `If 10 pencils cost Rs. 50, the cost of one pencil is:`,
    options: [`3`, `4`, `5`, `6`],
    correct: 2,
    explanation: `50 ÷ 10 = 5.`,
    passage: ``
  },
  {
    id: 27,
    question: `The LCM of 4 and 6 is:`,
    options: [`8`, `10`, `16`, `12`],
    correct: 3,
    explanation: `Multiples common = 12.`,
    passage: ``
  },
  {
    id: 28,
    question: `The HCF of 12 and 18 is:`,
    options: [`3`, `6`, `4`, `9`],
    correct: 1,
    explanation: `Highest common factor is 6.`,
    passage: ``
  },
  {
    id: 29,
    question: `If 7 + x = 15, then x =`,
    options: [`6`, `7`, `8`, `9`],
    correct: 2,
    explanation: `x = 15 − 7 = 8.`,
    passage: ``
  },
  {
    id: 30,
    question: `The value of 100 ÷ 5 is:`,
    options: [`15`, `30`, `25`, `20`],
    correct: 3,
    explanation: `100 ÷ 5 = 20.`,
    passage: ``
  },
  {
    id: 31,
    question: `The area of a rectangle with length 10 and width 5 is:`,
    options: [`40`, `50`, `45`, `60`],
    correct: 1,
    explanation: `Area = length × width.`,
    passage: ``
  },
  {
    id: 32,
    question: `If 8 workers finish a job in 4 days, the work done by one worker in 4 days equals:`,
    options: [`1/2`, `1/4`, `1/8`, `1`],
    correct: 2,
    explanation: `Total work divided equally among workers.`,
    passage: ``
  },
  {
    id: 33,
    question: `The square root of 81 is:`,
    options: [`7`, `8`, `10`, `9`],
    correct: 3,
    explanation: `9 × 9 = 81.`,
    passage: ``
  },
  {
    id: 34,
    question: `What is 50% of 90?`,
    options: [`40`, `45`, `50`, `55`],
    correct: 1,
    explanation: `Half of 90 = 45.`,
    passage: ``
  },
  {
    id: 35,
    question: `The next number in the sequence is: 2, 4, 6, 8, ?`,
    options: [`9`, `11`, `10`, `12`],
    correct: 2,
    explanation: `Sequence increases by 2.`,
    passage: ``
  },
  {
    id: 36,
    question: `If a book costs Rs. 200 and a discount of 10% is given, the discount amount is:`,
    options: [`10`, `15`, `25`, `20`],
    correct: 3,
    explanation: `10% of 200 = 20.`,
    passage: ``
  },
  {
    id: 37,
    question: `The value of 5 × 7 is:`,
    options: [`30`, `35`, `32`, `40`],
    correct: 1,
    explanation: `Multiplication.`,
    passage: ``
  },
  {
    id: 38,
    question: `The sum of 18 and 24 is:`,
    options: [`38`, `40`, `42`, `44`],
    correct: 2,
    explanation: `18 + 24 = 42.`,
    passage: ``
  },
  {
    id: 39,
    question: `If a number is divided by 4 and the result is 5, the number is:`,
    options: [`10`, `15`, `25`, `20`],
    correct: 3,
    explanation: `5 × 4 = 20.`,
    passage: ``
  },
  {
    id: 40,
    question: `The value of 12 × 3 is:`,
    options: [`24`, `36`, `30`, `48`],
    correct: 1,
    explanation: `12 × 3 = 36.`,
    passage: ``
  },
  {
    id: 41,
    question: `The square of 11 is:`,
    options: [`111`, `120`, `121`, `132`],
    correct: 2,
    explanation: `11 × 11 = 121.`,
    passage: ``
  },
  {
    id: 42,
    question: `If a man saves Rs. 200 each month, how much does he save in a year?`,
    options: [`2000`, `2200`, `2600`, `2400`],
    correct: 3,
    explanation: `200 × 12 = 2400.`,
    passage: ``
  },
  {
    id: 43,
    question: `The cube of 3 is:`,
    options: [`9`, `27`, `18`, `36`],
    correct: 1,
    explanation: `3 × 3 × 3 = 27.`,
    passage: ``
  },
  {
    id: 44,
    question: `What is 75% of 80?`,
    options: [`50`, `55`, `60`, `65`],
    correct: 2,
    explanation: `0.75 × 80 = 60.`,
    passage: ``
  },
  {
    id: 45,
    question: `The average of 6 and 14 is:`,
    options: [`8`, `9`, `12`, `10`],
    correct: 3,
    explanation: `(6 + 14)/2 = 10.`,
    passage: ``
  },
  {
    id: 46,
    question: `The next number in the series: 5, 10, 20, 40, ?`,
    options: [`60`, `80`, `70`, `90`],
    correct: 1,
    explanation: `Each number doubles.`,
    passage: ``
  },
  {
    id: 47,
    question: `The value of 9 × 6 is:`,
    options: [`48`, `52`, `54`, `56`],
    correct: 2,
    explanation: `Multiplication.`,
    passage: ``
  },
  {
    id: 48,
    question: `If 100 students appear in an exam and 80 pass, the pass percentage is:`,
    options: [`60%`, `70%`, `75%`, `80%`],
    correct: 3,
    explanation: `80/100 × 100 = 80%.`,
    passage: ``
  },
  {
    id: 49,
    question: `The perimeter of a rectangle with length 8 and width 4 is:`,
    options: [`20`, `24`, `22`, `26`],
    correct: 1,
    explanation: `2 × (8 + 4) = 24.`,
    passage: ``
  },
  {
    id: 50,
    question: `The value of 6² is:`,
    options: [`30`, `32`, `36`, `42`],
    correct: 2,
    explanation: `6 × 6 = 36.`,
    passage: ``
  },
  {
    id: 51,
    question: `If 40% of a number equals 120, what is the number?`,
    options: [`250`, `360`, `320`, `300`],
    correct: 3,
    explanation: `40% = 0.40 0.40 × Number = 120 Number = 120 ÷ 0.40 = 300.`,
    passage: ``
  },
  {
    id: 52,
    question: `A number increased by 20% becomes 360. What was the original number?`,
    options: [`250`, `300`, `280`, `320`],
    correct: 1,
    explanation: `Let number = x x + 20% of x = 360 1.20x = 360 x = 360 ÷ 1.20 = 300.`,
    passage: ``
  },
  {
    id: 53,
    question: `The average of five numbers is 18. What is their total?`,
    options: [`70`, `80`, `90`, `85`],
    correct: 2,
    explanation: `Average = Sum ÷ Count Sum = Average × Count Sum = 18 × 5 = 90.`,
    passage: ``
  },
  {
    id: 54,
    question: `If x² − 9 = 0, then x equals:`,
    options: [`3 only`, `−3 only`, `9`, `±3`],
    correct: 3,
    explanation: `x² = 9 Taking square root gives two values: x = +3 or −3.`,
    passage: ``
  },
  {
    id: 55,
    question: `The value of 2³ + 3² is:`,
    options: [`13`, `17`, `15`, `19`],
    correct: 1,
    explanation: `2³ = 8 3² = 9 Total = 8 + 9 = 17.`,
    passage: ``
  },
  {
    id: 56,
    question: `A train travels 90 km in 1.5 hours. What is its speed?`,
    options: [`50 km/h`, `55 km/h`, `60 km/h`, `70 km/h`],
    correct: 2,
    explanation: `Speed = Distance ÷ Time 90 ÷ 1.5 = 60 km/h.`,
    passage: ``
  },
  {
    id: 57,
    question: `If the ratio of two numbers is 3 : 5 and their sum is 40, the larger number is:`,
    options: [`20`, `35`, `30`, `25`],
    correct: 3,
    explanation: `3x + 5x = 40 8x = 40 x = 5 Numbers = 15 and 25.`,
    passage: ``
  },
  {
    id: 58,
    question: `The simple interest on Rs.1000 at 5% per year for 2 years is:`,
    options: [`80`, `100`, `90`, `120`],
    correct: 1,
    explanation: `SI = P × R × T ÷ 100 = 1000 × 5 × 2 ÷ 100 = 100.`,
    passage: ``
  },
  {
    id: 59,
    question: `If 12 workers complete a job in 10 days, how many days will 6 workers take?`,
    options: [`15`, `18`, `20`, `24`],
    correct: 2,
    explanation: `Workers and time are inversely proportional. Half workers → double time. 10 × 2 = 20 days.`,
    passage: ``
  },
  {
    id: 60,
    question: `The value of (15 × 8) − (12 × 5) is:`,
    options: [`40`, `50`, `70`, `60`],
    correct: 3,
    explanation: `15×8 = 120 12×5 = 60 120 − 60 = 60.`,
    passage: ``
  },
  {
    id: 61,
    question: `If 3x = 21, then 2x equals:`,
    options: [`10`, `14`, `12`, `16`],
    correct: 1,
    explanation: `x = 7 2x = 14.`,
    passage: ``
  },
  {
    id: 62,
    question: `A number is decreased by 25% and becomes 75. What was the original number?`,
    options: [`90`, `95`, `100`, `110`],
    correct: 2,
    explanation: `75% of original = 75 Original = 75 ÷ 0.75 = 100.`,
    passage: ``
  },
  {
    id: 63,
    question: `If the perimeter of a rectangle is 60 and its length is 20, the width is:`,
    options: [`20`, `12`, `15`, `10`],
    correct: 3,
    explanation: `Perimeter = 2(L + W) 60 = 2(20 + W) 30 = 20 + W W = 10.`,
    passage: ``
  },
  {
    id: 64,
    question: `The value of (6² − 5²) is:`,
    options: [`12`, `11`, `13`, `14`],
    correct: 1,
    explanation: `6² = 36 5² = 25 Difference = 11.`,
    passage: ``
  },
  {
    id: 65,
    question: `If a shopkeeper buys an item for Rs.80 and sells it for Rs.100, the profit percentage is:`,
    options: [`20%`, `30%`, `25%`, `35%`],
    correct: 2,
    explanation: `Profit = 100 − 80 = 20 Profit % = (20/80) ×100 = 25%.`,
    passage: ``
  },
  {
    id: 66,
    question: `The square root of 169 is:`,
    options: [`11`, `12`, `14`, `13`],
    correct: 3,
    explanation: `13 × 13 = 169.`,
    passage: ``
  },
  {
    id: 67,
    question: `If 5 pencils cost Rs.25, the cost of 12 pencils is:`,
    options: [`50`, `60`, `55`, `65`],
    correct: 1,
    explanation: `1 pencil = 25 ÷ 5 = 5 12 × 5 = 60.`,
    passage: ``
  },
  {
    id: 68,
    question: `The next number in the sequence is: 4, 9, 16, 25, ?`,
    options: [`30`, `32`, `36`, `40`],
    correct: 2,
    explanation: `Squares of integers: 2², 3², 4², 5², next = 6² = 36.`,
    passage: ``
  },
  {
    id: 69,
    question: `If 8% of a number is 24, the number is:`,
    options: [`200`, `250`, `350`, `300`],
    correct: 3,
    explanation: `0.08x = 24 x = 24 ÷ 0.08 = 300.`,
    passage: ``
  },
  {
    id: 70,
    question: `The average of 12, 18, 20, and 30 is:`,
    options: [`18`, `20`, `19`, `22`],
    correct: 1,
    explanation: `Sum = 80 Average = 80 ÷ 4 = 20.`,
    passage: ``
  },
  {
    id: 71,
    question: `If a car travels 240 km in 4 hours, its speed is:`,
    options: [`50 km/h`, `55 km/h`, `60 km/h`, `65 km/h`],
    correct: 2,
    explanation: `240 ÷ 4 = 60 km/h.`,
    passage: ``
  },
  {
    id: 72,
    question: `The value of 7² − 4² is:`,
    options: [`25`, `49`, `35`, `33`],
    correct: 3,
    explanation: `49 − 16 = 33.`,
    passage: ``
  },
  {
    id: 73,
    question: `If the ratio of two numbers is 2 : 3 and their difference is 10, the larger number is:`,
    options: [`20`, `30`, `25`, `35`],
    correct: 1,
    explanation: `Let numbers = 2x and 3x Difference = x = 10 Numbers = 20 and 30.`,
    passage: ``
  },
  {
    id: 74,
    question: `A number multiplied by 6 gives 72. The number is:`,
    options: [`10`, `14`, `12`, `16`],
    correct: 2,
    explanation: `72 ÷ 6 = 12.`,
    passage: ``
  },
  {
    id: 75,
    question: `The cube of 5 is:`,
    options: [`75`, `100`, `150`, `125`],
    correct: 3,
    explanation: `5 × 5 × 5 = 125.`,
    passage: ``
  },
  {
    id: 76,
    question: `If 15% of a number is 45, the number is:`,
    options: [`250`, `300`, `320`, `350`],
    correct: 1,
    explanation: `0.15x = 45 x = 45 ÷ 0.15 = 300.`,
    passage: ``
  },
  {
    id: 77,
    question: `The value of 9 × 11 is:`,
    options: [`88`, `90`, `99`, `101`],
    correct: 2,
    explanation: `Multiplication gives 99.`,
    passage: ``
  },
  {
    id: 78,
    question: `If a number is divided by 8 and the result is 6, the number is:`,
    options: [`40`, `44`, `52`, `48`],
    correct: 3,
    explanation: `6 × 8 = 48.`,
    passage: ``
  },
  {
    id: 79,
    question: `The perimeter of a square with side 12 cm is:`,
    options: [`36`, `48`, `42`, `52`],
    correct: 1,
    explanation: `Perimeter = 4 × side.`,
    passage: ``
  },
  {
    id: 80,
    question: `The value of (18 ÷ 3) + (5 × 4) is:`,
    options: [`20`, `24`, `26`, `28`],
    correct: 2,
    explanation: `18 ÷ 3 = 6 5 × 4 = 20 Total = 26.`,
    passage: ``
  },
  {
    id: 81,
    question: `The square root of 256 is:`,
    options: [`14`, `15`, `18`, `16`],
    correct: 3,
    explanation: `16 × 16 = 256.`,
    passage: ``
  },
  {
    id: 82,
    question: `The next number in the sequence is: 3, 6, 12, 24, ?`,
    options: [`36`, `48`, `42`, `54`],
    correct: 1,
    explanation: `Each number doubles.`,
    passage: ``
  },
  {
    id: 83,
    question: `If 4x + 8 = 24, x equals:`,
    options: [`3`, `5`, `4`, `6`],
    correct: 2,
    explanation: `4x = 16 x = 4.`,
    passage: ``
  },
  {
    id: 84,
    question: `The HCF of 16 and 24 is:`,
    options: [`4`, `6`, `12`, `8`],
    correct: 3,
    explanation: `Common highest divisor is 8.`,
    passage: ``
  },
  {
    id: 85,
    question: `If a book costs Rs.250 and discount is 20%, the discount amount is:`,
    options: [`40`, `50`, `45`, `60`],
    correct: 1,
    explanation: `20% × 250 = 50.`,
    passage: ``
  },
  {
    id: 86,
    question: `The sum of angles in a triangle is:`,
    options: [`90°`, `120°`, `180°`, `360°`],
    correct: 2,
    explanation: `Triangle interior angles always total 180°.`,
    passage: ``
  },
  {
    id: 87,
    question: `If the average of 4 numbers is 25, their total is:`,
    options: [`80`, `90`, `110`, `100`],
    correct: 3,
    explanation: `Average × count.`,
    passage: ``
  },
  {
    id: 88,
    question: `The value of 13² is:`,
    options: [`156`, `169`, `172`, `196`],
    correct: 1,
    explanation: `13 × 13 = 169.`,
    passage: ``
  },
  {
    id: 89,
    question: `If a number increases from 200 to 240, the percentage increase is:`,
    options: [`15%`, `18%`, `20%`, `25%`],
    correct: 2,
    explanation: `Increase = 40 40/200 ×100 = 20%.`,
    passage: ``
  },
  {
    id: 90,
    question: `The next number in sequence: 5, 15, 45, 135, ?`,
    options: [`200`, `315`, `450`, `405`],
    correct: 3,
    explanation: `Each number ×3.`,
    passage: ``
  },
  {
    id: 91,
    question: `The LCM of 8 and 12 is:`,
    options: [`16`, `24`, `20`, `36`],
    correct: 1,
    explanation: `Common multiple = 24.`,
    passage: ``
  },
  {
    id: 92,
    question: `If 30% of a number is 90, the number is:`,
    options: [`250`, `350`, `300`, `400`],
    correct: 2,
    explanation: `0.30x = 90 x = 300.`,
    passage: ``
  },
  {
    id: 93,
    question: `The cube root of 125 is:`,
    options: [`3`, `4`, `6`, `5`],
    correct: 3,
    explanation: `5 × 5 × 5 = 125.`,
    passage: ``
  },
  {
    id: 94,
    question: `The value of (20 + 30) × 2 is:`,
    options: [`80`, `100`, `90`, `120`],
    correct: 1,
    explanation: `50 × 2 = 100.`,
    passage: ``
  },
  {
    id: 95,
    question: `If the ratio of two numbers is 4 : 5 and their sum is 45, the larger number is:`,
    options: [`20`, `30`, `25`, `35`],
    correct: 2,
    explanation: `4x + 5x = 45 9x = 45 x = 5 Numbers = 20 and 25.`,
    passage: ``
  },
  {
    id: 96,
    question: `The square of 14 is:`,
    options: [`176`, `186`, `204`, `196`],
    correct: 3,
    explanation: `14 × 14 = 196.`,
    passage: ``
  },
  {
    id: 97,
    question: `If a number divided by 5 equals 9, the number is:`,
    options: [`40`, `45`, `50`, `55`],
    correct: 1,
    explanation: `9 × 5 = 45.`,
    passage: ``
  },
  {
    id: 98,
    question: `If a rectangle has length 12 and width 8, its area is:`,
    options: [`84`, `90`, `96`, `104`],
    correct: 2,
    explanation: `Area = length × width.`,
    passage: ``
  },
  {
    id: 99,
    question: `The next number in the sequence: 2, 5, 10, 17, 26, ?`,
    options: [`35`, `36`, `40`, `37`],
    correct: 3,
    explanation: `Differences: +3, +5, +7, +9 → next +11 → 26 + 11 = 37.`,
    passage: ``
  },
  {
    id: 100,
    question: `If 9 workers finish work in 6 days, how many days will 3 workers take?`,
    options: [`12`, `18`, `15`, `21`],
    correct: 1,
    explanation: `Workers reduced to one-third → time triples. 6 × 3 = 18 days.`,
    passage: ``
  },
  {
    id: 101,
    question: `What is the value of (3/4) + (5/8)?`,
    options: [`9/8`, `13/8`, `11/8`, `15/8`],
    correct: 2,
    explanation: `3/4 = 6/8 6/8 + 5/8 = 11/8.`,
    passage: ``
  },
  {
    id: 102,
    question: `If the price of an item increases from Rs.400 to Rs.460, the percentage increase is:`,
    options: [`10%`, `12%`, `18%`, `15%`],
    correct: 3,
    explanation: `Increase = 60 (60/400) ×100 = 15%.`,
    passage: ``
  },
  {
    id: 103,
    question: `If 2x + 3y = 12 and x = 3, the value of y is:`,
    options: [`1`, `2`, `3`, `4`],
    correct: 1,
    explanation: `2(3) + 3y = 12 6 + 3y = 12 3y = 6 → y = 2.`,
    passage: ``
  },
  {
    id: 104,
    question: `The probability of getting a head when tossing a fair coin is:`,
    options: [`1/3`, `2/3`, `1/2`, `1`],
    correct: 2,
    explanation: `Two outcomes: head or tail.`,
    passage: ``
  },
  {
    id: 105,
    question: `The area of a triangle with base 10 and height 6 is:`,
    options: [`20`, `25`, `40`, `30`],
    correct: 3,
    explanation: `Area = 1/2 × base × height = 30.`,
    passage: ``
  },
  {
    id: 106,
    question: `If 5 men can complete a work in 12 days, how many days will 10 men take?`,
    options: [`4`, `6`, `5`, `8`],
    correct: 1,
    explanation: `Workers doubled → time halved.`,
    passage: ``
  },
  {
    id: 107,
    question: `The value of 2⁵ is:`,
    options: [`16`, `24`, `32`, `64`],
    correct: 2,
    explanation: `2 × 2 × 2 × 2 × 2 = 32.`,
    passage: ``
  },
  {
    id: 108,
    question: `The median of the numbers 3, 7, 9, 11, 15 is:`,
    options: [`7`, `8`, `10`, `9`],
    correct: 3,
    explanation: `Middle number in ordered list.`,
    passage: ``
  },
  {
    id: 109,
    question: `If the ratio of two numbers is 5:7 and their difference is 14, the smaller number is:`,
    options: [`25`, `35`, `30`, `40`],
    correct: 1,
    explanation: `Difference = 2x = 14 → x = 7 Numbers = 35 and 49.`,
    passage: ``
  },
  {
    id: 110,
    question: `The value of 15 × 12 is:`,
    options: [`160`, `170`, `180`, `200`],
    correct: 2,
    explanation: `Multiplication gives 180.`,
    passage: ``
  },
  {
    id: 111,
    question: `If a number is increased by 50% and becomes 75, the original number is:`,
    options: [`40`, `45`, `55`, `50`],
    correct: 3,
    explanation: `1.5x = 75 → x = 50.`,
    passage: ``
  },
  {
    id: 112,
    question: `The perimeter of a circle with radius 7 (π = 22/7) is:`,
    options: [`22`, `44`, `66`, `88`],
    correct: 1,
    explanation: `Circumference = 2πr = 2 × 22/7 × 7 = 44.`,
    passage: ``
  },
  {
    id: 113,
    question: `If 8 pencils cost Rs.64, the cost of one pencil is:`,
    options: [`6`, `7`, `8`, `9`],
    correct: 2,
    explanation: `64 ÷ 8 = 8.`,
    passage: ``
  },
  {
    id: 114,
    question: `What is the next number? 1, 4, 9, 16, 25, ?`,
    options: [`30`, `32`, `40`, `36`],
    correct: 3,
    explanation: `Squares of integers.`,
    passage: ``
  },
  {
    id: 115,
    question: `The simple interest on Rs.2000 at 10% for 1 year is:`,
    options: [`100`, `200`, `150`, `250`],
    correct: 1,
    explanation: `SI = PRT/100.`,
    passage: ``
  },
  {
    id: 116,
    question: `If the sum of two numbers is 50 and one is 20, the other is:`,
    options: [`25`, `35`, `30`, `40`],
    correct: 2,
    explanation: `50 − 20 = 30.`,
    passage: ``
  },
  {
    id: 117,
    question: `The value of (9 × 8) + (6 × 5) is:`,
    options: [`82`, `92`, `112`, `102`],
    correct: 3,
    explanation: `72 + 30 = 102.`,
    passage: ``
  },
  {
    id: 118,
    question: `If 12% of a number is 24, the number is:`,
    options: [`180`, `200`, `220`, `240`],
    correct: 1,
    explanation: `0.12x = 24 → x = 200.`,
    passage: ``
  },
  {
    id: 119,
    question: `The square root of 196 is:`,
    options: [`12`, `13`, `14`, `15`],
    correct: 2,
    explanation: `14 × 14 = 196.`,
    passage: ``
  },
  {
    id: 120,
    question: `The average of 6, 8, 10, 12, 14 is:`,
    options: [`8`, `9`, `11`, `10`],
    correct: 3,
    explanation: `Sum = 50 Average = 10.`,
    passage: ``
  },
  {
    id: 121,
    question: `If the ratio of two numbers is 4:9 and their sum is 65, the larger number is:`,
    options: [`40`, `45`, `50`, `55`],
    correct: 1,
    explanation: `4x + 9x = 65 → x = 5.`,
    passage: ``
  },
  {
    id: 122,
    question: `The next number in the sequence is: 3, 6, 12, 24, ?`,
    options: [`36`, `42`, `48`, `54`],
    correct: 2,
    explanation: `Each number doubles.`,
    passage: ``
  },
  {
    id: 123,
    question: `If a man walks 4 km in 40 minutes, his speed per hour is:`,
    options: [`5 km/h`, `8 km/h`, `7 km/h`, `6 km/h`],
    correct: 3,
    explanation: `4 km in 40 min → 6 km in 60 min.`,
    passage: ``
  },
  {
    id: 124,
    question: `The value of 7³ is:`,
    options: [`243`, `343`, `256`, `512`],
    correct: 1,
    explanation: `7 × 7 × 7 = 343.`,
    passage: ``
  },
  {
    id: 125,
    question: `The HCF of 18 and 30 is:`,
    options: [`3`, `9`, `6`, `12`],
    correct: 2,
    explanation: `Highest common factor = 6.`,
    passage: ``
  },
  {
    id: 126,
    question: `If a number is divided by 4 and the result is 9, the number is:`,
    options: [`32`, `44`, `40`, `36`],
    correct: 3,
    explanation: `9 × 4 = 36.`,
    passage: ``
  },
  {
    id: 127,
    question: `The next number is: 2, 5, 10, 17, 26, ?`,
    options: [`33`, `37`, `35`, `39`],
    correct: 1,
    explanation: `+3, +5, +7, +9, +11.`,
    passage: ``
  },
  {
    id: 128,
    question: `The value of (100 − 25) × 2 is:`,
    options: [`100`, `120`, `150`, `200`],
    correct: 2,
    explanation: `75 × 2 = 150.`,
    passage: ``
  },
  {
    id: 129,
    question: `If a shopkeeper gives 10% discount on Rs.500, the discount amount is:`,
    options: [`40`, `45`, `55`, `50`],
    correct: 3,
    explanation: `10% × 500 = 50.`,
    passage: ``
  },
  {
    id: 130,
    question: `The cube root of 216 is:`,
    options: [`4`, `6`, `5`, `7`],
    correct: 1,
    explanation: `6 × 6 × 6 = 216.`,
    passage: ``
  },
  {
    id: 131,
    question: `If a number increases from 80 to 100, the percentage increase is:`,
    options: [`20%`, `22%`, `25%`, `30%`],
    correct: 2,
    explanation: `Increase = 20 20/80 ×100 = 25%.`,
    passage: ``
  },
  {
    id: 132,
    question: `The sum of angles in a quadrilateral is:`,
    options: [`180°`, `270°`, `540°`, `360°`],
    correct: 3,
    explanation: `Quadrilateral interior angles sum = 360°.`,
    passage: ``
  },
  {
    id: 133,
    question: `If 3x = 27, x equals:`,
    options: [`6`, `9`, `8`, `7`],
    correct: 1,
    explanation: `x = 27 ÷ 3.`,
    passage: ``
  },
  {
    id: 134,
    question: `The value of 16² is:`,
    options: [`196`, `225`, `256`, `289`],
    correct: 2,
    explanation: `16 × 16 = 256.`,
    passage: ``
  },
  {
    id: 135,
    question: `The next number in sequence: 5, 15, 45, 135, ?`,
    options: [`270`, `315`, `450`, `405`],
    correct: 3,
    explanation: `Each number ×3.`,
    passage: ``
  },
  {
    id: 136,
    question: `If 4 men finish work in 6 days, 8 men will take:`,
    options: [`2`, `3`, `4`, `5`],
    correct: 1,
    explanation: `Workers doubled → time halved.`,
    passage: ``
  },
  {
    id: 137,
    question: `The value of (12 × 5) − (8 × 4) is:`,
    options: [`20`, `24`, `28`, `32`],
    correct: 2,
    explanation: `60 − 32 = 28.`,
    passage: ``
  },
  {
    id: 138,
    question: `If 25% of a number is 50, the number is:`,
    options: [`100`, `150`, `250`, `200`],
    correct: 3,
    explanation: `Number = 50 × 4.`,
    passage: ``
  },
  {
    id: 139,
    question: `The average of 20, 25, 30, 35 is:`,
    options: [`25`, `27.5`, `28`, `30`],
    correct: 1,
    explanation: `Sum = 110 Average = 27.5.`,
    passage: ``
  },
  {
    id: 140,
    question: `The perimeter of a rectangle with length 14 and width 6 is:`,
    options: [`30`, `35`, `40`, `45`],
    correct: 2,
    explanation: `2(L + W).`,
    passage: ``
  },
  {
    id: 141,
    question: `The value of 11² is:`,
    options: [`111`, `144`, `132`, `121`],
    correct: 3,
    explanation: `11 × 11 = 121.`,
    passage: ``
  },
  {
    id: 142,
    question: `The next number is: 1, 3, 6, 10, 15, ?`,
    options: [`18`, `21`, `20`, `24`],
    correct: 1,
    explanation: `Triangular numbers.`,
    passage: ``
  },
  {
    id: 143,
    question: `If a car travels 150 km in 3 hours, its speed is:`,
    options: [`40 km/h`, `45 km/h`, `50 km/h`, `55 km/h`],
    correct: 2,
    explanation: `150 ÷ 3 = 50.`,
    passage: ``
  },
  {
    id: 144,
    question: `The value of (18 + 12) ÷ 6 is:`,
    options: [`4`, `7`, `6`, `5`],
    correct: 3,
    explanation: `30 ÷ 6 = 5.`,
    passage: ``
  },
  {
    id: 145,
    question: `The LCM of 9 and 12 is:`,
    options: [`24`, `36`, `30`, `48`],
    correct: 1,
    explanation: `Common multiple = 36.`,
    passage: ``
  },
  {
    id: 146,
    question: `The next number is: 7, 14, 28, 56, ?`,
    options: [`84`, `96`, `112`, `120`],
    correct: 2,
    explanation: `Each number ×2.`,
    passage: ``
  },
  {
    id: 147,
    question: `The value of 8³ is:`,
    options: [`256`, `384`, `640`, `512`],
    correct: 3,
    explanation: `8 × 8 × 8 = 512.`,
    passage: ``
  },
  {
    id: 148,
    question: `If a number decreases from 150 to 120, the percentage decrease is:`,
    options: [`15%`, `20%`, `18%`, `25%`],
    correct: 1,
    explanation: `Decrease = 30 30/150 ×100 = 20%.`,
    passage: ``
  },
  {
    id: 149,
    question: `The area of a square with side 9 cm is:`,
    options: [`72`, `90`, `81`, `99`],
    correct: 2,
    explanation: `Area = side².`,
    passage: ``
  },
  {
    id: 150,
    question: `If 6 workers complete work in 8 days, how many days will 3 workers take?`,
    options: [`12`, `14`, `18`, `16`],
    correct: 3,
    explanation: `Workers halved → time doubled.`,
    passage: ``
  },
  {
    id: 151,
    question: `Below are Quantitative Reasoning MCQs (151–170) with slightly longer explanations and varied patterns (ratios, probability, algebra, geometry, work & time, sequences, percentages). They remain plain text so they copy cleanly into Word/Docs.`,
    options: [`200`, `250`, `225`, `300`],
    correct: 1,
    explanation: `Explanation: Let the number be x. 60% of x = 150. 0.60 × x = 150. To isolate x, divide both sides by 0.60. x = 150 ÷ 0.60 = 250. Therefore the original number must be 250.`,
    passage: ``
  },
  {
    id: 152,
    question: `The sum of three consecutive integers is 72. What is the middle integer?`,
    options: [`23`, `25`, `24`, `26`],
    correct: 2,
    explanation: `Let the integers be (x−1), x, and (x+1). Their sum is: (x−1) + x + (x+1) = 3x. Given 3x = 72. x = 24. Since x is the middle number, the three numbers are 23, 24, 25.`,
    passage: ``
  },
  {
    id: 153,
    question: `If a train travels 180 km in 2.5 hours, what is its average speed?`,
    options: [`60 km/h`, `65 km/h`, `70 km/h`, `72 km/h`],
    correct: 3,
    explanation: `Speed = Distance ÷ Time. Distance = 180 km. Time = 2.5 hours. 180 ÷ 2.5 = 72. Thus the train’s average speed is 72 km/h.`,
    passage: ``
  },
  {
    id: 154,
    question: `The value of (5² + 7²) is:`,
    options: [`64`, `74`, `70`, `81`],
    correct: 1,
    explanation: `First calculate the squares: 5² = 25 7² = 49 Then add them together: 25 + 49 = 74. Therefore the result equals 74.`,
    passage: ``
  },
  {
    id: 155,
    question: `If the ratio of two numbers is 4 : 9 and their sum is 65, the smaller number is:`,
    options: [`30`, `25`, `20`, `35`],
    correct: 2,
    explanation: `Let numbers be 4x and 9x. 4x + 9x = 13x. Given total = 65. 13x = 65 → x = 5. Numbers = 20 and 45. So the smaller number is 20.`,
    passage: ``
  },
  {
    id: 156,
    question: `The probability of getting an even number when a fair die is rolled is:`,
    options: [`1/6`, `1/3`, `2/3`, `1/2`],
    correct: 3,
    explanation: `A standard die has 6 outcomes: 1, 2, 3, 4, 5, 6. Even numbers = 2, 4, 6 → 3 outcomes. Probability = favorable outcomes ÷ total outcomes. 3 ÷ 6 = 1/2.`,
    passage: ``
  },
  {
    id: 157,
    question: `The value of 12² − 8² is:`,
    options: [`64`, `80`, `96`, `112`],
    correct: 1,
    explanation: `First calculate squares: 12² = 144 8² = 64 Subtract: 144 − 64 = 80. Hence the result is 80.`,
    passage: ``
  },
  {
    id: 158,
    question: `If 8 workers complete a job in 15 days, how many days will 12 workers take?`,
    options: [`8`, `12`, `10`, `15`],
    correct: 2,
    explanation: `Workers and time are inversely proportional. More workers → less time required. Work = Workers × Days. 8 × 15 = 120 worker-days. If 12 workers perform the same work: Days = 120 ÷ 12 = 10 days.`,
    passage: ``
  },
  {
    id: 159,
    question: `The next number in the sequence is: 2, 6, 12, 20, 30, ?`,
    options: [`36`, `40`, `48`, `42`],
    correct: 3,
    explanation: `Look at the differences between numbers: 6−2 = 4 12−6 = 6 20−12 = 8 30−20 = 10 Differences increase by +2 each time. Next difference = 12. 30 + 12 = 42.`,
    passage: ``
  },
  {
    id: 160,
    question: `If the perimeter of a rectangle is 50 and its length is 15, the width is:`,
    options: [`12`, `10`, `15`, `20`],
    correct: 1,
    explanation: `Perimeter formula: P = 2(L + W). 50 = 2(15 + W). Divide by 2 → 25 = 15 + W. W = 10.`,
    passage: ``
  },
  {
    id: 161,
    question: `The cube root of 343 is:`,
    options: [`5`, `6`, `7`, `8`],
    correct: 2,
    explanation: `343 = 7 × 7 × 7. The cube root is therefore 7.`,
    passage: ``
  },
  {
    id: 162,
    question: `If the price of an item increases from 250 to 300, the percentage increase is:`,
    options: [`15%`, `18%`, `25%`, `20%`],
    correct: 3,
    explanation: `Increase = 300 − 250 = 50. Percentage increase = (50 ÷ 250) × 100. = 20%.`,
    passage: ``
  },
  {
    id: 163,
    question: `The average of 14, 18, 20, and 28 is:`,
    options: [`18`, `20`, `19`, `22`],
    correct: 1,
    explanation: `Add numbers: 14 + 18 + 20 + 28 = 80. Average = 80 ÷ 4 = 20.`,
    passage: ``
  },
  {
    id: 164,
    question: `The value of (18 × 5) − (9 × 6) is:`,
    options: [`24`, `42`, `36`, `48`],
    correct: 2,
    explanation: `18 × 5 = 90. 9 × 6 = 54. 90 − 54 = 36.`,
    passage: ``
  },
  {
    id: 165,
    question: `If a number is decreased by 30% and becomes 70, the original number is:`,
    options: [`90`, `95`, `110`, `100`],
    correct: 3,
    explanation: `After a 30% decrease, 70% of the number remains. 0.70 × x = 70. x = 70 ÷ 0.70 = 100.`,
    passage: ``
  },
  {
    id: 166,
    question: `The next number in the sequence is: 1, 4, 10, 22, 46, ?`,
    options: [`80`, `94`, `88`, `98`],
    correct: 1,
    explanation: `Differences: 3, 6, 12, 24. Each difference doubles. Next difference = 48. 46 + 48 = 94.`,
    passage: ``
  },
  {
    id: 167,
    question: `If the area of a square is 144 cm², the side length is:`,
    options: [`10`, `11`, `12`, `14`],
    correct: 2,
    explanation: `Area of square = side². side² = 144. side = √144 = 12.`,
    passage: ``
  },
  {
    id: 168,
    question: `If 3/5 of a number equals 27, the number is:`,
    options: [`35`, `40`, `50`, `45`],
    correct: 3,
    explanation: `(3/5)x = 27. Multiply both sides by 5/3. x = 27 × (5/3) = 45.`,
    passage: ``
  },
  {
    id: 169,
    question: `The sum of the interior angles of a pentagon is:`,
    options: [`360°`, `540°`, `450°`, `720°`],
    correct: 1,
    explanation: `Formula = (n − 2) × 180. For pentagon n = 5. (5 − 2) × 180 = 540°.`,
    passage: ``
  },
  {
    id: 170,
    question: `If a car travels 150 km at 50 km/h, how long will the journey take?`,
    options: [`2 hours`, `2.5 hours`, `3 hours`, `4 hours`],
    correct: 2,
    explanation: `Time = Distance ÷ Speed. 150 ÷ 50 = 3 hours.`,
    passage: ``
  },
  {
    id: 171,
    question: `The square root of 506.25 is:`,
    options: [`21.5`, `22.0`, `23.0`, `22.5`],
    correct: 3,
    explanation: `506.25 = 50625 / 100. √50625 = 225. 225 / 10 = 22.5.`,
    passage: ``
  },
  {
    id: 172,
    question: `If 12% of a number is 48, the number is:`,
    options: [`360`, `400`, `380`, `420`],
    correct: 1,
    explanation: `0.12 × x = 48. x = 48 ÷ 0.12. x = 400.`,
    passage: ``
  },
  {
    id: 173,
    question: `Factorize the expression x² − 5x + 6:`,
    options: [`(x−1)(x−6)`, `(x+2)(x+3)`, `(x−2)(x−3)`, `(x+1)(x+6)`],
    correct: 2,
    explanation: `We need two numbers whose product = 6 and sum = −5. Those numbers are −2 and −3. So the factorization is (x−2)(x−3).`,
    passage: ``
  },
  {
    id: 174,
    question: `If x + 1/x = 3, find x² + 1/x²:`,
    options: [`5`, `11`, `9`, `7`],
    correct: 3,
    explanation: `(x + 1/x)² = x² + 1/x² + 2. 3² = x² + 1/x² + 2. 9 = x² + 1/x² + 2. x² + 1/x² = 7.`,
    passage: ``
  },
  {
    id: 175,
    question: `Which of the following is a prime number?`,
    options: [`39`, `41`, `45`, `49`],
    correct: 1,
    explanation: `A prime number has only two factors: 1 and itself. 41 cannot be divided exactly by any number other than 1 and 41.`,
    passage: ``
  },
  {
    id: 176,
    question: `The average of the first ten natural numbers is:`,
    options: [`5`, `6`, `5.5`, `6.5`],
    correct: 2,
    explanation: `Sum of first n numbers = n(n+1)/2. 10×11/2 = 55. Average = 55 ÷ 10 = 5.5.`,
    passage: ``
  },
  {
    id: 177,
    question: `If a man covers 240 km in 4 hours, what is his speed?`,
    options: [`50 km/h`, `55 km/h`, `65 km/h`, `60 km/h`],
    correct: 3,
    explanation: `Speed = Distance ÷ Time. 240 ÷ 4 = 60 km/h.`,
    passage: ``
  },
  {
    id: 178,
    question: `All the factors of 36 are:`,
    options: [`2,3,4,6,12,18`, `1,2,3,4,6,9,12,18,36`, `1,3,4,6,9,12`, `1,2,4,6,8,12,36`],
    correct: 1,
    explanation: `Factors of 36 are numbers that divide it exactly. They are 1, 2, 3, 4, 6, 9, 12, 18, 36.`,
    passage: ``
  },
  {
    id: 179,
    question: `If 75% of a number is 150, what is the number?`,
    options: [`180`, `220`, `200`, `250`],
    correct: 2,
    explanation: `0.75 × x = 150. x = 150 ÷ 0.75. x = 200.`,
    passage: ``
  },
  {
    id: 180,
    question: `A polynomial of degree three is called:`,
    options: [`Linear polynomial`, `Quadratic polynomial`, `Constant polynomial`, `Cubic polynomial`],
    correct: 3,
    explanation: `Degree refers to the highest power of the variable. If the highest power is 3, it is called a cubic polynomial.`,
    passage: ``
  },
  {
    id: 181,
    question: `The square root of 729 is:`,
    options: [`24`, `27`, `26`, `25`],
    correct: 1,
    explanation: `27 × 27 = 729.`,
    passage: ``
  },
  {
    id: 182,
    question: `If the perimeter of a square is 64 cm, the side length is:`,
    options: [`12`, `14`, `16`, `18`],
    correct: 2,
    explanation: `Perimeter = 4 × side. Side = 64 ÷ 4 = 16 cm.`,
    passage: ``
  },
  {
    id: 183,
    question: `The value of 8³ is:`,
    options: [`256`, `384`, `640`, `512`],
    correct: 3,
    explanation: `8 × 8 × 8 = 512.`,
    passage: ``
  },
  {
    id: 184,
    question: `If 5x − 10 = 20, then x =`,
    options: [`4`, `6`, `5`, `7`],
    correct: 1,
    explanation: `5x = 30. x = 6.`,
    passage: ``
  },
  {
    id: 185,
    question: `The next number in the sequence is: 4, 9, 16, 25, ?`,
    options: [`30`, `32`, `36`, `40`],
    correct: 2,
    explanation: `Squares of integers: 2², 3², 4², 5² → next 6² = 36.`,
    passage: ``
  },
  {
    id: 186,
    question: `The value of (15 × 6) − (12 × 5) is:`,
    options: [`20`, `25`, `35`, `30`],
    correct: 3,
    explanation: `15×6 = 90. 12×5 = 60. 90 − 60 = 30.`,
    passage: ``
  },
  {
    id: 187,
    question: `If 9 pencils cost Rs.72, the cost of one pencil is:`,
    options: [`6`, `8`, `7`, `9`],
    correct: 1,
    explanation: `72 ÷ 9 = 8.`,
    passage: ``
  },
  {
    id: 188,
    question: `The value of 11² is:`,
    options: [`111`, `131`, `121`, `141`],
    correct: 2,
    explanation: `11 × 11 = 121.`,
    passage: ``
  },
  {
    id: 189,
    question: `The sum of interior angles of a quadrilateral is:`,
    options: [`180°`, `270°`, `540°`, `360°`],
    correct: 3,
    explanation: `Quadrilateral interior angles always add up to 360°.`,
    passage: ``
  },
  {
    id: 190,
    question: `If a train travels 150 km in 3 hours, the speed is:`,
    options: [`40 km/h`, `50 km/h`, `45 km/h`, `55 km/h`],
    correct: 1,
    explanation: `150 ÷ 3 = 50 km/h.`,
    passage: ``
  },
  {
    id: 191,
    question: `Below are recreated MCQs 191–200 with longer question stems and higher difficulty, while keeping the NTS-style quantitative reasoning format and copy-friendly plain text.`,
    options: [`6 cm`, `10 cm`, `8 cm`, `12 cm`],
    correct: 2,
    explanation: `Explanation: Surface area of a cube = 6 × side². 6 × side² = 384. side² = 384 ÷ 6 = 64. side = √64 = 8 cm.`,
    passage: ``
  },
  {
    id: 192,
    question: `The average of five consecutive even integers is 24. What is the largest of these integers?`,
    options: [`26`, `32`, `30`, `28`],
    correct: 3,
    explanation: `Explanation: Let the integers be: x−4, x−2, x, x+2, x+4. The average of consecutive numbers equals the middle number. So x = 24. Numbers: 20, 22, 24, 26, 28. Largest = 28.`,
    passage: ``
  },
  {
    id: 193,
    question: `A trader purchases an article for Rs.1200. He sells it after giving a 10% discount on the marked price of Rs.1500. What is his profit?`,
    options: [`Rs.100`, `Rs.150`, `Rs.200`, `Rs.250`],
    correct: 1,
    explanation: `Explanation: Marked price = 1500. Discount = 10% of 1500 = 150. Selling price = 1500 − 150 = 1350. Cost price = 1200. Profit = 1350 − 1200 = 150.`,
    passage: ``
  },
  {
    id: 194,
    question: `If a car travels the first 60 km of a journey at 30 km/h and the next 60 km at 60 km/h, what is the average speed for the entire journey?`,
    options: [`36 km/h`, `45 km/h`, `40 km/h`, `48 km/h`],
    correct: 2,
    explanation: `Explanation: Time for first 60 km = 60 ÷ 30 = 2 hours. Time for next 60 km = 60 ÷ 60 = 1 hour. Total distance = 120 km. Total time = 3 hours. Average speed = 120 ÷ 3 = 40 km/h.`,
    passage: ``
  },
  {
    id: 195,
    question: `A number when increased by 20% becomes 360. What will be the value of the number if it is decreased by 20% instead?`,
    options: [`300`, `260`, `280`, `240`],
    correct: 3,
    explanation: `Explanation: Let the original number be x. 1.20x = 360. x = 360 ÷ 1.20 = 300. 20% decrease = 0.80 × 300 = 240.`,
    passage: ``
  },
  {
    id: 196,
    question: `The difference between the squares of two consecutive integers is 25. What is the larger integer?`,
    options: [`12`, `13`, `14`, `15`],
    correct: 1,
    explanation: `Explanation: Let numbers be n and n+1. (n+1)² − n² = 25. n² + 2n + 1 − n² = 25. 2n + 1 = 25. 2n = 24. n = 12. Larger integer = 13.`,
    passage: ``
  },
  {
    id: 197,
    question: `In a class test, the average marks of 20 students were 65. Later it was discovered that one student's marks were wrongly recorded as 45 instead of 75. What is the corrected average?`,
    options: [`66`, `67`, `66.5`, `67.5`],
    correct: 2,
    explanation: `Explanation: Original total = 20 × 65 = 1300. Error difference = 75 − 45 = 30. Correct total = 1300 + 30 = 1330. Correct average = 1330 ÷ 20 = 66.5.`,
    passage: ``
  },
  {
    id: 198,
    question: `If the ratio of the ages of A and B is 4 : 5 and after 6 years the ratio becomes 5 : 6, what is the present age of A?`,
    options: [`16`, `20`, `28`, `24`],
    correct: 3,
    explanation: `Explanation: Let present ages = 4x and 5x. After 6 years: (4x + 6)/(5x + 6) = 5/6. Cross multiply: 6(4x + 6) = 5(5x + 6). 24x + 36 = 25x + 30. x = 6. Age of A = 4x = 24.`,
    passage: ``
  },
  {
    id: 199,
    question: `A tank can be filled by pipe A in 12 hours and emptied by pipe B in 18 hours. If both pipes are opened together, how long will it take to fill the tank?`,
    options: [`28 hours`, `36 hours`, `30 hours`, `40 hours`],
    correct: 1,
    explanation: `Explanation: Filling rate = 1/12 tank per hour. Emptying rate = 1/18 tank per hour. Net rate = 1/12 − 1/18. LCM = 36. 3/36 − 2/36 = 1/36. So tank fills in 36 hours.`,
    passage: ``
  },
  {
    id: 200,
    question: `The sum of three numbers is 120. The second number is twice the first, and the third is three times the first. What is the smallest number?`,
    options: [`15`, `24`, `20`, `30`],
    correct: 2,
    explanation: `Explanation: Let the first number = x. Second = 2x. Third = 3x. x + 2x + 3x = 120. 6x = 120. x = 20. Smallest number = 20.`,
    passage: ``
  }
];window['NTS_QUANT'] = NTS_QUANT;
