// NTS VAQ — Analytical Reasoning
// 100 MCQs
const NTS_ANALYTICAL = [
  {
    id: 1,
    question: `If the yellow bulb is on the first spot, which bulb MUST be on the second spot?`,
    options: [`Green`, `Blue`, `White`, `Red`],
    correct: 1,
    explanation: `Rule 3 states that the blue bulb must be immediately to the right of the yellow bulb. If Y is at position 1, B must be at position 2.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 2,
    question: `If the yellow bulb is on the seventh spot, which bulb MUST be on the sixth spot?`,
    options: [`Blue`, `Red`, `Green`, `White`],
    correct: 0,
    explanation: `Blue must always be immediately to the right of yellow. Since Y is on the right end (7), the only adjacent position for B is spot 6.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 3,
    question: `Which of the following bulbs cannot be placed at the first spot?`,
    options: [`Yellow`, `Green`, `Blue`, `White`],
    correct: 2,
    explanation: `Blue must always be immediately to the right of the yellow bulb, so it cannot occupy the first spot.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 4,
    question: `If one green bulb is placed on the second spot, which of the following must be true?`,
    options: [`The yellow bulb is on spot 7`, `One red bulb is on spot 1`, `One red bulb is on spot 4`, `The white bulb is on spot 3`],
    correct: 2,
    explanation: `Because exactly one green must lie between the two reds, placing G on spot 2 forces the reds to occupy positions that maintain this condition, making position 4 necessary for a red.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 5,
    question: `Which of the following could be a possible position for the white bulb?`,
    options: [`Spot 3`, `Spot 4`, `Spot 5`, `Spot 6`],
    correct: 1,
    explanation: `The white bulb cannot be next to any red bulb, limiting its placement to positions where both neighboring bulbs are not red.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 6,
    question: `If the yellow bulb is placed on spot 7 and one red bulb is on spot 3, where could the other red bulb be placed?`,
    options: [`Spot 1`, `Spot 4`, `Spot 5`, `Spot 7`],
    correct: 2,
    explanation: `Exactly one green must lie between the two reds. If R is on spot 3 and G occupies spot 4, the other R must be on spot 5.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 7,
    question: `Which of the following positions must contain a green bulb?`,
    options: [`Spot 1`, `Spot 2`, `Spot 4`, `Spot 7`],
    correct: 1,
    explanation: `At least one green bulb must occupy an even-numbered position according to rule 5.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 8,
    question: `If the blue bulb is on spot 2, where must the yellow bulb be?`,
    options: [`Spot 1`, `Spot 3`, `Spot 6`, `Spot 7`],
    correct: 0,
    explanation: `Blue must be immediately to the right of yellow, so Y must be on spot 1.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 9,
    question: `If the white bulb is on spot 4, which bulb cannot be on spot 3?`,
    options: [`Green`, `Red`, `Blue`, `Yellow`],
    correct: 1,
    explanation: `The white bulb cannot be adjacent to any red bulb.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 10,
    question: `If both green bulbs are placed on even-numbered spots, which of the following must be true?`,
    options: [`The yellow bulb is on spot 1`, `The blue bulb is on spot 2`, `One red bulb is on spot 5`, `The white bulb is on spot 3`],
    correct: 1,
    explanation: `If the yellow bulb occupies an end and blue must follow it immediately, the only valid configuration places blue on spot 2.`,
    passage: `Analytical Reasoning Passage for Q 1 to Q 10
A decorative hallway in an old palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven colored bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must be arranged according to the following rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
Exactly one green bulb must appear between the two red bulbs.
The blue bulb must be immediately to the right of the yellow bulb.
The white bulb cannot be placed next to any red bulb.
One green bulb must be on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 11,
    question: `If the yellow bulb is on spot 1, which bulb must be on spot 2?`,
    options: [`Green`, `Blue`, `White`, `Red`],
    correct: 1,
    explanation: `Blue must be immediately to the right of yellow.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 12,
    question: `If the yellow bulb is on spot 7, the blue bulb must be on:`,
    options: [`Spot 6`, `Spot 5`, `Spot 4`, `Spot 3`],
    correct: 0,
    explanation: `Blue must always be immediately to the right of yellow.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 13,
    question: `Which bulb cannot be placed on spot 1?`,
    options: [`Yellow`, `Green`, `Blue`, `White`],
    correct: 2,
    explanation: `Blue must be to the right of yellow, so it cannot occupy the first position.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 14,
    question: `If the white bulb is on spot 4, which bulb cannot be on spot 3?`,
    options: [`Green`, `Red`, `Blue`, `Yellow`],
    correct: 1,
    explanation: `White cannot be adjacent to a red bulb.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 15,
    question: `If the yellow bulb is on spot 1 and one red bulb is on spot 4, the other red bulb could be on:`,
    options: [`Spot 2`, `Spot 6`, `Spot 5`, `Spot 7`],
    correct: 2,
    explanation: `One green must lie between the two reds, so the spacing must allow exactly one green in between.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 16,
    question: `Which of the following positions must contain a green bulb?`,
    options: [`Spot 1`, `Spot 2`, `Spot 7`, `Spot 5`],
    correct: 1,
    explanation: `At least one green must occupy an even-numbered position.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 17,
    question: `If both green bulbs are placed on even-numbered spots, which of the following must be true?`,
    options: [`Spot 2 contains a green bulb`, `Spot 3 contains a red bulb`, `Spot 5 contains the white bulb`, `Spot 7 contains the blue bulb`],
    correct: 0,
    explanation: `Even-numbered spots are 2, 4, and 6; at least one green must occupy one of them.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 18,
    question: `If the white bulb is on spot 3, which bulb cannot be on spot 2?`,
    options: [`Red`, `Green`, `Blue`, `Yellow`],
    correct: 0,
    explanation: `White cannot be next to any red bulb.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 19,
    question: `If yellow is on spot 1 and blue is on spot 2, which bulb cannot be on spot 3?`,
    options: [`Green`, `Red`, `White`, `Blue`],
    correct: 3,
    explanation: `Only one blue bulb exists and it must remain beside yellow.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 20,
    question: `Which of the following bulbs must occupy an end position?`,
    options: [`Blue`, `Yellow`, `White`, `Green`],
    correct: 1,
    explanation: `The rule states yellow must be on one of the two ends.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 21,
    question: `If one green bulb is on spot 2 and the other green bulb is on spot 6, the two red bulbs must be on:`,
    options: [`Spots 3 and 5`, `Spots 1 and 4`, `Spots 4 and 6`, `Spots 3 and 7`],
    correct: 0,
    explanation: `Exactly one green must lie between the two reds.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 22,
    question: `Which position could contain the white bulb?`,
    options: [`Spot 2`, `Spot 4`, `Spot 5`, `Spot 6`],
    correct: 1,
    explanation: `White must avoid adjacency with red bulbs.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 23,
    question: `If the white bulb is on spot 5, which bulb cannot be on spot 4?`,
    options: [`Green`, `Blue`, `Red`, `Yellow`],
    correct: 2,
    explanation: `White cannot be next to a red bulb.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 24,
    question: `If the yellow bulb is on spot 1, which of the following could be on spot 7?`,
    options: [`Blue`, `Yellow`, `Green`, `Blue`],
    correct: 2,
    explanation: `Yellow occupies one end, blue must be next to it; other bulbs may fill remaining spots.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 25,
    question: `If the two red bulbs occupy spots 3 and 5, which bulb must be on spot 4?`,
    options: [`Green`, `White`, `Blue`, `Yellow`],
    correct: 0,
    explanation: `Exactly one green must lie between the two red bulbs.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 26,
    question: `Which of the following bulbs cannot occupy spot 7?`,
    options: [`Yellow`, `Green`, `Blue`, `White`],
    correct: 2,
    explanation: `Blue must always be immediately to the right of yellow.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 27,
    question: `If yellow is on spot 1 and white is on spot 4, which bulb cannot be on spot 3?`,
    options: [`Green`, `Blue`, `Red`, `White`],
    correct: 2,
    explanation: `White cannot be adjacent to a red bulb.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 28,
    question: `If one red bulb is on spot 2, the other red bulb could be on:`,
    options: [`Spot 4`, `Spot 5`, `Spot 6`, `Spot 7`],
    correct: 1,
    explanation: `Exactly one green must appear between the two red bulbs.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 29,
    question: `If the yellow bulb is on spot 7, the blue bulb must be on:`,
    options: [`Spot 6`, `Spot 5`, `Spot 4`, `Spot 3`],
    correct: 0,
    explanation: `Blue must be immediately to the right of yellow.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 30,
    question: `Which of the following bulbs cannot be adjacent to the white bulb?`,
    options: [`Green`, `Blue`, `Yellow`, `Red`],
    correct: 3,
    explanation: `The white bulb cannot be placed next to any red bulb according to the rule.`,
    passage: `Analytical Reasoning Passage
A decorative corridor in a royal palace has seven hanging spots in a straight line, numbered 1 to 7 from left to right. Seven bulbs are to be hung:
Two green bulbs (G1, G2)
Two red bulbs (R1, R2)
One yellow bulb (Y)
One blue bulb (B)
One white bulb (W)
The bulbs must follow these rules:
The yellow bulb must be placed on one of the two ends (spot 1 or spot 7).
The blue bulb must be immediately to the right of the yellow bulb.
Exactly one green bulb must appear between the two red bulbs.
The white bulb cannot be placed next to any red bulb.
At least one green bulb must be placed on an even-numbered spot.
Use these rules to answer the following questions.`
  },
  {
    id: 31,
    question: `Which flower must appear in column 4 in every row?`,
    options: [`Red`, `Yellow`, `White`, `Pink`],
    correct: 2,
    explanation: `Rule 5 states that white flowers must be in column 4.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 32,
    question: `Which flower cannot appear in row B?`,
    options: [`Pink`, `White`, `Yellow`, `Red`],
    correct: 3,
    explanation: `Rule 2 states red flowers cannot be placed in row B.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 33,
    question: `Which flower must appear in row A?`,
    options: [`Pink`, `Yellow`, `Red`, `White`],
    correct: 1,
    explanation: `Rule 3 states yellow flowers must appear in row A.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 34,
    question: `Which column cannot contain pink flowers?`,
    options: [`Column 1`, `Column 2`, `Column 3`, `Column 4`],
    correct: 0,
    explanation: `Rule 4 states pink flowers cannot be in column 1.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 35,
    question: `If row A column 4 contains white flowers, which flower cannot be in row A column 1?`,
    options: [`Pink`, `Yellow`, `Red`, `White`],
    correct: 0,
    explanation: `Pink cannot be placed in column 1.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 36,
    question: `If row B column 4 is white, which flower cannot appear anywhere in row B?`,
    options: [`Yellow`, `Pink`, `Red`, `White`],
    correct: 2,
    explanation: `Red flowers cannot appear in row B.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 37,
    question: `Which flower could appear in row C column 1?`,
    options: [`Pink`, `White`, `Yellow`, `Red`],
    correct: 3,
    explanation: `Pink cannot be in column 1, and white must be in column 4, so red could appear here.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 38,
    question: `Which flower must appear exactly once in each row?`,
    options: [`Red`, `Pink`, `Yellow`, `All of these`],
    correct: 3,
    explanation: `Rule 1 states each row contains one of each flower type.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 39,
    question: `If row A column 2 contains red flowers, which flower must appear in row A column 3?`,
    options: [`Pink`, `Yellow`, `White`, `Red`],
    correct: 0,
    explanation: `Pink must occupy one of the remaining positions excluding column 1.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 40,
    question: `Which of the following placements violates the rules?`,
    options: [`Pink in column 2`, `White in column 4`, `Yellow in row A`, `Red in row B`],
    correct: 3,
    explanation: `Rule 2 forbids red flowers in row B.`,
    passage: `Passage for Questions 31–40
A botanical garden is arranged in three rows: A, B, and C. Each row contains four flower beds, and each bed contains one type of flower. The flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following rules apply:
Each row contains exactly one of each flower type.
Red flowers cannot be placed in row B.
Yellow flowers must appear in row A.
Pink flowers cannot be placed in column 1.
White flowers must appear in column 4.
Use these conditions to answer the questions.`
  },
  {
    id: 41,
    question: `On which day does lecture L3 take place?`,
    options: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`],
    correct: 2,
    explanation: `Rule 2 directly states L3 is on Wednesday.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 42,
    question: `Which lecture cannot be scheduled on Thursday?`,
    options: [`L1`, `L2`, `L3`, `L4`],
    correct: 0,
    explanation: `Rule 5 states L1 cannot occur on Thursday.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 43,
    question: `If Dr. Sara lectures on Tuesday, Dr. Omar must lecture on:`,
    options: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`],
    correct: 2,
    explanation: `Omar lectures immediately after Sara.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 44,
    question: `Which professor cannot lecture on Monday?`,
    options: [`Dr. Ali`, `Dr. Khan`, `Dr. Sara`, `Dr. Omar`],
    correct: 1,
    explanation: `Rule 3 states Dr. Khan cannot lecture Monday.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 45,
    question: `If Dr. Sara lectures on Wednesday, Dr. Omar must lecture on:`,
    options: [`Tuesday`, `Wednesday`, `Thursday`, `Monday`],
    correct: 2,
    explanation: `Omar lectures immediately after Sara.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 46,
    question: `If Dr. Ali lectures on Monday, which statement must be true?`,
    options: [`Sara lectures Tuesday or Wednesday`, `Omar lectures Monday`, `Khan lectures Monday`, `L1 occurs Thursday`],
    correct: 0,
    explanation: `Sara must occur after Ali.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 47,
    question: `Which day could Dr. Khan lecture?`,
    options: [`Monday`, `Tuesday`, `Wednesday`, `Tuesday or Thursday`],
    correct: 3,
    explanation: `Khan cannot lecture Monday but may lecture other days.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 48,
    question: `If L1 occurs Monday, which lecture could occur Thursday?`,
    options: [`L1`, `L2`, `L3`, `L4`],
    correct: 3,
    explanation: `L1 cannot be Thursday and L3 fixed Wednesday.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 49,
    question: `If Dr. Sara lectures Tuesday, which professor must lecture Monday?`,
    options: [`Dr. Omar`, `Dr. Ali`, `Dr. Khan`, `Cannot be determined`],
    correct: 1,
    explanation: `Ali must lecture before Sara.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 50,
    question: `Which pair of professors must lecture on consecutive days?`,
    options: [`Ali and Khan`, `Sara and Omar`, `Ali and Omar`, `Khan and Sara`],
    correct: 1,
    explanation: `Omar lectures immediately after Sara according to Rule 4.`,
    passage: `Passage for Questions 41–50
A university schedules four lectures (L1, L2, L3, L4) on four consecutive days: Monday, Tuesday, Wednesday, and Thursday. Each lecture is given by a different professor: Dr. Ali, Dr. Sara, Dr. Khan, and Dr. Omar.
The following conditions apply:
Dr. Ali’s lecture occurs before Dr. Sara’s lecture.
Lecture L3 takes place on Wednesday.
Dr. Khan does not lecture on Monday.
Dr. Omar’s lecture occurs immediately after Dr. Sara’s lecture.
Lecture L1 is not scheduled on Thursday.
Use these conditions to answer the questions.`
  },
  {
    id: 51,
    question: `Which flower must appear in Row C?`,
    options: [`Pink`, `Red`, `Yellow`, `White`],
    correct: 2,
    explanation: `Rule 4 states Row C must contain a yellow rose.`,
    passage: `Passage for Questions
51–55
A gardener arranges roses in three rows: Row A, Row B, and Row C. Each row contains three flowers, and the flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following conditions apply:
Each row contains exactly three flowers.
Row A must contain a red rose.
Row B cannot contain a white rose.
Row C must contain a yellow rose.
No row can contain two flowers of the same color.
Use these rules to answer the questions.`
  },
  {
    id: 52,
    question: `Which flower cannot appear in Row B?`,
    options: [`Pink`, `Yellow`, `White`, `Red`],
    correct: 2,
    explanation: `Rule 3 states Row B cannot contain a white rose.`,
    passage: `Passage for Questions
51–55
A gardener arranges roses in three rows: Row A, Row B, and Row C. Each row contains three flowers, and the flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following conditions apply:
Each row contains exactly three flowers.
Row A must contain a red rose.
Row B cannot contain a white rose.
Row C must contain a yellow rose.
No row can contain two flowers of the same color.
Use these rules to answer the questions.`
  },
  {
    id: 53,
    question: `If Row A contains Red and Yellow roses, which flower cannot appear in Row A?`,
    options: [`Pink`, `White`, `Yellow`, `Pink or White`],
    correct: 2,
    explanation: `Each row cannot contain duplicate colors.`,
    passage: `Passage for Questions
51–55
A gardener arranges roses in three rows: Row A, Row B, and Row C. Each row contains three flowers, and the flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following conditions apply:
Each row contains exactly three flowers.
Row A must contain a red rose.
Row B cannot contain a white rose.
Row C must contain a yellow rose.
No row can contain two flowers of the same color.
Use these rules to answer the questions.`
  },
  {
    id: 54,
    question: `Which flower must appear at least once in the garden?`,
    options: [`Red`, `Pink`, `Yellow`, `White`],
    correct: 2,
    explanation: `Yellow must appear in Row C.`,
    passage: `Passage for Questions
51–55
A gardener arranges roses in three rows: Row A, Row B, and Row C. Each row contains three flowers, and the flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following conditions apply:
Each row contains exactly three flowers.
Row A must contain a red rose.
Row B cannot contain a white rose.
Row C must contain a yellow rose.
No row can contain two flowers of the same color.
Use these rules to answer the questions.`
  },
  {
    id: 55,
    question: `If Row B contains Pink and Red roses, which flower must be the third flower in Row B?`,
    options: [`Yellow`, `White`, `Pink`, `Red`],
    correct: 0,
    explanation: `Row B cannot contain white and cannot repeat colors.`,
    passage: `Passage for Questions
51–55
A gardener arranges roses in three rows: Row A, Row B, and Row C. Each row contains three flowers, and the flowers used are Red (R), Yellow (Y), Pink (P), and White (W). The following conditions apply:
Each row contains exactly three flowers.
Row A must contain a red rose.
Row B cannot contain a white rose.
Row C must contain a yellow rose.
No row can contain two flowers of the same color.
Use these rules to answer the questions.`
  },
  {
    id: 56,
    question: `Which shelf cannot contain History books?`,
    options: [`S1`, `S2`, `S3`, `S4`],
    correct: 0,
    explanation: `Rule 3 states History cannot be on S1.`,
    passage: `Passage for Questions
56–60
A library has four shelves: S1, S2, S3, and S4. Four types of books are arranged: History (H), Science (S), Literature (L), and Philosophy (P).
Rules:
Each shelf contains exactly one type of book.
Science books must be placed before Literature books.
History books cannot be on shelf S1.
Philosophy books must be placed after History books.`
  },
  {
    id: 57,
    question: `If Science books are on S2, Literature books must be on:`,
    options: [`S1`, `S2`, `S3 or S4`, `S1 or S2`],
    correct: 2,
    explanation: `Literature must come after Science.`,
    passage: `Passage for Questions
56–60
A library has four shelves: S1, S2, S3, and S4. Four types of books are arranged: History (H), Science (S), Literature (L), and Philosophy (P).
Rules:
Each shelf contains exactly one type of book.
Science books must be placed before Literature books.
History books cannot be on shelf S1.
Philosophy books must be placed after History books.`
  },
  {
    id: 58,
    question: `If History books are on S2, Philosophy books must be on:`,
    options: [`S1`, `S2`, `S3 or S4`, `S1 or S2`],
    correct: 2,
    explanation: `Philosophy must appear after History.`,
    passage: `Passage for Questions
56–60
A library has four shelves: S1, S2, S3, and S4. Four types of books are arranged: History (H), Science (S), Literature (L), and Philosophy (P).
Rules:
Each shelf contains exactly one type of book.
Science books must be placed before Literature books.
History books cannot be on shelf S1.
Philosophy books must be placed after History books.`
  },
  {
    id: 59,
    question: `Which shelf could contain Literature books?`,
    options: [`S1`, `S2`, `S3`, `S1 or S2`],
    correct: 2,
    explanation: `Literature must appear after Science.`,
    passage: `Passage for Questions
56–60
A library has four shelves: S1, S2, S3, and S4. Four types of books are arranged: History (H), Science (S), Literature (L), and Philosophy (P).
Rules:
Each shelf contains exactly one type of book.
Science books must be placed before Literature books.
History books cannot be on shelf S1.
Philosophy books must be placed after History books.`
  },
  {
    id: 60,
    question: `If Philosophy books are on S4, which could be on S3?`,
    options: [`Science`, `History`, `Literature`, `Any of these`],
    correct: 3,
    explanation: `Any book type could appear before Philosophy depending on arrangement.`,
    passage: `Passage for Questions
56–60
A library has four shelves: S1, S2, S3, and S4. Four types of books are arranged: History (H), Science (S), Literature (L), and Philosophy (P).
Rules:
Each shelf contains exactly one type of book.
Science books must be placed before Literature books.
History books cannot be on shelf S1.
Philosophy books must be placed after History books.`
  },
  {
    id: 61,
    question: `Who must sit immediately to the right of Ali?`,
    options: [`Saad`, `Bilal`, `Usman`, `Hamza`],
    correct: 1,
    explanation: `Ali sits immediately left of Bilal.`,
    passage: `Passage for Questions
61–65
Five friends Ali, Bilal, Hamza, Saad, and Usman are sitting in a row.
Rules:
Ali sits immediately to the left of Bilal.
Hamza sits at one end.
Saad cannot sit next to Hamza.
Usman sits somewhere between Bilal and Saad.`
  },
  {
    id: 62,
    question: `Who must sit at an end?`,
    options: [`Ali`, `Hamza`, `Saad`, `Usman`],
    correct: 1,
    explanation: `Hamza must sit at one end.`,
    passage: `Passage for Questions
61–65
Five friends Ali, Bilal, Hamza, Saad, and Usman are sitting in a row.
Rules:
Ali sits immediately to the left of Bilal.
Hamza sits at one end.
Saad cannot sit next to Hamza.
Usman sits somewhere between Bilal and Saad.`
  },
  {
    id: 63,
    question: `Who cannot sit next to Hamza?`,
    options: [`Ali`, `Bilal`, `Saad`, `Usman`],
    correct: 2,
    explanation: `Rule 3 states Saad cannot sit next to Hamza.`,
    passage: `Passage for Questions
61–65
Five friends Ali, Bilal, Hamza, Saad, and Usman are sitting in a row.
Rules:
Ali sits immediately to the left of Bilal.
Hamza sits at one end.
Saad cannot sit next to Hamza.
Usman sits somewhere between Bilal and Saad.`
  },
  {
    id: 64,
    question: `Usman must sit between:`,
    options: [`Ali and Bilal`, `Bilal and Saad`, `Saad and Hamza`, `Ali and Saad`],
    correct: 1,
    explanation: `Rule 4.`,
    passage: `Passage for Questions
61–65
Five friends Ali, Bilal, Hamza, Saad, and Usman are sitting in a row.
Rules:
Ali sits immediately to the left of Bilal.
Hamza sits at one end.
Saad cannot sit next to Hamza.
Usman sits somewhere between Bilal and Saad.`
  },
  {
    id: 65,
    question: `If Hamza sits at the first position, who cannot sit second?`,
    options: [`Ali`, `Bilal`, `Saad`, `Usman`],
    correct: 2,
    explanation: `Saad cannot sit next to Hamza.`,
    passage: `Passage for Questions
61–65
Five friends Ali, Bilal, Hamza, Saad, and Usman are sitting in a row.
Rules:
Ali sits immediately to the left of Bilal.
Hamza sits at one end.
Saad cannot sit next to Hamza.
Usman sits somewhere between Bilal and Saad.`
  },
  {
    id: 66,
    question: `If A presents Monday, D presents:`,
    options: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`],
    correct: 1,
    explanation: `D must present immediately after A.`,
    passage: `Passage for Questions
66–70
Four students A, B, C, and D present seminars on Monday, Tuesday, Wednesday, and Thursday.
Rules:
A presents before C.
B cannot present on Monday.
D presents immediately after A.
C cannot present on Thursday.`
  },
  {
    id: 67,
    question: `Which student cannot present on Monday?`,
    options: [`A`, `B`, `C`, `D`],
    correct: 1,
    explanation: `Rule 2.`,
    passage: `Passage for Questions
66–70
Four students A, B, C, and D present seminars on Monday, Tuesday, Wednesday, and Thursday.
Rules:
A presents before C.
B cannot present on Monday.
D presents immediately after A.
C cannot present on Thursday.`
  },
  {
    id: 68,
    question: `If C presents Wednesday, A must present:`,
    options: [`Monday`, `Tuesday`, `Thursday`, `Cannot be determined`],
    correct: 0,
    explanation: `A must come before C.`,
    passage: `Passage for Questions
66–70
Four students A, B, C, and D present seminars on Monday, Tuesday, Wednesday, and Thursday.
Rules:
A presents before C.
B cannot present on Monday.
D presents immediately after A.
C cannot present on Thursday.`
  },
  {
    id: 69,
    question: `Who must present immediately after A?`,
    options: [`B`, `C`, `D`, `A`],
    correct: 2,
    explanation: `Rule 3.`,
    passage: `Passage for Questions
66–70
Four students A, B, C, and D present seminars on Monday, Tuesday, Wednesday, and Thursday.
Rules:
A presents before C.
B cannot present on Monday.
D presents immediately after A.
C cannot present on Thursday.`
  },
  {
    id: 70,
    question: `Which day cannot have C’s presentation?`,
    options: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`],
    correct: 3,
    explanation: `Rule 4.`,
    passage: `Passage for Questions
66–70
Four students A, B, C, and D present seminars on Monday, Tuesday, Wednesday, and Thursday.
Rules:
A presents before C.
B cannot present on Monday.
D presents immediately after A.
C cannot present on Thursday.`
  },
  {
    id: 71,
    question: `Find the next number in the sequence: 3, 9, 27, 81, ?`,
    options: [`162`, `243`, `324`, `729`],
    correct: 1,
    explanation: `Each number is multiplied by 3.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 72,
    question: `Find the missing number: 4, 6, 9, 13, 18, ?`,
    options: [`22`, `24`, `25`, `27`],
    correct: 1,
    explanation: `Differences increase by +1, +2, +3, +4, +5 → next difference = 6 → 18 + 6 = 24.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 73,
    question: `If CAT is coded as DBU, how is DOG coded?`,
    options: [`EPH`, `EPG`, `EOH`, `FPH`],
    correct: 0,
    explanation: `Each letter shifts one step forward in the alphabet.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 74,
    question: `If 6 + 4 = 64 and 5 + 3 = 53 in a certain pattern, what is 7 + 2?`,
    options: [`72`, `14`, `49`, `27`],
    correct: 0,
    explanation: `The numbers are concatenated: 6 and 4 → 64, 5 and 3 → 53.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 75,
    question: `Which number does not belong in the series? 2, 6, 7, 21, 22, 66, 67`,
    options: [`6`, `7`, `21`, `22`],
    correct: 0,
    explanation: `Pattern alternates ×3 then +1 starting from 2 → 2, 7, 21, 22, 66, 67.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 76,
    question: `A man walks 10 m east, then 5 m south, then 10 m west. How far is he from the starting point?`,
    options: [`5 m`, `10 m`, `15 m`, `20 m`],
    correct: 0,
    explanation: `East and west cancel; he is 5 m south of start.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 77,
    question: `If all roses are flowers and some flowers are red, which statement must be true?`,
    options: [`All roses are red`, `Some roses may be red`, `No roses are red`, `All red things are flowers`],
    correct: 1,
    explanation: `Since roses are flowers and some flowers are red, roses could be among them.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 78,
    question: `In a code language, BOOK is written as CPPL. How is WORD written?`,
    options: [`XQSE`, `XPSF`, `XPSG`, `XPSH`],
    correct: 1,
    explanation: `Each letter moves one step forward in the alphabet.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 79,
    question: `Find the missing number: 5, 10, 20, 40, ?`,
    options: [`60`, `70`, `80`, `90`],
    correct: 2,
    explanation: `Each number is doubled.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 80,
    question: `If SOUTH is written as HTUOS, how is NORTH written?`,
    options: [`HTRON`, `HTRNO`, `HTRON`, `HTRNO`],
    correct: 0,
    explanation: `The word is reversed.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 81,
    question: `Which number completes the series? 1, 4, 9, 16, 25, ?`,
    options: [`30`, `36`, `49`, `64`],
    correct: 1,
    explanation: `Perfect squares: 1², 2², 3², 4², 5², 6².`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 82,
    question: `If 3 workers complete a job in 12 days, how many days will 6 workers take?`,
    options: [`3`, `4`, `6`, `8`],
    correct: 2,
    explanation: `Workers doubled → time halved.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 83,
    question: `If the day before yesterday was Monday, what day will it be tomorrow?`,
    options: [`Wednesday`, `Thursday`, `Friday`, `Saturday`],
    correct: 1,
    explanation: `Day before yesterday Monday → today Wednesday → tomorrow Thursday.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 84,
    question: `Find the odd word: Lion, Tiger, Leopard, Elephant`,
    options: [`Lion`, `Tiger`, `Leopard`, `Elephant`],
    correct: 3,
    explanation: `Elephant is not a carnivore.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 85,
    question: `Find the missing number: 8, 27, 64, ?, 216`,
    options: [`81`, `100`, `125`, `144`],
    correct: 2,
    explanation: `Cubes: 2³, 3³, 4³, 5³, 6³.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 86,
    question: `If “TRAIN” is coded as “USBOJ”, how is “PLANE” coded?`,
    options: [`QMBOD`, `QMBNF`, `QMBOD`, `QMBNE`],
    correct: 1,
    explanation: `Each letter shifts one step forward.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 87,
    question: `Find the next number: 11, 13, 17, 19, 23, ?`,
    options: [`27`, `29`, `31`, `33`],
    correct: 1,
    explanation: `Prime numbers.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 88,
    question: `A clock shows 3:15. What is the angle between the hour and minute hands?`,
    options: [`0°`, `7.5°`, `15°`, `30°`],
    correct: 1,
    explanation: `Minute hand 90°. Hour hand 97.5°. Difference = 7.5°.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 89,
    question: `Which letter replaces the question mark? A, D, G, J, ?`,
    options: [`K`, `L`, `M`, `N`],
    correct: 2,
    explanation: `Each step increases by +3 letters.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 90,
    question: `If the letters of the word “REASON” are arranged alphabetically, which letter comes fourth?`,
    options: [`E`, `N`, `O`, `R`],
    correct: 1,
    explanation: `Alphabetical order: A, E, N, O, R, S → 4th = N.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 91,
    question: `Statement: All surgeons are doctors. Some doctors are researchers. Which conclusion logically follows?`,
    options: [`All researchers are surgeons`, `No surgeons are researchers`, `All doctors are surgeons`, `Some surgeons may be researchers`],
    correct: 3,
    explanation: `Since surgeons are doctors and some doctors are researchers, it is possible that some surgeons are researchers, but it is not certain.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 92,
    question: `Five friends — A, B, C, D, and E — are standing in a line facing north. A is to the immediate left of B. C is to the right of B but not next to B. D is at one of the ends. E stands between B and C. Who is standing at the extreme right?`,
    options: [`A`, `D`, `C`, `E`],
    correct: 2,
    explanation: `A possible arrangement satisfying all conditions is: D A B E C. Hence C is at the extreme right.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 93,
    question: `If in a certain code language “TABLE” is written as “UBCMF”, how will “CHAIR” be written?`,
    options: [`DIBKS`, `DIBJT`, `DICJS`, `DIBJS`],
    correct: 3,
    explanation: `Each letter moves one step forward in the alphabet: C→D, H→I, A→B, I→J, R→S.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 94,
    question: `A man walks 15 meters north, then turns right and walks 10 meters, then turns right again and walks 15 meters. How far is he from the starting point?`,
    options: [`5 m`, `15 m`, `20 m`, `10 m`],
    correct: 3,
    explanation: `After moving north and then south again, the vertical distance cancels out, leaving him 10 meters east of the starting point.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 95,
    question: `Find the odd word among the following:`,
    options: [`Cow`, `Goat`, `Tiger`, `Sheep`],
    correct: 2,
    explanation: `Cow, goat, and sheep are herbivores/domesticated animals, whereas tiger is a carnivore and wild animal.`,
    passage: `Below are Analytical Reasoning questions (71–90) that are not passage-based. They follow patterns commonly seen in NTS tests such as number series, logical deduction, coding–decoding, direction sense, and arrangement reasoning.`
  },
  {
    id: 96,
    question: `Who finishes immediately before Bilal?`,
    options: [`Hamza`, `Umar`, `Ali`, `Saad`],
    correct: 2,
    explanation: `Ali must come before Bilal according to the conditions.`,
    passage: `Passage for Questions
96–100
Five students — Ali, Bilal, Hamza, Saad, and Umar — participate in a debate competition. They finish in five different positions (1st to 5th). The following information is known:
Bilal finishes before Saad but after Ali.
Hamza finishes immediately after Saad.
Umar does not finish first.
Ali finishes before Bilal.
Use this information to answer the questions.`
  },
  {
    id: 97,
    question: `Who finishes immediately after Saad?`,
    options: [`Ali`, `Bilal`, `Umar`, `Hamza`],
    correct: 3,
    explanation: `Rule 2 states Hamza finishes immediately after Saad.`,
    passage: `Passage for Questions
96–100
Five students — Ali, Bilal, Hamza, Saad, and Umar — participate in a debate competition. They finish in five different positions (1st to 5th). The following information is known:
Bilal finishes before Saad but after Ali.
Hamza finishes immediately after Saad.
Umar does not finish first.
Ali finishes before Bilal.
Use this information to answer the questions.`
  },
  {
    id: 98,
    question: `Which student cannot finish first?`,
    options: [`Ali`, `Umar`, `Bilal`, `Hamza`],
    correct: 1,
    explanation: `Rule 3 clearly states Umar does not finish first.`,
    passage: `Passage for Questions
96–100
Five students — Ali, Bilal, Hamza, Saad, and Umar — participate in a debate competition. They finish in five different positions (1st to 5th). The following information is known:
Bilal finishes before Saad but after Ali.
Hamza finishes immediately after Saad.
Umar does not finish first.
Ali finishes before Bilal.
Use this information to answer the questions.`
  },
  {
    id: 99,
    question: `Which pair of students must appear consecutively in the ranking?`,
    options: [`Ali and Umar`, `Bilal and Umar`, `Ali and Bilal`, `Saad and Hamza`],
    correct: 3,
    explanation: `Rule 2 states Hamza must finish immediately after Saad.`,
    passage: `Passage for Questions
96–100
Five students — Ali, Bilal, Hamza, Saad, and Umar — participate in a debate competition. They finish in five different positions (1st to 5th). The following information is known:
Bilal finishes before Saad but after Ali.
Hamza finishes immediately after Saad.
Umar does not finish first.
Ali finishes before Bilal.
Use this information to answer the questions.`
  },
  {
    id: 100,
    question: `Who could possibly finish last?`,
    options: [`Ali`, `Hamza`, `Bilal`, `Umar`],
    correct: 3,
    explanation: `Considering the constraints, Umar can occupy the last position.`,
    passage: `Passage for Questions
96–100
Five students — Ali, Bilal, Hamza, Saad, and Umar — participate in a debate competition. They finish in five different positions (1st to 5th). The following information is known:
Bilal finishes before Saad but after Ali.
Hamza finishes immediately after Saad.
Umar does not finish first.
Ali finishes before Bilal.
Use this information to answer the questions.`
  }
];