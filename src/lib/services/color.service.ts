import { Colors } from '../enums/colors.enum'

type ColorsMap = {[color in Colors]: string};

const colorsMap: ColorsMap = {
  [Colors.White]: 'bg-white text-black',
  [Colors.Black]: 'bg-black text-white border-black',
  [Colors.Blue]: 'bg-blue text-black',
  [Colors.Yellow]: 'bg-yellow text-black',
  [Colors.Pink]: 'bg-pink text-black',
  [Colors.Orange]: 'bg-orange text-black',
  [Colors.Green]: 'bg-green text-black',
  [Colors.Gray]: 'bg-gray text-black',
}

export const getColorClass = (color: Colors): string => {
  return colorsMap[color];
}