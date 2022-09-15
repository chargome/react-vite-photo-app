interface Props {
  setFiles: (files: File[]) => void;
}

export const FileInput = ({ setFiles }: Props): JSX.Element => {
  return (
    <label>
        <div className="text-md text-center border-dashed border-2 border-anyline rounded w-80 p-6 cursor-pointer">
          Click here to choose files
        </div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          multiple
          onChange={(e) =>
            setFiles(Array.from(e.target.files || []))
          }
        />
      </label>
  )
}