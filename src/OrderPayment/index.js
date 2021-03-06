import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled, { css } from 'styled-components';
import { CartContext } from "../Cart"
import { useHistory } from "react-router";


const sharedStyles = css`

  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  direction: rtl;
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;


const StyledButton = styled.button`
  display: block;
  background-color: #f7797d; 
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;



export default function OrderPayment({ priceAfterAll, delivery, updatedCart }) {


    const cart = useContext(CartContext)
    const [cartProductIds, setCartProductIds] = useState([])
    const [state, setState] = useState();
    const homeHistory = useHistory()
    function tryNow() {

        const mapIt = cart.cart.map((x) => { return { category: x.category, name: x.name, size: x.productInfo.size, price: x.productInfo.price, color: x.color } })
        console.log(mapIt, 'mapit')
        setCartProductIds(mapIt)
    }
    useEffect(tryNow, [cart])

    async function handleForm(e) {
        e.preventDefault()
        const values = Object.values(e.target)
            .reduce((acc, input) => !input.name ? acc : ({
                ...acc,
                [input.name]: input.type === 'checkbox' ? input.checked : input.value
            }), {}
            )
        values.productInfo = cartProductIds
        values.delivery = delivery
        values.totalPrice = priceAfterAll
        values.paid = true

        // values.productsInfo = 

        // console.log(values.productIds)
        try {

            const res = await axios.post(`http://localhost:5000/createorder`, values)
            alert(res.data.orderTrackNum)
            cart.setCart([])
            homeHistory.push('/home')
        } catch (e) {
            console.log("error")
        }
    }





    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState(prev => ({ ...prev, [inputName]: value }));
    };

    // console.log(cartProductIds, 'cartids')
    return (<>
        <div>
            {delivery ? <StyledFormWrapper>
                <StyledForm onSubmit={handleForm}>
                    <h2 style={{ textAlign: 'center' }}>???????? ??????????</h2>
                    <label htmlFor="firstName">???? ????????</label>
                    <StyledInput
                        type="text"
                        name="firstName"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="lastName">???? ??????????</label>
                    <StyledInput
                        type="text"
                        name="lastName"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="phoneNumber">????' ????????</label>
                    <StyledInput
                        type="text"
                        name="phoneNumber"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="email">?????????? ??????"??</label>
                    <StyledInput
                        type="email"
                        name="email"
                        onChange={handleInput}
                        required
                    />

                    <label htmlFor="address">???????? ??????' ??????</label>
                    <StyledInput
                        type="text"
                        name="address"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="city">?????? ????????????</label>
                    <StyledInput
                        type="text"
                        name="city"
                        onChange={handleInput}
                        required
                    />

                    <StyledButton type="submit">?????? ??????????</StyledButton>
                </StyledForm>
            </StyledFormWrapper> : <StyledFormWrapper>
                <StyledForm onSubmit={handleForm}>
                    <h2 style={{ textAlign: 'center' }}>???????? ??????????</h2>
                    <label htmlFor="firstName">???? ????????</label>
                    <StyledInput
                        type="text"
                        name="firstName"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="lastName">???? ??????????</label>
                    <StyledInput
                        type="text"
                        name="lastName"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="phoneNumber">????' ????????</label>
                    <StyledInput
                        type="text"
                        name="phoneNumber"
                        onChange={handleInput}
                        required
                    />
                    <label htmlFor="email">?????????? ??????"??</label>
                    <StyledInput
                        type="email"
                        name="email"
                        onChange={handleInput}
                        required
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <StyledButton type="submit">???????????? ??????????</StyledButton></div>
                </StyledForm>
            </StyledFormWrapper>}
        </div>


    </>
    )
}