// Espaces insécables de la typographie française : « : », « ? » ou « » » ne se retrouvent jamais seuls en début de ligne
export const nbsp = (s: string) => s.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ');
