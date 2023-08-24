"use client"

import { useEffect } from "react";

function Users() {
    useEffect(() => {
        console.log("Users component mounted");
    })
    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}
export default Users;