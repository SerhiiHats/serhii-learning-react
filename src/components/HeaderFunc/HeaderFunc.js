import React from 'react';
import FormFunc from "../FormFunc/FormFunc";

const HeaderFunc = ({ className, ...rest }) => {
    return (
      <div className={className}>
        <h1>Task List</h1>
        <FormFunc {...rest}/>
      </div>
    );

};

export default HeaderFunc;