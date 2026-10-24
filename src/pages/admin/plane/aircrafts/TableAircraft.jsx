import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useMemo, useState } from 'react';
import { AirportContext } from '../../../../contexts/AirportProvider';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { styleTable, tableStyle } from '../../../../utils/StyleMui';
import { formatFirebaseTimestamp, getObjectById } from '../../../../services/reponsitory';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import { deleteDocument } from '../../../../services/firebaseService';
import { AircraftContext } from '../../../../contexts/AircraftProvider';
import PaginationPage from '../../../../components/common/admin/PaginationPage';
import { FaEye } from 'react-icons/fa';
import DialogListChair from './DialogListChair';


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

export default function TableAircraft({ handleEdit, search }) {
    const aircraft = useContext(AircraftContext);
    const airports = useContext(AirportContext);
    const airlines = useContext(AirlineContext);
    const [open, setOpen] = useState(false);
    const [idDelete, setidDelete] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openView, setOpenView] = useState(null);
    const [openList, setOpenList] = useState(false);
   
       const handleClickOpenList = (row) => {
           setOpenList(true);
           setOpenView(row)
       };
       const handleCloseList = () => {
           setOpenList(false);
       };
   
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
        deleteDocument("Aircrafts", idDelete);
        handleClose();
    }
    const dataSearch = useMemo(() => {
        return aircraft.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, aircraft])
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
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center" >Name</StyledTableCell>
                        <StyledTableCell align="center" >Airline</StyledTableCell>
                        <StyledTableCell align="center" >Airport</StyledTableCell>
                        <StyledTableCell align="center" >List chair</StyledTableCell>
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
                            <StyledTableCell align="center" >{getObjectById(airlines, row.airline_id).name}</StyledTableCell>
                            <StyledTableCell align="center" >{getObjectById(airports, row.airport_id).name}</StyledTableCell>
                            <StyledTableCell align="center" >
                                <Button onClick={() => handleClickOpenList(row)} variant="contained" color='error' >
                                    <FaEye />
                                </Button>
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
            <DialogListChair openView={openView} openList={openList} handleCloseList={handleCloseList}/>
        </TableContainer>
    );
}
