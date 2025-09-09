import { randomEightDigitNumber } from "../support/constants"

export function appendTagsWithRandomNumbers(data) {
    const updatedTags = data.map(tag => `${tag}-${randomEightDigitNumber}`);
    return updatedTags.join(',');
}