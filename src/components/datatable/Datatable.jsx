import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, setDoc, serverTimestamp, query, where, collection, getDocs, onSnapshot, disableNetwork, enableNetwork, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

const Datatable = () => {
  const [data, setData] = useState([]);
  const [network, setNetwork] = useState(1);
  const [status, setStatus] = useState(0);
  const [open, setOpen] = useState(false);
  const [adminList, setAdminList] = useState([]);

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
  
  let daftarAdmin = [];
  useEffect(() => {
    const fetchAdmin = async() => {
      const admins = await getDocs(collection(db, "admin"));
      admins.forEach((doc) => {
        daftarAdmin.push(doc.data().uid);
      })
      setAdminList(daftarAdmin);
    } 
    fetchAdmin();
  }, []);

  let list = []
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (auth.currentUser.email == "admin@mail.com") {
          list.push({id: doc.id, ...doc.data() })
        }
        else if (doc.data()['email'] == auth.currentUser.email) {
          list.push({ id: doc.id, ...doc.data() })
        }
      });
      setData(list);
      setStatus(querySnapshot.metadata.fromCache);
    };
  

  useEffect(()=>{
    let list = []
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        if (auth.currentUser.email == "admin@mail.com") {
          list.push({id: doc.id, ...doc.data() })
        }
        else if (doc.data()['email'] == auth.currentUser.email) {
          list.push({ id: doc.id, ...doc.data() })
        }
        
      });
      setData(list);
      setStatus(querySnapshot.metadata.fromCache);
    };
  
    fetchData()
  },[])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setData(data.filter((item) => item.id !== id));
  };

  // const handleClose = () => setOpen(false);

  const handleEdit = async (id) => {
    setOpen(true)
  };

  // const finalizeEdit = async (id) => {
  //   await setDoc(doc(db, "users", id), {
  //     ...data,
  //     timeStamp: serverTimestamp()
  //   });
  // }

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <span className="material-symbols-outlined edit-icon" onClick={() => handleEdit(params.row.id)}>edit</span>
            <span className="material-symbols-outlined delete-icon" onClick={() => handleDelete(params.row.id)}>delete</span>
          </div>
        );
      },
    },
  ];

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Health Records
        <button onClick={toggleNetwork} className={`link ${network ? 'online' : 'offline'}`}> {network ? (<>Online</>) : (<>Offline</>)} </button>
        <button onClick={fetchData} className="link"> {status ? (<>From Cache</>) : (<>From Cloud</>)} </button>
        {!adminList.includes(auth.currentUser?.uid) ? (<></>) : (
        <Link to="/users/new" className="link">
          Add New
        </Link>
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={!adminList.includes(auth.currentUser?.uid) ? userColumns : userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {/* <Modal
        open = {open}
        onClose = {handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        tes
      </Modal> */}
    </div>
  );
};

export default Datatable;

