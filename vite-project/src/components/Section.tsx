import React, { ReactNode } from 'react'

type SectionProps = {
    title? : string
    children: ReactNode
}
const Section = ({children , title = "นี้คือค่าเริ่มต้นนะครับ ถ้าไม่ใส่อะไรใน Title "}: SectionProps) => {
  return (
    <section>
        <b> {title} </b>
        <p>{children}</p>
    </section>
  )
}

export default Section