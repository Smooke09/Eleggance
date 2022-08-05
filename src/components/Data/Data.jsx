import React from "react";
import './Data.scss';

const Data = (props) => {

return(
<div className="info">
    <div className="infoText">
        { props.header }
        <div className="infoData">
            {props.children}
        </div>
    </div>
</div>
)

}

export default Data