import React from 'react'

import Input from './Input'

const Form = ({handleSubmit,button,inputs_array,cls}) => {
  return (
    <form action=""
        className={cls && cls}
        onSubmit={handleSubmit}>
            {inputs_array && inputs_array.map((inp,i)=>(
                <Input key={i}
                type={inp.type}
                connectionFunc={inp.connectionFunc}
                cls={inp.cls}
                placeholder={inp.placeholder}
                pattern={inp.patter}
                onChangeFunc={inp.onChangeFunc}/>
            ))}
            <button type='submit'
                className={button.class && button.class}>{button.name}</button>
        </form>
  )
}

export default Form