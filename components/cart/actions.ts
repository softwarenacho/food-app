'use server';

import { cookies } from 'next/headers';

export async function addItem(prevState: any, selectedVariantId: string | undefined) {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    // revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, lineId: string) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    await removeFromCart(cartId, [lineId]);
    // revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string;
    variantId: string;
    quantity: number;
  }
) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { lineId, variantId, quantity } = payload;

  try {
    if (quantity === 0) {
      await removeFromCart(cartId, [lineId]);
      // revalidateTag(TAGS.cart);
      return;
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity
      }
    ]);
    // revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error updating item quantity';
  }
}
function getCart(cartId: string) {
  return { id: cartId };
}

function createCart() {
  return { id: '1' };
}

function addToCart(cartId: string, arg1: { merchandiseId: string; quantity: number }[]) {
  return { id: cartId, arg: arg1 };
}

function removeFromCart(cartId: string, arg1: string[]) {
  return { id: cartId, arg: arg1 };
}

function updateCart(
  cartId: string,
  arg1: { id: string; merchandiseId: string; quantity: number }[]
) {
  return { id: cartId, arg: arg1 };
}
