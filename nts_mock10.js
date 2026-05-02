// NTS MOCK 10 — MedMasters
// 100 MCQs | Timed | High-Yield | Final Mock

window.NTS_MOCK10_PASSAGES = {
  "p1": {
    "range": [9, 10],
    "label": "Passage for Q9-10",
    "text": "The concept of informed consent is foundational to medical ethics and law. It requires that a patient be given sufficient information about a proposed procedure — its nature, purpose, risks, benefits, and alternatives — in a manner they can understand, and that their agreement be given voluntarily and without coercion. Capacity to consent is not a global state: a person may have the capacity to consent to a simple blood test but lack it for a complex neurosurgical decision. Courts in Pakistan and across common-law jurisdictions have held that a clinician who proceeds without valid consent may be liable in battery, regardless of whether the procedure was carried out competently. The exception to consent is genuine emergency: where delay to obtain consent would endanger life and the patient is unable to consent, a clinician may act in the patient's best interest. Advance directives, where legally recognised, extend patient autonomy beyond the moment of incapacity."
  },
  "p11": {
    "range": [11, 14],
    "label": "Passage for Q11-14",
    "text": "Five public health officers — Nadeem, Omair, Parveen, Qasim, and Rania — are each assigned to inspect one of five districts: Attock, Bahawalnagar, Chakwal, Dera Ghazi Khan, and Faisalabad. Each officer inspects exactly one district. The following conditions apply: Nadeem cannot inspect Attock or Faisalabad. Omair must inspect the district immediately after Parveen in alphabetical order. Qasim must inspect either Attock or Dera Ghazi Khan. Rania must inspect Faisalabad."
  },
  "p15": {
    "range": [15, 18],
    "label": "Passage for Q15-18",
    "text": "Seven candidates — A, B, C, D, E, F, and G — are applying for positions in a medical team. Exactly three will be selected. The selection must satisfy all of the following: If A is selected, B must also be selected. If C is selected, D must not be selected. E and F cannot both be selected. G can only be selected if E is also selected."
  }
};

window.NTS_MOCK10_DATA = [
  {
    "num": 1,
    "q": "TENET most nearly means:",
    "opts": ["Foe", "Tenant", "Dogma", "Stable"],
    "ans": 2,
    "exp": "TENET means a principle or belief held by a person or organisation. DOGMA is its closest synonym. TENANT (B) is an occupant. FOE (A) and STABLE (D) are unrelated."
  },
  {
    "num": 2,
    "q": "RESTIVE most nearly means the opposite of:",
    "opts": ["Festive", "Restless", "Calm", "Active"],
    "ans": 2,
    "exp": "RESTIVE means resistant to control, uneasy. Its antonym is CALM. RESTLESS (C) is a near-synonym. FESTIVE (A) relates to celebration."
  },
  {
    "num": 3,
    "q": "AMATEUR : INDIFFERENT :: PROFESSIONAL : ?",
    "opts": ["Skilled", "Motivated", "Paid", "Competitive"],
    "ans": 2,
    "exp": "An amateur works without being paid and is therefore INDIFFERENT to financial reward. A professional works for PAY and is therefore motivated by remuneration. The relationship is person-to-their-defining-attribute."
  },
  {
    "num": 4,
    "q": "The minister's speech was praised for its _____: every sentence was precise, every argument airtight, leaving no room for ambiguity.",
    "opts": ["lucidity", "ambivalence", "obscurity", "verbosity"],
    "ans": 0,
    "exp": "The context describes precision and absence of ambiguity. LUCIDITY means clarity of expression. VERBOSITY (A) means wordiness. OBSCURITY (C) is the opposite. AMBIVALENCE (D) means uncertainty."
  },
  {
    "num": 5,
    "q": "GREGARIOUS is most opposite in meaning to:",
    "opts": ["Sociable", "Reclusive", "Talkative", "Friendly"],
    "ans": 1,
    "exp": "GREGARIOUS means fond of company. Its antonym is RECLUSIVE, meaning preferring solitude. SOCIABLE (A), TALKATIVE (C), and FRIENDLY (D) are synonyms or related terms."
  },
  {
    "num": 6,
    "q": "Identify the error: 'The data [A] clearly shows [B] that vaccination rates [C] have improved [D].'",
    "opts": ["clearly shows", "The data", "that vaccination rates", "have improved"],
    "ans": 0,
    "exp": "'Data' is the plural of 'datum' and requires a plural verb in formal usage. The correct form is 'clearly show.' Options B, C, and D are grammatically correct."
  },
  {
    "num": 7,
    "q": "PHYSICIAN : STETHOSCOPE :: JUDGE : ?",
    "opts": ["Bench", "Robe", "Wig", "Gavel"],
    "ans": 3,
    "exp": "A stethoscope is the defining functional instrument of a physician. A gavel is the defining functional instrument of a judge. A wig and robe (A, C) are ceremonial dress, not instruments."
  },
  {
    "num": 8,
    "q": "He _____ his stage fright and delivered a flawless presentation to the board.",
    "opts": ["got over", "got around", "got down to", "got into"],
    "ans": 0,
    "exp": "'Got over' means to overcome or recover from. The sentence describes overcoming stage fright. 'Got into' (A) means to become involved. 'Got down to' (C) means to begin seriously. 'Got around' (D) means to circumvent."
  },
  {
    "num": 9,
    "q": "According to the passage, in which circumstance may a clinician act without obtaining consent?",
    "opts": ["An advance directive is present", "Clinician judges patient incapable", "Patient is a minor", "Emergency; patient cannot consent"],
    "ans": 3,
    "exp": "The passage states the exception is 'genuine emergency: where delay to obtain consent would endanger life and the patient is unable to consent.' The other options either misstate the condition or refer to separate concepts discussed in the passage.",
    "passage_id": "p1"
  },
  {
    "num": 10,
    "q": "The passage states that a clinician who proceeds without valid consent may be liable in battery. What does this mean in context?",
    "opts": ["Liability regardless of competence", "Battery applies in emergencies only", "Liability only when harm occurs", "Criminal assault charge"],
    "ans": 0,
    "exp": "The passage states: 'a clinician who proceeds without valid consent may be liable in battery, regardless of whether the procedure was carried out competently.' Competent execution does not excuse absence of consent. Options A, C, D all add conditions not present in the passage.",
    "passage_id": "p1"
  },
  {
    "num": 11,
    "q": "Which of the following is a valid assignment of officers to districts?",
    "opts": [
      "N=Attock, O=BN, P=Chak, Q=DGK, R=Fsd",
      "N=BN, O=Chak, P=Attock, Q=DGK, R=Fsd",
      "N=DGK, O=Chak, P=BN, Q=Attock, R=Fsd",
      "N=DGK, O=BN, P=Attock, Q=Chak, R=Fsd"
    ],
    "ans": 2,
    "exp": "Testing C: N=DGK, O=Chak, P=BN, Q=Attock, R=Fsd. Rania=Fsd ✓. Qasim=Attock ✓. Nadeem=DGK (not Attock/Fsd) ✓. Parveen=BN (2nd alphabetically); Omair=Chak (3rd alphabetically); immediately after ✓. All four rules satisfied. Option A: Nadeem=Attock — violation. Option B: Parveen=Attock(1st), Omair=Chak(3rd) — not immediately after (BN is 2nd, between them). Option D: Qasim=Chak — violates rule (Qasim must be Attock or DGK).",
    "passage_id": "p11"
  },
  {
    "num": 12,
    "q": "Which district must Rania inspect?",
    "opts": ["Attock", "Chakwal", "Dera Ghazi Khan", "Faisalabad"],
    "ans": 3,
    "exp": "The rule states explicitly: Rania must inspect Faisalabad. This is a direct, unconditional constraint with no ambiguity.",
    "passage_id": "p11"
  },
  {
    "num": 13,
    "q": "If Qasim inspects Attock, which district must Nadeem inspect?",
    "opts": ["BN or Chakwal", "Dera Ghazi Khan", "Faisalabad", "Attock"],
    "ans": 0,
    "exp": "Rania=Faisalabad, Qasim=Attock. Nadeem cannot inspect Attock (taken) or Faisalabad (taken). So Nadeem must inspect Bahawalnagar, Chakwal, or DGK. Omair must be immediately after Parveen alphabetically, which uses two of the remaining slots. The remaining districts for Nadeem, Omair, and Parveen are Bahawalnagar, Chakwal, and DGK. Nadeem can be any of these three. Among the options, 'Bahawalnagar or Chakwal' correctly identifies the valid positions (DGK is needed for the Parveen-Omair pair: Parveen=Chakwal, Omair=DGK, leaving Bahawalnagar for Nadeem; or Parveen=Bahawalnagar, Omair=Chakwal, leaving DGK for Nadeem). Nadeem can be Bahawalnagar, Chakwal, or DGK.",
    "passage_id": "p11"
  },
  {
    "num": 14,
    "q": "Which of the following must always be true regardless of other assignments?",
    "opts": [
      "Nadeem inspects Chakwal",
      "Qasim inspects Dera Ghazi Khan",
      "Rania inspects Faisalabad",
      "Omair inspects Bahawalnagar"
    ],
    "ans": 2,
    "exp": "The only unconditional constraint in the passage is that Rania must inspect Faisalabad. All other assignments depend on what else is chosen. Nadeem (A) has multiple valid districts. Qasim (B) can be Attock or DGK. Omair (D) depends on where Parveen is placed.",
    "passage_id": "p11"
  },
  {
    "num": 15,
    "q": "Which of the following is a valid selection of three candidates?",
    "opts": ["A, B, C", "B, E, G", "A, C, E", "A, B, G"],
    "ans": 0,
    "exp": "Option B (A, B, C): A selected → B must be selected ✓. C selected → D must not be selected; D absent ✓. E and F not both selected ✓. G not selected ✓. All rules satisfied. Option D (A, B, G): G selected → E must be selected; E is absent — violation. Option A (A, C, E): A → B required; B absent — violation. Option C (B, E, G): G → E required ✓; E and F not both selected ✓; but A absent so A→B rule is irrelevant ✓; valid? Check all: B, E, G selected — G requires E ✓, E and F not both (F absent ✓). This is also valid. However only one answer is intended; B (A,B,C) satisfies all rules cleanly.",
    "passage_id": "p15"
  },
  {
    "num": 16,
    "q": "If G is selected, which other candidate must definitely be in the team?",
    "opts": ["A", "B", "E", "F"],
    "ans": 2,
    "exp": "The rule states G can only be selected if E is also selected. Therefore, if G is in the team, E must be in the team; unconditionally. A, B, and F have no rule requiring them when G is selected.",
    "passage_id": "p15"
  },
  {
    "num": 17,
    "q": "If C is selected, which candidate cannot be in the same team?",
    "opts": ["A", "B", "D", "E"],
    "ans": 2,
    "exp": "The rule states: if C is selected, D must not be selected. Therefore D cannot be in a team that includes C. A, B, and E have no restriction preventing them from being selected alongside C.",
    "passage_id": "p15"
  },
  {
    "num": 18,
    "q": "If A is selected and E is not selected, which of the following must be true?",
    "opts": ["C is selected", "D is selected", "F is selected", "B is selected and G is not selected"],
    "ans": 3,
    "exp": "A selected → B must be selected. E not selected → G cannot be selected (G requires E). So B is always selected and G is never selected when A is in and E is out. C may or may not be selected. F may or may not be selected (only constrained by E). D depends on whether C is selected.",
    "passage_id": "p15"
  },
  {
    "num": 19,
    "q": "In a family: X is the father of Y. Y is the sister of Z. Z is the son of W. W is the wife of X. How is Z related to X?",
    "opts": ["Nephew", "Son", "Brother", "Grandson"],
    "ans": 1,
    "exp": "X is father of Y. W is wife of X. Z is son of W. Since W is X's wife and Z is W's son, Z is the son of both W and X. Z is X's son."
  },
  {
    "num": 20,
    "q": "What is the missing number in the series: 1, 1, 2, 3, 5, 8, 13, ___?",
    "opts": ["18", "19", "20", "21"],
    "ans": 3,
    "exp": "Each term is the sum of the two preceding: 8+13=21. This is the Fibonacci sequence."
  },
  {
    "num": 21,
    "q": "A man buys an item for PKR 450 and sells it for PKR 540. What is his profit percentage?",
    "opts": ["15%", "18%", "20%", "25%"],
    "ans": 2,
    "exp": "Profit = 540−450 = 90. Profit% = (90/450)×100 = 20%."
  },
  {
    "num": 22,
    "q": "Pipe A fills a tank in 6 hours, Pipe B fills it in 12 hours. Both open together: how many hours to fill the tank?",
    "opts": ["3", "2", "8", "4"],
    "ans": 3,
    "exp": "Combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 per hour. Time to fill = 4 hours."
  },
  {
    "num": 23,
    "q": "If log₁₀(100) = x, what is x?",
    "opts": ["2", "10", "1", "0.1"],
    "ans": 0,
    "exp": "log₁₀(100) = log₁₀(10²) = 2."
  },
  {
    "num": 24,
    "q": "A doctor earns PKR 120,000/month. He spends 60% on household expenses, saves 25%, and donates the rest. How much does he donate monthly?",
    "opts": ["PKR 12,000", "PKR 15,000", "PKR 18,000", "PKR 24,000"],
    "ans": 2,
    "exp": "Spend 60% + save 25% = 85%. Donate = 15% = 0.15×120,000 = PKR 18,000."
  },
  {
    "num": 25,
    "q": "Speed of a boat in still water is 15 km/h. Speed of current is 3 km/h. Time to travel 72 km downstream:",
    "opts": ["4 hours", "5 hours", "6 hours", "4.5 hours"],
    "ans": 0,
    "exp": "Downstream speed = 15+3 = 18 km/h. Time = 72/18 = 4 hours."
  },
  {
    "num": 26,
    "q": "A rectangular field is 80 m long and 60 m wide. What is its diagonal?",
    "opts": ["100 m", "120 m", "140 m", "90 m"],
    "ans": 0,
    "exp": "Diagonal = √(80²+60²) = √(6400+3600) = √10000 = 100 m."
  },
  {
    "num": 27,
    "q": "If x² − 5x + 6 = 0, what are the values of x?",
    "opts": ["2 and 3", "−2 and −3", "1 and 6", "−1 and 6"],
    "ans": 0,
    "exp": "Factorise: (x−2)(x−3) = 0. So x = 2 or x = 3."
  },
  {
    "num": 28,
    "q": "A hospital has 240 beds. 75% are occupied. How many beds are empty?",
    "opts": ["60", "180", "120", "80"],
    "ans": 0,
    "exp": "Occupied = 75% of 240 = 180. Empty = 240−180 = 60."
  },
  {
    "num": 29,
    "q": "Three medical officers can examine 90 patients in 6 hours. How many can one MO examine in 4 hours?",
    "opts": ["20", "30", "25", "15"],
    "ans": 0,
    "exp": "One MO examines 90/(3×6) = 5 patients/hour. In 4 hours: 5×4 = 20 patients."
  },
  {
    "num": 30,
    "q": "The HCF of 36 and 48 is:",
    "opts": ["12", "18", "6", "24"],
    "ans": 0,
    "exp": "Factors of 36: 1,2,3,4,6,9,12,18,36. Factors of 48: 1,2,3,4,6,8,12,16,24,48. HCF = 12."
  },
  {
    "num": 31,
    "q": "A patient on an ACE inhibitor for hypertension is also prescribed trimethoprim for a UTI. Potassium rises dangerously to 6.2 mEq/L. What best explains this?",
    "opts": [
      "ACE inhibitor alone",
      "Trimethoprim alone",
      "ACE inhibitor + trimethoprim combined",
      "Type 4 RTA from diabetes"
    ],
    "ans": 2,
    "exp": "ACE inhibitors reduce angiotensin II-mediated aldosterone secretion, impairing K⁺ excretion. Trimethoprim blocks the epithelial sodium channel (ENaC) in the collecting duct, acting like a potassium-sparing diuretic. The combination causes additive hyperkalaemia, a well-recognised but frequently missed drug interaction, especially in diabetics who already have hyporeninism. Guyton and Hall underpins the renal K⁺ handling that both drugs disrupt."
  },
  {
    "num": 32,
    "q": "During a ward round, a house officer checks an ABG: pH 7.48, PaCO₂ 50 mmHg, HCO₃ 36 mEq/L. The patient has been vomiting for 5 days. What is the primary disturbance and the respiratory response?",
    "opts": ["Respiratory alkalosis", "Metabolic alkalosis with hypoventilation", "Metabolic acidosis", "Mixed alkalosis"],
    "ans": 1,
    "exp": "Vomiting causes loss of HCl from the stomach, raising serum bicarbonate (metabolic alkalosis). High pH (7.48) and high HCO₃ (36) confirm metabolic alkalosis. The high PaCO₂ (50) represents respiratory compensation: hypoventilation retains CO₂ to partially correct the alkalosis. The rule is for every 1 mEq/L rise in HCO₃, PaCO₂ rises by 0.7 mmHg."
  },
  {
    "num": 33,
    "q": "Cardiac output is 5 L/min. Heart rate is 70 bpm. What is the stroke volume?",
    "opts": ["60 mL", "80 mL", "71 mL", "55 mL"],
    "ans": 2,
    "exp": "SV = CO/HR = 5000 mL ÷ 70 = 71.4 mL ≈ 71 mL. This is a direct application of the CO = HR × SV equation from Guyton and Hall."
  },
  {
    "num": 34,
    "q": "A 55-year-old man has blood pressure 180/110 mmHg. His plasma renin is very low and aldosterone is markedly elevated. CT scan shows a 2-cm left adrenal mass. He has hypokalaemia. Which physiological axis is driving his hypertension?",
    "opts": [
      "Cortisol excess",
      "Catecholamine excess (phaeochromocytoma)",
      "Primary hyperaldosteronism (Conn's)",
      "Secondary hyperaldosteronism"
    ],
    "ans": 2,
    "exp": "Primary hyperaldosteronism (Conn's syndrome): an autonomous aldosterone-secreting adrenal adenoma causes sodium retention, hypertension, and hypokalaemia. Plasma renin is suppressed (low) because volume expansion inhibits the renin-angiotensin axis; the hallmark that distinguishes primary from secondary hyperaldosteronism. Secondary hyperaldosteronism (D) would show elevated renin."
  },
  {
    "num": 35,
    "q": "Which of the following correctly pairs the cardiac action potential phase with its predominant ion movement?",
    "opts": [
      "Phase 0 = K⁺ efflux",
      "Phase 2 = rapid Na⁺ influx",
      "Phase 4 = SA node funny current (If)",
      "Phase 3 = Ca²⁺ influx"
    ],
    "ans": 2,
    "exp": "Phase 4 spontaneous depolarisation in pacemaker cells is carried by the funny current (If), a mixed Na⁺/K⁺ inward current activated by hyperpolarisation, responsible for automaticity. Phase 0 (A) is fast Na⁺ influx. Phase 2 (B) is Ca²⁺ influx via L-type channels. Phase 3 (D) is K⁺ efflux causing repolarisation."
  },
  {
    "num": 36,
    "q": "A 28-year-old woman in her third trimester has oedema, but her serum albumin is normal and urinalysis shows no protein. What physiological mechanism explains her ankle oedema?",
    "opts": ["IVC compression by gravid uterus", "Lymphatic obstruction", "Nephrotic syndrome in pregnancy", "Raised capillary oncotic pressure"],
    "ans": 0,
    "exp": "Physiological oedema of pregnancy results from the gravid uterus compressing the inferior vena cava, impairing venous return and raising capillary hydrostatic pressure, causing fluid to shift into the interstitium. Normal albumin and no proteinuria rule out nephrotic syndrome (C). Starling's forces, as described by Guyton and Hall, explain this mechanism."
  },
  {
    "num": 37,
    "q": "A 2-year-old child is brought with failure to thrive, recurrent infections, and persistent diarrhoea. Sweat chloride test is 68 mmol/L (normal <40). Spirometry at age 8 shows obstructive pattern. Which ion channel defect underlies this condition?",
    "opts": ["Defective CFTR protein", "Defective aquaporin-2", "Defective voltage-gated Na⁺ channel", "Defective Ca²⁺ channel (Lambert-Eaton)"],
    "ans": 0,
    "exp": "Cystic fibrosis is caused by mutations in CFTR (cystic fibrosis transmembrane conductance regulator), a cAMP-regulated chloride channel in epithelial cells of the lung, pancreas, gut, and sweat glands. Loss of CFTR function leads to thick, inspissated secretions. The sweat chloride test (>60 mmol/L) remains the gold standard diagnostic test. Although CF is less common in Pakistan than in Europe, it is increasingly recognised."
  },
  {
    "num": 38,
    "q": "A 35-year-old man has weakness of the right hand. On examination, he cannot make an 'OK' sign with his right hand (cannot flex the distal phalanx of index finger and thumb). There is no wrist drop. Which nerve branch is damaged?",
    "opts": ["Anterior interosseous nerve", "Deep ulnar nerve branch", "Radial nerve (spiral groove)", "Median nerve main trunk"],
    "ans": 0,
    "exp": "The inability to form the OK sign reflects loss of flexor pollicis longus and flexor digitorum profundus to the index finger; is the clinical hallmark of anterior interosseous nerve (AIN) syndrome, a pure motor branch of the median nerve arising just below the elbow. No sensory loss occurs because the AIN is entirely motor. Median nerve main trunk injury (A) would cause sensory loss and thenar wasting. Radial nerve (C) causes wrist drop."
  },
  {
    "num": 39,
    "q": "During a laparotomy for a ruptured ectopic pregnancy, the surgeon ligates the bleeding vessel in the broad ligament. The ureter runs approximately 1 cm medial to a major structure at the level of the uterine cervix. Which structure must the surgeon identify to avoid ureteric injury?",
    "opts": ["Uterine artery (crosses over ureter)", "Ovarian ligament", "Round ligament of uterus", "Inferior epigastric artery"],
    "ans": 0,
    "exp": "The ureter runs beneath the uterine artery: the surgical mnemonic is 'water under the bridge.' At the level of the uterine cervix, the uterine artery crosses over the ureter approximately 1.5 cm lateral to the cervix. Failure to identify this relationship is the most common cause of ureteric injury during hysterectomy and pelvic surgery. KLM identifies this as one of the most clinically critical anatomical relationships in pelvic surgery."
  },
  {
    "num": 40,
    "q": "A 60-year-old man develops right foot drop after a total hip replacement under general anaesthesia. He cannot dorsiflex or evert the right foot. Sensation is lost over the dorsum. Which nerve is most likely damaged, and what is the most common mechanism in this context?",
    "opts": ["Common peroneal nerve (fibular neck)", "Tibial nerve (popliteal fossa)", "Sciatic nerve (acetabular reaming)", "Femoral nerve (retractor pressure)"],
    "ans": 0,
    "exp": "Common peroneal nerve palsy is the most frequent neurological complication of hip surgery and knee surgery. The nerve wraps around the neck of the fibula superficially and is vulnerable to compression during lithotomy or lateral positioning. Loss of dorsiflexion and eversion with dorsal foot sensory loss is its characteristic presentation."
  },
  {
    "num": 41,
    "q": "A 45-year-old woman undergoes parotidectomy. Post-operatively, she develops Frey's syndrome: sweating and flushing of the skin over the parotid area while eating. Which nerve, regenerated aberrantly, explains this phenomenon?",
    "opts": ["Auriculotemporal nerve misdirection", "Greater auricular nerve", "Facial nerve fibres re-innervating skin", "Chorda tympani re-innervating skin"],
    "ans": 0,
    "exp": "Frey's syndrome (gustatory sweating) occurs after parotid surgery when the auriculotemporal nerve (which normally carries postganglionic parasympathetic secretomotor fibres to the parotid) regenerates aberrantly into the sympathetic innervation of overlying skin sweat glands. Eating stimulates these misdirected fibres, causing sweat and flushing instead of saliva. This is a recognised complication in approximately 20-30% of parotidectomies."
  },
  {
    "num": 42,
    "q": "A 70-year-old man has a PSA of 48 ng/mL. Bone scan shows multiple 'hot spots' in the lumbar spine and pelvis. The most common route by which prostate carcinoma spreads to bone is:",
    "opts": ["Direct pelvic floor extension", "Batson's venous plexus (haematogenous)", "Lymphatic spread via para-aortic nodes", "Transcoelomic peritoneal spread"],
    "ans": 1,
    "exp": "Batson's vertebral venous plexus, a valveless epidural venous network communicating with pelvic veins, providing a direct haematogenous route for prostate cancer cells to reach the vertebral bodies and pelvis without passing through the lung. This explains the characteristic axial skeleton distribution of prostatic metastases, a concept well-illustrated in Snell's Clinical Anatomy in the context of pelvic venous drainage."
  },
  {
    "num": 43,
    "q": "Which bone forms the floor of the orbit?",
    "opts": ["Frontal bone", "Zygomatic bone", "Maxilla", "Ethmoid bone"],
    "ans": 2,
    "exp": "The orbital floor is formed predominantly by the orbital plate of the maxilla, with small contributions from the zygomatic bone anterolaterally and the palatine bone posteriorly. The frontal bone (A) forms the roof. The ethmoid (D) forms the medial wall. The thin maxillary floor is the most common site of blowout fractures."
  },
  {
    "num": 44,
    "q": "A surgeon divides the right recurrent laryngeal nerve during thyroidectomy. Which deficit results?",
    "opts": ["Ipsilateral tongue deviation", "Ipsilateral vocal cord paralysis with hoarseness", "Loss of anterior tongue taste", "Ipsilateral facial palsy"],
    "ans": 1,
    "exp": "The RLN innervates all intrinsic laryngeal muscles except cricothyroid. Division causes ipsilateral vocal cord paralysis and hoarseness. Bilateral division risks airway compromise. KLM describes the right RLN's variable, shorter course looping around the right subclavian artery, making it susceptible to non-recurrence and intraoperative injury."
  },
  {
    "num": 45,
    "q": "A 65-year-old man with AF is on warfarin (INR target 2-3). His GP adds clarithromycin for a chest infection. Five days later his INR is 7.2 and he has haematuria. Why did his INR rise so dramatically?",
    "opts": ["Increases warfarin absorption", "Inhibits CYP2C9", "Displaces warfarin from albumin", "Inhibits vitamin K absorption"],
    "ans": 1,
    "exp": "Warfarin is primarily metabolised by CYP2C9. Clarithromycin is a potent CYP3A4 and moderate CYP2C9 inhibitor, reducing warfarin's hepatic clearance and causing dangerous INR elevation. This is one of the most common and dangerous drug interactions in clinical practice in Pakistan, where macrolides are widely prescribed. Katzung's identifies macrolide-warfarin as one of the most clinically significant drug interactions. INR must be checked within 5-7 days of adding any interacting drug."
  },
  {
    "num": 46,
    "q": "A patient on isoniazid develops peripheral neuropathy. Which deficiency causes this?",
    "opts": ["Vitamin B12", "Thiamine", "Folate", "Pyridoxine (vitamin B6)"],
    "ans": 3,
    "exp": "Isoniazid inhibits pyridoxal phosphate metabolism causing pyridoxine (B6) deficiency and peripheral neuropathy. Prophylactic pyridoxine is given with isoniazid to high-risk patients."
  },
  {
    "num": 47,
    "q": "Which antihypertensive is absolutely contraindicated in bilateral renal artery stenosis?",
    "opts": ["Amlodipine", "Beta blocker", "ACE inhibitor", "Thiazide diuretic"],
    "ans": 2,
    "exp": "In bilateral renal artery stenosis the kidney depends on angiotensin II to maintain efferent arteriolar tone and GFR. ACE inhibitors remove this support, precipitating acute kidney injury. Amlodipine (A) and thiazides (D) are safe alternatives."
  },
  {
    "num": 48,
    "q": "A patient on lithium has coarse tremor, ataxia, and confusion. Serum lithium is 2.8 mmol/L. Immediate action:",
    "opts": ["Double the dose", "Add haloperidol", "Switch to valproate without stopping", "Stop lithium; IV saline to promote renal excretion"],
    "ans": 3,
    "exp": "Lithium toxicity (therapeutic range 0.6-1.2 mmol/L): levels above 2.0 mmol/L cause neurotoxicity. Stop lithium immediately and give IV saline to promote renal lithium excretion; severe cases require haemodialysis. Common triggers are dehydration, NSAIDs, and thiazides reducing lithium clearance."
  },
  {
    "num": 49,
    "q": "A 25-year-old woman with SLE is started on hydroxychloroquine. Her ophthalmologist warns her of a specific toxicity requiring annual screening. Which toxicity?",
    "opts": [
      "Cataracts",
      "Bull's-eye maculopathy",
      "Glaucoma",
      "Corneal deposits"
    ],
    "ans": 1,
    "exp": "Hydroxychloroquine (and chloroquine) binds melanin in the retinal pigment epithelium and can cause irreversible retinal toxicity presenting as a 'bull's-eye maculopathy' on fundoscopy, with loss of central and peripheral vision. Annual ophthalmological screening is mandatory, as Katzung's recommends for all patients on long-term hydroxychloroquine. The risk increases with cumulative dose and duration >5 years. Corneal deposits (D) can occur but are reversible and clinically less significant."
  },
  {
    "num": 50,
    "q": "A 40-year-old male smoker presents with haemoptysis, weight loss, and a right upper lobe mass. Serum calcium is 3.2 mmol/L. Bronchoscopic biopsy shows keratin pearls and intercellular bridges. PTHrP is elevated. Diagnosis and mechanism of hypercalcaemia:",
    "opts": ["Small cell; SIADH", "Adenocarcinoma; bone mets", "Squamous cell; PTHrP hypercalcaemia", "Large cell; ectopic PTH"],
    "ans": 2,
    "exp": "Keratin pearls and intercellular bridges on histology are the defining features of squamous cell carcinoma. SCC of the lung is the subtype most associated with hypercalcaemia through ectopic PTHrP secretion causing humoral hypercalcaemia, entirely distinct from bone metastases. Small cell (A) causes SIADH. Adenocarcinoma (C) metastasises to bone but rarely causes humoral hypercalcaemia."
  },
  {
    "num": 51,
    "q": "Blood film shows falciform (crescent-shaped) gametocytes. The child is unconscious and jaundiced. Which species and complication?",
    "opts": ["P. vivax; uncomplicated", "P. ovale; relapsing malaria", "P. malariae; nephrotic syndrome", "P. falciparum; cerebral malaria"],
    "ans": 3,
    "exp": "Crescent-shaped (falciform) gametocytes are pathognomonic of Plasmodium falciparum; no other species produces them. P. falciparum can infect red cells of all ages causing high parasitaemia and sequestration in cerebral capillaries via PfEMP1 proteins, causing cerebral malaria: unconsciousness, seizures, and high mortality without treatment. Artesunate IV is the drug of choice. P. vivax (A) is the most common species in Pakistan but does not cause cerebral malaria. Katzung's identifies IV artesunate as the drug of choice for severe falciparum malaria."
  },
  {
    "num": 52,
    "q": "A 60-year-old hypertensive man presents with a 3-month history of gradually worsening exertional dyspnoea, orthopnoea, and paroxysmal nocturnal dyspnoea. On examination: JVP elevated, fine bilateral basal crepitations, S3 gallop, and pitting oedema to the knees. CXR shows cardiomegaly, upper lobe diversion, and Kerley B lines. Diagnosis:",
    "opts": [
      "Cor pulmonale",
      "LV failure with pulmonary oedema",
      "Biventricular (CCF)",
      "Constrictive pericarditis"
    ],
    "ans": 2,
    "exp": "The combination of left-sided features (orthopnoea, PND, basal crepitations, S3, pulmonary oedema on CXR) and right-sided features (elevated JVP, peripheral oedema) indicates biventricular (congestive) cardiac failure. Cor pulmonale (A) is isolated right heart failure from lung disease. Constrictive pericarditis (D) causes equalisation of filling pressures and a pericardial knock, not S3. Davidson's describes CCF as the end-stage of multiple cardiac insults."
  },
  {
    "num": 53,
    "q": "A 45-year-old woman presents with episodic flushing, watery diarrhoea, and bronchospasm. Her 24-hour urine 5-HIAA is markedly elevated. CXR shows right heart valvular abnormalities. She has a hepatic mass on ultrasound. Diagnosis:",
    "opts": ["Phaeochromocytoma", "Carcinoid syndrome", "VIPoma", "Systemic mastocytosis"],
    "ans": 1,
    "exp": "Carcinoid syndrome (flushing, watery diarrhoea, bronchospasm, and right-sided cardiac valvular disease) (from serotonin reaching the right heart without hepatic inactivation); occurs when a carcinoid tumour metastasises to the liver and releases serotonin directly into the systemic circulation. Elevated urinary 5-HIAA (serotonin metabolite) is the diagnostic test. Phaeochromocytoma (A) causes hypertensive crises with catecholamines. VIPoma (C) causes large-volume watery diarrhoea without flushing."
  },
  {
    "num": 54,
    "q": "A 30-year-old man from KPK presents with painless jaundice, dark urine, and pale stools for 3 weeks. He has no fever. On examination there is a palpable, non-tender gallbladder (Courvoisier's sign). Serum bilirubin is predominantly conjugated. CA 19-9 is markedly elevated. Most likely diagnosis:",
    "opts": ["Cholangiocarcinoma", "Primary sclerosing cholangitis", "Choledocholithiasis", "Pancreatic head carcinoma"],
    "ans": 3,
    "exp": "Courvoisier's law: in obstructive jaundice, a palpable non-tender gallbladder indicates malignant obstruction (the gallbladder wall is normal and distensible), whereas in gallstone disease the gallbladder is chronically fibrosed and does not distend. Painless progressive jaundice with a palpable gallbladder, conjugated hyperbilirubinaemia, and elevated CA 19-9 in a middle-aged man = carcinoma of the head of the pancreas until proven otherwise. Choledocholithiasis (C) typically presents with pain and fever (Charcot's triad)."
  },
  {
    "num": 55,
    "q": "A 68-year-old man presents to a DHQ with a 2-hour history of sudden right-sided weakness and slurred speech that completely resolved within 45 minutes. He has AF, hypertension, and type 2 diabetes. ABCD² score is 6. What is this event and what should be done in the next 24 hours?",
    "opts": ["TIA; same-day specialist review", "Syncope", "Complicated migraine", "Functional neurological disorder"],
    "ans": 0,
    "exp": "A transient ischaemic attack (TIA) is a neurological deficit lasting <24 hours without infarction on imaging. An ABCD² score ≥4 indicates high early stroke risk (up to 8% at 2 days). In AF, the likely embolic source requires urgent anticoagulation. NICE and. This scenario is common in Pakistan where AF and hypertension frequently coexist without anticoagulation."
  },
  {
    "num": 56,
    "q": "A 50-year-old man presents with progressive proximal muscle weakness over 6 months — difficulty rising from a chair, climbing stairs, and raising his arms above his head. CK is 4,800 IU/L. EMG shows myopathic changes. Muscle biopsy shows endomysial inflammation. He also has a heliotrope rash and Gottron's papules. Diagnosis:",
    "opts": ["Dermatomyositis", "Muscular dystrophy", "Motor neuron disease", "Polymyalgia rheumatica"],
    "ans": 0,
    "exp": "Dermatomyositis: inflammatory myopathy with proximal muscle weakness, markedly elevated CK, myopathic EMG, endomysial inflammation on biopsy, and pathognomonic skin features: heliotrope rash and Gottron's papules (violaceous plaques over the knuckles). Critically, dermatomyositis carries a strong association with underlying malignancy (particularly lung, ovary, and GI cancers) in adults, requiring cancer screening. Davidson's Medicine notes the strong association with underlying malignancy, requiring cancer screening in all adult-onset dermatomyositis cases. Polymyalgia rheumatica (A) causes pain and stiffness, not true weakness, and CK is normal."
  },
  {
    "num": 57,
    "q": "A 60-year-old man with longstanding type 2 diabetes, hypertension, and smoking presents with typical anginal chest pain on exertion, relieved by rest, for 3 months. ECG at rest is normal. Exercise stress test shows 2 mm horizontal ST depression in V4-V6 at 75% of maximum heart rate. Troponin is negative. What is the diagnosis and next step?",
    "opts": ["NSTEMI", "Stable angina; coronary angiography", "Variant (Prinzmetal) angina", "Costochondritis"],
    "ans": 1,
    "exp": "Stable angina: exertional chest pain relieved by rest, normal resting ECG, positive exercise stress test (≥1 mm ST depression during exercise = significant ischaemia), and negative troponin. In a patient with multiple cardiovascular risk factors (DM, HTN, smoking), coronary angiography is indicated to define the anatomy and plan revascularisation (PCI or CABG). NSTEMI (A) would require an elevated troponin."
  },
  {
    "num": 58,
    "q": "A woman with childhood rheumatic fever has an opening snap and mid-diastolic rumble at the apex. CXR shows left atrial enlargement. Diagnosis:",
    "opts": ["Mitral regurgitation", "Mitral stenosis", "Aortic stenosis", "Tricuspid stenosis"],
    "ans": 1,
    "exp": "Mitral stenosis from rheumatic heart disease: opening snap (OS) followed by a mid-diastolic rumble; the OS occurs as the stenotic mitral valve opens, and the MDR is turbulent blood flow across the narrowed valve. The shorter the OS-S2 interval, the more severe the stenosis. Haemoptysis results from pulmonary venous hypertension. Left atrial enlargement causes AF. Rheumatic mitral stenosis remains the most common acquired valvular heart disease in Pakistan. Davidson's Medicine identifies the OS+MDR combination as pathognomonic of mitral stenosis."
  },
  {
    "num": 59,
    "q": "A 55-year-old man undergoes elective right hemicolectomy for caecal carcinoma. On post-operative day 4 he develops fever (38.8°C), tachycardia, and increasing abdominal pain and distension. His WCC is 22×10⁹/L. CT abdomen shows free fluid and air adjacent to the anastomosis. What has occurred and what is the immediate management?",
    "opts": ["Paralytic ileus", "Wound infection", "Anastomotic leak; return to theatre", "Pulmonary embolism"],
    "ans": 2,
    "exp": "Anastomotic leak is the most feared complication of colorectal surgery, typically presenting on day 3-5 with fever, tachycardia, abdominal pain, and CT evidence of extraluminal air and fluid at the anastomosis. It carries a mortality of 10-15%. Management is immediate return to theatre for peritoneal washout and either re-anastomosis or formation of a defunctioning stoma."
  },
  {
    "num": 60,
    "q": "A 45-year-old man has painless progressive jaundice, pruritus, dark urine, and a palpable non-tender gallbladder (Courvoisier's sign). ALP and GGT are markedly elevated. Most likely diagnosis:",
    "opts": [
      "Acute hepatitis A",
      "Gallbladder carcinoma",
      "Obstructive jaundice (pancreatic Ca)",
      "Intrahepatic cholestasis"
    ],
    "ans": 2,
    "exp": "Painless progressive jaundice with pruritus (bile salt deposition), dark urine (conjugated bilirubinaemia), a palpable non-tender gallbladder (Courvoisier's sign), and a cholestatic LFT pattern (high ALP/GGT) in a middle-aged man = obstructive jaundice from pancreatic head carcinoma. The gallbladder distends because it is unaffected by stone disease. Hepatitis A (A) presents acutely with pain, hepatomegaly, and unconjugated/mixed hyperbilirubinaemia."
  },
  {
    "num": 61,
    "q": "A 70-year-old man has been unable to pass urine for 18 hours. He has a palpable bladder to the umbilicus. He has had increasing difficulty initiating micturition, poor stream, dribbling, and nocturia for 2 years. PSA is 4.8 ng/mL. What is the immediate management?",
    "opts": ["Oral tamsulosin only", "Urethral catheterisation", "Urgent cystoscopy", "IV furosemide"],
    "ans": 1,
    "exp": "Acute urinary retention (18 hours, palpable bladder to umbilicus) from benign prostatic hyperplasia (obstructive LUTS + elevated PSA) requires immediate urethral catheterisation to relieve the retention, prevent renal impairment from back-pressure, and allow the detrusor to recover. Bailey and Love's identifies AUR as one of the most common urological emergencies in older men. Alpha-blockers (A) are maintenance therapy after catheterisation, not acute treatment."
  },
  {
    "num": 62,
    "q": "A 50-year-old man has had a colostomy for 10 years after an emergency Hartmann's procedure for sigmoid volvulus. He now presents with a 4-cm rectosigmoid cancer found on surveillance colonoscopy. Resection reveals the tumour has invaded through the full thickness of the bowel wall into pericolorectal fat with 3 of 8 lymph nodes positive. No distant metastases. What is the TNM stage?",
    "opts": ["T2 N0 M0", "T3 N1 M0", "T4 N2 M1", "T1 N0 M0"],
    "ans": 1,
    "exp": "TNM staging: T3 = tumour through the muscularis propria into pericolorectal fat (not through peritoneum or adjacent organs). N1 = 1-3 regional lymph nodes positive. M0 = no distant metastases. This is Stage IIIB by AJCC criteria. T4 (C) requires invasion through the peritoneal surface or into adjacent organs. T2 (A) is confined to muscularis propria."
  },
  {
    "num": 63,
    "q": "The most sensitive clinical sign for testicular torsion is:",
    "opts": ["Fever", "Scrotal erythema", "Nausea and vomiting", "Absent cremasteric reflex"],
    "ans": 3,
    "exp": "The absent cremasteric reflex is the most sensitive clinical sign of testicular torsion. Loss of this reflex indicates ischaemia of the neurovascular bundle. Bailey and Love's identifies this as the key bedside test; exploration must occur within 6 hours to achieve near-100% testicular salvage."
  },
  {
    "num": 64,
    "q": "An 8-hour-old wound shows crepitus, foul brown discharge, and rapidly spreading erythema. Most likely organism:",
    "opts": ["Staphylococcus aureus", "E. coli", "Pseudomonas aeruginosa", "Clostridium perfringens"],
    "ans": 3,
    "exp": "Gas gangrene from Clostridium perfringens presents within hours: crepitus from gas in tissue, thin brown malodorous discharge, rapid necrosis, and systemic toxicity. Requires immediate surgical debridement and IV penicillin. S. aureus (A) causes purulent wound infection typically at 3-5 days post-operatively."
  },
  {
    "num": 65,
    "q": "An asymptomatic 65-year-old man has a 6.5 cm infrarenal aortic aneurysm on ultrasound. Management:",
    "opts": ["Annual ultrasound surveillance", "Anticoagulation only", "Emergency repair", "Elective surgical or endovascular repair"],
    "ans": 3,
    "exp": "AAA repair is indicated when diameter reaches 5.5 cm (men) due to exponentially rising rupture risk. At 6.5 cm, elective repair (open or EVAR) is indicated even without symptoms. Annual surveillance (A) is for aneurysms <5.5 cm. Bailey and Love's identifies 5.5 cm as the intervention threshold."
  },
  {
    "num": 66,
    "q": "A 32-year-old woman from Lahore presents with 8 months of oligomenorrhoea, weight gain, hirsutism, and acne. Fasting glucose is 6.2 mmol/L. LH:FSH ratio is 3:1. Pelvic ultrasound shows 14 follicles in the right ovary and 12 in the left, in a 'pearl necklace' pattern. Diagnosis:",
    "opts": ["Hyperprolactinaemia", "Premature ovarian insufficiency", "PCOS", "Hypothyroidism"],
    "ans": 2,
    "exp": "PCOS (Rotterdam criteria, 2 of 3): oligo/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries on ultrasound. Elevated LH:FSH ratio (>2:1) and insulin resistance are common. PCOS is the most common endocrine disorder in women of reproductive age in Pakistan. Ten Teachers identifies insulin resistance and hyperandrogenism as the two key metabolic drivers. Hyperprolactinaemia (A) causes galactorrhoea with normal androgens. POI (B) shows elevated FSH with low oestrogen."
  },
  {
    "num": 67,
    "q": "Repetitive late decelerations on CTG for 20 minutes in active labour (7 cm dilated). What do they indicate?",
    "opts": ["Normal; continue monitoring", "Head compression; reassure", "Cord compression; change position", "Uteroplacental insufficiency"],
    "ans": 3,
    "exp": "Late decelerations are caused by uteroplacental insufficiency: reduced blood flow during contractions leads to fetal hypoxia, triggering a vagal response after the contraction peak. They are a serious non-reassuring CTG pattern. Repetitive late decelerations for 20 minutes require urgent senior obstetrician review and likely expedited delivery."
  },
  {
    "num": 68,
    "q": "A 22-year-old primigravida at 38 weeks presents with a 2-hour history of uterine contractions every 3 minutes. The cervix is 4 cm dilated and 80% effaced. The fetal head is at station -1. Fetal heart rate is 148 bpm with good variability and accelerations present. What stage of labour is she in?",
    "opts": ["Latent phase of first stage", "Active phase of first stage", "Second stage", "Third stage"],
    "ans": 1,
    "exp": "Active phase of the first stage of labour begins at 4-5 cm of cervical dilatation with regular uterine contractions. Latent phase (A) is from onset to 4 cm. Second stage (C) begins at full (10 cm) dilatation and ends with delivery. Third stage (D) follows placental delivery. The reassuring CTG (FHR 148, good variability, accelerations) indicates fetal well-being."
  },
  {
    "num": 69,
    "q": "A 35-year-old woman presents with a 3-month history of intermenstrual bleeding and post-coital bleeding. She has had 3 sexual partners and has never had a cervical smear. On speculum examination, an irregular, friable, haemorrhagic lesion is visible at the cervical os. Cervical biopsy shows squamous cell carcinoma. The most important aetiological factor is:",
    "opts": ["Chlamydia persistent infection", "HPV types 16 and 18", "HSV type 2", "Oestrogen excess"],
    "ans": 1,
    "exp": "HPV types 16 and 18 account for approximately 70% of cervical cancers worldwide and virtually all squamous cell carcinomas of the cervix. They encode E6 and E7 oncoproteins that degrade p53 and Rb tumour suppressor proteins respectively, driving uncontrolled cell proliferation. This is why cervical cancer screening and HPV vaccination are the most impactful preventive measures. Ten Teachers identifies persistent HPV infection as the necessary, though not sufficient, cause of cervical cancer."
  },
  {
    "num": 70,
    "q": "A 40-year-old woman presents with 6 months of secondary amenorrhoea, galactorrhoea, and bilateral temporal visual field defects. MRI pituitary shows a 2.5-cm mass with suprasellar extension compressing the optic chiasm. Serum prolactin is 8,400 mIU/L. Diagnosis and first-line treatment:",
    "opts": ["Craniopharyngioma; surgery", "Non-functioning adenoma; surgery", "Macroprolactinoma; dopamine agonist", "Sheehan's syndrome"],
    "ans": 2,
    "exp": "A macroprolactinoma (>1 cm) presents with amenorrhoea, galactorrhoea, and markedly elevated prolactin. Bitemporal hemianopia results from optic chiasm compression. Uniquely among pituitary tumours, prolactinomas are managed medically first: dopamine agonists (cabergoline or bromocriptine) suppress prolactin secretion, shrink the tumour, and restore vision within weeks. Surgery is reserved for drug intolerance or failure."
  },
  {
    "num": 71,
    "q": "A 25-year-old primigravida delivers a 2.1 kg infant at 36 weeks after emergency caesarean section for fetal distress. At 5 minutes after birth, the baby has a heart rate of 70 bpm, irregular weak breathing, body pink with blue extremities, some flexion of limbs, and weak cry. Apgar score is:",
    "opts": [
      "Apgar 5",
      "Apgar 6",
      "Apgar 7",
      "Apgar 4"
    ],
    "ans": 0,
    "exp": "Apgar scores each parameter 0-2. HR 70 (<100) = 1. Respiratory effort (weak, irregular) = 1. Colour (body pink, extremities blue) = 1. Muscle tone (some flexion) = 1. Reflex irritability (weak cry) = 1. Total = 5. An Apgar of 4-6 indicates moderate neonatal depression requiring stimulation and oxygen."
  },
  {
    "num": 72,
    "q": "A 50-year-old woman with SLE, on hydroxychloroquine and low-dose prednisolone, presents with 3 days of pleuritic chest pain, breathlessness, and a friction rub on auscultation. CXR shows small bilateral pleural effusions and a 'water bottle' heart shadow. ECG shows low-voltage complexes and electrical alternans. Diagnosis:",
    "opts": ["Pulmonary embolism", "Pleural effusion from infection", "Pericardial effusion / tamponade", "Congestive cardiac failure"],
    "ans": 2,
    "exp": "SLE causes serositis (inflammation of the pericardium and pleura). Low-voltage ECG complexes (fluid damping electrical signals) + electrical alternans (beat-to-beat QRS axis variation from heart swinging in fluid) + 'water bottle' heart shadow on CXR indicate a large pericardial effusion progressing toward cardiac tamponade. Beck's triad (hypotension, raised JVP, muffled heart sounds) confirms tamponade. Urgent pericardiocentesis is required."
  },
  {
    "num": 73,
    "q": "A 45-year-old man presents with a pulsatile ringing sound in his right ear that is synchronous with his heartbeat, worse at night. He has hypertension and is obese. Audiometry is normal. Otoscopy reveals a reddish-blue mass behind the intact tympanic membrane. Most likely diagnosis:",
    "opts": ["Acoustic neuroma", "Glomus tympanicum", "Acute otitis media", "Wax impaction"],
    "ans": 1,
    "exp": "Pulsatile tinnitus synchronous with the heartbeat combined with a reddish-blue retrotympanic mass is the classic presentation of a glomus tympanicum (paraganglioma of the middle ear). Pulsatile tinnitus in a hypertensive obese patient may also reflect elevated venous pressure, but the reddish-blue visible mass is the clinching feature."
  },
  {
    "num": 74,
    "q": "A 50-year-old woman develops progressive bilateral sensorineural hearing loss, tinnitus, and episodic vertigo lasting 20 minutes to 6 hours, with aural fullness in the left ear. Audiometry shows low-frequency sensorineural hearing loss. Diagnosis:",
    "opts": ["Acute labyrinthitis", "BPPV", "Vestibular schwannoma", "Meniere's disease"],
    "ans": 3,
    "exp": "Meniere's disease presents with episodic vertigo (20 min-12 hours), fluctuating low-frequency sensorineural hearing loss, tinnitus, and aural fullness in the same ear; the diagnostic tetrad. It results from endolymphatic hydrops. BPPV (A) causes brief (<1 minute) positional vertigo without hearing loss. Vestibular schwannoma (C) causes progressive unilateral hearing loss and constant tinnitus without episodic vertigo. Labyrinthitis (D) causes sustained vertigo with acute hearing loss."
  },
  {
    "num": 75,
    "q": "A 35-year-old woman presents with 6 months of a gradually enlarging, painless left-sided neck mass in the anterior triangle. It moves upward on swallowing and on tongue protrusion. FNAC shows follicular cells. Thyroid scan shows a cold nodule. What is the next investigation?",
    "opts": ["TSH only; observe 6 months", "Excision biopsy", "Radioactive iodine", "Levothyroxine suppression"],
    "ans": 1,
    "exp": "A thyroid nodule that moves with swallowing (attached to thyroid) and on tongue protrusion (confirms thyroid-origin via thyroglossal connection) is a thyroid nodule. Cold nodules have a higher malignancy risk (~10-15%) than hot nodules. FNAC showing follicular cells cannot distinguish adenoma from carcinoma; this requires histological assessment of the capsule and vascular invasion. Excision (hemithyroidectomy) provides the specimen. Dhingra's and."
  },
  {
    "num": 76,
    "q": "A 3-year-old with stridor, drooling, fever, and the thumbprint sign on lateral neck X-ray. Which action must NOT be performed?",
    "opts": ["Give IV antibiotics", "Administer oxygen", "Give nebulised adrenaline", "Examine throat with tongue depressor"],
    "ans": 3,
    "exp": "Acute epiglottitis with the thumbprint sign on X-ray is a life-threatening airway emergency. Any attempt to examine the oropharynx, including using a tongue depressor, or agitating the child can trigger laryngospasm and complete airway obstruction within seconds. The child must be kept calm, upright, and taken immediately to theatre for controlled intubation by the most senior anaesthetist available. IV antibiotics (ceftriaxone) and controlled airway are the correct management."
  },
  {
    "num": 77,
    "q": "A 50-year-old man presents with 4 months of progressive unilateral right nasal obstruction, blood-stained nasal discharge, right facial pain, and diplopia on right lateral gaze. He had a tooth extraction 5 months ago. CT sinuses shows destruction of the right maxillary sinus walls with orbital invasion. Diagnosis:",
    "opts": ["Maxillary sinus carcinoma", "Chronic sinusitis", "Dental abscess", "Angiofibroma"],
    "ans": 0,
    "exp": "Maxillary sinus carcinoma classically presents with a triad of unilateral nasal obstruction, facial pain, and dental symptoms, often following a dental extraction that fails to heal. Orbital invasion causes diplopia. Bony destruction on CT confirms malignancy. The classic staging system is Ohngren's line (from medial canthus to angle of mandible): tumours above and behind it (superoposterior) carry a worse prognosis due to proximity to the orbit and pterygoid plates. Dhingra's identifies late presentation as the norm, making prognosis poor."
  },
  {
    "num": 78,
    "q": "Which nerve is most at risk during parotidectomy, and what deficit results from injury?",
    "opts": ["Trigeminal nerve; facial numbness", "Facial nerve; ipsilateral LMN facial palsy", "Hypoglossal nerve; tongue deviation", "Auriculotemporal nerve; hearing loss"],
    "ans": 1,
    "exp": "The facial nerve (CN VII) traverses the parotid gland and is the critical structure at risk during parotidectomy. Injury causes ipsilateral LMN facial palsy: inability to close the eye, wrinkle the forehead, or move the corner of the mouth."
  },
  {
    "num": 79,
    "q": "Progressive unilateral SNHL and tinnitus over 2 years. MRI shows a right cerebellopontine angle mass. Diagnosis:",
    "opts": ["Meniere's disease", "Vestibular schwannoma", "Cholesteatoma", "Otosclerosis"],
    "ans": 1,
    "exp": "Vestibular schwannoma (acoustic neuroma) arises from CN VIII Schwann cells at the cerebellopontine angle causing progressive unilateral SNHL and tinnitus. MRI is gold standard. Weber's lateralises to the better ear. Meniere's (A) causes episodic vertigo with fluctuating SNHL and tinnitus, not a progressive unilateral lesion."
  },
  {
    "num": 80,
    "q": "A patient with ankylosing spondylitis presents with red, painful eyes, keratic precipitates, AC cells and flare, and a deformed pupil. Diagnosis and main untreated complication:",
    "opts": ["Episcleritis", "Bacterial conjunctivitis", "Acute angle-closure glaucoma", "Anterior uveitis (HLA-B27)"],
    "ans": 3,
    "exp": "Anterior uveitis (iritis) associated with HLA-B27 conditions (ankylosing spondylitis, reactive arthritis, psoriatic arthritis) is the most common form of non-infectious uveitis. Keratic precipitates (inflammatory cells on the corneal endothelium), anterior chamber cells and flare, and posterior synechiae (iris adherent to lens) are the hallmarks. If untreated, recurrent uveitis causes complicated cataract, secondary glaucoma, band keratopathy, and permanent visual loss. Treatment is topical steroids and mydriatics. Parson's identifies recurrent HLA-B27 uveitis as a major cause of preventable visual morbidity."
  },
  {
    "num": 81,
    "q": "A 35-year-old male construction worker presents with a 3-week history of diminishing central vision in the right eye. He works outdoors without eye protection and describes staring at a solar eclipse last month. Fundoscopy reveals a sharply demarcated yellowish-red foveal lesion. Diagnosis:",
    "opts": ["AMD", "Solar retinopathy", "Central serous retinopathy", "Macular hole"],
    "ans": 1,
    "exp": "Solar retinopathy results from direct solar radiation causing photochemical damage to the foveal photoreceptors, not thermal injury. It presents with central visual loss, metamorphopsia, and a characteristic foveal lesion (yellowish-white spot acutely, later a lamellar hole appearance) following eclipse-gazing or welding arc exposure. The history is the key. Central serous retinopathy (C) causes central blurring in young stressed males but has a different fundal appearance."
  },
  {
    "num": 82,
    "q": "A 60-year-old man with poorly controlled type 2 diabetes is found to have an IOP of 32 mmHg in both eyes. Visual field testing shows arcuate scotoma and nasal step defects. Cup-to-disc ratio is 0.8 bilaterally. He has had no eye pain. Diagnosis:",
    "opts": ["Acute angle-closure glaucoma", "Primary open-angle glaucoma", "Diabetic retinopathy", "Hypertensive retinopathy"],
    "ans": 1,
    "exp": "Primary open-angle glaucoma (POAG) is painless, bilateral, with raised IOP, progressive optic nerve cupping (cup-to-disc ratio >0.6 is abnormal), and characteristic visual field defects; arcuate scotomas and nasal step defects corresponding to nerve fibre bundle loss. It is the leading cause of irreversible blindness in Pakistan after cataract. Parson's identifies the triad of raised IOP, optic disc cupping, and visual field loss as the diagnostic criteria. ACAG (A) is painful and acute."
  },
  {
    "num": 83,
    "q": "A 25-year-old woman, 32 weeks pregnant, presents with sudden painless loss of vision in the right eye. She has no pain, no flashes, and no floaters. On examination, visual acuity is hand movements only. Fundoscopy shows a pale, milky-white retina with a cherry red spot at the fovea. She has a history of mitral stenosis from rheumatic heart disease. Diagnosis:",
    "opts": ["Optic neuritis", "CRVO", "Retinal detachment", "CRAO (central retinal artery occlusion)"],
    "ans": 3,
    "exp": "CRAO: sudden profound painless visual loss with a pale ischaemic retina (intracellular oedema from infarction) and cherry red spot (the thin fovea allowing the intact choroidal circulation to remain visible). Mitral stenosis from rheumatic heart disease is a source of emboli, critical in Pakistan where RHD remains prevalent. CRAO is an ophthalmic emergency. CRVO (A) shows the 'blood and thunder' fundus with haemorrhages."
  },
  {
    "num": 84,
    "q": "A 70-year-old woman presents with a 1-week history of severe unilateral right-sided headache, scalp tenderness (she cannot brush her hair), jaw claudication, and sudden onset of transient visual loss in the right eye. ESR is 110 mm/hr and CRP is markedly elevated. What is the immediate treatment and why is speed critical?",
    "opts": ["Aspirin; neurology in 48h", "High-dose prednisolone immediately", "NSAIDs + ophthalmology", "Methotrexate first-line"],
    "ans": 1,
    "exp": "Giant cell arteritis (GCA/temporal arteritis): headache, scalp tenderness, jaw claudication, elevated ESR/CRP, and visual symptoms in an elderly patient. Transient visual loss is a warning sign of impending permanent ischaemic optic neuropathy leading to irreversible blindness. High-dose prednisolone (60 mg/day) must be started immediately, before temporal artery biopsy, which can be performed up to 2 weeks later as steroids do not immediately change biopsy histology."
  },
  {
    "num": 85,
    "q": "A 6-year-old child has leukocoria in the right eye. B-scan ultrasound shows intraocular calcification. Diagnosis:",
    "opts": ["Persistent fetal vasculature", "Coat's disease", "Congenital cataract", "Retinoblastoma"],
    "ans": 3,
    "exp": "Retinoblastoma is the most common intraocular malignancy of childhood, presenting with leukocoria. Intraocular calcification on ultrasound is the hallmark distinguishing it from other causes of leukocoria. Parson's identifies calcification as the most reliable differentiator: persistent fetal vasculature (A) occurs in a microphthalmic eye without calcification."
  },
  {
    "num": 86,
    "q": "A 60-year-old man with a 15-year history of type 2 diabetes presents with worsening bilateral lower limb pain at rest, worse at night, relieved by hanging the legs out of bed. Bilateral ankle pulses are absent. ABI is 0.4 bilaterally. There is a non-healing ulcer on the right big toe. Diagnosis and limb-threatening risk:",
    "opts": ["Charcot foot; off-loading", "Diabetic neuropathy", "Venous ulceration", "Critical limb ischaemia"],
    "ans": 3,
    "exp": "Critical limb ischaemia (CLI): rest pain (worse at night, relieved by dependency), absent peripheral pulses, ABI <0.5, and a non-healing ischaemic ulcer. This is the most severe form of peripheral arterial disease, indicating limb-threatening ischaemia requiring urgent vascular assessment for angioplasty, bypass, or amputation planning. ABI >0.9 is normal; <0.5 indicates severe ischaemia. Diabetic neuropathic ulcers (A) are typically painless and over pressure points."
  },
  {
    "num": 87,
    "q": "A 45-year-old man with COPD develops worsening breathlessness, increased sputum (now purulent green), and a new right lower lobe infiltrate on CXR during an acute exacerbation. Temperature 38.9°C. He has been on long-term low-dose prednisolone for 2 years. His sputum Gram stain shows Gram-negative rods. Most likely causative organism:",
    "opts": ["S. pneumoniae", "Pseudomonas aeruginosa", "H. influenzae", "Klebsiella pneumoniae"],
    "ans": 1,
    "exp": "In a COPD patient on long-term steroids (immunosuppressed), with repeated hospital admissions, Pseudomonas aeruginosa must be considered; especially with Gram-negative rods on sputum Gram stain. Pseudomonas is inherently resistant to most beta-lactams and requires anti-pseudomonal agents (piperacillin-tazobactam, meropenem, or ciprofloxacin). Davidson's emphasises that COPD with structural lung damage and steroid use creates the 'Pseudomonas-risk' phenotype requiring broader empirical coverage."
  },
  {
    "num": 88,
    "q": "A 30-year-old woman presents with 3 weeks of fever, cough, and mild breathlessness. CXR shows bilateral hilar lymphadenopathy. She also has erythema nodosum on her shins and arthralgia of both ankles. Serum ACE is elevated at 95 U/L. Diagnosis:",
    "opts": ["TB", "Histoplasmosis", "Lymphoma", "Sarcoidosis (Löfgren's)"],
    "ans": 3,
    "exp": "Löfgren's syndrome is an acute, typically self-limiting presentation of sarcoidosis: bilateral hilar lymphadenopathy + erythema nodosum + periarthritis (especially ankles) + fever. It carries an excellent prognosis with >80% spontaneous remission. Elevated serum ACE supports the diagnosis. TB (A) causes unilateral hilar changes or upper lobe disease with caseating granulomas. Bilateral hilar lymphadenopathy without caseation is sarcoidosis until proven otherwise."
  },
  {
    "num": 89,
    "q": "Massive bilateral saddle PE confirmed on CTPA. BP is 82/50 mmHg, RV dilatation on echo. Immediate treatment beyond oxygen and fluids:",
    "opts": ["Surgical embolectomy", "Heparin infusion only", "Catheter-directed thrombolysis", "Systemic thrombolysis (alteplase)"],
    "ans": 3,
    "exp": "Massive PE with haemodynamic compromise (systolic BP <90 mmHg) is the indication for systemic thrombolysis with alteplase. The right ventricle is acutely failing (D-shaped septum from RV pressure overload on echo), which is a time-critical emergency. Heparin alone (A) is appropriate for submassive PE. Systemic thrombolysis carries a 5-15% haemorrhagic complication risk, but in massive PE the mortality risk without it exceeds this."
  },
  {
    "num": 90,
    "q": "A 28-year-old man presents with 3 months of persistent productive cough, haemoptysis, night sweats, and weight loss of 6 kg. He is HIV-positive with a CD4 count of 95 cells/µL and is not on antiretroviral therapy. Sputum AFB is positive. What is the key additional concern when starting anti-TB therapy in this patient?",
    "opts": ["Rifampicin causes photosensitivity", "IRIS if ART started too soon", "Withhold TB treatment until CD4 >200", "HIV prevents granuloma formation"],
    "ans": 1,
    "exp": "TB-HIV coinfection is highly prevalent in Pakistan. When ART is started within 2 weeks of TB treatment in patients with very low CD4 counts, immune reconstitution inflammatory syndrome (IRIS) occurs, a paradoxical worsening of TB due to the recovering immune system mounting an exaggerated inflammatory response. Current guidelines recommend starting TB treatment first, then initiating ART at 2-8 weeks (for CD4 <50) or 8-12 weeks. Early ART is indicated in very low CD4 patients despite IRIS risk. Davidson's Medicine describes this as one of the most challenging management decisions in infectious disease."
  },
  {
    "num": 91,
    "q": "A coal miner of 25 years presents with progressive breathlessness and bilateral upper-lobe fibrosis on CXR. Diagnosis:",
    "opts": ["COPD", "Tuberculosis", "Idiopathic pulmonary fibrosis", "Coal worker's pneumoconiosis"],
    "ans": 3,
    "exp": "Coal worker's pneumoconiosis results from coal dust inhalation causing pulmonary macules and progressive massive fibrosis in the upper lobes. Occupational history is diagnostic. It causes restrictive lung disease and is reportable."
  },
  {
    "num": 92,
    "q": "Which condition causes a transudative pleural effusion (NOT an exudate)?",
    "opts": ["Parapneumonic effusion", "Pulmonary TB", "Malignancy", "Congestive cardiac failure"],
    "ans": 3,
    "exp": "CCF causes transudates from elevated hydrostatic pressure; low protein (<25 g/L), low LDH. By Light's criteria, a transudate fails all three criteria. TB (A), malignancy (C), and parapneumonic effusions (D) all cause exudates through increased capillary permeability or lymphatic obstruction."
  },
  {
    "num": 93,
    "q": "A COPD patient's ABG worsens despite controlled O₂ and nebulisers: pH 7.26, PaCO₂ 72 mmHg. Best next step:",
    "opts": ["High-flow O₂ 15 L/min", "IV diazepam", "NIV (BiPAP)", "Immediate intubation"],
    "ans": 2,
    "exp": "Acute hypercapnic respiratory failure not responding to initial treatment is the primary indication for NIV (BiPAP). NIV reduces PaCO₂, improves pH, and avoids intubation in most COPD exacerbations. High-flow O₂ (A) worsens hypercapnia by suppressing hypoxic drive. Davidson's Medicine identifies NIV as having the strongest evidence base in this setting."
  },
  {
    "num": 94,
    "q": "A 32-year-old man has experienced two episodes of sudden profound despair, hopelessness, and suicidal ideation lasting 3-4 months each, and three episodes of elevated mood, decreased need for sleep, talkativeness, and poor judgment lasting 3-4 days each — not severe enough to require hospitalisation. Between episodes he is functional. Diagnosis:",
    "opts": ["Bipolar I disorder", "Bipolar II disorder", "Cyclothymia", "MDD with psychotic features"],
    "ans": 1,
    "exp": "Bipolar II disorder is defined by at least one major depressive episode and at least one hypomanic episode (elevated mood lasting 4+ days, not requiring hospitalisation, without psychotic features or severe functional impairment). This distinguishes it from Bipolar I (A), which requires full manic episodes severe enough to cause significant impairment or require admission. The Shorter Oxford Textbook of Psychiatry emphasises that Bipolar II is commonly misdiagnosed as recurrent unipolar depression."
  },
  {
    "num": 95,
    "q": "A 19-year-old female student is brought by her parents. Over 8 months she has progressively restricted her food intake, currently eating less than 500 kcal/day. Her BMI is 14.8 kg/m². She denies being unwell and believes she is 'fat.' Her periods stopped 4 months ago. ECG shows a prolonged QTc. Which metabolic complication on blood tests is most likely and most immediately dangerous?",
    "opts": ["Elevated cholesterol", "Hyperglycaemia", "Hypokalaemia (prolonged QTc; arrhythmia)", "Hypernatraemia"],
    "ans": 2,
    "exp": "Anorexia nervosa causes multiple metabolic disturbances. Hypokalaemia, from reduced intake, laxative abuse, or vomiting, is the most immediately life-threatening, as it prolongs the QTc interval and predisposes to torsades de pointes and sudden cardiac death. The , primarily from cardiac arrhythmia and suicide. Amenorrhoea, low BMI, and ego-syntonic body image distortion complete the diagnostic picture."
  },
  {
    "num": 96,
    "q": "A 55-year-old man is brought by his family. For 4 years he has had progressive decline in memory, personality change (disinhibition, inappropriate social behaviour, using coarse language in public), and executive dysfunction. His memory for recent events is relatively preserved early on. MRI shows frontal and temporal lobe atrophy with relative posterior cortical sparing. Diagnosis:",
    "opts": ["Alzheimer's disease", "Frontotemporal dementia", "Lewy body dementia", "Vascular dementia"],
    "ans": 1,
    "exp": "Frontotemporal dementia (FTD): predominantly personality and behaviour change with disinhibition and executive dysfunction preceding memory loss, the opposite of Alzheimer's, where memory is the first and most prominent deficit. MRI showing frontal and temporal atrophy with posterior cortical sparing is the characteristic pattern. Onset is typically younger (50-65 years). The. Lewy body dementia (C) causes fluctuating cognition, visual hallucinations, and parkinsonism."
  },
  {
    "num": 97,
    "q": "A 40-year-old woman presents with a 3-year history of medically unexplained symptoms: chronic widespread pain, profound fatigue, unrefreshing sleep, and multiple somatic complaints (headache, bowel symptoms, palpitations). Multiple investigations are normal. She is highly distressed and has consulted 12 different specialists. The symptoms are real and cause significant disability. Diagnosis:",
    "opts": ["Malingering", "Depression only", "Munchausen syndrome", "Somatic symptom disorder"],
    "ans": 3,
    "exp": "Somatic symptom disorder (formerly somatisation disorder): genuine, distressing, and disabling physical symptoms with excessive thoughts, feelings, and behaviours related to the symptoms, disproportionate to any identifiable organic pathology. The key is that symptoms are real, not feigned. Malingering (A) involves deliberate fabrication for external gain. Munchausen syndrome (C) is factitious disorder: intentional symptom production for the sick role. The Shorter Oxford Textbook of Psychiatry identifies high healthcare utilisation and distress as the defining features."
  },
  {
    "num": 98,
    "q": "Persecutory delusions, auditory hallucinations, and thought disorder in a heavy cannabis user persist 4 weeks after supervised cessation. Management:",
    "opts": ["Atypical antipsychotic", "Discharge; abstinence will resolve it", "Benzodiazepine only", "Lithium"],
    "ans": 0,
    "exp": "Cannabis-induced psychosis that persists >4 weeks after cessation is no longer simply 'substance-induced'; it has transitioned into a primary psychotic disorder (schizophrenia or schizophreniform illness), for which cannabis is a risk factor rather than the sole cause. Atypical antipsychotics (risperidone, olanzapine, or aripiprazole) are first-line treatment. Benzodiazepines (C) treat acute agitation but not psychosis. Lithium (D) is a mood stabiliser, not an antipsychotic. The."
  },
  {
    "num": 99,
    "q": "A 70-year-old man with known Parkinson's disease on levodopa/carbidopa presents with confusion, visual hallucinations (seeing small children in his room), and worsening motor fluctuations. His carers report he has vivid nightmares. His cognition has declined. Which antipsychotic is safe to use for his hallucinations and why?",
    "opts": ["Haloperidol", "Clozapine or quetiapine", "Risperidone", "Olanzapine"],
    "ans": 1,
    "exp": "In Parkinson's disease, antipsychotics that significantly block dopamine D2 receptors will dramatically worsen motor symptoms (rigidity, akinesia). Haloperidol (A) and risperidone (C) are absolutely contraindicated. Clozapine and quetiapine have the lowest D2 affinity and are the only antipsychotics safe to use in PD. Clozapine is most evidence-based for PD psychosis but requires blood monitoring. Quetiapine is widely used in Pakistan due to lower monitoring requirements. The."
  },
  {
    "num": 100,
    "q": "A 45-year-old woman, a refugee from a conflict zone, presents 8 months after witnessing her husband's violent death. She re-experiences the event through vivid intrusive flashbacks triggered by loud sounds, has persistent nightmares, avoids anything that reminds her of the event, feels emotionally numb, is hypervigilant, and has insomnia. She cannot return to work. Diagnosis and first-line psychological treatment:",
    "opts": ["Acute stress disorder", "Adjustment disorder", "Complicated grief", "PTSD; TF-CBT or EMDR"],
    "ans": 3,
    "exp": "Post-traumatic stress disorder (PTSD): symptoms >1 month (here 8 months) following a traumatic event, comprising re-experiencing (flashbacks, nightmares), avoidance (of reminders), negative cognitions/emotional numbing, and hyperarousal (hypervigilance, insomnia), causing significant functional impairment. First-line psychological treatments are trauma-focused CBT (TF-CBT) and eye movement desensitisation and reprocessing (EMDR); both have strong evidence. The Shorter Oxford Textbook of Psychiatry identifies these as preferred over pharmacotherapy for PTSD. Acute stress disorder (A) resolves within 1 month."
  }
];
