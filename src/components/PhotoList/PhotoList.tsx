import { PhotoPreview } from "../PhotoPreview";

interface Props {
  photos: File[];
  handleDeletePhoto: (fileName: string) => void;
  variant?: 'vertical' | 'horizontal' | 'grid';
}

const VARIANT_STYLES = {
  vertical: "flex flex-col",
  horizontal: "flex flex-row w-screen overflow-scroll",
  grid: "flex max-w-full gap-4 flex-wrap items-center content-center",
}

export const PhotoList = ({
  photos,
  handleDeletePhoto,
  variant = 'vertical',
}: Props): JSX.Element => {
  return (
    <div className={`${VARIANT_STYLES[variant]} justify-center`}>
      {
        photos.map((photo) => (
          <PhotoPreview
            key={photo.name}
            photo={photo}
            handleDelete={() => handleDeletePhoto(photo.name)}
            small={variant !== 'grid'}
          />
        ))
      }
    </div>
  );
};