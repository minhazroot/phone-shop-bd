export default function Friend({ friend }) {
    console.log(friend)
    const { name, email, phone } = friend;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>mail:{email}</h2>
            <h3>Phone:{phone}</h3>
        </div>

    )
}