export type Office = {
  id: "birmingham" | "wolverhampton";
  label: string;              // "Main Office" / "Branch Office"
  isMain: boolean;
  street: string;             // "180-182 Soho Hill"
  locality: string;           // "Handsworth"  (optional, can be empty string)
  city: string;               // "Birmingham"
  region: string;             // "West Midlands"
  postcode: string;           // "B19 1AG"
  country: "GB";
  fullAddressOneLine: string; // "180-182 Soho Hill, Handsworth, Birmingham B19 1AG"
  fullAddressMultiLine: string[];
  phoneDisplay: string;       // "0121 554 4900"
  phoneTel: string;           // "tel:+441215544900"   (no spaces)
  phoneE164: string;          // "+441215544900"        (for schema)
  email: string;              // "info@mauriceandrewssolicitors.co.uk"
  googleMapsUrl: string;      // canonical Google Maps URL (Share → link)
  googleMapsEmbed: string;    // /maps?...&output=embed iframe URL
  googlePlaceId: string;      // ChIJ...   (for schema geo)
  mapLat?: number;            // optional — only if needed
  mapLng?: number;
  hours: { day: string; hours: string }[];
};

export const offices: Office[] = [
  {
    id: "birmingham",
    label: "Main Office",
    isMain: true,
    street: "180-182 Soho Hill",
    locality: "Handsworth",
    city: "Birmingham",
    region: "West Midlands",
    postcode: "B19 1AG",
    country: "GB",
    fullAddressOneLine: "180-182 Soho Hill, Handsworth, Birmingham B19 1AG",
    fullAddressMultiLine: [
      "180-182 Soho Hill",
      "Handsworth",
      "Birmingham B19 1AG",
    ],
    phoneDisplay: "0121 554 4900",
    phoneTel: "tel:+441215544900",
    phoneE164: "+441215544900",
    email: "info@mauriceandrewssolicitors.co.uk",
    googleMapsUrl:
      "https://maps.google.com/?q=180-182+Soho+Hill+Birmingham+B19+1AG",
    googleMapsEmbed:
      "https://maps.google.com/maps?width=600&height=400&hl=en&q=180%20Soho%20Hill%20Birmingham%20B19%201AG&t=&z=16&ie=UTF8&iwloc=B&output=embed",
    googlePlaceId: "",
    hours: [
      { day: "Monday", hours: "9:00 AM – 5:30 PM" },
      { day: "Tuesday", hours: "9:00 AM – 5:30 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:30 PM" },
      { day: "Thursday", hours: "9:00 AM – 5:30 PM" },
      { day: "Friday", hours: "9:00 AM – 5:30 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
  {
    id: "wolverhampton",
    label: "Branch Office",
    isMain: false,
    street: "3rd & 4th Floors, 84 Salop Street",
    locality: "",
    city: "Wolverhampton",
    region: "West Midlands",
    postcode: "WV3 0SR",
    country: "GB",
    fullAddressOneLine:
      "3rd & 4th Floors, 84 Salop Street, Wolverhampton WV3 0SR",
    fullAddressMultiLine: [
      "3rd & 4th Floors",
      "84 Salop Street",
      "Wolverhampton WV3 0SR",
    ],
    phoneDisplay: "01902 965560",
    phoneTel: "tel:+441902965560",
    phoneE164: "+441902965560",
    email: "info@mauriceandrewssolicitors.co.uk",
    googleMapsUrl: "https://maps.app.goo.gl/g3Kobzs4nuK48niE6",
    googleMapsEmbed:
      "https://www.google.com/maps?q=3rd+%26+4th+floors,+Regus+-+Wolverhampton,+Salop+Street,+84+Salop+St,+Wolverhampton+WV3+0SR&ftid=0x48709b510145d57d:0xe40440a9eeddcf31&hl=en&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googlePlaceId: "0x48709b510145d57d:0xe40440a9eeddcf31",
    hours: [
      { day: "Monday", hours: "9:00 AM – 5:30 PM" },
      { day: "Tuesday", hours: "9:00 AM – 5:30 PM" },
      { day: "Wednesday", hours: "9:00 AM – 5:30 PM" },
      { day: "Thursday", hours: "9:00 AM – 5:30 PM" },
      { day: "Friday", hours: "9:00 AM – 5:30 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
  },
];

export const mainOffice: Office = offices.find((o) => o.isMain)!;
export const branchOffice: Office = offices.find((o) => !o.isMain)!;