import React, { useContext } from 'react'
import { DashboardContext } from '../../../../contexts/DashboardContext/DashboardContext'
import { DonorCard } from '../../../Cards/UserPageCards/DonorCard'

const Donations = () => {

  const { setDonationsUser, donationsUser } = useContext( DashboardContext )

  return (
    <>
        {
            donationsUser.map((donation) => {
              console.log(donation)
                return <DonorCard donation={donation} key={donation.id}/>
            })
        }
    </>
  )
}

export default Donations