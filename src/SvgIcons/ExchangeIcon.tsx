export const ExchangeIcon = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <svg
      fill='#aca9a9'
      onClick={handleClick}
      width='24'
      height='24'
      focusable='false'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      cursor='pointer'
    >
      <path d='M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z'></path>
    </svg>
  )
}
