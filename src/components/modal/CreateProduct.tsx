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
import { PlusIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useCreateProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { FormValues } from "@/types/FormInterface";

const CreateProduct = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, price, brand, category, quantity, description, image } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("stockQuantity", quantity.toString());
    formData.append("description", description);

    // Append image file if available
    if (image && image[0]) {
      formData.append("image", image[0]);
    }

    try {
      const res = await createProduct(formData).unwrap();

      if (res.success) {
        reset();
        toast({
          variant: "default",
          description: "Product added successfully",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to add product",
      });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-gray-800 text-gray-400">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl bg-gray-800 border border-gray-700 text-white">
        <DialogTitle className="bg-gray-700 text-white"></DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* image */}
          <div className="mb-4">
            <Label htmlFor="image">Image</Label>
            <Input
              {...register("image", { required: "Image is required" })}
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
            {selectedImage && (
              <div className="mt-4">
                <img
                  src={selectedImage}
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
              placeholder="Enter product name"
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
              placeholder="Enter product price"
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
              placeholder="Enter product quantity"
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
              rows={8}
              placeholder="Enter product description"
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
            {isLoading ? "Adding..." : "Add Product"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
