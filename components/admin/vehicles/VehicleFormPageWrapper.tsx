'use client';

import CustomButton from "@/components/buttons/CustomButton";
import CustomSmallSecondaryButton from "@/components/buttons/CustomSmallSecondaryButton";
import ErrorAlert from "@/components/misc/ErrorAlert";
import FormWrapper from "@/components/misc/FormWrapper";
import ImageCropper from "@/components/misc/ImageCropper";
import NoItem from "@/components/misc/NoItem";
import FormSkeleton from "@/components/skeleton/FormSkeleton";
import CustomColorField from "@/components/text_fields/CustomColorField";
import CustomFileInput from "@/components/text_fields/CustomFileInput";
import CustomNumberField from "@/components/text_fields/CustomNumberField";
import CustomSelectField, { SelectFieldDictValue, SelectFieldValue } from "@/components/text_fields/CustomSelectField";
import CustomTextArea from "@/components/text_fields/CustomTextArea";
import CustomTextField from "@/components/text_fields/CustomTextField";
import ImageAssets from "@/constants/misc/image_assets";
import Validators from "@/constants/misc/validators";
import Endpoints from "@/utils/misc/endpoints";
import MiscUtils from "@/utils/misc/misc_utils";
import VehicleUtils from "@/utils/vehicles/vehicle_utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import useSWR from "swr";

const CarImage = ({
    image,
    imageKey,
    setImages
}: Readonly<{
    image: string,
    imageKey: string,
    setImages: Dispatch<SetStateAction<Record<string, string>>>,
}>) => {
    return (
        <section className="relative">
            <div
                className="p-1 rounded-xs bg-red-500 text-white absolute top-1 right-1 cursor-pointer hover:bg-red-400"
                onClick={() => VehicleUtils.removeCarImage(
                    imageKey,
                    setImages
                )}
            >
                <MdClose
                    size={20}
                />
            </div>
            <img
                alt={`Car image ${imageKey}`}
                src={image}
                className="aspect-video object-center object-cover"
            />
        </section>
    )
}

const Feature = ({
    name,
    value,
    setFeatures,
}: Readonly<{
    name: string,
    value: string,
    setFeatures: Dispatch<SetStateAction<Record<string, string>>>,
}>) => {
    return (
        <section className="py-2 px-4 rounded-xs flex items-center gap-6 bg-[#2a2a2a]">
            <div>
                <p className="text-xs font-semibold text-gray-400">
                    {name}
                </p>
                <p className="text-white">
                    {value}
                </p>
            </div>
            <div
                className="bg-red-500 rounded-xs cursor-pointer p-1 text-white hover:bg-red-400"
                onClick={() => VehicleUtils.removeFeature(
                    name,
                    setFeatures
                )}
            >
                <MdClose />
            </div>
        </section>
    )
}


const VehicleFormPageWrapper = () => {
    type CarFormData = {
        car_brand: string[],
        body_type: string[],
        transmission_type: string[],
        fuel_type: string[],
        drivetrain: SelectFieldDictValue[],
    };
    const { data, isLoading, mutate, error } = useSWR(Endpoints.cars.form, MiscUtils.getData<CarFormData>, {
        revalidateOnFocus: false,
    });
    const [isPageReady, setIsPageReady] = useState(false);
    const [bodyTypes, setBodyTypes] = useState<string[]>([])
    const [bodyType, setBodyType] = useState('')
    const [model, setModel] = useState('');
    const [brands, setBrands] = useState<string[]>([])
    const [brand, setBrand] = useState('')
    const [transmissionTypes, setTransmissionTypes] = useState<string[]>([])
    const [transmissionType, setTransmissionType] = useState('')
    const [fuelTypes, setFuelTypes] = useState<string[]>([])
    const [fuelType, setFuelType] = useState('')
    const [drivetrains, setDrivetrains] = useState<SelectFieldDictValue[]>([])
    const [drivetrain, setDrivetrain] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('')
    const [seatingCapacity, setSeatingCapacity] = useState('')
    const [numberOfDoors, setNumberOfDoors] = useState('')
    const [engineCapacity, setEngineCapacity] = useState('')
    const [price, setPrice] = useState('0')
    const [features, setFeatures] = useState<Record<string, string>>({})
    const [featureName, setFeatureName] = useState('')
    const [featureValue, setFeatureValue] = useState('')
    const [images, setImages] = useState<Record<string, string>>({});
    const [image, setImage] = useState<Blob | null>(null)
    const [imageName, setImageName] = useState('')
    const [imageBeforeCropping, setImageBeforeCropping] = useState('');
    const [description, setDescription] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [showImageCropper, setShowImageCropper] = useState(false);
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    // When page loads
    useEffect(() => {
        const searchParams = new URL(window.location.href).searchParams;
        if (searchParams.has('key')) {

        }
        else {
            setIsPageReady(_ => true)
        }
    }, [])

    // Observe data
    useEffect(() => {
        if (data) {
            setBrands(_ => data.car_brand);
            setBrand(prevBrand => prevBrand || data.car_brand[0])

            setBodyTypes(_ => data.body_type);
            setBodyType(prevBodyType => prevBodyType || data.body_type[0])

            setTransmissionTypes(_ => data.transmission_type);
            setTransmissionType(prevTransmissionType => prevTransmissionType || data.transmission_type[0])

            setFuelTypes(_ => data.fuel_type);
            setFuelType(prevFuelType => prevFuelType || data.fuel_type[0])

            setDrivetrains(_ => data.drivetrain);
            setDrivetrain(prevDrivetrain => prevDrivetrain || data.drivetrain[0].value)
        }
    }, [data])

    // Observe image
    useEffect(() => {
        if (image) {
            MiscUtils.blobToBase64(image)
                .then((data) => {
                    setImageBeforeCropping(String(data));
                    setShowImageCropper(_ => true)
                })
        }
    }, [image])

    if (isLoading || !isPageReady) return (
        <FormSkeleton />
    )

    else if (error) return (
        <ErrorAlert
            errorMessage={error.message}
            onRefreshHandler={mutate}
        />
    )

    return (
        <>
            <FormWrapper>
                <CustomSelectField
                    items={brands}
                    value={brand}
                    setValue={setBrand}
                    label="Brand"
                />
                <CustomTextField
                    label="Model"
                    setValue={setModel}
                    value={model}
                />
                <CustomSelectField
                    items={bodyTypes}
                    value={bodyType}
                    setValue={setBodyType}
                    label="Body Type"
                />
                <CustomSelectField
                    items={transmissionTypes}
                    value={transmissionType}
                    setValue={setTransmissionType}
                    label="Transmission"
                />
                <CustomSelectField
                    items={fuelTypes}
                    value={fuelType}
                    setValue={setFuelType}
                    label="Fuel Type"
                />
                <CustomSelectField
                    items={drivetrains}
                    value={drivetrain}
                    setValue={setDrivetrain}
                    label="Drivetrain"
                />
                <CustomNumberField
                    label="Year"
                    value={year}
                    setValue={setYear}
                    min={1990}
                    max={currentYear}
                    helpText={`Year should be from 1990 to ${currentYear}`}
                    errorText={`Year should be from 1990 to ${currentYear}`}
                    pattern={Validators.Year}
                />
                <CustomColorField
                    label="Color"
                    value={color}
                    setValue={setColor}
                />
                <CustomNumberField
                    label="Price"
                    value={price}
                    setValue={setPrice}
                />
                <CustomNumberField
                    label="Number of Doors"
                    value={numberOfDoors}
                    setValue={setNumberOfDoors}
                    min={2}
                />
                <CustomNumberField
                    label="Seating Capacity"
                    value={seatingCapacity}
                    setValue={setSeatingCapacity}
                    min={2}
                />
                <CustomTextField
                    label="Engine Capacity"
                    value={engineCapacity}
                    setValue={setEngineCapacity}
                />
            </FormWrapper>
            <CustomTextArea
                label="Description"
                value={description}
                setValue={setDescription}
            />
            {/* Images */}
            <section className="mt-8">
                <h3 className="text-primary font-semibold mb-4">
                    Images
                </h3>
                <CustomFileInput
                    file={image}
                    setFile={setImage}
                    filename={imageName}
                    setFilename={setImageName}
                    accept="image/*"
                    label="Select Image"
                />
                {
                    showImageCropper ? (
                        <ImageCropper
                            aspectRatio={16 / 9}
                            image={imageBeforeCropping}
                            setShowImageCropper={setShowImageCropper}
                            onCropHandler={(croppedImage) => VehicleUtils.onImageCroppedHandler(
                                croppedImage,
                                setImages,
                                setImage,
                                setImageName
                            )}
                        />
                    ) : (
                        Object.keys(images).length > 0 ? (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                                {
                                    Object.keys(images).map((carImageKey, index) => (
                                        <CarImage
                                            key={`${index}_car_image`}
                                            image={images[carImageKey]}
                                            imageKey={carImageKey}
                                            setImages={setImages}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <NoItem text="No Image Added" />
                        )
                    )
                }
            </section>
            {/* Additional Features */}
            <section className="mt-8">
                <h3 className="text-primary font-semibold">
                    Additional Features
                </h3>
                <FormWrapper>
                    <CustomTextField
                        label="Name"
                        value={featureName}
                        setValue={setFeatureName}
                    />
                    <CustomTextField
                        label="Value"
                        value={featureValue}
                        setValue={setFeatureValue}
                    />
                </FormWrapper>
                <div className="flex justify-center">
                    <CustomSmallSecondaryButton
                        text="Add Feature"
                        onPressedHandler={() => VehicleUtils.addFeature(
                            featureName,
                            featureValue,
                            setFeatures
                        )}
                    />
                </div>
                {
                    Object.keys(features).length > 0 ? (
                        <div className="flex gap-4">
                            {
                                Object.keys(features).map((featureName, index) => (
                                    <Feature
                                        key={`${index}_feature`}
                                        name={featureName}
                                        value={features[featureName]}
                                        setFeatures={setFeatures}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <NoItem text="No Feature Added" />
                    )
                }
            </section>
            <CustomButton
                text="Save"
                isLoading={isButtonLoading}
                onPressedHandler={() => VehicleUtils.saveVehicle(
                    brand,
                    model,
                    bodyType,
                    transmissionType,
                    fuelType,
                    drivetrain,
                    year,
                    price,
                    color,
                    numberOfDoors,
                    seatingCapacity,
                    engineCapacity,
                    description,
                    features,
                    images,
                    router,
                    setIsButtonLoading,
                )}
            />
        </>
    );
}

export default VehicleFormPageWrapper