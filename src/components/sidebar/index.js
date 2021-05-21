import useUser from '../../hooks/use-user'
import Suggestions from './suggestions'
import PropTypes from 'prop-types'
import User from './user'


export default function Sidebar() {
    const { 
        user: {docId, fullName, username, userId, following} 
    } = useUser()

    console.log("docId", docId)

    console.log("FOLLOWING", following)
       return <div className="p-4">
           <User username={username} fullName={fullName} />
           <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
       </div>
}

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array
}