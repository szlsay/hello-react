import { useEffect, useState } from "react";

function getInfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => { resolve(Date.now().toString()) }, 2000)
  })
}

export default function useGetInfo() {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')
  useEffect(() => {
    getInfo().then(info => {
      setLoading(false)
      setInfo(info)
    })
  })
  return { info, loading }
}