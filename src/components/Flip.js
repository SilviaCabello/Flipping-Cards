import Flippy, { FrontSide, BackSide } from "react-flippy";

function Flip() {
  let flippy;

  return (
    <div>
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}
        >
          Bright Flash
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>Frida Kahlo</BackSide>
      </Flippy>
    </div>
  );
}

export default Flip;
