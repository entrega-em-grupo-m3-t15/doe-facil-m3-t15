import React, { useContext } from 'react'
import { DashboardContext } from '../../../../../contexts/DashboardContext/DashboardContext'
import { MainPageCard } from '../../../../Cards/MainPageCards/DoneeCard'


const DonationsDonne = () => {

  const {  donationsUser } = useContext( DashboardContext )

  return (
    <>
        {
            donationsUser.map((donation) => {
                return <MainPageCard donation={donation} key={donation.id}/>
            })
        }
    </>
  )
}

export default DonationsDonne