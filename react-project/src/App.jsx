import { UserCard } from "./components/UserCar";
import { Wrapper } from "./components/wrapper";

export default function App() {
    const users = [
        {
            name: "Virat Kohli",
            role: "Batsman",
            country: "India",
        },
        {
            name: "Rohit Sharma",
            role: "Hitter",
            country: "India",
        },
    ];

    return (
        <div>
            <h1>Users Dashboard</h1>

            <Wrapper title="Users List">
                <UserCard data={users[0]} />
                <UserCard data={users[1]} />
             
            </Wrapper>
        </div>
    );
}
