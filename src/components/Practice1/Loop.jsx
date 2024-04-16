
const Loop = () => {
    let arr = ["apple", "mango", "banana"];
    return (
        <div>
            <ul>
                {
                    arr.map((item,i) => {
                        return <li key={i.toString()}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Loop;