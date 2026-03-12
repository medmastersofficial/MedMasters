// NTS MCQ Bank — MCQs 1–3000
// 3000 MCQs
const NTS_RANGE_1 = [
  {
    id: 1,
    question: `The first-line treatment for an acute asthma attack is:`,
    options: ['Inhaled corticosteroids', 'Oral corticosteroids', 'Short-acting beta-agonists (SABA)', 'Long-acting beta-agonists (LABA)'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2,
    question: `A child presents with a non-itchy rash that started on the face and spread to the rest of the body. What is the most likely diagnosis?`,
    options: ['Rubella', 'Roseola', 'Chickenpox', 'Hand, foot, and mouth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 3,
    question: `Which of the following is a typical finding in a patient with diabetic ketoacidosis?`,
    options: ['Hyperkalemia', 'Hypocalcemia', 'Hyponatremia', 'Hypermagnesemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 4,
    question: `A patient presents with a rapid onset of severe abdominal pain out of proportion to physical findings. What is the most likely diagnosis?`,
    options: ['Acute appendicitis', 'Acute mesenteric ischemia', 'Acute pancreatitis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 5,
    question: `A 34-year-old pregnant woman in her third trimester presents with pruritic urticarial papules and plaques. What is the most likely diagnosis?`,
    options: ['Pemphigoid gestationis', 'PUPPP (Pruritic Urticarial Papules and Plaques of Pregnancy)', 'Atopic eruption of pregnancy', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 6,
    question: `Which of the following is a classic sign of pericarditis?`,
    options: ['Friction rub', 'Kussmaul\'s sign', 'Pulsus paradoxus', 'Displaced apex beat'],
    correct: 0,
    explanation: ''
  },
  {
    id: 7,
    question: `A 75-year-old male presents with memory loss and difficulty performing daily activities. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Vascular dementia', 'Lewy body dementia', 'Normal aging'],
    correct: 0,
    explanation: ''
  },
  {
    id: 8,
    question: `Which of the following laboratory findings is most indicative of acute liver failure?`,
    options: ['Elevated alkaline phosphatase', 'Elevated AST and ALT', 'Low albumin', 'Elevated bilirubin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 9,
    question: `What is the most appropriate initial treatment for a patient with septic shock?`,
    options: ['Broad-spectrum antibiotics', 'Corticosteroids', 'Intravenous fluids', 'Vasopressors'],
    correct: 0,
    explanation: ''
  },
  {
    id: 10,
    question: `A patient is diagnosed with nephrotic syndrome. Which of the following findings would be expected in this condition?`,
    options: ['Hyperlipidemia', 'Hypotension', 'Hypercalcemia', 'Hematuria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 11,
    question: `A patient presents with an ulcer on the lower leg that has not healed. What is the most likely cause?`,
    options: ['Diabetes mellitus', 'Venous insufficiency', 'Arterial insufficiency', 'Infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 12,
    question: `A patient presents with chronic cough and hemoptysis after working in construction for years. What is the most likely diagnosis?`,
    options: ['Silicosis', 'Asbestosis', 'Lung cancer', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 13,
    question: `Which of the following is a contraindication for the use of thrombolytics in myocardial infarction?`,
    options: ['Age > 75 years', 'History of prior myocardial infarction', 'Active bleeding', 'Diabetes mellitus'],
    correct: 2,
    explanation: ''
  },
  {
    id: 14,
    question: `A 25-year-old woman presents with sudden onset lower abdominal pain, nausea, and missed period. Ultrasound reveals adnexal mass and empty uterus. Best initial management is:`,
    options: ['Methotrexate therapy if stable', 'Emergency laparotomy', 'Observation only', 'Endometrial biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 15,
    question: `Which of the following conditions is associated with an increased risk of developing gastric cancer?`,
    options: ['Peptic ulcer disease', 'Chronic atrophic gastritis', 'Gastroesophageal reflux disease (GERD)', 'Zollinger-Ellison syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 16,
    question: `What is the primary imaging modality for assessing deep vein thrombosis (DVT)?`,
    options: ['X-ray', 'CT scan', 'Doppler ultrasound', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 17,
    question: `Which condition is characterized by "cannon waves" in the neck veins?`,
    options: ['Heart failure', 'Atrial fibrillation', 'Atrioventricular dissociation', 'Mitral regurgitation'],
    correct: 2,
    explanation: ''
  },
  {
    id: 18,
    question: `Which of the following is the hallmark finding in nephrotic syndrome?`,
    options: ['Hematuria', 'Proteinuria', 'Hyperkalemia', 'Hyponatremia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 19,
    question: `A 55-year-old female presents with pain in the left arm and chest tightness after exertion. What is the most likely diagnosis?`,
    options: ['Angina pectoris', 'Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 20,
    question: `Which medication is a common first-line treatment for generalized anxiety disorder?`,
    options: ['Sertraline', 'Lithium', 'Haloperidol', 'Amitriptyline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 21,
    question: `A patient presents with fatigue, weight gain, and cold intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Addison\'s disease', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 22,
    question: `Which of the following is a common symptom of multiple sclerosis?`,
    options: ['Bradykinesia', 'Tremors', 'Visual disturbances', 'Hyperreflexia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 23,
    question: `What is the primary function of insulin?`,
    options: ['Increase blood glucose levels', 'Decrease blood glucose levels', 'Stimulate gluconeogenesis', 'Enhance lipolysis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 24,
    question: `A woman presents with excessive menstrual bleeding but normal pelvic examination. The most likely diagnosis is:`,
    options: ['Dysfunctional uterine bleeding', 'Endometrial carcinoma', 'Fibroid uterus', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 25,
    question: `A patient presents with a painless, hard mass in the breast. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Breast cancer', 'Cyst', 'Lipoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 26,
    question: `The most appropriate first-line treatment for major depressive disorder is:`,
    options: ['Electroconvulsive therapy', 'Cognitive-behavioral therapy', 'Selective serotonin reuptake inhibitors (SSRIs)', 'Tricyclic antidepressants'],
    correct: 2,
    explanation: ''
  },
  {
    id: 27,
    question: `A woman with postmenopausal bleeding and endometrial thickness >5 mm should undergo:`,
    options: ['Endometrial biopsy', 'Ultrasound follow-up', 'Hormonal therapy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 28,
    question: `A 65-year-old woman presents with sudden onset of severe lower abdominal pain. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Ovarian torsion', 'Diverticulitis', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 29,
    question: `Which hormone is primarily responsible for the regulation of blood calcium levels?`,
    options: ['Insulin', 'Parathyroid hormone', 'Calcitonin', 'Aldosterone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 30,
    question: `Which condition is characterized by the presence of bull's eye lesions?`,
    options: ['Erythema multiforme', 'Psoriasis', 'Stevens-Johnson syndrome', 'Lyme disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 31,
    question: `In patients with chronic kidney disease, which electrolyte abnormality is most commonly seen?`,
    options: ['Hypernatremia', 'Hyperkalemia', 'Hypocalcemia', 'Hyperphosphatemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 32,
    question: `A patient presents with a new rash on the chest, fever, and malaise after taking a new medication. What is the most likely diagnosis?`,
    options: ['Drug reaction', 'Viral exanthem', 'Eczema', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 33,
    question: `Which condition is associated with a "butterfly rash"?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Eczema', 'Rosacea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 34,
    question: `In which condition would you expect to find "cobblestoning" of the mucosa during an endoscopy?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Gastroesophageal reflux disease (GERD)', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 35,
    question: `What is the primary function of the hormone insulin?`,
    options: ['Increase blood glucose levels', 'Decrease blood glucose levels', 'Stimulate glucagon release', 'Promote glycogenolysis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 36,
    question: `Which of the following is the most common cause of subarachnoid hemorrhage?`,
    options: ['Aneurysmal rupture', 'Hypertensive hemorrhage', 'Trauma', 'Arteriovenous malformation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 37,
    question: `Which of the following conditions is characterized by a "steeple sign" on a neck X-ray?`,
    options: ['Croup', 'Epiglottitis', 'Asthma', 'Bronchiolitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 38,
    question: `A 25-year-old female presents with abdominal bloating and irregular bowel movements. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome (IBS)', 'Inflammatory bowel disease', 'Celiac disease', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 39,
    question: `Which of the following is the drug of choice for status epilepticus?`,
    options: ['Phenytoin', 'Lorazepam', 'Carbamazepine', 'Valproic Acid'],
    correct: 1,
    explanation: ''
  },
  {
    id: 40,
    question: `Which of the following antihypertensive medications is contraindicated in pregnancy?`,
    options: ['Labetalol', 'Methyldopa', 'ACE inhibitors', 'Nifedipine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 41,
    question: `A woman presents with irregular heavy menstrual bleeding and an enlarged irregular uterus. The most likely diagnosis is:`,
    options: ['Adenomyosis', 'Endometrial carcinoma', 'Uterine fibroids', 'Endometriosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 42,
    question: `What is the most common cause of cervical lymphadenopathy in children?`,
    options: ['Malignancy', 'Tuberculosis', 'Viral infections', 'Bacterial infections'],
    correct: 2,
    explanation: ''
  },
  {
    id: 43,
    question: `What is the most common cause of a stroke in the elderly population?`,
    options: ['Ischemia', 'Hemorrhage', 'Transient ischemic attack (TIA)', 'Aneurysm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 44,
    question: `A 60-year-old man presents with difficulty swallowing and weight loss. What is the most appropriate initial test?`,
    options: ['Barium swallow', 'Endoscopy', 'CT scan of the chest', 'Ultrasound of the abdomen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 45,
    question: `Which of the following is the best screening test for breast cancer in women over 50?`,
    options: ['Breast self-examination', 'Clinical breast examination', 'Mammography', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 46,
    question: `A patient presents with facial paralysis and a history of a recent upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Bell\'s palsy', 'Stroke', 'Multiple sclerosis', 'Guillain-Barré syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 47,
    question: `A patient presents with severe nausea and vomiting after starting a new medication for depression. What is the most likely side effect?`,
    options: ['Serotonin syndrome', 'Neuroleptic malignant syndrome', 'Extrapyramidal symptoms', 'Akathisia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 48,
    question: `A 3-year-old child presents with high fever, drooling, and a muffled voice. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Croup', 'Tonsillitis', 'Bronchiolitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 49,
    question: `In the context of ulcerative colitis, the risk of developing which condition increases?`,
    options: ['Diverticulitis', 'Colorectal cancer', 'Celiac disease', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 50,
    question: `A patient presents with fatigue, pallor, and splenomegaly. Peripheral blood smear shows teardrop-shaped cells. What is the most likely diagnosis?`,
    options: ['Thalassemia', 'Myelofibrosis', 'Sickle cell disease', 'Iron deficiency anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 51,
    question: `What is the most common type of lung cancer associated with smoking?`,
    options: ['Squamous cell carcinoma', 'Adenocarcinoma', 'Small cell lung carcinoma', 'Large cell carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 52,
    question: `A 60-year-old woman presents with postmenopausal bleeding. What is the most appropriate initial investigation?`,
    options: ['Pap smear', 'Transvaginal ultrasound', 'Endometrial biopsy', 'CT scan of the abdomen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 53,
    question: `A patient presents with shortness of breath and wheezing after exposure to a known allergen. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Bronchodilators', 'Antihistamines', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 54,
    question: `Which of the following is an autosomal recessive disorder?`,
    options: ['Huntington\'s disease', 'Marfan syndrome', 'Cystic fibrosis', 'Achondroplasia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 55,
    question: `A 45-year-old woman presents with progressive muscle weakness. Blood tests reveal elevated creatine kinase and positive anti-Jo-1 antibodies. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Polymyositis', 'Multiple sclerosis', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 56,
    question: `A patient presents with a painful vesicular rash along a single dermatome. What is the most likely diagnosis?`,
    options: ['Herpes zoster (shingles)', 'Eczema', 'Psoriasis', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 57,
    question: `A "butterfly rash" on the face is characteristic of which disease?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Eczema', 'Rosacea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 58,
    question: `A woman presents with infertility and elevated FSH. Diagnosis is:`,
    options: ['PCOS', 'Hypogonadotropic hypogonadism', 'Ovarian failure', 'Hyperprolactinemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 59,
    question: `A 30-year-old woman presents with abdominal pain, diarrhea, and a history of recurrent kidney stones. Lab tests show elevated serum calcium. What is the most likely diagnosis?`,
    options: ['Hyperparathyroidism', 'Hypothyroidism', 'Addison’s disease', 'Cushing’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 60,
    question: `A 75-year-old man presents with severe back pain and weight loss. Imaging shows vertebral compression fractures. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Osteosarcoma', 'Multiple myeloma', 'Spinal stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 61,
    question: `A patient presents with fatigue, pallor, and elevated blood urea nitrogen (BUN) and creatinine levels. What is the most likely diagnosis?`,
    options: ['Acute kidney injury', 'Chronic kidney disease', 'Nephrotic syndrome', 'Urinary tract infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 62,
    question: `Which of the following is a common side effect of loop diuretics like furosemide?`,
    options: ['Hyperkalemia', 'Hypercalcemia', 'Ototoxicity', 'Hypernatremia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 63,
    question: `A patient presents with severe abdominal pain, nausea, and vomiting after a high-fat meal. Which condition is most likely?`,
    options: ['Gastritis', 'Cholecystitis', 'Pancreatitis', 'Peptic ulcer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 64,
    question: `A child presents with a history of recurrent ear infections and a fluid-filled sac behind the tympanic membrane. What is the most likely diagnosis?`,
    options: ['Otitis media with effusion', 'Cholesteatoma', 'Otitis externa', 'Tympanic membrane perforation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 65,
    question: `A deficiency in which vitamin is associated with Wernicke-Korsakoff syndrome?`,
    options: ['Vitamin B6', 'Vitamin B1 (Thiamine)', 'Vitamin B12', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 66,
    question: `A patient presents with joint pain, morning stiffness, and swelling in the hands. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 67,
    question: `A 20-year-old female presents with irregular periods and excessive hair growth. What is the most likely diagnosis?`,
    options: ['Ovarian cancer', 'Polycystic ovary syndrome', 'Thyroid disorder', 'Adrenal tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 68,
    question: `Which of the following is a common complication of chronic kidney disease?`,
    options: ['Hyperkalemia', 'Hypoglycemia', 'Hypercalcemia', 'Hypophosphatemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 69,
    question: `A newborn presents with a "cherry-red spot" on the retina. What is the most likely diagnosis?`,
    options: ['Tay-Sachs disease', 'Niemann-Pick disease', 'Krabbe disease', 'Maple syrup urine disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 70,
    question: `A patient with rheumatoid arthritis presents with a dry cough and shortness of breath. What is the most likely complication?`,
    options: ['Pulmonary fibrosis', 'Pulmonary embolism', 'Pneumonia', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 71,
    question: `A 28-year-old female presents with abdominal pain, dysmenorrhea, and painful intercourse. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Ovarian cyst', 'Pelvic inflammatory disease', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 72,
    question: `Which of the following is a classic symptom of Graves' disease?`,
    options: ['Cold intolerance', 'Weight gain', 'Exophthalmos', 'Hypotension'],
    correct: 2,
    explanation: ''
  },
  {
    id: 73,
    question: `A patient presents with a sudden onset of severe headache described as a "thunderclap." What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 74,
    question: `A 30-year-old female presents with irregular menstruation and hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 75,
    question: `A young woman presents with fever, malaise, and a “butterfly” rash across her cheeks. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Scleroderma', 'Systemic lupus erythematosus (SLE)', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 76,
    question: `A 20-year-old male presents with testicular pain and swelling. What is the most likely diagnosis?`,
    options: ['Testicular torsion', 'Epididymitis', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 77,
    question: `A patient presents with chest pain, dyspnea, and a history of recent travel. A CT scan shows a filling defect in the pulmonary artery. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Myocardial infarction', 'Pneumonia', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 78,
    question: `Which of the following is the most common primary cardiac tumor in adults?`,
    options: ['Myxoma', 'Lipoma', 'Rhabdomyoma', 'Fibroma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 79,
    question: `A 28-year-old woman presents with dysmenorrhea and dyspareunia. Ultrasound shows small cysts on the ovary with hypoechoic areas. Diagnosis is:`,
    options: ['Dermoid cyst', 'Endometrioma', 'Serous cystadenoma', 'Follicular cyst'],
    correct: 1,
    explanation: ''
  },
  {
    id: 80,
    question: `Which laboratory finding is most indicative of acute liver failure?`,
    options: ['Elevated alkaline phosphatase', 'Elevated aminotransferases (AST/ALT)', 'Elevated bilirubin', 'Decreased prothrombin time'],
    correct: 1,
    explanation: ''
  },
  {
    id: 81,
    question: `The most effective treatment for preventing migraine headaches is:`,
    options: ['NSAIDs', 'Triptans', 'Beta-blockers', 'Opioids'],
    correct: 2,
    explanation: ''
  },
  {
    id: 82,
    question: `A 28-year-old male presents with painful genital ulcers and tender inguinal lymphadenopathy. What is the most likely causative organism?`,
    options: ['Treponema pallidum', 'Herpes simplex virus', 'Haemophilus ducreyi', 'Chlamydia trachomatis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 83,
    question: `A patient presents with fatigue, weight gain, and sensitivity to cold. What lab test would most likely show abnormal results?`,
    options: ['TSH', 'T3', 'T4', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 84,
    question: `A 65-year-old male presents with difficulty swallowing and unintentional weight loss. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 85,
    question: `Which of the following conditions is associated with "swan neck" deformities?`,
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Psoriatic arthritis', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 86,
    question: `Which of the following is the most common cause of acute pancreatitis?`,
    options: ['Alcohol abuse', 'Gallstones', 'Hyperlipidemia', 'Trauma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 87,
    question: `A 3-year-old child is brought in with a barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Croup', 'Bronchiolitis', 'Asthma', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 88,
    question: `The first-line treatment for hypothyroidism is:`,
    options: ['Propylthiouracil', 'Levothyroxine', 'Methimazole', 'Iodine'],
    correct: 1,
    explanation: ''
  },
  {
    id: 89,
    question: `In the management of hyperlipidemia, what is the primary action of statins?`,
    options: ['Increase HDL cholesterol', 'Decrease LDL cholesterol', 'Increase triglycerides', 'Decrease total cholesterol'],
    correct: 0,
    explanation: ''
  },
  {
    id: 90,
    question: `A young woman presents with heavy menstrual bleeding and a history of pelvic pain. An ultrasound shows an enlarged uterus with multiple fibroids. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Ovarian cysts', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 91,
    question: `Which medication is the first-line treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 92,
    question: `Which of the following conditions is characterized by "flea-bitten" appearance on renal imaging?`,
    options: ['Glomerulonephritis', 'Pyelonephritis', 'Renal artery stenosis', 'Diabetic nephropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 93,
    question: `A 70-year-old female presents with a sudden loss of vision in her right eye and a pale retina with a cherry-red spot. What is the most likely diagnosis?`,
    options: ['Central retinal artery occlusion', 'Retinal detachment', 'Diabetic retinopathy', 'Macular degeneration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 94,
    question: `In which condition is the "string of pearls" appearance on ultrasound observed?`,
    options: ['Polycystic ovary syndrome', 'Ectopic pregnancy', 'Ovarian cancer', 'Endometriosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 95,
    question: `A patient presents with a history of chronic alcohol use and now has confusion, ataxia, and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Alcohol withdrawal delirium'],
    correct: 0,
    explanation: ''
  },
  {
    id: 96,
    question: `A 5-year-old child presents with fatigue, petechiae, and recurrent infections. Laboratory results show pancytopenia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Leukemia', 'Aplastic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 97,
    question: `A child presents with recurrent otitis media. What is the most likely causative organism?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 98,
    question: `In which of the following conditions would you expect to find "string of pearls" sign on imaging?`,
    options: ['Ovarian cyst', 'Ectopic pregnancy', 'Tubo-ovarian abscess', 'Polycystic ovary syndrome (PCOS)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 99,
    question: `A patient with asthma is prescribed a long-acting beta-agonist. What is the most common medication in this class?`,
    options: ['Albuterol', 'Salmeterol', 'Terbutaline', 'Levalbuterol'],
    correct: 1,
    explanation: ''
  },
  {
    id: 100,
    question: `Which of the following conditions is associated with a “salt and pepper” appearance of the skull on X-ray?`,
    options: ['Multiple myeloma', 'Paget’s disease', 'Osteoporosis', 'Hyperparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 101,
    question: `A 5-year-old child presents with a fever, sore throat, and a red rash that feels like sandpaper. What is the most likely diagnosis?`,
    options: ['Measles', 'Scarlet fever', 'Chickenpox', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 102,
    question: `A 25-year-old female presents with dyspnea, wheezing, and a history of asthma. What is the most appropriate initial treatment?`,
    options: ['Oral corticosteroids', 'Inhaled beta-agonist', 'Anticholinergic', 'Leukotriene receptor antagonist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 103,
    question: `A patient presents with abdominal pain, distension, and constipation. An X-ray shows air-fluid levels. What is the most likely diagnosis?`,
    options: ['Intestinal obstruction', 'Appendicitis', 'Diverticulitis', 'Perforated viscus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 104,
    question: `A woman with preeclampsia develops tonic–clonic seizures. This condition is called:`,
    options: ['Gestational hypertension', 'Severe preeclampsia', 'Eclampsia', 'HELLP syndrome'],
    correct: 2,
    explanation: ''
  },
  {
    id: 105,
    question: `The most common presenting symptom of ovarian carcinoma is:`,
    options: ['Early menstrual irregularity', 'Abdominal distension', 'Dysuria', 'Pelvic pain only'],
    correct: 1,
    explanation: ''
  },
  {
    id: 106,
    question: `Which of the following investigations is most useful in diagnosing pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'D-dimer test', 'ECG'],
    correct: 1,
    explanation: ''
  },
  {
    id: 107,
    question: `Which of the following is used to monitor the therapeutic response in patients with thyroid cancer?`,
    options: ['Thyroid-stimulating hormone (TSH)', 'Thyroxine (T4)', 'Thyroglobulin', 'Triiodothyronine (T3)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 108,
    question: `A 45-year-old male presents with sudden onset of severe chest pain and dyspnea. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Aortic dissection', 'Myocardial infarction', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 109,
    question: `A patient presents with fatigue, jaundice, and dark urine. Liver function tests reveal elevated ALT and AST levels. What is the most likely diagnosis?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Alcoholic liver disease', 'Non-alcoholic fatty liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 110,
    question: `Which laboratory test is used to diagnose rheumatoid arthritis?`,
    options: ['Complete blood count (CBC)', 'Rheumatoid factor (RF)', 'Erythrocyte sedimentation rate (ESR)', 'Antinuclear antibody (ANA)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 111,
    question: `A 28-year-old female with a history of obesity presents with irregular menses and hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Ovarian cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 112,
    question: `A patient with a family history of breast cancer is found to have BRCA1 mutations. What is the most appropriate management?`,
    options: ['Regular mammograms', 'Prophylactic mastectomy', 'Chemotherapy', 'Hormonal therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 113,
    question: `A 60-year-old woman presents with a firm, mobile breast mass. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Cyst', 'Invasive carcinoma', 'Lipoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 114,
    question: `A patient presents with pallor, fatigue, and a craving for ice. Blood tests reveal microcytic anemia. What is the most likely cause?`,
    options: ['Iron deficiency', 'Vitamin B12 deficiency', 'Folic acid deficiency', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 115,
    question: `Which of the following is used as a first-line treatment for hyperthyroidism?`,
    options: ['Beta-blockers', 'Levothyroxine', 'Methimazole', 'Radioactive iodine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 116,
    question: `Which of the following is the most common cause of acute viral hepatitis worldwide?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis E'],
    correct: 0,
    explanation: ''
  },
  {
    id: 117,
    question: `What is the primary treatment for chronic obstructive pulmonary disease (COPD)?`,
    options: ['Corticosteroids', 'Long-acting beta-agonists', 'Antibiotics', 'Anticholinergics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 118,
    question: `A 70-year-old female presents with confusion, tremors, and a "mask-like" face. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Parkinson\'s disease', 'Frontotemporal dementia', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 119,
    question: `A patient with a history of asthma presents with sudden onset chest tightness and wheezing. What is the first-line medication?`,
    options: ['Long-acting beta-agonist', 'Corticosteroid', 'Short-acting beta-agonist', 'Anticholinergic'],
    correct: 2,
    explanation: ''
  },
  {
    id: 120,
    question: `A patient presents with a rash that is worse in the sun and joint pain. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 121,
    question: `In which condition is pulsus paradoxus typically seen?`,
    options: ['Aortic stenosis', 'Cardiac tamponade', 'Pulmonary hypertension', 'Mitral valve prolapse'],
    correct: 0,
    explanation: ''
  },
  {
    id: 122,
    question: `A woman with infertility has elevated prolactin levels. First-line treatment is:`,
    options: ['Surgery', 'Bromocriptine', 'Oral contraceptives', 'Clomiphene citrate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 123,
    question: `Which condition is characterized by "seagull wings" on a chest X-ray?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Pneumonia', 'Lymphangioleiomyomatosis'],
    correct: 3,
    explanation: ''
  },
  {
    id: 124,
    question: `What is the most common cause of hypercalcemia in hospitalized patients?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D intoxication', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 125,
    question: `A 70-year-old man presents with new-onset dysphagia and a feeling of food stuck in his throat. What is the most appropriate diagnostic test?`,
    options: ['Endoscopy', 'Barium swallow', 'Esophageal manometry', 'CT scan of the chest'],
    correct: 0,
    explanation: ''
  },
  {
    id: 126,
    question: `A 4-year-old child presents with a swollen knee and fever. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Osteomyelitis', 'Reactive arthritis', 'Trauma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 127,
    question: `A patient presents with acute onset of chest pain, shortness of breath, and a history of deep vein thrombosis. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Myocardial infarction', 'Aortic dissection', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 128,
    question: `Which condition is most commonly associated with a "thumb sign" on lateral neck X-rays in children?`,
    options: ['Croup', 'Epiglottitis', 'Foreign body aspiration', 'Laryngomalacia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 129,
    question: `A child presents with failure to thrive, irritability, and a distended abdomen. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Intestinal obstruction', 'Gastroesophageal reflux', 'Malnutrition'],
    correct: 0,
    explanation: ''
  },
  {
    id: 130,
    question: `Which type of joint is found in the knee?`,
    options: ['Hinge joint', 'Ball-and-socket joint', 'Pivot joint', 'Saddle joint'],
    correct: 0,
    explanation: ''
  },
  {
    id: 131,
    question: `A 55-year-old male presents with a painful swelling in the right groin. What is the most likely diagnosis?`,
    options: ['Inguinal hernia', 'Testicular torsion', 'Epididymitis', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 132,
    question: `What is the primary cause of hemolytic anemia in patients with sickle cell disease?`,
    options: ['Autoimmune reaction', 'Infections', 'Red blood cell membrane defects', 'Vaso-occlusive crises'],
    correct: 3,
    explanation: ''
  },
  {
    id: 133,
    question: `A patient presents with chronic cough, hemoptysis, and weight loss. A chest X-ray shows cavitary lesions. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Sarcoidosis', 'Fungal infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 134,
    question: `A child with a known peanut allergy accidentally ingests peanuts and develops anaphylaxis. What is the first-line treatment?`,
    options: ['Antihistamines', 'Epinephrine', 'Corticosteroids', 'Oxygen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 135,
    question: `A child presents with developmental delay and a "deer-in-headlights" gaze. What is the most likely diagnosis?`,
    options: ['Autism spectrum disorder', 'Down syndrome', 'Fragile X syndrome', 'Rett syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 136,
    question: `A 40-year-old man presents with sudden onset of severe abdominal pain, and his abdomen is rigid on examination. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Perforated peptic ulcer', 'Cholecystitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 137,
    question: `Which of the following is the first-line treatment for acute bacterial meningitis in adults?`,
    options: ['Ceftriaxone', 'Vancomycin', 'Ampicillin', 'Metronidazole'],
    correct: 0,
    explanation: ''
  },
  {
    id: 138,
    question: `In managing diabetes, which of the following is the target HbA1c level for most adults?`,
    options: ['Less than 5.0%', 'Less than 6.5%', 'Less than 7.5%', 'Less than 8.0%'],
    correct: 0,
    explanation: ''
  },
  {
    id: 139,
    question: `Which condition is characterized by a decrease in bone density?`,
    options: ['Osteoporosis', 'Osteoarthritis', 'Osteomyelitis', 'Osteosarcoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 140,
    question: `A 70-year-old man presents with sudden onset of severe headache. What should be suspected?`,
    options: ['Tension headache', 'Subarachnoid hemorrhage', 'Migraine', 'Cluster headache'],
    correct: 1,
    explanation: ''
  },
  {
    id: 141,
    question: `A patient presents with severe abdominal pain and a "board-like" abdomen. What condition should be suspected?`,
    options: ['Acute pancreatitis', 'Perforated viscus', 'Acute cholecystitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 142,
    question: `The presence of "Bence Jones proteins" in urine is indicative of which condition?`,
    options: ['Multiple myeloma', 'Waldenström macroglobulinemia', 'Chronic lymphocytic leukemia', 'Acute lymphoblastic leukemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 143,
    question: `A patient with chronic kidney disease presents with metabolic acidosis. What is the most appropriate management?`,
    options: ['Sodium bicarbonate', 'Diuretics', 'Dialysis', 'Insulin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 144,
    question: `A patient presents with a pruritic rash on the elbows and knees. What is the most likely diagnosis?`,
    options: ['Eczema', 'Psoriasis', 'Dermatitis', 'Tinea corporis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 145,
    question: `A patient presents with a persistent dry cough and recent history of taking an ACE inhibitor. What is the most likely cause of the cough?`,
    options: ['Allergic reaction', 'Drug side effect', 'Infection', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 146,
    question: `A patient presents with dark, tarry stools and has a history of chronic NSAID use. What is the most likely cause of this condition?`,
    options: ['Gastritis', 'Peptic ulcer disease', 'Esophageal varices', 'Colorectal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 147,
    question: `A patient presents with joint pain and morning stiffness that improves throughout the day. What condition is most likely?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 148,
    question: `The most common site for endometriosis is:`,
    options: ['Ovary', 'Pouch of Douglas', 'Uterosacral ligaments', 'Rectovaginal septum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 149,
    question: `A patient presents with acute chest pain that is relieved by sitting forward and worsened by lying down. The ECG shows diffuse ST-segment elevation. What is the most likely diagnosis?`,
    options: ['Acute myocardial infarction', 'Pericarditis', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 150,
    question: `What is the most common site of metastasis in breast cancer?`,
    options: ['Liver', 'Brain', 'Bone', 'Lungs'],
    correct: 0,
    explanation: ''
  },
  {
    id: 151,
    question: `Which condition is associated with a "string of pearls" appearance on imaging?`,
    options: ['Ovarian cysts', 'Polycystic ovary syndrome', 'Endometriosis', 'Uterine fibroids'],
    correct: 1,
    explanation: ''
  },
  {
    id: 152,
    question: `In patients with asthma, which of the following is used for immediate relief of acute symptoms?`,
    options: ['Inhaled corticosteroids', 'Long-acting beta agonists (LABAs)', 'Short-acting beta agonists (SABAs)', 'Leukotriene receptor antagonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 153,
    question: `A patient presents with a scaly, red rash on the face and ears, and reports feeling fatigued. What is the most likely diagnosis?`,
    options: ['Lupus erythematosus', 'Psoriasis', 'Dermatitis', 'Eczema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 154,
    question: `Which of the following is a common side effect of long-term use of proton pump inhibitors (PPIs)?`,
    options: ['Osteoporosis', 'Hyperkalemia', 'Weight gain', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 155,
    question: `Which of the following is a characteristic feature of Type 2 diabetes?`,
    options: ['Ketosis-prone', 'Absolute insulin deficiency', 'Insulin resistance', 'Occurs mainly in childhood'],
    correct: 2,
    explanation: ''
  },
  {
    id: 156,
    question: `The most common cause of shoulder dystocia is:`,
    options: ['Prematurity', 'Low birth weight', 'Macrosomia', 'Breech presentation'],
    correct: 2,
    explanation: ''
  },
  {
    id: 157,
    question: `A 25-year-old male presents with sudden onset of severe testicular pain. What is the most likely diagnosis?`,
    options: ['Testicular torsion', 'Epididymitis', 'Hernia', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 158,
    question: `Which condition is characterized by bilateral swelling of the parotid glands?`,
    options: ['Mumps', 'Rubella', 'Measles', 'Diphtheria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 159,
    question: `A child presents with a high fever and a stiff neck. What is the most appropriate initial test to confirm the diagnosis?`,
    options: ['MRI of the brain', 'CT scan of the abdomen', 'Lumbar puncture', 'Chest X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 160,
    question: `Which of the following is the first-line treatment for mild preeclampsia?`,
    options: ['Corticosteroids', 'Bed rest and monitoring', 'Magnesium sulfate', 'Antihypertensives'],
    correct: 0,
    explanation: ''
  },
  {
    id: 161,
    question: `A patient presents with sudden onset of severe headaches, nausea, and a stiff neck. What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension-type headache', 'Meningitis', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 162,
    question: `A 50-year-old female presents with a sudden onset of severe abdominal pain, vomiting, and an inability to pass stool. What is the most likely diagnosis?`,
    options: ['Bowel obstruction', 'Appendicitis', 'Pancreatitis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 163,
    question: `A patient presents with a history of hypertension and sudden loss of vision in one eye. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Vitreous hemorrhage', 'Acute glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 164,
    question: `The classic triad of symptoms for renal cell carcinoma includes:`,
    options: ['Hematuria, flank pain, abdominal mass', 'Flank pain, fever, weight loss', 'Hematuria, dysuria, urgency', 'Abdominal pain, jaundice, ascites'],
    correct: 0,
    explanation: ''
  },
  {
    id: 165,
    question: `A common side effect of ACE inhibitors is:`,
    options: ['Hypokalemia', 'Cough', 'Bradycardia', 'Constipation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 166,
    question: `The presence of "shilling test" is associated with the diagnosis of:`,
    options: ['Celiac disease', 'Vitamin B12 deficiency', 'Lactose intolerance', 'Iron deficiency anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 167,
    question: `What is the most common type of stroke in adults?`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Transient ischemic attack', 'Cryptogenic stroke'],
    correct: 1,
    explanation: ''
  },
  {
    id: 168,
    question: `A child presents with a high fever and refusal to move the arm after a recent upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Osteomyelitis', 'Septic arthritis', 'Viral myositis', 'Bursitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 169,
    question: `A pregnant woman at 28 weeks gestation presents with elevated blood pressure and proteinuria. What is the most likely diagnosis?`,
    options: ['Gestational hypertension', 'Preeclampsia', 'Eclampsia', 'Chronic hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 170,
    question: `A 6-month-old infant presents with failure to thrive and frequent respiratory infections. What condition should be suspected?`,
    options: ['Cystic fibrosis', 'Asthma', 'Congenital heart disease', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 171,
    question: `The preferred method for diagnosing tuberculosis is:`,
    options: ['Chest X-ray', 'Tuberculin skin test', 'Sputum culture', 'Bronchoscopy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 172,
    question: `A patient presents with a sudden onset of severe headache described as "the worst headache of my life." What is the most likely diagnosis?`,
    options: ['Subarachnoid hemorrhage', 'Migraine', 'Tension headache', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 173,
    question: `A patient presents with jaundice, dark urine, and pale stools. What is the likely cause?`,
    options: ['Hemolytic anemia', 'Hepatitis', 'Biliary obstruction', 'Cirrhosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 174,
    question: `A 55-year-old male with a history of chronic alcohol use presents with tremors and hallucinations. What is the most likely diagnosis?`,
    options: ['Alcohol withdrawal syndrome', 'Delirium tremens', 'Wernicke\'s encephalopathy', 'Korsakoff syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 175,
    question: `Which of the following is the most common cause of meningitis in neonates?`,
    options: ['Haemophilus influenzae', 'Streptococcus pneumoniae', 'Escherichia coli', 'Group B Streptococcus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 176,
    question: `A 50-year-old male presents with fatigue, weight loss, and jaundice. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Cirrhosis', 'Pancreatic cancer', 'Gallbladder disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 177,
    question: `The gold standard for diagnosing pulmonary embolism is:`,
    options: ['Ventilation-perfusion (V/Q) scan', 'CT pulmonary angiography', 'Chest X-ray', 'Echocardiogram'],
    correct: 0,
    explanation: ''
  },
  {
    id: 178,
    question: `A pregnant woman presents with sudden painless vaginal bleeding. The uterus is soft. Diagnosis:`,
    options: ['Placenta previa', 'Placental abruption', 'Uterine rupture', 'Vasa previa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 179,
    question: `What is the main complication of untreated hyperthyroidism?`,
    options: ['Osteoporosis', 'Myxedema coma', 'Thyroid storm', 'Hypoglycemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 180,
    question: `The drug of choice for treating generalized anxiety disorder is:`,
    options: ['Benzodiazepines', 'Selective serotonin reuptake inhibitors (SSRIs)', 'Beta-blockers', 'Tricyclic antidepressants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 181,
    question: `What is the hallmark laboratory finding in diabetic ketoacidosis (DKA)?`,
    options: ['Hyperglycemia', 'Hypokalemia', 'Metabolic acidosis', 'Hyponatremia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 182,
    question: `What is the first-line treatment for acute asthma exacerbation?`,
    options: ['Inhaled corticosteroids', 'Short-acting beta-agonists', 'Long-acting beta-agonists', 'Anticholinergics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 183,
    question: `A 40-year-old woman presents with weight gain, moon face, and purple striae on the abdomen. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Hypothyroidism', 'Cushing\'s syndrome', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 184,
    question: `What is the most common genetic cause of intellectual disability?`,
    options: ['Fragile X syndrome', 'Down syndrome', 'Klinefelter syndrome', 'Turner syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 185,
    question: `A patient with asthma is prescribed a short-acting beta-agonist for acute relief. Which medication is commonly used?`,
    options: ['Salmeterol', 'Albuterol', 'Beclomethasone', 'Montelukast'],
    correct: 0,
    explanation: ''
  },
  {
    id: 186,
    question: `A 50-year-old woman presents with chronic bloating, abdominal pain, and alternating constipation and diarrhea. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome (IBS)', 'Inflammatory bowel disease (IBD)', 'Celiac disease', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 187,
    question: `The most common cause of hypothyroidism in adults is:`,
    options: ['Iodine deficiency', 'Hashimoto\'s thyroiditis', 'Thyroidectomy', 'Radiation therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 188,
    question: `A 40-year-old woman presents with irregular menstrual cycles, hot flashes, and mood swings. What is the most likely diagnosis?`,
    options: ['Menopause', 'Polycystic ovary syndrome', 'Hyperthyroidism', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 189,
    question: `A patient presents with chest pain and ST elevation on an ECG. What is the most immediate treatment?`,
    options: ['Beta-blockers', 'Aspirin', 'Thrombolytics', 'Nitroglycerin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 190,
    question: `A patient with a history of gout presents with a swollen big toe. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 191,
    question: `In which of the following conditions is the "painless hematuria" a classic symptom?`,
    options: ['Ureteral stone', 'Bladder cancer', 'Urinary tract infection', 'Prostatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 192,
    question: `A woman presents with infertility and is found to have multiple cysts on her ovaries. What is the most likely diagnosis?`,
    options: ['Ovarian cancer', 'Polycystic ovary syndrome (PCOS)', 'Endometriosis', 'Hormonal imbalance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 193,
    question: `A child presents with recurrent episodes of abdominal pain, and there is a family history of similar symptoms. What is the most likely diagnosis?`,
    options: ['Familial Mediterranean fever', 'Appendicitis', 'Intestinal obstruction', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 194,
    question: `Which of the following is a common cause of hypercalcemia?`,
    options: ['Chronic kidney disease', 'Hyperparathyroidism', 'Hypoparathyroidism', 'Vitamin D deficiency'],
    correct: 1,
    explanation: ''
  },
  {
    id: 195,
    question: `A patient presents with chronic diarrhea and weight loss. A biopsy shows non-caseating granulomas. What is the likely diagnosis?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Celiac disease', 'Irritable bowel syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 196,
    question: `A 45-year-old woman presents with a lump in her breast and abnormal mammogram findings. What is the most appropriate next step?`,
    options: ['Breast ultrasound', 'MRI of the breast', 'Biopsy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 197,
    question: `Which of the following conditions is most commonly associated with proteinuria?`,
    options: ['Hypertension', 'Diabetes mellitus', 'Heart failure', 'Liver cirrhosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 198,
    question: `A patient presents with a severe headache, nausea, and a stiff neck. Lumbar puncture reveals gram-negative diplococci. What is the most likely causative organism?`,
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Listeria monocytogenes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 199,
    question: `Which of the following is a hallmark feature of nephrotic syndrome?`,
    options: ['Proteinuria', 'Hematuria', 'Hypocalcemia', 'Hyperkalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 200,
    question: `A 40-year-old woman presents with bilateral hand stiffness and morning joint pain lasting more than 1 hour. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 201,
    question: `A 25-year-old female presents with a new-onset seizure. What is the most appropriate imaging study to perform first?`,
    options: ['MRI of the brain', 'CT scan of the brain', 'EEG', 'Lumbar puncture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 202,
    question: `In which condition would you find a "sunburst" pattern on X-ray?`,
    options: ['Osteosarcoma', 'Ewing\'s sarcoma', 'Chondrosarcoma', 'Osteochondroma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 203,
    question: `A 45-year-old male presents with fatigue, pallor, and a sore tongue. What deficiency is most likely responsible for these symptoms?`,
    options: ['Vitamin B12 deficiency', 'Iron deficiency', 'Folate deficiency', 'Vitamin D deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 204,
    question: `A patient with a history of seizures is started on phenytoin. What laboratory test should be monitored regularly?`,
    options: ['Liver function tests', 'Complete blood count', 'Serum drug levels', 'Thyroid function tests'],
    correct: 0,
    explanation: ''
  },
  {
    id: 205,
    question: `Which of the following conditions is characterized by progressive muscle weakness and atrophy?`,
    options: ['Myasthenia gravis', 'Muscular dystrophy', 'Multiple sclerosis', 'Amyotrophic lateral sclerosis (ALS)'],
    correct: 3,
    explanation: ''
  },
  {
    id: 206,
    question: `A woman with heavy menstrual bleeding has a 5-cm submucosal fibroid. The definitive treatment is:`,
    options: ['Myomectomy', 'Hormonal therapy', 'Observation', 'Hysterectomy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 207,
    question: `A patient with a history of hyperlipidemia presents with xanthomas. What condition does this suggest?`,
    options: ['Familial hypercholesterolemia', 'Hypothyroidism', 'Diabetes mellitus', 'Liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 208,
    question: `What is the most common cause of acute kidney injury in hospitalized patients?`,
    options: ['Prerenal azotemia', 'Intrinsic renal injury', 'Postrenal obstruction', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 209,
    question: `A patient presents with a sudden onset of severe abdominal pain and back pain. CT scan shows a ruptured abdominal aortic aneurysm. What is the most appropriate next step in management?`,
    options: ['Observation', 'Immediate surgery', 'IV fluids', 'Pain management'],
    correct: 0,
    explanation: ''
  },
  {
    id: 210,
    question: `What is the main treatment for chronic obstructive pulmonary disease (COPD)?`,
    options: ['Long-acting beta-agonists (LABAs)', 'Inhaled corticosteroids', 'Oxygen therapy', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 211,
    question: `A 5-year-old boy presents with a history of frequent ear infections. What is the most likely complication of recurrent otitis media?`,
    options: ['Meningitis', 'Mastoiditis', 'Hearing loss', 'Cholesteatoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 212,
    question: `Which of the following is a characteristic feature of Crohn's disease?`,
    options: ['Continuous lesions', 'Transmural inflammation', 'Primarily affects the rectum', 'Crypt abscesses'],
    correct: 1,
    explanation: ''
  },
  {
    id: 213,
    question: `A 65-year-old male presents with sudden onset of severe chest pain radiating to the back. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 214,
    question: `A 55-year-old male presents with nocturnal cough and orthopnea. Which of the following is the most likely diagnosis?`,
    options: ['Gastroesophageal reflux disease', 'Heart failure', 'Asthma', 'Sleep apnea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 215,
    question: `A patient with a history of smoking presents with a persistent cough and weight loss. What is the most appropriate initial test?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum analysis', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 216,
    question: `A 35-year-old woman presents with a butterfly-shaped rash across her cheeks, joint pain, and photosensitivity. Lab tests reveal a positive ANA. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Dermatomyositis', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 217,
    question: `A 30-year-old male presents with a persistent cough, night sweats, and weight loss. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Pneumonia', 'Chronic obstructive pulmonary disease (COPD)', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 218,
    question: `A 32-year-old woman presents with fever, chills, flank pain, and dysuria. Urine culture is positive for Escherichia coli. What is the most likely diagnosis?`,
    options: ['Pyelonephritis', 'Cystitis', 'Urethritis', 'Vaginitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 219,
    question: `Which of the following is the most sensitive test for diagnosing pulmonary embolism?`,
    options: ['D-dimer', 'Chest X-ray', 'Ventilation-perfusion (V/Q) scan', 'CT pulmonary angiography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 220,
    question: `Which type of lung cancer is most commonly associated with smoking?`,
    options: ['Adenocarcinoma', 'Squamous cell carcinoma', 'Large cell carcinoma', 'Small cell carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 221,
    question: `The most common cause of hyperthyroidism is:`,
    options: ['Thyroiditis', 'Thyroid adenoma', 'Graves\' disease', 'Pituitary adenoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 222,
    question: `A 28-year-old woman presents with palpitations, sweating, and a feeling of impending doom. Her heart rate is 130 bpm, and an ECG shows a regular narrow complex tachycardia. What is the most appropriate initial treatment?`,
    options: ['IV adenosine', 'IV amiodarone', 'IV beta-blocker', 'Cardioversion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 223,
    question: `The "Hematocrit" is a measure of:`,
    options: ['White blood cells', 'Red blood cell mass', 'Platelet count', 'Serum electrolytes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 224,
    question: `Which of the following medications is used as a first-line treatment for chronic heart failure?`,
    options: ['Digoxin', 'Beta-blockers', 'Diuretics', 'ACE inhibitors'],
    correct: 0,
    explanation: ''
  },
  {
    id: 225,
    question: `A child presents with a swollen knee, fever, and refusal to bear weight. What is the most likely diagnosis?`,
    options: ['Osteomyelitis', 'Septic arthritis', 'Juvenile idiopathic arthritis', 'Trauma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 226,
    question: `A 50-year-old male presents with dysphagia and weight loss. Endoscopy reveals an irregular mass in the esophagus. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 227,
    question: `In which of the following conditions is the "potato-like" mass commonly seen in children?`,
    options: ['Wilms tumor', 'Neuroblastoma', 'Hepatoblastoma', 'Rhabdomyosarcoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 228,
    question: `A 4-year-old child presents with a history of persistent diarrhea and failure to thrive. Which condition should be suspected?`,
    options: ['Lactose intolerance', 'Celiac disease', 'Intussusception', 'Gastroesophageal reflux'],
    correct: 0,
    explanation: ''
  },
  {
    id: 229,
    question: `A patient presents with an itchy, blistering rash after exposure to poison ivy. What is the most likely diagnosis?`,
    options: ['Contact dermatitis', 'Eczema', 'Psoriasis', 'Impetigo'],
    correct: 0,
    explanation: ''
  },
  {
    id: 230,
    question: `A patient with a history of rheumatoid arthritis presents with new joint pain and swelling. What is the most appropriate next step in management?`,
    options: ['Joint aspiration', 'MRI of the joints', 'Increase methotrexate dose', 'Prescribe corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 231,
    question: `What is the most common presentation of gallstones?`,
    options: ['Acute cholecystitis', 'Biliary colic', 'Pancreatitis', 'Jaundice'],
    correct: 1,
    explanation: ''
  },
  {
    id: 232,
    question: `Which laboratory test is commonly used to monitor warfarin therapy?`,
    options: ['APTT', 'PT/INR', 'D-dimer', 'CBC'],
    correct: 1,
    explanation: ''
  },
  {
    id: 233,
    question: `A patient presents with a history of uncontrolled diabetes and foot ulcers. What is the most likely complication?`,
    options: ['Peripheral neuropathy', 'Charcot foot', 'Osteomyelitis', 'Gangrene'],
    correct: 0,
    explanation: ''
  },
  {
    id: 234,
    question: `Which of the following is a classic feature of osteoarthritis?`,
    options: ['Symmetrical joint involvement', 'Joint stiffness improving with activity', 'Presence of Heberden’s nodes', 'Systemic symptoms like fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 235,
    question: `The most common indication for cesarean section is:`,
    options: ['Fetal distress', 'Previous cesarean section', 'Breech presentation', 'Prolonged labor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 236,
    question: `A 50-year-old male presents with jaundice and dark urine. Lab tests reveal elevated conjugated bilirubin. What is the most likely diagnosis?`,
    options: ['Hemolytic anemia', 'Hepatitis', 'Cholestasis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 237,
    question: `A newborn presents with a heart murmur and failure to thrive. An echocardiogram reveals a ventricular septal defect. What is the most likely complication if left untreated?`,
    options: ['Atrial fibrillation', 'Pulmonary hypertension', 'Myocardial infarction', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 238,
    question: `A patient with a history of ischemic heart disease presents with chest pain that radiates to the left arm. What is the most appropriate initial management?`,
    options: ['Aspirin', 'Nitroglycerin', 'Beta-blockers', 'Statins'],
    correct: 0,
    explanation: ''
  },
  {
    id: 239,
    question: `In which type of anemia would you expect to see microcytic, hypochromic red blood cells?`,
    options: ['Iron deficiency anemia', 'Megaloblastic anemia', 'Aplastic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 240,
    question: `A 25-year-old man presents with scrotal pain and swelling. Doppler ultrasound shows decreased blood flow. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 241,
    question: `In which of the following conditions would you expect a "cannonball" metastasis pattern on imaging?`,
    options: ['Lung cancer', 'Renal cell carcinoma', 'Osteosarcoma', 'Colorectal cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 242,
    question: `A 65-year-old man presents with a family history of colorectal cancer. At what age should he start screening?`,
    options: ['40 years', '45 years', '50 years', '55 years'],
    correct: 0,
    explanation: ''
  },
  {
    id: 243,
    question: `Which of the following is a classic symptom of hyperparathyroidism?`,
    options: ['Tetany', 'Bone pain', 'Weight loss', 'Hyperpigmentation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 244,
    question: `The "pencil-thin stools" are a classic sign of which gastrointestinal condition?`,
    options: ['Colon cancer', 'Inflammatory bowel disease', 'Irritable bowel syndrome', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 245,
    question: `What is the most common cause of hypercalcemia in outpatient settings?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D toxicity', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 246,
    question: `A woman presents with amenorrhea, positive pregnancy test, and adnexal mass on ultrasound. The most likely diagnosis is:`,
    options: ['Threatened abortion', 'Molar pregnancy', 'Ectopic pregnancy', 'Ovarian cyst'],
    correct: 2,
    explanation: ''
  },
  {
    id: 247,
    question: `What is the most common presentation of hyperparathyroidism?`,
    options: ['Hypercalcemia', 'Hypocalcemia', 'Hypophosphatemia', 'Hyperphosphatemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 248,
    question: `A 70-year-old male presents with difficulty swallowing and weight loss. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Gastroesophageal reflux disease (GERD)', 'Achalasia', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 249,
    question: `Which of the following is the primary mechanism of action of ACE inhibitors?`,
    options: ['Increase cardiac output', 'Decrease peripheral vascular resistance', 'Increase blood volume', 'Decrease heart rate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 250,
    question: `A 35-year-old female presents with fever, joint pain, and a butterfly rash. What is the likely diagnosis?`,
    options: ['Psoriasis', 'Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Dermatomyositis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 251,
    question: `A patient presents with an acute onset of severe chest pain, and an ECG shows ST-segment depression. What is the most likely diagnosis?`,
    options: ['Unstable angina', 'NSTEMI (Non-ST Elevation Myocardial Infarction)', 'STEMI (ST Elevation Myocardial Infarction)', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 252,
    question: `The best screening test for cervical cancer is:`,
    options: ['HPV testing', 'Pap smear', 'Colposcopy', 'Biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 253,
    question: `A 45-year-old man presents with generalized weakness and darkening of the skin. Blood tests show hyperkalemia and hyponatremia. What is the most likely diagnosis?`,
    options: ['Addison’s disease', 'Cushing’s syndrome', 'Hypoparathyroidism', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 254,
    question: `A 45-year-old man presents with chest pain and ST elevation on ECG. What is the most urgent intervention?`,
    options: ['Antiplatelet therapy', 'Nitroglycerin', 'PCI (Percutaneous coronary intervention)', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 255,
    question: `What is the typical initial management for a patient with suspected acute coronary syndrome?`,
    options: ['Beta-blockers', 'Anticoagulation', 'Aspirin', 'Thrombolytics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 256,
    question: `Which of the following is a potential side effect of long-term corticosteroid use?`,
    options: ['Hyperkalemia', 'Osteoporosis', 'Hypoglycemia', 'Hypotension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 257,
    question: `What is the primary pathogen involved in osteomyelitis in adults?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Escherichia coli', 'Pseudomonas aeruginosa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 258,
    question: `A 50-year-old male presents with pain in the first metatarsophalangeal joint after a rich meal. What is the most likely diagnosis?`,
    options: ['Gout', 'Osteoarthritis', 'Pseudogout', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 259,
    question: `A 12-year-old boy presents with a red, swollen knee and a fever after a recent upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Reactive arthritis', 'Septic arthritis', 'Osgood-Schlatter disease', 'Juvenile idiopathic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 260,
    question: `A 4-year-old child presents with a rash, fever, and conjunctivitis. What is the most likely diagnosis?`,
    options: ['Measles', 'Chickenpox', 'Rubella', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 261,
    question: `A 27-year-old woman presents with a history of recurrent spontaneous abortions. Blood tests show a positive lupus anticoagulant. What is the most likely diagnosis?`,
    options: ['Antiphospholipid syndrome', 'Systemic lupus erythematosus (SLE)', 'Thrombophilia', 'von Willebrand disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 262,
    question: `Which imaging modality is preferred for evaluating gallstones?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 263,
    question: `A 60-year-old male presents with severe abdominal pain radiating to the back. Serum lipase levels are elevated. What is the most likely diagnosis?`,
    options: ['Peptic ulcer disease', 'Acute pancreatitis', 'Cholecystitis', 'Mesenteric ischemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 264,
    question: `A pregnant woman at 32 weeks presents with right upper quadrant pain, nausea, elevated liver enzymes, low platelets, and hemolysis. Diagnosis:`,
    options: ['Preeclampsia', 'HELLP syndrome', 'Intrahepatic cholestasis of pregnancy', 'Acute fatty liver of pregnancy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 265,
    question: `A newborn presents with jaundice, poor feeding, and lethargy. What is the most likely cause?`,
    options: ['Breastfeeding jaundice', 'Hemolytic disease of the newborn', 'Physiologic jaundice', 'Infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 266,
    question: `The preferred imaging modality for diagnosing a suspected appendicitis in children is:`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 267,
    question: `A patient presents with a cough, fever, and pleuritic chest pain. A chest X-ray shows a pleural effusion. What is the most likely cause?`,
    options: ['Tuberculosis', 'Pneumonia', 'Heart failure', 'Malignancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 268,
    question: `What is the recommended first-line treatment for hypertension in pregnant women?`,
    options: ['ACE inhibitors', 'Beta-blockers', 'Methyldopa', 'Calcium channel blockers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 269,
    question: `What is the most common cause of hospital-acquired pneumonia?`,
    options: ['Streptococcus pneumoniae', 'Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 270,
    question: `A patient with chronic liver disease is found to have elevated ammonia levels. What is the most likely complication?`,
    options: ['Hepatic encephalopathy', 'Portal hypertension', 'Splenomegaly', 'Ascites'],
    correct: 0,
    explanation: ''
  },
  {
    id: 271,
    question: `A 50-year-old man presents with chronic cough and a history of smoking. What is the most likely diagnosis?`,
    options: ['Asthma', 'COPD', 'Pulmonary fibrosis', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 272,
    question: `A patient presents with diarrhea and a travel history to a developing country. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Traveler\'s diarrhea', 'Inflammatory bowel disease', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 273,
    question: `Which imaging modality is most sensitive for detecting acute ischemic stroke?`,
    options: ['CT scan', 'MRI (Diffusion-Weighted Imaging)', 'X-ray', 'Ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 274,
    question: `The most common cause of bacterial meningitis in adults is:`,
    options: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Haemophilus influenzae', 'Listeria monocytogenes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 275,
    question: `A 55-year-old man presents with dysphagia and a history of smoking. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 276,
    question: `The most common cause of chronic cough in a non-smoker is:`,
    options: ['Asthma', 'Gastroesophageal reflux disease (GERD)', 'Postnasal drip', 'Chronic bronchitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 277,
    question: `A 28-year-old man presents with dysuria and purulent urethral discharge. What is the most likely diagnosis?`,
    options: ['Chlamydia', 'Gonorrhea', 'Syphilis', 'Herpes simplex virus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 278,
    question: `A patient presents with severe abdominal pain after eating fatty meals. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Peptic ulcer disease', 'Pancreatitis', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 279,
    question: `What is the primary mode of transmission for hepatitis A?`,
    options: ['Blood', 'Fecal-oral route', 'Sexual contact', 'Respiratory droplets'],
    correct: 1,
    explanation: ''
  },
  {
    id: 280,
    question: `Which medication is first-line treatment for the management of hypertension in patients with heart failure?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 281,
    question: `A 45-year-old man with a history of alcohol abuse presents with abdominal pain and elevated liver enzymes. What condition is most likely?`,
    options: ['Alcoholic hepatitis', 'Cirrhosis', 'Hepatocellular carcinoma', 'Fatty liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 282,
    question: `In a patient with diabetic ketoacidosis (DKA), which electrolyte disturbance is commonly seen?`,
    options: ['Hypernatremia', 'Hyperkalemia', 'Hypocalcemia', 'Hypokalemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 283,
    question: `A patient with chronic alcoholism presents with confusion, ataxia, and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Alzheimer’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 284,
    question: `The typical heart defect found in Down syndrome is:`,
    options: ['Atrial septal defect', 'Tetralogy of Fallot', 'Patent ductus arteriosus', 'Ventricular septal defect'],
    correct: 0,
    explanation: ''
  },
  {
    id: 285,
    question: `Which of the following is a characteristic finding in polycystic ovary syndrome (PCOS)?`,
    options: ['Decreased androgens', 'Elevated luteinizing hormone (LH)', 'Decreased insulin resistance', 'Hypomenorrhea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 286,
    question: `Which of the following is the most common cause of nephrolithiasis?`,
    options: ['Calcium oxalate stones', 'Uric acid stones', 'Struvite stones', 'Cystine stones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 287,
    question: `A 45-year-old female presents with fatigue, weight gain, and cold intolerance. Laboratory tests reveal elevated TSH levels. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Hashimoto\'s thyroiditis', 'Graves\' disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 288,
    question: `A patient presents with severe abdominal pain and "currant jelly" stools. What is the most likely diagnosis?`,
    options: ['Gastroenteritis', 'Intussusception', 'Appendicitis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 289,
    question: `Which type of hypersensitivity reaction is associated with allergic rhinitis?`,
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 290,
    question: `A patient with a history of asthma presents with an acute exacerbation. What is the most appropriate first-line treatment?`,
    options: ['Inhaled corticosteroids', 'Oral corticosteroids', 'Short-acting beta-agonists', 'Long-acting beta-agonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 291,
    question: `Which of the following is a major complication of untreated hyperthyroidism during pregnancy?`,
    options: ['Fetal macrosomia', 'Preterm labor', 'Neural tube defects', 'Hydatidiform mole'],
    correct: 0,
    explanation: ''
  },
  {
    id: 292,
    question: `Which hormone is primarily responsible for the milk ejection reflex?`,
    options: ['Oxytocin', 'Prolactin', 'Estrogen', 'Progesterone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 293,
    question: `A woman presents with infertility and hypothalamic amenorrhea. Serum FSH is low. Management includes:`,
    options: ['Clomiphene citrate', 'Pulsatile GnRH therapy', 'IVF only', 'Progesterone therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 294,
    question: `Which of the following is a characteristic feature of rheumatoid arthritis?`,
    options: ['Symmetrical joint involvement', 'Morning stiffness lasting less than 30 minutes', 'Involvement of distal interphalangeal joints', 'Asymmetrical joint involvement'],
    correct: 0,
    explanation: ''
  },
  {
    id: 295,
    question: `What is the most common cause of secondary hypertension?`,
    options: ['Hyperaldosteronism', 'Cushing\'s syndrome', 'Chronic kidney disease', 'Coarctation of the aorta'],
    correct: 2,
    explanation: ''
  },
  {
    id: 296,
    question: `A woman with dyspareunia, dysmenorrhea, and infertility has ovarian endometrioma. Best diagnostic tool is:`,
    options: ['Ultrasound', 'MRI', 'Laparoscopy', 'CT scan'],
    correct: 2,
    explanation: ''
  },
  {
    id: 297,
    question: `Which of the following is the most common cause of chronic cough?`,
    options: ['Asthma', 'Gastroesophageal reflux disease (GERD)', 'Chronic bronchitis', 'Postnasal drip'],
    correct: 3,
    explanation: ''
  },
  {
    id: 298,
    question: `A 70-year-old man presents with sudden onset of weakness on the right side of his body. What is the most likely diagnosis?`,
    options: ['Transient ischemic attack', 'Hemorrhagic stroke', 'Ischemic stroke', 'Multiple sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 299,
    question: `A patient presents with unilateral nasal obstruction and facial pain. What is the most likely diagnosis?`,
    options: ['Allergic rhinitis', 'Sinusitis', 'Nasal polyp', 'Deviated septum'],
    correct: 1,
    explanation: ''
  },
  {
    id: 300,
    question: `A patient with severe depression is started on an SSRI. What is an important side effect to monitor for?`,
    options: ['Weight gain', 'Serotonin syndrome', 'Insomnia', 'Hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 301,
    question: `A 27-year-old woman presents with unilateral headache, nausea, photophobia, and phonophobia. The headache is throbbing in nature and worsens with physical activity. What is the likely diagnosis?`,
    options: ['Cluster headache', 'Tension headache', 'Migraine', 'Sinus headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 302,
    question: `The most common site for a dissecting aortic aneurysm is:`,
    options: ['Ascending aorta', 'Aortic arch', 'Descending aorta', 'Abdominal aorta'],
    correct: 0,
    explanation: ''
  },
  {
    id: 303,
    question: `A patient presents with palpitations, anxiety, and heat intolerance. Laboratory tests show elevated T4 and suppressed TSH. What is the most likely diagnosis?`,
    options: ['Graves\' disease', 'Hashimoto\'s thyroiditis', 'Toxic multinodular goiter', 'Thyroid storm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 304,
    question: `In patients with chronic obstructive pulmonary disease (COPD), the hallmark feature on spirometry is:`,
    options: ['Increased total lung capacity (TLC)', 'Decreased forced expiratory volume in 1 second (FEV1)', 'Increased residual volume (RV)', 'Decreased tidal volume (TV)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 305,
    question: `A 28-year-old female presents with amenorrhea, galactorrhea, and visual disturbances. The most likely diagnosis is:`,
    options: ['Prolactinoma', 'Pituitary apoplexy', 'Cushing\'s disease', 'Sheehan\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 306,
    question: `The treatment of choice for a patient with hyperthyroidism is:`,
    options: ['Beta-blockers', 'Methimazole', 'Radioactive iodine', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 307,
    question: `A child presents with failure to thrive and frequent respiratory infections. What underlying condition should be suspected?`,
    options: ['Asthma', 'Cystic fibrosis', 'Gastroesophageal reflux', 'Allergies'],
    correct: 0,
    explanation: ''
  },
  {
    id: 308,
    question: `The classic symptom of aortic dissection is:`,
    options: ['Chest pain radiating to the arm', 'Sudden onset of severe back pain', 'Abdominal pain', 'Syncope'],
    correct: 0,
    explanation: ''
  },
  {
    id: 309,
    question: `A 60-year-old male presents with dysphagia and weight loss. What is the most likely underlying condition?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 310,
    question: `The presence of Reed-Sternberg cells is characteristic of which disease?`,
    options: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Multiple myeloma', 'Chronic lymphocytic leukemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 311,
    question: `Which condition is characterized by "hyper-resonance" on percussion during a physical exam?`,
    options: ['Pleural effusion', 'Pneumothorax', 'Consolidation', 'Normal lung'],
    correct: 0,
    explanation: ''
  },
  {
    id: 312,
    question: `The primary mechanism of action of ACE inhibitors is to:`,
    options: ['Decrease peripheral vascular resistance', 'Increase renal blood flow', 'Inhibit the renin-angiotensin system', 'Increase cardiac output'],
    correct: 2,
    explanation: ''
  },
  {
    id: 313,
    question: `Which of the following investigations is most appropriate for diagnosing ectopic pregnancy?`,
    options: ['Transvaginal ultrasound', 'MRI pelvis', 'Serum alpha-fetoprotein', 'Hysteroscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 314,
    question: `A woman presents with curdy white discharge and vulval itching. Vaginal pH is normal. Diagnosis is:`,
    options: ['Bacterial vaginosis', 'Trichomoniasis', 'Candidiasis', 'Chlamydia infection'],
    correct: 2,
    explanation: ''
  },
  {
    id: 315,
    question: `A 70-year-old man presents with sudden onset of severe headache and neck stiffness. What should be the initial diagnostic test?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Lumbar puncture', 'EEG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 316,
    question: `What is the primary mechanism of action of beta-blockers in treating hypertension?`,
    options: ['Vasodilation', 'Decreased heart rate and contractility', 'Decreased renal blood flow', 'Increased cardiac output'],
    correct: 1,
    explanation: ''
  },
  {
    id: 317,
    question: `Which laboratory finding is most characteristic of rheumatoid arthritis?`,
    options: ['Positive ANA', 'Positive RF (rheumatoid factor)', 'Elevated ESR', 'Low C3 and C4 levels'],
    correct: 0,
    explanation: ''
  },
  {
    id: 318,
    question: `The most common malignant ovarian tumor in women aged 50-60 years is:`,
    options: ['Serous cystadenocarcinoma', 'Mucinous cystadenocarcinoma', 'Granulosa cell tumor', 'Dysgerminoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 319,
    question: `In the management of a patient with hyperthyroidism, which medication is commonly used to control symptoms such as tachycardia?`,
    options: ['Propylthiouracil', 'Methimazole', 'Propranolol', 'Levothyroxine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 320,
    question: `A 5-year-old child presents with a high fever, conjunctivitis, rash, and strawberry tongue. What is the most likely diagnosis?`,
    options: ['Kawasaki disease', 'Scarlet fever', 'Measles', 'Rubella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 321,
    question: `What is the classic triad of symptoms for nephrotic syndrome?`,
    options: ['Hematuria, hypertension, edema', 'Edema, proteinuria, hypoalbuminemia', 'Hypertension, oliguria, edema', 'Hematuria, flank pain, dysuria'],
    correct: 1,
    explanation: ''
  },
  {
    id: 322,
    question: `A patient presents with a painful, swollen joint after a seafood meal. What is the most likely diagnosis?`,
    options: ['Gout', 'Pseudogout', 'Septic arthritis', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 323,
    question: `The most common site of ectopic pregnancy is:`,
    options: ['Ovary', 'Cervix', 'Ampulla of fallopian tube', 'Isthmus of fallopian tube'],
    correct: 2,
    explanation: ''
  },
  {
    id: 324,
    question: `The presence of "target cells" in a blood smear is typically associated with which condition?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Sickle cell disease', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 325,
    question: `A woman with infertility and absent ovulation is prescribed:`,
    options: ['Clomiphene citrate', 'Letrozole', 'hCG', 'Progesterone only'],
    correct: 0,
    explanation: ''
  },
  {
    id: 326,
    question: `The most common cause of a hyperpigmented lesion on the skin is:`,
    options: ['Melanoma', 'Seborrheic keratosis', 'Basal cell carcinoma', 'Actinic keratosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 327,
    question: `In a patient with suspected pulmonary embolism, what is the most appropriate initial imaging study?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan', 'Ultrasound of the leg'],
    correct: 1,
    explanation: ''
  },
  {
    id: 328,
    question: `In a patient with acute cholecystitis, which imaging study is most commonly performed?`,
    options: ['MRI', 'CT scan', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 329,
    question: `A 55-year-old male with a history of smoking presents with hemoptysis and weight loss. CT scan shows a central mass in the lung. What is the most likely diagnosis?`,
    options: ['Squamous cell carcinoma', 'Adenocarcinoma', 'Small cell lung cancer', 'Lung metastasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 330,
    question: `A 70-year-old man presents with sudden onset of unilateral weakness, slurred speech, and facial droop. What is the most likely diagnosis?`,
    options: ['Seizure', 'Ischemic stroke', 'Migraine', 'Syncope'],
    correct: 0,
    explanation: ''
  },
  {
    id: 331,
    question: `A 3-month-old infant presents with projectile vomiting and dehydration. What is the most likely diagnosis?`,
    options: ['Gastroesophageal reflux', 'Pyloric stenosis', 'Intussusception', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 332,
    question: `Which of the following is the most common cardiac arrhythmia?`,
    options: ['Atrial fibrillation', 'Ventricular tachycardia', 'Atrial flutter', 'Bradycardia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 333,
    question: `The most common electrolyte abnormality associated with tumor lysis syndrome is:`,
    options: ['Hypercalcemia', 'Hyperkalemia', 'Hyponatremia', 'Hypomagnesemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 334,
    question: `A 29-year-old woman presents with severe pelvic pain and tender adnexal mass. Ultrasound shows complex cyst with decreased Doppler flow. Most likely diagnosis is:`,
    options: ['Ovarian torsion', 'Endometrioma', 'Dermoid cyst', 'Follicular cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 335,
    question: `A 25-year-old woman presents with sudden weight loss and increased thirst. What test is most appropriate for diagnosing diabetes mellitus?`,
    options: ['Serum insulin level', 'Fasting blood glucose', 'Oral glucose tolerance test', 'Hemoglobin A1c'],
    correct: 0,
    explanation: ''
  },
  {
    id: 336,
    question: `Which is the most common cause of urinary retention in males?`,
    options: ['Kidney stones', 'Bladder cancer', 'Benign prostatic hyperplasia (BPH)', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 337,
    question: `A 35-year-old man presents with facial swelling, particularly around the eyes, and a rash. He has a history of asthma. What is the most likely diagnosis?`,
    options: ['Anaphylaxis', 'Angioedema', 'Eczema', 'Urticaria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 338,
    question: `The most common benign ovarian tumor in reproductive-aged women is:`,
    options: ['Dermoid cyst', 'Serous cystadenoma', 'Endometrioma', 'Mucinous cystadenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 339,
    question: `A patient with a history of asthma presents with wheezing after exercise. What is the most likely trigger?`,
    options: ['Cold air', 'Warm air', 'Pollen', 'Dust'],
    correct: 0,
    explanation: ''
  },
  {
    id: 340,
    question: `A patient with a history of heart failure presents with shortness of breath. What physical exam finding is most suggestive of fluid overload?`,
    options: ['Wheezing', 'JVD (Jugular venous distension)', 'Decreased breath sounds', 'Abdominal tenderness'],
    correct: 0,
    explanation: ''
  },
  {
    id: 341,
    question: `Which of the following vaccines is contraindicated in pregnancy?`,
    options: ['Influenza (inactivated)', 'Tdap', 'MMR', 'Hepatitis B'],
    correct: 2,
    explanation: ''
  },
  {
    id: 342,
    question: `A patient presents with fever, cough, and a "chest pain" after a recent travel history. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Pneumonia', 'Pulmonary embolism', 'Acute bronchitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 343,
    question: `What is the recommended first-line treatment for hypertension in a patient with diabetes?`,
    options: ['Calcium channel blockers', 'ACE inhibitors', 'Beta-blockers', 'Thiazide diuretics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 344,
    question: `A patient presents with joint pain, morning stiffness, and a positive rheumatoid factor. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 345,
    question: `A patient undergoing surgery requires rapid intubation and muscle relaxation. Which anesthetic agent is the best choice for rapid sequence induction?`,
    options: ['Ketamine', 'Propofol', 'Succinylcholine', 'Midazolam'],
    correct: 0,
    explanation: ''
  },
  {
    id: 346,
    question: `A patient with a history of heart failure presents with increased shortness of breath and edema. What is the most likely cause?`,
    options: ['Pulmonary embolism', 'Worsening heart failure', 'Pneumonia', 'COPD exacerbation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 347,
    question: `A woman presents with bleeding per vaginum after menopause. The most likely cause is:`,
    options: ['Fibroid uterus', 'Endometrial carcinoma', 'Vaginal atrophy', 'Cervical polyp'],
    correct: 1,
    explanation: ''
  },
  {
    id: 348,
    question: `A positive Homan's sign is indicative of:`,
    options: ['Deep vein thrombosis (DVT)', 'Peripheral arterial disease', 'Cellulitis', 'Varicose veins'],
    correct: 0,
    explanation: ''
  },
  {
    id: 349,
    question: `In a patient with peptic ulcer disease, which type of ulcer is more commonly associated with malignancy?`,
    options: ['Duodenal ulcer', 'Gastric ulcer', 'Stress ulcer', 'Zollinger-Ellison ulcer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 350,
    question: `A patient presents with recurrent headaches that worsen with physical activity. What is the most appropriate next step in management?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Referral to a neurologist', 'Pain management'],
    correct: 0,
    explanation: ''
  },
  {
    id: 351,
    question: `The drug of choice for acute mania in bipolar disorder is:`,
    options: ['Lithium', 'Carbamazepine', 'Haloperidol', 'Valproic acid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 352,
    question: `A 55-year-old man presents with jaundice, weight loss, and a palpable gallbladder. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Hepatitis', 'Cholelithiasis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 353,
    question: `A 25-year-old female presents with abdominal pain and fever. Imaging reveals a tubo-ovarian abscess. What is the most likely underlying condition?`,
    options: ['Endometriosis', 'Ectopic pregnancy', 'Pelvic inflammatory disease (PID)', 'Ovarian cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 354,
    question: `A patient with asthma presents with worsening shortness of breath, wheezing, and a decreased response to inhaled bronchodilators. What is the next best step in management?`,
    options: ['Systemic corticosteroids', 'Antibiotics', 'Long-acting beta-agonist (LABA)', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 355,
    question: `A patient presents with chest pain, dyspnea, and ST elevation on ECG. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Pericarditis', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 356,
    question: `The cardinal sign of carcinoma cervix is:`,
    options: ['Dysmenorrhea', 'Menorrhagia', 'Postcoital bleeding', 'Pelvic pain'],
    correct: 2,
    explanation: ''
  },
  {
    id: 357,
    question: `A 60-year-old male presents with persistent cough, weight loss, and night sweats. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Chronic bronchitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 358,
    question: `The hormone responsible for uterine contraction during labor is:`,
    options: ['Estrogen', 'Progesterone', 'Oxytocin', 'Prolactin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 359,
    question: `Which of the following is the most common cause of cirrhosis in the United States?`,
    options: ['Hepatitis B', 'Hepatitis C', 'Alcoholic liver disease', 'Non-alcoholic fatty liver disease (NAFLD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 360,
    question: `The most common cause of meningitis in neonates is:`,
    options: ['Neisseria meningitidis', 'Group B Streptococcus', 'Haemophilus influenzae', 'Streptococcus pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 361,
    question: `In which phase of the menstrual cycle does ovulation typically occur?`,
    options: ['Menstrual phase', 'Proliferative phase', 'Secretory phase', 'Ovulatory phase'],
    correct: 3,
    explanation: ''
  },
  {
    id: 362,
    question: `A 3-year-old child is brought in for a cough and wheezing. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Pneumonia', 'Croup'],
    correct: 0,
    explanation: ''
  },
  {
    id: 363,
    question: `A woman presents with postmenopausal bleeding. The most important diagnosis to rule out is:`,
    options: ['Endometrial carcinoma', 'Cervical erosion', 'Vaginitis', 'Fibroid uterus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 364,
    question: `A patient presents with jaundice, dark urine, and clay-colored stools. What is the most likely diagnosis?`,
    options: ['Obstructive jaundice', 'Hepatocellular jaundice', 'Hemolytic jaundice', 'Neonatal jaundice'],
    correct: 0,
    explanation: ''
  },
  {
    id: 365,
    question: `A 70-year-old male presents with difficulty swallowing and weight loss. A barium swallow shows a mass in the esophagus. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 366,
    question: `A woman with polycystic ovarian syndrome is most likely to have:`,
    options: ['Low LH levels', 'Increased LH:FSH ratio', 'Low androgen levels', 'Hypoglycemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 367,
    question: `A patient presents with muscle weakness and a rash on the eyelids. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Polymyositis', 'Lupus erythematosus', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 368,
    question: `A patient presents with sudden onset of palpitations, lightheadedness, and chest discomfort. An ECG shows atrial fibrillation. What is the most appropriate initial management?`,
    options: ['Cardioversion', 'Beta-blockers', 'Anticoagulation', 'Rate control'],
    correct: 0,
    explanation: ''
  },
  {
    id: 369,
    question: `The presence of "broad, waxy casts" in the urine is suggestive of which condition?`,
    options: ['Acute tubular necrosis', 'Chronic kidney disease', 'Glomerulonephritis', 'Nephrotic syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 370,
    question: `Which disease is characterized by the presence of a "butterfly rash"?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Eczema', 'Dermatomyositis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 371,
    question: `The classic triad of symptoms for hemophilia includes:`,
    options: ['Joint pain, swelling, and bruising', 'Fatigue, pallor, and petechiae', 'Abdominal pain, jaundice, and dark urine', 'Fever, rash, and joint swelling'],
    correct: 0,
    explanation: ''
  },
  {
    id: 372,
    question: `A 45-year-old male presents with sudden loss of vision in one eye. What is the most appropriate initial investigation?`,
    options: ['Fundoscopy', 'CT scan of the head', 'MRI of the brain', 'Visual field test'],
    correct: 0,
    explanation: ''
  },
  {
    id: 373,
    question: `A 55-year-old male presents with a new-onset tremor at rest. What is the most likely diagnosis?`,
    options: ['Essential tremor', 'Parkinson\'s disease', 'Multiple sclerosis', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 374,
    question: `A patient presents with sudden onset of severe headache, often described as a "thunderclap" headache. What is the most likely diagnosis?`,
    options: ['Tension headache', 'Migraine', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 375,
    question: `A patient presents with jaundice and dark urine. Which of the following conditions is most likely?`,
    options: ['Hepatitis', 'Cirrhosis', 'Pancreatitis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 376,
    question: `A patient presents with a rash that follows the lines of a dermatomal distribution and is associated with pain. What is the most likely diagnosis?`,
    options: ['Herpes zoster', 'Shingles', 'Eczema', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 377,
    question: `The gold standard for the diagnosis of Hirschsprung's disease is:`,
    options: ['Abdominal X-ray', 'Rectal biopsy', 'Barium enema', 'Colonoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 378,
    question: `A patient presents with dry cough, progressive dyspnea, and clubbing of the fingers. What is the most likely diagnosis?`,
    options: ['Idiopathic pulmonary fibrosis', 'Tuberculosis', 'Chronic obstructive pulmonary disease', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 379,
    question: `In which condition is the "cannonball" metastasis typically seen?`,
    options: ['Lung cancer', 'Renal cell carcinoma', 'Colorectal cancer', 'Melanoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 380,
    question: `Which type of anemia is most commonly associated with chronic kidney disease?`,
    options: ['Iron deficiency anemia', 'Megaloblastic anemia', 'Normocytic normochromic anemia', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 381,
    question: `A child presents with a fever and a rash that started on the trunk and spread to the face. What is the most likely diagnosis?`,
    options: ['Roseola', 'Measles', 'Rubella', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 382,
    question: `In which condition is the "cobblestone appearance" of the intestinal mucosa typically seen?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Diverticulosis', 'Irritable bowel syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 383,
    question: `A patient with a history of stroke presents with sudden onset of speech difficulty. What is the most appropriate next step?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Carotid ultrasound', 'Start anticoagulation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 384,
    question: `A patient presents with severe abdominal pain and "knife-like" pain radiating to the back. What condition should be suspected?`,
    options: ['Pancreatitis', 'Appendicitis', 'Cholecystitis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 385,
    question: `What is the most common presenting symptom of rheumatoid arthritis?`,
    options: ['Joint stiffness', 'Fatigue', 'Fever', 'Rash'],
    correct: 0,
    explanation: ''
  },
  {
    id: 386,
    question: `A 45-year-old male presents with painless hematuria. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Urinary tract infection', 'Kidney stones', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 387,
    question: `What is the most common initial treatment for a patient with an asthma exacerbation?`,
    options: ['Inhaled corticosteroids', 'Long-acting beta agonists', 'Short-acting beta agonists', 'Leukotriene modifiers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 388,
    question: `Which condition is characterized by the presence of a "starry sky" appearance on histological examination?`,
    options: ['Burkitt lymphoma', 'Hodgkin lymphoma', 'Non-Hodgkin lymphoma', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 389,
    question: `A 3-year-old child is brought to the clinic with a high fever, irritability, and a rash that started on the face and spread to the trunk. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 390,
    question: `The characteristic rash of Lyme disease is known as:`,
    options: ['Erythema infectiosum', 'Erythema multiforme', 'Erythema migrans', 'Erythema nodosum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 391,
    question: `Which of the following conditions is characterized by the "butterfly rash" on the face?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Dermatomyositis', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 392,
    question: `What is the primary treatment for iron-deficiency anemia?`,
    options: ['Blood transfusion', 'Iron supplementation', 'Vitamin B12 injections', 'Folic acid'],
    correct: 1,
    explanation: ''
  },
  {
    id: 393,
    question: `What is the drug of choice for the initial treatment of status epilepticus?`,
    options: ['Phenytoin', 'Diazepam', 'Valproic acid', 'Carbamazepine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 394,
    question: `Which imaging technique is most sensitive for detecting breast cancer?`,
    options: ['Mammography', 'Ultrasound', 'MRI', 'CT scan'],
    correct: 2,
    explanation: ''
  },
  {
    id: 395,
    question: `A woman with recurrent miscarriages is found to have a septate uterus. The definitive management is:`,
    options: ['Hysteroscopic septal resection', 'IVF', 'Hormonal therapy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 396,
    question: `A 60-year-old woman presents with fatigue, pallor, and a smooth tongue. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency anemia', 'Folate deficiency anemia', 'Aplastic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 397,
    question: `A patient presents with fever, malaise, and a new rash after a camping trip. What is the most likely diagnosis?`,
    options: ['Lyme disease', 'Rocky Mountain spotted fever', 'Anaplasmosis', 'Ehrlichiosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 398,
    question: `The most common cause of antepartum hemorrhage in the third trimester is:`,
    options: ['Placenta previa', 'Placental abruption', 'Uterine rupture', 'Vasa previa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 399,
    question: `A patient presents with a non-healing ulcer on the leg. Which condition should be ruled out?`,
    options: ['Venous stasis ulcer', 'Diabetic ulcer', 'Malignancy', 'Pressure ulcer'],
    correct: 2,
    explanation: ''
  },
  {
    id: 400,
    question: `What is the most effective treatment for a patient with atrial fibrillation and rapid ventricular response?`,
    options: ['Beta-blockers', 'Calcium channel blockers', 'Digoxin', 'Anticoagulants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 401,
    question: `A pregnant woman at 28 weeks gestation presents with blood pressure of 160/110 mmHg and proteinuria. The diagnosis is:`,
    options: ['Gestational hypertension', 'Chronic hypertension', 'Preeclampsia', 'Eclampsia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 402,
    question: `A patient with a history of hyperlipidemia is found to have xanthomas. What does this indicate?`,
    options: ['High triglycerides', 'High cholesterol', 'Low HDL levels', 'None of the above'],
    correct: 1,
    explanation: ''
  },
  {
    id: 403,
    question: `A 30-year-old female presents with irregular menstrual cycles and signs of hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Thyroid dysfunction', 'Hyperprolactinemia', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 404,
    question: `A woman presents with postpartum fever, uterine tenderness, and foul lochia. The best initial antibiotic therapy is:`,
    options: ['Ampicillin + Gentamicin', 'Ciprofloxacin only', 'Clindamycin only', 'Penicillin G'],
    correct: 0,
    explanation: ''
  },
  {
    id: 405,
    question: `A patient with chronic cough and hemoptysis is found to have cavitary lesions on chest X-ray. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung abscess', 'Lung cancer', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 406,
    question: `A patient presents with pruritic skin lesions and a history of travel to an area with high rates of tropical diseases. What is the most likely diagnosis?`,
    options: ['Scabies', 'Eczema', 'Psoriasis', 'Fungal infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 407,
    question: `A patient with diabetes mellitus presents with a non-healing ulcer on the foot. What is the most appropriate next step in management?`,
    options: ['Antibiotics', 'Debridement', 'Vascular assessment', 'Oral hypoglycemics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 408,
    question: `A patient presents with severe fatigue, pallor, and a low reticulocyte count. What is the most likely diagnosis?`,
    options: ['Aplastic anemia', 'Iron deficiency anemia', 'Hemolytic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 409,
    question: `The presence of "chest pain relieved by sitting forward" is typically associated with which condition?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pericarditis', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 410,
    question: `A newborn presents with a heart murmur, cyanosis, and is found to have a large ventricular septal defect. What is the most appropriate management?`,
    options: ['Surgical correction', 'Medical management with diuretics', 'Observation', 'Balloon angioplasty'],
    correct: 0,
    explanation: ''
  },
  {
    id: 411,
    question: `In patients with chronic kidney disease, the most common electrolyte abnormality is:`,
    options: ['Hyperkalemia', 'Hypocalcemia', 'Hyponatremia', 'Hyperphosphatemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 412,
    question: `A 35-year-old female presents with fatigue, hair loss, and cold intolerance. Lab tests reveal low TSH and low free T4. What is the most likely diagnosis?`,
    options: ['Primary hypothyroidism', 'Secondary hypothyroidism', 'Hyperthyroidism', 'Thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 413,
    question: `The most common cause of acute appendicitis in children is:`,
    options: ['Fecalith', 'Tumor', 'Infection', 'Intestinal worms'],
    correct: 0,
    explanation: ''
  },
  {
    id: 414,
    question: `The most common cause of death in patients with myocardial infarction is:`,
    options: ['Heart failure', 'Arrhythmias', 'Cardiogenic shock', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 415,
    question: `A 30-year-old woman presents with pelvic pain and a history of infertility. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Fibroids', 'Ovarian cancer', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 416,
    question: `A 60-year-old woman presents with progressive shortness of breath and a history of smoking. Which condition should be suspected?`,
    options: ['Asthma', 'Interstitial lung disease', 'Chronic obstructive pulmonary disease (COPD)', 'Pulmonary embolism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 417,
    question: `Which of the following conditions is most commonly associated with hypercalcemia?`,
    options: ['Osteoporosis', 'Hyperparathyroidism', 'Hypoparathyroidism', 'Osteomalacia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 418,
    question: `A patient is diagnosed with hypertension and prescribed a diuretic. What is a common side effect?`,
    options: ['Hypokalemia', 'Hyperkalemia', 'Hyponatremia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 419,
    question: `A patient with diabetes presents with a painless foot ulcer. What is the most likely underlying cause?`,
    options: ['Neuropathy', 'Peripheral artery disease', 'Infection', 'Venous insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 420,
    question: `The first-line therapy for hyperprolactinemia in women desiring pregnancy is:`,
    options: ['Bromocriptine', 'Cabergoline', 'Surgery', 'Observation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 421,
    question: `Which of the following is the most sensitive test for diagnosing deep vein thrombosis (DVT)?`,
    options: ['D-dimer', 'Ultrasound', 'MRI', 'Venography'],
    correct: 1,
    explanation: ''
  },
  {
    id: 422,
    question: `A pregnant woman presents with convulsions and hypertension. The immediate management is:`,
    options: ['IV diazepam', 'Immediate cesarean section', 'Magnesium sulfate administration', 'Oral antihypertensives'],
    correct: 2,
    explanation: ''
  },
  {
    id: 423,
    question: `In which condition is the "charcot joint" commonly seen?`,
    options: ['Rheumatoid arthritis', 'Diabetes mellitus', 'Gout', 'Osteoarthritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 424,
    question: `Which of the following is a major side effect of corticosteroids?`,
    options: ['Hyperkalemia', 'Osteoporosis', 'Weight loss', 'Hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 425,
    question: `A patient presents with fever, cough, and chest pain. A chest X-ray shows a pleural effusion. What is the most likely diagnosis?`,
    options: ['Pneumonia', 'Tuberculosis', 'Pulmonary embolism', 'Congestive heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 426,
    question: `A patient with a history of hypertension presents with a thunderclap headache and nausea. A CT scan reveals subarachnoid hemorrhage. What is the most likely cause?`,
    options: ['Aneurysmal rupture', 'Arteriovenous malformation', 'Coagulation disorder', 'Trauma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 427,
    question: `A 60-year-old man presents with sudden onset of excruciating chest pain radiating to his back. His blood pressure is different in both arms. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 428,
    question: `A patient with a history of ulcerative colitis presents with bloody diarrhea and abdominal pain. What is the most likely complication?`,
    options: ['Toxic megacolon', 'Perforation', 'Colon cancer', 'Stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 429,
    question: `A child presents with a persistent cough and wheezing. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Pneumonia', 'Croup'],
    correct: 0,
    explanation: ''
  },
  {
    id: 430,
    question: `A pregnant woman at 30 weeks develops BP 150/100 mmHg without proteinuria. Diagnosis is:`,
    options: ['Chronic hypertension', 'Preeclampsia', 'Gestational hypertension', 'Eclampsia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 431,
    question: `A 70-year-old female presents with fatigue, constipation, and abdominal pain. Serum calcium is elevated. What is the most likely diagnosis?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D deficiency', 'Chronic kidney disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 432,
    question: `A patient presents with significant weight loss, fatigue, and night sweats. A lymph node biopsy shows Reed-Sternberg cells. What is the most likely diagnosis?`,
    options: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Chronic lymphocytic leukemia', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 433,
    question: `The first-line treatment for patients with chronic obstructive pulmonary disease (COPD) is:`,
    options: ['Corticosteroids', 'Long-acting beta-agonists', 'Short-acting beta-agonists', 'Anticholinergics'],
    correct: 2,
    explanation: ''
  },
  {
    id: 434,
    question: `A 50-year-old woman with a history of osteoporosis presents with a hip fracture after a fall. What medication is most likely to have contributed to her condition?`,
    options: ['Calcium supplements', 'Bisphosphonates', 'Long-term corticosteroids', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 435,
    question: `A patient with a history of congestive heart failure presents with dyspnea and orthopnea. What is the most likely underlying cause?`,
    options: ['Pulmonary edema', 'Pneumonia', 'Myocardial infarction', 'Arrhythmia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 436,
    question: `Which of the following is a common side effect of NSAIDs?`,
    options: ['Hyperkalemia', 'Gastric ulceration', 'Hypoglycemia', 'Hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 437,
    question: `A patient with a history of ulcerative colitis is being monitored for cancer risk. What type of cancer is most associated with this condition?`,
    options: ['Pancreatic cancer', 'Colorectal cancer', 'Liver cancer', 'Gastric cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 438,
    question: `The most common site for a peptic ulcer is:`,
    options: ['Stomach', 'Duodenum', 'Esophagus', 'Jejunum'],
    correct: 1,
    explanation: ''
  },
  {
    id: 439,
    question: `Which laboratory test is most indicative of liver function?`,
    options: ['Alanine aminotransferase (ALT)', 'Aspartate aminotransferase (AST)', 'Alkaline phosphatase (ALP)', 'Bilirubin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 440,
    question: `A patient presents with acute abdominal pain and a "silent" abdomen on examination. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Pancreatitis', 'Bowel obstruction', 'Perforated viscus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 441,
    question: `A 24-year-old primigravida at 10 weeks of gestation presents with painless vaginal bleeding. On examination, the uterus is larger than expected for gestational age. The most likely diagnosis is:`,
    options: ['Threatened abortion', 'Missed abortion', 'Hydatidiform mole', 'Ectopic pregnancy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 442,
    question: `What is the drug of choice for the treatment of trigeminal neuralgia?`,
    options: ['Carbamazepine', 'Phenytoin', 'Gabapentin', 'Baclofen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 443,
    question: `A child presents with a barking cough, inspiratory stridor, and hoarseness. What is the most likely causative agent?`,
    options: ['Parainfluenza virus', 'Respiratory syncytial virus (RSV)', 'Influenza virus', 'Adenovirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 444,
    question: `Which vaccine is recommended for prevention of cervical cancer?`,
    options: ['MMR vaccine', 'HPV vaccine', 'Hepatitis B vaccine', 'Varicella vaccine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 445,
    question: `A patient presents with chronic diarrhea, weight loss, and a biopsy showing villous atrophy in the small intestine. What is the most likely diagnosis?`,
    options: ['Crohn\'s disease', 'Ulcerative colitis', 'Celiac disease', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 446,
    question: `A 3-day-old infant is found to have jaundice and is lethargic. A blood test reveals a bilirubin level of 15 mg/dL with a predominance of unconjugated bilirubin. What is the most likely cause?`,
    options: ['Physiologic jaundice', 'Breast milk jaundice', 'Hemolytic disease of the newborn', 'Biliary atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 447,
    question: `Which of the following is the primary cause of viral gastroenteritis in children?`,
    options: ['Rotavirus', 'Norovirus', 'Adenovirus', 'Enterovirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 448,
    question: `A patient presents with abdominal pain, jaundice, and pruritus. Laboratory tests reveal elevated bilirubin and alkaline phosphatase. What is the most likely diagnosis?`,
    options: ['Cholestatic liver disease', 'Hepatitis', 'Cirrhosis', 'Gallstones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 449,
    question: `A woman presents with cyclic pelvic pain and infertility. Ultrasound shows endometrioma. Diagnosis:`,
    options: ['Adenomyosis', 'Endometriosis', 'Fibroid uterus', 'Dermoid cyst'],
    correct: 1,
    explanation: ''
  },
  {
    id: 450,
    question: `The most common cause of infertility in men is:`,
    options: ['Obstruction', 'Hormonal deficiency', 'Azoospermia', 'Varicocele'],
    correct: 3,
    explanation: ''
  },
  {
    id: 451,
    question: `What is the main complication of untreated phenylketonuria (PKU)?`,
    options: ['Liver failure', 'Mental retardation', 'Hyperactivity', 'Kidney disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 452,
    question: `What is the preferred imaging modality for diagnosing gallstones?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 453,
    question: `A patient presents with fatigue, jaundice, and an enlarged spleen. Laboratory tests show a low hemoglobin level and high reticulocyte count. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Hemolytic anemia', 'Aplastic anemia', 'Megaloblastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 454,
    question: `What is the most effective medication for the management of acute migraines?`,
    options: ['Ibuprofen', 'Triptans', 'Acetaminophen', 'Antidepressants'],
    correct: 1,
    explanation: ''
  },
  {
    id: 455,
    question: `Which electrolyte imbalance is most commonly associated with heart failure?`,
    options: ['Hyperkalemia', 'Hyponatremia', 'Hypercalcemia', 'Hypokalemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 456,
    question: `Which of the following is the most likely cause of nephrotic syndrome in adults?`,
    options: ['Minimal change disease', 'Focal segmental glomerulosclerosis', 'Membranous nephropathy', 'Diabetic nephropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 457,
    question: `A patient with a history of alcohol use presents with confusion and ataxia. What vitamin deficiency should be suspected?`,
    options: ['Vitamin B12', 'Vitamin C', 'Thiamine (Vitamin B1)', 'Folic acid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 458,
    question: `A 50-year-old woman presents with fatigue and pallor. Blood tests reveal microcytic anemia. What is the most likely cause?`,
    options: ['Vitamin B12 deficiency', 'Iron deficiency', 'Chronic disease', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 459,
    question: `A 22-year-old woman presents with palpitations and weight loss. Her thyroid gland is diffusely enlarged. What is the most likely diagnosis?`,
    options: ['Graves’ disease', 'Hashimoto’s thyroiditis', 'Thyroid cancer', 'Subacute thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 460,
    question: `A patient presents with hematuria and flank pain. A CT scan reveals a mass in the kidney. What is the most likely diagnosis?`,
    options: ['Renal cell carcinoma', 'Urolithiasis', 'Pyelonephritis', 'Polycystic kidney disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 461,
    question: `What is the primary goal of treatment in a patient with acute myocardial infarction?`,
    options: ['Pain relief', 'Reperfusion of the myocardium', 'Preventing heart failure', 'Reducing cholesterol levels'],
    correct: 1,
    explanation: ''
  },
  {
    id: 462,
    question: `The first-line therapy for a patient with newly diagnosed hypertension is:`,
    options: ['Beta-blockers', 'Calcium channel blockers', 'ACE inhibitors', 'Thiazide diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 463,
    question: `The most common cause of hyperuricemia is:`,
    options: ['Gout', 'Chronic kidney disease', 'Diet high in purines', 'Hematological disorders'],
    correct: 2,
    explanation: ''
  },
  {
    id: 464,
    question: `The primary treatment for chronic migraine is:`,
    options: ['Abortive medications', 'Preventive medications', 'Corticosteroids', 'Opioids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 465,
    question: `What is the most common type of stroke?`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Transient ischemic attack', 'Cryptogenic stroke'],
    correct: 1,
    explanation: ''
  },
  {
    id: 466,
    question: `A newborn is found to have a heart murmur and cyanosis. An echocardiogram reveals transposition of the great vessels. What is the initial management step?`,
    options: ['Prostaglandin E1', 'Surgical intervention', 'Diuretics', 'Anticoagulation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 467,
    question: `A patient presents with excessive thirst, frequent urination, and blurred vision. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 468,
    question: `The primary defect in cystic fibrosis is in the:`,
    options: ['CFTR gene', 'BRCA gene', 'TP53 gene', 'RB1 gene'],
    correct: 0,
    explanation: ''
  },
  {
    id: 469,
    question: `A patient presents with joint pain and stiffness, particularly in the morning. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 470,
    question: `The most common site of ectopic pregnancy implantation is:`,
    options: ['Ampulla of fallopian tube', 'Isthmus', 'Ovary', 'Abdominal cavity'],
    correct: 0,
    explanation: ''
  },
  {
    id: 471,
    question: `A 70-year-old male presents with fatigue, bone pain, and recurrent infections. Lab tests show hypercalcemia and elevated parathyroid hormone levels. What is the most likely diagnosis?`,
    options: ['Primary hyperparathyroidism', 'Multiple myeloma', 'Osteoporosis', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 472,
    question: `Which imaging modality is best for evaluating the brain for stroke?`,
    options: ['MRI', 'CT scan', 'Ultrasound', 'X-ray'],
    correct: 1,
    explanation: ''
  },
  {
    id: 473,
    question: `What is the first-line treatment for hypertension?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 474,
    question: `A woman presents with severe dysmenorrhea starting soon after menarche. The most likely diagnosis is:`,
    options: ['Endometriosis', 'Secondary dysmenorrhea', 'Primary dysmenorrhea', 'Adenomyosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 475,
    question: `A patient presents with abdominal pain, diarrhea, and a recent travel history to a developing country. What is the most likely diagnosis?`,
    options: ['Travel-related gastroenteritis', 'Acute appendicitis', 'Diverticulitis', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 476,
    question: `In a patient with primary hyperparathyroidism, which of the following is a common symptom?`,
    options: ['Diarrhea', 'Tetany', 'Kidney stones', 'Weight gain'],
    correct: 2,
    explanation: ''
  },
  {
    id: 477,
    question: `A patient presents with diarrhea, abdominal pain, and a recent trip to a developing country. What is the most likely diagnosis?`,
    options: ['Giardia lamblia infection', 'Celiac disease', 'Irritable bowel syndrome', 'Crohn\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 478,
    question: `A 25-year-old woman with polycystic ovary syndrome (PCOS) presents with hirsutism and irregular menstrual cycles. What is the most appropriate first-line treatment for her symptoms?`,
    options: ['Spironolactone', 'Metformin', 'Oral contraceptive pills', 'Clomiphene citrate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 479,
    question: `A 30-year-old man presents with chronic diarrhea, weight loss, and a history of non-bloody stools. A biopsy of the small intestine reveals flattened villi. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn’s disease', 'Ulcerative colitis', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 480,
    question: `Which of the following conditions is most commonly associated with an elevated erythrocyte sedimentation rate (ESR)?`,
    options: ['Osteoarthritis', 'Gout', 'Rheumatoid arthritis', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 481,
    question: `A 25-year-old woman presents with pelvic pain and dyspareunia. Which condition should be suspected?`,
    options: ['Endometriosis', 'Ovarian cyst', 'Uterine fibroids', 'PID (Pelvic Inflammatory Disease)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 482,
    question: `Which of the following is the most common cause of hypothyroidism in the United States?`,
    options: ['Iodine deficiency', 'Hashimoto\'s thyroiditis', 'Thyroid surgery', 'Radioactive iodine treatment'],
    correct: 1,
    explanation: ''
  },
  {
    id: 483,
    question: `A child presents with failure to thrive, chronic diarrhea, and dermatitis. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Lactose intolerance', 'Crohn\'s disease', 'Cow\'s milk protein allergy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 484,
    question: `A woman presents with menorrhagia, dysmenorrhea, and uniformly enlarged tender uterus. The most likely diagnosis is:`,
    options: ['Uterine fibroid', 'Endometriosis', 'Adenomyosis', 'Endometrial carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 485,
    question: `A 45-year-old male presents with dark, tarry stools and vomiting blood. What is the most likely cause?`,
    options: ['Upper gastrointestinal bleeding', 'Peptic ulcer disease', 'Esophageal varices', 'Gastritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 486,
    question: `The "Gower's sign" is indicative of which condition?`,
    options: ['Duchenne muscular dystrophy', 'Myasthenia gravis', 'Multiple sclerosis', 'Amyotrophic lateral sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 487,
    question: `Which of the following is the most common cause of death in patients with myocardial infarction?`,
    options: ['Cardiogenic shock', 'Ventricular fibrillation', 'Heart failure', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 488,
    question: `A patient presents with dyspnea, orthopnea, and paroxysmal nocturnal dyspnea. What is the most likely diagnosis?`,
    options: ['Chronic obstructive pulmonary disease (COPD)', 'Heart failure', 'Asthma', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 489,
    question: `A child with a history of frequent respiratory infections and failure to thrive is suspected to have an immunodeficiency disorder. What is the most likely initial test?`,
    options: ['Complete blood count', 'Serum immunoglobulin levels', 'Skin prick test', 'CT scan of the chest'],
    correct: 0,
    explanation: ''
  },
  {
    id: 490,
    question: `A 65-year-old male presents with hoarseness and difficulty swallowing. A neck ultrasound shows a mass in the thyroid gland. What is the most likely diagnosis?`,
    options: ['Thyroid adenoma', 'Papillary thyroid carcinoma', 'Follicular thyroid carcinoma', 'Medullary thyroid carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 491,
    question: `In a patient with chronic kidney disease, which electrolyte abnormality is most common?`,
    options: ['Hyperkalemia', 'Hypocalcemia', 'Hyponatremia', 'Hyperphosphatemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 492,
    question: `A patient with a history of stroke presents with difficulty speaking. What is the most likely diagnosis?`,
    options: ['Dysarthria', 'Aphasia', 'Apraxia', 'Agnosia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 493,
    question: `In patients with acute appendicitis, pain typically begins in the:`,
    options: ['Right upper quadrant', 'Epigastrium', 'Left lower quadrant', 'Right lower quadrant'],
    correct: 0,
    explanation: ''
  },
  {
    id: 494,
    question: `In which part of the kidney does the majority of sodium reabsorption occur?`,
    options: ['Proximal convoluted tubule', 'Loop of Henle', 'Distal convoluted tubule', 'Collecting duct'],
    correct: 0,
    explanation: ''
  },
  {
    id: 495,
    question: `Which of the following is the most sensitive indicator of myocardial injury?`,
    options: ['CK-MB', 'Troponin I', 'LDH', 'Myoglobin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 496,
    question: `Which of the following is a classic symptom of appendicitis?`,
    options: ['Right upper quadrant pain', 'Left lower quadrant pain', 'Periumbilical pain migrating to the right lower quadrant', 'Flank pain'],
    correct: 2,
    explanation: ''
  },
  {
    id: 497,
    question: `A newborn presents with cyanosis and is found to have a right-to-left shunt. What is the most likely congenital heart defect?`,
    options: ['Atrial septal defect (ASD)', 'Ventricular septal defect (VSD)', 'Tetralogy of Fallot', 'Patent ductus arteriosus (PDA)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 498,
    question: `Which condition is associated with "moon facies" and "purple striae"?`,
    options: ['Cushing\'s syndrome', 'Addison\'s disease', 'Hyperthyroidism', 'Diabetes insipidus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 499,
    question: `What is the primary action of aspirin in cardiovascular disease?`,
    options: ['Reducing blood pressure', 'Inhibiting platelet aggregation', 'Lowering cholesterol levels', 'Increasing blood flow'],
    correct: 1,
    explanation: ''
  },
  {
    id: 500,
    question: `Which vitamin deficiency is associated with megaloblastic anemia?`,
    options: ['Vitamin A', 'Vitamin C', 'Vitamin B12', 'Vitamin K'],
    correct: 2,
    explanation: ''
  },
  {
    id: 501,
    question: `A 45-year-old man presents with jaundice, pruritus, and dark urine. Which of the following conditions is most likely?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Cholestasis', 'Cirrhosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 502,
    question: `A child presents with abdominal pain, bloody diarrhea, and a "currant jelly" appearance of stools. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Ulcerative colitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 503,
    question: `A 28-year-old woman presents with heavy menstrual bleeding and severe abdominal cramps. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Pelvic inflammatory disease', 'Ovarian cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 504,
    question: `A 50-year-old male presents with sudden onset of severe headache described as "the worst headache of my life." What condition should be suspected?`,
    options: ['Migraine', 'Tension-type headache', 'Subarachnoid hemorrhage', 'Intracranial hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 505,
    question: `Which test is most commonly used to diagnose rheumatoid arthritis?`,
    options: ['ESR', 'CRP', 'Rheumatoid factor', 'Antinuclear antibodies'],
    correct: 0,
    explanation: ''
  },
  {
    id: 506,
    question: `The drug of choice for treating a hypertensive emergency is:`,
    options: ['Lisinopril', 'Nitroprusside', 'Hydrochlorothiazide', 'Metoprolol'],
    correct: 0,
    explanation: ''
  },
  {
    id: 507,
    question: `Which type of stroke is caused by a blockage of blood flow to the brain?`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Transient ischemic attack', 'Cryptogenic stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 508,
    question: `A 75-year-old female presents with sudden onset of dizziness and a "rushing" sound in her ears. What is the most likely diagnosis?`,
    options: ['Benign paroxysmal positional vertigo', 'Meniere\'s disease', 'Vestibular neuritis', 'Labyrinthitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 509,
    question: `A "butterfly-shaped" rash across the cheeks and nose is characteristic of:`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Dermatomyositis', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 510,
    question: `Which hormone is primarily responsible for stimulating ovulation?`,
    options: ['Estrogen', 'Progesterone', 'Luteinizing hormone (LH)', 'Follicle-stimulating hormone (FSH)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 511,
    question: `The hormone responsible for maintenance of pregnancy in first trimester is:`,
    options: ['Estrogen', 'Progesterone', 'hCG', 'Oxytocin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 512,
    question: `A 60-year-old man presents with worsening shortness of breath and a history of smoking. What is the most likely diagnosis?`,
    options: ['Chronic obstructive pulmonary disease', 'Asthma', 'Pulmonary fibrosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 513,
    question: `A child presents with fever, rash, and conjunctivitis. Laboratory tests show positive IgM for measles. What is the most appropriate management?`,
    options: ['Antibiotics', 'Supportive care', 'Antivirals', 'Immunoglobulin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 514,
    question: `A woman with fever, lower abdominal pain, and cervical motion tenderness after abortion is most likely suffering from:`,
    options: ['PID', 'Septic abortion', 'Endometriosis', 'Ectopic pregnancy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 515,
    question: `A 45-year-old male presents with increasing fatigue and palpitations. A complete blood count shows anemia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 516,
    question: `What is the primary cause of secondary hypertension?`,
    options: ['Obesity', 'Sleep apnea', 'Kidney disease', 'Both B and C'],
    correct: 3,
    explanation: ''
  },
  {
    id: 517,
    question: `Which electrolyte imbalance is most likely to occur in a patient with chronic kidney disease?`,
    options: ['Hypercalcemia', 'Hyperkalemia', 'Hypomagnesemia', 'Hyponatremia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 518,
    question: `A patient presents with sudden onset of severe headache described as a "thunderclap." What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension-type headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 2,
    explanation: ''
  },
  {
    id: 519,
    question: `A 35-year-old male presents with a testicular mass. What is the most appropriate initial diagnostic test?`,
    options: ['CT scan', 'Ultrasound', 'MRI', 'Serum tumor markers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 520,
    question: `What is the primary treatment for aortic stenosis?`,
    options: ['Medical management', 'Balloon valvuloplasty', 'Aortic valve replacement', 'Angioplasty'],
    correct: 2,
    explanation: ''
  },
  {
    id: 521,
    question: `A 70-year-old male presents with memory loss, confusion, and difficulty performing daily activities. What is the most likely diagnosis?`,
    options: ['Alzheimer’s disease', 'Parkinson’s disease', 'Vascular dementia', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 522,
    question: `The primary method for diagnosing tuberculosis is:`,
    options: ['Chest X-ray', 'Sputum culture', 'Skin test', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 523,
    question: `A patient presents with acute abdominal pain and a "currant jelly" stool. What is the likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Volvulus', 'Bowel obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 524,
    question: `Which of the following is most suggestive of a diagnosis of endometriosis?`,
    options: ['Postmenopausal bleeding', 'Cyclical pelvic pain', 'Amenorrhea', 'Ovarian mass'],
    correct: 0,
    explanation: ''
  },
  {
    id: 525,
    question: `What is the most common cause of postpartum hemorrhage?`,
    options: ['Uterine atony', 'Retained placenta', 'Placenta previa', 'Uterine rupture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 526,
    question: `A 35-year-old female presents with severe fatigue, and laboratory tests reveal low ferritin levels. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Anemia of chronic disease', 'Aplastic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 527,
    question: `A patient with a history of peptic ulcer disease presents with black, tarry stools. What is the likely cause?`,
    options: ['Hemorrhoids', 'Gastric cancer', 'Upper gastrointestinal bleeding', 'Diverticulosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 528,
    question: `A patient presents with multiple fractures after a car accident and is now developing respiratory distress and petechiae. What is the most likely diagnosis?`,
    options: ['Fat embolism syndrome', 'Pulmonary embolism', 'Pneumothorax', 'Tension pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 529,
    question: `The classic triad of symptoms for nephrotic syndrome includes:`,
    options: ['Edema, hypertension, hematuria', 'Edema, proteinuria, hypoalbuminemia', 'Hematuria, oliguria, hypertension', 'Oliguria, hyperkalemia, proteinuria'],
    correct: 1,
    explanation: ''
  },
  {
    id: 530,
    question: `A pregnant woman presents with reduced fetal movements. The first investigation is:`,
    options: ['Doppler ultrasound', 'CTG', 'Ultrasound growth scan', 'Biophysical profile'],
    correct: 1,
    explanation: ''
  },
  {
    id: 531,
    question: `Which of the following is NOT a complication of diabetes mellitus?`,
    options: ['Neuropathy', 'Retinopathy', 'Nephropathy', 'Polycythemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 532,
    question: `What is the first-line treatment for a patient with allergic rhinitis?`,
    options: ['Decongestants', 'Intranasal corticosteroids', 'Antihistamines', 'Leukotriene inhibitors'],
    correct: 1,
    explanation: ''
  },
  {
    id: 533,
    question: `What is the most common presenting symptom of colorectal cancer?`,
    options: ['Weight loss', 'Change in bowel habits', 'Abdominal pain', 'Anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 534,
    question: `A patient with known hypertension presents with sudden, severe headache and neurological deficits. What is the most likely diagnosis?`,
    options: ['Intracerebral hemorrhage', 'Subarachnoid hemorrhage', 'Ischemic stroke', 'Transient ischemic attack'],
    correct: 0,
    explanation: ''
  },
  {
    id: 535,
    question: `A newborn presents with failure to pass meconium within the first 48 hours of life. What is the most likely diagnosis?`,
    options: ['Hirschsprung’s disease', 'Pyloric stenosis', 'Intussusception', 'Cystic fibrosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 536,
    question: `A patient with severe abdominal pain and a history of gallstones presents with fever and jaundice. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Acute cholecystitis', 'Choledocholithiasis', 'Acute hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 537,
    question: `The classic triad of symptoms for pheochromocytoma includes:`,
    options: ['Headache, palpitations, sweating', 'Chest pain, shortness of breath, nausea', 'Fatigue, weight loss, fever', 'Abdominal pain, diarrhea, vomiting'],
    correct: 0,
    explanation: ''
  },
  {
    id: 538,
    question: `In patients with chronic obstructive pulmonary disease (COPD), which of the following is a common complication?`,
    options: ['Pulmonary embolism', 'Lung cancer', 'Respiratory failure', 'Tuberculosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 539,
    question: `A patient presents with dry cough, fever, and a chest X-ray showing bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Viral pneumonia', 'Bacterial pneumonia', 'Tuberculosis', 'Aspiration pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 540,
    question: `Which of the following is the most common complication of diabetes mellitus?`,
    options: ['Peripheral neuropathy', 'Diabetic retinopathy', 'Cardiovascular disease', 'Nephropathy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 541,
    question: `Which of the following is the most common cause of neonatal respiratory distress?`,
    options: ['Transient Tachypnea of the Newborn', 'Hyaline Membrane Disease', 'Meconium Aspiration Syndrome', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 542,
    question: `A child is diagnosed with otitis media. What is the most common causative organism?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 543,
    question: `The "smoker's cough" is typically associated with which respiratory condition?`,
    options: ['Asthma', 'Chronic bronchitis', 'Pulmonary fibrosis', 'Emphysema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 544,
    question: `Which of the following is the most appropriate management for a hemodynamically unstable patient with a massive pulmonary embolism?`,
    options: ['Anticoagulation therapy', 'Thrombolytic therapy', 'IV fluids', 'Inferior vena cava filter'],
    correct: 0,
    explanation: ''
  },
  {
    id: 545,
    question: `A patient with a history of heart failure presents with sudden onset dyspnea and cough. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Pneumonia', 'Congestive heart failure exacerbation', 'Asthma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 546,
    question: `A child presents with a rash, fever, and conjunctivitis after exposure to another child with a similar rash. What is the most likely diagnosis?`,
    options: ['Measles', 'Chickenpox', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 547,
    question: `A patient with a history of pancreatitis presents with severe abdominal pain and jaundice. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Cholecystitis', 'Acute pancreatitis', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 548,
    question: `A child presents with a fever, sore throat, and swollen lymph nodes. A rapid strep test is positive. What is the most appropriate treatment?`,
    options: ['Penicillin', 'Amoxicillin', 'Azithromycin', 'Clindamycin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 549,
    question: `A patient presents with fatigue, palpitations, and tremors. Lab tests reveal elevated T3 and T4 levels. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Thyroid storm', 'Graves\' disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 550,
    question: `Which of the following is an indicator of severe preeclampsia?`,
    options: ['Proteinuria', 'Hypertension', 'Thrombocytopenia', 'Edema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 551,
    question: `Which laboratory test is most useful for diagnosing rheumatoid arthritis?`,
    options: ['Rheumatoid factor', 'Anti-CCP antibodies', 'ESR (Erythrocyte Sedimentation Rate)', 'CRP (C-reactive protein)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 552,
    question: `A newborn presents with respiratory distress, a scaphoid abdomen, and bowel sounds in the chest. What is the most likely diagnosis?`,
    options: ['Diaphragmatic hernia', 'Tracheoesophageal fistula', 'Hyaline membrane disease', 'Bronchopulmonary dysplasia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 553,
    question: `A patient with long-standing diabetes presents with a foot ulcer. What is the most likely underlying cause?`,
    options: ['Arterial insufficiency', 'Neuropathy', 'Infection', 'Venous insufficiency'],
    correct: 1,
    explanation: ''
  },
  {
    id: 554,
    question: `What is the hallmark sign of rheumatoid arthritis?`,
    options: ['Asymmetrical joint pain', 'Morning stiffness', 'Joint deformities', 'Tenderness in joints'],
    correct: 1,
    explanation: ''
  },
  {
    id: 555,
    question: `A 25-year-old male presents with fever, joint pain, and a rash on his face and chest. He reports recently recovering from a sore throat. What is the most likely diagnosis?`,
    options: ['Rheumatic fever', 'Systemic lupus erythematosus', 'Erythema multiforme', 'Kawasaki disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 556,
    question: `A 28-year-old woman presents with severe dysmenorrhea, dyspareunia, and infertility. Laparoscopy reveals endometrial implants on ovaries and peritoneum. The gold standard treatment is:`,
    options: ['Hormonal suppression', 'Laparoscopic excision of endometriotic lesions', 'Analgesics only', 'IVF immediately'],
    correct: 1,
    explanation: ''
  },
  {
    id: 557,
    question: `Which of the following is the first-line treatment for diabetic ketoacidosis (DKA)?`,
    options: ['Glucagon', 'Insulin infusion', 'Oral hypoglycemics', 'Corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 558,
    question: `A 70-year-old woman presents with sudden onset of weakness on one side of her body. What is the most appropriate initial investigation?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Carotid Doppler ultrasound', 'Echocardiogram'],
    correct: 0,
    explanation: ''
  },
  {
    id: 559,
    question: `A child with a history of frequent respiratory infections presents with failure to thrive and an abnormal sweat test. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Asthma', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 560,
    question: `The gold standard treatment for severe endometriosis causing infertility is:`,
    options: ['Laparoscopic excision of lesions', 'Hormonal therapy', 'IVF immediately', 'Analgesics only'],
    correct: 0,
    explanation: ''
  },
  {
    id: 561,
    question: `The definitive treatment for complete hydatidiform mole is:`,
    options: ['Suction curettage', 'Hysterectomy', 'Methotrexate therapy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 562,
    question: `A patient presents with confusion, dry mucous membranes, and hypernatremia. What is the most likely cause?`,
    options: ['Dehydration', 'Diabetes insipidus', 'Hyperaldosteronism', 'Cushing’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 563,
    question: `The main neurotransmitter affected in Parkinson's disease is:`,
    options: ['Norepinephrine', 'Serotonin', 'Dopamine', 'Acetylcholine'],
    correct: 2,
    explanation: ''
  },
  {
    id: 564,
    question: `A child presents with diarrhea, abdominal pain, and a recent travel history to an area with poor sanitation. What is the most likely cause?`,
    options: ['Giardiasis', 'Rotavirus', 'Shigellosis', 'Cryptosporidiosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 565,
    question: `A patient presents with fatigue, jaundice, and dark urine. Lab tests show elevated indirect bilirubin. What is the most likely cause?`,
    options: ['Hemolysis', 'Hepatitis', 'Cirrhosis', 'Biliary obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 566,
    question: `A patient presents with fever, cough, and purulent sputum. Chest X-ray shows an infiltrate in the right lower lobe. What is the most likely diagnosis?`,
    options: ['Community-acquired pneumonia', 'Tuberculosis', 'Bronchitis', 'Lung abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 567,
    question: `A 4-year-old child presents with a barking cough, stridor, and respiratory distress. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 568,
    question: `A child with fever, cough, and wheezing is diagnosed with bronchiolitis. What is the most likely causative agent?`,
    options: ['Respiratory syncytial virus (RSV)', 'Influenza virus', 'Adenovirus', 'Parainfluenza virus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 569,
    question: `A child presents with constipation, abdominal pain, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Hirschsprung\'s disease', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 570,
    question: `Which condition is characterized by a "cobblestone" appearance of the mucosa?`,
    options: ['Crohn\'s disease', 'Ulcerative colitis', 'Celiac disease', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 571,
    question: `A patient presents with a chronic cough and hemoptysis. What is the most appropriate next step?`,
    options: ['Chest X-ray', 'Sputum culture', 'Bronchoscopy', 'CT scan of the chest'],
    correct: 0,
    explanation: ''
  },
  {
    id: 572,
    question: `A 30-year-old female presents with severe pain during menstruation and pelvic tenderness. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Ovarian cyst', 'Pelvic inflammatory disease', 'Fibroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 573,
    question: `The most common complication of prolonged labor is:`,
    options: ['Uterine rupture', 'Vesicovaginal fistula', 'Endometriosis', 'Cervical incompetence'],
    correct: 1,
    explanation: ''
  },
  {
    id: 574,
    question: `Which of the following is a common side effect of statin therapy?`,
    options: ['Myopathy', 'Hepatotoxicity', 'Hypoglycemia', 'Weight gain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 575,
    question: `A 4-year-old child presents with abdominal pain, diarrhea, and a history of traveling abroad. What is the most likely diagnosis?`,
    options: ['Gastroenteritis', 'Appendicitis', 'Intussusception', 'Constipation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 576,
    question: `What is the main mechanism of action of ACE inhibitors?`,
    options: ['Vasodilation', 'Inhibition of angiotensin II production', 'Decreased sodium reabsorption', 'Increased potassium excretion'],
    correct: 1,
    explanation: ''
  },
  {
    id: 577,
    question: `A patient with a history of asthma presents with a cough and wheezing after exposure to a cold environment. What is the most likely trigger?`,
    options: ['Allergens', 'Exercise', 'Cold air', 'Viral infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 578,
    question: `In a patient with hyperkalemia, which of the following ECG changes is most likely?`,
    options: ['Peaked T waves', 'Prolonged QT interval', 'ST elevation', 'Flattened P waves'],
    correct: 0,
    explanation: ''
  },
  {
    id: 579,
    question: `A 27-year-old woman presents with acute abdomen and missed period. Beta-hCG is positive. Ultrasound shows empty uterus and adnexal mass. Most likely diagnosis is:`,
    options: ['Ectopic pregnancy', 'Miscarriage', 'Ovarian cyst', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 580,
    question: `Which condition is associated with "steatorrhea"?`,
    options: ['Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis', 'IBS (Irritable Bowel Syndrome)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 581,
    question: `A patient presents with severe fatigue, palpitations, and is found to have a low hemoglobin level with microcytic red blood cells. What is the most likely cause?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Anemia of chronic disease', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 582,
    question: `What is the first-line treatment for hypertension in a patient with diabetes?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 583,
    question: `A 35-year-old woman presents with irregular cycles, hirsutism, and obesity. Serum testosterone mildly elevated. The most likely diagnosis is:`,
    options: ['PCOS', 'Androgen-secreting tumor', 'Congenital adrenal hyperplasia', 'Cushing syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 584,
    question: `A child presents with abdominal pain, vomiting, and a "currant jelly" stool. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Constipation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 585,
    question: `A 45-year-old woman presents with sudden onset of severe right upper quadrant pain after a fatty meal. What is the most likely diagnosis?`,
    options: ['Acute cholecystitis', 'Acute pancreatitis', 'Peptic ulcer disease', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 586,
    question: `Which condition is characterized by an increased level of bilirubin?`,
    options: ['Hemolytic anemia', 'Dehydration', 'Renal failure', 'Hyperglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 587,
    question: `In which stage of labor is the cervix fully dilated?`,
    options: ['First stage', 'Second stage', 'Third stage', 'Fourth stage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 588,
    question: `A 50-year-old woman presents with sudden vision loss in one eye. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Macular degeneration', 'Diabetic retinopathy', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 589,
    question: `In which condition is a biconvex (lens-shaped) hematoma typically seen on a CT scan of the head?`,
    options: ['Subdural hematoma, firs uncoonsuou, then conscious, then nconscoous, lucid interval', 'Epidural hematoma', 'Intracerebral hemorrhage', 'Subarachnoid hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 590,
    question: `A 22-year-old woman presents with acute abdominal pain and nausea. An ultrasound reveals a ruptured ovarian cyst. What is the primary concern?`,
    options: ['Infection', 'Hemorrhage', 'Infertility', 'Adhesions'],
    correct: 0,
    explanation: ''
  },
  {
    id: 591,
    question: `Which of the following is the most common cause of gastroenteritis in children?`,
    options: ['Rotavirus', 'Norovirus', 'Salmonella', 'Shigella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 592,
    question: `What is the most common form of congenital heart disease?`,
    options: ['Ventricular septal defect', 'Atrial septal defect', 'Coarctation of the aorta', 'Tetralogy of Fallot'],
    correct: 0,
    explanation: ''
  },
  {
    id: 593,
    question: `A patient diagnosed with chronic kidney disease is being assessed for anemia. Which lab value would most likely be low?`,
    options: ['Hemoglobin', 'Serum creatinine', 'Serum potassium', 'Calcium'],
    correct: 0,
    explanation: ''
  },
  {
    id: 594,
    question: `The most reliable sign of true labor is:`,
    options: ['Painful uterine contractions', 'Show', 'Progressive cervical dilatation', 'Backache'],
    correct: 2,
    explanation: ''
  },
  {
    id: 595,
    question: `Which vitamin deficiency is associated with rickets in children?`,
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correct: 3,
    explanation: ''
  },
  {
    id: 596,
    question: `Which of the following conditions is associated with a "tear-drop" appearance on a peripheral blood smear?`,
    options: ['Myelofibrosis', 'Thalassemia', 'Megaloblastic anemia', 'Iron deficiency anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 597,
    question: `A patient with chronic diarrhea is found to have a deficiency in fat-soluble vitamins. What is the most likely cause?`,
    options: ['Malabsorption syndrome', 'Dietary deficiency', 'Liver disease', 'Pancreatic insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 598,
    question: `The main pathogen responsible for acute bacterial sinusitis is:`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 599,
    question: `A patient presents with fatigue, pallor, and glossitis. What is the most likely deficiency?`,
    options: ['Iron', 'Vitamin B12', 'Folate', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 600,
    question: `A 28-year-old female presents with fatigue, hair loss, and weight gain. Lab tests reveal elevated TSH and low T4. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Hashimoto\'s thyroiditis', 'Thyroid storm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 601,
    question: `Which organism is most commonly responsible for urinary tract infections in young women?`,
    options: ['Staphylococcus aureus', 'Escherichia coli', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 602,
    question: `What is the first-line treatment for major depressive disorder?`,
    options: ['Electroconvulsive therapy', 'Selective serotonin reuptake inhibitors (SSRIs)', 'Cognitive behavioral therapy (CBT)', 'Tricyclic antidepressants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 603,
    question: `The "Cushing's triad" of increased intracranial pressure consists of:`,
    options: ['Hypotension, tachycardia, irregular breathing', 'Hypertension, bradycardia, irregular breathing', 'Hypertension, tachycardia, hyperventilation', 'Hypotension, bradycardia, hyperventilation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 604,
    question: `A patient presents with hypercalcemia. Which of the following conditions is most likely?`,
    options: ['Hypoparathyroidism', 'Primary hyperparathyroidism', 'Osteoporosis', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 605,
    question: `A patient presents with a history of excessive urination, polydipsia, and a fasting glucose of 150 mg/dL. What is the most likely diagnosis?`,
    options: ['Type 2 diabetes mellitus', 'Type 1 diabetes mellitus', 'Gestational diabetes', 'Diabetes insipidus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 606,
    question: `Which of the following is the most common cause of hepatocellular carcinoma worldwide?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Alcoholic liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 607,
    question: `A patient presents with a history of palpitations and anxiety. An ECG shows atrial fibrillation. What is the most appropriate management?`,
    options: ['Rate control with beta-blockers', 'Electrical cardioversion', 'Anticoagulation therapy', 'Digoxin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 608,
    question: `The "Gower's sign" is associated with which muscular condition?`,
    options: ['Dystrophinopathy', 'Myasthenia gravis', 'Amyotrophic lateral sclerosis', 'Becker muscular dystrophy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 609,
    question: `A 55-year-old male presents with hematuria and flank pain. What is the most likely diagnosis?`,
    options: ['Nephrolithiasis', 'Urinary tract infection', 'Bladder cancer', 'Renal cell carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 610,
    question: `A 30-year-old male presents with scrotal swelling that transilluminates. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Varicocele', 'Epididymitis', 'Testicular torsion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 611,
    question: `What is the most sensitive test for the diagnosis of deep vein thrombosis (DVT)?`,
    options: ['Doppler ultrasound', 'D-dimer assay', 'CT venography', 'MRI venography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 612,
    question: `A patient presents with right upper quadrant pain, fever, and jaundice. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Hepatitis', 'Pancreatitis', 'Biliary obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 613,
    question: `A patient with a history of asthma presents with chest tightness and wheezing after exposure to cold air. What is the best management?`,
    options: ['Increase beta-blocker dosage', 'Administer a bronchodilator', 'Start corticosteroids', 'Provide antibiotics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 614,
    question: `Which electrolyte imbalance is commonly associated with vomiting?`,
    options: ['Hyperkalemia', 'Hypernatremia', 'Hypokalemia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 615,
    question: `Which of the following is a common cause of secondary amenorrhea?`,
    options: ['Pregnancy', 'Anorexia nervosa', 'Polycystic ovary syndrome', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 616,
    question: `The most common type of stroke is:`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Transient ischemic attack (TIA)', 'Lacunar stroke'],
    correct: 1,
    explanation: ''
  },
  {
    id: 617,
    question: `A 3-year-old child presents with a barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 618,
    question: `A young man presents with unilateral testicular pain and swelling. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Hernia', 'Hydrocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 619,
    question: `A patient with diabetes presents with vision changes and is found to have cotton wool spots on examination. What is the most likely diagnosis?`,
    options: ['Diabetic retinopathy', 'Macular degeneration', 'Retinal detachment', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 620,
    question: `Which lab test is most useful in diagnosing autoimmune hepatitis?`,
    options: ['Elevated AST and ALT', 'Positive anti-nuclear antibodies (ANA)', 'Elevated alkaline phosphatase', 'Serum bilirubin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 621,
    question: `A patient presents with recurrent abdominal pain, diarrhea, and weight loss. Colonoscopy shows skip lesions. What is the most likely diagnosis?`,
    options: ['Crohn’s disease', 'Ulcerative colitis', 'Irritable bowel syndrome', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 622,
    question: `A patient presents with flank pain, hematuria, and nausea. A CT scan shows a renal stone. What is the most appropriate initial management?`,
    options: ['Surgery', 'Extracorporeal shock wave lithotripsy', 'Medical management', 'Ureteroscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 623,
    question: `Which of the following is the most common congenital heart defect?`,
    options: ['Ventricular septal defect', 'Atrial septal defect', 'Tetralogy of Fallot', 'Patent ductus arteriosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 624,
    question: `A 70-year-old woman presents with new onset of confusion and disorientation. What is the most appropriate initial step in evaluation?`,
    options: ['MRI of the brain', 'Blood glucose level', 'Lumbar puncture', 'CT scan of the abdomen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 625,
    question: `A patient with a history of allergic rhinitis presents with nasal congestion, sneezing, and itchy eyes. What is the most appropriate treatment?`,
    options: ['Antihistamines', 'Decongestants', 'Corticosteroids', 'Leukotriene receptor antagonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 626,
    question: `A patient presents with severe abdominal pain, a "board-like" abdomen, and a history of recent perforated peptic ulcer. What is the most likely diagnosis?`,
    options: ['Peritonitis', 'Appendicitis', 'Cholecystitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 627,
    question: `What is the primary cause of peptic ulcer disease?`,
    options: ['Excessive alcohol use', 'Helicobacter pylori infection', 'Chronic stress', 'High-fat diet'],
    correct: 0,
    explanation: ''
  },
  {
    id: 628,
    question: `A 3-year-old child presents with a barking cough and stridor. The likely diagnosis is:`,
    options: ['Croup', 'Asthma', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 629,
    question: `A 30-year-old female presents with a history of palpitations and weight loss. Which condition should be suspected?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Diabetes mellitus'],
    correct: 1,
    explanation: ''
  },
  {
    id: 630,
    question: `A 40-year-old woman presents with fatigue, weight gain, and cold intolerance. Lab tests reveal elevated TSH and low T4. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Thyroiditis', 'Pituitary adenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 631,
    question: `What is the main cause of vitamin K deficiency?`,
    options: ['Malabsorption', 'Poor diet', 'Liver disease', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 632,
    question: `A child is found to have an isolated systolic hypertension. What should be the first step in management?`,
    options: ['Start antihypertensive medication', 'Lifestyle modifications', 'Further evaluation', 'Refer to a specialist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 633,
    question: `A child presents with sudden onset of abdominal pain, vomiting, and currant jelly stools. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Volvulus', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 634,
    question: `A child presents with abdominal pain, vomiting, and a "sausage-shaped" mass in the abdomen. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Volvulus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 635,
    question: `Which imaging study is most useful for evaluating suspected kidney stones?`,
    options: ['Ultrasound', 'CT scan without contrast', 'MRI', 'X-ray'],
    correct: 1,
    explanation: ''
  },
  {
    id: 636,
    question: `In which condition would you expect to find "bullae" on the skin?`,
    options: ['Eczema', 'Pemphigus vulgaris', 'Psoriasis', 'Atopic dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 637,
    question: `Which condition is characterized by the presence of a "cherry-red spot" on the macula?`,
    options: ['Tay-Sachs disease', 'Gaucher\'s disease', 'Niemann-Pick disease', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 638,
    question: `A patient presents with pain and swelling in the big toe joint, especially at night. What is the most likely diagnosis?`,
    options: ['Gout', 'Osteoarthritis', 'Pseudogout', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 639,
    question: `A 25-year-old woman presents with palpitations, heat intolerance, and weight loss. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Cushing\'s syndrome', 'Anxiety disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 640,
    question: `A 45-year-old patient presents with abdominal pain, jaundice, and elevated liver enzymes. What is the most likely diagnosis?`,
    options: ['Pancreatitis', 'Cholecystitis', 'Hepatitis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 641,
    question: `A 60-year-old man presents with sudden onset of weakness on one side of his body. What is the most likely diagnosis?`,
    options: ['Transient ischemic attack', 'Stroke', 'Multiple sclerosis', 'Bell\'s palsy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 642,
    question: `A patient presents with night sweats, fever, and unintentional weight loss. A chest X-ray reveals a cavitary lesion in the lung. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Fungal infection', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 643,
    question: `The "rule of nines" is used to estimate:`,
    options: ['The extent of fluid loss in dehydration', 'The degree of burns in burn patients', 'The severity of hypothermia', 'The stage of cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 644,
    question: `Which of the following is an effective treatment for severe allergic reactions?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Beta-blockers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 645,
    question: `Which of the following is a common cause of aortic stenosis?`,
    options: ['Congenital heart disease', 'Rheumatic fever', 'Age-related calcific degeneration', 'Infective endocarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 646,
    question: `A 25-year-old woman presents with a sudden onset of left-sided facial paralysis. She cannot close her left eye and has drooping of the mouth on the left side. The most likely diagnosis is:`,
    options: ['Stroke', 'Bell\'s palsy', 'Trigeminal neuralgia', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 647,
    question: `Which of the following is the most common cause of pneumonia in immunocompromised patients?`,
    options: ['Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Pneumocystis jiroveci', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 648,
    question: `A patient with a history of peptic ulcer disease presents with coffee-ground vomitus. What is the most likely cause?`,
    options: ['Erosion of a blood vessel', 'Gastritis', 'Esophageal varices', 'Mallory-Weiss tear'],
    correct: 0,
    explanation: ''
  },
  {
    id: 649,
    question: `A 4-year-old child presents with fever, barking cough, and stridor. What is the most likely diagnosis?`,
    options: ['Croup', 'Epiglottitis', 'Asthma', 'Bronchiolitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 650,
    question: `A patient presents with a history of recurrent ulcers on the oral mucosa. What is the most likely diagnosis?`,
    options: ['Aphthous stomatitis', 'Herpes simplex virus infection', 'Oral thrush', 'Oral lichen planus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 651,
    question: `Which of the following is a risk factor for developing type 2 diabetes mellitus?`,
    options: ['Age over 45 years', 'Family history of diabetes', 'Obesity', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 652,
    question: `What is the most common type of breast cancer?`,
    options: ['Invasive lobular carcinoma', 'Ductal carcinoma in situ', 'Invasive ductal carcinoma', 'Paget\'s disease of the nipple'],
    correct: 2,
    explanation: ''
  },
  {
    id: 653,
    question: `In patients with COPD, which of the following is a common finding on pulmonary function tests?`,
    options: ['Decreased FEV1/FVC ratio', 'Increased FEV1/FVC ratio', 'Normal FEV1/FVC ratio', 'Decreased total lung capacity'],
    correct: 0,
    explanation: ''
  },
  {
    id: 654,
    question: `A 65-year-old male with a history of smoking presents with a cough and hemoptysis. What is the most appropriate initial imaging study?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum culture', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 655,
    question: `Which test is most useful in diagnosing Cushing’s syndrome?`,
    options: ['Serum cortisol', '24-hour urine free cortisol', 'Dexamethasone suppression test', 'ACTH stimulation test'],
    correct: 1,
    explanation: ''
  },
  {
    id: 656,
    question: `Which of the following tests is most useful for diagnosing a pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'D-dimer', 'Ventilation-perfusion (V/Q) scan'],
    correct: 1,
    explanation: ''
  },
  {
    id: 657,
    question: `What is the most sensitive test for diagnosing a myocardial infarction?`,
    options: ['ECG', 'Troponin levels', 'CK-MB', 'BNP'],
    correct: 1,
    explanation: ''
  },
  {
    id: 658,
    question: `Which of the following is a characteristic feature of nephrotic syndrome?`,
    options: ['Hematuria', 'Proteinuria', 'Hypertension', 'Oliguria'],
    correct: 1,
    explanation: ''
  },
  {
    id: 659,
    question: `A 40-year-old woman presents with abdominal pain and a positive pregnancy test. An ultrasound shows a gestational sac outside the uterus. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Molar pregnancy', 'Missed abortion', 'Normal pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 660,
    question: `A 50-year-old man presents with a pulsatile abdominal mass and back pain. What is the most likely diagnosis?`,
    options: ['Aortic dissection', 'Abdominal aortic aneurysm', 'Acute pancreatitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 661,
    question: `A patient with chronic liver disease develops ascites. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Salt restriction', 'Albumin infusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 662,
    question: `A child with a barking cough and stridor at rest is most likely suffering from which condition?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 663,
    question: `A child presents with wheezing and a history of eczema. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Croup', 'Allergic rhinitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 664,
    question: `What is the most effective method for preventing the spread of tuberculosis?`,
    options: ['Vaccination', 'Directly observed therapy', 'Airborne precautions', 'Contact precautions'],
    correct: 2,
    explanation: ''
  },
  {
    id: 665,
    question: `What is the most common pathogen associated with community-acquired pneumonia?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Haemophilus influenzae'],
    correct: 1,
    explanation: ''
  },
  {
    id: 666,
    question: `A 60-year-old male with a history of smoking presents with hoarseness of voice. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Chronic laryngitis', 'Vocal cord paralysis', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 667,
    question: `Which imaging modality is best for assessing gallbladder disease?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 668,
    question: `Which of the following is a major risk factor for developing breast cancer?`,
    options: ['Early menopause', 'Nulliparity', 'High-fiber diet', 'Regular exercise'],
    correct: 1,
    explanation: ''
  },
  {
    id: 669,
    question: `A patient presents with generalized pruritus, jaundice, and dark urine. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Primary biliary cholangitis', 'Cholestasis', 'Gallbladder disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 670,
    question: `The primary characteristic of malignant hypertension is:`,
    options: ['Severe hypertension with no symptoms', 'Hypertension with retinopathy and organ damage', 'Hypertension that responds to lifestyle changes', 'Transient episodes of high blood pressure'],
    correct: 1,
    explanation: ''
  },
  {
    id: 671,
    question: `A 5-year-old boy presents with a high fever, sore throat, and a rash that resembles sandpaper. What is the most likely diagnosis?`,
    options: ['Measles', 'Scarlet fever', 'Chickenpox', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 672,
    question: `What is the first-line antibiotic for treating uncomplicated cystitis in women?`,
    options: ['Ciprofloxacin', 'Amoxicillin', 'Nitrofurantoin', 'Azithromycin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 673,
    question: `A child presents with abdominal pain and bloody diarrhea after returning from a camping trip. What is the most likely infectious agent?`,
    options: ['Campylobacter jejuni', 'Escherichia coli O157', 'Shigella sonnei', 'Salmonella enterica'],
    correct: 0,
    explanation: ''
  },
  {
    id: 674,
    question: `A 28-year-old woman presents with palpitations and weight loss. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Anxiety disorder', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 675,
    question: `A child is diagnosed with asthma and is prescribed a corticosteroid inhaler. Which of the following is a common side effect of inhaled corticosteroids?`,
    options: ['Hypertension', 'Oral thrush', 'Cushing\'s syndrome', 'Weight gain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 676,
    question: `A 20-year-old female presents with dysuria, urgency, and lower abdominal pain. Urinalysis shows leukocytes and nitrites. What is the most likely diagnosis?`,
    options: ['Interstitial cystitis', 'Urinary tract infection', 'Pyelonephritis', 'Vaginitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 677,
    question: `Which of the following is a complication of diabetes mellitus?`,
    options: ['Acute respiratory distress syndrome (ARDS)', 'Diabetic retinopathy', 'Hyperthyroidism', 'Systemic lupus erythematosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 678,
    question: `A woman presents with postmenopausal bleeding. Endometrial biopsy shows endometrioid adenocarcinoma. The first-line management is:`,
    options: ['Hysterectomy with bilateral salpingo-oophorectomy', 'Hormonal therapy', 'Radiotherapy only', 'Chemotherapy only'],
    correct: 0,
    explanation: ''
  },
  {
    id: 679,
    question: `Which of the following vaccines is recommended annually for adults to prevent a common viral infection?`,
    options: ['Hepatitis B vaccine', 'Tetanus vaccine', 'Influenza vaccine', 'Varicella vaccine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 680,
    question: `A 30-year-old woman with a history of asthma presents with wheezing and cough. Peak expiratory flow rate is significantly decreased. What is the best immediate treatment?`,
    options: ['Inhaled corticosteroids', 'Long-acting beta-agonists', 'Short-acting beta-agonists', 'Oral corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 681,
    question: `A patient presents with recurrent episodes of vertigo, tinnitus, and hearing loss. What is the most likely diagnosis?`,
    options: ['Ménière’s disease', 'Acoustic neuroma', 'Benign paroxysmal positional vertigo (BPPV)', 'Labyrinthitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 682,
    question: `A patient with chronic kidney disease has a high serum potassium level. What is the most appropriate management?`,
    options: ['Dietary potassium restriction', 'Hemodialysis', 'Sodium polystyrene sulfonate', 'Calcium gluconate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 683,
    question: `What is the classic symptom of left-sided heart failure?`,
    options: ['Peripheral edema', 'Jugular venous distension', 'Orthopnea', 'Hepatomegaly'],
    correct: 2,
    explanation: ''
  },
  {
    id: 684,
    question: `A patient with a history of asthma presents with worsening symptoms despite using his rescue inhaler. What medication should be added?`,
    options: ['Short-acting beta-agonist', 'Long-acting beta-agonist', 'Corticosteroid', 'Anticholinergic'],
    correct: 1,
    explanation: ''
  },
  {
    id: 685,
    question: `What is the primary treatment for hypertension in a patient with chronic kidney disease?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 686,
    question: `What is the first-line treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Albuterol'],
    correct: 2,
    explanation: ''
  },
  {
    id: 687,
    question: `A woman presents with painful menstruation starting soon after menarche. This is:`,
    options: ['Secondary dysmenorrhea', 'Primary dysmenorrhea', 'Endometriosis', 'Adenomyosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 688,
    question: `A patient presents with weight loss, irritability, and hyperpigmentation of the skin. What is the most likely diagnosis?`,
    options: ['Addison’s disease', 'Cushing’s syndrome', 'Hyperthyroidism', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 689,
    question: `A patient presents with unilateral headache, photophobia, and tearing. What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension headache', 'Cluster headache', 'Temporal arteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 690,
    question: `Which test is the most sensitive for detecting HIV infection early in the disease course?`,
    options: ['HIV ELISA', 'Western blot', 'PCR for HIV RNA', 'CD4 count'],
    correct: 0,
    explanation: ''
  },
  {
    id: 691,
    question: `A patient presents with fever, malaise, and a rash that started on the face and spread downward. What is the most likely diagnosis?`,
    options: ['Fifth disease', 'Measles', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 692,
    question: `Which medication is used to reverse opioid overdose?`,
    options: ['Naloxone', 'Naltrexone', 'Flumazenil', 'Acetylcysteine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 693,
    question: `A patient with a history of migraines presents with unilateral weakness and difficulty speaking. What is the most likely diagnosis?`,
    options: ['Transient ischemic attack', 'Migraine with aura', 'Stroke', 'Bell\'s palsy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 694,
    question: `A patient presents with diplopia, ptosis, and difficulty chewing. Symptoms worsen as the day progresses. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Multiple sclerosis', 'Lambert-Eaton syndrome', 'Guillain-Barré syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 695,
    question: `A 25-year-old man presents with multiple vesicles around his mouth that crust over. What is the most likely causative agent?`,
    options: ['Varicella-zoster virus', 'Herpes simplex virus', 'Coxsackie virus', 'Human papillomavirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 696,
    question: `A 40-year-old woman presents with severe menstrual cramps and heavy menstrual bleeding. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Adenomyosis', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 697,
    question: `A patient is diagnosed with rheumatoid arthritis. What is the first-line treatment for symptom management?`,
    options: ['Methotrexate', 'NSAIDs', 'Corticosteroids', 'Biologics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 698,
    question: `What is the primary mechanism of action of ACE inhibitors?`,
    options: ['Blockade of calcium channels', 'Inhibition of angiotensin II production', 'Promotion of vasodilation', 'Decrease in heart rate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 699,
    question: `A 30-year-old woman presents with postmenopausal bleeding. Ultrasound shows endometrial thickness 20 mm. Next best step:`,
    options: ['Observation', 'Endometrial biopsy', 'Hormonal therapy', 'Repeat ultrasound in 1 month'],
    correct: 1,
    explanation: ''
  },
  {
    id: 700,
    question: `A patient presents with a butterfly rash on the face. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Rosacea', 'Systemic lupus erythematosus', 'Dermatomyositis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 701,
    question: `A child presents with a rash, fever, and joint pain after a recent illness. What condition should be suspected?`,
    options: ['Kawasaki disease', 'Henoch-Schönlein purpura', 'Viral exanthem', 'Rheumatic fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 702,
    question: `Which vitamin is essential for the synthesis of clotting factors in the liver?`,
    options: ['Vitamin A', 'Vitamin K', 'Vitamin E', 'Vitamin D'],
    correct: 1,
    explanation: ''
  },
  {
    id: 703,
    question: `A 70-year-old male presents with acute confusion and disorientation after being hospitalized for pneumonia. What is the most likely diagnosis?`,
    options: ['Dementia', 'Delirium', 'Depression', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 704,
    question: `A child is brought to the clinic for routine immunizations. At what age is the first dose of the MMR vaccine recommended?`,
    options: ['6 months', '12 months', '18 months', '4 years'],
    correct: 0,
    explanation: ''
  },
  {
    id: 705,
    question: `Which of the following is a complication of untreated diabetes mellitus?`,
    options: ['Asthma', 'Retinopathy', 'Osteoporosis', 'Atherosclerosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 706,
    question: `A patient with a history of hypertension presents with a blood pressure of 210/120 mmHg and severe headache. What is the most likely diagnosis?`,
    options: ['Primary hypertension', 'Hypertensive emergency', 'Preeclampsia', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 707,
    question: `A patient presents with sudden onset of unilateral facial paralysis. What is the most likely diagnosis?`,
    options: ['Bell\'s palsy', 'Stroke', 'Multiple sclerosis', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 708,
    question: `A 40-year-old male presents with elevated liver enzymes, fatigue, and a family history of liver disease. What is the most likely diagnosis?`,
    options: ['Hemochromatosis', 'Hepatitis C', 'Non-alcoholic fatty liver disease', 'Alcoholic liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 709,
    question: `A 60-year-old female presents with fatigue and elevated serum calcium levels. What condition should be suspected?`,
    options: ['Multiple myeloma', 'Hyperparathyroidism', 'Vitamin D intoxication', 'Osteoporosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 710,
    question: `Which of the following is a common cause of acute kidney injury in hospitalized patients?`,
    options: ['Prerenal azotemia', 'Acute tubular necrosis', 'Glomerulonephritis', 'Interstitial nephritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 711,
    question: `A woman with prolonged labor is at risk of developing:`,
    options: ['Endometriosis', 'Vesicovaginal fistula', 'Cervical cancer', 'Uterine fibroid'],
    correct: 1,
    explanation: ''
  },
  {
    id: 712,
    question: `A patient with a history of deep vein thrombosis (DVT) is started on warfarin. What is the most important laboratory test to monitor?`,
    options: ['Platelet count', 'Prothrombin time (PT)/INR', 'Activated partial thromboplastin time (aPTT)', 'Fibrinogen levels'],
    correct: 1,
    explanation: ''
  },
  {
    id: 713,
    question: `The classic symptom of multiple sclerosis is:`,
    options: ['Muscle weakness', 'Visual disturbances', 'Sensory loss', 'Ataxia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 714,
    question: `A patient with known diabetes presents with a foot ulcer that is not healing. What is the most likely underlying cause?`,
    options: ['Peripheral arterial disease', 'Infection', 'Neuropathy', 'Venous insufficiency'],
    correct: 2,
    explanation: ''
  },
  {
    id: 715,
    question: `Which medication is commonly used as a first-line treatment for chronic migraine prophylaxis?`,
    options: ['Triptans', 'Beta-blockers', 'NSAIDs', 'Opioids'],
    correct: 1,
    explanation: ''
  },
  {
    id: 716,
    question: `A 30-year-old woman presents with galactorrhea and amenorrhea. What is the most likely cause?`,
    options: ['Hyperprolactinemia', 'Polycystic ovary syndrome (PCOS)', 'Hypothyroidism', 'Ovarian tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 717,
    question: `A 30-year-old woman presents with chronic diarrhea, abdominal bloating, and weight loss. She has a history of iron deficiency anemia. What is the most likely diagnosis?`,
    options: ['Lactose intolerance', 'Irritable bowel syndrome (IBS)', 'Celiac disease', 'Crohn’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 718,
    question: `A 5-year-old child presents with a high fever and a rash that started on the face. What is the most likely diagnosis?`,
    options: ['Chickenpox', 'Measles', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 719,
    question: `Which imaging modality is preferred for diagnosing pulmonary embolism?`,
    options: ['X-ray', 'CT angiography', 'MRI', 'Ultrasound'],
    correct: 1,
    explanation: ''
  },
  {
    id: 720,
    question: `A patient presents with severe knee pain after a fall. X-ray shows a fracture. What is the most appropriate management?`,
    options: ['Physical therapy', 'Immediate surgery', 'Analgesics and rest', 'Brace application'],
    correct: 0,
    explanation: ''
  },
  {
    id: 721,
    question: `A woman presents with stress incontinence and cystocele. Definitive management is:`,
    options: ['Pelvic floor exercises only', 'Antibiotics', 'Surgical repair', 'Hormonal therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 722,
    question: `Which of the following drugs is a known cause of drug-induced lupus?`,
    options: ['Isoniazid', 'Methotrexate', 'Warfarin', 'Hydrochlorothiazide'],
    correct: 0,
    explanation: ''
  },
  {
    id: 723,
    question: `A 25-year-old woman presents with bilateral breast tenderness and a lump that varies with her menstrual cycle. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Breast cyst', 'Breast cancer', 'Galactocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 724,
    question: `A patient presents with a sudden onset of palpitations, sweating, and tremors. Blood tests show elevated glucose levels. What is the most likely cause?`,
    options: ['Hypoglycemia', 'Hyperthyroidism', 'Pheochromocytoma', 'Anxiety disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 725,
    question: `A patient with chronic kidney disease is likely to experience which of the following electrolyte imbalances?`,
    options: ['Hypocalcemia', 'Hyperkalemia', 'Hyponatremia', 'Hypermagnesemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 726,
    question: `The presence of "strawberry tongue" is associated with which condition?`,
    options: ['Scarlet fever', 'Kawasaki disease', 'Strep throat', 'Mononucleosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 727,
    question: `What is the most common cause of primary amenorrhea?`,
    options: ['Turner syndrome', 'Polycystic ovarian syndrome (PCOS)', 'Hyperprolactinemia', 'Asherman\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 728,
    question: `A child presents with a painful, swollen knee joint after a recent upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Reactive arthritis', 'Juvenile idiopathic arthritis', 'Osteomyelitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 729,
    question: `What is the most appropriate management for a patient with acute asthma exacerbation?`,
    options: ['Corticosteroids', 'Short-acting beta-agonist', 'Long-acting beta-agonist', 'Antibiotics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 730,
    question: `The most reliable method to diagnose ovulation in infertile women is:`,
    options: ['Basal body temperature charting', 'Mid-luteal serum progesterone', 'Cervical mucus evaluation', 'Urinary LH surge'],
    correct: 1,
    explanation: ''
  },
  {
    id: 731,
    question: `A patient with a history of chronic kidney disease presents with fatigue, pallor, and shortness of breath. What lab finding is most likely?`,
    options: ['Hyperkalemia', 'Anemia', 'Hypocalcemia', 'Hyperphosphatemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 732,
    question: `A patient presents with fever, chest pain, and a pericardial friction rub. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pericarditis', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 733,
    question: `A 3-year-old child presents with high fever and a cherry-red spot on the conjunctiva. What is the most likely diagnosis?`,
    options: ['Viral conjunctivitis', 'Bacterial conjunctivitis', 'Allergic conjunctivitis', 'Keratitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 734,
    question: `Which medication is commonly used to treat opioid overdose?`,
    options: ['Flumazenil', 'Naloxone', 'Atropine', 'Activated charcoal'],
    correct: 1,
    explanation: ''
  },
  {
    id: 735,
    question: `A 70-year-old female is diagnosed with osteoporosis. What is the first-line treatment for her condition?`,
    options: ['Calcium and vitamin D supplementation', 'Bisphosphonates', 'Hormone replacement therapy', 'Denosumab'],
    correct: 0,
    explanation: ''
  },
  {
    id: 736,
    question: `A 70-year-old male presents with difficulty urinating and a weak stream. What condition is most likely?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Urethral stricture', 'Bladder stones'],
    correct: 1,
    explanation: ''
  },
  {
    id: 737,
    question: `A 25-year-old woman presents with amenorrhea and a positive pregnancy test. What is the most appropriate next step?`,
    options: ['Ultrasound', 'Serum hCG', 'Pelvic exam', 'MRI'],
    correct: 1,
    explanation: ''
  },
  {
    id: 738,
    question: `The primary mode of transmission for hepatitis B virus is:`,
    options: ['Fecal-oral route', 'Airborne droplets', 'Blood and body fluids', 'Sexual contact'],
    correct: 2,
    explanation: ''
  },
  {
    id: 739,
    question: `A 2-month-old infant presents with projectile vomiting and dehydration. Physical examination reveals a "olive-like" mass in the right upper abdomen. What is the most likely diagnosis?`,
    options: ['Intestinal obstruction', 'Pyloric stenosis', 'Gastroesophageal reflux', 'Duodenal atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 740,
    question: `A child presents with a barking cough, stridor, and respiratory distress. What is the most appropriate treatment?`,
    options: ['Nebulized epinephrine', 'Oral antibiotics', 'Corticosteroids', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 741,
    question: `Which of the following is the most common cause of community-acquired pneumonia in adults?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Haemophilus influenzae'],
    correct: 1,
    explanation: ''
  },
  {
    id: 742,
    question: `A patient with a history of chronic alcohol use presents with ataxia and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Delirium tremens', 'Hepatic encephalopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 743,
    question: `A patient with diabetes presents with blurred vision and floaters. What is the most likely cause?`,
    options: ['Cataract', 'Diabetic retinopathy', 'Glaucoma', 'Macular degeneration'],
    correct: 1,
    explanation: ''
  },
  {
    id: 744,
    question: `A 60-year-old male presents with dyspnea, orthopnea, and bilateral pitting edema. What is the most likely diagnosis?`,
    options: ['Congestive heart failure', 'Chronic obstructive pulmonary disease (COPD)', 'Pulmonary embolism', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 745,
    question: `A patient presents with severe abdominal pain and an elevated amylase level. What condition is most likely?`,
    options: ['Appendicitis', 'Acute pancreatitis', 'Cholecystitis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 746,
    question: `In which type of shock is bradycardia most commonly seen?`,
    options: ['Hypovolemic shock', 'Cardiogenic shock', 'Neurogenic shock', 'Septic shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 747,
    question: `A 50-year-old woman presents with unilateral breast pain and a palpable mass. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Breast cancer', 'Cyst', 'Mastitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 748,
    question: `Which type of hypersensitivity reaction is mediated by IgE antibodies?`,
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 749,
    question: `A 50-year-old woman presents with weight gain, moon facies, and abdominal striae. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Hypothyroidism', 'Polycystic ovary syndrome', 'Diabetes mellitus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 750,
    question: `The most common cause of secondary hypertension is:`,
    options: ['Hyperaldosteronism', 'Cushing\'s syndrome', 'Renal artery stenosis', 'Sleep apnea'],
    correct: 2,
    explanation: ''
  },
  {
    id: 751,
    question: `A 65-year-old woman with a history of osteoporosis presents with sudden back pain after lifting a box. What is the most likely diagnosis?`,
    options: ['Compression fracture', 'Disc herniation', 'Muscle strain', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 752,
    question: `Which of the following conditions is associated with a "barking" cough?`,
    options: ['Croup', 'Bronchiolitis', 'Asthma', 'Epiglottitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 753,
    question: `A patient with a history of angina presents with sudden chest pain radiating to the arm. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 754,
    question: `The most common site of endometriosis is:`,
    options: ['Ovary', 'Uterosacral ligament', 'Pouch of Douglas', 'Rectovaginal septum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 755,
    question: `In a patient with liver cirrhosis, what is a common cause of encephalopathy?`,
    options: ['Hyperammonemia', 'Hypoglycemia', 'Hyponatremia', 'Hyperbilirubinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 756,
    question: `Which of the following is the best initial management for a patient with a suspected STEMI?`,
    options: ['Oral aspirin', 'Nitroglycerin', 'Morphine', 'PCI (Percutaneous coronary intervention)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 757,
    question: `A 70-year-old man presents with progressive memory loss, confusion, and difficulty with daily activities. What is the most likely diagnosis?`,
    options: ['Alzheimer’s disease', 'Parkinson’s disease', 'Vascular dementia', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 758,
    question: `A 4-year-old boy presents with abdominal pain, diarrhea, and a rash on his cheeks. What is the most likely cause?`,
    options: ['Erythema infectiosum (Fifth disease)', 'Chickenpox', 'Hand, foot, and mouth disease', 'Scarlet fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 759,
    question: `A 30-year-old woman presents with bilateral leg swelling, proteinuria, and hypoalbuminemia. What is the most likely diagnosis?`,
    options: ['Acute kidney injury', 'Nephrotic syndrome', 'Acute glomerulonephritis', 'Pyelonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 760,
    question: `A patient presents with fever, night sweats, and cough. What is the most appropriate initial test for suspected tuberculosis?`,
    options: ['Chest X-ray', 'Sputum culture', 'Tuberculin skin test (TST)', 'CT scan of the chest'],
    correct: 2,
    explanation: ''
  },
  {
    id: 761,
    question: `A patient presents with severe abdominal pain and a palpable mass in the right upper quadrant. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Hepatic abscess', 'Cholecystitis', 'Renal stone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 762,
    question: `A patient with a history of asthma presents with a severe exacerbation and low oxygen saturation. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Inhaled beta-agonist', 'Oxygen therapy', 'Anticholinergic'],
    correct: 0,
    explanation: ''
  },
  {
    id: 763,
    question: `A patient presents with chronic diarrhea and weight loss. Endoscopy reveals flattened villi in the small intestine. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 764,
    question: `A patient with a history of HIV presents with a CD4 count of 150 cells/mm³ and a fever, cough, and dyspnea. Chest X-ray reveals bilateral interstitial infiltrates. What is the most likely diagnosis?`,
    options: ['Pneumocystis pneumonia', 'Tuberculosis', 'Bacterial pneumonia', 'Fungal pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 765,
    question: `A 35-year-old female presents with abdominal pain and "string of pearls" on ultrasound. What is the likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Ovarian cyst', 'Polycystic ovary syndrome', 'Endometriosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 766,
    question: `A common complication of untreated hyperthyroidism is:`,
    options: ['Osteoporosis', 'Myxedema', 'Thyroid storm', 'Goiter'],
    correct: 2,
    explanation: ''
  },
  {
    id: 767,
    question: `A patient presents with severe abdominal pain and has a history of gallstones. What is the most likely complication of gallstones?`,
    options: ['Pancreatitis', 'Cholestasis', 'Perforated ulcer', 'Intestinal obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 768,
    question: `What is the primary mode of transmission for hepatitis B virus?`,
    options: ['Airborne', 'Fecal-oral', 'Blood and bodily fluids', 'Vector-borne'],
    correct: 2,
    explanation: ''
  },
  {
    id: 769,
    question: `A 45-year-old man presents with elevated serum bilirubin and dark urine. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Cholecystitis', 'Hemolytic anemia', 'Alcoholic liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 770,
    question: `A 50-year-old woman presents with vaginal bleeding after menopause. What is the most appropriate next step?`,
    options: ['Endometrial biopsy', 'Transvaginal ultrasound', 'Hormonal therapy', 'Watchful waiting'],
    correct: 0,
    explanation: ''
  },
  {
    id: 771,
    question: `A child presenting with petechiae and a history of recurrent infections is likely suffering from:`,
    options: ['Idiopathic thrombocytopenic purpura (ITP)', 'Henoch-Schönlein purpura', 'Acute lymphoblastic leukemia (ALL)', 'Hemophilia A'],
    correct: 0,
    explanation: ''
  },
  {
    id: 772,
    question: `Which of the following is the drug of choice for long-term prevention of venous thromboembolism?`,
    options: ['Aspirin', 'Warfarin', 'Heparin', 'Clopidogrel'],
    correct: 0,
    explanation: ''
  },
  {
    id: 773,
    question: `A 45-year-old male presents with sudden onset of flank pain radiating to the groin. What is the most likely diagnosis?`,
    options: ['Renal colic', 'Appendicitis', 'Cholecystitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 774,
    question: `A child presents with abdominal pain, "currant jelly" stools, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Volvulus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 775,
    question: `The most common type of breast cancer is:`,
    options: ['Invasive ductal carcinoma', 'Lobular carcinoma', 'Paget\'s disease of the breast', 'Medullary carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 776,
    question: `A 25-year-old man presents with fever, arthralgias, and a target-like rash on his palms and soles. What is the most likely diagnosis?`,
    options: ['Syphilis', 'Lyme disease', 'Erythema multiforme', 'Rocky Mountain spotted fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 777,
    question: `A woman presents with secondary amenorrhea and negative pregnancy test. The next step in evaluation is:`,
    options: ['Ultrasound pelvis', 'Serum prolactin and TSH', 'Endometrial biopsy', 'Laparoscopy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 778,
    question: `What is the most common pathogen responsible for pneumonia in HIV-positive patients with a CD4 count below 200 cells/µL?`,
    options: ['Pneumocystis jirovecii', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycobacterium tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 779,
    question: `Which of the following is most likely to cause secondary hyperparathyroidism?`,
    options: ['Chronic kidney disease', 'Vitamin D toxicity', 'Hypercalcemia', 'Primary hyperparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 780,
    question: `Which condition presents with “café au lait” spots and Lisch nodules?`,
    options: ['Tuberous sclerosis', 'Neurofibromatosis type 1', 'Sturge-Weber syndrome', 'Von Hippel-Lindau disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 781,
    question: `A 60-year-old male presents with persistent heartburn and difficulty swallowing. What is the most likely diagnosis?`,
    options: ['Peptic ulcer disease', 'Esophageal cancer', 'Gastroesophageal reflux disease', 'Achalasia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 782,
    question: `A 30-year-old woman presents with amenorrhea and galactorrhea. Prolactin levels are elevated. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Prolactinoma', 'Thyroid dysfunction', 'Adrenal insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 783,
    question: `A patient with uncontrolled diabetes presents with a deep, foul-smelling ulcer on the foot. What is the most likely diagnosis?`,
    options: ['Venous ulcer', 'Diabetic foot ulcer', 'Arterial ulcer', 'Pressure ulcer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 784,
    question: `A 70-year-old male presents with difficulty urinating, dribbling, and a weak urine stream. What is the most likely diagnosis?`,
    options: ['Prostatitis', 'Bladder cancer', 'Benign prostatic hyperplasia', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 785,
    question: `What is the classic triad of symptoms in a patient with aortic dissection?`,
    options: ['Chest pain, shortness of breath, and syncope', 'Sudden chest pain, back pain, and hypotension', 'Chest pain, cough, and fever', 'Chest pain, nausea, and dizziness'],
    correct: 1,
    explanation: ''
  },
  {
    id: 786,
    question: `In which condition would you expect to find a positive Trousseau's sign?`,
    options: ['Hypomagnesemia', 'Hypercalcemia', 'Hypoparathyroidism', 'Hyperparathyroidism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 787,
    question: `A 40-year-old male presents with abdominal pain and jaundice. Blood tests show elevated liver enzymes and positive hepatitis B surface antigen. What is the most likely diagnosis?`,
    options: ['Hepatitis B infection', 'Hepatitis C infection', 'Alcoholic hepatitis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 788,
    question: `A patient presents with fever, sore throat, and a red rash that feels like sandpaper. What is the most likely diagnosis?`,
    options: ['Measles', 'Scarlet fever', 'Chickenpox', 'Rubella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 789,
    question: `A patient with a history of hyperlipidemia presents with a sudden onset of abdominal pain. Laboratory tests show elevated amylase and lipase. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Pancreatitis', 'Peptic ulcer disease', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 790,
    question: `What is the gold standard for diagnosing pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'D-dimer test', 'Ventilation-perfusion (V/Q) scan'],
    correct: 1,
    explanation: ''
  },
  {
    id: 791,
    question: `A 30-year-old woman presents with irregular menstrual cycles and excessive hair growth. What is the most appropriate initial investigation?`,
    options: ['Serum testosterone', 'Pelvic ultrasound', 'Thyroid function tests', 'FSH and LH levels'],
    correct: 0,
    explanation: ''
  },
  {
    id: 792,
    question: `What is the most common cause of hypothyroidism worldwide?`,
    options: ['Hashimoto\'s thyroiditis', 'Iodine deficiency', 'Surgical removal of the thyroid', 'Radiation therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 793,
    question: `Which of the following is a potential side effect of statins?`,
    options: ['Liver dysfunction', 'Rhabdomyolysis', 'Muscle pain', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 794,
    question: `The most reliable method for confirmation of ovulation is:`,
    options: ['Basal body temperature', 'Serum progesterone level', 'Cervical mucus examination', 'Urinary LH surge'],
    correct: 1,
    explanation: ''
  },
  {
    id: 795,
    question: `The most common primary malignant bone tumor in adults is:`,
    options: ['Osteosarcoma', 'Chondrosarcoma', 'Ewing\'s sarcoma', 'Multiple myeloma'],
    correct: 3,
    explanation: ''
  },
  {
    id: 796,
    question: `Which hormone is elevated in primary hyperparathyroidism?`,
    options: ['Calcitonin', 'Vitamin D', 'Parathyroid hormone (PTH)', 'Thyroxine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 797,
    question: `The classic triad of symptoms for chronic renal failure includes:`,
    options: ['Hematuria, proteinuria, hypertension', 'Fatigue, anorexia, weight loss', 'Flank pain, fever, dysuria', 'Nausea, vomiting, abdominal pain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 798,
    question: `A patient presents with a fever, neck stiffness, and photophobia. Which condition should be suspected?`,
    options: ['Encephalitis', 'Meningitis', 'Brain abscess', 'Cerebral hemorrhage'],
    correct: 1,
    explanation: ''
  },
  {
    id: 799,
    question: `The most common complication of preeclampsia is:`,
    options: ['HELLP syndrome', 'Abruptio placentae', 'Eclampsia', 'Renal failure'],
    correct: 2,
    explanation: ''
  },
  {
    id: 800,
    question: `A woman at 36 weeks gestation presents with headache, blurred vision, and BP 170/110 mmHg. Urine protein is +2. The first-line management is:`,
    options: ['Immediate induction of labor', 'Magnesium sulfate for seizure prophylaxis', 'Oral antihypertensives only', 'Observation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 801,
    question: `A patient presents with sudden vision loss in one eye, severe pain, and a cloudy cornea. The pupil is mid-dilated and non-reactive. The intraocular pressure is elevated. What is the most likely diagnosis?`,
    options: ['Acute angle-closure glaucoma', 'Central retinal artery occlusion', 'Optic neuritis', 'Retinal detachment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 802,
    question: `A patient with asthma is prescribed a leukotriene receptor antagonist. What is the most common medication in this class?`,
    options: ['Montelukast', 'Zafirlukast', 'Salmeterol', 'Theophylline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 803,
    question: `In which condition is the "gallop rhythm" commonly heard on auscultation?`,
    options: ['Atrial fibrillation', 'Heart failure', 'Mitral stenosis', 'Aortic regurgitation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 804,
    question: `A 30-year-old woman with systemic lupus erythematosus (SLE) presents with fatigue, fever, and a butterfly-shaped rash on her face. What is the most appropriate diagnostic test?`,
    options: ['Rheumatoid factor (RF)', 'Antinuclear antibody (ANA)', 'Anti-double-stranded DNA (Anti-dsDNA)', 'C-reactive protein (CRP)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 805,
    question: `A 55-year-old male presents with fatigue, weight loss, and early satiety. On examination, he has massive splenomegaly. His complete blood count shows elevated white blood cells and basophils. The Philadelphia chromosome is detected. What is the diagnosis?`,
    options: ['Acute myeloid leukemia', 'Chronic myeloid leukemia', 'Non-Hodgkin’s lymphoma', 'Polycythemia vera'],
    correct: 0,
    explanation: ''
  },
  {
    id: 806,
    question: `Which of the following is a major risk factor for the development of osteoporosis?`,
    options: ['High body weight', 'Smoking', 'Increased physical activity', 'Hypercholesterolemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 807,
    question: `A woman presents with excessive bleeding after delivery and boggy uterus. First-line management is:`,
    options: ['Uterine curettage', 'Uterine massage', 'Hysterectomy', 'Antibiotics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 808,
    question: `A patient with a history of hypertension presents with sudden onset of severe headache and photophobia. What is the most likely diagnosis?`,
    options: ['Subarachnoid hemorrhage', 'Migraine', 'Tension headache', 'Meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 809,
    question: `A child presents with a sudden onset of vomiting and abdominal pain, and there is a "currant jelly" stool. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 810,
    question: `The treatment of choice for a patient with hyperparathyroidism is:`,
    options: ['Bisphosphonates', 'Surgery', 'Calcitonin', 'Vitamin D'],
    correct: 1,
    explanation: ''
  },
  {
    id: 811,
    question: `A newborn presents with a high-pitched cry, tremors, and seizures. What is the most likely cause?`,
    options: ['Neonatal abstinence syndrome', 'Hypoglycemia', 'Meningitis', 'Hyperbilirubinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 812,
    question: `Which of the following drugs is a first-line treatment for status epilepticus?`,
    options: ['Phenytoin', 'Lorazepam', 'Valproic acid', 'Carbamazepine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 813,
    question: `A pregnant woman at term presents with greenish liquor. This indicates:`,
    options: ['Fetal distress', 'Prematurity', 'Infection', 'Placenta previa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 814,
    question: `A patient presents with jaundice and dark urine after traveling to an area with poor sanitation. What is the most likely diagnosis?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Alcoholic hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 815,
    question: `In which condition is the presence of anti-centromere antibodies most commonly associated?`,
    options: ['Systemic lupus erythematosus', 'Scleroderma', 'Rheumatoid arthritis', 'Sjögren\'s syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 816,
    question: `A newborn is found to have a heart murmur and cyanosis. Which condition should be suspected?`,
    options: ['Atrial septal defect', 'Ventricular septal defect', 'Tetralogy of Fallot', 'Patent ductus arteriosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 817,
    question: `A patient presents with severe chest pain and ST elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Anterior wall myocardial infarction', 'Inferior wall myocardial infarction', 'Lateral wall myocardial infarction', 'STEMI in the right coronary artery territory'],
    correct: 1,
    explanation: ''
  },
  {
    id: 818,
    question: `A 2-month-old infant presents with projectile vomiting after feeding. What is the most likely diagnosis?`,
    options: ['Gastroesophageal reflux', 'Pyloric stenosis', 'Intestinal obstruction', 'Milk protein intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 819,
    question: `A patient presents with severe pain in the right flank radiating to the groin. What is the likely diagnosis?`,
    options: ['Appendicitis', 'Renal colic', 'Cholecystitis', 'Pancreatitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 820,
    question: `A 65-year-old man presents with difficulty urinating and a weak stream. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Urethral stricture', 'Bladder cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 821,
    question: `A 70-year-old male with a history of prostate cancer presents with back pain and neurological deficits. What is the most likely diagnosis?`,
    options: ['Osteoporotic fracture', 'Spinal metastasis', 'Herniated disc', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 822,
    question: `Which of the following is an indication for the use of anticoagulants?`,
    options: ['Atrial fibrillation', 'Hypertension', 'Hyperlipidemia', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 823,
    question: `A child with asthma is treated with a β2-agonist. What is the primary mechanism of action of this medication?`,
    options: ['Bronchodilation', 'Anti-inflammatory', 'Mucus clearance', 'Decreased bronchial reactivity'],
    correct: 0,
    explanation: ''
  },
  {
    id: 824,
    question: `A patient presents with yellowing of the skin and eyes, dark urine, and pale stools. What is the most likely diagnosis?`,
    options: ['Hemolytic anemia', 'Hepatitis', 'Biliary obstruction', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 825,
    question: `A 50-year-old male smoker presents with hoarseness and difficulty swallowing. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Thyroid disorder', 'Vocal cord nodules', 'Reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 826,
    question: `A patient presents with fever, cough, and pleuritic chest pain. A chest X-ray shows a new infiltrate. What is the likely diagnosis?`,
    options: ['Pulmonary embolism', 'Pneumonia', 'Tuberculosis', 'Lung cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 827,
    question: `A patient presents with fever, weight loss, and a chronic cough. A chest X-ray shows a cavitary lesion. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung abscess', 'Fungal infection', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 828,
    question: `Which of the following conditions is characterized by a "butterfly" rash on the face?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Dermatomyositis', 'Erythema multiforme'],
    correct: 0,
    explanation: ''
  },
  {
    id: 829,
    question: `Which of the following is a common side effect of thiazide diuretics?`,
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypercalcemia', 'Hyponatremia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 830,
    question: `A 55-year-old male presents with exertional chest pain that resolves with rest. His EKG is normal. What is the most likely diagnosis?`,
    options: ['Stable angina', 'Unstable angina', 'Myocardial infarction', 'Prinzmetal’s angina'],
    correct: 0,
    explanation: ''
  },
  {
    id: 831,
    question: `What is the primary treatment for peptic ulcer disease?`,
    options: ['Antacids', 'H2-receptor antagonists', 'Proton pump inhibitors', 'Antibiotics'],
    correct: 2,
    explanation: ''
  },
  {
    id: 832,
    question: `Which of the following is the primary mechanism of action of angiotensin-converting enzyme (ACE) inhibitors?`,
    options: ['Vasodilation of peripheral arteries', 'Inhibition of aldosterone secretion', 'Decrease in cardiac output', 'Inhibition of the renin-angiotensin-aldosterone system (RAAS)'],
    correct: 3,
    explanation: ''
  },
  {
    id: 833,
    question: `A 35-year-old male presents with multiple skin lesions, anemia, and renal failure. Serum protein electrophoresis reveals a monoclonal spike. What is the most likely diagnosis?`,
    options: ['Multiple myeloma', 'Lymphoma', 'Leukemia', 'Waldenstrom\'s macroglobulinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 834,
    question: `Which condition is characterized by a "barking cough"?`,
    options: ['Asthma', 'Croup', 'Bronchitis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 835,
    question: `A patient with a history of heavy smoking presents with persistent cough and hemoptysis. What is the most appropriate next step?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum culture', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 836,
    question: `In nephrotic syndrome, which of the following is characteristically seen?`,
    options: ['Proteinuria', 'Hematuria', 'Leukocyturia', 'Pyuria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 837,
    question: `A 30-year-old woman presents with heavy menstrual bleeding and pelvic pain. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Ovarian cyst', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 838,
    question: `A patient presents with severe hypertension and headaches. What is the most appropriate initial management?`,
    options: ['Start antihypertensive medications', 'Admit for observation', 'Provide reassurance', 'Refer to a specialist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 839,
    question: `A 25-year-old woman presents with a history of infertility and irregular periods. What is the most appropriate initial investigation?`,
    options: ['Hysterosalpingography', 'Serum progesterone', 'Serum prolactin', 'Pelvic ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 840,
    question: `A 28-year-old woman presents with amenorrhea, galactorrhea, and headaches. What is the most likely diagnosis?`,
    options: ['Hyperprolactinemia', 'Polycystic ovary syndrome', 'Hypothyroidism', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 841,
    question: `Which of the following is a classic sign of meningitis in children?`,
    options: ['Kernig\'s sign', 'Homan\'s sign', 'McBurney\'s point tenderness', 'Murphy\'s sign'],
    correct: 0,
    explanation: ''
  },
  {
    id: 842,
    question: `A patient presents with signs of dehydration and an elevated blood sugar level. What is the most likely cause of these symptoms?`,
    options: ['Type 1 diabetes', 'Type 2 diabetes', 'Hyperglycemic hyperosmolar state', 'Diabetic ketoacidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 843,
    question: `Which of the following is the primary treatment for acute anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 844,
    question: `A patient with chronic liver disease presents with ascites and abdominal discomfort. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Fluid restriction', 'Albumin infusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 845,
    question: `A 45-year-old woman presents with a painless breast lump. What is the most appropriate initial imaging study?`,
    options: ['Ultrasound', 'Mammography', 'MRI', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 846,
    question: `A 50-year-old man presents with fatigue and darkening of the skin. Which condition should be suspected?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hemochromatosis', 'Diabetes mellitus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 847,
    question: `A 25-year-old woman presents with pelvic pain, dyspareunia, and dysmenorrhea. What is the most likely diagnosis?`,
    options: ['Ovarian cyst', 'Endometriosis', 'Pelvic inflammatory disease (PID)', 'Uterine fibroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 848,
    question: `What is the primary treatment for a patient diagnosed with type 1 diabetes?`,
    options: ['Oral hypoglycemic agents', 'Insulin therapy', 'Dietary modifications', 'Exercise'],
    correct: 0,
    explanation: ''
  },
  {
    id: 849,
    question: `A 60-year-old man presents with a new onset of cough, weight loss, and hemoptysis. What is the most likely diagnosis?`,
    options: ['Pneumonia', 'Tuberculosis', 'Lung cancer', 'Bronchitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 850,
    question: `A young adult presents with multiple painful oral ulcers and genital lesions. What is the most likely diagnosis?`,
    options: ['Herpes simplex virus', 'Behçet\'s disease', 'Aphtous stomatitis', 'Candidiasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 851,
    question: `The "Apex beat" is best palpated in which area of the chest?`,
    options: ['Right second intercostal space', 'Left fifth intercostal space', 'Left first intercostal space', 'Right fifth intercostal space'],
    correct: 0,
    explanation: ''
  },
  {
    id: 852,
    question: `A patient presents with persistent diarrhea and weight loss. Which test is most useful in diagnosing inflammatory bowel disease (IBD)?`,
    options: ['CT scan', 'Colonoscopy', 'MRI', 'Stool culture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 853,
    question: `A 65-year-old male with a history of smoking presents with hoarseness and a persistent cough. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Chronic bronchitis', 'Vocal cord nodules', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 854,
    question: `A 30-year-old male presents with fever, malaise, and multiple swollen lymph nodes. Blood tests reveal positive Epstein-Barr virus antibodies. What is the most likely diagnosis?`,
    options: ['Infectious mononucleosis', 'Toxoplasmosis', 'Cytomegalovirus infection', 'HIV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 855,
    question: `Which electrolyte imbalance is commonly seen in patients with chronic kidney disease?`,
    options: ['Hypercalcemia', 'Hyperkalemia', 'Hypernatremia', 'Hypomagnesemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 856,
    question: `A 65-year-old man with a history of atrial fibrillation presents with sudden onset of severe abdominal pain and bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Mesenteric ischemia', 'Peptic ulcer disease', 'Diverticulitis', 'Colorectal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 857,
    question: `A patient presents with a red, itchy rash on the flexor surfaces of the arms and legs. What is the most likely diagnosis?`,
    options: ['Eczema', 'Psoriasis', 'Contact dermatitis', 'Fungal infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 858,
    question: `A patient presents with hematuria, flank pain, and a palpable mass. What is the most likely diagnosis?`,
    options: ['Renal stone', 'Renal cell carcinoma', 'Urinary tract infection', 'Pyelonephritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 859,
    question: `A woman presents with severe menstrual cramps and dysmenorrhea. What is the most appropriate first-line treatment?`,
    options: ['Oral contraceptives', 'NSAIDs', 'Acetaminophen', 'Hormonal therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 860,
    question: `A 45-year-old woman with a long history of rheumatoid arthritis presents with new-onset splenomegaly and neutropenia. What syndrome is most likely responsible for her symptoms?`,
    options: ['Felty’s syndrome', 'Sjögren’s syndrome', 'Reiter’s syndrome', 'Still’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 861,
    question: `A child with recurrent respiratory infections is found to have a low serum immunoglobulin level. What is the most likely diagnosis?`,
    options: ['Common variable immunodeficiency', 'X-linked agammaglobulinemia', 'Hyper-IgE syndrome', 'Selective IgA deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 862,
    question: `What is the main treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Bronchodilators'],
    correct: 2,
    explanation: ''
  },
  {
    id: 863,
    question: `A patient presents with a progressive loss of memory and personality changes. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Vascular dementia', 'Frontotemporal dementia', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 864,
    question: `A patient presents with a history of excessive thirst, polyuria, and weight loss. What is the most appropriate initial test?`,
    options: ['Serum glucose', 'Hemoglobin A1c', 'Fasting insulin', 'Oral glucose tolerance test'],
    correct: 0,
    explanation: ''
  },
  {
    id: 865,
    question: `A patient presents with pallor, fatigue, and a history of heavy menstrual periods. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Sickle cell anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 866,
    question: `A patient with known hypertension presents with acute onset of severe headache and neurological deficits. What condition should be suspected?`,
    options: ['Subarachnoid hemorrhage', 'Ischemic stroke', 'Intracerebral hemorrhage', 'Tension headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 867,
    question: `Which type of stroke is caused by a rupture of a blood vessel?`,
    options: ['Ischemic stroke', 'Hemorrhagic stroke', 'Transient ischemic attack', 'Cryptogenic stroke'],
    correct: 1,
    explanation: ''
  },
  {
    id: 868,
    question: `The definitive management of hydatidiform mole is:`,
    options: ['Suction curettage', 'Hysterectomy', 'Methotrexate therapy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 869,
    question: `A 60-year-old female presents with sudden onset of vision loss in one eye. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Glaucoma', 'Cataract'],
    correct: 0,
    explanation: ''
  },
  {
    id: 870,
    question: `A patient presents with jaundice and dark urine. What is the most likely diagnosis?`,
    options: ['Hemolytic anemia', 'Hepatitis', 'Cirrhosis', 'Biliary obstruction'],
    correct: 1,
    explanation: ''
  },
  {
    id: 871,
    question: `A 55-year-old man presents with hoarseness and difficulty breathing. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Vocal cord nodules', 'Laryngitis', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 872,
    question: `A 50-year-old woman presents with palpitations and anxiety. An ECG shows atrial fibrillation. What is the most appropriate initial management?`,
    options: ['Beta-blockers', 'Anticoagulation', 'Cardioversion', 'Digoxin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 873,
    question: `A 40-year-old woman presents with persistent abdominal pain and weight loss. Imaging shows a pancreatic mass. What is the most likely diagnosis?`,
    options: ['Pancreatitis', 'Pancreatic cancer', 'Cystic fibrosis', 'Chronic gastritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 874,
    question: `A patient with diabetes presents with a non-healing ulcer on the foot. What is the most likely contributing factor?`,
    options: ['Poor circulation', 'Infection', 'Neuropathy', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 875,
    question: `The most common cause of end-stage renal disease in adults is:`,
    options: ['Hypertension', 'Diabetes mellitus', 'Polycystic kidney disease', 'Chronic glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 876,
    question: `A patient with suspected rheumatoid arthritis has a positive rheumatoid factor. What is the most specific test for this condition?`,
    options: ['Anti-CCP antibodies', 'ANA', 'CRP', 'ESR'],
    correct: 0,
    explanation: ''
  },
  {
    id: 877,
    question: `A 60-year-old woman presents with sudden vision loss in her right eye. Fundoscopic examination reveals a "cherry-red spot" at the fovea. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Vitreous hemorrhage', 'Macular degeneration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 878,
    question: `What is the primary mechanism of action of metformin?`,
    options: ['Increases insulin secretion', 'Decreases hepatic glucose production', 'Increases glucose uptake by tissues', 'Inhibits glucagon secretion'],
    correct: 1,
    explanation: ''
  },
  {
    id: 879,
    question: `A 30-year-old female presents with abdominal pain, nausea, and diarrhea after eating undercooked seafood. What is the most likely causative organism?`,
    options: ['Salmonella', 'Vibrio parahaemolyticus', 'Escherichia coli', 'Listeria monocytogenes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 880,
    question: `What is the most common cause of primary hypothyroidism?`,
    options: ['Hashimoto\'s thyroiditis', 'Iodine deficiency', 'Thyroid surgery', 'Radiation therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 881,
    question: `A 30-year-old man presents with a persistent cough, hemoptysis, and weight loss. A chest X-ray shows a mass in the upper lobe of the lung. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Pneumonia', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 882,
    question: `A patient presents with a rash, fever, and joint pain after taking a new medication. What is the most likely diagnosis?`,
    options: ['Drug-induced lupus', 'Stevens-Johnson syndrome', 'Toxic epidermal necrolysis', 'Erythema multiforme'],
    correct: 0,
    explanation: ''
  },
  {
    id: 883,
    question: `A 26-year-old woman presents with primary amenorrhea, normal secondary sexual characteristics, and absent uterus on ultrasound. Karyotype is 46 XY. The diagnosis is:`,
    options: ['Turner syndrome', 'Androgen insensitivity syndrome', 'Mullerian agenesis', 'Hypogonadotropic hypogonadism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 884,
    question: `A patient with a history of diabetes presents with a foot ulcer. What is the most important step in management?`,
    options: ['Antibiotics', 'Debridement', 'Offloading', 'Surgical intervention'],
    correct: 0,
    explanation: ''
  },
  {
    id: 885,
    question: `A 40-year-old female presents with hyperpigmented skin and insulin resistance. What is the most likely diagnosis?`,
    options: ['Acanthosis nigricans', 'Cushing\'s syndrome', 'Addison\'s disease', 'Diabetes mellitus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 886,
    question: `A patient with chronic kidney disease presents with pruritus and dry skin. What is the most appropriate management?`,
    options: ['Topical corticosteroids', 'Antihistamines', 'Dialysis', 'Moisturizers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 887,
    question: `A 70-year-old man presents with fatigue, weight loss, and night sweats. A peripheral blood smear shows the presence of smudge cells. What is the most likely diagnosis?`,
    options: ['Chronic lymphocytic leukemia (CLL)', 'Acute lymphoblastic leukemia (ALL)', 'Chronic myeloid leukemia (CML)', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 888,
    question: `A patient presents with acute epigastric pain that radiates to the back, worsened by lying down and relieved by leaning forward. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Acute pancreatitis', 'Peptic ulcer disease', 'GERD'],
    correct: 0,
    explanation: ''
  },
  {
    id: 889,
    question: `A 10-year-old child presents with difficulty walking and frequent falls. What is the most likely diagnosis?`,
    options: ['Muscular dystrophy', 'Cerebral palsy', 'Spinal muscular atrophy', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 890,
    question: `In rheumatoid arthritis, which laboratory finding is most characteristic?`,
    options: ['Positive rheumatoid factor', 'Elevated C-reactive protein', 'Anti-citrullinated protein antibodies (ACPAs)', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 891,
    question: `What is the first-line treatment for active tuberculosis?`,
    options: ['Isoniazid', 'Rifampicin', 'Pyrazinamide', 'Combination therapy (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol)'],
    correct: 3,
    explanation: ''
  },
  {
    id: 892,
    question: `The most common cause of aortic stenosis in elderly patients is:`,
    options: ['Rheumatic heart disease', 'Bicuspid aortic valve', 'Degenerative calcific aortic stenosis', 'Infective endocarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 893,
    question: `A patient presents with a butterfly rash, joint pain, and photosensitivity. What is the likely diagnosis?`,
    options: ['Psoriasis', 'Lupus erythematosus', 'Dermatomyositis', 'Eczema'],
    correct: 1,
    explanation: ''
  },
  {
    id: 894,
    question: `What is the first-line treatment for community-acquired pneumonia in adults?`,
    options: ['Azithromycin', 'Amoxicillin', 'Doxycycline', 'Levofloxacin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 895,
    question: `A patient with known coronary artery disease presents with new-onset chest pain. What is the most appropriate immediate management?`,
    options: ['Nitroprusside', 'Aspirin', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 896,
    question: `A patient with a history of migraines presents with unilateral headache, nausea, and photophobia. What is the most likely diagnosis?`,
    options: ['Tension headache', 'Cluster headache', 'Migraine', 'Sinus headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 897,
    question: `A child presents with a "strawberry tongue" and a rash. What is the most likely diagnosis?`,
    options: ['Scarlet fever', 'Kawasaki disease', 'Measles', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 898,
    question: `The most common cause of chronic kidney disease is:`,
    options: ['Hypertension', 'Diabetes mellitus', 'Glomerulonephritis', 'Polycystic kidney disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 899,
    question: `In a patient with suspected deep vein thrombosis (DVT), which of the following is the most appropriate initial diagnostic test?`,
    options: ['D-dimer', 'Doppler ultrasound', 'CT angiography', 'Venogram'],
    correct: 0,
    explanation: ''
  },
  {
    id: 900,
    question: `Which type of shock is characterized by hypovolemia?`,
    options: ['Cardiogenic shock', 'Obstructive shock', 'Distributive shock', 'Hypovolemic shock'],
    correct: 3,
    explanation: ''
  },
  {
    id: 901,
    question: `Which of the following is a common cause of iron overload in the body?`,
    options: ['Hemochromatosis', 'Iron deficiency anemia', 'Chronic blood loss', 'Sideroblastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 902,
    question: `The most common benign tumor of the ovary in reproductive-age women is:`,
    options: ['Dermoid cyst', 'Serous cystadenoma', 'Endometrioma', 'Mucinous cystadenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 903,
    question: `What is the primary treatment for a patient with a confirmed case of appendicitis?`,
    options: ['Antibiotics', 'Laparoscopic appendectomy', 'Open surgery', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 904,
    question: `Which of the following is the most common type of stroke?`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Transient ischemic attack (TIA)', 'Subarachnoid hemorrhage'],
    correct: 1,
    explanation: ''
  },
  {
    id: 905,
    question: `A patient presents with sudden onset of severe chest pain radiating to the back. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 906,
    question: `A 55-year-old woman presents with difficulty swallowing, weight loss, and persistent cough. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal cancer', 'GERD', 'Barrett\'s esophagus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 907,
    question: `A 40-year-old female presents with a butterfly rash and joint pain. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 908,
    question: `A patient presents with hematuria and flank pain. What is the most likely diagnosis?`,
    options: ['Urinary tract infection', 'Renal stone', 'Bladder cancer', 'Pyelonephritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 909,
    question: `A 50-year-old male with a history of smoking presents with a persistent cough and weight loss. A chest X-ray reveals a mass in the lung. What is the most likely diagnosis?`,
    options: ['Lung cancer', 'Tuberculosis', 'Pneumonia', 'Pulmonary fibrosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 910,
    question: `A 50-year-old woman presents with new-onset headache and visual changes. What imaging study should be performed first?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Carotid ultrasound', 'Lumbar puncture'],
    correct: 1,
    explanation: ''
  },
  {
    id: 911,
    question: `A 65-year-old man presents with new-onset headaches and vision changes. Which imaging study is most appropriate?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Ultrasound of the carotids', 'X-ray of the skull'],
    correct: 1,
    explanation: ''
  },
  {
    id: 912,
    question: `Which of the following is a characteristic of type 1 diabetes mellitus?`,
    options: ['Insulin resistance', 'Absolute insulin deficiency', 'Usually diagnosed in adults', 'Associated with obesity'],
    correct: 1,
    explanation: ''
  },
  {
    id: 913,
    question: `Which of the following is a complication of untreated hyperthyroidism?`,
    options: ['Myxedema coma', 'Thyroid storm', 'Hashimoto\'s thyroiditis', 'Goiter'],
    correct: 1,
    explanation: ''
  },
  {
    id: 914,
    question: `A 65-year-old male presents with chest pain, and an ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Inferior myocardial infarction', 'Anterior myocardial infarction', 'Lateral myocardial infarction', 'Right ventricular myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 915,
    question: `Which vitamin is essential for blood coagulation?`,
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin K', 'Vitamin C'],
    correct: 0,
    explanation: ''
  },
  {
    id: 916,
    question: `A patient presents with excessive thirst, frequent urination, and high blood sugar levels. What is the initial treatment?`,
    options: ['Insulin therapy', 'Metformin', 'Lifestyle modification', 'Sulfonylureas'],
    correct: 0,
    explanation: ''
  },
  {
    id: 917,
    question: `In patients with chronic renal failure, which electrolyte abnormality is most commonly observed?`,
    options: ['Hyperkalemia', 'Hypocalcemia', 'Hypernatremia', 'Hypomagnesemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 918,
    question: `A 28-year-old woman presents with abdominal pain and amenorrhea. A pregnancy test is positive, and a transvaginal ultrasound shows an empty uterus. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Molar pregnancy', 'Threatened abortion', 'Normal pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 919,
    question: `The classic finding of "broadening of the mediastinum" on a chest X-ray is suggestive of:`,
    options: ['Aortic dissection', 'Pneumonia', 'Pulmonary embolism', 'Heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 920,
    question: `A 30-year-old female presents with fatigue, pallor, and jaundice. Lab tests reveal hemolytic anemia. What is the most likely cause?`,
    options: ['Iron deficiency', 'Sickle cell disease', 'Autoimmune hemolytic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 921,
    question: `A 45-year-old patient presents with burning epigastric pain, worse after meals. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Peptic ulcer disease', 'GERD', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 922,
    question: `A patient presents with a history of weight gain, hypertension, and a moon face. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Addison\'s disease', 'Hypothyroidism', 'Hyperaldosteronism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 923,
    question: `A common complication of untreated hypertension is:`,
    options: ['Osteoporosis', 'Myocardial infarction', 'Hypoglycemia', 'Anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 924,
    question: `Which condition is characterized by a "butterfly" rash on the face?`,
    options: ['Eczema', 'Psoriasis', 'Systemic lupus erythematosus', 'Rosacea'],
    correct: 2,
    explanation: ''
  },
  {
    id: 925,
    question: `Which of the following is a hallmark of acute respiratory distress syndrome (ARDS)?`,
    options: ['Elevated pulmonary capillary wedge pressure', 'Bilateral pulmonary infiltrates on chest X-ray', 'Hypercarbia', 'Normal oxygenation despite treatment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 926,
    question: `A neonate with a palpable olive-shaped mass in the abdomen and non-bilious vomiting likely has:`,
    options: ['Intussusception', 'Hirschsprung’s disease', 'Pyloric stenosis', 'Duodenal atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 927,
    question: `A 30-year-old woman with recurrent pregnancy losses is found to have antiphospholipid antibodies. The most effective management in future pregnancies is:`,
    options: ['Heparin and low-dose aspirin', 'Progesterone supplementation', 'Hysteroscopic surgery', 'IVF only'],
    correct: 0,
    explanation: ''
  },
  {
    id: 928,
    question: `A 35-year-old woman has irregular menstrual cycles and is obese. What condition is most likely?`,
    options: ['Hyperthyroidism', 'Polycystic ovary syndrome', 'Endometriosis', 'Ovarian cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 929,
    question: `A 70-year-old female presents with difficulty in walking and stiffness in the morning that improves throughout the day. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Gout', 'Fibromyalgia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 930,
    question: `The primary function of insulin is to:`,
    options: ['Increase blood glucose levels', 'Decrease blood glucose levels', 'Stimulate glucagon release', 'Promote ketogenesis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 931,
    question: `A 25-year-old male presents with weight loss, increased thirst, and frequent urination. A fasting blood glucose test reveals a level of 126 mg/dL. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Gestational diabetes', 'Diabetes insipidus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 932,
    question: `Which medication is used as a first-line treatment for hypertension in diabetic patients?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 933,
    question: `Which type of shock is most likely in a patient with a history of septicemia presenting with hypotension and warm extremities?`,
    options: ['Hypovolemic shock', 'Cardiogenic shock', 'Neurogenic shock', 'Septic shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 934,
    question: `A 40-year-old female presents with a history of heavy menstrual bleeding and is found to have an enlarged uterus. What is the most likely diagnosis?`,
    options: ['Fibroids', 'Endometrial cancer', 'Ovarian cysts', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 935,
    question: `A child presents with a history of recurrent otitis media and poor speech development. What is the most likely cause?`,
    options: ['Eustachian tube dysfunction', 'Adenoid hypertrophy', 'Allergic rhinitis', 'Nasal polyps'],
    correct: 0,
    explanation: ''
  },
  {
    id: 936,
    question: `A newborn presents with a high-pitched cry, tremors, and irritability. What is the most likely diagnosis?`,
    options: ['Neonatal withdrawal syndrome', 'Hyperbilirubinemia', 'Meningitis', 'Infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 937,
    question: `A 6-month-old infant presents with failure to thrive, greasy stools, and recurrent respiratory infections. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Congenital heart disease', 'Celiac disease', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 938,
    question: `What is the most common cause of hyperthyroidism?`,
    options: ['Hashimoto\'s thyroiditis', 'Graves\' disease', 'Thyroid cancer', 'Iodine deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 939,
    question: `Which of the following is the most common cause of acute liver failure?`,
    options: ['Alcoholic hepatitis', 'Viral hepatitis', 'Drug-induced liver injury', 'Non-alcoholic fatty liver disease'],
    correct: 2,
    explanation: ''
  },
  {
    id: 940,
    question: `What is the most appropriate initial imaging study for suspected kidney stones?`,
    options: ['Ultrasound', 'CT scan without contrast', 'MRI', 'X-ray of the abdomen'],
    correct: 1,
    explanation: ''
  },
  {
    id: 941,
    question: `Which of the following is a sign of left-sided heart failure?`,
    options: ['Peripheral edema', 'Jugular venous distension', 'Pulmonary congestion', 'Ascites'],
    correct: 2,
    explanation: ''
  },
  {
    id: 942,
    question: `The presence of a "saddle nose" deformity is associated with which disease?`,
    options: ['Wegener\'s granulomatosis', 'Sarcoidosis', 'Systemic lupus erythematosus', 'Churg-Strauss syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 943,
    question: `Which of the following is a sign of increased intracranial pressure?`,
    options: ['Hypotension', 'Bradycardia', 'Tachycardia', 'Miosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 944,
    question: `A 4-year-old child is brought to the emergency department with a high fever and severe throat pain. Examination shows a "cherry-red" epiglottis. What is the most likely cause?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae type b', 'Staphylococcus aureus', 'Moraxella catarrhalis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 945,
    question: `In a patient with chronic renal failure, which electrolyte abnormality is commonly seen?`,
    options: ['Hypocalcemia', 'Hypernatremia', 'Hypokalemia', 'Hypermagnesemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 946,
    question: `A young woman presents with amenorrhea and galactorrhea. What condition should be suspected?`,
    options: ['Hypothyroidism', 'Hyperprolactinemia', 'Polycystic ovary syndrome', 'Adrenal insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 947,
    question: `A 40-year-old man presents with jaundice, dark urine, and pale stools. His lab results show elevated conjugated bilirubin. What is the most likely diagnosis?`,
    options: ['Obstructive jaundice', 'Hemolytic anemia', 'Hepatitis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 948,
    question: `Which medication is commonly used as a first-line treatment for chronic heart failure?`,
    options: ['Digoxin', 'ACE inhibitors', 'Beta-blockers', 'Diuretics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 949,
    question: `A patient presents with chest pain and ST-segment elevation in leads V1-V4. Which artery is most likely occluded?`,
    options: ['Right coronary artery', 'Left circumflex artery', 'Left anterior descending artery', 'Left main coronary artery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 950,
    question: `A 5-year-old child presents with a painless limp and limited hip motion. X-ray reveals flattening of the femoral head. What is the most likely diagnosis?`,
    options: ['Slipped capital femoral epiphysis', 'Legg-Calvé-Perthes disease', 'Transient synovitis', 'Developmental dysplasia of the hip'],
    correct: 0,
    explanation: ''
  },
  {
    id: 951,
    question: `A 50-year-old woman presents with fatigue, pallor, and easy bruising. Laboratory tests reveal a low platelet count. What is the most likely diagnosis?`,
    options: ['Aplastic anemia', 'Thrombocytopenia', 'Iron deficiency anemia', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 952,
    question: `What is the most common type of lung cancer?`,
    options: ['Squamous cell carcinoma', 'Adenocarcinoma', 'Small cell lung cancer', 'Large cell carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 953,
    question: `A 35-year-old man presents with sudden onset severe headache described as the "worst headache of his life." What is the most likely diagnosis?`,
    options: ['Tension headache', 'Migraine', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 954,
    question: `A patient presents with flank pain and hematuria. A CT scan shows a 2 cm renal mass. What is the most likely diagnosis?`,
    options: ['Renal cell carcinoma', 'Transitional cell carcinoma', 'Renal abscess', 'Angiomyolipoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 955,
    question: `A 28-year-old primigravida presents at 36 weeks gestation with sudden severe abdominal pain, hypotension, and absent fetal heart sounds. On examination, there is a firm, tender uterus. The most likely diagnosis is:`,
    options: ['Placenta previa', 'Abruptio placentae', 'Uterine rupture', 'Preterm labor'],
    correct: 2,
    explanation: ''
  },
  {
    id: 956,
    question: `The most common cause of hypothyroidism worldwide is:`,
    options: ['Hashimoto\'s thyroiditis', 'Iodine deficiency', 'Radiation exposure', 'Surgical removal of the thyroid'],
    correct: 1,
    explanation: ''
  },
  {
    id: 957,
    question: `The most appropriate treatment for acute gout is:`,
    options: ['Allopurinol', 'Colchicine', 'Methotrexate', 'Hydrocortisone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 958,
    question: `The primary treatment for iron deficiency anemia is:`,
    options: ['Vitamin B12 supplementation', 'Iron supplementation', 'Folic acid supplementation', 'Blood transfusion'],
    correct: 1,
    explanation: ''
  },
  {
    id: 959,
    question: `In neonatal jaundice, unconjugated hyperbilirubinemia may lead to which serious condition?`,
    options: ['Hepatic failure', 'Kernicterus', 'Cirrhosis', 'Sepsis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 960,
    question: `A 28-year-old female presents with severe abdominal pain and nausea. An ultrasound shows a gallbladder stone. What is the best initial management?`,
    options: ['Surgery', 'Medical management', 'Observation', 'ERCP'],
    correct: 0,
    explanation: ''
  },
  {
    id: 961,
    question: `A patient presents with palpitations, sweating, and anxiety. Thyroid function tests reveal elevated T3 and T4 with suppressed TSH. What is the most likely diagnosis?`,
    options: ['Graves’ disease', 'Hashimoto’s thyroiditis', 'Subacute thyroiditis', 'Euthyroid sick syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 962,
    question: `In the management of a patient with anaphylaxis, what is the recommended route of administration for epinephrine?`,
    options: ['Intramuscular', 'Subcutaneous', 'Intravenous', 'Oral'],
    correct: 0,
    explanation: ''
  },
  {
    id: 963,
    question: `What is the most common complication of chronic otitis media?`,
    options: ['Cholesteatoma', 'Mastoiditis', 'Labyrinthitis', 'Meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 964,
    question: `A 5-year-old child is brought to the clinic with a barky cough, stridor, and difficulty breathing. What is the most likely diagnosis?`,
    options: ['Croup (laryngotracheobronchitis)', 'Epiglottitis', 'Asthma', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 965,
    question: `A woman presents with white curdy vaginal discharge and itching. The causative organism is:`,
    options: ['Trichomonas vaginalis', 'Gardnerella vaginalis', 'Candida albicans', 'Chlamydia trachomatis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 966,
    question: `The most common cause of subarachnoid hemorrhage is:`,
    options: ['Trauma', 'Hypertension', 'Ruptured aneurysm', 'Arteriovenous malformation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 967,
    question: `A patient with rheumatoid arthritis is treated with methotrexate. What is a common side effect of this medication?`,
    options: ['Liver toxicity', 'Pulmonary fibrosis', 'Bone marrow suppression', 'Gastrointestinal bleeding'],
    correct: 0,
    explanation: ''
  },
  {
    id: 968,
    question: `A 65-year-old female presents with fatigue, pallor, and a low hemoglobin level. What is the most likely cause?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia', 'Sickle cell disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 969,
    question: `A 25-year-old woman presents with sudden onset of severe abdominal pain and vaginal bleeding. She is found to have an ovarian cyst on ultrasound. What is the most likely complication?`,
    options: ['Ovarian torsion', 'Rupture of the cyst', 'Ectopic pregnancy', 'Endometriosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 970,
    question: `A 65-year-old male presents with difficulty urinating, weak stream, and nocturia. His prostate is enlarged on digital rectal examination. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia (BPH)', 'Urinary tract infection', 'Bladder stones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 971,
    question: `A 40-year-old man presents with fatigue, jaundice, and dark urine. Laboratory tests show elevated bilirubin levels and AST/ALT ratio >2. What is the most likely diagnosis?`,
    options: ['Viral hepatitis', 'Alcoholic liver disease', 'Hemochromatosis', 'Cholestasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 972,
    question: `A 10-year-old child presents with a sore throat and fever. A rapid strep test is positive. What is the appropriate treatment?`,
    options: ['Amoxicillin', 'Azithromycin', 'Ibuprofen', 'No treatment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 973,
    question: `What is the primary action of insulin in the body?`,
    options: ['Increase blood glucose levels', 'Promote glucose uptake by cells', 'Stimulate gluconeogenesis', 'Decrease fat storage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 974,
    question: `A newborn is diagnosed with a congenital heart defect characterized by a left-to-right shunt. What is the most common defect?`,
    options: ['Ventricular septal defect', 'Atrial septal defect', 'Patent ductus arteriosus', 'Coarctation of the aorta'],
    correct: 0,
    explanation: ''
  },
  {
    id: 975,
    question: `A newborn is noted to have a heart murmur and signs of congestive heart failure. An echocardiogram reveals a left-to-right shunt. What is the most likely cause?`,
    options: ['Atrial septal defect', 'Ventricular septal defect', 'Patent ductus arteriosus', 'Coarctation of the aorta'],
    correct: 0,
    explanation: ''
  },
  {
    id: 976,
    question: `Which of the following is the most common cause of bacterial meningitis in adults?`,
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Escherichia coli'],
    correct: 0,
    explanation: ''
  },
  {
    id: 977,
    question: `The most common inherited bleeding disorder is:`,
    options: ['Hemophilia A', 'Hemophilia B', 'Von Willebrand disease', 'Thrombocytopenia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 978,
    question: `Which of the following conditions is associated with a "ground glass" appearance on chest X-ray?`,
    options: ['Pulmonary edema', 'Pneumonia', 'Hyaline Membrane Disease', 'Tuberculosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 979,
    question: `A patient with a history of heart disease presents with sudden shortness of breath and wheezing. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Heart failure', 'Asthma', 'COPD exacerbation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 980,
    question: `Which condition is characterized by the "butterfly rash" on the face?`,
    options: ['Psoriasis', 'Eczema', 'Systemic lupus erythematosus (SLE)', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 981,
    question: `Which of the following is an indication for a liver biopsy?`,
    options: ['Alcoholic liver disease', 'Non-alcoholic fatty liver disease', 'Unexplained elevated liver enzymes', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 982,
    question: `The most common cause of postpartum endometritis is:`,
    options: ['Vaginal delivery', 'Prolonged labor', 'Cesarean section', 'Instrumental delivery'],
    correct: 2,
    explanation: ''
  },
  {
    id: 983,
    question: `Which of the following is a common cause of hypercoagulability in patients with nephrotic syndrome?`,
    options: ['Loss of antithrombin III in the urine', 'Decreased platelet production', 'Increased fibrinolysis', 'Decreased factor VIII'],
    correct: 0,
    explanation: ''
  },
  {
    id: 984,
    question: `Which nerve is most commonly injured in thyroid surgery?`,
    options: ['Phrenic nerve', 'Vagus nerve', 'Hypoglossal nerve', 'Recurrent laryngeal nerve'],
    correct: 0,
    explanation: ''
  },
  {
    id: 985,
    question: `A 35-year-old male presents with difficulty swallowing and a sensation of food getting stuck in his throat. An esophagram shows a dilated esophagus with a narrowing at the lower esophageal sphincter. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal stricture', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 986,
    question: `A 70-year-old man presents with confusion and a new-onset tremor. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Parkinson\'s disease', 'Multiple sclerosis', 'Lewy body dementia'],
    correct: 3,
    explanation: ''
  },
  {
    id: 987,
    question: `In a patient with hypothyroidism, which laboratory finding is expected?`,
    options: ['Elevated T3', 'Elevated T4', 'Elevated TSH', 'Low TSH'],
    correct: 2,
    explanation: ''
  },
  {
    id: 988,
    question: `What is the initial treatment for hyperglycemic hyperosmolar state (HHS)?`,
    options: ['Insulin infusion', 'Oral hypoglycemics', 'IV fluids', 'Potassium supplementation'],
    correct: 2,
    explanation: ''
  },
  {
    id: 989,
    question: `Which of the following is an early sign of increased intracranial pressure (ICP)?`,
    options: ['Bradycardia', 'Headache', 'Hypotension', 'Hemiplegia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 990,
    question: `Which of the following is the most common cause of hyperthyroidism in adults?`,
    options: ['Hashimoto\'s thyroiditis', 'Thyroid adenoma', 'Graves\' disease', 'Thyroid cancer'],
    correct: 2,
    explanation: ''
  },
  {
    id: 991,
    question: `Which imaging modality is most sensitive for detecting pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'V/Q scan', 'Doppler ultrasound'],
    correct: 1,
    explanation: ''
  },
  {
    id: 992,
    question: `A patient presents with intense itching and burrows between the fingers. What is the most likely diagnosis?`,
    options: ['Contact dermatitis', 'Psoriasis', 'Scabies', 'Eczema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 993,
    question: `A patient with a family history of breast cancer presents for screening. What is the most appropriate initial management?`,
    options: ['Mammogram', 'Breast MRI', 'Genetic testing', 'Clinical breast exam'],
    correct: 0,
    explanation: ''
  },
  {
    id: 994,
    question: `A patient presents with unilateral facial weakness and inability to close one eye. What is the most likely diagnosis?`,
    options: ['Stroke', 'Bell\'s palsy', 'Multiple sclerosis', 'Myasthenia gravis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 995,
    question: `A 25-year-old woman presents with a painless lump in her neck and night sweats. A biopsy reveals Reed-Sternberg cells. What is the most likely diagnosis?`,
    options: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Thyroid cancer', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 996,
    question: `A patient presents with chest pain and an elevated D-dimer level. What is the most appropriate next step in management?`,
    options: ['Chest X-ray', 'CT pulmonary angiogram', 'Echocardiogram', 'ECG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 997,
    question: `A patient with a history of asthma presents with wheezing after exposure to a known allergen. What is the most appropriate immediate treatment?`,
    options: ['Systemic corticosteroids', 'Long-acting beta-agonist', 'Short-acting beta-agonist', 'Leukotriene receptor antagonist'],
    correct: 2,
    explanation: ''
  },
  {
    id: 998,
    question: `What is the primary treatment for peptic ulcer disease caused by H. pylori?`,
    options: ['Proton pump inhibitors alone', 'H2-receptor antagonists', 'Antibiotics plus proton pump inhibitors', 'Antacids'],
    correct: 2,
    explanation: ''
  },
  {
    id: 999,
    question: `A child presents with an itchy, scaly rash on the scalp. What is the most likely diagnosis?`,
    options: ['Atopic dermatitis', 'Psoriasis', 'Tinea capitis', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1000,
    question: `A patient with a history of type 1 diabetes presents with confusion, abdominal pain, and rapid breathing. His blood gas shows a pH of 7.25, with low bicarbonate. What is the most likely diagnosis?`,
    options: ['Hypoglycemia', 'Diabetic ketoacidosis (DKA)', 'Hyperosmolar hyperglycemic state', 'Lactic acidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1001,
    question: `The best initial test to diagnose an acute myocardial infarction is:`,
    options: ['Electrocardiogram (ECG)', 'Cardiac enzymes', 'Chest X-ray', 'Echocardiogram'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1002,
    question: `Which condition is characterized by the presence of "cobblestone" mucosa on colonoscopy?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Infectious colitis', 'Ischemic colitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1003,
    question: `The screening test of choice for carcinoma cervix is:`,
    options: ['HPV DNA test', 'Colposcopy', 'Pap smear', 'Cervical biopsy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1004,
    question: `The hormone responsible for maintenance of early pregnancy is:`,
    options: ['Progesterone', 'Estrogen', 'hCG', 'LH'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1005,
    question: `A patient with a history of myocardial infarction is prescribed beta-blockers. What is the primary mechanism of action?`,
    options: ['Decrease myocardial oxygen demand', 'Increase heart rate', 'Decrease blood pressure', 'Increase cardiac contractility'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1006,
    question: `Which vitamin deficiency is most commonly associated with neural tube defects?`,
    options: ['Vitamin B12', 'Vitamin D', 'Folate (Vitamin B9)', 'Vitamin C'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1007,
    question: `Which vitamin deficiency is associated with Wernicke-Korsakoff syndrome?`,
    options: ['Vitamin A', 'Vitamin B1 (Thiamine)', 'Vitamin B12 (Cobalamin)', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1008,
    question: `A 5-year-old child presents with fever and a rash that started on the trunk and spread to the face. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1009,
    question: `A 45-year-old male presents with a history of chronic heavy alcohol use. Which complication is he at highest risk for?`,
    options: ['Diabetes mellitus', 'Liver cirrhosis', 'Heart disease', 'Hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1010,
    question: `A patient with a history of heart failure presents with increased jugular venous pressure and peripheral edema. What is the most likely cause?`,
    options: ['Right-sided heart failure', 'Left-sided heart failure', 'Myocardial infarction', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1011,
    question: `Which of the following medications is most commonly associated with causing dry cough as a side effect?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1012,
    question: `Which of the following drugs is used as a tocolytic to delay preterm labor?`,
    options: ['Magnesium sulfate', 'Oxytocin', 'Misoprostol', 'Ergometrine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1013,
    question: `A patient presents with joint pain and a rash that worsens with sun exposure. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1014,
    question: `Which condition is characterized by the presence of a "thrombus" in the coronary arteries?`,
    options: ['Myocardial infarction', 'Angina pectoris', 'Heart failure', 'Arrhythmia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1015,
    question: `A 50-year-old man with a family history of colon cancer undergoes a screening colonoscopy. At what age should he start screening if he is average risk?`,
    options: ['40 years', '45 years', '50 years', '55 years'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1016,
    question: `A patient presents with signs of increased intracranial pressure and an abnormal lumbar puncture revealing elevated protein and normal glucose. What is the most likely diagnosis?`,
    options: ['Bacterial meningitis', 'Viral meningitis', 'Fungal meningitis', 'Tuberculous meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1017,
    question: `Which of the following is an adverse effect of metformin?`,
    options: ['Hypoglycemia', 'Lactic acidosis', 'Weight gain', 'Hepatotoxicity'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1018,
    question: `A 30-year-old female presents with a butterfly-shaped facial rash and joint pain. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Dermatomyositis', 'Sjögren\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1019,
    question: `A 70-year-old male presents with severe pain in the shoulder and inability to raise his arm. What is the most likely diagnosis?`,
    options: ['Rotator cuff tear', 'Osteoarthritis', 'Frozen shoulder', 'Bursitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1020,
    question: `Which type of renal failure is characterized by reduced renal perfusion?`,
    options: ['Pre-renal', 'Intra-renal', 'Post-renal', 'Chronic'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1021,
    question: `What is the most effective long-term treatment for chronic asthma?`,
    options: ['Inhaled corticosteroids', 'Leukotriene receptor antagonists', 'Short-acting beta-agonists', 'Theophylline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1022,
    question: `A 65-year-old man presents with difficulty swallowing and weight loss. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Esophagitis', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1023,
    question: `A 60-year-old male presents with hematuria, weight loss, and flank pain. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Renal cell carcinoma', 'Nephrolithiasis', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1024,
    question: `A 10-year-old boy presents with shortness of breath and a loud systolic murmur at the upper left sternal border. Echocardiography shows narrowing of the aorta just distal to the origin of the left subclavian artery. What is the most likely diagnosis?`,
    options: ['Atrial septal defect', 'Ventricular septal defect', 'Coarctation of the aorta', 'Tetralogy of Fallot'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1025,
    question: `Which condition is characterized by "steeple sign" on a neck X-ray?`,
    options: ['Croup', 'Epiglottitis', 'Laryngitis', 'Bronchiolitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1026,
    question: `Which of the following is a complication of untreated hypertension?`,
    options: ['Anemia', 'Osteoporosis', 'Heart failure', 'Hyperlipidemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1027,
    question: `A 60-year-old female presents with fatigue and pallor. A peripheral blood smear shows microcytic, hypochromic red blood cells. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Sideroblastic anemia', 'Anemia of chronic disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1028,
    question: `A patient with Graves’ disease presents with tachycardia, fever, and agitation. What is the most appropriate initial treatment?`,
    options: ['Radioactive iodine', 'Propylthiouracil', 'Propranolol', 'Thyroidectomy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1029,
    question: `A 5-year-old child presents with abdominal pain, "currant jelly" stools, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Intussusception', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1030,
    question: `In which condition is a "cherry-red spot" on the macula typically observed?`,
    options: ['Tay-Sachs disease', 'Retinal detachment', 'Diabetic retinopathy', 'Age-related macular degeneration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1031,
    question: `A 45-year-old woman presents with unilateral breast discharge and a mass found on examination. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Intraductal papilloma', 'Breast cancer', 'Mastitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1032,
    question: `Which condition is characterized by the presence of "apple juice" urine?`,
    options: ['Hematuria', 'Phenylketonuria', 'Maple syrup urine disease', 'Alkaptonuria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1033,
    question: `A patient presents with severe diarrhea, dehydration, and a history of recent antibiotic use. What is the most likely diagnosis?`,
    options: ['Clostridioides difficile infection', 'Salmonella infection', 'Viral gastroenteritis', 'E. coli infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1034,
    question: `A child presents with fever, cough, and a wheezing sound during expiration. What is the most likely diagnosis?`,
    options: ['Bronchitis', 'Asthma', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1035,
    question: `What is the primary treatment for patients with sickle cell anemia to prevent sickle cell crises?`,
    options: ['Aspirin', 'Hydroxyurea', 'Iron supplements', 'Corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1036,
    question: `A 30-year-old female presents with fatigue, hair loss, and cold intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Adrenal insufficiency', 'Anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1037,
    question: `A woman at 28 weeks gestation presents with sudden vaginal bleeding and abdominal pain. Fetus is alive. Most likely diagnosis:`,
    options: ['Placenta previa', 'Abruptio placentae', 'Preterm labor', 'PROM'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1038,
    question: `A child presents with a fever, cough, and a characteristic "whooping" sound. What is the likely diagnosis?`,
    options: ['Croup', 'Pertussis', 'Bronchiolitis', 'Asthma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1039,
    question: `A 50-year-old woman presents with breast discharge and a palpable mass. Which diagnostic tool is most appropriate?`,
    options: ['Ultrasound', 'Mammography', 'MRI', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1040,
    question: `A 3-year-old child presents with a high fever and a "barking" cough. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1041,
    question: `A child presents with a history of recurrent otitis media and hearing loss. What is the most likely underlying condition?`,
    options: ['Allergic rhinitis', 'Cleft palate', 'Adenoid hypertrophy', 'Eustachian tube dysfunction'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1042,
    question: `A 30-year-old woman presents with amenorrhea, galactorrhea, and visual disturbances. What is the most likely diagnosis?`,
    options: ['Prolactinoma', 'Hypothyroidism', 'Cushing\'s disease', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1043,
    question: `A 10-year-old child with asthma is prescribed a long-term control medication. Which of the following is most appropriate?`,
    options: ['Albuterol', 'Ipratropium', 'Fluticasone', 'Montelukast'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1044,
    question: `Which of the following is a common feature of Cushing's syndrome?`,
    options: ['Hypoglycemia', 'Hyperkalemia', 'Central obesity', 'Weight loss'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1045,
    question: `A 55-year-old male presents with persistent cough and hemoptysis. What is the most appropriate diagnostic test?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum culture', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1046,
    question: `A patient with a known history of HIV presents with a non-productive cough and dyspnea. A chest X-ray reveals bilateral interstitial infiltrates. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Pneumocystis pneumonia (PCP)', 'Bacterial pneumonia', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1047,
    question: `Which of the following is a classic symptom of congestive heart failure?`,
    options: ['Chest pain', 'Hemoptysis', 'Peripheral edema', 'Syncope'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1048,
    question: `A patient presents with a non-healing ulcer on the lower lip. What is the most concerning potential diagnosis?`,
    options: ['Squamous cell carcinoma', 'Basal cell carcinoma', 'Actinic keratosis', 'Herpes simplex virus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1049,
    question: `A patient with chronic kidney disease is being evaluated for dialysis. What lab value is most critical in this assessment?`,
    options: ['Serum creatinine', 'Serum potassium', 'Serum calcium', 'Serum albumin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1050,
    question: `What is the most common site of metastasis for prostate cancer?`,
    options: ['Liver', 'Lungs', 'Bone', 'Brain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1051,
    question: `Which condition is characterized by an overproduction of cortisol?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Conn\'s syndrome', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1052,
    question: `What is the primary cause of respiratory acidosis?`,
    options: ['Hypoventilation', 'Hyperventilation', 'Metabolic alkalosis', 'Diarrhea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1053,
    question: `The "Janeway lesions" and "Osler's nodes" are associated with:`,
    options: ['Myocarditis', 'Infective endocarditis', 'Pericarditis', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1054,
    question: `In which of the following conditions is "clubfoot" seen?`,
    options: ['Spina bifida', 'Marfan syndrome', 'Cerebral palsy', 'Congenital talipes equinovarus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1055,
    question: `A patient presents with severe chest pain radiating to the left arm and jaw. What is the most likely diagnosis?`,
    options: ['Gastroesophageal reflux disease', 'Angina pectoris', 'Myocardial infarction', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1056,
    question: `A 30-year-old female presents with severe abdominal pain and a positive urine pregnancy test. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Ovarian cyst rupture', 'Appendicitis', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1057,
    question: `The most common cause of community-acquired pneumonia in adults is:`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae', 'Chlamydia pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1058,
    question: `What is the most common cause of chronic liver disease in the world?`,
    options: ['Hepatitis B', 'Hepatitis C', 'Alcoholic liver disease', 'Non-alcoholic fatty liver disease (NAFLD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1059,
    question: `A patient presents with sudden severe headache, photophobia, and a stiff neck. What is the most likely diagnosis?`,
    options: ['Meningitis', 'Subarachnoid hemorrhage', 'Migraine', 'Encephalitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1060,
    question: `In a patient with suspected myocardial infarction, which biomarker is most specific for cardiac injury?`,
    options: ['Creatine kinase (CK)', 'Troponin I', 'Myoglobin', 'B-type natriuretic peptide (BNP)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1061,
    question: `Which type of diabetes is characterized by insulin resistance?`,
    options: ['Type 1', 'Type 2', 'Gestational', 'MODY'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1062,
    question: `A newborn is noted to have a congenital heart defect characterized by a right-to-left shunt. Which defect is likely?`,
    options: ['Ventricular septal defect', 'Atrial septal defect', 'Tetralogy of Fallot', 'Coarctation of the aorta'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1063,
    question: `Which of the following is the most common type of lung cancer?`,
    options: ['Small cell lung carcinoma', 'Adenocarcinoma', 'Squamous cell carcinoma', 'Large cell carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1064,
    question: `A patient presents with chest pain that is relieved by sitting forward and worsens when lying down. What is the most likely diagnosis?`,
    options: ['Pericarditis', 'Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1065,
    question: `A 25-year-old man presents with acute onset of severe chest pain and dyspnea. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1066,
    question: `A 45-year-old female presents with fatigue, cold intolerance, and weight gain. Lab tests reveal elevated TSH and low T4. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Goiter', 'Thyroid cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1067,
    question: `The most common presentation of carcinoma ovary is:`,
    options: ['Early vaginal bleeding', 'Pelvic pain', 'Abdominal distension', 'Postcoital bleeding'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1068,
    question: `The presence of "spindle-shaped" cells on histopathology is characteristic of:`,
    options: ['Leiomyoma', 'Lipoma', 'Sarcoma', 'Carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1069,
    question: `What is the most common pathogen responsible for bacterial pneumonia in adults?`,
    options: ['Mycoplasma pneumoniae', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Legionella pneumophila'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1070,
    question: `Which type of hepatitis is most commonly associated with chronic liver disease?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1071,
    question: `In which condition would you expect to find "Kussmaul's sign"?`,
    options: ['Constrictive pericarditis', 'Cardiac tamponade', 'Right heart failure', 'Pulmonary hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1072,
    question: `What is the treatment of choice for a patient with anaphylactic shock?`,
    options: ['Antihistamines', 'Epinephrine', 'Corticosteroids', 'Inhaled bronchodilators'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1073,
    question: `Which of the following is the primary test used to diagnose diabetes mellitus?`,
    options: ['Fasting blood glucose', 'Random blood glucose', 'HbA1c', 'Oral glucose tolerance test'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1074,
    question: `A patient presents with severe chest pain radiating to the back and unequal blood pressures in both arms. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1075,
    question: `A patient with chronic asthma presents with wheezing and shortness of breath after exposure to a known allergen. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Inhaled bronchodilators', 'Intravenous magnesium sulfate', 'Leukotriene receptor antagonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1076,
    question: `A newborn presents with cyanosis shortly after birth. Echocardiography reveals transposition of the great arteries. What is the most appropriate initial management?`,
    options: ['Surgical correction', 'Prostaglandin E1 infusion', 'Oxygen therapy', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1077,
    question: `Which of the following medications is commonly used in the management of Alzheimer's disease?`,
    options: ['Levodopa', 'Donepezil', 'Haloperidol', 'Diazepam'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1078,
    question: `In a patient with pneumonia, which of the following findings would most likely be present on a chest X-ray?`,
    options: ['Hyperinflation', 'Consolidation', 'Pleural effusion', 'Interstitial markings'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1079,
    question: `A patient presents with recurrent headaches that are unilateral, pulsating, and associated with nausea and photophobia. What is the most likely diagnosis?`,
    options: ['Migraine', 'Cluster headache', 'Tension headache', 'Sinusitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1080,
    question: `A patient presents with fever, weight loss, and a positive PPD test. What is the most likely diagnosis?`,
    options: ['Sarcoidosis', 'Tuberculosis', 'Histoplasmosis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1081,
    question: `A 35-year-old male presents with fatigue and pallor. Blood tests reveal microcytic anemia. What is the most likely cause?`,
    options: ['Iron deficiency', 'Thalassemia', 'Sideroblastic anemia', 'Anemia of chronic disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1082,
    question: `A newborn presents with respiratory distress and a history of maternal diabetes. What is the most likely diagnosis?`,
    options: ['Respiratory distress syndrome', 'Meconium aspiration syndrome', 'Transient tachypnea of the newborn', 'Congenital pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1083,
    question: `The most appropriate initial treatment for a patient with acute coronary syndrome is:`,
    options: ['Nitroglycerin', 'Aspirin', 'Beta-blocker', 'Statin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1084,
    question: `A patient with chronic liver disease presents with ascites, jaundice, and confusion. What is the most likely cause of the confusion?`,
    options: ['Hepatic encephalopathy', 'Alcohol withdrawal', 'Hypoglycemia', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1085,
    question: `The most sensitive method for detecting breast cancer is:`,
    options: ['Mammography', 'Ultrasound', 'MRI', 'Clinical examination'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1086,
    question: `Which condition is characterized by a "silent" myocardial infarction?`,
    options: ['Women post-menopause', 'Diabetics', 'Elderly patients', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1087,
    question: `A 35-year-old male presents with difficulty urinating and a feeling of incomplete bladder emptying. What is the most likely diagnosis?`,
    options: ['Benign prostatic hyperplasia', 'Urinary tract infection', 'Bladder cancer', 'Prostate cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1088,
    question: `In which condition is the "butterfly rash" a common clinical feature?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Eczema', 'Rosacea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1089,
    question: `A patient presents with shortness of breath and pink frothy sputum. What is the most likely diagnosis?`,
    options: ['Asthma', 'Pulmonary embolism', 'Heart failure', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1090,
    question: `A patient presents with joint pain, a rash, and positive ANA. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Psoriatic arthritis', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1091,
    question: `In which condition would you expect to find a "cherry-red spot" on fundoscopic examination?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Diabetic retinopathy', 'Glaucoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1092,
    question: `Which medication is a first-line treatment for asthma?`,
    options: ['Salmeterol', 'Montelukast', 'Albuterol', 'Theophylline'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1093,
    question: `What is the most common cause of jaundice in the first 24 hours of life?`,
    options: ['Physiologic jaundice', 'Breastfeeding jaundice', 'Hemolytic disease of the newborn', 'Gilbert’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1094,
    question: `A patient presents with fever, night sweats, and weight loss. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'HIV infection', 'Lymphoma', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1095,
    question: `A 40-year-old man presents with fever, night sweats, weight loss, and generalized lymphadenopathy. A lymph node biopsy reveals Reed-Sternberg cells. What is the most likely diagnosis?`,
    options: ['Hodgkin lymphoma', 'Non-Hodgkin lymphoma', 'Leukemia', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1096,
    question: `The best initial test for diagnosing deep vein thrombosis (DVT) is:`,
    options: ['D-dimer test', 'Venous Doppler ultrasound', 'CT angiography', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1097,
    question: `The first-line management of postpartum hemorrhage due to uterine atony is:`,
    options: ['Uterine massage and oxytocin', 'Hysterectomy', 'Uterine packing', 'Tranexamic acid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1098,
    question: `A woman presents with severe abdominal pain and a positive pregnancy test. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Threatened miscarriage', 'Ovarian cyst rupture', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1099,
    question: `A patient presents with a painful swollen leg and has recently been on bed rest. What is the most likely diagnosis?`,
    options: ['Varicose veins', 'Deep vein thrombosis', 'Lymphedema', 'Cellulitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1100,
    question: `A 30-year-old female presents with a new onset of visual disturbances and joint pain. MRI shows demyelination in the central nervous system. What is the most likely diagnosis?`,
    options: ['Multiple sclerosis', 'Myasthenia gravis', 'Guillain-Barré syndrome', 'Amyotrophic lateral sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1101,
    question: `A 70-year-old male presents with confusion, headache, and visual disturbances. What is the most appropriate initial investigation?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Lumbar puncture', 'EEG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1102,
    question: `Which of the following medications is used as a first-line treatment for primary open-angle glaucoma?`,
    options: ['Pilocarpine', 'Timolol', 'Acetazolamide', 'Latanoprost'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1103,
    question: `A young adult presents with knee pain and swelling following a football injury. MRI shows damage to the anterior cruciate ligament (ACL). What is the best treatment option?`,
    options: ['ACL reconstruction surgery', 'NSAIDs and rest', 'Physical therapy', 'Corticosteroid injection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1104,
    question: `Which of the following bacteria is most commonly associated with the development of peptic ulcers?`,
    options: ['Helicobacter pylori', 'Escherichia coli', 'Staphylococcus aureus', 'Streptococcus pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1105,
    question: `A child presents with recurrent abdominal pain and diarrhea. Lab tests show elevated eosinophils. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Irritable bowel syndrome', 'Intestinal parasitic infection', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1106,
    question: `Which is the most common type of thyroid cancer?`,
    options: ['Medullary carcinoma', 'Follicular carcinoma', 'Papillary carcinoma', 'Anaplastic carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1107,
    question: `Which of the following is the most common cause of hypercalcemia?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Vitamin D toxicity', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1108,
    question: `Which medication is the first-line treatment for acute anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1109,
    question: `What is the most likely organism responsible for osteomyelitis in a child with sickle cell anemia?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Escherichia coli', 'Salmonella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1110,
    question: `A 32-year-old woman presents with jaundice, dark urine, and elevated liver enzymes after taking acetaminophen. What is the most likely diagnosis?`,
    options: ['Viral hepatitis', 'Acetaminophen toxicity', 'Gallstones', 'Autoimmune hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1111,
    question: `A patient presents with low back pain radiating down the leg and positive straight leg raise test. What is the most likely diagnosis?`,
    options: ['Sciatica', 'Spinal stenosis', 'Sacroiliitis', 'Muscle strain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1112,
    question: `Which of the following is used to assess the severity of pancreatitis?`,
    options: ['Child-Pugh score', 'Ranson’s criteria', 'APACHE score', 'SOFA score'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1113,
    question: `A 70-year-old male presents with difficulty urinating and a weak urine stream. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Urethral stricture', 'Bladder cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1114,
    question: `In patients with atrial fibrillation, what is the primary goal of anticoagulation therapy?`,
    options: ['Prevent heart failure', 'Prevent stroke', 'Control heart rate', 'Improve exercise tolerance'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1115,
    question: `A child with asthma presents with worsening symptoms after exposure to pollen. What is the most appropriate treatment?`,
    options: ['Short-acting beta agonist', 'Long-acting beta agonist', 'Inhaled corticosteroids', 'Leukotriene receptor antagonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1116,
    question: `A 32-year-old female presents with severe abdominal pain radiating to the back after eating a fatty meal. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Pancreatitis', 'Peptic ulcer disease', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1117,
    question: `What is the most likely complication of untreated Graves' disease?`,
    options: ['Hypothyroidism', 'Thyroid storm', 'Myxedema coma', 'Goiter'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1118,
    question: `A patient with a history of diabetes presents with painful neuropathy. What is the most likely cause?`,
    options: ['Peripheral artery disease', 'Diabetic neuropathy', 'Vitamin B12 deficiency', 'Alcoholic neuropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1119,
    question: `A 55-year-old man presents with severe chest pain radiating to the left arm. His ECG shows ST elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Aortic dissection', 'Myocardial infarction', 'Pulmonary embolism', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1120,
    question: `A child presents with fever, vomiting, and a rash on the palms and soles. What is the most likely cause?`,
    options: ['Hand, foot, and mouth disease', 'Scarlet fever', 'Kawasaki disease', 'Toxic shock syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1121,
    question: `A 5-year-old child presents with fever, sore throat, and a grayish-white membrane in the throat. What is the most likely diagnosis?`,
    options: ['Strep throat', 'Diphtheria', 'Viral pharyngitis', 'Tonsillitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1122,
    question: `A 35-year-old woman presents with a rash and joint pain after taking a new medication. What is the most likely diagnosis?`,
    options: ['Drug eruption', 'Lupus erythematosus', 'Psoriasis', 'Eczema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1123,
    question: `A 50-year-old man presents with weight loss, night sweats, and fever. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lymphoma', 'HIV/AIDS', 'Sarcoidosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1124,
    question: `A newborn presents with a distended abdomen and failure to pass meconium. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Hirschsprung disease', 'Meconium ileus', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1125,
    question: `A 40-year-old woman presents with irregular menstrual bleeding, hirsutism, and obesity. The most likely diagnosis is:`,
    options: ['Polycystic ovary syndrome', 'Endometriosis', 'Hyperprolactinemia', 'Ovarian carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1126,
    question: `In a patient with chronic obstructive pulmonary disease (COPD), the first-line treatment for exacerbations includes:`,
    options: ['Antibiotics', 'Oral corticosteroids', 'Inhaled corticosteroids', 'Bronchodilators'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1127,
    question: `A 25-year-old female presents with infertility and absent menstrual periods. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hyperthyroidism', 'Ovarian failure', 'Uterine fibroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1128,
    question: `A patient with a history of severe allergic reactions is prescribed an epinephrine auto-injector. What is the appropriate instruction for use?`,
    options: ['Inject into the thigh and massage the area', 'Inject into the arm and apply a bandage', 'Inject into the abdomen and rub the site', 'Inject into the buttock and monitor for 30 minutes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1129,
    question: `Which drug is commonly used as an antiplatelet agent?`,
    options: ['Warfarin', 'Clopidogrel', 'Aspirin', 'Heparin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1130,
    question: `Which of the following is the most common primary brain tumor in adults?`,
    options: ['Glioblastoma', 'Meningioma', 'Astrocytoma', 'Oligodendroglioma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1131,
    question: `A child is brought to the clinic with a red, swollen ear and fever. What is the most likely diagnosis?`,
    options: ['Otitis media', 'Otitis externa', 'Mastoiditis', 'Cholesteatoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1132,
    question: `A patient with chronic obstructive pulmonary disease (COPD) is experiencing an exacerbation. What is the most appropriate initial treatment?`,
    options: ['Oral corticosteroids', 'Antibiotics', 'Short-acting bronchodilators', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1133,
    question: `In the context of diabetes management, what does HbA1c measure?`,
    options: ['Average blood glucose levels over the past 2-3 days', 'Average blood glucose levels over the past 2-3 weeks', 'Average blood glucose levels over the past 2-3 months', 'Average fasting blood glucose levels'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1134,
    question: `A patient presents with a new-onset headache, visual disturbances, and signs of increased intracranial pressure. What is the most appropriate imaging study?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Ultrasound of the brain', 'X-ray of the skull'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1135,
    question: `Which drug is commonly used to treat hypertension in pregnancy?`,
    options: ['Lisinopril', 'Methyldopa', 'Atenolol', 'Amlodipine'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1136,
    question: `A 40-year-old man presents with a 2-month history of a painless testicular mass. What is the most appropriate next step in management?`,
    options: ['Testicular ultrasound', 'CT scan of the abdomen', 'Biopsy of the mass', 'Serum tumor markers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1137,
    question: `A patient with liver cirrhosis presents with ascites and confusion. What is the most likely cause of his confusion?`,
    options: ['Hepatic encephalopathy', 'Uremic syndrome', 'Hyperglycemia', 'Alcohol withdrawal'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1138,
    question: `A patient with chronic kidney disease presents with fatigue and anemia. Which laboratory finding is expected?`,
    options: ['Elevated serum creatinine', 'Low hemoglobin', 'Low erythropoietin levels', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1139,
    question: `A 55-year-old male presents with severe back pain after lifting a heavy object. Physical examination shows limited range of motion. What is the most likely diagnosis?`,
    options: ['Lumbar strain', 'Herniated disc', 'Osteoporosis', 'Spinal stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1140,
    question: `A woman presents with infertility, regular cycles, and bilateral polycystic ovaries. Serum FSH normal, LH high. First-line treatment:`,
    options: ['Clomiphene citrate', 'Letrozole', 'IVF', 'Bromocriptine'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1141,
    question: `A 35-year-old female with systemic lupus erythematosus presents with new-onset hypertension. What medication is first-line for managing her condition?`,
    options: ['Prednisone', 'Hydroxychloroquine', 'Angiotensin-converting enzyme (ACE) inhibitor', 'Methotrexate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1142,
    question: `Which of the following is a classic feature of Crohn's disease?`,
    options: ['Continuous lesions', 'Skip lesions', 'Pseudopolyps', 'Cobblestoning'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1143,
    question: `A 40-year-old male presents with jaundice, dark urine, and clay-colored stools. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Gallstones', 'Pancreatic cancer', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1144,
    question: `The "psoas sign" is indicative of:`,
    options: ['Appendicitis', 'Renal stone', 'Diverticulitis', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1145,
    question: `What is the most common cause of chronic kidney disease in adults?`,
    options: ['Hypertension', 'Glomerulonephritis', 'Diabetes mellitus', 'Polycystic kidney disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1146,
    question: `Which of the following conditions is characterized by a positive Murphy's sign?`,
    options: ['Cholecystitis', 'Pancreatitis', 'Appendicitis', 'Gastritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1147,
    question: `Which condition is characterized by the "string of pearls" appearance on ultrasound?`,
    options: ['Ovarian torsion', 'Polycystic ovarian syndrome (PCOS)', 'Ectopic pregnancy', 'Endometriosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1148,
    question: `A patient presents with pruritic skin lesions on the elbows and knees. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Eczema', 'Contact dermatitis', 'Tinea corporis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1149,
    question: `What is the gold standard for diagnosing deep vein thrombosis (DVT)?`,
    options: ['Doppler ultrasound', 'CT scan', 'MRI', 'Venography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1150,
    question: `What is the most common complication of cirrhosis?`,
    options: ['Hepatocellular carcinoma', 'Esophageal varices', 'Ascites', 'Spontaneous bacterial peritonitis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1151,
    question: `A woman presents with secondary dysmenorrhea and pelvic mass. Ultrasound shows adenomyosis. Typical findings:`,
    options: ['Uniformly enlarged tender uterus', 'Irregular uterine contour', 'Adnexal mass only', 'Endometrial thickening'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1152,
    question: `In terms of inheritance, cystic fibrosis is:`,
    options: ['Autosomal recessive', 'Autosomal dominant', 'X-linked recessive', 'X-linked dominant'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1153,
    question: `A 70-year-old male presents with dribbling of urine, hesitancy, and nocturia. A digital rectal exam reveals a smooth, enlarged prostate. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia (BPH)', 'Prostatitis', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1154,
    question: `The first-line treatment for mild preeclampsia at 36 weeks is:`,
    options: ['Expectant management until term', 'Immediate induction of labor', 'Magnesium sulfate', 'Observation only'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1155,
    question: `A patient presents with fever, productive cough, and rust-colored sputum. Chest X-ray shows lobar consolidation. What is the most likely organism?`,
    options: ['Streptococcus pneumoniae', 'Staphylococcus aureus', 'Mycoplasma pneumoniae', 'Klebsiella pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1156,
    question: `Which of the following is the most common site for ectopic pregnancy?`,
    options: ['Uterine cavity', 'Ovaries', 'Fallopian tube', 'Cervix'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1157,
    question: `The most common complication of diabetes mellitus is:`,
    options: ['Retinopathy', 'Neuropathy', 'Nephropathy', 'Cardiovascular disease'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1158,
    question: `A patient presents with a high fever, severe headache, and a rash that started on the wrists and ankles. What is the most likely diagnosis?`,
    options: ['Rocky Mountain spotted fever', 'Typhus', 'Meningococcemia', 'Dengue fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1159,
    question: `A 25-year-old female presents with a butterfly-shaped rash on her face and joint pain. Blood tests reveal positive anti-dsDNA antibodies. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Sjogren\'s syndrome', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1160,
    question: `Which of the following is the most common cause of sudden cardiac death in young athletes?`,
    options: ['Long QT syndrome', 'Hypertrophic cardiomyopathy', 'Coronary artery disease', 'Aortic stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1161,
    question: `The most common cause of puerperal pyrexia is:`,
    options: ['Mastitis', 'Urinary tract infection', 'Endometritis', 'Respiratory infection'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1162,
    question: `Which of the following is the classic triad of symptoms for meningitis?`,
    options: ['Fever, headache, stiff neck', 'Fever, cough, dyspnea', 'Fever, rash, joint pain', 'Fever, chills, nausea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1163,
    question: `A patient is diagnosed with peptic ulcer disease. Which of the following is a common cause?`,
    options: ['NSAID use', 'Alcohol consumption', 'Stress', 'High-fat diet'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1164,
    question: `A 25-year-old female presents with sudden unilateral facial drooping, unable to close her eye, and loss of taste on the anterior two-thirds of the tongue. What is the most likely diagnosis?`,
    options: ['Bell’s palsy', 'Stroke', 'Trigeminal neuralgia', 'Multiple sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1165,
    question: `A patient presents with diarrhea, weight loss, and abdominal cramps. A stool test is positive for blood. What is the most likely diagnosis?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Celiac disease', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1166,
    question: `What is the most effective initial treatment for an acute asthma attack?`,
    options: ['Oral corticosteroids', 'Long-acting beta-agonists', 'Short-acting beta-agonists', 'Anticholinergics'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1167,
    question: `Which of the following is the most common cause of fetal hydramnios (polyhydramnios)?`,
    options: ['Diabetes mellitus in the mother', 'Fetal renal agenesis', 'Preterm labor', 'Oligohydramnios'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1168,
    question: `A 25-year-old female presents with heavy menstrual bleeding and a pelvic ultrasound shows an enlarged uterus with multiple cysts. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Ovarian cysts', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1169,
    question: `A patient presents with frequent headaches, dizziness, and blurred vision. Blood pressure is 160/100 mmHg. What is the most likely diagnosis?`,
    options: ['Essential hypertension', 'Secondary hypertension', 'Hypertensive emergency', 'Orthostatic hypotension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1170,
    question: `A patient presents with dysuria and a purulent discharge. What is the most likely diagnosis?`,
    options: ['Gonorrhea', 'Chlamydia', 'Urethritis', 'Cystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1171,
    question: `A patient presents with acute lower back pain after lifting a heavy object. What is the most likely diagnosis?`,
    options: ['Herniated disc', 'Muscle strain', 'Osteoporosis', 'Spinal stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1172,
    question: `A patient with a history of chronic alcoholism presents with confusion and ataxia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Delirium tremens', 'Hepatic encephalopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1173,
    question: `A 60-year-old male presents with abdominal pain and jaundice. Laboratory tests reveal elevated bilirubin levels and alkaline phosphatase. What is the most likely diagnosis?`,
    options: ['Cholestasis', 'Hepatitis', 'Liver cirrhosis', 'Gallstones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1174,
    question: `A 5-year-old boy is brought in with a high fever and sore throat. His mother reports he has difficulty swallowing. What is the most likely diagnosis?`,
    options: ['Viral pharyngitis', 'Bacterial pharyngitis', 'Tonsillitis', 'Epiglottitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1175,
    question: `A pregnant woman presents with severe vomiting and dehydration in the first trimester. What is the most likely diagnosis?`,
    options: ['Hyperemesis gravidarum', 'Morning sickness', 'Gastroenteritis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1176,
    question: `The most common bacterial cause of community-acquired pneumonia in adults is:`,
    options: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Haemophilus influenzae', 'Staphylococcus aureus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1177,
    question: `Which of the following is a contraindication for the use of metformin?`,
    options: ['Type 2 diabetes', 'Heart failure', 'Renal impairment', 'Obesity'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1178,
    question: `A 40-year-old male presents with progressive weakness and muscle wasting. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Amyotrophic lateral sclerosis (ALS)', 'Muscular dystrophy', 'Guillain-Barré syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1179,
    question: `A 45-year-old man presents with palpitations and weight loss. His lab tests show elevated T3 and T4 levels with suppressed TSH. What is the most likely diagnosis?`,
    options: ['Graves\' disease', 'Toxic multinodular goiter', 'Subacute thyroiditis', 'Thyroid carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1180,
    question: `In which condition would you expect to find a "steeple sign" on an X-ray?`,
    options: ['Croup', 'Epiglottitis', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1181,
    question: `A patient presents with abdominal pain, diarrhea, and weight loss. Laboratory tests reveal anti-tissue transglutaminase antibodies. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1182,
    question: `A patient presents with polyuria, polydipsia, and a fasting glucose of 350 mg/dL. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Diabetes insipidus', 'Hyperosmolar hyperglycemic state'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1183,
    question: `A 60-year-old female presents with a history of hypertension and sudden vision loss. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal vein occlusion', 'Diabetic retinopathy', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1184,
    question: `The most sensitive test for diagnosing deep vein thrombosis (DVT) is:`,
    options: ['Doppler ultrasound', 'D-dimer assay', 'Venography', 'CT angiography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1185,
    question: `In a patient with suspected appendicitis, which sign is commonly elicited?`,
    options: ['Murphy\'s sign', 'Psoas sign', 'McBurney\'s point tenderness', 'Ballance\'s sign'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1186,
    question: `A 3-month-old baby presents with persistent vomiting, failure to thrive, and jaundice. Liver biopsy shows giant cell hepatitis. What is the most likely diagnosis?`,
    options: ['Biliary atresia', 'Neonatal hepatitis', 'Wilson\'s disease', 'Reye’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1187,
    question: `A patient with a history of smoking presents with hoarseness and a persistent cough. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Chronic laryngitis', 'Gastroesophageal reflux disease', 'Vocal cord nodules'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1188,
    question: `A 50-year-old woman presents with a new-onset headache and visual changes. What is the most likely diagnosis?`,
    options: ['Migraine', 'Temporal arteritis', 'Cluster headache', 'Sinusitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1189,
    question: `A 4-year-old child presents with a barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Croup', 'Bronchiolitis', 'Asthma', 'Epiglottitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1190,
    question: `A patient presents with pruritic, raised lesions on the skin after exposure to poison ivy. What is the most appropriate treatment?`,
    options: ['Oral antihistamines', 'Topical corticosteroids', 'Oral corticosteroids', 'Calamine lotion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1191,
    question: `Which condition is characterized by a "creaky" joint sound?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1192,
    question: `A 60-year-old male with a history of smoking presents with a persistent cough and weight loss. Chest X-ray shows a lung mass. What is the most likely diagnosis?`,
    options: ['Lung cancer', 'Tuberculosis', 'Pneumonia', 'COPD'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1193,
    question: `A woman presents with acute abdomen, missed period, and positive pregnancy test. Ultrasound shows empty uterus and complex adnexal mass. Diagnosis:`,
    options: ['Ectopic pregnancy', 'Ovarian cyst', 'Appendicitis', 'Miscarriage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1194,
    question: `A 6-month-old infant presents with projectile vomiting after feeding and visible peristaltic waves across the abdomen. What is the most likely diagnosis?`,
    options: ['Pyloric stenosis', 'Intussusception', 'Gastroesophageal reflux', 'Hirschsprung’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1195,
    question: `The most common ovarian tumor in reproductive-aged women is:`,
    options: ['Epithelial tumor', 'Germ cell tumor', 'Stromal tumor', 'Metastatic tumor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1196,
    question: `Which condition is associated with the "creeping fat" sign on imaging?`,
    options: ['Crohn\'s disease', 'Ulcerative colitis', 'Diverticulitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1197,
    question: `A 10-year-old boy presents with abdominal pain and bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Inflammatory bowel disease', 'Gastroenteritis', 'Intussusception'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1198,
    question: `Which infectious agent is the leading cause of community-acquired pneumonia in children?`,
    options: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Chlamydia pneumoniae', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1199,
    question: `Which of the following is the primary treatment for hyperthyroidism?`,
    options: ['Methimazole', 'Levothyroxine', 'Radioactive iodine', 'Propylthiouracil'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1200,
    question: `A 58-year-old male presents with dysphagia and a history of alcohol abuse. Barium swallow shows an irregular narrowing of the esophagus. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Esophageal cancer', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1201,
    question: `Which imaging modality is most useful for evaluating gallbladder disease?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1202,
    question: `A patient presents with bilateral ankle swelling and has a history of heart failure. What is the most appropriate management?`,
    options: ['Increase fluid intake', 'Start diuretics', 'Administer potassium-sparing diuretics', 'Refer to a specialist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1203,
    question: `In children, the first sign of anaphylaxis is typically:`,
    options: ['Hypotension', 'Skin rash', 'Shortness of breath', 'Abdominal pain'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1204,
    question: `A 65-year-old woman presents with sudden vision loss in one eye. What should be suspected?`,
    options: ['Glaucoma', 'Retinal detachment', 'Cataract', 'Macular degeneration'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1205,
    question: `Which of the following conditions is characterized by a triad of symptoms: "Saddle nose," "pancytopenia," and "renal failure"?`,
    options: ['Wegener\'s granulomatosis', 'Churg-Strauss syndrome', 'Goodpasture syndrome', 'Granulomatosis with polyangiitis'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1206,
    question: `A 12-year-old boy presents with short stature, delayed puberty, and a family history of similar conditions. What is the most likely diagnosis?`,
    options: ['Turner syndrome', 'Klinefelter syndrome', 'Growth hormone deficiency', 'Prader-Willi syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1207,
    question: `A 65-year-old woman presents with sudden vision loss. What is the most appropriate initial investigation?`,
    options: ['Fundoscopy', 'MRI of the brain', 'CT scan of the head', 'Visual field testing'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1208,
    question: `A patient presents with recurrent episodes of tachycardia. An ECG reveals narrow QRS complexes and a regular rhythm. Which type of arrhythmia is most likely?`,
    options: ['Atrial fibrillation', 'Ventricular tachycardia', 'Supraventricular tachycardia (SVT)', 'Atrial flutter'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1209,
    question: `A woman with irregular cycles and hyperandrogenism likely has:`,
    options: ['Hyperprolactinemia', 'PCOS', 'Hypothyroidism', 'Ovarian tumor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1210,
    question: `A 45-year-old woman presents with weight gain, facial puffiness, and a buffalo hump. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hyperthyroidism', 'Acromegaly'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1211,
    question: `A 70-year-old female presents with sudden onset weakness in the right arm and leg. What is the most likely cause?`,
    options: ['Transient ischemic attack', 'Stroke', 'Multiple sclerosis', 'Peripheral neuropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1212,
    question: `A 4-year-old child is brought in for evaluation of frequent urination and thirst. What condition should be considered?`,
    options: ['Diabetes insipidus', 'Type 1 diabetes mellitus', 'Cystitis', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1213,
    question: `A 10-year-old boy presents with a rash, joint pain, and fever. What is the most likely diagnosis?`,
    options: ['Rheumatic fever', 'Kawasaki disease', 'Systemic lupus erythematosus', 'Juvenile idiopathic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1214,
    question: `A 60-year-old male presents with sudden, severe chest pain radiating to the back. What is the most likely diagnosis?`,
    options: ['Aortic dissection', 'Myocardial infarction', 'Pulmonary embolism', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1215,
    question: `The initial management of a patient with suspected acute coronary syndrome (ACS) includes:`,
    options: ['IV fluids and rest', 'Nitroglycerin, aspirin, and oxygen', 'Antibiotics and steroids', 'Beta-blockers and anticoagulants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1216,
    question: `A 45-year-old male presents with jaundice and pruritus. Which condition is most likely?`,
    options: ['Hepatitis', 'Cholestasis', 'Hemolytic anemia', 'Cirrhosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1217,
    question: `A patient presents with abdominal pain and jaundice. Imaging reveals gallstones in the common bile duct. What is the best initial management?`,
    options: ['Cholecystectomy', 'ERCP (endoscopic retrograde cholangiopancreatography)', 'Laparoscopic surgery', 'Medical management'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1218,
    question: `Which imaging modality is most sensitive for detecting gallstones?`,
    options: ['X-ray', 'Ultrasound', 'CT scan', 'MRI'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1219,
    question: `A 5-year-old child presents with petechiae, fever, and gum bleeding. His complete blood count shows a very low platelet count, but normal white blood cells and hemoglobin levels. What is the most likely diagnosis?`,
    options: ['Acute lymphoblastic leukemia', 'Immune thrombocytopenic purpura (ITP)', 'Hemophilia A', 'Von Willebrand disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1220,
    question: `In which condition is the "scooped out" appearance of the proximal nail folds observed?`,
    options: ['Psoriasis', 'Eczema', 'Lichen planus', 'Dermatitis herpetiformis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1221,
    question: `Which of the following conditions is characterized by iron deficiency anemia and microcytic hypochromic red blood cells?`,
    options: ['Thalassemia', 'Sideroblastic anemia', 'Chronic disease anemia', 'Iron deficiency anemia'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1222,
    question: `A patient presents with a rash, fever, and swollen lymph nodes after a tick bite. What is the most likely diagnosis?`,
    options: ['Lyme disease', 'Rocky Mountain spotted fever', 'Anaplasmosis', 'Babesiosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1223,
    question: `A 30-year-old woman presents with abdominal pain and a positive urine pregnancy test. An ultrasound shows a gestational sac in the right fallopian tube. What is the most likely management?`,
    options: ['Methotrexate', 'Laparoscopy', 'Expectant management', 'D&C'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1224,
    question: `A 60-year-old female presents with new-onset atrial fibrillation. What is the most appropriate initial management?`,
    options: ['Rate control', 'Rhythm control', 'Anticoagulation', 'Cardioversion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1225,
    question: `Which vitamin deficiency is associated with the development of pellagra?`,
    options: ['Vitamin C', 'Vitamin D', 'Vitamin B3 (Niacin)', 'Vitamin A'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1226,
    question: `A patient with a history of alcohol abuse presents with confusion and ataxia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Alcohol withdrawal syndrome', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1227,
    question: `A 30-year-old woman presents with fatigue, weight gain, and increased sensitivity to cold. Laboratory tests reveal elevated TSH and low T4. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Thyroiditis', 'Thyroid cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1228,
    question: `A 70-year-old woman presents with sudden loss of vision in one eye. Fundoscopy reveals a pale retina with a cherry-red spot. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Central retinal vein occlusion', 'Vitreous hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1229,
    question: `Which of the following is a characteristic feature of Crohn’s disease?`,
    options: ['Continuous colonic involvement', 'Skip lesions', 'Pseudopolyps', 'Toxic megacolon'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1230,
    question: `Which organism is most commonly responsible for community-acquired pneumonia?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Staphylococcus aureus', 'Klebsiella pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1231,
    question: `The first-line treatment for a patient with generalized anxiety disorder is:`,
    options: ['Benzodiazepines', 'SSRIs', 'Antipsychotics', 'MAO inhibitors'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1232,
    question: `A pregnant woman with Rh-negative blood group delivers an Rh-positive baby. Anti-D immunoglobulin should be given within:`,
    options: ['12 hours', '24 hours', '48 hours', '72 hours'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1233,
    question: `A woman presents with a painless breast mass. What is the most appropriate next step in management?`,
    options: ['Immediate biopsy', 'Mammogram', 'Ultrasound', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1234,
    question: `A 32-year-old woman presents with fatigue, pallor, and heavy menstrual bleeding. Her hemoglobin is 8 g/dL, and her MCV is low. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Aplastic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1235,
    question: `Which imaging modality is preferred for diagnosing aortic dissection?`,
    options: ['Chest X-ray', 'MRI', 'CT angiography', 'Echocardiography'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1236,
    question: `A patient with a history of hypertension presents with chest pain and ST-segment elevation on ECG. What is the most likely diagnosis?`,
    options: ['Unstable angina', 'Myocardial infarction', 'Aortic dissection', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1237,
    question: `What is the most common type of skin cancer?`,
    options: ['Melanoma', 'Squamous cell carcinoma', 'Basal cell carcinoma', 'Merkel cell carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1238,
    question: `A 40-year-old woman presents with fatigue, hair loss, and sensitivity to cold. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Anemia', 'Depression'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1239,
    question: `The most common cause of secondary postpartum hemorrhage is:`,
    options: ['Retained products of conception', 'Uterine atony', 'Trauma', 'Coagulopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1240,
    question: `A patient presents with severe headache, fever, and a stiff neck. What condition should be suspected?`,
    options: ['Meningitis', 'Encephalitis', 'Brain tumor', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1241,
    question: `Atrial fibrillation increases the risk of:`,
    options: ['Myocardial infarction', 'Stroke', 'Pulmonary embolism', 'Deep vein thrombosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1242,
    question: `A 5-year-old child with asthma presents with wheezing and difficulty breathing. What is the most appropriate acute management?`,
    options: ['Inhaled corticosteroids', 'Short-acting beta-agonist (SABA)', 'Long-acting beta-agonist (LABA)', 'Oral corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1243,
    question: `A child presents with failure to thrive and a distended abdomen. What condition should be suspected?`,
    options: ['Cystic fibrosis', 'Intestinal obstruction', 'Malabsorption syndrome', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1244,
    question: `A patient with acute chest pain and ECG changes shows ST-segment elevation in leads II, III, and aVF. What is the most likely affected artery?`,
    options: ['Left anterior descending artery', 'Right coronary artery', 'Circumflex artery', 'Left main coronary artery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1245,
    question: `Which of the following is the primary treatment for bacterial infections?`,
    options: ['Antivirals', 'Antibiotics', 'Antifungals', 'Corticosteroids'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1246,
    question: `The most common cause of iron deficiency anemia in adults is:`,
    options: ['Poor diet', 'Gastrointestinal bleeding', 'Increased demand', 'Hemolysis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1247,
    question: `A young girl presents with fatigue, pallor, and splenomegaly. Laboratory tests show low hemoglobin and increased reticulocyte count. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1248,
    question: `Which condition is associated with the "onion-skin" appearance in bone on radiographic imaging?`,
    options: ['Osteosarcoma', 'Ewing sarcoma', 'Chondrosarcoma', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1249,
    question: `Which of the following conditions is characterized by "foul-smelling" diarrhea?`,
    options: ['Celiac disease', 'Lactose intolerance', 'Clostridium difficile infection', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1250,
    question: `The drug of choice for managing hypertension in pregnant women is:`,
    options: ['Lisinopril', 'Methyldopa', 'Amlodipine', 'Hydrochlorothiazide'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1251,
    question: `The classic finding of "swishing" sounds during auscultation is known as:`,
    options: ['Murmur', 'Rub', 'Gallop', 'Click'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1252,
    question: `A patient with a known history of hypertension presents with severe headache and visual disturbances. What is the most appropriate next step?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Blood pressure measurement', 'Fundoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1253,
    question: `A 40-year-old man presents with progressive weakness and a positive straight leg raise test. What is the most likely diagnosis?`,
    options: ['Herniated disc', 'Sciatica', 'Spinal stenosis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1254,
    question: `Which organism is most commonly associated with peptic ulcers?`,
    options: ['E. coli', 'H. pylori', 'Streptococcus', 'Salmonella'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1255,
    question: `A patient with a history of diabetes presents with vision changes. A fundoscopic exam shows cotton wool spots and hemorrhages. What is the most likely diagnosis?`,
    options: ['Diabetic retinopathy', 'Macular degeneration', 'Hypertensive retinopathy', 'Retinal detachment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1256,
    question: `A 45-year-old male presents with difficulty swallowing, weight loss, and regurgitation of undigested food. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal stricture', 'Esophageal cancer', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1257,
    question: `Which type of hernia is most common in males?`,
    options: ['Umbilical', 'Femoral', 'Inguinal', 'Epigastric'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1258,
    question: `A patient presents with abdominal pain, jaundice, and a history of alcohol use. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Chronic pancreatitis', 'Hepatitis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1259,
    question: `A patient presents with unexplained weight loss, night sweats, and fatigue. What is the most appropriate next step in management?`,
    options: ['CT scan of the abdomen', 'Chest X-ray', 'Complete blood count', 'Thyroid function tests'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1260,
    question: `A young female presents with recurrent urinary tract infections. What is the most likely underlying condition?`,
    options: ['Diabetes mellitus', 'Anatomical abnormality', 'Immunocompromised state', 'Stress incontinence'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1261,
    question: `A 32-year-old woman presents with dysmenorrhea, dyspareunia, and infertility. The most likely diagnosis is:`,
    options: ['Pelvic inflammatory disease', 'Endometriosis', 'Adenomyosis', 'Uterine fibroid'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1262,
    question: `What is the primary cause of secondary amenorrhea in a woman of reproductive age?`,
    options: ['Polycystic ovary syndrome', 'Pregnancy', 'Menopause', 'Hypothyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1263,
    question: `The most sensitive investigation for cervical insufficiency is:`,
    options: ['Transvaginal ultrasound cervical length', 'Hysterosalpingography', 'MRI pelvis', 'Abdominal ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1264,
    question: `A 55-year-old male presents with sudden onset of severe chest pain radiating to the back. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Gastroesophageal reflux disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1265,
    question: `The "dromedary hump" is an ultrasound sign associated with which organ?`,
    options: ['Liver', 'Kidney', 'Pancreas', 'Spleen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1266,
    question: `A patient presents with sudden onset of severe headache described as "the worst headache of my life." What is the most appropriate initial imaging study?`,
    options: ['CT scan of the abdomen', 'CT scan of the brain', 'MRI of the brain', 'X-ray of the skull'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1267,
    question: `A woman presents with infertility, obesity, acne, and oligomenorrhea. Ultrasound shows multiple peripheral ovarian cysts. Diagnosis is:`,
    options: ['Ovarian tumor', 'Hypothyroidism', 'Polycystic ovarian syndrome', 'Endometriosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1268,
    question: `A patient with chronic liver disease is at risk for developing which of the following complications?`,
    options: ['Hyperglycemia', 'Hepatic encephalopathy', 'Osteoporosis', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1269,
    question: `A patient presents with severe abdominal pain and a "drunken" gait. What vitamin deficiency should be suspected?`,
    options: ['Vitamin C', 'Vitamin D', 'Vitamin B1 (thiamine)', 'Vitamin B12'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1270,
    question: `Which condition is characterized by a "honeycomb" appearance on chest X-ray?`,
    options: ['Tuberculosis', 'Pulmonary fibrosis', 'Pneumonia', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1271,
    question: `A child presents with a wheezing cough and shortness of breath following exposure to a cat. What is the likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Pneumonia', 'Croup'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1272,
    question: `The first-line treatment for a patient with bipolar disorder in a manic episode is:`,
    options: ['Lithium', 'Haloperidol', 'Fluoxetine', 'Risperidone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1273,
    question: `A 3-year-old child presents with barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Croup', 'Asthma', 'Bronchiolitis', 'Epiglottitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1274,
    question: `A patient presents with fever, chills, flank pain, and costovertebral angle tenderness. What is the most likely diagnosis?`,
    options: ['Cystitis', 'Pyelonephritis', 'Urethritis', 'Nephrolithiasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1275,
    question: `The first-line drug for labor induction is:`,
    options: ['Misoprostol', 'Oxytocin', 'Prostaglandin E2', 'Magnesium sulfate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1276,
    question: `A patient presents with a rash, joint pain, and a positive ANA test. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1277,
    question: `Which laboratory finding is typically seen in hemolytic anemia?`,
    options: ['Increased reticulocyte count', 'Decreased white blood cells', 'Decreased hemoglobin', 'Increased platelets'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1278,
    question: `Which of the following is a risk factor for the development of gastric carcinoma?`,
    options: ['H. pylori infection', 'Chronic NSAID use', 'Celiac disease', 'Gallstones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1279,
    question: `A patient presents with a new-onset tremor and bradykinesia. What is the most likely cause?`,
    options: ['Parkinson\'s disease', 'Essential tremor', 'Multiple sclerosis', 'Wilson\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1280,
    question: `Which vitamin is essential for calcium absorption?`,
    options: ['Vitamin A', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1281,
    question: `A woman presents with severe dysmenorrhea from menarche, normal cycles, and no pelvic pathology. Diagnosis:`,
    options: ['Primary dysmenorrhea', 'Secondary dysmenorrhea', 'Endometriosis', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1282,
    question: `The most appropriate test to confirm the diagnosis of rheumatoid arthritis is:`,
    options: ['ESR (erythrocyte sedimentation rate)', 'Anti-CCP antibodies', 'C-reactive protein (CRP)', 'ANA (antinuclear antibody)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1283,
    question: `A patient presents with a thickened area on the vocal cords after years of smoking. What is the most likely diagnosis?`,
    options: ['Vocal cord nodules', 'Vocal cord polyps', 'Laryngeal carcinoma', 'Laryngitis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1284,
    question: `A patient with a history of rheumatic fever is at risk for which heart condition?`,
    options: ['Aortic stenosis', 'Mitral regurgitation', 'Coronary artery disease', 'Hypertrophic cardiomyopathy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1285,
    question: `Which of the following is the most likely cause of sudden painless loss of vision in one eye?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Glaucoma', 'Optic neuritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1286,
    question: `The primary treatment for symptomatic bradycardia is:`,
    options: ['Atropine', 'Beta-blockers', 'Digitalis', 'Calcium channel blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1287,
    question: `A 70-year-old male presents with sudden onset of severe headache described as "the worst headache of my life." What is the most likely diagnosis?`,
    options: ['Subarachnoid hemorrhage', 'Migraine', 'Tension headache', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1288,
    question: `A patient presents with severe fatigue, pallor, and a history of heavy menstrual bleeding. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1289,
    question: `A patient with a history of hyperlipidemia presents with pain in the calf during exercise that resolves with rest. What is the most likely diagnosis?`,
    options: ['Deep vein thrombosis', 'Peripheral artery disease', 'Venous insufficiency', 'Muscle strain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1290,
    question: `A woman presents with postmenopausal bleeding. Ultrasound shows endometrial thickness 18 mm. The most important next step is:`,
    options: ['Observation', 'Hormonal therapy', 'Endometrial biopsy', 'Repeat ultrasound in 1 month'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1291,
    question: `The "C-reactive protein" (CRP) is a marker for:`,
    options: ['Chronic kidney disease', 'Inflammation', 'Liver function', 'Thyroid function'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1292,
    question: `A patient with a history of coronary artery disease presents with a new murmur and fever. What is the most likely diagnosis?`,
    options: ['Myocarditis', 'Endocarditis', 'Pericarditis', 'Heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1293,
    question: `Which of the following is the first-line treatment for hypertension in a diabetic patient?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Calcium channel blockers', 'Beta-blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1294,
    question: `A patient presents with epigastric pain that is relieved by food. What is the most likely diagnosis?`,
    options: ['Duodenal ulcer', 'Gastric ulcer, increased by meal', 'Cholelithiasis', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1295,
    question: `A 25-year-old female presents with amenorrhea, galactorrhea, and visual disturbances. What is the most likely diagnosis?`,
    options: ['Prolactinoma', 'Cushing\'s disease', 'Thyroid disorder', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1296,
    question: `What is the primary treatment for Graves' disease?`,
    options: ['Beta-blockers', 'Radioactive iodine', 'Methimazole', 'Surgery'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1297,
    question: `A patient presents with increased thirst, frequent urination, and blurry vision. What is the most appropriate initial test?`,
    options: ['Fasting blood glucose', 'Oral glucose tolerance test', 'HbA1c', 'Random blood glucose'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1298,
    question: `Which organism is most commonly responsible for causing bacterial meningitis in infants?`,
    options: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Group B Streptococcus', 'Listeria monocytogenes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1299,
    question: `A patient with hypertension is started on an ACE inhibitor. What is a common side effect of this class of drugs?`,
    options: ['Cough', 'Hyperkalemia', 'Angioedema', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1300,
    question: `Which of the following is the main function of the kidney?`,
    options: ['Regulation of blood pressure', 'Regulation of electrolytes', 'Excretion of metabolic waste', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1301,
    question: `A patient presents with fever, rash, and joint pain after starting a new medication. What is the most likely diagnosis?`,
    options: ['Drug-induced lupus', 'Erythema multiforme', 'Serum sickness', 'Stevens-Johnson syndrome'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1302,
    question: `What is the mechanism of action of statins?`,
    options: ['Inhibition of cholesterol absorption', 'Inhibition of HMG-CoA reductase', 'Stimulation of HDL synthesis', 'Increase in triglyceride clearance'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1303,
    question: `A pregnant woman presents with vaginal bleeding at 30 weeks of gestation. Ultrasound reveals a low-lying placenta covering the internal cervical os. What is the diagnosis?`,
    options: ['Placenta previa', 'Abruptio placentae', 'Vasa previa', 'Uterine rupture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1304,
    question: `A patient presents with a painless testicular mass. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Testicular torsion', 'Epididymitis', 'Testicular cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1305,
    question: `A young adult presents with persistent fatigue and pallor. Laboratory tests reveal macrocytic anemia. What is the most likely cause?`,
    options: ['Iron deficiency', 'Vitamin B12 deficiency', 'Folic acid deficiency', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1306,
    question: `A child with a history of recurrent respiratory infections is found to have a positive sweat test. What is the most likely diagnosis?`,
    options: ['Asthma', 'Cystic fibrosis', 'Bronchitis', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1307,
    question: `A child presents with a persistent cough and wheezing after exposure to a cold. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Croup', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1308,
    question: `In cases of primary hyperparathyroidism, which laboratory finding is most commonly elevated?`,
    options: ['Calcium', 'Phosphate', 'Magnesium', 'Potassium'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1309,
    question: `Which type of hypersensitivity reaction is involved in contact dermatitis?`,
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1310,
    question: `A patient with rheumatoid arthritis presents with sudden severe pain in the first metatarsophalangeal joint. What is the most likely diagnosis?`,
    options: ['Gout', 'Septic arthritis', 'Psoriatic arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1311,
    question: `A patient with a history of seizures is found to have hyponatremia. Which medication is most likely to cause this condition?`,
    options: ['Phenytoin', 'Carbamazepine', 'Valproic acid', 'Lamotrigine'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1312,
    question: `A 55-year-old female presents with severe headaches and vision changes. MRI shows an expanding mass in the pituitary gland. What is the most likely diagnosis?`,
    options: ['Pituitary adenoma', 'Meningioma', 'Craniopharyngioma', 'Glioma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1313,
    question: `A patient presents with polyuria, polydipsia, and weight loss. Blood glucose is 320 mg/dL. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Diabetes insipidus', 'Cushing\'s syndrome', 'Addison\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1314,
    question: `A patient with a history of asthma presents with chest tightness and wheezing. What is the most likely trigger?`,
    options: ['Cold air', 'Exercise', 'Allergens', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1315,
    question: `A child with a history of recurrent otitis media presents with ear pain and discharge. What is the most likely diagnosis?`,
    options: ['Cholesteatoma', 'Otitis externa', 'Tympanic membrane perforation', 'Mastoiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1316,
    question: `A patient presents with joint pain and swelling in the morning that improves throughout the day. What condition should be suspected?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1317,
    question: `A patient presents with sudden loss of vision in one eye, described as a curtain falling over the field of vision. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Optic neuritis', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1318,
    question: `A patient presents with hoarseness and a persistent cough. What is the most appropriate initial evaluation?`,
    options: ['Laryngoscopy', 'Chest X-ray', 'CT scan of the neck', 'Thyroid function tests'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1319,
    question: `Which of the following is a potential complication of untreated hypertension?`,
    options: ['Stroke', 'Osteoporosis', 'Asthma', 'Arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1320,
    question: `A patient presents with a swollen, painful wrist joint. What is the first step in management?`,
    options: ['Joint aspiration', 'NSAIDs', 'Corticosteroids', 'Immobilization'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1321,
    question: `Which condition is characterized by a "swollen" appearance of the face and neck?`,
    options: ['Cushing\'s syndrome', 'Hypothyroidism', 'Acromegaly', 'Myxedema'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1322,
    question: `A patient presents with a butterfly rash on the face, joint pain, and positive ANA. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Rheumatoid arthritis', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1323,
    question: `The drug of choice for the initial treatment of status epilepticus is:`,
    options: ['Phenytoin', 'Diazepam', 'Valproate', 'Carbamazepine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1324,
    question: `A 26-year-old woman presents with recurrent pregnancy losses. Karyotype shows balanced translocation. Most effective management:`,
    options: ['IVF with preimplantation genetic testing', 'Hormonal therapy', 'Hysteroscopic surgery', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1325,
    question: `What is the primary treatment for a tension pneumothorax?`,
    options: ['Oxygen therapy', 'Needle decompression', 'Chest tube placement', 'Thoracotomy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1326,
    question: `A 50-year-old smoker presents with hemoptysis, weight loss, and chronic cough. His chest X-ray reveals a mass in the right upper lobe. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1327,
    question: `The drug of choice for treating Lyme disease in children under 8 years of age is:`,
    options: ['Doxycycline', 'Amoxicillin', 'Ciprofloxacin', 'Metronidazole'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1328,
    question: `In managing a patient with acute renal failure, which of the following is crucial to prevent further kidney damage?`,
    options: ['Increased fluid intake', 'Avoiding nephrotoxic medications', 'Immediate dialysis', 'High protein diet'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1329,
    question: `Which imaging modality is most sensitive for detecting early osteomyelitis?`,
    options: ['X-ray', 'CT scan', 'MRI', 'Ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1330,
    question: `A patient with a history of hyperlipidemia presents with xanthomas. What does this indicate?`,
    options: ['Increased risk of cardiovascular disease', 'Liver dysfunction', 'Kidney disease', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1331,
    question: `A patient presents with severe lower back pain, a pulsatile abdominal mass, and hypotension. What is the most likely diagnosis?`,
    options: ['Ruptured abdominal aortic aneurysm', 'Acute pancreatitis', 'Renal colic', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1332,
    question: `Which of the following conditions is characterized by recurrent episodes of jaundice and abdominal pain due to gallstones?`,
    options: ['Cholecystitis', 'Choledocholithiasis', 'Cholangitis', 'Pancreatitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1333,
    question: `A 30-year-old woman presents with abnormal uterine bleeding and an enlarged uterus on examination. Ultrasound shows multiple fibroids. What is the most likely diagnosis?`,
    options: ['Endometrial carcinoma', 'Uterine fibroids (leiomyomas)', 'Adenomyosis', 'Polycystic ovary syndrome (PCOS)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1334,
    question: `The most common cause of acute pancreatitis in adults is:`,
    options: ['Gallstones', 'Alcohol use', 'Hypertriglyceridemia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1335,
    question: `A patient presents with chronic cough and night sweats. A chest X-ray shows a cavitary lesion in the lung. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Abscess', 'Fungal infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1336,
    question: `A patient presents with diarrhea, abdominal cramps, and weight loss. A stool sample reveals a positive fecal fat test. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1337,
    question: `A pregnant woman at 32 weeks presents with painful vaginal bleeding and tense tender uterus. The most likely diagnosis is:`,
    options: ['Placenta previa', 'Vasa previa', 'Placental abruption', 'Uterine rupture'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1338,
    question: `Which of the following is an adverse effect of long-term corticosteroid therapy?`,
    options: ['Osteoporosis', 'Hypertension', 'Hyperglycemia', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1339,
    question: `A 50-year-old female presents with excessive thirst and frequent urination. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus', 'Hyperthyroidism', 'Chronic kidney disease', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1340,
    question: `Which is the first-line medication used in the management of Alzheimer's disease?`,
    options: ['Levodopa', 'Donepezil', 'Diazepam', 'Sertraline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1341,
    question: `What is the primary cause of acute glomerulonephritis in children?`,
    options: ['Systemic lupus erythematosus', 'Post-streptococcal infection', 'Henoch-Schönlein purpura', 'IgA nephropathy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1342,
    question: `What is the primary mode of action of statins?`,
    options: ['Inhibition of cholesterol absorption', 'Inhibition of HMG-CoA reductase', 'Activation of LDL receptors', 'Decrease triglyceride synthesis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1343,
    question: `A child with a history of recurrent infections and failure to thrive may have which condition?`,
    options: ['Chronic granulomatous disease', 'Cystic fibrosis', 'Hyper-IgE syndrome', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1344,
    question: `A 50-year-old male presents with chest pain and ST elevation in leads II, III, and aVF on ECG. What is the most likely diagnosis?`,
    options: ['Inferior myocardial infarction', 'Anterior myocardial infarction', 'Lateral myocardial infarction', 'Posterior myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1345,
    question: `A patient presents with a painful, swollen wrist and fever. Joint aspiration shows uric acid crystals. What is the most likely diagnosis?`,
    options: ['Gout', 'Pseudogout', 'Septic arthritis', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1346,
    question: `A woman in her second trimester of pregnancy has a history of recurrent miscarriages. Which test is most useful to assess for potential causes?`,
    options: ['Ultrasound', 'Karyotyping', 'Antiphospholipid antibodies', 'Hormonal assays'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1347,
    question: `A child presents with a history of recurrent ear infections. What is the most appropriate next step in management?`,
    options: ['Myringotomy with tube placement', 'Antibiotics', 'Watchful waiting', 'Allergy testing'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1348,
    question: `Which drug is primarily used to reverse the effects of opioid overdose?`,
    options: ['Naloxone', 'Naltrexone', 'Flumazenil', 'Acetylcysteine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1349,
    question: `A patient presents with a painless ulcer on the genitals. What is the most likely diagnosis?`,
    options: ['Chancroid', 'Syphilis', 'Genital herpes', 'HPV infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1350,
    question: `A 4-year-old child is brought in with fever, rash, and conjunctivitis. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Varicella', 'Hand, foot, and mouth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1351,
    question: `A patient presents with a hoarse voice, difficulty swallowing, and a neck mass. What is the most likely diagnosis?`,
    options: ['Thyroid cancer', 'Laryngeal cancer', 'Goiter', 'Benign thyroid nodule'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1352,
    question: `A patient presents with severe chest pain and an ECG shows ST segment elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Anterior myocardial infarction', 'Inferior myocardial infarction', 'Lateral myocardial infarction', 'Posterior myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1353,
    question: `A pregnant woman presents with elevated blood pressure, proteinuria, and edema. What is the most likely diagnosis?`,
    options: ['Preeclampsia', 'Eclampsia', 'Gestational hypertension', 'HELLP syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1354,
    question: `A patient with chronic kidney disease presents with bone pain and elevated parathyroid hormone levels. What is the most likely cause of the bone pain?`,
    options: ['Renal osteodystrophy', 'Osteoporosis', 'Osteoarthritis', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1355,
    question: `A child presents with fever, a barking cough, and stridor. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Laryngomalacia', 'Croup', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1356,
    question: `What is the primary laboratory finding in patients with acute pancreatitis?`,
    options: ['Elevated liver enzymes', 'Elevated amylase and lipase', 'Decreased glucose', 'Elevated bilirubin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1357,
    question: `A 30-year-old man presents with acute onset of back pain and difficulty urinating. What is the most likely cause?`,
    options: ['Renal calculi', 'Herniated disc', 'Spinal stenosis', 'Prostatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1358,
    question: `What is the most common cause of peptic ulcer disease?`,
    options: ['Stress', 'NSAID use', 'Helicobacter pylori infection', 'Smoking'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1359,
    question: `What is the most common form of thyroid cancer?`,
    options: ['Follicular carcinoma', 'Papillary carcinoma', 'Medullary carcinoma', 'Anaplastic carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1360,
    question: `A 60-year-old man with a history of smoking presents with hemoptysis and weight loss. What is the most concerning diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1361,
    question: `A 70-year-old female presents with confusion and agitation. What is the most likely cause?`,
    options: ['Stroke', 'Dementia', 'Delirium', 'Depression'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1362,
    question: `In children, the most common cause of acute gastroenteritis is:`,
    options: ['Bacterial infection', 'Viral infection', 'Parasitic infection', 'Food poisoning'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1363,
    question: `In patients with rheumatoid arthritis, which of the following joints is typically affected first?`,
    options: ['Hip', 'Shoulder', 'Small joints of the hands', 'Ankle'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1364,
    question: `What is the mainstay treatment for chronic migraine?`,
    options: ['Beta-blockers', 'NSAIDs', 'Triptans', 'Antidepressants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1365,
    question: `A 65-year-old female presents with a mass in the abdomen and constipation. What is the most likely diagnosis?`,
    options: ['Ovarian tumor', 'Colorectal cancer', 'Diverticulitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1366,
    question: `A patient with a history of alcoholism presents with confusion, ataxia, and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Delirium tremens', 'Hepatic encephalopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1367,
    question: `Which of the following is a major criterion for the diagnosis of rheumatic fever?`,
    options: ['Arthralgia', 'Fever', 'Carditis', 'Elevated ESR'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1368,
    question: `A patient with hyperthyroidism undergoes radioactive iodine therapy. Several months later, she develops fatigue, weight gain, and cold intolerance. What is the most likely cause of these symptoms?`,
    options: ['Hypoparathyroidism', 'Hypothyroidism', 'Thyroid storm', 'Graves’ disease recurrence'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1369,
    question: `A patient with severe asthma is being treated with systemic corticosteroids. Which complication is most likely?`,
    options: ['Diabetes mellitus', 'Hypocalcemia', 'Hyperthyroidism', 'Cushing\'s syndrome'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1370,
    question: `A 45-year-old female presents with amenorrhea, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Polycystic ovary syndrome', 'Hyperthyroidism', 'Ovarian cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1371,
    question: `A patient presents with polyuria, polydipsia, and weight loss. Laboratory findings reveal hyperglycemia. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus type 1', 'Diabetes insipidus', 'Cushing\'s syndrome', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1372,
    question: `A patient with diabetes presents with a foot ulcer that is not healing. What is the most appropriate next step in management?`,
    options: ['Oral antibiotics', 'Surgical debridement', 'Advanced wound care', 'Referral to podiatrist'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1373,
    question: `Which of the following is an essential feature of metabolic syndrome?`,
    options: ['Hypoglycemia', 'Low blood pressure', 'Central obesity', 'Increased physical activity'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1374,
    question: `The presence of "crescents" in a renal biopsy is indicative of which condition?`,
    options: ['Minimal change disease', 'Membranous nephropathy', 'Rapidly progressive glomerulonephritis', 'Focal segmental glomerulosclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1375,
    question: `A patient presents with severe abdominal pain and a rigid abdomen. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Perforated ulcer', 'Pancreatitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1376,
    question: `In patients with nephrotic syndrome, which of the following laboratory findings is expected?`,
    options: ['Hyperlipidemia', 'Hyperkalemia', 'Hypercalcemia', 'Hypokalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1377,
    question: `A patient is diagnosed with iron deficiency anemia. Which of the following is the most likely cause in a premenopausal woman?`,
    options: ['Gastrointestinal bleeding', 'Menstrual blood loss', 'Malnutrition', 'Hemolysis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1378,
    question: `A 65-year-old female presents with bone pain and hypercalcemia. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Multiple myeloma', 'Paget\'s disease', 'Primary hyperparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1379,
    question: `A pregnant woman presents with excessive vomiting, weight loss, and ketonuria. Diagnosis is:`,
    options: ['Acute gastritis', 'Hyperemesis gravidarum', 'Preeclampsia', 'Molar pregnancy only'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1380,
    question: `In a patient with diabetes mellitus, which of the following is a common chronic complication?`,
    options: ['Acute kidney injury', 'Peripheral neuropathy', 'Viral hepatitis', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1381,
    question: `Which of the following is a risk factor for developing endometrial cancer?`,
    options: ['Nulliparity', 'Oral contraceptive use', 'Early menopause', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1382,
    question: `Which of the following is a side effect of long-term corticosteroid use?`,
    options: ['Hypoglycemia', 'Osteoporosis', 'Weight loss', 'Hypotension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1383,
    question: `A patient presents with a painful ulcer on the genitals. What is the most likely diagnosis?`,
    options: ['Chancroid', 'Herpes simplex', 'Syphilis', 'Granuloma inguinale'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1384,
    question: `The first-line management of ovarian torsion in a young woman to preserve fertility is:`,
    options: ['Oophorectomy', 'Salpingectomy', 'Laparoscopic detorsion', 'Observation'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1385,
    question: `The most common type of primary skin cancer is:`,
    options: ['Melanoma', 'Basal cell carcinoma', 'Squamous cell carcinoma', 'Merkel cell carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1386,
    question: `What is the most common cause of chronic bronchitis in adults?`,
    options: ['Air pollution', 'Smoking', 'Genetic predisposition', 'Occupational exposure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1387,
    question: `A patient with a history of hypertension presents with a sudden severe headache, vomiting, and loss of consciousness. What is the most likely diagnosis?`,
    options: ['Subarachnoid hemorrhage', 'Intracerebral hemorrhage', 'Tension headache', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1388,
    question: `Which of the following is the most common cause of viral meningitis?`,
    options: ['Enteroviruses', 'Herpes simplex virus', 'Varicella-zoster virus', 'Cytomegalovirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1389,
    question: `What is the primary treatment for a patient with chronic heart failure?`,
    options: ['Diuretics', 'Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1390,
    question: `Which of the following laboratory findings is characteristic of Cushing's syndrome?`,
    options: ['Low cortisol levels', 'High ACTH levels', 'Hyperglycemia', 'Hyponatremia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1391,
    question: `The most common benign ovarian tumor is:`,
    options: ['Serous cystadenoma', 'Mucinous cystadenoma', 'Dermoid cyst', 'Endometrioma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1392,
    question: `What is the hallmark histological finding in Hashimoto's thyroiditis?`,
    options: ['Lymphocytic infiltration', 'Fibrosis', 'Follicular hyperplasia', 'Colloid accumulation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1393,
    question: `A patient with rheumatoid arthritis is at risk for developing which of the following complications?`,
    options: ['Osteoporosis', 'Osteosarcoma', 'Osteomyelitis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1394,
    question: `A patient with hemolytic anemia presents with elevated indirect bilirubin levels. What is the likely cause?`,
    options: ['Liver dysfunction', 'Increased red blood cell destruction', 'Gallbladder disease', 'Hemorrhage'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1395,
    question: `Which of the following is a classic sign of hyperthyroidism?`,
    options: ['Weight gain', 'Cold intolerance', 'Exophthalmos', 'Bradycardia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1396,
    question: `In a patient with bacterial meningitis, the CSF analysis would typically show:`,
    options: ['Low glucose, high protein, and neutrophilic pleocytosis', 'High glucose, low protein, and lymphocytic pleocytosis', 'Normal glucose, normal protein, and no pleocytosis', 'High glucose, low protein, and eosinophilic pleocytosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1397,
    question: `A 45-year-old male with a history of smoking presents with a chronic cough and hemoptysis. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1398,
    question: `A 30-year-old female presents with frequent headaches. She reports that they occur just before her menstrual cycle. What is the most likely diagnosis?`,
    options: ['Tension-type headache', 'Migraine', 'Cluster headache', 'Sinus headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1399,
    question: `The "McBurney's point" is associated with which condition?`,
    options: ['Appendicitis', 'Cholecystitis', 'Pancreatitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1400,
    question: `A newborn presents with delayed passage of meconium and a distended abdomen. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Hirschsprung disease', 'Meconium ileus', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1401,
    question: `Which of the following heart sounds is associated with mitral stenosis?`,
    options: ['Opening snap', 'S4 gallop', 'Systolic click', 'Ejection sound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1402,
    question: `A 70-year-old female with osteoporosis has a fall and presents with hip pain. What type of fracture is most likely?`,
    options: ['Intertrochanteric fracture', 'Femoral neck fracture', 'Pubic ramus fracture', 'Femoral head fracture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1403,
    question: `The most common cause of acute otitis media in children is:`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1404,
    question: `A 40-year-old male presents with chest pain, shortness of breath, and is a heavy smoker. His ECG shows ST-segment elevation. What is the most likely diagnosis?`,
    options: ['Acute myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1405,
    question: `A patient presents with excessive thirst and frequent urination. What is the most likely cause?`,
    options: ['Diabetes mellitus', 'Hyperaldosteronism', 'Cushing\'s syndrome', 'Hyperparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1406,
    question: `The first-line management of postpartum hemorrhage due to uterine atony is:`,
    options: ['Uterine massage and oxytocin', 'Hysterectomy', 'Uterine packing', 'Tranexamic acid only'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1407,
    question: `In which condition is the "thunderclap headache" classically seen?`,
    options: ['Migraine', 'Subarachnoid hemorrhage', 'Tension headache', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1408,
    question: `Which of the following is a characteristic feature of hypocalcemia?`,
    options: ['Trousseau\'s sign', 'Babinski sign', 'Murphy\'s sign', 'Cullen\'s sign'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1409,
    question: `Which condition is associated with the "slipped capital femoral epiphysis"?`,
    options: ['Osteogenesis imperfecta', 'Osteosarcoma', 'Adolescent obesity', 'Ewing sarcoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1410,
    question: `A 60-year-old man presents with a painless lump in the neck. On examination, there is a firm, non-tender lymph node. What is the most likely diagnosis?`,
    options: ['Lymphoma', 'Thyroid nodule', 'Metastatic cancer', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1411,
    question: `In a patient with chronic obstructive pulmonary disease (COPD), which finding is typically observed on spirometry?`,
    options: ['Decreased FEV1/FVC ratio', 'Increased FEV1', 'Normal FVC', 'Decreased residual volume'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1412,
    question: `A patient presents with severe abdominal pain, bloody diarrhea, and weight loss. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Ulcerative colitis', 'Crohn\'s disease', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1413,
    question: `A patient presents with a red, hot, and swollen joint in the big toe. What is the most likely diagnosis?`,
    options: ['Gout', 'Septic arthritis', 'Rheumatoid arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1414,
    question: `What is the most common cause of sudden cardiac death in young athletes?`,
    options: ['Coronary artery disease', 'Hypertrophic cardiomyopathy', 'Arrhythmogenic right ventricular cardiomyopathy', 'Myocarditis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1415,
    question: `A child with suspected meningitis has a lumbar puncture. What finding is most consistent with viral meningitis?`,
    options: ['Elevated white blood cell count with neutrophilic predominance', 'Elevated protein levels with normal glucose levels', 'Normal protein levels with low glucose levels', 'Elevated protein and low glucose levels'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1416,
    question: `Which medication is commonly used to manage an acute asthma attack?`,
    options: ['Salmeterol', 'Fluticasone', 'Albuterol', 'Montelukast'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1417,
    question: `A 70-year-old male presents with fatigue and night sweats. A peripheral blood smear shows "smudge cells." What is the likely diagnosis?`,
    options: ['Chronic lymphocytic leukemia (CLL)', 'Acute lymphoblastic leukemia (ALL)', 'Multiple myeloma', 'Non-Hodgkin lymphoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1418,
    question: `A pregnant woman with diabetes is at increased risk of delivering a baby with:`,
    options: ['Low birth weight', 'Neural tube defect', 'Macrosomia', 'Club foot'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1419,
    question: `In which condition is "pitting edema" commonly seen?`,
    options: ['Congestive heart failure', 'Cirrhosis', 'Kidney disease', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1420,
    question: `The primary function of the spleen includes:`,
    options: ['Filtration of blood', 'Production of insulin', 'Absorption of nutrients', 'Storage of bile'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1421,
    question: `A 50-year-old male presents with chest pain that occurs with exertion and resolves with rest. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Stable angina', 'Unstable angina', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1422,
    question: `A patient presents with fever, sore throat, and a white exudate on the tonsils. A rapid test for strep is negative. What is the most likely diagnosis?`,
    options: ['Infectious mononucleosis', 'Viral pharyngitis', 'Bacterial pharyngitis', 'Tonsillitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1423,
    question: `A woman presents with foul-smelling discharge and strawberry cervix. The causative organism is:`,
    options: ['Candida albicans', 'Gardnerella vaginalis', 'Trichomonas vaginalis', 'Chlamydia trachomatis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1424,
    question: `A 50-year-old male presents with difficulty urinating and a weak urine stream. What is the most likely diagnosis?`,
    options: ['Prostatitis', 'Benign prostatic hyperplasia', 'Bladder cancer', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1425,
    question: `A child presents with fever, sore throat, and difficulty swallowing. A throat swab reveals group A beta-hemolytic streptococci. What is the most appropriate treatment?`,
    options: ['Amoxicillin', 'Azithromycin', 'Clindamycin', 'Penicillin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1426,
    question: `A 60-year-old man with a history of smoking presents with hoarseness and a non-healing ulcer on his tongue. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Oral squamous cell carcinoma', 'Vocal cord polyp', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1427,
    question: `In patients with heart failure, which class of medications is most beneficial for reducing mortality?`,
    options: ['Diuretics', 'Beta-blockers', 'ACE inhibitors', 'Digoxin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1428,
    question: `A woman presents with stress urinary incontinence. The most appropriate initial management is:`,
    options: ['Surgery', 'Anticholinergics', 'Pelvic floor exercises', 'Antibiotics'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1429,
    question: `Which of the following organisms is most commonly responsible for acute otitis media in children?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1430,
    question: `In the case of hemophilia A, the deficient factor is:`,
    options: ['Factor VIII', 'Factor IX', 'Factor X', 'Factor VII'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1431,
    question: `A 25-year-old female presents with acute abdominal pain and nausea after eating a fatty meal. What is the most likely diagnosis?`,
    options: ['Acute appendicitis', 'Gallbladder disease', 'Peptic ulcer disease', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1432,
    question: `A patient presents with chronic diarrhea, weight loss, and a family history of celiac disease. What is the most appropriate diagnostic test?`,
    options: ['Endoscopy with biopsy', 'Stool fat analysis', 'Serum antibodies', 'Colonoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1433,
    question: `A patient presents with bilateral leg swelling, and a Doppler ultrasound shows a deep vein thrombosis (DVT) in the left leg. What is the most appropriate initial treatment?`,
    options: ['Thrombolysis', 'Compression stockings', 'Anticoagulation therapy', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1434,
    question: `Which medication is used to treat an acute myocardial infarction (MI)?`,
    options: ['Digoxin', 'Atropine', 'Aspirin', 'Furosemide'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1435,
    question: `A 3-year-old child presents with a barking cough and stridor at rest. What is the most appropriate treatment?`,
    options: ['Oral steroids', 'Nebulized epinephrine', 'Antibiotics', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1436,
    question: `Which of the following is a classic sign of meningitis?`,
    options: ['Kernig\'s sign', 'Murphy\'s sign', 'McBurney\'s point', 'Cullen\'s sign'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1437,
    question: `A patient with a history of hyperlipidemia presents for routine checkup. What is the target LDL cholesterol level for most adults?`,
    options: ['Less than 100 mg/dL', 'Less than 130 mg/dL', 'Less than 160 mg/dL', 'Less than 200 mg/dL'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1438,
    question: `A patient presents with recurrent episodes of severe headache, visual disturbances, and palpitations. What is the most likely diagnosis?`,
    options: ['Pheochromocytoma', 'Migraine', 'Cluster headache', 'Tension-type headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1439,
    question: `The most common side effect of metformin is:`,
    options: ['Weight gain', 'Gastrointestinal upset', 'Hypoglycemia', 'Lactic acidosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1440,
    question: `The most common cause of death in patients with systemic lupus erythematosus (SLE) is:`,
    options: ['Renal failure', 'Cardiovascular disease', 'Infections', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1441,
    question: `A 30-year-old male presents with a painful lump in the scrotum. Examination reveals a soft, cystic mass. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Varicocele', 'Spermatocele', 'Testicular cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1442,
    question: `In which condition is the "butterfly rash" commonly seen?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Eczema', 'Rosacea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1443,
    question: `What is the first-line treatment for acute sinusitis?`,
    options: ['Antibiotics', 'Nasal decongestants', 'Antihistamines', 'Saline nasal irrigation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1444,
    question: `Which of the following is the most common cause of chronic pancreatitis?`,
    options: ['Gallstones', 'Hypercalcemia', 'Chronic alcohol use', 'Hyperlipidemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1445,
    question: `Which of the following is a characteristic finding in rheumatoid arthritis?`,
    options: ['Asymmetrical joint involvement', 'Morning stiffness lasting more than an hour', 'Joint erosion on X-ray', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1446,
    question: `A patient presents with night sweats, weight loss, and productive cough for the past two months. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Chronic bronchitis', 'Lung cancer', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1447,
    question: `A patient presents with episodic abdominal pain relieved by defecation, associated with changes in bowel habits. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome (IBS)', 'Crohn’s disease', 'Ulcerative colitis', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1448,
    question: `Which of the following conditions is associated with a "potassium-wasting" diuretic?`,
    options: ['Heart failure', 'Hypertension', 'Hyperaldosteronism', 'Edema'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1449,
    question: `A woman presents with excessive hair growth in a male pattern and irregular menstrual cycles. What is the most likely diagnosis?`,
    options: ['Cushing syndrome', 'Polycystic ovary syndrome (PCOS)', 'Androgen-secreting tumor', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1450,
    question: `A patient presents with weakness, pallor, and a macrocytic anemia. Serum B12 levels are low. What is the most likely cause?`,
    options: ['Iron deficiency', 'Pernicious anemia', 'Thalassemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1451,
    question: `What is the primary treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1452,
    question: `A 12-year-old child presents with chronic cough, wheezing, and difficulty breathing during exercise. What is the most likely diagnosis?`,
    options: ['Cystic fibrosis', 'Asthma', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1453,
    question: `A child presents with fever, vomiting, and a rash that starts on the face and spreads downward. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1454,
    question: `The "whirlpool sign" is associated with which condition in radiology?`,
    options: ['Ovarian cyst', 'Ectopic pregnancy', 'Hydrosalpinx', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1455,
    question: `A 3-year-old child presents with high fever, cough, and difficulty breathing. A chest X-ray shows bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Bacterial pneumonia', 'Viral pneumonia', 'Asthma', 'Croup'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1456,
    question: `A 50-year-old woman presents with bone pain, hypercalcemia, and a fracture after minor trauma. Serum protein electrophoresis shows an M spike. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Paget\'s disease', 'Multiple myeloma', 'Hyperparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1457,
    question: `A 65-year-old female presents with new-onset confusion and signs of dehydration. What is the most likely cause?`,
    options: ['Urinary tract infection', 'Stroke', 'Dementia', 'Electrolyte imbalance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1458,
    question: `A 32-year-old woman presents with dysuria, increased urinary frequency, and suprapubic discomfort. Urine dipstick reveals nitrites and leukocyte esterase. What is the most likely diagnosis?`,
    options: ['Pyelonephritis', 'Cystitis', 'Urethritis', 'Interstitial cystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1459,
    question: `A patient presents with chronic productive cough and dyspnea. Chest X-ray shows hyperinflated lungs. What is the most likely diagnosis?`,
    options: ['Asthma', 'Chronic bronchitis', 'Emphysema', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1460,
    question: `A patient presents with fever, joint pain, and a rash after a tick bite. What is the most likely diagnosis?`,
    options: ['Lyme disease', 'Rocky Mountain spotted fever', 'Ehrlichiosis', 'Babesiosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1461,
    question: `A woman presents with primary amenorrhea and absent uterus on ultrasound. The most likely diagnosis is:`,
    options: ['Turner syndrome', 'Androgen insensitivity syndrome', 'Kallmann syndrome', 'Hypogonadotropic hypogonadism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1462,
    question: `What is the gold standard for diagnosing coronary artery disease?`,
    options: ['Stress test', 'Coronary angiography', 'Echocardiogram', 'CT coronary angiogram'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1463,
    question: `A patient presents with a painful swelling in the groin area. Examination reveals a tender, enlarged lymph node. What is the most likely cause?`,
    options: ['Bacterial infection', 'Viral infection', 'Fungal infection', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1464,
    question: `Which test is used to confirm the diagnosis of diabetes mellitus?`,
    options: ['Fasting blood glucose', 'Oral glucose tolerance test', 'Hemoglobin A1c', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1465,
    question: `Which type of hepatitis virus is most commonly transmitted through blood?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis E'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1466,
    question: `Which of the following is a common complication of diabetes mellitus?`,
    options: ['Hypocalcemia', 'Diabetic neuropathy', 'Hypoglycemia', 'Addison\'s disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1467,
    question: `A 70-year-old man presents with acute onset of left-sided weakness and slurred speech. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Stroke', 'Parkinson\'s disease', 'Multiple sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1468,
    question: `A patient with acute pancreatitis is most likely to have elevated levels of which enzyme?`,
    options: ['Amylase', 'Lipase', 'Both A and B', 'None of the above'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1469,
    question: `A 50-year-old woman presents with fatigue, jaundice, and elevated liver enzymes. What is the most likely diagnosis?`,
    options: ['Autoimmune hepatitis', 'Hepatitis C', 'Alcoholic liver disease', 'Wilson’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1470,
    question: `A patient presents with jaundice and an enlarged spleen. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Hemolytic anemia', 'Cirrhosis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1471,
    question: `A newborn is noted to have a continuous "machine-like" murmur. What is the most likely diagnosis?`,
    options: ['Coarctation of the aorta', 'Patent ductus arteriosus', 'Atrial septal defect', 'Ventricular septal defect'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1472,
    question: `A newborn presents with jaundice that appears on the second day of life. What is the most likely cause?`,
    options: ['Physiologic jaundice', 'Hemolytic disease of the newborn', 'Biliary atresia', 'Breast milk jaundice'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1473,
    question: `A patient is diagnosed with chronic hepatitis B. What is the primary goal of treatment?`,
    options: ['Cure the infection', 'Prevent liver cancer', 'Eradicate the virus', 'Relieve symptoms'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1474,
    question: `A patient presents with fever, malaise, and a rash that began on the face and spread to the trunk. What is the likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1475,
    question: `A patient with a history of hypertension presents with sudden vision loss. What is the most likely cause?`,
    options: ['Diabetic retinopathy', 'Retinal detachment', 'Central retinal artery occlusion', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1476,
    question: `A patient presents with tachycardia, sweating, tremors, and a feeling of impending doom. What is the most likely diagnosis?`,
    options: ['Panic attack', 'Hypoglycemia', 'Hyperthyroidism', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1477,
    question: `A patient with chronic back pain has morning stiffness that improves throughout the day. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Fibromyalgia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1478,
    question: `A patient presents with severe headache, fever, and neck stiffness. What is the most appropriate initial test?`,
    options: ['CT scan of the head', 'Lumbar puncture', 'MRI of the brain', 'Blood cultures'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1479,
    question: `A 10-year-old child presents with a history of recurrent abdominal pain and a positive family history of celiac disease. What is the most appropriate diagnostic test?`,
    options: ['Endoscopy with biopsy', 'Serum anti-tTG antibodies', 'Stool tests for fat malabsorption', 'CT scan of the abdomen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1480,
    question: `Which of the following is a contraindication for the use of warfarin?`,
    options: ['Pregnancy', 'Chronic kidney disease', 'Atrial fibrillation', 'Deep vein thrombosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1481,
    question: `A child presents with fever, joint pain, and a rash that appears after fever resolution. What is the most likely diagnosis?`,
    options: ['Kawasaki disease', 'Rheumatic fever', 'Viral exanthema', 'Lyme disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1482,
    question: `A 60-year-old man presents with fatigue, night sweats, and splenomegaly. What is the most likely diagnosis?`,
    options: ['Chronic lymphocytic leukemia', 'Hodgkin\'s lymphoma', 'Non-Hodgkin lymphoma', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1483,
    question: `A pregnant woman presents with painless vaginal bleeding at 34 weeks. Fetal heart sounds are normal. The most likely diagnosis is:`,
    options: ['Placenta previa', 'Abruptio placentae', 'Uterine rupture', 'Preterm labor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1484,
    question: `A 25-year-old male presents with fever and a rash on the trunk and limbs. Which infection should be considered?`,
    options: ['Chickenpox', 'Measles', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1485,
    question: `A woman with a history of cesarean section presents with painless vaginal bleeding in the third trimester. The most likely diagnosis is:`,
    options: ['Placental abruption', 'Placenta previa', 'Vasa previa', 'Uterine rupture'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1486,
    question: `What is the most effective preventive measure against cervical cancer?`,
    options: ['Pap smear', 'HPV vaccination', 'Regular pelvic exams', 'Use of condoms'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1487,
    question: `Which of the following conditions is characterized by a "saddle nose" deformity?`,
    options: ['Granulomatosis with polyangiitis', 'Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1488,
    question: `Which of the following is a common cause of nephrotic syndrome in children?`,
    options: ['Minimal change disease', 'Focal segmental glomerulosclerosis', 'Membranoproliferative glomerulonephritis', 'Diabetic nephropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1489,
    question: `A woman presents with amenorrhea and normal secondary sexual characteristics. Most likely diagnosis:`,
    options: ['Turner syndrome', 'Mullerian agenesis', 'PCOS', 'Hypogonadotropic hypogonadism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1490,
    question: `In chronic liver disease, which of the following findings is most likely?`,
    options: ['Hyperalbuminemia', 'Elevated prothrombin time', 'Hypoglycemia', 'Hypercalcemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1491,
    question: `Which of the following is the mainstay treatment for type 2 diabetes mellitus?`,
    options: ['Insulin therapy', 'Metformin', 'Sulfonylureas', 'DPP-4 inhibitors'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1492,
    question: `In children, which vaccine is given at 12-15 months of age?`,
    options: ['MMR (Measles, Mumps, Rubella)', 'DTaP (Diphtheria, Tetanus, Pertussis)', 'IPV (Inactivated Polio Vaccine)', 'Hib (Haemophilus influenzae type b)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1493,
    question: `Which of the following is the hallmark feature of Addison's disease?`,
    options: ['Hyperpigmentation of the skin', 'Hypoglycemia', 'Hypertension', 'Weight gain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1494,
    question: `A patient with a history of myocardial infarction is placed on aspirin therapy. What is the main reason for this treatment?`,
    options: ['To reduce blood pressure', 'To prevent clot formation', 'To lower cholesterol levels', 'To improve myocardial oxygen supply'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1495,
    question: `What is the most common cause of secondary amenorrhea?`,
    options: ['Pregnancy', 'Polycystic ovary syndrome (PCOS)', 'Thyroid disorders', 'Stress'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1496,
    question: `A child presents with fever, rash, and joint pain after receiving the MMR vaccine. This is most likely:`,
    options: ['Anaphylaxis', 'Vaccine-associated adverse event', 'Post-infectious sequelae', 'Immediate hypersensitivity reaction'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1497,
    question: `Which test is most useful for diagnosing myocardial infarction?`,
    options: ['ECG', 'Troponin levels', 'Chest X-ray', 'Stress test'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1498,
    question: `Which laboratory test is used to diagnose diabetes mellitus?`,
    options: ['Serum glucose', 'HbA1c', 'Serum insulin', 'C-peptide'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1499,
    question: `What is the most common cause of hyperthyroidism in adults?`,
    options: ['Hashimoto\'s thyroiditis', 'Toxic multinodular goiter', 'Graves\' disease', 'Thyroid carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1500,
    question: `In which condition would you expect to see "cannonball" metastases on a chest X-ray?`,
    options: ['Breast cancer', 'Lung cancer', 'Renal cell carcinoma', 'Melanoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1501,
    question: `Which of the following is a key feature of Alzheimer's disease?`,
    options: ['Plaques of amyloid beta', 'Deposition of uric acid crystals', 'Degeneration of the basal ganglia', 'Autoimmune destruction of neurons'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1502,
    question: `A 70-year-old male presents with bradycardia and fatigue. What is the most likely cause?`,
    options: ['Hyperthyroidism', 'Myocardial infarction', 'Medications', 'Heart block'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1503,
    question: `A patient with persistent vomiting and metabolic alkalosis may have which condition?`,
    options: ['Diabetic ketoacidosis', 'Bulimia nervosa', 'Renal failure', 'Congestive heart failure'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1504,
    question: `A 45-year-old woman presents with fatigue, weight gain, and cold intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Adrenal insufficiency', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1505,
    question: `A child presents with recurrent episodes of abdominal pain and bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Inflammatory bowel disease', 'Celiac disease', 'Appendicitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1506,
    question: `A 28-year-old man presents with pain and swelling in the scrotum. Ultrasound reveals a fluid-filled sac around the testicle. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Varicocele', 'Testicular torsion', 'Epididymitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1507,
    question: `What is the first-line treatment for hypertension in a pregnant woman?`,
    options: ['ACE inhibitors', 'Beta-blockers', 'Methyldopa', 'Calcium channel blockers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1508,
    question: `A 30-year-old female presents with signs of hyperthyroidism, including heat intolerance and weight loss. What is the most likely diagnosis?`,
    options: ['Graves\' disease', 'Hashimoto\'s thyroiditis', 'Thyroid adenoma', 'Thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1509,
    question: `A patient presents with shortness of breath and wheezing. A peak flow measurement shows a significantly reduced value. What is the most appropriate immediate action?`,
    options: ['Administer oxygen', 'Administer albuterol', 'Perform chest X-ray', 'Start oral corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1510,
    question: `What is the main complication of untreated hypertension?`,
    options: ['Diabetes mellitus', 'Osteoporosis', 'Coronary artery disease', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1511,
    question: `A 55-year-old woman presents with fatigue and weight gain. Laboratory tests show elevated TSH and low T4. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Thyroid storm', 'Thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1512,
    question: `A child presents with fever, rash, and joint pain. Which condition should be considered?`,
    options: ['Rheumatic fever', 'Still\'s disease', 'Viral exanthem', 'Chickenpox'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1513,
    question: `What is the primary cause of cirrhosis in developed countries?`,
    options: ['Alcohol abuse', 'Viral hepatitis', 'Nonalcoholic fatty liver disease', 'Hemochromatosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1514,
    question: `Which antibiotic is the first-line treatment for streptococcal pharyngitis?`,
    options: ['Amoxicillin', 'Penicillin V', 'Azithromycin', 'Clindamycin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1515,
    question: `A patient presents with excessive thirst, frequent urination, and weight loss. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus type 1', 'Diabetes mellitus type 2', 'Hyperthyroidism', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1516,
    question: `In which condition is "cafe-au-lait" spots commonly observed?`,
    options: ['Neurofibromatosis type 1', 'Tuberous sclerosis', 'Von Hippel-Lindau disease', 'Marfan syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1517,
    question: `A 70-year-old male presents with sudden onset of severe chest pain radiating to the left arm. ECG shows ST elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Anterior myocardial infarction', 'Inferior myocardial infarction', 'Aortic dissection', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1518,
    question: `A 45-year-old woman presents with recurrent abdominal pain, diarrhea, and weight loss. What condition should be suspected?`,
    options: ['Crohn\'s disease', 'Irritable bowel syndrome', 'Celiac disease', 'Ulcerative colitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1519,
    question: `The most common cause of primary amenorrhea is:`,
    options: ['Turner syndrome', 'Mullerian agenesis', 'Androgen insensitivity syndrome', 'Hypothyroidism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1520,
    question: `A 60-year-old male smoker presents with a persistent cough and hemoptysis. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1521,
    question: `Which of the following is used as a rescue agent during methotrexate therapy?`,
    options: ['Leucovorin', 'Atropine', 'N-acetylcysteine', 'Mesna'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1522,
    question: `The most common cause of maternal death worldwide is:`,
    options: ['Sepsis', 'Hypertension', 'Hemorrhage', 'Anemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1523,
    question: `A 70-year-old man presents with sudden onset of severe headache. What is the most likely diagnosis?`,
    options: ['Tension headache', 'Cluster headache', 'Subarachnoid hemorrhage', 'Migraine'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1524,
    question: `The most common malignant ovarian tumor in women under 30 is:`,
    options: ['Dysgerminoma', 'Granulosa cell tumor', 'Serous cystadenocarcinoma', 'Mucinous cystadenocarcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1525,
    question: `A woman presents with foul-smelling lochia, fever, and uterine tenderness on day 3 postpartum. The causative organism is most commonly:`,
    options: ['E. coli', 'Staphylococcus aureus', 'Streptococcus pyogenes', 'Clostridium perfringens'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1526,
    question: `A 65-year-old woman with a history of hypertension presents with sudden, severe tearing chest pain radiating to her back. What is the most likely diagnosis?`,
    options: ['Acute myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1527,
    question: `In patients with hypertension, which class of medication is often considered first-line therapy?`,
    options: ['Beta-blockers', 'Calcium channel blockers', 'Angiotensin-converting enzyme inhibitors', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1528,
    question: `What is the most common cause of neonatal sepsis in the first week of life?`,
    options: ['Streptococcus pneumoniae', 'Escherichia coli', 'Group B Streptococcus', 'Listeria monocytogenes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1529,
    question: `A patient presents with fatigue, pallor, and jaundice. A blood smear shows spherocytes. What is the most likely diagnosis?`,
    options: ['Hereditary spherocytosis', 'Thalassemia', 'Sickle cell anemia', 'Autoimmune hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1530,
    question: `A 45-year-old male presents with a persistent cough and weight loss. A chest X-ray shows a mass in the lung. What is the most appropriate next step?`,
    options: ['CT scan of the chest', 'Sputum culture', 'Bronchoscopy', 'Chest ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1531,
    question: `Which of the following is a classic sign of Cushing's syndrome?`,
    options: ['Moon facies', 'Weight loss', 'Hyperpigmentation', 'Hypotension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1532,
    question: `A 70-year-old female presents with hip pain after a fall. X-rays reveal a fractured neck of femur. What type of fracture is this classified as?`,
    options: ['Simple fracture', 'Comminuted fracture', 'Intracapsular fracture', 'Extracapsular fracture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1533,
    question: `A 60-year-old male with a history of chronic obstructive pulmonary disease (COPD) presents with increasing shortness of breath and cough with purulent sputum. What is the most likely diagnosis?`,
    options: ['Acute exacerbation of COPD', 'Pneumonia', 'Pulmonary embolism', 'Heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1534,
    question: `A 12-year-old child presents with a high fever and swollen, painful joints. What condition should be suspected?`,
    options: ['Rheumatic fever', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus', 'Viral arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1535,
    question: `Which of the following conditions is indicated by a positive Tzanck smear?`,
    options: ['Herpes simplex virus infection', 'Varicella-zoster virus infection', 'Cytomegalovirus infection', 'Human papillomavirus infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1536,
    question: `A patient presents with jaundice, pruritus, and a history of alcohol abuse. What is the most likely diagnosis?`,
    options: ['Cirrhosis', 'Hepatitis A', 'Gallstones', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1537,
    question: `A patient with a family history of breast cancer undergoes genetic testing. What gene mutation is most commonly associated with hereditary breast cancer?`,
    options: ['BRCA1', 'TP53', 'PTEN', 'MLH1'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1538,
    question: `In which of the following conditions is the "bradykinin" pathway most significantly involved?`,
    options: ['Anaphylaxis', 'Angioedema', 'Asthma', 'Diabetes mellitus'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1539,
    question: `Which imaging modality is preferred for diagnosing gallstones?`,
    options: ['X-ray', 'CT scan', 'Ultrasound', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1540,
    question: `In an infant with pyloric stenosis, what electrolyte abnormality is typically seen?`,
    options: ['Hypokalemia and hypochloremic metabolic alkalosis', 'Hyperkalemia and metabolic acidosis', 'Hypernatremia and hyperkalemia', 'Hyponatremia and metabolic acidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1541,
    question: `Which of the following drugs is commonly used for induction of anesthesia?`,
    options: ['Propofol', 'Ketamine', 'Thiopental sodium', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1542,
    question: `A patient presents with difficulty swallowing and a sensation of food stuck in the throat. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Gastroesophageal reflux disease', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1543,
    question: `A patient presents with persistent cough and weight loss. Chest X-ray reveals a cavitary lesion in the upper lobe. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Sarcoidosis', 'Coccidioidomycosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1544,
    question: `A patient with a history of gout presents with a painful, swollen big toe. What is the most likely cause?`,
    options: ['Septic arthritis', 'Pseudogout', 'Gout flare', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1545,
    question: `A patient presents with a butterfly rash and joint pain. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Systemic lupus erythematosus', 'Dermatomyositis', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1546,
    question: `The most common cause of end-stage renal disease in the United States is:`,
    options: ['Hypertension', 'Diabetes mellitus', 'Polycystic kidney disease', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1547,
    question: `A patient presents with difficulty swallowing, regurgitation of undigested food, and halitosis. What is the most likely diagnosis?`,
    options: ['Zenker’s diverticulum', 'Achalasia', 'Esophageal stricture', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1548,
    question: `Which type of hypersensitivity reaction is associated with allergic reactions?`,
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1549,
    question: `A 45-year-old female presents with irregular menstrual cycles, hirsutism, and acne. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Endometriosis', 'Ovarian cancer', 'Hyperprolactinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1550,
    question: `A child presents with a barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1551,
    question: `A 50-year-old woman presents with a breast mass. A biopsy shows invasive ductal carcinoma. What is the most appropriate initial management?`,
    options: ['Chemotherapy', 'Surgery', 'Radiation therapy', 'Hormonal therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1552,
    question: `A 40-year-old male presents with chest pain that worsens with deep breathing and is relieved by sitting forward. What is the most likely diagnosis?`,
    options: ['Pericarditis', 'Myocardial infarction', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1553,
    question: `A patient presents with acute abdominal pain, and a CT scan shows a "target sign" indicating intussusception. What is the most likely clinical presentation?`,
    options: ['Sudden onset of abdominal pain', 'Gradual onset of abdominal pain', 'Abdominal distension', 'Diarrhea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1554,
    question: `A 2-year-old child presents with a barking cough, inspiratory stridor, and hoarseness. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Croup', 'Foreign body aspiration', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1555,
    question: `A 50-year-old female presents with jaundice, dark urine, and an elevated alkaline phosphatase level. What is the most likely diagnosis?`,
    options: ['Cholestasis', 'Hepatitis', 'Cirrhosis', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1556,
    question: `What is the most common cause of chronic cough in adults?`,
    options: ['Asthma', 'Gastroesophageal reflux disease (GERD)', 'Chronic bronchitis', 'Post-nasal drip'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1557,
    question: `Which type of anemia is characterized by microcytic hypochromic red blood cells?`,
    options: ['Aplastic anemia', 'Iron deficiency anemia', 'Sickle cell anemia', 'Megaloblastic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1558,
    question: `A 50-year-old woman presents with a lump in her breast and discharge from the nipple. What is the most appropriate next step in management?`,
    options: ['Breast ultrasound', 'Mammogram', 'Fine needle aspiration', 'Surgical biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1559,
    question: `The mainstay of treatment for a hyperglycemic crisis in diabetes is:`,
    options: ['Oral hypoglycemics', 'Insulin therapy', 'Lifestyle modification', 'Dietary changes'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1560,
    question: `The most appropriate initial treatment for a patient with anaphylaxis is:`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1561,
    question: `In which condition is the “string of pearls” appearance seen on imaging?`,
    options: ['Intussusception', 'Ovarian cyst', 'Ectopic pregnancy', 'Hydrosalpinx'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1562,
    question: `A 30-year-old woman presents with symptoms of anxiety, tremors, and palpitations. What is the most appropriate test to diagnose hyperthyroidism?`,
    options: ['Serum TSH', 'Serum free T4', 'Serum T3', 'Thyroid scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1563,
    question: `A patient presents with abdominal pain, diarrhea, and a history of recent antibiotic use. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Clostridium difficile infection', 'Crohn\'s disease', 'Ulcerative colitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1564,
    question: `A patient with a history of asthma presents with difficulty breathing after exposure to a known allergen. What is the immediate treatment?`,
    options: ['Intravenous corticosteroids', 'Inhaled bronchodilator', 'Oral antihistamines', 'Oxygen therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1565,
    question: `A 30-year-old woman presents with acute lower abdominal pain and nausea. Ultrasound reveals a twisted ovary with enlarged edematous ovary. The immediate management is:`,
    options: ['Observation', 'Laparoscopic detorsion', 'Antibiotics', 'Hormonal therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1566,
    question: `The most common presenting symptom of carcinoma cervix in early stages is:`,
    options: ['Pelvic pain', 'Postcoital bleeding', 'Dysmenorrhea', 'Vaginal discharge only'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1567,
    question: `A woman presents with cyclic pelvic pain and chocolate-colored ovarian cyst. Diagnosis is:`,
    options: ['Endometrioma', 'Dermoid cyst', 'Serous cystadenoma', 'Follicular cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1568,
    question: `The first-line treatment for uncomplicated hypertension in the general population is:`,
    options: ['Diuretics', 'ACE inhibitors', 'Calcium channel blockers', 'Lifestyle modifications'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1569,
    question: `A patient with chronic kidney disease presents with anemia. What is the most appropriate treatment?`,
    options: ['Iron supplements', 'Erythropoiesis-stimulating agents', 'Blood transfusion', 'Vitamin B12 injections'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1570,
    question: `Which of the following conditions can lead to a "silent" myocardial infarction?`,
    options: ['Uncontrolled hypertension', 'Diabetic neuropathy', 'Hyperlipidemia', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1571,
    question: `A patient presents with hematuria and flank pain. Which condition should be suspected?`,
    options: ['Pyelonephritis', 'Renal stones', 'Bladder cancer', 'Glomerulonephritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1572,
    question: `A woman presents with uterine size larger than dates and very high beta-hCG. Diagnosis is:`,
    options: ['Multiple pregnancy', 'Hydatidiform mole', 'Polyhydramnios', 'Placenta previa'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1573,
    question: `Which of the following is most commonly associated with aortic dissection?`,
    options: ['Hypertension', 'Marfan syndrome', 'Atherosclerosis', 'Hypercholesterolemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1574,
    question: `Which of the following is a hallmark sign of liver cirrhosis?`,
    options: ['Ascites', 'Hematuria', 'Polyuria', 'Flushing'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1575,
    question: `Which of the following is a typical symptom of Graves' disease?`,
    options: ['Weight gain', 'Hypotension', 'Exophthalmos', 'Cold intolerance'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1576,
    question: `A 30-year-old woman presents with sudden onset of palpitations, anxiety, and tremors. What is the most likely cause?`,
    options: ['Hyperthyroidism', 'Panic attack', 'Pheochromocytoma', 'Hypoglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1577,
    question: `A child presents with recurrent respiratory infections and failure to thrive. What should be suspected?`,
    options: ['Cystic fibrosis', 'Asthma', 'Bronchitis', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1578,
    question: `The classic triad of symptoms for polycythemia vera includes:`,
    options: ['Headaches, dizziness, and visual disturbances', 'Fatigue, pallor, and shortness of breath', 'Jaundice, pruritus, and ascites', 'Fever, chills, and night sweats'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1579,
    question: `Which of the following is the most common type of skin cancer?`,
    options: ['Melanoma', 'Basal cell carcinoma', 'Squamous cell carcinoma', 'Merkel cell carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1580,
    question: `A patient with renal failure develops uremic frost. What does this indicate?`,
    options: ['Severe dehydration', 'Increased urea levels', 'Infection', 'Electrolyte imbalance'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1581,
    question: `Which of the following is the most common cause of peptic ulcer disease?`,
    options: ['Helicobacter pylori infection', 'NSAID use', 'Zollinger-Ellison syndrome', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1582,
    question: `The "tug test" is commonly used to assess which condition in infants?`,
    options: ['Congenital hip dislocation', 'Cerebral palsy', 'Spina bifida', 'Down syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1583,
    question: `The best screening test for colorectal cancer is:`,
    options: ['Fecal occult blood test', 'Colonoscopy', 'Barium enema', 'CT colonography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1584,
    question: `Which of the following is a contraindication to the use of ACE inhibitors?`,
    options: ['Hypertension', 'Hyperkalemia', 'Diabetes mellitus', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1585,
    question: `A patient presents with palpitations, tremors, and hyperreflexia. Thyroid function tests reveal elevated TSH and low free T4. What is the most likely diagnosis?`,
    options: ['Secondary hypothyroidism', 'Primary hyperthyroidism', 'Secondary hyperthyroidism', 'Primary hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1586,
    question: `A 22-year-old woman presents with lower abdominal pain and fever 10 days after normal vaginal delivery. The most likely diagnosis is:`,
    options: ['Urinary tract infection', 'Endometritis', 'Mastitis', 'Septic pelvic thrombophlebitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1587,
    question: `In which of the following conditions is the "moon face" appearance typically observed?`,
    options: ['Cushing\'s syndrome', 'Addison\'s disease', 'Acromegaly', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1588,
    question: `A patient presents with an acute onset of unilateral facial weakness. What is the most likely diagnosis?`,
    options: ['Stroke', 'Bell\'s palsy', 'Multiple sclerosis', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1589,
    question: `A patient presents with a sudden onset of severe chest pain radiating to the back. An ECG shows ST-segment elevation. What is the most likely diagnosis?`,
    options: ['Aortic dissection', 'Myocardial infarction', 'Pulmonary embolism', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1590,
    question: `A patient presents with a high fever and severe headache, and lumbar puncture shows cloudy cerebrospinal fluid. What is the most likely diagnosis?`,
    options: ['Bacterial meningitis', 'Viral meningitis', 'Tuberculous meningitis', 'Fungal meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1591,
    question: `Which test is used to diagnose diabetes mellitus?`,
    options: ['Random blood glucose', 'Oral glucose tolerance test', 'Fasting blood glucose', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1592,
    question: `A young male presents with recurrent episodes of severe abdominal pain and a family history of similar symptoms. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Familial Mediterranean fever', 'Irritable bowel syndrome', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1593,
    question: `A 35-year-old female presents with fatigue, pallor, and a smooth, red tongue. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Folate deficiency', 'Aplastic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1594,
    question: `A newborn is diagnosed with congenital hip dislocation. What is the most appropriate initial management?`,
    options: ['Surgery', 'Pavlik harness', 'Hip spica cast', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1595,
    question: `What is the primary cause of septic shock?`,
    options: ['Cardiogenic failure', 'Hypovolemic failure', 'Systemic infection', 'Neurogenic failure'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1596,
    question: `A patient with a history of alcohol abuse presents with confusion, ataxia, and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1597,
    question: `A patient presents with fatigue, dyspnea, and a dry, nonproductive cough. A chest X-ray reveals bilateral hilar lymphadenopathy. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Lung cancer', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1598,
    question: `A patient presents with fever and a skin rash after starting a new medication. What is the most likely diagnosis?`,
    options: ['Drug eruption', 'Viral exanthem', 'Bacterial infection', 'Autoimmune disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1599,
    question: `A 60-year-old female presents with worsening shortness of breath, a history of chronic bronchitis, and is currently using a cane. What is the most likely diagnosis?`,
    options: ['Asthma', 'Congestive heart failure', 'Chronic obstructive pulmonary disease (COPD)', 'Pulmonary fibrosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1600,
    question: `Which of the following conditions is associated with a high risk of developing esophageal cancer?`,
    options: ['Barrett\'s esophagus', 'Gastroesophageal reflux disease (GERD)', 'Achalasia', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1601,
    question: `A 7-year-old boy presents with a swollen knee following a minor fall. He has a history of easy bruising and prolonged bleeding after tooth extractions. What is the most likely diagnosis?`,
    options: ['Hemophilia', 'Von Willebrand disease', 'Idiopathic thrombocytopenic purpura (ITP)', 'Henoch-Schönlein purpura'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1602,
    question: `A patient with a history of heart failure presents with sudden onset shortness of breath. What condition should be suspected?`,
    options: ['Pulmonary embolism', 'Congestive heart failure exacerbation', 'Pneumonia', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1603,
    question: `A patient with rheumatoid arthritis is likely to have which of the following laboratory findings?`,
    options: ['Elevated hemoglobin', 'Positive rheumatoid factor', 'Decreased C-reactive protein', 'Elevated platelet count'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1604,
    question: `A 7-year-old child presents with acute onset of abdominal pain, vomiting, and a red currant jelly stool. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Volvulus', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1605,
    question: `A 60-year-old man presents with fatigue and a history of heavy alcohol use. Blood tests reveal macrocytic anemia. What is the most likely cause?`,
    options: ['Folate deficiency', 'Vitamin B12 deficiency', 'Alcoholic liver disease', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1606,
    question: `The most reliable sign of placental separation is:`,
    options: ['Sudden gush of blood', 'Uterus becomes globular and firm', 'Lengthening of umbilical cord', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1607,
    question: `Which laboratory finding is characteristic of diabetes insipidus?`,
    options: ['Low serum osmolality', 'Low urine osmolality', 'High urine specific gravity', 'High serum glucose'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1608,
    question: `A patient with myasthenia gravis is at risk for which of the following?`,
    options: ['Thymoma', 'Hashimoto’s thyroiditis', 'Graves\' disease', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1609,
    question: `Which of the following medications is used to treat anaphylaxis?`,
    options: ['Diphenhydramine', 'Loratadine', 'Epinephrine', 'Prednisone'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1610,
    question: `What is the most common cause of acute viral hepatitis?`,
    options: ['Hepatitis A virus', 'Hepatitis B virus', 'Hepatitis C virus', 'Hepatitis E virus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1611,
    question: `A patient presents with a butterfly rash on the face, joint pain, and fever. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1612,
    question: `A 40-year-old woman presents with multiple red, scaly plaques on her elbows and knees. What is the most likely diagnosis?`,
    options: ['Eczema', 'Psoriasis', 'Lichen planus', 'Seborrheic dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1613,
    question: `A patient with chronic kidney disease is likely to have which of the following abnormalities?`,
    options: ['Hyperkalemia', 'Hypercalcemia', 'Hypophosphatemia', 'Hyponatremia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1614,
    question: `A newborn with a harsh holosystolic murmur best heard at the left lower sternal border most likely has:`,
    options: ['Atrial septal defect', 'Ventricular septal defect', 'Tetralogy of Fallot', 'Patent ductus arteriosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1615,
    question: `Which of the following conditions is characterized by the presence of "epithelial pearls" on histology?`,
    options: ['Squamous cell carcinoma', 'Adenocarcinoma', 'Basal cell carcinoma', 'Melanoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1616,
    question: `In patients with acute renal failure, the first-line imaging modality is:`,
    options: ['MRI', 'Ultrasound', 'CT scan', 'X-ray'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1617,
    question: `A 70-year-old man presents with back pain and elevated alkaline phosphatase levels. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Osteosarcoma', 'Paget\'s disease of bone', 'Multiple myeloma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1618,
    question: `The most common cause of abortion in the first trimester is:`,
    options: ['Maternal infection', 'Chromosomal abnormalities', 'Hormonal imbalance', 'Trauma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1619,
    question: `Which condition is characterized by a "barking" cough in children?`,
    options: ['Asthma', 'Croup', 'Bronchiolitis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1620,
    question: `A neonate presents with a scaphoid abdomen and respiratory distress. What is the most likely diagnosis?`,
    options: ['Pyloric stenosis', 'Duodenal atresia', 'Diaphragmatic hernia', 'Hirschsprung disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1621,
    question: `A child presents with recurrent infections and a history of failure to thrive. Blood tests show low immunoglobulin levels. What is the most likely diagnosis?`,
    options: ['Primary immunodeficiency', 'HIV infection', 'Leukemia', 'Lymphoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1622,
    question: `The drug of choice for the treatment of chronic obstructive pulmonary disease (COPD) is:`,
    options: ['Albuterol', 'Theophylline', 'Ipratropium', 'Prednisone'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1623,
    question: `A 70-year-old man presents with worsening shortness of breath and peripheral edema. What is the most likely diagnosis?`,
    options: ['Congestive heart failure', 'Chronic obstructive pulmonary disease', 'Pneumonia', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1624,
    question: `Which of the following is the preferred imaging modality for diagnosing acute appendicitis in pregnant women?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1625,
    question: `Which of the following is the most common complication of chronic otitis media?`,
    options: ['Mastoiditis', 'Meningitis', 'Cholesteatoma', 'Labyrinthitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1626,
    question: `In a patient with suspected appendicitis, which sign is most indicative?`,
    options: ['Murphy\'s sign', 'McBurney\'s point tenderness', 'Psoas sign', 'Carnett\'s sign'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1627,
    question: `Which imaging technique is most effective for diagnosing gallstones?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1628,
    question: `In anaphylaxis, the first-line treatment is:`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1629,
    question: `A patient presents with fever, night sweats, and weight loss. Which condition should be considered first?`,
    options: ['Tuberculosis', 'Lymphoma', 'HIV/AIDS', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1630,
    question: `The primary cause of adrenal insufficiency in developed countries is:`,
    options: ['Tuberculosis', 'Autoimmune adrenalitis', 'Metastatic cancer', 'Hemorrhage'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1631,
    question: `In which condition would you expect to find "tapered" or "dental" appearance of the esophagus on X-ray?`,
    options: ['Achalasia', 'Esophageal varices', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1632,
    question: `A patient presents with recurrent episodes of chest pain that occur at rest and are relieved by nitroglycerin. What is the most likely diagnosis?`,
    options: ['Stable angina', 'Unstable angina', 'Myocardial infarction', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1633,
    question: `Which of the following is a classic finding in patients with systemic lupus erythematosus (SLE)?`,
    options: ['Malar rash', 'Erythema nodosum', 'Psoriatic lesions', 'Herpetiform lesions'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1634,
    question: `A 40-year-old male presents with a painful, swollen knee after twisting it during a soccer game. Physical exam reveals a positive Lachman test. What structure is most likely injured?`,
    options: ['Medial collateral ligament (MCL)', 'Anterior cruciate ligament (ACL)', 'Lateral meniscus', 'Posterior cruciate ligament (PCL)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1635,
    question: `What is the first-line treatment for acute coronary syndrome (ACS)?`,
    options: ['Calcium channel blockers', 'Beta-blockers', 'Aspirin and nitroglycerin', 'ACE inhibitors'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1636,
    question: `The presence of anti-double-stranded DNA antibodies is highly suggestive of which condition?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Scleroderma', 'Sjögren\'s syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1637,
    question: `A 58-year-old female presents with back pain, and a bone scan reveals multiple lesions. What is the most likely diagnosis?`,
    options: ['Osteosarcoma', 'Metastatic cancer', 'Osteoporosis', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1638,
    question: `A child is brought to the clinic with a rash, fever, and sore throat. What is the most likely diagnosis?`,
    options: ['Chickenpox', 'Scarlet fever', 'Measles', 'Rubella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1639,
    question: `A patient presents with severe headache, nausea, and neck stiffness. What is the most likely diagnosis?`,
    options: ['Migraine', 'Meningitis', 'Tension headache', 'Subarachnoid hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1640,
    question: `Which of the following is a common side effect of long-term corticosteroid use?`,
    options: ['Weight loss', 'Osteoporosis', 'Hypoglycemia', 'Hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1641,
    question: `A 6-month-old infant presents with vomiting, lethargy, and failure to thrive. What is the most likely diagnosis?`,
    options: ['Pyloric stenosis', 'Gastroesophageal reflux', 'Intestinal obstruction', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1642,
    question: `A 50-year-old male smoker presents with hemoptysis and weight loss. A chest X-ray reveals a central lung mass. Which of the following is the most likely diagnosis?`,
    options: ['Adenocarcinoma', 'Small cell carcinoma', 'Large cell carcinoma', 'Squamous cell carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1643,
    question: `Which imaging technique is most useful for assessing gallbladder disease?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1644,
    question: `What is the most likely complication of untreated otitis media?`,
    options: ['Mastoiditis', 'Sinusitis', 'Meningitis', 'Encephalitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1645,
    question: `What is the drug of choice for the prophylaxis of tuberculosis in HIV patients?`,
    options: ['Isoniazid', 'Rifampin', 'Ethambutol', 'Pyrazinamide'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1646,
    question: `What is the most common presenting symptom of prostate cancer?`,
    options: ['Hematuria', 'Urinary retention', 'Bone pain', 'Dysuria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1647,
    question: `A patient with a history of deep vein thrombosis is started on warfarin. What is the most important laboratory test to monitor?`,
    options: ['Prothrombin time (PT)', 'Partial thromboplastin time (PTT)', 'Platelet count', 'Fibrinogen level'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1648,
    question: `A patient with diabetes presents with a foot ulcer. Which type of ulcer is most commonly seen in diabetic patients?`,
    options: ['Venous ulcer', 'Arterial ulcer', 'Neuropathic ulcer', 'Pressure ulcer'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1649,
    question: `A 30-year-old female presents with fatigue, palpitations, and a goiter. Thyroid function tests show low TSH and high T3 and T4. What is the most likely diagnosis?`,
    options: ['Hashimoto\'s thyroiditis', 'Thyroid storm', 'Graves\' disease', 'Subacute thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1650,
    question: `A patient with a history of asthma presents with wheezing and shortness of breath after exposure to a known allergen. What is the first-line treatment?`,
    options: ['Oral corticosteroids', 'Inhaled corticosteroids', 'Short-acting beta agonists', 'Long-acting beta agonists'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1651,
    question: `Which test is used to evaluate for congestive heart failure?`,
    options: ['BNP (B-type natriuretic peptide)', 'Troponin', 'ECG', 'Chest X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1652,
    question: `Which medication is a common treatment for asthma?`,
    options: ['Metformin', 'Albuterol', 'Lisinopril', 'Furosemide'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1653,
    question: `A patient presents with flushing, diarrhea, and wheezing. What is the most likely diagnosis?`,
    options: ['Carcinoid syndrome', 'Anaphylaxis', 'Pheochromocytoma', 'Mastocytosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1654,
    question: `A patient with a history of chronic headaches presents with a new onset of double vision. What is the most appropriate next step?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Lumbar puncture', 'Referral to a neurologist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1655,
    question: `Which of the following is a common side effect of statin medications?`,
    options: ['Hypokalemia', 'Myopathy', 'Hepatotoxicity', 'Hyperglycemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1656,
    question: `A patient presents with a swollen, painful knee. What is the most appropriate initial diagnostic test?`,
    options: ['MRI', 'X-ray', 'Ultrasound', 'Joint aspiration'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1657,
    question: `A child presents with frequent headaches and vomiting. A CT scan shows increased intracranial pressure. What is the most likely diagnosis?`,
    options: ['Brain tumor', 'Hydrocephalus', 'Meningitis', 'Encephalitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1658,
    question: `A 50-year-old woman with a history of smoking presents with a persistent cough and chest pain. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1659,
    question: `What is the most common type of dementia?`,
    options: ['Vascular dementia', 'Lewy body dementia', 'Alzheimer\'s disease', 'Frontotemporal dementia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1660,
    question: `What is the most common cause of hypothyroidism in developed countries?`,
    options: ['Iodine deficiency', 'Hashimoto\'s thyroiditis', 'Thyroidectomy', 'Radiation exposure'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1661,
    question: `A patient with a history of gout presents with severe pain in the great toe after eating a high-purine meal. What is the most appropriate initial treatment?`,
    options: ['Colchicine', 'Allopurinol', 'Indomethacin', 'Corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1662,
    question: `Which of the following tests is used to confirm the diagnosis of tuberculosis?`,
    options: ['Chest X-ray', 'Sputum culture', 'Mantoux test', 'CT scan'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1663,
    question: `What is the ideal depth of chest compressions in adult CPR?`,
    options: ['2 cm', '5 cm', '3 cm', '7 cm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1664,
    question: `A 75-year-old female presents with sudden vision loss in one eye. Fundoscopic examination reveals a pale retina with a cherry-red spot at the fovea. What is the most likely diagnosis?`,
    options: ['Central retinal artery occlusion', 'Retinal detachment', 'Vitreous hemorrhage', 'Macular degeneration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1665,
    question: `The drug of choice for treating trigeminal neuralgia is:`,
    options: ['Gabapentin', 'Carbamazepine', 'Phenytoin', 'Amitriptyline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1666,
    question: `A patient presents with joint pain, stiffness, and a history of recent infection. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Reactive arthritis', 'Gout'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1667,
    question: `A 50-year-old woman presents with fatigue, palpitations, and weight loss. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Anemia', 'Diabetes mellitus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1668,
    question: `A 55-year-old male presents with dysphagia, regurgitation, and halitosis. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal cancer', 'Gastroesophageal reflux disease', 'Barrett\'s esophagus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1669,
    question: `Which of the following is the most common primary malignant tumor of the liver?`,
    options: ['Hepatocellular carcinoma', 'Cholangiocarcinoma', 'Hepatic adenoma', 'Metastatic colon cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1670,
    question: `A pregnant woman at term presents with absent fetal heart sounds. The most likely cause is:`,
    options: ['Placenta previa', 'Fetal demise', 'Cord prolapse', 'PROM'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1671,
    question: `A patient with a long history of smoking presents with hemoptysis and weight loss. A chest X-ray shows a mass in the right lung. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Pneumonia', 'Lung cancer', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1672,
    question: `A 50-year-old male presents with chest pain and ST elevation on ECG. What is the likely diagnosis?`,
    options: ['Unstable angina', 'Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1673,
    question: `What is the primary treatment for chronic obstructive pulmonary disease (COPD) exacerbations?`,
    options: ['Antibiotics', 'Corticosteroids', 'Long-acting bronchodilators', 'Oxygen therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1674,
    question: `A 30-year-old woman presents with abdominal bloating, diarrhea, and weight loss. What is the most likely diagnosis?`,
    options: ['Lactose intolerance', 'Celiac disease', 'Irritable bowel syndrome', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1675,
    question: `Which vaccine is contraindicated in immunocompromised patients?`,
    options: ['Hepatitis B vaccine', 'Oral polio vaccine (OPV)', 'Influenza vaccine', 'Tetanus toxoid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1676,
    question: `A young woman presents with severe pelvic pain and heavy menstrual bleeding. What is the most likely diagnosis?`,
    options: ['Ovarian torsion', 'Uterine fibroids', 'Endometriosis', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1677,
    question: `A patient presents with a history of binge drinking and presents with confusion and ataxia. What is the most appropriate treatment?`,
    options: ['Thiamine supplementation', 'Benzodiazepines', 'Haloperidol', 'Naloxone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1678,
    question: `Which of the following is the main action of calcium channel blockers?`,
    options: ['Decrease heart rate', 'Increase cardiac contractility', 'Increase peripheral resistance', 'Decrease peripheral resistance'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1679,
    question: `A patient presents with palpitations and anxiety. An electrocardiogram shows atrial fibrillation. What is the first-line treatment?`,
    options: ['Calcium channel blockers', 'Beta-blockers', 'Anticoagulation', 'Digoxin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1680,
    question: `Which type of cancer is most commonly associated with smoking?`,
    options: ['Breast cancer', 'Lung cancer', 'Colorectal cancer', 'Prostate cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1681,
    question: `A patient with a history of chronic renal failure presents with bone pain and weakness. What is the most likely cause?`,
    options: ['Osteoporosis', 'Osteomalacia', 'Osteitis fibrosa', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1682,
    question: `A woman in her third trimester of pregnancy presents with severe hypertension and proteinuria. What is the most likely diagnosis?`,
    options: ['Gestational hypertension', 'Preeclampsia', 'Eclampsia', 'Chronic hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1683,
    question: `A 25-year-old woman with a history of heavy menstrual bleeding presents with pallor and fatigue. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Sickle cell disease', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1684,
    question: `Which condition is characterized by the accumulation of fluid in the abdominal cavity?`,
    options: ['Ascites', 'Edema', 'Lymphedema', 'Anasarca'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1685,
    question: `A 25-year-old female presents with fatigue, pallor, and a blood smear showing microcytic hypochromic anemia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Sideroblastic anemia', 'Anemia of chronic disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1686,
    question: `A patient presents with a painful, swollen joint after a recent travel history. What is the most likely diagnosis?`,
    options: ['Gout', 'Reactive arthritis', 'Septic arthritis', 'Osteoarthritis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1687,
    question: `A patient with a history of HIV presents with fever, cough, and a chest X-ray showing bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Pneumocystis pneumonia', 'Bacterial pneumonia', 'Fungal pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1688,
    question: `A woman presents with infertility and repeated early miscarriages. The most likely cause is:`,
    options: ['Hormonal imbalance', 'Tubal factor', 'Chromosomal abnormality', 'Cervical factor'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1689,
    question: `Which of the following antihypertensive drugs is contraindicated in pregnancy?`,
    options: ['Labetalol', 'Methyldopa', 'ACE inhibitors', 'Hydralazine'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1690,
    question: `A patient presents with sudden onset of severe headache described as "thunderclap." What condition should be suspected?`,
    options: ['Tension headache', 'Migraine', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1691,
    question: `A 2-year-old child presents with fever, irritability, and a rash that started on the face and spread to the body. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1692,
    question: `Which of the following is the most common site of ectopic pregnancy?`,
    options: ['Ovary', 'Cervix', 'Ampulla of the fallopian tube', 'Peritoneum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1693,
    question: `A newborn has a harsh systolic murmur at the lower left sternal border. Echocardiogram shows a defect in the interventricular septum. What is the diagnosis?`,
    options: ['Patent ductus arteriosus', 'Atrial septal defect', 'Ventricular septal defect', 'Tetralogy of Fallot'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1694,
    question: `What is the treatment of choice for an acute gout attack?`,
    options: ['Colchicine', 'Allopurinol', 'NSAIDs', 'Corticosteroids'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1695,
    question: `The most common cause of acute kidney injury (AKI) in hospitalized patients is:`,
    options: ['Hypovolemia', 'Drug-induced nephrotoxicity', 'Sepsis', 'Heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1696,
    question: `A 5-year-old child is brought in with a barking cough, stridor, and hoarseness. X-ray reveals the classic "steeple sign." What is the likely diagnosis?`,
    options: ['Croup', 'Epiglottitis', 'Bronchitis', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1697,
    question: `A patient presents with fever, headache, photophobia, and a stiff neck. What is the most likely diagnosis?`,
    options: ['Meningitis', 'Encephalitis', 'Subarachnoid hemorrhage', 'Tension headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1698,
    question: `A child with a family history of allergies presents with itchy, red, and scaly patches on the skin. What is the most likely diagnosis?`,
    options: ['Eczema', 'Psoriasis', 'Contact dermatitis', 'Impetigo'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1699,
    question: `A 45-year-old woman presents with a sudden onset of severe headache, nausea, and photophobia. CT scan shows subarachnoid hemorrhage. What is the most likely cause?`,
    options: ['Trauma', 'Aneurysm rupture', 'Arteriovenous malformation', 'Hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1700,
    question: `Which imaging study is best for diagnosing pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'MRI of the chest', 'Ultrasound of the legs'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1701,
    question: `A 45-year-old woman presents with a breast lump and lymphadenopathy. A biopsy shows malignant cells. What is the most likely type of cancer?`,
    options: ['Ductal carcinoma', 'Lobular carcinoma', 'Inflammatory breast cancer', 'Medullary carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1702,
    question: `What is the primary cause of neonatal respiratory distress syndrome?`,
    options: ['Meconium aspiration', 'Surfactant deficiency', 'Pneumonia', 'Congenital heart disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1703,
    question: `A patient presents with confusion, ataxia, and ophthalmoplegia after binge drinking. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Delirium tremens', 'Alcohol withdrawal syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1704,
    question: `Which of the following is used to diagnose cystic fibrosis?`,
    options: ['Blood culture', 'Sweat chloride test', 'Pulmonary function test', 'Stool analysis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1705,
    question: `Which medication is used as a first-line treatment for severe allergic reactions (anaphylaxis)?`,
    options: ['Diphenhydramine', 'Epinephrine', 'Prednisone', 'Albuterol'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1706,
    question: `The presence of "Kussmaul's sign" is indicative of which condition?`,
    options: ['Cardiac tamponade', 'Constrictive pericarditis', 'Heart failure', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1707,
    question: `Which of the following is a common clinical feature of Cushing's syndrome?`,
    options: ['Weight loss', 'Moon facies', 'Hypoglycemia', 'Hyperpigmentation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1708,
    question: `Which of the following is the gold standard diagnostic test for pulmonary embolism?`,
    options: ['Chest X-ray', 'D-dimer test', 'CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1709,
    question: `A 55-year-old female presents with abdominal pain, weight loss, and jaundice. What is the most likely diagnosis?`,
    options: ['Gallstones', 'Pancreatic cancer', 'Chronic pancreatitis', 'Hepatocellular carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1710,
    question: `A patient with a history of heart failure presents with increasing shortness of breath. What is the most appropriate management step?`,
    options: ['Administer diuretics', 'Start beta-blockers', 'Increase ACE inhibitors', 'Refer to cardiology'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1711,
    question: `A child with a fever, cough, and difficulty breathing is diagnosed with pneumonia. What is the most common causative organism in this age group?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae', 'Staphylococcus aureus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1712,
    question: `A 50-year-old female presents with flushing, diarrhea, and wheezing. What is the most likely cause?`,
    options: ['Carcinoid syndrome', 'Menopause', 'Anaphylaxis', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1713,
    question: `The characteristic appearance of a "chocolate cyst" is associated with which condition?`,
    options: ['Endometriosis', 'Ovarian cancer', 'Polycystic ovary syndrome', 'Ovarian torsion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1714,
    question: `A patient presents with chest pain that is relieved by sitting forward. What condition should be suspected?`,
    options: ['Myocardial infarction', 'Pericarditis', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1715,
    question: `A patient presents with a history of recurrent sinus infections and asthma. What condition should be considered?`,
    options: ['Cystic fibrosis', 'Allergic rhinitis', 'Nasal polyps', 'Chronic obstructive pulmonary disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1716,
    question: `A patient presents with symptoms of jaundice and pruritus. Lab tests reveal elevated alkaline phosphatase. What condition should be suspected?`,
    options: ['Hepatitis', 'Cholestasis', 'Hemolysis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1717,
    question: `A patient presents with a swollen, painful joint in the big toe. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Gout', 'Osteoarthritis', 'Septic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1718,
    question: `A 50-year-old woman presents with fatigue, pallor, and a smooth tongue. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Folate deficiency', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1719,
    question: `Which of the following is a characteristic finding in patients with Crohn's disease?`,
    options: ['Skip lesions', 'Continuous lesions', 'Serosal involvement only', 'Toxic megacolon'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1720,
    question: `The most common cause of hypercalcemia in adults is:`,
    options: ['Vitamin D intoxication', 'Hyperparathyroidism', 'Malignancy', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1721,
    question: `A patient presents with a blistering rash on the extensor surfaces and a family history of similar rashes. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Eczema', 'Bullous pemphigoid', 'Dermatitis herpetiformis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1722,
    question: `A child is brought to the emergency department with high fever, sore throat, and drooling. What condition should be suspected?`,
    options: ['Croup', 'Epiglottitis', 'Pharyngitis', 'Tonsillitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1723,
    question: `Which vitamin deficiency is associated with night blindness?`,
    options: ['Vitamin B12', 'Vitamin A', 'Vitamin C', 'Vitamin D'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1724,
    question: `Which of the following is a complication of untreated pelvic inflammatory disease (PID)?`,
    options: ['Ectopic pregnancy', 'Ovarian cancer', 'Endometrial hyperplasia', 'Polycystic ovarian syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1725,
    question: `In patients with rheumatoid arthritis, which joint is typically affected first?`,
    options: ['Hip', 'Wrist', 'PIP joints (proximal interphalangeal)', 'MTP joints (metatarsophalangeal)'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1726,
    question: `A patient presents with a persistent dry cough, night sweats, and weight loss. Chest X-ray shows cavitation in the upper lobe of the lung. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Lung cancer', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1727,
    question: `Which of the following is a common manifestation of hyperthyroidism?`,
    options: ['Weight gain', 'Cold intolerance', 'Tachycardia', 'Hypotension'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1728,
    question: `What is the mainstay treatment for generalized anxiety disorder?`,
    options: ['SSRIs (Selective serotonin reuptake inhibitors)', 'Benzodiazepines', 'CBT (Cognitive Behavioral Therapy)', 'Both A and C'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1729,
    question: `A 35-year-old woman presents with amenorrhea and a positive pregnancy test. What is the next best step in management?`,
    options: ['Ultrasound', 'Serum β-hCG', 'Pelvic examination', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1730,
    question: `What is the primary mechanism of action of statins?`,
    options: ['Increase HDL cholesterol', 'Decrease LDL cholesterol', 'Decrease triglycerides', 'Increase apolipoprotein A1'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1731,
    question: `Which class of drugs is commonly used to treat hyperlipidemia?`,
    options: ['Beta-blockers', 'Statins', 'ACE inhibitors', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1732,
    question: `A 60-year-old male presents with difficulty swallowing and regurgitation. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer', 'Zenker\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1733,
    question: `Which condition is characterized by "bamboo spine" on X-ray?`,
    options: ['Osteoporosis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Osteoarthritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1734,
    question: `A woman presents with vaginal bleeding in her second trimester. An ultrasound reveals a placenta previa. What is the most appropriate management?`,
    options: ['Immediate delivery', 'Bed rest and monitoring', 'Cervical cerclage', 'Tocolytics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1735,
    question: `Which of the following conditions is characterized by a decrease in the production of red blood cells?`,
    options: ['Hemolytic anemia', 'Iron deficiency anemia', 'Aplastic anemia', 'Sickle cell disease'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1736,
    question: `Which of the following conditions is characterized by a "saddle" anesthesia?`,
    options: ['Cauda equina syndrome', 'Multiple sclerosis', 'Sciatica', 'Herniated disc'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1737,
    question: `In which of the following conditions is a "cannonball" metastasis commonly observed?`,
    options: ['Osteosarcoma', 'Renal cell carcinoma', 'Breast cancer', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1738,
    question: `Which of the following drugs is commonly used to prevent seizures in preeclampsia?`,
    options: ['Phenytoin', 'Magnesium sulfate', 'Diazepam', 'Labetalol'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1739,
    question: `A patient with a history of hepatitis B presents with jaundice and elevated liver enzymes. What is the most likely diagnosis?`,
    options: ['Hepatitis A', 'Hepatitis C', 'Acute exacerbation of hepatitis B', 'Alcoholic liver disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1740,
    question: `Which electrolyte abnormality is commonly associated with loop diuretics?`,
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypercalcemia', 'Hyponatremia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1741,
    question: `In children, the main cause of acute gastroenteritis is:`,
    options: ['Bacterial infection', 'Viral infection', 'Parasitic infection', 'Food poisoning'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1742,
    question: `In the context of pediatric vaccinations, the MMR vaccine protects against:`,
    options: ['Measles, Mumps, Rubella', 'Meningitis, Measles, Rotavirus', 'Mumps, Measles, Rubeola', 'Measles, Mumps, Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1743,
    question: `Which vitamin is essential for the synthesis of clotting factors II, VII, IX, and X?`,
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1744,
    question: `A 50-year-old woman presents with fatigue, weight gain, and brittle hair. Lab tests show elevated TSH and low T3/T4. What is the most likely diagnosis?`,
    options: ['Hashimoto’s thyroiditis', 'Graves’ disease', 'Subacute thyroiditis', 'Thyroid carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1745,
    question: `In which condition is the "bamboo spine" appearance observed on X-ray?`,
    options: ['Osteoarthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Osteoporosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1746,
    question: `A 5-year-old child presents with stridor, drooling, and difficulty swallowing. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Croup', 'Tonsillitis', 'Pharyngitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1747,
    question: `A patient presents with a history of recurrent joint pain, particularly in the hands and feet, and morning stiffness. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1748,
    question: `A 72-year-old male presents with chest pain, shortness of breath, and an abnormal ECG showing ST-segment elevation. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Angina pectoris', 'Aortic dissection', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1749,
    question: `A 10-year-old child presents with abdominal pain and is found to have a positive Murphy's sign. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Cholecystitis', 'Pancreatitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1750,
    question: `A child presents with a high fever, sore throat, and grayish lesions in the mouth. What is the most likely diagnosis?`,
    options: ['Hand-foot-and-mouth disease', 'Strep throat', 'Mononucleosis', 'Herpangina'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1751,
    question: `Which of the following is a common cause of heart failure?`,
    options: ['Myocardial infarction', 'Hypertension', 'Cardiomyopathy', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1752,
    question: `A 10-year-old boy presents with a swollen knee following a sports injury. What is the most appropriate initial imaging study?`,
    options: ['MRI', 'X-ray', 'Ultrasound', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1753,
    question: `A newborn presents with a scaphoid abdomen and respiratory distress. What is the most likely diagnosis?`,
    options: ['Diaphragmatic hernia', 'Cystic fibrosis', 'Bronchopulmonary dysplasia', 'Tracheoesophageal fistula'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1754,
    question: `What is the primary treatment for acute bacterial sinusitis?`,
    options: ['Decongestants', 'Intranasal corticosteroids', 'Antibiotics', 'Antihistamines'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1755,
    question: `Which of the following is NOT a typical symptom of hypothyroidism?`,
    options: ['Weight loss', 'Cold intolerance', 'Fatigue', 'Dry skin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1756,
    question: `The Glasgow Coma Scale (GCS) is used to assess the level of consciousness in patients with head injury. What is the highest score a patient can achieve?`,
    options: ['10', '12', '15', '18'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1757,
    question: `The most common cause of congenital hypothyroidism is:`,
    options: ['Iodine deficiency', 'Thyroid agenesis', 'Hashimoto\'s thyroiditis', 'Maternal thyroid disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1758,
    question: `Which of the following is the definitive treatment for hyperthyroidism in pregnant women?`,
    options: ['Radioactive iodine', 'Methimazole', 'Thyroidectomy', 'Propylthiouracil (PTU)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1759,
    question: `A patient presents with bilateral muscle weakness and respiratory failure. What is the most likely diagnosis?`,
    options: ['Guillain-Barré syndrome', 'Myasthenia gravis', 'Amyotrophic lateral sclerosis', 'Muscular dystrophy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1760,
    question: `Which of the following is a common cause of secondary hypertension?`,
    options: ['Chronic kidney disease', 'Obesity', 'Stress', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1761,
    question: `Which of the following is a common side effect of beta-blockers?`,
    options: ['Tachycardia', 'Hypoglycemia', 'Bradycardia', 'Hypertension'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1762,
    question: `A patient has a history of excessive alcohol consumption and presents with confusion. What is the likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1763,
    question: `Which of the following conditions is associated with a "café au lait" skin lesion?`,
    options: ['Neurofibromatosis', 'Tuberous sclerosis', 'Marfan syndrome', 'Turner syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1764,
    question: `A 60-year-old male presents with acute onset chest pain radiating to his back. His blood pressure is asymmetrical between both arms, and an aortic regurgitation murmur is heard. What is the most likely diagnosis?`,
    options: ['Acute myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Pericarditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1765,
    question: `A child presents with pallor, fatigue, and short stature. His labs reveal hypochromic, microcytic anemia, and he has a family history of anemia. Which of the following is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Beta-thalassemia', 'Sickle cell disease', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1766,
    question: `A 30-year-old woman presents with amenorrhea for 6 months, galactorrhea, and visual disturbances. What is the most likely diagnosis?`,
    options: ['Prolactinoma', 'Polycystic ovary syndrome', 'Hypothyroidism', 'Sheehan syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1767,
    question: `The presence of "café-au-lait" spots is characteristic of which genetic condition?`,
    options: ['Neurofibromatosis', 'Marfan syndrome', 'Turner syndrome', 'Williams syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1768,
    question: `A 45-year-old man presents with sudden vision loss in one eye. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Vitreous hemorrhage', 'Central retinal artery occlusion', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1769,
    question: `Which lab test is most specific for diagnosing myocardial infarction?`,
    options: ['Troponin', 'CK-MB', 'LDH', 'Myoglobin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1770,
    question: `A patient presents with joint pain, fever, and a rash. Which lab test is most useful for diagnosing rheumatoid arthritis?`,
    options: ['Rheumatoid factor', 'Antinuclear antibodies (ANA)', 'C-reactive protein (CRP)', 'Erythrocyte sedimentation rate (ESR)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1771,
    question: `A patient presents with muscle weakness, fatigue, and elevated creatine kinase levels. What condition should be suspected?`,
    options: ['Myasthenia gravis', 'Guillain-Barré syndrome', 'Muscular dystrophy', 'Amyotrophic lateral sclerosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1772,
    question: `In which of the following conditions would you most likely find a "target lesion"?`,
    options: ['Erysipelas', 'Erythema multiforme', 'Psoriasis', 'Atopic dermatitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1773,
    question: `A patient presents with severe epigastric pain radiating to the back and elevated serum lipase. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Cholecystitis', 'Peptic ulcer disease', 'Gastritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1774,
    question: `What is the most common type of thyroid cancer?`,
    options: ['Follicular carcinoma', 'Papillary carcinoma', 'Medullary carcinoma', 'Anaplastic carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1775,
    question: `The most common type of non-Hodgkin lymphoma is:`,
    options: ['Follicular lymphoma', 'Diffuse large B-cell lymphoma', 'Mantle cell lymphoma', 'Burkitt lymphoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1776,
    question: `A woman with primary infertility has absent uterus. Karyotype shows 46 XY. Diagnosis:`,
    options: ['Turner syndrome', 'Androgen insensitivity syndrome', 'Mullerian agenesis', 'Hypogonadotropic hypogonadism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1777,
    question: `A 30-year-old female presents with fatigue, pallor, and an elevated serum ferritin level. What is the most likely diagnosis?`,
    options: ['Hemochromatosis', 'Iron deficiency anemia', 'Anemia of chronic disease', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1778,
    question: `A 70-year-old female presents with unilateral hearing loss and tinnitus. What is the most likely diagnosis?`,
    options: ['Acoustic neuroma', 'Otosclerosis', 'Presbycusis', 'Meniere\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1779,
    question: `A patient presents with a history of binge eating followed by purging. What is the most likely diagnosis?`,
    options: ['Anorexia nervosa', 'Bulimia nervosa', 'Binge eating disorder', 'Avoidant/restrictive food intake disorder'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1780,
    question: `A patient presents with a painful, swollen joint, and the synovial fluid analysis shows positive birefringent crystals. What is the most likely diagnosis?`,
    options: ['Pseudogout', 'Gout', 'Septic arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1781,
    question: `A patient presents with chest pain, dyspnea, and a history of deep vein thrombosis. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1782,
    question: `Which of the following is a common complication of untreated hypertension?`,
    options: ['Osteoporosis', 'Myocardial infarction', 'Thyroid storm', 'Anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1783,
    question: `A 45-year-old man presents with fatigue, weight gain, and cold intolerance. Which laboratory test should be performed first?`,
    options: ['Free T4', 'TSH', 'Thyroid autoantibodies', 'Total T3'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1784,
    question: `Which of the following medications is most appropriate for initial management of acute status epilepticus?`,
    options: ['Phenytoin', 'Carbamazepine', 'Lorazepam', 'Valproic acid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1785,
    question: `A patient presents with unilateral facial droop and inability to close the eye on one side. What is the most likely diagnosis?`,
    options: ['Bell\'s palsy', 'Stroke', 'Multiple sclerosis', 'Myasthenia gravis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1786,
    question: `Which test is the most specific for diagnosing rheumatoid arthritis?`,
    options: ['Rheumatoid factor (RF)', 'Anti-cyclic citrullinated peptide (Anti-CCP)', 'Erythrocyte sedimentation rate (ESR)', 'C-reactive protein (CRP)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1787,
    question: `A 55-year-old male presents with sudden onset of severe back pain and hematuria. What is the most likely diagnosis?`,
    options: ['Renal stone', 'Abdominal aortic aneurysm', 'Kidney infection', 'Muscle strain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1788,
    question: `The most effective treatment for Helicobacter pylori infection is:`,
    options: ['Proton pump inhibitor (PPI) monotherapy', 'Antibiotic monotherapy', 'Triple therapy (PPI + two antibiotics)', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1789,
    question: `What is the most common inherited bleeding disorder?`,
    options: ['Hemophilia A', 'Hemophilia B', 'Von Willebrand disease', 'Thrombocytopenia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1790,
    question: `The most common organism responsible for urinary tract infections in women is:`,
    options: ['Staphylococcus saprophyticus', 'E. coli', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1791,
    question: `Which of the following is a common presenting symptom of multiple myeloma?`,
    options: ['Fever', 'Bone pain', 'Weight gain', 'Joint swelling'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1792,
    question: `A 50-year-old male presents with persistent cough, hemoptysis, and weight loss. Chest X-ray shows a mass in the upper lobe. What is the most likely diagnosis?`,
    options: ['Lung cancer', 'Tuberculosis', 'Pneumonia', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1793,
    question: `A 35-year-old woman presents with a sudden severe headache described as "the worst headache of her life." What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1794,
    question: `Which of the following is a classic sign of appendicitis?`,
    options: ['McBurney\'s point tenderness', 'Murphy\'s sign', 'Psoas sign', 'Courvoisier\'s sign'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1795,
    question: `Which electrolyte disturbance is commonly associated with chronic diarrhea?`,
    options: ['Hyperkalemia', 'Hypomagnesemia', 'Hyponatremia', 'Hypercalcemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1796,
    question: `A patient presents with a history of chronic cough and sputum production. What is the most likely diagnosis?`,
    options: ['Asthma', 'Chronic bronchitis', 'Pneumonia', 'Lung cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1797,
    question: `A 12-year-old girl presents with delayed menarche and signs of estrogen deficiency. What is the most likely diagnosis?`,
    options: ['Turner syndrome', 'Polycystic ovary syndrome', 'Hypothalamic amenorrhea', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1798,
    question: `What is the first-line treatment for type 2 diabetes mellitus?`,
    options: ['Insulin', 'Metformin', 'Sulfonylureas', 'Thiazolidinediones'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1799,
    question: `The first-line treatment for hyperprolactinemia in women desiring fertility is:`,
    options: ['Bromocriptine', 'Dopamine antagonist', 'Surgery', 'Progesterone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1800,
    question: `The most important risk factor for endometrial carcinoma is:`,
    options: ['Multiparity', 'Early menopause', 'Unopposed estrogen exposure', 'Oral contraceptive use'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1801,
    question: `A 30-year-old woman presents with weight gain, facial hair, and irregular periods. What condition is most likely?`,
    options: ['Cushing\'s syndrome', 'Hyperthyroidism', 'Polycystic ovary syndrome', 'Primary adrenal insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1802,
    question: `A patient with a history of alcohol use presents with abdominal pain and elevated liver enzymes. What is the likely diagnosis?`,
    options: ['Alcoholic hepatitis', 'Fatty liver disease', 'Cirrhosis', 'Hepatitis A'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1803,
    question: `The presence of a "crescendo-decrescendo" systolic murmur is characteristic of which condition?`,
    options: ['Aortic stenosis', 'Mitral regurgitation', 'Aortic regurgitation', 'Mitral stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1804,
    question: `A patient with a history of diabetes presents with recurrent skin infections and blurred vision. What is the most likely underlying pathology?`,
    options: ['Nephropathy', 'Neuropathy', 'Retinopathy', 'Peripheral vascular disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1805,
    question: `A patient with a history of chronic alcohol use presents with confusion, ataxia, and ophthalmoplegia. What condition is most likely?`,
    options: ['Wernicke’s encephalopathy', 'Korsakoff syndrome', 'Alcoholic liver disease', 'Hepatic encephalopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1806,
    question: `A patient presents with fatigue, weight gain, and cold intolerance. Laboratory tests reveal elevated TSH and low T4 levels. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Euthyroid sick syndrome', 'Thyroid storm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1807,
    question: `In a patient with diabetes mellitus, what is the most common cause of peripheral neuropathy?`,
    options: ['Alcohol use', 'Diabetes-related microvascular damage', 'Vitamin B12 deficiency', 'Hypothyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1808,
    question: `A 45-year-old woman presents with gradual hearing loss and tinnitus in her right ear. MRI reveals a mass at the cerebellopontine angle. What is the most likely diagnosis?`,
    options: ['Acoustic neuroma', 'Meniere\'s disease', 'Otosclerosis', 'Cholesteatoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1809,
    question: `A child presents with recurrent abdominal pain and diarrhea. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Celiac disease', 'Appendicitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1810,
    question: `Which laboratory test is most useful for diagnosing diabetes mellitus?`,
    options: ['Fasting blood glucose', 'Hemoglobin A1c', 'Oral glucose tolerance test', 'Random blood glucose'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1811,
    question: `What is the drug of choice for treating hypertension in patients with chronic kidney disease?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Calcium channel blockers', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1812,
    question: `The most common cause of secondary infertility in females is:`,
    options: ['Ovarian failure', 'Tubal damage', 'Cervical factor', 'Uterine anomaly'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1813,
    question: `Which of the following medications is commonly used in the treatment of bipolar disorder?`,
    options: ['Fluoxetine', 'Lithium', 'Risperidone', 'Amitriptyline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1814,
    question: `A woman presents with severe pelvic pain, fever, and cervical motion tenderness after miscarriage. Best initial management:`,
    options: ['Broad-spectrum antibiotics', 'Immediate surgery', 'Analgesics only', 'Hormonal therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1815,
    question: `A child presents with difficulty swallowing and drooling. A lateral neck X-ray shows a widened epiglottis. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Croup', 'Laryngitis', 'Foreign body aspiration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1816,
    question: `A young female presents with recurrent episodes of abdominal pain relieved by defecation and changes in bowel habits. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Crohn’s disease', 'Ulcerative colitis', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1817,
    question: `The first-line treatment for type 2 diabetes mellitus is:`,
    options: ['Insulin', 'Metformin', 'Sulfonylureas', 'Thiazolidinediones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1818,
    question: `Which of the following is the treatment of choice for Lyme disease?`,
    options: ['Amoxicillin', 'Azithromycin', 'Doxycycline', 'Ciprofloxacin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1819,
    question: `A 5-year-old child presents with abdominal pain, vomiting, and a "sausage-shaped" abdominal mass. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Intussusception', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1820,
    question: `A 5-year-old child presents with fever, sore throat, and a sandpaper-like rash. What is the most likely diagnosis?`,
    options: ['Scarlet fever', 'Measles', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1821,
    question: `Which of the following is a characteristic sign of appendicitis in children?`,
    options: ['McBurney\'s point tenderness', 'Left lower quadrant pain', 'Psoas sign', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1822,
    question: `A patient presents with hematuria, flank pain, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Renal cell carcinoma', 'Pyelonephritis', 'Ureteral stone', 'Bladder cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1823,
    question: `A 70-year-old male presents with a non-healing ulcer on the leg. What is the most appropriate initial evaluation?`,
    options: ['Doppler ultrasound', 'Biopsy', 'Culture', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1824,
    question: `The most common presentation of abruptio placentae is:`,
    options: ['Painless bleeding', 'Painful bleeding', 'No bleeding', 'Postpartum bleeding'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1825,
    question: `A 25-year-old female presents with amenorrhea, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hypothalamic amenorrhea', 'Thyroid dysfunction', 'Hyperprolactinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1826,
    question: `A 25-year-old female presents with joint pain, fever, and a butterfly-shaped rash across her cheeks. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Sjögren\'s syndrome', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1827,
    question: `A patient presents with pruritic, red lesions in the groin area. What is the most likely diagnosis?`,
    options: ['Tinea cruris', 'Psoriasis', 'Eczema', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1828,
    question: `Which of the following is a risk factor for ovarian cancer?`,
    options: ['Multiparity', 'Early menopause', 'Use of oral contraceptives', 'BRCA mutation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1829,
    question: `Which tumor marker is most commonly elevated in ovarian cancer?`,
    options: ['CA-125', 'CEA', 'AFP', 'PSA'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1830,
    question: `A patient presents with a painful, swollen knee after a sports injury. What is the most appropriate initial imaging study?`,
    options: ['X-ray of the knee', 'MRI of the knee', 'Ultrasound of the knee', 'CT scan of the knee'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1831,
    question: `What is the first-line treatment for generalized anxiety disorder?`,
    options: ['Benzodiazepines', 'Selective serotonin reuptake inhibitors (SSRIs)', 'Tricyclic antidepressants', 'Buspirone'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1832,
    question: `A 5-year-old child presents with a "whooping" cough. What is the most likely diagnosis?`,
    options: ['Croup', 'Asthma', 'Pertussis', 'Bronchiolitis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1833,
    question: `A 50-year-old male presents with persistent cough, night sweats, weight loss, and hemoptysis. A chest X-ray reveals cavitation in the upper lobe. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Bronchogenic carcinoma', 'Lung abscess', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1834,
    question: `Which of the following is the most common cause of secondary hypertension?`,
    options: ['Cushing\'s syndrome', 'Renal artery stenosis', 'Pheochromocytoma', 'Coarctation of the aorta'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1835,
    question: `A patient presents with fever, cough, and a history of exposure to sick contacts. Chest X-ray shows bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Pneumonia', 'Tuberculosis', 'COVID-19', 'Bronchitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1836,
    question: `Which antibiotic is commonly used to treat strep throat?`,
    options: ['Amoxicillin', 'Ciprofloxacin', 'Doxycycline', 'Azithromycin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1837,
    question: `What is the first-line treatment for hypertension in pregnancy?`,
    options: ['ACE inhibitors', 'Methyldopa', 'Furosemide', 'Losartan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1838,
    question: `A young woman presents with a positive pregnancy test and lower abdominal pain. What is the most appropriate next step?`,
    options: ['Transvaginal ultrasound', 'CT scan of the abdomen', 'Serum beta-hCG level', 'Pelvic exam'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1839,
    question: `Which of the following is a major risk factor for developing coronary artery disease?`,
    options: ['Low-density lipoprotein (LDL) levels', 'High-density lipoprotein (HDL) levels', 'Family history of diabetes', 'Vegetarian diet'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1840,
    question: `A patient with chronic kidney disease is being evaluated for anemia. Which laboratory test is most useful for diagnosing the type of anemia?`,
    options: ['Serum iron', 'Ferritin', 'Total iron-binding capacity', 'Erythropoietin level'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1841,
    question: `A patient presents with a painful, swollen joint and a fever. Which condition should be considered first?`,
    options: ['Gout', 'Rheumatoid arthritis', 'Septic arthritis', 'Osteoarthritis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1842,
    question: `What is the primary risk factor for developing chronic obstructive pulmonary disease (COPD)?`,
    options: ['Air pollution', 'Smoking', 'Occupational exposure', 'Family history'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1843,
    question: `The presence of a "cholecystectomy scar" is associated with which condition?`,
    options: ['Cholecystitis', 'Choledocholithiasis', 'Hepatitis', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1844,
    question: `A 28-year-old pregnant woman presents with hypertension. Which medication is considered safe for use during pregnancy?`,
    options: ['Lisinopril', 'Amlodipine', 'Methyldopa', 'Atenolol'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1845,
    question: `In which stage of sleep does REM occur?`,
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'REM sleep'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1846,
    question: `A 30-year-old female presents with severe abdominal pain and a positive pregnancy test. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Ovarian cyst rupture', 'Appendicitis', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1847,
    question: `A 45-year-old male presents with weight loss, excessive thirst, and frequent urination. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Diabetes insipidus', 'Hyperthyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1848,
    question: `Which of the following is a common side effect of opioid use?`,
    options: ['Diarrhea', 'Constipation', 'Hyperhidrosis', 'Insomnia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1849,
    question: `Which of the following pathogens is most commonly associated with pyelonephritis?`,
    options: ['Escherichia coli', 'Staphylococcus aureus', 'Pseudomonas aeruginosa', 'Klebsiella pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1850,
    question: `A 10-year-old child presents with abdominal pain and a "currant jelly" stool. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Mesenteric adenitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1851,
    question: `Which of the following is the first-line treatment for hypertension in a patient with diabetes?`,
    options: ['Beta-blockers', 'Calcium channel blockers', 'ACE inhibitors', 'Thiazide diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1852,
    question: `A 35-year-old woman presents with hyperandrogenism, insulin resistance, and anovulatory infertility. Ultrasound shows bilateral polycystic ovaries. First-line ovulation induction therapy is:`,
    options: ['Clomiphene citrate', 'Letrozole', 'Gonadotropins', 'Metformin alone'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1853,
    question: `Which of the following is a common complication of Crohn's disease?`,
    options: ['Gallstones', 'Fistula formation', 'Hyperglycemia', 'Kidney stones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1854,
    question: `The "water-hammer" pulse is characteristic of which condition?`,
    options: ['Mitral stenosis', 'Aortic regurgitation', 'Tricuspid regurgitation', 'Pulmonary stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1855,
    question: `A young woman presents with fatigue, pallor, and a smooth, beefy-red tongue. What is the most likely deficiency?`,
    options: ['Iron', 'Vitamin B12', 'Folic acid', 'Vitamin C'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1856,
    question: `Which condition is commonly associated with hypertension, hypokalemia, and metabolic alkalosis?`,
    options: ['Cushing\'s syndrome', 'Conn\'s syndrome (primary hyperaldosteronism)', 'Addison\'s disease', 'Acromegaly'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1857,
    question: `A woman presents with lower abdominal pain, cervical motion tenderness, and fever. The most likely diagnosis is:`,
    options: ['Appendicitis', 'Endometriosis', 'Pelvic inflammatory disease', 'Ovarian torsion'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1858,
    question: `A patient presents with episodic vertigo, tinnitus, and hearing loss. What is the most likely diagnosis?`,
    options: ['Benign paroxysmal positional vertigo (BPPV)', 'Meniere’s disease', 'Labyrinthitis', 'Vestibular neuritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1859,
    question: `A woman presents with urinary incontinence on coughing and sneezing. This is called:`,
    options: ['Urge incontinence', 'Overflow incontinence', 'Stress incontinence', 'Functional incontinence'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1860,
    question: `Which condition is characterized by the presence of "creamy" white lesions in the mouth?`,
    options: ['Candidiasis', 'Oral leukoplakia', 'Herpes simplex virus infection', 'Lichen planus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1861,
    question: `Which of the following is a common cause of hematuria in young adults?`,
    options: ['Renal cell carcinoma', 'Urinary tract infection', 'Glomerulonephritis', 'Benign prostatic hyperplasia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1862,
    question: `Which medication is a common first-line treatment for type 2 diabetes?`,
    options: ['Metformin', 'Insulin', 'Sulfonylureas', 'Thiazolidinediones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1863,
    question: `A 40-year-old man presents with abdominal pain, diarrhea, and weight loss. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1864,
    question: `A 25-year-old female presents with irregular menstrual cycles and hirsutism. What is the most likely diagnosis?`,
    options: ['Cushing syndrome', 'Polycystic ovary syndrome (PCOS)', 'Androgen-secreting tumor', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1865,
    question: `A child presents with a swollen, painful knee joint. What is the most likely diagnosis?`,
    options: ['Osteomyelitis', 'Juvenile idiopathic arthritis', 'Septic arthritis', 'Gout'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1866,
    question: `A child presents with abdominal pain and constipation. What is the most likely cause?`,
    options: ['Functional constipation', 'Intestinal obstruction', 'Appendicitis', 'Inflammatory bowel disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1867,
    question: `A 50-year-old female presents with pain in the right upper quadrant and positive Murphy's sign. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Cholecystitis', 'Pancreatitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1868,
    question: `A 30-year-old woman presents with a breast mass that is mobile and well-defined. What is the most likely diagnosis?`,
    options: ['Breast carcinoma', 'Fibroadenoma', 'Cyst', 'Lipoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1869,
    question: `Which infectious disease is characterized by a "bull's-eye" rash?`,
    options: ['Rocky Mountain spotted fever', 'Lyme disease', 'Measles', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1870,
    question: `A "cherry-red" spot on the macula is indicative of:`,
    options: ['Retinitis pigmentosa', 'Retinoblastoma', 'Tay-Sachs disease', 'Optic neuritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1871,
    question: `A 25-year-old female presents with pain and swelling in the knee after a sports injury. What is the most likely diagnosis?`,
    options: ['Meniscus tear', 'Ligament injury', 'Patellar tendonitis', 'Bursitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1872,
    question: `Which of the following is a risk factor for developing deep vein thrombosis (DVT)?`,
    options: ['High physical activity', 'Long-distance travel', 'Low body mass index (BMI)', 'Regular exercise'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1873,
    question: `A 40-year-old male presents with dysphagia and a feeling of food sticking in the throat. What is the likely diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1874,
    question: `A patient presents with a history of heavy alcohol use and abdominal pain. What is the most likely diagnosis?`,
    options: ['Pancreatitis', 'Cholecystitis', 'Gastritis', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1875,
    question: `A woman with polycystic ovarian syndrome has high LH:FSH ratio and oligomenorrhea. The first-line treatment for infertility is:`,
    options: ['IVF', 'Clomiphene citrate', 'Letrozole', 'Bromocriptine'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1876,
    question: `Which of the following is the most common type of thyroid cancer?`,
    options: ['Papillary thyroid carcinoma', 'Follicular thyroid carcinoma', 'Medullary thyroid carcinoma', 'Anaplastic thyroid carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1877,
    question: `Which of the following organisms is most commonly associated with traveler’s diarrhea?`,
    options: ['Salmonella', 'Escherichia coli', 'Giardia lamblia', 'Vibrio cholerae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1878,
    question: `A newborn presents with a continuous machine-like murmur. What is the most likely diagnosis?`,
    options: ['Ventricular septal defect (VSD)', 'Patent ductus arteriosus (PDA)', 'Atrial septal defect (ASD)', 'Tetralogy of Fallot'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1879,
    question: `A 40-year-old man presents with episodic chest pain that occurs at rest and is relieved by nitrates. What is the most likely diagnosis?`,
    options: ['Stable angina', 'Unstable angina', 'Prinzmetal\'s angina', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1880,
    question: `In which of the following conditions would you expect a "moon face"?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hyperthyroidism', 'Hypothyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1881,
    question: `Which type of shock is characterized by decreased cardiac output and increased systemic vascular resistance?`,
    options: ['Cardiogenic shock', 'Hypovolemic shock', 'Distributive shock', 'Obstructive shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1882,
    question: `A woman presents with infertility and painful periods. Ultrasound shows adenomyosis. Typical finding is:`,
    options: ['Enlarged tender uterus', 'Irregular uterus', 'Ovarian mass', 'Cervical erosion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1883,
    question: `A patient presents with a history of migraines and new onset of visual disturbances. What is the most appropriate next step?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Referral to a neurologist', 'Start prophylactic medication'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1884,
    question: `A woman with pre-eclampsia develops seizures. What is the best treatment for her condition?`,
    options: ['Diazepam', 'Magnesium sulfate', 'Labetalol', 'Hydralazine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1885,
    question: `What is the primary treatment for bacterial meningitis in adults?`,
    options: ['Intravenous ceftriaxone and vancomycin', 'Oral amoxicillin', 'Intravenous ciprofloxacin', 'Oral doxycycline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1886,
    question: `What is the definitive treatment for symptomatic gallstones?`,
    options: ['Cholecystectomy', 'Ursodeoxycholic acid', 'ERCP', 'Lithotripsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1887,
    question: `A patient presents with severe abdominal pain and a "board-like" abdomen. What is the likely diagnosis?`,
    options: ['Acute pancreatitis', 'Perforated viscus', 'Appendicitis', 'Cholecystitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1888,
    question: `A 50-year-old male presents with worsening dysphagia and weight loss. Barium swallow shows an irregular mass in the esophagus. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Esophageal stricture', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1889,
    question: `Which of the following medications is most commonly associated with drug-induced lupus erythematosus?`,
    options: ['Hydralazine', 'Methotrexate', 'Sulfasalazine', 'Azathioprine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1890,
    question: `Which blood test is most useful for monitoring patients on warfarin therapy?`,
    options: ['PT/INR', 'PTT', 'Platelet count', 'Fibrinogen'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1891,
    question: `A newborn presents with cyanosis that worsens with feeding. What is the most likely congenital heart defect?`,
    options: ['Tetralogy of Fallot', 'Transposition of the great vessels', 'Atrial septal defect', 'Ventricular septal defect'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1892,
    question: `The most common site of endometriosis is:`,
    options: ['Ovary', 'Fallopian tube', 'Uterosacral ligaments', 'Pouch of Douglas'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1893,
    question: `A 5-year-old boy presents with a painless swelling in his right scrotum, which increases in size when he coughs or cries. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Inguinal hernia', 'Varicocele', 'Testicular torsion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1894,
    question: `A 55-year-old male with a history of smoking presents with sudden onset chest pain radiating to the back. Which of the following investigations would most likely confirm the diagnosis of aortic dissection?`,
    options: ['Echocardiography', 'Chest X-ray', 'CT angiography', 'Cardiac enzymes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1895,
    question: `What is the primary risk factor for developing type 2 diabetes?`,
    options: ['Low exercise levels', 'High fiber diet', 'Genetic predisposition', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1896,
    question: `A 55-year-old male presents with sudden onset of severe headache, described as the worst headache of his life. What is the most appropriate initial imaging study?`,
    options: ['CT scan of the abdomen', 'MRI of the brain', 'CT scan of the head', 'Ultrasound of the head'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1897,
    question: `A child with a history of recurrent infections presents with absent tonsils and lymph nodes. What condition should be suspected?`,
    options: ['Hyper-IgM syndrome', 'X-linked agammaglobulinemia', 'Severe combined immunodeficiency', 'Chronic granulomatous disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1898,
    question: `Which laboratory value is typically elevated in cases of liver cirrhosis?`,
    options: ['Alkaline phosphatase', 'Bilirubin', 'Albumin', 'Ammonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1899,
    question: `In which condition is "cobblestoning" seen on examination of the throat?`,
    options: ['Pharyngitis', 'Allergic rhinitis', 'Tonsillitis', 'Mononucleosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1900,
    question: `A patient presents with bilateral leg swelling and shortness of breath after a long flight. What is the most likely diagnosis?`,
    options: ['Deep vein thrombosis', 'Pulmonary embolism', 'Heart failure', 'Lymphatic obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1901,
    question: `In which condition is the "thumb sign" seen on lateral neck X-ray?`,
    options: ['Epiglottitis', 'Croup', 'Tonsillitis', 'Peritonsillar abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1902,
    question: `A child with a history of recurrent infections may have a deficiency in which of the following?`,
    options: ['IgA', 'IgM', 'IgG', 'IgE'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1903,
    question: `A child is diagnosed with ADHD. What is the first-line treatment option?`,
    options: ['Behavioral therapy', 'Stimulant medications', 'Antidepressants', 'Antipsychotics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1904,
    question: `A patient presents with chronic diarrhea, weight loss, and bloating. Tissue biopsy shows villous atrophy. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn’s disease', 'Ulcerative colitis', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1905,
    question: `In a patient with hepatic encephalopathy, which of the following is commonly elevated?`,
    options: ['Bilirubin', 'Ammonia', 'Creatinine', 'Glucose'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1906,
    question: `What is the primary treatment for a patient with acute gout attack?`,
    options: ['Allopurinol', 'Colchicine', 'Probenecid', 'NSAIDs'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1907,
    question: `Which of the following medications is the first-line treatment for hypertension in patients with diabetes?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Thiazide diuretics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1908,
    question: `The drug of choice for an acute gout attack is:`,
    options: ['Allopurinol', 'Colchicine', 'Probenecid', 'Ibuprofen'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1909,
    question: `In a child with Kawasaki disease, the most serious complication is:`,
    options: ['Coronary artery aneurysm', 'Myocarditis', 'Pericarditis', 'Valvular heart disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1910,
    question: `In patients with chronic kidney disease, which electrolyte imbalance is most commonly observed?`,
    options: ['Hyperkalemia', 'Hypernatremia', 'Hypocalcemia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1911,
    question: `A woman presents with a family history of breast cancer and is seeking genetic counseling. What is the most common hereditary breast cancer syndrome?`,
    options: ['Li-Fraumeni syndrome', 'Lynch syndrome', 'BRCA1/BRCA2 mutation', 'Cowden syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1912,
    question: `A patient presents with an itchy rash in the antecubital and popliteal fossae. What is the most likely diagnosis?`,
    options: ['Atopic dermatitis', 'Contact dermatitis', 'Psoriasis', 'Eczema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1913,
    question: `What is the most common type of thyroid carcinoma?`,
    options: ['Papillary thyroid carcinoma', 'Follicular thyroid carcinoma', 'Medullary thyroid carcinoma', 'Anaplastic thyroid carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1914,
    question: `A 65-year-old patient presents with sudden onset of vision loss in one eye. What is the most likely cause?`,
    options: ['Retinal detachment', 'Diabetic retinopathy', 'Macular degeneration', 'Central retinal artery occlusion'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1915,
    question: `The most common cause of bacterial meningitis in neonates is:`,
    options: ['Streptococcus pneumoniae', 'Neisseria meningitidis', 'Group B Streptococcus', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1916,
    question: `A child with a history of recurrent otitis media is found to have a mass in the nasopharynx. What is the most likely diagnosis?`,
    options: ['Nasopharyngeal carcinoma', 'Adenoid hypertrophy', 'Lymphoma', 'Foreign body'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1917,
    question: `Which of the following is a common complication of untreated hyperthyroidism?`,
    options: ['Hypoglycemia', 'Thyroid storm', 'Myxedema coma', 'Hypotension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1918,
    question: `Which of the following is a contraindication for the use of methotrexate?`,
    options: ['Liver disease', 'Kidney disease', 'Pregnancy', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1919,
    question: `The drug of choice for the treatment of acute bradycardia is:`,
    options: ['Dopamine', 'Atropine', 'Adenosine', 'Epinephrine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1920,
    question: `In which of the following situations is a CT scan most commonly indicated?`,
    options: ['Routine health check-up', 'Suspected appendicitis', 'Chronic back pain', 'Allergy evaluation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1921,
    question: `Which of the following is the most common cause of upper gastrointestinal bleeding?`,
    options: ['Gastric ulcer', 'Esophageal varices', 'Gastric cancer', 'Duodenal ulcer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1922,
    question: `The preferred investigation for diagnosing a pulmonary embolism in a pregnant woman is:`,
    options: ['CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan', 'Doppler ultrasound of the leg veins', 'Chest X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1923,
    question: `Which of the following is a hallmark sign of congestive heart failure?`,
    options: ['Chest pain', 'Orthopnea', 'Hemoptysis', 'Syncope'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1924,
    question: `The most common malignant ovarian tumor in women under 30 years is:`,
    options: ['Dysgerminoma', 'Granulosa cell tumor', 'Serous cystadenocarcinoma', 'Mucinous cystadenocarcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1925,
    question: `In a patient with suspected multiple sclerosis, what is the most useful initial test?`,
    options: ['MRI of the brain', 'Lumbar puncture', 'Evoked potentials', 'CT scan of the brain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1926,
    question: `A woman presents with hot flashes, vaginal dryness, and amenorrhea at age 48. This condition is due to:`,
    options: ['Decreased estrogen', 'Increased progesterone', 'Increased FSH suppression', 'Increased prolactin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1927,
    question: `A 10-year-old girl presents with abdominal pain and is found to have a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Intestinal obstruction', 'Ovarian cyst', 'Wilms\' tumor', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1928,
    question: `A patient with chronic kidney disease presents with hyperkalemia. What dietary modification should be recommended?`,
    options: ['Increase potassium intake', 'Decrease protein intake', 'Avoid high-potassium foods', 'Increase sodium intake'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1929,
    question: `A 5-year-old child presents with recurrent abdominal pain and blood in the stool. The most likely diagnosis is:`,
    options: ['Intussusception', 'Meckel’s diverticulum', 'Appendicitis', 'Pyloric stenosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1930,
    question: `Which organism is the most common cause of urinary tract infections in women?`,
    options: ['Escherichia coli', 'Staphylococcus saprophyticus', 'Klebsiella pneumoniae', 'Proteus mirabilis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1931,
    question: `In which condition would you expect a decreased anion gap?`,
    options: ['Diabetic ketoacidosis', 'Renal failure', 'Lactic acidosis', 'Multiple myeloma'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1932,
    question: `What is the primary method for preventing the spread of influenza?`,
    options: ['Hand hygiene', 'Vaccination', 'Isolation', 'Antiviral medications'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1933,
    question: `A woman presents with pelvic pain and adnexal tenderness with fever. First-line treatment is:`,
    options: ['Surgery', 'Broad-spectrum antibiotics', 'Analgesics only', 'Hormonal therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1934,
    question: `A 30-year-old female presents with amenorrhea, galactorrhea, and headaches. What is the most likely cause?`,
    options: ['Prolactinoma', 'Hyperthyroidism', 'Cushing\'s disease', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1935,
    question: `Which of the following drugs is used to treat a methanol overdose?`,
    options: ['Naloxone', 'Fomepizole', 'Atropine', 'Flumazenil'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1936,
    question: `A patient presents with recurrent abdominal pain and bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Ulcerative colitis', 'Crohn\'s disease', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1937,
    question: `Which of the following is the most effective treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Saline infusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1938,
    question: `A woman presents with dysmenorrhea, menorrhagia, and uniformly enlarged tender uterus. Diagnosis is:`,
    options: ['Fibroid uterus', 'Adenomyosis', 'Endometriosis', 'Endometrial hyperplasia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1939,
    question: `A child presents with a fever, a rash that started on the face and spread to the trunk, and conjunctivitis. What is the most likely diagnosis?`,
    options: ['Rubella', 'Measles', 'Roseola', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1940,
    question: `A 50-year-old man with a history of smoking presents with a persistent cough and weight loss. What is the most likely diagnosis?`,
    options: ['Chronic obstructive pulmonary disease', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1941,
    question: `A woman presents with abnormal uterine bleeding, endometrial thickness of 20 mm, and age 55. Next step:`,
    options: ['Observation', 'Endometrial biopsy', 'Ultrasound repeat', 'Hormonal therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1942,
    question: `A patient presents with erythematous papules on the face and trunk. Laboratory tests show elevated eosinophils. What is the most likely diagnosis?`,
    options: ['Allergic dermatitis', 'Eosinophilic fasciitis', 'Drug eruption', 'Scabies'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1943,
    question: `What is the gold standard for diagnosing gastroesophageal reflux disease (GERD)?`,
    options: ['Esophageal pH monitoring', 'Upper endoscopy', 'Barium swallow', 'Esophageal manometry'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1944,
    question: `Which electrolyte disturbance is commonly associated with adrenal insufficiency?`,
    options: ['Hypernatremia', 'Hyponatremia', 'Hypokalemia', 'Hyperkalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1945,
    question: `A patient is diagnosed with hypertension. What is the first-line medication recommended for treatment?`,
    options: ['ACE inhibitor', 'Beta-blocker', 'Thiazide diuretic', 'Calcium channel blocker'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1946,
    question: `Which of the following factors is most strongly associated with the development of breast cancer?`,
    options: ['Obesity', 'Nulliparity', 'Family history', 'Use of oral contraceptives'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1947,
    question: `Which of the following is a common feature of nephrotic syndrome?`,
    options: ['Hematuria', 'Proteinuria', 'Pyuria', 'Oliguria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1948,
    question: `A 60-year-old woman presents with sudden onset of monocular vision loss and headache. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Temporal arteritis', 'Glaucoma', 'Optic neuritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1949,
    question: `A patient with chronic kidney disease is likely to have which of the following electrolyte imbalances?`,
    options: ['Hypernatremia', 'Hyperkalemia', 'Hypercalcemia', 'Hypocalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1950,
    question: `Which laboratory test is most useful for diagnosing hemochromatosis?`,
    options: ['Serum ferritin', 'Serum iron', 'Transferrin saturation', 'Liver function tests'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1951,
    question: `A 40-year-old man presents with symptoms of depression, and a low serum testosterone level is found. What is the best treatment option?`,
    options: ['Antidepressants', 'Testosterone replacement therapy', 'Counseling', 'Exercise'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1952,
    question: `A patient with chronic back pain is found to have elevated alkaline phosphatase levels. What condition should be suspected?`,
    options: ['Osteoporosis', 'Paget\'s disease of bone', 'Osteomalacia', 'Bone metastasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1953,
    question: `The "Cushing's triad" includes:`,
    options: ['Hypertension, bradycardia, irregular respirations', 'Fever, chills, diaphoresis', 'Hemoptysis, chest pain, dyspnea', 'Jaundice, ascites, pruritus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1954,
    question: `A patient with asthma presents with a prolonged expiratory phase on auscultation. What is the most likely cause of this finding?`,
    options: ['Airway obstruction', 'Pulmonary edema', 'Pneumonia', 'Pleural effusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1955,
    question: `A 25-year-old female presents with a history of recurrent urinary tract infections. What is the most appropriate prophylactic treatment?`,
    options: ['Antibiotics', 'Increased fluid intake', 'Cranberry supplements', 'Urinary analgesics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1956,
    question: `The most common risk factor for carcinoma cervix is:`,
    options: ['Early menopause', 'Early sexual activity', 'Obesity', 'Diabetes mellitus'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1957,
    question: `Which of the following is a classic symptom of hyperthyroidism?`,
    options: ['Cold intolerance', 'Weight gain', 'Increased appetite', 'Bradycardia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1958,
    question: `A 35-year-old woman presents with fatigue, weight gain, and cold intolerance. Laboratory results show elevated TSH and low free T4. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Addison\'s disease', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1959,
    question: `A patient presents with recurrent episodes of chest pain and a history of GERD. What is the most appropriate management?`,
    options: ['Surgical intervention', 'Lifestyle modifications', 'Proton pump inhibitors', 'Antidepressants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1960,
    question: `Which electrolyte imbalance is most likely in a patient with chronic alcoholism?`,
    options: ['Hyperkalemia', 'Hypomagnesemia', 'Hypercalcemia', 'Hypophosphatemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1961,
    question: `A 30-year-old male presents with testicular pain and swelling. What is the most likely cause?`,
    options: ['Testicular torsion', 'Epididymitis', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1962,
    question: `A patient with diabetes presents with blurred vision and floaters. What condition should be suspected?`,
    options: ['Diabetic retinopathy', 'Cataracts', 'Glaucoma', 'Macular degeneration'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1963,
    question: `A 50-year-old male presents with chest pain and a history of smoking. What is the most appropriate initial test to evaluate for coronary artery disease?`,
    options: ['Stress test', 'Coronary angiography', 'Chest X-ray', 'ECG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1964,
    question: `A patient with hypothyroidism is treated with levothyroxine. What is an important point to monitor?`,
    options: ['Serum glucose levels', 'Serum calcium levels', 'Serum TSH levels', 'Serum potassium levels'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1965,
    question: `A 60-year-old female presents with fatigue, pallor, and spoon-shaped nails. Lab tests reveal microcytic anemia. What is the most likely cause?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Folate deficiency', 'Chronic disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1966,
    question: `A child presents with sudden onset of fever, sore throat, and swollen lymph nodes. A rapid test for streptococcus is negative. What is the most likely diagnosis?`,
    options: ['Viral pharyngitis', 'Bacterial pharyngitis', 'Infectious mononucleosis', 'Tonsillitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1967,
    question: `A woman with severe preeclampsia is given magnesium sulfate. The main purpose is:`,
    options: ['Reduce blood pressure', 'Prevent seizures', 'Induce labor', 'Treat edema'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1968,
    question: `A patient with a family history of hyperlipidemia presents with xanthomas on the eyelids. What is the most likely diagnosis?`,
    options: ['Familial hypercholesterolemia', 'Hypertriglyceridemia', 'Secondary hyperlipidemia', 'Dyslipidemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1969,
    question: `A 70-year-old woman presents with a new onset of confusion and agitation. What condition should be suspected?`,
    options: ['Dementia', 'Delirium', 'Depression', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1970,
    question: `A 5-year-old child presents with pallor, irritability, and hemolytic anemia following a recent viral infection. What is the most likely diagnosis?`,
    options: ['Sickle cell anemia', 'Hereditary spherocytosis', 'Thalassemia', 'G6PD deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1971,
    question: `What is the most common site for metastasis of colon cancer?`,
    options: ['Bone', 'Liver', 'Lungs', 'Brain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1972,
    question: `The most common cause of death in patients with Alzheimer's disease is:`,
    options: ['Stroke', 'Pneumonia', 'Myocardial infarction', 'Sepsis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1973,
    question: `Which of the following is the most sensitive test for detecting early diabetic nephropathy?`,
    options: ['Serum creatinine', 'Urine dipstick for protein', 'Microalbuminuria', 'Renal ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1974,
    question: `A child with a history of asthma presents with cough and wheezing after playing outside. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Inhaled beta-agonists', 'Leukotriene receptor antagonists', 'Anticholinergics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1975,
    question: `A 40-year-old male presents with weight loss, fatigue, and an abdominal mass. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Liver cirrhosis', 'Gastric cancer', 'Colon cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1976,
    question: `What is the most effective treatment for primary biliary cholangitis?`,
    options: ['Ursodeoxycholic acid', 'Corticosteroids', 'Immunosuppressants', 'Antibiotics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1977,
    question: `A child presents with fever, neck stiffness, and photophobia. Lumbar puncture reveals high protein, low glucose, and neutrophilic pleocytosis. What is the most likely diagnosis?`,
    options: ['Viral meningitis', 'Bacterial meningitis', 'Fungal meningitis', 'Tuberculous meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1978,
    question: `The most common cause of nephrotic syndrome in adults is:`,
    options: ['Minimal change disease', 'Focal segmental glomerulosclerosis', 'Membranous nephropathy', 'Diabetic nephropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1979,
    question: `A 60-year-old male presents with progressive dysphagia for solids and weight loss. The most likely diagnosis is:`,
    options: ['Esophageal stricture', 'Achalasia', 'Esophageal carcinoma', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1980,
    question: `A patient presents with fever, abdominal pain, and diarrhea after traveling abroad. What is the most likely diagnosis?`,
    options: ['Viral gastroenteritis', 'Food poisoning', 'Travel-related illness', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1981,
    question: `A 5-year-old child is brought to the clinic with a high fever and a rash that started on the face and spread to the trunk. What is the most likely diagnosis?`,
    options: ['Varicella (chickenpox)', 'Measles', 'Rubella', 'Fifth disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 1982,
    question: `Which drug is a common treatment for hypertension and heart failure?`,
    options: ['Beta-blockers', 'Antidepressants', 'Antihistamines', 'Proton pump inhibitors'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1983,
    question: `Which of the following antibiotics is contraindicated in pregnancy?`,
    options: ['Penicillin', 'Erythromycin', 'Ciprofloxacin', 'Amoxicillin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1984,
    question: `A 12-year-old boy presents with excessive thirst and frequent urination. His blood glucose is 350 mg/dL. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Hyperglycemic hyperosmolar state', 'Diabetic ketoacidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1985,
    question: `A "rock-hard" prostate is suggestive of which condition?`,
    options: ['Benign prostatic hyperplasia', 'Prostate cancer', 'Prostatitis', 'Prostatic abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1986,
    question: `Which vitamin deficiency is most commonly associated with night blindness?`,
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1987,
    question: `A woman presents with amenorrhea and galactorrhea. Serum prolactin is 120 ng/mL. The next best step is:`,
    options: ['MRI pituitary', 'Ultrasound pelvis', 'Endometrial biopsy', 'Thyroid function tests'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1988,
    question: `A patient presents with signs of hyperthyroidism and a prominent goiter. What is the most likely cause?`,
    options: ['Hashimoto\'s thyroiditis', 'Graves\' disease', 'Thyroid adenoma', 'Subacute thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1989,
    question: `A 50-year-old woman with a history of hypertension presents with sudden severe headache described as "the worst headache of her life." What is the most likely diagnosis?`,
    options: ['Tension headache', 'Migraine', 'Subarachnoid hemorrhage', 'Intracerebral hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1990,
    question: `A 35-year-old female presents with joint pain and a positive rheumatoid factor test. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Osteoarthritis', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1991,
    question: `Which of the following is the hallmark of asthma?`,
    options: ['Hypercapnia', 'Airway hyperresponsiveness', 'Bronchoconstriction', 'Both B and C'],
    correct: 3,
    explanation: ''
  },
  {
    id: 1992,
    question: `A patient with jaundice is found to have elevated conjugated bilirubin levels. What is the most likely cause?`,
    options: ['Hemolysis', 'Hepatic dysfunction', 'Biliary obstruction', 'All of the above'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1993,
    question: `Which type of anemia is characterized by a "microcytic hypochromic" appearance on a blood smear?`,
    options: ['Iron deficiency anemia', 'Megaloblastic anemia', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1994,
    question: `A patient presents with persistent cough, night sweats, and weight loss. A chest X-ray shows cavitary lesions. What is the most likely diagnosis?`,
    options: ['Lung abscess', 'Tuberculosis', 'Fungal infection', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1995,
    question: `Which of the following vaccines is contraindicated during pregnancy?`,
    options: ['Influenza vaccine', 'Hepatitis B vaccine', 'Measles, mumps, and rubella (MMR) vaccine', 'Tetanus, diphtheria, and pertussis (Tdap) vaccine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1996,
    question: `The most common cause of community-acquired bacterial meningitis in adults is:`,
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Listeria monocytogenes', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1997,
    question: `Which type of shock is characterized by a decrease in cardiac output due to pump failure?`,
    options: ['Hypovolemic shock', 'Distributive shock', 'Cardiogenic shock', 'Obstructive shock'],
    correct: 2,
    explanation: ''
  },
  {
    id: 1998,
    question: `A 30-year-old woman presents with oligomenorrhea, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Polycystic ovary syndrome', 'Hyperthyroidism', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 1999,
    question: `A child with recurrent infections, including pneumonia and otitis media, is diagnosed with X-linked agammaglobulinemia. What is the primary deficiency in this condition?`,
    options: ['T cells', 'B cells', 'Complement system', 'Neutrophils'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2000,
    question: `In a patient with suspected Cushing's syndrome, which of the following tests is most useful for initial screening?`,
    options: ['24-hour urine free cortisol', 'Low-dose dexamethasone suppression test', 'Plasma ACTH level', 'Salivary cortisol test'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2001,
    question: `What is the primary function of the hormone aldosterone?`,
    options: ['Increase glucose levels', 'Increase sodium reabsorption', 'Decrease blood pressure', 'Promote water excretion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2002,
    question: `A patient presents with a painless, progressive enlargement of cervical lymph nodes. A biopsy shows Reed-Sternberg cells. What is the most likely diagnosis?`,
    options: ['Hodgkin’s lymphoma', 'Non-Hodgkin’s lymphoma', 'Chronic lymphocytic leukemia (CLL)', 'Acute lymphoblastic leukemia (ALL)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2003,
    question: `Which of the following is a major side effect of long-term use of corticosteroids?`,
    options: ['Hyperkalemia', 'Osteoporosis', 'Hypoglycemia', 'Weight loss'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2004,
    question: `What is the main complication associated with untreated hyperthyroidism?`,
    options: ['Atrial fibrillation', 'Heart failure', 'Osteoporosis', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2005,
    question: `A 45-year-old man presents with a sudden onset of severe epigastric pain radiating to the back. Serum lipase levels are elevated. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Peptic ulcer disease', 'Cholecystitis', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2006,
    question: `A 40-year-old woman presents with increased facial hair, irregular periods, and acne. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Cushing\'s syndrome', 'Hypothyroidism', 'Hyperprolactinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2007,
    question: `What is the primary treatment for type 2 diabetes mellitus?`,
    options: ['Insulin', 'Metformin', 'Sulfonylureas', 'Thiazolidinediones'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2008,
    question: `Which of the following conditions is characterized by high fever, a maculopapular rash, cough, conjunctivitis, and Koplik spots in the oral cavity?`,
    options: ['Measles', 'Rubella', 'Varicella', 'Scarlet fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2009,
    question: `What is the most common cause of postmenopausal bleeding?`,
    options: ['Endometrial cancer', 'Endometrial hyperplasia', 'Vaginal atrophy', 'Cervical cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2010,
    question: `A patient with a history of smoking presents with a persistent cough and hemoptysis. What is the most concerning diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2011,
    question: `A 40-year-old man with a history of heavy alcohol use presents with confusion and ataxia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2012,
    question: `Which of the following is a sign of acute cholecystitis?`,
    options: ['Murphy\'s sign', 'McBurney\'s point tenderness', 'Psoas sign', 'Blumberg\'s sign'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2013,
    question: `A patient presents with progressive dysphagia for solids and liquids. What is the most likely diagnosis?`,
    options: ['Peptic stricture', 'Achalasia', 'Esophageal cancer', 'GERD'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2014,
    question: `What is the main treatment for a tension pneumothorax?`,
    options: ['Needle decompression', 'Chest X-ray', 'Oxygen therapy', 'Antibiotics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2015,
    question: `A patient presents with a rash, fever, and arthralgia after a recent trip to a tropical region. What is the most likely diagnosis?`,
    options: ['Dengue fever', 'Zika virus', 'Malaria', 'Yellow fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2016,
    question: `What is the recommended duration of antibiotic therapy for uncomplicated urinary tract infections in women?`,
    options: ['1-2 days', '3-5 days', '7-10 days', '14 days'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2017,
    question: `A patient presents with abdominal distension, nausea, and vomiting after a recent surgery. Which condition should be suspected?`,
    options: ['Adhesive bowel obstruction', 'Gastroenteritis', 'Gallbladder disease', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2018,
    question: `A 25-year-old male presents with acute onset of severe testicular pain and swelling. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Orchitis', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2019,
    question: `Which of the following findings is characteristic of amyotrophic lateral sclerosis (ALS)?`,
    options: ['Sensory loss', 'Upper and lower motor neuron signs', 'Cognitive impairment', 'Autonomic dysfunction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2020,
    question: `What is the primary treatment for a patient with an acute myocardial infarction?`,
    options: ['Beta-blockers', 'Angiotensin-converting enzyme (ACE) inhibitors', 'Aspirin', 'Statins'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2021,
    question: `A 50-year-old man with a history of smoking presents with hematuria. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Prostatitis', 'Nephrolithiasis', 'Urinary tract infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2022,
    question: `A patient with a history of diabetes presents with a foul-smelling foot ulcer. What condition should be suspected?`,
    options: ['Diabetic neuropathy', 'Charcot foot', 'Osteomyelitis', 'Peripheral vascular disease'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2023,
    question: `A patient with diabetes presents with burning and tingling in the feet. Which of the following is the most likely diagnosis?`,
    options: ['Diabetic nephropathy', 'Diabetic neuropathy', 'Diabetic retinopathy', 'Diabetic ketoacidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2024,
    question: `A woman presents with primary infertility, obesity, hirsutism, and acne. The most likely diagnosis is:`,
    options: ['Cushing syndrome', 'Polycystic ovarian syndrome', 'Hypothyroidism', 'Hyperprolactinemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2025,
    question: `Which imaging modality is preferred for diagnosing a suspected pulmonary embolism?`,
    options: ['X-ray', 'MRI', 'CT pulmonary angiography', 'Ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2026,
    question: `In which condition is the "string sign" observed on imaging?`,
    options: ['Crohn\'s disease', 'Ulcerative colitis', 'Intestinal obstruction', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2027,
    question: `A 50-year-old man presents with a change in bowel habits and rectal bleeding. What is the most appropriate initial test?`,
    options: ['Colonoscopy', 'Sigmoidoscopy', 'CT scan of the abdomen', 'Fecal occult blood test'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2028,
    question: `A pregnant woman presents with elevated blood pressure and proteinuria. What is the most likely diagnosis?`,
    options: ['Gestational hypertension', 'Preeclampsia', 'Eclampsia', 'Chronic hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2029,
    question: `A newborn is diagnosed with congenital hypothyroidism. What is the most common presenting sign?`,
    options: ['Jaundice', 'Hypotonia', 'Macrocephaly', 'Congenital heart defect'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2030,
    question: `Which of the following is the preferred diagnostic test for a patient with suspected aortic dissection?`,
    options: ['Chest X-ray', 'CT angiography', 'Echocardiography', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2031,
    question: `A 40-year-old male presents with a non-painful scrotal swelling that transilluminates on examination. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Varicocele', 'Inguinal hernia', 'Testicular torsion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2032,
    question: `A pregnant woman at 34 weeks presents with painless vaginal bleeding and a soft, non-tender uterus. The most likely diagnosis is:`,
    options: ['Placenta previa', 'Placental abruption', 'Vasa previa', 'Uterine rupture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2033,
    question: `A patient presents with a rash that started on the face and spread to the trunk and limbs, accompanied by a high fever. What is the most likely diagnosis?`,
    options: ['Rubella', 'Measles', 'Chickenpox', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2034,
    question: `A 65-year-old male with a history of smoking presents with hematuria. What is the most likely diagnosis?`,
    options: ['Renal calculi', 'Bladder cancer', 'Glomerulonephritis', 'Pyelonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2035,
    question: `A patient with a known history of diabetes presents with a foot ulcer. What is the most important initial step in management?`,
    options: ['Antibiotic therapy', 'Wound debridement', 'Control of blood glucose levels', 'Referral to a podiatrist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2036,
    question: `Which class of medication is commonly used to treat congestive heart failure?`,
    options: ['Diuretics', 'Beta-blockers', 'ACE inhibitors', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2037,
    question: `Which of the following is a common finding in patients with diabetes mellitus?`,
    options: ['Hypoglycemia', 'Diabetic ketoacidosis', 'Hyperkalemia', 'Anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2038,
    question: `In which condition is the "target sign" seen on ultrasound?`,
    options: ['Intussusception', 'Appendicitis', 'Diverticulitis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2039,
    question: `The presence of "Trousseau's sign" indicates:`,
    options: ['Hypercalcemia', 'Hypoparathyroidism', 'Hypocalcemia', 'Hyperparathyroidism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2040,
    question: `A 70-year-old female presents with a sudden loss of vision in one eye. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Diabetic retinopathy', 'Cataract'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2041,
    question: `The most common site for an aortic aneurysm is:`,
    options: ['Thoracic aorta', 'Abdominal aorta', 'Ascending aorta', 'Aortic arch'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2042,
    question: `A 75-year-old female presents with difficulty hearing and tinnitus. What is the most likely diagnosis?`,
    options: ['Cerumen impaction', 'Otitis media', 'Presbycusis', 'Acoustic neuroma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2043,
    question: `Which of the following conditions is characterized by a "butterfly rash" on the face?`,
    options: ['Psoriasis', 'Eczema', 'Systemic lupus erythematosus', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2044,
    question: `The most effective form of emergency contraception is:`,
    options: ['Oral contraceptive pills', 'Copper IUD', 'Levonorgestrel (Plan B)', 'Ulipristal acetate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2045,
    question: `A patient presents with jaundice and pruritus. Lab results show elevated alkaline phosphatase and bilirubin. What condition is likely?`,
    options: ['Hepatitis', 'Cholestasis', 'Hemolytic anemia', 'Gilbert\'s syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2046,
    question: `The most common primary brain tumor in adults is:`,
    options: ['Glioblastoma multiforme', 'Meningioma', 'Astrocytoma', 'Schwannoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2047,
    question: `A 65-year-old woman with hypertension and hyperlipidemia is at risk for cardiovascular disease. What lifestyle change should she prioritize?`,
    options: ['Increase sodium intake', 'Increase physical activity', 'Decrease water intake', 'Increase smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2048,
    question: `A 70-year-old woman with a history of osteoporosis presents with acute back pain after lifting a heavy object. What is the most likely diagnosis?`,
    options: ['Spinal fracture', 'Muscle strain', 'Herniated disc', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2049,
    question: `A patient presents with jaundice, pruritus, and dark urine. Liver function tests show elevated alkaline phosphatase. What is the most likely diagnosis?`,
    options: ['Primary biliary cholangitis', 'Hepatitis', 'Alcoholic liver disease', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2050,
    question: `A patient presents with a sudden onset of chest pain, dyspnea, and tachycardia after surgery. What is the most likely cause?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pneumothorax'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2051,
    question: `A 55-year-old male presents with dizziness, pallor, and fatigue. Blood tests show macrocytic anemia. What is the most likely deficiency?`,
    options: ['Vitamin B12', 'Iron', 'Vitamin D', 'Folate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2052,
    question: `A 24-year-old female presents with weight gain, fatigue, constipation, and cold intolerance. Her TSH is elevated. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Cushing\'s syndrome', 'Addison’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2053,
    question: `In which condition would you find "onion skin" appearance on radiographs?`,
    options: ['Osteosarcoma', 'Ewing\'s sarcoma', 'Osteomyelitis', 'Fibrous dysplasia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2054,
    question: `The first-line treatment for hypertension in patients with diabetes is:`,
    options: ['Diuretics', 'Calcium channel blockers', 'ACE inhibitors', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2055,
    question: `A 50-year-old man presents with a history of alcohol abuse and confusion. He is found to have ataxia and ophthalmoplegia. What is the most likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome, confabulation,  false sories', 'Alcoholic hepatitis', 'Hepatic encephalopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2056,
    question: `The most common cause of first-trimester miscarriage is:`,
    options: ['Maternal infection', 'Chromosomal abnormalities', 'Trauma', 'Hormonal deficiency'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2057,
    question: `A woman presents with significant hair loss and a positive pull test. What is the most likely diagnosis?`,
    options: ['Androgenetic alopecia', 'Telogen effluvium', 'Alopecia areata', 'Tinea capitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2058,
    question: `A patient presents with sudden onset of severe chest pain that radiates to the back. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2059,
    question: `A patient presents with worsening fatigue and pallor. A peripheral blood smear shows microcytic hypochromic anemia. What is the most likely cause?`,
    options: ['Vitamin B12 deficiency', 'Iron deficiency', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2060,
    question: `In which condition would you expect to find "cherry-red spots" on retinal examination?`,
    options: ['Retinal detachment', 'Tay-Sachs disease', 'Diabetic retinopathy', 'Hypertensive retinopathy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2061,
    question: `What is the most effective method to prevent transmission of influenza in healthcare settings?`,
    options: ['Hand hygiene', 'Isolation of infected patients', 'Vaccination', 'Use of masks'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2062,
    question: `Which of the following is a hallmark symptom of Parkinson's disease?`,
    options: ['Hyperactivity', 'Bradykinesia', 'Seizures', 'Memory loss'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2063,
    question: `A 50-year-old man presents with bone pain and elevated serum alkaline phosphatase. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Paget\'s disease', 'Osteosarcoma', 'Osteomalacia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2064,
    question: `A woman presents with heavy bleeding and clots after delivery with contracted uterus. The cause is likely:`,
    options: ['Uterine atony', 'Retained products', 'Genital tract injury', 'Coagulation disorder'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2065,
    question: `A patient presents with a large, painful ulcer on the genitalia and swollen lymph nodes. What is the most likely diagnosis?`,
    options: ['Chancroid', 'Syphilis', 'Genital herpes', 'HPV infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2066,
    question: `A patient with chronic kidney disease presents with bone pain and deformities. What is the most likely cause?`,
    options: ['Osteoporosis', 'Osteomalacia', 'Osteoarthritis', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2067,
    question: `Which of the following is a feature of nephrotic syndrome?`,
    options: ['Hematuria', 'Proteinuria > 3.5 g/day', 'Oliguria', 'Hyperkalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2068,
    question: `A 40-year-old male presents with persistent cough, weight loss, and hemoptysis. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Chronic bronchitis', 'Lung cancer', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2069,
    question: `Which condition is characterized by the presence of "anti-Smith antibodies"?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2070,
    question: `What is the most common type of lung cancer in non-smokers?`,
    options: ['Squamous cell carcinoma', 'Adenocarcinoma', 'Small cell carcinoma', 'Large cell carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2071,
    question: `A patient presents with abdominal pain, jaundice, and a positive Murphy's sign. What is the most likely diagnosis?`,
    options: ['Pancreatitis', 'Cholecystitis', 'Hepatitis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2072,
    question: `Which of the following is the first-line treatment for a prolactinoma?`,
    options: ['Surgery', 'Chemotherapy', 'Dopamine agonists', 'Radiation therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2073,
    question: `What is the characteristic heart sound in mitral stenosis?`,
    options: ['S1 gallop', 'S3 gallop', 'Opening snap', 'S4 gallop'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2074,
    question: `A patient presents with palpitations, sweating, and tremors. Blood tests show hypoglycemia. What is the most likely cause?`,
    options: ['Insulinoma', 'Type 1 diabetes mellitus', 'Addison’s disease', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2075,
    question: `A 25-year-old woman presents with severe pain in the right lower quadrant. A pelvic ultrasound reveals an enlarged, cystic right ovary. What is the most likely diagnosis?`,
    options: ['Ectopic pregnancy', 'Ovarian cyst', 'Appendicitis', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2076,
    question: `A 25-year-old male presents with fatigue, muscle weakness, and darkening of the skin. Blood tests reveal low sodium, high potassium, and low cortisol levels. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hyperaldosteronism', 'Hypopituitarism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2077,
    question: `A patient with a history of heart failure presents with new-onset shortness of breath. What is the most likely cause?`,
    options: ['Pulmonary embolism', 'Pneumonia', 'Exacerbation of heart failure', 'Chronic obstructive pulmonary disease (COPD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2078,
    question: `A patient presents with dark, tarry stools and abdominal pain. What is the most likely cause?`,
    options: ['Peptic ulcer disease', 'Gastroesophageal reflux', 'Hemorrhoids', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2079,
    question: `Which of the following is a hallmark of multiple sclerosis on MRI?`,
    options: ['Butterfly lesion', 'Plaques in white matter', 'Periventricular hemorrhage', 'Temporal lobe atrophy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2080,
    question: `A patient presents with jaundice and dark urine. Lab tests show elevated conjugated bilirubin. What is the most likely cause?`,
    options: ['Hemolysis', 'Hepatocellular damage', 'Biliary obstruction', 'Gilbert\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2081,
    question: `Which vitamin deficiency is most commonly associated with Wernicke's encephalopathy?`,
    options: ['Vitamin B1 (Thiamine)', 'Vitamin B6 (Pyridoxine)', 'Vitamin B12 (Cobalamin)', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2082,
    question: `A 45-year-old woman presents with weight loss, tremors, and a diffusely enlarged thyroid gland. Her laboratory tests show low TSH and high free T4. What is the most likely diagnosis?`,
    options: ['Graves\' disease', 'Hashimoto\'s thyroiditis', 'Toxic multinodular goiter', 'Subacute thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2083,
    question: `A 70-year-old man with a history of smoking presents with hemoptysis and unintentional weight loss. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2084,
    question: `A 35-year-old woman presents with symptoms of hyperthyroidism. What test is most appropriate to confirm the diagnosis?`,
    options: ['Serum TSH', 'Serum T3', 'Serum T4', 'Thyroid scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2085,
    question: `A 70-year-old man presents with difficulty urinating, a weak stream, and nocturia. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Urinary tract infection', 'Bladder cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2086,
    question: `A patient presents with pruritic, raised lesions on the skin and joint pain. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Eczema', 'Urticaria', 'Systemic lupus erythematosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2087,
    question: `A 55-year-old man presents with a unilateral headache, tearing of the eye, and nasal congestion. What is the most likely diagnosis?`,
    options: ['Migraine', 'Cluster headache', 'Tension headache', 'Sinusitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2088,
    question: `The most common presenting symptom of congestive heart failure is:`,
    options: ['Palpitations', 'Shortness of breath', 'Chest pain', 'Fatigue'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2089,
    question: `A 50-year-old male presents with dysphagia and weight loss. What is the most concerning diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Esophageal cancer', 'Gastroesophageal reflux disease (GERD)'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2090,
    question: `Which condition is characterized by excessive thirst and urination?`,
    options: ['Diabetes mellitus', 'Diabetes insipidus', 'Hyperthyroidism', 'Cushing\'s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2091,
    question: `A 45-year-old woman presents with fatigue, joint pain, and a rash on her cheeks. Laboratory tests reveal a positive anti-dsDNA antibody. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Sjögren\'s syndrome', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2092,
    question: `Which of the following medications is used for the treatment of anaphylaxis?`,
    options: ['Diphenhydramine', 'Epinephrine', 'Prednisone', 'Montelukast'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2093,
    question: `A patient presents with fever, fatigue, and a characteristic "target" lesion on the skin. What condition should be suspected?`,
    options: ['Erythema multiforme', 'Psoriasis', 'Bullous pemphigoid', 'Drug rash'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2094,
    question: `In the management of hyperlipidemia, which of the following is the most effective in lowering LDL cholesterol?`,
    options: ['Statins', 'Niacin', 'Fibrates', 'Bile acid sequestrants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2095,
    question: `A woman presents with severe dysmenorrhea, dyspareunia, and infertility. The gold standard for diagnosis is:`,
    options: ['Ultrasound', 'MRI', 'Laparoscopy', 'CT scan'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2096,
    question: `A 50-year-old male presents with new-onset diabetes and weight loss. What is the most concerning diagnosis to consider?`,
    options: ['Type 2 diabetes mellitus', 'Pancreatic cancer', 'Cushing\'s syndrome', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2097,
    question: `A "saddle embolus" is most commonly associated with which condition?`,
    options: ['Deep vein thrombosis', 'Pulmonary embolism', 'Myocardial infarction', 'Stroke'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2098,
    question: `Which of the following is used in the management of acute asthma exacerbation?`,
    options: ['Beta-blockers', 'Inhaled corticosteroids', 'Short-acting beta-agonists (SABAs)', 'Leukotriene receptor antagonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2099,
    question: `What is the initial imaging modality for suspected appendicitis?`,
    options: ['MRI', 'Ultrasound', 'CT scan', 'X-ray'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2100,
    question: `A 30-year-old woman presents with irregular periods and excessive hair growth. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Polycystic ovary syndrome', 'Hypothyroidism', 'Primary ovarian insufficiency'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2101,
    question: `A child presents with a high fever, barking cough, and stridor. What is the most likely diagnosis?`,
    options: ['Croup', 'Bronchiolitis', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2102,
    question: `A patient with a history of rheumatoid arthritis presents with fever, fatigue, and splenomegaly. What is the most likely diagnosis?`,
    options: ['Anemia of chronic disease', 'Hemolytic anemia', 'Aplastic anemia', 'Leukemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2103,
    question: `A patient presents with fever, night sweats, and a productive cough for over 3 weeks. What is the best initial investigation?`,
    options: ['Chest X-ray', 'Sputum culture', 'Bronchoscopy', 'Complete blood count'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2104,
    question: `Which of the following is the primary neurotransmitter involved in the reward pathway?`,
    options: ['Norepinephrine', 'Serotonin', 'Dopamine', 'GABA'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2105,
    question: `Which of the following conditions is associated with a "funnel chest"?`,
    options: ['Pectus excavatum', 'Pectus carinatum', 'Kyphosis', 'Scoliosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2106,
    question: `A patient presents with jaundice and dark urine. Which lab finding would most likely confirm hemolytic anemia?`,
    options: ['Elevated bilirubin', 'Decreased hemoglobin', 'Increased haptoglobin', 'Low reticulocyte count'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2107,
    question: `A patient presents with acute abdominal pain, and CT scan shows free air under the diaphragm. What is the most likely diagnosis?`,
    options: ['Perforated peptic ulcer', 'Appendicitis', 'Diverticulitis', 'Cholecystitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2108,
    question: `A 35-year-old female presents with heat intolerance, weight loss, and palpitations. Serum tests reveal elevated free T3 and T4. What is the most likely diagnosis?`,
    options: ['Hashimoto\'s thyroiditis', 'Graves\' disease', 'Toxic adenoma', 'Subacute thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2109,
    question: `Which organism is most commonly associated with community-acquired pneumonia?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae', 'Chlamydia pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2110,
    question: `A patient is being treated for hypertension with a calcium channel blocker. Which of the following is a common side effect of this medication?`,
    options: ['Cough', 'Edema', 'Hyperkalemia', 'Hypoglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2111,
    question: `Which of the following is the most common cause of chronic kidney disease?`,
    options: ['Hypertension', 'Glomerulonephritis', 'Diabetes mellitus', 'Polycystic kidney disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2112,
    question: `A patient presents with a painful ulcer on the genitalia and swollen lymph nodes. What is the most likely cause of these symptoms?`,
    options: ['Syphilis', 'Herpes simplex virus', 'Chancroid', 'HPV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2113,
    question: `The most common complication of untreated preeclampsia is:`,
    options: ['HELLP syndrome', 'Placental abruption', 'Eclampsia', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2114,
    question: `A child is diagnosed with asthma. Which medication is considered a rescue inhaler?`,
    options: ['Albuterol', 'Salmeterol', 'Beclomethasone', 'Montelukast'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2115,
    question: `In the context of sepsis, which marker is commonly elevated?`,
    options: ['Platelet count', 'Procalcitonin', 'Creatinine', 'Bilirubin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2116,
    question: `A patient with a history of asthma presents with wheezing, shortness of breath, and chest tightness. What is the first-line treatment during an acute asthma attack?`,
    options: ['Long-acting beta-agonists', 'Inhaled corticosteroids', 'Short-acting beta-agonists', 'Leukotriene modifiers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2117,
    question: `A patient presents with severe chest pain that radiates to the back and is relieved by sitting forward. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Pericarditis'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2118,
    question: `A 2-month-old infant presents with projectile vomiting and is diagnosed with pyloric stenosis. What is the most likely electrolyte abnormality?`,
    options: ['Hyperkalemia', 'Hyponatremia', 'Hypochloremic metabolic alkalosis', 'Hypercalcemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2119,
    question: `Which hormone is primarily responsible for regulating calcium levels in the blood?`,
    options: ['Calcitonin', 'Parathyroid hormone (PTH)', 'Vitamin D', 'Thyroid hormone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2120,
    question: `A child presents with a fever, rash, and conjunctivitis. What is the most likely diagnosis?`,
    options: ['Measles', 'Scarlet fever', 'Rubella', 'Kawasaki disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2121,
    question: `A 55-year-old male presents with weight loss, night sweats, and lymphadenopathy. What is the most likely diagnosis?`,
    options: ['Lymphoma', 'Tuberculosis', 'Chronic infection', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2122,
    question: `A woman presents with secondary amenorrhea, galactorrhea, and infertility. The most likely underlying cause is:`,
    options: ['Polycystic ovarian syndrome', 'Hypothyroidism', 'Hyperprolactinemia', 'Premature ovarian failure'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2123,
    question: `A 28-year-old female presents with irregular menses, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Cushing’s syndrome', 'Hyperprolactinemia', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2124,
    question: `A patient presents with abdominal pain and distension after taking a high-fiber diet suddenly. What is the most likely diagnosis?`,
    options: ['Bowel obstruction', 'Diverticulitis', 'Irritable bowel syndrome', 'Constipation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2125,
    question: `A patient presents with severe pain in the lower back that radiates down the leg. What is the most likely diagnosis?`,
    options: ['Lumbar strain', 'Herniated disc', 'Osteoarthritis', 'Sciatica'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2126,
    question: `A 35-year-old woman presents with a new onset of headaches and visual changes. What is the most appropriate next step in management?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Lumbar puncture', 'Blood tests'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2127,
    question: `A patient with type 1 diabetes is experiencing hypoglycemia. What is the best immediate treatment?`,
    options: ['Insulin injection', 'Oral glucose', 'Glucagon injection', 'IV saline'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2128,
    question: `The most common ovarian cancer is:`,
    options: ['Germ cell tumor', 'Sex cord stromal tumor', 'Epithelial tumor', 'Metastatic tumor'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2129,
    question: `A 40-year-old woman presents with a breast lump that is tender and fluctuates with her menstrual cycle. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Cyst', 'Invasive carcinoma', 'Lipoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2130,
    question: `Which of the following is a common test used to assess liver function?`,
    options: ['CBC', 'BMP', 'LFT (Liver Function Test)', 'PT/INR'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2131,
    question: `A 65-year-old woman presents with new-onset headaches and visual disturbances. An MRI reveals a pituitary adenoma. What is the most likely hormonal abnormality?`,
    options: ['Hyperprolactinemia', 'Cushing\'s syndrome', 'Acromegaly', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2132,
    question: `A patient with a history of chronic gastroesophageal reflux presents with progressive dysphagia for solids. Endoscopy reveals a narrowing of the distal esophagus. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal stricture', 'Esophageal varices', 'Barrett’s esophagus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2133,
    question: `In an infant with Tetralogy of Fallot, what is the primary physiological cause of "tet spells"?`,
    options: ['Right-to-left shunt', 'Left-to-right shunt', 'Pulmonary stenosis', 'Ventricular septal defect'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2134,
    question: `Which of the following is the most common complication of a femoral neck fracture?`,
    options: ['Avascular necrosis', 'Compartment syndrome', 'Fat embolism', 'Infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2135,
    question: `A 35-year-old woman presents with heavy menstrual bleeding and iron deficiency anemia. What is the most likely cause?`,
    options: ['Uterine fibroids', 'Endometriosis', 'Ovarian cysts', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2136,
    question: `Which of the following vaccines is recommended for pregnant women to prevent neonatal tetanus?`,
    options: ['MMR vaccine', 'Tetanus toxoid', 'Hepatitis B vaccine', 'BCG vaccine'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2137,
    question: `A patient presents with fever, headache, and a stiff neck. What is the most appropriate initial test?`,
    options: ['CT scan of the head', 'MRI of the brain', 'Lumbar puncture', 'Blood cultures'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2138,
    question: `A patient presents with recurrent kidney stones. What dietary modification should be recommended?`,
    options: ['Increase calcium intake', 'Decrease fluid intake', 'Increase sodium intake', 'Increase fluid intake'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2139,
    question: `A patient presents with dark, tarry stools. What does this suggest?`,
    options: ['Upper gastrointestinal bleeding', 'Lower gastrointestinal bleeding', 'Liver disease', 'Constipation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2140,
    question: `A woman presents with severe lower abdominal pain, guarding, and absent fetal heart sounds at term. The most likely diagnosis is:`,
    options: ['Placenta previa', 'Uterine rupture', 'Placental abruption', 'Preterm labor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2141,
    question: `Which of the following conditions is most commonly associated with secondary amenorrhea?`,
    options: ['Polycystic ovarian syndrome', 'Ovarian cancer', 'Menopause', 'Thyroid dysfunction'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2142,
    question: `A patient with jaundice and elevated alkaline phosphatase levels may have which condition?`,
    options: ['Hepatitis', 'Cholecystitis', 'Cholestasis', 'Hemolytic anemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2143,
    question: `A patient with a recent history of travel to endemic areas presents with fever, chills, and splenomegaly. What is the most likely diagnosis?`,
    options: ['Dengue fever', 'Malaria', 'Typhoid fever', 'Leptospirosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2144,
    question: `A patient with hypertension presents with headaches, sweating, and palpitations. What is the most likely diagnosis?`,
    options: ['Pheochromocytoma', 'Cushing\'s syndrome', 'Hyperthyroidism', 'Anxiety disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2145,
    question: `A 30-year-old woman presents with acute abdominal pain and a positive pregnancy test. What condition should be suspected?`,
    options: ['Ectopic pregnancy', 'Appendicitis', 'Ovarian torsion', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2146,
    question: `Which type of shock is characterized by low cardiac output and high systemic vascular resistance (SVR)?`,
    options: ['Cardiogenic shock', 'Hypovolemic shock', 'Distributive shock', 'Obstructive shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2147,
    question: `A child presents with a high fever and a characteristic "slapped cheek" rash. What is the most likely diagnosis?`,
    options: ['Fifth disease (erythema infectiosum)', 'Measles', 'Rubella', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2148,
    question: `A 35-year-old man presents with episodic severe headaches, palpitations, and sweating. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Pheochromocytoma', 'Panic disorder', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2149,
    question: `A 65-year-old woman presents with a firm, non-tender thyroid nodule. What is the most likely diagnosis?`,
    options: ['Hashimoto\'s thyroiditis', 'Thyroid cancer', 'Graves\' disease', 'Multinodular goiter'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2150,
    question: `A patient with a fracture of the surgical neck of the humerus is most likely to have damage to which nerve?`,
    options: ['Radial nerve', 'Ulnar nerve', 'Median nerve', 'Axillary nerve'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2151,
    question: `The most common cause of secondary postpartum hemorrhage is:`,
    options: ['Uterine atony', 'Retained placental tissue', 'Genital tract injury', 'Coagulation disorders'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2152,
    question: `A 60-year-old female presents with sudden loss of vision in one eye. Fundoscopy shows a pale retina with a cherry-red spot. What is the most likely diagnosis?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Diabetic retinopathy', 'Vitreous hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2153,
    question: `A patient with a history of kidney stones presents with flank pain and hematuria. What is the most likely diagnosis?`,
    options: ['Ureterolithiasis', 'Pyelonephritis', 'Renal abscess', 'Nephrolithiasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2154,
    question: `A child presents with a fever, cough, and wheezing. What is the most likely diagnosis?`,
    options: ['Asthma', 'Croup', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2155,
    question: `Which organism is the most common cause of community-acquired pneumonia in adults?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2156,
    question: `What is the most common cause of acute liver failure in adults?`,
    options: ['Alcoholic hepatitis', 'Viral hepatitis', 'Drug-induced liver injury', 'Non-alcoholic fatty liver disease'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2157,
    question: `Which condition is characterized by the presence of "café au lait" spots?`,
    options: ['Neurofibromatosis', 'Tuberous sclerosis', 'Albinism', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2158,
    question: `A patient with chronic back pain has an X-ray showing "hairy vertebrae." What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Osteosarcoma', 'Paget\'s disease', 'Multiple myeloma'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2159,
    question: `What is the classic triad of symptoms for aortic stenosis?`,
    options: ['Angina, syncope, dyspnea', 'Palpitations, fatigue, edema', 'Chest pain, cough, hemoptysis', 'Headache, dizziness, nausea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2160,
    question: `A patient presents with hypercalcemia, low phosphate, and high alkaline phosphatase. What is the most likely diagnosis?`,
    options: ['Osteoporosis', 'Paget\'s disease', 'Primary hyperparathyroidism', 'Vitamin D intoxication'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2161,
    question: `Which of the following is the most common cause of renal artery stenosis?`,
    options: ['Atherosclerosis', 'Fibromuscular dysplasia', 'Vasculitis', 'Thrombosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2162,
    question: `Which type of diabetes is characterized by autoimmune destruction of pancreatic beta cells?`,
    options: ['Type 1 diabetes', 'Type 2 diabetes', 'Gestational diabetes', 'Latent autoimmune diabetes in adults (LADA)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2163,
    question: `The first-line therapy for tubal factor infertility after salpingectomy is:`,
    options: ['Clomiphene citrate', 'IVF', 'Letrozole', 'Gonadotropins'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2164,
    question: `What is the most common cause of chronic cough in nonsmokers?`,
    options: ['Asthma', 'Gastroesophageal reflux disease (GERD)', 'Chronic bronchitis', 'Postnasal drip'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2165,
    question: `A 60-year-old man presents with a history of heavy smoking and a persistent cough. What should be the primary concern?`,
    options: ['Asthma', 'Chronic obstructive pulmonary disease (COPD)', 'Pulmonary fibrosis', 'Lung cancer'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2166,
    question: `Which electrolyte abnormality is most likely to occur in a patient with acute renal failure?`,
    options: ['Hypercalcemia', 'Hypokalemia', 'Hyperkalemia', 'Hyponatremia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2167,
    question: `A 5-year-old child presents with fever, sore throat, and a strawberry-like appearance of the tongue. What is the most likely diagnosis?`,
    options: ['Scarlet fever', 'Kawasaki disease', 'Hand-foot-and-mouth disease', 'Strep throat'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2168,
    question: `A patient presents with a butterfly rash on the face, joint pain, and photosensitivity. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Systemic lupus erythematosus', 'Erythema multiforme', 'Psoriasis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2169,
    question: `Which of the following is the hallmark sign of pyloric stenosis in infants?`,
    options: ['Bilious vomiting', 'Projectile vomiting', 'Failure to pass meconium', 'Bloody stool'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2170,
    question: `A patient presents with fever, chills, and a new holosystolic murmur. What is the most likely diagnosis?`,
    options: ['Infective endocarditis', 'Aortic stenosis', 'Mitral valve prolapse', 'Rheumatic fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2171,
    question: `A 70-year-old woman presents with a sudden loss of vision in one eye. On examination, there is a pale retina with a cherry-red spot. What is the most likely diagnosis?`,
    options: ['Central retinal artery occlusion', 'Retinal detachment', 'Vitreous hemorrhage', 'Diabetic retinopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2172,
    question: `A 30-year-old female presents with intense pelvic pain during her menstrual cycle. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Ovarian cysts', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2173,
    question: `Which medication is commonly used as a first-line treatment for major depressive disorder?`,
    options: ['Bupropion', 'Sertraline', 'Amitriptyline', 'Lithium'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2174,
    question: `The classic symptom of Parkinson’s disease is:`,
    options: ['Bradykinesia', 'Hyperactivity', 'Ataxia', 'Dysphasia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2175,
    question: `A patient with a history of heavy alcohol use presents with confusion, ataxia, and ophthalmoplegia. What is the most likely deficiency?`,
    options: ['Vitamin B12', 'Thiamine (Vitamin B1)', 'Folic acid', 'Vitamin D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2176,
    question: `A patient presents with palpitations and is found to have atrial fibrillation. What is the most appropriate initial management?`,
    options: ['Anticoagulation', 'Rate control', 'Rhythm control', 'Cardioversion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2177,
    question: `Which of the following tests is used to screen for prostate cancer?`,
    options: ['PSA (Prostate-Specific Antigen)', 'DRE (Digital Rectal Exam)', 'MRI', 'CT scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2178,
    question: `The "whipple's triad" is used in the diagnosis of:`,
    options: ['Diabetes mellitus', 'Hypoglycemia', 'Hyperthyroidism', 'Addison\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2179,
    question: `A 28-year-old woman has a painless breast lump. Fine needle aspiration shows “coffee bean” nuclei on cytology. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Invasive ductal carcinoma', 'Phyllodes tumor', 'Invasive lobular carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2180,
    question: `A 40-year-old woman presents with postmenopausal bleeding. The most important initial investigation is:`,
    options: ['Ultrasound pelvis', 'Endometrial biopsy', 'Pap smear', 'Hysteroscopy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2181,
    question: `A patient presents with a painful ulcer on the genitalia, and serologic tests are positive for syphilis. What is the most appropriate treatment?`,
    options: ['Benzathine penicillin G', 'Azithromycin', 'Doxycycline', 'Ceftriaxone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2182,
    question: `A patient presents with jaundice, dark urine, and pale stools. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Hemolytic anemia', 'Obstructive jaundice', 'Cirrhosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2183,
    question: `A 40-year-old male presents with sudden onset of severe back pain after lifting a heavy object. What is the most likely diagnosis?`,
    options: ['Herniated disc', 'Osteoporosis', 'Spinal stenosis', 'Muscle strain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2184,
    question: `A 30-year-old male presents with dysuria, increased urinary frequency, and fever. What is the most likely diagnosis?`,
    options: ['Urethritis', 'Cystitis', 'Pyelonephritis', 'Prostatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2185,
    question: `A 50-year-old woman presents with epigastric pain, nausea, and a positive urea breath test. What is the most likely diagnosis?`,
    options: ['Peptic ulcer disease', 'Gallstones', 'Gastroesophageal reflux disease (GERD)', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2186,
    question: `A 30-year-old male presents with acute pain and swelling in the great toe. What is the most likely diagnosis?`,
    options: ['Gout', 'Rheumatoid arthritis', 'Pseudogout', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2187,
    question: `A pregnant woman undergoes routine screening for gestational diabetes. What is the most commonly used test for this purpose?`,
    options: ['Fasting blood glucose', 'Oral glucose tolerance test', 'Random blood glucose', 'Hemoglobin A1c'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2188,
    question: `A 35-year-old male presents with joint pain, fever, and a rash. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2189,
    question: `A patient presents with fatigue, pallor, and a low hemoglobin level. Which test would best help determine the cause of anemia?`,
    options: ['Reticulocyte count', 'Peripheral blood smear', 'Bone marrow biopsy', 'Serum iron studies'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2190,
    question: `A patient with a history of recurrent urinary tract infections presents with flank pain and fever. What is the most likely diagnosis?`,
    options: ['Cystitis', 'Pyelonephritis', 'Urethritis', 'Nephrolithiasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2191,
    question: `A patient with a history of hypertension presents with headaches and visual disturbances. What is the most likely diagnosis?`,
    options: ['Hypertensive emergency', 'Migraine', 'Stroke', 'Retinal detachment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2192,
    question: `Which of the following is the first-line treatment for acute gout?`,
    options: ['Allopurinol', 'Colchicine', 'Probenecid', 'Prednisolone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2193,
    question: `A 60-year-old male presents with progressive difficulty swallowing both solids and liquids. Barium swallow shows a "bird's beak" appearance. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal cancer', 'GERD', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2194,
    question: `Which of the following is a classic sign of Cushing’s syndrome?`,
    options: ['Hyperpigmentation', 'Moon face', 'Exophthalmos', 'Weight loss'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2195,
    question: `A newborn presents with projectile vomiting and a palpable olive-shaped mass in the abdomen. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Pyloric stenosis', 'Hirschsprung disease', 'Duodenal atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2196,
    question: `A patient with chronic kidney disease is found to have hyperphosphatemia. What is the most appropriate dietary modification?`,
    options: ['Increase protein intake', 'Decrease calcium intake', 'Decrease phosphate intake', 'Increase potassium intake'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2197,
    question: `A patient with increased serum ferritin, decreased TIBC, and increased transferrin saturation likely has:`,
    options: ['Iron deficiency anemia', 'Hemochromatosis', 'Thalassemia', 'Chronic disease anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2198,
    question: `A patient presents with an itchy rash on the flexural surfaces and a family history of atopy. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Eczema', 'Contact dermatitis', 'Scabies'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2199,
    question: `A patient presents with acute onset of shortness of breath and chest pain after being immobilized for a long flight. What is the most likely diagnosis?`,
    options: ['Pneumothorax', 'Pulmonary embolism', 'Myocardial infarction', 'Congestive heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2200,
    question: `Which of the following is the most sensitive test for the diagnosis of myocardial infarction?`,
    options: ['Troponin', 'Creatine kinase (CK)', 'Myoglobin', 'ECG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2201,
    question: `A patient with chronic obstructive pulmonary disease (COPD) presents with increased respiratory rate and use of accessory muscles. What is the most appropriate management?`,
    options: ['Beta-agonists', 'Corticosteroids', 'Antibiotics', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2202,
    question: `What is the most common side effect of opioid medications?`,
    options: ['Drowsiness', 'Nausea and vomiting', 'Constipation', 'Respiratory depression'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2203,
    question: `What is the primary purpose of using a spacer with an inhaler?`,
    options: ['Increase drug dosage', 'Improve drug delivery to the lungs', 'Reduce side effects', 'Increase inhalation speed'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2204,
    question: `The "saddle anesthesia" is a classic sign of which condition?`,
    options: ['Sciatica', 'Cauda equina syndrome', 'Herniated disc', 'Spinal stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2205,
    question: `A patient presents with fatigue, pallor, and pica. Blood tests show microcytic, hypochromic anemia. What is the most likely cause?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Folate deficiency', ''],
    correct: 0,
    explanation: ''
  },
  {
    id: 2206,
    question: `A 62-year-old man presents with leg pain that worsens with walking and improves with rest. What is the most likely diagnosis?`,
    options: ['Peripheral artery disease', 'Deep vein thrombosis', 'Osteoarthritis', 'Lumbar stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2207,
    question: `What is the most common congenital heart defect?`,
    options: ['Atrial septal defect', 'Ventricular septal defect', 'Tetralogy of Fallot', 'Patent ductus arteriosus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2208,
    question: `A 30-year-old female presents with polyuria, polydipsia, and weight loss. Laboratory tests reveal elevated blood glucose levels. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Gestational diabetes', 'Diabetes insipidus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2209,
    question: `A patient presents with petechiae, fatigue, and recurrent infections. Blood tests reveal pancytopenia. What is the most likely diagnosis?`,
    options: ['Aplastic anemia', 'Acute myeloid leukemia (AML)', 'Chronic lymphocytic leukemia (CLL)', 'Myelodysplastic syndrome (MDS)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2210,
    question: `The primary treatment for anaphylaxis is:`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Saline infusion'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2211,
    question: `A 6-month-old infant presents with a fever and bulging fontanelle. What is the most likely diagnosis?`,
    options: ['Viral meningitis', 'Bacterial meningitis', 'Encephalitis', 'Hydrocephalus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2212,
    question: `The most common complication of uterine fibroids during pregnancy is:`,
    options: ['Preterm labor', 'Postpartum hemorrhage', 'Malpresentation', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2213,
    question: `A child with a history of eczema presents with a pruritic rash on the cheeks. What is the most likely diagnosis?`,
    options: ['Atopic dermatitis', 'Contact dermatitis', 'Impetigo', 'Psoriasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2214,
    question: `Which of the following is a classic symptom of Parkinson's disease?`,
    options: ['Bradykinesia', 'Hemiplegia', 'Ataxia', 'Dysphasia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2215,
    question: `A 30-year-old female presents with chronic joint pain and a positive rheumatoid factor. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Osteoarthritis', 'Systemic lupus erythematosus', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2216,
    question: `In which condition is the "murmur of aortic regurgitation" best heard?`,
    options: ['Hypertrophic cardiomyopathy', 'Aortic stenosis', 'Aortic regurgitation', 'Mitral stenosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2217,
    question: `A woman presents with vaginal bleeding, hypotension, and tender uterus at 32 weeks gestation. The most likely cause is:`,
    options: ['Placenta previa', 'Abruptio placentae', 'Vasa previa', 'Preterm labor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2218,
    question: `A 3-year-old child presents with fever, vomiting, and a "barking" cough. What is the most likely diagnosis?`,
    options: ['Croup', 'Bronchiolitis', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2219,
    question: `A patient presents with an erythematous rash that has a "bull's-eye" appearance and a history of a recent tick bite. What is the most likely diagnosis?`,
    options: ['Lyme disease', 'Rocky Mountain spotted fever', 'Tinea corporis', 'Erythema multiforme'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2220,
    question: `Which of the following is a key feature of osteoarthritis?`,
    options: ['Symmetrical joint involvement', 'Morning stiffness lasting more than 1 hour', 'Heberden’s nodes', 'Extra-articular involvement'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2221,
    question: `A patient presents with a headache, hypertension, and palpitation. What is the most likely diagnosis?`,
    options: ['Pheochromocytoma', 'Hyperthyroidism', 'Anxiety disorder', 'Hypertensive crisis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2222,
    question: `A patient with chronic liver disease is at risk for which of the following conditions?`,
    options: ['Hepatic encephalopathy', 'Ascites', 'Coagulopathy', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2223,
    question: `Which condition is characterized by the presence of anti-Smith antibodies?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Scleroderma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2224,
    question: `The most common cause of infertility in females is:`,
    options: ['Tubal factor', 'Ovarian factor', 'Uterine factor', 'Cervical factor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2225,
    question: `Which of the following is a characteristic feature of multiple sclerosis?`,
    options: ['Absence of reflexes', 'Spasticity', 'Positive Babinski sign', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2226,
    question: `Which of the following vaccines is recommended during pregnancy to prevent neonatal pertussis?`,
    options: ['Hepatitis B', 'Tdap', 'MMR', 'Varicella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2227,
    question: `Which of the following is the most common type of heart murmur in pregnancy?`,
    options: ['Mitral stenosis', 'Aortic regurgitation', 'Mitral valve prolapse', 'Aortic stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2228,
    question: `A patient presents with sudden onset chest pain and dyspnea after a long flight. What is the most likely diagnosis?`,
    options: ['Pneumothorax', 'Pulmonary embolism', 'Myocardial infarction', 'Aortic dissection'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2229,
    question: `Which of the following is the first-line treatment for uncomplicated urinary tract infections?`,
    options: ['Ciprofloxacin', 'Nitrofurantoin', 'Amoxicillin', 'Trimethoprim-sulfamethoxazole'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2230,
    question: `The presence of "pallor" in a patient may indicate:`,
    options: ['Dehydration', 'Hyperemia', 'Anemia', 'Erythema'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2231,
    question: `A patient presents with hypercalcemia, hypophosphatemia, and renal stones. What is the most likely underlying condition?`,
    options: ['Primary hyperparathyroidism', 'Osteoporosis', 'Vitamin D deficiency', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2232,
    question: `In which condition would you expect to see a "cherry red spot" on the macula?`,
    options: ['Tay-Sachs disease', 'Retinal detachment', 'Macular degeneration', 'Diabetic retinopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2233,
    question: `A 10-year-old child presents with painful swelling of the knee and a positive strep throat culture. What is the most likely diagnosis?`,
    options: ['Rheumatic fever', 'Septic arthritis', 'Osteomyelitis', 'Juvenile idiopathic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2234,
    question: `Which condition is characterized by an "apple core" appearance on barium enema?`,
    options: ['Diverticulosis', 'Colorectal cancer', 'Ulcerative colitis', 'Crohn\'s disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2235,
    question: `A 40-year-old female presents with bilateral breast lumps and tenderness. What is the most likely diagnosis?`,
    options: ['Fibrocystic breast changes', 'Breast cancer', 'Fibroadenoma', 'Mastitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2236,
    question: `What is the first-line treatment for type 1 diabetes mellitus?`,
    options: ['Oral hypoglycemics', 'Diet and exercise', 'Insulin therapy', 'Bariatric surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2237,
    question: `Which type of anemia is characterized by the presence of microcytic, hypochromic red blood cells?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2238,
    question: `What is the primary treatment for a patient with anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Albuterol'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2239,
    question: `Which of the following conditions is characterized by café-au-lait spots on the skin?`,
    options: ['Neurofibromatosis', 'Tuberous sclerosis', 'Sturge-Weber syndrome', 'Von Hippel-Lindau disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2240,
    question: `A 30-year-old woman presents with painful menses and dyspareunia. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Pelvic inflammatory disease', 'Ovarian cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2241,
    question: `A 30-year-old female presents with abdominal pain and abnormal uterine bleeding. An ultrasound reveals a thickened endometrium. What is the most likely diagnosis?`,
    options: ['Endometrial hyperplasia', 'Endometriosis', 'Uterine fibroids', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2242,
    question: `A woman in her second trimester of pregnancy presents with high blood pressure and proteinuria. What is the most likely diagnosis?`,
    options: ['Gestational hypertension', 'Preeclampsia', 'Eclampsia', 'Chronic hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2243,
    question: `A patient presents with fever, cough, and purulent sputum. A chest X-ray shows lobar consolidation. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Viral pneumonia', 'Bacterial pneumonia', 'Bronchitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2244,
    question: `Which type of hypersensitivity reaction is associated with asthma?`,
    options: ['Type I', 'Type II', 'Type III', 'Type IV'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2245,
    question: `A woman presents with infertility and absent ovulation. First-line drug for ovulation induction is:`,
    options: ['Letrozole', 'Clomiphene citrate', 'hCG', 'Progesterone'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2246,
    question: `Which of the following laboratory findings is commonly associated with iron deficiency anemia?`,
    options: ['Low serum ferritin', 'Increased total iron-binding capacity (TIBC)', 'Low mean corpuscular volume (MCV)', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2247,
    question: `A 32-year-old pregnant woman presents with severe vomiting, weight loss, and dehydration. What is the most likely diagnosis?`,
    options: ['Hyperemesis gravidarum', 'Preeclampsia', 'Gestational diabetes', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2248,
    question: `A child with eczema presents with a secondary bacterial infection. What is the most appropriate treatment?`,
    options: ['Topical steroids', 'Oral antibiotics', 'Antihistamines', 'Moisturizers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2249,
    question: `A 60-year-old male presents with persistent dysphagia and weight loss. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2250,
    question: `A 2-year-old child presents with a rash, fever, and swollen cheeks. What is the most likely diagnosis?`,
    options: ['Measles', 'Mumps', 'Rubella', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2251,
    question: `Which drug is most commonly used in the treatment of acute gout?`,
    options: ['Allopurinol', 'Colchicine', 'Probenecid', 'Indomethacin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2252,
    question: `A patient with sudden onset of severe abdominal pain, especially in the epigastric region, is suspected to have what condition?`,
    options: ['Acute pancreatitis', 'Acute appendicitis', 'Cholecystitis', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2253,
    question: `A patient with diabetes presents with a non-healing foot ulcer. What is the most likely contributing factor?`,
    options: ['Hyperglycemia', 'Hypertension', 'Hyperlipidemia', 'Hypokalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2254,
    question: `In cases of chronic liver disease, which laboratory finding is most commonly elevated?`,
    options: ['Bilirubin', 'Albumin', 'Creatinine', 'Calcium'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2255,
    question: `A positive "psoas sign" is indicative of which condition?`,
    options: ['Appendicitis', 'Diverticulitis', 'Cholecystitis', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2256,
    question: `A 5-year-old child presents with fever, rash, and strawberry tongue. What is the most likely diagnosis?`,
    options: ['Scarlet fever', 'Measles', 'Kawasaki disease', 'Hand, foot, and mouth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2257,
    question: `A patient presents with new-onset atrial fibrillation. What is the most important initial management step?`,
    options: ['Anticoagulation', 'Rate control', 'Rhythm control', 'Cardioversion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2258,
    question: `A 2-year-old child presents with a barking cough and stridor. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2259,
    question: `A 65-year-old female presents with bilateral leg swelling and varicose veins. What is the most likely diagnosis?`,
    options: ['Deep vein thrombosis', 'Chronic venous insufficiency', 'Lymphedema', 'Peripheral artery disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2260,
    question: `Which drug is commonly used for the treatment of hyperuricemia in gout?`,
    options: ['Allopurinol', 'Colchicine', 'Indomethacin', 'Probenecid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2261,
    question: `Which of the following is the primary imaging modality for evaluating suspected ischemic stroke within the first few hours?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'PET scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2262,
    question: `Which of the following is NOT a feature of Cushing's syndrome?`,
    options: ['Moon face', 'Central obesity', 'Hyperpigmentation', 'Hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2263,
    question: `A patient with heart failure presents with shortness of breath on exertion and peripheral edema. What is the most appropriate medication?`,
    options: ['Furosemide', 'Metoprolol', 'Digoxin', 'Amiodarone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2264,
    question: `The preferred initial imaging modality for suspected pulmonary embolism is:`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan', 'Ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2265,
    question: `A 40-year-old male presents with jaundice and dark urine. Laboratory tests show elevated AST and ALT levels. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Alcoholic liver disease', 'Cholestasis', 'Hemochromatosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2266,
    question: `A patient with chronic cough, night sweats, weight loss, and hemoptysis is most likely suffering from:`,
    options: ['Tuberculosis', 'Chronic obstructive pulmonary disease (COPD)', 'Lung cancer', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2267,
    question: `In a patient with acute kidney injury, what is the most common cause?`,
    options: ['Prerenal azotemia', 'Intrinsic renal failure', 'Postrenal obstruction', 'Diabetic nephropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2268,
    question: `A 15-year-old girl presents with excessive menstrual bleeding and a family history of bleeding disorders. What is the most likely diagnosis?`,
    options: ['Von Willebrand disease', 'Thalassemia', 'Hemophilia A', 'Iron deficiency anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2269,
    question: `The "Raccoon eyes" sign is associated with which condition?`,
    options: ['Basilar skull fracture', 'Conjunctivitis', 'Orbital cellulitis', 'Sinusitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2270,
    question: `The most common cause of postpartum hemorrhage is:`,
    options: ['Genital tract trauma', 'Retained placental tissue', 'Uterine atony', 'Coagulation disorders'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2271,
    question: `The most common cause of shoulder dystocia is:`,
    options: ['Prematurity', 'Macrosomia', 'Breech presentation', 'Twin pregnancy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2272,
    question: `Which of the following is used to prevent post-operative deep vein thrombosis (DVT)?`,
    options: ['Heparin', 'Warfarin', 'Aspirin', 'Streptokinase'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2273,
    question: `Which type of shock is characterized by warm, flushed skin and hypotension?`,
    options: ['Cardiogenic shock', 'Hypovolemic shock', 'Neurogenic shock', 'Septic shock'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2274,
    question: `A 60-year-old man with diabetes presents with an ulcer on his foot that is slow to heal. What is the most likely contributing factor?`,
    options: ['Poor circulation', 'Infection', 'High blood sugar', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2275,
    question: `A pregnant woman at 28 weeks gestation is found to have gestational diabetes. What is the first-line dietary recommendation?`,
    options: ['High protein diet', 'Low carbohydrate diet', 'Balanced diet with controlled carbohydrate intake', 'Calorie restriction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2276,
    question: `Which condition is characterized by the presence of "cherry-red spot" on fundoscopic examination?`,
    options: ['Retinal detachment', 'Tay-Sachs disease', 'Diabetic retinopathy', 'Macular degeneration'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2277,
    question: `What is the classic triad of symptoms for renal cell carcinoma?`,
    options: ['Hematuria, flank pain, weight loss', 'Hypertension, proteinuria, edema', 'Abdominal pain, diarrhea, fever', 'Fever, chills, jaundice'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2278,
    question: `A child presents with a rash and respiratory symptoms after eating peanuts. What is the most likely diagnosis?`,
    options: ['Food allergy', 'Eczema', 'Asthma', 'Anaphylaxis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2279,
    question: `What is the most common presenting symptom of chronic kidney disease?`,
    options: ['Fatigue', 'Hematuria', 'Edema', 'Hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2280,
    question: `A woman presents with infertility and bilateral tubal blockage on HSG. The most likely cause in Pakistan is:`,
    options: ['Congenital anomaly', 'Endometriosis', 'Pelvic inflammatory disease', 'Fibroids'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2281,
    question: `The most common complication of myocardial infarction within the first 24 hours is:`,
    options: ['Arrhythmias', 'Heart failure', 'Pericarditis', 'Ventricular aneurysm'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2282,
    question: `The most common cause of lower gastrointestinal bleeding in adults is:`,
    options: ['Hemorrhoids', 'Diverticulosis', 'Colorectal cancer', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2283,
    question: `A 40-year-old woman presents with pain and swelling in her knee after a sports injury. What is the most likely diagnosis?`,
    options: ['Meniscus tear', 'Ligament injury', 'Osteoarthritis', 'Bursitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2284,
    question: `A patient presents with acute chest pain and ST-segment elevation on ECG. What is the most likely diagnosis?`,
    options: ['Unstable angina', 'Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2285,
    question: `A 60-year-old male presents with a history of smoking and cough with blood-tinged sputum. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2286,
    question: `The presence of Reed-Sternberg cells is diagnostic of:`,
    options: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Multiple myeloma', 'Leukemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2287,
    question: `A 30-year-old woman presents with weight gain, moon face, and abdominal striae. What is the most likely diagnosis?`,
    options: ['Cushing’s syndrome', 'Addison’s disease', 'Polycystic ovary syndrome', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2288,
    question: `What is the most common cause of acute liver failure in the United States?`,
    options: ['Viral hepatitis', 'Alcoholic liver disease', 'Drug-induced liver injury', 'Autoimmune hepatitis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2289,
    question: `A child presents with a high fever, rash, and severe sore throat. What is the most likely diagnosis?`,
    options: ['Strep throat', 'Scarlet fever', 'Infectious mononucleosis', 'Measles'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2290,
    question: `Which of the following is used to confirm the diagnosis of pheochromocytoma?`,
    options: ['Serum catecholamines', 'Urinary VMA (vanillylmandelic acid)', '24-hour urinary metanephrines', 'Abdominal ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2291,
    question: `What is the recommended treatment for H. pylori-associated peptic ulcer disease?`,
    options: ['Proton pump inhibitor alone', 'Antacid alone', 'Proton pump inhibitor + clarithromycin + amoxicillin', 'Metronidazole alone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2292,
    question: `The most common organism causing bacterial vaginosis is:`,
    options: ['Candida albicans', 'Trichomonas vaginalis', 'Gardnerella vaginalis', 'Chlamydia trachomatis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2293,
    question: `A 35-year-old male presents with a swollen and painful joint. Synovial fluid analysis shows a high white blood cell count with a predominance of neutrophils. What is the most likely diagnosis?`,
    options: ['Gout', 'Septic arthritis', 'Rheumatoid arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2294,
    question: `A patient with long-standing ulcerative colitis is at increased risk for which type of cancer?`,
    options: ['Colorectal cancer', 'Gastric cancer', 'Pancreatic cancer', 'Hepatocellular carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2295,
    question: `The first-line treatment for acute pericarditis is:`,
    options: ['Antibiotics', 'Nonsteroidal anti-inflammatory drugs (NSAIDs)', 'Corticosteroids', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2296,
    question: `A patient presents with persistent cough, hemoptysis, and weight loss. What is the most concerning diagnosis?`,
    options: ['Tuberculosis', 'Lung cancer', 'Pneumonia', 'Bronchitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2297,
    question: `A child presents with fever and a rash on the cheeks that resembles a "slapped cheek." What is the most likely diagnosis?`,
    options: ['Fifth disease', 'Measles', 'Scarlet fever', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2298,
    question: `A patient presents with recurrent headaches and visual disturbances. An MRI shows a pituitary adenoma. What is the most common hormone secreted by this tumor?`,
    options: ['Prolactin', 'Growth hormone', 'Adrenocorticotropic hormone (ACTH)', 'Thyroid-stimulating hormone (TSH)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2299,
    question: `A woman with history of infertility presents with chocolate cyst in ovary. This condition is called:`,
    options: ['Dermoid cyst', 'Serous cystadenoma', 'Endometrioma', 'Follicular cyst'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2300,
    question: `Which of the following is the most common causative organism in bacterial meningitis in children?`,
    options: ['Neisseria meningitidis', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Escherichia coli'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2301,
    question: `A newborn presents with cyanosis and a "boot-shaped" heart on chest X-ray. What is the most likely diagnosis?`,
    options: ['Tetralogy of Fallot', 'Ventricular septal defect', 'Transposition of the great arteries', 'Coarctation of the aorta'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2302,
    question: `In which of the following conditions is "graves' ophthalmopathy" commonly observed?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Hashimoto\'s thyroiditis', 'Thyroid cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2303,
    question: `A patient with a history of ulcerative colitis is at increased risk for which type of cancer?`,
    options: ['Breast cancer', 'Colorectal cancer', 'Pancreatic cancer', 'Liver cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2304,
    question: `A woman presents with ovarian mass showing hair, teeth, and sebaceous material on ultrasound. Diagnosis is:`,
    options: ['Dermoid cyst', 'Serous cystadenoma', 'Endometrioma', 'Mucinous cystadenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2305,
    question: `A 28-year-old female presents with bilateral breast tenderness and cyclical mastalgia. What is the most likely diagnosis?`,
    options: ['Fibrocystic breast changes', 'Breast cancer', 'Mastitis', 'Fibroadenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2306,
    question: `Which condition is characterized by high levels of insulin and blood glucose?`,
    options: ['Type 1 diabetes', 'Type 2 diabetes', 'Gestational diabetes', 'LADA (Latent autoimmune diabetes in adults)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2307,
    question: `What is the primary cause of community-acquired pneumonia in adults?`,
    options: ['Mycoplasma pneumoniae', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Legionella pneumophila'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2308,
    question: `A 65-year-old female presents with unilateral leg swelling and pain. What is the most likely diagnosis?`,
    options: ['Lymphedema', 'Deep vein thrombosis (DVT)', 'Varicose veins', 'Peripheral artery disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2309,
    question: `What is the primary treatment for anaphylactic shock?`,
    options: ['Antihistamines', 'Corticosteroids', 'Fluid resuscitation', 'Epinephrine'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2310,
    question: `Which vitamin is important for vision and is a precursor for the visual pigment rhodopsin?`,
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2311,
    question: `Which of the following is the most effective method for screening for colorectal cancer?`,
    options: ['Fecal occult blood test (FOBT)', 'Colonoscopy', 'CT colonography', 'Sigmoidoscopy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2312,
    question: `A 30-year-old woman presents with recurrent early pregnancy losses. Karyotyping reveals balanced translocation. The most appropriate management is:`,
    options: ['Hysterectomy', 'IVF with preimplantation genetic testing', 'Hormonal therapy', 'Cervical cerclage'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2313,
    question: `A 50-year-old patient presents with painless jaundice and a palpable gallbladder (Courvoisier’s sign). What is the most likely diagnosis?`,
    options: ['Gallstones', 'Pancreatic cancer', 'Hepatitis', 'Cholangitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2314,
    question: `Which imaging study is preferred for evaluating suspected appendicitis in pregnant women?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'X-ray'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2315,
    question: `Which medication is contraindicated in pregnancy due to its teratogenic effects?`,
    options: ['Folic acid', 'Lisinopril', 'Metformin', 'Magnesium sulfate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2316,
    question: `A 75-year-old woman presents with sudden onset of inability to move her right arm. CT scan shows a right middle cerebral artery infarct. What is the most likely risk factor?`,
    options: ['Hyperlipidemia', 'Atrial fibrillation', 'Hypertension', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2317,
    question: `What is the most appropriate management for a patient with acute appendicitis?`,
    options: ['Antibiotics only', 'Laparoscopic appendectomy', 'Observation', 'Open cholecystectomy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2318,
    question: `A child presents with recurrent abdominal pain and diarrhea after consuming dairy products. What is the most likely diagnosis?`,
    options: ['Lactose intolerance', 'Celiac disease', 'Appendicitis', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2319,
    question: `In a patient with peptic ulcer disease, which medication is known to promote healing of ulcers?`,
    options: ['Antacids', 'Proton pump inhibitors', 'H2 receptor antagonists', 'Sucralfate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2320,
    question: `A patient presents with intense itching, especially at night, and a history of contact with children. What is the most likely diagnosis?`,
    options: ['Scabies', 'Psoriasis', 'Eczema', 'Dermatitis herpetiformis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2321,
    question: `A newborn is diagnosed with respiratory distress and a "ground-glass" appearance on chest X-ray. What condition is likely?`,
    options: ['Meconium aspiration syndrome', 'Transient tachypnea of the newborn', 'Respiratory distress syndrome', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2322,
    question: `A woman presents with irregular heavy bleeding at age 52. The first investigation should be:`,
    options: ['Pap smear', 'Ultrasound pelvis', 'Endometrial biopsy', 'Hormonal profile'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2323,
    question: `A patient with a history of asthma presents with worsening wheezing and chest tightness. What is the most appropriate immediate management?`,
    options: ['Oral corticosteroids', 'Long-acting beta agonists', 'Short-acting beta agonists', 'Anticholinergics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2324,
    question: `In a patient with diabetes, which of the following complications is most commonly associated with nephropathy?`,
    options: ['Retinopathy', 'Neuropathy', 'Cardiovascular disease', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2325,
    question: `A 50-year-old man presents with difficulty swallowing and weight loss. What is the most appropriate initial test?`,
    options: ['Endoscopy', 'Barium swallow', 'CT scan', 'Esophageal manometry'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2326,
    question: `What is the most common presentation of aortic dissection?`,
    options: ['Abdominal pain', 'Back pain', 'Chest pain', 'Leg pain'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2327,
    question: `In which condition is the "ketotic breath" commonly observed?`,
    options: ['Chronic kidney disease', 'Diabetic ketoacidosis', 'Liver failure', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2328,
    question: `A young woman presents with excessive hair growth in a male-pattern distribution. What condition is likely?`,
    options: ['Polycystic ovary syndrome', 'Cushing\'s syndrome', 'Hyperthyroidism', 'Hypopituitarism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2329,
    question: `A patient presents with persistent diarrhea, abdominal cramping, and weight loss after traveling abroad. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Giardia infection', 'Lactose intolerance', 'Irritable bowel syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2330,
    question: `A patient with a known history of heart failure presents with sudden shortness of breath and leg swelling. What is the most likely cause?`,
    options: ['Pneumonia', 'Pulmonary embolism', 'Acute decompensated heart failure', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2331,
    question: `A 30-year-old man presents with swelling in the groin area that increases with straining and reduces when lying down. What is the most likely diagnosis?`,
    options: ['Hydrocele', 'Inguinal hernia', 'Varicocele', 'Epididymitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2332,
    question: `A 40-year-old female presents with fatigue, weight gain, and cold intolerance. Laboratory tests show low TSH and low T4 levels. What is the likely diagnosis?`,
    options: ['Primary hypothyroidism', 'Secondary hypothyroidism', 'Hyperthyroidism', 'Euthyroid sick syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2333,
    question: `In which condition is the “potter's face” seen?`,
    options: ['Down syndrome', 'Cystic fibrosis', 'Renal agenesis', 'Turner syndrome'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2334,
    question: `A 65-year-old male with a history of chronic smoking presents with a productive cough, shortness of breath, and cyanosis. His ABG shows hypoxemia and hypercapnia. What is the most likely diagnosis?`,
    options: ['Asthma', 'Chronic bronchitis', 'Pulmonary embolism', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2335,
    question: `A 70-year-old woman with a history of osteoporosis presents with sudden onset of severe back pain after lifting a heavy object. What is the most likely diagnosis?`,
    options: ['Lumbar strain', 'Herniated disc', 'Vertebral compression fracture', 'Sciatica'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2336,
    question: `A patient presents with swollen lymph nodes, fever, and night sweats. What is the most likely diagnosis?`,
    options: ['Hodgkin\'s lymphoma', 'Non-Hodgkin lymphoma', 'Tuberculosis', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2337,
    question: `A patient with chronic heart failure is being assessed for fluid status. Which of the following signs is most indicative of fluid overload?`,
    options: ['Decreased urine output', 'Edema', 'Ascites', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2338,
    question: `The classic triad of symptoms in a patient with aortic stenosis includes:`,
    options: ['Syncope, angina, and dyspnea', 'Fever, chills, and night sweats', 'Edema, shortness of breath, and orthopnea', 'Jaundice, dark urine, and clay-colored stools'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2339,
    question: `In which condition would you most likely find a "bull's eye" appearance on a skin lesion?`,
    options: ['Psoriasis', 'Erythema multiforme', 'Basal cell carcinoma', 'Tinea corporis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2340,
    question: `A patient with suspected peptic ulcer disease is treated with a proton pump inhibitor. What is the most commonly prescribed PPI?`,
    options: ['Ranitidine', 'Omeprazole', 'Famotidine', 'Lansoprazole'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2341,
    question: `A 32-year-old woman presents with pelvic pain and dyspareunia. A pelvic ultrasound shows an ovarian cyst. What is the most likely treatment?`,
    options: ['Surgery', 'Watchful waiting', 'Hormonal therapy', 'Antibiotics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2342,
    question: `A patient presents with severe abdominal pain and a high white blood cell count. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Pancreatitis', 'Peptic ulcer disease', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2343,
    question: `What is the hallmark feature of osteoarthritis on X-ray?`,
    options: ['Joint space narrowing', 'Osteoporosis', 'Soft tissue swelling', 'Periosteal reaction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2344,
    question: `A patient with a history of COPD presents with increased dyspnea, productive cough, and fever. What is the most likely cause of this acute exacerbation?`,
    options: ['Viral infection', 'Bacterial infection', 'Asthma', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2345,
    question: `A 32-year-old woman presents with secondary amenorrhea, galactorrhea, and headaches. MRI reveals a 1.5 cm pituitary mass. The first-line management is:`,
    options: ['Transsphenoidal surgery', 'Cabergoline therapy', 'Bromocriptine therapy', 'Observation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2346,
    question: `In a patient with chronic kidney disease, which electrolyte is most likely to be elevated?`,
    options: ['Sodium', 'Potassium', 'Calcium', 'Phosphate'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2347,
    question: `A patient with a history of chronic alcohol use presents with confusion and ataxia. Which condition should be suspected?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2348,
    question: `Which medication is used as first-line therapy for anaphylaxis?`,
    options: ['Diphenhydramine', 'Epinephrine', 'Corticosteroids', 'Albuterol'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2349,
    question: `Which of the following is the most common type of stroke in patients with atrial fibrillation?`,
    options: ['Hemorrhagic stroke', 'Ischemic stroke', 'Lacunar stroke', 'Transient ischemic attack (TIA)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2350,
    question: `Which of the following is a common cause of hemolytic anemia?`,
    options: ['Iron deficiency', 'Sickle cell disease', 'Folate deficiency', 'Aplastic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2351,
    question: `A patient with end-stage liver disease presents with ascites. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Liver transplant', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2352,
    question: `The main action of aldosterone is to:`,
    options: ['Increase potassium excretion', 'Increase sodium reabsorption', 'Decrease blood volume', 'Decrease blood pressure'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2353,
    question: `A patient presents with excessive thirst, polyuria, and hypernatremia. What is the most likely diagnosis?`,
    options: ['Diabetes insipidus', 'Type 1 diabetes mellitus', 'Syndrome of inappropriate ADH secretion (SIADH)', 'Conn’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2354,
    question: `A patient presents with severe, sudden abdominal pain, distension, and "currant jelly" stools. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Bowel obstruction', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2355,
    question: `A 30-year-old woman presents with irregular menstrual cycles and signs of hirsutism. What is the most appropriate initial diagnostic test?`,
    options: ['Serum progesterone', 'Serum testosterone', 'Pelvic ultrasound', 'Fasting insulin level'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2356,
    question: `A patient presents with a sudden onset of severe chest pain radiating to the left arm. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Angina pectoris', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2357,
    question: `Which of the following is a classic finding in a patient with hyperthyroidism?`,
    options: ['Bradycardia', 'Weight gain', 'Exophthalmos', 'Cold intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2358,
    question: `A patient with a history of hypertension and hyperlipidemia presents with sudden onset of weakness in the right arm and leg. What is the most likely diagnosis?`,
    options: ['Ischemic stroke', 'Hemorrhagic stroke', 'Transient ischemic attack', 'Multiple sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2359,
    question: `A 45-year-old male presents with a history of recurrent headaches and episodes of flushing. What condition should be suspected?`,
    options: ['Pheochromocytoma', 'Menopause', 'Anxiety disorder', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2360,
    question: `A patient with cirrhosis presents with confusion and asterixis. His serum ammonia levels are elevated. What is the treatment of choice?`,
    options: ['Lactulose', 'Rifaximin', 'Neomycin', 'Metronidazole'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2361,
    question: `A 16-year-old male presents with scrotal pain, swelling, and a high-riding testis. The cremasteric reflex is absent. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2362,
    question: `A 30-year-old female presents with fatigue, pallor, and a positive Schilling test. What is the likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Megaloblastic anemia', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2363,
    question: `A 15-year-old boy presents with knee pain after a sports injury. What is the most likely diagnosis if there is swelling and inability to bear weight?`,
    options: ['Patellar tendinitis', 'Meniscus tear', 'ACL tear', 'Osteochondritis dissecans'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2364,
    question: `A 5-year-old child presents with a rash that started on the face and spread to the trunk and extremities. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Chickenpox', 'Fifth disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2365,
    question: `A patient presents with palpitations and dizziness. An ECG shows atrial fibrillation. What is the most appropriate initial treatment?`,
    options: ['Rate control', 'Anticoagulation', 'Rhythm control', 'Cardioversion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2366,
    question: `A 70-year-old male presents with difficulty urinating, and a digital rectal exam reveals an enlarged prostate. What is the most likely diagnosis?`,
    options: ['Prostate cancer', 'Benign prostatic hyperplasia', 'Prostatitis', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2367,
    question: `A child presents with sudden onset of high fever, sore throat, and a grayish membrane on the tonsils. What is the most likely diagnosis?`,
    options: ['Streptococcal pharyngitis', 'Diphtheria', 'Infectious mononucleosis', 'Viral pharyngitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2368,
    question: `A 30-year-old woman presents with irregular menstrual cycles and hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2369,
    question: `A 50-year-old male presents with difficulty swallowing and weight loss. What is the most concerning potential diagnosis?`,
    options: ['Gastroesophageal reflux disease (GERD)', 'Achalasia', 'Esophageal cancer', 'Peptic ulcer disease'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2370,
    question: `In an asthmatic patient, the primary abnormality observed during an acute attack is:`,
    options: ['Decreased lung volumes', 'Decreased forced expiratory volume (FEV1)', 'Increased total lung capacity (TLC)', 'Decreased residual volume (RV)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2371,
    question: `A 40-year-old woman presents with abnormal uterine bleeding and a pelvic mass on examination. What is the most likely diagnosis?`,
    options: ['Uterine fibroids', 'Endometrial cancer', 'Ovarian cyst', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2372,
    question: `A pregnant woman presents with pruritus and elevated bile acids. Diagnosis is:`,
    options: ['Acute hepatitis', 'HELLP syndrome', 'Intrahepatic cholestasis of pregnancy', 'Fatty liver of pregnancy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2373,
    question: `Which of the following is the primary cause of cardiogenic shock?`,
    options: ['Hypovolemia', 'Arrhythmias', 'Myocardial infarction', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2374,
    question: `The Bishop score is used to assess:`,
    options: ['Fetal wellbeing', 'Cervical favorability for induction', 'Placental maturity', 'Pelvic adequacy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2375,
    question: `Which of the following tests is most specific for the diagnosis of myocardial infarction?`,
    options: ['Troponin I', 'Creatine kinase', 'Myoglobin', 'Lactic dehydrogenase'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2376,
    question: `Which of the following is the most common cause of pneumonia in adults?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Haemophilus influenzae', 'Mycoplasma pneumoniae'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2377,
    question: `A 25-year-old female presents with amenorrhea and hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Hypothalamic amenorrhea', 'Primary ovarian insufficiency', 'Hyperprolactinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2378,
    question: `A patient with severe chest pain and a history of hyperlipidemia undergoes an angiogram. What is the most likely finding?`,
    options: ['Aortic dissection', 'Coronary artery blockage', 'Pulmonary embolism', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2379,
    question: `A 50-year-old man presents with a chronic cough, hemoptysis, and weight loss. Chest X-ray reveals a mass in the lung apex. What is the most likely diagnosis?`,
    options: ['Squamous cell carcinoma', 'Small cell lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2380,
    question: `Which laboratory test is used to assess kidney function?`,
    options: ['Serum creatinine', 'Blood glucose', 'Liver function test', 'Complete blood count'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2381,
    question: `A 6-month-old infant presents with projectile vomiting after feeding and is described as "olive-shaped" on examination. What is the most likely diagnosis?`,
    options: ['Pyloric stenosis', 'Gastroesophageal reflux', 'Intussusception', 'Malrotation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2382,
    question: `A patient with severe hypertension and a history of chronic kidney disease is likely to have which of the following?`,
    options: ['Primary hypertension', 'Secondary hypertension', 'Resistant hypertension', 'White coat hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2383,
    question: `Which of the following is the first-line therapy for Helicobacter pylori infection?`,
    options: ['Amoxicillin and clarithromycin', 'Metronidazole and tetracycline', 'Proton pump inhibitor and bismuth', 'Triple therapy with two antibiotics and a proton pump inhibitor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2384,
    question: `A 40-year-old man presents with difficulty urinating and lower back pain. What is the most likely diagnosis?`,
    options: ['Benign prostatic hyperplasia', 'Prostate cancer', 'Urinary tract infection', 'Bladder stones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2385,
    question: `A 55-year-old male smoker presents with a persistent cough and unexplained weight loss. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2386,
    question: `In a patient with suspected pulmonary embolism, which imaging study is most useful?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'MRI of the chest', 'Ultrasound of the legs'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2387,
    question: `A child with a family history of asthma presents with wheezing and difficulty breathing. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Croup', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2388,
    question: `A child presents with sudden onset of abdominal pain and "currant jelly" stools. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2389,
    question: `Which of the following is the treatment of choice for patent ductus arteriosus in premature infants?`,
    options: ['Indomethacin', 'Propranolol', 'Digoxin', 'Furosemide'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2390,
    question: `A 30-year-old male presents with acute onset of unilateral testicular pain and swelling. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2391,
    question: `In the management of diabetes mellitus, which class of medication works by increasing insulin sensitivity?`,
    options: ['Sulfonylureas', 'Biguanides', 'DPP-4 inhibitors', 'GLP-1 receptor agonists'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2392,
    question: `A 10-year-old child presents with abdominal pain, bloody diarrhea, and fever. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Inflammatory bowel disease', 'Gastroenteritis', 'Intussusception'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2393,
    question: `The most common cause of secondary amenorrhea is:`,
    options: ['Pregnancy', 'PCOS', 'Hypothyroidism', 'Hyperprolactinemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2394,
    question: `Which of the following is the most common complication of peptic ulcer disease?`,
    options: ['Perforation', 'Hemorrhage', 'Gastric outlet obstruction', 'Penetration'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2395,
    question: `In which of the following conditions would you expect to see a "barking" cough?`,
    options: ['Asthma', 'Croup', 'Bronchiolitis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2396,
    question: `A 40-year-old female presents with palpitations and heat intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Anxiety disorder', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2397,
    question: `In rheumatoid arthritis, the most commonly affected joint in the hand is:`,
    options: ['Distal interphalangeal joint', 'Proximal interphalangeal joint', 'Metacarpophalangeal joint', 'Carpometacarpal joint'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2398,
    question: `Which of the following is the primary treatment for anaphylaxis?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Albuterol'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2399,
    question: `Which medication is a common treatment for hypertension in pregnancy?`,
    options: ['ACE inhibitors', 'Methyldopa', 'Thiazide diuretics', 'Beta-blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2400,
    question: `A child presents with dark urine, periorbital edema, and recent history of a streptococcal throat infection. What is the most likely diagnosis?`,
    options: ['Post-streptococcal glomerulonephritis', 'Nephrotic syndrome', 'IgA nephropathy', 'Henoch-Schönlein purpura'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2401,
    question: `A 32-year-old primigravida presents with headache, epigastric pain, BP 180/120 mmHg, and proteinuria. She develops seizures. Management should be:`,
    options: ['IV magnesium sulfate and control BP', 'Immediate cesarean section without magnesium', 'Oral antihypertensives only', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2402,
    question: `Which laboratory finding is most consistent with hyperaldosteronism?`,
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypernatremia', 'Hyponatremia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2403,
    question: `The mainstay of treatment for hyperthyroidism caused by Graves' disease is:`,
    options: ['Radioactive iodine', 'Methimazole', 'Beta-blockers', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2404,
    question: `Which of the following medications is used in the treatment of anaphylaxis?`,
    options: ['Diphenhydramine', 'Epinephrine', 'Prednisone', 'Albuterol'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2405,
    question: `Which type of heart failure is characterized by preserved ejection fraction?`,
    options: ['Systolic heart failure', 'Diastolic heart failure', 'Right-sided heart failure', 'Left-sided heart failure'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2406,
    question: `In patients with hypertension, what is the target blood pressure according to current guidelines?`,
    options: ['<140/90 mmHg', '<130/80 mmHg', '<150/90 mmHg', '<160/100 mmHg'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2407,
    question: `A 25-year-old male presents with a rash, fever, and joint pain after returning from a tropical vacation. What is the most likely diagnosis?`,
    options: ['Dengue fever', 'Zika virus', 'Chikungunya', 'Malaria'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2408,
    question: `A 45-year-old man presents with persistent hematuria and flank pain. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Nephrolithiasis', 'Prostate cancer', 'Renal cell carcinoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2409,
    question: `A 65-year-old man presents with gradual loss of vision, difficulty reading, and seeing halos around lights. What is the most likely diagnosis?`,
    options: ['Cataract', 'Glaucoma', 'Macular degeneration', 'Diabetic retinopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2410,
    question: `Which disorder is associated with "moon facies" and "buffalo hump"?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hyperthyroidism', 'Hypopituitarism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2411,
    question: `A 50-year-old woman presents with sudden onset of vision loss in one eye. What is the most likely cause?`,
    options: ['Retinal detachment', 'Acute glaucoma', 'Central retinal artery occlusion', 'Vitreous hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2412,
    question: `Which of the following is the most appropriate management for a patient with a Colles’ fracture?`,
    options: ['Surgical fixation', 'Plaster cast immobilization', 'Traction', 'Observation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2413,
    question: `A 65-year-old man presents with difficulty starting urination, weak urine stream, and nocturia. His prostate is enlarged on digital rectal exam. What is the most likely diagnosis?`,
    options: ['Benign prostatic hyperplasia (BPH)', 'Prostate cancer', 'Urethral stricture', 'Bladder cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2414,
    question: `Which test is most commonly used to diagnose diabetes mellitus?`,
    options: ['HbA1c', 'Fasting blood glucose', 'Oral glucose tolerance test', 'Random blood glucose'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2415,
    question: `A patient with hyperkalemia presents with peaked T-waves on ECG. What is the first-line treatment?`,
    options: ['Calcium gluconate', 'Insulin and glucose', 'Sodium bicarbonate', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2416,
    question: `A patient presents with a red, swollen joint that is hot to touch. Synovial fluid analysis shows urate crystals. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Pseudogout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2417,
    question: `In a patient with severe asthma exacerbation, what is the appropriate step if the patient does not respond to initial bronchodilator therapy?`,
    options: ['Increase the dose of bronchodilator', 'Administer corticosteroids', 'Start oxygen therapy', 'Refer for intubation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2418,
    question: `A patient presents with weight loss, night sweats, and a persistent cough. What condition should be suspected?`,
    options: ['Tuberculosis', 'Lung cancer', 'Chronic bronchitis', 'Sarcoidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2419,
    question: `A patient presents with chest pain that worsens with inspiration and is relieved by leaning forward. What is the most likely diagnosis?`,
    options: ['Pericarditis', 'Myocardial infarction', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2420,
    question: `A 60-year-old man presents with a slow-growing lump on the neck. A biopsy reveals follicular thyroid carcinoma. What is the most appropriate next step in management?`,
    options: ['Observation', 'Radioactive iodine therapy', 'Total thyroidectomy', 'Chemotherapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2421,
    question: `What is the primary diagnostic test for diagnosing type 1 diabetes mellitus?`,
    options: ['Fasting blood glucose', 'Oral glucose tolerance test', 'Autoantibody testing', 'Hemoglobin A1c'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2422,
    question: `A patient with polyuria, polydipsia, and polyphagia is likely to be suffering from:`,
    options: ['Diabetes insipidus', 'Type 2 diabetes mellitus', 'Cushing\'s disease', 'Addison\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2423,
    question: `The most common organism causing puerperal sepsis is:`,
    options: ['Escherichia coli', 'Staphylococcus aureus', 'Streptococcus pyogenes', 'Clostridium tetani'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2424,
    question: `The most common cause of hypothyroidism in iodine-sufficient areas is:`,
    options: ['Hashimoto\'s thyroiditis', 'Post-surgical', 'Iodine deficiency', 'Thyroid cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2425,
    question: `A patient presents with a palpable breast mass and nipple discharge. What is the most appropriate next step in management?`,
    options: ['Ultrasound', 'Mammography', 'Fine needle aspiration', 'Surgical referral'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2426,
    question: `Which electrolyte abnormality is commonly seen in patients with chronic alcoholism?`,
    options: ['Hyperkalemia', 'Hypomagnesemia', 'Hypernatremia', 'Hypocalcemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2427,
    question: `A 50-year-old female presents with a butterfly-shaped rash on her face, photosensitivity, and joint pain. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Psoriatic arthritis', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2428,
    question: `The presence of "Auer rods" in peripheral blood smear is indicative of which condition?`,
    options: ['Acute myeloid leukemia', 'Chronic lymphocytic leukemia', 'Multiple myeloma', 'Lymphoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2429,
    question: `What is the recommended initial treatment for a patient with acute severe asthma?`,
    options: ['Oral corticosteroids', 'Inhaled corticosteroids', 'Short-acting beta-agonists', 'Long-acting beta-agonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2430,
    question: `In a patient with heart failure, what is the primary role of diuretics?`,
    options: ['Decrease heart rate', 'Increase cardiac output', 'Reduce fluid overload', 'Improve renal function'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2431,
    question: `The presence of "barking" cough in a child is most suggestive of:`,
    options: ['Croup', 'Asthma', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2432,
    question: `A 60-year-old man presents with abdominal pain, weight loss, and jaundice. A CT scan reveals a mass at the head of the pancreas. What is the most likely diagnosis?`,
    options: ['Acute pancreatitis', 'Chronic pancreatitis', 'Pancreatic cancer', 'Pancreatic pseudocyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2433,
    question: `A patient with a history of smoking presents with persistent hoarseness. What is the most concerning diagnosis?`,
    options: ['Laryngeal cancer', 'Vocal cord nodules', 'Laryngitis', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2434,
    question: `Which of the following conditions is characterized by hypercalcemia?`,
    options: ['Hypoparathyroidism', 'Primary hyperparathyroidism', 'Addison\'s disease', 'Osteomalacia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2435,
    question: `A newborn presents with a harsh, machine-like murmur. What congenital heart defect is most likely?`,
    options: ['Tetralogy of Fallot', 'Ventricular septal defect (VSD)', 'Patent ductus arteriosus (PDA)', 'Atrial septal defect (ASD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2436,
    question: `The most common organism responsible for community-acquired pneumonia in adults is:`,
    options: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Haemophilus influenzae', 'Chlamydia pneumoniae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2437,
    question: `A 25-year-old male presents with a non-tender testicular mass. What is the most appropriate next step?`,
    options: ['Ultrasound of the scrotum', 'Fine-needle aspiration biopsy', 'Antibiotics', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2438,
    question: `A 35-year-old female presents with a chronic cough, night sweats, and weight loss. Chest X-ray reveals cavitary lesions in the upper lobes. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Lung cancer', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2439,
    question: `A 65-year-old male presents with chest pain and dyspnea. An ECG shows ST elevation in the inferior leads. What is the most likely artery involved?`,
    options: ['Left anterior descending artery', 'Left circumflex artery', 'Right coronary artery', 'Diagonal artery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2440,
    question: `Which of the following laboratory findings is most consistent with diabetic ketoacidosis (DKA)?`,
    options: ['Elevated blood glucose and metabolic acidosis', 'Elevated blood glucose and respiratory alkalosis', 'Normal blood glucose and metabolic alkalosis', 'Normal blood glucose and respiratory acidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2441,
    question: `A 35-year-old female presents with bilateral breast tenderness and lumpiness in her breasts. What is the most likely diagnosis?`,
    options: ['Fibrocystic changes', 'Breast cancer', 'Fibroadenoma', 'Mastitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2442,
    question: `A newborn presents with a failure to pass meconium in the first 24 hours. What condition should be suspected?`,
    options: ['Cystic fibrosis', 'Hirschsprung\'s disease', 'Intestinal atresia', 'Neonatal sepsis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2443,
    question: `Which of the following conditions is characterized by a "honeycomb lung" appearance on imaging?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Idiopathic pulmonary fibrosis', 'Bronchiectasis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2444,
    question: `What is the most appropriate initial management for a patient presenting with an acute asthma attack?`,
    options: ['Systemic corticosteroids', 'Short-acting beta-agonist', 'Long-acting beta-agonist', 'Anticholinergics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2445,
    question: `A patient presents with chronic fatigue, weight gain, and a moon facies. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Addison\'s disease', 'Hypothyroidism', 'Acromegaly'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2446,
    question: `A patient presents with a "bull's eye" rash after returning from a camping trip. What is the most likely diagnosis?`,
    options: ['Lyme disease', 'Rocky Mountain spotted fever', 'Erythema migrans', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2447,
    question: `A patient presents with a sudden onset of unilateral facial weakness. What is the most likely diagnosis?`,
    options: ['Bell\'s palsy', 'Stroke', 'Multiple sclerosis', 'Trigeminal neuralgia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2448,
    question: `In a patient with suspected appendicitis, which sign is most commonly assessed?`,
    options: ['Murphy\'s sign', 'Psoas sign', 'McBurney\'s point tenderness', 'Obturator sign'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2449,
    question: `A 40-year-old man with a history of chronic alcohol use presents with epigastric pain radiating to the back and elevated serum lipase. What is the most likely diagnosis?`,
    options: ['Acute cholecystitis', 'Acute pancreatitis', 'Peptic ulcer disease', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2450,
    question: `A patient with chronic obstructive pulmonary disease (COPD) is most likely to have:`,
    options: ['Increased lung compliance', 'Decreased residual volume', 'Increased expiratory flow rate', 'Decreased forced expiratory volume (FEV1)'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2451,
    question: `A patient with fever, fatigue, and a sore throat has a positive rapid antigen test for streptococcal pharyngitis. What is the most appropriate treatment?`,
    options: ['Amoxicillin', 'Azithromycin', 'Clindamycin', 'No treatment needed'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2452,
    question: `In patients with depression, which class of medications is often used as first-line treatment?`,
    options: ['Benzodiazepines', 'Antipsychotics', 'Selective serotonin reuptake inhibitors (SSRIs)', 'Mood stabilizers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2453,
    question: `What is the gold standard test for diagnosing pulmonary embolism?`,
    options: ['Chest X-ray', 'CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan', 'Doppler ultrasound'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2454,
    question: `Which of the following is a hallmark symptom of hyperthyroidism?`,
    options: ['Bradycardia', 'Weight gain', 'Anxiety', 'Cold intolerance'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2455,
    question: `A patient with known coronary artery disease presents with sudden chest pain and ST-segment elevation on ECG. What is the most appropriate immediate treatment?`,
    options: ['Nitroglycerin', 'Aspirin', 'Thrombolytics', 'Beta-blockers'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2456,
    question: `In an adult, the normal range for blood glucose levels is:`,
    options: ['70-100 mg/dL', '80-120 mg/dL', '90-140 mg/dL', '100-150 mg/dL'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2457,
    question: `What is the most common presenting symptom of chronic renal failure?`,
    options: ['Edema', 'Anemia', 'Fatigue', 'Hypertension'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2458,
    question: `Which vitamin deficiency is associated with Wernicke's encephalopathy?`,
    options: ['Vitamin B6', 'Vitamin B12', 'Thiamine (Vitamin B1)', 'Vitamin D'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2459,
    question: `Which medication is commonly used for the treatment of hyperlipidemia?`,
    options: ['Aspirin', 'Statins', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2460,
    question: `A child presents with a high fever, sore throat, and a grayish membrane on the tonsils. What is the most likely diagnosis?`,
    options: ['Diphtheria', 'Streptococcal pharyngitis', 'Infectious mononucleosis', 'Viral pharyngitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2461,
    question: `A patient with a history of asthma presents with sudden wheezing and chest tightness after exercise. What is the most likely cause?`,
    options: ['Exercise-induced bronchospasm', 'Allergic reaction', 'Infection', 'Air pollution'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2462,
    question: `Which of the following is the first-line treatment for bacterial vaginosis?`,
    options: ['Amoxicillin', 'Metronidazole', 'Doxycycline', 'Clindamycin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2463,
    question: `A patient with chronic kidney disease presents with a low serum calcium level and high phosphate level. What is the most likely diagnosis?`,
    options: ['Secondary hyperparathyroidism', 'Primary hyperparathyroidism', 'Osteomalacia', 'Paget\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2464,
    question: `A pregnant woman with pruritus, dark urine, and elevated bile acids is diagnosed with:`,
    options: ['HELLP syndrome', 'Acute hepatitis', 'Intrahepatic cholestasis of pregnancy', 'Fatty liver of pregnancy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2465,
    question: `A 70-year-old man presents with difficulty urinating and a weak stream. What is the most likely diagnosis?`,
    options: ['Prostatitis', 'Benign prostatic hyperplasia', 'Prostate cancer', 'Urethral stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2466,
    question: `A patient presents with fatigue, joint pain, and a butterfly-shaped rash across the cheeks. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Dermatomyositis', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2467,
    question: `The most common cause of maternal mortality in Pakistan is:`,
    options: ['Sepsis', 'Hypertensive disorders', 'Hemorrhage', 'Obstructed labor'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2468,
    question: `The "fish mouth" appearance on an X-ray is associated with which condition?`,
    options: ['Thrombocytopenia', 'Thrombocytosis', 'Hemophilia', 'Von Willebrand disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2469,
    question: `What is the most appropriate initial management for a patient with an acute asthma exacerbation?`,
    options: ['Corticosteroids', 'Inhaled beta-agonists', 'Antibiotics', 'Oxygen therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2470,
    question: `Which of the following is the primary treatment for open-angle glaucoma?`,
    options: ['Beta-blockers', 'Alpha-agonists', 'Carbonic anhydrase inhibitors', 'Prostaglandin analogs'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2471,
    question: `In patients with chronic heart failure, which symptom is most commonly reported?`,
    options: ['Chest pain', 'Palpitations', 'Dyspnea on exertion', 'Syncope'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2472,
    question: `Which of the following is a common cause of osteomyelitis?`,
    options: ['Staphylococcus aureus', 'Streptococcus pneumoniae', 'Escherichia coli', 'Pseudomonas aeruginosa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2473,
    question: `Which of the following is a common side effect of long-term steroid use?`,
    options: ['Weight loss', 'Cushing\'s syndrome', 'Hyperkalemia', 'Hypoglycemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2474,
    question: `A patient presents with severe headache, neck stiffness, and photophobia. What is the most likely diagnosis?`,
    options: ['Meningitis', 'Encephalitis', 'Subarachnoid hemorrhage', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2475,
    question: `A patient presents with severe abdominal pain, jaundice, and dark urine. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Acute pancreatitis', 'Hepatitis', 'Biliary obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2476,
    question: `A 60-year-old male presents with severe tearing chest pain radiating to the back. His blood pressure is markedly different in both arms. What is the most likely diagnosis?`,
    options: ['Acute coronary syndrome', 'Aortic dissection', 'Pulmonary embolism', 'Tension pneumothorax'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2477,
    question: `A patient is diagnosed with hypertension and prescribed a diuretic. What is the most common side effect associated with thiazide diuretics?`,
    options: ['Hyperkalemia', 'Hyponatremia', 'Hypercalcemia', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2478,
    question: `In children, the most common cause of pediatric heart failure is:`,
    options: ['Congenital heart defects', 'Myocarditis', 'Cardiomyopathy', 'Valvular heart disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2479,
    question: `What is the mechanism of action of angiotensin-converting enzyme (ACE) inhibitors?`,
    options: ['Increase calcium reabsorption', 'Block aldosterone secretion', 'Inhibit the conversion of angiotensin I to angiotensin II', 'Increase heart rate'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2480,
    question: `A patient with a history of asthma presents with worsening wheezing and shortness of breath after exposure to a known allergen. What is the immediate treatment of choice?`,
    options: ['Corticosteroids', 'Bronchodilators (e.g., albuterol)', 'Antihistamines', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2481,
    question: `A 30-year-old woman presents with a painless breast lump. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Mastitis', 'Breast cancer', 'Cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2482,
    question: `What is the primary action of statins in the treatment of hyperlipidemia?`,
    options: ['Increase HDL levels', 'Decrease LDL levels', 'Decrease triglyceride levels', 'Increase VLDL levels'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2483,
    question: `The most common cause of acute bacterial rhinosinusitis is:`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Moraxella catarrhalis', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2484,
    question: `A patient presents with fatigue, weight gain, and cold intolerance. Lab tests show elevated TSH and low free T4. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Graves’ disease', 'Hashimoto’s thyroiditis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2485,
    question: `A 5-year-old child presents with recurrent abdominal pain and "failure to thrive." What condition should be considered?`,
    options: ['Celiac disease', 'Appendicitis', 'Intussusception', 'Lactose intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2486,
    question: `The most common tumor of the adrenal gland is:`,
    options: ['Pheochromocytoma', 'Adrenal adenoma', 'Adrenal carcinoma', 'Neuroblastoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2487,
    question: `A patient presents with an unexplained weight loss and hypercalcemia. What is the most likely underlying condition?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Sarcoidosis', 'Thyroid disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2488,
    question: `A patient presents with persistent cough and chest pain. Sputum analysis shows acid-fast bacilli. What is the most likely diagnosis?`,
    options: ['Bronchitis', 'Tuberculosis', 'Lung cancer', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2489,
    question: `Which laboratory test is primarily used to monitor anticoagulation therapy with warfarin?`,
    options: ['PT/INR (Prothrombin Time/International Normalized Ratio)', 'aPTT (Activated Partial Thromboplastin Time)', 'CBC (Complete Blood Count)', 'Serum creatinine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2490,
    question: `Which of the following conditions is associated with a "buffalo hump"?`,
    options: ['Cushing\'s syndrome', 'Addison\'s disease', 'Hypopituitarism', 'Acromegaly'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2491,
    question: `A child presents with difficulty in walking and waddling gait. Genetic testing reveals a deletion on chromosome 21. What is the most likely diagnosis?`,
    options: ['Duchenne muscular dystrophy', 'Becker muscular dystrophy', 'Spinal muscular atrophy', 'Myotonic dystrophy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2492,
    question: `The first-line treatment for hyperkalemia with ECG changes is:`,
    options: ['Intravenous calcium gluconate', 'Intravenous insulin and glucose', 'Oral sodium bicarbonate', 'Loop diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2493,
    question: `Which of the following is a classic feature of myasthenia gravis?`,
    options: ['Muscle atrophy', 'Fluctuating muscle weakness', 'Hyperreflexia', 'Seizures'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2494,
    question: `The most common indication for induction of labor is:`,
    options: ['Postdated pregnancy', 'Fetal distress', 'Preeclampsia', 'PROM'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2495,
    question: `In a patient with suspected meningitis, which of the following cerebrospinal fluid (CSF) findings is most consistent with bacterial meningitis?`,
    options: ['Elevated protein and normal glucose', 'Elevated protein and low glucose', 'Normal protein and elevated glucose', 'Low protein and low glucose'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2496,
    question: `A 70-year-old male presents with sudden onset of weakness in the left arm and leg. What is the most appropriate initial imaging study?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Carotid ultrasound', 'EEG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2497,
    question: `A 65-year-old male presents with a new-onset, painless jaundice and significant weight loss. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Hepatitis', 'Gallstones', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2498,
    question: `A patient presents with muscle weakness and dry eyes. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Guillain-Barré syndrome', 'Multiple sclerosis', 'Amyotrophic lateral sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2499,
    question: `A patient presents with weight gain, moon facies, and abdominal striae. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hypothyroidism', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2500,
    question: `Which vaccine is recommended for the prevention of cervical cancer?`,
    options: ['MMR', 'Influenza', 'HPV', 'Hepatitis B'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2501,
    question: `The Glasgow Coma Scale (GCS) is used to assess:`,
    options: ['Brainstem reflexes', 'Consciousness level', 'Motor function', 'Sensory perception'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2502,
    question: `A patient presents with dysphagia and a sensation of food sticking in the throat. What is the most likely cause?`,
    options: ['Esophageal stricture', 'Gastroesophageal reflux disease', 'Achalasia', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2503,
    question: `Which of the following medications is contraindicated in pregnancy?`,
    options: ['Acetaminophen', 'Ibuprofen', 'Methotrexate', 'Insulin'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2504,
    question: `The most common cause of acute pancreatitis is:`,
    options: ['Alcohol consumption', 'Gallstones', 'Hyperlipidemia', 'Viral infection'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2505,
    question: `Which is the drug of choice for treating hyperthyroidism in pregnancy?`,
    options: ['Methimazole', 'Propylthiouracil', 'Radioactive iodine', 'Propranolol'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2506,
    question: `A 22-year-old female presents with heavy menstrual bleeding and severe pain. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Adenomyosis', 'Ovarian cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2507,
    question: `Which test is used to diagnose celiac disease?`,
    options: ['Stool culture', 'Serum transglutaminase antibodies', 'Liver function tests', 'Upper endoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2508,
    question: `A patient with known asthma presents with wheezing and shortness of breath after exercise. What is the most appropriate management?`,
    options: ['Short-acting beta-agonist before exercise', 'Long-acting beta-agonist before exercise', 'Daily oral corticosteroids', 'Antihistamines'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2509,
    question: `A patient presents with an ulcerated lesion on the lip that has not healed for several weeks. What is the most appropriate next step?`,
    options: ['Topical antibiotic', 'Surgical excision', 'Biopsy', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2510,
    question: `A woman presents with secondary amenorrhea and hirsutism. Lab tests show increased testosterone and LH:FSH > 2. The likely diagnosis is:`,
    options: ['PCOS', 'Congenital adrenal hyperplasia', 'Androgen-secreting tumor', 'Hypothyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2511,
    question: `A 70-year-old woman presents with a bulge in her groin that increases in size when she stands. What is the most likely diagnosis?`,
    options: ['Femoral hernia', 'Inguinal hernia', 'Incisional hernia', 'Umbilical hernia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2512,
    question: `Which of the following is a contraindication for thrombolytic therapy in acute myocardial infarction?`,
    options: ['Previous myocardial infarction', 'Active bleeding', 'Hypertension', 'Age over 75'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2513,
    question: `A woman presents with acute abdomen and missed period. Ultrasound shows empty uterus and adnexal mass. Diagnosis is:`,
    options: ['Appendicitis', 'Ectopic pregnancy', 'Miscarriage', 'Ovarian torsion'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2514,
    question: `Which of the following findings is characteristic of a tension pneumothorax?`,
    options: ['Hypotension', 'Tracheal deviation away from the affected side', 'Bilateral chest expansion', 'Bradycardia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2515,
    question: `A patient with chronic kidney disease develops bone pain and deformities. What is the most likely underlying cause?`,
    options: ['Osteitis fibrosa cystica', 'Osteoporosis', 'Paget\'s disease', 'Osteomalacia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2516,
    question: `A patient presents with painless lymphadenopathy, fever, and night sweats. What is the most likely diagnosis?`,
    options: ['Hodgkin lymphoma', 'Non-Hodgkin lymphoma', 'Chronic lymphocytic leukemia', 'Acute myeloid leukemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2517,
    question: `In a patient with a history of transient ischemic attacks (TIAs), which medication is most commonly prescribed for secondary prevention of stroke?`,
    options: ['Aspirin', 'Warfarin', 'Clopidogrel', 'Statins'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2518,
    question: `Which of the following is NOT a feature of metabolic syndrome?`,
    options: ['Central obesity', 'Hypertension', 'Hyperlipidemia', 'Hypoglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2519,
    question: `In patients with asthma, which of the following findings is most indicative of poorly controlled disease?`,
    options: ['Nighttime awakenings', 'Exercise-induced symptoms', 'Use of rescue inhaler more than twice a week', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2520,
    question: `A child presents with a high fever, lethargy, and a rash that started on the trunk and spread to the face. What is the most likely diagnosis?`,
    options: ['Roseola', 'Measles', 'Rubella', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2521,
    question: `Which condition is associated with the presence of "bamboo spine"?`,
    options: ['Osteoarthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Psoriatic arthritis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2522,
    question: `A patient presents with painless hematuria. What is the most likely diagnosis?`,
    options: ['Urinary tract infection', 'Bladder cancer', 'Nephrolithiasis', 'Glomerulonephritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2523,
    question: `A 45-year-old male presents with severe chest pain radiating to the left arm. What is the most likely cause?`,
    options: ['Myocardial infarction', 'Aortic dissection', 'Pulmonary embolism', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2524,
    question: `Which of the following is a major risk factor for developing deep vein thrombosis (DVT)?`,
    options: ['Sedentary lifestyle', 'Regular exercise', 'Low-fat diet', 'High fluid intake'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2525,
    question: `A woman presents with painless vaginal bleeding at 32 weeks gestation. Uterus is soft and non-tender. The likely diagnosis is:`,
    options: ['Placental abruption', 'Uterine rupture', 'Placenta previa', 'Vasa previa'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2526,
    question: `A 65-year-old man presents with severe shortness of breath and a history of congestive heart failure. What is the most likely finding on physical examination?`,
    options: ['Wheezing', 'Cyanosis', 'Crackles', 'Dullness to percussion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2527,
    question: `A woman presents with infertility and irregular cycles. Serum progesterone is low in luteal phase. This indicates:`,
    options: ['Anovulation', 'Tubal factor', 'Uterine factor', 'Cervical factor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2528,
    question: `Which laboratory finding is most indicative of acute pancreatitis?`,
    options: ['Elevated amylase and lipase', 'Low glucose levels', 'Elevated alkaline phosphatase', 'Low calcium levels'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2529,
    question: `The hallmark laboratory finding in hemolytic anemia is:`,
    options: ['Low hemoglobin', 'Elevated reticulocyte count', 'Low haptoglobin', 'Elevated LDH'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2530,
    question: `Which of the following is the first-line treatment for stable angina pectoris?`,
    options: ['Aspirin', 'Beta-blockers', 'ACE inhibitors', 'Nitrates'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2531,
    question: `A 50-year-old woman presents with hot flashes, night sweats, and mood changes. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Menopause', 'Premenstrual syndrome (PMS)', 'Depression'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2532,
    question: `Which of the following is the most appropriate initial treatment for hyperkalemia?`,
    options: ['Furosemide', 'Insulin and glucose', 'Calcium gluconate', 'Sodium bicarbonate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2533,
    question: `What is the main mechanism of action of aspirin in the prevention of cardiovascular events?`,
    options: ['Antiplatelet effect', 'Vasodilation', 'Cholesterol lowering', 'Anticoagulation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2534,
    question: `A patient with a history of diabetes presents with blurred vision and "floaters." What is the most likely diagnosis?`,
    options: ['Diabetic retinopathy', 'Cataracts', 'Macular degeneration', 'Retinal detachment'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2535,
    question: `A patient is diagnosed with chronic obstructive pulmonary disease (COPD) and presents with increased sputum production and worsening dyspnea. What is the most appropriate management?`,
    options: ['Antibiotics', 'Corticosteroids', 'Bronchodilators', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2536,
    question: `The most sensitive and specific test to diagnose ovarian torsion is:`,
    options: ['Ultrasound with Doppler', 'CT scan', 'MRI pelvis', 'Pelvic X-ray'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2537,
    question: `A patient with a history of smoking presents with a new cough and hemoptysis. What is the most appropriate next step?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Bronchoscopy', 'Sputum culture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2538,
    question: `A 25-year-old male presents with a history of frequent bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Ulcerative colitis', 'Crohn\'s disease', 'Celiac disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2539,
    question: `A patient with a history of hypertension presents with sudden onset of a severe headache, confusion, and seizures. What is the most likely diagnosis?`,
    options: ['Hypertensive crisis', 'Subdural hematoma', 'Intracerebral hemorrhage', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2540,
    question: `A patient presents with abdominal pain, diarrhea, and recent travel history to an endemic area. What is the most likely causative agent?`,
    options: ['Salmonella', 'Norovirus', 'Giardia lamblia', 'Shigella'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2541,
    question: `Which medication is the first-line treatment for type 2 diabetes mellitus?`,
    options: ['Insulin', 'Glipizide', 'Metformin', 'Dapagliflozin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2542,
    question: `What is the primary cause of hypernatremia?`,
    options: ['Excessive fluid intake', 'Dehydration', 'Renal failure', 'Excessive sodium intake'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2543,
    question: `A woman presents with heavy menstrual bleeding, normal uterus, and normal investigations. Diagnosis is:`,
    options: ['Fibroid uterus', 'Adenomyosis', 'Dysfunctional uterine bleeding', 'Endometrial carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2544,
    question: `Which of the following is a risk factor for developing coronary artery disease?`,
    options: ['High HDL levels', 'Low LDL levels', 'Smoking', 'Regular exercise'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2545,
    question: `A 45-year-old woman with a family history of breast cancer undergoes a mammogram that reveals a suspicious mass. What is the next step in management?`,
    options: ['Repeat mammogram', 'Ultrasound', 'Biopsy', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2546,
    question: `A 3-day-old infant is noted to have a heart murmur and a wide pulse pressure. What condition is most likely?`,
    options: ['Aortic stenosis', 'Patent ductus arteriosus', 'Coarctation of the aorta', 'Tetralogy of Fallot'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2547,
    question: `A child presents with recurrent abdominal pain and bloody diarrhea. What is the most likely diagnosis?`,
    options: ['Celiac disease', 'Crohn\'s disease', 'Ulcerative colitis', 'Irritable bowel syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2548,
    question: `A patient with chronic obstructive pulmonary disease (COPD) presents with a productive cough and wheezing. What is the most likely cause?`,
    options: ['Viral infection', 'Bacterial infection', 'Allergies', 'Air pollution'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2549,
    question: `A patient with a history of smoking presents with a new cough and weight loss. What is the most appropriate next step in management?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum culture', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2550,
    question: `In a patient with chronic kidney disease, which electrolyte imbalance is most common?`,
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypernatremia', 'Hypocalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2551,
    question: `Which bacteria is most commonly associated with peptic ulcer disease?`,
    options: ['Escherichia coli', 'Helicobacter pylori', 'Streptococcus pyogenes', 'Salmonella typhi'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2552,
    question: `Which of the following antibiotics is the treatment of choice for community-acquired pneumonia in an adult without comorbidities?`,
    options: ['Amoxicillin', 'Doxycycline', 'Azithromycin', 'Ceftriaxone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2553,
    question: `Which of the following is a characteristic sign of chronic kidney disease?`,
    options: ['Hematuria', 'Proteinuria', 'Hypertension', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2554,
    question: `A patient with long-standing diabetes presents with numbness in his feet. What is the likely diagnosis?`,
    options: ['Diabetic neuropathy', 'Peripheral vascular disease', 'Charcot foot', 'Sciatica'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2555,
    question: `A patient presents with a pulsating abdominal mass and hypotension. What is the most likely diagnosis?`,
    options: ['Abdominal aortic aneurysm', 'Intestinal obstruction', 'Acute pancreatitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2556,
    question: `What is the primary mechanism of action of beta-blockers?`,
    options: ['Decrease heart rate', 'Increase cardiac output', 'Vasodilation', 'Increase stroke volume'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2557,
    question: `In which condition is a "butterfly rash" typically seen?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Psoriasis', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2558,
    question: `A woman in her 30s presents with a history of recurrent urinary tract infections. What is the most likely underlying cause?`,
    options: ['Diabetes mellitus', 'Anatomical abnormality', 'Immunosuppression', 'Antibiotic resistance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2559,
    question: `The most reliable method to confirm ovulation is:`,
    options: ['Basal body temperature', 'Mid-luteal serum progesterone', 'Cervical mucus', 'Urinary LH kits'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2560,
    question: `The most common cause of first-trimester bleeding is:`,
    options: ['Ectopic pregnancy', 'Threatened abortion', 'Molar pregnancy', 'Vaginal trauma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2561,
    question: `A patient with a history of long-term NSAID use presents with epigastric pain and melena. What is the most likely diagnosis?`,
    options: ['Peptic ulcer', 'Gastritis', 'Gastroesophageal reflux disease', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2562,
    question: `What is the primary purpose of the Glasgow Coma Scale?`,
    options: ['Assess kidney function', 'Measure blood pressure', 'Evaluate level of consciousness', 'Determine respiratory rate'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2563,
    question: `In which condition is the "sunset eye" sign seen?`,
    options: ['Hydrocephalus', 'Meningitis', 'Cerebral palsy', 'Autism spectrum disorder'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2564,
    question: `What is the primary risk factor for developing coronary artery disease?`,
    options: ['Hyperlipidemia', 'Hypotension', 'Hypercalcemia', 'Hypoglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2565,
    question: `Which condition is characterized by a decrease in blood flow to the kidneys?`,
    options: ['Prerenal azotemia', 'Postrenal azotemia', 'Intrarenal azotemia', 'Acute tubular necrosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2566,
    question: `A 50-year-old man presents with a palpable abdominal mass and a history of painless hematuria. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Renal cell carcinoma', 'Polycystic kidney disease', 'Prostate cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2567,
    question: `A 30-year-old woman presents with palpitations, weight loss, and heat intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Cushing\'s syndrome', 'Pheochromocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2568,
    question: `Which medication is commonly prescribed for the treatment of heart failure with reduced ejection fraction?`,
    options: ['Calcium channel blockers', 'ACE inhibitors', 'Diuretics', 'Beta-blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2569,
    question: `Which of the following laboratory findings is expected in a patient with Addison's disease?`,
    options: ['Hypernatremia', 'Hypokalemia', 'Hyponatremia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2570,
    question: `A 45-year-old woman presents with irregular menstrual cycles and hirsutism. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Hypothyroidism', 'Cushing\'s syndrome', 'Ovarian tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2571,
    question: `A patient with chronic kidney disease is at risk for which of the following complications?`,
    options: ['Hypercalcemia', 'Hyperkalemia', 'Hypoglycemia', 'Hypomagnesemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2572,
    question: `The most common cause of primary postpartum hemorrhage within 24 hours of delivery is:`,
    options: ['Retained placenta', 'Genital tract trauma', 'Uterine atony', 'Coagulation disorder'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2573,
    question: `A 10-year-old boy presents with fever, rash, and joint pain. A history of a recent sore throat is noted. What is the most likely diagnosis?`,
    options: ['Rheumatic fever', 'Kawasaki disease', 'Infectious mononucleosis', 'Systemic lupus erythematosus (SLE)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2574,
    question: `A patient presents with fatigue, pallor, and a low hemoglobin level. Further tests show microcytic anemia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Anemia of chronic disease', 'Sideroblastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2575,
    question: `A 45-year-old female presents with amenorrhea, galactorrhea, and a serum prolactin level of 120 ng/mL. What is the most likely diagnosis?`,
    options: ['Prolactinoma', 'Hypothyroidism', 'Cushing\'s disease', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2576,
    question: `A patient presents with a "silent" myocardial infarction. What is a common symptom?`,
    options: ['Chest pain', 'Shortness of breath', 'Nausea', 'Fatigue'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2577,
    question: `A 30-year-old female presents with joint pain, fever, and a malar rash. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Psoriasis', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2578,
    question: `A 35-year-old woman presents with episodic palpitations, sweating, and headaches. What is the most likely diagnosis?`,
    options: ['Pheochromocytoma', 'Hyperthyroidism', 'Panic disorder', 'Hypoglycemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2579,
    question: `A patient presents with dysphagia, regurgitation of undigested food, and halitosis. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2580,
    question: `A 4-year-old child presents with a sudden high fever and a red, "slapped cheek" rash. What is the most likely diagnosis?`,
    options: ['Fifth disease (erythema infectiosum)', 'Measles', 'Rubella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2581,
    question: `A patient presents with a high fever, productive cough, and pleuritic chest pain. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Community-acquired pneumonia', 'Bronchitis', 'Lung abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2582,
    question: `A young girl presents with abdominal pain and a "currant jelly" stool. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2583,
    question: `A patient with chronic liver disease presents with confusion and disorientation. What is the most likely diagnosis?`,
    options: ['Hepatic encephalopathy', 'Delirium', 'Dementia', 'Depression'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2584,
    question: `The most common site for metastatic cancer to the brain is:`,
    options: ['Lung', 'Breast', 'Colorectal', 'Melanoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2585,
    question: `A 28-year-old woman presents with irregular menstrual cycles, hirsutism, and obesity. Lab tests reveal elevated testosterone levels. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome (PCOS)', 'Cushing\'s syndrome', 'Congenital adrenal hyperplasia', 'Ovarian tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2586,
    question: `The hormone responsible for milk ejection reflex is:`,
    options: ['Prolactin', 'Oxytocin', 'Estrogen', 'Progesterone'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2587,
    question: `A child presents with sudden onset of abdominal pain, currant jelly stools, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2588,
    question: `In a patient with cirrhosis, which of the following is the most likely cause of ascites?`,
    options: ['Increased oncotic pressure', 'Portal hypertension', 'Right heart failure', 'Increased renal blood flow'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2589,
    question: `A patient presents with hypertension, hypokalemia, and metabolic alkalosis. What condition should be suspected?`,
    options: ['Cushing\'s syndrome', 'Hyperaldosteronism', 'Renal artery stenosis', 'Pheochromocytoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2590,
    question: `A pregnant woman with blood group O negative should receive anti-D after:`,
    options: ['Any miscarriage', 'Invasive procedures', 'Delivery of Rh-positive baby', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2591,
    question: `A patient presents with elevated blood glucose levels and ketones in the urine. What is the most likely diagnosis?`,
    options: ['Type 1 diabetes mellitus', 'Type 2 diabetes mellitus', 'Hyperglycemic hyperosmolar state', 'Diabetic ketoacidosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2592,
    question: `A 28-year-old woman presents with amenorrhea, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2593,
    question: `In patients with heart failure, which class of drugs is commonly used to improve survival?`,
    options: ['Diuretics', 'ACE inhibitors', 'Beta-blockers', 'Both B and C'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2594,
    question: `In a patient with hyperparathyroidism, which of the following is typically elevated?`,
    options: ['Serum calcium', 'Serum phosphate', 'Serum albumin', 'Serum bicarbonate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2595,
    question: `A patient presents with sudden onset of right-sided weakness and slurred speech. CT scan shows a right middle cerebral artery infarct. What is the most likely risk factor?`,
    options: ['Smoking', 'Hyperlipidemia', 'Atrial fibrillation', 'Hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2596,
    question: `A child presents with fever, sore throat, and a sandpaper-like rash. What is the most likely causative organism?`,
    options: ['Streptococcus pyogenes', 'Staphylococcus aureus', 'Epstein-Barr virus', 'Rhinovirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2597,
    question: `Which of the following is the first-line treatment for chronic obstructive pulmonary disease (COPD)?`,
    options: ['Long-acting beta-agonists', 'Anticholinergics', 'Corticosteroids', 'Theophylline'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2598,
    question: `In which condition would you expect to find a "shuffling" gait?`,
    options: ['Parkinson\'s disease', 'Huntington\'s disease', 'Multiple sclerosis', 'Cerebellar ataxia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2599,
    question: `A patient presents with dry eyes and mouth. What condition is most likely?`,
    options: ['Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Rheumatoid arthritis', 'Hashimoto\'s thyroiditis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2600,
    question: `A woman presents with infertility and bilateral tubal blockage. The most common cause is:`,
    options: ['Tuberculosis', 'Pelvic inflammatory disease', 'Congenital anomaly', 'Endometriosis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2601,
    question: `The most common benign tumor of the ovary in reproductive age is:`,
    options: ['Dermoid cyst', 'Serous cystadenoma', 'Mucinous cystadenoma', 'Endometrioma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2602,
    question: `Which of the following findings is most consistent with Grave's disease?`,
    options: ['Bradycardia', 'Exophthalmos', 'Hypothyroidism', 'Cold intolerance'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2603,
    question: `A child presents with fever, vomiting, and a "slapped cheek" rash. What is the most likely diagnosis?`,
    options: ['Rubella', 'Fifth disease (Erythema infectiosum)', 'Scarlet fever', 'Measles'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2604,
    question: `A 45-year-old male presents with difficulty swallowing and weight loss. What is the most concerning diagnosis?`,
    options: ['Esophageal stricture', 'Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2605,
    question: `In chronic kidney disease, which electrolyte abnormality is commonly observed?`,
    options: ['Hypercalcemia', 'Hypernatremia', 'Hyperkalemia', 'Hypochloremia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2606,
    question: `A child presents with abdominal pain and "currant jelly" stools. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Meckel\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2607,
    question: `A child is found to have a positive lead test. What is the most important intervention?`,
    options: ['Chelation therapy', 'Nutritional supplementation', 'Environmental assessment', 'Blood transfusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2608,
    question: `Which laboratory finding is characteristic of rheumatoid arthritis?`,
    options: ['Elevated C-reactive protein', 'Elevated serum creatinine', 'Low hemoglobin', 'Low platelets'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2609,
    question: `What is the most common bone affected in a Colles' fracture?`,
    options: ['Radius', 'Ulna', 'Scaphoid', 'Humerus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2610,
    question: `A 12-year-old girl presents with abdominal pain and dysmenorrhea. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Ovarian cyst', 'Appendicitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2611,
    question: `A 12-year-old girl presents with abdominal pain, fever, and a swollen knee. What is the most likely diagnosis?`,
    options: ['Juvenile idiopathic arthritis', 'Appendicitis', 'Osteomyelitis', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2612,
    question: `Which of the following is a common side effect of corticosteroids?`,
    options: ['Hypoglycemia', 'Osteoporosis', 'Bradycardia', 'Diarrhea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2613,
    question: `A patient presents with a recent history of night sweats and weight loss. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Lymphoma', 'HIV infection', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2614,
    question: `A patient presents with severe headache, nausea, and visual disturbances. MRI shows a pituitary adenoma. What is the most likely hormonal effect of this tumor?`,
    options: ['Increased prolactin levels', 'Decreased growth hormone', 'Increased cortisol levels', 'Decreased luteinizing hormone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2615,
    question: `Which condition is characterized by a prolonged PR interval on ECG?`,
    options: ['Atrial fibrillation', 'First-degree AV block', 'Atrial flutter', 'Ventricular tachycardia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2616,
    question: `A patient with chronic liver disease presents with confusion and asterixis. What is the most likely cause?`,
    options: ['Hepatic encephalopathy', 'Wernicke\'s encephalopathy', 'Alcohol withdrawal', 'Meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2617,
    question: `The most common type of skin cancer is:`,
    options: ['Melanoma', 'Squamous cell carcinoma', 'Basal cell carcinoma', 'Merkel cell carcinoma'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2618,
    question: `A patient presents with a high fever, cough, and difficulty breathing. A chest X-ray shows bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Pneumonia', 'Tuberculosis', 'Pulmonary edema', 'Lung cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2619,
    question: `A 30-year-old woman presents with anxiety, weight loss, and palpitations. Laboratory results show low TSH and elevated free T4. What is the most likely diagnosis?`,
    options: ['Hypothyroidism', 'Hyperthyroidism', 'Addison’s disease', 'Cushing’s syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2620,
    question: `A patient presents with swelling of the legs and proteinuria. What is the most likely diagnosis?`,
    options: ['Heart failure', 'Nephrotic syndrome', 'Liver cirrhosis', 'Renal failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2621,
    question: `A patient with a history of migraines reports increased frequency of headaches after starting a new medication. What is the likely culprit?`,
    options: ['Antidepressants', 'Oral contraceptives', 'Beta-blockers', 'NSAIDs'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2622,
    question: `Which type of diabetes is commonly associated with autoimmune destruction of beta cells?`,
    options: ['Type 1', 'Type 2', 'Gestational', 'LADA'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2623,
    question: `The drug of choice for treating status epilepticus is:`,
    options: ['Phenytoin', 'Valproic acid', 'Lorazepam', 'Carbamazepine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2624,
    question: `A patient presents with sudden vision loss in one eye and a history of hypertension. What is the most likely diagnosis?`,
    options: ['Central retinal vein occlusion', 'Retinal detachment', 'Glaucoma', 'Vitreous hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2625,
    question: `A patient presents with abdominal pain, diarrhea, and weight loss. Colonoscopy shows skip lesions. What is the most likely diagnosis?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Irritable bowel syndrome', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2626,
    question: `A child presents with noisy breathing and stridor. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Laryngomalacia', 'Asthma', 'Croup'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2627,
    question: `What is the most effective method to prevent the spread of infectious diseases in healthcare settings?`,
    options: ['Hand hygiene', 'Use of masks', 'Isolation of patients', 'Vaccination'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2628,
    question: `A patient presents with a productive cough, fever, and night sweats. What is the most likely diagnosis?`,
    options: ['Community-acquired pneumonia', 'Tuberculosis', 'Acute bronchitis', 'Lung abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2629,
    question: `What is the mainstay treatment for anaphylactic shock?`,
    options: ['Corticosteroids', 'Antihistamines', 'Epinephrine', 'Oxygen therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2630,
    question: `Which of the following is the best initial diagnostic test for suspected deep vein thrombosis (DVT)?`,
    options: ['D-dimer', 'Duplex ultrasound', 'CT angiography', 'Venography'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2631,
    question: `A 40-year-old male presents with a swollen, painful joint in the big toe. What is the most likely diagnosis?`,
    options: ['Gout', 'Pseudogout', 'Osteoarthritis', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2632,
    question: `Which of the following is a classic symptom of acromegaly?`,
    options: ['Weight loss', 'Enlarged hands and feet', 'Hypoglycemia', 'Decreased libido'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2633,
    question: `A patient presents with worsening fatigue and pallor. What is the most likely cause of these symptoms?`,
    options: ['Anemia', 'Dehydration', 'Hyperthyroidism', 'Renal failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2634,
    question: `A young male presents with progressive difficulty in swallowing both solids and liquids. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Gastroesophageal reflux disease', 'Esophageal cancer', 'Peptic ulcer disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2635,
    question: `Which of the following is the most sensitive marker for myocardial infarction?`,
    options: ['Troponin I', 'Creatine kinase (CK)', 'Myoglobin', 'Lactate dehydrogenase (LDH)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2636,
    question: `A 32-year-old woman presents with hot flashes and irregular periods. What is the most likely cause?`,
    options: ['Pregnancy', 'Menopause', 'Hyperthyroidism', 'Polycystic ovary syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2637,
    question: `A patient presents with diplopia, ptosis, and muscle weakness that worsens with activity. What is the most likely diagnosis?`,
    options: ['Myasthenia gravis', 'Multiple sclerosis', 'Guillain-Barré syndrome', 'Lambert-Eaton syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2638,
    question: `Which of the following best describes the primary action of Warfarin?`,
    options: ['Inhibits thrombin directly', 'Inhibits platelet aggregation', 'Inhibits vitamin K-dependent clotting factors', 'Activates antithrombin III'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2639,
    question: `A patient with a history of heavy alcohol use presents with confusion and ataxia. What is the likely diagnosis?`,
    options: ['Wernicke\'s encephalopathy', 'Korsakoff syndrome', 'Hepatic encephalopathy', 'Delirium tremens'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2640,
    question: `A 45-year-old woman presents with jaundice, dark urine, and pruritus. Her liver function tests show elevated alkaline phosphatase and bilirubin. Anti-mitochondrial antibodies are positive. What is the most likely diagnosis?`,
    options: ['Primary biliary cirrhosis', 'Autoimmune hepatitis', 'Wilson’s disease', 'Hemochromatosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2641,
    question: `The most common cause of infertility in reproductive-aged women is:`,
    options: ['Tubal factor', 'Ovulatory dysfunction', 'Uterine factor', 'Cervical factor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2642,
    question: `A 35-year-old female presents with a rash and joint pain after starting a new medication. What is the most likely diagnosis?`,
    options: ['Drug allergy', 'Systemic lupus erythematosus', 'Psoriatic arthritis', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2643,
    question: `Which of the following drugs is a common treatment for tuberculosis?`,
    options: ['Vancomycin', 'Isoniazid', 'Amoxicillin', 'Ciprofloxacin'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2644,
    question: `Which of the following hormones is primarily responsible for uterine contractions during labor?`,
    options: ['Progesterone', 'Estrogen', 'Oxytocin', 'Prolactin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2645,
    question: `A patient with chronic liver disease presents with ascites and peripheral edema. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Ascitic fluid analysis', 'Liver transplant'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2646,
    question: `In patients with type 1 diabetes, which test is used to monitor long-term glucose control?`,
    options: ['Fasting blood glucose', 'Oral glucose tolerance test', 'Hemoglobin A1c', 'Random blood glucose'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2647,
    question: `A patient presents with fever, cough, and pleuritic chest pain. What is the most likely diagnosis?`,
    options: ['Pneumonia', 'Tuberculosis', 'Bronchitis', 'Lung abscess'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2648,
    question: `Which of the following is the most effective method for diagnosing deep vein thrombosis (DVT)?`,
    options: ['CT scan', 'D-dimer test', 'Venous Doppler ultrasound', 'MRI'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2649,
    question: `A patient presents with acute onset of double vision and drooping eyelids. What condition should be suspected?`,
    options: ['Myasthenia gravis', 'Multiple sclerosis', 'Stroke', 'Guillain'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2650,
    question: `A 35-year-old female presents with fatigue, pallor, and splenomegaly. Which condition should be considered?`,
    options: ['Iron deficiency anemia', 'Sickle cell disease', 'Thalassemia', 'Aplastic anemia'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2651,
    question: `What is the preferred management for a patient with chronic stable angina?`,
    options: ['Beta-blockers and aspirin', 'ACE inhibitors and nitrates', 'Calcium channel blockers and statins', 'Beta-blockers and nitrates'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2652,
    question: `A patient with psoriasis is being treated with a systemic medication. Which of the following is commonly used?`,
    options: ['Methotrexate', 'Topical corticosteroids', 'Phototherapy', 'Emollients'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2653,
    question: `A patient presents with severe lower abdominal pain and blood in the stool. What is the most likely diagnosis?`,
    options: ['Diverticulitis', 'Appendicitis', 'Inflammatory bowel disease', 'Colorectal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2654,
    question: `In which condition would you typically see a "butterfly rash"?`,
    options: ['Psoriasis', 'Rosacea', 'Systemic lupus erythematosus', 'Dermatitis herpetiformis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2655,
    question: `A patient with a history of smoking presents with a chronic cough and weight loss. What is the most concerning diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'COPD'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2656,
    question: `A 50-year-old female presents with bilateral breast tenderness and swelling. What is the most appropriate next step?`,
    options: ['Mammogram', 'Ultrasound', 'Hormonal evaluation', 'Biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2657,
    question: `A 60-year-old male presents with hematuria and weight loss. A CT scan shows a mass in the bladder. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Urinary tract infection', 'Kidney stones', 'Prostate cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2658,
    question: `A 50-year-old woman presents with excessive hair growth and irregular periods. What is the most likely diagnosis?`,
    options: ['Cushing\'s syndrome', 'Polycystic ovary syndrome (PCOS)', 'Hyperprolactinemia', 'Ovarian tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2659,
    question: `A woman presents with amenorrhea, hot flashes, and elevated FSH at age 38. Diagnosis is:`,
    options: ['PCOS', 'Hyperprolactinemia', 'Premature ovarian failure', 'Hypothyroidism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2660,
    question: `Which of the following is the first-line treatment for an acute exacerbation of asthma?`,
    options: ['Systemic corticosteroids', 'Inhaled corticosteroids', 'Short-acting beta-agonists (SABA)', 'Long-acting beta-agonists (LABA)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2661,
    question: `A 55-year-old female presents with persistent cough and weight loss. Chest X-ray shows a solitary pulmonary nodule. What is the next best step in management?`,
    options: ['Observation', 'Biopsy', 'PET scan', 'Surgery'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2662,
    question: `A 45-year-old woman presents with a sudden onset of severe headache described as the worst headache of her life. What is the most likely diagnosis?`,
    options: ['Migraine', 'Tension-type headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2663,
    question: `A 55-year-old female presents with hypercalcemia, fatigue, and confusion. What is the most likely underlying cause?`,
    options: ['Primary hyperparathyroidism', 'Vitamin D toxicity', 'Malignancy', 'Renal failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2664,
    question: `The first-line management of ectopic pregnancy in hemodynamically stable patients is:`,
    options: ['Laparotomy', 'Methotrexate therapy', 'Salpingectomy', 'Observation only'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2665,
    question: `A 3-year-old boy presents with irritability, abdominal pain, and bloody stools. His parents report that he recently had a viral upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Gastroenteritis', 'Meckel’s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2666,
    question: `Which test is used to evaluate the function of the adrenal gland?`,
    options: ['Dexamethasone suppression test', 'ACTH stimulation test', 'Serum cortisol level', 'Serum aldosterone level'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2667,
    question: `A patient with a history of gout presents with a swollen, red big toe. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Gout attack', 'Osteoarthritis', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2668,
    question: `A 25-year-old woman presents with severe abdominal pain during menstruation. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Ovarian cyst rupture', 'Pelvic inflammatory disease', 'Dysmenorrhea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2669,
    question: `A woman in her third trimester presents with elevated blood pressure and proteinuria. What is the most likely diagnosis?`,
    options: ['Gestational hypertension', 'Preeclampsia', 'Eclampsia', 'Chronic hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2670,
    question: `The most common cause of Cushing's syndrome is:`,
    options: ['Adrenal adenoma', 'Pituitary adenoma', 'Ectopic ACTH secretion', 'Exogenous corticosteroid use'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2671,
    question: `A patient presents with acute abdominal pain and a positive Murphy's sign. What is the most likely diagnosis?`,
    options: ['Acute cholecystitis', 'Pancreatitis', 'Appendicitis', 'Diverticulitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2672,
    question: `In septic shock, the primary physiological abnormality is:`,
    options: ['Decreased cardiac output', 'Decreased systemic vascular resistance', 'Increased preload', 'Increased afterload'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2673,
    question: `A 25-year-old female presents with a butterfly rash, joint pain, and photosensitivity. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Psoriasis', 'Dermatomyositis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2674,
    question: `A patient presents with dry skin, hair loss, and fatigue. What condition might this suggest?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Cushing\'s syndrome', 'Addison\'s disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2675,
    question: `A patient with polyuria, polydipsia, and hyperglycemia is most likely suffering from:`,
    options: ['Diabetes insipidus', 'Diabetes mellitus', 'Hyperthyroidism', 'Hypoparathyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2676,
    question: `The most common cause of secondary postpartum hemorrhage is:`,
    options: ['Uterine atony', 'Retained products of conception', 'Genital tract trauma', 'Coagulation disorders'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2677,
    question: `A child with fever, a sore throat, and a grayish membrane on the tonsils is suspected to have diphtheria. What is the most effective treatment?`,
    options: ['Penicillin', 'Erythromycin', 'Diphtheria antitoxin', 'Tetanus toxoid'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2678,
    question: `Which of the following is a common side effect of amiodarone?`,
    options: ['Hyperkalemia', 'Pulmonary toxicity', 'Liver failure', 'Hypotension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2679,
    question: `A 3-year-old child is brought in with cough, wheezing, and difficulty breathing after playing outside. What is the most likely cause of his symptoms?`,
    options: ['Allergic reaction', 'Asthma', 'Foreign body aspiration', 'Viral infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2680,
    question: `The hallmark of rheumatoid arthritis is:`,
    options: ['Asymmetrical joint involvement', 'Morning stiffness lasting more than one hour', 'Bone erosion on X-ray', 'Presence of HLA-B27 antigen'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2681,
    question: `The drug of choice for prevention of eclampsia is:`,
    options: ['Diazepam', 'Phenytoin', 'Magnesium sulfate', 'Labetalol'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2682,
    question: `A patient with a history of chronic liver disease presents with confusion and asterixis. What is the most likely diagnosis?`,
    options: ['Hepatic encephalopathy', 'Wernicke\'s encephalopathy', 'Alcoholic delirium', 'Metabolic syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2683,
    question: `Which test is used to confirm the diagnosis of type 2 diabetes mellitus?`,
    options: ['Fasting blood glucose', 'Random blood glucose', 'Oral glucose tolerance test', 'Hemoglobin A1c'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2684,
    question: `Which type of hepatitis is most commonly transmitted through fecal-oral route?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2685,
    question: `A patient presents with pruritic skin lesions and a positive KOH prep for hyphae. What is the most likely diagnosis?`,
    options: ['Tinea corporis', 'Eczema', 'Psoriasis', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2686,
    question: `A patient with a family history of breast cancer is advised to undergo genetic counseling. Which gene mutation is commonly associated with hereditary breast cancer?`,
    options: ['BRCA1', 'TP53', 'HER2', 'APC'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2687,
    question: `A 55-year-old woman with a history of smoking presents with a productive cough and shortness of breath. Her chest X-ray shows hyperinflated lungs. What is the most likely diagnosis?`,
    options: ['Asthma', 'Chronic bronchitis', 'Emphysema', 'Bronchiectasis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2688,
    question: `A patient with a history of HIV presents with progressive shortness of breath and non-productive cough. Chest X-ray shows bilateral infiltrates. What is the most likely diagnosis?`,
    options: ['Pneumocystis pneumonia (PCP)', 'Tuberculosis', 'Bacterial pneumonia', 'Fungal infection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2689,
    question: `The most common cause of chronic venous insufficiency is:`,
    options: ['Deep vein thrombosis', 'Varicose veins', 'Trauma', 'Obesity'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2690,
    question: `In cases of severe allergic reactions, what is the appropriate dosage of epinephrine for adults?`,
    options: ['0.01 mg', '0.1 mg', '0.3 mg to 0.5 mg', '1 mg'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2691,
    question: `Which of the following conditions is characterized by a "butterfly rash"?`,
    options: ['Psoriasis', 'Eczema', 'Systemic lupus erythematosus', 'Rosacea'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2692,
    question: `A 60-year-old patient presents with fatigue, easy bruising, and a significantly enlarged spleen. What is the most likely diagnosis?`,
    options: ['Chronic myeloid leukemia', 'Liver cirrhosis', 'Hemolytic anemia', 'Myelodysplastic syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2693,
    question: `A patient presents with hypercalcemia, confusion, and constipation. What is the most likely cause?`,
    options: ['Primary hyperparathyroidism', 'Malignancy', 'Sarcoidosis', 'Vitamin D intoxication'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2694,
    question: `Which of the following is a classic sign of meningitis in adults?`,
    options: ['Nuchal rigidity', 'Photophobia', 'Kernig\'s sign', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2695,
    question: `A newborn presents with jaundice within the first 24 hours of life. What is the most likely cause?`,
    options: ['Physiologic jaundice', 'Breast milk jaundice', 'Hemolytic disease of the newborn', 'Biliary atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2696,
    question: `A patient presents with jaundice and dark urine. Liver function tests reveal elevated bilirubin levels. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Cirrhosis', 'Cholecystitis', 'Pancreatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2697,
    question: `Which of the following is a common presentation of acute appendicitis?`,
    options: ['Diarrhea', 'Right lower quadrant pain', 'Chest pain', 'Nausea and vomiting'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2698,
    question: `In which condition would you expect to find "spindle cells" on histological examination?`,
    options: ['Rhabdomyosarcoma', 'Sarcoma', 'Lipoma', 'Leiomyosarcoma'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2699,
    question: `A patient with a history of COPD presents with increasing shortness of breath and wheezing. What is the most appropriate first-line medication?`,
    options: ['Corticosteroids', 'Long-acting beta-agonists', 'Short-acting beta-agonists', 'Anticholinergics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2700,
    question: `A child presents with a fever, rash, and swollen lymph nodes following a recent upper respiratory infection. What is the most likely diagnosis?`,
    options: ['Mononucleosis', 'Rubella', 'Roseola', 'Scarlet fever'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2701,
    question: `A patient presents with lower abdominal pain, abnormal vaginal discharge, and fever. What is the most likely diagnosis?`,
    options: ['Pelvic inflammatory disease (PID)', 'Endometriosis', 'Ovarian cyst', 'Ectopic pregnancy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2702,
    question: `A patient presents with acute onset of severe chest pain and shortness of breath. Which condition should be ruled out first?`,
    options: ['Pneumothorax', 'Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2703,
    question: `A 45-year-old male smoker presents with hemoptysis and a persistent cough. What is the most appropriate initial investigation?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Sputum culture', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2704,
    question: `What is the first-line treatment for hypertensive emergency with signs of organ damage?`,
    options: ['Oral captopril', 'IV labetalol', 'IV fluids', 'Sublingual nifedipine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2705,
    question: `Which type of anemia is characterized by microcytic, hypochromic red blood cells?`,
    options: ['Megaloblastic anemia', 'Iron deficiency anemia', 'Hemolytic anemia', 'Aplastic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2706,
    question: `A 40-year-old man presents with testicular swelling and pain. What is the most likely diagnosis?`,
    options: ['Testicular torsion', 'Epididymitis', 'Hydrocele', 'Tumor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2707,
    question: `A 60-year-old man with a history of hypertension presents with sudden-onset severe headache, nausea, and neck stiffness. What is the most likely diagnosis?`,
    options: ['Ischemic stroke', 'Subarachnoid hemorrhage', 'Tension headache', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2708,
    question: `What is the most common form of dementia?`,
    options: ['Vascular dementia', 'Alzheimer\'s disease', 'Frontotemporal dementia', 'Lewy body dementia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2709,
    question: `A patient presents with worsening shortness of breath and a history of heart failure. What is the most appropriate management step?`,
    options: ['Increase diuretic dose', 'Start beta-blocker', 'Initiate ACE inhibitor', 'Order echocardiogram'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2710,
    question: `What is the most effective treatment for acute gout attack?`,
    options: ['Allopurinol', 'Colchicine', 'NSAIDs', 'Corticosteroids'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2711,
    question: `What is the first-line treatment for hypertension in patients with diabetes?`,
    options: ['Thiazide diuretics', 'ACE inhibitors', 'Beta-blockers', 'Calcium channel blockers'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2712,
    question: `A 40-year-old male presents with fever, cough, and pleuritic chest pain. Chest X-ray shows a right-sided pleural effusion. What is the most likely cause?`,
    options: ['Bacterial pneumonia', 'Tuberculosis', 'Lung cancer', 'Congestive heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2713,
    question: `A patient with COPD is experiencing increased shortness of breath. What should be the first step in management?`,
    options: ['Administer oxygen', 'Start corticosteroids', 'Initiate antibiotics', 'Perform a bronchodilator therapy'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2714,
    question: `A patient presents with a sudden severe headache described as "the worst headache of my life." What is the most likely diagnosis?`,
    options: ['Tension headache', 'Cluster headache', 'Subarachnoid hemorrhage', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2715,
    question: `A 60-year-old woman presents with sudden onset of severe headache and neck stiffness. What condition should be suspected?`,
    options: ['Meningitis', 'Subarachnoid hemorrhage', 'Tension headache', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2716,
    question: `A patient with a history of hypertension presents with sudden vision loss. Fundoscopic examination shows a "cherry-red spot." What is the most likely cause?`,
    options: ['Retinal detachment', 'Central retinal artery occlusion', 'Diabetic retinopathy', 'Glaucoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2717,
    question: `Which of the following tests is most appropriate to diagnose a deep vein thrombosis (DVT)?`,
    options: ['D-dimer', 'Ultrasound', 'CT angiography', 'Venography'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2718,
    question: `A patient with chronic kidney disease presents with fatigue and pallor. What is the most likely cause of anemia in this patient?`,
    options: ['Iron deficiency', 'Hemolysis', 'Erythropoietin deficiency', 'Vitamin B12 deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2719,
    question: `A patient with a history of asthma presents with worsening shortness of breath and wheezing. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Inhaled corticosteroids', 'Short-acting beta-agonist', 'Long-acting beta-agonist'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2720,
    question: `Which of the following is the most common cause of pancreatitis?`,
    options: ['Gallstones', 'Alcohol abuse', 'Hypertriglyceridemia', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2721,
    question: `In which condition is a "cushion" of fat seen around the adrenal glands?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Conn\'s syndrome', 'Adrenal crisis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2722,
    question: `A patient presents with an itchy, scaly rash on the scalp and behind the ears. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Tinea capitis', 'Contact dermatitis', 'Seborrheic dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2723,
    question: `A 65-year-old female presents with a dry cough and weight loss. A chest X-ray shows a solitary pulmonary nodule. What is the most appropriate next step?`,
    options: ['CT scan of the chest', 'Sputum cytology', 'Bronchoscopy', 'PET scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2724,
    question: `Which of the following is the classic triad of symptoms for nephrotic syndrome?`,
    options: ['Hematuria, hypertension, edema', 'Edema, proteinuria, hypoalbuminemia', 'Oliguria, hyperkalemia, hypertension', 'Abdominal pain, jaundice, pruritus'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2725,
    question: `What is the most common cause of acute pancreatitis?`,
    options: ['Gallstones', 'Alcohol consumption', 'Hyperlipidemia', 'Medications'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2726,
    question: `A 45-year-old patient presents with palpitations and an irregularly irregular pulse. Which of the following is the most likely diagnosis?`,
    options: ['Atrial fibrillation', 'Ventricular tachycardia', 'Atrial flutter', 'Sinus tachycardia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2727,
    question: `Which of the following is a contraindication to the use of NSAIDs?`,
    options: ['Asthma', 'Peptic ulcer disease', 'Renal impairment', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2728,
    question: `A patient presents with abdominal pain, jaundice, and a palpable mass in the right upper quadrant. What is the most likely diagnosis?`,
    options: ['Acute cholecystitis', 'Hepatocellular carcinoma', 'Pancreatic cancer', 'Hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2729,
    question: `What is the most common cause of a painless neck mass in adults?`,
    options: ['Branchial cleft cyst', 'Thyroid carcinoma', 'Lymphoma', 'Thyroglossal duct cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2730,
    question: `A patient with chronic kidney disease presents with pruritus. What is the likely cause?`,
    options: ['Hyperphosphatemia', 'Hypercalcemia', 'Hypocalcemia', 'Anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2731,
    question: `In patients with chronic liver disease, which laboratory value is typically elevated?`,
    options: ['Albumin', 'Bilirubin', 'Calcium', 'Sodium'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2732,
    question: `A patient with a history of myocardial infarction presents with chest pain and ST-segment elevation on an ECG. What is the most appropriate initial treatment?`,
    options: ['Nitrates', 'Aspirin', 'Beta-blockers', 'Thrombolytics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2733,
    question: `A patient presents with tremors, rigidity, and bradykinesia. What is the most likely diagnosis?`,
    options: ['Parkinson\'s disease', 'Multiple sclerosis', 'Amyotrophic lateral sclerosis', 'Essential tremor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2734,
    question: `A 45-year-old woman presents with severe fatigue and pallor. Blood tests reveal macrocytic anemia. What is the most likely deficiency?`,
    options: ['Vitamin B12', 'Iron', 'Folate', 'Hemoglobinopathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2735,
    question: `A child presents with a high fever and a "barking" cough. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2736,
    question: `A patient presents with abdominal pain, diarrhea, and fever after eating undercooked pork. What is the most likely diagnosis?`,
    options: ['Trichinosis', 'Salmonellosis', 'Campylobacter infection', 'Shigellosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2737,
    question: `Which heart sound is associated with heart failure?`,
    options: ['S1', 'S2', 'S3', 'S4'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2738,
    question: `The primary treatment for hyperlipidemia includes:`,
    options: ['Statins', 'Fibrates', 'Niacin', 'Omega-3 fatty acids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2739,
    question: `A patient presents with acute onset of fever, confusion, and nuchal rigidity. Lumbar puncture shows elevated white blood cells and low glucose. What is the most likely diagnosis?`,
    options: ['Bacterial meningitis', 'Viral meningitis', 'Encephalitis', 'Subarachnoid hemorrhage'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2740,
    question: `A 40-year-old man presents with hematuria, flank pain, and a palpable mass in the left flank. CT scan shows a mass in the left kidney. What is the most likely diagnosis?`,
    options: ['Wilms\' tumor', 'Renal cell carcinoma', 'Transitional cell carcinoma', 'Ureteric stone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2741,
    question: `Which of the following conditions is most commonly associated with diabetes mellitus?`,
    options: ['Celiac disease', 'Hyperthyroidism', 'Hypertension', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2742,
    question: `What is the primary treatment for hyperthyroidism?`,
    options: ['Methimazole', 'Levothyroxine', 'Radioactive iodine', 'Propranolol'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2743,
    question: `A 28-year-old woman presents with fever, fatigue, and a butterfly-shaped rash on her face. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Dermatomyositis', 'Psoriasis', 'Eczema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2744,
    question: `A patient presents with a red, raised rash on the cheeks and a history of joint pain. What is the most likely diagnosis?`,
    options: ['Psoriasis', 'Lupus erythematosus', 'Eczema', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2745,
    question: `A patient with hypertension presents with a palpable abdominal mass and hematuria. What is the most likely diagnosis?`,
    options: ['Renal cell carcinoma', 'Wilms tumor', 'Polycystic kidney disease', 'Adrenal adenoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2746,
    question: `A 35-year-old male presents with chest pain and shortness of breath. ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely diagnosis?`,
    options: ['Anterior myocardial infarction', 'Inferior myocardial infarction', 'Pericarditis', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2747,
    question: `The first-line treatment for a patient with acute gout is:`,
    options: ['Allopurinol', 'Colchicine', 'Indomethacin', 'Prednisone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2748,
    question: `Which of the following is the most common cause of acute gastroenteritis in children?`,
    options: ['Rotavirus', 'Norovirus', 'Adenovirus', 'Enterovirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2749,
    question: `Which condition is characterized by "thunderclap headache"?`,
    options: ['Migraines', 'Tension-type headache', 'Subarachnoid hemorrhage', 'Cluster headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2750,
    question: `A 60-year-old woman presents with a painful, swollen wrist and morning stiffness. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2751,
    question: `A 30-year-old woman presents with fatigue, pallor, and shortness of breath. Laboratory tests show microcytic anemia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Thalassemia', 'Aplastic anemia', 'Vitamin B12 deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2752,
    question: `A young woman presents with irregular menstrual cycles and excessive hair growth. What is the most likely diagnosis?`,
    options: ['Polycystic ovary syndrome', 'Hyperthyroidism', 'Cushing\'s syndrome', 'Primary ovarian insufficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2753,
    question: `Which of the following is the most common cause of hospital-acquired pneumonia?`,
    options: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'Methicillin-resistant Staphylococcus aureus (MRSA)', 'Pseudomonas aeruginosa'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2754,
    question: `A patient presents with joint pain, a rash on the cheeks, and a history of photosensitivity. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus (SLE)', 'Psoriatic arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2755,
    question: `Which condition is characterized by a "lead pipe" appearance of the colon on imaging?`,
    options: ['Ulcerative colitis', 'Crohn\'s disease', 'Diverticulitis', 'Colorectal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2756,
    question: `A 60-year-old man with a history of smoking presents with a persistent cough and weight loss. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'COPD', 'Tuberculosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2757,
    question: `Which of the following conditions is associated with a "silent" myocardial infarction?`,
    options: ['Diabetes mellitus', 'Hypertension', 'Hyperlipidemia', 'Smoking'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2758,
    question: `A patient presents with sudden onset of unilateral facial weakness and inability to close one eye. What is the most likely diagnosis?`,
    options: ['Bell’s palsy', 'Stroke', 'Myasthenia gravis', 'Multiple sclerosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2759,
    question: `A 70-year-old man presents with new-onset confusion and hallucinations. What is the most likely cause?`,
    options: ['Alzheimer\'s disease', 'Delirium', 'Depression', 'Parkinson\'s disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2760,
    question: `In which condition would you expect to see a "steeple sign" on a neck X-ray?`,
    options: ['Epiglottitis', 'Croup', 'Laryngotracheobronchitis', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2761,
    question: `In patients with chronic obstructive pulmonary disease (COPD), what is the most common cause of acute exacerbation?`,
    options: ['Viral infections', 'Bacterial infections', 'Air pollution', 'Tobacco use'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2762,
    question: `A patient with a history of diabetes presents with numbness and tingling in the feet. What is the most likely cause?`,
    options: ['Peripheral neuropathy', 'Vascular disease', 'Neuropathy due to vitamin deficiency', 'Spinal cord injury'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2763,
    question: `The classic triad of symptoms for aortic stenosis includes:`,
    options: ['Angina, syncope, heart failure', 'Palpitations, dyspnea, fatigue', 'Chest pain, hypotension, dizziness', 'Cyanosis, tachypnea, hypotension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2764,
    question: `Which of the following is the first-line treatment for generalized anxiety disorder?`,
    options: ['Benzodiazepines', 'SSRIs', 'Antipsychotics', 'MAO inhibitors'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2765,
    question: `A 35-year-old woman presents with a persistent cough and weight loss. A chest X-ray shows a solitary lung nodule. What is the most appropriate next step?`,
    options: ['Observation', 'CT scan of the chest', 'PET scan', 'Bronchoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2766,
    question: `A 40-year-old woman presents with jaundice, pruritus, and elevated alkaline phosphatase levels. What is the most likely diagnosis?`,
    options: ['Acute hepatitis', 'Primary biliary cirrhosis', 'Cholecystitis', 'Gallstones'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2767,
    question: `The definitive treatment for acute appendicitis is:`,
    options: ['Antibiotics alone', 'Laparoscopic appendectomy', 'Open appendectomy', 'Observation'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2768,
    question: `Which condition is associated with "moon facies" and "buffalo hump"?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Acromegaly', 'Hyperthyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2769,
    question: `The most appropriate management for a patient presenting with severe anaphylaxis includes:`,
    options: ['Antihistamines', 'Epinephrine', 'Corticosteroids', 'Intravenous fluids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2770,
    question: `A patient presents with dysphagia and regurgitation of undigested food. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal cancer', 'Gastroesophageal reflux disease (GERD)', 'Zenker\'s diverticulum'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2771,
    question: `A patient with a history of sickle cell disease presents with acute onset of chest pain, fever, and shortness of breath. What is the most likely diagnosis?`,
    options: ['Acute chest syndrome', 'Pulmonary embolism', 'Pneumonia', 'Myocardial infarction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2772,
    question: `A 25-year-old male presents with joint pain, fever, and a rash. What is the most likely diagnosis?`,
    options: ['Reactive arthritis', 'Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2773,
    question: `A patient presents with a butterfly rash on the face and joint pain. What is the most likely diagnosis?`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Psoriatic arthritis', 'Sjögren\'s syndrome'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2774,
    question: `A 75-year-old man presents with worsening confusion and difficulty walking. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Vascular dementia', 'Parkinson\'s disease', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2775,
    question: `Which of the following is the most appropriate imaging modality for diagnosing a suspected pulmonary embolism?`,
    options: ['MRI', 'Chest X-ray', 'CT pulmonary angiography', 'Ultrasound'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2776,
    question: `A child presents with a febrile illness and a rash that starts on the face and spreads downwards. What is the most likely diagnosis?`,
    options: ['Measles', 'Rubella', 'Varicella', 'Roseola'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2777,
    question: `A 4-year-old boy is brought in with abdominal pain, constipation, and a palpable abdominal mass. What is the most likely diagnosis?`,
    options: ['Intussusception', 'Appendicitis', 'Volvulus', 'Mesenteric lymphadenitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2778,
    question: `A patient with severe hypertension presents with headache and vision changes. What is the most appropriate initial management?`,
    options: ['Start antihypertensive medications', 'Admit for observation', 'Provide reassurance', 'Refer to a specialist'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2779,
    question: `A child is brought in with a history of a barking cough, stridor, and difficulty breathing. What is the most likely diagnosis?`,
    options: ['Asthma', 'Croup', 'Bronchiolitis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2780,
    question: `A 25-year-old woman presents with multiple painful genital ulcers. What is the most likely diagnosis?`,
    options: ['Syphilis', 'Herpes simplex virus', 'Chlamydia', 'Human papillomavirus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2781,
    question: `Which condition is characterized by a "butterfly rash" on the face?`,
    options: ['Psoriasis', 'Eczema', 'Systemic lupus erythematosus (SLE)', 'Rosacea'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2782,
    question: `A 7-year-old child presents with hematuria, hypertension, and periorbital edema after a streptococcal throat infection. What is the most likely diagnosis?`,
    options: ['IgA nephropathy', 'Minimal change disease', 'Post-streptococcal glomerulonephritis', 'Henoch-Schönlein purpura'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2783,
    question: `A 22-year-old woman presents with abdominal pain, fever, and leukocytosis. What is the most likely diagnosis?`,
    options: ['Appendicitis', 'Ovarian torsion', 'Ectopic pregnancy', 'Pelvic inflammatory disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2784,
    question: `The most common benign tumor of female genital tract is:`,
    options: ['Ovarian cyst', 'Uterine fibroid', 'Cervical polyp', 'Endometrial polyp'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2785,
    question: `A patient with a history of heart failure presents with acute dyspnea and peripheral edema. What is the most likely cause?`,
    options: ['Pulmonary embolism', 'Acute exacerbation of heart failure', 'Pneumonia', 'Anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2786,
    question: `A woman presents with sudden gush of fluid per vaginum before labor. Diagnosis is:`,
    options: ['Polyhydramnios', 'Premature rupture of membranes', 'Urinary incontinence', 'Placenta previa'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2787,
    question: `In patients with osteoarthritis, which joint is most commonly affected?`,
    options: ['Wrist', 'Knee', 'Elbow', 'Shoulder'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2788,
    question: `A patient presents with a painful swelling in the groin after heavy lifting. What is the most likely diagnosis?`,
    options: ['Inguinal hernia', 'Femoral hernia', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2789,
    question: `A 50-year-old woman presents with recurrent urinary tract infections. What is the most appropriate management?`,
    options: ['Long-term antibiotics', 'Increase fluid intake', 'Cranberry supplements', 'Voiding techniques'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2790,
    question: `The most common cause of primary amenorrhea with normal secondary sexual characteristics is:`,
    options: ['Mullerian agenesis', 'Turner syndrome', 'Hypogonadotropic hypogonadism', 'Androgen insensitivity syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2791,
    question: `A patient presents with altered mental status and a blood glucose level of 45 mg/dL. What is the most appropriate initial treatment?`,
    options: ['Intravenous glucagon', 'Oral glucose', 'Intravenous dextrose', 'Corticosteroids'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2792,
    question: `The most common cause of elevated alkaline phosphatase is:`,
    options: ['Bone disease', 'Liver disease', 'Pregnancy', 'All of the above'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2793,
    question: `A newborn is diagnosed with congenital hypothyroidism. What is the most appropriate management?`,
    options: ['Levothyroxine therapy', 'Iodine supplementation', 'Surgery', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2794,
    question: `Which medication is used as a first-line treatment for essential hypertension?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2795,
    question: `The hormone responsible for milk ejection reflex is:`,
    options: ['Prolactin', 'Estrogen', 'Progesterone', 'Oxytocin'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2796,
    question: `A 50-year-old woman presents with breast pain and a palpable mass. What is the most appropriate next step in management?`,
    options: ['Mammography', 'Ultrasound', 'Fine-needle aspiration', 'Surgical biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2797,
    question: `A 65-year-old male smoker presents with a persistent cough and hemoptysis. Which of the following conditions should be suspected?`,
    options: ['Pneumonia', 'Lung cancer', 'Tuberculosis', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2798,
    question: `A patient with atrial fibrillation is at high risk for stroke. What is the most appropriate anticoagulant?`,
    options: ['Aspirin', 'Warfarin', 'Clopidogrel', 'Dabigatran'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2799,
    question: `A 29-year-old pregnant woman at 32 weeks presents with BP 170/110 mmHg, proteinuria, and epigastric pain. Lab tests reveal hemolysis, elevated liver enzymes, and low platelets. Diagnosis is:`,
    options: ['Severe preeclampsia', 'Eclampsia', 'HELLP syndrome', 'Acute fatty liver of pregnancy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2800,
    question: `A 45-year-old male presents with fatigue, jaundice, and dark urine. His laboratory tests reveal hemolysis, and he has a positive Coombs test. What is the most likely diagnosis?`,
    options: ['Sickle cell anemia', 'Autoimmune hemolytic anemia', 'Hereditary spherocytosis', 'G6PD deficiency'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2801,
    question: `A patient presents with joint pain, stiffness, and swelling in the morning. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2802,
    question: `In the context of meningitis, a "positive Brudzinski's sign" indicates:`,
    options: ['Localized infection', 'Involuntary flexion of the legs', 'Kernig\'s sign', 'Photophobia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2803,
    question: `In a patient with hypothyroidism, which laboratory test result would you expect?`,
    options: ['Elevated TSH', 'Decreased TSH', 'Elevated free T4', 'Decreased free T3'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2804,
    question: `The presence of "bamboo spine" is associated with which condition?`,
    options: ['Osteoarthritis', 'Ankylosing spondylitis', 'Rheumatoid arthritis', 'Spondylolisthesis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2805,
    question: `Which medication is used to treat patent ductus arteriosus (PDA) in preterm infants?`,
    options: ['Indomethacin', 'Furosemide', 'Digoxin', 'Prostaglandin'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2806,
    question: `A 3-year-old child presents with a barking cough, stridor, and fever. What is the most likely diagnosis?`,
    options: ['Epiglottitis', 'Croup', 'Asthma', 'Bronchiolitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2807,
    question: `Which drug class is primarily used to treat heart failure by decreasing preload?`,
    options: ['Diuretics', 'Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2808,
    question: `A patient presents with a rash, joint pain, and renal impairment. Serological tests reveal positive antinuclear antibodies (ANA). What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Rheumatoid arthritis', 'Sjögren\'s syndrome', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2809,
    question: `Which of the following is a hallmark sign of Cushing's syndrome?`,
    options: ['Hypotension', 'Moon face', 'Hyperpigmentation', 'Weight loss'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2810,
    question: `Which organism is the most common cause of community-acquired pneumonia in children?`,
    options: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Staphylococcus aureus', 'Haemophilus influenzae'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2811,
    question: `Which of the following is the most common cause of lower gastrointestinal bleeding in adults?`,
    options: ['Diverticulosis', 'Hemorrhoids', 'Colorectal cancer', 'Crohn’s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2812,
    question: `A 32-year-old male presents with a painful and swollen left knee. Joint aspiration reveals needle-shaped crystals with negative birefringence. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Rheumatoid arthritis', 'Gout', 'Pseudogout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2813,
    question: `A 50-year-old male presents with fatigue, pallor, and splenomegaly. Lab tests reveal a high white blood cell count with immature granulocytes. What is the most likely diagnosis?`,
    options: ['Chronic myeloid leukemia', 'Acute myeloid leukemia', 'Myelodysplastic syndrome', 'Lymphoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2814,
    question: `A newborn presents with jaundice on the second day of life. What is the most likely cause?`,
    options: ['Breast milk jaundice', 'Hemolytic disease of the newborn', 'Physiologic jaundice', 'Biliary atresia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2815,
    question: `A patient with a history of migraines presents with a "visual aura." What is this?`,
    options: ['A warning sign that a migraine is about to occur', 'A sign of a stroke', 'A symptom of cluster headaches', 'A form of tension headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2816,
    question: `Which type of shock is caused by severe allergic reactions?`,
    options: ['Hypovolemic shock', 'Cardiogenic shock', 'Distributive shock', 'Obstructive shock'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2817,
    question: `A patient presents with severe headaches and visual disturbances. MRI shows a pituitary tumor. What is the most likely diagnosis?`,
    options: ['Pituitary adenoma', 'Meningioma', 'Craniopharyngioma', 'Astrocytoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2818,
    question: `A patient with chronic cough and sputum production presents with a history of smoking. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Asthma', 'Lung cancer', 'Emphysema'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2819,
    question: `Which of the following medications is a common treatment for allergic rhinitis?`,
    options: ['Corticosteroids', 'Antihistamines', 'Decongestants', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2820,
    question: `The drug used to reverse the effects of opioid overdose is:`,
    options: ['Atropine', 'Naloxone', 'Flumazenil', 'Diazepam'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2821,
    question: `A child presents with difficulty breathing, a high-pitched wheeze, and a history of allergies. What is the most likely diagnosis?`,
    options: ['Asthma', 'Bronchiolitis', 'Croup', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2822,
    question: `Which blood test is primarily used to assess liver function?`,
    options: ['Complete blood count (CBC)', 'Liver function tests (LFTs)', 'Electrolyte panel', 'Coagulation profile'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2823,
    question: `A child presents with difficulty breathing and a "barking" cough. What is the most likely diagnosis?`,
    options: ['Bronchiolitis', 'Croup', 'Asthma', 'Pneumonia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2824,
    question: `A 50-year-old male presents with yellowing of the skin and eyes. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Jaundice', 'Cirrhosis', 'Hemolytic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2825,
    question: `A patient with rheumatoid arthritis is started on methotrexate. What is the most important lab test to monitor?`,
    options: ['Liver function tests', 'Renal function tests', 'Complete blood count', 'Serum electrolytes'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2826,
    question: `A patient presents with a red, swollen, and painful great toe. Joint fluid analysis reveals needle-shaped crystals. What is the most likely diagnosis?`,
    options: ['Gout', 'Septic arthritis', 'Rheumatoid arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2827,
    question: `A patient with a history of asthma presents with respiratory distress and is found to be in status asthmaticus. What is the most appropriate initial treatment?`,
    options: ['Oxygen therapy', 'Systemic corticosteroids', 'Continuous nebulized albuterol', 'Anticholinergic agents'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2828,
    question: `In the case of hypothyroidism, which of the following laboratory findings is typically present?`,
    options: ['Low TSH', 'High T3 and T4', 'High TSH', 'Normal T3 and T4'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2829,
    question: `The most common complication of prolonged obstructed labor is:`,
    options: ['Uterine fibroid', 'Vesicovaginal fistula', 'Endometriosis', 'Cervical cancer'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2830,
    question: `The "double bubble" sign on X-ray is indicative of which condition?`,
    options: ['Duodenal atresia', 'Intussusception', 'Volvulus', 'Pyloric stenosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2831,
    question: `A 10-year-old child presents with a swollen knee after a fall. The knee is tender and there is effusion. What is the most likely diagnosis?`,
    options: ['Fracture', 'Osteomyelitis', 'Hemarthrosis', 'Ligament injury'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2832,
    question: `A 12-year-old boy presents with a painful swollen knee, fever, and limited range of motion. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Osteomyelitis', 'Juvenile rheumatoid arthritis', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2833,
    question: `A 30-year-old woman presents with bilateral joint pain, morning stiffness, and swelling in her hands. What is the most likely diagnosis?`,
    options: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Lupus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2834,
    question: `A patient presents with severe itching, jaundice, and dark urine. What is the most likely cause of these symptoms?`,
    options: ['Acute hepatitis', 'Cholestasis', 'Cirrhosis', 'Gallbladder disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2835,
    question: `A patient presents with a history of intermittent claudication. What does this indicate?`,
    options: ['Venous insufficiency', 'Peripheral artery disease', 'Deep vein thrombosis', 'Varicose veins'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2836,
    question: `Which medication is commonly used as a first-line treatment for hypertension?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers', 'Diuretics'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2837,
    question: `A patient presents with bilateral leg swelling, orthopnea, and jugular venous distention. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Heart failure', 'Deep vein thrombosis (DVT)', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2838,
    question: `In a patient with a suspected deep vein thrombosis (DVT), what is the most appropriate initial imaging study?`,
    options: ['CT scan of the chest', 'Venous ultrasound', 'MRI', 'X-ray'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2839,
    question: `Which of the following is a key feature of systemic sclerosis (scleroderma)?`,
    options: ['Facial rash', 'Raynaud\'s phenomenon', 'Joint hypermobility', 'Erythema nodosum'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2840,
    question: `The most common cause of secondary infertility is:`,
    options: ['PCOS', 'Tubal factor', 'Cervical factor', 'Uterine factor'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2841,
    question: `A patient presents with a rash that worsens with sun exposure. What is the most likely diagnosis?`,
    options: ['Systemic lupus erythematosus', 'Psoriasis', 'Eczema', 'Dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2842,
    question: `A 55-year-old man presents with back pain and hypercalcemia. What condition should be suspected?`,
    options: ['Multiple myeloma', 'Osteoporosis', 'Paget\'s disease', 'Osteosarcoma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2843,
    question: `A 50-year-old woman presents with a new-onset headache and blurred vision. What should be the initial investigation?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Lumbar puncture', 'Fundoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2844,
    question: `A 10-year-old boy is brought to the emergency room with a swollen knee. What is the most likely diagnosis if there is a history of trauma?`,
    options: ['Osteomyelitis', 'Meniscal tear', 'Hemarthrosis', 'Juvenile idiopathic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2845,
    question: `Which of the following is the most appropriate first-line treatment for hypertension in a patient with heart failure?`,
    options: ['Calcium channel blocker', 'ACE inhibitor', 'Diuretic', 'Beta-blocker'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2846,
    question: `Which of the following is a potential complication of untreated hyperthyroidism?`,
    options: ['Myxedema coma', 'Thyroid storm', 'Goiter', 'Hypoparathyroidism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2847,
    question: `A child presents with an erythematous rash on the cheeks and a "slapped cheek" appearance. What is the most likely diagnosis?`,
    options: ['Fifth disease (Erythema infectiosum)', 'Roseola', 'Measles', 'Chickenpox'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2848,
    question: `In chronic obstructive pulmonary disease (COPD), which finding is typically observed on spirometry?`,
    options: ['Decreased FEV1/FVC ratio', 'Increased FVC', 'Normal FEV1', 'Increased peak flow rate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2849,
    question: `A patient presents with swelling and pain in the big toe, especially at night. What is the most likely diagnosis?`,
    options: ['Gout', 'Osteoarthritis', 'Rheumatoid arthritis', 'Psoriatic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2850,
    question: `A 75-year-old male presents with difficulty urinating and nocturia. What is the most appropriate initial investigation?`,
    options: ['Prostate-specific antigen (PSA) test', 'Urinalysis', 'Digital rectal exam', 'Cystoscopy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2851,
    question: `In pediatric patients, the most common type of leukemia is:`,
    options: ['Acute lymphoblastic leukemia (ALL)', 'Chronic lymphocytic leukemia (CLL)', 'Acute myeloid leukemia (AML)', 'Chronic myeloid leukemia (CML)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2852,
    question: `A child is brought in with a fever and a rash that started on the trunk and spread to the extremities. What is the most likely diagnosis?`,
    options: ['Roseola', 'Chickenpox', 'Rubella', 'Measles'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2853,
    question: `The most common type of thyroid cancer is:`,
    options: ['Follicular carcinoma', 'Papillary carcinoma', 'Medullary carcinoma', 'Anaplastic carcinoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2854,
    question: `Which of the following conditions is most likely to cause clubbing of the fingers?`,
    options: ['Asthma', 'Chronic bronchitis', 'Cystic fibrosis', 'Pulmonary embolism'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2855,
    question: `In which of the following conditions is a "bull's eye" rash typically observed?`,
    options: ['Erythema multiforme', 'Lyme disease', 'Psoriasis', 'Scabies'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2856,
    question: `A 29-year-old female presents with irregular menstrual cycles, hirsutism, and obesity. What is the most likely diagnosis?`,
    options: ['Cushing’s syndrome', 'Polycystic ovary syndrome (PCOS)', 'Hypothyroidism', 'Premature ovarian failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2857,
    question: `Which condition is characterized by episodes of vertigo, tinnitus, and hearing loss?`,
    options: ['Otitis externa', 'Meniere\'s disease', 'Acoustic neuroma', 'Labyrinthitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2858,
    question: `In which condition would you expect to see a positive Ortolani sign?`,
    options: ['Hip dislocation', 'Developmental dysplasia of the hip', 'Congenital clubfoot', 'Fractured femur'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2859,
    question: `A patient with a history of COPD presents with worsening dyspnea. What is the most appropriate initial management?`,
    options: ['Antibiotics', 'Bronchodilators', 'Corticosteroids', 'Oxygen therapy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2860,
    question: `Which of the following drugs is commonly used to reverse the anticoagulant effects of heparin?`,
    options: ['Protamine sulfate', 'Vitamin K', 'FFP (Fresh frozen plasma)', 'Cryoprecipitate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2861,
    question: `A 60-year-old man presents with difficulty swallowing and a feeling of food sticking in his throat. What is the most likely diagnosis?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2862,
    question: `A 3-year-old child presents with recurrent ear infections and a family history of allergies. What is the most likely diagnosis?`,
    options: ['Allergic rhinitis', 'Eustachian tube dysfunction', 'Otitis media', 'Sinusitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2863,
    question: `The presence of Reed-Sternberg cells is characteristic of which type of lymphoma?`,
    options: ['Non-Hodgkin lymphoma', 'Hodgkin lymphoma', 'Burkitt lymphoma', 'Follicular lymphoma'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2864,
    question: `A child with a history of asthma presents with respiratory distress and a peak flow rate of 50% of predicted. What is the most appropriate next step in management?`,
    options: ['Increase inhaled corticosteroid', 'Administer systemic corticosteroids', 'Nebulized albuterol', 'Oral antihistamines'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2865,
    question: `A 45-year-old man presents with a painful, red, swollen great toe. What is the most likely diagnosis?`,
    options: ['Gout', 'Rheumatoid arthritis', 'Osteoarthritis', 'Septic arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2866,
    question: `A 70-year-old male presents with sudden onset of weakness in the right arm and leg. What is the most likely diagnosis?`,
    options: ['Transient ischemic attack (TIA)', 'Hemorrhagic stroke', 'Ischemic stroke', 'Peripheral neuropathy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2867,
    question: `A 60-year-old female presents with a new onset of dysphagia and weight loss. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2868,
    question: `A 26-year-old woman presents with foul-smelling vaginal discharge, fever, and lower abdominal pain after unsafe abortion. The most likely diagnosis is:`,
    options: ['Pelvic inflammatory disease', 'Septic abortion', 'Endometritis', 'Vaginitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2869,
    question: `A 55-year-old man presents with severe epigastric pain radiating to the back. He has a history of chronic alcohol use. Serum lipase is markedly elevated. What is the most likely diagnosis?`,
    options: ['Cholecystitis', 'Pancreatitis', 'Peptic ulcer disease', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2870,
    question: `Which condition is characterized by an abnormality in hemoglobin leading to sickle-shaped red blood cells?`,
    options: ['Thalassemia', 'Sickle cell disease', 'Iron deficiency anemia', 'Aplastic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2871,
    question: `A 72-year-old man with a history of prostate cancer presents with bone pain. What is the most likely cause of his symptoms?`,
    options: ['Osteoporosis', 'Bone metastases', 'Paget\'s disease', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2872,
    question: `A 50-year-old man presents with progressive difficulty swallowing solid foods, with associated weight loss. What is the most likely diagnosis?`,
    options: ['Achalasia', 'Esophageal cancer', 'Gastroesophageal reflux disease', 'Peptic stricture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2873,
    question: `What is the most common cause of death in patients with systemic lupus erythematosus (SLE)?`,
    options: ['Renal failure', 'Cardiovascular disease', 'Infections', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2874,
    question: `A patient with chronic kidney disease is likely to develop which of the following complications?`,
    options: ['Osteoporosis', 'Anemia', 'Hypertension', 'All of the above'],
    correct: 3,
    explanation: ''
  },
  {
    id: 2875,
    question: `Which cardiac enzyme is most specific for myocardial infarction?`,
    options: ['Creatine kinase (CK)', 'Troponin', 'Myoglobin', 'Lactate dehydrogenase (LDH)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2876,
    question: `What is the primary treatment for hyperlipidemia?`,
    options: ['Statins', 'Fibrates', 'Niacin', 'Bile acid sequestrants'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2877,
    question: `Which of the following is the most common site of metastasis for prostate cancer?`,
    options: ['Liver', 'Lung', 'Bone', 'Brain'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2878,
    question: `A patient presents with dark, tarry stools. What is the most likely source of bleeding?`,
    options: ['Upper gastrointestinal tract', 'Lower gastrointestinal tract', 'Hemorrhoids', 'Esophageal varices'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2879,
    question: `Which of the following is an indication for hemodialysis?`,
    options: ['Chronic kidney disease stage 2', 'Hyperkalemia', 'Mild metabolic acidosis', 'Proteinuria'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2880,
    question: `A 60-year-old man presents with new-onset atrial fibrillation. What is the most important initial evaluation?`,
    options: ['Echocardiogram', 'Chest X-ray', 'Thyroid function tests', 'Holter monitor'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2881,
    question: `A patient presents with a sore throat, fever, and an enlarged spleen. A monospot test is positive. What is the most likely diagnosis?`,
    options: ['Infectious mononucleosis', 'Streptococcal pharyngitis', 'Cytomegalovirus infection', 'Tonsillitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2882,
    question: `Which of the following is a hallmark feature of Guillain-Barré syndrome?`,
    options: ['Ascending paralysis', 'Descending paralysis', 'Spastic paralysis', 'Fluctuating weakness'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2883,
    question: `Which condition is characterized by a "moon face" appearance?`,
    options: ['Hyperthyroidism', 'Cushing\'s syndrome', 'Addison\'s disease', 'Acromegaly'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2884,
    question: `The most common site of ectopic pregnancy is:`,
    options: ['Ampulla of fallopian tube', 'Isthmus', 'Ovary', 'Cervix'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2885,
    question: `A patient presents with significant weight loss, fatigue, and night sweats. What is the most appropriate initial test?`,
    options: ['Chest X-ray', 'Complete blood count (CBC)', 'HIV test', 'Thyroid function tests'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2886,
    question: `A patient with heart failure is prescribed a medication that reduces fluid overload. Which class of medication is this?`,
    options: ['Beta-blockers', 'ACE inhibitors', 'Diuretics', 'Calcium channel blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2887,
    question: `A 45-year-old male presents with abdominal pain, weight loss, and a palpable mass in the epigastric region. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Gastric ulcer', 'Cholecystitis', 'Appendicitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2888,
    question: `A 3-year-old child presents with a barking cough, stridor, and respiratory distress. The most likely diagnosis is:`,
    options: ['Epiglottitis', 'Croup', 'Bronchiolitis', 'Asthma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2889,
    question: `A woman presents with infertility and repeated abortions. Ultrasound shows septate uterus. Management is:`,
    options: ['Hysterectomy', 'Laparotomy', 'Hysteroscopic septal resection', 'Hormonal therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2890,
    question: `A patient presents with a history of severe headaches and visual disturbances. What condition should be suspected?`,
    options: ['Migraine', 'Hypertensive crisis', 'Pituitary tumor', 'Temporal arteritis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2891,
    question: `A patient with chronic back pain presents with a positive straight leg raise test. What is the most likely diagnosis?`,
    options: ['Lumbar disc herniation', 'Osteoarthritis', 'Spondylolisthesis', 'Fibromyalgia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2892,
    question: `Which laboratory finding is characteristic of nephrotic syndrome?`,
    options: ['Hematuria', 'Proteinuria', 'Oliguria', 'Hyperkalemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2893,
    question: `The most common indication for cesarean section is:`,
    options: ['Fetal distress', 'Breech presentation', 'Previous cesarean section', 'Prolonged labor'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2894,
    question: `In which condition is pulsus paradoxus commonly seen?`,
    options: ['Aortic stenosis', 'Cardiac tamponade', 'Mitral stenosis', 'Heart failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2895,
    question: `The first-line treatment for mild to moderate Crohn’s disease is:`,
    options: ['Methotrexate', 'Infliximab', 'Sulfasalazine', 'Prednisone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2896,
    question: `Which of the following is the most effective treatment for severe allergic reactions?`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Inhaled beta-agonists'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2897,
    question: `A 50-year-old male with a history of smoking presents with hemoptysis and weight loss. What is the most appropriate initial diagnostic test?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Bronchoscopy', 'Sputum cytology'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2898,
    question: `A patient presents with chronic fatigue, muscle weakness, and craving for salty foods. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hypothyroidism', 'Diabetes mellitus'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2899,
    question: `A patient presents with fatigue, pallor, and a history of heavy menstrual bleeding. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Hemolytic anemia', 'Aplastic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2900,
    question: `A patient with suspected pulmonary embolism presents with sudden onset of pleuritic chest pain, dyspnea, and tachycardia. What is the best initial diagnostic test?`,
    options: ['D-dimer test', 'Chest X-ray', 'CT pulmonary angiography', 'Ventilation-perfusion (V/Q) scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2901,
    question: `The initial management of anaphylaxis includes:`,
    options: ['Antihistamines', 'Corticosteroids', 'Epinephrine', 'Oxygen therapy'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2902,
    question: `A 62-year-old male with a history of smoking presents with hemoptysis and weight loss. What is the most likely diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2903,
    question: `What is the most common type of skin rash associated with systemic lupus erythematosus (SLE)?`,
    options: ['Erythema multiforme', 'Psoriasis', 'Butterfly rash', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2904,
    question: `Which of the following is an absolute contraindication for thrombolytic therapy in myocardial infarction?`,
    options: ['Recent surgery', 'Active bleeding', 'Previous myocardial infarction', 'Age over 75'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2905,
    question: `A 45-year-old woman presents with fatigue, weight gain, and cold intolerance. Lab results show elevated TSH and low free T4. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Subacute thyroiditis', 'Euthyroid sick syndrome'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2906,
    question: `A 50-year-old male presents with sudden onset of chest pain radiating to the left arm. What is the most likely diagnosis?`,
    options: ['Angina pectoris', 'Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2907,
    question: `A patient with a history of anxiety presents with palpitations and dizziness. What is the most likely cause?`,
    options: ['Hyperthyroidism', 'Panic attack', 'Cardiac arrhythmia', 'Anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2908,
    question: `Which of the following is a common side effect of corticosteroid therapy?`,
    options: ['Weight loss', 'Hyperglycemia', 'Hypokalemia', 'Bradycardia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2909,
    question: `A 45-year-old woman with a history of smoking presents with a cough and hemoptysis. What is the most concerning diagnosis?`,
    options: ['Chronic bronchitis', 'Lung cancer', 'Tuberculosis', 'Pulmonary embolism'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2910,
    question: `A patient with chronic liver disease presents with ascites and a positive shifting dullness test. What is the most likely diagnosis?`,
    options: ['Cirrhosis', 'Hepatitis', 'Liver cancer', 'Portal hypertension'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2911,
    question: `What is the primary hormone involved in the development of gestational diabetes?`,
    options: ['Cortisol', 'Estrogen', 'Human placental lactogen (HPL)', 'Progesterone'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2912,
    question: `A 40-year-old male presents with fatigue, weight gain, and cold intolerance. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Hypothyroidism', 'Cushing\'s syndrome', 'Addison\'s disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2913,
    question: `A patient presents with pruritic vesicular lesions on the palms and soles. What is the most likely diagnosis?`,
    options: ['Hand-foot-and-mouth disease', 'Eczema', 'Psoriasis', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2914,
    question: `Which imaging study is the best for diagnosing appendicitis?`,
    options: ['X-ray', 'Ultrasound', 'CT scan', 'MRI'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2915,
    question: `Which laboratory test is primarily used to diagnose diabetes insipidus?`,
    options: ['Fasting blood glucose', 'Water deprivation test', 'Urine culture', 'Serum electrolytes'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2916,
    question: `A 45-year-old man with a history of hypertension presents with headaches and vision changes. What condition should be suspected?`,
    options: ['Stroke', 'Hypertensive retinopathy', 'Glaucoma', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2917,
    question: `A 70-year-old woman presents with fatigue, pallor, and a history of heavy menstrual bleeding. What is the most likely cause of her anemia?`,
    options: ['Iron deficiency', 'Chronic disease', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2918,
    question: `A patient with chronic liver disease presents with confusion, asterixis, and altered mental status. What is the most likely diagnosis?`,
    options: ['Hepatic encephalopathy', 'Hepatocellular carcinoma', 'Portal hypertension', 'Alcoholic hepatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2919,
    question: `A patient presents with severe abdominal pain and "currant jelly" stools. This is suggestive of:`,
    options: ['Intussusception', 'Appendicitis', 'Volvulus', 'Gastroenteritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2920,
    question: `A patient presents with hypotension, tachycardia, and cool, clammy skin after an accident. What is the most likely diagnosis?`,
    options: ['Anaphylactic shock', 'Cardiogenic shock', 'Hypovolemic shock', 'Septic shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2921,
    question: `What is the most effective initial treatment for an acute asthma attack?`,
    options: ['Oral corticosteroids', 'Long-acting beta-agonists', 'Short-acting beta-agonists', 'Anticholinergics'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2922,
    question: `A patient with a history of smoking presents with hoarseness and a persistent cough. What is the most likely diagnosis?`,
    options: ['Laryngeal cancer', 'Chronic laryngitis', 'Gastroesophageal reflux disease', 'Vocal cord nodules'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2923,
    question: `A patient presents with fever, rash, and joint pain after starting a new medication. What is the most likely diagnosis?`,
    options: ['Drug-induced lupus', 'Erythema multiforme', 'Serum sickness', 'Stevens-Johnson syndrome'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2924,
    question: `A patient presents with chest pain, dyspnea, and a history of recent travel. A CT scan shows a filling defect in the pulmonary artery. What is the most likely diagnosis?`,
    options: ['Pulmonary embolism', 'Myocardial infarction', 'Pneumonia', 'Aortic dissection'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2925,
    question: `In which condition is a "cushion" of fat seen around the adrenal glands?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Conn\'s syndrome', 'Adrenal crisis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2926,
    question: `A patient presents with chest pain that worsens with inspiration and is relieved by leaning forward. What is the most likely diagnosis?`,
    options: ['Pericarditis', 'Myocardial infarction', 'Pulmonary embolism', 'Pneumonia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2927,
    question: `A patient with fever, fatigue, and a sore throat has a positive rapid antigen test for streptococcal pharyngitis. What is the most appropriate treatment?`,
    options: ['Amoxicillin', 'Azithromycin', 'Clindamycin', 'No treatment needed'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2928,
    question: `A patient presents with fatigue, pallor, and a history of heavy menstrual bleeding. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Hemolytic anemia', 'Aplastic anemia', 'Sickle cell anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2929,
    question: `A patient with known hypertension presents with acute onset of severe headache and neurological deficits. What condition should be suspected?`,
    options: ['Subarachnoid hemorrhage', 'Ischemic stroke', 'Intracerebral hemorrhage', 'Tension headache'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2930,
    question: `A 25-year-old man presents with scrotal pain and swelling. Doppler ultrasound shows decreased blood flow. What is the most likely diagnosis?`,
    options: ['Epididymitis', 'Testicular torsion', 'Hydrocele', 'Varicocele'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2931,
    question: `A patient presents with a high fever and severe headache, and lumbar puncture shows cloudy cerebrospinal fluid. What is the most likely diagnosis?`,
    options: ['Bacterial meningitis', 'Viral meningitis', 'Tuberculous meningitis', 'Fungal meningitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2932,
    question: `A patient presents with severe abdominal pain, bloody diarrhea, and weight loss. What is the most likely diagnosis?`,
    options: ['Irritable bowel syndrome', 'Ulcerative colitis', 'Crohn\'s disease', 'Celiac disease'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2933,
    question: `Which cardiac enzyme is most specific for myocardial infarction?`,
    options: ['Creatine kinase (CK)', 'Troponin', 'Myoglobin', 'Lactate dehydrogenase (LDH)'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2934,
    question: `A 50-year-old female presents with excessive thirst and frequent urination. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus', 'Hyperthyroidism', 'Chronic kidney disease', 'Hypercalcemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2935,
    question: `A patient presents with polyuria, polydipsia, and weight loss. Laboratory findings reveal hyperglycemia. What is the most likely diagnosis?`,
    options: ['Diabetes mellitus type 1', 'Diabetes insipidus', 'Cushing\'s syndrome', 'Hyperthyroidism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2936,
    question: `In chronic obstructive pulmonary disease (COPD), which finding is typically observed on spirometry?`,
    options: ['Decreased FEV1/FVC ratio', 'Increased FVC', 'Normal FEV1', 'Increased peak flow rate'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2937,
    question: `In a patient with hypothyroidism, which laboratory finding is expected?`,
    options: ['Elevated T3', 'Elevated T4', 'Elevated TSH', 'Low TSH'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2938,
    question: `A patient with a history of smoking presents with a new cough and hemoptysis. What is the most appropriate next step?`,
    options: ['Chest X-ray', 'CT scan of the chest', 'Bronchoscopy', 'Sputum culture'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2939,
    question: `A 30-year-old female presents with fatigue, pallor, and a positive Schilling test. What is the likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Megaloblastic anemia', 'Aplastic anemia', 'Hemolytic anemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2940,
    question: `A patient presents with worsening fatigue and pallor. What is the most likely cause of these symptoms?`,
    options: ['Anemia', 'Dehydration', 'Hyperthyroidism', 'Renal failure'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2941,
    question: `In which condition would you typically see a "butterfly rash"?`,
    options: ['Psoriasis', 'Rosacea', 'Systemic lupus erythematosus', 'Dermatitis herpetiformis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2942,
    question: `What is the most appropriate initial management for a patient with an acute asthma exacerbation?`,
    options: ['Corticosteroids', 'Inhaled beta-agonists', 'Antibiotics', 'Oxygen therapy'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2943,
    question: `A 12-year-old boy presents with a painful swollen knee, fever, and limited range of motion. What is the most likely diagnosis?`,
    options: ['Septic arthritis', 'Osteomyelitis', 'Juvenile rheumatoid arthritis', 'Gout'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2944,
    question: `A 60-year-old man with a history of hypertension presents with sudden-onset severe headache, nausea, and neck stiffness. What is the most likely diagnosis?`,
    options: ['Ischemic stroke', 'Subarachnoid hemorrhage', 'Tension headache', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2945,
    question: `Which of the following is the most common cause of hyperthyroidism in adults?`,
    options: ['Hashimoto\'s thyroiditis', 'Thyroid adenoma', 'Graves\' disease', 'Thyroid cancer'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2946,
    question: `The most common cause of postpartum hemorrhage is:`,
    options: ['Genital tract trauma', 'Retained placental tissue', 'Uterine atony', 'Coagulation disorders'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2947,
    question: `Which type of shock is characterized by decreased cardiac output and increased systemic vascular resistance?`,
    options: ['Cardiogenic shock', 'Hypovolemic shock', 'Distributive shock', 'Obstructive shock'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2948,
    question: `A 3-year-old child presents with a barking cough and stridor at rest. What is the most appropriate treatment?`,
    options: ['Oral steroids', 'Nebulized epinephrine', 'Antibiotics', 'Observation'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2949,
    question: `A patient with end-stage liver disease presents with ascites. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Liver transplant', 'Beta-blockers'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2950,
    question: `A 55-year-old man presents with jaundice, weight loss, and a palpable gallbladder. What is the most likely diagnosis?`,
    options: ['Pancreatic cancer', 'Hepatitis', 'Cholelithiasis', 'Cirrhosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2951,
    question: `A young woman presents with heavy menstrual bleeding and a history of pelvic pain. An ultrasound shows an enlarged uterus with multiple fibroids. What is the most likely diagnosis?`,
    options: ['Endometriosis', 'Uterine fibroids', 'Ovarian cysts', 'Adenomyosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2952,
    question: `A 50-year-old woman presents with breast pain and a palpable mass. What is the most appropriate next step in management?`,
    options: ['Mammography', 'Ultrasound', 'Fine-needle aspiration', 'Surgical biopsy'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2953,
    question: `Which of the following is a common side effect of corticosteroids?`,
    options: ['Hypoglycemia', 'Osteoporosis', 'Bradycardia', 'Diarrhea'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2954,
    question: `Which of the following is the primary imaging modality for evaluating suspected ischemic stroke within the first few hours?`,
    options: ['CT scan', 'MRI', 'Ultrasound', 'PET scan'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2955,
    question: `A 35-year-old man presents with episodic severe headaches, palpitations, and sweating. What is the most likely diagnosis?`,
    options: ['Hyperthyroidism', 'Pheochromocytoma', 'Panic disorder', 'Migraine'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2956,
    question: `A 45-year-old man presents with jaundice, pruritus, and dark urine. Which of the following conditions is most likely?`,
    options: ['Hepatitis A', 'Hepatitis B', 'Cholestasis', 'Cirrhosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2957,
    question: `A patient with chronic liver disease presents with ascites and abdominal discomfort. What is the most appropriate initial management?`,
    options: ['Diuretics', 'Paracentesis', 'Fluid restriction', 'Albumin infusion'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2958,
    question: `A "butterfly-shaped" rash across the cheeks and nose is characteristic of:`,
    options: ['Rheumatoid arthritis', 'Systemic lupus erythematosus', 'Dermatomyositis', 'Rosacea'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2959,
    question: `Which medication is a first-line treatment for asthma?`,
    options: ['Salmeterol', 'Montelukast', 'Albuterol', 'Theophylline'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2960,
    question: `Which class of drugs is commonly used to treat hyperlipidemia?`,
    options: ['Beta-blockers', 'Statins', 'ACE inhibitors', 'Diuretics'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2961,
    question: `A patient presents with jaundice, dark urine, and pale stools. What is the most likely diagnosis?`,
    options: ['Hepatitis', 'Hemolytic anemia', 'Obstructive jaundice', 'Cirrhosis'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2962,
    question: `A patient with a history of heart failure presents with increasing shortness of breath. What is the most appropriate management step?`,
    options: ['Administer diuretics', 'Start beta-blockers', 'Increase ACE inhibitors', 'Refer to cardiology'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2963,
    question: `A 28-year-old female presents with severe abdominal pain and nausea. An ultrasound shows a gallbladder stone. What is the best initial management?`,
    options: ['Surgery', 'Medical management', 'Observation', 'ERCP'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2964,
    question: `A 70-year-old male with a history of prostate cancer presents with back pain and neurological deficits. What is the most likely diagnosis?`,
    options: ['Osteoporotic fracture', 'Spinal metastasis', 'Herniated disc', 'Multiple myeloma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2965,
    question: `A patient with a history of asthma presents with worsening shortness of breath and wheezing. What is the most appropriate immediate treatment?`,
    options: ['Oral corticosteroids', 'Inhaled corticosteroids', 'Short-acting beta-agonist', 'Long-acting beta-agonist'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2966,
    question: `Which of the following conditions is characterized by the "butterfly rash" on the face?`,
    options: ['Systemic lupus erythematosus (SLE)', 'Rheumatoid arthritis', 'Dermatomyositis', 'Scleroderma'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2967,
    question: `A 45-year-old male presents with increasing fatigue and palpitations. A complete blood count shows anemia. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Aplastic anemia', 'Hemolytic anemia', 'Thalassemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2968,
    question: `Which of the following is a contraindication for the use of metformin?`,
    options: ['Type 2 diabetes', 'Heart failure', 'Renal impairment', 'Obesity'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2969,
    question: `In a patient with hyperkalemia, which of the following ECG changes is most likely?`,
    options: ['Peaked T waves', 'Prolonged QT interval', 'ST elevation', 'Flattened P waves'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2970,
    question: `Which condition is characterized by a prolonged PR interval on ECG?`,
    options: ['Atrial fibrillation', 'First-degree AV block', 'Atrial flutter', 'Ventricular tachycardia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2971,
    question: `A patient with a history of angina presents with sudden chest pain radiating to the arm. What is the most likely diagnosis?`,
    options: ['Myocardial infarction', 'Pulmonary embolism', 'Aortic dissection', 'Gastroesophageal reflux disease (GERD)'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2972,
    question: `A 30-year-old woman presents with a painless breast lump. What is the most likely diagnosis?`,
    options: ['Fibroadenoma', 'Mastitis', 'Breast cancer', 'Cyst'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2973,
    question: `A positive Homan's sign is indicative of:`,
    options: ['Deep vein thrombosis (DVT)', 'Peripheral arterial disease', 'Cellulitis', 'Varicose veins'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2974,
    question: `A patient presents with dysphagia, regurgitation of undigested food, and halitosis. What is the most likely diagnosis?`,
    options: ['Esophageal stricture', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophageal cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2975,
    question: `Which of the following is a common feature of Cushing's syndrome?`,
    options: ['Hypoglycemia', 'Hyperkalemia', 'Central obesity', 'Weight loss'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2976,
    question: `A 25-year-old male presents with fatigue, muscle weakness, and darkening of the skin. Blood tests reveal low sodium, high potassium, and low cortisol levels. What is the most likely diagnosis?`,
    options: ['Addison\'s disease', 'Cushing\'s syndrome', 'Hyperaldosteronism', 'Hypopituitarism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2977,
    question: `A 70-year-old male presents with confusion, headache, and visual disturbances. What is the most appropriate initial investigation?`,
    options: ['MRI of the brain', 'CT scan of the head', 'Lumbar puncture', 'EEG'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2978,
    question: `A patient presents with painless lymphadenopathy, fever, and night sweats. What is the most likely diagnosis?`,
    options: ['Hodgkin lymphoma', 'Non-Hodgkin lymphoma', 'Chronic lymphocytic leukemia', 'Acute myeloid leukemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2979,
    question: `A 70-year-old female presents with confusion, tremors, and a "mask-like" face. What is the most likely diagnosis?`,
    options: ['Alzheimer\'s disease', 'Parkinson\'s disease', 'Frontotemporal dementia', 'Lewy body dementia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2980,
    question: `In patients with chronic kidney disease, which electrolyte abnormality is most commonly seen?`,
    options: ['Hypernatremia', 'Hyperkalemia', 'Hypocalcemia', 'Hyperphosphatemia'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2981,
    question: `A 35-year-old male presents with a swollen and painful joint. Synovial fluid analysis shows a high white blood cell count with a predominance of neutrophils. What is the most likely diagnosis?`,
    options: ['Gout', 'Septic arthritis', 'Rheumatoid arthritis', 'Osteoarthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2982,
    question: `A patient with severe hypertension and a history of chronic kidney disease is likely to have which of the following?`,
    options: ['Primary hypertension', 'Secondary hypertension', 'Resistant hypertension', 'White coat hypertension'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2983,
    question: `A 32-year-old woman presents with fever, chills, flank pain, and dysuria. Urine culture is positive for Escherichia coli. What is the most likely diagnosis?`,
    options: ['Pyelonephritis', 'Cystitis', 'Urethritis', 'Vaginitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2984,
    question: `A patient presents with fatigue, dyspnea, and a dry, nonproductive cough. A chest X-ray reveals bilateral hilar lymphadenopathy. What is the most likely diagnosis?`,
    options: ['Tuberculosis', 'Sarcoidosis', 'Lung cancer', 'Pulmonary embolism'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2985,
    question: `The primary mode of transmission for hepatitis B virus is:`,
    options: ['Fecal-oral route', 'Airborne droplets', 'Blood and body fluids', 'Sexual contact'],
    correct: 2,
    explanation: ''
  },
  {
    id: 2986,
    question: `A patient presents with severe abdominal pain and has a history of gallstones. What is the most likely complication of gallstones?`,
    options: ['Pancreatitis', 'Cholestasis', 'Perforated ulcer', 'Intestinal obstruction'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2987,
    question: `A 50-year-old man presents with a palpable abdominal mass and a history of painless hematuria. What is the most likely diagnosis?`,
    options: ['Bladder cancer', 'Renal cell carcinoma', 'Polycystic kidney disease', 'Prostate cancer'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2988,
    question: `A 70-year-old female presents with confusion and agitation. What is the most likely cause?`,
    options: ['Stroke', 'Dementia', 'Delirium', 'Depression'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2989,
    question: `A patient presents with a painful swollen leg and has recently been on bed rest. What is the most likely diagnosis?`,
    options: ['Varicose veins', 'Deep vein thrombosis', 'Lymphedema', 'Cellulitis'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2990,
    question: `Which of the following is an indication for hemodialysis?`,
    options: ['Chronic kidney disease stage 2', 'Hyperkalemia', 'Mild metabolic acidosis', 'Proteinuria'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2991,
    question: `A 40-year-old female presents with a butterfly rash and joint pain. What is the most likely diagnosis?`,
    options: ['Dermatomyositis', 'Systemic lupus erythematosus', 'Sjögren\'s syndrome', 'Rheumatoid arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2992,
    question: `A patient presents with a painful vesicular rash along a single dermatome. What is the most likely diagnosis?`,
    options: ['Herpes zoster (shingles)', 'Eczema', 'Psoriasis', 'Contact dermatitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2993,
    question: `A child presents with diarrhea, abdominal pain, and a recent travel history to an area with poor sanitation. What is the most likely cause?`,
    options: ['Giardiasis', 'Rotavirus', 'Shigellosis', 'Cryptosporidiosis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2994,
    question: `What is the main complication of untreated phenylketonuria (PKU)?`,
    options: ['Liver failure', 'Mental retardation', 'Hyperactivity', 'Kidney disease'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2995,
    question: `A 60-year-old male presents with dysphagia and weight loss. What is the most likely underlying condition?`,
    options: ['Esophageal cancer', 'Achalasia', 'Gastroesophageal reflux disease (GERD)', 'Esophagitis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2996,
    question: `Which of the following is the first-line treatment for uncomplicated urinary tract infections?`,
    options: ['Ciprofloxacin', 'Nitrofurantoin', 'Amoxicillin', 'Trimethoprim-sulfamethoxazole'],
    correct: 1,
    explanation: ''
  },
  {
    id: 2997,
    question: `A 65-year-old woman presents with sudden vision loss. What is the most appropriate initial investigation?`,
    options: ['Fundoscopy', 'MRI of the brain', 'CT scan of the head', 'Visual field testing'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2998,
    question: `A 50-year-old woman presents with fatigue, pallor, and a smooth tongue. What is the most likely diagnosis?`,
    options: ['Iron deficiency anemia', 'Vitamin B12 deficiency', 'Folate deficiency', 'Hemolytic anemia'],
    correct: 0,
    explanation: ''
  },
  {
    id: 2999,
    question: `A 12-year-old child presents with a high fever and swollen, painful joints. What condition should be suspected?`,
    options: ['Rheumatic fever', 'Juvenile idiopathic arthritis', 'Systemic lupus erythematosus', 'Viral arthritis'],
    correct: 0,
    explanation: ''
  },
  {
    id: 3000,
    question: `Which drug class is primarily used to treat heart failure by decreasing preload?`,
    options: ['Diuretics', 'Beta-blockers', 'ACE inhibitors', 'Calcium channel blockers'],
    correct: 0,
    explanation: ''
  }
];