import React from 'react'
import { useRouteError } from 'react-router-dom'
const Errorui = () => {
    const {data,status} = useRouteError()
    console.log(data)
    console.log(status)
  return (
    <div>
        <h1>Oops !</h1>
        <h1>Something went wrong</h1>
        <h2>{status} : {data}</h2>

    </div>
  )
}

export default Errorui