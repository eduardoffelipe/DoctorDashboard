import React from 'react'
import Head from 'next/head'
import {
  ContainerMain,
  ContainerSearch,
  Nav,
  GridLayout,
  ContainerProfile,
  ContainerPrincipal,
  ContainerEarning,
  ContainerClients,
  ContainerGender,
  ContainerAppoitments,
  ContainerAnalytics
} from '../styles/pages/Dashboard'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Doctor Dashboard</title>
      </Head>
      <main>
        <ContainerMain>
          <GridLayout>
            <Nav></Nav>
            <ContainerSearch></ContainerSearch>

            <ContainerProfile></ContainerProfile>

            <ContainerPrincipal></ContainerPrincipal>

            <ContainerEarning></ContainerEarning>

            <ContainerClients></ContainerClients>

            <ContainerGender></ContainerGender>

            <ContainerAppoitments></ContainerAppoitments>

            <ContainerAnalytics></ContainerAnalytics>
          </GridLayout>
        </ContainerMain>
      </main>
    </div>
  )
}

export default Dashboard
