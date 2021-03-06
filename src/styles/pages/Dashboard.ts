import styled from 'styled-components'

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
`
export const GridLayout = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  padding: 30px;
  grid-template-areas:
    'navb search . . profile1'
    'navb principal principal principal principal'
    'navb earning clients gender gender'
    'navb appointments appointments analytics analytics';

  grid-template-rows: 1fr 2fr 2fr 2fr;
  grid-template-columns: 2fr 3fr 3fr 3fr 3fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`

export const Nav = styled.div`
  grid-area: navb;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
  padding: 10px;
`

export const ContainerSearch = styled.div`
  grid-area: search;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
`

export const ContainerProfile = styled.div`
  grid-area: profile1;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
`

export const ContainerPrincipal = styled.div`
  grid-area: principal;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerPrincipalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ContainerPrincipalLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContainerPrincipalRight = styled.div`
  margin: -78px -32px -36px 0px;
`
export const Title = styled.h1`
  font-size: 3.8rem;
  color: ${props => props.theme.colors.textLight};
  font-weight: 400;
  margin: 45px 0px;
`
export const Subtitle = styled.h2`
  font-size: 2.1rem;
  color: ${props => props.theme.colors.text};
  font-weight: 400;
`
export const TextDate = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.textLight};
`

export const SpanBold = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`
export const SpanOrange = styled.span`
  color: #ff8c00;
`
export const PrincipalWave = styled.div`
  position: absolute;
  top: 10;
  right: 5;
`

export const ContainerEarning = styled.div`
  grid-area: earning;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
`
export const ValueEarning = styled.h2`
  font-size: 3.8rem;
  line-height: 1.2rem;
  color: ${props => props.theme.colors.text};
  font-weight: 700;
`
export const SubtitleEarnig = styled.h3`
  margin-top: 15px;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.textLight};
  font-weight: 400;
`
export const ContainerClients = styled.div`
  grid-area: clients;
  background: ${props => props.theme.colors.backgroundCard};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
`
export const ContainerClientsTypes = styled.div`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
`
export const NumberTypeNewClients = styled.div`
  border-radius: 20px;
  color: #fff;
  background: ${props => props.theme.colors.secondary};
  font-size: 2.4rem;
  padding: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`
export const NumberTypeClients = styled.div`
  border-radius: 20px;
  color: #fff;
  background: ${props => props.theme.colors.primary};
  font-size: 2.4rem;
  padding: 18px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`
export const ContainerClientsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TextClientsInfo = styled.p`
  margin-left: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
`
export const ContainerGender = styled.div`
  grid-area: gender;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
  padding: 20px;
`
export const ContainerHeaderGender = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TitleGender = styled.h2`
  font-size: 3.2rem;
  color: ${props => props.theme.colors.text};
`

export const ContainerAppoitments = styled.div`
  grid-area: appointments;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
`
export const ContainerAnalytics = styled.div`
  grid-area: analytics;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 20px;
`
