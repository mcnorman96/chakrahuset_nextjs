import Link from 'next/link'
import React from 'react'

type button = {
  title: string, 
  url: string,
  target: string,
}

const Button = ({btn}: {btn: button}) => {
  return (
    <Link href={btn?.url} target={btn?.target} className="mt-5 button-primary">
      {btn.title}
    </Link>  
  )
}

export default Button