
import ItemList from "./ItemList";

const ResCategory = ({ data,showBtn, setshowIndex }) => {
  console.log("new card ", data);

//   const [showBtn, setshowBtn] = useState(false);

  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      {/* Header */}

      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>^</span>
        </div>

        {showBtn && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
