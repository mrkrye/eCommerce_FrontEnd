import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import { useGetAllUsersQuery } from "../../redux/api/usersApi";
import moment from "moment";
import UsersActions from "./UsersActions";

function ManageUsers() {
  const { data, isLoading, error } = useGetAllUsersQuery();
  const [rowId, setRowId] = useState(null);
  console.log(data);

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "id",
        width: 60,
        sortable: false,
        filterable: false,
      },
      { field: "email", headerName: "Email", width: 150 },
      { field: "password", headerName: "Password", width: 150 },
      { field: "firstName", headerName: "First Name", width: 100 },
      { field: "lastName", headerName: "Last Name", width: 100 },
      {
        field: "role",
        headerName: "Role",
        width: 100,
        type: "singleSelect",
        valueOptions: ["guest", "user", "admin"],
        editable: true,
      },
      {
        field: "createdAt",
        headerName: "Created At:",
        width: 100,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD, HH:mm:ss"),
      },
      { field: "updatedAt", headerName: "Updated At:", width: 100 },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <UsersActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );
  if (isLoading) {
    return <div>Loading Users...</div>;
  }
  if (error) {
    return <div>Error loading users.</div>;
  }
  return (
    <>
      <Box sx={{ height: 500, width: "100%" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 2, mb: 2 }}
        >
          Manage Users
        </Typography>
        <DataGrid
          columns={columns}
          rows={data}
          getRowId={(row) => row.id}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      </Box>
    </>
  );
}

export default ManageUsers;
