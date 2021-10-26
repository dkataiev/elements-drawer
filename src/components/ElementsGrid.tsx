import Grid from "@mui/material/Grid";
import React, {useEffect} from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const TEXT_INPUT = 'TEXT_INPUT'
const SELECT = 'SELECT'

export interface ElementsGridProps {
    columns: number;
    rows: number;
    gridData: { [key: number]: GridCell[] };
}

export interface GridCell {
    title: string;
    type: string;
    value: string;
}

const emptyCell = () => <TextField
    fullWidth
    value=''
    disabled
    size="small"
/>

const selectField = (cell: GridCell) => {
    const opts = cell.value.split(",");
    return <TextField
        select
        fullWidth
        helperText={cell.title}
        value={opts[0]}
        size="small">
        {opts.map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
    </TextField>
}


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
    useEffect(() => {
        console.log("ElementsGrid created");
        return () => console.log("ElementsGrid destroyed");
    }, []);
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
    console.log("ElementsGrid updated");
    return <Grid container spacing={2} columns={columns}>
        {gridItems.map((row, idx) => gridRow(row, idx))}
    </Grid>;
}
