


export default function card({img}) {
    return (

        <div className="w-[181px] bg-white rounded-lg shadow-2xl h-[200px] ">

            <div className="flex flex-col p-2">
                <img className="h-[100px] w-[165px] object-cover " src={img} alt="dp" />
                <div className="flex flex-col gap-1 p-[5px] justify-center items-start">
                    <div className="font-medium text-[16px]">
                        <h3>Room Name</h3>
                    </div>
                    <div className="font-light">
                        <p>Student/lanlord</p>
                    </div>
                    <div className="font-light">
                        <p>Location</p>
                    </div>

                </div>
            </div>
        </div>
    )
  }