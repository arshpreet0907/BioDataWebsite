// Personal details for Sarabjeet Singh's Marriage Biodata

export type Detail = { label: string; value: string }

export const biodata = {
  name: 'Sarabjeet Singh',
  tagline: 'Sikh · Arora · Owner, Family Transport Business · Chhatarpur, M.P.',
  intro:
    'Sat Sri Akal. I am a grounded and family-oriented person managing our family transport business with commitment and dedication. Guided by Sikh tenets and Waheguru’s grace, I believe in honest living, humility, and family values. In my leisure time, I cherish travelling to religious places and spending meaningful time with family. I am looking for an educated, understanding, and family-oriented Gursikh life partner to embark on a beautiful life journey together.',
  location: 'Chhatarpur, Madhya Pradesh',

  personal: [
    { label: 'Date of Birth', value: '22 September 2000' },
    { label: 'Age', value: '25 years' },
    { label: 'Height', value: "5' 4\"" },
    { label: 'Religion', value: 'Sikh' },
    { label: 'Caste / Gotra', value: 'Arora' },
    { label: 'Place of Birth', value: 'Chhatarpur, Madhya Pradesh' },
    { label: 'Marital Status', value: 'Never Married' },
    { label: 'Complexion', value: 'Fair' },
    { label: 'Build / Health', value: 'Healthy' },
    { label: 'Blood Group', value: 'B Positive (B+)' },
    { label: 'Diet', value: 'Vegetarian' },
  ] satisfies Detail[],

  education: [
    {
      label: 'Diploma (Polytechnic)',
      value: 'Mechanical Engineering - ITM University, Gwalior (2020)',
    },
    {
      label: '10th Standard (Schooling)',
      value: 'Maharishi Vidya Mandir School, Chhatarpur (2017)',
    },
  ] satisfies Detail[],

  business: {
    name: 'Family Transport Business',
    role: 'Owner & Manager',
    since: 'Established Family Enterprise',
    summary:
      'Successfully managing and operating the family transport enterprise, overseeing commercial vehicle logistics, route operations, and client relations with reliability and dedication.',
    stats: [
      { label: 'Profession', value: 'Transport Business' },
      { label: 'Role', value: 'Owner' },
      { label: 'Income', value: '₹ 80,000 / mo' },
      { label: 'Location', value: 'Chhatarpur, M.P.' },
    ],
  },

  family: [
    {
      label: 'Father',
      value: 'S. Gurvinder Singh - Retired from Transport Business, looks after operations',
    },
    { label: 'Mother', value: 'Baljeet Kaur - Home Maker' },
    {
      label: 'Sibling',
      value: 'Arshpreet Singh (Younger Brother) - Software Engineer',
    },
    { label: 'Family Type', value: 'Nuclear family' },
    { label: 'Family Values', value: 'Devout Sikh Family' },
    {
      label: 'Residence / Address',
      value: 'Akali Spares, Near Gurudwara, Mahoba Road, Chhatarpur, M.P. 471001',
    },
  ] satisfies Detail[],

  interests: [
    'Travelling to religious places',
    'Gurbani & Gurudwara seva',
    'Family & community gatherings',
    'Automotive & logistics management',
  ],

  expectations: [
    { label: 'Religion / Family', value: 'Devout Sikh Family (Gur Sikh Family)' },
    { label: 'Age', value: '22 - 26 years' },
    { label: 'Height', value: "5' 0\" - 5' 5\"" },
    { label: 'Education', value: 'Graduation or above' },
    { label: 'Occupation', value: 'No Preference' },
    { label: 'Nature & Values', value: 'Kind, respectful towards elders, family-oriented' },
  ] satisfies Detail[],

  contact: {
    person: 'S. Gurvinder Singh (Father)',
    phone: '+91 94243 44251',
    whatsapp: '919424344251',
    email: 'Sarabjeetsingh454@gmail.com',
    address: 'Akali Spares, Near Gurudwara, Mahoba Road, Chhatarpur, M.P. 471001',
  },
}

