// NTS 10 Categories — Pharma Summary
// 950 MCQs
const nts_cat_pharma = [
  {
    id: 1,
    question: `A drug with pKa 4.5 is administered orally and encounters gastric pH of 1.5 and intestinal pH of 6.5; considering passive diffusion as the dominant mechanism, in which compartment will the fraction of non-ionized drug be highest, thereby favoring membrane permeation?`,
    options: [`Stomach lumen`, `Duodenal lumen`, `Ileal lumen`, `Plasma`],
    correct: 0,
    explanation: ``
  },
  {
    id: 2,
    question: `Which pharmacokinetic parameter best reflects the efficiency of irreversible drug removal by an eliminating organ independent of plasma concentration?`,
    options: [`Half-life`, `Clearance`, `Volume of distribution`, `Bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 3,
    question: `A weakly basic drug shows decreased renal excretion when urine pH becomes alkaline because:`,
    options: [`Tubular secretion increases`, `Ion trapping favors plasma`, `Reabsorption of non-ionized fraction increases`, `Glomerular filtration decreases`],
    correct: 2,
    explanation: ``
  },
  {
    id: 4,
    question: `For a drug eliminated exclusively by glomerular filtration, which change will most directly reduce its renal clearance?`,
    options: [`Increased urine flow`, `Increased protein binding`, `Increased lipid solubility`, `Increased tubular secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 5,
    question: `A drug administered orally shows identical AUC after oral and intravenous dosing but a delayed Tmax orally; this indicates:`,
    options: [`Reduced clearance`, `Complete bioavailability with slower absorption`, `Extensive first-pass metabolism`, `Increased volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 6,
    question: `Which situation most strongly exaggerates the first-pass effect for a high-extraction drug?`,
    options: [`Reduced hepatic blood flow`, `Increased plasma protein binding`, `Enzyme inhibition`, `Reduced renal clearance`],
    correct: 0,
    explanation: ``
  },
  {
    id: 7,
    question: `A drug with high lipid solubility, extensive tissue binding, and low plasma protein binding will most likely demonstrate:`,
    options: [`Small volume of distribution`, `Rapid renal elimination`, `Large volume of distribution`, `Zero-order elimination`],
    correct: 2,
    explanation: ``
  },
  {
    id: 8,
    question: `Which factor most limits penetration of polar drugs into the central nervous system under normal physiological conditions?`,
    options: [`Low cerebral blood flow`, `Efflux transporters and tight junctions`, `Hepatic metabolism`, `Renal clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 9,
    question: `Placental transfer of drugs is LEAST influenced by:`,
    options: [`Degree of ionization`, `Lipid solubility`, `Molecular size`, `Maternal renal clearance`],
    correct: 3,
    explanation: ``
  },
  {
    id: 10,
    question: `An intravenous anesthetic produces rapid loss of consciousness followed by quick recovery after a single bolus despite slow metabolic clearance; this clinical pattern is best explained by:`,
    options: [`Enzyme induction`, `Zero-order kinetics`, `Redistribution to less-perfused tissues`, `Renal elimination`],
    correct: 2,
    explanation: ``
  },
  {
    id: 11,
    question: `Which statement regarding Phase I drug metabolism is MOST accurate?`,
    options: [`It always produces inactive metabolites`, `It invariably increases water solubility`, `It commonly introduces or unmasks functional groups`, `It is independent of cytochrome P450 enzymes`],
    correct: 2,
    explanation: ``
  },
  {
    id: 12,
    question: `A drug undergoing Phase II metabolism primarily results in:`,
    options: [`Formation of reactive intermediates`, `Increased lipid solubility`, `Enhanced renal elimination`, `Reduced molecular weight`],
    correct: 2,
    explanation: ``
  },
  {
    id: 13,
    question: `Which condition most likely converts a normally first-order drug into apparent zero-order elimination?`,
    options: [`Reduced protein binding`, `Enzyme saturation at therapeutic concentrations`, `Increased hepatic blood flow`, `Increased bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 14,
    question: `For a drug following zero-order kinetics, doubling the dose will result in:`,
    options: [`No change in half-life`, `Proportional increase in elimination rate`, `Disproportionate increase in steady-state concentration`, `Reduced bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 15,
    question: `Which drug property most strongly favors passive permeation across lipid membranes?`,
    options: [`High polarity`, `Ionized state`, `High lipid solubility`, `Large molecular size`],
    correct: 2,
    explanation: ``
  },
  {
    id: 16,
    question: `A drug with high hepatic extraction ratio will have oral bioavailability primarily determined by:`,
    options: [`Plasma protein binding`, `Hepatic blood flow`, `Renal clearance`, `Volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 17,
    question: `Which statement best explains why only free drug is pharmacologically active and eliminated?`,
    options: [`Bound drug is rapidly metabolized`, `Protein-bound drug cannot cross membranes`, `Bound drug has higher clearance`, `Binding increases tissue distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 18,
    question: `The primary determinant of rate of absorption after intramuscular injection is:`,
    options: [`Hepatic metabolism`, `Renal clearance`, `Blood flow at injection site`, `Plasma protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 19,
    question: `A drug shows a very large apparent volume of distribution; this finding most strongly suggests:`,
    options: [`Confinement to vascular space`, `Extensive tissue sequestration`, `Poor lipid solubility`, `Rapid renal excretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 20,
    question: `Which pharmacokinetic parameter is most useful for comparing the extent of absorption between two formulations of the same drug?`,
    options: [`Cmax`, `Tmax`, `AUC`, `Half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 21,
    question: `A patient with severe renal failure receives a drug eliminated mainly unchanged in urine; the most appropriate adjustment is to modify:`,
    options: [`Loading dose only`, `Maintenance dose or dosing interval`, `Bioavailability`, `Volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 22,
    question: `Which mechanism is primarily responsible for drug–drug competition in renal elimination?`,
    options: [`Glomerular filtration`, `Passive reabsorption`, `Active tubular secretion`, `Urine flow rate`],
    correct: 2,
    explanation: ``
  },
  {
    id: 23,
    question: `Ion trapping within renal tubules is most pronounced when:`,
    options: [`Weak acids encounter acidic urine`, `Weak bases encounter acidic urine`, `Neutral drugs encounter alkaline urine`, `Lipophilic drugs encounter neutral urine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 24,
    question: `A drug that is completely absorbed orally but extensively metabolized before reaching systemic circulation will show:`,
    options: [`High bioavailability`, `Low bioavailability despite complete absorption`, `Increased clearance`, `Reduced first-pass effect`],
    correct: 1,
    explanation: ``
  },
  {
    id: 25,
    question: `Which change will increase the half-life of a drug without altering its clearance?`,
    options: [`Increased dose`, `Increased volume of distribution`, `Reduced bioavailability`, `Increased protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 26,
    question: `Which statement regarding elimination half-life is CORRECT?`,
    options: [`It depends on dose administered`, `It is constant for zero-order drugs`, `It depends on clearance and volume of distribution`, `It reflects bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 27,
    question: `A drug exhibits time-independent clearance and exponential decline in plasma concentration; this indicates:`,
    options: [`Zero-order kinetics`, `First-order kinetics`, `Capacity-limited elimination`, `Mixed-order kinetics`],
    correct: 1,
    explanation: ``
  },
  {
    id: 28,
    question: `Which factor LEAST influences drug distribution?`,
    options: [`Tissue blood flow`, `Capillary permeability`, `Drug stability`, `Plasma protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 29,
    question: `A highly ionized drug administered intravenously will most likely demonstrate:`,
    options: [`Rapid CNS penetration`, `Small volume of distribution`, `Extensive tissue binding`, `Delayed renal elimination`],
    correct: 1,
    explanation: ``
  },
  {
    id: 30,
    question: `Which statement best characterizes bioavailability?`,
    options: [`Rate of absorption only`, `Fraction of administered dose reaching systemic circulation unchanged`, `Extent of tissue distribution`, `Rate of elimination`],
    correct: 1,
    explanation: `n unchanged`
  },
  {
    id: 31,
    question: `A drug with nonlinear pharmacokinetics will show which clinical concern at steady state?`,
    options: [`Predictable dose–concentration relationship`, `Disproportionate rise in plasma levels with small dose increases`, `Constant half-life`, `Reduced toxicity risk`],
    correct: 1,
    explanation: `increases`
  },
  {
    id: 32,
    question: `Which characteristic most favors redistribution as the cause of short drug duration after IV bolus?`,
    options: [`Hydrophilicity`, `High hepatic clearance`, `High lipid solubility`, `Low tissue binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 33,
    question: `Which statement about cytochrome P450 enzymes is TRUE?`,
    options: [`They catalyze only Phase II reactions`, `They are located primarily in plasma`, `They are responsible for many oxidative reactions`, `They are unaffected by drug interactions`],
    correct: 2,
    explanation: ``
  },
  {
    id: 34,
    question: `A drug predominantly eliminated by hepatic metabolism will be MOST affected by:`,
    options: [`Changes in urine pH`, `Renal blood flow`, `Hepatic enzyme activity`, `Plasma volume`],
    correct: 2,
    explanation: ``
  },
  {
    id: 35,
    question: `Which pharmacokinetic parameter determines the loading dose required to rapidly achieve target concentration?`,
    options: [`Clearance`, `Half-life`, `Volume of distribution`, `Bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 36,
    question: `For a drug eliminated by first-order kinetics, the fraction eliminated per unit time is:`,
    options: [`Constant`, `Zero`, `Proportional to concentration`, `Dose-dependent`],
    correct: 2,
    explanation: ``
  },
  {
    id: 37,
    question: `Which scenario most increases systemic exposure after oral dosing?`,
    options: [`Increased first-pass metabolism`, `Reduced absorption`, `Enzyme inhibition`, `Reduced bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 38,
    question: `A drug that is weakly acidic will be excreted faster when urine is:`,
    options: [`Acidic`, `Neutral`, `Alkaline`, `Isotonic`],
    correct: 2,
    explanation: ``
  },
  {
    id: 39,
    question: `Which parameter is most directly altered by changes in renal function?`,
    options: [`Bioavailability`, `Clearance`, `Volume of distribution`, `Absorption rate`],
    correct: 1,
    explanation: ``
  },
  {
    id: 40,
    question: `A drug with high protein binding and low extraction ratio will have clearance that is MOST sensitive to changes in:`,
    options: [`Hepatic blood flow`, `Plasma protein levels`, `Urine pH`, `Volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 41,
    question: `Which statement best distinguishes clearance from elimination rate?`,
    options: [`Clearance depends on dose`, `Clearance is concentration-independent`, `Elimination rate equals clearance × concentration`, `Elimination rate is constant for all drugs`],
    correct: 2,
    explanation: ``
  },
  {
    id: 42,
    question: `A drug shows delayed peak concentration but unchanged AUC after formulation change; this indicates altered:`,
    options: [`Extent of absorption`, `Clearance`, `Rate of absorption`, `Volume of distribution`],
    correct: 2,
    explanation: ``
  },
  {
    id: 43,
    question: `Which barrier is LEAST restrictive to drug distribution under normal conditions?`,
    options: [`Blood-brain barrier`, `Placental barrier`, `Blood-testis barrier`, `Hepatic sinusoidal endothelium`],
    correct: 3,
    explanation: ``
  },
  {
    id: 44,
    question: `A drug that undergoes extensive enterohepatic recycling will most likely show:`,
    options: [`Reduced half-life`, `Multiple plasma concentration peaks`, `Zero bioavailability`, `Increased renal clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 45,
    question: `Which factor most explains variability in oral drug absorption among patients?`,
    options: [`Hepatic clearance`, `Gastric emptying time`, `Plasma protein binding`, `Volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 46,
    question: `A drug eliminated by capacity-limited metabolism will display which concentration–time profile at high doses?`,
    options: [`Linear decline`, `Exponential decline`, `Linear decline with constant amount eliminated`, `Immediate elimination`],
    correct: 2,
    explanation: ``
  },
  {
    id: 47,
    question: `Which pharmacokinetic change will NOT affect steady-state concentration during continuous infusion?`,
    options: [`Clearance`, `Infusion rate`, `Volume of distribution`, `Enzyme inhibition`],
    correct: 2,
    explanation: ``
  },
  {
    id: 48,
    question: `A highly lipophilic drug with extensive fat storage is stopped abruptly after chronic use; prolonged effects are BEST explained by:`,
    options: [`Zero-order kinetics`, `Slow absorption`, `Slow release from tissue stores`, `Increased clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 49,
    question: `Which parameter most accurately predicts time to reach steady state for a drug?`,
    options: [`Clearance`, `Bioavailability`, `Half-life`, `Volume of distribution`],
    correct: 2,
    explanation: ``
  },
  {
    id: 50,
    question: `A drug shows unchanged clearance but prolonged half-life in obesity; the most plausible explanation is:`,
    options: [`Reduced renal function`, `Increased volume of distribution`, `Reduced bioavailability`, `Enzyme saturation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 51,
    question: `Pharmacodynamics is best defined as the quantitative and qualitative study of the biochemical and physiological effects of drugs, including the mechanisms by which these effects are produced; in contrast to pharmacokinetics, it primarily addresses:`,
    options: [`What the body does to the drug`, `Drug absorption and elimination`, `What the drug does to the body`, `Drug concentration–time relationships`],
    correct: 2,
    explanation: ``
  },
  {
    id: 52,
    question: `A graded dose–response curve describes the relationship between drug dose and response in a single biological system; the maximal efficacy of a drug is best represented by:`,
    options: [`EC50`, `Slope of the curve`, `Emax`, `Therapeutic index`],
    correct: 2,
    explanation: ``
  },
  {
    id: 53,
    question: `EC50 is defined as the drug concentration that produces:`,
    options: [`50% of maximal toxic effect`, `50% receptor occupancy`, `50% of maximal response`, `Median effective dose in a population`],
    correct: 2,
    explanation: ``
  },
  {
    id: 54,
    question: `A leftward shift of a graded dose–response curve without a change in Emax indicates:`,
    options: [`Decreased efficacy`, `Increased potency`, `Noncompetitive antagonism`, `Partial agonism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 55,
    question: `Two drugs produce the same maximal effect, but one requires a lower concentration to achieve it; the drug requiring the lower concentration is:`,
    options: [`More efficacious`, `Less potent`, `More potent`, `A partial agonist`],
    correct: 2,
    explanation: ``
  },
  {
    id: 56,
    question: `A full agonist is best defined as a drug that:`,
    options: [`Binds to receptors without activating them`, `Produces maximal response regardless of receptor number`, `Produces submaximal response even at full receptor occupancy`, `Has both agonist and antagonist effects`],
    correct: 1,
    explanation: ``
  },
  {
    id: 57,
    question: `A partial agonist differs from a full agonist because it:`,
    options: [`Has lower affinity for the receptor`, `Produces lower maximal efficacy even with full receptor occupancy`, `Cannot bind to the same receptor`, `Acts only in the absence of endogenous ligand`],
    correct: 1,
    explanation: `occupancy`
  },
  {
    id: 58,
    question: `When a partial agonist is added to a system already exposed to a full agonist, the overall response usually decreases because the partial agonist:`,
    options: [`Increases receptor number`, `Acts as a competitive antagonist`, `Enhances efficacy of full agonist`, `Irreversibly blocks receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 59,
    question: `Competitive antagonism is characterized by which change in a graded dose–response curve of an agonist?`,
    options: [`Reduced Emax with unchanged EC50`, `Parallel rightward shift with unchanged Emax`, `Downward shift with reduced Emax`, `Non-parallel shift`],
    correct: 1,
    explanation: ``
  },
  {
    id: 60,
    question: `A noncompetitive antagonist reduces the response of an agonist by:`,
    options: [`Competing at the same receptor site`, `Decreasing agonist affinity only`, `Reducing maximal efficacy regardless of agonist concentration`, `Increasing EC50 without affecting Emax`],
    correct: 2,
    explanation: `ion`
  },
  {
    id: 61,
    question: `Which scenario best describes irreversible competitive antagonism?`,
    options: [`Parallel rightward shift with preserved Emax`, `Decreased Emax that cannot be overcome by increasing agonist dose`, `Increased potency of agonist`, `Increased receptor sensitivity`],
    correct: 1,
    explanation: `st dose`
  },
  {
    id: 62,
    question: `Potentiation differs from synergism because potentiation involves:`,
    options: [`Two drugs with similar efficacy`, `Two drugs producing additive effects`, `One drug with no effect enhancing the effect of another`, `Two drugs acting at same receptor`],
    correct: 2,
    explanation: ``
  },
  {
    id: 63,
    question: `A graded dose–response curve is most useful for determining:`,
    options: [`Median lethal dose`, `Therapeutic index`, `Drug potency and efficacy`, `Population variability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 64,
    question: `Quantal dose–response curves differ from graded curves in that they describe:`,
    options: [`Continuous response in tissues`, `Response of a single cell`, `All-or-none responses in a population`, `Receptor binding affinity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 65,
    question: `ED50 in a quantal dose–response curve represents:`,
    options: [`Dose producing 50% maximal effect`, `Dose effective in 50% of the population`, `Dose toxic to 50% of subjects`, `Dose lethal to 50% of subjects`],
    correct: 1,
    explanation: ``
  },
  {
    id: 66,
    question: `TD50 refers to the dose that produces toxicity in:`,
    options: [`50% of receptors`, `50% of tissues`, `50% of the population`, `50% of maximal response`],
    correct: 2,
    explanation: ``
  },
  {
    id: 67,
    question: `LD50 is best defined as:`,
    options: [`Dose lethal to 50% of cells`, `Dose lethal to 50% of receptors`, `Dose lethal to 50% of population`, `Dose causing 50% receptor blockade`],
    correct: 2,
    explanation: ``
  },
  {
    id: 68,
    question: `Therapeutic index is calculated as:`,
    options: [`ED50 / TD50`, `TD50 / ED50`, `Emax / EC50`, `LD50 / EC50`],
    correct: 1,
    explanation: ``
  },
  {
    id: 69,
    question: `A narrow therapeutic index implies:`,
    options: [`Wide margin of safety`, `High potency`, `Small difference between effective and toxic doses`, `Low efficacy`],
    correct: 2,
    explanation: ``
  },
  {
    id: 70,
    question: `Which drug characteristic most increases clinical risk when therapeutic index is narrow?`,
    options: [`Linear pharmacokinetics`, `Short half-life`, `Nonlinear dose–response relationship`, `High bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 71,
    question: `In a quantal dose–response curve, a steep slope indicates:`,
    options: [`Low efficacy`, `High variability among individuals`, `Small change in dose produces large change in population response`, `Reduced toxicity`],
    correct: 2,
    explanation: `response`
  },
  {
    id: 72,
    question: `A drug that shows high efficacy but low potency will:`,
    options: [`Produce maximal effect at low dose`, `Require high dose to achieve maximal effect`, `Never achieve maximal effect`, `Act as partial agonist`],
    correct: 1,
    explanation: ``
  },
  {
    id: 73,
    question: `Which statement best explains receptor reserve (spare receptors)?`,
    options: [`More receptors than needed to produce maximal response`, `Increased drug potency due to metabolism`, `Reduced efficacy of agonist`, `Competitive antagonism`],
    correct: 0,
    explanation: ``
  },
  {
    id: 74,
    question: `Presence of spare receptors allows a full agonist to:`,
    options: [`Increase toxicity`, `Achieve maximal effect without occupying all receptors`, `Act as antagonist`, `Reduce potency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 75,
    question: `A noncompetitive antagonist in the presence of spare receptors may initially:`,
    options: [`Shift curve rightward without reducing Emax`, `Increase potency`, `Reduce EC50 only`, `Increase therapeutic index`],
    correct: 0,
    explanation: ``
  },
  {
    id: 76,
    question: `Which pharmacodynamic parameter best reflects drug–receptor affinity?`,
    options: [`Emax`, `EC50`, `Therapeutic index`, `LD50`],
    correct: 1,
    explanation: ``
  },
  {
    id: 77,
    question: `A drug produces 40% maximal response even at very high concentrations; this drug is best classified as:`,
    options: [`Full agonist`, `Competitive antagonist`, `Partial agonist`, `Inverse agonist`],
    correct: 2,
    explanation: ``
  },
  {
    id: 78,
    question: `Inverse agonists differ from antagonists because they:`,
    options: [`Block agonist binding only`, `Produce no intrinsic activity`, `Produce effects opposite to agonists`, `Increase receptor number`],
    correct: 2,
    explanation: ``
  },
  {
    id: 79,
    question: `Which situation best demonstrates pharmacodynamic tolerance?`,
    options: [`Increased drug clearance`, `Reduced receptor responsiveness after repeated exposure`, `Reduced absorption`, `Increased protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 80,
    question: `A rightward shift of the quantal dose–response curve without change in slope indicates:`,
    options: [`Reduced efficacy`, `Increased population variability`, `Decreased potency`, `Increased toxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 81,
    question: `Which pharmacodynamic concept explains why two drugs with identical EC50 values may have different clinical effects?`,
    options: [`Potency`, `Efficacy`, `Bioavailability`, `Clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 82,
    question: `A drug that reduces the effect of another drug without competing for the same receptor is best described as:`,
    options: [`Competitive antagonist`, `Noncompetitive antagonist`, `Partial agonist`, `Inverse agonist`],
    correct: 1,
    explanation: ``
  },
  {
    id: 83,
    question: `In toxicology, the margin of safety is best evaluated using:`,
    options: [`Graded dose–response curves`, `Quantal dose–response curves`, `Volume of distribution`, `Clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 84,
    question: `Which statement about therapeutic index is TRUE?`,
    options: [`It predicts individual patient safety precisely`, `It is identical for all drugs`, `It is a population-based estimate of drug safety`, `It reflects drug potency`],
    correct: 2,
    explanation: ``
  },
  {
    id: 85,
    question: `A drug shows parallel rightward shift of dose–response curve in presence of antagonist; increasing agonist restores maximal response, indicating:`,
    options: [`Noncompetitive antagonism`, `Irreversible antagonism`, `Competitive antagonism`, `Partial agonism`],
    correct: 2,
    explanation: ``
  },
  {
    id: 86,
    question: `Which condition increases risk of toxicity for drugs with narrow therapeutic index?`,
    options: [`Linear kinetics`, `Fixed dosing`, `Impaired drug elimination`, `High receptor reserve`],
    correct: 2,
    explanation: ``
  },
  {
    id: 87,
    question: `A pharmacodynamic curve that plateaus despite increasing dose suggests:`,
    options: [`Increased potency`, `Receptor saturation`, `Increased clearance`, `Improved bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 88,
    question: `Which parameter best correlates with clinical effectiveness at usual doses?`,
    options: [`Potency alone`, `Efficacy`, `Therapeutic index`, `LD50`],
    correct: 1,
    explanation: ``
  },
  {
    id: 89,
    question: `A drug produces response in only a subset of population regardless of dose; this phenomenon is best evaluated by:`,
    options: [`Graded curve`, `Quantal curve`, `Receptor binding studies`, `Clearance measurements`],
    correct: 1,
    explanation: ``
  },
  {
    id: 90,
    question: `Which pharmacodynamic property explains ceiling effect of partial agonists?`,
    options: [`Low affinity`, `Low intrinsic activity`, `Rapid metabolism`, `Poor absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 91,
    question: `A drug acting at an allosteric site reduces maximal effect of agonist without shifting EC50 significantly; this is characteristic of:`,
    options: [`Competitive antagonism`, `Noncompetitive antagonism`, `Partial agonism`, `Potentiation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 92,
    question: `Which pharmacodynamic parameter is most useful for drug comparison when maximal response differs?`,
    options: [`EC50`, `Potency`, `Emax`, `Therapeutic index`],
    correct: 2,
    explanation: ``
  },
  {
    id: 93,
    question: `The relationship between drug concentration and effect is most directly described by:`,
    options: [`Henderson–Hasselbalch equation`, `Dose–response relationship`, `Clearance equation`, `Bioavailability equation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 94,
    question: `A drug that shifts quantal dose–response curve to the right without changing slope most likely:`,
    options: [`Decreases efficacy`, `Decreases potency`, `Increases toxicity`, `Alters variability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 95,
    question: `Which statement best explains why ED50 and EC50 are not interchangeable?`,
    options: [`One refers to toxicity`, `One is population-based and the other is graded response-based`, `One reflects clearance`, `One reflects efficacy`],
    correct: 1,
    explanation: `response-based`
  },
  {
    id: 96,
    question: `A pharmacodynamic interaction where combined effect exceeds sum of individual effects is called:`,
    options: [`Additive effect`, `Potentiation`, `Synergism`, `Antagonism`],
    correct: 2,
    explanation: ``
  },
  {
    id: 97,
    question: `Which factor does NOT influence pharmacodynamic response?`,
    options: [`Receptor density`, `Signal transduction efficiency`, `Drug metabolism`, `Presence of antagonists`],
    correct: 2,
    explanation: ``
  },
  {
    id: 98,
    question: `A decrease in receptor number without change in affinity will primarily affect:`,
    options: [`Potency only`, `Efficacy only`, `Therapeutic index only`, `Bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 99,
    question: `A drug producing response below baseline activity is best classified as:`,
    options: [`Partial agonist`, `Competitive antagonist`, `Inverse agonist`, `Noncompetitive antagonist`],
    correct: 2,
    explanation: ``
  },
  {
    id: 100,
    question: `Which pharmacodynamic principle best explains interindividual variability in drug response at the same dose?`,
    options: [`Bioavailability`, `Clearance`, `Quantal dose–response distribution`, `Volume of distribution`],
    correct: 2,
    explanation: `ANS`
  },
  {
    id: 101,
    question: `The autonomic nervous system is anatomically distinct from the somatic nervous system in that it characteristically employs a two-neuron efferent pathway consisting of a preganglionic neuron originating in the CNS and a postganglionic neuron terminating at the effector organ; the synapse between these two neurons occurs in structures known as:`,
    options: [`Nuclei`, `Plexuses`, `Ganglia`, `End plates`],
    correct: 2,
    explanation: ``
  },
  {
    id: 102,
    question: `Preganglionic neurons of the sympathetic nervous system primarily originate from which region of the spinal cord?`,
    options: [`Craniosacral`, `Thoracolumbar (T1–L2)`, `Cervicothoracic`, `Lumbosacral`],
    correct: 1,
    explanation: ``
  },
  {
    id: 103,
    question: `Parasympathetic preganglionic neurons arise from the brainstem and sacral spinal cord, a distribution collectively referred to as:`,
    options: [`Thoracolumbar outflow`, `Craniosacral outflow`, `Somatovisceral outflow`, `Central autonomic network`],
    correct: 1,
    explanation: ``
  },
  {
    id: 104,
    question: `Which anatomical feature most accurately distinguishes parasympathetic from sympathetic ganglia?`,
    options: [`Neurotransmitter used`, `Proximity of ganglia to target organs`, `Myelination of postganglionic fibers`, `Presence of nicotinic receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 105,
    question: `Sympathetic chain (paravertebral) ganglia are anatomically located:`,
    options: [`Within target organs`, `Anterior to the spinal cord`, `Lateral to the vertebral column`, `Within the brainstem`],
    correct: 2,
    explanation: ``
  },
  {
    id: 106,
    question: `Prevertebral (collateral) ganglia such as the celiac and superior mesenteric ganglia are primarily associated with innervation of:`,
    options: [`Skeletal muscle`, `Skin and sweat glands`, `Abdominal and pelvic viscera`, `Cardiac muscle only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 107,
    question: `Which neurotransmitter is released by all preganglionic autonomic neurons, regardless of division?`,
    options: [`Norepinephrine`, `Dopamine`, `Acetylcholine`, `Epinephrine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 108,
    question: `The receptors activated by acetylcholine at autonomic ganglia are classified as:`,
    options: [`Muscarinic`, `Adrenergic`, `Nicotinic (Nn type)`, `Metabotropic`],
    correct: 2,
    explanation: ``
  },
  {
    id: 109,
    question: `Most postganglionic sympathetic neurons release norepinephrine; a notable physiological exception to this rule is sympathetic innervation of:`,
    options: [`Vascular smooth muscle`, `Salivary glands`, `Sweat glands`, `Iris dilator muscle`],
    correct: 2,
    explanation: ``
  },
  {
    id: 110,
    question: `Postganglionic parasympathetic neurotransmission at effector organs is mediated predominantly by acetylcholine acting on:`,
    options: [`Nicotinic receptors`, `α-adrenergic receptors`, `β-adrenergic receptors`, `Muscarinic receptors`],
    correct: 3,
    explanation: ``
  },
  {
    id: 111,
    question: `Muscarinic receptors belong to which receptor superfamily?`,
    options: [`Ligand-gated ion channels`, `Receptor tyrosine kinases`, `G protein–coupled receptors`, `Nuclear hormone receptors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 112,
    question: `The M1 muscarinic receptor subtype is functionally coupled to which intracellular signaling pathway?`,
    options: [`Gi → ↓cAMP`, `Gs → ↑cAMP`, `Gq → ↑IP3/DAG`, `Ion channel opening`],
    correct: 2,
    explanation: ``
  },
  {
    id: 113,
    question: `Which muscarinic receptor subtype is primarily responsible for decreased heart rate through activation of potassium channels in cardiac tissue?`,
    options: [`M1`, `M2`, `M3`, `M5`],
    correct: 1,
    explanation: ``
  },
  {
    id: 114,
    question: `M3 muscarinic receptor activation in smooth muscle typically results in:`,
    options: [`Relaxation via cAMP`, `Contraction via IP3-mediated calcium release`, `Hyperpolarization`, `Reduced glandular secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 115,
    question: `Despite causing vasodilation, acetylcholine is not a direct vasodilator in most blood vessels; this effect occurs because M3 receptor activation on endothelial cells stimulates release of:`,
    options: [`Prostaglandins`, `Endothelin`, `Nitric oxide`, `Norepinephrine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 116,
    question: `Which organ response is most characteristically mediated by M3 receptor activation?`,
    options: [`Decreased heart rate`, `Increased gastric acid secretion`, `Bronchoconstriction`, `Reduced salivation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 117,
    question: `A drug that selectively blocks muscarinic receptors without affecting nicotinic receptors would most directly impair:`,
    options: [`Neuromuscular transmission`, `Autonomic ganglionic transmission`, `Parasympathetic effector responses`, `Preganglionic sympathetic signaling`],
    correct: 2,
    explanation: ``
  },
  {
    id: 118,
    question: `Which muscarinic receptor subtype is primarily involved in gastric acid secretion through stimulation of enterochromaffin-like cells?`,
    options: [`M1`, `M2`, `M3`, `M4`],
    correct: 0,
    explanation: ``
  },
  {
    id: 119,
    question: `A muscarinic agonist administered systemically would be expected to produce all of the following effects EXCEPT:`,
    options: [`Increased salivation`, `Bradycardia`, `Bronchodilation`, `Increased gastrointestinal motility`],
    correct: 2,
    explanation: ``
  },
  {
    id: 120,
    question: `The term “cholinergic” in pharmacology refers to neurons, synapses, or drugs that primarily involve:`,
    options: [`Norepinephrine`, `Dopamine`, `Acetylcholine`, `Serotonin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 121,
    question: `Direct-acting cholinergic agonists mimic acetylcholine by binding to cholinergic receptors; an indirect-acting cholinomimetic increases acetylcholine levels by:`,
    options: [`Stimulating presynaptic release`, `Blocking muscarinic receptors`, `Inhibiting acetylcholinesterase`, `Enhancing receptor synthesis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 122,
    question: `Which pharmacological effect would most likely result from administration of a nonselective muscarinic antagonist?`,
    options: [`Miosis`, `Increased sweating`, `Tachycardia`, `Bronchoconstriction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 123,
    question: `Atropine produces tachycardia primarily by blocking muscarinic receptors located at:`,
    options: [`Sinoatrial node`, `Atrioventricular node only`, `Ventricular myocardium`, `Coronary vessels`],
    correct: 0,
    explanation: ``
  },
  {
    id: 124,
    question: `Which muscarinic receptor subtype is most closely associated with glandular secretion in salivary and sweat glands?`,
    options: [`M1`, `M2`, `M3`, `M5`],
    correct: 2,
    explanation: ``
  },
  {
    id: 125,
    question: `A patient presents with dry mouth, blurred vision, urinary retention, and constipation; these findings are most consistent with blockade of:`,
    options: [`Nicotinic receptors at ganglia`, `Muscarinic receptors at effector organs`, `β-adrenergic receptors`, `α1-adrenergic receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 126,
    question: `Selective stimulation of M2 receptors would most directly result in:`,
    options: [`Increased gastric secretion`, `Decreased heart rate`, `Bronchial smooth muscle contraction`, `Pupillary constriction`],
    correct: 1,
    explanation: ``
  },
  {
    id: 127,
    question: `The pharmacological classification of a drug that blocks acetylcholine-induced responses at smooth muscle and glands but not at neuromuscular junctions is:`,
    options: [`Nicotinic antagonist`, `Muscarinic antagonist`, `Ganglionic blocker`, `Cholinesterase inhibitor`],
    correct: 1,
    explanation: ``
  },
  {
    id: 128,
    question: `Which effect is mediated by parasympathetic activation of the eye via muscarinic receptors?`,
    options: [`Mydriasis`, `Cycloplegia`, `Miosis`, `Increased intraocular pressure`],
    correct: 2,
    explanation: ``
  },
  {
    id: 129,
    question: `Muscarinic receptor antagonists reduce gastrointestinal motility primarily by inhibiting:`,
    options: [`Nicotinic transmission in enteric ganglia`, `M3 receptor–mediated smooth muscle contraction`, `Norepinephrine release`, `Serotonin receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 130,
    question: `Which neurotransmitter–receptor pairing is INCORRECT in the autonomic nervous system?`,
    options: [`Acetylcholine – Nicotinic receptors at ganglia`, `Norepinephrine – α and β receptors at effectors`, `Acetylcholine – Muscarinic receptors at parasympathetic effectors`, `Norepinephrine – Nicotinic receptors at ganglia`],
    correct: 3,
    explanation: ``
  },
  {
    id: 131,
    question: `A drug selectively activating M3 receptors would most likely cause which combination of effects?`,
    options: [`Tachycardia and mydriasis`, `Bradycardia and bronchodilation`, `Bronchoconstriction and increased glandular secretion`, `Reduced gastrointestinal tone`],
    correct: 2,
    explanation: ``
  },
  {
    id: 132,
    question: `Which feature best explains why muscarinic agonists can cause hypotension despite sympathetic dominance in vascular tone?`,
    options: [`Direct relaxation of vascular smooth muscle`, `Inhibition of norepinephrine release`, `Endothelium-dependent nitric oxide release`, `Reduced cardiac output only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 133,
    question: `The primary physiological role of autonomic ganglia is to:`,
    options: [`Amplify efferent signals`, `Integrate sensory input`, `Serve as sites of neurotransmitter synthesis`, `Terminate motor commands`],
    correct: 0,
    explanation: ``
  },
  {
    id: 134,
    question: `Which muscarinic receptor subtype is most widely distributed in the CNS and autonomic ganglia?`,
    options: [`M1`, `M2`, `M3`, `M5`],
    correct: 0,
    explanation: ``
  },
  {
    id: 135,
    question: `Blockade of M3 receptors in the bladder would most likely result in:`,
    options: [`Increased detrusor contraction`, `Urinary frequency`, `Urinary retention`, `Enhanced micturition reflex`],
    correct: 2,
    explanation: ``
  },
  {
    id: 136,
    question: `A nonselective muscarinic agonist administered intravenously would initially produce which cardiovascular response?`,
    options: [`Increased blood pressure`, `Tachycardia`, `Bradycardia`, `No change in heart rate`],
    correct: 2,
    explanation: ``
  },
  {
    id: 137,
    question: `Which receptor subtype mediates acetylcholine-induced slowing of atrioventricular conduction?`,
    options: [`M1`, `M2`, `M3`, `Nicotinic`],
    correct: 1,
    explanation: ``
  },
  {
    id: 138,
    question: `Cholinergic drugs that enhance acetylcholine action at muscarinic receptors but not nicotinic receptors would NOT directly affect:`,
    options: [`Heart rate`, `Gastrointestinal motility`, `Skeletal muscle contraction`, `Salivary secretion`],
    correct: 2,
    explanation: ``
  },
  {
    id: 139,
    question: `The autonomic nervous system differs from the enteric nervous system in that the enteric system:`,
    options: [`Lacks neurotransmitters`, `Operates independently of CNS input`, `Uses only norepinephrine`, `Has no ganglia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 140,
    question: `Which statement regarding muscarinic receptor antagonists is MOST accurate?`,
    options: [`They increase parasympathetic tone`, `They uniformly decrease heart rate`, `They competitively inhibit acetylcholine at muscarinic sites`, `They block nicotinic receptors at ganglia`],
    correct: 2,
    explanation: `es`
  },
  {
    id: 141,
    question: `Selective blockade of M1 receptors would most directly reduce:`,
    options: [`Heart rate`, `Bronchial tone`, `Gastric acid secretion`, `Bladder contraction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 142,
    question: `Which physiological effect is LEAST likely to be altered by muscarinic receptor antagonism?`,
    options: [`Salivation`, `Sweating`, `Skeletal muscle strength`, `Pupillary diameter`],
    correct: 2,
    explanation: ``
  },
  {
    id: 143,
    question: `The functional outcome of acetylcholine release depends on receptor subtype and tissue location; this principle best illustrates:`,
    options: [`Pharmacokinetics`, `Receptor selectivity`, `Neurotransmitter degradation`, `Drug metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 144,
    question: `Which muscarinic receptor subtype is coupled to inhibition of adenylate cyclase?`,
    options: [`M1`, `M2`, `M3`, `M5`],
    correct: 1,
    explanation: ``
  },
  {
    id: 145,
    question: `A drug that blocks muscarinic receptors in the eye would most likely cause:`,
    options: [`Miosis and accommodation`, `Mydriasis and cycloplegia`, `Reduced intraocular pressure`, `Increased tear production`],
    correct: 1,
    explanation: ``
  },
  {
    id: 146,
    question: `Which neurotransmitter–receptor interaction predominates at the effector organs of the parasympathetic nervous system?`,
    options: [`Norepinephrine–α receptors`, `Norepinephrine–β receptors`, `Acetylcholine–muscarinic receptors`, `Acetylcholine–nicotinic receptors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 147,
    question: `Activation of muscarinic receptors in bronchial smooth muscle leads to increased intracellular calcium primarily via:`,
    options: [`Gs-mediated cAMP increase`, `Gi-mediated cAMP decrease`, `Gq-mediated IP3 formation`, `Direct ion channel opening`],
    correct: 2,
    explanation: ``
  },
  {
    id: 148,
    question: `Which muscarinic receptor subtype is most relevant for therapeutic targeting to reduce overactive bladder symptoms?`,
    options: [`M1`, `M2`, `M3`, `M5`],
    correct: 2,
    explanation: ``
  },
  {
    id: 149,
    question: `A drug that selectively antagonizes muscarinic receptors would have minimal effect on blood pressure in most individuals because:`,
    options: [`Parasympathetic tone to blood vessels is minimal`, `It enhances sympathetic discharge`, `It blocks nicotinic receptors`, `It increases cardiac output`],
    correct: 0,
    explanation: ``
  },
  {
    id: 150,
    question: `Which statement best integrates anatomy and pharmacology of the ANS?`,
    options: [`All autonomic neurotransmission is adrenergic`, `Ganglia are sites of muscarinic receptor activation`, `Effector organ responses depend on receptor subtype rather than neurotransmitter alone`, `Sympathetic and parasympathetic systems use identical receptors at effector organs`],
    correct: 2,
    explanation: `than neurotransmitter alone CNS`
  },
  {
    id: 151,
    question: `Phenytoin exerts its primary anticonvulsant effect by stabilizing neuronal membranes through selective inhibition of:`,
    options: [`T-type calcium channels`, `Sodium channel recovery from inactivation`, `NMDA receptor–mediated currents`, `GABA transaminase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 152,
    question: `The clinical utility of phenytoin in focal and generalized tonic–clonic seizures but not absence seizures is best explained by its:`,
    options: [`Enhancement of GABAergic inhibition`, `Lack of effect on thalamic calcium currents`, `Inhibition of glutamate release`, `Direct antagonism of AMPA receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 153,
    question: `Which pharmacokinetic characteristic of phenytoin most significantly contributes to its narrow therapeutic index and dose-dependent toxicity?`,
    options: [`High plasma protein binding`, `Zero-order metabolism at therapeutic concentrations`, `Extensive enterohepatic recycling`, `Rapid renal elimination`],
    correct: 1,
    explanation: ``
  },
  {
    id: 154,
    question: `A patient receiving phenytoin develops nystagmus, ataxia, and diplopia; these findings most closely correlate with:`,
    options: [`Allergic hypersensitivity`, `Chronic toxicity affecting cerebellar function`, `Acute hepatotoxicity`, `Idiosyncratic bone marrow suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 155,
    question: `Long-term phenytoin therapy is associated with gingival hyperplasia primarily due to:`,
    options: [`Increased fibroblast proliferation mediated by altered calcium flux`, `Direct inhibition of collagenase`, `Folate deficiency alone`, `Immune-mediated inflammation`],
    correct: 0,
    explanation: `calcium flux`
  },
  {
    id: 156,
    question: `Which adverse effect of phenytoin is most strongly linked to induction of hepatic cytochrome P450 enzymes?`,
    options: [`Hirsutism`, `Osteomalacia due to vitamin D deficiency`, `Stevens–Johnson syndrome`, `Megaloblastic anemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 157,
    question: `Phenytoin-associated teratogenicity classically presents as fetal hydantoin syndrome, which most commonly includes:`,
    options: [`Neural tube defects and cardiac malformations`, `Craniofacial abnormalities and hypoplastic nails`, `Renal agenesis`, `Limb reduction defects only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 158,
    question: `Carbamazepine shares a mechanism of action with phenytoin but differs clinically because it:`,
    options: [`Is effective in absence seizures`, `Has linear pharmacokinetics at all doses`, `Undergoes autoinduction of hepatic metabolism`, `Directly enhances GABA release`],
    correct: 2,
    explanation: ``
  },
  {
    id: 159,
    question: `The process of autoinduction observed with carbamazepine therapy results in:`,
    options: [`Progressive drug accumulation`, `Decreased clearance over time`, `Reduced plasma levels after repeated dosing`, `Increased protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 160,
    question: `Carbamazepine is considered a first-line agent for which seizure type?`,
    options: [`Absence seizures`, `Myoclonic seizures`, `Focal (partial) seizures`, `Atonic seizures`],
    correct: 2,
    explanation: ``
  },
  {
    id: 161,
    question: `Which non-epileptic condition is carbamazepine classically used to treat due to its sodium channel–blocking properties?`,
    options: [`Bipolar disorder`, `Migraine prophylaxis`, `Trigeminal neuralgia`, `Parkinson disease`],
    correct: 2,
    explanation: ``
  },
  {
    id: 162,
    question: `A potentially life-threatening adverse effect of carbamazepine that requires regular hematologic monitoring is:`,
    options: [`Thrombocytosis`, `Agranulocytosis`, `Polycythemia`, `Eosinophilia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 163,
    question: `Which dermatologic adverse reaction is particularly associated with carbamazepine and linked to specific HLA alleles?`,
    options: [`Erythema nodosum`, `Fixed drug eruption`, `Stevens–Johnson syndrome`, `Psoriasis exacerbation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 164,
    question: `Carbamazepine-induced hyponatremia is best explained by:`,
    options: [`Renal sodium wasting`, `Increased aldosterone secretion`, `Syndrome of inappropriate antidiuretic hormone secretion`, `Direct tubular toxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 165,
    question: `The teratogenic risk associated with carbamazepine therapy during pregnancy most commonly includes:`,
    options: [`Cleft palate only`, `Neural tube defects such as spina bifida`, `Limb reduction defects`, `Renal malformations`],
    correct: 1,
    explanation: ``
  },
  {
    id: 166,
    question: `Valproic acid differs mechanistically from phenytoin and carbamazepine by additionally:`,
    options: [`Blocking T-type calcium channels`, `Inhibiting monoamine oxidase`, `Antagonizing NMDA receptors`, `Inducing hepatic enzymes`],
    correct: 0,
    explanation: ``
  },
  {
    id: 167,
    question: `The broad-spectrum efficacy of valproic acid across multiple seizure types is best attributed to its combined effects on:`,
    options: [`Sodium channels and NMDA receptors`, `GABA metabolism and T-type calcium channels`, `Chloride channel conductance only`, `Dopamine release and reuptake`],
    correct: 1,
    explanation: ``
  },
  {
    id: 168,
    question: `Valproic acid increases synaptic GABA levels primarily by:`,
    options: [`Enhancing GABA release`, `Inhibiting GABA transaminase`, `Blocking GABA reuptake transporters`, `Acting as a GABA receptor agonist`],
    correct: 1,
    explanation: ``
  },
  {
    id: 169,
    question: `Which seizure type is particularly responsive to valproic acid but not to phenytoin or carbamazepine?`,
    options: [`Focal seizures`, `Generalized tonic–clonic seizures`, `Absence seizures`, `Simple partial seizures`],
    correct: 2,
    explanation: ``
  },
  {
    id: 170,
    question: `A major dose-related adverse effect of valproic acid that necessitates monitoring of liver function tests is:`,
    options: [`Cholestasis`, `Acute hepatic failure`, `Cirrhosis`, `Hepatic steatosis only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 171,
    question: `Valproic acid–induced hepatotoxicity is most likely to occur in:`,
    options: [`Elderly patients on monotherapy`, `Adults with normal liver function`, `Young children receiving multiple anticonvulsants`, `Patients with renal impairment`],
    correct: 2,
    explanation: ``
  },
  {
    id: 172,
    question: `Which hematologic adverse effect is commonly associated with valproic acid therapy?`,
    options: [`Agranulocytosis`, `Thrombocytopenia`, `Polycythemia`, `Hemolytic anemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 173,
    question: `Valproic acid is contraindicated in patients with pre-existing mitochondrial disorders primarily due to risk of:`,
    options: [`Cardiac toxicity`, `Severe hepatotoxicity`, `Bone marrow suppression`, `Nephrotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 174,
    question: `The teratogenicity of valproic acid is most strongly associated with which congenital abnormality?`,
    options: [`Cleft lip and palate`, `Ventricular septal defects`, `Neural tube defects`, `Craniosynostosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 175,
    question: `Compared with phenytoin and carbamazepine, valproic acid uniquely tends to:`,
    options: [`Induce hepatic enzymes`, `Decrease plasma levels of coadministered drugs`, `Inhibit hepatic drug metabolism`, `Exhibit zero-order kinetics`],
    correct: 2,
    explanation: ``
  },
  {
    id: 176,
    question: `A patient stabilized on phenytoin develops breakthrough seizures after initiation of carbamazepine; the most plausible explanation is:`,
    options: [`Competitive displacement from protein binding`, `Enzyme inhibition by carbamazepine`, `Enzyme induction increasing phenytoin clearance`, `Reduced gastrointestinal absorption`],
    correct: 2,
    explanation: ``
  },
  {
    id: 177,
    question: `Which adverse effect is common to phenytoin, carbamazepine, and valproic acid, though via different mechanisms?`,
    options: [`Gingival hyperplasia`, `Hepatotoxicity`, `Stevens–Johnson syndrome`, `Osteomalacia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 178,
    question: `Phenytoin-associated megaloblastic anemia most directly results from interference with:`,
    options: [`Vitamin B12 absorption`, `Iron metabolism`, `Folate absorption and metabolism`, `Erythropoietin synthesis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 179,
    question: `Which anticonvulsant is most appropriate as first-line monotherapy for trigeminal neuralgia?`,
    options: [`Valproic acid`, `Phenytoin`, `Carbamazepine`, `Ethosuximide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 180,
    question: `A patient on valproic acid presents with lethargy, vomiting, and elevated serum ammonia levels despite normal liver enzymes; this complication is best described as:`,
    options: [`Acute hepatic failure`, `Hyperammonemic encephalopathy`, `Reye syndrome`, `Metabolic acidosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 181,
    question: `Which statement best explains why phenytoin dosing adjustments must be made cautiously?`,
    options: [`Linear elimination across all doses`, `Small dose increases can cause disproportionate rises in plasma levels`, `Rapid renal clearance`, `Low protein binding`],
    correct: 1,
    explanation: `plasma levels`
  },
  {
    id: 182,
    question: `Carbamazepine-induced dizziness and diplopia are most directly attributable to:`,
    options: [`Peripheral neuropathy`, `Sodium channel blockade in CNS neurons`, `Anticholinergic effects`, `Cerebellar degeneration`],
    correct: 1,
    explanation: ``
  },
  {
    id: 183,
    question: `Which anticonvulsant is least appropriate for use in pregnancy due to highest teratogenic risk?`,
    options: [`Phenytoin`, `Carbamazepine`, `Valproic acid`, `Phenobarbital`],
    correct: 2,
    explanation: ``
  },
  {
    id: 184,
    question: `The ability of valproic acid to treat both absence and generalized tonic–clonic seizures most clearly distinguishes it from:`,
    options: [`Carbamazepine`, `Ethosuximide`, `Lamotrigine`, `Levetiracetam`],
    correct: 0,
    explanation: ``
  },
  {
    id: 185,
    question: `Which adverse effect of phenytoin reflects chronic cerebellar toxicity?`,
    options: [`Gingival hyperplasia`, `Ataxia`, `Hepatitis`, `Hyponatremia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 186,
    question: `A neonate exposed in utero to valproic acid is at increased risk of which metabolic abnormality?`,
    options: [`Hypoglycemia`, `Neural tube defects due to impaired folate metabolism`, `Hyperbilirubinemia`, `Congenital hypothyroidism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 187,
    question: `Which anticonvulsant is most strongly associated with enzyme induction leading to reduced efficacy of oral contraceptives?`,
    options: [`Valproic acid`, `Carbamazepine`, `Gabapentin`, `Ethosuximide`],
    correct: 1,
    explanation: ``
  },
  {
    id: 188,
    question: `Phenytoin toxicity initially manifests as nystagmus because:`,
    options: [`The vestibular system is most sensitive to sodium channel blockade`, `Ocular muscles accumulate drug preferentially`, `Cerebellar Purkinje cells are resistant`, `Visual cortex is selectively inhibited`],
    correct: 0,
    explanation: `blockade`
  },
  {
    id: 189,
    question: `Which anticonvulsant demonstrates both enzyme induction and risk of serious dermatologic reactions?`,
    options: [`Valproic acid`, `Phenytoin`, `Carbamazepine`, `Levetiracetam`],
    correct: 2,
    explanation: ``
  },
  {
    id: 190,
    question: `A patient on long-term phenytoin presents with bone pain and fractures; laboratory studies show low vitamin D levels; this complication results from:`,
    options: [`Renal calcium wasting`, `Enzyme induction increasing vitamin D metabolism`, `Direct osteoblast inhibition`, `Reduced intestinal calcium absorption only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 191,
    question: `Which anticonvulsant is most likely to cause weight gain and alopecia as notable adverse effects?`,
    options: [`Phenytoin`, `Carbamazepine`, `Valproic acid`, `Topiramate`],
    correct: 2,
    explanation: ``
  },
  {
    id: 192,
    question: `The use of carbamazepine in patients with a history of bone marrow suppression is avoided primarily due to risk of:`,
    options: [`Thrombocytopenia only`, `Leukopenia and aplastic anemia`, `Megaloblastic anemia`, `Hemolysis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 193,
    question: `Which anticonvulsant most commonly produces dose-related gastrointestinal distress including nausea and vomiting?`,
    options: [`Phenytoin`, `Carbamazepine`, `Valproic acid`, `Phenobarbital`],
    correct: 2,
    explanation: ``
  },
  {
    id: 194,
    question: `A patient with absence seizures switched from ethosuximide to phenytoin experiences seizure worsening because phenytoin:`,
    options: [`Enhances T-type calcium currents`, `Does not suppress thalamic pacemaker activity`, `Reduces GABA release`, `Induces hepatic enzymes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 195,
    question: `Which anticonvulsant is most strongly associated with HLA-B*1502–related severe cutaneous adverse reactions in certain ethnic populations?`,
    options: [`Phenytoin`, `Valproic acid`, `Carbamazepine`, `Phenobarbital`],
    correct: 2,
    explanation: ``
  },
  {
    id: 196,
    question: `The clinical decision to avoid valproic acid in women of childbearing potential is primarily driven by its high risk of:`,
    options: [`Maternal hepatotoxicity`, `Neonatal withdrawal`, `Neural tube defects`, `Postpartum hemorrhage`],
    correct: 2,
    explanation: ``
  },
  {
    id: 197,
    question: `Which anticonvulsant displays nonlinear kinetics due to saturation of hepatic metabolism?`,
    options: [`Carbamazepine`, `Valproic acid`, `Phenytoin`, `Ethosuximide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 198,
    question: `Carbamazepine-induced diplopia and ataxia are most likely to occur during:`,
    options: [`Initiation before autoinduction stabilizes plasma levels`, `Long-term stable therapy`, `Pregnancy`, `Renal impairment only`],
    correct: 0,
    explanation: ``
  },
  {
    id: 199,
    question: `Which adverse effect profile best differentiates valproic acid from carbamazepine and phenytoin?`,
    options: [`Gingival hyperplasia`, `Hyponatremia`, `Weight gain and hyperammonemia`, `Osteomalacia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 200,
    question: `A comprehensive understanding of anticonvulsant pharmacology requires integration of mechanism, clinical use, toxicity, and teratogenic risk; among phenytoin, carbamazepine, and valproic acid, the drug with the broadest spectrum of seizure control but greatest teratogenic potential is:`,
    options: [`Phenytoin`, `Carbamazepine`, `Valproic acid`, `Phenobarbital`],
    correct: 2,
    explanation: ``
  },
  {
    id: 201,
    question: `Morphine, the prototypical opioid analgesic, produces analgesia primarily by activating μ-opioid receptors in the central nervous system, leading to inhibition of nociceptive neurotransmission through which principal cellular mechanism?`,
    options: [`Opening of voltage-gated sodium channels`, `Increased presynaptic calcium influx`, `Decreased presynaptic calcium influx and increased postsynaptic potassium efflux`, `Direct antagonism of NMDA receptors`],
    correct: 2,
    explanation: `postsynaptic potassium efflux`
  },
  {
    id: 202,
    question: `The primary clinical indication for morphine in acute care settings is:`,
    options: [`Mild inflammatory pain`, `Neuropathic pain`, `Severe acute and chronic pain`, `Migraine prophylaxis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 203,
    question: `Morphine is particularly effective in relieving pain associated with myocardial infarction because, in addition to analgesia, it also:`,
    options: [`Increases heart rate`, `Causes peripheral vasoconstriction`, `Reduces anxiety and preload`, `Enhances myocardial contractility`],
    correct: 2,
    explanation: ``
  },
  {
    id: 204,
    question: `Which route of administration provides the fastest onset of action for morphine in emergency settings?`,
    options: [`Oral`, `Intramuscular`, `Subcutaneous`, `Intravenous`],
    correct: 3,
    explanation: ``
  },
  {
    id: 205,
    question: `Oral bioavailability of morphine is relatively low due to:`,
    options: [`Poor gastrointestinal absorption`, `Extensive renal excretion`, `Significant first-pass hepatic metabolism`, `Low lipid solubility`],
    correct: 2,
    explanation: ``
  },
  {
    id: 206,
    question: `Morphine-induced respiratory depression results primarily from:`,
    options: [`Paralysis of respiratory muscles`, `Reduced sensitivity of brainstem respiratory centers to carbon dioxide`, `Bronchoconstriction`, `Increased airway secretions`],
    correct: 1,
    explanation: `carbon dioxide`
  },
  {
    id: 207,
    question: `Which adverse effect of morphine is most directly mediated by stimulation of the chemoreceptor trigger zone (CTZ)?`,
    options: [`Constipation`, `Nausea and vomiting`, `Urinary retention`, `Pruritus`],
    correct: 1,
    explanation: ``
  },
  {
    id: 208,
    question: `Constipation caused by morphine occurs because opioids:`,
    options: [`Increase intestinal secretion`, `Increase gastrointestinal smooth muscle tone`, `Decrease gastrointestinal motility and secretion`, `Cause direct mucosal injury`],
    correct: 2,
    explanation: ``
  },
  {
    id: 209,
    question: `Miosis (“pinpoint pupils”) seen in morphine toxicity is due to:`,
    options: [`Cortical inhibition`, `Stimulation of the Edinger–Westphal nucleus`, `α-adrenergic receptor blockade`, `Parasympathetic ganglionic blockade`],
    correct: 1,
    explanation: ``
  },
  {
    id: 210,
    question: `Which triad is classically associated with acute morphine overdose?`,
    options: [`Hypertension, mydriasis, tachycardia`, `Respiratory depression, miosis, coma`, `Hyperthermia, seizures, agitation`, `Hypotension, mydriasis, tremor`],
    correct: 1,
    explanation: ``
  },
  {
    id: 211,
    question: `Naloxone reverses opioid toxicity because it:`,
    options: [`Activates κ-opioid receptors`, `Is a competitive antagonist at opioid receptors`, `Irreversibly blocks μ-opioid receptors`, `Enhances opioid metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 212,
    question: `The relatively short duration of action of naloxone compared with morphine necessitates:`,
    options: [`Oral administration`, `Continuous monitoring and repeated dosing`, `Co-administration with benzodiazepines`, `Avoidance in opioid overdose`],
    correct: 1,
    explanation: ``
  },
  {
    id: 213,
    question: `Which route of naloxone administration is most appropriate in an unconscious patient with suspected opioid overdose?`,
    options: [`Oral`, `Intravenous`, `Rectal`, `Transdermal`],
    correct: 1,
    explanation: ``
  },
  {
    id: 214,
    question: `In opioid-dependent individuals, rapid administration of naloxone may precipitate:`,
    options: [`Respiratory failure`, `Severe withdrawal symptoms`, `Hypertensive crisis`, `Status epilepticus`],
    correct: 1,
    explanation: ``
  },
  {
    id: 215,
    question: `Morphine causes histamine release from mast cells, which clinically manifests as:`,
    options: [`Bronchodilation`, `Pruritus and hypotension`, `Hypertension`, `Reduced gastric acid secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 216,
    question: `Which patient population is at highest risk of life-threatening respiratory depression from standard doses of morphine?`,
    options: [`Young healthy adults`, `Patients with chronic obstructive pulmonary disease`, `Patients with hypertension`, `Patients with diabetes mellitus`],
    correct: 1,
    explanation: ``
  },
  {
    id: 217,
    question: `Tolerance to morphine develops most rapidly to which effect?`,
    options: [`Constipation`, `Miosis`, `Analgesia`, `Biliary colic`],
    correct: 2,
    explanation: ``
  },
  {
    id: 218,
    question: `Physical dependence on morphine is best characterized by:`,
    options: [`Craving without withdrawal symptoms`, `Need for progressively increasing doses only`, `Appearance of withdrawal symptoms upon abrupt cessation`, `Irreversible receptor downregulation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 219,
    question: `Which symptom is LEAST likely to be observed during opioid withdrawal?`,
    options: [`Diarrhea`, `Mydriasis`, `Rhinorrhea`, `Respiratory depression`],
    correct: 3,
    explanation: ``
  },
  {
    id: 220,
    question: `Morphine is contraindicated or used with extreme caution in head injury because it:`,
    options: [`Increases intracranial pressure and masks neurological signs`, `Causes severe hypertension`, `Produces seizures`, `Inhibits cerebral blood flow`],
    correct: 0,
    explanation: `ns`
  },
  {
    id: 221,
    question: `Although opioids can lower seizure threshold at high doses, morphine is NOT used in status epilepticus because:`,
    options: [`It enhances glutamate release`, `It lacks rapid anticonvulsant activity`, `It causes irreversible CNS depression`, `It antagonizes benzodiazepines`],
    correct: 1,
    explanation: ``
  },
  {
    id: 222,
    question: `The first-line drugs for acute management of status epilepticus are:`,
    options: [`Opioid analgesics`, `Benzodiazepines`, `Tricyclic antidepressants`, `Antipsychotics`],
    correct: 1,
    explanation: ``
  },
  {
    id: 223,
    question: `Which benzodiazepine is most commonly used as first-line therapy in status epilepticus due to rapid onset when given intravenously?`,
    options: [`Diazepam`, `Lorazepam`, `Clonazepam`, `Midazolam (oral)`],
    correct: 1,
    explanation: ``
  },
  {
    id: 224,
    question: `Morphine-induced biliary colic occurs because opioids:`,
    options: [`Relax the sphincter of Oddi`, `Contract the sphincter of Oddi`, `Increase bile secretion`, `Inhibit gallbladder contraction`],
    correct: 1,
    explanation: ``
  },
  {
    id: 225,
    question: `Which adverse effect of morphine is primarily responsible for urinary retention?`,
    options: [`Increased detrusor muscle contraction`, `Increased sphincter tone`, `Reduced renal blood flow`, `Antidiuretic hormone inhibition`],
    correct: 1,
    explanation: ``
  },
  {
    id: 226,
    question: `A patient receiving morphine develops hypotension; this effect is mainly due to:`,
    options: [`Direct myocardial depression`, `Reduced blood volume`, `Peripheral vasodilation from histamine release`, `β-adrenergic blockade`],
    correct: 2,
    explanation: ``
  },
  {
    id: 227,
    question: `Which route of morphine administration is preferred for chronic pain management when stable plasma levels are desired?`,
    options: [`Intravenous bolus`, `Oral sustained-release`, `Intramuscular injection`, `Intranasal`],
    correct: 1,
    explanation: ``
  },
  {
    id: 228,
    question: `Morphine metabolism occurs primarily in the liver via:`,
    options: [`Oxidation by CYP3A4`, `Acetylation`, `Glucuronidation`, `Reduction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 229,
    question: `Morphine-6-glucuronide is clinically important because it:`,
    options: [`Is inactive`, `Is rapidly excreted without effect`, `Has potent analgesic activity`, `Causes hepatotoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 230,
    question: `Renal failure increases the risk of morphine toxicity mainly due to accumulation of:`,
    options: [`Unchanged morphine only`, `Inactive metabolites`, `Active glucuronide metabolites`, `Naloxone`],
    correct: 2,
    explanation: ``
  },
  {
    id: 231,
    question: `Which side effect of morphine shows minimal tolerance development even with chronic use?`,
    options: [`Analgesia`, `Euphoria`, `Constipation`, `Sedation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 232,
    question: `Morphine should be avoided in patients with asthma primarily because it:`,
    options: [`Suppresses cough reflex`, `Causes bronchoconstriction via histamine release`, `Reduces oxygen consumption`, `Inhibits β₂ receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 233,
    question: `The antidote naloxone has no intrinsic analgesic activity because it:`,
    options: [`Is poorly absorbed`, `Is a pure opioid antagonist`, `Acts only peripherally`, `Is rapidly metabolized`],
    correct: 1,
    explanation: ``
  },
  {
    id: 234,
    question: `Which statement best explains why naloxone reverses respiratory depression more rapidly than analgesia?`,
    options: [`Higher affinity for μ receptors in the brainstem`, `Slower elimination from CNS`, `Greater effect on κ receptors`, `Reduced penetration into CNS`],
    correct: 0,
    explanation: ``
  },
  {
    id: 235,
    question: `Morphine-induced sedation is primarily mediated through:`,
    options: [`Activation of dopaminergic pathways`, `Suppression of ascending reticular activating system`, `Direct inhibition of motor cortex`, `Blockade of NMDA receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 236,
    question: `Which effect of morphine contributes most to its abuse potential?`,
    options: [`Constipation`, `Respiratory depression`, `Euphoria due to mesolimbic dopamine release`, `Miosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 237,
    question: `In the context of pain management, morphine is considered superior to NSAIDs for severe pain because it:`,
    options: [`Has anti-inflammatory action`, `Acts centrally independent of inflammatory pathways`, `Has no ceiling effect on analgesia`, `Is safer for long-term use`],
    correct: 2,
    explanation: ``
  },
  {
    id: 238,
    question: `Which clinical scenario represents an appropriate indication for morphine use?`,
    options: [`Tension headache`, `Mild postoperative pain`, `Severe cancer-related pain`, `Neuropathic pain as monotherapy`],
    correct: 2,
    explanation: ``
  },
  {
    id: 239,
    question: `A patient with opioid overdose receives naloxone and regains consciousness but later redevelops respiratory depression; the most likely reason is:`,
    options: [`Naloxone toxicity`, `Delayed morphine absorption`, `Shorter half-life of naloxone than morphine`, `Enzyme induction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 240,
    question: `Which route of naloxone is commonly used by first responders outside hospital settings?`,
    options: [`Oral`, `Intravenous`, `Intranasal`, `Subcutaneous implant`],
    correct: 2,
    explanation: ``
  },
  {
    id: 241,
    question: `Morphine produces cough suppression primarily by:`,
    options: [`Local anesthetic action`, `Depression of the medullary cough center`, `Bronchodilation`, `Reduced mucus secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 242,
    question: `Which adverse effect of morphine is most problematic in elderly patients?`,
    options: [`Diarrhea`, `Constipation and confusion`, `Hypertension`, `Hyperglycemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 243,
    question: `The risk of fatal morphine overdose is highest when combined with:`,
    options: [`NSAIDs`, `Acetaminophen`, `Benzodiazepines or alcohol`, `Antiemetics`],
    correct: 2,
    explanation: ``
  },
  {
    id: 244,
    question: `Which opioid receptor subtype is most responsible for morphine’s analgesic and respiratory depressant effects?`,
    options: [`κ`, `δ`, `μ`, `σ`],
    correct: 2,
    explanation: ``
  },
  {
    id: 245,
    question: `Morphine-induced nausea is often transient because:`,
    options: [`Rapid tolerance develops at CTZ`, `Drug is rapidly eliminated`, `It is dose independent`, `Naloxone is co-administered`],
    correct: 0,
    explanation: ``
  },
  {
    id: 246,
    question: `Which pharmacologic property of morphine limits its use for ambulatory patients?`,
    options: [`Poor oral absorption`, `Sedation and impairment of psychomotor function`, `Short half-life`, `Lack of analgesic efficacy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 247,
    question: `In patients with renal failure, an alternative to morphine is preferred mainly to avoid accumulation of:`,
    options: [`Naloxone`, `Morphine-3-glucuronide`, `Morphine-6-glucuronide`, `Unchanged morphine only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 248,
    question: `Which adverse effect of morphine can exacerbate increased intracranial pressure?`,
    options: [`Vasodilation and respiratory depression leading to hypercapnia`, `Diuresis`, `Hypothermia`, `Bradycardia alone`],
    correct: 0,
    explanation: `hypercapnia`
  },
  {
    id: 249,
    question: `Morphine is classified as a strong opioid analgesic because it:`,
    options: [`Has mixed agonist–antagonist activity`, `Is a full μ-opioid receptor agonist`, `Acts only peripherally`, `Has low abuse potential`],
    correct: 1,
    explanation: ``
  },
  {
    id: 250,
    question: `A comprehensive understanding of opioid pharmacology integrates mechanism, clinical use, toxicity, antidotal therapy, and special precautions; among these, the single most important life-threatening adverse effect of morphine that dictates cautious dosing and monitoring is:`,
    options: [`Constipation`, `Nausea`, `Respiratory depression`, `Pruritus`],
    correct: 2,
    explanation: `Chemotherapy`
  },
  {
    id: 251,
    question: `Antibacterial agents are classified as bactericidal or bacteriostatic based primarily on their ability to:`,
    options: [`Inhibit protein synthesis`, `Kill bacteria or inhibit their growth`, `Act on Gram-positive organisms`, `Prevent resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 252,
    question: `Bactericidal antibiotics are best defined as drugs that:`,
    options: [`Inhibit bacterial growth without killing`, `Kill bacteria directly at therapeutic concentrations`, `Are effective only in immunocompetent hosts`, `Act only on dividing bacteria`],
    correct: 1,
    explanation: ``
  },
  {
    id: 253,
    question: `Which clinical situation MOST strongly favors the use of a bactericidal rather than a bacteriostatic antibiotic?`,
    options: [`Mild skin infection`, `Uncomplicated urinary tract infection`, `Endocarditis`, `Community-acquired sinusitis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 254,
    question: `Bacteriostatic antibiotics exert their effect primarily by:`,
    options: [`Causing irreversible bacterial cell death`, `Disrupting bacterial cell membranes`, `Inhibiting bacterial growth and replication`, `Activating host immune cells`],
    correct: 2,
    explanation: ``
  },
  {
    id: 255,
    question: `Which antibiotic class is classically bacteriostatic at usual concentrations?`,
    options: [`Aminoglycosides`, `β-lactams`, `Tetracyclines`, `Fluoroquinolones`],
    correct: 2,
    explanation: ``
  },
  {
    id: 256,
    question: `A bacteriostatic antibiotic can be clinically effective because it:`,
    options: [`Enhances bacterial toxin production`, `Allows host immune system to eliminate pathogens`, `Permanently damages bacterial DNA`, `Prevents drug resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 257,
    question: `Synergy between two antibacterial drugs is best defined as:`,
    options: [`Additive effect of two drugs`, `One drug reducing toxicity of another`, `Combined effect greater than the sum of individual effects`, `One drug preventing resistance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 258,
    question: `A classic example of synergistic antibacterial therapy is the combination of:`,
    options: [`Tetracycline + erythromycin`, `Penicillin + aminoglycoside`, `Chloramphenicol + sulfonamide`, `Rifampin + isoniazid`],
    correct: 1,
    explanation: ``
  },
  {
    id: 259,
    question: `The mechanistic basis of synergy between β-lactams and aminoglycosides is that β-lactams:`,
    options: [`Inhibit aminoglycoside metabolism`, `Increase bacterial membrane permeability to aminoglycosides`, `Prevent aminoglycoside resistance`, `Reduce nephrotoxicity`],
    correct: 1,
    explanation: `s`
  },
  {
    id: 260,
    question: `Antagonism between antibacterial agents may occur when:`,
    options: [`Two bactericidal drugs are combined`, `A bacteriostatic drug inhibits growth required for bactericidal action`, `Two drugs act on different targets`, `One drug enhances absorption of another`],
    correct: 1,
    explanation: `bactericidal action`
  },
  {
    id: 261,
    question: `Which combination is MOST likely to demonstrate antagonism?`,
    options: [`Penicillin + gentamicin`, `Vancomycin + ceftriaxone`, `Penicillin + tetracycline`, `Trimethoprim + sulfamethoxazole`],
    correct: 2,
    explanation: ``
  },
  {
    id: 262,
    question: `Antibacterial resistance is best described as:`,
    options: [`Reduced drug absorption by host`, `Host immune tolerance`, `Ability of bacteria to survive antibiotic exposure`, `Increased bacterial virulence`],
    correct: 2,
    explanation: ``
  },
  {
    id: 263,
    question: `The MOST common mechanism of antibacterial resistance is:`,
    options: [`Reduced renal clearance`, `Drug inactivation by bacterial enzymes`, `Increased host metabolism`, `Drug sequestration by plasma proteins`],
    correct: 1,
    explanation: ``
  },
  {
    id: 264,
    question: `β-Lactamase production confers resistance primarily by:`,
    options: [`Altering bacterial ribosomes`, `Preventing drug entry`, `Hydrolyzing the β-lactam ring`, `Increasing efflux pump activity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 265,
    question: `Alteration of penicillin-binding proteins is a major resistance mechanism in:`,
    options: [`Escherichia coli`, `Streptococcus pneumoniae`, `Mycoplasma pneumoniae`, `Chlamydia trachomatis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 266,
    question: `Efflux pumps contribute to antibiotic resistance by:`,
    options: [`Degrading antibiotics`, `Preventing drug absorption`, `Actively removing drugs from bacterial cells`, `Altering drug targets`],
    correct: 2,
    explanation: ``
  },
  {
    id: 267,
    question: `Cross-resistance refers to:`,
    options: [`Resistance transferred between species`, `Resistance to multiple drugs with similar mechanisms`, `Resistance caused by plasmids only`, `Resistance due to enzyme induction`],
    correct: 1,
    explanation: ``
  },
  {
    id: 268,
    question: `Plasmid-mediated resistance is particularly concerning because plasmids:`,
    options: [`Are unstable`, `Cannot transfer between bacteria`, `Can spread resistance genes horizontally`, `Reduce bacterial fitness`],
    correct: 2,
    explanation: ``
  },
  {
    id: 269,
    question: `Which antibacterial agent is considered broad-spectrum?`,
    options: [`Penicillin G`, `Vancomycin`, `Tetracycline`, `Bacitracin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 270,
    question: `Broad-spectrum antibiotics are defined as agents that:`,
    options: [`Act only on Gram-positive bacteria`, `Act only on Gram-negative bacteria`, `Are effective against a wide range of organisms`, `Have minimal side effects`],
    correct: 2,
    explanation: ``
  },
  {
    id: 271,
    question: `A major disadvantage of broad-spectrum antibiotics is:`,
    options: [`Poor oral absorption`, `Increased risk of superinfection`, `Reduced efficacy`, `Narrow therapeutic index`],
    correct: 1,
    explanation: ``
  },
  {
    id: 272,
    question: `Clostridioides difficile–associated diarrhea is most commonly linked to use of:`,
    options: [`Narrow-spectrum antibiotics`, `Broad-spectrum antibiotics`, `Antifungal agents`, `Antiviral drugs`],
    correct: 1,
    explanation: ``
  },
  {
    id: 273,
    question: `Which antibiotic class is both broad-spectrum and bactericidal?`,
    options: [`Tetracyclines`, `Macrolides`, `Fluoroquinolones`, `Sulfonamides`],
    correct: 2,
    explanation: ``
  },
  {
    id: 274,
    question: `The use of broad-spectrum antibiotics should generally be reserved for situations where:`,
    options: [`Infection is mild`, `Pathogen is unknown or mixed`, `Narrow-spectrum drugs are cheaper`, `Resistance is unlikely`],
    correct: 1,
    explanation: ``
  },
  {
    id: 275,
    question: `De-escalation of antibiotic therapy refers to:`,
    options: [`Increasing antibiotic dose`, `Switching from IV to oral therapy`, `Narrowing spectrum once pathogen is identified`, `Combining multiple antibiotics`],
    correct: 2,
    explanation: ``
  },
  {
    id: 276,
    question: `Which scenario best illustrates rational antibiotic use according to Katzung principles?`,
    options: [`Empirical broad-spectrum therapy continued indefinitely`, `Narrow-spectrum therapy based on culture sensitivity`, `Combination therapy without indication`, `Shortening therapy to avoid resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 277,
    question: `Tolerance differs from resistance in that tolerance:`,
    options: [`Is genetically encoded`, `Allows survival without growth`, `Is permanent`, `Results from plasmids`],
    correct: 1,
    explanation: ``
  },
  {
    id: 278,
    question: `Post-antibiotic effect refers to:`,
    options: [`Increased toxicity after treatment`, `Persistent bacterial growth suppression after drug removal`, `Rapid resistance development`, `Enhanced immune response`],
    correct: 1,
    explanation: ``
  },
  {
    id: 279,
    question: `Which class shows a prominent post-antibiotic effect against Gram-negative organisms?`,
    options: [`Macrolides`, `Aminoglycosides`, `Tetracyclines`, `Sulfonamides`],
    correct: 1,
    explanation: ``
  },
  {
    id: 280,
    question: `Time-dependent killing is best demonstrated by:`,
    options: [`Aminoglycosides`, `Fluoroquinolones`, `β-Lactam antibiotics`, `Metronidazole`],
    correct: 2,
    explanation: ``
  },
  {
    id: 281,
    question: `Concentration-dependent killing is characteristic of:`,
    options: [`β-Lactams`, `Glycopeptides`, `Aminoglycosides`, `Linezolid`],
    correct: 2,
    explanation: ``
  },
  {
    id: 282,
    question: `Which dosing strategy optimizes efficacy of time-dependent antibiotics?`,
    options: [`High peak concentration`, `Prolonged time above MIC`, `Single daily dosing`, `Pulse dosing`],
    correct: 1,
    explanation: ``
  },
  {
    id: 283,
    question: `MIC (minimum inhibitory concentration) is defined as:`,
    options: [`Lowest concentration that kills bacteria`, `Lowest concentration preventing visible growth`, `Concentration achieved in plasma`, `Therapeutic index`],
    correct: 1,
    explanation: ``
  },
  {
    id: 284,
    question: `Broad-spectrum antibiotics increase risk of fungal superinfection primarily by:`,
    options: [`Direct immunosuppression`, `Killing normal bacterial flora`, `Increasing fungal virulence`, `Enhancing fungal adhesion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 285,
    question: `Which resistance mechanism is most likely to cause multidrug resistance?`,
    options: [`Single enzyme mutation`, `Target modification`, `Efflux pump overexpression`, `Reduced permeability only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 286,
    question: `Combination antibiotic therapy is MOST justified when:`,
    options: [`Infection is mild`, `Etiologic agent is known`, `Preventing resistance in serious infections`, `Reducing treatment cost`],
    correct: 2,
    explanation: ``
  },
  {
    id: 287,
    question: `The rationale for combining trimethoprim with sulfamethoxazole is:`,
    options: [`Reduced toxicity`, `Broader spectrum only`, `Sequential blockade of folate synthesis`, `Improved absorption`],
    correct: 2,
    explanation: ``
  },
  {
    id: 288,
    question: `Which antibacterial property is LEAST relevant in immunocompromised patients?`,
    options: [`Bactericidal activity`, `Synergistic potential`, `Narrow spectrum`, `Host immune reliance`],
    correct: 3,
    explanation: ``
  },
  {
    id: 289,
    question: `A very difficult concept: a bacteriostatic drug may appear bactericidal in vivo when:`,
    options: [`Drug concentration is low`, `Host immunity is severely compromised`, `Immune system effectively clears inhibited bacteria`, `Resistance genes are absent`],
    correct: 2,
    explanation: ``
  },
  {
    id: 290,
    question: `Selection pressure exerted by antibiotics primarily promotes:`,
    options: [`New mutations only`, `Survival of susceptible bacteria`, `Expansion of resistant bacterial subpopulations`, `Host cell adaptation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 291,
    question: `Which factor MOST contributes to emergence of antibiotic resistance globally?`,
    options: [`Hospital hygiene`, `Rational prescribing`, `Overuse and misuse of antibiotics`, `Vaccine development`],
    correct: 2,
    explanation: ``
  },
  {
    id: 292,
    question: `Broad-spectrum antibiotics should be avoided when narrow-spectrum agents are available because they:`,
    options: [`Are less effective`, `Increase toxicity`, `Promote resistance and superinfection`, `Have lower bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 293,
    question: `A patient receiving prolonged broad-spectrum antibiotic therapy develops oral thrush; this condition is best described as:`,
    options: [`Resistance`, `Antagonism`, `Superinfection`, `Synergy`],
    correct: 2,
    explanation: ``
  },
  {
    id: 294,
    question: `Which antibacterial agent is bactericidal but exhibits concentration-dependent killing and post-antibiotic effect?`,
    options: [`Penicillin`, `Vancomycin`, `Aminoglycoside`, `Tetracycline`],
    correct: 2,
    explanation: ``
  },
  {
    id: 295,
    question: `From a pharmacodynamic perspective, bactericidal activity is especially critical in treating infections of:`,
    options: [`Skin and soft tissue`, `Bone and joint`, `Endocardium`, `Upper respiratory tract`],
    correct: 2,
    explanation: ``
  },
  {
    id: 296,
    question: `A broad-spectrum antibiotic used empirically should ideally be:`,
    options: [`Continued unchanged`, `Combined with multiple agents`, `Replaced once pathogen is identified`, `Given indefinitely`],
    correct: 2,
    explanation: ``
  },
  {
    id: 297,
    question: `Which statement about resistance development is MOST accurate according to Katzung?`,
    options: [`Resistance is always induced by antibiotics`, `Resistance can exist before drug exposure`, `Resistance requires chromosomal mutation only`, `Resistance always reduces bacterial fitness`],
    correct: 1,
    explanation: ``
  },
  {
    id: 298,
    question: `Failure of synergistic therapy most likely results from:`,
    options: [`Using two bactericidal drugs`, `Inadequate dosing of one component`, `Targeting different pathways`, `Improved immune response`],
    correct: 1,
    explanation: ``
  },
  {
    id: 299,
    question: `Which antibacterial strategy best minimizes emergence of resistance at population level?`,
    options: [`Prolonged broad-spectrum therapy`, `Empirical polypharmacy`, `Judicious, targeted antibiotic use`, `Higher antibiotic doses`],
    correct: 2,
    explanation: ``
  },
  {
    id: 300,
    question: `Integration of antibacterial spectrum, pharmacodynamics, resistance mechanisms, and host factors is essential for rational therapy; according to Katzung, the single most important principle guiding antibiotic selection is:`,
    options: [`Using the newest drug available`, `Maximizing spectrum`, `Targeting the causative organism with the narrowest effective agent`, `Combining multiple antibiotics routinely`],
    correct: 2,
    explanation: `ive agent`
  },
  {
    id: 301,
    question: `The standard first-line treatment regimen for drug-susceptible pulmonary tuberculosis recommended in Katzung consists of an intensive phase followed by a continuation phase, with a total duration of:`,
    options: [`3 months`, `4 months`, `6 months`, `12 months`],
    correct: 2,
    explanation: ``
  },
  {
    id: 302,
    question: `The intensive phase of standard tuberculosis therapy typically includes which combination of drugs?`,
    options: [`Isoniazid and rifampin only`, `Isoniazid, rifampin, pyrazinamide, and ethambutol`, `Rifampin, ethambutol, and streptomycin`, `Isoniazid and pyrazinamide`],
    correct: 1,
    explanation: ``
  },
  {
    id: 303,
    question: `Which anti-tubercular drug is most strongly associated with dose-related optic neuritis, necessitating regular visual acuity testing?`,
    options: [`Isoniazid`, `Rifampin`, `Pyrazinamide`, `Ethambutol`],
    correct: 3,
    explanation: ``
  },
  {
    id: 304,
    question: `Peripheral neuropathy caused by isoniazid therapy is primarily due to:`,
    options: [`Vitamin B12 deficiency`, `Pyridoxine (vitamin B6) deficiency`, `Folate deficiency`, `Thiamine deficiency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 305,
    question: `Co-administration of pyridoxine with isoniazid is recommended to prevent:`,
    options: [`Hepatotoxicity`, `Optic neuritis`, `Peripheral neuropathy`, `Hyperuricemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 306,
    question: `Which anti-tubercular agent is a potent inducer of hepatic cytochrome P450 enzymes and is responsible for multiple clinically significant drug interactions?`,
    options: [`Isoniazid`, `Ethambutol`, `Rifampin`, `Pyrazinamide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 307,
    question: `A patient on rifampin notices orange discoloration of urine and tears; this effect is:`,
    options: [`A sign of renal toxicity`, `Due to hemolysis`, `A benign and expected side effect`, `Indicative of hepatotoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 308,
    question: `Hyperuricemia and acute gouty arthritis are most characteristically associated with which anti-tubercular drug?`,
    options: [`Isoniazid`, `Rifampin`, `Pyrazinamide`, `Ethambutol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 309,
    question: `The most serious dose-limiting toxicity shared by isoniazid, rifampin, and pyrazinamide is:`,
    options: [`Nephrotoxicity`, `Hepatotoxicity`, `Ototoxicity`, `Bone marrow suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 310,
    question: `Which anti-tubercular drug inhibits mycolic acid synthesis in the mycobacterial cell wall?`,
    options: [`Ethambutol`, `Rifampin`, `Isoniazid`, `Pyrazinamide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 311,
    question: `Treatment duration for extrapulmonary tuberculosis such as TB meningitis is often extended beyond 6 months primarily due to:`,
    options: [`Increased resistance`, `Poor drug penetration`, `Higher relapse risk`, `Slower clinical response and site-specific considerations`],
    correct: 3,
    explanation: ``
  },
  {
    id: 312,
    question: `Which antiviral drug class directly inhibits viral DNA polymerase after intracellular phosphorylation?`,
    options: [`Protease inhibitors`, `Nucleoside reverse transcriptase inhibitors`, `Neuraminidase inhibitors`, `Integrase inhibitors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 313,
    question: `Acyclovir is most selectively active against herpes simplex virus because:`,
    options: [`It inhibits host DNA polymerase`, `It is activated by viral thymidine kinase`, `It blocks viral entry`, `It prevents viral protein synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 314,
    question: `The most common dose-limiting adverse effect of intravenous acyclovir is:`,
    options: [`Hepatotoxicity`, `Bone marrow suppression`, `Nephrotoxicity due to crystalluria`, `Ototoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 315,
    question: `Which antiviral agent is a neuraminidase inhibitor used primarily for influenza A and B infections?`,
    options: [`Acyclovir`, `Zidovudine`, `Oseltamivir`, `Ribavirin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 316,
    question: `Early initiation of oseltamivir is clinically important because it:`,
    options: [`Prevents viral mutation`, `Reduces symptom duration when given within 48 hours`, `Eliminates virus completely`, `Prevents secondary bacterial infection only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 317,
    question: `Interferon-α exerts antiviral effects primarily by:`,
    options: [`Direct viral lysis`, `Inhibiting viral protein synthesis in host cells`, `Blocking viral attachment`, `Enhancing viral entry`],
    correct: 1,
    explanation: ``
  },
  {
    id: 318,
    question: `Flu-like symptoms, depression, and bone marrow suppression are characteristic adverse effects of:`,
    options: [`Acyclovir`, `Interferon-α`, `Oseltamivir`, `Lamivudine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 319,
    question: `Which class of antiretroviral drugs prevents conversion of viral RNA into DNA?`,
    options: [`Protease inhibitors`, `Integrase inhibitors`, `Reverse transcriptase inhibitors`, `Fusion inhibitors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 320,
    question: `Zidovudine (AZT) is classified pharmacologically as a:`,
    options: [`Protease inhibitor`, `Non-nucleoside reverse transcriptase inhibitor`, `Nucleoside reverse transcriptase inhibitor`, `Integrase inhibitor`],
    correct: 2,
    explanation: ``
  },
  {
    id: 321,
    question: `The dose-limiting toxicity of zidovudine is most commonly:`,
    options: [`Hepatotoxicity`, `Nephrotoxicity`, `Bone marrow suppression`, `Peripheral neuropathy`],
    correct: 2,
    explanation: ``
  },
  {
    id: 322,
    question: `Highly active antiretroviral therapy (HAART) typically consists of:`,
    options: [`One antiretroviral drug`, `Two protease inhibitors`, `Combination of three or more antiretroviral agents`, `Antiviral therapy with interferon`],
    correct: 2,
    explanation: ``
  },
  {
    id: 323,
    question: `The primary goal of HAART in HIV infection is to:`,
    options: [`Eradicate HIV completely`, `Increase CD4 count and suppress viral replication`, `Prevent opportunistic infections only`, `Cure AIDS`],
    correct: 1,
    explanation: ``
  },
  {
    id: 324,
    question: `Which antiretroviral drug class prevents integration of viral DNA into the host genome?`,
    options: [`Protease inhibitors`, `Fusion inhibitors`, `Integrase strand transfer inhibitors`, `Reverse transcriptase inhibitors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 325,
    question: `Protease inhibitors reduce HIV infectivity by:`,
    options: [`Blocking viral entry`, `Preventing maturation of viral proteins`, `Inhibiting reverse transcription`, `Inhibiting viral RNA synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 326,
    question: `A characteristic metabolic adverse effect associated with long-term protease inhibitor therapy is:`,
    options: [`Hypoglycemia`, `Lipodystrophy and insulin resistance`, `Bone marrow suppression`, `Nephrolithiasis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 327,
    question: `Ritonavir is commonly used at low doses in HIV regimens because it:`,
    options: [`Has strong antiviral activity alone`, `Inhibits CYP3A4 and boosts levels of other protease inhibitors`, `Prevents resistance`, `Reduces drug toxicity`],
    correct: 1,
    explanation: `inhibitors`
  },
  {
    id: 328,
    question: `Which antiretroviral agent blocks HIV entry by binding to the CCR5 coreceptor on host cells?`,
    options: [`Enfuvirtide`, `Maraviroc`, `Dolutegravir`, `Efavirenz`],
    correct: 1,
    explanation: ``
  },
  {
    id: 329,
    question: `Enfuvirtide differs from other antiretroviral agents because it:`,
    options: [`Is administered orally`, `Inhibits viral protease`, `Prevents fusion of HIV with host cell membrane`, `Inhibits reverse transcriptase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 330,
    question: `The requirement for lifelong adherence to antiretroviral therapy is primarily due to:`,
    options: [`Drug toxicity`, `Latent viral reservoirs`, `Rapid renal elimination`, `Host immune suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 331,
    question: `Which laboratory parameter is most useful for monitoring effectiveness of antiretroviral therapy?`,
    options: [`Liver function tests`, `Serum creatinine`, `Plasma HIV viral load`, `Hemoglobin level`],
    correct: 2,
    explanation: ``
  },
  {
    id: 332,
    question: `The development of resistance during HIV therapy is most strongly associated with:`,
    options: [`High drug doses`, `Poor adherence to therapy`, `Use of combination therapy`, `Long half-life of drugs`],
    correct: 1,
    explanation: ``
  },
  {
    id: 333,
    question: `Lamivudine is used in both HIV and hepatitis B infection because it:`,
    options: [`Is a protease inhibitor`, `Inhibits viral DNA polymerase and reverse transcriptase`, `Blocks viral entry`, `Enhances immune response`],
    correct: 1,
    explanation: ``
  },
  {
    id: 334,
    question: `Which antiviral agent is associated with hemolytic anemia as a notable adverse effect?`,
    options: [`Acyclovir`, `Ribavirin`, `Oseltamivir`, `Zidovudine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 335,
    question: `Ribavirin is contraindicated in pregnancy primarily due to its:`,
    options: [`Hepatotoxicity`, `Teratogenicity`, `Nephrotoxicity`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 336,
    question: `Which anti-tubercular drug requires dose adjustment in renal impairment due to predominant renal excretion?`,
    options: [`Isoniazid`, `Rifampin`, `Ethambutol`, `Pyrazinamide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 337,
    question: `Directly observed therapy (DOT) in tuberculosis management is primarily intended to:`,
    options: [`Reduce drug toxicity`, `Shorten treatment duration`, `Improve adherence and prevent resistance`, `Lower treatment cost`],
    correct: 2,
    explanation: ``
  },
  {
    id: 338,
    question: `Which antiviral agent is most appropriate for post-exposure prophylaxis of influenza in high-risk individuals?`,
    options: [`Acyclovir`, `Oseltamivir`, `Zidovudine`, `Interferon-α`],
    correct: 1,
    explanation: ``
  },
  {
    id: 339,
    question: `The major limitation of interferon therapy in chronic viral infections is:`,
    options: [`Rapid resistance`, `Severe systemic side effects`, `Poor antiviral efficacy`, `Oral bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 340,
    question: `Which antiretroviral drug is most strongly associated with neuropsychiatric adverse effects such as vivid dreams?`,
    options: [`Zidovudine`, `Efavirenz`, `Lamivudine`, `Ritonavir`],
    correct: 1,
    explanation: ``
  },
  {
    id: 341,
    question: `Treatment of latent tuberculosis infection commonly involves prolonged therapy with:`,
    options: [`Rifampin only for 1 week`, `Isoniazid for several months`, `Ethambutol for 6 weeks`, `Pyrazinamide alone`],
    correct: 1,
    explanation: ``
  },
  {
    id: 342,
    question: `The rationale for combination therapy in tuberculosis treatment is best explained by:`,
    options: [`Improved patient compliance only`, `Reduced drug toxicity`, `Prevention of emergence of resistant mycobacterial strains`, `Shortened intensive phase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 343,
    question: `Which antiviral agent requires renal dose adjustment to prevent toxicity?`,
    options: [`Efavirenz`, `Acyclovir`, `Ritonavir`, `Interferon-α`],
    correct: 1,
    explanation: ``
  },
  {
    id: 344,
    question: `Immune reconstitution inflammatory syndrome (IRIS) in HIV patients most commonly occurs:`,
    options: [`Before starting HAART`, `Due to drug toxicity`, `After initiation of antiretroviral therapy`, `During viral rebound`],
    correct: 2,
    explanation: ``
  },
  {
    id: 345,
    question: `The primary determinant for initiating antiretroviral therapy in HIV-infected patients is:`,
    options: [`Presence of symptoms only`, `Viral genotype`, `CD4 count and viral load`, `Patient age`],
    correct: 2,
    explanation: ``
  },
  {
    id: 346,
    question: `Which anti-tubercular agent has activity against intracellular mycobacteria in acidic environments such as macrophage phagosomes?`,
    options: [`Isoniazid`, `Rifampin`, `Pyrazinamide`, `Ethambutol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 347,
    question: `A patient receiving rifampin experiences reduced efficacy of oral contraceptives; this interaction is due to:`,
    options: [`Reduced absorption`, `Increased renal excretion`, `Enzyme induction increasing hormone metabolism`, `Protein binding displacement`],
    correct: 2,
    explanation: ``
  },
  {
    id: 348,
    question: `Which antiretroviral strategy has been most effective in reducing mother-to-child transmission of HIV?`,
    options: [`Protease inhibitor monotherapy`, `Delayed initiation of therapy`, `Combination antiretroviral therapy during pregnancy`, `Interferon therapy`],
    correct: 2,
    explanation: ``
  },
  {
    id: 349,
    question: `The emergence of multidrug-resistant tuberculosis (MDR-TB) is most strongly associated with:`,
    options: [`Short treatment duration`, `Poor adherence to therapy`, `Use of combination therapy`, `Host immunodeficiency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 350,
    question: `A comprehensive understanding of anti-tubercular and antiviral pharmacology integrates treatment duration, mechanisms, toxicity, and resistance; according to Katzung, the single most critical principle underlying successful therapy for both tuberculosis and HIV infection is:`,
    options: [`Use of the most potent single drug`, `Shortening treatment duration`, `Sustained combination therapy with strict adherence`, `Avoidance of drug interactions`],
    correct: 2,
    explanation: ``
  },
  {
    id: 351,
    question: `Amphotericin B exerts its antifungal action primarily by:`,
    options: [`Inhibiting ergosterol synthesis`, `Binding to ergosterol and forming membrane pores`, `Inhibiting fungal DNA synthesis`, `Blocking microtubule function`],
    correct: 1,
    explanation: ``
  },
  {
    id: 352,
    question: `The most serious dose-limiting toxicity of amphotericin B is:`,
    options: [`Hepatotoxicity`, `Nephrotoxicity`, `Ototoxicity`, `Bone marrow suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 353,
    question: `Lipid formulations of amphotericin B are preferred because they:`,
    options: [`Increase oral bioavailability`, `Reduce nephrotoxicity`, `Enhance antifungal spectrum`, `Shorten treatment duration`],
    correct: 1,
    explanation: ``
  },
  {
    id: 354,
    question: `Azole antifungal agents act by inhibiting:`,
    options: [`β-glucan synthesis`, `Chitin synthesis`, `Fungal CYP450–dependent ergosterol synthesis`, `DNA-dependent RNA polymerase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 355,
    question: `Which antifungal drug is most commonly used for mucocutaneous candidiasis and is available in oral and topical forms?`,
    options: [`Amphotericin B`, `Fluconazole`, `Caspofungin`, `Terbinafine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 356,
    question: `Echinocandins such as caspofungin act by inhibiting:`,
    options: [`Ergosterol synthesis`, `Fungal DNA replication`, `β-(1,3)-D-glucan synthesis in cell wall`, `Microtubule polymerization`],
    correct: 2,
    explanation: ``
  },
  {
    id: 357,
    question: `Which antifungal agent is associated with gynecomastia and decreased libido due to steroid synthesis inhibition?`,
    options: [`Fluconazole`, `Ketoconazole`, `Amphotericin B`, `Nystatin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 358,
    question: `Nystatin differs from amphotericin B primarily because nystatin:`,
    options: [`Is systemically absorbed`, `Is used only topically or orally for local action`, `Has no affinity for ergosterol`, `Is less toxic to kidneys`],
    correct: 1,
    explanation: ``
  },
  {
    id: 359,
    question: `Metronidazole is particularly effective against protozoa because it:`,
    options: [`Inhibits folate synthesis`, `Generates free radicals that damage DNA`, `Blocks protein synthesis`, `Inhibits microtubules`],
    correct: 1,
    explanation: ``
  },
  {
    id: 360,
    question: `A characteristic adverse effect of metronidazole is:`,
    options: [`Hemolysis`, `Disulfiram-like reaction with alcohol`, `Nephrotoxicity`, `QT prolongation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 361,
    question: `Which protozoal infection is most appropriately treated with metronidazole?`,
    options: [`Toxoplasmosis`, `Giardiasis`, `Malaria`, `Leishmaniasis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 362,
    question: `Treatment of Entamoeba histolytica infection requires metronidazole followed by a luminal agent because:`,
    options: [`Metronidazole has poor tissue penetration`, `Luminal cysts are not eradicated by metronidazole`, `Resistance develops rapidly`, `Metronidazole is bacteriostatic`],
    correct: 1,
    explanation: ``
  },
  {
    id: 363,
    question: `Chloroquine acts as an antimalarial by:`,
    options: [`Inhibiting folate synthesis`, `Preventing heme polymerization in parasite`, `Blocking sodium channels`, `Inhibiting mitochondrial respiration`],
    correct: 1,
    explanation: ``
  },
  {
    id: 364,
    question: `Chloroquine resistance in Plasmodium falciparum is primarily due to:`,
    options: [`Reduced drug absorption`, `Altered ribosomal binding`, `Increased efflux of drug from food vacuole`, `Enzyme degradation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 365,
    question: `Artemisinin-based combination therapy (ACT) is recommended because it:`,
    options: [`Shortens life cycle of parasite only`, `Prevents resistance and rapidly reduces parasite burden`, `Is effective against all protozoa`, `Has no adverse effects`],
    correct: 1,
    explanation: ``
  },
  {
    id: 366,
    question: `Primaquine is unique among antimalarials because it:`,
    options: [`Treats erythrocytic forms only`, `Eradicates hypnozoites in liver`, `Is safe in G6PD deficiency`, `Is effective against all malaria species`],
    correct: 1,
    explanation: ``
  },
  {
    id: 367,
    question: `The major contraindication to primaquine therapy is:`,
    options: [`Renal failure`, `Hepatic disease`, `G6PD deficiency`, `Pregnancy only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 368,
    question: `Which antimalarial is most likely to cause hemolysis in patients with G6PD deficiency?`,
    options: [`Chloroquine`, `Artemisinin`, `Primaquine`, `Mefloquine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 369,
    question: `β₂-Agonists used in respiratory pharmacology primarily produce bronchodilation by:`,
    options: [`Blocking muscarinic receptors`, `Increasing intracellular cAMP`, `Decreasing calcium release`, `Inhibiting histamine release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 370,
    question: `Salbutamol is preferred in acute asthma because it:`,
    options: [`Has long duration`, `Is highly selective for β₂ receptors`, `Has anti-inflammatory effects`, `Inhibits leukotrienes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 371,
    question: `A common adverse effect of β₂-agonist therapy is:`,
    options: [`Bradycardia`, `Tremor and tachycardia`, `Sedation`, `Bronchoconstriction`],
    correct: 1,
    explanation: ``
  },
  {
    id: 372,
    question: `Inhaled corticosteroids improve asthma control primarily by:`,
    options: [`Immediate bronchodilation`, `Reducing airway inflammation and hyperresponsiveness`, `Blocking histamine receptors`, `Inhibiting mast cell degranulation only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 373,
    question: `The most significant long-term adverse effect of inhaled corticosteroids is:`,
    options: [`Osteoporosis`, `Oral candidiasis`, `Growth hormone deficiency`, `Renal failure`],
    correct: 1,
    explanation: ``
  },
  {
    id: 374,
    question: `Antimuscarinic drugs such as ipratropium are particularly useful in:`,
    options: [`Allergic rhinitis`, `Acute asthma only`, `Chronic obstructive pulmonary disease`, `Pulmonary fibrosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 375,
    question: `Theophylline produces bronchodilation mainly by:`,
    options: [`β₂ receptor activation`, `Phosphodiesterase inhibition`, `Leukotriene antagonism`, `Histamine blockade`],
    correct: 1,
    explanation: ``
  },
  {
    id: 376,
    question: `A major limitation of theophylline use is its:`,
    options: [`Poor efficacy`, `Narrow therapeutic index`, `Short duration of action`, `Lack of oral absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 377,
    question: `Cancer chemotherapy drugs are most toxic to tissues with:`,
    options: [`Low mitotic rate`, `High metabolic activity`, `Rapid cell division`, `High oxygen demand`],
    correct: 2,
    explanation: ``
  },
  {
    id: 378,
    question: `Alkylating agents exert antineoplastic effects by:`,
    options: [`Inhibiting topoisomerase`, `Forming cross-links in DNA`, `Blocking microtubules`, `Inhibiting folate synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 379,
    question: `Which anticancer drug class is cell-cycle specific for the S phase?`,
    options: [`Alkylating agents`, `Antimetabolites`, `Vinca alkaloids`, `Taxanes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 380,
    question: `Methotrexate produces cytotoxicity by inhibiting:`,
    options: [`DNA polymerase`, `Thymidylate synthase`, `Dihydrofolate reductase`, `RNA polymerase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 381,
    question: `Leucovorin rescue is used with methotrexate to:`,
    options: [`Enhance antitumor effect`, `Reduce bone marrow toxicity`, `Increase drug absorption`, `Prevent resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 382,
    question: `A characteristic adverse effect of doxorubicin is:`,
    options: [`Nephrotoxicity`, `Neurotoxicity`, `Cardiotoxicity`, `Pulmonary fibrosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 383,
    question: `Bleomycin toxicity most commonly manifests as:`,
    options: [`Bone marrow suppression`, `Pulmonary fibrosis`, `Hepatic failure`, `Nephrotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 384,
    question: `Cisplatin differs from many other anticancer agents because it prominently causes:`,
    options: [`Hepatotoxicity`, `Ototoxicity and nephrotoxicity`, `Cardiotoxicity`, `Pulmonary toxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 385,
    question: `A very difficult concept: combination chemotherapy is effective primarily because it:`,
    options: [`Reduces treatment duration`, `Uses drugs with identical mechanisms`, `Targets cancer cells at different phases and reduces resistance`, `Eliminates all adverse effects`],
    correct: 2,
    explanation: `resistance`
  },
  {
    id: 386,
    question: `Which anticancer drug inhibits microtubule polymerization?`,
    options: [`Paclitaxel`, `Vincristine`, `Methotrexate`, `Cyclophosphamide`],
    correct: 1,
    explanation: ``
  },
  {
    id: 387,
    question: `Paclitaxel differs from vincristine because paclitaxel:`,
    options: [`Prevents microtubule formation`, `Stabilizes microtubules and prevents depolymerization`, `Inhibits DNA synthesis`, `Acts in S phase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 388,
    question: `A major dose-limiting toxicity of vincristine is:`,
    options: [`Myelosuppression`, `Peripheral neuropathy`, `Nephrotoxicity`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 389,
    question: `Targeted cancer therapy differs from traditional chemotherapy because it:`,
    options: [`Is nonspecific`, `Targets specific molecular abnormalities`, `Has higher toxicity`, `Acts only on dividing cells`],
    correct: 1,
    explanation: ``
  },
  {
    id: 390,
    question: `Imatinib is a targeted anticancer drug that inhibits:`,
    options: [`EGFR`, `BCR-ABL tyrosine kinase`, `HER2 receptor`, `VEGF receptor`],
    correct: 1,
    explanation: ``
  },
  {
    id: 391,
    question: `Which antifungal agent inhibits squalene epoxidase?`,
    options: [`Ketoconazole`, `Fluconazole`, `Terbinafine`, `Amphotericin B`],
    correct: 2,
    explanation: ``
  },
  {
    id: 392,
    question: `The drug of choice for cutaneous leishmaniasis is:`,
    options: [`Metronidazole`, `Sodium stibogluconate`, `Chloroquine`, `Primaquine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 393,
    question: `A very difficult integration question: amphotericin B is effective but toxic because fungal and human cell membranes both contain sterols; selectivity exists because:`,
    options: [`Fungi lack cholesterol`, `Amphotericin B has higher affinity for ergosterol than cholesterol`, `Human cells lack membrane sterols`, `Drug is metabolized in fungi`],
    correct: 1,
    explanation: `cholesterol`
  },
  {
    id: 394,
    question: `Which respiratory drug blocks leukotriene receptors and is useful in aspirin-induced asthma?`,
    options: [`Salbutamol`, `Montelukast`, `Theophylline`, `Ipratropium`],
    correct: 1,
    explanation: ``
  },
  {
    id: 395,
    question: `Montelukast improves asthma symptoms primarily by:`,
    options: [`Bronchodilation via β₂ activation`, `Inhibiting phosphodiesterase`, `Blocking leukotriene-mediated bronchoconstriction`, `Reducing histamine release`],
    correct: 2,
    explanation: ``
  },
  {
    id: 396,
    question: `Which anticancer agent is cell-cycle nonspecific?`,
    options: [`Methotrexate`, `Vincristine`, `Cyclophosphamide`, `Cytarabine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 397,
    question: `A major long-term complication of many chemotherapeutic agents is:`,
    options: [`Immediate hypersensitivity`, `Secondary malignancies`, `Hyperglycemia`, `Hypertension`],
    correct: 1,
    explanation: ``
  },
  {
    id: 398,
    question: `Which antifungal drug is preferred for invasive aspergillosis?`,
    options: [`Fluconazole`, `Amphotericin B or voriconazole`, `Nystatin`, `Ketoconazole`],
    correct: 1,
    explanation: ``
  },
  {
    id: 399,
    question: `The rationale for inhalational delivery of asthma drugs is best explained by:`,
    options: [`Reduced efficacy`, `Faster systemic absorption`, `High local effect with fewer systemic side effects`, `Longer duration of action`],
    correct: 2,
    explanation: ``
  },
  {
    id: 400,
    question: `The single most important determinant of toxicity in cancer chemotherapy is:`,
    options: [`Route of administration`, `Tumor size`, `Lack of selectivity for cancer cells`, `Drug cost`],
    correct: 2,
    explanation: ``
  },
  {
    id: 401,
    question: `Cancer chemotherapy preferentially damages malignant cells because these cells characteristically:`,
    options: [`Have higher oxygen requirements`, `Divide more rapidly than most normal cells`, `Lack DNA repair mechanisms entirely`, `Have increased drug uptake only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 402,
    question: `Cell-cycle–nonspecific anticancer drugs are distinguished by their ability to:`,
    options: [`Act only during S phase`, `Kill cells regardless of cell-cycle phase`, `Require actively dividing cells`, `Act only during mitosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 403,
    question: `Alkylating agents exert cytotoxic effects primarily by:`,
    options: [`Inhibiting RNA polymerase`, `Causing DNA strand breaks and cross-linking`, `Blocking microtubule assembly`, `Inhibiting thymidylate synthase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 404,
    question: `Which alkylating agent is most strongly associated with hemorrhagic cystitis due to acrolein formation?`,
    options: [`Busulfan`, `Carmustine`, `Cyclophosphamide`, `Chlorambucil`],
    correct: 2,
    explanation: ``
  },
  {
    id: 405,
    question: `The drug mesna is co-administered with cyclophosphamide to prevent:`,
    options: [`Nephrotoxicity`, `Hemorrhagic cystitis`, `Bone marrow suppression`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 406,
    question: `Antimetabolites are cell-cycle specific drugs that primarily exert their effects during:`,
    options: [`G₁ phase`, `S phase`, `G₂ phase`, `M phase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 407,
    question: `Methotrexate inhibits DNA synthesis by blocking:`,
    options: [`Thymidylate synthase`, `Dihydrofolate reductase`, `DNA polymerase`, `Ribonucleotide reductase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 408,
    question: `Leucovorin rescue following high-dose methotrexate therapy works by:`,
    options: [`Increasing methotrexate clearance`, `Reversing folate depletion in normal cells`, `Enhancing tumor toxicity`, `Preventing drug resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 409,
    question: `5-Fluorouracil produces cytotoxicity primarily by inhibition of:`,
    options: [`DNA polymerase`, `Thymidylate synthase`, `Topoisomerase I`, `Dihydrofolate reductase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 410,
    question: `Which anticancer drug is an analog of cytidine and is widely used in leukemias?`,
    options: [`Methotrexate`, `Cytarabine`, `Vincristine`, `Bleomycin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 411,
    question: `Vinca alkaloids exert their antineoplastic effect by:`,
    options: [`Stabilizing microtubules`, `Inhibiting microtubule polymerization`, `Blocking DNA synthesis`, `Cross-linking DNA strands`],
    correct: 1,
    explanation: ``
  },
  {
    id: 412,
    question: `The dose-limiting toxicity of vincristine is:`,
    options: [`Bone marrow suppression`, `Cardiotoxicity`, `Peripheral neuropathy`, `Nephrotoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 413,
    question: `Taxanes such as paclitaxel differ from vinca alkaloids because taxanes:`,
    options: [`Inhibit DNA synthesis`, `Stabilize microtubules and prevent depolymerization`, `Act in S phase`, `Are cell-cycle nonspecific`],
    correct: 1,
    explanation: ``
  },
  {
    id: 414,
    question: `Anthracyclines such as doxorubicin cause dose-dependent cardiotoxicity primarily due to:`,
    options: [`Calcium channel blockade`, `Free radical–mediated myocardial damage`, `Coronary vasospasm`, `Direct mitochondrial inhibition`],
    correct: 1,
    explanation: ``
  },
  {
    id: 415,
    question: `Dexrazoxane is administered with doxorubicin to:`,
    options: [`Enhance antitumor efficacy`, `Prevent cardiotoxicity`, `Reduce myelosuppression`, `Prevent nausea`],
    correct: 1,
    explanation: ``
  },
  {
    id: 416,
    question: `Bleomycin is unique among anticancer drugs because it causes minimal bone marrow suppression but significant:`,
    options: [`Nephrotoxicity`, `Neurotoxicity`, `Pulmonary fibrosis`, `Cardiotoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 417,
    question: `Platinum compounds such as cisplatin exert cytotoxicity by:`,
    options: [`Inhibiting topoisomerase II`, `Forming DNA cross-links`, `Blocking microtubules`, `Inhibiting folate metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 418,
    question: `The most characteristic toxicity of cisplatin is:`,
    options: [`Hepatotoxicity`, `Ototoxicity and nephrotoxicity`, `Pulmonary fibrosis`, `Cardiac arrhythmias`],
    correct: 1,
    explanation: ``
  },
  {
    id: 419,
    question: `Resistance to alkylating agents most commonly develops due to:`,
    options: [`Increased drug efflux`, `Enhanced DNA repair mechanisms`, `Reduced drug absorption`, `Increased cell-cycle arrest`],
    correct: 1,
    explanation: ``
  },
  {
    id: 420,
    question: `Hormonal anticancer therapy is most effective in tumors that:`,
    options: [`Have high mitotic rates`, `Express specific hormone receptors`, `Are poorly differentiated`, `Have p53 mutations`],
    correct: 1,
    explanation: ``
  },
  {
    id: 421,
    question: `Tamoxifen produces antitumor effects in breast cancer by:`,
    options: [`Inhibiting aromatase`, `Acting as an estrogen receptor antagonist in breast tissue`, `Blocking progesterone receptors`, `Suppressing gonadotropin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 422,
    question: `A serious long-term adverse effect associated with tamoxifen therapy is:`,
    options: [`Osteoporosis`, `Endometrial carcinoma`, `Severe cardiomyopathy`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 423,
    question: `Aromatase inhibitors such as anastrozole reduce estrogen levels by:`,
    options: [`Blocking estrogen receptors`, `Inhibiting conversion of androgens to estrogens`, `Increasing estrogen metabolism`, `Suppressing pituitary gonadotropins`],
    correct: 1,
    explanation: ``
  },
  {
    id: 424,
    question: `Which anticancer drug inhibits BCR-ABL tyrosine kinase and revolutionized CML treatment?`,
    options: [`Erlotinib`, `Imatinib`, `Rituximab`, `Trastuzumab`],
    correct: 1,
    explanation: ``
  },
  {
    id: 425,
    question: `Monoclonal antibodies used in cancer therapy primarily act by:`,
    options: [`Alkylating DNA`, `Blocking specific growth factor receptors or ligands`, `Inhibiting folate metabolism`, `Arresting mitosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 426,
    question: `Trastuzumab is specifically indicated in breast cancers that overexpress:`,
    options: [`EGFR`, `HER2/neu`, `BCR-ABL`, `VEGF`],
    correct: 1,
    explanation: ``
  },
  {
    id: 427,
    question: `A major toxicity associated with trastuzumab is:`,
    options: [`Bone marrow suppression`, `Nephrotoxicity`, `Cardiotoxicity`, `Pulmonary fibrosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 428,
    question: `Tumor lysis syndrome occurs due to:`,
    options: [`Direct drug toxicity`, `Rapid destruction of malignant cells releasing intracellular contents`, `Immune-mediated tumor destruction`, `Hepatic failure`],
    correct: 1,
    explanation: `ar contents`
  },
  {
    id: 429,
    question: `Which metabolic abnormality is characteristic of tumor lysis syndrome?`,
    options: [`Hypokalemia`, `Hyperuricemia`, `Hypocalcemia only`, `Metabolic alkalosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 430,
    question: `Allopurinol is used prophylactically in chemotherapy patients to prevent:`,
    options: [`Nephrotoxicity`, `Tumor lysis–associated hyperuricemia`, `Bone marrow suppression`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 431,
    question: `Multidrug resistance in cancer chemotherapy is most commonly mediated by:`,
    options: [`Decreased tumor perfusion`, `P-glycoprotein–mediated drug efflux`, `Increased drug activation`, `Reduced apoptosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 432,
    question: `Combination chemotherapy is superior to monotherapy primarily because it:`,
    options: [`Reduces cost`, `Targets multiple pathways and delays resistance`, `Eliminates toxicity`, `Shortens treatment duration only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 433,
    question: `Which tissue is LEAST affected by chemotherapy-induced toxicity?`,
    options: [`Bone marrow`, `Gastrointestinal epithelium`, `Hair follicles`, `Cardiac muscle`],
    correct: 3,
    explanation: ``
  },
  {
    id: 434,
    question: `Myelosuppression is a dose-limiting toxicity for most anticancer drugs because bone marrow cells:`,
    options: [`Lack drug efflux pumps`, `Have high proliferative activity`, `Have low DNA repair capacity`, `Accumulate drug selectively`],
    correct: 1,
    explanation: ``
  },
  {
    id: 435,
    question: `Which anticancer drug is most associated with secondary leukemia as a delayed complication?`,
    options: [`Methotrexate`, `Alkylating agents`, `Vincristine`, `Bleomycin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 436,
    question: `The term “therapeutic index” in cancer chemotherapy is narrow primarily because:`,
    options: [`Tumor cells are resistant`, `Normal rapidly dividing tissues are also damaged`, `Drugs have poor absorption`, `Resistance develops rapidly`],
    correct: 1,
    explanation: ``
  },
  {
    id: 437,
    question: `Which anticancer agent inhibits topoisomerase II?`,
    options: [`Etoposide`, `Methotrexate`, `Cytarabine`, `Vinblastine`],
    correct: 0,
    explanation: ``
  },
  {
    id: 438,
    question: `A patient receiving etoposide is at increased risk of:`,
    options: [`Cardiotoxicity`, `Secondary leukemia`, `Pulmonary fibrosis`, `Hemorrhagic cystitis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 439,
    question: `Which factor most strongly predicts response to targeted cancer therapy?`,
    options: [`Tumor size`, `Expression of specific molecular targets`, `Patient age`, `Drug dose`],
    correct: 1,
    explanation: ``
  },
  {
    id: 440,
    question: `Resistance to methotrexate may occur due to:`,
    options: [`Reduced renal excretion`, `Increased dihydrofolate reductase production`, `Decreased folate intake`, `Increased protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 441,
    question: `Which anticancer drug is cell-cycle specific for M phase?`,
    options: [`Cyclophosphamide`, `Vincristine`, `Methotrexate`, `Cisplatin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 442,
    question: `A very difficult principle: log-kill hypothesis states that chemotherapy:`,
    options: [`Kills a constant number of cancer cells`, `Kills a constant fraction of cancer cells`, `Eliminates all cancer cells at once`, `Acts only on dormant cells`],
    correct: 1,
    explanation: ``
  },
  {
    id: 443,
    question: `Dose-limiting toxicity refers to:`,
    options: [`Maximum tolerated dose causing tumor kill`, `Adverse effect preventing further dose escalation`, `Drug resistance threshold`, `Therapeutic index`],
    correct: 1,
    explanation: ``
  },
  {
    id: 444,
    question: `Which anticancer agent causes alopecia by damaging:`,
    options: [`Hair follicle stem cells`, `Sebaceous glands`, `Dermal collagen`, `Melanocytes`],
    correct: 0,
    explanation: ``
  },
  {
    id: 445,
    question: `Supportive use of colony-stimulating factors in chemotherapy aims to:`,
    options: [`Enhance tumor kill`, `Reduce neutropenia`, `Prevent nausea`, `Reverse resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 446,
    question: `Which anticancer drug is most associated with mucositis due to GI epithelial damage?`,
    options: [`Vincristine`, `Methotrexate`, `Bleomycin`, `Cisplatin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 447,
    question: `The primary determinant of schedule dependency in chemotherapy is:`,
    options: [`Drug cost`, `Cell-cycle specificity`, `Route of administration`, `Tumor vascularity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 448,
    question: `Which concept best explains intermittent dosing schedules in chemotherapy?`,
    options: [`Improve absorption`, `Allow normal tissue recovery`, `Reduce drug interactions`, `Increase resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 449,
    question: `Chemotherapy-induced nausea and vomiting is best prevented by:`,
    options: [`Anticholinergics`, `Dopamine antagonists only`, `5-HT₃ receptor antagonists`, `Opioid antagonists`],
    correct: 2,
    explanation: ``
  },
  {
    id: 450,
    question: `Single most important factor limiting the curative potential of most cytotoxic anticancer drugs is:`,
    options: [`Poor patient compliance`, `Drug toxicity to normal tissues`, `Inadequate drug absorption`, `Tumor vascularity`],
    correct: 1,
    explanation: `Respiratory Pharma`
  },
  {
    id: 451,
    question: `The first-line controller therapy for persistent asthma according to standard respiratory pharmacology principles is:`,
    options: [`Short-acting β₂-agonists`, `Long-acting β₂-agonists alone`, `Inhaled glucocorticoids`, `Theophylline`],
    correct: 2,
    explanation: ``
  },
  {
    id: 452,
    question: `The primary role of short-acting β₂-agonists such as albuterol in asthma is:`,
    options: [`Long-term inflammation control`, `Prevention of airway remodeling`, `Rapid relief of bronchoconstriction`, `Reduction of mucus secretion`],
    correct: 2,
    explanation: ``
  },
  {
    id: 453,
    question: `In COPD, the most important first-line pharmacologic therapy is:`,
    options: [`Inhaled corticosteroids alone`, `Short-acting β₂-agonists only`, `Bronchodilators (β₂-agonists or antimuscarinics)`, `Leukotriene modifiers`],
    correct: 2,
    explanation: ``
  },
  {
    id: 454,
    question: `β₂-Adrenergic agonists produce bronchodilation primarily by:`,
    options: [`Blocking muscarinic receptors`, `Increasing intracellular cAMP in bronchial smooth muscle`, `Inhibiting leukotriene synthesis`, `Reducing mucus secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 455,
    question: `A major contraindication to nonselective β-agonists in respiratory disease is:`,
    options: [`Hypertension`, `Diabetes mellitus`, `Bronchial asthma`, `Cardiac arrhythmias`],
    correct: 2,
    explanation: ``
  },
  {
    id: 456,
    question: `The bronchodilator reversibility test using albuterol is primarily used to:`,
    options: [`Diagnose restrictive lung disease`, `Differentiate asthma from COPD`, `Measure lung diffusion capacity`, `Assess steroid responsiveness`],
    correct: 1,
    explanation: ``
  },
  {
    id: 457,
    question: `A positive bronchodilator reversibility test is defined as:`,
    options: [`Any improvement in symptoms`, `≥12% and ≥200 mL increase in FEV₁`, `Reduced airway resistance`, `Normalization of peak flow`],
    correct: 1,
    explanation: ``
  },
  {
    id: 458,
    question: `Muscarinic antagonists such as ipratropium produce bronchodilation by:`,
    options: [`Blocking M1 receptors in CNS`, `Inhibiting acetylcholine at M3 receptors`, `Increasing β₂ receptor sensitivity`, `Reducing histamine release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 459,
    question: `Muscarinic antagonists are particularly effective in:`,
    options: [`Acute severe asthma only`, `Exercise-induced asthma`, `Chronic obstructive pulmonary disease`, `Allergic rhinitis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 460,
    question: `A common side effect of inhaled antimuscarinic drugs is:`,
    options: [`Sedation`, `Dry mouth`, `Hypotension`, `Bradycardia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 461,
    question: `Methacholine challenge test is used primarily to:`,
    options: [`Assess bronchodilator response`, `Diagnose COPD`, `Detect airway hyperresponsiveness`, `Measure lung volumes`],
    correct: 2,
    explanation: ``
  },
  {
    id: 462,
    question: `Methacholine induces bronchoconstriction by:`,
    options: [`Blocking β₂ receptors`, `Activating M3 muscarinic receptors`, `Releasing histamine`, `Inhibiting cAMP`],
    correct: 1,
    explanation: ``
  },
  {
    id: 463,
    question: `A positive methacholine challenge test is indicated by:`,
    options: [`Increased FEV₁`, `Reduced peak expiratory flow`, `≥20% fall in FEV₁`, `Increased lung compliance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 464,
    question: `Inhaled glucocorticoids improve asthma control mainly by:`,
    options: [`Immediate bronchodilation`, `Reducing airway inflammation`, `Blocking leukotriene receptors`, `Enhancing β₂ receptor signaling`],
    correct: 1,
    explanation: ``
  },
  {
    id: 465,
    question: `Long-term inhaled glucocorticoid use is most commonly associated with:`,
    options: [`Hypertension`, `Oral candidiasis`, `Renal failure`, `Hyperkalemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 466,
    question: `Systemic glucocorticoids suppress ACTH secretion primarily by:`,
    options: [`Enhancing CRH release`, `Negative feedback at hypothalamus and pituitary`, `Inhibiting adrenal enzymes`, `Blocking aldosterone receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 467,
    question: `Increased gluconeogenesis induced by glucocorticoids leads to:`,
    options: [`Hypoglycemia`, `Hyperglycemia`, `Lactic acidosis`, `Ketosis only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 468,
    question: `Chronic glucocorticoid therapy causes osteoporosis primarily by:`,
    options: [`Increased vitamin D synthesis`, `Reduced osteoblast activity and increased bone resorption`, `Increased calcium absorption`, `Enhanced parathyroid hormone suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 469,
    question: `Electrolyte imbalance caused by glucocorticoids includes:`,
    options: [`Hyponatremia and hyperkalemia`, `Hyperkalemia and acidosis`, `Sodium retention and hypokalemic alkalosis`, `Calcium retention`],
    correct: 2,
    explanation: ``
  },
  {
    id: 470,
    question: `Growth suppression in children receiving long-term glucocorticoids occurs due to:`,
    options: [`Reduced appetite`, `Direct inhibition of growth hormone action`, `Reduced thyroid hormone synthesis`, `Renal calcium loss only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 471,
    question: `Delayed wound healing with glucocorticoids is due to:`,
    options: [`Increased fibroblast activity`, `Suppression of inflammatory and immune responses`, `Increased collagen synthesis`, `Enhanced angiogenesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 472,
    question: `Theophylline produces bronchodilation primarily by:`,
    options: [`β₂ receptor activation`, `Inhibiting phosphodiesterase`, `Blocking muscarinic receptors`, `Reducing leukotriene synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 473,
    question: `A major limitation of theophylline therapy is its:`,
    options: [`Poor oral bioavailability`, `Narrow therapeutic index`, `Short duration of action`, `Low efficacy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 474,
    question: `Theophylline toxicity commonly presents with:`,
    options: [`Bradycardia and hypotension`, `Seizures and cardiac arrhythmias`, `Renal failure`, `Respiratory depression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 475,
    question: `Cimetidine increases theophylline toxicity by:`,
    options: [`Increasing renal excretion`, `Inducing CYP450 enzymes`, `Inhibiting CYP450 metabolism`, `Reducing protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 476,
    question: `Erythromycin increases plasma theophylline levels because it:`,
    options: [`Enhances absorption`, `Inhibits hepatic CYP450 enzymes`, `Displaces protein binding`, `Reduces renal clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 477,
    question: `Fluoroquinolones increase theophylline toxicity primarily by:`,
    options: [`Enzyme induction`, `CYP450 inhibition`, `Increasing bioavailability`, `Enhancing bronchodilation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 478,
    question: `Aminophylline is chemically best described as:`,
    options: [`A β₂ agonist`, `A methylxanthine salt of theophylline`, `A leukotriene antagonist`, `A corticosteroid`],
    correct: 1,
    explanation: ``
  },
  {
    id: 479,
    question: `The role of IV aminophylline in status asthmaticus is:`,
    options: [`First-line therapy`, `Rapid bronchodilation when other therapies fail`, `Replacement for corticosteroids`, `Prevention of airway inflammation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 480,
    question: `First-line drugs in status asthmaticus include:`,
    options: [`Theophylline and leukotriene antagonists`, `Inhaled β₂-agonists and systemic glucocorticoids`, `Antimuscarinics only`, `Antibiotics`],
    correct: 1,
    explanation: ``
  },
  {
    id: 481,
    question: `A major complication of status asthmaticus is:`,
    options: [`Metabolic alkalosis`, `Respiratory failure`, `Hypertension`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 482,
    question: `Leukotriene D₄ receptor blockers include:`,
    options: [`Zileuton only`, `Montelukast and zafirlukast`, `Albuterol and salmeterol`, `Ipratropium and tiotropium`],
    correct: 1,
    explanation: ``
  },
  {
    id: 483,
    question: `Montelukast improves asthma symptoms by:`,
    options: [`Direct bronchodilation`, `Blocking leukotriene-mediated bronchoconstriction`, `Inhibiting mast cell degranulation`, `Reducing IgE synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 484,
    question: `Zileuton differs from montelukast because it:`,
    options: [`Blocks leukotriene receptors`, `Inhibits 5-lipoxygenase`, `Is a β₂ agonist`, `Has no hepatic toxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 485,
    question: `Zileuton is used mainly as:`,
    options: [`Monotherapy in acute asthma`, `Rescue therapy`, `Adjunct to inhaled corticosteroids`, `Treatment for COPD exacerbation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 486,
    question: `A significant adverse effect of zileuton is:`,
    options: [`Nephrotoxicity`, `Hepatotoxicity`, `Ototoxicity`, `Bone marrow suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 487,
    question: `Long-acting β₂-agonists should NOT be used alone in asthma because they:`,
    options: [`Cause severe hypotension`, `Increase airway inflammation`, `Mask symptoms without controlling inflammation`, `Are ineffective bronchodilators`],
    correct: 2,
    explanation: ``
  },
  {
    id: 488,
    question: `Tiotropium differs from ipratropium primarily by:`,
    options: [`Shorter duration of action`, `CNS penetration`, `Longer duration of bronchodilation`, `β₂ receptor activity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 489,
    question: `The mineralocorticoid activity of synthetic glucocorticoids is highest with:`,
    options: [`Dexamethasone`, `Betamethasone`, `Hydrocortisone`, `Prednisolone`],
    correct: 2,
    explanation: ``
  },
  {
    id: 490,
    question: `Which synthetic glucocorticoid has the highest glucocorticoid potency with negligible mineralocorticoid effect?`,
    options: [`Hydrocortisone`, `Prednisolone`, `Dexamethasone`, `Fludrocortisone`],
    correct: 2,
    explanation: ``
  },
  {
    id: 491,
    question: `Chronic glucocorticoid therapy causes adrenal suppression due to:`,
    options: [`Aldosterone inhibition`, `Suppression of ACTH secretion`, `Direct adrenal necrosis`, `Reduced cortisol clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 492,
    question: `Abrupt withdrawal of long-term glucocorticoid therapy may result in:`,
    options: [`Hyperaldosteronism`, `Acute adrenal insufficiency`, `Hypertension`, `Hyperglycemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 493,
    question: `Glucocorticoids are contraindicated or used with caution in patients with:`,
    options: [`Asthma`, `Peptic ulcer disease`, `Allergic rhinitis`, `Status asthmaticus`],
    correct: 1,
    explanation: ``
  },
  {
    id: 494,
    question: `A very difficult concept: β₂-agonist–induced hypokalemia occurs due to:`,
    options: [`Renal potassium loss`, `Increased aldosterone secretion`, `Intracellular shift of potassium`, `Reduced potassium intake`],
    correct: 2,
    explanation: ``
  },
  {
    id: 495,
    question: `The preferred route of administration for chronic asthma control is:`,
    options: [`Oral`, `Intravenous`, `Inhalational`, `Subcutaneous`],
    correct: 2,
    explanation: ``
  },
  {
    id: 496,
    question: `COPD differs from asthma in pharmacologic response because COPD:`,
    options: [`Shows complete bronchodilator reversibility`, `Is primarily inflammatory`, `Has limited reversibility and responds better to antimuscarinics`, `Is IgE mediated`],
    correct: 2,
    explanation: `antimuscarinics`
  },
  {
    id: 497,
    question: `A key reason inhaled therapy is preferred over systemic therapy in asthma is:`,
    options: [`Faster metabolism`, `Reduced systemic side effects`, `Longer half-life`, `Higher potency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 498,
    question: `Status asthmaticus is best defined as:`,
    options: [`Mild intermittent asthma`, `Asthma responsive to inhalers`, `Life-threatening asthma unresponsive to standard therapy`, `Exercise-induced asthma`],
    correct: 2,
    explanation: ``
  },
  {
    id: 499,
    question: `The most important life-threatening complication of β₂-agonist overuse is:`,
    options: [`Hypertension`, `Hypoglycemia`, `Cardiac arrhythmias`, `Pulmonary fibrosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 500,
    question: `The single most effective long-term strategy to reduce asthma mortality is:`,
    options: [`Frequent use of short-acting β₂-agonists`, `Early and regular use of inhaled glucocorticoids`, `Routine oral theophylline`, `Antibiotic prophylaxis`],
    correct: 1,
    explanation: `Gastro Pharma`
  },
  {
    id: 501,
    question: `Bulk-forming laxatives relieve constipation primarily by:`,
    options: [`Stimulating enteric nerves directly`, `Increasing stool water content and fecal mass`, `Inhibiting intestinal water absorption`, `Causing intestinal irritation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 502,
    question: `Which agent is classified as a bulk-forming laxative?`,
    options: [`Senna`, `Bisacodyl`, `Psyllium`, `Docusate`],
    correct: 2,
    explanation: ``
  },
  {
    id: 503,
    question: `Osmotic laxatives produce bowel evacuation mainly by:`,
    options: [`Increasing colonic motility via nerve stimulation`, `Drawing water into the intestinal lumen`, `Softening stool by surfactant action`, `Inhibiting sodium absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 504,
    question: `Which laxative is commonly used for rapid bowel evacuation before procedures?`,
    options: [`Lactulose`, `Polyethylene glycol`, `Docusate`, `Psyllium`],
    correct: 1,
    explanation: ``
  },
  {
    id: 505,
    question: `A characteristic adverse effect of stimulant laxatives with chronic use is:`,
    options: [`Hypokalemia and cathartic colon`, `Hypernatremia`, `Intestinal obstruction`, `Hepatotoxicity`],
    correct: 0,
    explanation: ``
  },
  {
    id: 506,
    question: `Stool softeners such as docusate act by:`,
    options: [`Increasing peristalsis`, `Lowering surface tension and allowing water penetration into stool`, `Inhibiting electrolyte absorption`, `Increasing bile secretion`],
    correct: 1,
    explanation: `to stool`
  },
  {
    id: 507,
    question: `Which laxative is most appropriate in patients with hepatic encephalopathy?`,
    options: [`Senna`, `Bisacodyl`, `Lactulose`, `Psyllium`],
    correct: 2,
    explanation: ``
  },
  {
    id: 508,
    question: `Lactulose improves hepatic encephalopathy primarily by:`,
    options: [`Increasing ammonia excretion by kidneys`, `Trapping ammonia in the colon as NH₄⁺`, `Enhancing hepatic metabolism of ammonia`, `Inhibiting ammonia production in liver`],
    correct: 1,
    explanation: ``
  },
  {
    id: 509,
    question: `Which antihelminthic drug acts by inhibiting microtubule polymerization in parasites?`,
    options: [`Praziquantel`, `Albendazole`, `Ivermectin`, `Diethylcarbamazine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 510,
    question: `A common adverse effect of albendazole with prolonged use is:`,
    options: [`Ototoxicity`, `Bone marrow suppression`, `Hepatotoxicity`, `Nephrotoxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 511,
    question: `Praziquantel is the drug of choice for treatment of:`,
    options: [`Ascariasis`, `Enterobiasis`, `Schistosomiasis`, `Strongyloidiasis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 512,
    question: `The mechanism of action of praziquantel involves:`,
    options: [`Inhibition of folate synthesis`, `Increased calcium permeability leading to paralysis`, `Inhibition of glucose uptake`, `Microtubule disruption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 513,
    question: `A notable adverse effect of praziquantel is:`,
    options: [`Severe neutropenia`, `Dizziness and headache`, `Ototoxicity`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 514,
    question: `5-HT₃ receptor antagonists are most effective in preventing:`,
    options: [`Motion sickness`, `Anticipatory vomiting`, `Chemotherapy-induced acute vomiting`, `Gastroparesis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 515,
    question: `Ondansetron prevents chemotherapy-induced nausea and vomiting by blocking 5-HT₃ receptors in the:`,
    options: [`Hypothalamus only`, `Enteric nervous system and chemoreceptor trigger zone`, `Vestibular apparatus`, `Gastric parietal cells`],
    correct: 1,
    explanation: ``
  },
  {
    id: 516,
    question: `A dose-limiting adverse effect of 5-HT₃ antagonists is:`,
    options: [`Sedation`, `Extrapyramidal symptoms`, `QT interval prolongation`, `Severe hypotension`],
    correct: 2,
    explanation: ``
  },
  {
    id: 517,
    question: `Dopamine D₂ receptor antagonists used as antiemetics include:`,
    options: [`Ondansetron`, `Metoclopramide`, `Dimercaprol`, `Loperamide`],
    correct: 1,
    explanation: ``
  },
  {
    id: 518,
    question: `The prokinetic effect of metoclopramide is primarily due to:`,
    options: [`Muscarinic receptor activation`, `Dopamine D₂ receptor blockade in the gut`, `β₂ receptor stimulation`, `Histamine receptor antagonism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 519,
    question: `Metoclopramide improves gastric emptying mainly by:`,
    options: [`Relaxing gastric fundus`, `Increasing lower esophageal sphincter tone`, `Reducing gastric acid secretion`, `Inhibiting vagal tone`],
    correct: 1,
    explanation: ``
  },
  {
    id: 520,
    question: `A serious complication of dopamine antagonist antiemetics is:`,
    options: [`Hepatotoxicity`, `Extrapyramidal symptoms`, `Nephrotoxicity`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 521,
    question: `Acute dystonic reactions caused by metoclopramide are best managed with:`,
    options: [`Naloxone`, `Benzodiazepines only`, `Anticholinergic drugs such as benztropine`, `Corticosteroids`],
    correct: 2,
    explanation: ``
  },
  {
    id: 522,
    question: `Which anti-diarrheal drug acts by activating μ-opioid receptors in the gut?`,
    options: [`Diphenoxylate`, `Bismuth subsalicylate`, `Loperamide`, `Octreotide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 523,
    question: `Loperamide is considered safer than other opioid antidiarrheals because it:`,
    options: [`Is rapidly metabolized in liver`, `Does not cross the blood–brain barrier significantly`, `Has no opioid activity`, `Enhances intestinal secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 524,
    question: `In cholera-endemic regions, loperamide is advantageous because it:`,
    options: [`Has antimicrobial action`, `Reduces intestinal motility without CNS effects`, `Prevents dehydration completely`, `Shortens disease duration`],
    correct: 1,
    explanation: ``
  },
  {
    id: 525,
    question: `Which adverse effect is most associated with excessive use of loperamide?`,
    options: [`Respiratory depression`, `Cardiac arrhythmias`, `Renal failure`, `Hepatic encephalopathy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 526,
    question: `Antacids relieve dyspepsia primarily by:`,
    options: [`Inhibiting proton pumps`, `Neutralizing gastric acid`, `Blocking histamine receptors`, `Coating gastric mucosa`],
    correct: 1,
    explanation: ``
  },
  {
    id: 527,
    question: `Aluminum-containing antacids commonly cause:`,
    options: [`Diarrhea`, `Constipation`, `Metabolic acidosis`, `Hypokalemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 528,
    question: `Magnesium-containing antacids are associated with:`,
    options: [`Constipation`, `Diarrhea`, `Hypocalcemia`, `Metabolic alkalosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 529,
    question: `Calcium-containing antacids may cause:`,
    options: [`Metabolic acidosis`, `Hyperkalemia`, `Milk-alkali syndrome with alkalosis`, `Diarrhea only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 530,
    question: `A major limitation of chronic antacid use is:`,
    options: [`Poor efficacy`, `Drug–drug interactions and electrolyte imbalance`, `Development of tolerance`, `Carcinogenicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 531,
    question: `Anti–TNF-α agents used in inflammatory bowel disease act by:`,
    options: [`Inhibiting prostaglandin synthesis`, `Neutralizing tumor necrosis factor-α`, `Blocking interleukin-2 receptors`, `Enhancing mucosal healing only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 532,
    question: `Which anti–TNF-α agent is commonly used in Crohn disease?`,
    options: [`Cyclosporine`, `Infliximab`, `Azathioprine`, `Mesalamine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 533,
    question: `Before initiating anti–TNF-α therapy, patients must be screened for:`,
    options: [`Hypertension`, `Diabetes mellitus`, `Latent tuberculosis`, `Renal failure`],
    correct: 2,
    explanation: ``
  },
  {
    id: 534,
    question: `Reactivation of which infection is a major concern with anti–TNF-α therapy?`,
    options: [`Hepatitis A`, `Tuberculosis`, `Influenza`, `Malaria`],
    correct: 1,
    explanation: ``
  },
  {
    id: 535,
    question: `A very difficult concept: anti–TNF-α therapy increases infection risk because TNF-α is essential for:`,
    options: [`Antibody production`, `Granuloma maintenance and macrophage activation`, `Neutrophil chemotaxis only`, `Complement activation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 536,
    question: `Monitoring during long-term anti–TNF-α therapy should include:`,
    options: [`Serum calcium only`, `Complete blood count and infection surveillance`, `Urine electrolytes`, `Thyroid function tests`],
    correct: 1,
    explanation: ``
  },
  {
    id: 537,
    question: `Loss of response to anti–TNF-α therapy in IBD is most commonly due to:`,
    options: [`Drug degradation in gut`, `Development of anti-drug antibodies`, `Increased renal clearance`, `Poor oral absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 538,
    question: `Which antiemetic drug also exhibits prokinetic activity?`,
    options: [`Ondansetron`, `Promethazine`, `Metoclopramide`, `Scopolamine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 539,
    question: `Antidiarrheal opioids should be avoided in children with infectious diarrhea because of risk of:`,
    options: [`Hypoglycemia`, `Paralytic ileus and toxic megacolon`, `Renal failure`, `Hepatic toxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 540,
    question: `A very difficult integration question: chronic laxative abuse most commonly leads to:`,
    options: [`Hypernatremia`, `Metabolic acidosis`, `Hypokalemic metabolic alkalosis`, `Hypercalcemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 541,
    question: `Which antihelminthic drug is contraindicated in ocular cysticercosis?`,
    options: [`Albendazole`, `Praziquantel`, `Ivermectin`, `Niclosamide`],
    correct: 1,
    explanation: ``
  },
  {
    id: 542,
    question: `The primary reason for combining laxatives of different classes is to:`,
    options: [`Increase patient compliance`, `Enhance efficacy while reducing adverse effects`, `Shorten onset time only`, `Prevent tolerance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 543,
    question: `Dopamine antagonist–induced hyperprolactinemia occurs due to:`,
    options: [`Increased estrogen synthesis`, `Reduced dopamine inhibition of prolactin release`, `Direct pituitary stimulation`, `Enhanced serotonin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 544,
    question: `Which anti-diarrheal drug has additional antisecretory action against enterotoxins?`,
    options: [`Loperamide`, `Bismuth subsalicylate`, `Diphenoxylate`, `Codeine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 545,
    question: `Bismuth subsalicylate is avoided in children because it:`,
    options: [`Causes nephrotoxicity`, `Is associated with Reye syndrome`, `Causes severe hypoglycemia`, `Leads to cardiac toxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 546,
    question: `A patient on metoclopramide develops tardive dyskinesia; the most appropriate management is:`,
    options: [`Increase dose`, `Switch to ondansetron`, `Add benzodiazepine`, `Continue therapy with monitoring`],
    correct: 1,
    explanation: ``
  },
  {
    id: 547,
    question: `Which laxative class is safest for long-term use in chronic constipation?`,
    options: [`Stimulant laxatives`, `Bulk-forming laxatives`, `Saline laxatives`, `Lubricant laxatives`],
    correct: 1,
    explanation: ``
  },
  {
    id: 548,
    question: `The main advantage of loperamide in cholera-endemic areas is that it:`,
    options: [`Reduces stool volume without affecting pathogen clearance`, `Eliminates Vibrio cholerae`, `Prevents electrolyte loss entirely`, `Shortens incubation period`],
    correct: 0,
    explanation: ``
  },
  {
    id: 549,
    question: `Which condition is a contraindication to anti–TNF-α therapy?`,
    options: [`Mild asthma`, `Latent tuberculosis without treatment`, `Iron deficiency anemia`, `Controlled hypertension`],
    correct: 1,
    explanation: ``
  },
  {
    id: 550,
    question: `The single most important safety step before initiating anti–TNF-α therapy in inflammatory bowel disease is:`,
    options: [`Baseline colonoscopy`, `Screening for latent infections, especially tuberculosis`, `Checking serum electrolytes`, `Assessing nutritional status`],
    correct: 1,
    explanation: `Cardiac and Renal Pharma`
  },
  {
    id: 551,
    question: `Diuretics are defined pharmacologically as drugs that:`,
    options: [`Increase cardiac output`, `Increase urine volume by enhancing renal excretion of sodium and water`, `Reduce plasma osmolality`, `Inhibit antidiuretic hormone`],
    correct: 1,
    explanation: `um and water`
  },
  {
    id: 552,
    question: `Loop diuretics exert their primary action in the nephron at the:`,
    options: [`Proximal convoluted tubule`, `Distal convoluted tubule`, `Thick ascending limb of loop of Henle`, `Collecting duct`],
    correct: 2,
    explanation: ``
  },
  {
    id: 553,
    question: `Furosemide produces diuresis by inhibiting:`,
    options: [`Na⁺/Cl⁻ cotransporter`, `Na⁺/K⁺/2Cl⁻ cotransporter`, `Na⁺/H⁺ exchanger`, `Aldosterone receptor`],
    correct: 1,
    explanation: ``
  },
  {
    id: 554,
    question: `A characteristic electrolyte abnormality caused by loop diuretics is:`,
    options: [`Hypercalcemia`, `Hypocalcemia`, `Hyperkalemia`, `Metabolic acidosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 555,
    question: `The diuretics of choice for treatment of acute pulmonary edema are:`,
    options: [`Thiazides`, `Potassium-sparing diuretics`, `Loop diuretics`, `Osmotic diuretics`],
    correct: 2,
    explanation: ``
  },
  {
    id: 556,
    question: `Thiazide diuretics primarily inhibit sodium reabsorption in the:`,
    options: [`Proximal tubule`, `Thick ascending limb`, `Distal convoluted tubule`, `Collecting duct`],
    correct: 2,
    explanation: ``
  },
  {
    id: 557,
    question: `Which thiazide effect makes these drugs useful in preventing renal calcium stones?`,
    options: [`Increased calcium excretion`, `Reduced calcium excretion`, `Increased phosphate excretion`, `Reduced magnesium excretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 558,
    question: `A common metabolic adverse effect of thiazide diuretics is:`,
    options: [`Hypoglycemia`, `Hyperuricemia`, `Hyperkalemia`, `Metabolic acidosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 559,
    question: `Potassium-sparing diuretics act primarily at the:`,
    options: [`Proximal tubule`, `Loop of Henle`, `Distal tubule`, `Collecting duct`],
    correct: 3,
    explanation: ``
  },
  {
    id: 560,
    question: `Spironolactone produces diuresis by:`,
    options: [`Blocking sodium channels directly`, `Inhibiting Na⁺/Cl⁻ cotransporter`, `Antagonizing aldosterone receptors`, `Inhibiting carbonic anhydrase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 561,
    question: `A serious adverse effect associated with potassium-sparing diuretics is:`,
    options: [`Hypokalemia`, `Hyperkalemia`, `Hypercalcemia`, `Hypomagnesemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 562,
    question: `Spironolactone causes gynecomastia because it:`,
    options: [`Inhibits estrogen metabolism`, `Has antiandrogenic activity`, `Enhances testosterone synthesis`, `Blocks prolactin receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 563,
    question: `Osmotic diuretics such as mannitol act primarily by:`,
    options: [`Inhibiting sodium reabsorption`, `Increasing plasma osmolality and tubular fluid osmolarity`, `Blocking aldosterone`, `Inhibiting ADH`],
    correct: 1,
    explanation: ``
  },
  {
    id: 564,
    question: `Mannitol is contraindicated in patients with:`,
    options: [`Cerebral edema`, `Acute glaucoma`, `Congestive heart failure`, `Acute renal failure`],
    correct: 2,
    explanation: ``
  },
  {
    id: 565,
    question: `ACE inhibitors reduce blood pressure primarily by:`,
    options: [`Blocking aldosterone synthesis only`, `Inhibiting conversion of angiotensin I to angiotensin II`, `Direct vasodilation`, `Inhibiting renin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 566,
    question: `A beneficial effect of ACE inhibitors in diabetic nephropathy is:`,
    options: [`Increased intraglomerular pressure`, `Reduced efferent arteriolar constriction`, `Increased protein filtration`, `Reduced renal blood flow`],
    correct: 1,
    explanation: ``
  },
  {
    id: 567,
    question: `A common adverse effect unique to ACE inhibitors is:`,
    options: [`Bradycardia`, `Dry cough`, `Peripheral edema`, `Reflex tachycardia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 568,
    question: `ACE inhibitor–induced cough is most likely due to accumulation of:`,
    options: [`Angiotensin II`, `Aldosterone`, `Bradykinin`, `Prostaglandins`],
    correct: 2,
    explanation: ``
  },
  {
    id: 569,
    question: `Angioedema associated with ACE inhibitor therapy is mediated by:`,
    options: [`Histamine release`, `IgE antibodies`, `Bradykinin accumulation`, `Complement activation`],
    correct: 2,
    explanation: ``
  },
  {
    id: 570,
    question: `Angiotensin receptor blockers (ARBs) lower blood pressure by:`,
    options: [`Inhibiting ACE`, `Blocking angiotensin II type 1 receptors`, `Inhibiting renin release`, `Blocking aldosterone receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 571,
    question: `Compared with ACE inhibitors, ARBs are less likely to cause:`,
    options: [`Hyperkalemia`, `Hypotension`, `Cough and angioedema`, `Renal dysfunction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 572,
    question: `Which clinical condition is a contraindication to ACE inhibitors and ARBs?`,
    options: [`Hypertension`, `Heart failure`, `Bilateral renal artery stenosis`, `Diabetes mellitus`],
    correct: 2,
    explanation: ``
  },
  {
    id: 573,
    question: `Calcium channel blockers reduce blood pressure primarily by:`,
    options: [`Inhibiting sodium channels`, `Blocking L-type calcium channels in vascular smooth muscle`, `Blocking β receptors`, `Increasing nitric oxide release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 574,
    question: `Dihydropyridine calcium channel blockers are characterized by prominent:`,
    options: [`Cardiac depressant effects`, `Vascular smooth muscle relaxation`, `Antiarrhythmic activity`, `Negative inotropy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 575,
    question: `Which calcium channel blocker is most likely to cause reflex tachycardia?`,
    options: [`Verapamil`, `Diltiazem`, `Nifedipine`, `Diltiazem SR`],
    correct: 2,
    explanation: ``
  },
  {
    id: 576,
    question: `Non-dihydropyridine calcium channel blockers exert their main effect on:`,
    options: [`Bronchial smooth muscle`, `Vascular smooth muscle only`, `Cardiac conduction and contractility`, `Renal tubules`],
    correct: 2,
    explanation: ``
  },
  {
    id: 577,
    question: `Verapamil is particularly useful in treatment of:`,
    options: [`Bronchial asthma`, `Supraventricular tachyarrhythmias`, `Peripheral vascular disease`, `Heart failure with reduced ejection fraction`],
    correct: 1,
    explanation: ``
  },
  {
    id: 578,
    question: `A common adverse effect of verapamil is:`,
    options: [`Diarrhea`, `Constipation`, `Hypokalemia`, `Cough`],
    correct: 1,
    explanation: ``
  },
  {
    id: 579,
    question: `Drugs that alter sympathetic activity reduce blood pressure primarily by:`,
    options: [`Increasing cardiac output`, `Reducing peripheral vascular resistance or cardiac output`, `Increasing renin release`, `Increasing sympathetic tone`],
    correct: 1,
    explanation: ``
  },
  {
    id: 580,
    question: `β-Blockers lower blood pressure mainly by:`,
    options: [`Vasodilation alone`, `Reducing heart rate and renin release`, `Increasing sodium excretion`, `Blocking calcium channels`],
    correct: 1,
    explanation: ``
  },
  {
    id: 581,
    question: `Which β-blocker is considered cardioselective?`,
    options: [`Propranolol`, `Atenolol`, `Nadolol`, `Timolol`],
    correct: 1,
    explanation: ``
  },
  {
    id: 582,
    question: `Nonselective β-blockers are contraindicated in patients with:`,
    options: [`Hypertension`, `Ischemic heart disease`, `Bronchial asthma`, `Migraine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 583,
    question: `A major adverse effect of β-blockers is:`,
    options: [`Reflex tachycardia`, `Bradycardia`, `Hyperkalemia`, `Metabolic alkalosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 584,
    question: `Abrupt withdrawal of β-blockers may cause:`,
    options: [`Severe hypotension`, `Rebound tachycardia and hypertension`, `Hyperkalemia`, `Renal failure`],
    correct: 1,
    explanation: ``
  },
  {
    id: 585,
    question: `α₁-Blockers reduce blood pressure by:`,
    options: [`Reducing heart rate`, `Blocking peripheral vasoconstriction`, `Increasing sodium excretion`, `Inhibiting renin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 586,
    question: `A characteristic adverse effect of α₁-blockers is:`,
    options: [`Bradycardia`, `Orthostatic hypotension`, `Hyperkalemia`, `Dry cough`],
    correct: 1,
    explanation: ``
  },
  {
    id: 587,
    question: `Which α₁-blocker is commonly used in benign prostatic hyperplasia?`,
    options: [`Propranolol`, `Prazosin`, `Atenolol`, `Enalapril`],
    correct: 1,
    explanation: ``
  },
  {
    id: 588,
    question: `A very difficult concept: thiazide-induced hypokalemia increases risk of:`,
    options: [`Bradycardia`, `Digitalis toxicity`, `Hypercalcemia`, `Hypoglycemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 589,
    question: `The antihypertensive effect of ACE inhibitors is enhanced in patients with:`,
    options: [`Low renin hypertension`, `High renin states`, `Normal renin levels`, `Volume overload only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 590,
    question: `Which diuretic reduces mortality in heart failure due to aldosterone antagonism?`,
    options: [`Hydrochlorothiazide`, `Furosemide`, `Spironolactone`, `Mannitol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 591,
    question: `Calcium channel blockers are contraindicated in:`,
    options: [`Stable angina`, `Hypertension`, `Heart failure with reduced ejection fraction`, `Raynaud phenomenon`],
    correct: 2,
    explanation: ``
  },
  {
    id: 592,
    question: `A very difficult integration: ACE inhibitors cause initial rise in serum creatinine because they:`,
    options: [`Reduce renal blood flow`, `Constrict afferent arteriole`, `Dilate efferent arteriole`, `Increase intraglomerular pressure`],
    correct: 2,
    explanation: ``
  },
  {
    id: 593,
    question: `Which antihypertensive drug is preferred in pregnancy?`,
    options: [`ACE inhibitors`, `ARBs`, `Methyldopa`, `Aliskiren`],
    correct: 2,
    explanation: ``
  },
  {
    id: 594,
    question: `Loop diuretics increase urinary excretion of which ion most significantly?`,
    options: [`Calcium`, `Phosphate`, `Magnesium`, `Hydrogen`],
    correct: 0,
    explanation: ``
  },
  {
    id: 595,
    question: `A patient on ACE inhibitors develops hyperkalemia primarily because of:`,
    options: [`Increased dietary potassium`, `Reduced aldosterone secretion`, `Increased potassium reabsorption in PCT`, `Increased renin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 596,
    question: `Which calcium channel blocker has both cardiac and vascular effects?`,
    options: [`Nifedipine`, `Amlodipine`, `Diltiazem`, `Felodipine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 597,
    question: `β-Blockers reduce mortality post–myocardial infarction primarily by:`,
    options: [`Increasing cardiac output`, `Reducing arrhythmias and myocardial oxygen demand`, `Causing vasodilation`, `Increasing renal perfusion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 598,
    question: `Which diuretic causes metabolic alkalosis by increasing hydrogen ion loss?`,
    options: [`Mannitol`, `Acetazolamide`, `Loop diuretics`, `Amiloride`],
    correct: 2,
    explanation: ``
  },
  {
    id: 599,
    question: `A very difficult principle: thiazides are ineffective in severe renal failure because they:`,
    options: [`Require glomerular filtration for delivery to site of action`, `Are inactivated in kidney`, `Cause excessive hypotension`, `Induce hyperkalemia`],
    correct: 0,
    explanation: `on`
  },
  {
    id: 600,
    question: `Among antihypertensives, the class with proven benefit in reducing diabetic nephropathy progression is:`,
    options: [`β-Blockers`, `Calcium channel blockers`, `ACE inhibitors / ARBs`, `α₁-blockers`],
    correct: 2,
    explanation: ``
  },
  {
    id: 601,
    question: `Carbonic anhydrase inhibitors reduce intraocular pressure and act as weak diuretics primarily by inhibiting sodium bicarbonate reabsorption in the:`,
    options: [`Distal convoluted tubule`, `Collecting duct`, `Proximal convoluted tubule`, `Thick ascending limb`],
    correct: 2,
    explanation: ``
  },
  {
    id: 602,
    question: `Acetazolamide commonly produces metabolic acidosis because it:`,
    options: [`Increases hydrogen ion secretion`, `Causes bicarbonate loss in urine`, `Inhibits aldosterone`, `Enhances potassium secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 603,
    question: `Which diuretic is most effective in reducing intracranial pressure?`,
    options: [`Furosemide`, `Hydrochlorothiazide`, `Mannitol`, `Spironolactone`],
    correct: 2,
    explanation: ``
  },
  {
    id: 604,
    question: `A patient receiving mannitol develops pulmonary edema; the most likely mechanism is:`,
    options: [`Direct myocardial depression`, `Expansion of extracellular fluid volume`, `Aldosterone stimulation`, `Potassium retention`],
    correct: 1,
    explanation: ``
  },
  {
    id: 605,
    question: `Which diuretic is preferred in patients with sulfonamide allergy?`,
    options: [`Hydrochlorothiazide`, `Furosemide`, `Ethacrynic acid`, `Acetazolamide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 606,
    question: `Ethacrynic acid differs from other loop diuretics mainly by its increased risk of:`,
    options: [`Hyperkalemia`, `Ototoxicity`, `Hyperuricemia`, `Gynecomastia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 607,
    question: `The natriuretic effect of atrial natriuretic peptide is most similar to which diuretic action?`,
    options: [`Aldosterone antagonism`, `Inhibition of Na⁺/K⁺/2Cl⁻ transporter`, `Inhibition of ENaC channels`, `Increased GFR and reduced sodium reabsorption`],
    correct: 3,
    explanation: ``
  },
  {
    id: 608,
    question: `Which antihypertensive drug directly inhibits renin activity?`,
    options: [`Enalapril`, `Losartan`, `Aliskiren`, `Propranolol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 609,
    question: `Aliskiren lowers blood pressure primarily by:`,
    options: [`Blocking angiotensin II receptors`, `Inhibiting ACE`, `Preventing conversion of angiotensinogen to angiotensin I`, `Reducing aldosterone binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 610,
    question: `A serious adverse effect limiting the combined use of aliskiren with ACE inhibitors is:`,
    options: [`Hypotension`, `Hyperkalemia and renal failure`, `Bradycardia`, `Reflex tachycardia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 611,
    question: `Which calcium channel blocker has the longest duration of action and minimal reflex tachycardia?`,
    options: [`Nifedipine`, `Verapamil`, `Amlodipine`, `Diltiazem`],
    correct: 2,
    explanation: ``
  },
  {
    id: 612,
    question: `Peripheral edema caused by dihydropyridine calcium channel blockers is due to:`,
    options: [`Sodium retention`, `Venous dilation exceeding arteriolar dilation`, `Reduced cardiac output`, `Aldosterone release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 613,
    question: `Which antihypertensive agent reduces blood pressure primarily by central sympathetic inhibition?`,
    options: [`Atenolol`, `Prazosin`, `Clonidine`, `Hydralazine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 614,
    question: `Abrupt withdrawal of clonidine may cause:`,
    options: [`Severe hypotension`, `Rebound hypertension`, `Hyperkalemia`, `Acute renal failure`],
    correct: 1,
    explanation: ``
  },
  {
    id: 615,
    question: `Hydralazine lowers blood pressure mainly by:`,
    options: [`Venodilation`, `Arteriolar smooth muscle relaxation`, `β-receptor blockade`, `Aldosterone inhibition`],
    correct: 1,
    explanation: ``
  },
  {
    id: 616,
    question: `A major adverse effect of hydralazine with chronic use is:`,
    options: [`Pulmonary fibrosis`, `Drug-induced lupus`, `Hyperkalemia`, `Bradycardia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 617,
    question: `Minoxidil causes reflex tachycardia primarily due to:`,
    options: [`Direct β-receptor activation`, `Profound arteriolar vasodilation`, `Reduced venous return`, `Increased potassium loss`],
    correct: 1,
    explanation: ``
  },
  {
    id: 618,
    question: `Minoxidil promotes hair growth because it:`,
    options: [`Inhibits androgen receptors`, `Increases scalp blood flow`, `Activates potassium channels`, `Stimulates melanocytes`],
    correct: 2,
    explanation: ``
  },
  {
    id: 619,
    question: `Which antihypertensive is particularly useful in patients with chronic kidney disease and proteinuria?`,
    options: [`Thiazides`, `α₁-blockers`, `ACE inhibitors`, `Calcium channel blockers`],
    correct: 2,
    explanation: ``
  },
  {
    id: 620,
    question: `A patient on ACE inhibitors develops acute renal failure most likely because of:`,
    options: [`Reduced sodium absorption`, `Reduced efferent arteriolar tone in renal artery stenosis`, `Increased aldosterone`, `Increased intraglomerular pressure`],
    correct: 1,
    explanation: ``
  },
  {
    id: 621,
    question: `Which diuretic is least likely to cause hypokalemia?`,
    options: [`Furosemide`, `Hydrochlorothiazide`, `Spironolactone`, `Bumetanide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 622,
    question: `Amiloride differs from spironolactone because amiloride:`,
    options: [`Antagonizes aldosterone receptors`, `Directly blocks epithelial sodium channels`, `Causes gynecomastia`, `Inhibits ACE`],
    correct: 1,
    explanation: ``
  },
  {
    id: 623,
    question: `Which antihypertensive drug improves survival in systolic heart failure?`,
    options: [`Nifedipine`, `ACE inhibitors`, `α₁-blockers`, `Hydralazine alone`],
    correct: 1,
    explanation: ``
  },
  {
    id: 624,
    question: `β-blockers improve heart failure outcomes by:`,
    options: [`Increasing myocardial contractility`, `Reducing chronic sympathetic overactivation`, `Increasing heart rate`, `Enhancing renin release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 625,
    question: `Which β-blocker has additional α₁-blocking activity?`,
    options: [`Metoprolol`, `Propranolol`, `Labetalol`, `Atenolol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 626,
    question: `Labetalol is preferred in hypertensive emergencies because it:`,
    options: [`Causes reflex tachycardia`, `Reduces blood pressure without major change in heart rate`, `Has long oral duration only`, `Increases cardiac output`],
    correct: 1,
    explanation: ``
  },
  {
    id: 627,
    question: `Which antihypertensive is contraindicated in patients with asthma?`,
    options: [`Amlodipine`, `Losartan`, `Propranolol`, `Hydrochlorothiazide`],
    correct: 2,
    explanation: ``
  },
  {
    id: 628,
    question: `β₁-selective blockers lose selectivity at:`,
    options: [`Low doses`, `Therapeutic doses`, `High doses`, `Renal impairment`],
    correct: 2,
    explanation: ``
  },
  {
    id: 629,
    question: `Which diuretic causes metabolic acidosis instead of alkalosis?`,
    options: [`Loop diuretics`, `Thiazides`, `Carbonic anhydrase inhibitors`, `Potassium-sparing diuretics`],
    correct: 2,
    explanation: ``
  },
  {
    id: 630,
    question: `A very difficult principle: loop diuretics increase prostaglandin synthesis, therefore their effect is reduced by:`,
    options: [`ACE inhibitors`, `NSAIDs`, `β-blockers`, `ARBs`],
    correct: 1,
    explanation: ``
  },
  {
    id: 631,
    question: `Which antihypertensive agent is safest in bilateral renal artery stenosis?`,
    options: [`ACE inhibitors`, `ARBs`, `Calcium channel blockers`, `Aliskiren`],
    correct: 2,
    explanation: ``
  },
  {
    id: 632,
    question: `Which drug reduces preload and afterload by releasing nitric oxide?`,
    options: [`Hydralazine`, `Nitroprusside`, `Minoxidil`, `Methyldopa`],
    correct: 1,
    explanation: ``
  },
  {
    id: 633,
    question: `Sodium nitroprusside toxicity is due to accumulation of:`,
    options: [`Nitrates`, `Nitrites`, `Cyanide`, `Ammonia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 634,
    question: `Which diuretic is effective even at very low GFR levels?`,
    options: [`Thiazides`, `Potassium-sparing diuretics`, `Loop diuretics`, `Carbonic anhydrase inhibitors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 635,
    question: `Which antihypertensive drug is a prodrug activated in the liver?`,
    options: [`Enalapril`, `Captopril`, `Losartan`, `Amlodipine`],
    correct: 0,
    explanation: ``
  },
  {
    id: 636,
    question: `Captopril differs from other ACE inhibitors because it:`,
    options: [`Is a prodrug`, `Has a sulfhydryl group`, `Causes no cough`, `Has longer half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 637,
    question: `A very difficult concept: ACE inhibitors slow progression of chronic kidney disease mainly by reducing:`,
    options: [`Renal blood flow`, `Afferent arteriolar pressure`, `Intraglomerular pressure`, `Sodium reabsorption in PCT`],
    correct: 2,
    explanation: ``
  },
  {
    id: 638,
    question: `Which diuretic is most likely to cause hyponatremia?`,
    options: [`Loop diuretics`, `Thiazides`, `Potassium-sparing diuretics`, `Mannitol`],
    correct: 1,
    explanation: ``
  },
  {
    id: 639,
    question: `Which antihypertensive agent has the strongest effect on reducing left ventricular hypertrophy?`,
    options: [`β-blockers`, `ACE inhibitors`, `α₁-blockers`, `Central sympatholytics`],
    correct: 1,
    explanation: ``
  },
  {
    id: 640,
    question: `A patient on spironolactone develops breast tenderness and impotence; the best alternative is:`,
    options: [`Furosemide`, `Hydrochlorothiazide`, `Eplerenone`, `Amiloride`],
    correct: 2,
    explanation: ``
  },
  {
    id: 641,
    question: `Eplerenone differs from spironolactone because it:`,
    options: [`Is less selective`, `Causes more gynecomastia`, `Has greater mineralocorticoid selectivity`, `Causes hypokalemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 642,
    question: `Which antihypertensive is preferred in patients with migraine prophylaxis needs?`,
    options: [`Verapamil`, `Propranolol`, `Hydralazine`, `Prazosin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 643,
    question: `Which diuretic causes nephrogenic diabetes insipidus with chronic use?`,
    options: [`Furosemide`, `Thiazides`, `Mannitol`, `Lithium`],
    correct: 3,
    explanation: ``
  },
  {
    id: 644,
    question: `Thiazides paradoxically reduce urine volume in nephrogenic diabetes insipidus by:`,
    options: [`Increasing ADH release`, `Reducing distal sodium delivery`, `Increasing GFR`, `Blocking aquaporins`],
    correct: 1,
    explanation: ``
  },
  {
    id: 645,
    question: `Which antihypertensive agent directly relaxes vascular smooth muscle by opening potassium channels?`,
    options: [`Hydralazine`, `Minoxidil`, `Labetalol`, `Verapamil`],
    correct: 1,
    explanation: ``
  },
  {
    id: 646,
    question: `A very difficult integration: combining ACE inhibitors with potassium-sparing diuretics increases risk of:`,
    options: [`Hypokalemia`, `Hyperkalemia`, `Metabolic acidosis`, `Hypocalcemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 647,
    question: `Which antihypertensive agent reduces sympathetic outflow by stimulating α₂ receptors in the brainstem?`,
    options: [`Methyldopa`, `Prazosin`, `Atenolol`, `Hydralazine`],
    correct: 0,
    explanation: ``
  },
  {
    id: 648,
    question: `Methyldopa is preferred in pregnancy because it:`,
    options: [`Has rapid onset`, `Does not reduce uteroplacental blood flow`, `Is free of all adverse effects`, `Causes reflex tachycardia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 649,
    question: `A rare but serious adverse effect of methyldopa is:`,
    options: [`Hyperkalemia`, `Hemolytic anemia`, `Nephrotoxicity`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 650,
    question: `Among diuretics, the class with the strongest effect on reducing preload in acute heart failure is:`,
    options: [`Thiazides`, `Potassium-sparing diuretics`, `Loop diuretics`, `Carbonic anhydrase inhibitors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 651,
    question: `Class I antiarrhythmic drugs share a common primary mechanism of action by:`,
    options: [`Blocking β-adrenergic receptors`, `Blocking sodium channels in cardiac myocytes`, `Prolonging calcium influx`, `Blocking potassium channels`],
    correct: 1,
    explanation: ``
  },
  {
    id: 652,
    question: `Class IA antiarrhythmic drugs differ from other Class I agents because they:`,
    options: [`Shorten action potential duration`, `Have no effect on repolarization`, `Prolong action potential duration`, `Selectively act on AV node`],
    correct: 2,
    explanation: ``
  },
  {
    id: 653,
    question: `A very difficult concept: quinidine increases digoxin toxicity primarily by:`,
    options: [`Increasing renal excretion of digoxin`, `Inhibiting P-glycoprotein–mediated digoxin clearance`, `Increasing digoxin absorption from gut`, `Enhancing digoxin binding to Na⁺/K⁺-ATPase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 654,
    question: `The most characteristic adverse effect of quinidine therapy is:`,
    options: [`Bradycardia`, `Cinchonism`, `Pulmonary fibrosis`, `Hyperkalemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 655,
    question: `Procainamide therapy is associated with development of:`,
    options: [`Hepatotoxicity`, `Drug-induced lupus erythematosus`, `Agranulocytosis`, `Pulmonary hypertension`],
    correct: 1,
    explanation: ``
  },
  {
    id: 656,
    question: `Class IB antiarrhythmic drugs such as lidocaine are most effective in:`,
    options: [`Atrial arrhythmias`, `Ventricular arrhythmias, especially post–myocardial infarction`, `AV nodal reentry tachycardia`, `Supraventricular tachycardia`],
    correct: 1,
    explanation: `infarction`
  },
  {
    id: 657,
    question: `Class IB agents shorten action potential duration because they:`,
    options: [`Block potassium channels`, `Preferentially block inactivated sodium channels`, `Enhance calcium efflux`, `Block calcium channels`],
    correct: 1,
    explanation: ``
  },
  {
    id: 658,
    question: `A major dose-limiting toxicity of lidocaine is:`,
    options: [`Hepatotoxicity`, `Central nervous system toxicity`, `Cardiotoxicity`, `Nephrotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 659,
    question: `Class IC antiarrhythmic drugs are contraindicated in patients with structural heart disease because they:`,
    options: [`Cause severe hypotension`, `Increase risk of fatal ventricular arrhythmias`, `Cause AV block only`, `Have short half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 660,
    question: `Flecainide exerts potent sodium channel blockade resulting in:`,
    options: [`Minimal effect on conduction velocity`, `Marked slowing of conduction`, `Shortened refractory period`, `AV nodal blockade`],
    correct: 1,
    explanation: ``
  },
  {
    id: 661,
    question: `Class II antiarrhythmic drugs reduce arrhythmias primarily by:`,
    options: [`Blocking calcium channels`, `Blocking β-adrenergic receptors`, `Blocking sodium channels`, `Prolonging repolarization`],
    correct: 1,
    explanation: ``
  },
  {
    id: 662,
    question: `β-blockers are particularly effective in treating arrhythmias caused by:`,
    options: [`Reentry circuits in ventricles`, `Increased sympathetic activity`, `Prolonged QT interval`, `Electrolyte imbalance only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 663,
    question: `A major adverse effect of β-blockers used as antiarrhythmics is:`,
    options: [`Reflex tachycardia`, `Bradycardia and AV block`, `QT prolongation`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 664,
    question: `Class III antiarrhythmic drugs exert their effect primarily by:`,
    options: [`Blocking sodium channels`, `Blocking potassium channels and prolonging repolarization`, `Blocking calcium channels`, `Blocking β-receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 665,
    question: `A very difficult concept: amiodarone is associated with multiple organ toxicities because it:`,
    options: [`Is rapidly eliminated`, `Accumulates in lipid-rich tissues`, `Has poor oral bioavailability`, `Is renally excreted unchanged`],
    correct: 1,
    explanation: ``
  },
  {
    id: 666,
    question: `Amiodarone-induced pulmonary toxicity most commonly manifests as:`,
    options: [`Bronchospasm`, `Interstitial pulmonary fibrosis`, `Pleural effusion`, `Pulmonary edema`],
    correct: 1,
    explanation: ``
  },
  {
    id: 667,
    question: `Which electrolyte abnormality increases risk of torsades de pointes with Class III drugs?`,
    options: [`Hyperkalemia`, `Hypokalemia`, `Hypercalcemia`, `Hypernatremia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 668,
    question: `Sotalol differs from other Class III antiarrhythmics because it also:`,
    options: [`Blocks sodium channels`, `Has β-blocking activity`, `Blocks calcium channels`, `Is calcium sensitizer`],
    correct: 1,
    explanation: ``
  },
  {
    id: 669,
    question: `Class IV antiarrhythmic drugs primarily affect cardiac conduction by:`,
    options: [`Blocking sodium channels in ventricles`, `Blocking L-type calcium channels in nodal tissue`, `Blocking potassium channels`, `Blocking β-receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 670,
    question: `Verapamil and diltiazem are particularly useful in treating:`,
    options: [`Ventricular tachycardia`, `Atrial fibrillation with rapid ventricular response`, `Torsades de pointes`, `Ventricular fibrillation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 671,
    question: `A major adverse effect of Class IV antiarrhythmic drugs is:`,
    options: [`Hypokalemia`, `Bradycardia and heart block`, `Pulmonary fibrosis`, `Hyperuricemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 672,
    question: `A very difficult integration question: combining β-blockers with verapamil is dangerous primarily because of risk of:`,
    options: [`Reflex tachycardia`, `Severe myocardial depression and AV block`, `QT prolongation`, `Hypokalemia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 673,
    question: `Organic nitrates relieve angina primarily by:`,
    options: [`Reducing myocardial contractility`, `Decreasing preload via venodilation`, `Blocking calcium channels`, `Increasing heart rate`],
    correct: 1,
    explanation: ``
  },
  {
    id: 674,
    question: `The molecular mechanism of nitrate-induced vasodilation involves:`,
    options: [`Calcium channel blockade`, `Nitric oxide–mediated cGMP increase`, `β-receptor stimulation`, `Prostaglandin inhibition`],
    correct: 1,
    explanation: ``
  },
  {
    id: 675,
    question: `A very difficult concept: tolerance to nitrates develops mainly due to:`,
    options: [`Increased drug metabolism`, `Depletion of sulfhydryl groups required for NO formation`, `Increased renal excretion`, `Downregulation of nitrate receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 676,
    question: `A common adverse effect of nitrate therapy is:`,
    options: [`Bradycardia`, `Headache and flushing`, `Hyperkalemia`, `Constipation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 677,
    question: `Nitrates are contraindicated in patients taking phosphodiesterase-5 inhibitors because of risk of:`,
    options: [`Hypertension`, `Severe hypotension`, `Arrhythmias`, `Renal failure`],
    correct: 1,
    explanation: ``
  },
  {
    id: 678,
    question: `Calcium channel blockers are particularly effective in vasospastic (Prinzmetal) angina because they:`,
    options: [`Reduce myocardial oxygen demand only`, `Prevent coronary artery spasm`, `Reduce heart rate exclusively`, `Increase venous capacitance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 679,
    question: `Which calcium channel blocker is preferred in vasospastic angina?`,
    options: [`Verapamil`, `Diltiazem`, `Nifedipine`, `Propranolol`],
    correct: 2,
    explanation: ``
  },
  {
    id: 680,
    question: `β-blockers are contraindicated in pure vasospastic angina because they:`,
    options: [`Increase heart rate`, `Worsen coronary vasospasm by unopposed α-adrenergic activity`, `Cause severe hypotension`, `Reduce nitrate efficacy`],
    correct: 1,
    explanation: `ty`
  },
  {
    id: 681,
    question: `HMG-CoA reductase inhibitors reduce LDL cholesterol primarily by:`,
    options: [`Decreasing intestinal cholesterol absorption`, `Increasing hepatic LDL receptor expression`, `Increasing bile acid excretion`, `Inhibiting triglyceride synthesis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 682,
    question: `A very difficult concept: statin-induced myopathy risk is increased by concomitant use of:`,
    options: [`Rifampicin`, `Erythromycin`, `Cholestyramine`, `Antacids`],
    correct: 1,
    explanation: ``
  },
  {
    id: 683,
    question: `The most serious adverse effect associated with statin therapy is:`,
    options: [`Hyperglycemia`, `Hepatotoxicity and rhabdomyolysis`, `Nephrotoxicity`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 684,
    question: `Which statin is most hydrophilic and has minimal muscle penetration?`,
    options: [`Simvastatin`, `Atorvastatin`, `Pravastatin`, `Lovastatin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 685,
    question: `Bile acid sequestrants lower cholesterol by:`,
    options: [`Inhibiting cholesterol synthesis`, `Binding bile acids in the intestine`, `Blocking LDL receptors`, `Inhibiting lipoprotein lipase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 686,
    question: `A major limitation of bile acid sequestrants is that they:`,
    options: [`Cause hepatotoxicity`, `Increase triglyceride levels`, `Cause myopathy`, `Prolong QT interval`],
    correct: 1,
    explanation: ``
  },
  {
    id: 687,
    question: `Cholestyramine reduces LDL levels primarily by:`,
    options: [`Direct LDL binding`, `Increasing conversion of cholesterol to bile acids`, `Inhibiting HMG-CoA reductase`, `Reducing intestinal fat absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 688,
    question: `A very difficult integration question: bile acid sequestrants reduce absorption of fat-soluble vitamins because they:`,
    options: [`Damage intestinal mucosa`, `Bind bile acids necessary for micelle formation`, `Inhibit pancreatic lipase`, `Reduce gastric acid secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 689,
    question: `Which drug interaction is clinically significant with bile acid sequestrants?`,
    options: [`Reduced absorption of warfarin`, `Increased digoxin levels`, `Increased statin toxicity`, `Increased insulin resistance`],
    correct: 0,
    explanation: ``
  },
  {
    id: 690,
    question: `Statins are contraindicated in:`,
    options: [`Hyperlipidemia`, `Stable coronary artery disease`, `Pregnancy`, `Diabetes mellitus`],
    correct: 2,
    explanation: ``
  },
  {
    id: 691,
    question: `A very difficult concept: the pleiotropic effects of statins include:`,
    options: [`Increased platelet aggregation`, `Improved endothelial function`, `Reduced nitric oxide synthesis`, `Increased inflammation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 692,
    question: `Which antianginal drug reduces myocardial oxygen demand by decreasing heart rate and contractility?`,
    options: [`Nitrates`, `β-blockers`, `Dihydropyridine CCBs`, `Nicorandil`],
    correct: 1,
    explanation: ``
  },
  {
    id: 693,
    question: `Nicorandil has antianginal effects because it:`,
    options: [`Blocks calcium channels`, `Acts as nitrate donor and potassium channel opener`, `Blocks β-receptors`, `Inhibits ACE`],
    correct: 1,
    explanation: ``
  },
  {
    id: 694,
    question: `A major adverse effect of nicorandil is:`,
    options: [`Pulmonary fibrosis`, `Oral and gastrointestinal ulceration`, `Hepatotoxicity`, `Myopathy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 695,
    question: `A very difficult integration: combining nitrates with β-blockers is beneficial because it:`,
    options: [`Increases heart rate`, `Prevents nitrate tolerance`, `Prevents reflex tachycardia`, `Enhances nitrate metabolism`],
    correct: 2,
    explanation: ``
  },
  {
    id: 696,
    question: `Which antiarrhythmic drug prolongs QT interval but has lowest risk of torsades de pointes?`,
    options: [`Sotalol`, `Dofetilide`, `Amiodarone`, `Quinidine`],
    correct: 2,
    explanation: ``
  },
  {
    id: 697,
    question: `A patient on long-term amiodarone therapy should be regularly monitored for:`,
    options: [`Renal function only`, `Thyroid, liver, and pulmonary function`, `Bone density`, `Serum electrolytes only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 698,
    question: `A very difficult concept: amiodarone causes both hypo- and hyperthyroidism because it:`,
    options: [`Blocks TSH receptors`, `Is structurally similar to thyroxine and iodine-rich`, `Inhibits deiodinase only`, `Increases thyroid hormone clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 699,
    question: `Which antiarrhythmic drug is most likely to exacerbate heart failure due to negative inotropic effects?`,
    options: [`Amiodarone`, `Flecainide`, `Lidocaine`, `Adenosine`],
    correct: 1,
    explanation: ``
  },
  {
    id: 700,
    question: `Among lipid-lowering drugs, the class with the greatest evidence for reduction in cardiovascular mortality is:`,
    options: [`Bile acid sequestrants`, `Fibrates`, `HMG-CoA reductase inhibitors`, `Niacin`],
    correct: 2,
    explanation: `Drugs used in Blood Disorders`
  },
  {
    id: 701,
    question: `Unfractionated heparin produces its anticoagulant effect primarily by:`,
    options: [`Direct inhibition of thrombin`, `Enhancing antithrombin III activity`, `Inhibiting vitamin K epoxide reductase`, `Blocking platelet aggregation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 702,
    question: `Heparin inhibits all of the following clotting factors EXCEPT:`,
    options: [`Factor IIa`, `Factor IXa`, `Factor Xa`, `Factor VIIa`],
    correct: 3,
    explanation: ``
  },
  {
    id: 703,
    question: `Low-molecular-weight heparins differ from unfractionated heparin because they:`,
    options: [`Inhibit thrombin more than factor Xa`, `Have predictable pharmacokinetics and lower HIT risk`, `Require continuous aPTT monitoring`, `Are orally active`],
    correct: 1,
    explanation: ``
  },
  {
    id: 704,
    question: `A very difficult concept: heparin does not dissolve existing clots because it:`,
    options: [`Acts only on platelets`, `Prevents further clot propagation but does not lyse fibrin`, `Inhibits plasminogen`, `Acts only on factor XII`],
    correct: 1,
    explanation: ``
  },
  {
    id: 705,
    question: `The most serious immune-mediated adverse effect of heparin therapy is:`,
    options: [`Osteoporosis`, `Bleeding`, `Heparin-induced thrombocytopenia`, `Hyperkalemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 706,
    question: `Heparin-induced thrombocytopenia paradoxically causes thrombosis because of:`,
    options: [`Direct platelet destruction`, `Antibody-mediated platelet activation`, `Inhibition of fibrinolysis`, `Increased factor VIII levels`],
    correct: 1,
    explanation: ``
  },
  {
    id: 707,
    question: `The antidote for heparin toxicity is:`,
    options: [`Vitamin K`, `Protamine sulfate`, `Fresh frozen plasma`, `Tranexamic acid`],
    correct: 1,
    explanation: ``
  },
  {
    id: 708,
    question: `Protamine sulfate neutralizes heparin by:`,
    options: [`Enzymatic degradation`, `Competitive inhibition`, `Electrostatic binding`, `Increasing renal clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 709,
    question: `Warfarin produces anticoagulation by inhibiting:`,
    options: [`Thrombin directly`, `Antithrombin III`, `Vitamin K epoxide reductase`, `Platelet cyclooxygenase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 710,
    question: `Clotting factors most affected early during warfarin therapy are:`,
    options: [`II, VII, IX, X`, `VII and protein C`, `VIII and XI`, `XII and XIII`],
    correct: 1,
    explanation: ``
  },
  {
    id: 711,
    question: `Initial hypercoagulability with warfarin occurs due to:`,
    options: [`Increased platelet aggregation`, `Rapid depletion of protein C`, `Enhanced fibrin formation`, `Inhibition of fibrinolysis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 712,
    question: `Warfarin-induced skin necrosis is most strongly associated with deficiency of:`,
    options: [`Antithrombin III`, `Protein S`, `Protein C`, `Factor V`],
    correct: 2,
    explanation: ``
  },
  {
    id: 713,
    question: `The primary laboratory parameter used to monitor warfarin therapy is:`,
    options: [`aPTT`, `Bleeding time`, `INR`, `Platelet count`],
    correct: 2,
    explanation: ``
  },
  {
    id: 714,
    question: `The antidote for acute warfarin toxicity is:`,
    options: [`Protamine sulfate`, `Vitamin K`, `Activated charcoal`, `Desmopressin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 715,
    question: `Warfarin is contraindicated in pregnancy because it:`,
    options: [`Causes fetal bleeding only`, `Produces teratogenic effects and fetal bone defects`, `Is ineffective during pregnancy`, `Causes maternal hypertension`],
    correct: 1,
    explanation: ``
  },
  {
    id: 716,
    question: `Thrombolytic drugs act primarily by:`,
    options: [`Inhibiting platelet aggregation`, `Converting plasminogen to plasmin`, `Blocking fibrin formation`, `Enhancing antithrombin III`],
    correct: 1,
    explanation: ``
  },
  {
    id: 717,
    question: `Streptokinase differs from alteplase because streptokinase:`,
    options: [`Is fibrin-specific`, `Is recombinant human enzyme`, `Is antigenic and can cause hypersensitivity`, `Has shorter half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 718,
    question: `Alteplase (tPA) is preferred over streptokinase because it:`,
    options: [`Has longer duration`, `Is orally active`, `Is fibrin-specific`, `Has no bleeding risk`],
    correct: 2,
    explanation: ``
  },
  {
    id: 719,
    question: `A major dose-limiting toxicity of thrombolytic therapy is:`,
    options: [`Thrombocytopenia`, `Severe bleeding including intracranial hemorrhage`, `Nephrotoxicity`, `Cardiotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 720,
    question: `Aspirin produces antiplatelet effects by:`,
    options: [`Reversible inhibition of COX-2`, `Irreversible inhibition of platelet COX-1`, `Blocking ADP receptors`, `Inhibiting GP IIb/IIIa receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 721,
    question: `The antiplatelet effect of aspirin lasts for:`,
    options: [`6–8 hours`, `24 hours`, `3 days`, `The lifespan of the platelet`],
    correct: 3,
    explanation: ``
  },
  {
    id: 722,
    question: `Low-dose aspirin selectively inhibits platelet aggregation because platelets:`,
    options: [`Regenerate COX enzymes rapidly`, `Lack a nucleus`, `Have shorter lifespan`, `Prefer COX-2 inhibition`],
    correct: 1,
    explanation: ``
  },
  {
    id: 723,
    question: `Aspirin is used in ischemic heart disease primarily to:`,
    options: [`Reduce myocardial oxygen demand`, `Prevent thrombus formation`, `Dilate coronary arteries`, `Lower cholesterol`],
    correct: 1,
    explanation: ``
  },
  {
    id: 724,
    question: `A serious adverse effect of chronic aspirin therapy is:`,
    options: [`Hyperkalemia`, `Gastrointestinal bleeding`, `Pulmonary fibrosis`, `Nephrolithiasis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 725,
    question: `Clopidogrel inhibits platelet aggregation by blocking:`,
    options: [`COX-1 enzyme`, `Thromboxane A₂ synthesis`, `ADP P2Y₁₂ receptors`, `GP IIb/IIIa receptors`],
    correct: 2,
    explanation: ``
  },
  {
    id: 726,
    question: `Clopidogrel is preferred over aspirin in patients with:`,
    options: [`Renal failure`, `Aspirin hypersensitivity`, `Severe anemia`, `Thrombocytopenia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 727,
    question: `A serious hematologic adverse effect associated with clopidogrel is:`,
    options: [`Agranulocytosis`, `Aplastic anemia`, `Thrombotic thrombocytopenic purpura`, `Hemolytic anemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 728,
    question: `Direct thrombin inhibitors differ from heparin because they:`,
    options: [`Require antithrombin III`, `Inhibit thrombin directly`, `Are vitamin K antagonists`, `Inhibit platelet aggregation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 729,
    question: `Argatroban is primarily indicated in patients with:`,
    options: [`Atrial fibrillation`, `HIT requiring anticoagulation`, `Mechanical heart valves`, `Pregnancy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 730,
    question: `Dabigatran differs from warfarin because it:`,
    options: [`Requires INR monitoring`, `Is a direct thrombin inhibitor`, `Inhibits factor Xa`, `Is injectable only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 731,
    question: `The major advantage of direct oral anticoagulants over warfarin is:`,
    options: [`Lower bleeding risk in all cases`, `Fixed dosing without routine monitoring`, `Use in pregnancy`, `Reversibility with vitamin K`],
    correct: 1,
    explanation: ``
  },
  {
    id: 732,
    question: `Rivaroxaban produces anticoagulation by:`,
    options: [`Inhibiting thrombin`, `Blocking factor Xa`, `Inhibiting platelet aggregation`, `Enhancing antithrombin III`],
    correct: 1,
    explanation: ``
  },
  {
    id: 733,
    question: `Which drug belongs to the “-xaban” class?`,
    options: [`Dabigatran`, `Apixaban`, `Warfarin`, `Argatroban`],
    correct: 1,
    explanation: ``
  },
  {
    id: 734,
    question: `A very difficult concept: factor Xa inhibitors reduce thrombin generation because factor Xa:`,
    options: [`Directly lyses fibrin`, `Converts prothrombin to thrombin`, `Activates platelets`, `Inhibits antithrombin III`],
    correct: 1,
    explanation: ``
  },
  {
    id: 735,
    question: `An important limitation of DOACs compared to warfarin is:`,
    options: [`Delayed onset`, `Limited availability of reversal agents`, `Need for frequent monitoring`, `Poor oral absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 736,
    question: `Which anticoagulant is safest during pregnancy?`,
    options: [`Warfarin`, `Dabigatran`, `Heparin`, `Rivaroxaban`],
    correct: 2,
    explanation: ``
  },
  {
    id: 737,
    question: `Warfarin interacts with many drugs primarily because it:`,
    options: [`Is renally excreted`, `Is highly protein bound and CYP-metabolized`, `Has short half-life`, `Inhibits platelet function`],
    correct: 1,
    explanation: ``
  },
  {
    id: 738,
    question: `Broad-spectrum antibiotics increase warfarin effect by:`,
    options: [`Increasing absorption`, `Reducing vitamin K–producing gut flora`, `Enhancing renal clearance`, `Inducing hepatic enzymes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 739,
    question: `Which thrombolytic is most antigenic?`,
    options: [`Alteplase`, `Tenecteplase`, `Streptokinase`, `Reteplase`],
    correct: 2,
    explanation: ``
  },
  {
    id: 740,
    question: `A patient develops severe bleeding on dabigatran; the specific antidote is:`,
    options: [`Protamine`, `Vitamin K`, `Idarucizumab`, `Tranexamic acid`],
    correct: 2,
    explanation: ``
  },
  {
    id: 741,
    question: `A very difficult integration: aspirin and clopidogrel combination therapy increases bleeding risk because they:`,
    options: [`Inhibit the same pathway`, `Block complementary platelet activation pathways`, `Increase fibrinolysis`, `Inhibit clotting factors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 742,
    question: `Which anticoagulant prolongs aPTT but not PT significantly?`,
    options: [`Warfarin`, `Heparin`, `Rivaroxaban`, `Aspirin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 743,
    question: `Factor Xa inhibitors primarily prolong:`,
    options: [`Bleeding time`, `aPTT only`, `PT more than aPTT`, `Thrombin time`],
    correct: 2,
    explanation: ``
  },
  {
    id: 744,
    question: `The most appropriate anticoagulant for immediate anticoagulation is:`,
    options: [`Warfarin`, `Aspirin`, `Heparin`, `Clopidogrel`],
    correct: 2,
    explanation: ``
  },
  {
    id: 745,
    question: `Which antiplatelet drug has NO effect on prostaglandin synthesis?`,
    options: [`Aspirin`, `Clopidogrel`, `Indomethacin`, `Ibuprofen`],
    correct: 1,
    explanation: ``
  },
  {
    id: 746,
    question: `A very difficult concept: aspirin resistance may occur due to:`,
    options: [`Increased platelet turnover`, `Reduced COX-1 expression`, `Genetic polymorphisms`, `All of the above`],
    correct: 3,
    explanation: ``
  },
  {
    id: 747,
    question: `Which anticoagulant has the shortest half-life?`,
    options: [`Warfarin`, `Dabigatran`, `Heparin`, `Rivaroxaban`],
    correct: 2,
    explanation: ``
  },
  {
    id: 748,
    question: `Which drug is most suitable for patients with HIT and renal failure?`,
    options: [`Dabigatran`, `Argatroban`, `Rivaroxaban`, `LMWH`],
    correct: 1,
    explanation: ``
  },
  {
    id: 749,
    question: `A patient on warfarin presents with major bleeding and high INR; the fastest reversal is achieved with:`,
    options: [`Vitamin K alone`, `Fresh frozen plasma`, `Prothrombin complex concentrate`, `Activated charcoal`],
    correct: 2,
    explanation: ``
  },
  {
    id: 750,
    question: `among anticoagulants, the drug that requires bridging therapy at initiation is:`,
    options: [`Heparin`, `Warfarin`, `Dabigatran`, `Rivaroxaban`],
    correct: 1,
    explanation: `Thyroid Pharma`
  },
  {
    id: 751,
    question: `Levothyroxine is the drug of choice for hypothyroidism because it:`,
    options: [`Has rapid onset of action`, `Is converted peripherally to the active hormone`, `Suppresses TSH immediately`, `Has no protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 752,
    question: `A very difficult concept: the clinical response to levothyroxine therapy is delayed primarily because:`,
    options: [`Poor oral absorption`, `Long half-life and genomic mechanism of action`, `Slow renal clearance`, `Delayed pituitary response`],
    correct: 1,
    explanation: ``
  },
  {
    id: 753,
    question: `Propylthiouracil differs from methimazole because PTU:`,
    options: [`Is longer acting`, `Inhibits peripheral conversion of T₄ to T₃`, `Is safer in pregnancy throughout`, `Has no hepatic toxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 754,
    question: `The most serious adverse effect of thionamides is:`,
    options: [`Hypothyroidism`, `Agranulocytosis`, `Weight gain`, `Alopecia`],
    correct: 1,
    explanation: ``
  },
  {
    id: 755,
    question: `Radioactive iodine therapy is contraindicated in:`,
    options: [`Graves disease`, `Multinodular goiter`, `Pregnancy`, `Elderly patients`],
    correct: 2,
    explanation: ``
  },
  {
    id: 756,
    question: `β-blockers are used in hyperthyroidism primarily to:`,
    options: [`Reduce thyroid hormone synthesis`, `Block TSH secretion`, `Control adrenergic symptoms`, `Reduce goiter size`],
    correct: 2,
    explanation: ``
  },
  {
    id: 757,
    question: `A very difficult integration: amiodarone can cause both hypo- and hyperthyroidism because it:`,
    options: [`Blocks TSH receptors`, `Contains high iodine content and alters deiodination`, `Is structurally identical to T₄`, `Stimulates thyroid peroxidase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 758,
    question: `Insulin lowers blood glucose primarily by:`,
    options: [`Inhibiting gluconeogenesis only`, `Increasing glucose uptake via GLUT-4 translocation`, `Reducing intestinal glucose absorption`, `Increasing glycogenolysis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 759,
    question: `Which insulin preparation has the fastest onset of action?`,
    options: [`Regular insulin`, `Insulin glargine`, `Insulin lispro`, `NPH insulin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 760,
    question: `Long-acting insulin analogs such as glargine provide basal insulin because they:`,
    options: [`Are rapidly absorbed`, `Have no peak effect`, `Stimulate endogenous insulin`, `Bind insulin receptors irreversibly`],
    correct: 1,
    explanation: ``
  },
  {
    id: 761,
    question: `The most common acute complication of insulin therapy is:`,
    options: [`Weight gain`, `Lipodystrophy`, `Hypoglycemia`, `Edema`],
    correct: 2,
    explanation: ``
  },
  {
    id: 762,
    question: `Metformin lowers blood glucose mainly by:`,
    options: [`Stimulating insulin release`, `Increasing insulin sensitivity and reducing hepatic gluconeogenesis`, `Delaying carbohydrate absorption`, `Inhibiting DPP-4`],
    correct: 1,
    explanation: `gluconeogenesis`
  },
  {
    id: 763,
    question: `Metformin is contraindicated in patients with:`,
    options: [`Obesity`, `Heart failure`, `Renal failure`, `Hyperlipidemia`],
    correct: 2,
    explanation: ``
  },
  {
    id: 764,
    question: `A very difficult concept: lactic acidosis with metformin occurs because it:`,
    options: [`Increases anaerobic glycolysis`, `Inhibits mitochondrial respiration`, `Enhances hepatic lactate uptake`, `Stimulates insulin secretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 765,
    question: `Sulfonylureas lower blood glucose by:`,
    options: [`Enhancing insulin sensitivity`, `Closing K⁺ channels in β-cells to stimulate insulin release`, `Blocking glucagon receptors`, `Inhibiting intestinal α-glucosidase`],
    correct: 1,
    explanation: `e`
  },
  {
    id: 766,
    question: `A major adverse effect of sulfonylureas is:`,
    options: [`Diarrhea`, `Hypoglycemia`, `Lactic acidosis`, `Weight loss`],
    correct: 1,
    explanation: ``
  },
  {
    id: 767,
    question: `Which oral antidiabetic drug causes weight loss and reduces appetite?`,
    options: [`Glyburide`, `Pioglitazone`, `GLP-1 receptor agonists`, `Acarbose`],
    correct: 2,
    explanation: ``
  },
  {
    id: 768,
    question: `Thiazolidinediones improve insulin sensitivity by activating:`,
    options: [`PPAR-α`, `PPAR-γ`, `AMPK`, `GLUT-2`],
    correct: 1,
    explanation: ``
  },
  {
    id: 769,
    question: `A serious adverse effect associated with thiazolidinediones is:`,
    options: [`Hypoglycemia`, `Weight loss`, `Fluid retention and heart failure`, `Agranulocytosis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 770,
    question: `Clomiphene citrate induces ovulation primarily by:`,
    options: [`Stimulating LH directly`, `Acting as estrogen agonist in hypothalamus`, `Blocking estrogen receptors in hypothalamus`, `Increasing prolactin levels`],
    correct: 2,
    explanation: ``
  },
  {
    id: 771,
    question: `A very difficult concept: clomiphene causes ovulation because estrogen normally exerts:`,
    options: [`Positive feedback on GnRH`, `Negative feedback on GnRH`, `No effect on GnRH`, `Direct ovarian stimulation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 772,
    question: `The most common adverse effect of clomiphene therapy is:`,
    options: [`Ovarian hyperstimulation`, `Visual disturbances`, `Severe hypoglycemia`, `Hirsutism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 773,
    question: `Gonadotropins used for infertility act by:`,
    options: [`Suppressing pituitary hormones`, `Directly stimulating ovarian follicular development`, `Blocking estrogen synthesis`, `Increasing prolactin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 774,
    question: `A serious complication of gonadotropin therapy is:`,
    options: [`Amenorrhea`, `Ovarian hyperstimulation syndrome`, `Hypothyroidism`, `Adrenal suppression`],
    correct: 1,
    explanation: ``
  },
  {
    id: 775,
    question: `Hydrocortisone exerts glucocorticoid effects primarily by:`,
    options: [`Membrane receptor activation`, `Genomic regulation of transcription`, `Inhibiting prostaglandin synthesis only`, `Blocking ACTH receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 776,
    question: `The most common cause of secondary adrenal insufficiency is:`,
    options: [`Autoimmune adrenalitis`, `Pituitary ACTH deficiency`, `Adrenal hemorrhage`, `Congenital enzyme defect`],
    correct: 1,
    explanation: ``
  },
  {
    id: 777,
    question: `A very difficult concept: chronic glucocorticoid therapy suppresses adrenal function because of:`,
    options: [`Adrenal necrosis`, `Downregulation of cortisol receptors`, `Suppression of ACTH secretion`, `Reduced cortisol metabolism`],
    correct: 2,
    explanation: ``
  },
  {
    id: 778,
    question: `Abrupt withdrawal of long-term corticosteroids may lead to:`,
    options: [`Hyperaldosteronism`, `Acute adrenal crisis`, `Hyperglycemia`, `Hypertension`],
    correct: 1,
    explanation: ``
  },
  {
    id: 779,
    question: `Fludrocortisone is primarily used because of its:`,
    options: [`High glucocorticoid activity`, `High mineralocorticoid activity`, `Antiandrogenic effect`, `Immunosuppressive effect`],
    correct: 1,
    explanation: ``
  },
  {
    id: 780,
    question: `A patient with Addison disease requires replacement of:`,
    options: [`Cortisol only`, `Aldosterone only`, `Both glucocorticoids and mineralocorticoids`, `Catecholamines`],
    correct: 2,
    explanation: ``
  },
  {
    id: 781,
    question: `Combined oral contraceptives prevent pregnancy primarily by:`,
    options: [`Preventing implantation`, `Inhibiting ovulation`, `Killing sperm`, `Altering cervical pH only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 782,
    question: `Estrogens in oral contraceptives suppress ovulation mainly by inhibiting:`,
    options: [`FSH secretion`, `LH surge`, `Prolactin release`, `GnRH degradation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 783,
    question: `Progestins contribute to contraceptive effect by:`,
    options: [`Increasing endometrial thickness`, `Thickening cervical mucus`, `Stimulating ovulation`, `Increasing uterine contractility`],
    correct: 1,
    explanation: ``
  },
  {
    id: 784,
    question: `A very difficult concept: combined oral contraceptives increase risk of thrombosis because they:`,
    options: [`Increase platelet count`, `Increase hepatic synthesis of clotting factors`, `Reduce protein C`, `Inhibit fibrinolysis only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 785,
    question: `Which condition is a contraindication to estrogen-containing contraceptives?`,
    options: [`Iron deficiency anemia`, `Migraine with aura`, `Dysmenorrhea`, `Hypothyroidism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 786,
    question: `Testosterone exerts anabolic effects primarily by:`,
    options: [`Membrane receptor activation`, `Nuclear androgen receptor–mediated gene transcription`, `Inhibiting cortisol`, `Blocking estrogen receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 787,
    question: `A major adverse effect of anabolic steroid abuse is:`,
    options: [`Hypoglycemia`, `Hepatotoxicity`, `Renal failure`, `Pulmonary fibrosis`],
    correct: 1,
    explanation: ``
  },
  {
    id: 788,
    question: `Finasteride improves benign prostatic hyperplasia by inhibiting:`,
    options: [`Androgen receptors`, `5α-reductase`, `Aromatase`, `GnRH release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 789,
    question: `A very difficult concept: finasteride reduces prostate size because dihydrotestosterone:`,
    options: [`Is weaker than testosterone`, `Is the primary androgen in prostate tissue`, `Is rapidly metabolized`, `Inhibits androgen receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 790,
    question: `Selective estrogen receptor modulators (SERMs) such as tamoxifen act by:`,
    options: [`Blocking estrogen synthesis`, `Acting as estrogen antagonists in breast tissue`, `Acting as estrogen antagonists in bone`, `Inhibiting aromatase`],
    correct: 1,
    explanation: ``
  },
  {
    id: 791,
    question: `Tamoxifen increases risk of endometrial cancer because it:`,
    options: [`Blocks estrogen receptors in uterus`, `Acts as estrogen agonist in endometrium`, `Increases progesterone secretion`, `Suppresses ovulation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 792,
    question: `Which drug is used to treat hyperprolactinemia?`,
    options: [`Clomiphene`, `Bromocriptine`, `Tamoxifen`, `Ketoconazole`],
    correct: 1,
    explanation: ``
  },
  {
    id: 793,
    question: `Bromocriptine reduces prolactin levels by:`,
    options: [`Blocking estrogen receptors`, `Stimulating dopamine D₂ receptors`, `Inhibiting serotonin`, `Blocking GnRH`],
    correct: 1,
    explanation: ``
  },
  {
    id: 794,
    question: `A very difficult integration: dopamine agonists restore fertility in hyperprolactinemia because prolactin normally:`,
    options: [`Stimulates GnRH`, `Inhibits GnRH secretion`, `Has no effect on ovulation`, `Increases LH release`],
    correct: 1,
    explanation: ``
  },
  {
    id: 795,
    question: `Ketoconazole can cause adrenal insufficiency because it:`,
    options: [`Blocks ACTH receptors`, `Inhibits steroid synthesis enzymes`, `Enhances cortisol metabolism`, `Suppresses aldosterone receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 796,
    question: `Mifepristone (RU-486) acts primarily as a:`,
    options: [`Progesterone agonist`, `Progesterone receptor antagonist`, `Estrogen antagonist`, `GnRH antagonist`],
    correct: 1,
    explanation: ``
  },
  {
    id: 797,
    question: `A very difficult concept: mifepristone induces abortion because progesterone is essential for:`,
    options: [`Ovulation`, `Cervical mucus production`, `Maintenance of endometrial lining`, `Estrogen synthesis`],
    correct: 2,
    explanation: ``
  },
  {
    id: 798,
    question: `Which hormone is primarily responsible for male secondary sexual characteristics?`,
    options: [`Estrogen`, `Progesterone`, `Testosterone`, `Prolactin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 799,
    question: `A patient with congenital adrenal hyperplasia requires lifelong replacement of:`,
    options: [`Aldosterone only`, `Cortisol only`, `Both cortisol ± mineralocorticoids depending on type`, `Catecholamines`],
    correct: 2,
    explanation: ``
  },
  {
    id: 800,
    question: `Single most dangerous acute complication of insulin therapy is:`,
    options: [`Weight gain`, `Lipodystrophy`, `Hypoglycemia`, `Insulin resistance`],
    correct: 2,
    explanation: `Mixed`
  },
  {
    id: 801,
    question: `A drug with high hepatic extraction ratio will have its clearance primarily dependent on:`,
    options: [`Plasma protein binding`, `Intrinsic hepatic enzyme activity`, `Hepatic blood flow`, `Renal filtration rate`],
    correct: 2,
    explanation: ``
  },
  {
    id: 802,
    question: `A very difficult pharmacokinetic concept: capacity-limited metabolism (Michaelis–Menten kinetics) is best exemplified by:`,
    options: [`Ethanol`, `Penicillin`, `Propranolol`, `Furosemide`],
    correct: 0,
    explanation: ``
  },
  {
    id: 803,
    question: `Zero-order elimination differs from first-order elimination because zero-order elimination:`,
    options: [`Eliminates a constant fraction per unit time`, `Is independent of dose`, `Eliminates a constant amount per unit time`, `Occurs only in renal clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 804,
    question: `The volume of distribution of a drug is best described as:`,
    options: [`Amount of drug in plasma divided by plasma concentration`, `Dose divided by plasma concentration`, `Total body water volume`, `Renal clearance × half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 805,
    question: `A drug with a very large volume of distribution is most likely:`,
    options: [`Highly plasma protein bound`, `Confined to intravascular space`, `Sequestered in tissues`, `Rapidly excreted unchanged`],
    correct: 2,
    explanation: ``
  },
  {
    id: 806,
    question: `A weak base will be preferentially trapped in:`,
    options: [`Acidic compartments`, `Alkaline compartments`, `Plasma only`, `Renal tubules only`],
    correct: 0,
    explanation: ``
  },
  {
    id: 807,
    question: `Ion trapping is clinically most relevant in treatment of overdose with:`,
    options: [`Weak bases by urine acidification`, `Weak acids by urine alkalinization`, `Neutral drugs by dialysis`, `Protein-bound drugs`],
    correct: 1,
    explanation: ``
  },
  {
    id: 808,
    question: `A very difficult concept: bioavailability of a drug administered intravenously is:`,
    options: [`Less than 50%`, `Variable`, `100%`, `Dependent on first-pass metabolism`],
    correct: 2,
    explanation: ``
  },
  {
    id: 809,
    question: `The first-pass effect primarily reduces bioavailability by:`,
    options: [`Renal excretion`, `Hepatic metabolism before systemic circulation`, `Poor intestinal absorption`, `Plasma protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 810,
    question: `Prodrugs are designed mainly to:`,
    options: [`Reduce toxicity`, `Improve bioavailability or tissue selectivity`, `Increase renal excretion`, `Avoid hepatic metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 811,
    question: `A very difficult pharmacodynamic principle: potency is best defined as:`,
    options: [`Maximum effect achievable`, `Dose required to produce a given effect`, `Safety margin`, `Therapeutic index`],
    correct: 1,
    explanation: ``
  },
  {
    id: 812,
    question: `Efficacy of a drug refers to its:`,
    options: [`Binding affinity`, `Maximum biological response`, `Therapeutic index`, `Clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 813,
    question: `A partial agonist differs from a full agonist because it:`,
    options: [`Has lower affinity`, `Has lower efficacy even at full receptor occupancy`, `Acts only as antagonist`, `Has no intrinsic activity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 814,
    question: `A competitive antagonist shifts the dose–response curve:`,
    options: [`Downward irreversibly`, `To the right without reducing maximal efficacy`, `To the left`, `Reducing both potency and efficacy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 815,
    question: `Noncompetitive antagonists reduce drug effect primarily by:`,
    options: [`Increasing EC₅₀`, `Decreasing maximum efficacy`, `Competing at same receptor site`, `Increasing receptor number`],
    correct: 1,
    explanation: ``
  },
  {
    id: 816,
    question: `A very difficult concept: spare receptors explain why:`,
    options: [`Antagonists increase efficacy`, `Maximal response occurs before full receptor occupancy`, `Drugs require higher doses`, `Tolerance develops`],
    correct: 1,
    explanation: ``
  },
  {
    id: 817,
    question: `Therapeutic index is defined as:`,
    options: [`ED₅₀/TD₅₀`, `TD₅₀/ED₅₀`, `LD₅₀/EC₅₀`, `EC₅₀/ED₅₀`],
    correct: 1,
    explanation: ``
  },
  {
    id: 818,
    question: `A narrow therapeutic index drug requires:`,
    options: [`Higher doses`, `Frequent therapeutic drug monitoring`, `Renal elimination`, `Low protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 819,
    question: `Pharmacogenomics most directly explains variability in:`,
    options: [`Drug formulation`, `Drug–drug interactions`, `Individual drug response`, `Drug storage conditions`],
    correct: 2,
    explanation: ``
  },
  {
    id: 820,
    question: `A classic example of pharmacogenetic variation is altered metabolism of:`,
    options: [`Aspirin`, `Codeine`, `Paracetamol`, `Heparin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 821,
    question: `Codeine produces analgesia only after:`,
    options: [`Renal excretion`, `CYP2D6-mediated conversion to morphine`, `Protein binding`, `Enterohepatic circulation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 822,
    question: `A poor metabolizer of CYP2D6 given codeine is at risk of:`,
    options: [`Severe respiratory depression`, `No analgesic effect`, `Increased addiction`, `Hepatotoxicity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 823,
    question: `Tolerance to a drug most commonly develops due to:`,
    options: [`Increased bioavailability`, `Receptor downregulation or desensitization`, `Increased renal clearance`, `Reduced metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 824,
    question: `Tachyphylaxis is best described as:`,
    options: [`Gradual loss of drug effect over months`, `Rapid loss of response after repeated doses`, `Immune-mediated resistance`, `Genetic resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 825,
    question: `A very difficult integration: cross-tolerance implies that:`,
    options: [`Two drugs have same chemical structure`, `Tolerance to one drug reduces response to another acting on same receptor`, `Drugs compete for metabolism`, `One drug antagonizes another`],
    correct: 1,
    explanation: `n same receptor`
  },
  {
    id: 826,
    question: `Drug–drug interactions at the level of CYP450 most commonly result in:`,
    options: [`Increased absorption`, `Altered metabolism`, `Reduced distribution`, `Increased renal clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 827,
    question: `Enzyme induction leads to:`,
    options: [`Increased plasma drug levels`, `Decreased drug clearance`, `Reduced therapeutic effect`, `Immediate toxicity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 828,
    question: `A classic enzyme inducer is:`,
    options: [`Erythromycin`, `Cimetidine`, `Rifampicin`, `Ketoconazole`],
    correct: 2,
    explanation: ``
  },
  {
    id: 829,
    question: `A very difficult concept: enzyme inhibition causes toxicity most rapidly because it:`,
    options: [`Requires gene transcription`, `Occurs immediately`, `Is irreversible`, `Reduces drug absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 830,
    question: `Drugs highly bound to plasma proteins are more likely to:`,
    options: [`Have large volume of distribution`, `Be pharmacologically inactive when bound`, `Be rapidly filtered by kidney`, `Cross BBB easily`],
    correct: 1,
    explanation: ``
  },
  {
    id: 831,
    question: `Hypoalbuminemia increases toxicity risk mainly for drugs that are:`,
    options: [`Hydrophilic`, `Highly protein bound`, `Renally excreted`, `Inhaled`],
    correct: 1,
    explanation: ``
  },
  {
    id: 832,
    question: `A very difficult integration: displacement of warfarin from albumin leads to:`,
    options: [`Reduced INR`, `Increased anticoagulant effect`, `Reduced metabolism`, `Reduced absorption`],
    correct: 1,
    explanation: ``
  },
  {
    id: 833,
    question: `Renal clearance of a drug exceeding GFR suggests:`,
    options: [`Passive filtration only`, `Tubular secretion`, `Tubular reabsorption`, `Protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 834,
    question: `A drug that is extensively reabsorbed in renal tubules will have:`,
    options: [`High clearance`, `Low clearance`, `Clearance equal to GFR`, `Clearance independent of urine pH`],
    correct: 1,
    explanation: ``
  },
  {
    id: 835,
    question: `The loading dose is calculated to:`,
    options: [`Maintain steady-state concentration`, `Achieve target plasma concentration rapidly`, `Reduce toxicity`, `Increase half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 836,
    question: `Maintenance dose primarily depends on:`,
    options: [`Volume of distribution`, `Bioavailability only`, `Clearance`, `Protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 837,
    question: `Steady state during repeated dosing is reached after approximately:`,
    options: [`One half-life`, `Two half-lives`, `Four to five half-lives`, `Ten half-lives`],
    correct: 2,
    explanation: ``
  },
  {
    id: 838,
    question: `A very difficult concept: increasing dose does NOT change time to steady state because:`,
    options: [`Clearance increases proportionally`, `Half-life is constant`, `Bioavailability decreases`, `Protein binding changes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 839,
    question: `Drugs crossing the blood–brain barrier most efficiently are:`,
    options: [`Ionized and polar`, `Highly lipid soluble`, `Protein bound`, `Renally excreted`],
    correct: 1,
    explanation: ``
  },
  {
    id: 840,
    question: `P-glycoprotein at the blood–brain barrier functions to:`,
    options: [`Enhance drug entry`, `Actively efflux drugs from CNS`, `Metabolize drugs`, `Increase CNS bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 841,
    question: `A very difficult integration: inhibition of P-glycoprotein would most likely:`,
    options: [`Reduce CNS toxicity`, `Increase CNS penetration of drugs`, `Reduce oral absorption`, `Increase renal clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 842,
    question: `Enterohepatic circulation prolongs drug action by:`,
    options: [`Increasing renal elimination`, `Recycling drug via bile and intestine`, `Increasing protein binding`, `Increasing first-pass metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 843,
    question: `Drugs undergoing enterohepatic circulation often show:`,
    options: [`Single sharp plasma peak`, `Multiple plasma concentration peaks`, `Rapid elimination`, `No biliary excretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 844,
    question: `A very difficult concept: cholestyramine reduces digoxin levels because it:`,
    options: [`Induces metabolism`, `Inhibits renal secretion`, `Interrupts enterohepatic circulation`, `Displaces protein binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 845,
    question: `Age-related pharmacokinetic changes in neonates most affect:`,
    options: [`Absorption only`, `Distribution only`, `Metabolism and excretion`, `Protein binding only`],
    correct: 2,
    explanation: ``
  },
  {
    id: 846,
    question: `Elderly patients are more prone to drug toxicity primarily because of:`,
    options: [`Increased absorption`, `Reduced renal clearance`, `Increased hepatic blood flow`, `Reduced protein binding only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 847,
    question: `A very difficult integration: creatinine clearance overestimates renal function in elderly because of:`,
    options: [`Increased muscle mass`, `Reduced creatinine production`, `Increased tubular secretion`, `Increased GFR`],
    correct: 1,
    explanation: ``
  },
  {
    id: 848,
    question: `Pregnancy alters drug pharmacokinetics mainly by:`,
    options: [`Decreasing plasma volume`, `Increasing plasma volume and GFR`, `Reducing hepatic metabolism`, `Reducing protein binding only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 849,
    question: `Teratogenic risk is highest during:`,
    options: [`First week of gestation`, `First trimester (organogenesis)`, `Second trimester`, `Third trimester`],
    correct: 1,
    explanation: ``
  },
  {
    id: 850,
    question: `The most common cause of adverse drug reactions in clinical practice is:`,
    options: [`Idiosyncratic reactions`, `Allergic reactions`, `Dose-related (Type A) reactions`, `Genetic mutations`],
    correct: 2,
    explanation: ``
  },
  {
    id: 851,
    question: `A drug that follows flow-limited hepatic clearance will show the greatest change in plasma concentration when:`,
    options: [`Plasma protein binding changes`, `Hepatic enzyme activity changes`, `Hepatic blood flow decreases`, `Renal clearance increases`],
    correct: 2,
    explanation: ``
  },
  {
    id: 852,
    question: `A very difficult concept: drugs with low hepatic extraction ratio are most sensitive to changes in:`,
    options: [`Hepatic blood flow`, `Enzyme induction or inhibition`, `Renal perfusion`, `Cardiac output`],
    correct: 1,
    explanation: ``
  },
  {
    id: 853,
    question: `First-order kinetics differ from zero-order kinetics because first-order kinetics:`,
    options: [`Eliminate a constant amount per unit time`, `Become saturated at low doses`, `Eliminate a constant fraction per unit time`, `Are independent of drug concentration`],
    correct: 2,
    explanation: ``
  },
  {
    id: 854,
    question: `A drug exhibits non-linear pharmacokinetics when:`,
    options: [`Bioavailability is constant`, `Clearance changes with dose`, `Half-life remains fixed`, `Protein binding is negligible`],
    correct: 1,
    explanation: ``
  },
  {
    id: 855,
    question: `A very difficult integration: phenytoin toxicity increases disproportionately with dose escalation because it:`,
    options: [`Has high protein binding`, `Undergoes zero-order metabolism at therapeutic range`, `Is renally excreted unchanged`, `Has large volume of distribution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 856,
    question: `The apparent volume of distribution can exceed total body water because:`,
    options: [`Drug accumulates in plasma`, `Drug binds extensively to tissues`, `Drug is rapidly eliminated`, `Drug is ionized`],
    correct: 1,
    explanation: ``
  },
  {
    id: 857,
    question: `A drug with high lipid solubility and low plasma protein binding will most likely have:`,
    options: [`Small Vd`, `Large Vd`, `Low tissue penetration`, `Rapid renal excretion`],
    correct: 1,
    explanation: ``
  },
  {
    id: 858,
    question: `Weak bases are preferentially excreted when urine is:`,
    options: [`Acidic`, `Alkaline`, `Neutral`, `Hyperosmolar`],
    correct: 0,
    explanation: ``
  },
  {
    id: 859,
    question: `A very difficult clinical concept: alkalinization of urine is useful in overdose of:`,
    options: [`Morphine`, `Phenobarbital`, `Amphetamine`, `Tricyclic antidepressants`],
    correct: 1,
    explanation: ``
  },
  {
    id: 860,
    question: `Bioequivalence between two drug formulations implies that they have:`,
    options: [`Identical chemical structure`, `Identical plasma concentration–time profiles`, `Comparable rate and extent of absorption`, `Same therapeutic index`],
    correct: 2,
    explanation: ``
  },
  {
    id: 861,
    question: `A drug with low oral bioavailability but high IV efficacy most likely undergoes:`,
    options: [`Poor intestinal absorption`, `Extensive first-pass metabolism`, `Renal elimination`, `Plasma protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 862,
    question: `A very difficult integration: grapefruit juice increases bioavailability of certain drugs by:`,
    options: [`Increasing gastric emptying`, `Inhibiting intestinal CYP3A4`, `Enhancing renal reabsorption`, `Inducing hepatic enzymes`],
    correct: 1,
    explanation: ``
  },
  {
    id: 863,
    question: `The pharmacologic effect of a drug is terminated mainly by:`,
    options: [`Distribution`, `Metabolism and excretion`, `Protein binding`, `Receptor downregulation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 864,
    question: `A drug acting as a partial agonist in the presence of a full agonist will:`,
    options: [`Increase maximal effect`, `Decrease maximal effect`, `Shift curve left`, `Increase potency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 865,
    question: `A very difficult receptor concept: irreversible competitive antagonists reduce efficacy because they:`,
    options: [`Shift curve right only`, `Permanently reduce receptor number`, `Decrease affinity`, `Increase EC₅₀ only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 866,
    question: `Spare receptors are most evident when:`,
    options: [`EC₅₀ is greater than KD`, `Maximal response occurs at low receptor occupancy`, `Antagonists are present`, `Drug efficacy is low`],
    correct: 1,
    explanation: ``
  },
  {
    id: 867,
    question: `A drug with high efficacy but low potency:`,
    options: [`Produces weak maximal response`, `Requires higher dose to achieve effect`, `Has narrow therapeutic index`, `Is unsafe`],
    correct: 1,
    explanation: ``
  },
  {
    id: 868,
    question: `Quantal dose–response curves are most useful for determining:`,
    options: [`Potency`, `Efficacy`, `Therapeutic index`, `Receptor affinity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 869,
    question: `A very difficult integration: ED₅₀ on a quantal curve represents the dose that:`,
    options: [`Produces 50% maximal effect`, `Produces effect in 50% of population`, `Produces toxicity in 50%`, `Binds 50% receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 870,
    question: `Idiosyncratic drug reactions are best characterized as:`,
    options: [`Dose-dependent`, `Predictable`, `Genetically determined and unpredictable`, `Immune mediated`],
    correct: 2,
    explanation: ``
  },
  {
    id: 871,
    question: `Type B adverse drug reactions differ from Type A because they are:`,
    options: [`More common`, `Dose-related`, `Unpredictable and unrelated to pharmacology`, `Easily preventable`],
    correct: 2,
    explanation: ``
  },
  {
    id: 872,
    question: `A very difficult integration: slow acetylators are at increased risk of toxicity from:`,
    options: [`Paracetamol`, `Isoniazid`, `Penicillin`, `Aspirin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 873,
    question: `Drug tolerance due to enzyme induction differs from receptor tolerance because enzyme induction:`,
    options: [`Occurs rapidly`, `Is irreversible`, `Increases drug metabolism`, `Reduces receptor number`],
    correct: 2,
    explanation: ``
  },
  {
    id: 874,
    question: `Tachyphylaxis is most commonly seen with:`,
    options: [`β-blockers`, `Nitrates`, `Indirect sympathomimetics`, `Corticosteroids`],
    correct: 2,
    explanation: ``
  },
  {
    id: 875,
    question: `A very difficult concept: repeated use of ephedrine leads to tachyphylaxis because it:`,
    options: [`Blocks β-receptors`, `Depletes presynaptic norepinephrine stores`, `Induces enzymes`, `Desensitizes receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 876,
    question: `CYP450 induction results in all EXCEPT:`,
    options: [`Reduced drug effect`, `Increased clearance`, `Delayed onset of toxicity`, `Immediate increase in drug levels`],
    correct: 3,
    explanation: ``
  },
  {
    id: 877,
    question: `CYP450 inhibition is clinically dangerous mainly because it:`,
    options: [`Requires gene transcription`, `Causes delayed toxicity`, `Produces rapid rise in plasma drug levels`, `Reduces absorption`],
    correct: 2,
    explanation: ``
  },
  {
    id: 878,
    question: `A very difficult integration: erythromycin increases toxicity of certain drugs by:`,
    options: [`Enzyme induction`, `P-glycoprotein activation`, `CYP3A4 inhibition`, `Increased renal clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 879,
    question: `Only the free fraction of a drug is pharmacologically active because:`,
    options: [`Bound drug is metabolized faster`, `Bound drug cannot cross membranes`, `Bound drug is excreted rapidly`, `Bound drug is inactive permanently`],
    correct: 1,
    explanation: ``
  },
  {
    id: 880,
    question: `Hypoalbuminemia most significantly affects drugs that are:`,
    options: [`Highly lipid soluble`, `Weak bases`, `Highly protein bound`, `Renally excreted`],
    correct: 2,
    explanation: ``
  },
  {
    id: 881,
    question: `Renal clearance less than GFR suggests:`,
    options: [`Active secretion`, `Tubular reabsorption`, `Filtration only`, `Protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 882,
    question: `A very difficult integration: alkalinization of urine decreases clearance of:`,
    options: [`Weak acids`, `Weak bases`, `Neutral drugs`, `Protein-bound drugs`],
    correct: 1,
    explanation: ``
  },
  {
    id: 883,
    question: `A loading dose is particularly useful for drugs with:`,
    options: [`Short half-life`, `Large volume of distribution`, `Low bioavailability`, `Narrow therapeutic index only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 884,
    question: `Maintenance dose adjustment is most critical in patients with:`,
    options: [`Liver disease only`, `Renal impairment`, `Obesity`, `Pregnancy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 885,
    question: `Steady-state plasma concentration depends on all EXCEPT:`,
    options: [`Dose rate`, `Clearance`, `Half-life`, `Route of administration`],
    correct: 2,
    explanation: ``
  },
  {
    id: 886,
    question: `A very difficult integration: doubling the dose rate will:`,
    options: [`Double steady-state concentration`, `Halve half-life`, `Shorten time to steady state`, `Increase clearance`],
    correct: 0,
    explanation: ``
  },
  {
    id: 887,
    question: `Drugs that cross the placenta most readily are:`,
    options: [`Ionized`, `Highly protein bound`, `Lipid soluble and non-ionized`, `Large molecular weight`],
    correct: 2,
    explanation: ``
  },
  {
    id: 888,
    question: `The fetal compartment is more susceptible to ion trapping of:`,
    options: [`Weak acids`, `Weak bases`, `Neutral drugs`, `Proteins`],
    correct: 1,
    explanation: ``
  },
  {
    id: 889,
    question: `A very difficult teratology concept: the all-or-none effect occurs during:`,
    options: [`Organogenesis`, `Fetal growth phase`, `Pre-implantation period`, `Late third trimester`],
    correct: 2,
    explanation: ``
  },
  {
    id: 890,
    question: `Drug passage into breast milk is highest for drugs that are:`,
    options: [`Weak acids`, `Highly protein bound`, `Weak bases`, `Hydrophilic`],
    correct: 2,
    explanation: ``
  },
  {
    id: 891,
    question: `A very difficult integration: chloramphenicol causes gray baby syndrome because neonates:`,
    options: [`Have reduced protein binding`, `Cannot conjugate the drug efficiently`, `Have increased renal clearance`, `Absorb drug excessively`],
    correct: 1,
    explanation: ``
  },
  {
    id: 892,
    question: `Pharmacodynamic tolerance differs from pharmacokinetic tolerance because it involves:`,
    options: [`Altered metabolism`, `Altered receptor response`, `Reduced absorption`, `Increased clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 893,
    question: `A drug with low therapeutic index should ideally be:`,
    options: [`Given in high doses`, `Monitored by plasma levels`, `Avoided in elderly only`, `Used without caution`],
    correct: 1,
    explanation: ``
  },
  {
    id: 894,
    question: `A very difficult integration: digoxin toxicity increases in hypokalemia because:`,
    options: [`Digoxin is renally excreted`, `Potassium competes with digoxin at Na⁺/K⁺-ATPase`, `Hypokalemia increases absorption`, `Protein binding increases`],
    correct: 1,
    explanation: ``
  },
  {
    id: 895,
    question: `Time-dependent killing of bacteria is best achieved by:`,
    options: [`Increasing peak concentration`, `Maintaining drug level above MIC`, `Increasing dosing interval`, `Using loading doses only`],
    correct: 1,
    explanation: ``
  },
  {
    id: 896,
    question: `Concentration-dependent killing is optimized by:`,
    options: [`Frequent low doses`, `Long infusion times`, `High peak concentrations`, `Continuous infusion`],
    correct: 2,
    explanation: ``
  },
  {
    id: 897,
    question: `A very difficult antimicrobial pharmacology concept: post-antibiotic effect refers to:`,
    options: [`Persistent toxicity after drug removal`, `Continued bacterial suppression after drug concentration falls below MIC`, `Delayed drug absorption`, `Immune-mediated killing`],
    correct: 1,
    explanation: `falls below MIC`
  },
  {
    id: 898,
    question: `Drugs eliminated by first-order kinetics will show linear relationship between:`,
    options: [`Dose and half-life`, `Dose and plasma concentration`, `Clearance and time`, `Volume of distribution and efficacy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 899,
    question: `A very difficult integration: saturation of plasma protein binding will initially cause:`,
    options: [`Reduced free drug`, `Disproportionate increase in free drug`, `Reduced clearance`, `Reduced efficacy`],
    correct: 1,
    explanation: ``
  },
  {
    id: 900,
    question: `The MOST unpredictable drug-related toxicity arises from:`,
    options: [`Dose-related reactions`, `Pharmacologic exaggeration`, `Idiosyncratic reactions`, `Drug interactions`],
    correct: 2,
    explanation: ``
  },
  {
    id: 901,
    question: `Which pharmacokinetic parameter best describes the efficiency of drug elimination by the body?`,
    options: [`Volume of distribution`, `Bioavailability`, `Clearance`, `Half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 902,
    question: `A drug that is 90% plasma protein bound will have which immediate effect if another highly protein-bound drug displaces it?`,
    options: [`Reduced total drug concentration`, `Increased free (active) drug fraction`, `Increased renal excretion only`, `No clinical significance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 903,
    question: `Which of the following drugs is classically associated with zero-order kinetics at therapeutic doses?`,
    options: [`Theophylline`, `Phenytoin`, `Warfarin`, `Digoxin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 904,
    question: `A patient with chronic liver disease is most likely to show reduced clearance of drugs that are:`,
    options: [`Renally excreted unchanged`, `High hepatic extraction ratio`, `Low hepatic extraction ratio`, `Poorly absorbed orally`],
    correct: 2,
    explanation: ``
  },
  {
    id: 905,
    question: `Which factor most strongly determines time to reach steady state during continuous drug infusion?`,
    options: [`Dose administered`, `Clearance`, `Half-life`, `Bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 906,
    question: `A drug that is a weak acid will be reabsorbed in renal tubules when urine is:`,
    options: [`Acidic`, `Alkaline`, `Hypertonic`, `Dilute`],
    correct: 0,
    explanation: ``
  },
  {
    id: 907,
    question: `Which pharmacodynamic property determines the maximal effect a drug can produce?`,
    options: [`Potency`, `Affinity`, `Efficacy`, `Selectivity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 908,
    question: `A competitive antagonist can be overcome by increasing the dose of agonist because it:`,
    options: [`Reduces receptor number`, `Binds irreversibly`, `Competes at the same receptor site`, `Reduces intrinsic activity`],
    correct: 2,
    explanation: ``
  },
  {
    id: 909,
    question: `Which type of antagonist reduces both potency and efficacy of an agonist?`,
    options: [`Competitive`, `Partial`, `Noncompetitive`, `Physiologic`],
    correct: 2,
    explanation: ``
  },
  {
    id: 910,
    question: `A partial agonist administered with a full agonist will most likely:`,
    options: [`Increase maximal response`, `Act as a functional antagonist`, `Have no effect`, `Increase potency`],
    correct: 1,
    explanation: ``
  },
  {
    id: 911,
    question: `Therapeutic index is BEST used clinically to estimate:`,
    options: [`Drug efficacy`, `Drug potency`, `Drug safety margin`, `Drug clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 912,
    question: `Which adverse drug reaction type is dose-dependent and predictable?`,
    options: [`Type A`, `Type B`, `Idiosyncratic`, `Allergic`],
    correct: 0,
    explanation: ``
  },
  {
    id: 913,
    question: `A very difficult concept: a drug with extensive first-pass metabolism will show which characteristic when given orally?`,
    options: [`High bioavailability`, `Delayed onset`, `Reduced systemic exposure`, `Increased half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 914,
    question: `Which enzyme system is MOST responsible for drug metabolism in the liver?`,
    options: [`Monoamine oxidase`, `Alcohol dehydrogenase`, `Cytochrome P450`, `Esterases`],
    correct: 2,
    explanation: ``
  },
  {
    id: 915,
    question: `Enzyme induction typically results in all EXCEPT:`,
    options: [`Reduced plasma drug levels`, `Reduced therapeutic effect`, `Delayed toxicity`, `Immediate increase in drug concentration`],
    correct: 3,
    explanation: ``
  },
  {
    id: 916,
    question: `A patient stabilized on warfarin starts rifampicin. The most likely outcome is:`,
    options: [`Increased INR`, `Decreased INR`, `No change`, `Acute bleeding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 917,
    question: `Which CYP enzyme polymorphism is most clinically relevant for codeine metabolism?`,
    options: [`CYP3A4`, `CYP2C9`, `CYP2D6`, `CYP1A2`],
    correct: 2,
    explanation: ``
  },
  {
    id: 918,
    question: `A poor CYP2D6 metabolizer receiving codeine will experience:`,
    options: [`Severe respiratory depression`, `Enhanced analgesia`, `Minimal analgesic effect`, `Increased addiction risk`],
    correct: 2,
    explanation: ``
  },
  {
    id: 919,
    question: `A very difficult integration: elderly patients are more sensitive to benzodiazepines mainly because of:`,
    options: [`Increased absorption`, `Increased protein binding`, `Reduced hepatic metabolism and brain sensitivity`, `Increased renal clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 920,
    question: `Which pharmacokinetic change occurs consistently in aging?`,
    options: [`Increased GFR`, `Increased hepatic blood flow`, `Decreased renal clearance`, `Increased plasma albumin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 921,
    question: `A drug that undergoes enterohepatic circulation will most likely show:`,
    options: [`Rapid elimination`, `Multiple plasma peaks`, `Zero-order kinetics`, `Low bioavailability`],
    correct: 1,
    explanation: ``
  },
  {
    id: 922,
    question: `Which drug interaction reduces enterohepatic circulation and lowers drug levels?`,
    options: [`Cimetidine`, `Rifampicin`, `Cholestyramine`, `Erythromycin`],
    correct: 2,
    explanation: ``
  },
  {
    id: 923,
    question: `A loading dose is particularly useful when a drug has:`,
    options: [`Short half-life`, `Narrow therapeutic index`, `Large volume of distribution`, `Low clearance`],
    correct: 2,
    explanation: ``
  },
  {
    id: 924,
    question: `Which parameter primarily determines maintenance dose?`,
    options: [`Volume of distribution`, `Clearance`, `Bioavailability`, `Half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 925,
    question: `A very difficult concept: doubling the maintenance dose will:`,
    options: [`Double time to steady state`, `Double steady-state concentration`, `Halve half-life`, `Increase clearance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 926,
    question: `Drugs cross the blood–brain barrier most efficiently when they are:`,
    options: [`Ionized`, `Hydrophilic`, `Lipid soluble and non-ionized`, `Protein bound`],
    correct: 2,
    explanation: ``
  },
  {
    id: 927,
    question: `Which transporter actively limits drug entry into the CNS?`,
    options: [`GLUT-4`, `P-glycoprotein`, `OAT`, `OCT`],
    correct: 1,
    explanation: ``
  },
  {
    id: 928,
    question: `Inhibition of P-glycoprotein would most likely cause:`,
    options: [`Reduced oral absorption`, `Increased CNS drug toxicity`, `Reduced renal clearance`, `Increased protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 929,
    question: `A very difficult integration: pregnancy alters drug distribution primarily because of:`,
    options: [`Reduced plasma volume`, `Increased plasma volume and fat stores`, `Reduced renal blood flow`, `Increased protein binding`],
    correct: 1,
    explanation: ``
  },
  {
    id: 930,
    question: `The period of highest teratogenic risk is:`,
    options: [`Pre-implantation`, `Organogenesis`, `Late pregnancy`, `Lactation`],
    correct: 1,
    explanation: ``
  },
  {
    id: 931,
    question: `Drugs most likely to accumulate in breast milk are:`,
    options: [`Weak acids`, `Strong bases`, `Weak bases`, `Highly protein bound drugs`],
    correct: 2,
    explanation: ``
  },
  {
    id: 932,
    question: `A very difficult concept: neonates are at increased risk of drug toxicity primarily due to:`,
    options: [`Increased absorption`, `Immature hepatic and renal function`, `Increased protein binding`, `Enhanced metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 933,
    question: `Which pharmacologic principle explains reduced response after repeated drug use?`,
    options: [`Potentiation`, `Tolerance`, `Synergism`, `Additivity`],
    correct: 1,
    explanation: ``
  },
  {
    id: 934,
    question: `Tachyphylaxis is BEST described as:`,
    options: [`Gradual tolerance over weeks`, `Rapid loss of response after repeated doses`, `Immune-mediated resistance`, `Genetic resistance`],
    correct: 1,
    explanation: ``
  },
  {
    id: 935,
    question: `Which drug class most commonly shows tachyphylaxis?`,
    options: [`Corticosteroids`, `Indirect sympathomimetics`, `Antibiotics`, `Antipsychotics`],
    correct: 1,
    explanation: ``
  },
  {
    id: 936,
    question: `A very difficult integration: cross-tolerance implies that two drugs:`,
    options: [`Are chemically identical`, `Act on the same receptor system`, `Share the same metabolic pathway`, `Have same therapeutic index`],
    correct: 1,
    explanation: ``
  },
  {
    id: 937,
    question: `Which parameter best predicts dose-related toxicity?`,
    options: [`Potency`, `Efficacy`, `Therapeutic index`, `Bioavailability`],
    correct: 2,
    explanation: ``
  },
  {
    id: 938,
    question: `Quantal dose–response curves are MOST useful for:`,
    options: [`Measuring potency`, `Measuring efficacy`, `Comparing population response`, `Studying receptor binding`],
    correct: 2,
    explanation: ``
  },
  {
    id: 939,
    question: `ED₅₀ on a quantal curve refers to the dose that:`,
    options: [`Produces 50% maximal effect`, `Produces effect in 50% of subjects`, `Is lethal to 50%`, `Occupies 50% receptors`],
    correct: 1,
    explanation: ``
  },
  {
    id: 940,
    question: `A very difficult concept: drugs with narrow therapeutic index require monitoring because:`,
    options: [`They are poorly absorbed`, `Small dose changes cause large effect changes`, `They are highly protein bound`, `They undergo first-pass metabolism`],
    correct: 1,
    explanation: ``
  },
  {
    id: 941,
    question: `Which adverse drug reaction is immune-mediated and dose-independent?`,
    options: [`Type A`, `Type B`, `Type C`, `Type D`],
    correct: 1,
    explanation: ``
  },
  {
    id: 942,
    question: `A drug causing Stevens–Johnson syndrome is an example of:`,
    options: [`Predictable toxicity`, `Pharmacologic exaggeration`, `Idiosyncratic reaction`, `Drug interaction`],
    correct: 2,
    explanation: ``
  },
  {
    id: 943,
    question: `A very difficult integration: slow acetylators are at higher risk of toxicity from which drug?`,
    options: [`Paracetamol`, `Isoniazid`, `Penicillin`, `Aspirin`],
    correct: 1,
    explanation: ``
  },
  {
    id: 944,
    question: `Which factor MOST increases risk of adverse drug reactions?`,
    options: [`Young age`, `Female sex only`, `Polypharmacy`, `Short half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 945,
    question: `Time-dependent killing antibiotics require:`,
    options: [`High peak concentration`, `Long dosing interval`, `Drug level above MIC for longer time`, `Single daily dose`],
    correct: 2,
    explanation: ``
  },
  {
    id: 946,
    question: `Concentration-dependent killing is optimized by:`,
    options: [`Continuous infusion`, `Frequent small doses`, `High peak levels`, `Long half-life`],
    correct: 2,
    explanation: ``
  },
  {
    id: 947,
    question: `Post-antibiotic effect refers to:`,
    options: [`Toxicity after stopping antibiotics`, `Continued bacterial suppression after drug removal`, `Delayed drug absorption`, `Immune-mediated killing`],
    correct: 1,
    explanation: ``
  },
  {
    id: 948,
    question: `A very difficult integration: hypokalemia increases digoxin toxicity because:`,
    options: [`Digoxin clearance is reduced`, `Potassium competes with digoxin at Na⁺/K⁺-ATPase`, `Digoxin absorption increases`, `Protein binding increases`],
    correct: 1,
    explanation: ``
  },
  {
    id: 949,
    question: `Which drug characteristic MOST predicts CNS penetration?`,
    options: [`Molecular weight`, `Lipid solubility`, `Renal clearance`, `Plasma half-life`],
    correct: 1,
    explanation: ``
  },
  {
    id: 950,
    question: `MOST common cause of preventable adverse drug reactions is:`,
    options: [`Genetic polymorphism`, `Drug allergy`, `Drug–drug interactions`, `Idiosyncratic reactions`],
    correct: 2,
    explanation: `WhatsApp Group for JCAT/Part1, etc preparation: https://chat.whatsapp.com/JlHbw5ltvFaGi19m7A6uaR?mode=gi_c`
  },
];