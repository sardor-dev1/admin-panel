import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import "./brand.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${TableCell.body}`]: {
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

const Brand = () => {
  const [users, setUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(2); // default rows per page
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users?_page=0")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="users">
      <h1 className="text-center my-3">Users</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Company name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell>{user.name}</StyledTableCell>
                  <StyledTableCell>{user.phone}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.username}</StyledTableCell>
                  <StyledTableCell>{user.address.city}</StyledTableCell>
                  <StyledTableCell>{user.company.name}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>

        <div className="pagination-wrap">
          <TablePagination
            rowsPerPageOptions={[2, 4, 6, 8, 10]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </TableContainer>
    </div>
  );
};

export default Brand;
