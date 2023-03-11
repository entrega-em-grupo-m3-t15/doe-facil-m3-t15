import React, { useContext } from 'react'
import { DashboardContext } from '../../../../contexts/DashboardContext/DashboardContext'
import { DonorCard } from '../../../Cards/UserPageCards/DonorCard'

const Donations = () => {

  const { getDonationsUser, donationsUser } = useContext( DashboardContext )

  return (
    <>
        {
            donationsUser.map((donation)=>{
                return <DonorCard/>
            })
        }
    </>
  )
}

export default Donations