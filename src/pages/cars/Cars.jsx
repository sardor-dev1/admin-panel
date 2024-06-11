import React, { useState } from "react";
import { nanoid } from "nanoid";
import UserModal from "../../components/modal/UserModal";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Cars = () => {
  const [cars, setCars] = useState([
    {
      id: nanoid(),
      name: "MERS",
      price: "5655",
      color: "black",
      year: "2025",
      brand: "merc",
      action: "21654",
    },
    {
      id: nanoid(),
      name: "BMW",
      price: "5655",
      color: "red",
      year: "2015",
      brand: "bmw",
      action: "21654",
    },
  ]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentCar, setCurrentCar] = useState(null);

  let navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (car) => {
    setCurrentCar(car);
    setModal(true);
  };

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
        currentCar={currentCar}
      />
      <div className="container">
        <div className="row items-center my-4">
          <div className="col-2">
            <Button
              onClick={() => {
                setCurrentCar(null);
                setModal(true);
              }}
              variant="contained"
            >
              Open Modal
            </Button>
          </div>
          <div className="col-6">
            <TextField
              fullWidth
              label="Search"
              id="search"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="col-4">
            <Button variant="contained" onClick={() => navigate(-1)}>
              Go home
            </Button>
          </div>
        </div>
        <div className="row mt-4">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>T/R</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Year</StyledTableCell>
                  <StyledTableCell>Color</StyledTableCell>
                  <StyledTableCell>Brand</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCars.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell>{item.name}</StyledTableCell>
                    <StyledTableCell>{item.price}</StyledTableCell>
                    <StyledTableCell>{item.year}</StyledTableCell>
                    <StyledTableCell>{item.color}</StyledTableCell>
                    <StyledTableCell>{item.brand}</StyledTableCell>
                    <StyledTableCell>{item.action}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                        <NavLink
                          to={`/main/single-car/${item.id}`}
                          className="btn btn-primary"
                        >
                          View
                        </NavLink>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Cars;
