import axios from "../axios/axios";
import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

const tableHeaders = ["id", "name", "email"]

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get()
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, [])

    // {
    //     "id": 1,
    //     "name": "Leanne Graham", !!!
    //     "username": "Bret", !!!
    //     "email": "Sincere@april.biz", !!!
    //     "address": {
    //     "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",   !!!
    //         "zipcode": "92998-3874",
    //         "geo": {
    //         "lat": "-37.3159",
    //             "lng": "81.1496"
    //     }
    // },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //     "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    // }
    // }


    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {tableHeaders.map((key) => (
                    <th key={key}>{key}</th>
                ))}
                <th>city</th>
            </tr>
            </thead>
            <tbody>
            {users?.map((item) => (
                <tr key={item.id}>
                    {tableHeaders.map((key) => (
                        <td key={`${item.id}-${key}`}>{String(item[key] ?? "")}</td>
                    ))}
                    <td key={`${item.id}`}>{item.address.city}</td>
                </tr>

            ))}

            </tbody>
        </Table>
    )
}

export default Users;