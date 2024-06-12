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
    field: "timeStamp",
    headerName: "Date",
    width: 230,
    renderCell: (params) => {
      const parseTimestamp = ({ seconds, nanoseconds }) => {
        const milliseconds = seconds * 1000 + nanoseconds / 1000000;
        const date = new Date(milliseconds);
        return isNaN(date) ? "Invalid Date" : date.toLocaleDateString();
      };

      const formattedDate = parseTimestamp(params.row.timeStamp);
      return (
        <span>{formattedDate}</span>
      );
    },
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
