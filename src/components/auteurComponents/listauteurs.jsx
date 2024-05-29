"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
const Listauteurs = ({auteurs}) => {
    
const columns = useMemo(
() => [

{
accessorKey: 'nomauteur',
header: 'NOM AUTEUR',
size: 50,
},
{
accessorKey: 'email',
header: 'EMAIL',
size: 50,
},
{
accessorKey: 'numtel',
header: 'NUM',
size: 10,
},

],
[auteurs],
);

return (
<div>
<MaterialReactTable columns={columns} data={auteurs} />;
</div>
)
}
export default Listauteurs