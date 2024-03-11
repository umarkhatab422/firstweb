import React from 'react'

export default function Header({headerinfo,cname,children}) {
    // let {headerinfo,cname}=props;
    // console.log(headerinfo,cname)
    // console.log(props.headerinfo.email)
    // console.log(props.headerinfo.Phone)
  return (
    <div>
        <h1>Header{headerinfo.Phone} {cname}{children}</h1>
        
    </div>
        
   

  )
}

// export dafault Header;
// export {Header}