interface GenderType {
  value: string;
  label: string;
}

interface District {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
  districts: District[];
}

export const gender: GenderType[] = [
  { value: "", label: "Select" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];
export const religion: GenderType[] = [
  { value: "", label: "Select" },
  { value: "Islam", label: "Islam" },
  { value: "Hinduism", label: "Hinduism" },
  { value: "Christianity", label: "Christianity" },
  { value: "Buddhism", label: "Buddhism" },
  { value: "Other Religions", label: "Other Religions" },
];
export const maritalStatus: GenderType[] = [
  { value: "", label: "Select" },
  { value: "Unmarried", label: "Unmarried" },
  { value: "Married", label: "Married" },
  { value: "Single", label: "Single" },
];
export const bloodGroup: GenderType[] = [
  { value: "", label: "Select" },
  { value: "A(+ve)", label: "A(+ve)" },
  { value: "A(-ve)", label: "A(-ve)" },
  { value: "B(+ve)", label: "B(+ve)" },
  { value: "B(-ve)", label: "B(-ve)" },
  { value: "O(+ve)", label: "O(+ve)" },
  { value: "O(-ve)", label: "O(-ve)" },
  { value: "AB(+ve)", label: "AB(+ve)" },
  { value: "AB(-ve)", label: "AB(-ve)" },
];

export const countries: Country[] = [
  {
    id: 1,
    name: "Bangladesh",
    districts: [
      { id: 1, name: "Dhaka" },
      { id: 2, name: "Rangpur" },
    ],
  },
  {
    id: 2,
    name: "India",
    districts: [
      { id: 3, name: "Dellhi" },
      { id: 4, name: "Mombai" },
    ],
  },
];
