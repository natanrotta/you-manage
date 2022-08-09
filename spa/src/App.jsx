import React from 'react'
import Routes from './Routes'
import GlobalStyle from './styles/global'
import { AuthProvider } from 'contexts/auth'
import { ApolloClientProvider } from 'contexts/apollo'
import { GQLProvider } from 'contexts/gql'
import { I18nProvider } from 'contexts/i18n'

const App = () => {
  return (
    <AuthProvider>
      <ApolloClientProvider>
        <GQLProvider>
            <I18nProvider>
              <GlobalStyle />
              <Routes />
            </I18nProvider>
        </GQLProvider>
      </ApolloClientProvider>
    </AuthProvider>
  )
}

export default App
