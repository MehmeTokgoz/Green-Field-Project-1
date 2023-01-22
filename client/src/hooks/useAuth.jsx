import axios from "axios";
import { useState, useEffect } from "react";

// export default () => {
//     const [auth, setAuth] = useState();

//     const verifyAuth = async () => {
//         try {
//             const res = await axios.get("/api/auth/status");
//             return res.data;
//         } catch (error) {
//             console.log(error);
//             return false;
//         }
//     };

//     useEffect(() => {
//         (async () => {
//             const data = await verifyAuth();
//             setAuth(data);
//         })();
//     });


//     // useEffect(() => {
//     //     async function getStatus() {
//     //         const data = await verifyAuth();
//     //         setAuth(data);
//     //     }
//     //     getStatus();
//     // });

//     // const getStatus = async () => {
//     //     const data = await verifyAuth();
//     //     setAuth(data);
//     // };
//     // getStatus();

//     console.log(auth);
//     return { auth };
// };

export default () => {
    const [auth, setAuth] = useState();
    const verifyAuth = async () => {
        try {
            const res = await axios.get(
                "/api/auth/status"
            );
            setAuth(res.data);
        } catch (error) {
            console.log(error);
            setAuth(false);
        }
    };

    useEffect(() => {
        verifyAuth();
    },[]);

    return { auth };
};
