import styled from '@emotion/styled';
import { colors } from './styles/colors';

export const FlexRow = styled.div`
  display: flex;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivisionLine = styled.div`
  border: 1px solid ${colors.gray.regular};
  width: 100%;
  height: 0px;
`

export const MainContainer = styled.div`
  margin: 2rem;
  // border: 1px solid black

`

export const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
  marginTop: 2rem;
  marginBottom: 2rem;
  // overflow: hidden;
`

export const BigProfilePic = styled.img`
  height: 175px;
  width: 175px;
  marginTop: 2rem;
  marginBottom: 2rem;
  overflow: hidden;
`

export const ThumbnailPic = styled.img`
  height: 27px;
  width: 25px;
  margin-right: 0.3rem;
  margin-top: 1px;
  // overflow: hidden;
`

export const VerticalLine = styled.div`
  border: 1px solid ${colors.gray.regular};
  width: 0px;
  height: 100vw;
`

export const ThinDivisionLine = styled.div`
  border-top: 1px solid ${colors.gray.regular};
  width: 100%;
  height: 0px;
`

// Functions 

export function parseSpeciality(id){
  switch (id) {
    case 1:
      return "Civil";
    case 2:
      return "Penal";
    case 3:
      return "Familia";
    case 4:
      return "Laboral";
    case 5:
      return "Ambiental";
    case 6:
      return "Comercial";
    case 7:
      return "Propiedad Intelectual";
    case 8:
      return "Marcas";
    case 9:
      return "Registral";
    case 10:
      return "Notarial";
    case 11:
      return "Inmobiliario";
    case 12:
      return "Contratos";
    case 13:
      return "Tributario";
    case 14:
      return "Energía";
    case 15:
      return "Constitucional";
    case 16:
      return "Internacional";
    case 17:
      return "Administrativo";
    case 18:
      return "Migratorio";
    case 19:
      return "Marítimo";
    case 20:
      return "Aduanero";
    case 21:
      return "Arbitraje";
    case 22:
      return "Procesal Civil";
    case 23:
      return "Procesal Penal";
    case 24:
      return "Procesal Constitucional";
    case 25:
      return "Accidentes";
    case 26:
      return "Medicina";
    case 27:
      return "Aeronáutico";
    case 28:
      return "Bancario";
    case 29:
      return "Agro";
    case 30:
      return "Minero";
    case 31:
      return "Salud y Seguridad";
    case 32:
      return "Seguros";
    case 33:
      return "Política";
    case 34:
      return "Contratación Pública";
    case 35:
      return "Tutela del Consumidor";
    case 36:
      return "Fusiones y Adquisiciones";
    case 37:
      return "Compliance";
    case 38:
      return "Startups";
    default:
      return;
  }
}