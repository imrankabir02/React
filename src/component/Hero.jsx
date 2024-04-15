
const Hero = (props) => {
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.des}
            </p>
            <ul>
                <li>Name: {props.item.name}</li>
                <li>Version: {props.item.version}</li>
                <li>Size: {props.item.size}</li>
            </ul>
            <button onClick={() => props.ChildBtnClick()}>Click Me</button>
        </div>
    );
};

export default Hero;