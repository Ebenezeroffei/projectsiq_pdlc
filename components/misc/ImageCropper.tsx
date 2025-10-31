import { Dispatch, SetStateAction, useState } from "react"
import Cropper, { Area, Point } from "react-easy-crop"
import ImageCropperUtils from "@/utils/misc/image_cropper_utils"
import CustomSmallButton from "@/components/buttons/CustomSmallButton"
import CustomSmallSecondaryButton from "../buttons/CustomSmallSecondaryButton"

type ImageCropperProps = {
    image: string,
    onCropHandler: (croppedImage: Blob) => void,
    aspectRatio?: number,
    setShowImageCropper: Dispatch<SetStateAction<boolean>>,
}

const ImageCropper = ({
    image,
    aspectRatio = 1,
    onCropHandler,
    setShowImageCropper,
}: ImageCropperProps) => {
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState<Area>()



    return (
        <section>
            <p className="font-semibold text-primary mb-4">
                Image Cropper
            </p>
            <div className="relative h-[500px]">
                <Cropper
                    image={image}
                    aspect={aspectRatio}
                    crop={crop}
                    onCropChange={setCrop}
                    onCropComplete={(
                        croppedArea,
                        croppedAreaPixels,
                    ) => {
                        setCroppedArea(_ => croppedAreaPixels);
                    }}
                    zoom={zoom}
                    minZoom={1}
                    maxZoom={3}
                    zoomWithScroll={false}
                />
            </div>
            <input
                type="range"
                className="w-full my-4 outline-none"
                min={1}
                step={0.005}
                max={3}
                defaultValue={zoom}
                onChange={(ele) => setZoom(_ => Number(ele.target.value))}
            />
            <div className="flex justify-end gap-2">
                <CustomSmallButton
                    text="Crop"
                    onPressedHandler={() => ImageCropperUtils.cropImage(
                        croppedArea,
                        image,
                        onCropHandler,
                        setShowImageCropper,
                    )}
                />
                <CustomSmallSecondaryButton
                    onPressedHandler={() => setShowImageCropper(_ => false)}
                    text="Cancel"
                />
            </div>
        </section>
    )
}

export default ImageCropper