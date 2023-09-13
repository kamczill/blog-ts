export function formatDate(input: string): string {
    const date = new Date(input);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = String(date.getFullYear()).substr(-2); // Last 2 digits of year
  
    return `${day}.${month}.${year}`;
  }