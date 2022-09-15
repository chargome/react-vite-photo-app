import React from "react";
import { HiX } from "react-icons/hi";
import { bytesToMbLabel } from "../../util";
import { Button } from "../Button";
import { CloseIconButton } from "../CloseIconButton";
interface Props {
  photo: File;
  handleDelete: (fileName: string) => void;
  small?: boolean;
}

export const PhotoPreview = ({
  photo,
  handleDelete,
  small,
}: Props): JSX.Element => {
  const [photoUrl] = React.useState(URL.createObjectURL(photo));

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row">
        <div className="flex flex-col items-start">
          <div className="-mr-4">
            <CloseIconButton
              handleClick={() => handleDelete(photo.name)}
            />
          </div>
          <img
            className={`${small ? 'w-20 h-20' : 'w-52 h-52'} rounded object-cover`}
            src={photoUrl}
          />
          <div
            className={`
              ${small && 'bg-anyline bg-opacity-70 p-2 rounded -ml-4 -mt-4'}
              text-xs flex flex-col
            `}
          >
            <div>
              {photo.name}
            </div>
            <div>
              Size: {bytesToMbLabel(photo.size)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}