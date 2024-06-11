import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { disableNetwork, enableNetwork } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [network, setNetwork] = useState(1);

  const navigate = useNavigate();
 
  const handleNavigateToSignUp = () => {
    navigate("..");
  };

  useEffect(()=>{
    const uploadFile = ()=>{

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev=>({...prev, img:downloadURL})))
            console.log('File available at', downloadURL);
          });
        }
      );
      
    };
    file && uploadFile();


  },[file])

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

  const handleInput = (e) =>{
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
  }

  const handleAdd = async(e) =>{
    if (network) {
      e.preventDefault()
      // const res = await signInWithEmailAndPassword(auth, data.email, data.password);
      await addDoc(collection(db, "users", e.target.id), {
        ...data,
        timeStamp: serverTimestamp()
      });

      handleNavigateToSignUp();
  } else {

  }
  }
  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  id = {input.id}
                  type={input.type} 
                  placeholder={input.placeholder} 
                  onChange={handleInput}/>
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
            <button onClick={toggleNetwork}>Toggle Network</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
