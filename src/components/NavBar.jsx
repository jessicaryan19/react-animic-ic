import '../styles/NavBarStyle.css'

export default function NavBar(){
    return(
        <div>
            <nav>
                <div className="nav-options">
                    <h1>AnimIC</h1>
                    <a href="/">Home</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/search">Search</a>
                </div>
            </nav>
        </div>
    );
}