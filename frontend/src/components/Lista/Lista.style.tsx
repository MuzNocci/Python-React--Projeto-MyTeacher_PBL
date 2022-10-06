import { styled } from "@mui/material";
import tema from "../../themes/theme";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: ${(theme) => tema.spacing(10,2,10,2)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(theme) => tema.spacing(9)};
    ${(theme) => tema.breakpoints.down('md')}{
        grid-template-columns: 1fr;
        gap: ${(theme) => tema.spacing(8)};
        max-width: 300px;
    }
`;

export const ItemLista = styled('li')`
    list-style: none;
`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Informacoes = styled('div')`
    
`;

export const Nome = styled('h3')`
    margin: ${(theme) => tema.spacing(2,0,0,0)};
`;

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${(theme) => tema.palette.primary.main};
`;

export const Descricao = styled('p')`
    word-break: break-word;
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${(theme) => tema.spacing(20,0)};
`;