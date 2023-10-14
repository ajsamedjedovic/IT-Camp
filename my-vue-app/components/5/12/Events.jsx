const Events = () => {
  return (
    <div
      onClick={(e) => {
        console.log("I am clicked");
      }}
      style={{ width: 50, height: 50 }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation;
          console.log("I am innerdiv");
        }}
        style={{ width: 50, height: 50 }}
      ></div>
    </div>
  );
};
export default Events;
