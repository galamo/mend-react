import { useEffect, useState } from "react";

export function ImageComponent(props: { image: string }) {
  const defaultImage =
    "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg";
  const [currentImage] = useImageLoaded(props.image || defaultImage);
  return <img src={currentImage} height={200} width={300} />;
}

function useImageLoaded(initialImageUrl: string) {
  const defaultImage =
    "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg";
  const [currentImage, setCurrentImage] = useState(initialImageUrl);

  useEffect(() => {
    function testImage() {
      const imageDom = new Image();
      imageDom.onerror = () => {
        setCurrentImage(defaultImage);
      };
      imageDom.src = initialImageUrl;
    }
    testImage();
  }, []);

  return [currentImage];
}
