import styled from 'styled-components'
import { Box, CardMedia } from '@mui/material'

export const InfoRestaurant = styled(Box)`
  display: flex;
  justify-content: space-between;
`
export const BoxBotton = styled(Box)`
display: flex;
justify-content: space-between;
`
export const StyleButton = styled.button`
font-size: 16px;
padding-top: 8px;
padding-left: 15px;
border-color: #6AC453;
color: #6AC453;
background: white;
border-radius: 8px 0px 0px 0px;
:hover{
  background-color: #E2FFD5;
}
`
export const CardMediaStyle = styled(CardMedia)`
    display: flex;
    justify-content: flex-start;
    width: 150px;
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 40vh;
    left: 45vw;
    border: 6px solid #BEFFA2;
    border-top-color: #6CC247;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: is-rotating 2s infinite;
    @keyframes is-rotating {
    to {
    transform: rotate(1turn);
    }
}
`