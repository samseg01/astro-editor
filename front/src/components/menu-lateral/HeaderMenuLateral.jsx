import './MenuLateral.css'

function HeaderMenuLateral({ openFile, openDirectory }) {
    return (
        <div className="header-menu">
                <button onClick={openDirectory} className='buttonFile'>|+|</button>
        </div>
    )
}
export default HeaderMenuLateral