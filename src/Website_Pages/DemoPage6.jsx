export default function DemoPage6() {
  const Cars = [
    { Brand: "Skoda", Model: "Slavia", Price: "1500000", Location: "Chennai" },
    { Brand: "Maruti", Model: "Baleno", Price: "100000", Location: "Vellore" },
    {
      Brand: "Kia",
      Model: "Seltos",
      Price: "1300000",
      Location: "Madhuravayol",
    },
  ];

  return (
    <div>
      <div className="VehicleInformation"> <h2> Vehicle Information </h2> </div>
      <div className="CarsList">
        {Cars && Cars.length != 0
          ? Cars.map((value, index) => {
              return (
                <div key={index}>
                  <p> CarsBrand: {value?.Brand} </p>
                  <p> CarsModel: {value?.Model} </p>
                  <p> CarsPrice: {value?.Price} </p>
                  <p> CarsLocation: {value?.Location} </p>
                  <hr />
                </div>
              );
            })
          : "No Cars Found"}
      </div>
    </div>
  );
}
