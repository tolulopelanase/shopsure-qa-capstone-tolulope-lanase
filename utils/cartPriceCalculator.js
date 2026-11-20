export const parsePriceText = (priceText) => {
    const numericText = String(priceText)
        .replace(/,/g, '')
        .match(/\d+(?:\.\d+)?/);

    if (!numericText) {
        throw new Error('Invalid price text: no valid number found.');
    }

    return Number(numericText[0]);
};

export const calculateLineTotal = (unitPrice, quantity) => {
    if (typeof unitPrice !== 'number' || !Number.isFinite(unitPrice) || unitPrice < 0) {
        throw new Error('Unit price must be a valid non-negative number.');
    }

    if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1) {
        throw new Error('Quantity must be an integer greater than or equal to 1.');
    }

    return unitPrice * quantity;
};

export const calculateCartTotal = (cartItemList) => {
    if (!Array.isArray(cartItemList)) {
        throw new Error('Cart items must be provided as an array.');
    }

    return cartItemList.reduce((total, item) => {
        return total + calculateLineTotal(item.unitPrice, item.quantity);
    }, 0);
};