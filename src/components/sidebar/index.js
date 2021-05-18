import useUser from '../../hooks/use-user'
import Suggestions from './suggestions'
import PropTypes from 'prop-types'
import User from './user'


export default function Sidebar() {
    const { 
        user: {fullName, username, userId, following} 
    } = useUser()

    console.log("FOLLOWING", following)
       return <div className="p-4">
           <User username={username} fullName={fullName}/>
           <Suggestions userId={userId} following={following}/>
       </div>
}

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array
}