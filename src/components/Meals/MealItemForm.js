import {useRef, useState} from 'react';

import Input from "../UI/Input/Input";

import classes from "./MealItemForm.module.css";

const MealItem = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }
    
    props.onAddToCart(enteredAmountNumber);
  }

  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Miktar"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Ekle</button>
      {!amountIsValid && <p>Lütfen geçerli (1 - 5) bir miktar giriniz.</p>}
    </form>
  );
};

export default MealItem;
