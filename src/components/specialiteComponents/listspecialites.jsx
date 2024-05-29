"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
const Listspecialites = ({specialites}) => {
    
const columns = useMemo(
() => [

{
accessorKey: 'nomspecialite',
header: 'NOM SPECIALITE',
size: 50,
},


],
[specialites],
);

return (
<div>
<MaterialReactTable columns={columns} data={specialites} />;
</div>
)
}
export default Listspecialites