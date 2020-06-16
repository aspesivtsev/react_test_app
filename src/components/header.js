import React from 'react';

function Header(){
    return <h1>This is our HEADER</h1>
}

function Header2(props){
    return (
        <React.Fragment>
            <h2>Text: {props.info}</h2>
            <h3>This is number: {props.number}</h3>
        </React.Fragment>
    );
}
export { Header };
export { Header2 };

//this is method of exporting different components from one file

//export default Header;
//this is default export of one and only component for the whole module
