import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
// import { defaultSort, sorting } from './utils';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };
  // const { sort, q: searchValue } = searchParams as { [key: string]: string };
  // const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });

  const products = [
    {
      handle: '123',
      featuredImage: {
        url: '',
        width: '100',
        height: '100',
        altText: ''
      },
      tags: [],
      seo: {
        description: '',
        title: ''
      },
      description: '',
      title: '',
      availableForSale: true,
      priceRange: {
        minVariantPrice: {
          currencyCode: 'MXN',
          amount: '3'
        },
        maxVariantPrice: {
          currencyCode: 'MXN',
          amount: '5'
        }
      },
      images: [
        {
          url: '',
          altText: 'ALT'
        }
      ]
    }
  ];

  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
