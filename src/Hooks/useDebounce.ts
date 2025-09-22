import { useEffect, useState } from 'react'

export function useDebounce<T>(val: T, delay: number = 500) {
  const [debounceVal, setDebounceVal] = useState(val)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceVal(val)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [val, delay])

  return debounceVal
}
