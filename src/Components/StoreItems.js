const StoreItems = ({ image, productName, productPrice }) => {
  //console.log(image, productName, productPrice);

  return (
    <>
      <img
        src={image}
        alt="loading..."
        style={{ width: "200px", height: "200px", objectFit: "cover", backgroundColor:"#454353" }}
      ></img>
    </>
  );
};

export default StoreItems;
