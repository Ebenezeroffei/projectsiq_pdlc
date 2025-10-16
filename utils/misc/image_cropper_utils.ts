import { Dispatch, SetStateAction } from "react";
import { Area } from "react-easy-crop";
import { toast } from "react-toastify";

class ImageCropperUtils {
    static cropImage = async (
        croppedAreaPixels: Area | undefined,
        imageSrc: string,
        onCropHandler: (
            croppedImage: Blob
        ) => void,
        setShowImageCropper: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (croppedAreaPixels) {

            const image = Object.assign(
                document.createElement('img'),
                {
                    src: imageSrc
                },)
            const imageCanvas = document.createElement("canvas");
            const imageCtx = imageCanvas.getContext("2d");
            imageCanvas.width = image.width;
            imageCanvas.height = image.height;

            imageCtx?.drawImage(
                image,
                0,
                0
            );

            const croppedImageCanvas = document.createElement('canvas')
            const croppedImageCtx = croppedImageCanvas.getContext('2d');
            croppedImageCanvas.width = croppedAreaPixels.width;
            croppedImageCanvas.height = croppedAreaPixels.height;
            croppedImageCtx?.drawImage(
                imageCanvas,
                croppedAreaPixels.x,
                croppedAreaPixels.y,
                croppedAreaPixels.width,
                croppedAreaPixels.height,
                0,
                0,
                croppedAreaPixels.width,
                croppedAreaPixels.height,
            )

            croppedImageCanvas.toBlob((blob) => {
                blob && onCropHandler(blob)
                toast.info("Image cropped.")
                setShowImageCropper(_ => false);
            }, "image/jpeg");
        }
    }
}

export default ImageCropperUtils;