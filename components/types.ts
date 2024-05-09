export type Product = {
  handle: string;
  title: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage?: {
    url: string;
    altText: string;
  };
  descriptionHtml: string;
  variants: ProductVariant[];
  options: ProductOption[];
};

export type Menu = {
  title: string;
  path: string;
};

export type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export type ProductOption = {
  values: string[];
  name: string;
  id: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  availableForSale: boolean;
  selectedOptions: ProductOption[];
};
