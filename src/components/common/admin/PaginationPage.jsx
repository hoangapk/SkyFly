import { TablePagination } from '@mui/material';

export default function PaginationPage({ page, handleChangePage, rowsPerPage, handleChangeRowsPerPage, count }) {
    return (

        <TablePagination
            component="div"
            count={count}
            page={page}
            sx={{ color : "white"}}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}