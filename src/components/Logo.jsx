export default function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2C9.9 2 5 6.9 5 13c0 8.2 11 17 11 17s11-8.8 11-17c0-6.1-4.9-11-11-11Z"
        fill="#E8A33D"
      />
      <path
        d="M11.5 15.5l3 3 6-6.5"
        stroke="#132330"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
