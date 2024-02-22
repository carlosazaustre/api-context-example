import { useAuthContext } from './AuthContext'

export default function InputComponent() {
    const {updateUsername} = useAuthContext();
    
    return (
        <input
            type="text"
            onChange={(e) => updateUsername(e.target.value)}
        />
    )
}