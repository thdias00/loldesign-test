import { ResultDiv } from "./style"
import { useState } from "react";

interface ResultProps{
    totalWith: number;
    totalWithout: number;
}

export const Result = ({totalWith, totalWithout}: ResultProps) => {
    return(
        <ResultDiv>
            <p>Você irá gastar:</p>
            <div>
                <p>Com FaleMais: R$ {totalWith.toFixed(2)}</p>
                <p>Sem FaleMais: R$ {totalWithout.toFixed(2)}</p>
            </div>
        </ResultDiv>
    )
}