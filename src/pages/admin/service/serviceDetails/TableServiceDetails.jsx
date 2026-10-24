import React, { useContext, useMemo, useState } from 'react';
import { deleteDocument } from '../../../../services/firebaseService';
import { Button, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styleTable, tableStyle } from '../../../../utils/StyleMui';
import { ServiceDetailContext } from '../../../../contexts/ServiceDetailProvider';
import PaginationPage from '../../../../components/common/admin/PaginationPage';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { formatFirebaseTimestamp } from '../../../../services/reponsitory';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
function TableServiceDetails({ handleEdit, search }) {
    const serviceDetail = useContext(ServiceDetailContext);
    const [open, setOpen] = useState(false);
    const [idDelete, setidDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleClickOpen = (id) => {
        setOpen(true);
        setidDelete(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        deleteDocument("ServiceDetails", idDelete);
        handleClose();
    }
    const dataSearch = useMemo(() => {
        return serviceDetail.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, serviceDetail])
    const dataPagination = useMemo(() => {
        return dataSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [page, dataSearch, rowsPerPage]);
    return (
        <TableContainer
            component={Paper}
            elevation={0}
            sx={styleTable}
        >
            <Table sx={tableStyle} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center" >Name</StyledTableCell>
                        <StyledTableCell align="center" >Img</StyledTableCell>
                        <StyledTableCell align="center" >Created_at</StyledTableCell>
                        <StyledTableCell align="center" >Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {page * rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center" >{row.name}</StyledTableCell>
                            <StyledTableCell align="center">
                                <img className='h-10 w-10 mx-auto' src={row.img_url} alt="" />
                            </StyledTableCell>
                            <StyledTableCell align="center" >{formatFirebaseTimestamp(row.created_at)}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={() => handleEdit(row)} variant="contained" sx={{ mr: 2 }}>
                                    <CiEdit />
                                </Button>
                                <Button onClick={() => handleClickOpen(row.id)} variant="contained" color='error' >
                                    <MdDelete />
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <PaginationPage
                page={page}
                count={dataSearch.length}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <ModelDelete open={open} handleClose={handleClose} handleDelete={handleDelete} />
        </TableContainer>
    );
}

export default TableServiceDetails;