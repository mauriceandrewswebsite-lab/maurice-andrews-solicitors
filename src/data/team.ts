export type TeamMember = {
  name: string;
  title: string;          // shown on the team page (large card) — leave empty to hide on cards
  profileTitle: string;   // shown ONLY inside the profile modal (e.g. "Trainee Solicitor")
  img: string | null;
  initials: string | null;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Akhmed Yakoob",
    title: "DIRECTOR - SOLICITOR",
    profileTitle: "Director & Solicitor",
    img: "/assets/akhmed-yakoob.jpg",
    initials: null,
    bio: "A pillar of unwavering dedication and unparalleled legal acumen, Mr. Akhmed Yakoob has cemented his position as one of the UK's leading legal minds, especially in complex matters and serious crimes. With an illustrious journey spanning over 15 years, his association with Maurice Andrews Solicitors began in 2014. As he worked under the mentorship of Mr. Andrews, the erstwhile director, Mr. Yakoob honed his expertise, amplifying both his depth of knowledge and commitment to achieving outstanding results for every client. His speciality lies in constructing robust defences and presenting them in the most compelling manner before the courts. When Mr. Andrews opted for a well-deserved retirement in 2016, the mantle naturally passed to Mr. Yakoob, whose exemplary work ethic and consistent success spoke volumes of his capability. Embracing this leadership role, he embarked on a transformative journey for the firm between 2016 and 2018, implementing a comprehensive rebrand while preserving the firm's venerable name as a nod to its esteemed legacy. A visionary, Mr. Yakoob recognised the value of continuous learning and investment in human capital. Under his guidance, the firm fortified its ranks, adding to its cadre of lawyers, trainees, paralegals, and administrative staff, reaching a robust team of over 10 by 2019. The onset of the COVID pandemic in 2019 saw Mr. Yakoob's innovation come to the fore. Not only did he steer the firm with resilience but also ventured into the digital realm, disseminating free legal insights on criminal law and rights during police engagements. This initiative propelled Maurice Andrews Solicitors into the spotlight, garnering a significant online following and turning it into a household name. In the courtroom, Mr. Yakoob is a force to be reckoned with. Known as a fierce, powerful, and unwavering advocate for justice, he's handled numerous high-profile cases, securing the best possible outcomes for his clients. His reputation as an elite litigator and strategist precedes him, making him the go-to solicitor for those facing serious allegations.",
  },
  {
    name: "Mariam Khan",
    title: "",
    profileTitle: "Trainee Solicitor",
    img: null,
    initials: "MK",
    bio: "Miss Khan joined Maurice Andrews Solicitors as a Trainee Solicitor, having completed her LPC at the University of Law. She works alongside our senior solicitors on a broad range of criminal defence matters, from initial police station attendance through to Crown Court preparation. Her particular interests include drug offences, financial crime, and youth justice. Miss Khan holds a degree in Law from the University of Birmingham and speaks English, Urdu, and Punjabi. She is dedicated to client care and continues to develop her advocacy skills through ongoing professional training with the firm.",
  },
  {
    name: "Mazar Iqbal",
    title: "SENIOR SOLICITOR & HIGH COURT ADVOCATE",
    profileTitle: "Senior Solicitor & High Court Advocate",
    img: "/assets/other-01.mazar.jpg",
    initials: null,
    bio: "Joining Maurice Andrews Solicitors in 2018, Mr. Iqbal has established himself as an integral part of our team, bringing with him over two decades of rich legal experience. As a Senior Solicitor and High Court Advocate, he has a commendable track record of defending clients in both Magistrates Court and Crown Court. Having handled numerous high-profile cases, Mr. Iqbal's expertise spans a broad spectrum, from handling serious offenses like Rape and Terrorism to complex matters involving Money Laundering, Fraud, and Business Investigations. Beyond his legal acumen, Mr. Iqbal is renowned for his ability to craft compelling defenses that not only resonate in the courtroom but also ensure his clients' voices are genuinely heard and heeded. Often referred to as a \"problem solver,\" he is relentless in his pursuit of innovative solutions to the challenges that arise. Clients can be confident when Mr. Iqbal is in their corner; his success rate speaks for itself. Described by those he represents as a robust and eloquent advocate, Mr. Iqbal consistently approaches each case with professionalism and unwavering commitment.",
  },
  {
    name: "Tabrace Hussain",
    title: "PARALEGAL - POLICE STATION ACCREDITED",
    profileTitle: "Paralegal — Police Station Accredited",
    img: "/assets/P1345612-1.1d45a86b.jpg",
    initials: null,
    bio: "Tabrace Hussain is an integral part of the Maurice Andrews Solicitors team, consistently proving his worth through his meticulous work and dedication. Armed with his Police Station Accreditation, he serves as a beacon of support for clients during their preliminary engagements with the legal system, a time that can often be fraught with uncertainty and anxiety. His deep understanding of the complexities involved in early-stage legal processes ensures that clients are not only well-represented, but also informed every step of the way. Beyond his technical knowledge, Tabrace is known for his ability to empathise with clients, offering a reassuring presence when it's needed most. Collaborative by nature, he works seamlessly with other members of our team, ensuring that all aspects of a client's case are thoroughly examined and addressed. Furthermore, his continuous pursuit of professional growth is testament to his commitment to excellence in the field of law.",
  },
];