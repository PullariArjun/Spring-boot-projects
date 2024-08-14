import "./Toggler.css"
const Toggler = (prop) => {
    return (
        /* From Uiverse.io by Cevorob */
        <label className="burger" for="burger">
            <input type="checkbox" id="burger" checked={prop.state} onChange={prop.onChange}/>
            
                <span></span>
                <span></span>
                <span></span>
        </label>
    )
}
export default Toggler