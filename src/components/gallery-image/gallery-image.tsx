type GalleryImageScreenProps = {
  actualImage: string;
}
function GalleryImage ({actualImage}: GalleryImageScreenProps):JSX.Element{
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={actualImage}
        alt="Photo studio"
      />
    </div>
  );
}


export default GalleryImage;
