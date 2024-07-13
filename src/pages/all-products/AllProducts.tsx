import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  SearchIcon,
  ListOrderedIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react";

import ProductCard from "@/components/card/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Container from "@/components/shared/Container";
import { TProduct } from "@/types/ProductInterface";
import { useLocation } from "react-router-dom";

const priceRanges = [
  { min: 0, max: 50, label: "$0 - $50" },
  { min: 51, max: 100, label: "$51 - $100" },
  { min: 101, max: 200, label: "$101 - $200" },
  { min: 201, max: 500, label: "$201 - $500" },
  { min: 501, max: 1000, label: "$501 - $1000" },
];

const AllProducts = () => {
  const location = useLocation();
  const category = location.state?.category;

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<{
    category: string[];
    price: { min: number | null; max: number | null };
    brand: string[];
    rating: number | null;
  }>({
    category: [
      ...(category ? [category] : []),
    ],
    price: { min: null, max: null },
    brand: [],
    rating: null,
  });

  const [sortOrder, setSortOrder] = useState("asc");

  const { data: products, isLoading } = useGetAllProductsQuery({
    searchTerm,
    sort: sortOrder,
    filters: {
      ...filters,
      price: {
        ...(filters.price.min !== null && { min: filters.price.min }),
        ...(filters.price.max !== null && { max: filters.price.max }),
      },
      rating: filters.rating !== null ? filters.rating : undefined,
    },
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: prevFilters.category.includes(category)
        ? prevFilters.category.filter((c) => c !== category)
        : [...prevFilters.category, category],
    }));
  };

  const handleBrandFilter = (brand: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: prevFilters.brand.includes(brand)
        ? prevFilters.brand.filter((b) => b !== brand)
        : [...prevFilters.brand, brand],
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      price: { min: 0, max: Infinity },
      rating: 0,
    });
  };

  const handleSortOrder = (order: string) => {
    setSortOrder(order);
  };

  const handlePriceFilter = (minPrice: number, maxPrice: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        min: minPrice,
        max: maxPrice,
      },
    }));
  };

  const handleRatingFilter = (rating: number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: prevFilters.rating === rating ? null : rating,
    }));
  };

  return (
    <div className=" px-4 md:px-6 py-8 bg-gray-900 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Sports Goods</h1>
          <div className="relative w-full md:w-auto">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 rounded-md w-full md:w-64 bg-gray-800 text-white border-gray-700"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          <div className="bg-gray-800 rounded-md shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="text-base font-medium mb-2">Category</h3>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Running Shoes")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Running Shoes")
                      }
                    />
                    Running Shoes
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Athletic Apparel")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Athletic Apparel")
                      }
                    />
                    Athletic Apparel
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Fitness Equipment")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Fitness Equipment")
                      }
                    />
                    Fitness Equipment
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Outdoor Gear")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Outdoor Gear")
                      }
                    />
                    Outdoor Gear
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Team Sports")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Team Sports")
                      }
                    />
                    Team Sports
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.category.includes("Hiking and Camping")}
                      onCheckedChange={() =>
                        handleCategoryFilter("Hiking and Camping")
                      }
                    />
                    Hiking and Camping
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <Label
                      key={`${range.min}-${range.max}`}
                      className="flex items-center gap-2"
                    >
                      <Checkbox
                        checked={
                          filters.price.min === range.min &&
                          filters.price.max === range.max
                        }
                        onCheckedChange={() =>
                          handlePriceFilter(range.min, range.max)
                        }
                      />
                      {range.label}
                    </Label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Brand</h3>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Adidas")}
                      onCheckedChange={() => handleBrandFilter("Adidas")}
                    />
                    Adidas
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Nike")}
                      onCheckedChange={() => handleBrandFilter("Nike")}
                    />
                    Nike
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Puma")}
                      onCheckedChange={() => handleBrandFilter("Puma")}
                    />
                    Puma
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Asdics")}
                      onCheckedChange={() => handleBrandFilter("Asdics")}
                    />
                    Asdics
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Under Armour")}
                      onCheckedChange={() => handleBrandFilter("Under Armour")}
                    />
                    Under Armour
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Reebok")}
                      onCheckedChange={() => handleBrandFilter("Reebok")}
                    />
                    Reebok
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("New Balance")}
                      onCheckedChange={() => handleBrandFilter("New Balance")}
                    />
                    New Balance
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox
                      checked={filters.brand.includes("Saucy")}
                      onCheckedChange={() => handleBrandFilter("Saucy")}
                    />
                    Saucy
                  </Label>
                </div>
              </div>
              <div>
                <h3 className="text-base font-medium mb-2">Rating</h3>
                <div className="flex flex-col gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Label key={star} className="flex items-center gap-2">
                      <Checkbox
                        checked={filters.rating === star}
                        onCheckedChange={() => handleRatingFilter(star)}
                      />
                      {star} Star
                    </Label>
                  ))}
                </div>
              </div>
              <Button
                onClick={handleClearFilters}
                className="bg-gray-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-800 hover:text-gray-400"
                  asChild
                >
                  <Button
                    variant="outline"
                    className="gap-2 border-gray-700 text-white"
                  >
                    <ListOrderedIcon className="w-4 h-4" />
                    Sort by Price
                    {sortOrder === "asc" ? (
                      <ArrowUpIcon className="w-4 h-4" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-gray-800 border-gray-700 text-white "
                >
                  <DropdownMenuRadioGroup
                    value={sortOrder}
                    onValueChange={handleSortOrder}
                    className="hover:bg-gray-800"
                  >
                    <DropdownMenuRadioItem value="asc">
                      Price: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="desc">
                      Price: High to Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              {products?.data.length < 1 ? (
                <p className="text-gray-400 text-4xl font-bold flex items-center min-h-screen justify-center">
                  No products found
                </p>
              ) : isLoading ? (
                <div className="flex items-center justify-center min-h-screen bg-gray-900">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-50"></div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {products?.data?.map((product: TProduct) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
