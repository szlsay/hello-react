import { useCallback, useEffect, useState } from "react";

export default function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseMoveHandler = useCallback((event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  })
  return {x, y}
}