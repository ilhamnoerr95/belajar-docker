import { useRouter } from 'next/router'
import React from 'react'

const Page: React.FC<{params: {slug:string | number}}>= ({params}) => {
    const router = useRouter()

    console.log(router)

  return (
    <div>Dynamic routes: {router.query.slug}</div>
  )
}

export default Page