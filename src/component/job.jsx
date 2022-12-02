
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {fetchData} from '../component/jobs'


const job = () => {
    const list = fetchData()
  return (
  <>
 {list.name}
  </>
  )
}

export default job