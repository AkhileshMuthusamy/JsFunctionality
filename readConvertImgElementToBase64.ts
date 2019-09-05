/**
 * HTMLImageElement type is used to make intellisence display repective properties
 */
const img = <HTMLImageElement>document.getElementById('compLogo');
console.log(`Image width: ${img.width} | Image height: ${img.height}`);

/**
 * Convert image to base64 format
 * @param img Provide reference to HTMLImageElemnt
 */
function getBase64Image(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const dataURL = canvas.toDataURL('image/png');
  // console.log(dataURL);
  return dataURL;
}
