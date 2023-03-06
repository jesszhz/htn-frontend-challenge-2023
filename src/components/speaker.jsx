export default function Speaker(props) {
  const { photo, name } = props;

  return (
    <div className="flex flex-row md:flex-col items-center md:items-start">
      <img className="w-24 h-24 rounded-full p-2 md:p-0" src={photo} />
      <p className="text-lg md:text-center ml-4 md:ml-0 mb-2">{name}</p>
    </div>

    // <div className="w-28 mr-4 flex flex-row md:flex-col items-center">
    //   <div className="w-24 h-24 overflow-hidden rounded-full">
    //     <img className="inline mx-0 my-auto h-full w-auto" src={photo}></img>
    //   </div>
    //   <p className="text-lg text-center mt-2">{name}</p>
    // </div>
  );
}
