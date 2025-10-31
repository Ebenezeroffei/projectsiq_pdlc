import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import MiscUtils from "../misc/misc_utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { api } from "@/lib/axios_options";
import Endpoints from "../misc/endpoints";

class VehicleUtils {
    static addFeature = (
        name: string,
        value: string,
        setFeatures: Dispatch<SetStateAction<Record<string, string>>>,
    ) => {
        if (name && value) {
            setFeatures(prevFeatures => {
                return { ...prevFeatures, [name]: value }
            });
            toast.info("Feature added");
        }
    }

    static removeFeature = (
        name: string,
        setFeatures: Dispatch<SetStateAction<Record<string, string>>>,
    ) => {
        if (name) {
            setFeatures(prevFeatures => {
                if (prevFeatures[name]) {
                    delete prevFeatures[name];
                }
                return { ...prevFeatures };
            })
            toast.info("Feature deleted");
        }
    }

    static onImageCroppedHandler = (
        image: Blob,
        setImages: Dispatch<SetStateAction<Record<string, string>>>,
        setImage: Dispatch<SetStateAction<Blob | null>>,
        setImageName: Dispatch<SetStateAction<string>>,
    ) => {
        const reader = new FileReader();
        MiscUtils.blobToBase64(image)
            .then((data) => {
                setImages(prevImages => {
                    return { ...prevImages, [MiscUtils.generateRandomNumber(10)]: data }
                });
                setImage(_ => null);
                setImageName(_ => '');
                (document.querySelector('#select-image') as HTMLInputElement).value = ''
            })
    }

    static removeCarImage = (
        imageKey: string,
        setImages: Dispatch<SetStateAction<Record<string, string>>>,
    ) => {
        if (imageKey) {
            setImages(prevImages => {
                if (prevImages[imageKey]) {
                    delete prevImages[imageKey];
                }
                return { ...prevImages };
            })
            toast.info("Feature deleted");
        }
    }

    static saveVehicle = async (
        brand: string,
        model: string,
        bodyType: string,
        transmission: string,
        fuelType: string,
        drivetrain: string,
        year: string,
        price: string,
        color: string,
        numberOfDoors: string,
        seatingCapacity: string,
        engineCapacity: string,
        description: string,
        features: Record<string, string>,
        images: Record<string, string>,
        router: AppRouterInstance,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    ) => {
        const currentYear = new Date().getFullYear();
        if (model && year && Number(year) <= currentYear && Number(price) > 0 && color && Number(numberOfDoors) > 0 && Number(seatingCapacity) > 0 && engineCapacity && description && Object.keys(images).length > 0) {
            const hasInternet = await MiscUtils.checkNetworkStatus();
            if (hasInternet) {
                try {
                    setIsButtonLoading(_ => true)
                    const imagesData = Object.values(images).map(value => ({
                        image: value
                    }))
                    const data = {
                        brand,
                        model,
                        description,
                        year,
                        color,
                        transmission,
                        drivetrain,
                        price,
                        features,
                        number_of_doors: numberOfDoors,
                        seating_capacity: seatingCapacity,
                        engine_capacity: engineCapacity,
                        body_type: bodyType,
                        fuel_type: fuelType,
                        images: imagesData
                    }
                    const headers = await MiscUtils.generateHeaders();
                    api.post(Endpoints.cars.listOrCreate, data, {
                        headers
                    });
                    toast.success("Car details saved");
                    router.push('/admin/vehicles');
                }
                catch (err) {
                    await MiscUtils.evaluateError(err);
                }
                finally {
                    setIsButtonLoading(_ => false);
                }
            }
        }
    }
}

export default VehicleUtils;