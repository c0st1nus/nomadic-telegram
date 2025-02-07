import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledDialog = styled.div
`
    width: calc(100% - 1px);
    text-wrap: wrap;
    word-wrap: break-word;
    white-space: wrap;
    border-radius: 22px;
    background-color: #FFFFFF;
    font-size: 1rem;
    padding: 15px;
    display: flex;
    align-items: center;
`;
const StyledBorder = styled.div
`   display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(orange, purple);
    width: 90%;
    position: absolute;
    bottom: 0;
    margin: auto;
    padding: 1px;
    border-radius: 22px;
`;
interface ShowProps
{
    show: boolean;
}
const StyledName = styled.div
`
    width: 100px;
    font-size: 1rem;
    border-radius: 22px;
    background-color: #FFFFFF;
    padding: 10px;
    overflow: hidden;
    text-wrap: nowrap;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
`
const StyledNameGradient = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(orange, purple);
    position: absolute;
    top: -3.5vh;
    margin: auto;
    padding: 1px;
    border-radius: 22px;
`
export class Choice
{
    premium: boolean;
    cost?: number;
    text: string;
    id: string;

    constructor(premium: boolean, text: string, id: string, cost?: number) {
        this.premium = premium;
        this.text = text;
        this.id = id;
        if (cost) {
            this.cost = cost;
        }
    }
}
interface DialogProps
{
    name: string;
    text: string;
    choice: boolean;
    choices?: Choice[];
}

const Window = ({...props} : DialogProps) => 
    {
        if(!props.choice)
            {
                return (
                    <StyledBorder>
                        <StyledDialog>
                            <StyledNameGradient>
                                <StyledName>{props.name}</StyledName>
                            </StyledNameGradient>
                                <div>{props.text}</div>
                        </StyledDialog>
                    </StyledBorder>
                );
            }
        else
        {
            return (
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "auto", gap: "50px", width:"90%", marginBottom: "30%"}}>
                    {props.choices?.map((choice: Choice) => (
                        <StyledBorder style={{position: "static", marginTop: "auto"}} key={choice.id}>
                            <StyledDialog>
                                <div>{choice.text}</div>
                                <img style={{objectFit:"contain", width:"10%", marginLeft:"auto", display: choice.premium ? "block" : "none"}} src="/public/diamond.png" alt="diamond" />
                            </StyledDialog>
                        </StyledBorder>
                    ))}
                </div>
                
            )
        }
    }

export default Window;

