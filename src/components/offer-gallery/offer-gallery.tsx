import GalleryImage from '../gallery-image/gallery-image';

type OfferGalleryScreenProps = {
  actualImages: string[];
}

function OfferGallery ({actualImages}: OfferGalleryScreenProps):JSX.Element {
  return (
    <div className="offer__gallery">
      {actualImages.map((image) => (
        <GalleryImage key={image} actualImage = {image}/>
      ))}
    </div>
  );
}

export default OfferGallery;
