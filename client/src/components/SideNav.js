const SideNav = () => {
    return (
        <nav className="sideNav">
            <ul className="sideNav-links">
                <li><a href="#home"><h1>Spotify</h1></a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#search">Search</a></li>
                <li><a href="#your_library">Your Library</a></li>
                <li><a href="#create_playlist">Create Playlist</a></li>
                <li><a href="#liked_songs">Liked Songs</a></li>
            </ul>
        </nav>
    )
}
export default SideNav;