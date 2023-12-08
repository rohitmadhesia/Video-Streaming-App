import Button from "./Button"

const Buttonlist = () => {
    const list = [
        "All", "Anime", "Series","Movies", "Computer Science" ,"Live", "Thriller","Music","News", "Recently updated"
    ]
    return (
        <div className="flex">
           {list.map((ele) => {
            return <Button name={ele}/>}
           )} 
            
        </div>
    )
}
export default Buttonlist