export const boardData = [
  { label: 'POTHOLES', count: 214, delta: '▲ 12 today', down: false },
  { label: 'STREETLIGHTS', count: 88, delta: '▲ 5 today', down: false },
  { label: 'WATER SUPPLY', count: 41, delta: '▼ 3 today', down: true },
  { label: 'GARBAGE', count: 129, delta: '▲ 18 today', down: false },
  { label: 'DRAINAGE', count: 57, delta: '▲ 4 today', down: false },
  { label: 'TRAFFIC SIGNALS', count: 19, delta: '▼ 1 today', down: true },
]

export const categories = [
  'Pothole / road damage',
  'Streetlight not working',
  'Garbage not collected',
  'Water supply issue',
  'Blocked drain',
  'Other',
]

export const steps = [
  { title: 'Report', text: 'Add a category, pin the location, attach a photo. Takes under a minute.' },
  { title: 'Auto-route', text: 'Nagar matches the category and zone to the department responsible — no manual sorting.' },
  { title: 'Assign', text: 'Department staff assign a technician, and an SLA clock starts counting.' },
  { title: 'Resolve', text: "You're notified when it's fixed, and can rate how it went." },
]

export const timeline = [
  { text: 'Submitted by citizen', time: 'Today, 9:02 AM', active: false },
  { text: 'Routed to Roads & Infrastructure', time: '9:03 AM', active: false },
  { text: 'Technician assigned — Rafiq M.', time: '9:40 AM · in progress', active: true },
  { text: 'Awaiting resolution', time: '—', active: false },
]

export const departments = [
  { name: 'Roads & Infrastructure', time: 'avg 3.1 days', span: 2, icon: 'road' },
  { name: 'Water & Sewerage', time: 'avg 2.4 days', span: 1, icon: 'water' },
  { name: 'Waste Management', time: 'avg 1.2 days', span: 1, icon: 'waste' },
  { name: 'Electricity', time: 'avg 1.8 days', span: 1, icon: 'power' },
  { name: 'Parks & Public Spaces', time: 'avg 4.0 days', span: 2, icon: 'parks' },
  { name: 'Traffic & Signals', time: 'avg 2.0 days', span: 3, icon: 'signal' },
  { name: 'Sanitation & Drainage', time: 'avg 2.7 days', span: 3, icon: 'drain' },
]

export const stats = [
  { num: '94%', desc: 'of requests resolved within their SLA window last quarter' },
  { num: '3.2 days', desc: 'average time from report to resolution, city-wide' },
  { num: '42,000+', desc: 'citizens registered across all ten zones of Dhaka' },
]
