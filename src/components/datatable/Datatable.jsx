import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, disableNetwork, enableNetwork } from "firebase/firestore";
import { db } from "../../firebase"


const Datatable = () => {
  const [data, setData] = useState([]);
  const [network, setNetwork] = useState(1);
  const [status, setStatus] = useState(0);

  const toggleNetwork = (e) => {
    network ? setOffline() : setOnline();
  }

  const setOffline = async (e) => {
    await disableNetwork(db);
    setNetwork(0);
    console.log("network offline")
  }

  const setOnline = async (e) => {
    await enableNetwork(db);
    setNetwork(1);
    console.log("network online")
  }

  let list = []
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      });
      setData(list);
      setStatus(querySnapshot.metadata.fromCache);
    };
  

  useEffect(()=>{
    let list = []
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      });
      setData(list);
      setStatus(querySnapshot.metadata.fromCache);
    };
  
    fetchData()
  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <button onClick={toggleNetwork} className="link"> {network ? (<>Online</>) : (<>Offline</>)} </button>
        <button onClick={fetchData} className="link"> {status ? (<>From Cache</>) : (<>From Cloud</>)} </button>
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
