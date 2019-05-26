import React, { Component } from 'react';
import styled from 'styled-components'
import Portal from './portal.js';
class Modal extends Component{
    render(){
        const{ children, toggle, on}= this.props;
        return(
        <Portal>
            { on &&(
            <ModalWrapper>
                <ModalWindow>
                 <CloseButton onClick={toggle}>Close</CloseButton>
               <div>{children}</div>
               </ModalWindow>
            </ModalWrapper>
            )}
        </Portal>
        );
    }
}
const ModalWrapper= styled.div`
position :absolute;
top:0;
left:;
width:100%;
height:100%;
background: teal;
display: flex;
justify-content:center;
align-items:center;
`;
const ModalWindow=styled.div`
position:absolute;
`;
const CloseButton= styled.div`
position:absolute;
top:0;
right:0;
background : white;
`;

export default Modal ;