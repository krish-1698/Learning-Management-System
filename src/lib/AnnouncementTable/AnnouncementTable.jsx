import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditDeleteButton from "../../components/EditDeleteButton/EditDeleteButton";
import AnnouncementService from "../../service/AnnouncementService";

const columns = [
  { id: "anouncement_id", label: "No.", minWidth: 50 },
  { id: "updated_date", label: "Updated At", minWidth: 50 },
  {
    id: "title",
    label: "Title",
    align: "center",
    minWidth: 200,
  },
  {
    id: "description",
    label: "Description",
    align: "center",
    minWidth: 400,
  },
  {
    id: "action",
    label: "Action",
    align: "center",
    minWidth: 200,
  },
];

function createData(anouncement_id, updated_date, title, description, action) {
  return { anouncement_id, updated_date, title, description, action };
}

const rows = [
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 2", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
  createData("1", "07/10/2022", "Announcement 1", "Announcement Description", <EditDeleteButton/> ),
];

export default function AnnouncementTable() {


 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: '65vh', width: "78vw" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell> 
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
