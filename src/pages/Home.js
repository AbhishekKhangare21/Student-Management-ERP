import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../App.css";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { Button, ButtonBase, ButtonGroup } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.data);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you wanted to delete?")) {
      dispatch(loadUsers());
      dispatch(deleteUser(id));
    }
  };
  const editHandler = (name) => {
    navigate("./editUser");
    console.log(name);
  };

  return (
    <>
      <div className="add">
        <Button
          variant="contained"
          onClick={() => navigate("./addUser")}
          color="primary"
        >
          Add Student
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                    >
                      <Button
                        color="primary"
                        onClick={() => editHandler(user.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
