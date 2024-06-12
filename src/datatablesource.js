export const userColumns = [
  { field: "id", headerName: "ID", width: 270 },

  {
    field: "email",
    headerName: "User Email",
    width: 230,
  },

  {
    field: "displayName",
    headerName: "Patient Name",
    width: 230,
  },
  {
    field: "hospitalID",
    headerName: "Patient ID",
    width: 230,
  },

  {
    field: "img",
    headerName: "Records",
    width: 100,
    renderCell: (params) => {
      return (
        <a href={params.row.img} target="_blank" rel="noopener noreferrer">
          <img className="cellImg" src={params.row.img} alt="avatar" style={{ width: '50px', height: '50px' }} />
        </a>
      );
    },
  }
];
