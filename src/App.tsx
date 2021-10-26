import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {ElementsGrid, ElementsGridProps, GridCell} from "./components/ElementsGrid";
import Grid from "@mui/material/Grid";

function App() {

    const [definition, setDefinition] = useState<ElementsGridProps>({rows: 0, columns: 0, gridData: {}});

    const parseDefinitions = (defStr: string): void => {
        const gridData = {} as { [key: number]: GridCell[] }
        const newDef = { rows:0, columns:0, gridData}
        defStr.split("\n").forEach((str) => {
            if (!str) {
                return;
            }
            const parts = str.split(";");
            const row = +parts[0];
            const column = +parts[1];

            if (newDef.rows < row) {
                newDef.rows = row
            }

            if (newDef.columns < column) {
                newDef.columns = column
            }

            const cell: GridCell = {
                title: parts[2],
                type: parts[3],
                value: parts[4]
            }

            if (!newDef.gridData[row]) {
                newDef.gridData[row] = [];
            }
            newDef.gridData[row][column] = cell;
        })
        setDefinition(newDef)
    }

    const handleDefinitionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            return
        }
        const definitionsStr: string = event.target.value;
        parseDefinitions(definitionsStr);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <TextField
                                margin="normal"
                                multiline
                                fullWidth
                                rows={10}
                                onChange={handleDefinitionChange}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <h4>Supported format:</h4>
                            <p>LINE;COLUMN;LABEL;TYPE;VALUE</p>
                            <ul>
                                <li>LINE/COLUMN - the position of the element in the grid</li>
                                <li>TYPE - an enum of TEXT_INPUT, SELECT</li>
                                <li>LABEL - a text label for the element</li>
                                <li>VALUE - an initial value if needed
                                    <ul>
                                        <li>SELECT - value will be a list of options, separated by ‘,’</li>
                                        <li>TEXT_INPUT - value will be a placeholder for the input, can be empty</li>
                                    </ul>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <ElementsGrid {...definition}/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;
