import {useEffect} from 'react'

export default function Dashboard () {
    useEffect(() => {
        document.title('Instagram')
    },[])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <TimeLine />
                <Sidebar />
            </div>
        </div>
    )
}