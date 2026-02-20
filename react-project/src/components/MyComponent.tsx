import React, { type JSX } from 'react'

type Props ={
    name: string
    age: number
}
export default function MyComponent({name, age}: Props){
  return (
    <div>
      {name} is {age} years old.
    </div>
  )
}
