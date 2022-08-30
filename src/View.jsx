import ReactAudioPlayer from "react-audio-player";
//...

const View = (props) => {
  console.log(props.src);
  return (
    <div
      style={{
        backgroundColor: "#fce7f3",
        padding: "20px 20px",
        paddingBottom: "30px",
        margin: "20px",
        border: "2px solid #be185d",
        borderRadius: "0.4rem",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <p style={{ fontSize: "1.7rem", marginLeft: "8px" }}>{props.name}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <small style={{ fontStyle: "italic", marginLeft: "8px" }}>
          {props.rating}
        </small>
        <div
          style={{
            marginTop: "10px",
            border: "2px solid #be185d",
            width: "20rem",
            padding: "2px 2px",
            borderRadius: "0.8rem",
            backgroundColor: "#f3f4f6",
          }}
        >
          <ReactAudioPlayer src={props.src} controls volume />
        </div>
      </div>
    </div>
  );
};
export default View;
