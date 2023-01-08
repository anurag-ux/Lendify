import React from "react";

import Introduction from '../components/Whitepaper/Introduction'
import Lenders from '../components/Whitepaper/Lenders'
import Borrowers from '../components/Whitepaper/Borrowers'
import Conclusion from '../components/Whitepaper/Conclusion'

function HowItWorks() {
    return (
        <div>
            <Introduction />
            <Lenders />
            <Borrowers />
            <Conclusion/>
        </div>
    );
}

export default HowItWorks;