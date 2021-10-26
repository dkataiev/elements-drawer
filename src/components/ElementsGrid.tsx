import Grid from "@mui/material/Grid";
import React from "react";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export interface GridCell {
    title: string;
    type: string;
    value: string;
}

export interface ElementsGridProps {
    columns: number;
    rows: number;
    gridData: { [key: number]: GridCell[] };
}

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const gridRow = (row: boolean[], idx: number) => <Grid key={idx} container item spacing={3}>
    {row.map((cell, cIdx) => gridCell(cell, cIdx))}
</Grid>


const gridCell = (cell: boolean, idx: number) => {
    return <Grid key={idx} item xs={1}>
        <Item>Item</Item>
    </Grid>;
}


export const ElementsGrid: React.FC<ElementsGridProps> = ({columns, rows, gridData}) => {
    const gridItems: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
        gridItems[i] = [];
        for (let j = 0; j < columns; j++) {
            gridItems[i][j] = true;
        }
    }
    return <Grid container spacing={2} columns={columns}>
        {gridItems.map((row, idx) => gridRow(row, idx))}
    </Grid>;
}
