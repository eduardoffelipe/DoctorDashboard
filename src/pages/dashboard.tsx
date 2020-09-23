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
  ContainerAnalytics,
  SpanBold,
  Title,
  SpanOrange,
  TextDate,
  Subtitle,
  ContainerPrincipalFlex,
  ContainerPrincipalLeft,
  ContainerPrincipalRight
} from '../styles/pages/Dashboard'
import DoctorSVG from '../assets/doctor.svg'

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

            <ContainerPrincipal>
              <ContainerPrincipalFlex>
                <ContainerPrincipalLeft>
                  <TextDate>Segunda-feira, 23 de Setembro de 2020</TextDate>
                  <Title>
                    Bem vindo <SpanBold>Dr. Chadson!</SpanBold>
                  </Title>
                  <Subtitle>
                    Você possui <SpanOrange>12 clientes </SpanOrange>
                    restantes hoje!
                  </Subtitle>
                </ContainerPrincipalLeft>
                <ContainerPrincipalRight>
                  <DoctorSVG />
                </ContainerPrincipalRight>
              </ContainerPrincipalFlex>
            </ContainerPrincipal>

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
