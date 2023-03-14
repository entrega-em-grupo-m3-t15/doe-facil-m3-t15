import React, { useContext } from 'react'
import { DashboardContext } from '../../../../contexts/DashboardContext/DashboardContext'
import Donations from '../Donations'

const ListDonation = () => {

  const { setDonationsUser, donationsUser } = useContext( DashboardContext )

  console.log(donationsUser)

  return (
    <ul>
        {
          donationsUser.length > 0 ? (
           
              <Donations />
        
          ) : (
            <div className='list_donation_empty'>
              <h2>Você ainda não adicionou doações</h2>
            </div>
          )
        }
    </ul>
  )
}

export default ListDonation