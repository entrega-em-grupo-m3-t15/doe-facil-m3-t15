import React, { useContext } from 'react'
import { DashboardContext } from '../../../../contexts/DashboardContext/DashboardContext'
import { DonorCard } from '../../../Cards/UserPageCards/DonorCard'

const ListDonationDonee = () => {

  const { getDonationsUser, donationsUser } = useContext( DashboardContext )

  return (
    <ul>
        {
          donationsUser.length > 0 ? (
           
              <DonorCard />
        
          ) : (
            <div className='list_donation_empty'>
              <h2>Você ainda não resgatou doações</h2>
            </div>
          )
        }
    </ul>
  )
}

export default ListDonationDonee