export const raitingColors = (rate: number) => {
  switch (true) {
    case rate >= 8:
      return "text-green-400";

    case rate >= 6:
      return "text-orange-400";

    default:
      return "text-red-400";
  }
};
