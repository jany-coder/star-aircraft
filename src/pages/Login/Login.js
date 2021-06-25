import React, { useState } from 'react';
import firebaseConfig from '../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/seats" } };



    const provider = new firebase.auth.GoogleAuthProvider();
    
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const isSignedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }

                setUser(isSignedInUser)
                setLoggedInUser(isSignedInUser);
                history.replace(from)
                console.log(displayName, photoURL, email)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


    const handleSignOut = () => {
        firebase.auth().signOut().then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: ''
            }
            setUser(signedOutUser)
          })
          
          .catch(error => {
            // An error happened.
          });
          
    }

    return (
        <>
            <div className="p-5 text-center">
                <div style={{ height: "500px" }} className=" d-flex justify-content-center align-items-center">
                    <div>
                        <div className="">

                            {
                                user.isSignedIn ? <button onClick={handleSignOut}> Sign Out</button>  : <GoogleButton onClick={handleSignIn}/>
                            }
                            {
                                user.isSignedIn && 
                                <div className="mb-5">
                                     <div><h2>Welcome</h2></div>
                                     <div><h5 >{user.name}</h5></div>
                                     <div><p >{user.email}</p></div>
                                     <div className="p-2">
                                         <img style={{width:"150px"}} src={user.photo} alt="" />
                                     </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

