import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FlightContext } from '../../../../contexts/FlightProvider';
import { useContext, useMemo, useState } from 'react';
import { styleTable, tableStyle } from '../../../../utils/StyleMui';
import { Button } from '@mui/material';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import ModelDelete from '../../../../components/common/admin/ModelDelete';
import PaginationPage from '../../../../components/common/admin/PaginationPage';
import { deleteDocument } from '../../../../services/firebaseService';
import { formatFirebaseTimestamp, getObjectById } from '../../../../services/reponsitory';
import { AircraftContext } from '../../../../contexts/AircraftProvider';
import { AirlineContext } from '../../../../contexts/AirlineProvider';
import { AirportContext } from '../../../../contexts/AirportProvider';

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

export default function TableFlights({ handleEdit, search }) {
    const flights = useContext(FlightContext);
    const airlines = useContext(AirlineContext);
    const airports = useContext(AirportContext);
    const aircraft = useContext(AircraftContext);
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
        deleteDocument("Flights", idDelete);
        handleClose();
    }

    const dataSearch = useMemo(() => {
        return flights.filter(p => {
            const a =  aircraft.find(p => p.id == p.aircraft_id);
            return a ? a.name.toLowerCase().includes(search.toLowerCase()) : true ;
      });
    }, [search, flights, aircraft]);

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
                        <StyledTableCell align="center" >Airline</StyledTableCell>
                        <StyledTableCell align="center" >Aircraft</StyledTableCell>
                        <StyledTableCell align="center" >From airport</StyledTableCell>
                        <StyledTableCell align="center" >To airport</StyledTableCell>
                        <StyledTableCell align="center" >Arrival time</StyledTableCell>
                        <StyledTableCell align="center" >Departure time</StyledTableCell>
                        <StyledTableCell align="center" >Round trip</StyledTableCell>
                        <StyledTableCell align="center" >Discount</StyledTableCell>
                        <StyledTableCell align="center" >Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataPagination.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {page * rowsPerPage + index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center" >{getObjectById(airlines, row.airline_id).name}</StyledTableCell>
                            <StyledTableCell align="center" >{getObjectById(aircraft, row.aircraft_id)?.name || "unknow"}</StyledTableCell>
                            <StyledTableCell align="center" >{getObjectById(airports, row.from_airport).name}</StyledTableCell>
                            <StyledTableCell align="center" >{getObjectById(airports, row.to_airport).name}</StyledTableCell>
                            <StyledTableCell align="center" >{row.departure_time}</StyledTableCell>
                            <StyledTableCell align="center" >{row.arrival_time}</StyledTableCell>
                            <StyledTableCell align="center" >{row.is_round_trip ? "Yes" : "No"}</StyledTableCell>
                            <StyledTableCell align="center" >{row.discount}%</StyledTableCell>
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