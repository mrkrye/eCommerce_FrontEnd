import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllUsersQuery } from "../redux/api/usersApi";

function Users() {
  const { data, isLoading } = useGetAllUsersQuery();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>is Admin?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <h1>Loading Users...</h1>
                </TableCell>
              </TableRow>
            ) : (
              data.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.firstName}</TableCell>
                  <TableCell align="right">{user.lastName}</TableCell>
                  <TableCell align="right">{user.password}</TableCell>
                  <TableCell align="right">{user.isAdmin.toString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Users;
