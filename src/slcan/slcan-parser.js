// see tests for message examples
export const parseCanMessage = (message) => {
    const isStandardId = message.startsWith("t");
    const isExtendedId = message.startsWith("T");

    if (!isStandardId && !isExtendedId) return undefined;

    const addressEndPosition = isStandardId ? 4 : 9;

    return {
        address: parseInt(message.substring(1, addressEndPosition), 16),
        data: message.substring(addressEndPosition + 1, message.length),
    };
};