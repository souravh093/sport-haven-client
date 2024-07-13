import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { FormValues } from "@/types/FormInterface";
import { FaEdit } from "react-icons/fa";

const EditProduct = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClose = () => {
    setOpen(false);
  };

  const uploadImageToImgbb = async (
    imageFile: File
  ): Promise<string | null> => {
    const apiKey = "800d9ccab79ca9e964c7b1edac462750";
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", apiKey || "");

    try {
      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        return result.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, price, brand, category, quantity, description, image } = data;

    let imageUrl = null;
    if (image && image[0]) {
      imageUrl = await uploadImageToImgbb(image[0]);
      if (!imageUrl) {
        toast({
          variant: "destructive",
          description: "Failed to upload image",
        });
        return;
      }
    }

    const formData = {
      name,
      price,
      brand,
      category,
      stockQuantity: quantity,
      description,
      image: imageUrl || product.data.image,
    };

    try {
      const res = await updateProduct({ id, data: formData }).unwrap();

      if (res.success) {
        toast({
          variant: "default",
          description: "Product updated successfully",
        });
        handleClose();
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Failed to update product",
      });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  if (isLoading) return <p>Loading...</p>;

  const { name, price, stockQuantity, image, category, brand, description } =
    product.data;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-primary mr-2">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-gray-800 border border-gray-700 text-white">
        <DialogTitle className="bg-gray-700 text-white"></DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* image */}
          <div className="mb-4">
            <Label htmlFor="image">Image</Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
            {image && (
              <div className="mt-4">
                <img
                  src={selectedImage || image}
                  alt="Selected"
                  className="h-40 w-40 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          {/* product name */}
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name", { required: "Product name is required" })}
              id="name"
              type="text"
              defaultValue={name}
              className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* price */}
          <div className="mb-4">
            <Label htmlFor="price">Price</Label>
            <Input
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              id="price"
              type="number"
              defaultValue={price}
              className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* brand */}
          <div className="mb-4">
            <Label htmlFor="brand">Brand</Label>
            <Controller
              name="brand"
              control={control}
              defaultValue={brand}
              rules={{ required: "Brand is required" }}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-gray-800 text-white border border-gray-600">
                    <SelectValue placeholder="Select a Brand" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border border-gray-600">
                    <SelectGroup>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Adidas"
                      >
                        Adidas
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Nike"
                      >
                        Nike
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Puma"
                      >
                        Puma
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Asdics"
                      >
                        Asdics
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Under Armour"
                      >
                        Under Armour
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Reebok"
                      >
                        Reebok
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="New Balance"
                      >
                        New Balance
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Saucy"
                      >
                        Saucy
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">
                {errors.brand.message}
              </p>
            )}
          </div>

          {/* category */}
          <div className="mb-4">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              defaultValue={category}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-gray-800 text-white border border-gray-600">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border border-gray-600">
                    <SelectGroup>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Running Shoes"
                      >
                        Running Shoes
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Athletic Apparel"
                      >
                        Athletic Apparel
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Fitness Equipment"
                      >
                        Fitness Equipment
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Outdoor Gear"
                      >
                        Outdoor Gear
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Team Sports"
                      >
                        Team Sports
                      </SelectItem>
                      <SelectItem
                        className="text-white hover:bg-gray-600"
                        value="Hiking and Camping"
                      >
                        Hiking and Camping
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* quantity */}
          <div className="mb-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber: true,
              })}
              id="quantity"
              type="number"
              defaultValue={stockQuantity}
              className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          {/* description */}
          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              defaultValue={description}
              rows={8}
              className="bg-gray-900 text-gray-300 placeholder-gray-500 outline-none border-gray-800"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            {isLoading ? "Updating..." : "Update Product"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
