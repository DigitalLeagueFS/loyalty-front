import React, { useState, useEffect } from 'react';
import api from "../../../services/api";
import { Button } from '../../../components/form/Button';
import {Link} from "react-router-dom";

function Regiter() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        (async function loadData() {
            let res = await api.users.show({ id: 2});
            setUsers([res.data]);
        })();
    }, []);

    async function deleteUser(it) {
        let res = await api.users.destroy(it);
    }

    return (
        <div className="App">
            <Link to="/users/new">CREATE USER</Link>
            {
                users.map(function (it, i) {
                    return (
                        <div key={ `rowData_${i}`}>
                            <h1>{it.email}</h1>
                            <h2>{it.balance}</h2>
                            <Button text={'remove'} onClick={() => deleteUser(it)}/>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Regiter;
