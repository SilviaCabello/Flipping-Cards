import Flippy, { FrontSide, BackSide } from "react-flippy";

const url = "https://pokeres.bastionbot.org/images/pokemon";

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
            backgroundImage: "url(" + "https://i.imgur.com/fRBk5YK.jpg" + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></FrontSide>
        <BackSide
          style={{
            backgroundImage: "url(" + "https://i.imgur.com/yvMnWoe.jpg" + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></BackSide>
      </Flippy>
    </div>
  );
}

export default Flip;
