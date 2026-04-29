// NTS MOCK 9 — MedMasters
// 100 MCQs | Timed | Past Paper Based

window.NTS_MOCK9_PASSAGES = {
  "p1": {
    "range": [9, 10],
    "label": "Passage for Q9-10",
    "text": "Artificial intelligence is increasingly being integrated into everyday decision-making, from hiring algorithms to medical diagnostics. Proponents argue that AI removes human bias and can identify patterns invisible to the human eye. Critics, however, contend that AI systems are only as unbiased as the data they are trained on, and that historical datasets often embed systemic inequalities. A hiring algorithm trained on decades of corporate data may simply learn to replicate the demographics of who was hired before. The challenge is not merely technical but deeply ethical: who bears responsibility when an automated system causes harm? Regulators across the world are grappling with this question, with the European Union taking the lead in proposing binding legislation to govern high-risk AI applications."
  },
  "p11": {
    "range": [11, 14],
    "label": "Passage for Q11-14",
    "text": "A painter is selecting two combinations of colours from seven colours: T, U, V, W, X, Y, and Z. Combination 1 will contain four colours and Combination 2 will contain the remaining three. The painter must follow these restrictions: T cannot be in the same combination as U. If X is in Combination 2, Z must also be in Combination 2. If Z is in Combination 1, W must also be in Combination 1."
  },
  "p15": {
    "range": [15, 19],
    "label": "Passage for Q15-19",
    "text": "In a game, six balloons coloured Violet, Pink, Blue, Green, Yellow, and Orange are to be placed on six different tables numbered 1 to 6, one balloon per table. The following rules apply: Violet cannot be placed immediately before or after Pink. Blue must be placed after Green. Orange cannot be on table 6. Yellow must be on a table with a higher number than Blue."
  }
};

window.NTS_MOCK9_DATA = [
  {
    "num": 1,
    "q": "Which word does NOT belong with the others?",
    "opts": ["Typhoid", "Malaria", "Scurvy", "Cholera"],
    "ans": 2,
    "exp": "Typhoid, Malaria, and Cholera are all infectious diseases caused by pathogens. Scurvy is a nutritional deficiency disease caused by lack of vitamin C; it is the odd one out."
  },
  {
    "num": 2,
    "q": "Stethoscope : Doctor :: Theodolite : ?",
    "opts": ["Architect", "Surveyor", "Pilot", "Geologist"],
    "ans": 1,
    "exp": "A stethoscope is the defining diagnostic instrument of a doctor. A theodolite is the defining precision instrument used by a surveyor to measure horizontal and vertical angles in land surveying."
  },
  {
    "num": 3,
    "q": "A person who walks in their sleep is called a:",
    "opts": ["Insomniac", "Somnolent", "Somnambulant", "Narcoleptic"],
    "ans": 2,
    "exp": "A somnambulant (or somnambulist) is a person who walks during sleep. Insomniac (A) cannot sleep. Somnolent (B) means drowsy or sleepy. Narcoleptic (D) suffers from sudden uncontrollable sleep attacks."
  },
  {
    "num": 4,
    "q": "What does the proverb 'A stitch in time saves nine' mean?",
    "opts": ["Sewing quickly prevents mistakes", "Addressing a problem early prevents it from worsening", "Nine stitches are better than one", "Patience is always rewarded"],
    "ans": 1,
    "exp": "The proverb means that dealing with a problem promptly when it is small prevents it from growing into a much larger problem that requires far more effort to fix."
  },
  {
    "num": 5,
    "q": "In the sentence 'The judge delivered an IMPARTIAL verdict,' the underlined word most nearly means:",
    "opts": ["Harsh", "Unbiased", "Delayed", "Controversial"],
    "ans": 1,
    "exp": "IMPARTIAL means treating all parties equally without favouritism or prejudice. An impartial verdict is one decided purely on evidence, without bias. HARSH (A), DELAYED (C), and CONTROVERSIAL (D) are unrelated to impartiality."
  },
  {
    "num": 6,
    "q": "The phrase 'beating around the bush' most nearly means:",
    "opts": ["Working very hard", "Avoiding the main topic", "Searching for something lost", "Speaking very loudly"],
    "ans": 1,
    "exp": "To 'beat around the bush' means to avoid coming directly to the main point of a conversation, instead talking about peripheral matters. It describes indirect or evasive communication."
  },
  {
    "num": 7,
    "q": "Which of the following sentences is grammatically CORRECT?",
    "opts": ["Each of the students have submitted their assignment.", "Neither of the boys were present.", "The committee have reached a unanimous decision.", "The data clearly shows an upward trend."],
    "ans": 3,
    "exp": "'The data clearly shows' is grammatically correct in standard usage. 'Each' (A) takes a singular verb: 'has'. 'Neither' (B) takes a singular verb: 'was'. 'The committee' (C) is a collective noun taking a singular verb: 'has'."
  },
  {
    "num": 8,
    "q": "The hospital was praised for its METICULOUS record-keeping. The underlined word is closest in meaning to the OPPOSITE of:",
    "opts": ["Precise", "Careful", "Careless", "Detailed"],
    "ans": 2,
    "exp": "METICULOUS means showing great attention to detail; very careful and precise. Its antonym is CARELESS, meaning lacking attention or thoroughness. PRECISE (A), CAREFUL (B), and DETAILED (D) are all synonyms of meticulous."
  },
  {
    "num": 9,
    "q": "Critics of AI in the passage argue bias persists because:",
    "opts": [
      "Cannot process large data",
      "Biased training data",
      "Too costly to implement",
      "Oversight legally banned"
    ],
    "ans": 1,
    "exp": "The passage states AI is 'only as unbiased as the data it is trained on, and historical datasets often embed systemic inequalities.' Options A, C, D are not in the passage.",
    "passage_id": "p1"
  },
  {
    "num": 10,
    "q": "The passage describes the challenge of AI governance as:",
    "opts": [
      "A technical problem only",
      "Ethical, not just technical",
      "Limited to hiring only",
      "Resolved by EU legislation"
    ],
    "ans": 1,
    "exp": "The passage explicitly states 'the challenge is not merely technical but deeply ethical' and asks who bears responsibility when an automated system causes harm. Options A, C, D misrepresent the passage.",
    "passage_id": "p1"
  },
  {
    "num": 11,
    "q": "If T is in Combination 1 and X is in Combination 2, which of the following must be true?",
    "opts": [
      "U is in Combination 1",
      "Z is in Combination 2",
      "W is in Combination 2",
      "Y is in Combination 1"
    ],
    "ans": 1,
    "exp": "Rule 2: if X is in Combination 2, Z must also be in Combination 2. So Z must be in Combination 2, always true. A: T in C1 does not fix U's position. C and D are not determined by these constraints alone.",
    "passage_id": "p11"
  },
  {
    "num": 12,
    "q": "If Z is in Combination 1, which of the following must also be in Combination 1?",
    "opts": ["X", "U", "W", "Y"],
    "ans": 2,
    "exp": "Rule 3 states directly: if Z is in Combination 1, W must be in Combination 1. X being in C2 would force Z into C2 (rule 2), contradicting Z in C1, so X must be in C1, but W is the one explicitly required by rule 3.",
    "passage_id": "p11"
  },
  {
    "num": 13,
    "q": "If T and Z are in Combination 2, which colour can also be in Combination 2 EXCEPT:",
    "opts": ["X", "Y", "U", "V"],
    "ans": 2,
    "exp": "T cannot be with U (rule 1). T is in Combination 2, so U cannot be in Combination 2. Therefore U is the answer. X, Y, and V have no rule preventing them from joining T and Z in Combination 2.",
    "passage_id": "p11"
  },
  {
    "num": 14,
    "q": "If Z is in Combination 1, which of the following is a complete valid Combination 1?",
    "opts": ["T, Z, W, X", "T, U, Z, W", "T, Z, W, V", "Z, W, X, V"],
    "ans": 0,
    "exp": "Z in C1 requires W in C1 (rule 3). Testing opt A (T,Z,W,X): Z in C1→W in C1 ✓; X is in C1 so rule 2 (X in C2→Z in C2) does not apply; T and U not together (U in C2) ✓. All rules satisfied. Opt B (T,U,Z,W): T and U in C1 together: violation of rule 1. Opt C (T,Z,W,V): C2 would be {U,Y,X}; X in C2 but Z not in C2: violation of rule 2. Opt D (Z,W,X,V): C2 would be {T,U,Y}; T and U in C2 together: violation of rule 1.",
    "passage_id": "p11"
  },
  {
    "num": 15,
    "q": "Which of the following is an acceptable arrangement of balloons from tables 1 to 6?",
    "opts": ["G-B-V-P-Y-O", "G-B-P-V-O-Y", "P-G-B-O-Y-V", "V-G-B-P-Y-O"],
    "ans": 2,
    "exp": "Testing C (Pink=1, Green=2, Blue=3, Orange=4, Yellow=5, Violet=6): Blue(3) after Green(2) ✓; Yellow(5) after Blue(3) ✓; Orange at table 4, not table 6 ✓; Violet(6) and Pink(1) differ by 5, not adjacent ✓. All rules satisfied. Opt A: Orange at table 6: violation. Opt B: Orange at table 5, Yellow at table 6; Yellow(6)>Blue(2) ✓; but Violet not present in arrangement, invalid layout. Actually Green=1,Blue=2,Pink=3,Violet=4,Orange=5,Yellow=6: Violet(4) adjacent to Pink(3): violation. Opt D: Orange at table 6: violation.",
    "passage_id": "p15"
  },
  {
    "num": 16,
    "q": "If Green is on table 1 and Blue is on table 3, which table must Yellow be on?",
    "opts": ["Table 2", "Table 4 or higher", "Table 3", "Table 6"],
    "ans": 1,
    "exp": "Yellow must be on a higher-numbered table than Blue. Blue is on table 3, so Yellow must be on table 4, 5, or 6. Option B (table 4 or higher) is the only choice that captures all valid positions.",
    "passage_id": "p15"
  },
  {
    "num": 17,
    "q": "Which table can Orange NEVER be placed on?",
    "opts": ["Table 1", "Table 3", "Table 5", "Table 6"],
    "ans": 3,
    "exp": "The rule explicitly states Orange cannot be on table 6. Tables 1, 3, and 5 have no rule preventing Orange from being placed there.",
    "passage_id": "p15"
  },
  {
    "num": 18,
    "q": "If Violet is on table 2, which table can Pink NOT be on?",
    "opts": ["Table 4", "Table 1 or 3", "Table 6", "Table 5"],
    "ans": 1,
    "exp": "Violet cannot be immediately before or after Pink. Violet is on table 2, so Pink cannot be on table 1 (immediately before) or table 3 (immediately after). Option B correctly identifies both forbidden positions.",
    "passage_id": "p15"
  },
  {
    "num": 19,
    "q": "If Blue is on table 4, which of the following must be true?",
    "opts": [
      "Green is on table 3",
      "Yellow is on table 5 or 6",
      "Orange is on table 1",
      "Violet is on table 2"
    ],
    "ans": 1,
    "exp": "Yellow must be on a higher table than Blue (table 4), so Yellow must be on table 5 or 6, which is always true. Green must be before Blue but its exact table is not fixed (could be 1, 2, or 3). Orange and Violet positions are not uniquely determined.",
    "passage_id": "p15"
  },
  {
    "num": 20,
    "q": "In a row of five people A, B, C, D, and E: A is to the left of B. D is to the right of E. C is between A and D. B is immediately to the right of C. Who is at the rightmost position?",
    "opts": ["B", "D", "E", "A"],
    "ans": 1,
    "exp": "From the clues: A is left of B; C is between A and D; B is immediately right of C. So the sequence is: A...C-B with D to the right of E. Since C is between A and D, and B is immediately right of C, the order is A, C, B with D further right. E is left of D. Full order: E, A, C, B, D. D is rightmost."
  },
  {
    "num": 21,
    "q": "What is 15% of 240?",
    "opts": ["30", "36", "32", "40"],
    "ans": 1,
    "exp": "15% of 240 = 0.15 × 240 = 36."
  },
  {
    "num": 22,
    "q": "A train travels 360 km in 4 hours. What is its speed in km/h?",
    "opts": ["80", "90", "100", "75"],
    "ans": 1,
    "exp": "Speed = Distance ÷ Time = 360 ÷ 4 = 90 km/h."
  },
  {
    "num": 23,
    "q": "If 8 men can complete a job in 12 days, how many days will 6 men take to complete the same job?",
    "opts": ["14", "16", "18", "20"],
    "ans": 1,
    "exp": "Total work = 8 × 12 = 96 man-days. With 6 men: 96 ÷ 6 = 16 days."
  },
  {
    "num": 24,
    "q": "Simplify: (3² + 4²)",
    "opts": ["25", "7", "49", "14"],
    "ans": 0,
    "exp": "3² = 9, 4² = 16. 9 + 16 = 25."
  },
  {
    "num": 25,
    "q": "A shop offers a 25% discount on a coat priced at PKR 4,800. What is the discounted price?",
    "opts": ["PKR 3,200", "PKR 3,600", "PKR 3,400", "PKR 3,800"],
    "ans": 1,
    "exp": "25% of 4,800 = 1,200. Discounted price = 4,800 - 1,200 = PKR 3,600."
  },
  {
    "num": 26,
    "q": "Two numbers are in the ratio 3:7 and their sum is 50. What is the larger number?",
    "opts": ["15", "21", "35", "30"],
    "ans": 2,
    "exp": "Total parts = 10. Each part = 50 ÷ 10 = 5. Larger number = 7 × 5 = 35."
  },
  {
    "num": 27,
    "q": "If a number is increased by 20% and then decreased by 20%, the net result is:",
    "opts": ["No change", "4% decrease", "4% increase", "2% decrease"],
    "ans": 1,
    "exp": "Start with 100. After 20% increase: 120. After 20% decrease: 120 × 0.8 = 96. Net result: 4% decrease."
  },
  {
    "num": 28,
    "q": "The average of 5 numbers is 18. If one number is removed, the average of the remaining 4 is 16. What is the removed number?",
    "opts": ["24", "26", "22", "28"],
    "ans": 1,
    "exp": "Sum of 5 numbers = 5 × 18 = 90. Sum of 4 remaining = 4 × 16 = 64. Removed number = 90 - 64 = 26."
  },
  {
    "num": 29,
    "q": "A pipe fills a tank in 6 hours. Another pipe empties it in 9 hours. If both are open simultaneously, in how many hours will the tank be full?",
    "opts": ["15", "18", "12", "9"],
    "ans": 1,
    "exp": "Net rate = 1/6 - 1/9 = 3/18 - 2/18 = 1/18 per hour. Time to fill = 18 hours."
  },
  {
    "num": 30,
    "q": "What is the next term in the series: 2, 6, 12, 20, 30, ___?",
    "opts": ["40", "42", "44", "38"],
    "ans": 1,
    "exp": "Differences are 4, 6, 8, 10, increasing by 2. Next difference = 12. 30 + 12 = 42."
  },
  {
    "num": 31,
    "q": "The Na⁺/K⁺ ATPase pump maintains the resting membrane potential by:",
    "opts": [
      "2 Na⁺ out, 3 K⁺ in",
      "3 Na⁺ out, 2 K⁺ in",
      "Passive Na⁺ influx",
      "Only active during AP firing"
    ],
    "ans": 1,
    "exp": "The Na⁺/K⁺ ATPase pumps 3 Na⁺ out and 2 K⁺ in per cycle, maintaining the resting membrane potential at approximately -70 mV. Guyton and Hall describes this as the foundation of neuronal electrical activity. It operates continuously, not only during action potentials (D)."
  },
  {
    "num": 32,
    "q": "A 30-year-old woman at high altitude notices she can exercise longer than at sea level after acclimatisation. Which change in haemoglobin physiology explains improved oxygen delivery to muscles?",
    "opts": [
      "Low 2,3-DPG (left shift)",
      "High 2,3-DPG (right shift)",
      "Decreased PCO₂ (left shift)",
      "Increased pH (left shift)"
    ],
    "ans": 1,
    "exp": "At altitude, chronic hypoxia stimulates 2,3-DPG production in red cells. Increased 2,3-DPG shifts the ODC rightward, reducing haemoglobin's oxygen affinity and improving oxygen unloading at working tissues, the key acclimatisation mechanism."
  },
  {
    "num": 33,
    "q": "The normal GFR in a healthy adult is approximately:",
    "opts": ["60 mL/min", "90 mL/min", "125 mL/min", "180 mL/min"],
    "ans": 2,
    "exp": "Normal GFR is approximately 125 mL/min. A GFR of 60 (A) indicates CKD Stage 3. Option D (180 mL/min) is the total daily filtrate in litres, not the per-minute rate."
  },
  {
    "num": 34,
    "q": "Which segment of the nephron is impermeable to water yet actively transports NaCl, creating the medullary osmotic gradient?",
    "opts": [
      "Proximal convoluted tubule",
      "Thin descending limb",
      "Thick ascending limb",
      "Collecting duct"
    ],
    "ans": 2,
    "exp": "The thick ascending limb is uniquely water-impermeable at all times while actively pumping NaCl via the Na-K-2Cl cotransporter, establishing the hypertonicity that drives collecting duct water reabsorption, a mechanism detailed in Guyton and Hall. The collecting duct (D) has ADH-regulated permeability."
  },
  {
    "num": 35,
    "q": "A patient with CKD stage 4 has Ca²⁺ of 1.7 mmol/L and PO₄ of 2.4 mmol/L. The primary cause of hypocalcaemia is:",
    "opts": [
      "Low dietary calcium",
      "Low active vitamin D",
      "Excess PTH",
      "Excess calcitonin"
    ],
    "ans": 1,
    "exp": "In CKD, the kidney cannot convert 25-OH vitamin D to active calcitriol, reducing intestinal calcium absorption. Simultaneously, impaired phosphate excretion causes hyperphosphataemia, the central mechanism of renal osteodystrophy."
  },
  {
    "num": 36,
    "q": "During ventricular depolarisation (phase 0 of the cardiac action potential), which ion channel opens?",
    "opts": [
      "Slow L-type calcium channels",
      "Fast Na⁺ channels",
      "Inward rectifier K⁺ channels",
      "KATP channels"
    ],
    "ans": 1,
    "exp": "Phase 0 is driven by rapid opening of fast voltage-gated Na⁺ channels, producing the steep upstroke. L-type calcium channels (A) open in phase 2 (plateau). Potassium channels (C, D) open during repolarisation phases 1 and 3."
  },
  {
    "num": 37,
    "q": "A 45-year-old woman with features of bradycardia, weight gain, constipation, and slow-relaxing deep tendon reflexes. TSH is 22 mIU/L and free T4 is low. First-line treatment is:",
    "opts": ["Carbimazole", "Levothyroxine", "Propranolol", "Radioactive iodine"],
    "ans": 1,
    "exp": "Primary hypothyroidism with classic features (bradycardia, weight gain, myxoedema reflexes) is treated with levothyroxine, started at 25-50 mcg/day and titrated to normalise TSH. Carbimazole (A) and radioactive iodine (D) treat hyperthyroidism."
  },
  {
    "num": 38,
    "q": "The floor of the orbit is formed mainly by which bone?",
    "opts": ["Frontal bone", "Ethmoid bone", "Maxilla", "Sphenoid"],
    "ans": 2,
    "exp": "The orbital floor is formed predominantly by the orbital plate of the maxilla, with small contributions from the zygomatic and palatine bones. The frontal bone (A) forms the roof. The ethmoid (B) forms the medial wall."
  },
  {
    "num": 39,
    "q": "A mid-shaft humeral fracture results in wrist drop. Which nerve is injured and where does it run?",
    "opts": [
      "Ulnar nerve",
      "Radial nerve (spiral groove)",
      "Median nerve at the elbow",
      "Axillary nerve"
    ],
    "ans": 1,
    "exp": "The radial nerve runs in the spiral groove of the posterior humeral shaft, making it vulnerable to mid-shaft fractures, a classic correlation emphasised in Snell's Clinical Anatomy. Injury causes wrist drop and sensory loss over the posterior forearm and anatomical snuff box."
  },
  {
    "num": 40,
    "q": "During an appendicectomy under spinal anaesthesia, which dermatome level must be blocked to cover the upper limit of appendix pain?",
    "opts": ["T8", "T10", "T12", "L1"],
    "ans": 1,
    "exp": "T10 corresponds to the umbilicus and the referred pain of early appendicitis. Spinal block must reach T10 for adequate anaesthesia. T8 (A) is at the costal margin; T12 (C) is at the inguinal level."
  },
  {
    "num": 41,
    "q": "The functional unit of the liver — organised around the portal triad with zone 1 most oxygenated and zone 3 most vulnerable to ischaemia — is called the:",
    "opts": ["Classical lobule", "Hepatic acinus", "Portal lobule", "Hepatic sinusoid"],
    "ans": 1,
    "exp": "The hepatic acinus is the functional unit, organised around the portal triad and divided into zones 1, 2, and 3. The classical lobule (A) is a structural description centred on the central vein."
  },
  {
    "num": 42,
    "q": "The structure passing through the inguinal canal in a female patient — encountered during hernia repair — is the:",
    "opts": ["Ovarian ligament", "Round ligament of the uterus", "Uterine artery", "Fallopian tube"],
    "ans": 1,
    "exp": "The round ligament of the uterus passes through the inguinal canal to attach to the labium majus. Snell's identifies it as the structure most commonly encountered during female inguinal hernia repair. Neither the uterine artery (C) nor fallopian tube (D) traverses the inguinal canal."
  },
  {
    "num": 43,
    "q": "A 50-year-old woman develops right arm swelling after right mastectomy with axillary clearance. Which lymphatic structure, removed during the procedure, primarily drains the upper limb?",
    "opts": [
      "Internal mammary nodes",
      "Supraclavicular nodes",
      "Axillary lymph nodes",
      "Deep cervical nodes"
    ],
    "ans": 2,
    "exp": "The axillary lymph nodes are the primary drainage station for the entire upper limb. Surgical removal during axillary clearance disrupts this drainage, causing lymphoedema. Internal mammary nodes (A) drain the medial breast."
  },
  {
    "num": 44,
    "q": "A medical student is asked to palpate the femoral artery at the femoral triangle. From lateral to medial, the correct order of contents is:",
    "opts": [
      "Vein, Artery, Nerve",
      "Nerve, Artery, Vein",
      "Artery, Nerve, Vein",
      "Nerve, Vein, Artery"
    ],
    "ans": 1,
    "exp": "The femoral triangle contents from lateral to medial are: Nerve, Artery, Vein (NAV). KLM describes this as the NAVY mnemonic. The femoral artery lies at the mid-inguinal point, medial to the femoral nerve and lateral to the femoral vein."
  },
  {
    "num": 45,
    "q": "Which antiepileptic is most strongly associated with neural tube defects when used in the first trimester?",
    "opts": ["Levetiracetam", "Lamotrigine", "Sodium valproate", "Carbamazepine"],
    "ans": 2,
    "exp": "Sodium valproate carries the highest teratogenic risk among antiepileptics, with approximately 1-2% incidence of neural tube defects, through inhibition of histone deacetylase and folate metabolism interference. Katzung's identifies it as the most teratogenic commonly used antiepileptic."
  },
  {
    "num": 46,
    "q": "A child accidentally ingests iron tablets. He presents with haematemesis and bloody diarrhoea. The antidote is:",
    "opts": ["N-acetylcysteine", "Deferoxamine", "Atropine", "Flumazenil"],
    "ans": 1,
    "exp": "Deferoxamine chelates free iron, forming ferrioxamine excreted renally; urine turns vin rosé colour confirming chelation. N-acetylcysteine (A) treats paracetamol toxicity. Atropine (C) treats organophosphate poisoning."
  },
  {
    "num": 47,
    "q": "A farmer collapses with pinpoint pupils, excessive secretions, bradycardia, and muscle fasciculations. Urine organophosphate screen is positive. First-line antidote:",
    "opts": ["Naloxone", "Pralidoxime alone", "Atropine", "N-acetylcysteine"],
    "ans": 2,
    "exp": "Organophosphates inhibit acetylcholinesterase causing cholinergic crisis. Atropine competitively blocks muscarinic receptors, drying secretions and reversing bradycardia. Pralidoxime is added as a cholinesterase reactivator but atropine comes first."
  },
  {
    "num": 48,
    "q": "Furosemide's diuretic mechanism involves inhibition of which transporter?",
    "opts": [
      "Na-Cl cotransporter",
      "Na-K-2Cl cotransporter",
      "Na-H exchanger",
      "Aldosterone receptor"
    ],
    "ans": 1,
    "exp": "Furosemide inhibits the Na-K-2Cl cotransporter (NKCC2) in the thick ascending limb of the loop of Henle, producing rapid, potent diuresis. Katzung's identifies it as the most efficacious diuretic. Thiazides target the Na-Cl cotransporter (A) in the distal tubule."
  },
  {
    "num": 49,
    "q": "A 22-year-old man arrives unresponsive with pinpoint pupils and a respiratory rate of 5/min after using heroin. Which drug reverses this immediately?",
    "opts": ["Morphine", "Tramadol", "Naloxone", "Diazepam"],
    "ans": 2,
    "exp": "Naloxone is a competitive opioid antagonist that displaces opioids from mu, kappa, and delta receptors, reversing respiratory depression within minutes. Morphine (A) and tramadol (B) are agonists and would worsen the picture."
  },
  {
    "num": 50,
    "q": "A 32-year-old epileptic woman becomes pregnant despite using the combined oral contraceptive pill. Her only drug is rifampicin for TB. Why did the pill fail?",
    "opts": [
      "Blocks oestrogen receptors",
      "Induces CYP3A4",
      "Inhibits ovulation directly",
      "Reduces pill absorption"
    ],
    "ans": 1,
    "exp": "Rifampicin is a potent CYP3A4 inducer, dramatically accelerating hepatic metabolism of oestrogen and progesterone, reducing their plasma levels below effective concentrations. Barrier contraception is mandatory during rifampicin treatment."
  },
  {
    "num": 51,
    "q": "Which drug causes irreversible sensorineural hearing loss by accumulating in cochlear hair cells and generating free radicals?",
    "opts": ["Penicillin", "Gentamicin", "Furosemide", "Metformin"],
    "ans": 1,
    "exp": "Gentamicin (and all aminoglycosides) selectively accumulates in outer cochlear hair cells, producing oxidative damage and irreversible hearing loss. The effect is dose-dependent and cumulative, and is worsened by concurrent loop diuretic use."
  }
  ,
  {
    "num": 52,
    "q": "A 62-year-old man with crushing central chest pain for 3 hours, ST elevation in V1–V4, elevated troponin-I. The occluded vessel is most likely:",
    "opts": ["Right coronary artery", "Left anterior descending", "Left circumflex artery", "Left main stem"],
    "ans": 1,
    "exp": "ST elevation in V1-V4 indicates anterior STEMI from LAD occlusion. RCA (A) causes inferior changes in II, III, aVF. The circumflex (C) causes lateral changes in I, aVL, V5-V6. Davidson's identifies the LAD as the artery responsible for anterior STEMI."
  },
  {
    "num": 53,
    "q": "A 25-year-old woman: malar rash sparing the nasolabial folds, joint pain, oral ulcers, photosensitivity, ANA 1:640. Diagnosis:",
    "opts": ["Rosacea", "Dermatomyositis", "SLE", "Psoriasis"],
    "ans": 2,
    "exp": "The butterfly rash sparing the nasolabial folds is pathognomonic of SLE. Rosacea (A) does not spare these folds. Dermatomyositis (B) causes periorbital heliotrope rash and proximal myopathy. Psoriasis (D) causes silvery plaques."
  },
  {
    "num": 54,
    "q": "A 70-year-old man: 2 years of progressive memory loss, getting lost, difficulty managing finances. MMSE 15/30. MRI shows hippocampal atrophy and temporal-parietal cortical thinning. Diagnosis:",
    "opts": ["Vascular dementia", "Normal pressure hydrocephalus", "Alzheimer's disease", "Lewy body dementia"],
    "ans": 2,
    "exp": "Insidious onset memory-first cognitive decline with hippocampal and temporal-parietal atrophy is Alzheimer's disease. Vascular dementia (A) has stepwise decline and white matter changes. NPH (B) presents with the triad of gait, incontinence, and dementia."
  },
  {
    "num": 55,
    "q": "A 45-year-old man with sudden epigastric pain, board-like abdomen, and free gas under the diaphragm on erect CXR. Immediate management:",
    "opts": ["IV omeprazole", "Resuscitate + urgent surgery", "Oral antacids", "CT abdomen first"],
    "ans": 1,
    "exp": "Free gas under the diaphragm = perforated peptic ulcer. Immediate resuscitation and emergency surgical repair. IV omeprazole (A) alone addresses acid but not the peritonitis. Delaying for CT (D) is inappropriate when the diagnosis is clear on X-ray."
  },
  {
    "num": 56,
    "q": "A 55-year-old woman with 20-year RA: 4+ proteinuria, albumin 17 g/L, bilateral oedema. Most likely renal complication:",
    "opts": ["IgA nephropathy", "Secondary AA amyloidosis", "NSAID-induced ATN", "Lupus nephritis"],
    "ans": 1,
    "exp": "Long-standing RA predisposes to secondary AA amyloidosis. Amyloid deposits in glomeruli cause heavy proteinuria, hypoalbuminaemia, and oedema. Davidson's identifies this as an important cause of nephrotic syndrome in Pakistan where TB-related amyloid is also common."
  },
  {
    "num": 57,
    "q": "A 35-year-old man from rural Sindh: fever, tender hepatomegaly, right shoulder tip pain, single hepatic cystic lesion with internal echoes, positive Entamoeba histolytica serology. First-line treatment:",
    "opts": ["Surgical drainage", "IV artesunate", "Oral metronidazole", "IV amphotericin B"],
    "ans": 2,
    "exp": "Amoebic liver abscess responds to oral metronidazole in >90% of cases. Surgical drainage (A) is reserved for large abscesses at rupture risk or those not responding to metronidazole."
  },
  {
    "num": 58,
    "q": "A 48-year-old man: sudden tearing chest pain radiating to the back, BP 190/110 in the right arm and unrecordable in the left, widened mediastinum on CXR. Diagnosis:",
    "opts": ["Acute MI", "Pulmonary embolism", "Aortic dissection", "Oesophageal rupture"],
    "ans": 2,
    "exp": "The triad of tearing back pain, unequal arm BPs, and widened mediastinum is aortic dissection. Bailey and Love's identifies interarm BP difference as the crucial clinical sign. Type A involves the ascending aorta and requires emergency surgery."
  },
  {
    "num": 59,
    "q": "A 30-year-old man: sudden severe right loin-to-groin pain, nausea, microscopic haematuria. Plain X-ray shows a radio-opaque shadow at the right VUJ. Afebrile. Most likely stone:",
    "opts": ["Uric acid (radiolucent)", "Calcium oxalate", "Struvite", "Cystine"],
    "ans": 1,
    "exp": "Calcium oxalate stones are the most common renal calculi (~80%) and are radio-opaque on plain X-ray, as noted in Bailey and Love's. Uric acid stones (A) are radiolucent. Struvite (C) forms in UTI with urease-producing organisms; this patient is afebrile."
  },
  {
    "num": 60,
    "q": "A 25-year-old man: smooth, non-tender scrotal swelling, brilliantly transilluminant, testis cannot be felt separately. Diagnosis:",
    "opts": ["Epididymal cyst", "Varicocele", "Hydrocele", "Testicular torsion"],
    "ans": 2,
    "exp": "Hydrocele: fluid within the tunica vaginalis: smooth, non-tender, transilluminant, testis enclosed within. Epididymal cyst (A) allows the testis to be felt separately. Varicocele (B) feels like a bag of worms. Torsion (D) is acutely painful."
  },
  {
    "num": 61,
    "q": "A 28-year-old man: sudden onset severe left testicular pain for 2 hours. Testis is high-riding; cremasteric reflex absent. Immediate management:",
    "opts": ["Oral antibiotics", "Emergency exploration", "Ultrasound first then decide", "Aspiration of hydrocele"],
    "ans": 1,
    "exp": "Testicular torsion: absent cremasteric reflex is the most sensitive sign. Salvage rate is ~100% within 6 hours but <10% after 24 hours. Clinical suspicion alone warrants immediate exploration without waiting for imaging."
  },
  {
    "num": 62,
    "q": "A 50-year-old heavy smoker presents with haemoptysis, 7 kg weight loss, and a right hilar mass on CXR. Serum sodium is 121 mEq/L. Which paraneoplastic syndrome explains the hyponatraemia?",
    "opts": [
      "PTHrP causing hypercalcaemia",
      "Ectopic ACTH",
      "SIADH",
      "Erythropoietin excess"
    ],
    "ans": 2,
    "exp": "A hilar mass with haemoptysis and weight loss in a heavy smoker is small cell lung carcinoma (SCLC). SCLC is the subtype most associated with ectopic ADH secretion causing SIADH and dilutional hyponatraemia. Bailey and Love's lists SIADH as the most common SCLC electrolyte complication. PTHrP (A) causes hypercalcaemia in squamous cell carcinoma."
  },
  {
    "num": 63,
    "q": "A 42-year-old woman: 3 days of constant RUQ pain after fatty food, fever 38.5°C, positive Murphy's sign, gallstones on ultrasound with wall thickening. Diagnosis and initial management:",
    "opts": [
      "Biliary colic",
      "Acute cholecystitis",
      "Ascending cholangitis",
      "Acute pancreatitis"
    ],
    "ans": 1,
    "exp": "Acute cholecystitis: constant RUQ pain, fever, positive Murphy's sign, thickened gallbladder on ultrasound. Initial management is IV antibiotics, fluids, and analgesia, with early laparoscopic cholecystectomy. Biliary colic (A) is colicky without fever."
  },
  {
    "num": 64,
    "q": "A 30-year-old man: painful, hot, fluctuant perianal swelling with fever for 4 days. Definitive treatment:",
    "opts": ["Oral antibiotics for 2 weeks", "Incision and drainage", "Sitz baths only", "MRI before any intervention"],
    "ans": 1,
    "exp": "A fluctuant perianal abscess requires surgical drainage; antibiotics alone are inadequate for pus. Delayed drainage risks extension to the ischiorectal fossa or horseshoe abscess."
  },
  {
    "num": 65,
    "q": "A 52-year-old man: painful haematuria, right flank mass for 6 weeks. CT shows a large heterogeneous solid renal mass. Most likely diagnosis:",
    "opts": ["Renal calculus", "Wilms tumour", "Renal cell carcinoma", "TCC of the renal pelvis"],
    "ans": 2,
    "exp": "Haematuria, loin pain, and a flank mass (classic triad) with a heterogeneous solid renal mass on CT is renal cell carcinoma. Bailey and Love's identifies RCC as an important malignancy in Pakistan; Wilms tumour (B) occurs in children. RCC is associated with smoking and paraneoplastic polycythaemia."
  },
  {
    "num": 66,
    "q": "A 26-year-old primigravida at 34 weeks: sudden painful vaginal bleeding, tense board-like uterus, fetal HR 86 bpm. Diagnosis:",
    "opts": ["Placenta praevia", "Placental abruption", "Vasa praevia", "Uterine rupture"],
    "ans": 1,
    "exp": "Painful bleeding with a rigid uterus and fetal bradycardia = placental abruption. Placenta praevia (A) causes painless bright-red bleeding with a soft uterus. Ten Teachers identifies abruption as a leading cause of perinatal mortality in Pakistan."
  },
  {
    "num": 67,
    "q": "A 19-year-old at 9 weeks gestation: 5 days of intractable vomiting, 5% weight loss, 3+ ketonuria, electrolyte imbalance. Inpatient management:",
    "opts": [
      "Morning sickness",
      "Hyperemesis gravidarum",
      "Gastroenteritis",
      "Appendicitis"
    ],
    "ans": 1,
    "exp": "Hyperemesis gravidarum: intractable vomiting with dehydration, >5% weight loss, ketonuria, requiring admission. IV thiamine prevents Wernicke's encephalopathy. Morning sickness is mild and outpatient-managed."
  },
  {
    "num": 68,
    "q": "A 30-year-old woman: cyclical pelvic pain worsening with each period, deep dyspareunia, 2 years of infertility. Laparoscopy shows chocolate cysts and powder-burn lesions. Diagnosis:",
    "opts": ["Uterine fibroids", "Pelvic inflammatory disease", "Endometriosis", "Ovarian torsion"],
    "ans": 2,
    "exp": "Chocolate cysts (endometriomas), powder-burn peritoneal lesions, cyclical pain, dyspareunia, and infertility define endometriosis. Laparoscopy is the gold standard for diagnosis. PID (B) presents with fever and cervical excitation."
  },
  {
    "num": 69,
    "q": "A 65-year-old post-menopausal woman: 3 months of vaginal bleeding, BMI 34, hypertensive, endometrial thickness 16 mm. Essential next step:",
    "opts": ["MRI for staging", "Endometrial biopsy", "Cervical smear", "CA-125"],
    "ans": 1,
    "exp": "Post-menopausal bleeding with endometrial thickness >4-5 mm = endometrial carcinoma until proven otherwise. Tissue diagnosis by endometrial biopsy is mandatory before staging. Ten Teachers identifies obesity, hypertension, and nulliparity as major risk factors."
  },
  {
    "num": 70,
    "q": "A 29-year-old woman: lower abdominal pain, fever 38.2°C, vaginal discharge, cervical motion tenderness on bimanual examination. Pregnancy test negative. Diagnosis:",
    "opts": ["Ectopic pregnancy", "Ovarian cyst torsion", "Pelvic inflammatory disease", "Appendicitis"],
    "ans": 2,
    "exp": "PID: lower abdominal pain, fever, vaginal discharge, and cervical motion tenderness. Most commonly Chlamydia trachomatis or Neisseria gonorrhoeae. Ectopic pregnancy (A) is excluded by the negative pregnancy test. Untreated PID leads to infertility and ectopic pregnancy risk."
  },
  {
    "num": 71,
    "q": "A 38-year-old woman: 3 years of heavy irregular periods, diffusely enlarged and tender boggy uterus on bimanual examination. Ultrasound shows diffusely heterogeneous myometrium without discrete nodules. Diagnosis:",
    "opts": ["Uterine fibroids", "Endometrial carcinoma", "Adenomyosis", "Endometrial polyps"],
    "ans": 2,
    "exp": "Adenomyosis: endometrial glands within myometrium causing a diffusely enlarged, tender, boggy uterus. Ten Teachers distinguishes adenomyosis from fibroids (A), which produce an irregularly lobulated uterus with discrete hypoechoic nodules on ultrasound."
  },
  {
    "num": 72,
    "q": "A 45-year-old man presents with RUQ pain, fever, and jaundice — Charcot's triad. This indicates:",
    "opts": [
      "Acute cholecystitis",
      "Ascending cholangitis",
      "Acute pancreatitis",
      "Hepatitis A"
    ],
    "ans": 1,
    "exp": "Charcot's triad (RUQ pain, fever, jaundice) = ascending cholangitis from CBD obstruction with secondary bacterial infection. It requires urgent IV antibiotics and biliary decompression via ERCP. Cholecystitis (A) has Murphy's sign but typically no jaundice."
  },
  {
    "num": 73,
    "q": "A 7-year-old: 6 months of bilateral hearing loss. Otoscopy shows intact tympanic membrane with a pearly white mass in the attic region. Diagnosis:",
    "opts": ["Otitis media with effusion", "Cholesteatoma", "Otosclerosis", "Acute otitis media"],
    "ans": 1,
    "exp": "A pearly white attic mass with conductive hearing loss and no discharge = cholesteatoma. Dhingra's identifies it as the 'dangerous' type of chronic ear disease, eroding ossicles and potentially the facial nerve canal. Mastoidectomy is required."
  },
  {
    "num": 74,
    "q": "A 3-year-old boy: sudden choking and right-sided wheeze during play with nuts, SpO₂ 91%. Most appropriate immediate management:",
    "opts": ["Salbutamol nebulisation", "Urgent rigid bronchoscopy", "Nebulised adrenaline", "IV antibiotics"],
    "ans": 1,
    "exp": "Foreign body aspiration: sudden choking with unilateral wheeze during eating; the right main bronchus is the most common site. Rigid bronchoscopy under GA is definitive for both diagnosis and removal."
  },
  {
    "num": 75,
    "q": "A 55-year-old man: 3 months of progressive hoarseness, non-smoker, immobile bowed right vocal cord with no visible laryngeal mass. Most important investigation:",
    "opts": ["Thyroid function tests", "CT from skull base to thorax", "Microlaryngoscopy and biopsy", "Barium swallow"],
    "ans": 1,
    "exp": "Unilateral vocal cord palsy without a laryngeal lesion = RLN compression along its course from skull base to mediastinum. CT from skull base to thorax traces the entire RLN and identifies the compressive lesion: malignancy, lymphadenopathy, or thyroid pathology."
  },
  {
    "num": 76,
    "q": "A 10-year-old with recurrent epistaxis always from one nostril, stopped by 5 minutes of pinching. Anterior rhinoscopy shows dilated vessels on the anterior nasal septum. This plexus is:",
    "opts": ["Woodruff's plexus", "Little's area", "Killian's dehiscence", "Onodi cell region"],
    "ans": 1,
    "exp": "Little's area on the anterior nasal septum is the most common site of epistaxis, supplied by branches of both internal and external carotid arteries. Woodruff's plexus (A) in the posterior nasal cavity causes posterior epistaxis in older adults."
  },
  {
    "num": 77,
    "q": "A 14-year-old boy: recurrent tonsillitis, snoring, and brief apnoeic episodes during sleep. Tonsils grade 3. Most appropriate treatment:",
    "opts": ["Long-term antibiotics", "Adenotonsillectomy", "Nasal corticosteroids only", "CPAP"],
    "ans": 1,
    "exp": "Grade 3 tonsillar hypertrophy with OSA is the strongest indication for adenotonsillectomy in children, as Dhingra's identifies. CPAP (D) is first-line for adult OSA but not for children with surgically correctable obstruction."
  },
  {
    "num": 78,
    "q": "A 40-year-old man: unilateral right nasal obstruction, blood-stained discharge, and a fleshy nasal mass for 3 months. He works in a furniture factory. Most important next step:",
    "opts": [
      "Nasal corticosteroids",
      "Urgent biopsy",
      "Septoplasty",
      "10-day amoxicillin course"
    ],
    "ans": 1,
    "exp": "Unilateral nasal mass with blood-stained discharge in a woodworker is a red flag for sinonasal adenocarcinoma, a recognised occupational cancer from hardwood dust; urgent biopsy is essential for any unilateral adult nasal mass."
  },
  {
    "num": 79,
    "q": "A 25-year-old man with symptomatic deviated nasal septum causing unilateral obstruction. Definitive treatment:",
    "opts": ["Antihistamines", "Septoplasty", "Turbinate reduction alone", "Intranasal corticosteroids"],
    "ans": 1,
    "exp": "Septoplasty is the definitive surgical correction of a deviated nasal septum, as Dhingra's describes. Antihistamines (A) and corticosteroids (D) treat allergic rhinitis. Turbinate reduction alone (C) does not address the underlying septal deviation."
  },
  {
    "num": 80,
    "q": "A 60-year-old man with poorly controlled diabetes: sudden painless left visual loss. Fundoscopy shows flame haemorrhages in all four quadrants, dilated tortuous veins, disc oedema. Diagnosis:",
    "opts": ["CRAO", "Diabetic maculopathy", "CRVO", "Acute angle-closure glaucoma"],
    "ans": 2,
    "exp": "The 'blood and thunder' fundus with haemorrhages in all four quadrants, dilated tortuous veins, and disc oedema = CRVO. CRAO (A) causes a pale ischaemic retina with a cherry red spot. ACAG (D) presents with a painful red eye and raised IOP. Parson's describes CRVO as occurring at the lamina cribrosa."
  },
  {
    "num": 81,
    "q": "A 5-year-old with leukocoria in the left eye in photographs. The left eye is slightly smaller. Ultrasound shows no intraocular calcification. Diagnosis:",
    "opts": ["Retinoblastoma", "Persistent fetal vasculature", "Congenital cataract", "Toxocara"],
    "ans": 1,
    "exp": "Leukocoria with microophthalmia and no calcification = persistent fetal vasculature (PFV). Retinoblastoma (A) causes leukocoria in a normal-sized eye with intraocular calcification on ultrasound, the key distinguishing feature."
  },
  {
    "num": 82,
    "q": "A 40-year-old woman: red, painful right eye, circumcorneal injection, small irregular pupil, photophobia, cells and flare in anterior chamber on slit lamp. Diagnosis:",
    "opts": ["Bacterial conjunctivitis", "Anterior uveitis", "Acute angle-closure glaucoma", "Episcleritis"],
    "ans": 1,
    "exp": "Anterior uveitis: circumcorneal injection, small irregular pupil (posterior synechiae), photophobia, and AC cells. Associated with HLA-B27 conditions. Ciliary injection differs from the diffuse superficial redness of conjunctivitis (A). ACAG (C) has a fixed mid-dilated pupil and raised IOP."
  },
  {
    "num": 83,
    "q": "A 25-year-old woman: sudden painful right visual loss, impaired colour vision, RAPD. Fundoscopy normal. She had right leg numbness 6 months ago that resolved. Diagnosis:",
    "opts": ["Retinal detachment", "Optic neuritis", "Cataract", "Vitreous haemorrhage"],
    "ans": 1,
    "exp": "Optic neuritis: painful visual loss, colour impairment, RAPD, normal fundus (retrobulbar). Parson's identifies optic neuritis as the most common acute optic nerve disease in young adults. A prior demyelinating episode strongly suggests multiple sclerosis."
  },
  {
    "num": 84,
    "q": "A 70-year-old woman: gradual painless bilateral central visual loss over 3 years. Fundoscopy shows drusen and pigmentary changes at both maculae. Peripheral vision preserved. Diagnosis:",
    "opts": ["Diabetic retinopathy", "Glaucoma", "AMD", "Cataract"],
    "ans": 2,
    "exp": "AMD: bilateral central visual loss, preserved peripheral vision, drusen, and macular pigmentary changes. Dry AMD shows drusen and geographic atrophy; wet AMD shows choroidal neovascularisation. Glaucoma (B) affects peripheral fields first."
  },
  {
    "num": 85,
    "q": "A 65-year-old man: sudden severe right eye pain, nausea, vomiting, halos around lights, hazy cornea, fixed mid-dilated pupil, IOP 58 mmHg. Diagnosis:",
    "opts": ["Anterior uveitis", "Bacterial conjunctivitis", "Acute angle-closure glaucoma", "Retinal detachment"],
    "ans": 2,
    "exp": "Acute angle-closure glaucoma: sudden eye pain, nausea, halos, hazy cornea, fixed mid-dilated pupil, and markedly raised IOP. Requires immediate IOP reduction with IV acetazolamide, topical beta-blocker, and pilocarpine, followed by laser iridotomy."
  },
  {
    "num": 86,
    "q": "A 35-year-old woman: watery itchy bilateral eyes every spring and summer for 4 years. Upper tarsal conjunctiva shows giant cobblestone papillae. Stringy mucous discharge. Diagnosis:",
    "opts": ["Bacterial conjunctivitis", "Vernal keratoconjunctivitis", "Dry eye syndrome", "Trachoma"],
    "ans": 1,
    "exp": "Vernal keratoconjunctivitis: seasonal bilateral allergic conjunctivitis with cobblestone giant papillae on the upper tarsal conjunctiva and stringy discharge. Parson's identifies VKC as a major cause of corneal scarring in South Asia. Trachoma (D) causes follicular conjunctivitis with scarring."
  },
  {
    "num": 87,
    "q": "A 55-year-old man, 30-pack-year smoker, presents with worsening exertional breathlessness, morning cough, and wheeze for 4 years. Post-bronchodilator FEV1/FVC = 0.60, FEV1 = 61% predicted. Diagnosis and GOLD stage:",
    "opts": [
      "Asthma; step up ICS",
      "COPD, GOLD Stage II",
      "COPD GOLD Stage III (Severe)",
      "Bronchiectasis"
    ],
    "ans": 1,
    "exp": "Post-bronchodilator FEV1/FVC <0.70 confirms COPD; FEV1 of 61% = GOLD Stage II (50-79%). Davidson's recommends long-acting bronchodilators (LABA or LAMA) as cornerstone therapy. GOLD III (C) requires FEV1 <50%."
  },
  {
    "num": 88,
    "q": "A 35-year-old man from Peshawar: 5 months of cough, night sweats, weight loss, haemoptysis. Sputum AFB smear positive ×2. CXR shows right upper lobe cavitation. Standard treatment regimen:",
    "opts": [
      "Isoniazid + rifampicin only",
      "2HRZE followed by 4HR",
      "Isoniazid alone for 9 months",
      "Azithromycin + ethambutol"
    ],
    "ans": 1,
    "exp": "WHO and Pakistan NTP standard regimen for smear-positive PTB: 2 months HRZE (intensive phase) followed by 4 months HR (continuation phase). DOT is essential for adherence. INH alone (C) is latent TB preventive therapy, not treatment."
  },
  {
    "num": 89,
    "q": "A 28-year-old asthmatic uses salbutamol 4-5 times per week with nocturnal symptoms twice weekly. FEV1 82% predicted with good reversibility. Not on any preventer. Next step:",
    "opts": [
      "Increase salbutamol only",
      "Add inhaled corticosteroid",
      "Start LABA alone",
      "Begin oral prednisolone"
    ],
    "ans": 1,
    "exp": "SABA use >2×/week = uncontrolled asthma requiring step-up to Step 2: regular low-dose ICS (beclomethasone or budesonide). ICS reduces airway inflammation and prevents exacerbations. LABA alone (C) is contraindicated in asthma without ICS."
  },
  {
    "num": 90,
    "q": "A 60-year-old COPD patient: ABG pH 7.30, PaO₂ 50 mmHg, PaCO₂ 64 mmHg, HCO₃ 31 mEq/L. Appropriate oxygen target:",
    "opts": [
      "94-98%; high-flow oxygen",
      "88-92%; controlled O₂",
      "100%; non-rebreather mask",
      "No oxygen needed"
    ],
    "ans": 1,
    "exp": "Type II respiratory failure with chronic CO₂ retention (elevated HCO₃ confirms chronic compensation). Hypoxia drives ventilation in these patients; high-flow O₂ (A) suppresses this drive and worsens hypercapnia. Target SpO₂ is 88-92%. Davidson's and BTS guidelines both emphasise controlled oxygen in COPD."
  },
  {
    "num": 91,
    "q": "A 45-year-old non-smoker woman keeps pet birds at home. 18 months of progressive breathlessness and dry cough. HRCT: bilateral upper lobe ground-glass opacities. Serum precipitins to avian proteins positive. Diagnosis:",
    "opts": [
      "IPF",
      "Sarcoidosis",
      "EAA",
      "Bronchiectasis"
    ],
    "ans": 2,
    "exp": "Bird fancier's lung is extrinsic allergic alveolitis from sensitisation to avian proteins. Upper lobe predominance, positive precipitins, and exposure history confirm it. IPF (A) shows basal honeycombing with a UIP pattern. Sarcoidosis (B) requires non-caseating granulomas on biopsy."
  },
  {
    "num": 92,
    "q": "A 35-year-old non-smoker woman: progressive breathlessness, dry cough. CXR shows bilateral hilar lymphadenopathy and reticular shadowing. Serum ACE elevated. Biopsy shows non-caseating granulomas. Diagnosis:",
    "opts": ["Pulmonary tuberculosis", "Sarcoidosis", "EAA", "Lymphoma"],
    "ans": 1,
    "exp": "Bilateral hilar lymphadenopathy, elevated ACE, and non-caseating granulomas = sarcoidosis. TB (A) produces caseating granulomas with AFB. EAA (C) requires antigen exposure history."
  },
  {
    "num": 93,
    "q": "A 50-year-old man, 7 days post-hip replacement, develops sudden breathlessness, right-sided pleuritic pain, haemoptysis, and a swollen right calf. SpO₂ 87%. Gold standard investigation:",
    "opts": [
      "CXR and D-dimer",
      "CT pulmonary angiography",
      "V/Q scan",
      "Echocardiography"
    ],
    "ans": 1,
    "exp": "Clinical PE after post-operative immobilisation. CTPA is the gold standard investigation, directly visualising pulmonary arterial thrombus. Davidson's recommends CTPA as first-line when PE probability is intermediate to high and the patient is stable enough."
  },
  {
    "num": 94,
    "q": "Persistent low mood, anhedonia, poor sleep, poor appetite, and fatigue lasting more than 2 weeks without any prior elevated mood episode. Diagnosis:",
    "opts": ["Bipolar disorder", "Major depressive disorder", "Dysthymia", "Adjustment disorder"],
    "ans": 1,
    "exp": "MDD requires >2 weeks of depressed mood or anhedonia plus associated symptoms. Bipolar (A) requires at least one manic or hypomanic episode. Dysthymia (C) is milder and lasts >2 years. Adjustment disorder (D) is linked to an identifiable stressor."
  },
  {
    "num": 95,
    "q": "Recurrent intrusive thoughts that drive repetitive behaviours to neutralise anxiety, recognised by the patient as irrational. This is:",
    "opts": ["Generalised anxiety disorder", "OCD", "Panic disorder", "Specific phobia"],
    "ans": 1,
    "exp": "OCD: ego-dystonic obsessions driving compulsions the patient recognises as irrational. GAD (A) involves pervasive worry without rituals. Panic disorder (C) involves discrete attacks without compulsive behaviour."
  },
  {
    "num": 96,
    "q": "Recurrent, unexpected episodes of intense fear with palpitations, breathlessness, and chest tightness peaking within minutes. Between episodes the patient fears having another attack. Diagnosis:",
    "opts": ["Generalised anxiety disorder", "Social anxiety disorder", "Panic disorder", "Acute stress reaction"],
    "ans": 2,
    "exp": "Panic disorder: recurrent unexpected panic attacks with autonomic symptoms, plus anticipatory anxiety between attacks. GAD (A) is chronic and pervasive without discrete episodes. Social anxiety (B) is triggered specifically by social evaluation."
  },
  {
    "num": 97,
    "q": "A 45-year-old man firmly believes his wife is poisoning his food despite all contrary evidence. This belief is fixed and unshakeable. He functions normally at work. This is best described as:",
    "opts": [
      "Obsession",
      "Auditory hallucination",
      "Persecutory delusion",
      "Illusion"
    ],
    "ans": 2,
    "exp": "A delusion is a fixed, false, unshakeable belief resistant to logic and evidence. The Shorter Oxford Textbook identifies persecutory delusions as the most common type in clinical practice. An obsession (A) is ego-dystonic; the patient recognises it as their own irrational thought."
  },
  {
    "num": 98,
    "q": "A 50-year-old chronic alcoholic: confusion, cerebellar ataxia, bilateral ophthalmoplegia. Diagnosis and immediate treatment:",
    "opts": [
      "Delirium tremens",
      "Korsakoff syndrome",
      "Wernicke encephalopathy",
      "Hepatic encephalopathy"
    ],
    "ans": 2,
    "exp": "Wernicke's triad of confusion, ataxia, and ophthalmoplegia defines a thiamine-deficiency emergency. IV thiamine must precede glucose (glucose without thiamine can precipitate acute decompensation). Untreated Wernicke's leads irreversibly to Korsakoff syndrome."
  },
  {
    "num": 99,
    "q": "A 38-year-old man: 3 days without sleep, pressured speech, grandiose delusions, reckless spending. A severe depressive episode 2 years ago. Diagnosis:",
    "opts": [
      "Unipolar depression",
      "Bipolar I disorder",
      "Schizoaffective disorder",
      "Cyclothymia"
    ],
    "ans": 1,
    "exp": "A full manic episode (decreased sleep, pressured speech, grandiosity, reckless behaviour) following a prior depressive episode meets Bipolar I criteria. Bipolar I requires at least one lifetime manic episode. Cyclothymia (D) involves only subthreshold mood swings."
  },
  {
    "num": 100,
    "q": "A 25-year-old male: 4 months of social withdrawal, academic decline, third-person auditory hallucinations, and thought broadcasting. No substance use. Diagnosis:",
    "opts": [
      "Bipolar disorder",
      "Brief psychotic disorder",
      "Schizophrenia",
      "Stimulant-induced psychosis"
    ],
    "ans": 2,
    "exp": "Third-person running commentary and thought broadcasting are Schneiderian first-rank symptoms. Combined with >1 month of active psychosis and months of social-occupational decline, this meets criteria for schizophrenia. Brief psychotic disorder (B) lasts <1 month."
  }
];
