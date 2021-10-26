import Grid from "@mui/material/Grid";
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const TEXT_INPUT = 'TEXT_INPUT'
const SELECT = 'SELECT'

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

const emptyCell = () => <TextField variant="outlined"
                                   size="small" disabled/>

const selectField = (cell: GridCell) => <TextField
    select
    fullWidth
    helperText={cell.title}
    size="small">
    {
        cell.value.split(",")
            .map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)
    }
</TextField>


const textField = (cell: GridCell) => <TextField
    fullWidth
    helperText={cell.title}
    value={cell.value}
    size="small"
/>


const gridCellElement = (cell: GridCell) => {
    if (!cell) {
        return emptyCell();
    }
    return cell.type === TEXT_INPUT ? textField(cell) : selectField(cell);
}

const gridCell = (cell: GridCell, idx: number) => {
    return <Grid key={idx} item xs={1}>
        {gridCellElement(cell)}
    </Grid>;
}

const gridRow = (row: GridCell[], idx: number) => <Grid key={idx} container item spacing={3}>
    {row.map((cell, cIdx) => gridCell(cell, cIdx))}
</Grid>


export const ElementsGrid: React.FC<ElementsGridProps> = ({columns, rows, gridData}) => {
    const gridItems: GridCell[][] = [];
    for (let i = 0; i < rows; i++) {
        const rowData = gridData[i + 1];
        gridItems[i] = [];
        for (let j = 0; j < columns; j++) {
            if (!rowData) {
                gridItems[i][j] = null as any;
                continue;
            }
            gridItems[i][j] = rowData[j + 1];
        }
    }
    return <Grid container spacing={2} columns={columns}>
        {gridItems.map((row, idx) => gridRow(row, idx))}
    </Grid>;
}
