import React from "react";
import Select from "react-select";

function CustomSelect({style, props, options, label, onChange}){
    return <div className="select">
        <h1>{label}</h1>
        <Select options={options} onChange={onChange}/>
    </div>
}

export default CustomSelect;