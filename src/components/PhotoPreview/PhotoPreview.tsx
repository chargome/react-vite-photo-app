import React from "react";
import { HiX } from "react-icons/hi";
import { bytesToMbLabel } from "../../util";
import { Button } from "../Button";
interface Props {
  photo: File;
  handleDelete: (fileName: string) => void;
  gridView?: boolean;
}

export const PhotoPreview = ({
  photo,
  handleDelete,
  gridView,
}: Props): JSX.Element => {
  const [photoUrl] = React.useState(URL.createObjectURL(photo));

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row">
        {
          gridView
            ? (
              <div className="flex flex-col items-start">
                <HiX
                  className="w-5 h-5 -mr-4 text-red-500 cursor-pointer self-end"
                  onClick={() => handleDelete(photo.name)}
                />
                <img
                  className="w-52 h-52 rounded object-cover hover:overlay"
                  src={photoUrl}
                />
                <div className="bg-anyline bg-opacity-70 p-2 rounded -ml-4 -mt-4 text-xs flex flex-col">
                  <div className="flex flex-row">
                    {photo.name}
                  </div>
                  <div>
                    Size: {bytesToMbLabel(photo.size)}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <img width="80px" height="80px" src={photoUrl} />
                <HiX
                  className="w-5 h-5 text-red-500 cursor-pointer"
                  onClick={() => handleDelete(photo.name)}
                />
              </>
            )
        }
      </div>
      {!gridView && (
        <>
          <div className="text-xs pt-1">
            {photo.name}
          </div>
          <div className="text-xs pt-1">
            Size: {bytesToMbLabel(photo.size)}
          </div>
        </>
      )}
    </div>
  );
}