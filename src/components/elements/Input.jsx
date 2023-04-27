import React from 'react'

const Input = ({type,connectionFunc,cls,placeholder,onChangeFunc,pattern}) => {
  return (
      <input type={type}
        className={cls && cls}
        placeholder={placeholder && placeholder}
        {...connectionFunc && connectionFunc}
        pattern={pattern}
        onChange={()=>{
            onChangeFunc && onChangeFunc();
        }}
         />
  )
}

export default Input