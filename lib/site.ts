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
    description: "Documents, forms, and everyday business print runs.",
    image: "/assets/print-sheets.png",
    imageAlt: "Printed sheets with registration marks",
  },
  {
    id: "02",
    title: "Photocopying",
    description: "Quick copies for personal and office needs.",
    image: "/assets/desk-documents.png",
    imageAlt: "Documents ready for copying",
  },
  {
    id: "03",
    title: "Typing",
    description: "Document typing and preparation when you need it done right.",
    image: "/assets/brochure-flatlay.png",
    imageAlt: "Prepared printed materials",
  },
  {
    id: "04",
    title: "Large Format",
    description: "Posters, banners, and oversized prints from our press.",
    image: "/assets/large-format.png",
    imageAlt: "Large-format printer producing a banner",
  },
] as const

export const steps = [
  {
    id: "01",
    title: "Message or visit",
    description: "WhatsApp your requirement or come to M-37, Mussafah.",
  },
  {
    id: "02",
    title: "We print",
    description: "Printing, copying, typing, or large-format — handled locally.",
  },
  {
    id: "03",
    title: "Collect",
    description: "Pick up when ready. Open daily, 8 AM to 9 PM.",
  },
] as const

export const workPanels = [
  {
    src: "/assets/press-detail.png",
    alt: "Close-up of a printing press producing blue-ink output",
    label: "Press",
    caption: "Process detail",
  },
  {
    src: "/assets/paper-stack.png",
    alt: "Stack of premium paper stock with a cobalt sheet",
    label: "Stock",
    caption: "Edge and texture",
  },
  {
    src: "/assets/print-sheets.png",
    alt: "Printed sheets with registration marks and cobalt accents",
    label: "Proofs",
    caption: "Marks and calibration",
  },
  {
    src: "/assets/brochure-flatlay.png",
    alt: "Printed brochures and business materials on a drafting surface",
    label: "Finish",
    caption: "Collateral set",
  },
] as const
