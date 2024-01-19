import React from 'react'
import { PagesType } from '../../dataState/dataState'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { Error404 } from './Error404'

type PageProps = {
  pages: PagesType[]
}

export const Page: React.FC<PageProps> = (props) => {

  const { pages } = props

  const params = useParams()
  const local = useLocation()
  console.log(local)

  return (
    <>
      {local.pathname === '/page/0' && <div>SECRET TEXT</div>}
      {
        pages[Number(params.id)]
          ? <div>
            {pages[Number(params.id)].heading}
            {pages[Number(params.id)].about}
          </div >
          // : <Error404 />
          : <Navigate to={'/page/error'} />
      }
    </>
  )
}
