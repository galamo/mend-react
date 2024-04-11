export function ImageComponent(props: { image: string }) {
  const defaultImage =
    "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg";
  const imageUrl = props.image || defaultImage;
  return <img src={imageUrl} height={200} width={300} />;
}
