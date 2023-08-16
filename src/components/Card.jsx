
import Image from "next/legacy/image";






export default function card({img}) {
    return(

        <div className="w-[181px] bg white rounded-lg shadow-2xl h-[200px]">

            <div className="flex flex-col p-2">
                <Image src={img} width={100} height={100} />
                <div className="flex flex-col gap-1 p-[5px] justify-center items-start">
                    <div className="font-medium text-[16px]">
                        <h3>Room name</h3>
                    </div>
                    <div className="font-light">
                        <p>Student/Landlord</p>
                    </div>
                    <div className="font-light">
                        <p>Location</p>

                    </div>
                    
                </div>
            </div>

        </div>







    )
}