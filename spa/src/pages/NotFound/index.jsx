import React from 'react'
import { Typography } from 'components/UI/elements'
import { NotFoundContainer } from './styles'

import notFound from '../../assets/404.gif'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={notFound} alt="404" />
      <Typography
        color='primary'
        variant='h4'
      >
        NOT FOUND
      </Typography>
    </NotFoundContainer>
    
  )
}

export default NotFound
