import PropTypes from 'prop-types'
import {useState} from 'react'

export default function SuggestedProfile({userDocId, username, profileId, userId}) {
    const [followed, setFollowed] = useState(false)
    
    return !followed ? (
        <div className=" flex flex-row items-center align-items jsutify-between">
            <div className="flex items-center justify-between">
                <img className="rounded-full w-8 flex mr-3" src={`/images/avatars/${username}.jpg`} alt="" />
            </div>
        </div>
    ) :
    null
}

SuggestedProfile.propTypes = {
    userDocId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}