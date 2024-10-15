import React from 'react';
function MainLayout({children}){
    return(
        <div>
            <Navbar_login></Navbar_login>
            <div>{children}</div>
        </div>
    )
}
export default MainLayout