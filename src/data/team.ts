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