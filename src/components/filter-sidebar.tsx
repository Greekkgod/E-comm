"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Price ranges
const priceRanges = [
  { min: 0, max: 100, label: "Under ₹100" },
  { min: 100, max: 300, label: "₹100 - ₹300" },
  { min: 300, max: 500, label: "₹300 - ₹500" },
  { min: 500, max: 1000, label: "₹500 - ₹1,000" },
  { min: 1000, max: Number.POSITIVE_INFINITY, label: "Above ₹1,000" },
]

// Grocery categories
const categories = ["Fruits", "Vegetables", "Dairy", "Snacks", "Beverages", "Spices", "Milk", "Grocery", "Fresh"]

type FilterSidebarProps = {
  filters: {
    category: string[]
    priceRange: [number, number] | null
  }
  onFilterChange: (filters: { category?: string[], priceRange?: [number, number] | null }) => void
}

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      onFilterChange({
        category: [...filters.category, category],
      })
    } else {
      onFilterChange({
        category: filters.category.filter((c) => c !== category),
      })
    }
  }

  const handlePriceRangeChange = (range: [number, number]) => {
    onFilterChange({ priceRange: range })
  }

  return (
    <div className="border-r w-full pr-4">
      <Accordion type="multiple" defaultValue={["category", "price"]}>
        <AccordionItem value="category" className="border-b">
          <AccordionTrigger className="py-3 text-base font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.category.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="py-3 text-base font-medium">Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {priceRanges.map((range, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`price-${index}`}
                    checked={filters.priceRange?.[0] === range.min && filters.priceRange?.[1] === range.max}
                    onCheckedChange={(checked) =>
                      handlePriceRangeChange(checked ? [range.min, range.max] : [0, Number.POSITIVE_INFINITY])
                    }
                  />
                  <Label htmlFor={`price-${index}`} className="text-sm font-normal cursor-pointer">
                    {range.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}