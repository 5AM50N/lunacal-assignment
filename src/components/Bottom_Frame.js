

function Bottom_Frame() {
  return (
    <div className=" bottom p-4 flex flex-col justify-between rounded-2xl">
      <div className="flex flex-row justify-between mx-8 h-16">
        <h2 className="galery flex items-center h-16 w-32 justify-center">Galery</h2>
        <div className="flex items-center">
          <button className="add-image flex items-center justify-center m-1 mr-4 w-32 h-12 rounded-full">+ Add Image</button>
          <button className="arrow m-1 mx-2 px-2 rounded-full h-12 w-12"><i className="fas fa-arrow-left"></i></button>
          <button className="arrow m-1 mx-2 px-2 rounded-full h-12 w-12"><i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
      <div className="images ml-8 mt-6 grid grid-cols-3 px-2 mt-2">
        <img src="image.png" alt="image m-2"></img>
        <img src="image.png" alt="image m-2"></img>
        <img src="image.png" alt="image m-2"></img>
      </div>
    </div>
  );
}

export default Bottom_Frame;