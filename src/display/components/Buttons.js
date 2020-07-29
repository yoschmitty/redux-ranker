import React from "react";
import styled, { css } from "styled-components";
const StyledButton = styled.button`
  /* border: none; */
  text-align:center ;
  line-height: 1em;
  border-radius: .25em;
  padding: .5em 1em;
  background: #ffffff;
  color: #404040 !important;
  font-weight: 800;
  font-size: .5rem;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.2);
  /* example for changing one style property based on a property call of an item in this case primary:
  background-color: ${(props) => (props.primary ? "red" : "white")}; */

/* example for other ways if you need multiple properties changed via a props.primary/secondary etc
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0, 0.8);
    `} */

  &:hover {
    color: #f8efe8 !important;
    background-color: #8dccd3 !important;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  
}

  ${({ add }) =>
    add &&
    css`
      width: 5rem;
      height: 1rem;
      margin: 0.25rem;
      padding: 1em;
      background-color: ${(props) => props.theme.colors.secondary};
      font-size: 900;
      font-weight: 800;
      margin-left: auto;
      display: grid;
      align-items: center;
      align-self: center;
      justify-self: center;
    `}
  
  ${({ details }) =>
    details &&
    css`
      width: 5rem;
      height: 1em;
      margin: 0.25em;
      padding: 1em;
      background-color: ${(props) => props.theme.colors.main};
      font-size: 900;
      font-weight: 800;
      display: grid;
      align-items: center;
      align-self: center;
      justify-self: center;
    `}

  ${({ choose }) =>
    choose &&
    css`
      background-color: magenta;
      font-size: 900;
      margin: 0.25em;
    `}


  ${({ remove }) =>
    remove &&
    css`
      background-color: yellow;
      font-size: 900;
      margin: 0.25rem;
    `}

`;

export const Button = ({
  primary,
  add,
  details,
  choose,
  remove,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      add={add}
      primary={primary}
      details={details}
      choose={choose}
      remove={remove}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
