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
  ContainerPrincipalRight,
  ValueEarning,
  ContainerValue,
  SubtitleEarnig,
  ContainerClientsTypes,
  NumberTypeNewClients,
  NumberTypeClients,
  ContainerClientsInfo,
  TextClientsInfo
} from '../styles/pages/Dashboard'
import DoctorPng from '../assets/doctor2.png'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Doctor The Dashboard</title>
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
                  <img src={DoctorPng} alt="" width="500px" />
                </ContainerPrincipalRight>
              </ContainerPrincipalFlex>
            </ContainerPrincipal>

            <ContainerEarning>
              <ValueEarning>R$5380,00</ValueEarning>
              <SubtitleEarnig>Valor Total Bruto</SubtitleEarnig>
            </ContainerEarning>

            <ContainerClients>
              <ContainerClientsTypes>
                <ContainerClientsInfo>
                  <NumberTypeNewClients>50</NumberTypeNewClients>
                  <TextClientsInfo>Novos Pacientes</TextClientsInfo>
                </ContainerClientsInfo>
                <ContainerClientsInfo>
                  <NumberTypeClients>92</NumberTypeClients>
                  <TextClientsInfo>Pacientes Recorrentes</TextClientsInfo>
                </ContainerClientsInfo>
              </ContainerClientsTypes>
            </ContainerClients>

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
