
const Grade = () => {

    let marks = 80;

    return (
        <div>
            {/* {marks>=80?<h3>Grade A</h3>
            :
            marks>=70?<h3>Grade B</h3>
            :
            <h3>Grade Under B</h3>} */}

            {(()=>{

                if(marks>=80 && marks<=100){
                    return <h3>Grade A</h3>
                }
                else if(marks>=70){
                    return <h3>Grade B</h3>
                }
                else{
                    return <h3>Grade Under B</h3>
                }

                })()}

        </div>
    );
};

export default Grade;