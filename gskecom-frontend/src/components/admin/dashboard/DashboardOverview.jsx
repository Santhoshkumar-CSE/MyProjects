import { Icon } from '@mui/material';
import React from 'react'
import { formatPrice, formatRevenue } from '../../../utils/formatPrice'

const DashboardOverview = ({ title, amount, Icon, revenue = false }) => {
  const convertedAmount = revenue ? formatPrice(amount) : amount

  return (
    <div className="flex flex-col justify-center items-center bg-white 
      rounded-lg shadow-sm w-56 h-40 p-4 text-center hover:shadow-md transition">
      
      {Icon && <Icon className="text-blue-600 text-3xl mb-1" />}

      <h3 className="uppercase text-sm font-semibold text-slate-700 mb-1">
        {title}
      </h3>

      <h1 className="font-bold text-slate-800 text-xl">
        {revenue ? formatRevenue(convertedAmount) : convertedAmount}
      </h1>
    </div>
  )
}

export default DashboardOverview
