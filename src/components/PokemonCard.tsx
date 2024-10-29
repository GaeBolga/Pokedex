import  { useEffect } from "react";

function PokemonCard(props: { name: string; imgSrc: string }) {

  useEffect(() => {
    if (props.name === "pikachu") {
      alert("pika pika !");
    }
  }, [props.name]);


  return (
    <figure>
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>
        <p>{props.name}</p>
        
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
