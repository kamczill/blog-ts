export function truncateToMaxWords(input: string, maxWords: number) {
    const words = input.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return input;
  }