import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <div
      style={{
        width: "1000px",
        margin: "auto",
        marginTop: "50px",
        minHeight: "50vh",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 300,
        }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data) => (
              <TableRow
                key={data.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.last_name}</TableCell>
                <TableCell align="center">{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Brodie",
    last_name: "Huxham",
    email: "bhuxham0@dell.com",
    gender: "Male",
    ip_address: "246.80.149.0",
  },
  {
    id: 2,
    first_name: "Jeth",
    last_name: "Streak",
    email: "jstreak1@bandcamp.com",
    gender: "Male",
    ip_address: "154.201.219.216",
  },
  {
    id: 3,
    first_name: "Arden",
    last_name: "Limming",
    email: "alimming2@cbsnews.com",
    gender: "Female",
    ip_address: "60.193.82.236",
  },
  {
    id: 4,
    first_name: "Meridith",
    last_name: "Artist",
    email: "martist3@usda.gov",
    gender: "Female",
    ip_address: "197.127.163.198",
  },
  {
    id: 5,
    first_name: "Kendal",
    last_name: "Bugg",
    email: "kbugg4@state.gov",
    gender: "Non-binary",
    ip_address: "217.253.125.81",
  },
  {
    id: 6,
    first_name: "Edyth",
    last_name: "Quartermain",
    email: "equartermain5@pinterest.com",
    gender: "Female",
    ip_address: "47.129.108.77",
  },
  {
    id: 7,
    first_name: "Krispin",
    last_name: "Wooderson",
    email: "kwooderson6@umn.edu",
    gender: "Male",
    ip_address: "58.87.46.216",
  },
  {
    id: 8,
    first_name: "Geri",
    last_name: "Biddiss",
    email: "gbiddiss7@ed.gov",
    gender: "Male",
    ip_address: "150.149.16.154",
  },
  {
    id: 9,
    first_name: "Peri",
    last_name: "Elsey",
    email: "pelsey8@stanford.edu",
    gender: "Female",
    ip_address: "17.233.135.50",
  },
  {
    id: 10,
    first_name: "Cicily",
    last_name: "Scahill",
    email: "cscahill9@xrea.com",
    gender: "Female",
    ip_address: "15.146.221.199",
  },
];
