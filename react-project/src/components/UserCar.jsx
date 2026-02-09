export function UserCard({ data }) {
    const { name, role, country } = data;

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Role: {role}</p>
            <p>Country: {country}</p>
        </div>
    );
}
