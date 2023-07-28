import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
      src="https://c4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-preview.jpg" 
      alt="" 
      className="headerImg" />
    </div>
  )
}
