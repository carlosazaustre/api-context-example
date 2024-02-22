import { useAuthContext } from "./AuthContext"

export default function UserComponent() {
    const { auth } = useAuthContext()

    return (
            <h1>{auth.username}</h1>
    )
}