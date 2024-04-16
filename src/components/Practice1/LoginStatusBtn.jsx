// const LoginStatus = (status) => {
//     if(status){
//         return <button>Logout</button>
//     }
//     else {
//         return <button>Login</button>
//     }
// }
const LoginStatusBtn = () => {
    // return (
    //     <div>
    //         <h1>Login Status</h1>
    //         {LoginStatus(true)}
    //     </div>
    // );

    const isLoggedIn = false;
    switch(isLoggedIn){
        case true:
            return <button>Logout</button>;
        case false:
            return <button>Login</button>;
        default:
            return null;
    }
};

export default LoginStatusBtn;