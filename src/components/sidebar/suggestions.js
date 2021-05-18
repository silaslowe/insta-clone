import {useState, useEffect} from 'react'
import { getSuggestedProfiles } from '../../services/firebase'
import Skeleton from 'react-loading-skeleton'

export default function Suggestions({ userId, following }) {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        // setProfiles(getProfiles())
        async function suggestedProfiles() {
            const response = await getSuggestedProfiles(userId, following)
            setProfiles(response)
        }
        if(userId) {
            suggestedProfiles()
        }
        console.log("Hi")
        console.log("Profiles", profiles)
    },[userId])

    return !profiles ? (
        <Skeleton count={1} height={150} className="mt-5" /> )
        : profiles.length > 0 ? (
        <div className="rounded flex flex-col">
            <div className="text-small flex items-center align-items justify between mb-2">
            <p className="font-bold test-gray-base">Suggestions for you!</p>
            </div>
        </div>
        ) : null
}

