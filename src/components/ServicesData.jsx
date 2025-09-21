// src/ServicesData.js
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/storage.jpg";
import img6 from "../assets/patient1.jpg";

const services = [
  {
    id: "first-aid",
    title: "First Aid and Emergency Response",
    image: img1,
    description:
      "Our first aid and emergency response services are designed to provide immediate assistance in case of accidents, sudden illnesses, or injuries before professional medical help arrives. We emphasize rapid intervention, safety education, and preparedness for all environments.",
    details: [
      "Training in basic life support (BLS) and first aid for coaches, referees, and volunteers.",
      "Mobile response units for sports tournaments, corporate events, and community gatherings.",
      "Basic life support and CPR",
      "Handling injuries and fractures",
      "Emergency preparedness training",
      "On-site risk assessment and safety planning",
      "Provision of emergency kits and supplies",
    ],
    benefits: [
      "Reduces risk of complications from injuries",
      "Empowers communities with lifesaving skills",
      "Improves safety standards at events",
    ],
  },
  {
    id: "home-care",
    title: "Homecare and Nursing",
    image: img2,
    description:
      "Our home care nursing services provide professional healthcare at the comfort of your home, ensuring continuity of care and support for patients and families. We tailor our care plans to meet individual needs, promoting recovery and independence.",
    details: [
      "Medication management",
      "Post-surgical care",
      "Chronic illness monitoring",
      "Personal hygiene and daily living support",
      "Nutrition and dietary guidance",
      "Wound care and dressing changes",
      "Family caregiver training",
    ],
    benefits: [
      "Improves patient comfort and recovery",
      "Reduces hospital readmissions",
      "Supports family involvement in care",
    ],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy and Occupational Therapy",
    image: img6,
    description:
      "We offer physiotherapy and occupational therapy services to help patients recover mobility, improve independence, and manage pain effectively. Our therapists use evidence-based techniques and personalized plans for optimal outcomes.",
    details: [
      "Sports physiotherapy",
      "Musculoskeletal therapy",
      "Cardiac and respiratory rehabilitation",
      "Occupational therapy for children and adults",
      "Pain management strategies",
      "Post-injury and post-surgery rehabilitation",
      "Assistive device training",
    ],
    benefits: [
      "Restores function and movement",
      "Enhances quality of life",
      "Promotes faster recovery",
    ],
  },
  {
    id: "insurance",
    title: "Insurance Support (with GRIA)",
    image: img3,
    description:
      "We partner with GRIA to provide accessible insurance solutions, helping individuals and families secure financial protection against unexpected medical expenses. Our support includes guidance on coverage options, claims assistance, and community-based health financing for vulnerable groups. We also offer educational workshops to improve understanding of health insurance benefits.",
    details: [
      "Affordable and simplified insurance coverage.",
      "Community health financing models for vulnerable groups.",
      "Awareness programs on the importance of financial protection in healthcare",
      "Assistance with insurance claims and documentation",
      "Workshops on insurance literacy",
    ],
    benefits: [
      "Reduces financial stress during medical emergencies",
      "Improves access to quality healthcare",
      "Empowers communities to make informed decisions",
    ],
  },
  {
    id: "wound-care",
    title: "Advanced Wound Care",
    image: img4,
    description:
      "We provide specialized wound care services using modern techniques to ensure faster healing and reduce the risk of infections. Our team manages complex wounds and educates patients on proper wound care at home.",
    details: [
      "Management of chronic wounds",
      "Diabetic foot care",
      "Post-surgical wound management",
      "Pressure ulcer prevention and treatment",
      "Advanced dressings and wound products",
      "Patient education on wound care",
      "Regular wound assessment and monitoring",
    ],
    benefits: [
      "Promotes faster healing",
      "Prevents complications and infections",
      "Improves patient comfort",
    ],
  },
  {
    id: "medical-equipment",
    title: "Sports Medicine and Recovery Supplies",
    image: img5,
    description:
      "Our medical shop offers a wide range of medical equipment and accessories to support patient care at home and in healthcare facilities. We provide expert advice on selecting the right products for recovery and rehabilitation.",
    details: [
      "Professional recovery kits, braces, and sports health products for athletes.",
      "Partnerships with leagues and schools to standardize safe sports practices.",
      "Mobility aids (walkers, wheelchairs, crutches)",
      "Patient monitoring devices",
      "Home medical kits",
      "Rehabilitation equipment",
      "Product demonstrations and training",
      "Equipment rental and maintenance",
    ],
    benefits: [
      "Enhances recovery and rehabilitation",
      "Improves patient safety and comfort",
      "Supports independent living",
    ],
  },
];

export default services;
