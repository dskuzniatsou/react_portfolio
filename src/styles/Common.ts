import {thema} from "./Theme.ts";
import {css} from "styled-components";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?:number,
    Fmax?:number,
}



export const font = ({family, weight, color, lineHeight,Fmin, Fmax}: FontPropsType  ) =>css`
    font-family: ${family ||'Poppins'};
    font-weight: ${weight || "400"};
    color: ${color || thema.colors.descriptionColor};
    line-height: ${lineHeight || 1.2};
    // font-size: calc( (100vw-360px)/(1440-360)*(${Fmax}-${Fmin})+${Fmin}px );
    font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax ?? 18} - ${Fmin ?? 16}) + ${Fmin ?? 16}px);
`

