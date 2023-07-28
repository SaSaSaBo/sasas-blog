import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="data:image/jpeg;base64,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" 
                    alt="" 
                    className='sidebarImg'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum obcaecati iste inventore hic! Assumenda, provident!</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIconIns fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>

        </div>
    )
}
