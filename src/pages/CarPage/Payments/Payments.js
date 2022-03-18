import { FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmPurchase } from "../../../services/Requests";
import { ContainerForm, ButtonStyle, FormPayment } from "./styled";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const Payments = ({ cart, resId }) => {
    const navigate = useNavigate()
    const [money, setMoney] = useState(false)
    const [creditCard, setCreditCard] = useState(false)
    const [payments, setPayments] = useState([])

    const onClickMoney = () => {
        setCreditCard(false)
        if(!money){
          setMoney(true)
          setPayments("money")
        }
    }
    const onClickCredit = () => {
        setMoney(false)
        if(!creditCard ){
            setCreditCard(true)
            setPayments("creditcard")
          }
    }
 
    const body = {
        products: [{
            id: cart[0]?.id,
            quantity: cart[0]?.quantity
        }],
        paymentMethod: payments
    }

    const confirmBuy = () => {
        confirmPurchase(resId, body, navigate)
    }

    return (
        <ContainerForm>
            <h3 className="paymentTitle">Formas de pagamento</h3>

            <FormPayment color="color2" className="payments">
               
                 <FormControlLabel
                    control={money? <RadioButtonCheckedIcon />:<PanoramaFishEyeIcon />}
                    onClick={onClickMoney}
                    value={money}
                    label="Dinheiro"
                /> 
                <FormControlLabel
                    control={creditCard? <RadioButtonCheckedIcon/> : <PanoramaFishEyeIcon />}
                    onClick={onClickCredit}
                    value={creditCard}
                    label="Cartão de Crédito"
                />
            </FormPayment>

            <div className="button">
                {cart.length === 0 ?
                    <ButtonStyle variant="contained" disabled>Confirmar</ButtonStyle>
                    :
                    <ButtonStyle variant="contained" color={"primary"} onClick={()=> confirmBuy()}>Confirmar</ButtonStyle>
                }
            </div>

        </ContainerForm>
    )
}

export default Payments;