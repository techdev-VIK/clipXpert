import Button from './Button';


const list = ["All", "Gaming", "Music", "News", "Cricket", "Soccer", "Coding", "React"];

const ButtonList = () => {

    return (
        <div className='flex'>
            {list.map((b) => (
                <Button key={b} name={b}/>
            ))}
        </div>
    )
}


export default ButtonList;