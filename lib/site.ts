export const site = {
  name: "City Wide Printing Services",
  shortName: "CITY WIDE",
  phoneDisplay: "+971 52 776 7733",
  phoneTel: "+971527767733",
  whatsappUrl:
    "https://wa.me/971527767733?text=" +
    encodeURIComponent(
      "Hello City Wide Printing Services — I have a printing requirement."
    ),
  mapsUrl: "https://maps.google.com/?q=24.3528125,54.4993125",
  addressLine: "32/4, 11 Street, M37, Mussafah, Abu Dhabi",
  area: "M-37, Mussafah, Abu Dhabi",
  hours: "Open daily · 8 AM–9 PM",
  hoursShort: "8 AM–9 PM",
} as const

export const services = [
  {
    id: "01",
    title: "Printing",
    description:
      "Everyday printing for personal and business document requirements.",
  },
  {
    id: "02",
    title: "Photocopying",
    description: "Document copying for routine personal and business needs.",
  },
  {
    id: "03",
    title: "Typing Services",
    description: "Typing and document preparation services.",
  },
  {
    id: "04",
    title: "Large Format",
    description:
      "Large-format printing for customers needing larger printed outputs.",
  },
  {
    id: "05",
    title: "Copy Center",
    description:
      "A local destination for everyday printing and copying requirements.",
  },
] as const
