import Bottom_Frame from "./Bottom_Frame";
import Top_Frame from "./Top_frame";



function Right_Frame() {
  return (
    <div className="right container m-2 my-10 w-6/12 p-0 flex flex-col justify-around">
     <Top_Frame />
     <Bottom_Frame />
    </div>
  );
}

export default Right_Frame;