import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {ElementsGrid, ElementsGridProps, GridCell} from "./components/ElementsGrid";


function App() {

    const [definition, setDefinition] = useState<ElementsGridProps>({rows: 0, columns: 0, gridData: {}});

    const parseDefinitions = (defStr: string): void => {
        const newDef = {...definition}
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
            <Container maxWidth="md">
                <Box>
                    <TextField
                        margin="normal"
                        multiline
                        fullWidth
                        rows={10}
                        onChange={handleDefinitionChange}
                    />
                    <ElementsGrid {...definition}/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default App;
